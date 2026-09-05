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
        // ── Hide / Show ──────────────────────────────────────────

        private CallToolResult HandleHideShow(string commandId, string entityName, string location, string appId, string appName, string label, bool wantHidden)
        {
            if (_options.DryRun)
            {
                var action = wantHidden ? "hide" : "show";
                return DryRun($"Would {action} appaction command '{commandId}'.", new ManageCommandResult
                {
                    Action = action,
                    Status = "not_executed",
                    CommandId = commandId,
                    Message = $"The appaction command was not {(wantHidden ? "hidden" : "shown")}."
                });
            }

            var verb = wantHidden ? "hide" : "show";

            // Path 1: command_id provided
            if (!string.IsNullOrWhiteSpace(commandId))
            {
                if (!Guid.TryParse(commandId.Trim(), out var cmdGuid))
                    return Error($"'{commandId.Trim()}' is not a valid GUID.",
                        "Pass an appaction GUID. Use manage_command(action='list') to find command IDs.");

                var existing = RetrieveAppActionOrNull(cmdGuid, "name", "hidden", "contextvalue", "origin");
                if (existing == null)
                    return Error($"Command '{commandId.Trim()}' not found.",
                        "Use manage_command(action='list') to find valid command IDs.");

                if (!wantHidden && IsOobOverrideCommand(existing))
                {
                    var commandName = existing.GetAttributeValue<string>("name") ?? commandId.Trim();
                    var contextValue = existing.GetAttributeValue<string>("contextvalue");
                    DataverseMutationExecutor.Delete(_context, _orgService, "appaction", cmdGuid);
                    PublishHelper.PublishEntity(_context, _orgService, contextValue.Trim().ToLowerInvariant());

                    var deletedMsg = $"OOB command override '{commandName}' deleted. Entity published.";
                    var deletedResult = new ManageCommandResult { Action = verb, Status = "success", CommandId = commandId.Trim(), Message = deletedMsg };
                    return Success(deletedMsg, deletedResult);
                }

                var alreadyHidden = existing.GetAttributeValue<bool?>("hidden") ?? false;
                if (alreadyHidden == wantHidden)
                {
                    var state = wantHidden ? "already hidden" : "already visible";
                    var msg = $"Command '{existing.GetAttributeValue<string>("name") ?? commandId.Trim()}' is {state}. No change needed.";
                    var noopResult = new ManageCommandResult { Action = verb, Status = "success", CommandId = commandId.Trim(), Message = msg };
                    return Success(msg, noopResult);
                }

                var update = new Entity("appaction", cmdGuid);
                update["hidden"] = wantHidden;
                DataverseMutationExecutor.Update(_context, _orgService, update);
                PublishHelper.PublishEntity(_context, _orgService, existing.GetAttributeValue<string>("contextvalue").Trim().ToLowerInvariant());

                var doneMsg = $"Command '{existing.GetAttributeValue<string>("name") ?? commandId.Trim()}' is now {(wantHidden ? "hidden" : "visible")}. Entity published.";
                var doneResult = new ManageCommandResult { Action = verb, Status = "success", CommandId = commandId.Trim(), Message = doneMsg };
                return Success(doneMsg, doneResult);
            }

            // Path 2: lookup by label + entity + location
            if (string.IsNullOrWhiteSpace(label))
                return Error($"Provide command_id OR (label + entity_name + location) for action='{verb}'.",
                    "Pass command_id (appaction GUID), or label together with entity_name and location for fuzzy lookup.");
            if (string.IsNullOrWhiteSpace(entityName))
                return Error($"entity_name is required when using label lookup for action='{verb}'.",
                    "Pass the entity Display Name or logical name. Use get_tables to list available tables.");
            if (string.IsNullOrWhiteSpace(location))
                return Error($"location is required when using label lookup for action='{verb}'.",
                    "Pass one of: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");
            if (wantHidden && string.IsNullOrWhiteSpace(appId) && string.IsNullOrWhiteSpace(appName))
                return Error("app_id or app_name is required for action='hide'.",
                    "Multiple apps may exist — specify which app to apply the hide override to. Use manage_app(action='list') to discover apps.");

            if (!LocationFilterMap.TryGetValue(location.Trim(), out var locationValue))
                return Error($"Invalid location '{location.Trim()}'.",
                    "Valid values: 'form', 'main_grid', 'sub_grid', 'associated_grid', 'quick_form', 'global_header', 'dashboard'.");

            var (resolvedEntityName, entityError) = ResolveEntityLogicalName(entityName);
            if (entityError != null)
                return Error(entityError.Split("\r\n")[0],
                    "Use get_tables to list available tables.");
            entityName = resolvedEntityName;

            var found = FindCommandByLabel(label.Trim(), entityName, locationValue);

            if (found != null)
            {
                if (!wantHidden && IsOobOverrideCommand(found))
                {
                    var commandName = found.GetAttributeValue<string>("name") ?? label.Trim();
                    var contextValue = found.GetAttributeValue<string>("contextvalue");
                    DataverseMutationExecutor.Delete(_context, _orgService, "appaction", found.Id);
                    PublishHelper.PublishEntity(_context, _orgService, contextValue.Trim().ToLowerInvariant());

                    var deletedMsg2 = $"OOB command override '{commandName}' deleted. Entity published.";
                    var deletedResult2 = new ManageCommandResult { Action = verb, Status = "success", CommandId = found.Id.ToString(), Message = deletedMsg2 };
                    return Success(deletedMsg2, deletedResult2);
                }

                var alreadyHidden = found.GetAttributeValue<bool?>("hidden") ?? false;
                if (alreadyHidden == wantHidden)
                {
                    var state = wantHidden ? "already hidden" : "already visible";
                    var msg2 = $"Command '{label.Trim()}' is {state}. No change needed.";
                    var noopResult2 = new ManageCommandResult { Action = verb, Status = "success", CommandId = found.Id.ToString(), Message = msg2 };
                    return Success(msg2, noopResult2);
                }

                var update2 = new Entity("appaction", found.Id);
                update2["hidden"] = wantHidden;
                DataverseMutationExecutor.Update(_context, _orgService, update2);
                PublishHelper.PublishEntity(_context, _orgService, found.GetAttributeValue<string>("contextvalue").Trim().ToLowerInvariant());

                var doneMsg2 = $"Command '{label.Trim()}' is now {(wantHidden ? "hidden" : "visible")}. Entity published.";
                var doneResult2 = new ManageCommandResult { Action = verb, Status = "success", CommandId = found.Id.ToString(), Message = doneMsg2 };
                return Success(doneMsg2, doneResult2);
            }

            // No appaction record exists yet
            if (!wantHidden)
            {
                // show: OOB button with no override record is visible by default — nothing to do
                var noRecordMsg = $"Command '{label.Trim()}' has no appaction override record. OOB buttons are visible by default — no action needed.";
                var noRecordResult = new ManageCommandResult { Action = verb, Status = "success", Message = noRecordMsg };
                return Success(noRecordMsg, noRecordResult);
            }

            // Block if this label belongs to a custom classic ribbon button
            if (IsClassicRibbonButton(label.Trim(), entityName))
                return Error($"'{label.Trim()}' is a classic ribbon button defined via manage_ribbon and cannot be hidden using manage_command.",
                    "Use manage_ribbon to hide it instead.");

            // hide: must create an appaction override record
            var resolvedAppId = ResolveAppId(appId, appName, out var appResolveError2);
            if (resolvedAppId == null)
                return Error((appResolveError2 ?? "Could not resolve app.").Split("\r\n")[0],
                    "Pass app_id (app module GUID) or app_name. Use manage_app(action='list') to discover apps.");

            var entityLogical = entityName;
            var oobNamePrefix = LocationOobNamePrefix(locationValue);
            var safeLabel = label.Trim().Replace(" ", "");
            var overrideName = $"Mscrm.{oobNamePrefix}.{{!EntityLogicalName}}.{safeLabel}";
            var appUniqueName = ResolveAppUniqueName(resolvedAppId.Value);
            var publisherPrefix = ResolvePublisherPrefix(entityLogical);
            var entitySchemaName = ResolveEntitySchemaName(entityLogical);
            var uniqueName = $"{publisherPrefix}__{overrideName}!{appUniqueName}!{entityLogical}!{locationValue}";

            var contextEntityId = ResolveEntityId(entityLogical);

            // Look up OOB template to copy fonticon, sequence, onclickeventtype, etc.
            var oobTemplate = FindOobTemplate(overrideName, locationValue);

            var newEntity = new Entity("appaction");
            newEntity["name"] = overrideName;
            newEntity["uniquename"] = uniqueName;
            newEntity["context"] = new OptionSetValue(1); // Entity
            newEntity["contextvalue"] = entityLogical;
            if (contextEntityId.HasValue)
                newEntity["contextentity"] = new EntityReference("entity", contextEntityId.Value);
            newEntity["location"] = new OptionSetValue(locationValue);
            newEntity["buttonlabeltext"] = label.Trim();
            newEntity["type"] = new OptionSetValue(0); // Standard Button
            newEntity["hidden"] = true;
            newEntity["origin"] = new OptionSetValue(2); // Enhanced Migrated — required for designer to show Hide option
            newEntity["appmoduleid"] = new EntityReference("appmodule", resolvedAppId.Value);

            if (oobTemplate != null)
            {
                // Copy sequence from OOB template
                newEntity["sequence"] = oobTemplate.GetAttributeValue<decimal?>("sequence") ?? (decimal)100;

                // Copy fonticon (may be null — that is correct)
                var fontIconVal = oobTemplate.GetAttributeValue<string>("fonticon");
                if (!string.IsNullOrEmpty(fontIconVal))
                    newEntity["fonticon"] = fontIconVal;

                // Copy onclickeventtype
                var onClickType = oobTemplate.GetAttributeValue<OptionSetValue>("onclickeventtype");
                if (onClickType != null)
                    newEntity["onclickeventtype"] = new OptionSetValue(onClickType.Value);

                // Copy JS function name if present
                var jsFuncName = oobTemplate.GetAttributeValue<string>("onclickeventjavascriptfunctionname");
                if (!string.IsNullOrEmpty(jsFuncName))
                    newEntity["onclickeventjavascriptfunctionname"] = jsFuncName;

                // Copy JS webresource if present
                var jsWrRef = oobTemplate.GetAttributeValue<EntityReference>("onclickeventjavascriptwebresourceid");
                if (jsWrRef != null)
                    newEntity["onclickeventjavascriptwebresourceid"] = new EntityReference("webresource", jsWrRef.Id);

                // Copy visibilitytype
                var visType = oobTemplate.GetAttributeValue<OptionSetValue>("visibilitytype");
                if (visType != null)
                    newEntity["visibilitytype"] = new OptionSetValue(visType.Value);
            }
            else
            {
                newEntity["sequence"] = (decimal)100;
            }

            var newId = DataverseMutationExecutor.Create(_context, _orgService, newEntity);
            PublishHelper.PublishEntity(_context, _orgService, entityLogical.Trim().ToLowerInvariant());

            var createdMsg = $"Created appaction override: command '{label.Trim()}' on {entityName} ({LocationMap[locationValue]}) is now hidden. Entity published.";
            var createdResult = new ManageCommandResult { Action = verb, Status = "success", CommandId = newId.ToString(), Message = createdMsg, CreateMode = SolutionComponentCreateMode.None.ToString() };
            return Success(createdMsg, createdResult);
        }

        private Entity FindCommandByLabel(string label, string entityName, int locationValue)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='name'/>
    <attribute name='hidden'/>
    <attribute name='contextvalue'/>
    <attribute name='origin'/>
    <filter type='and'>
      <condition attribute='contextvalue' operator='eq' value='{EscapeXml(entityName)}'/>
      <condition attribute='location' operator='eq' value='{locationValue}'/>
      <condition attribute='buttonlabeltext' operator='eq' value='{EscapeXml(label)}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
  </entity>
</fetch>";

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private static bool IsOobOverrideCommand(Entity command)
        {
            var origin = command.GetAttributeValue<OptionSetValue>("origin")?.Value;
            var name = command.GetAttributeValue<string>("name") ?? "";

            return origin == 2
                && name.StartsWith("Mscrm.", StringComparison.OrdinalIgnoreCase)
                && name.Contains("{!EntityLogicalName}", StringComparison.OrdinalIgnoreCase);
        }

        private Entity FindOobTemplate(string buttonName, int locationValue)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='sequence'/>
    <attribute name='fonticon'/>
    <attribute name='onclickeventtype'/>
    <attribute name='onclickeventjavascriptfunctionname'/>
    <attribute name='onclickeventjavascriptwebresourceid'/>
    <attribute name='visibilitytype'/>
    <filter type='and'>
      <condition attribute='name' operator='eq' value='{EscapeXml(buttonName)}'/>
      <condition attribute='location' operator='eq' value='{locationValue}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
  </entity>
</fetch>";

            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0] : null;
        }

        private bool IsClassicRibbonButton(string label, string entityName)
        {
            // Custom ribbon buttons are always in the devkit_ribbon solution.
            // Export it and scan LocLabel titles — same approach as ManageRibbonTool.
            var exportReq = new ExportSolutionRequest { SolutionName = "devkit_ribbon", Managed = false };
            var exportResp = (ExportSolutionResponse)_orgService.Execute(exportReq);
            var ribbonXml = ExtractRibbonDiffXmlForEntity(exportResp.ExportSolutionFile, entityName);
            if (string.IsNullOrWhiteSpace(ribbonXml)) return false;

            var doc = XDocument.Parse(ribbonXml);
            // LocLabels: <LocLabel Id="..."><Titles><Title description="label text" languagecode="1033"/></Titles></LocLabel>
            return doc.Descendants("Title").Any(t =>
                string.Equals(t.Attribute("description")?.Value, label, StringComparison.OrdinalIgnoreCase));
        }

        private static string ExtractRibbonDiffXmlForEntity(byte[] zipBytes, string entityName)
        {
            using var ms = new MemoryStream(zipBytes);
            using var archive = new ZipArchive(ms, ZipArchiveMode.Read);
            var entry = archive.Entries.FirstOrDefault(e =>
                e.FullName.Equals("customizations.xml", StringComparison.OrdinalIgnoreCase));
            if (entry == null) return null;

            using var stream = entry.Open();
            var doc = XDocument.Load(stream);
            var entityNode = doc.Descendants("Entity").FirstOrDefault(e =>
            {
                var nameEl = e.Element("Name");
                return nameEl != null && string.Equals(nameEl.Value, entityName, StringComparison.OrdinalIgnoreCase);
            });
            return entityNode?.Element("RibbonDiffXml")?.ToString();
        }

        private static string LocationOobNamePrefix(int locationValue) => locationValue switch
        {
            0 => "Form",
            1 => "HomepageGrid",
            2 => "SubGrid",
            3 => "SubGrid",  // Associated Grid uses same SubGrid prefix in OOB naming
            4 => "QuickForm",
            5 => "GlobalHeader",
            6 => "Dashboard",
            _ => "Form"
        };

        private string ResolveAppUniqueName(Guid appModuleId)
        {
            var result = _orgService.Retrieve("appmodule", appModuleId, new ColumnSet("uniquename"));
            return result?.GetAttributeValue<string>("uniquename") ?? appModuleId.ToString("N");
        }

        private string ResolvePublisherPrefix(string entityLogicalName)
        {
            // Entity logical name starts with publisher prefix, e.g. "v4_mcp" → "v4"
            var idx = entityLogicalName.IndexOf('_');
            return idx > 0 ? entityLogicalName.Substring(0, idx) : entityLogicalName;
        }

        private (string LogicalName, string Error) ResolveEntityLogicalName(string entityName)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                return (null, "entity_name is required.");

            var result = DisplayNameFirstResolver.ResolveEntity(_orgService, entityName.Trim(), "manage_command");
            return result.IsSuccess
                ? (result.Value.LogicalName, null)
                : (null, $"entity_name '{entityName.Trim()}': {result.Error}");
        }

        private Guid? ResolveEntityId(string entityLogicalName)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='entity'>
    <attribute name='entityid'/>
    <filter>
      <condition attribute='logicalname' operator='eq' value='{EscapeXml(entityLogicalName)}'/>
    </filter>
  </entity>
</fetch>";
            var result = _orgService.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0].Id : (Guid?)null;
        }

        private string ResolveEntitySchemaName(string entityLogicalName)
        {
            var request = new Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest
            {
                LogicalName = entityLogicalName,
                EntityFilters = Microsoft.Xrm.Sdk.Metadata.EntityFilters.Entity
            };
            var response = (Microsoft.Xrm.Sdk.Messages.RetrieveEntityResponse)_orgService.Execute(request);
            return response?.EntityMetadata?.SchemaName ?? entityLogicalName;
        }
    }
}
