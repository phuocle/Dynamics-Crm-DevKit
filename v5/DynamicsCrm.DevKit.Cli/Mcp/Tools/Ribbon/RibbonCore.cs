using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public partial class ManageRibbonTool
    {
        // ── Entity name resolution ───────────────────────────────────────

        private (string LogicalName, string Error) ResolveEntityLogicalName(string entityName)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return (null, "entity_name is required.");
            var result = DisplayNameFirstResolver.ResolveEntity(_serviceClient, entityName.Trim(), "manage_ribbon");
            return result.IsSuccess
                ? (result.Value.LogicalName, null)
                : (null, $"entity_name '{entityName.Trim()}': {result.Error}");
        }

        // ── Busy-environment gate (blocks ribbon action while a solution job runs) ──

        private CallToolResult TryBlockRibbonReadbackWhenBusy(string action, string entityName)
            => TryBlockRibbonActionWhenBusy(action, entityName, isReadback: true);

        private CallToolResult TryBlockRibbonActionWhenBusy(string action, string entityName, bool isReadback)
        {
            var activeJob = FindActiveSolutionJob();
            if (activeJob == null)
                return null;

            var jobId = activeJob.Id.ToString();
            var operationType = GetRibbonJobOperationType(activeJob);
            var status = MapAsyncStatus(activeJob.GetAttributeValue<OptionSetValue>("statuscode")?.Value ?? 0);
            var name = activeJob.GetAttributeValue<string>("name") ?? operationType;
            var startedOn = activeJob.GetAttributeValue<DateTime?>("startedon")?.ToString("yyyy-MM-dd HH:mm:ss") ?? "";

            var sb = new StringBuilder();
            sb.AppendLine($"manage_ribbon {action} — {entityName}");
            sb.AppendLine("Status: environment_busy");
            sb.AppendLine($"ActiveJob: {name}");
            sb.AppendLine($"OperationType: {operationType}");
            sb.AppendLine($"JobStatus: {status}");
            if (!string.IsNullOrWhiteSpace(startedOn))
                sb.AppendLine($"StartedOn: {startedOn}");
            sb.AppendLine($"AsyncOperationId: {jobId}");
            sb.AppendLine(isReadback
                ? "Ribbon readback is blocked because a solution import/export or PublishAll job is still active."
                : "Ribbon update/undo is blocked because a solution import/export or PublishAll job is still active.");
            sb.AppendLine($"Wait first: get_system_jobs(record_id=\"{jobId}\")");
            AppendPublishWaitGuidance(sb);

            return Success(sb.ToString(), new ManageRibbonResult
            {
                Action = action,
                EntityName = entityName,
                Status = "environment_busy",
                Published = false,
                AsyncOperationId = jobId,
                NeedsWait = true,
                WaitTool = "get_system_jobs",
                PollAfterSeconds = 30,
                PollScheduleSeconds = NewPublishPollScheduleSeconds(),
                MaxPollAttempts = PublishMaxPollAttempts,
                MaxWaitSeconds = PublishMaxWaitSeconds,
                ReadbackAllowed = false,
                NextAllowedActions = new List<string> { "get_system_jobs" },
                WaitReason = "A solution import/export or PublishAll job is still active. Wait for it to finish before touching the ribbon.",
                WaitTimeoutAction = PublishWaitTimeoutAction,
                WaitTimeoutInstruction = PublishWaitTimeoutInstruction
            });
        }

        private Entity FindActiveSolutionJob()
        {
            var query = new QueryExpression("asyncoperation")
            {
                ColumnSet = new ColumnSet("name", "messagename", "operationtype", "statuscode", "startedon")
            };

            var solutionJobFilter = new FilterExpression(LogicalOperator.Or);
            solutionJobFilter.AddCondition("operationtype", ConditionOperator.In, 202, 203, 204);

            var publishAllAsyncFilter = new FilterExpression(LogicalOperator.And);
            publishAllAsyncFilter.AddCondition("operationtype", ConditionOperator.Equal, 54);
            var publishAllNameFilter = new FilterExpression(LogicalOperator.Or);
            publishAllNameFilter.AddCondition("messagename", ConditionOperator.Equal, "PublishAllAsync");
            publishAllNameFilter.AddCondition("name", ConditionOperator.Like, "%PublishAll%");
            publishAllAsyncFilter.Filters.Add(publishAllNameFilter);
            solutionJobFilter.Filters.Add(publishAllAsyncFilter);

            query.Criteria.Filters.Add(solutionJobFilter);
            query.Criteria.AddCondition("statuscode", ConditionOperator.In, 0, 10, 20, 21, 22);
            query.Criteria.AddCondition("startedon", ConditionOperator.OnOrAfter, DateTime.UtcNow.AddMinutes(-60));
            query.AddOrder("startedon", OrderType.Descending);

            return _serviceClient.RetrieveMultiple(query).Entities.FirstOrDefault();
        }

        private static string GetRibbonJobOperationType(Entity job)
        {
            var operationType = job.GetAttributeValue<OptionSetValue>("operationtype")?.Value ?? 0;
            var messageName = job.GetAttributeValue<string>("messagename") ?? "";
            var name = job.GetAttributeValue<string>("name") ?? "";
            if (operationType == 54 &&
                (messageName.Equals("PublishAllAsync", StringComparison.OrdinalIgnoreCase) ||
                 name.IndexOf("PublishAll", StringComparison.OrdinalIgnoreCase) >= 0))
            {
                return "PublishAll";
            }

            return MapAsyncOperationType(operationType);
        }

        private static string MapAsyncOperationType(int value) => value switch
        {
            202 => "ExportSolution",
            203 => "ImportSolution",
            204 => "PublishAll",
            54 => "CustomAction",
            _ => $"System({value})"
        };

        private static string MapAsyncStatus(int value) => value switch
        {
            0 => "WaitingForResources",
            10 => "Waiting",
            20 => "InProgress",
            21 => "Pausing",
            22 => "Canceling",
            30 => "Succeeded",
            31 => "Failed",
            32 => "Canceled",
            _ => value.ToString()
        };

        // ── Operation web-resource name normalization ────────────────────

        private (List<JsonElement> Operations, List<string> Errors) NormalizeOperationWebResources(List<JsonElement> ops)
        {
            var errors = new List<string>();
            var normalized = new List<JsonElement>(ops.Count);

            for (var i = 0; i < ops.Count; i++)
            {
                var node = JsonNode.Parse(ops[i].GetRawText());
                if (node == null)
                {
                    normalized.Add(ops[i].Clone());
                    continue;
                }

                NormalizeWebResourceProperties(node, null, errors, $"operations[{i}]");
                normalized.Add(ToJsonElement(node));
            }

            return (normalized, errors);
        }

        private void NormalizeWebResourceProperties(JsonNode node, string propertyName, List<string> errors, string path)
        {
            if (node == null) return;

            if (node is JsonValue value &&
                IsWebResourceOperationProperty(propertyName) &&
                value.TryGetValue<string>(out var text) &&
                !string.IsNullOrWhiteSpace(text))
            {
                var resolved = ResolveWebResourceName(text, errors, path);
                node.ReplaceWith(JsonValue.Create(resolved));
                return;
            }

            if (node is JsonArray array)
            {
                for (var i = 0; i < array.Count; i++)
                    NormalizeWebResourceProperties(array[i], propertyName, errors, $"{path}[{i}]");
                return;
            }

            if (node is JsonObject obj)
            {
                foreach (var key in obj.Select(kv => kv.Key).ToList())
                    NormalizeWebResourceProperties(obj[key], key, errors, $"{path}.{key}");
            }
        }

        private string ResolveWebResourceName(string input, List<string> errors, string path)
        {
            var name = input.Trim();
            if (name.StartsWith("$webresource:", StringComparison.OrdinalIgnoreCase))
                name = name.Substring("$webresource:".Length);

            var result = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, name, "manage_ribbon");
            if (result.IsSuccess)
                return result.Value.GetAttributeValue<string>("name") ?? result.CanonicalName;

            errors.Add($"{path} '{input}': {result.Error}");
            return input;
        }

        private static bool IsWebResourceOperationProperty(string propertyName) =>
            string.Equals(propertyName, "library", StringComparison.OrdinalIgnoreCase) ||
            string.Equals(propertyName, "enable_library", StringComparison.OrdinalIgnoreCase) ||
            string.Equals(propertyName, "modern_image", StringComparison.OrdinalIgnoreCase);

        private static string FormatOperationNameResolutionErrors(List<string> errors)
        {
            var sb = new StringBuilder();
            sb.AppendLine("Operation name resolution failed (BLOCKED).");
            sb.AppendLine($"Errors: {errors.Count}");
            foreach (var error in errors)
                sb.AppendLine($"- {error}");
            sb.AppendLine("Hint: Display Name contains is resolved first, then logical/unique/schema contains. Use a more specific web resource name when matches are ambiguous.");
            return sb.ToString();
        }

        private static JsonElement ToJsonElement(JsonNode node)
        {
            using var doc = JsonDocument.Parse(node.ToJsonString());
            return doc.RootElement.Clone();
        }

        // ── Label / button-id helpers ────────────────────────────────────

        private static string ResolveLabel(string labelText, string buttonId, Dictionary<string, string> locLabels)
        {
            if (string.IsNullOrWhiteSpace(labelText)) return ExtractReadableNameFromId(buttonId);

            // $LocLabels:Ribbon.Form.email.MainTab.Save → "Save"
            if (labelText.StartsWith("$LocLabels:", StringComparison.OrdinalIgnoreCase))
            {
                var key = labelText.Substring("$LocLabels:".Length);
                if (locLabels != null && locLabels.TryGetValue(key, out var resolved))
                    return resolved;
                var parts = key.Split('.');
                return parts.Last();
            }

            // $Resources:Ribbon.Form.MainTab.Save.Save → take last segment
            if (labelText.StartsWith("$Resources:", StringComparison.OrdinalIgnoreCase))
            {
                var key = labelText.Substring("$Resources:".Length);
                var parts = key.Split('.');
                return parts.Last();
            }

            // {!EntityDisplayName:email} → "email"
            if (labelText.StartsWith("{!"))
            {
                var inner = labelText.TrimStart('{', '!').TrimEnd('}');
                return inner.Contains(':') ? inner.Substring(inner.IndexOf(':') + 1) : inner;
            }

            return labelText;
        }

        private static string ExtractReadableNameFromId(string buttonId)
        {
            if (string.IsNullOrWhiteSpace(buttonId)) return "";
            var parts = buttonId.Split('.');
            return parts.Last();
        }

        // ── Publish-wait guidance ────────────────────────────────────────

        private static List<int> NewPublishPollScheduleSeconds() => new(PublishPollScheduleSeconds);

        private static void AppendPublishWaitGuidance(StringBuilder sb)
        {
            sb.AppendLine("Wait schedule: call get_system_jobs after 30 seconds, then after 60 seconds, then after 120 seconds (total wait: 3 minutes 30 seconds).");
            sb.AppendLine("After the third poll, if the job is not Succeeded or no result is returned, stop waiting, do not read back with manage_ribbon(buttons/detail), and report the result to the user with a note that Dataverse publish is still running or did not complete successfully and the user must wait/check the job.");
        }

        // ── JavaScript function signatures ───────────────────────────────

        private static List<RibbonFunctionSignature> BuildFunctionSignatures(string ribbonXml)
            => BuildFunctionSignatures(XDocument.Parse(ribbonXml));

        private static List<RibbonFunctionSignature> BuildFunctionSignatures(XDocument ribbonDoc)
        {
            var signatures = new List<RibbonFunctionSignature>();
            if (ribbonDoc?.Root == null)
                return signatures;

            foreach (var commandDef in ribbonDoc.Root.Element("CommandDefinitions")?.Elements("CommandDefinition") ?? Enumerable.Empty<XElement>())
            {
                var commandId = commandDef.Attribute("Id")?.Value ?? "";
                foreach (var jsFunction in commandDef.Element("Actions")?.Elements("JavaScriptFunction") ?? Enumerable.Empty<XElement>())
                {
                    var functionName = jsFunction.Attribute("FunctionName")?.Value;
                    if (string.IsNullOrWhiteSpace(functionName))
                        continue;

                    var parameters = GetCrmParameterValues(jsFunction);
                    signatures.Add(new RibbonFunctionSignature
                    {
                        Role = "click",
                        Surface = InferSignatureSurface(commandId, parameters),
                        FunctionName = functionName,
                        Library = jsFunction.Attribute("Library")?.Value,
                        SourceId = commandId,
                        ParameterCount = parameters.Count,
                        Parameters = parameters,
                        ExpectedReturn = null
                    });
                }
            }

            foreach (var enableRule in ribbonDoc.Root.Element("RuleDefinitions")?.Element("EnableRules")?.Elements("EnableRule") ?? Enumerable.Empty<XElement>())
            {
                var customRule = enableRule.Element("CustomRule");
                if (customRule == null) continue;

                var functionName = customRule.Attribute("FunctionName")?.Value;
                if (string.IsNullOrWhiteSpace(functionName))
                    continue;

                var enableRuleId = enableRule.Attribute("Id")?.Value ?? "";
                var parameters = GetCrmParameterValues(customRule);
                signatures.Add(new RibbonFunctionSignature
                {
                    Role = "enable",
                    Surface = InferSignatureSurface(enableRuleId, parameters),
                    FunctionName = functionName,
                    Library = customRule.Attribute("Library")?.Value,
                    SourceId = enableRuleId,
                    ParameterCount = parameters.Count,
                    Parameters = parameters,
                    ExpectedReturn = "boolean"
                });
            }

            return signatures
                .OrderBy(s => s.SourceId, StringComparer.OrdinalIgnoreCase)
                .ThenBy(s => s.Role, StringComparer.OrdinalIgnoreCase)
                .ThenBy(s => s.FunctionName, StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        private static List<string> GetCrmParameterValues(XElement functionElement)
            => functionElement.Elements("CrmParameter")
                .Select(e => e.Attribute("Value")?.Value)
                .Where(v => !string.IsNullOrWhiteSpace(v))
                .ToList();

        private static string InferSignatureSurface(string sourceId, List<string> parameters)
        {
            if (sourceId.IndexOf(".Form.", StringComparison.OrdinalIgnoreCase) >= 0)
                return "form";
            if (sourceId.IndexOf(".HomepageGrid.", StringComparison.OrdinalIgnoreCase) >= 0)
                return "main_grid";
            if (sourceId.IndexOf(".SubGrid.", StringComparison.OrdinalIgnoreCase) >= 0)
                return "sub_grid";

            if (parameters.Any(p => string.Equals(p, "PrimaryControl", StringComparison.OrdinalIgnoreCase)))
                return "form";
            if (parameters.Any(p => string.Equals(p, "SelectedControl", StringComparison.OrdinalIgnoreCase)))
                return "grid";

            return "unknown";
        }

        private static void AppendFunctionSignatures(StringBuilder sb, List<RibbonFunctionSignature> signatures)
        {
            if (signatures == null || signatures.Count == 0)
                return;

            sb.AppendLine();
            sb.AppendLine("JavaScript signatures:");
            foreach (var signature in signatures)
            {
                var returnText = string.Equals(signature.Role, "enable", StringComparison.OrdinalIgnoreCase)
                    ? ", returns boolean"
                    : "";
                sb.AppendLine($"  - {signature.Role} {signature.FunctionName} [{signature.Surface}] ({signature.ParameterCount} params{returnText})");
                for (var i = 0; i < signature.Parameters.Count; i++)
                    sb.AppendLine($"      {i + 1}. {signature.Parameters[i]}");
            }
        }

        // ── Backup model ─────────────────────────────────────────────────

        internal sealed class RibbonBackup
        {
            [System.Text.Json.Serialization.JsonPropertyName("entity")]
            public string Entity { get; set; }

            [System.Text.Json.Serialization.JsonPropertyName("timestamp")]
            public string Timestamp { get; set; }

            [System.Text.Json.Serialization.JsonPropertyName("ribbonDiffXml")]
            public string RibbonDiffXml { get; set; }
        }
    }
}
