using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public partial class ManageCommandTool
    {
        // ── Create ──────────────────────────────────────────────

        private CallToolResult HandleCreate(string entityName, string location, string appId, string appName, string label, string onclickType, string jsWebResource, string jsFunction, string fontIcon, string iconWebResource, string tooltipTitle, string tooltipDescription, int sequence, bool hidden)
        {
            if (_options.DryRun)
                return DryRun("Would create an appaction command.", new ManageCommandResult
                {
                    Action = "create",
                    Status = "not_executed",
                    Message = "The appaction command was not created.",
                    CreateMode = "metadata"
                });

            if (string.IsNullOrWhiteSpace(entityName))
                return Error("entity_name is required for action='create'.");
            if (string.IsNullOrWhiteSpace(location))
                return Error("location is required for action='create'.");
            if (string.IsNullOrWhiteSpace(label))
                return Error("label is required for action='create'.");

            if (!LocationFilterMap.TryGetValue(location.Trim(), out var locationValue))
                return Error($"Invalid location '{location.Trim()}'. Use 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', or 'dashboard'.");

            var resolvedAppId = ResolveAppId(appId, appName, out var appResolveError);
            if (resolvedAppId == null)
                return Error(appResolveError ?? "Could not resolve app. Provide a valid app_id or app_name.");

            var onclickTypeValue = 0;
            if (!string.IsNullOrWhiteSpace(onclickType))
            {
                if (!ActionTypeFilterMap.TryGetValue(onclickType.Trim(), out onclickTypeValue))
                    return Error($"Invalid onclick_type '{onclickType.Trim()}'. Use 'none', 'javascript', or 'formula'.");
            }

            var (createEntityLogical, createEntityError) = ResolveEntityLogicalName(entityName);
            if (createEntityError != null)
                return Error(createEntityError);
            var createEntityId = ResolveEntityId(createEntityLogical);
            var createAppUniqueName = ResolveAppUniqueName(resolvedAppId.Value);
            var createPublisherPrefix = ResolvePublisherPrefix(createEntityLogical);
            var createSafeLabel = label.Trim().Replace(" ", "");
            var createLocationPrefix = LocationOobNamePrefix(locationValue);
            var createName = $"{createPublisherPrefix}.{createEntityLogical}.{createSafeLabel}.{createLocationPrefix}.Button";
            var createUniqueName = $"{createPublisherPrefix}__{createName}!{createAppUniqueName}!{createEntityLogical}!{locationValue}";

            var entity = new Entity("appaction");
            entity["name"] = createName;
            entity["uniquename"] = createUniqueName;
            entity["context"] = new OptionSetValue(1); // Entity
            entity["contextvalue"] = createEntityLogical;
            if (createEntityId.HasValue)
                entity["contextentity"] = new EntityReference("entity", createEntityId.Value);
            entity["location"] = new OptionSetValue(locationValue);
            entity["buttonlabeltext"] = label.Trim();
            entity["onclickeventtype"] = new OptionSetValue(onclickTypeValue);
            entity["appmoduleid"] = new EntityReference("appmodule", resolvedAppId.Value);
            entity["type"] = new OptionSetValue(0); // Standard
            entity["sequence"] = sequence > 0 ? (decimal)sequence : (decimal)100;
            entity["hidden"] = hidden;
            entity["isdisabled"] = false;
            entity["origin"] = new OptionSetValue(0); // Default (custom)

            if (!string.IsNullOrWhiteSpace(fontIcon))
                entity["fonticon"] = NormalizeFontIcon(fontIcon.Trim());

            if (!string.IsNullOrWhiteSpace(iconWebResource))
            {
                var iconWrId = ResolveWebResourceId(iconWebResource.Trim());
                if (iconWrId == null)
                    return Error($"Icon web resource '{iconWebResource.Trim()}' not found.");
                entity["iconwebresourceid"] = new EntityReference("webresource", iconWrId.Value);
            }

            if (!string.IsNullOrWhiteSpace(tooltipTitle))
                entity["buttontooltiptitle"] = tooltipTitle.Trim();

            if (!string.IsNullOrWhiteSpace(tooltipDescription))
                entity["buttontooltipdescription"] = tooltipDescription.Trim();

            if (onclickTypeValue == 2) // JavaScript
            {
                if (!string.IsNullOrWhiteSpace(jsWebResource))
                {
                    var wrId = ResolveWebResourceId(jsWebResource.Trim());
                    if (wrId == null)
                        return Error($"Web resource '{jsWebResource.Trim()}' not found.");
                    entity["onclickeventjavascriptwebresourceid"] = new EntityReference("webresource", wrId.Value);
                }
                if (!string.IsNullOrWhiteSpace(jsFunction))
                    entity["onclickeventjavascriptfunctionname"] = jsFunction.Trim();

                // Auto-set CrmParameters by location (mirrors build_ribbon_xml convention)
                var defaultParams = locationValue switch
                {
                    0 => "[{\"type\":5},{\"type\":2},{\"type\":3}]",                             // form: PrimaryControl, PrimaryEntityTypeName, PrimaryItemIds
                    1 => "[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",              // main_grid: SelectedControl, SelectedEntityTypeName, FirstSelectedItemId, SelectedControlSelectedItemIds
                    2 => "[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",              // sub_grid
                    3 => "[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",              // associated_grid
                    _ => null
                };
                if (defaultParams != null)
                    entity["onclickeventjavascriptparameters"] = defaultParams;
            }

            var newId = DataverseMutationExecutor.Create(_context, _serviceClient, entity);
            PublishHelper.PublishEntity(_context, _serviceClient, createEntityLogical.Trim().ToLowerInvariant());

            var structured = new ManageCommandResult
            {
                Action = "create",
                Status = "success",
                CommandId = newId.ToString(),
                Message = $"Command '{label.Trim()}' created successfully on {entityName.Trim()} ({LocationMap[locationValue]}) and entity published.",
                CreateMode = SolutionComponentCreateMode.None.ToString()
            };

            return Success(structured.Message, structured);
        }

        // ── Update ──────────────────────────────────────────────

        private CallToolResult HandleUpdate(string commandId, string label, string onclickType, string jsWebResource, string jsFunction, string fontIcon, string iconWebResource, string tooltipTitle, string tooltipDescription, int sequence)
        {
            if (_options.DryRun)
                return DryRun($"Would update appaction command '{commandId}'.", new ManageCommandResult
                {
                    Action = "update",
                    Status = "not_executed",
                    CommandId = commandId,
                    Message = "The appaction command was not updated."
                });

            if (string.IsNullOrWhiteSpace(commandId))
                return Error("command_id is required for action='update'.");
            if (!Guid.TryParse(commandId.Trim(), out var cmdGuid))
                return Error($"'{commandId.Trim()}' is not a valid GUID.");

            var existing = RetrieveAppActionOrNull(cmdGuid, "name", "buttonlabeltext", "contextvalue");
            if (existing == null)
                return Error($"Command '{commandId.Trim()}' not found.");

            var entity = new Entity("appaction", cmdGuid);
            var changes = new List<string>();

            if (!string.IsNullOrWhiteSpace(label))
            {
                entity["buttonlabeltext"] = label.Trim();
                changes.Add($"label='{label.Trim()}'");
            }

            if (sequence > 0)
            {
                entity["sequence"] = (decimal)sequence;
                changes.Add($"sequence={sequence}");
            }

            if (!string.IsNullOrWhiteSpace(onclickType))
            {
                if (!ActionTypeFilterMap.TryGetValue(onclickType.Trim(), out var onclickValue))
                    return Error($"Invalid onclick_type '{onclickType.Trim()}'. Use 'none', 'javascript', or 'formula'.");
                entity["onclickeventtype"] = new OptionSetValue(onclickValue);
                changes.Add($"onclickType='{onclickType.Trim()}'");
            }

            if (!string.IsNullOrWhiteSpace(jsWebResource))
            {
                var wrId = ResolveWebResourceId(jsWebResource.Trim());
                if (wrId == null)
                    return Error($"Web resource '{jsWebResource.Trim()}' not found.");
                entity["onclickeventjavascriptwebresourceid"] = new EntityReference("webresource", wrId.Value);
                changes.Add($"jsWebResource='{jsWebResource.Trim()}'");
            }

            if (!string.IsNullOrWhiteSpace(jsFunction))
            {
                entity["onclickeventjavascriptfunctionname"] = jsFunction.Trim();
                changes.Add($"jsFunction='{jsFunction.Trim()}'");
            }

            if (!string.IsNullOrWhiteSpace(fontIcon))
            {
                if (fontIcon.Trim().Equals("none", StringComparison.OrdinalIgnoreCase))
                {
                    entity["fonticon"] = null;
                    changes.Add("fontIcon=cleared");
                }
                else
                {
                    entity["fonticon"] = NormalizeFontIcon(fontIcon.Trim());
                    changes.Add($"fontIcon='{fontIcon.Trim()}'");
                }
            }

            if (!string.IsNullOrWhiteSpace(iconWebResource))
            {
                if (iconWebResource.Trim().Equals("none", StringComparison.OrdinalIgnoreCase))
                {
                    entity["iconwebresourceid"] = null;
                    changes.Add("iconWebResource=cleared");
                }
                else
                {
                    var iconWrId = ResolveWebResourceId(iconWebResource.Trim());
                    if (iconWrId == null)
                        return Error($"Icon web resource '{iconWebResource.Trim()}' not found.");
                    entity["iconwebresourceid"] = new EntityReference("webresource", iconWrId.Value);
                    changes.Add($"iconWebResource='{iconWebResource.Trim()}'");
                }
            }

            if (!string.IsNullOrWhiteSpace(tooltipTitle))
            {
                entity["buttontooltiptitle"] = tooltipTitle.Trim();
                changes.Add($"tooltipTitle='{tooltipTitle.Trim()}'");
            }

            if (!string.IsNullOrWhiteSpace(tooltipDescription))
            {
                entity["buttontooltipdescription"] = tooltipDescription.Trim();
                changes.Add($"tooltipDescription='{tooltipDescription.Trim()}'");
            }

            if (changes.Count == 0)
                return Error("No fields to update. Provide at least one field to change (label, sequence, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description). Use action='hide'/'show' to change visibility.");

            DataverseMutationExecutor.Update(_context, _serviceClient, entity);
            var updateEntityLogical = existing.GetAttributeValue<string>("contextvalue");
            PublishHelper.PublishEntity(_context, _serviceClient, updateEntityLogical.Trim().ToLowerInvariant());

            var commandName = existing.GetAttributeValue<string>("name") ?? commandId.Trim();
            var message = $"Command '{commandName}' updated: {string.Join(", ", changes)}. Entity published.";

            var structured = new ManageCommandResult
            {
                Action = "update",
                Status = "success",
                CommandId = commandId.Trim(),
                Message = message
            };

            return Success(message, structured);
        }
    }
}
