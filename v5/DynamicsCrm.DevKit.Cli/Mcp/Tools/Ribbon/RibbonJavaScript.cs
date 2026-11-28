using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal static class RibbonJavaScript
    {
        internal const string DependencyLibrariesField = "dependency_libraries";
        internal const string WebResourceHint = "Use manage_assets(resource='webresource', action='list') to find valid JS web resource names.";
        private const string WebResourcePrefix = "$webresource:";
        private const string PreloadFunction = "isNaN";

        internal static (IReadOnlyList<string> libraries, string error, string hint) ReadDependencies(
            JsonElement operation, IRibbonValidation validation)
        {
            const string arrayHint = "Pass dependency_libraries as an ordered JSON array of non-empty JS web resource names.";
            if (!operation.TryGetProperty(DependencyLibrariesField, out var dependencies))
                return (null, null, null);
            if (dependencies.ValueKind != JsonValueKind.Array)
                return (null, "'dependency_libraries' must be an array of web resource names.", arrayHint);

            var libraries = new List<string>();
            var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var entry in dependencies.EnumerateArray())
            {
                var name = entry.ValueKind == JsonValueKind.String ? entry.GetString()?.Trim() : null;
                if (name?.StartsWith(WebResourcePrefix, StringComparison.OrdinalIgnoreCase) == true)
                    name = name[WebResourcePrefix.Length..].Trim();
                if (string.IsNullOrWhiteSpace(name))
                    return (null, "Each 'dependency_libraries' entry must be a non-empty web resource name.", arrayHint);
                if (!seen.Add(name))
                    continue;

                var error = validation.ValidateWebResourceExists(name);
                if (error != null)
                    return (null, error, WebResourceHint);
                libraries.Add(WebResourcePrefix + name);
            }

            return (libraries, null, null);
        }

        internal static IEnumerable<XElement> DependencyActions(IReadOnlyList<string> libraries) =>
            (libraries ?? []).Select(library => new XElement("JavaScriptFunction",
                new XAttribute("FunctionName", PreloadFunction), new XAttribute("Library", library)));

        internal static IEnumerable<XElement> DependencyRules(IReadOnlyList<string> libraries) =>
            (libraries ?? []).Select(library => new XElement("CustomRule",
                new XAttribute("FunctionName", PreloadFunction), new XAttribute("Library", library),
                new XAttribute("Default", "true")));

        internal static bool IsDependency(XElement element) =>
            (string)element.Attribute("FunctionName") == PreloadFunction &&
            ((string)element.Attribute("Library"))?.StartsWith(WebResourcePrefix, StringComparison.OrdinalIgnoreCase) == true &&
            !element.HasElements &&
            (element.Name.LocalName == "JavaScriptFunction" && element.Attributes().Count() == 2 ||
             element.Name.LocalName == "CustomRule" && element.Attributes().Count() == 3 &&
             (string)element.Attribute("Default") is "true" or "1");

        internal static (string error, string hint) UpdateHandlers(XElement root, string commandId, string enableRuleId,
            JsonElement operation, IRibbonValidation validation, List<string> updatedFields)
        {
            var actions = root?.Element("CommandDefinitions")?.Elements("CommandDefinition")
                .FirstOrDefault(e => string.Equals((string)e.Attribute("Id"), commandId, StringComparison.OrdinalIgnoreCase))
                ?.Element("Actions");
            var enableRule = root?.Element("RuleDefinitions")?.Element("EnableRules")?.Elements("EnableRule")
                .FirstOrDefault(e => string.Equals((string)e.Attribute("Id"), enableRuleId, StringComparison.OrdinalIgnoreCase));
            var clickHandler = actions?.Elements("JavaScriptFunction").FirstOrDefault(e => !IsDependency(e));
            var enableHandler = enableRule?.Elements("CustomRule").FirstOrDefault(e => !IsDependency(e));

            foreach (var (handler, libraryField, functionField) in new[]
            {
                (clickHandler, "library", "function"),
                (enableHandler, "enable_library", "enable_function")
            })
            {
                var library = RibbonXmlHelpers.GetJsonString(operation, libraryField);
                if (!string.IsNullOrWhiteSpace(library))
                {
                    var error = validation.ValidateWebResourceExists(library);
                    if (error != null) return (error, WebResourceHint);
                    handler?.SetAttributeValue("Library", WebResourcePrefix + library);
                    updatedFields.Add(libraryField);
                }

                var function = RibbonXmlHelpers.GetJsonString(operation, functionField);
                if (!string.IsNullOrWhiteSpace(function))
                {
                    handler?.SetAttributeValue("FunctionName", function);
                    updatedFields.Add(functionField);
                }
            }

            var (libraries, dependencyError, hint) = ReadDependencies(operation, validation);
            if (dependencyError != null) return (dependencyError, hint);
            if (libraries == null) return (null, null);
            if (clickHandler == null || enableHandler == null)
                return ($"Cannot set 'dependency_libraries' for command '{commandId}' without a click handler and a custom enable rule.",
                    "Use manage_commanding(resource='ribbon', action='detail') to check the existing RibbonDiffXml.");

            actions.Elements("JavaScriptFunction").Where(IsDependency).Remove();
            enableRule.Elements("CustomRule").Where(IsDependency).Remove();
            actions.AddFirst(DependencyActions(libraries));
            enableRule.AddFirst(DependencyRules(libraries));
            updatedFields.Add(DependencyLibrariesField);
            return (null, null);
        }
    }
}
