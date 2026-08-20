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
        // ── Flyout helpers ──────────────────────────────────────

        private (string error, string itemId) CreateFlyoutItem(
            string entityLogical, int locationValue, Guid appModuleId, string appUniqueName,
            string publisherPrefix, Guid? entityId, Guid groupId,
            string flyoutSafeLabel, string locPrefix,
            string itemLabel, string onclickType, string jsWebResource, string jsFunction, int itemSeq)
        {
            var onclickValue = 0;
            if (!string.IsNullOrWhiteSpace(onclickType))
            {
                if (!ActionTypeFilterMap.TryGetValue(onclickType.Trim(), out onclickValue))
                    return ($"Invalid onclick_type '{onclickType.Trim()}'. Use 'none', 'javascript', or 'formula'.", null);
            }

            var safeItemLabel = itemLabel.Trim().Replace(" ", "");
            var itemName = $"{publisherPrefix}.{entityLogical}.{flyoutSafeLabel}.{locPrefix}.{safeItemLabel}.Button";
            var itemUniqueName = $"{publisherPrefix}__{itemName}!{appUniqueName}!{entityLogical}!{locationValue}";

            var itemEntity = new Entity("appaction");
            itemEntity["name"] = itemName;
            itemEntity["uniquename"] = itemUniqueName;
            itemEntity["context"] = new OptionSetValue(1);
            itemEntity["contextvalue"] = entityLogical;
            if (entityId.HasValue)
                itemEntity["contextentity"] = new EntityReference("entity", entityId.Value);
            itemEntity["location"] = new OptionSetValue(locationValue);
            itemEntity["buttonlabeltext"] = itemLabel.Trim();
            itemEntity["type"] = new OptionSetValue(0); // Standard Button
            itemEntity["onclickeventtype"] = new OptionSetValue(onclickValue);
            itemEntity["appmoduleid"] = new EntityReference("appmodule", appModuleId);
            itemEntity["sequence"] = (decimal)itemSeq;
            itemEntity["hidden"] = false;
            itemEntity["isdisabled"] = false;
            itemEntity["origin"] = new OptionSetValue(0);
            itemEntity["parentappactionid"] = new EntityReference("appaction", groupId);

            if (onclickValue == 2) // JavaScript
            {
                if (!string.IsNullOrWhiteSpace(jsWebResource))
                {
                    var wrId = ResolveWebResourceId(jsWebResource.Trim());
                    if (wrId == null)
                        return ($"Web resource '{jsWebResource.Trim()}' not found.", null);
                    itemEntity["onclickeventjavascriptwebresourceid"] = new EntityReference("webresource", wrId.Value);
                }
                if (!string.IsNullOrWhiteSpace(jsFunction))
                    itemEntity["onclickeventjavascriptfunctionname"] = jsFunction.Trim();

                var defaultParams = locationValue switch
                {
                    0 => "[{\"type\":5},{\"type\":2},{\"type\":3}]",
                    1 => "[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",
                    2 => "[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",
                    3 => "[{\"type\":12},{\"type\":24},{\"type\":7},{\"type\":8}]",
                    _ => null
                };
                if (defaultParams != null)
                    itemEntity["onclickeventjavascriptparameters"] = defaultParams;
            }

            var newId = DataverseMutationExecutor.Create(_context, _serviceClient, itemEntity);
            return (null, newId.ToString());
        }

        private Guid? FindFlyoutGroup(Guid flyoutDropdownId)
        {
            var fetchXml = $@"<fetch top='1'>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <filter>
      <condition attribute='parentappactionid' operator='eq' value='{flyoutDropdownId}'/>
      <condition attribute='type' operator='eq' value='3'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
    <order attribute='sequence'/>
  </entity>
</fetch>";
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            return result.Entities.Count > 0 ? result.Entities[0].Id : (Guid?)null;
        }

        private int CountFlyoutItems(Guid flyoutDropdownId)
        {
            // Count Standard Button descendants (children of the Group which is child of Dropdown)
            var fetchXml = $@"<fetch aggregate='true'>
  <entity name='appaction'>
    <attribute name='appactionid' alias='cnt' aggregate='count'/>
    <filter>
      <condition attribute='type' operator='eq' value='0'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
    <link-entity name='appaction' from='appactionid' to='parentappactionid' alias='grp'>
      <filter>
        <condition attribute='parentappactionid' operator='eq' value='{flyoutDropdownId}'/>
        <condition attribute='type' operator='eq' value='3'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count > 0)
            {
                var val = result.Entities[0].GetAttributeValue<AliasedValue>("cnt");
                return val != null ? Convert.ToInt32(val.Value) : 0;
            }
            return 0;
        }

        private static string DeriveFlyoutSafeLabel(string flyoutName, string publisherPrefix, string entityLogical, string locPrefix)
        {
            // Pattern: {prefix}.{entity}.{safeLabel}.{locPrefix}.Dropdown
            var strip = $"{publisherPrefix}.{entityLogical}.";
            var suffix = $".{locPrefix}.Dropdown";
            if (flyoutName.StartsWith(strip, StringComparison.OrdinalIgnoreCase) &&
                flyoutName.EndsWith(suffix, StringComparison.OrdinalIgnoreCase))
            {
                return flyoutName.Substring(strip.Length, flyoutName.Length - strip.Length - suffix.Length);
            }
            // Fallback: use everything after last dot before .Dropdown
            var parts = flyoutName.Split('.');
            return parts.Length >= 2 ? parts[parts.Length - 2] : flyoutName.Replace(" ", "");
        }

        private static string GetJsonString(JsonElement el, string key)
        {
            if (el.TryGetProperty(key, out var prop) && prop.ValueKind == JsonValueKind.String)
                return prop.GetString() ?? "";
            return "";
        }

        // ── Resolution helpers ──────────────────────────────────

        private Guid? ResolveAppId(string appId, string appName, out string errorMessage)
        {
            errorMessage = null;

            if (!string.IsNullOrWhiteSpace(appId))
            {
                if (Guid.TryParse(appId.Trim(), out var parsed))
                    return parsed;
                errorMessage = $"'{appId.Trim()}' is not a valid app_id GUID.";
                return null;
            }

            if (string.IsNullOrWhiteSpace(appName))
            {
                errorMessage = "app_id or app_name is required. Provide the exact app name or GUID.";
                return null;
            }

            var result = DisplayNameFirstResolver.ResolveApp(_serviceClient, appName.Trim(), "manage_command");
            if (result.IsSuccess)
                return result.Value.Id;

            errorMessage = $"app_name '{appName.Trim()}': {result.Error}";
            return null;
        }

        private Guid? ResolveWebResourceId(string nameOrGuid)
        {
            if (Guid.TryParse(nameOrGuid, out var parsed))
                return parsed;

            var result = DisplayNameFirstResolver.ResolveWebResource(_serviceClient, nameOrGuid, "manage_command");
            if (!result.IsSuccess)
                throw new InvalidOperationException($"web_resource '{nameOrGuid}': {result.Error}");

            return result.Value.Id;
        }

        // ── Shared helpers ──────────────────────────────────────────────

        private List<CommandRuleEntry> GetRulesForCommand(string commandId)
        {
            var fetchXml = $@"<fetch>
  <entity name='appactionrule'>
    <attribute name='appactionruleid'/>
    <attribute name='name'/>
    <attribute name='uniquename'/>
    <attribute name='type'/>
    <attribute name='definition'/>
    <attribute name='contextvalue'/>
    <link-entity name='appaction_appactionrule_classicrules' from='appactionruleid' to='appactionruleid' intersect='true'>
      <filter>
        <condition attribute='appactionid' operator='eq' value='{EscapeXml(commandId)}'/>
      </filter>
    </link-entity>
    <order attribute='name'/>
  </entity>
</fetch>";

                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
                return result.Entities.Select(e =>
                {
                    var typeValue = e.GetAttributeValue<OptionSetValue>("type")?.Value;
                    return new CommandRuleEntry
                    {
                        Name = e.GetAttributeValue<string>("name") ?? "",
                        UniqueName = NullIfEmpty(e.GetAttributeValue<string>("uniquename")),
                        RuleType = typeValue == 0 ? "EnableRule" : typeValue == 1 ? "DisplayRule" : "Unknown",
                        Definition = NullIfEmpty(e.GetAttributeValue<string>("definition")),
                        ContextValue = NullIfEmpty(e.GetAttributeValue<string>("contextvalue"))
                    };
                }).ToList();
        }

        private List<CommandChildEntry> GetChildCommands(string parentCommandId)
        {
            var directFetch = $@"<fetch>
  <entity name='appaction'>
    <attribute name='appactionid'/>
    <attribute name='name'/>
    <attribute name='uniquename'/>
    <attribute name='buttonlabeltext'/>
    <attribute name='type'/>
    <attribute name='onclickeventtype'/>
    <attribute name='onclickeventjavascriptfunctionname'/>
    <attribute name='sequence'/>
    <attribute name='hidden'/>
    <attribute name='isdisabled'/>
    <filter>
      <condition attribute='parentappactionid' operator='eq' value='{EscapeXml(parentCommandId)}'/>
      <condition attribute='statecode' operator='eq' value='0'/>
    </filter>
    <order attribute='sequence'/>
  </entity>
</fetch>";

                var directResult = _serviceClient.RetrieveMultiple(new FetchExpression(directFetch));
                var items = new List<CommandChildEntry>();

                foreach (var e in directResult.Entities)
                {
                    var typeValue = e.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;

                    if (typeValue == 3) // Group — transparent container, recurse into it
                    {
                        items.AddRange(GetChildCommands(e.Id.ToString()));
                        continue;
                    }

                    var onClickValue = e.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value ?? 0;
                    items.Add(new CommandChildEntry
                    {
                        CommandId = e.Id.ToString(),
                        Name = e.GetAttributeValue<string>("name") ?? "",
                        UniqueName = e.GetAttributeValue<string>("uniquename") ?? "",
                        ButtonLabel = NullIfEmpty(e.GetAttributeValue<string>("buttonlabeltext")),
                        Type = TypeMap.TryGetValue(typeValue, out var t) ? t : typeValue.ToString(),
                        OnClickEventType = OnClickEventTypeMap.TryGetValue(onClickValue, out var oc) ? oc : onClickValue.ToString(),
                        JavaScriptFunction = NullIfEmpty(e.GetAttributeValue<string>("onclickeventjavascriptfunctionname")),
                        Sequence = Convert.ToInt32(e["sequence"] ?? 0),
                        Hidden = e.GetAttributeValue<bool?>("hidden") ?? false,
                        IsDisabled = e.GetAttributeValue<bool?>("isdisabled") ?? false
                    });
                }

                return items;
        }

        private void ResolveWebResourceNames(Entity entity, CommandEntry entry)
        {
            var wrRef = entity.GetAttributeValue<EntityReference>("onclickeventjavascriptwebresourceid");
            if (wrRef != null)
                entry.JavaScriptWebResource = wrRef.Name ?? wrRef.Id.ToString();

            var iconRef = entity.GetAttributeValue<EntityReference>("iconwebresourceid");
            if (iconRef != null)
                entry.IconWebResource = iconRef.Name ?? iconRef.Id.ToString();
        }

        private void ResolveComponentLibraryNames(Entity entity, CommandEntry entry)
        {
            var onClickLibRef = entity.GetAttributeValue<EntityReference>("onclickeventformulacomponentlibraryid");
            if (onClickLibRef != null)
                entry.OnClickComponentLibrary = onClickLibRef.Name ?? onClickLibRef.Id.ToString();

            var visLibRef = entity.GetAttributeValue<EntityReference>("visibilityformulacomponentlibraryid");
            if (visLibRef != null)
                entry.VisibilityComponentLibrary = visLibRef.Name ?? visLibRef.Id.ToString();

            entry.VisibilityFormula = NullIfEmpty(entity.GetAttributeValue<string>("visibilityformulacomponentlibrary"));
            entry.OnClickFormula = NullIfEmpty(entity.GetAttributeValue<string>("onclickeventformulacomponentlibrary"));
        }

        private static CommandEntry MapCommandEntry(Entity e)
        {
            var typeValue = e.GetAttributeValue<OptionSetValue>("type")?.Value ?? 0;
            var locationValue = e.GetAttributeValue<OptionSetValue>("location")?.Value ?? 0;
            var onClickValue = e.GetAttributeValue<OptionSetValue>("onclickeventtype")?.Value ?? 0;
            var visibilityValue = e.GetAttributeValue<OptionSetValue>("visibilitytype")?.Value ?? 0;
            var originValue = e.GetAttributeValue<OptionSetValue>("origin")?.Value ?? 0;

            var appName = GetAliasedString(e, "app.name");

            return new CommandEntry
            {
                CommandId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                UniqueName = e.GetAttributeValue<string>("uniquename") ?? "",
                ButtonLabel = NullIfEmpty(e.GetAttributeValue<string>("buttonlabeltext")),
                Entity = e.GetAttributeValue<string>("contextvalue") ?? "",
                Location = LocationMap.TryGetValue(locationValue, out var loc) ? loc : locationValue.ToString(),
                Type = TypeMap.TryGetValue(typeValue, out var t) ? t : typeValue.ToString(),
                OnClickEventType = OnClickEventTypeMap.TryGetValue(onClickValue, out var oc) ? oc : onClickValue.ToString(),
                JavaScriptFunction = NullIfEmpty(e.GetAttributeValue<string>("onclickeventjavascriptfunctionname")),
                VisibilityType = VisibilityTypeMap.TryGetValue(visibilityValue, out var vis) ? vis : visibilityValue.ToString(),
                FontIcon = NullIfEmpty(e.GetAttributeValue<string>("fonticon")),
                Origin = OriginMap.TryGetValue(originValue, out var orig) ? orig : originValue.ToString(),
                Sequence = Convert.ToInt32(e["sequence"] ?? 0),
                Hidden = e.GetAttributeValue<bool?>("hidden") ?? false,
                IsDisabled = e.GetAttributeValue<bool?>("isdisabled") ?? false,
                ParentCommandId = e.GetAttributeValue<EntityReference>("parentappactionid")?.Id.ToString(),
                AppName = string.IsNullOrEmpty(appName) ? null : appName,
                ClientType = NullIfEmpty(e.GetAttributeValue<string>("clienttype"))
            };
        }

        private static string GetAliasedString(Entity e, string alias)
        {
            var aliased = e.GetAttributeValue<AliasedValue>(alias);
            return aliased?.Value?.ToString() ?? "";
        }

        // Normalize fonticon: "Accept" → "$clientsvg:Accept", "$clientsvg:Accept" → unchanged
        private static string NormalizeFontIcon(string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return value;
            var v = value.Trim();
            if (v.StartsWith("$clientsvg:", StringComparison.OrdinalIgnoreCase) ||
                v.StartsWith("$webresource:", StringComparison.OrdinalIgnoreCase))
                return v;
            return $"$clientsvg:{v}";
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();

        private static string Truncate(string value, int maxLength)
        {
            if (string.IsNullOrEmpty(value)) return "";
            return value.Length <= maxLength ? value : value.Substring(0, maxLength) + "...";
        }

        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");

        private static string EscapeTab(string value) =>
            value.Replace("\t", " ").Replace("\n", " ").Replace("\r", "");
    }
}
