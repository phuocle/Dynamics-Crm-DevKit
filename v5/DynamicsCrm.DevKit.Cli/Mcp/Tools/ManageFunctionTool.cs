using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Function;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageFunctionTool : McpToolBase
    {
        private readonly IOrganizationService _orgService;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageFunctionTool(IOrganizationService orgService, McpDryRunOptions options, McpExecutionContext context)
        {
            _orgService = orgService;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_function",
            Title = "Manage Dataverse Power Fx functions",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageFunctionResult)),
        Description(
            "Manage Dataverse Power Fx functions — Custom APIs linked to an FxExpression. Actions: 'list', 'detail', 'validate' (read-only) | 'invoke' (executes the function; may change data; never retried automatically after timeout). Authoring actions ('create', 'update', 'delete') are gated: the public API cannot yet bind input parameters to the formula (the fxexpression.parameters serialization format is not a published contract), and deleting the Custom API orphans the expression — use the maker portal Functions area or solution ALM for authoring. 'invoke' passes arguments converted per the declared signature; unknown names, missing required inputs, and non-scalar types are rejected.\n\n" +
            "WHEN TO USE:\n" +
            "- Discover Power Fx functions and inspect formula, signature, binding, and compile state\n" +
            "- Invoke a resolved function with typed arguments and read the real outputs\n\n" +
            "RELATED TOOLS:\n" +
            "- get_custom_apis → every Custom API, with or without an expression\n" +
            "- get_solution_components → verify a function's solution membership")]
        public CallToolResult manage_function(
            [Description("'list', 'detail', 'validate', 'invoke'. 'create'/'update'/'delete' are gated.")] string action = "",
            [Description("Display name, unique name, or GUID (customapiid) of the Custom API. Required: detail/validate/invoke.")] string function_name = "",
            [Description("Unique/display name. 'list': filter by solution membership.")] string solution_name = "",
            [Description("'validate' only: DevKit definition JSON to cross-check against metadata.")] string definition_json = "",
            [Description("'invoke' only: JSON object of {\"inputName\": value} per the declared signature.")] string arguments_json = "",
            [Description("'invoke' only: record GUID for entity-bound functions (bindingtype=Entity).")] string record_id = "",
            [Description("'list' only. ≤0 → 50, >500 → 500.")] int max_records = 50,
            [Description("'list' only. Include managed (solution-imported) functions.")] bool include_managed = false)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", $"Valid values: {FunctionMetadataReader.SupportedActions}.");

                var normalizedAction = action.Trim().ToLowerInvariant();

                return normalizedAction switch
                {
                    "list" => HandleList(solution_name, max_records, include_managed),
                    "detail" => HandleDetail(function_name),
                    "validate" => HandleValidate(function_name, definition_json),
                    "invoke" => HandleInvoke(function_name, arguments_json, record_id),
                    "create" or "update" or "delete" => HandleAuthoringGate(normalizedAction),
                    _ => Error($"Invalid action '{action}'.", $"Valid values: {FunctionMetadataReader.SupportedActions}.")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult HandleAuthoringGate(string action)
        {
            var reason = action switch
            {
                "create" => "the public API cannot yet bind input parameters to the formula (the fxexpression.parameters serialization format is not a published contract)",
                "update" => "a formula patch cannot guarantee the parameter binding stays consistent with the declared signature",
                _ => "deleting the Custom API leaves the linked FxExpression orphaned (RemoveLink), and the full cleanup contract is not verified"
            };
            return Error(
                $"action='{action}' is not available yet: {reason}.",
                $"Author functions in the maker portal (solution → New → Automation → Function) or through solution ALM. Available actions: {FunctionMetadataReader.SupportedActions}.");
        }

        private CallToolResult HandleList(string solutionName, int maxRecords, bool includeManaged)
        {
            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 500) maxRecords = 500;

            var solutionFilter = (string)null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_orgService, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return Error(solResult.Error.Split("\r\n")[0], "Use get_solution_components to find valid solution names.");
                solutionFilter = solResult.UniqueName;
            }

            var candidates = FunctionMetadataReader.QueryFunctionCandidates(_orgService, maxRecords, includeManaged);
            var rows = candidates.Entities.ToList();

            var hasMore = rows.Count > maxRecords;
            if (hasMore)
                rows = rows.Take(maxRecords).ToList();

            var memberIds = solutionFilter == null
                ? null
                : FunctionMetadataReader.QuerySolutionMemberIds(_orgService, solutionFilter);

            var functions = rows
                .Where(e => memberIds == null || memberIds.Contains(e.Id))
                .Select(MapListEntry)
                .ToList();

            var structured = new ManageFunctionResult
            {
                Action = "list",
                Count = functions.Count,
                HasMore = hasMore,
                SolutionFilter = solutionFilter,
                Functions = functions.Count > 0 ? functions : null
            };

            var summary = functions.Count == 0
                ? (solutionFilter == null
                    ? "No Power Fx functions found (Custom APIs with a linked FxExpression)."
                    : $"No Power Fx functions found in solution '{solutionFilter}'.")
                : $"{functions.Count} function(s)" + (solutionFilter == null ? "" : $" in solution '{solutionFilter}'") + (hasMore ? " (more available — raise max_records)." : ".");
            return Success(summary, structured);
        }

        private static FunctionEntry MapListEntry(Entity e)
        {
            var bindingValue = e.GetAttributeValue<OptionSetValue>("bindingtype")?.Value ?? 0;
            return new FunctionEntry
            {
                CustomApiId = e.Id.ToString(),
                UniqueName = e.GetAttributeValue<string>("uniquename") ?? "",
                DisplayName = NullIfEmpty(e.GetAttributeValue<string>("displayname")),
                IsFunction = e.GetAttributeValue<bool>("isfunction"),
                BindingType = FunctionMetadataReader.MapBindingType(bindingValue),
                BoundEntity = NullIfEmpty(e.GetAttributeValue<string>("boundentitylogicalname")),
                IsManaged = e.GetAttributeValue<bool>("ismanaged"),
                Status = FunctionMetadataReader.MapStatus(e.GetAttributeValue<OptionSetValue>("statuscode"))
            };
        }

        private CallToolResult HandleDetail(string functionName)
        {
            var resolved = ResolveFunction(functionName);
            if (resolved != null) return resolved;

            var graph = FunctionMetadataReader.ReadGraph(_orgService, _resolvedApi.Id);
            var structured = BuildGraphResult("detail", graph, out var warnings);

            var inputCount = structured.Inputs?.Count ?? 0;
            var outputCount = structured.Outputs?.Count ?? 0;
            var summary = $"Function '{structured.FunctionName}': {inputCount} input(s), {outputCount} output(s), " +
                          (graph.HasExpression ? (structured.CompiledPresent == true ? "compiled." : "expression present, not compiled.") : "no linked FxExpression.");
            if (warnings.Count > 0)
                summary += $" {warnings.Count} warning(s).";
            return Success(summary, structured);
        }

        private CallToolResult HandleValidate(string functionName, string definitionJson)
        {
            var resolved = ResolveFunction(functionName);
            if (resolved != null) return resolved;

            var graph = FunctionMetadataReader.ReadGraph(_orgService, _resolvedApi.Id);
            var structured = BuildGraphResult("validate", graph, out var warnings);
            structured.ValidationLevel = "structural+metadata";
            structured.ServerValidated = structured.CompiledPresent;
            structured.Issues = [];
            structured.Status = "valid";

            // Metadata checks — report platform facts, never infer beyond them.
            if (!graph.HasExpression)
                structured.Issues.Add("No FxExpression is linked to this Custom API.");
            else
            {
                if (string.IsNullOrWhiteSpace(graph.Expression.GetAttributeValue<string>("expression")))
                    structured.Issues.Add("The linked FxExpression has an empty expression.");
                if (structured.CompiledPresent != true)
                    structured.Issues.Add("The FxExpression has no compiledexpression — the platform has not compiled this formula.");

                var boundEntity = graph.Api.GetAttributeValue<string>("boundentitylogicalname");
                var bindingValue = graph.Api.GetAttributeValue<OptionSetValue>("bindingtype")?.Value ?? 0;
                if (bindingValue == 1 && string.IsNullOrWhiteSpace(boundEntity))
                    structured.Issues.Add("bindingtype=Entity but boundentitylogicalname is empty.");
            }

            var declaredInputs = structured.Inputs ?? [];
            foreach (var input in declaredInputs.Where(p => !FunctionMetadataReader.InvokableTypes.Contains(p.Type)))
                structured.Issues.Add($"Input '{input.Name}' has type '{input.Type}' — manage_function invoke cannot convert it.");

            // Optional structural cross-check of a DevKit definition against metadata.
            if (!string.IsNullOrWhiteSpace(definitionJson))
            {
                if (!FunctionDefinitionValidator.TryValidate(definitionJson, out var definitionIssues, out var definition))
                {
                    structured.Issues.AddRange(definitionIssues);
                }
                else
                {
                    var formula = GetString(definition, "formula");
                    if (formula != null &&
                        !string.Equals(formula.Trim(), (graph.Expression?.GetAttributeValue<string>("expression") ?? "").Trim(), StringComparison.Ordinal))
                        structured.Issues.Add("definition_json.formula differs from the stored expression.");

                    CrossCheckParameters(definition, "inputs", declaredInputs, structured.Issues);
                    CrossCheckParameters(definition, "outputs", structured.Outputs ?? [], structured.Issues);
                }
            }

            if (structured.Issues.Count > 0)
                structured.Status = "invalid";

            var summary = $"Validation of '{structured.FunctionName}': {structured.Status} " +
                          $"(validationLevel={structured.ValidationLevel}, serverValidated={structured.ServerValidated?.ToString()?.ToLowerInvariant()}, {structured.Issues.Count} issue(s)).";
            return Success(summary, structured);
        }

        private static void CrossCheckParameters(JsonElement definition, string listKey, List<FunctionParameterEntry> declared, List<string> issues)
        {
            if (!definition.TryGetProperty(listKey, out var list) || list.ValueKind != JsonValueKind.Array) return;

            var declaredByName = declared.ToDictionary(p => p.Name, StringComparer.OrdinalIgnoreCase);
            var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var item in list.EnumerateArray())
            {
                var name = item.TryGetProperty("name", out var n) && n.ValueKind == JsonValueKind.String ? n.GetString() : null;
                if (string.IsNullOrWhiteSpace(name)) continue;
                if (!declaredByName.TryGetValue(name, out var existing))
                {
                    issues.Add($"definition_json.{listKey} contains '{name}', which has no matching Custom API {(listKey == "inputs" ? "request parameter" : "response property")}.");
                    continue;
                }
                seen.Add(name);

                var type = item.TryGetProperty("type", out var t) && t.ValueKind == JsonValueKind.String ? t.GetString() : null;
                if (!string.IsNullOrWhiteSpace(type) &&
                    !string.Equals(MapDefinitionTypeToApiType(type), existing.Type, StringComparison.OrdinalIgnoreCase))
                    issues.Add($"definition_json.{listKey}[{name}] type '{type}' maps to '{MapDefinitionTypeToApiType(type)}' but the Custom API declares '{existing.Type}'.");
            }

            if (listKey == "inputs")
            {
                foreach (var missing in declared.Where(p => !seen.Contains(p.Name)))
                    issues.Add($"Declared input '{missing.Name}' ({missing.Type}) is missing from definition_json.inputs.");
            }
        }

        private static string MapDefinitionTypeToApiType(string definitionType) => definitionType?.Trim().ToLowerInvariant() switch
        {
            "boolean" => "Boolean",
            "datetime" => "DateTime",
            "decimal" => "Decimal",
            "float" => "Float",
            "integer" => "Integer",
            "string" => "String",
            _ => definitionType
        };

        private CallToolResult HandleInvoke(string functionName, string argumentsJson, string recordId)
        {
            var resolved = ResolveFunction(functionName);
            if (resolved != null) return resolved;

            var graph = FunctionMetadataReader.ReadGraph(_orgService, _resolvedApi.Id);

            var uniqueName = graph.Api.GetAttributeValue<string>("uniquename");
            var boundEntity = graph.Api.GetAttributeValue<string>("boundentitylogicalname");
            var bindingValue = graph.Api.GetAttributeValue<OptionSetValue>("bindingtype")?.Value ?? 0;
            if (bindingValue == 2)
                return Error("Invoking EntityCollection-bound functions is not supported by manage_function.",
                    "Only Global and Entity bindings can be invoked. Check get_custom_apis for the binding type.");

            FunctionInvoker.InvocationPlan plan;
            try
            {
                plan = FunctionInvoker.BuildPlan(uniqueName,
                    FunctionMetadataReader.MapBindingType(bindingValue), boundEntity,
                    graph.RequestParameters, argumentsJson, recordId);
            }
            catch (ArgumentException ex)
            {
                return Error(ex.Message, "Read the signature with manage_function(action='detail') and align arguments_json with it.");
            }

            if (_options.DryRun)
                return DryRun($"Would invoke function '{uniqueName}' with {plan.ConvertedArguments.Count} argument(s).",
                    new ManageFunctionResult
                    {
                        Action = "invoke",
                        Status = "not_executed",
                        FunctionName = uniqueName,
                        CustomApiId = graph.Api.Id.ToString(),
                        FxExpressionId = graph.Expression?.Id.ToString(),
                        Invoked = false,
                        Warnings = plan.Warnings.Count > 0 ? plan.Warnings : null,
                        InvocationOutputs = null
                    });

            var request = FunctionInvoker.BuildRequest(plan);
            var stopwatch = Stopwatch.StartNew();
            OrganizationResponse response;
            try
            {
                response = DataverseMutationExecutor.Execute(_context, _orgService, request);
            }
            catch (Exception ex) when (ex is TimeoutException)
            {
                return Error(
                    $"Invocation of '{uniqueName}' timed out. The first attempt may already have committed server-side.",
                    "Do not retry automatically — check the effect of the function in Dataverse before invoking again.");
            }
            stopwatch.Stop();

            var outputs = FunctionInvoker.MapResponse(response);
            var structured = new ManageFunctionResult
            {
                Action = "invoke",
                Status = "executed",
                FunctionName = uniqueName,
                CustomApiId = graph.Api.Id.ToString(),
                FxExpressionId = graph.Expression?.Id.ToString(),
                Invoked = true,
                Warnings = plan.Warnings.Count > 0 ? plan.Warnings : null,
                InvocationOutputs = outputs.Count > 0 ? outputs : null,
                DurationMs = stopwatch.ElapsedMilliseconds
            };

            var summary = $"Invoked function '{uniqueName}'" +
                          (plan.ConvertedArguments.Count > 0 ? $" with {plan.ConvertedArguments.Count} argument(s)" : "") +
                          $" in {stopwatch.ElapsedMilliseconds} ms" +
                          (outputs.Count > 0 ? $"; outputs: {string.Join(", ", outputs.Keys.OrderBy(k => k, StringComparer.Ordinal))}." : "; no outputs.");
            return Success(summary, structured);
        }

        private Entity _resolvedApi;

        private CallToolResult ResolveFunction(string functionName)
        {
            if (string.IsNullOrWhiteSpace(functionName))
                return Error("function_name is required.",
                    $"Use manage_function(action='list') to discover functions. Available actions: {FunctionMetadataReader.SupportedActions}.");

            var resolved = FunctionResolver.Resolve(_orgService, functionName, "manage_function");
            if (resolved.IsSuccess)
            {
                _resolvedApi = resolved.Value;
                return null;
            }

            return Error(
                resolved.Error.Split("\r\n")[0],
                resolved.Status == ResolveStatus.Ambiguous
                    ? "Re-call with a more specific function_name value."
                    : "Use manage_function(action='list') to discover available functions.",
                resolved.Status == ResolveStatus.Ambiguous && resolved.Candidates?.Count > 0
                    ? resolved.Candidates.Select(c => new
                    {
                        displayName = c.DisplayName,
                        uniqueName = c.UniqueName,
                        id = c.Id?.ToString()
                    }).ToList()
                    : null);
        }

        private ManageFunctionResult BuildGraphResult(string action, FunctionGraph graph, out List<string> warnings)
        {
            warnings = [];
            var api = graph.Api;

            var result = new ManageFunctionResult
            {
                Action = action,
                FunctionName = api.GetAttributeValue<string>("uniquename") ?? "",
                DisplayName = NullIfEmpty(api.GetAttributeValue<string>("displayname")),
                Description = NullIfEmpty(api.GetAttributeValue<string>("description")),
                CustomApiId = api.Id.ToString(),
                FxExpressionId = graph.Expression?.Id.ToString(),
                IsFunction = api.GetAttributeValue<bool>("isfunction"),
                BindingType = FunctionMetadataReader.MapBindingType(api.GetAttributeValue<OptionSetValue>("bindingtype")?.Value ?? 0),
                BoundEntity = NullIfEmpty(api.GetAttributeValue<string>("boundentitylogicalname")),
                IsManaged = api.GetAttributeValue<bool>("ismanaged"),
                SolutionId = api.GetAttributeValue<Guid?>("solutionid")?.ToString(),
                CreatedOn = api.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd"),
                ModifiedOn = api.GetAttributeValue<DateTime?>("modifiedon")?.ToString("yyyy-MM-dd"),
                Inputs = graph.RequestParameters.Select(MapParameter).ToList(),
                Outputs = graph.ResponseProperties.Select(MapParameter).ToList()
            };
            if (result.Inputs.Count == 0) result.Inputs = null;
            if (result.Outputs.Count == 0) result.Outputs = null;

            if (graph.HasExpression)
            {
                result.Expression = graph.Expression.GetAttributeValue<string>("expression");
                var compiled = graph.Expression.GetAttributeValue<string>("compiledexpression");
                result.CompiledPresent = !string.IsNullOrWhiteSpace(compiled);
                result.Context = NullIfEmpty(graph.Expression.GetAttributeValue<string>("context"));
                result.Dependencies = NullIfEmpty(graph.Expression.GetAttributeValue<string>("dependencies"));
            }
            else
            {
                warnings.Add("No FxExpression is linked to this Custom API — it is not a Power Fx function graph.");
            }

            if (!result.IsFunction.Value)
                warnings.Add("Custom API isfunction=false — it may be a C# Custom API or a legacy expression rather than an instant function.");

            if (graph.SharedStepCount > 1)
                warnings.Add($"The FxExpression is referenced by {graph.SharedStepCount} sdk message processing step(s) (1 is the platform-created invocation step) — treat it as shared with automated processing.");

            foreach (var input in (result.Inputs ?? []).Where(p => !FunctionMetadataReader.InvokableTypes.Contains(p.Type)))
                warnings.Add($"Input '{input.Name}' has type '{input.Type}' — manage_function invoke cannot convert it.");

            if (warnings.Count > 0)
                result.Warnings = warnings;
            return result;
        }

        private static FunctionParameterEntry MapParameter(Entity row)
        {
            var typeValue = row.GetAttributeValue<OptionSetValue>("type")?.Value ?? -1;
            return new FunctionParameterEntry
            {
                Name = row.GetAttributeValue<string>("uniquename")
                       ?? row.GetAttributeValue<string>("name") ?? "",
                Type = FunctionMetadataReader.MapParameterType(typeValue),
                IsOptional = row.Contains("isoptional") ? row.GetAttributeValue<bool>("isoptional") : null,
                Description = NullIfEmpty(row.GetAttributeValue<string>("description"))
            };
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string GetString(JsonElement element, string key)
        {
            if (!element.TryGetProperty(key, out var value) || value.ValueKind != JsonValueKind.String)
                return null;
            return value.GetString();
        }
    }
}
