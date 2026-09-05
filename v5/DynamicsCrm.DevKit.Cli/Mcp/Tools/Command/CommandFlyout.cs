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
        // ── Add Flyout ──────────────────────────────────────────

        private CallToolResult HandleAddFlyout(string entityName, string location, string appId, string appName, string label, string itemsJson, string fontIcon, string iconWebResource, string tooltipTitle, string tooltipDescription, int sequence, bool hidden)
        {
            if (_options.DryRun)
                return DryRun("Would create a Dropdown Button, Group, and flyout items.", new ManageCommandResult
                {
                    Action = "add_flyout",
                    Status = "not_executed",
                    Message = "The flyout command was not created.",
                    CreateMode = "metadata"
                });

            if (string.IsNullOrWhiteSpace(entityName))
                return Error("entity_name is required for action='add_flyout'.",
                    "Pass the entity Display Name or logical name. Use get_tables to list available tables.");
            if (string.IsNullOrWhiteSpace(location))
                return Error("location is required for action='add_flyout'.",
                    "Pass one of: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");
            if (string.IsNullOrWhiteSpace(label))
                return Error("label is required for action='add_flyout'.",
                    "Pass the flyout button label text in label.");
            if (string.IsNullOrWhiteSpace(itemsJson))
                return Error("items is required for action='add_flyout'.",
                    "Pass a JSON array of item objects in items, e.g. [{\"label\":\"Item 1\"}].");

            if (!LocationFilterMap.TryGetValue(location.Trim(), out var locationValue))
                return Error($"Invalid location '{location.Trim()}'.",
                    "Valid values: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");

            using var itemsDoc = JsonDocument.Parse(itemsJson);
            if (itemsDoc.RootElement.ValueKind != JsonValueKind.Array)
                return Error("items must be a JSON array of item objects.",
                    "Pass items as a JSON array, e.g. [{\"label\":\"Item 1\"}].");
            var itemList = itemsDoc.RootElement.EnumerateArray().ToList();

            if (itemList.Count == 0)
                return Error("items array must have at least 1 item.",
                    "Add at least one item object with a 'label' field.");

            var resolvedAppId = ResolveAppId(appId, appName, out var appResolveError);
            if (resolvedAppId == null)
                return Error((appResolveError ?? "Could not resolve app.").Split("\r\n")[0],
                    "Pass app_id (app module GUID) or app_name. Use manage_app(action='list') to discover apps.");

            var (entityLogical, entityError) = ResolveEntityLogicalName(entityName);
            if (entityError != null)
                return Error(entityError.Split("\r\n")[0],
                    "Use get_tables to list available tables.");
            var publisherPrefix = ResolvePublisherPrefix(entityLogical);
            var appUniqueName = ResolveAppUniqueName(resolvedAppId.Value);
            var entityId = ResolveEntityId(entityLogical);
            var safeLabel = label.Trim().Replace(" ", "");
            var locPrefix = LocationOobNamePrefix(locationValue);

            // Create Dropdown Button (the flyout container)
            var dropdownName = $"{publisherPrefix}.{entityLogical}.{safeLabel}.{locPrefix}.Dropdown";
            var dropdownUniqueName = $"{publisherPrefix}__{dropdownName}!{appUniqueName}!{entityLogical}!{locationValue}";

            var dropdown = new Entity("appaction");
            dropdown["name"] = dropdownName;
            dropdown["uniquename"] = dropdownUniqueName;
            dropdown["context"] = new OptionSetValue(1);
            dropdown["contextvalue"] = entityLogical;
            if (entityId.HasValue)
                dropdown["contextentity"] = new EntityReference("entity", entityId.Value);
            dropdown["location"] = new OptionSetValue(locationValue);
            dropdown["buttonlabeltext"] = label.Trim();
            dropdown["type"] = new OptionSetValue(1); // Dropdown Button
            dropdown["onclickeventtype"] = new OptionSetValue(0); // None
            dropdown["appmoduleid"] = new EntityReference("appmodule", resolvedAppId.Value);
            dropdown["sequence"] = sequence > 0 ? (decimal)sequence : (decimal)85;
            dropdown["hidden"] = hidden;
            dropdown["isdisabled"] = false;
            dropdown["origin"] = new OptionSetValue(0);

            if (!string.IsNullOrWhiteSpace(fontIcon))
                dropdown["fonticon"] = fontIcon.Trim();

            if (!string.IsNullOrWhiteSpace(iconWebResource))
            {
                var iconWrId = ResolveWebResourceId(iconWebResource.Trim());
                if (iconWrId == null)
                    return Error($"Icon web resource '{iconWebResource.Trim()}' not found.",
                        "Use manage_webresource(action='list') to find valid web resource names.");
                dropdown["iconwebresourceid"] = new EntityReference("webresource", iconWrId.Value);
            }

            if (!string.IsNullOrWhiteSpace(tooltipTitle))
                dropdown["buttontooltiptitle"] = tooltipTitle.Trim();
            if (!string.IsNullOrWhiteSpace(tooltipDescription))
                dropdown["buttontooltipdescription"] = tooltipDescription.Trim();

            var dropdownId = DataverseMutationExecutor.Create(_context, _orgService, dropdown);

            // Create Group (invisible container, no label)
            var groupName = $"{publisherPrefix}.{entityLogical}.{safeLabel}.{locPrefix}.Group";
            var groupUniqueName = $"{publisherPrefix}__{groupName}!{appUniqueName}!{entityLogical}!{locationValue}";

            var group = new Entity("appaction");
            group["name"] = groupName;
            group["uniquename"] = groupUniqueName;
            group["context"] = new OptionSetValue(1);
            group["contextvalue"] = entityLogical;
            if (entityId.HasValue)
                group["contextentity"] = new EntityReference("entity", entityId.Value);
            group["location"] = new OptionSetValue(locationValue);
            group["type"] = new OptionSetValue(3); // Group
            group["onclickeventtype"] = new OptionSetValue(0);
            group["appmoduleid"] = new EntityReference("appmodule", resolvedAppId.Value);
            group["sequence"] = (decimal)10000;
            group["hidden"] = false;
            group["isdisabled"] = false;
            group["origin"] = new OptionSetValue(0);
            group["parentappactionid"] = new EntityReference("appaction", dropdownId);

            var groupId = DataverseMutationExecutor.Create(_context, _orgService, group);

            // Create items as Standard Buttons under the Group
            var createdItems = new List<string>();
            for (var i = 0; i < itemList.Count; i++)
            {
                var item = itemList[i];
                var itemLabel = GetJsonString(item, "label");
                if (string.IsNullOrWhiteSpace(itemLabel))
                    return Error($"Item [{i}] is missing 'label'.",
                        "Each item object must include a 'label' field.");

                var itemOnclickType = GetJsonString(item, "onclick_type");
                var itemJsWebResource = GetJsonString(item, "javascript_webresource");
                var itemJsFunction = GetJsonString(item, "javascript_function");
                var itemSeqStr = GetJsonString(item, "sequence");
                var itemSeq = int.TryParse(itemSeqStr, out var parsedSeq) ? parsedSeq : (i + 1) * 10000;

                var createResult = CreateFlyoutItem(entityLogical, locationValue, resolvedAppId.Value, appUniqueName,
                    publisherPrefix, entityId, groupId, safeLabel, locPrefix,
                    itemLabel, itemOnclickType, itemJsWebResource, itemJsFunction, itemSeq);

                if (createResult.error != null)
                {
                    // Rollback not trivial — report error with partial success note
                    return Error($"Error creating item '{itemLabel}': {createResult.error}.",
                        $"Flyout '{label.Trim()}' was partially created (dropdown + group already exist with id {dropdownId}). Clean it up via the Dataverse UI or manage_record(action='delete') before retrying.");
                }
                createdItems.Add(itemLabel);
            }

            var message = $"Flyout '{label.Trim()}' created on {entityLogical} ({LocationMap[locationValue]}) with {createdItems.Count} item(s): {string.Join(", ", createdItems.Select(x => $"'{x}'"))}. FlyoutCommandId: {dropdownId}.";
            var structured = new ManageCommandResult
            {
                Action = "add_flyout",
                Status = "success",
                CommandId = dropdownId.ToString(),
                Message = message,
                CreateMode = SolutionComponentCreateMode.None.ToString()
            };

            return Success(message, structured);
        }

        // ── Update Flyout ──────────────────────────────────────

        private CallToolResult HandleUpdateFlyout(string commandId, string label, string fontIcon, string iconWebResource, string tooltipTitle, string tooltipDescription, int sequence)
        {
            if (_options.DryRun)
                return DryRun($"Would update flyout command '{commandId}'.", new ManageCommandResult
                {
                    Action = "update_flyout",
                    Status = "not_executed",
                    CommandId = commandId,
                    Message = "The flyout command was not updated."
                });

            if (string.IsNullOrWhiteSpace(commandId))
                return Error("command_id is required for action='update_flyout'.",
                    "Pass the Dropdown Button appaction GUID. Use manage_command(action='list') to find command IDs.");
            if (!Guid.TryParse(commandId.Trim(), out var cmdGuid))
                return Error($"'{commandId.Trim()}' is not a valid GUID.",
                    "Pass an appaction GUID. Use manage_command(action='list') to find command IDs.");

            var existing = RetrieveAppActionOrNull(cmdGuid, "name", "type");
            if (existing == null)
                return Error($"Command '{commandId.Trim()}' not found.",
                    "Use manage_command(action='list') to find valid command IDs.");

            var typeValue = existing.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
            if (typeValue != 1) // must be Dropdown Button
                return Error(
                    $"Command '{commandId.Trim()}' is not a Dropdown Button (type={TypeMap.GetValueOrDefault(typeValue, typeValue.ToString())}).",
                    "Use action='update_split_button' for Split Buttons or action='update' for Standard Buttons.");

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
                        return Error($"Icon web resource '{iconWebResource.Trim()}' not found.",
                            "Use manage_webresource(action='list') to find valid web resource names.");
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
                return Error("No fields to update.",
                    "Provide at least one: label, sequence, font_icon, icon_webresource, tooltip_title, tooltip_description.");

            DataverseMutationExecutor.Update(_context, _orgService, entity);

            var commandName = existing.GetAttributeValue<string>("name") ?? commandId.Trim();
            var message = $"Flyout '{commandName}' updated: {string.Join(", ", changes)}.";

            var structured = new ManageCommandResult
            {
                Action = "update_flyout",
                Status = "success",
                CommandId = commandId.Trim(),
                Message = message
            };

            return Success(message, structured);
        }

        // ── Add Split Button ────────────────────────────────────

        private CallToolResult HandleAddSplitButton(string entityName, string location, string appId, string appName, string label, string onclickType, string jsWebResource, string jsFunction, string itemsJson, string fontIcon, string iconWebResource, string tooltipTitle, string tooltipDescription, int sequence, bool hidden)
        {
            if (_options.DryRun)
                return DryRun("Would create a Split Button, Group, and split-button items.", new ManageCommandResult
                {
                    Action = "add_split_button",
                    Status = "not_executed",
                    Message = "The split button was not created.",
                    CreateMode = "metadata"
                });

            if (string.IsNullOrWhiteSpace(entityName))
                return Error("entity_name is required for action='add_split_button'.",
                    "Pass the entity Display Name or logical name. Use get_tables to list available tables.");
            if (string.IsNullOrWhiteSpace(location))
                return Error("location is required for action='add_split_button'.",
                    "Pass one of: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");
            if (string.IsNullOrWhiteSpace(label))
                return Error("label is required for action='add_split_button'.",
                    "Pass the split button label text in label.");
            if (string.IsNullOrWhiteSpace(itemsJson))
                return Error("items is required for action='add_split_button'.",
                    "Pass a JSON array of item objects in items, e.g. [{\"label\":\"Item 1\"}].");

            if (!LocationFilterMap.TryGetValue(location.Trim(), out var locationValue))
                return Error($"Invalid location '{location.Trim()}'.",
                    "Valid values: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");

            // Main button onclick type
            var onclickTypeValue = 0;
            if (!string.IsNullOrWhiteSpace(onclickType))
            {
                if (!ActionTypeFilterMap.TryGetValue(onclickType.Trim(), out onclickTypeValue))
                    return Error($"Invalid onclick_type '{onclickType.Trim()}'.",
                        "Valid values: 'none', 'javascript', 'formula'.");
            }

            using var itemsDoc = JsonDocument.Parse(itemsJson);
            if (itemsDoc.RootElement.ValueKind != JsonValueKind.Array)
                return Error("items must be a JSON array of item objects.",
                    "Pass items as a JSON array, e.g. [{\"label\":\"Item 1\"}].");
            var itemList = itemsDoc.RootElement.EnumerateArray().ToList();

            if (itemList.Count == 0)
                return Error("items array must have at least 1 item.",
                    "Add at least one item object with a 'label' field.");

            var resolvedAppId = ResolveAppId(appId, appName, out var appResolveError);
            if (resolvedAppId == null)
                return Error((appResolveError ?? "Could not resolve app.").Split("\r\n")[0],
                    "Pass app_id (app module GUID) or app_name. Use manage_app(action='list') to discover apps.");

            var (entityLogical, entityError) = ResolveEntityLogicalName(entityName);
            if (entityError != null)
                return Error(entityError.Split("\r\n")[0],
                    "Use get_tables to list available tables.");
            var publisherPrefix = ResolvePublisherPrefix(entityLogical);
            var appUniqueName = ResolveAppUniqueName(resolvedAppId.Value);
            var entityId = ResolveEntityId(entityLogical);
            var safeLabel = label.Trim().Replace(" ", "");
            var locPrefix = LocationOobNamePrefix(locationValue);

            // Create Split Button (the container — carries the main onclick action)
            var splitName = $"{publisherPrefix}.{entityLogical}.{safeLabel}.{locPrefix}.Split";
            var splitUniqueName = $"{publisherPrefix}__{splitName}!{appUniqueName}!{entityLogical}!{locationValue}";

            var split = new Entity("appaction");
            split["name"] = splitName;
            split["uniquename"] = splitUniqueName;
            split["context"] = new OptionSetValue(1);
            split["contextvalue"] = entityLogical;
            if (entityId.HasValue)
                split["contextentity"] = new EntityReference("entity", entityId.Value);
            split["location"] = new OptionSetValue(locationValue);
            split["buttonlabeltext"] = label.Trim();
            split["type"] = new OptionSetValue(2); // Split Button
            split["onclickeventtype"] = new OptionSetValue(onclickTypeValue);
            split["appmoduleid"] = new EntityReference("appmodule", resolvedAppId.Value);
            split["sequence"] = sequence > 0 ? (decimal)sequence : (decimal)85;
            split["hidden"] = hidden;
            split["isdisabled"] = false;
            split["origin"] = new OptionSetValue(0);

            if (onclickTypeValue == 2) // JavaScript main action
            {
                if (!string.IsNullOrWhiteSpace(jsWebResource))
                {
                    var wrId = ResolveWebResourceId(jsWebResource.Trim());
                    if (wrId == null)
                        return Error($"Web resource '{jsWebResource.Trim()}' not found.",
                            "Use manage_webresource(action='list') to find valid web resource names.");
                    split["onclickeventjavascriptwebresourceid"] = new EntityReference("webresource", wrId.Value);
                }
                if (!string.IsNullOrWhiteSpace(jsFunction))
                    split["onclickeventjavascriptfunctionname"] = jsFunction.Trim();

                var defaultParams = locationValue switch
                {
                    0 => "[{\"type\":5},{\"type\":2},{\"type\":3}]",
                    1 => "[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",
                    2 => "[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",
                    3 => "[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",
                    _ => null
                };
                if (defaultParams != null)
                    split["onclickeventjavascriptparameters"] = defaultParams;
            }

            if (!string.IsNullOrWhiteSpace(fontIcon))
                split["fonticon"] = NormalizeFontIcon(fontIcon.Trim());

            if (!string.IsNullOrWhiteSpace(iconWebResource))
            {
                var iconWrId = ResolveWebResourceId(iconWebResource.Trim());
                if (iconWrId == null)
                    return Error($"Icon web resource '{iconWebResource.Trim()}' not found.",
                        "Use manage_webresource(action='list') to find valid web resource names.");
                split["iconwebresourceid"] = new EntityReference("webresource", iconWrId.Value);
            }

            if (!string.IsNullOrWhiteSpace(tooltipTitle))
                split["buttontooltiptitle"] = tooltipTitle.Trim();
            if (!string.IsNullOrWhiteSpace(tooltipDescription))
                split["buttontooltipdescription"] = tooltipDescription.Trim();

            var splitId = DataverseMutationExecutor.Create(_context, _orgService, split);

            // Create Group (internal container under the Split Button)
            var groupName = $"{publisherPrefix}.{entityLogical}.{safeLabel}.{locPrefix}.Group";
            var groupUniqueName = $"{publisherPrefix}__{groupName}!{appUniqueName}!{entityLogical}!{locationValue}";

            var group = new Entity("appaction");
            group["name"] = groupName;
            group["uniquename"] = groupUniqueName;
            group["context"] = new OptionSetValue(1);
            group["contextvalue"] = entityLogical;
            if (entityId.HasValue)
                group["contextentity"] = new EntityReference("entity", entityId.Value);
            group["location"] = new OptionSetValue(locationValue);
            group["type"] = new OptionSetValue(3); // Group
            group["onclickeventtype"] = new OptionSetValue(0);
            group["appmoduleid"] = new EntityReference("appmodule", resolvedAppId.Value);
            group["sequence"] = (decimal)10000;
            group["hidden"] = false;
            group["isdisabled"] = false;
            group["origin"] = new OptionSetValue(0);
            group["parentappactionid"] = new EntityReference("appaction", splitId);

            var groupId = DataverseMutationExecutor.Create(_context, _orgService, group);

            // Create dropdown items as Standard Buttons under the Group
            var createdItems = new List<string>();
            for (var i = 0; i < itemList.Count; i++)
            {
                var item = itemList[i];
                var itemLabel = GetJsonString(item, "label");
                if (string.IsNullOrWhiteSpace(itemLabel))
                    return Error($"Item [{i}] is missing 'label'.",
                        "Each item object must include a 'label' field.");

                var itemOnclickType = GetJsonString(item, "onclick_type");
                var itemJsWebResource = GetJsonString(item, "javascript_webresource");
                var itemJsFunction = GetJsonString(item, "javascript_function");
                var itemSeqStr = GetJsonString(item, "sequence");
                var itemSeq = int.TryParse(itemSeqStr, out var parsedSeq) ? parsedSeq : (i + 1) * 10000;

                var createResult = CreateFlyoutItem(entityLogical, locationValue, resolvedAppId.Value, appUniqueName,
                    publisherPrefix, entityId, groupId, safeLabel, locPrefix,
                    itemLabel, itemOnclickType, itemJsWebResource, itemJsFunction, itemSeq);

                if (createResult.error != null)
                    return Error($"Error creating item '{itemLabel}': {createResult.error}.",
                        $"Split button '{label.Trim()}' was partially created (split + group already exist with id {splitId}). Clean it up via the Dataverse UI or manage_record(action='delete') before retrying.");

                createdItems.Add(itemLabel);
            }

            var message = $"Split Button '{label.Trim()}' created on {entityLogical} ({LocationMap[locationValue]}) with {createdItems.Count} item(s): {string.Join(", ", createdItems.Select(x => $"'{x}'"))}. SplitCommandId: {splitId}.";
            var structured = new ManageCommandResult
            {
                Action = "add_split_button",
                Status = "success",
                CommandId = splitId.ToString(),
                Message = message,
                CreateMode = SolutionComponentCreateMode.None.ToString()
            };

            return Success(message, structured);
        }

        // ── Update Split Button ─────────────────────────────────

        private CallToolResult HandleUpdateSplitButton(string commandId, string label, string onclickType, string jsWebResource, string jsFunction, string fontIcon, string iconWebResource, string tooltipTitle, string tooltipDescription, int sequence)
        {
            if (_options.DryRun)
                return DryRun($"Would update split button command '{commandId}'.", new ManageCommandResult
                {
                    Action = "update_split_button",
                    Status = "not_executed",
                    CommandId = commandId,
                    Message = "The split button was not updated."
                });

            if (string.IsNullOrWhiteSpace(commandId))
                return Error("command_id is required for action='update_split_button'.",
                    "Pass the Split Button appaction GUID. Use manage_command(action='list') to find command IDs.");
            if (!Guid.TryParse(commandId.Trim(), out var cmdGuid))
                return Error($"'{commandId.Trim()}' is not a valid GUID.",
                    "Pass an appaction GUID. Use manage_command(action='list') to find command IDs.");

            var existing = RetrieveAppActionOrNull(cmdGuid, "name", "type");
            if (existing == null)
                return Error($"Command '{commandId.Trim()}' not found.",
                    "Use manage_command(action='list') to find valid command IDs.");

            var typeValue = existing.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
            if (typeValue != 2) // must be Split Button
                return Error(
                    $"Command '{commandId.Trim()}' is not a Split Button (type={TypeMap.GetValueOrDefault(typeValue, typeValue.ToString())}).",
                    "Use action='update_flyout' for Dropdown Buttons or action='update' for Standard Buttons.");

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
                    return Error($"Invalid onclick_type '{onclickType.Trim()}'.",
                        "Valid values: 'none', 'javascript', 'formula'.");
                entity["onclickeventtype"] = new OptionSetValue(onclickValue);
                changes.Add($"onclickType='{onclickType.Trim()}'");
            }

            if (!string.IsNullOrWhiteSpace(jsWebResource))
            {
                var wrId = ResolveWebResourceId(jsWebResource.Trim());
                if (wrId == null)
                    return Error($"Web resource '{jsWebResource.Trim()}' not found.",
                        "Use manage_webresource(action='list') to find valid web resource names.");
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
                        return Error($"Icon web resource '{iconWebResource.Trim()}' not found.",
                            "Use manage_webresource(action='list') to find valid web resource names.");
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
                return Error("No fields to update.",
                    "Provide at least one: label, sequence, onclick_type, javascript_webresource, javascript_function, font_icon, icon_webresource, tooltip_title, tooltip_description.");

            DataverseMutationExecutor.Update(_context, _orgService, entity);

            var commandName = existing.GetAttributeValue<string>("name") ?? commandId.Trim();
            var message = $"Split Button '{commandName}' updated: {string.Join(", ", changes)}.";

            var structured = new ManageCommandResult
            {
                Action = "update_split_button",
                Status = "success",
                CommandId = commandId.Trim(),
                Message = message
            };

            return Success(message, structured);
        }

        // ── Add Flyout Item ─────────────────────────────────────

        private CallToolResult HandleAddFlyoutItem(string flyoutCommandId, string label, string onclickType, string jsWebResource, string jsFunction, int sequence, bool hidden)
        {
            if (_options.DryRun)
                return DryRun($"Would add an item to flyout command '{flyoutCommandId}'.", new ManageCommandResult
                {
                    Action = "add_flyout_item",
                    Status = "not_executed",
                    CommandId = flyoutCommandId,
                    Message = "The flyout item was not created."
                });

            if (string.IsNullOrWhiteSpace(flyoutCommandId))
                return Error("flyout_command_id is required for action='add_flyout_item'.",
                    "Pass the flyout container (Dropdown or Split Button) appaction GUID. Use manage_command(action='list', include_children=true) to find command IDs.");
            if (!Guid.TryParse(flyoutCommandId.Trim(), out var flyoutGuid))
                return Error($"'{flyoutCommandId.Trim()}' is not a valid GUID.",
                    "Pass the flyout container appaction GUID. Use manage_command(action='list', include_children=true) to find command IDs.");
            if (string.IsNullOrWhiteSpace(label))
                return Error("label is required for action='add_flyout_item'.",
                    "Pass the display label for the new flyout item.");

            // Load flyout dropdown record
            var flyout = RetrieveAppActionOrNull(flyoutGuid, "name", "type", "contextvalue", "location", "appmoduleid");
            if (flyout == null)
                return Error($"Flyout command '{flyoutCommandId.Trim()}' not found.",
                    "Check the flyout_command_id. Use manage_command(action='list', include_children=true) to find command IDs.");

            var flyoutType = flyout.GetAttributeValue<OptionSetValue>("type")?.Value ?? -1;
            if (flyoutType != 1 && flyoutType != 2)
                return Error($"'{flyoutCommandId.Trim()}' is not a Dropdown or Split Button (type={TypeMap.GetValueOrDefault(flyoutType, flyoutType.ToString())}).",
                    "Pass the flyout container's id, not an item's id. Use manage_command(action='list', include_children=true) to see the flyout hierarchy.");

            var entityLogical = flyout.GetAttributeValue<string>("contextvalue") ?? "";
            var locationValue = flyout.GetAttributeValue<OptionSetValue>("location")?.Value ?? 0;
            var appModuleRef = flyout.GetAttributeValue<EntityReference>("appmoduleid");

            if (appModuleRef == null)
                return Error("Flyout has no associated app module.",
                    "The flyout command is not linked to an app. Recreate it with manage_command(action='add_flyout') passing app_id or app_name.");

            // Find the Group child of the flyout
            var groupId = FindFlyoutGroup(flyoutGuid);
            if (groupId == null)
            {
                // Auto-create a Group if it doesn't exist (defensive)
                var publisherPfx = ResolvePublisherPrefix(entityLogical);
                var appUniqueNameVal = ResolveAppUniqueName(appModuleRef.Id);
                var entityIdVal = ResolveEntityId(entityLogical);
                var flyoutName = flyout.GetAttributeValue<string>("name") ?? "";
                var safeLbl = flyoutName.Contains('.') ? flyoutName.Split('.').Skip(2).First() : flyoutName.Replace(" ", "");
                var locPfx = LocationOobNamePrefix(locationValue);
                var groupName = $"{publisherPfx}.{entityLogical}.{safeLbl}.{locPfx}.Group";
                var groupUniqueName = $"{publisherPfx}__{groupName}!{appUniqueNameVal}!{entityLogical}!{locationValue}";

                var groupEntity = new Entity("appaction");
                groupEntity["name"] = groupName;
                groupEntity["uniquename"] = groupUniqueName;
                groupEntity["context"] = new OptionSetValue(1);
                groupEntity["contextvalue"] = entityLogical;
                if (entityIdVal.HasValue)
                    groupEntity["contextentity"] = new EntityReference("entity", entityIdVal.Value);
                groupEntity["location"] = new OptionSetValue(locationValue);
                groupEntity["type"] = new OptionSetValue(3);
                groupEntity["onclickeventtype"] = new OptionSetValue(0);
                groupEntity["appmoduleid"] = new EntityReference("appmodule", appModuleRef.Id);
                groupEntity["sequence"] = (decimal)10000;
                groupEntity["hidden"] = false;
                groupEntity["isdisabled"] = false;
                groupEntity["origin"] = new OptionSetValue(0);
                groupEntity["parentappactionid"] = new EntityReference("appaction", flyoutGuid);

                groupId = DataverseMutationExecutor.Create(_context, _orgService, groupEntity);
            }

            // Count existing items to auto-assign sequence
            var existingItemCount = CountFlyoutItems(flyoutGuid);
            var itemSeq = sequence > 0 ? sequence : (existingItemCount + 1) * 10000;

            var onclickValue = 0;
            if (!string.IsNullOrWhiteSpace(onclickType))
            {
                if (!ActionTypeFilterMap.TryGetValue(onclickType.Trim(), out onclickValue))
                    return Error($"Invalid onclick_type '{onclickType.Trim()}'.",
                        "Valid values: 'none', 'javascript', 'formula'.");
            }

            var publisherPrefix = ResolvePublisherPrefix(entityLogical);
            var appUniqueName = ResolveAppUniqueName(appModuleRef.Id);
            var entityId = ResolveEntityId(entityLogical);

            // Derive flyout safe label from existing flyout name
            var flyoutNameStr = flyout.GetAttributeValue<string>("name") ?? "";
            var locPrefix = LocationOobNamePrefix(locationValue);
            // Name pattern: {prefix}.{entity}.{safeLabel}.{locPrefix}.Dropdown
            var flyoutSafeLabel = DeriveFlyoutSafeLabel(flyoutNameStr, publisherPrefix, entityLogical, locPrefix);

            var result = CreateFlyoutItem(entityLogical, locationValue, appModuleRef.Id, appUniqueName,
                publisherPrefix, entityId, groupId.Value, flyoutSafeLabel, locPrefix,
                label, onclickType, jsWebResource, jsFunction, itemSeq);

            if (result.error != null)
                return Error(result.error,
                    "Check the item's onclick_type ('none', 'javascript', 'formula') and javascript_webresource — use manage_webresource(action='list') to find valid web resource names.");

            var message = $"Item '{label.Trim()}' added to flyout '{flyoutNameStr}'. ItemCommandId: {result.itemId}.";
            var structured = new ManageCommandResult
            {
                Action = "add_flyout_item",
                Status = "success",
                CommandId = result.itemId,
                Message = message,
                CreateMode = SolutionComponentCreateMode.None.ToString()
            };

            return Success(message, structured);
        }

        // ── Remove Flyout Item ──────────────────────────────────

        private CallToolResult HandleRemoveFlyoutItem(string commandId)
        {
            if (_options.DryRun)
                return DryRun($"Would remove flyout item command '{commandId}'.", new ManageCommandResult
                {
                    Action = "remove_flyout_item",
                    Status = "not_executed",
                    CommandId = commandId,
                    Message = "The flyout item was not removed."
                });

            if (string.IsNullOrWhiteSpace(commandId))
                return Error("command_id is required for action='remove_flyout_item'.",
                    "Pass the flyout item appaction GUID. Use manage_command(action='list', include_children=true) to find item IDs.");
            if (!Guid.TryParse(commandId.Trim(), out var cmdGuid))
                return Error($"'{commandId.Trim()}' is not a valid GUID.",
                    "Pass an appaction GUID. Use manage_command(action='list', include_children=true) to find item IDs.");

            var existing = RetrieveAppActionOrNull(cmdGuid, "name", "type", "parentappactionid", "buttonlabeltext");
            if (existing == null)
                return Error($"Command '{commandId.Trim()}' not found.",
                    "Use manage_command(action='list', include_children=true) to find valid command IDs.");

            var typeValue = existing.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
            if (typeValue == 1)
                return Error("Cannot remove a Dropdown Button using remove_flyout_item.",
                    "To delete the entire flyout, use the Dataverse UI or manage_record(action='delete').");
            if (typeValue == 2)
                return Error("Cannot remove a Split Button using remove_flyout_item.",
                    "To delete the entire split button, use the Dataverse UI or manage_record(action='delete').");
            if (typeValue == 3)
                return Error("Cannot directly remove a Group.",
                    "Remove individual items or delete the entire flyout via the Dataverse UI or manage_record(action='delete').");

            var parentRef = existing.GetAttributeValue<EntityReference>("parentappactionid");
            if (parentRef == null)
                return Error("This command has no parent — it is not a flyout item.",
                    "Use action='hide' to hide a top-level button.");

            var itemName = existing.GetAttributeValue<string>("name") ?? commandId.Trim();
            var itemLabel = existing.GetAttributeValue<string>("buttonlabeltext") ?? itemName;

            DataverseMutationExecutor.Delete(_context, _orgService, "appaction", cmdGuid);

            var message = $"Flyout item '{itemLabel}' ({itemName}) deleted successfully.";
            var structured = new ManageCommandResult
            {
                Action = "remove_flyout_item",
                Status = "success",
                CommandId = commandId.Trim(),
                Message = message
            };

            return Success(message, structured);
        }
    }
}
