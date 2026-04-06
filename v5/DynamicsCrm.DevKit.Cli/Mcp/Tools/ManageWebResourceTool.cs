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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageWebResourceTool
    {
        private readonly ServiceClient _serviceClient;

        public ManageWebResourceTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
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
            Title = "List, inspect, create, update, or delete web resources",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageWebResourceResult)),
        Description(
            "List and inspect web resources (JavaScript, CSS, HTML, images, RESX) in Dataverse. " +
            "Essential for mapping local files to their Dataverse web resource names/GUIDs.\n\n" +

            "FIVE ACTIONS:\n" +
            "- action='list': List web resources filtered by name, type, solution. Optional: name, type_filter, solution_name, max_records\n" +
            "- action='detail': Full metadata for one web resource. Requires web_resource_id\n" +
            "- action='create': Create a new web resource. Requires name + content (base64) + type. Optional: display_name, description, solution_name\n" +
            "- action='update': Update content and/or metadata. Requires web_resource_id. Optional: content, display_name, description\n" +
            "- action='delete': Permanently delete a web resource. Requires web_resource_id. WARNING: cannot be undone\n\n" +

            "TIPS:\n" +
            "- Call this tool first to find library_name needed for build_form_xml add_event/add_library\n" +
            "- Names follow convention: {prefix}_/path/filename.ext (e.g., v4_/entities/Account.form.js)\n" +
            "- content must be base64 encoded for create/update\n" +
            "- type values: 'js', 'html', 'css', 'xml', 'png', 'jpg', 'gif', 'svg', 'ico', 'resx', 'xsl', 'xap'\n" +
            "- Related: build_form_xml (add events/libraries), manage_form (inspect form structure)")]
        public CallToolResult manage_webresource(
            [Description(
                "The action to perform: 'list', 'detail', 'create', 'update', or 'delete'."
            )] string action,
            [Description(
                "GUID of the web resource. Required for detail, update, and delete. Empty for list and create."
            )] string web_resource_id = "",
            [Description(
                "Web resource unique name (e.g., 'v4_/entities/Account.form.js'). " +
                "Required for create. For list: contains filter on name."
            )] string name = "",
            [Description(
                "Display name. Optional for create/update."
            )] string display_name = "",
            [Description(
                "Description text. Optional for create/update."
            )] string description = "",
            [Description(
                "Base64 encoded file content. Required for create. Optional for update."
            )] string content = "",
            [Description(
                "Web resource type for create: 'js', 'html', 'css', 'xml', 'png', 'jpg', 'gif', 'svg', 'ico', 'resx', 'xsl', 'xap'. " +
                "Required for create, ignored for other actions. For list: use type_filter instead."
            )] string type = "",
            [Description(
                "Filter by solution unique name (list mode). Solution to add to (create mode)."
            )] string solution_name = "",
            [Description(
                "Filter by type in list mode: 'js', 'html', 'css', 'xml', 'png', 'jpg', 'gif', 'svg', 'ico', 'resx'. Empty = all."
            )] string type_filter = "",
            [Description(
                "Max results for list mode (1-500). Default: 50."
            )] int max_records = 50,
            [Description(
                "Publish after changes. Default: true."
            )] bool auto_publish = true)
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
                return ErrorResult($"Error: Invalid type_filter '{typeFilter.Trim()}'. Use: js, html, css, xml, png, jpg, gif, svg, ico, resx.");

            if (maxRecords <= 0) maxRecords = 50;
            if (maxRecords > 500) maxRecords = 500;

            var filters = new StringBuilder();
            filters.AppendLine("      <condition attribute='ismanaged' operator='eq' value='0'/>");

            if (!string.IsNullOrWhiteSpace(nameFilter))
                filters.AppendLine($"      <condition attribute='name' operator='like' value='%{EscapeXml(nameFilter.Trim())}%'/>");

            if (!string.IsNullOrWhiteSpace(typeFilter) && TypeFilterMap.TryGetValue(typeFilter.Trim(), out var typeCode))
                filters.AppendLine($"      <condition attribute='webresourcetype' operator='eq' value='{typeCode}'/>");

            var solutionJoin = "";
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
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
                return ErrorResult("Error: web_resource_id is required for 'detail'.");

            webResourceId = webResourceId.Trim();
            if (!Guid.TryParse(webResourceId, out _))
                return ErrorResult($"Error: '{webResourceId}' is not a valid GUID.");

            var query = new QueryExpression("webresource")
            {
                ColumnSet = new ColumnSet(
                    "webresourceid", "name", "displayname", "webresourcetype",
                    "description", "languagecode", "ismanaged", "iscustomizable",
                    "canbedeleted", "ishidden", "isenabledformobileclient",
                    "createdby", "createdon", "modifiedby", "modifiedon",
                    "solutionid", "introducedversion", "dependencyxml")
            };
            query.Criteria.AddCondition("webresourceid", ConditionOperator.Equal, new Guid(webResourceId));

            var result = _serviceClient.RetrieveMultiple(query);
            if (result.Entities.Count == 0)
                return ErrorResult($"Error: Web resource '{webResourceId}' not found.");

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
                return ErrorResult("Error: name is required for 'create'.");

            if (string.IsNullOrWhiteSpace(content))
                return ErrorResult("Error: content (base64 encoded) is required for 'create'.");

            if (string.IsNullOrWhiteSpace(type))
                return ErrorResult("Error: type is required for 'create'. Valid values: js, html, css, xml, png, jpg, gif, svg, ico, resx, xsl, xap.");

            var typeTrimmed = type.Trim().ToLowerInvariant();
            if (!TypeFilterMap.TryGetValue(typeTrimmed, out var typeCode))
                return ErrorResult($"Error: Invalid type '{type}'. Valid values: js, html, css, xml, png, jpg, gif, svg, ico, resx, xsl, xap.");

            name = name.Trim();

            // Check if already exists
            var existing = RetrieveByName(name);
            if (existing != null)
                return ErrorResult($"Error: Web resource '{name}' already exists (ID: {existing.Id}). Use action='update' to modify it.");

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

            var webResourceId = _serviceClient.Create(webResource);

            string solWarning = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                try
                {
                    _serviceClient.Execute(new AddSolutionComponentRequest
                    {
                        AddRequiredComponents = true,
                        ComponentType = 61,
                        ComponentId = webResourceId,
                        SolutionUniqueName = solutionName.Trim()
                    });
                }
                catch (Exception ex)
                {
                    solWarning = $"Failed to add to solution '{solutionName}': {ex.Message}";
                }
            }

            var published = autoPublish && PublishWebResource(webResourceId);

            var typeLabel = TypeCodeMap.TryGetValue(typeCode, out var t) ? t : typeCode.ToString();

            var sb = new StringBuilder(256);
            sb.AppendLine($"[WebResource] Created: {name}");
            sb.AppendLine($"webResourceId: {webResourceId}");
            sb.AppendLine($"type: {typeLabel}");
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
                SolutionName = NullIfEmpty(solutionName),
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
                return ErrorResult("Error: web_resource_id is required for 'update'.");

            webResourceId = webResourceId.Trim();
            if (!Guid.TryParse(webResourceId, out var id))
                return ErrorResult($"Error: '{webResourceId}' is not a valid GUID.");

            var existing = RetrieveById(id);
            if (existing == null)
                return ErrorResult($"Error: Web resource '{webResourceId}' not found.");

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

            _serviceClient.Update(update);

            var published = autoPublish && PublishWebResource(id);
            var existingName = existing.GetAttributeValue<string>("name") ?? "";

            var sb = new StringBuilder(256);
            sb.AppendLine($"[WebResource] Updated: {existingName}");
            sb.AppendLine($"webResourceId: {webResourceId}");
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
                        WebResourceId = webResourceId,
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
                return ErrorResult("Error: web_resource_id is required for 'delete'.");

            webResourceId = webResourceId.Trim();
            if (!Guid.TryParse(webResourceId, out var id))
                return ErrorResult($"Error: '{webResourceId}' is not a valid GUID.");

            var existing = RetrieveById(id);
            if (existing == null)
                return ErrorResult($"Error: Web resource '{webResourceId}' not found.");

            var isManaged = existing.GetAttributeValue<bool?>("ismanaged");
            var isCustomizable = existing.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
            if (isManaged == true && isCustomizable?.Value == false)
                return ErrorResult($"Error: Cannot delete web resource '{webResourceId}' — it is managed and not customizable.");

            var existingName = existing.GetAttributeValue<string>("name") ?? "";
            var typeValue = existing.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0;

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
                        WebResourceId = webResourceId,
                        Name = existingName,
                        Type = TypeCodeMap.TryGetValue(typeValue, out var t3) ? t3 : "Unknown",
                        TypeCode = typeValue
                    }
                ],
                Published = published
            };

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = $"Deleted web resource '{existingName}' ({webResourceId})" }],
                StructuredContent = JsonSerializer.SerializeToElement(structured)
            };
        }

        #endregion

        #region Dataverse Operations

        private Entity RetrieveByName(string name)
        {
            var query = new QueryExpression("webresource")
            {
                ColumnSet = new ColumnSet("webresourceid", "name"),
                Criteria = new FilterExpression
                {
                    Conditions = { new ConditionExpression("name", ConditionOperator.Equal, name) }
                },
                TopCount = 1
            };
            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.FirstOrDefault();
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
            try
            {
                _serviceClient.Execute(new PublishAllXmlRequest());
                return true;
            }
            catch
            {
                return false;
            }
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

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        #endregion
    }
}
