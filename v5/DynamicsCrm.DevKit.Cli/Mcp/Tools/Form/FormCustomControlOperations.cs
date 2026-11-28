using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormCustomControlOperations(IOrganizationService orgService, string entityName)
    {
        private const string CustomHost = "{F9A8A302-114E-466A-B582-6771B2AE0D92}";
        private static readonly int[] ClientFactors = [0, 1, 2];
        private readonly CustomControlCatalog _catalog = new(orgService);
        private readonly FormCustomControlParameters _parameters = new(orgService, entityName);

        public string Apply(XDocument form, JsonElement operation, string verb)
        {
            if (verb is not ("bind" or "update" or "unbind"))
                throw new InvalidOperationException($"Unknown manage_action '{verb}' for manage_custom_control. Valid: bind, update, unbind.");

            var target = ResolveTarget(form, operation);
            var controlId = (string)target.Attribute("id");
            var fieldName = (string)target.Attribute("datafieldname");
            var instanceId = (string)target.Attribute("uniqueid");
            var descriptions = form.Root.Element("controlDescriptions");
            var description = FindDescription(form, descriptions, instanceId, controlId);
            var factors = ReadFactors(operation, verb);
            var byFactor = ReadClientControls(description, controlId);
            var fallback = description == null ? null : ReadFallback(description, controlId);
            var classId = (string)target.Attribute("classid");
            if (description == null && SameGuid(classId, CustomHost))
                throw new InvalidOperationException($"Control '{controlId}' has a custom host class ID but no controlDescription with an OOB fallback.");

            var subgrid = fieldName == null && (IsSubgridClass(classId) || IsSubgridClass((string)fallback?.Attribute("id")) ||
                (bool?)target.Attribute("indicationOfSubgrid") == true);
            if (fieldName == null && !subgrid)
                throw new InvalidOperationException($"Control '{controlId}' is neither a field nor a subgrid.");

            if (verb == "unbind")
                return Unbind(target, description, fallback, byFactor, factors, subgrid);

            var name = ReadString(operation, "custom_control_name")
                ?? throw new InvalidOperationException($"{verb} requires 'custom_control_name'. Use inspect_metadata(resource='custom_controls') to find the exact registered name.");
            var replace = ReadReplace(operation, verb);
            foreach (var factor in factors)
            {
                var current = (string)byFactor.GetValueOrDefault(factor)?.Attribute("name");
                if (verb == "update" && !NamesMatch(current, name))
                    throw new InvalidOperationException($"Control '{controlId}' does not use PCF '{name}' on {ClientName(factor)}. Use bind to configure it.");
                if (verb == "bind" && current != null && !NamesMatch(current, name) && !replace)
                    throw new InvalidOperationException($"Control '{controlId}' already uses PCF '{current}' on {ClientName(factor)}. Use replace: true to replace it.");
            }

            var matches = _catalog.Find(name, "exact").Where(item => NamesMatch(name, item.Name)).ToArray();
            if (matches.Length != 1)
                throw new InvalidOperationException(matches.Length == 0
                    ? $"PCF '{name}' is not registered in this environment. Use inspect_metadata(resource='custom_controls')."
                    : $"Multiple installed controls match PCF '{name}'.");
            var component = matches[0];
            if (component.ManifestError != null)
                throw new InvalidOperationException($"Cannot bind PCF '{name}': {component.ManifestError}");
            if (component.Kind != (subgrid ? "dataset" : "field"))
                throw new InvalidOperationException($"PCF '{name}' is a {component.Kind} component and cannot be bound to control '{controlId}'.");

            var input = FormCustomControlParameters.ReadObject(operation, "parameters");
            var nativeGrid = subgrid ? target.Element("parameters") ?? fallback?.Element("parameters") : null;
            foreach (var factor in factors)
            {
                var existing = byFactor.GetValueOrDefault(factor);
                var sameControl = NamesMatch((string)existing?.Attribute("name"), name);
                var parameters = _parameters.Build(component, input, sameControl ? existing.Element("parameters") : null, fieldName, nativeGrid);
                if (sameControl)
                {
                    var current = existing.Element("parameters");
                    if (current == null)
                        existing.Add(parameters);
                    else if (!XNode.DeepEquals(current, parameters))
                        current.ReplaceWith(parameters);
                    continue;
                }

                var custom = new XElement("customControl", new XAttribute("formFactor", factor),
                    new XAttribute("name", component.Name), parameters);
                if (existing != null)
                    existing.ReplaceWith(custom);
                byFactor[factor] = custom;
            }

            if (description == null)
            {
                if (!Guid.TryParse(classId, out _))
                    throw new InvalidOperationException($"Control '{controlId}' has no valid OOB class ID.");
                instanceId ??= FormXmlHelpers.NewGuid();
                target.SetAttributeValue("uniqueid", instanceId);
                fallback = new XElement("customControl", new XAttribute("id", classId), new XElement("parameters"));
                if (fieldName != null)
                    fallback.Element("parameters").Add(new XElement("datafieldname", fieldName));
                description = new XElement("controlDescription", new XAttribute("forControl", instanceId), fallback);
                if (descriptions == null)
                {
                    descriptions = new XElement("controlDescriptions");
                    form.Root.Add(descriptions);
                }
                descriptions.Add(description);
            }
            else
            {
                description.SetAttributeValue("forControl", instanceId);
            }
            target.SetAttributeValue("classid", CustomHost);
            if (subgrid)
                target.SetAttributeValue("indicationOfSubgrid", true);
            EnsureClientControls(description, fallback, byFactor);
            return $"manage_custom_control: {verb} '{component.Name}' on '{controlId}' ({string.Join(", ", factors.Select(ClientName))})";
        }

        private static string Unbind(XElement target, XElement description, XElement fallback,
            Dictionary<int, XElement> byFactor, int[] factors, bool subgrid)
        {
            var id = (string)target.Attribute("id");
            if (description == null)
                return $"manage_custom_control: '{id}' has no PCF binding.";

            var named = byFactor.Where(entry => entry.Value.Attribute("name") != null).ToArray();
            if (factors == null)
            {
                if (named.Select(entry => (string)entry.Value.Attribute("name")).Distinct(StringComparer.OrdinalIgnoreCase).Count() > 1)
                    throw new InvalidOperationException($"Control '{id}' uses multiple PCFs. Specify form_factors: " +
                        string.Join(", ", named.Select(entry => $"{ClientName(entry.Key)} = {entry.Value.Attribute("name").Value}")));
                factors = ClientFactors;
            }

            var selected = named.Where(entry => factors.Contains(entry.Key)).ToArray();
            if (selected.Length == 0)
                return $"manage_custom_control: '{id}' has no PCF binding on the selected clients.";
            foreach (var entry in selected)
            {
                entry.Value.Remove();
                byFactor.Remove(entry.Key);
            }

            if (description.Elements("customControl").Any(element => element != fallback &&
                (element.Attribute("name") != null ||
                 !SameGuid((string)element.Attribute("id"), (string)fallback.Attribute("id")))))
            {
                description.SetAttributeValue("forControl", (string)target.Attribute("uniqueid"));
                EnsureClientControls(description, fallback, byFactor);
            }
            else
            {
                target.SetAttributeValue("classid", (string)fallback.Attribute("id"));
                if (subgrid && target.Element("parameters") == null && fallback.Element("parameters")?.HasElements == true)
                    target.Add(new XElement(fallback.Element("parameters")));
                RemoveDescription(description);
            }

            return $"manage_custom_control: unbind '{id}' ({string.Join(", ", selected.Select(entry => ClientName(entry.Key)))})";
        }

        public static IEnumerable<Guid> InstanceIds(XDocument form) => LayoutControls(form)
            .Select(control => Guid.TryParse((string)control.Attribute("uniqueid"), out var id) ? id : Guid.Empty)
            .Where(id => id != Guid.Empty);

        public static void RemoveDeletedBindings(XDocument form, HashSet<Guid> previousIds)
        {
            var descriptions = form.Root.Element("controlDescriptions");
            if (descriptions == null)
                return;
            previousIds.ExceptWith(InstanceIds(form));
            foreach (var entry in descriptions.Elements("controlDescription").Where(entry =>
                         Guid.TryParse((string)entry.Attribute("forControl"), out var id) && previousIds.Contains(id)).ToArray())
                RemoveDescription(entry);
        }

        private static void RemoveDescription(XElement entry)
        {
            var parent = entry.Parent;
            entry.Remove();
            if (!parent.HasElements)
                parent.Remove();
        }

        private static IEnumerable<XElement> LayoutControls(XDocument form) =>
            form.Root.Descendants("cell").SelectMany(cell => cell.Elements("control"))
                .Where(control => control.Ancestors().Any(node => node.Name.LocalName is "section" or "header"));

        private static XElement ResolveTarget(XDocument form, JsonElement operation)
        {
            var id = ReadString(operation, "control_id");
            var field = ReadString(operation, "field");
            if (id == null && field == null)
                throw new InvalidOperationException("manage_custom_control requires 'control_id' or a field that occurs once on the form.");
            var matches = LayoutControls(form).Where(control =>
                (id == null || NamesMatch(id, (string)control.Attribute("id"))) &&
                (field == null || NamesMatch(field, (string)control.Attribute("datafieldname")))).ToArray();
            if (matches.Length == 0)
                throw new InvalidOperationException($"No form control matches control_id '{id}' and field '{field}'. Use manage_form detail to inspect the FormXML.");
            if (matches.Length > 1)
                throw new InvalidOperationException("Multiple form instances match. Select a unique control_id. Matches: " +
                    string.Join(", ", matches.Select(control => $"{control.Attribute("id")?.Value} in {Location(control)}")));
            return matches[0];
        }

        private static string Location(XElement node)
        {
            var section = (string)node.Ancestors("section").FirstOrDefault()?.Attribute("name");
            var tab = (string)node.Ancestors("tab").FirstOrDefault()?.Attribute("name");
            return section != null ? $"{tab}/{section}" : "header";
        }

        private static XElement FindDescription(XDocument form, XElement descriptions, string instanceId, string controlId)
        {
            if (instanceId == null)
                return null;
            if (!Guid.TryParse(instanceId, out var instanceGuid) || instanceGuid == Guid.Empty)
                throw new InvalidOperationException($"Control '{controlId}' has an invalid uniqueid.");
            var matches = descriptions?.Elements("controlDescription")
                .Where(entry => SameGuid(instanceId, (string)entry.Attribute("forControl"))).ToArray() ?? [];
            if (matches.Length > 1 || LayoutControls(form).Count(control => SameGuid(instanceId, (string)control.Attribute("uniqueid"))) > 1)
                throw new InvalidOperationException($"Control '{controlId}' shares its uniqueid or controlDescription with another instance.");
            return matches.SingleOrDefault();
        }

        private static XElement ReadFallback(XElement description, string controlId)
        {
            var matches = description.Elements("customControl").Where(entry => entry.Attribute("formFactor") == null &&
                entry.Attribute("name") == null && Guid.TryParse((string)entry.Attribute("id"), out _)).ToArray();
            if (matches.Length != 1 || SameGuid((string)matches[0].Attribute("id"), CustomHost))
                throw new InvalidOperationException($"Control '{controlId}' has a missing or ambiguous OOB fallback.");
            return matches[0];
        }

        private static Dictionary<int, XElement> ReadClientControls(XElement description, string controlId)
        {
            var controls = new Dictionary<int, XElement>();
            if (description != null)
            {
                foreach (var element in description.Elements("customControl"))
                    if (int.TryParse((string)element.Attribute("formFactor"), out var factor) && ClientFactors.Contains(factor) &&
                        !controls.TryAdd(factor, element))
                        throw new InvalidOperationException($"Control '{controlId}' has multiple bindings for {ClientName(factor)}.");
            }
            return controls;
        }

        private static void EnsureClientControls(XElement description, XElement fallback, Dictionary<int, XElement> byFactor)
        {
            foreach (var factor in ClientFactors)
            {
                if (!byFactor.TryGetValue(factor, out var element))
                {
                    element = new XElement(fallback);
                    element.SetAttributeValue("formFactor", factor);
                }
                if (element.Parent == null)
                    description.Add(element);
            }
        }

        private static int[] ReadFactors(JsonElement operation, string verb)
        {
            if (!operation.TryGetProperty("form_factors", out var array) && verb == "unbind")
                return null;
            if (array.ValueKind != JsonValueKind.Array || array.GetArrayLength() == 0)
                throw new InvalidOperationException("form_factors must be a non-empty array of integers (0 = Phone, 1 = Tablet, 2 = Web).");
            return array.EnumerateArray().Select(value =>
                value.ValueKind == JsonValueKind.Number && value.TryGetInt32(out var factor) && ClientFactors.Contains(factor)
                    ? factor : throw new InvalidOperationException("Valid form_factors: 0 = Phone, 1 = Tablet, 2 = Web.")).Distinct().ToArray();
        }

        private static bool ReadReplace(JsonElement operation, string verb)
        {
            if (!operation.TryGetProperty("replace", out var value))
                return false;
            if (verb != "bind" || value.ValueKind is not (JsonValueKind.True or JsonValueKind.False))
                throw new InvalidOperationException("'replace' must be a boolean and is only supported for bind.");
            return value.GetBoolean();
        }

        internal static string ReadString(JsonElement obj, string name)
        {
            if (!obj.TryGetProperty(name, out var value))
                return null;
            if (value.ValueKind != JsonValueKind.String || string.IsNullOrWhiteSpace(value.GetString()))
                throw new InvalidOperationException($"'{name}' must be a non-empty string.");
            return value.GetString().Trim();
        }

        private static bool NamesMatch(string a, string b) => string.Equals(a, b, StringComparison.OrdinalIgnoreCase);
        private static bool SameGuid(string a, string b) => Guid.TryParse(a, out var left) && Guid.TryParse(b, out var right) && left == right;
        private static bool IsSubgridClass(string value) => SameGuid(value, ControlClassId.SUB_GRID);
        private static string ClientName(int factor) => factor switch { 0 => "Phone", 1 => "Tablet", _ => "Web" };
    }
}
