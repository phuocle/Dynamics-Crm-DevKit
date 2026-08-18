using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageWebResourceTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        public ManageWebResourceTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }
        private static readonly Dictionary<int, string> TypeCodeMap = new()
        {
            [1] = "HTML",
            [2] = "CSS",
            [3] = "JS",
            [4] = "XML",
            [5] = "PNG",
            [6] = "JPG",
            [7] = "GIF",
            [8] = "XAP",
            [9] = "XSL",
            [10] = "ICO",
            [11] = "SVG",
            [12] = "RESX"
        };

        private static readonly Dictionary<string, int> TypeFilterMap = new(StringComparer.OrdinalIgnoreCase)
        {
            ["html"] = 1,
            ["css"] = 2,
            ["js"] = 3,
            ["xml"] = 4,
            ["png"] = 5,
            ["jpg"] = 6,
            ["gif"] = 7,
            ["xap"] = 8,
            ["xsl"] = 9,
            ["ico"] = 10,
            ["svg"] = 11,
            ["resx"] = 12
        };

        [McpServerTool(Name = "manage_webresource",
            Title = "Manage web resources",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageWebResourceResult)),
        Description(
            "Manage Dataverse web resources — list / detail / create / update / delete.\n" +
            "Required: detail/update/delete need web_resource_id (GUID, Display Name, or unique name); " +
            "create needs name + file_path + type + solution_name.\n" +
            "On create the prefix in name must match the solution's publisher prefix; on mismatch the tool errors " +
            "with the suggested name — re-call with it. Create adds the web resource to the solution and publishes; " +
            "update also publishes; delete is irreversible.\n" +
            "Types: js, html, css, xml, png, jpg, gif, svg, ico, resx, xsl, xap. " +
            "Naming: {prefix}_/path/filename.ext (e.g. 'v4_/entities/Account.form.js').\n" +
            "WHEN TO USE: upload/update/inspect a web resource; find library_name for build_form_xml " +
            "add_event/add_library (run list first); combine with build_form_xml + manage_form to wire JS into a form.\n" +
            "RELATED TOOLS: get_solution_components, manage_form, publish_customizations.")]
        public CallToolResult manage_webresource(
            [Description("list / detail / create / update / delete.")] string action = "",
            [Description("GUID, Display Name, or unique name. Required: detail/update/delete.")] string web_resource_id = "",
            [Description("Unique name (e.g. 'v4_/entities/Account.form.js'). Required: create. list: contains filter across Display Name and unique name.")] string name = "",
            [Description("Display Name. Optional: create/update.")] string display_name = "",
            [Description("Description. Optional: create/update.")] string description = "",
            [Description("Absolute or relative file path. Required: create. Tool reads file and converts to base64 internally.")] string file_path = "",
            [Description("Required: create. See description for values. Ignored on other actions.")] string type = "",
            [Description("list: filter. create: REQUIRED — used to resolve publisher prefix and add WR to solution.")] string solution_name = "",
            [Description("list only. See type values.")] string type_filter = "",
            [Description("1-500.")] int max_records = 50)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required. Valid values: 'list', 'detail', 'create', 'update', 'delete'.");
                var normalizedAction = action.Trim().ToLowerInvariant();            
                return normalizedAction switch
                {
                    "list" => HandleList(name, type_filter, solution_name, max_records),
                    "detail" => HandleDetail(web_resource_id),
                    "create" => HandleCreate(name, display_name, description, file_path, type, solution_name),
                    "update" => HandleUpdate(web_resource_id, display_name, description, file_path),
                    "delete" => HandleDelete(web_resource_id),
                    _ => Error($"Invalid action '{action}'. Valid values: 'list', 'detail', 'create', 'update', 'delete'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
            }
        }

        private CallToolResult HandleList(string nameFilter, string typeFilter, string solutionName, int maxRecords)
        {
            if (!string.IsNullOrWhiteSpace(typeFilter) && !TypeFilterMap.ContainsKey(typeFilter.Trim()))
                return Error($"Invalid type_filter '{typeFilter.Trim()}'.", $"Use: {string.Join(", ", TypeFilterMap.Keys)}.");

            if (maxRecords <= 0)
                return Error("max_records must be between 1 and 500.");
            if (maxRecords > 500) maxRecords = 500;

            var filters = new StringBuilder();
            filters.AppendLine("      <condition attribute='ismanaged' operator='eq' value='0'/>");

            if (!string.IsNullOrWhiteSpace(nameFilter))
            {
                var escapedNameFilter = EscapeXml(nameFilter.Trim());
                filters.AppendLine("      <filter type='or'>");
                filters.AppendLine($"        <condition attribute='displayname' operator='like' value='%{escapedNameFilter}%'/>");
                filters.AppendLine($"        <condition attribute='name' operator='like' value='%{escapedNameFilter}%'/>");
                filters.AppendLine("      </filter>");
            }

            if (!string.IsNullOrWhiteSpace(typeFilter) && TypeFilterMap.TryGetValue(typeFilter.Trim(), out var typeCode))
                filters.AppendLine($"      <condition attribute='webresourcetype' operator='eq' value='{typeCode}'/>");

            var solutionJoin = "";
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return Error(solResult.Error);

                solutionName = solResult.UniqueName;
                solutionJoin = $@"
    <link-entity name='solutioncomponent' from='objectid' to='webresourceid' link-type='inner'>
      <link-entity name='solution' from='solutionid' to='solutionid' link-type='inner'>
        <filter>
          <condition attribute='uniquename' operator='eq' value='{EscapeXml(solutionName.Trim())}'/>
        </filter>
      </link-entity>
    </link-entity>";
            }

            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='webresource'>
    <attribute name='webresourceid'/>
    <attribute name='name'/>
    <attribute name='displayname'/>
    <attribute name='webresourcetype'/>
    <attribute name='ismanaged'/>
    <attribute name='modifiedon'/>
    <attribute name='modifiedby'/>
    <filter type='and'>
{filters}    </filter>
    <order attribute='name'/>{solutionJoin}
  </entity>
</fetch>";

            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
            {
                var emptyResult = new ManageWebResourceResult { Action = "list", TotalCount = 0 };
                return Success("0 web resources found.", emptyResult);
            }

            var entries = result.Entities.Select(MapEntry).ToList();

            var structured = new ManageWebResourceResult
            {
                Action = "list",
                TotalCount = entries.Count,
                WebResources = entries
            };

            var countWord = entries.Count == 1 ? "web resource" : "web resources";
            return Success($"{entries.Count} {countWord} found.", structured);
        }

        private CallToolResult HandleDetail(string webResourceId)
        {
            if (string.IsNullOrWhiteSpace(webResourceId))
                return Error("web_resource_id is required for 'detail'.",
                             "Use action='list' to find web resource IDs.");

            var resolved = ResolveWebResourceIdInput(webResourceId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error);
            var query = new QueryExpression("webresource")
            {
                ColumnSet = new ColumnSet(
                    "webresourceid", "name", "displayname", "webresourcetype",
                    "description", "languagecode", "ismanaged", "iscustomizable",
                    "canbedeleted", "ishidden", "isenabledformobileclient",
                    "createdby", "createdon", "modifiedby", "modifiedon",
                    "solutionid", "introducedversion", "dependencyxml")
            };
            query.Criteria.AddCondition("webresourceid", ConditionOperator.Equal, resolved.Id.Value);
            var result = _serviceClient.RetrieveMultiple(query);
            if (result.Entities.Count == 0)
                return Error($"Web resource '{webResourceId}' not found.",
                             "Use action='list' to find valid web resource IDs.");
            var entity = result.Entities[0];
            var entry = MapEntry(entity);
            entry.Description = NullIfEmpty(entity.GetAttributeValue<string>("description"));
            entry.LanguageCode = entity.GetAttributeValue<int?>("languagecode");
            entry.IsCustomizable = entity.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value;
            entry.IsHidden = entity.GetAttributeValue<BooleanManagedProperty>("ishidden")?.Value;
            entry.IsEnabledForMobile = entity.GetAttributeValue<bool?>("isenabledformobileclient");
            entry.IntroducedVersion = NullIfEmpty(entity.GetAttributeValue<string>("introducedversion"));
            var createdBy = entity.GetAttributeValue<EntityReference>("createdby");
            entry.CreatedBy = createdBy != null ? (createdBy.Name ?? createdBy.Id.ToString()) : null;
            var createdOn = entity.GetAttributeValue<DateTime?>("createdon");
            entry.CreatedOn = createdOn?.ToString("yyyy-MM-dd HH:mm:ss");
            var modifiedBy = entity.GetAttributeValue<EntityReference>("modifiedby");
            entry.ModifiedBy = modifiedBy != null ? (modifiedBy.Name ?? modifiedBy.Id.ToString()) : null;
            var structured = new ManageWebResourceResult
            {
                Action = "detail",
                TotalCount = 1,
                WebResources = [entry]
            };
            return Success($"Web resource '{entry.Name}' ({entry.WebResourceId}), type {entry.Type}.", structured);
        }

        private CallToolResult HandleCreate(string name, string displayName, string description,
            string filePath, string type, string solutionName)
        {
            if (string.IsNullOrWhiteSpace(name))
                return Error("name is required for 'create'.",
                             "Provide a unique name, e.g. 'prefix_/entities/Account.form.js'.");
            if (string.IsNullOrWhiteSpace(filePath))
                return Error("file_path is required for 'create'.",
                             "Provide an absolute or relative path to the file.");

            if (string.IsNullOrWhiteSpace(type))
                return Error("type is required for 'create'. Valid values: js, html, css, xml, png, jpg, gif, svg, ico, resx, xsl, xap.");

            if (!File.Exists(filePath))
                return Error($"File not found at path '{filePath}'.",
                             "Provide a valid absolute or relative file path.");
            var content = Convert.ToBase64String(File.ReadAllBytes(filePath));

            var typeTrimmed = type.Trim().ToLowerInvariant();
            if (!TypeFilterMap.TryGetValue(typeTrimmed, out var typeCode))
                return Error($"Invalid type '{type}'. Valid values: js, html, css, xml, png, jpg, gif, svg, ico, resx, xsl, xap.");

            if (string.IsNullOrWhiteSpace(solutionName))
                return Error("solution_name is required for 'create'.",
                             "Provide the solution unique name or display name. Use get_solution_components to find available solutions.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
            if (!solResult.IsSuccess)
                return Error(solResult.Error);

            name = name.Trim();

            var existingByInput = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, name, "manage_webresource");
            if (existingByInput.IsSuccess)
            {
                var existingName = existingByInput.Value.GetAttributeValue<string>("name") ?? existingByInput.CanonicalName ?? existingByInput.Value.Id.ToString();
                return Error($"Web resource input '{name}' resolves to existing web resource '{existingName}' (ID: {existingByInput.Value.Id}). Use action='update' to modify it.");
            }
            if (existingByInput.Status == ResolveStatus.Ambiguous || existingByInput.Status == ResolveStatus.Error)
                return Error(existingByInput.Error);

            if (!string.IsNullOrWhiteSpace(displayName))
            {
                var existingByDisplayName = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, displayName.Trim(), "manage_webresource");
                if (existingByDisplayName.IsSuccess)
                {
                    var existingName = existingByDisplayName.Value.GetAttributeValue<string>("name") ?? existingByDisplayName.CanonicalName ?? existingByDisplayName.Value.Id.ToString();
                    return Error($"Display Name '{displayName.Trim()}' resolves to existing web resource '{existingName}' (ID: {existingByDisplayName.Value.Id}). Use action='update' to modify it.");
                }
                if (existingByDisplayName.Status == ResolveStatus.Ambiguous || existingByDisplayName.Status == ResolveStatus.Error)
                    return Error(existingByDisplayName.Error);
            }

            var underscoreIndex = name.IndexOf('_');
            if (underscoreIndex < 1)
                return Error(
                    $"name '{name}' has no prefix.",
                    $"Rename it to '{solResult.Prefix}_{name}' to match solution '{solResult.UniqueName}' (publisher prefix: {solResult.Prefix}).");

            var prefixInName = name.Substring(0, underscoreIndex).ToLowerInvariant();
            if (!string.Equals(prefixInName, solResult.Prefix, StringComparison.OrdinalIgnoreCase))
            {
                var suggestedName = $"{solResult.Prefix}_{name.Substring(underscoreIndex + 1)}";
                return Error(
                    $"PrefixMismatch: name '{name}' has prefix '{prefixInName}' but solution '{solResult.UniqueName}' publisher prefix is '{solResult.Prefix}'.",
                    $"Re-call with name='{suggestedName}' to use the correct solution prefix, or confirm your intended prefix is correct and check solution_name.");
            }

            var webResource = new Entity("webresource")
            {
                ["name"] = name,
                ["content"] = content.Trim(),
                ["webresourcetype"] = new OptionSetValue(typeCode)
            };

            if (!string.IsNullOrWhiteSpace(displayName))
                webResource["displayname"] = displayName.Trim();
            else
                webResource["displayname"] = name;

            if (!string.IsNullOrWhiteSpace(description))
                webResource["description"] = description.Trim();

            if (_options.DryRun)
                return DryRun($"Would CREATE web resource '{name}' (type: {typeTrimmed}) in solution '{solResult.UniqueName}'.", new ManageWebResourceResult
                {
                    Action = "create",
                    Status = "not_executed",
                    TotalCount = 1,
                    WebResources =
                    [
                        new WebResourceEntry
                        {
                            Name = name,
                            DisplayName = string.IsNullOrWhiteSpace(displayName) ? name : displayName.Trim(),
                            Type = typeTrimmed,
                            TypeCode = typeCode,
                            Description = NullIfEmpty(description)
                        }
                    ],
                    SolutionName = solResult.UniqueName,
                    CreateMode = "record_create_then_add_solution_component",
                    IsAddToSolution = true,
                    AddToSolutionMethod = "SolutionUniqueName",
                    Published = false
                });

            var webResourceId = DataverseMutationExecutor.Create(_context, _serviceClient, webResource);

            var addResult = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _serviceClient,
                webResourceId,
                61,
                solResult.UniqueName,
                addRequiredComponents: true);
            var solWarning = string.IsNullOrWhiteSpace(addResult.AddToSolutionWarning)
                ? null
                : $"Failed to add to solution '{solResult.UniqueName}': {addResult.AddToSolutionWarning}";

            PublishHelper.PublishWebResource(_context, _serviceClient, webResourceId);
            MetadataOperationWaitHelper.WaitAfterWebResource();

            var typeLabel = TypeCodeMap.TryGetValue(typeCode, out var t) ? t : typeCode.ToString();

            var summary = $"Created web resource '{name}' ({webResourceId}): type={typeLabel}" +
                (solWarning == null
                    ? $", added to solution '{solResult.UniqueName}', published."
                    : $". Not added to solution '{solResult.UniqueName}' (see addToSolutionWarning). Published.");

            return Success(summary, new ManageWebResourceResult
            {
                Action = "created",
                TotalCount = 1,
                WebResources =
                [
                    new WebResourceEntry
                    {
                        WebResourceId = webResourceId.ToString(),
                        Name = name,
                        DisplayName = string.IsNullOrWhiteSpace(displayName) ? name : displayName.Trim(),
                        Type = typeLabel,
                        TypeCode = typeCode,
                        IsManaged = false,
                        Description = NullIfEmpty(description)
                    }
                ],
                SolutionName = solResult.UniqueName,
                CreateMode = SolutionComponentCreateMode.RecordCreateThenAddSolutionComponent.ToString(),
                IsAddToSolution = addResult.IsAddToSolution,
                AddToSolutionMethod = addResult.AddToSolutionMethod,
                AddToSolutionWarning = addResult.AddToSolutionWarning,
                Published = true
            });
        }

        private CallToolResult HandleUpdate(string webResourceId, string displayName,
            string description, string filePath)
        {
            if (string.IsNullOrWhiteSpace(webResourceId))
                return Error("web_resource_id is required for 'update'.",
                             "Use action='list' to find web resource IDs.");

            var resolved = ResolveWebResourceIdInput(webResourceId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error);
            var id = resolved.Id.Value;

            var existing = RetrieveById(id);
            if (existing == null)
                return Error($"Web resource '{webResourceId}' not found.",
                             "Use action='list' to find valid web resource IDs.");

            var isManaged = existing.GetAttributeValue<bool?>("ismanaged");
            var isCustomizable = existing.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
            if (isManaged == true && isCustomizable?.Value == false)
                return Error($"Cannot update web resource '{webResourceId}' — it is managed and not customizable.");

            var update = new Entity("webresource", id);
            var fieldsUpdated = 0;

            if (!string.IsNullOrWhiteSpace(filePath))
            {
                if (!File.Exists(filePath))
                    return Error($"File not found at path '{filePath}'.",
                                 "Provide a valid absolute or relative file path.");
                update["content"] = Convert.ToBase64String(File.ReadAllBytes(filePath));
                fieldsUpdated++;
            }
            if (!string.IsNullOrWhiteSpace(displayName))
            {
                update["displayname"] = displayName.Trim();
                fieldsUpdated++;
            }
            if (!string.IsNullOrWhiteSpace(description))
            {
                update["description"] = description.Trim();
                fieldsUpdated++;
            }

            if (fieldsUpdated == 0)
                return Error("No fields to update. Provide at least one of: file_path, display_name, description.");

            if (_options.DryRun)
            {
                var existingNameDry = existing.GetAttributeValue<string>("name") ?? "";
                return DryRun($"Would UPDATE web resource '{existingNameDry}' ({id}), {fieldsUpdated} field(s).", new ManageWebResourceResult
                {
                    Action = "update",
                    Status = "not_executed",
                    TotalCount = 1,
                    WebResources =
                    [
                        new WebResourceEntry
                        {
                            WebResourceId = id.ToString(),
                            Name = existingNameDry,
                            DisplayName = !string.IsNullOrWhiteSpace(displayName) ? displayName.Trim() : NullIfEmpty(existing.GetAttributeValue<string>("displayname")),
                            Type = TypeCodeMap.TryGetValue(existing.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0, out var previewType) ? previewType : "Unknown",
                            TypeCode = existing.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0,
                            IsManaged = isManaged ?? false
                        }
                    ],
                    Published = false
                });
            }

            DataverseMutationExecutor.Update(_context, _serviceClient, update);

            PublishHelper.PublishWebResource(_context, _serviceClient, id);
            MetadataOperationWaitHelper.WaitAfterWebResource();
            var existingName = existing.GetAttributeValue<string>("name") ?? "";

            return Success($"Updated web resource '{existingName}' ({id}): fieldsUpdated={fieldsUpdated}, published.", new ManageWebResourceResult
            {
                Action = "updated",
                TotalCount = 1,
                WebResources =
                [
                    new WebResourceEntry
                    {
                        WebResourceId = id.ToString(),
                        Name = existingName,
                        DisplayName = !string.IsNullOrWhiteSpace(displayName) ? displayName.Trim() : NullIfEmpty(existing.GetAttributeValue<string>("displayname")),
                        Type = TypeCodeMap.TryGetValue(existing.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0, out var t2) ? t2 : "Unknown",
                        TypeCode = existing.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0,
                        IsManaged = isManaged ?? false
                    }
                ],
                Published = true
            });
        }

        private CallToolResult HandleDelete(string webResourceId)
        {
            if (string.IsNullOrWhiteSpace(webResourceId))
                return Error("web_resource_id is required for 'delete'.",
                             "Use action='list' to find web resource IDs.");

            var resolved = ResolveWebResourceIdInput(webResourceId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error);
            var id = resolved.Id.Value;

            var existing = RetrieveById(id);
            if (existing == null)
                return Error($"Web resource '{webResourceId}' not found.",
                             "Use action='list' to find valid web resource IDs.");

            var isManaged = existing.GetAttributeValue<bool?>("ismanaged");
            var isCustomizable = existing.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
            if (isManaged == true && isCustomizable?.Value == false)
                return Error($"Cannot delete web resource '{webResourceId}' — it is managed and not customizable.");

            var existingName = existing.GetAttributeValue<string>("name") ?? "";
            var typeValue = existing.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0;

            if (_options.DryRun)
                return DryRun($"Would DELETE web resource '{existingName}' ({id}).", new ManageWebResourceResult
                {
                    Action = "delete",
                    Status = "not_executed",
                    TotalCount = 1,
                    WebResources =
                    [
                        new WebResourceEntry
                        {
                            WebResourceId = id.ToString(),
                            Name = existingName,
                            Type = TypeCodeMap.TryGetValue(typeValue, out var previewType) ? previewType : "Unknown",
                            TypeCode = typeValue,
                            IsManaged = isManaged ?? false
                        }
                    ],
                    Published = false
                });

            DataverseMutationExecutor.Delete(_context, _serviceClient, "webresource", id);

            return Success($"Deleted web resource '{existingName}' ({id}).", new ManageWebResourceResult
            {
                Action = "deleted",
                TotalCount = 1,
                WebResources =
                [
                    new WebResourceEntry
                    {
                        WebResourceId = id.ToString(),
                        Name = existingName,
                        Type = TypeCodeMap.TryGetValue(typeValue, out var t3) ? t3 : "Unknown",
                        TypeCode = typeValue
                    }
                ]
            });
        }

        private Entity RetrieveById(Guid id)
        {
            var query = new QueryExpression("webresource")
            {
                ColumnSet = new ColumnSet("webresourceid", "name", "displayname", "webresourcetype",
                    "ismanaged", "iscustomizable"),
                Criteria = new FilterExpression
                {
                    Conditions = { new ConditionExpression("webresourceid", ConditionOperator.Equal, id) }
                },
                TopCount = 1
            };
            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.FirstOrDefault();
        }

        private static WebResourceEntry MapEntry(Entity e)
        {
            var typeValue = e.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0;
            var modifiedBy = e.GetAttributeValue<EntityReference>("modifiedby");
            var modifiedOn = e.GetAttributeValue<DateTime?>("modifiedon");

            return new WebResourceEntry
            {
                WebResourceId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                DisplayName = NullIfEmpty(e.GetAttributeValue<string>("displayname")),
                Type = TypeCodeMap.TryGetValue(typeValue, out var t) ? t : typeValue.ToString(),
                TypeCode = typeValue,
                IsManaged = e.GetAttributeValue<bool?>("ismanaged") ?? false,
                ModifiedOn = modifiedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                ModifiedBy = modifiedBy != null ? (modifiedBy.Name ?? modifiedBy.Id.ToString()) : null
            };
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private (Guid? Id, string Error) ResolveWebResourceIdInput(string webResourceInput)
        {
            var trimmed = webResourceInput?.Trim();
            if (string.IsNullOrWhiteSpace(trimmed))
                return (null, "web_resource_id is required.");

            if (Guid.TryParse(trimmed, out var guid))
                return (guid, null);

            if (_serviceClient == null)
                return (null, $"'{trimmed}' is not a valid GUID. Use action='list' to find valid web resource IDs.");

            var resolved = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, trimmed, "manage_webresource");
            if (!resolved.IsSuccess)
                return (null, resolved.Error);

            var resolvedId = resolved.Value.Id;
            if (resolvedId == Guid.Empty && resolved.Value.Contains("webresourceid"))
                resolvedId = resolved.Value.GetAttributeValue<Guid>("webresourceid");

            if (resolvedId == Guid.Empty)
                return (null, $"Web resource '{trimmed}' resolved without a valid ID. Use action='list' to find valid web resource IDs.");

            return (resolvedId, null);
        }
    }
}
