using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormNavigation
    {
        private const string RelationshipElement = "NavBarByRelationshipItem";
        private const string CustomLinkElement = "NavBarItem";
        private const string RelationshipType = "relationship";
        private const string SystemType = "system";
        // These built-in overrides use the synthetic relationship names found in Dataverse form exports.
        private const string BuiltInRelationshipPrefix = "hardcoded_{B7196B13-6B9D-42CD-BD58-B19A3953126F}";
        private const int EnglishLanguageCode = 1033;
        private static readonly StringComparer Names = StringComparer.OrdinalIgnoreCase;

        private readonly Dictionary<string, FormNavigationItem> _defaults = new(Names);
        private readonly Dictionary<string, FormNavigationItem> _relationships;
        private readonly Lazy<int> _languageCode;

        public FormNavigation(IOrganizationService orgService, string entityName, EntityMetadata[] entityCatalog)
        {
            _languageCode = new Lazy<int>(() =>
            {
                var languageCode = McpHelper.GetBaseLanguageCode(orgService);
                return languageCode > 0 ? languageCode : EnglishLanguageCode;
            });

            var response = (RetrieveEntityResponse)orgService.Execute(new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Entity | EntityFilters.Relationships,
                RetrieveAsIfPublished = true
            });
            var metadata = response.EntityMetadata;
            var collectionLabels = (entityCatalog ?? [])
                .Where(entity => !string.IsNullOrEmpty(entity.LogicalName))
                .GroupBy(entity => entity.LogicalName, Names)
                .ToDictionary(group => group.Key, group => ReadLabel(group.First().DisplayCollectionName), Names);
            var oneToMany = metadata.OneToManyRelationships ?? [];
            foreach (var relationship in oneToMany)
                AddRelationship(relationship.SchemaName, relationship.AssociatedMenuConfiguration, relationship.ReferencingEntity);

            foreach (var relationship in metadata.ManyToManyRelationships ?? [])
            {
                if (Names.Equals(entityName, relationship.Entity1LogicalName))
                    AddRelationship(relationship.SchemaName, relationship.Entity1AssociatedMenuConfiguration, relationship.Entity2LogicalName);
                if (Names.Equals(entityName, relationship.Entity2LogicalName))
                    AddRelationship(relationship.SchemaName, relationship.Entity2AssociatedMenuConfiguration, relationship.Entity1LogicalName);
            }

            _relationships = _defaults.Values.ToDictionary(item => item.RelationshipName, Names);
            AddSystem("navAudit", "Audit History", "Info", 9600, metadata.IsAuditEnabled?.Value == true);
            AddSystem("navAsyncOperations", "Background Processes", "ProcessCenter", 9500, HasProcessRelationship("asyncoperation"));
            AddSystem("navProcessSessions", "Dialog Sessions", "ProcessCenter", 9700, HasProcessRelationship("processsession"));
            AddSystem("navSPDocuments", "Documents", "Info", null, metadata.IsDocumentManagementEnabled == true);

            bool HasProcessRelationship(string relatedEntity) => oneToMany.Any(relationship =>
                Names.Equals(relationship.ReferencingEntity, relatedEntity) &&
                Names.Equals(relationship.ReferencingAttribute, "regardingobjectid"));

            void AddRelationship(string schemaName, AssociatedMenuConfiguration menu, string relatedEntity)
            {
                if (string.IsNullOrWhiteSpace(schemaName))
                    return;

                var isConnections = Names.Equals(schemaName, $"{entityName}_connection1");
                var id = isConnections ? "navConnections" : $"nav_{schemaName}";
                var visible = menu != null && menu.Behavior != AssociatedMenuBehavior.DoNotDisplay;
                // A self-referential N:N may expose both menu configurations for the same item.
                if (_defaults.TryGetValue(id, out var previous) && (previous.Visible || !visible))
                    return;

                var collectionLabel = relatedEntity != null ? collectionLabels.GetValueOrDefault(relatedEntity) : null;
                var menuLabel = ReadLabel(menu?.Label);
                var label = menu?.Behavior == AssociatedMenuBehavior.UseCollectionName
                    ? collectionLabel ?? menuLabel
                    : menuLabel ?? collectionLabel;
                var area = menu?.Group is null or AssociatedMenuGroup.Details ? "Info" : menu.Group.ToString();
                _defaults[id] = new FormNavigationItem(id, RelationshipType, schemaName,
                    label ?? (isConnections ? "Connections" : schemaName), area, menu?.Order, visible);
            }
        }

        public List<FormNavigationItem> List(XDocument formDoc) => GetEntries(formDoc)
            .Select(entry => entry.Item)
            .OrderBy(item => item.Area, Names)
            .ThenBy(item => item.Sequence ?? int.MaxValue)
            .ThenBy(item => item.Id, Names)
            .ToList();

        public string Apply(XDocument formDoc, JsonElement operation, string action)
        {
            if (action is not ("hide" or "show" or "update" or "remove"))
                throw new InvalidOperationException($"Unknown manage_action '{action}' for manage_navigation. Valid: hide, show, update, remove");

            if (!operation.TryGetProperty("items", out var items))
                return ApplyItem(formDoc, operation, action);

            if (items.ValueKind != JsonValueKind.Array || items.GetArrayLength() == 0)
                throw new InvalidOperationException("manage_navigation items must be a non-empty JSON array.");

            return string.Join(", ", items.EnumerateArray().Select(item => ApplyItem(formDoc, item, action)));
        }

        private string ApplyItem(XDocument formDoc, JsonElement input, string action)
        {
            if (input.ValueKind != JsonValueKind.Object)
                throw new InvalidOperationException("Each manage_navigation item must be an object.");

            var relationshipName = GetOptionalText(input, "relationship_name");
            var navId = GetOptionalText(input, "nav_id");
            if (relationshipName == null && navId == null)
                throw new InvalidOperationException("manage_navigation requires relationship_name or nav_id for each item.");

            var matches = GetEntries(formDoc).Where(entry =>
                (relationshipName == null || Names.Equals(entry.Item.RelationshipName, relationshipName)) &&
                (navId == null || Names.Equals(entry.Item.Id, navId))).ToList();
            var selector = string.Join(" / ", new[] { relationshipName, navId }.Where(value => value != null));
            if (matches.Count != 1)
            {
                var reason = matches.Count == 0 ? "was not found" : "matches multiple items";
                throw new InvalidOperationException($"Related navigation item '{selector}' {reason}. Use manage_ui(resource='form', action='navigation_list') to check the item IDs and relationship names.");
            }

            var (item, element) = matches[0];
            if (action == "remove")
            {
                element?.Remove();
                return element == null ? $"No FormXML override for navigation item '{item.Id}'" : $"Removed navigation override '{item.Id}'";
            }

            var area = GetOptionalText(input, "area");
            var sequence = GetOptionalInteger(input, "sequence", minimum: 0);
            var label = GetOptionalText(input, "label");
            var languageCode = GetOptionalInteger(input, "language_code", minimum: 1);
            var visible = action switch
            {
                "hide" => false,
                "show" => true,
                _ => GetOptionalVisibility(input)
            };

            if (visible.HasValue && element?.Name == CustomLinkElement)
                throw new InvalidOperationException($"Cannot change visibility for navigation item '{item.Id}'. FormXML does not allow Show on a custom NavBarItem. Use manage_action='remove' to delete the link.");

            if (element == null)
            {
                var overrideRelationshipName = item.RelationshipName ?? (item.Id switch
                {
                    "navAudit" or "navAsyncOperations" or "navProcessSessions" => BuiltInRelationshipPrefix + item.Id,
                    _ => throw new InvalidOperationException($"Cannot create a FormXML override for built-in navigation item '{item.Id}'. Its Dataverse relationship mapping is unavailable.")
                });
                element = new XElement(RelationshipElement,
                    new XAttribute("Id", item.Id), new XAttribute("RelationshipName", overrideRelationshipName));
                area ??= item.Area;
                sequence ??= item.Sequence;
                visible ??= item.Visible;
                if (item.Type == SystemType)
                    label ??= item.Label;
                GetOrCreateNavBar(formDoc.Root).Add(element);
            }

            if (area != null)
                element.SetAttributeValue("Area", area);
            if (sequence.HasValue)
                element.SetAttributeValue("Sequence", sequence.Value);
            if (visible.HasValue)
                element.SetAttributeValue("Show", visible.Value ? "true" : "false");
            if (label != null)
                SetTitle(element, label, languageCode ?? _languageCode.Value);

            return $"Applied {action} to navigation item '{item.Id}'";
        }

        private IEnumerable<(FormNavigationItem Item, XElement Element)> GetEntries(XDocument formDoc)
        {
            var root = formDoc.Root;
            if (root?.Name != "form")
                throw new InvalidOperationException("Related navigation requires a <form> root element.");

            var overridden = new HashSet<string>(Names);
            var navBar = root.Element("Navigation")?.Element("NavBar");
            foreach (var element in navBar?.Elements() ?? [])
            {
                if (element.Name != RelationshipElement && element.Name != CustomLinkElement)
                    continue;

                var id = (string)element.Attribute("Id");
                if (string.IsNullOrWhiteSpace(id))
                    continue;

                var relationshipName = (string)element.Attribute("RelationshipName");
                // Dataverse can export built-in items with a synthetic relationship name.
                var isRelationship = element.Name == RelationshipElement &&
                    relationshipName?.StartsWith("hardcoded_", StringComparison.OrdinalIgnoreCase) != true;
                var defaults = isRelationship && relationshipName != null
                    ? _relationships.GetValueOrDefault(relationshipName)
                    : _defaults.GetValueOrDefault(id);
                if (defaults != null)
                    overridden.Add(defaults.Id);

                var show = element.Name == RelationshipElement ? ((string)element.Attribute("Show"))?.Trim() : null;
                yield return (new FormNavigationItem(id,
                    defaults?.Type ?? (isRelationship ? RelationshipType : SystemType),
                    defaults?.RelationshipName ?? (isRelationship ? relationshipName : null),
                    ReadTitle(element) ?? defaults?.Label ?? relationshipName ?? id,
                    (string)element.Attribute("Area") ?? defaults?.Area,
                    int.TryParse((string)element.Attribute("Sequence"), out var sequence) ? sequence : defaults?.Sequence,
                    !Names.Equals(show, "false") && show != "0"), element);
            }

            foreach (var item in _defaults.Values.Where(item => item.Visible && !overridden.Contains(item.Id)))
                yield return (item, null);
        }

        private static XElement GetOrCreateNavBar(XElement root)
        {
            var navigation = root.Element("Navigation");
            if (navigation == null)
            {
                navigation = new XElement("Navigation");
                var following = root.Elements().FirstOrDefault(element => element.Name.LocalName is "DisplayConditions" or "RibbonDiffXml");
                if (following == null)
                    root.Add(navigation);
                else
                    following.AddBeforeSelf(navigation);
            }

            var navBar = navigation.Element("NavBar");
            if (navBar == null)
            {
                navBar = new XElement("NavBar");
                navigation.Add(navBar);
            }

            return navBar;
        }

        private void AddSystem(string id, string label, string area, int? sequence, bool visible) =>
            _defaults.Add(id, new FormNavigationItem(id, SystemType, null, label, area, sequence, visible));

        private static string ReadLabel(Label label) =>
            label?.UserLocalizedLabel?.Label ?? label?.LocalizedLabels?.FirstOrDefault()?.Label;

        private string ReadTitle(XElement element)
        {
            var titles = element.Element("Titles")?.Elements("Title").ToList();
            if (titles == null || titles.Count == 0)
                return null;

            var title = titles.Count == 1 ? titles[0] :
                titles.FirstOrDefault(candidate => HasLanguageCode(candidate, _languageCode.Value)) ?? titles[0];
            return (string)title.Attribute("Text");
        }

        private static void SetTitle(XElement element, string label, int languageCode)
        {
            var titles = element.Element("Titles");
            if (titles == null)
            {
                titles = new XElement("Titles");
                element.AddFirst(titles);
            }

            var title = titles.Elements("Title").FirstOrDefault(candidate => HasLanguageCode(candidate, languageCode));
            if (title == null)
            {
                title = new XElement("Title", new XAttribute("LCID", languageCode));
                titles.Add(title);
            }
            title.SetAttributeValue("Text", label);
        }

        private static bool HasLanguageCode(XElement title, int languageCode) =>
            int.TryParse((string)title.Attribute("LCID"), out var currentLanguageCode) && currentLanguageCode == languageCode;

        private static string GetOptionalText(JsonElement input, string property)
        {
            if (!input.TryGetProperty(property, out _))
                return null;
            var value = FormXmlHelpers.GetStringProp(input, property)?.Trim();
            return !string.IsNullOrEmpty(value) ? value :
                throw new InvalidOperationException($"manage_navigation {property} must be a non-empty string.");
        }

        private static int? GetOptionalInteger(JsonElement input, string property, int minimum)
        {
            if (!input.TryGetProperty(property, out var value))
                return null;
            return value.ValueKind == JsonValueKind.Number && value.TryGetInt32(out var number) && number >= minimum
                ? number : throw new InvalidOperationException($"manage_navigation {property} must be an integer >= {minimum}.");
        }

        private static bool? GetOptionalVisibility(JsonElement input)
        {
            if (!input.TryGetProperty("visible", out var value))
                return null;
            return value.ValueKind is JsonValueKind.True or JsonValueKind.False ? value.GetBoolean() :
                throw new InvalidOperationException("manage_navigation visible must be a boolean.");
        }
    }
}
