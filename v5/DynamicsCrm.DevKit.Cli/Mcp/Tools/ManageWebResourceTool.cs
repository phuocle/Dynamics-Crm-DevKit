using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;


namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageWebResourceTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public ManageWebResourceTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
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
            "Web resources Dataverse — list/detail/create/update/delete. Required:\n" +
            "- list: optional name, type_filter, solution_name, max_records\n" +
            "- detail: web_resource_id (GUID, Display Name, or unique name)\n" +
            "- create: name + content (base64) + type + solution_name (REQUIRED). Optional: display_name, description\n" +
            "- update: web_resource_id (GUID, Display Name, or unique name). Optional: content, display_name, description\n" +
            "- delete: web_resource_id (GUID, Display Name, or unique name; irreversible)\n\n" +

            "Types: js, html, css, xml, png, jpg, gif, svg, ico, resx, xsl, xap.\n" +
            "Naming convention: {prefix}_/path/filename.ext (e.g. 'v4_/entities/Account.form.js').\n\n" +

            "PREFIX VALIDATION on CREATE: solution_name is required and used to resolve the publisher prefix. " +
            "The prefix in name must match the solution's publisher prefix (case-insensitive). " +
            "If they differ, the tool returns [PrefixMismatch] and stops — re-call with the correct prefix.\n\n" +

            "WHEN TO USE:\n" +
            "- Find library_name for build_form_xml add_event/add_library (run list first)\n" +
            "- Inspect, upload, update, or delete a single web resource\n" +
            "- Combine with build_form_xml + manage_form to wire JS into a form\n\n" +

            "SAFETY: delete is irreversible; content must be base64 for create/update.")]
        public CallToolResult manage_webresource(
            [Description("list / detail / create / update / delete."
            )] string action,
            [Description("GUID, Display Name, or unique name. Required: detail/update/delete."
            )] string web_resource_id = "",
            [Description("Unique name (e.g. 'v4_/entities/Account.form.js'). Required: create. list: contains filter across Display Name and unique name."
            )] string name = "",
            [Description("")
            ] string display_name = "",
            [Description("")
            ] string description = "",
            [Description("Base64. Required: create."
            )] string content = "",
            [Description("Required: create. See description for values. Ignored on other actions."
            )] string type = "",
            [Description("list: filter. create: REQUIRED — used to resolve publisher prefix and add WR to solution."
            )] string solution_name = "",
            [Description("list only. See type values."
            )] string type_filter = "",
            [Description("1–500."
            )] int max_records = 50,
            [Description("")
            ] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'create', 'update', 'delete'.");

            var normalizedAction = action.Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(name, type_filter, solution_name, max_records),
                    "detail" => HandleDetail(web_resource_id),
                    "create" => HandleCreate(name, display_name, description, content, type, solution_name, auto_publish),
                    "update" => HandleUpdate(web_resource_id, display_name, description, content, auto_publish),
                    "delete" => HandleDelete(web_resource_id, auto_publish),
                    _ => ErrorResult($"Error: Invalid action '{action}'. Valid values: 'list', 'detail', 'create', 'update', 'delete'.")
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to manage web resource: {ex.Message}");
            }
        }

        #region Action Handlers

        private CallToolResult HandleList(string nameFilter, string typeFilter, string solutionName, int maxRecords)
        {
            if (!string.IsNullOrWhiteSpace(typeFilter) && !TypeFilterMap.ContainsKey(typeFilter.Trim()))
                return ErrorResult($"Error: Invalid type_filter '{typeFilter.Trim()}'. Use: {string.Join(", ", TypeFilterMap.Keys)}.");

            if (maxRecords <= 0)
                return ErrorResult("Error: max_records must be between 1 and 500.");
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
                    return ErrorResult($"[Error] {solResult.Error}\nTip: Use get_solution_components to find valid solution names.");

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
                var emptyResult = new ManageWebResourceResult { Action = "list", TotalCount = 0, WebResources = [] };
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = "0 web resources found." }],
                    StructuredContent = JsonSerializer.SerializeToElement(emptyResult)
                };
            }

            var entries = result.Entities.Select(MapEntry).ToList();

            var sb = new StringBuilder(entries.Count * 120 + 256);
            var countWord = entries.Count == 1 ? "web resource" : "web resources";
            sb.AppendLine($"[WebResources] {entries.Count} {countWord}");
            sb.AppendLine();
            sb.AppendLine("webResourceId\tname\ttype\tdisplayName\tmodifiedOn");

            foreach (var e in entries)
            {
                sb.AppendLine($"{e.WebResourceId}\t{EscapeTab(e.Name)}\t{e.Type}\t{EscapeTab(e.DisplayName ?? "")}\t{e.ModifiedOn ?? ""}");
            }

            var structured = new ManageWebResourceResult
            {
                Action = "list",
                TotalCount = entries.Count,
                WebResources = entries
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult HandleDetail(string webResourceId)
        {
            if (string.IsNullOrWhiteSpace(webResourceId))
                return ErrorResult("Error: web_resource_id is required for 'detail'.\n" +
                                   "Use action='list' to find web resource IDs.");

            var resolved = ResolveWebResourceIdInput(webResourceId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return ErrorResult(resolved.Error);

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
                return ErrorResult($"Error: Web resource '{webResourceId}' not found.\n" +
                                   $"Use action='list' to find valid web resource IDs.");

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

            var sb = new StringBuilder(512);
            sb.AppendLine($"[WebResource] {entry.Name}");
            sb.AppendLine();
            sb.AppendLine($"webResourceId: {entry.WebResourceId}");
            sb.AppendLine($"name: {entry.Name}");
            if (!string.IsNullOrEmpty(entry.DisplayName))
                sb.AppendLine($"displayName: {entry.DisplayName}");
            sb.AppendLine($"type: {entry.Type}");
            sb.AppendLine($"isManaged: {(entry.IsManaged ? "Yes" : "No")}");
            if (!string.IsNullOrEmpty(entry.Description))
                sb.AppendLine($"description: {entry.Description}");
            if (entry.LanguageCode.HasValue && entry.LanguageCode.Value > 0)
                sb.AppendLine($"languageCode: {entry.LanguageCode}");
            if (entry.IsCustomizable.HasValue)
                sb.AppendLine($"isCustomizable: {(entry.IsCustomizable.Value ? "Yes" : "No")}");
            if (entry.IsHidden.HasValue)
                sb.AppendLine($"isHidden: {(entry.IsHidden.Value ? "Yes" : "No")}");
            if (entry.IsEnabledForMobile.HasValue)
                sb.AppendLine($"isEnabledForMobile: {(entry.IsEnabledForMobile.Value ? "Yes" : "No")}");
            if (!string.IsNullOrEmpty(entry.IntroducedVersion))
                sb.AppendLine($"introducedVersion: {entry.IntroducedVersion}");
            if (!string.IsNullOrEmpty(entry.CreatedBy))
                sb.AppendLine($"createdBy: {entry.CreatedBy}");
            if (!string.IsNullOrEmpty(entry.CreatedOn))
                sb.AppendLine($"createdOn: {entry.CreatedOn}");
            if (!string.IsNullOrEmpty(entry.ModifiedBy))
                sb.AppendLine($"modifiedBy: {entry.ModifiedBy}");
            if (!string.IsNullOrEmpty(entry.ModifiedOn))
                sb.AppendLine($"modifiedOn: {entry.ModifiedOn}");

            var structured = new ManageWebResourceResult
            {
                Action = "detail",
                TotalCount = 1,
                WebResources = [entry]
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult HandleCreate(string name, string displayName, string description,
            string content, string type, string solutionName, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(name))
                return ErrorResult("Error: name is required for 'create'.\n" +
                                   "Provide a unique name, e.g. 'prefix_/entities/Account.form.js'.");

            if (string.IsNullOrWhiteSpace(content))
                return ErrorResult("Error: content (base64 encoded) is required for 'create'.");

            if (string.IsNullOrWhiteSpace(type))
                return ErrorResult("Error: type is required for 'create'. Valid values: js, html, css, xml, png, jpg, gif, svg, ico, resx, xsl, xap.");

            if (string.IsNullOrWhiteSpace(solutionName))
                return ErrorResult("Error: solution_name is required for 'create'.\n" +
                                   "Provide the solution unique name or display name. Use get_solution_components to find available solutions.");

            var typeTrimmed = type.Trim().ToLowerInvariant();
            if (!TypeFilterMap.TryGetValue(typeTrimmed, out var typeCode))
                return ErrorResult($"Error: Invalid type '{type}'. Valid values: js, html, css, xml, png, jpg, gif, svg, ico, resx, xsl, xap.");

            // Resolve publisher prefix from solution
            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
            if (!solResult.IsSuccess)
                return ErrorResult($"[Error] {solResult.Error}\nTip: Use get_solution_components to find valid solution names.");

            name = name.Trim();

            var existingByInput = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, name, "manage_webresource");
            if (existingByInput.IsSuccess)
            {
                var existingName = existingByInput.Value.GetAttributeValue<string>("name") ?? existingByInput.CanonicalName ?? existingByInput.Value.Id.ToString();
                return ErrorResult($"Error: Web resource input '{name}' resolves to existing web resource '{existingName}' (ID: {existingByInput.Value.Id}). Use action='update' to modify it.");
            }
            if (existingByInput.Status == ResolveStatus.Ambiguous || existingByInput.Status == ResolveStatus.Error)
                return ErrorResult(existingByInput.Error);

            if (!string.IsNullOrWhiteSpace(displayName))
            {
                var existingByDisplayName = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, displayName.Trim(), "manage_webresource");
                if (existingByDisplayName.IsSuccess)
                {
                    var existingName = existingByDisplayName.Value.GetAttributeValue<string>("name") ?? existingByDisplayName.CanonicalName ?? existingByDisplayName.Value.Id.ToString();
                    return ErrorResult($"Error: Display Name '{displayName.Trim()}' resolves to existing web resource '{existingName}' (ID: {existingByDisplayName.Value.Id}). Use action='update' to modify it.");
                }
                if (existingByDisplayName.Status == ResolveStatus.Ambiguous || existingByDisplayName.Status == ResolveStatus.Error)
                    return ErrorResult(existingByDisplayName.Error);
            }

            // Validate prefix in name matches the solution's publisher prefix
            var underscoreIndex = name.IndexOf('_');
            if (underscoreIndex < 1)
                return ErrorResult(
                    $"Error: name '{name}' has no prefix.\n" +
                    $"Rename it to '{solResult.Prefix}_{name}' to match solution '{solResult.UniqueName}' (publisher prefix: {solResult.Prefix}).");

            var prefixInName = name.Substring(0, underscoreIndex).ToLowerInvariant();
            if (!string.Equals(prefixInName, solResult.Prefix, StringComparison.OrdinalIgnoreCase))
            {
                var suggestedName = $"{solResult.Prefix}_{name.Substring(underscoreIndex + 1)}";
                var mismatchSb = new StringBuilder(256);
                mismatchSb.AppendLine("[PrefixMismatch]");
                mismatchSb.AppendLine($"NameProvided: {name}");
                mismatchSb.AppendLine($"PrefixInName: {prefixInName}");
                mismatchSb.AppendLine($"PrefixFromSolution: {solResult.Prefix} (solution: {solResult.UniqueName})");
                mismatchSb.AppendLine();
                mismatchSb.AppendLine($"→ Re-call with name=\"{suggestedName}\" to use the correct solution prefix.");
                mismatchSb.AppendLine($"→ Or confirm your intended prefix is correct and check the solution_name.");
                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = mismatchSb.ToString() }],
                    IsError = true
                };
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
                return DryRunResult($"Would CREATE web resource '{name}' (type: {typeTrimmed}) in solution '{solResult.UniqueName}'.");

            var webResourceId = _serviceClient.Create(webResource);

            var addResult = SolutionComponentCreateHelper.AddExistingComponent(
                _serviceClient,
                webResourceId,
                61,
                solResult.UniqueName,
                addRequiredComponents: true);
            var solWarning = string.IsNullOrWhiteSpace(addResult.AddToSolutionWarning)
                ? null
                : $"Failed to add to solution '{solResult.UniqueName}': {addResult.AddToSolutionWarning}";

            var published = autoPublish && PublishWebResource(webResourceId);

            var typeLabel = TypeCodeMap.TryGetValue(typeCode, out var t) ? t : typeCode.ToString();

            var sb = new StringBuilder(256);
            sb.AppendLine($"[WebResource] Created: {name}");
            sb.AppendLine($"webResourceId: {webResourceId}");
            sb.AppendLine($"type: {typeLabel}");
            sb.AppendLine($"solution: {solResult.UniqueName}");
            if (!string.IsNullOrWhiteSpace(displayName))
                sb.AppendLine($"displayName: {displayName.Trim()}");
            if (!string.IsNullOrEmpty(solWarning))
                sb.AppendLine($"solutionWarning: {solWarning}");
            sb.AppendLine($"published: {(published ? "yes" : "no")}");

            var structured = new ManageWebResourceResult
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
                Published = published
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult HandleUpdate(string webResourceId, string displayName,
            string description, string content, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(webResourceId))
                return ErrorResult("Error: web_resource_id is required for 'update'.\n" +
                                   "Use action='list' to find web resource IDs.");

            var resolved = ResolveWebResourceIdInput(webResourceId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return ErrorResult(resolved.Error);
            var id = resolved.Id.Value;

            var existing = RetrieveById(id);
            if (existing == null)
                return ErrorResult($"Error: Web resource '{webResourceId}' not found.\n" +
                                   $"Use action='list' to find valid web resource IDs.");

            // Check managed/customizable
            var isManaged = existing.GetAttributeValue<bool?>("ismanaged");
            var isCustomizable = existing.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
            if (isManaged == true && isCustomizable?.Value == false)
                return ErrorResult($"Error: Cannot update web resource '{webResourceId}' — it is managed and not customizable.");

            var update = new Entity("webresource", id);
            var fieldsUpdated = 0;

            if (!string.IsNullOrWhiteSpace(content))
            {
                update["content"] = content.Trim();
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
                return ErrorResult("Error: No fields to update. Provide at least one of: content, display_name, description.");

            if (_options.DryRun)
            {
                var existingNameDry = existing.GetAttributeValue<string>("name") ?? "";
                return DryRunResult($"Would UPDATE web resource '{existingNameDry}' ({id}), {fieldsUpdated} field(s).");
            }

            _serviceClient.Update(update);

            var published = autoPublish && PublishWebResource(id);
            var existingName = existing.GetAttributeValue<string>("name") ?? "";

            var sb = new StringBuilder(256);
            sb.AppendLine($"[WebResource] Updated: {existingName}");
            sb.AppendLine($"webResourceId: {id}");
            sb.AppendLine($"fieldsUpdated: {fieldsUpdated}");
            sb.AppendLine($"published: {(published ? "yes" : "no")}");

            var structured = new ManageWebResourceResult
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
                Published = published
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        private CallToolResult HandleDelete(string webResourceId, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(webResourceId))
                return ErrorResult("Error: web_resource_id is required for 'delete'.\n" +
                                   "Use action='list' to find web resource IDs.");

            var resolved = ResolveWebResourceIdInput(webResourceId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return ErrorResult(resolved.Error);
            var id = resolved.Id.Value;

            var existing = RetrieveById(id);
            if (existing == null)
                return ErrorResult($"Error: Web resource '{webResourceId}' not found.\n" +
                                   $"Use action='list' to find valid web resource IDs.");

            var isManaged = existing.GetAttributeValue<bool?>("ismanaged");
            var isCustomizable = existing.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
            if (isManaged == true && isCustomizable?.Value == false)
                return ErrorResult($"Error: Cannot delete web resource '{webResourceId}' — it is managed and not customizable.");

            var existingName = existing.GetAttributeValue<string>("name") ?? "";
            var typeValue = existing.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0;

            if (_options.DryRun)
                return DryRunResult($"Would DELETE web resource '{existingName}' ({id}).");

            _serviceClient.Delete("webresource", id);

            var published = autoPublish && PublishAll();

            var structured = new ManageWebResourceResult
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
                ],
                Published = published
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = $"Deleted web resource '{existingName}' ({id})" }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        #endregion

        #region Dataverse Operations

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

        private bool PublishWebResource(Guid webResourceId)
        {
            try
            {
                var publish = new PublishXmlRequest
                {
                    ParameterXml =
                        "<importexportxml><webresources>" +
                        "<webresource>" + webResourceId.ToString() + "</webresource>" +
                        "</webresources></importexportxml>"
                };
                _serviceClient.Execute(publish);
                return true;
            }
            catch
            {
                return false;
            }
        }

        private bool PublishAll()
        {
            McpHelper.FireAndForgetPublishAll(_serviceClient);
            return true; // publishing is running in background
        }

        #endregion

        #region Helpers

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

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");

        private (Guid? Id, string Error) ResolveWebResourceIdInput(string webResourceInput)
        {
            var trimmed = webResourceInput?.Trim();
            if (string.IsNullOrWhiteSpace(trimmed))
                return (null, "Error: web_resource_id is required.");

            if (Guid.TryParse(trimmed, out var guid))
                return (guid, null);

            var resolve = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, trimmed, "manage_webresource");
            if (!resolve.IsSuccess)
                return (null, $"Error: web_resource_id '{trimmed}': {resolve.Error}");

            var id = resolve.Value.Id;
            if (id == Guid.Empty)
                id = resolve.Value.GetAttributeValue<Guid>("webresourceid");
            return id == Guid.Empty
                ? (null, $"Error: web_resource_id '{trimmed}' resolved without a webresourceid.")
                : (id, null);
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };

        #endregion
    }
}
