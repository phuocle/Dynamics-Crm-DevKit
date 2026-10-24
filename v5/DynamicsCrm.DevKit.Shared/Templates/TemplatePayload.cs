using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates
{
    /// <summary>
    /// Reads template payload content from the embedded resources of the
    /// executing assembly. Because the Shared project compiles into every
    /// host (VSIX, CLI, Tool), the same code resolves the payload in every
    /// host without cloning files.
    ///
    /// Payload resources use the logical name pattern
    /// "Resources.templates.{project|item}.{templateId}.{fileName}" (set in
    /// DynamicsCrm.DevKit.Shared.projitems); legacy Shared resources keep
    /// their default "{RootNamespace}.Resources.{path}" names, resolved
    /// suffix-first so the code works under any RootNamespace.
    /// </summary>
    public static class TemplatePayload
    {
        public static string Prefix(TemplateKind kind, string templateId)
        {
            var kindName = kind == TemplateKind.Project ? "project" : "item";
            return $"Resources.templates.{kindName}.{templateId.ToLowerInvariant()}.";
        }

        /// <summary>
        /// Reads an embedded resource by name suffix (for example
        /// "Resources.templates.project.shared.generator.bat"). Returns null
        /// when the resource does not exist.
        /// </summary>
        public static async Task<string> ReadAsync(string resourceName)
        {
            if (string.IsNullOrWhiteSpace(resourceName)) return null;
            var assembly = Assembly.GetExecutingAssembly();
            var fullName = assembly.GetManifestResourceNames()
                .FirstOrDefault(name => name.EndsWith(resourceName, StringComparison.OrdinalIgnoreCase));
            if (fullName == null) return null;

            using (var stream = assembly.GetManifestResourceStream(fullName))
            {
                if (stream == null) return null;
                using (var reader = new StreamReader(stream))
                {
                    return await reader.ReadToEndAsync();
                }
            }
        }

        /// <summary>
        /// Lists the payload resource file names (suffix after the template
        /// prefix) embedded for a template.
        /// </summary>
        public static List<string> List(TemplateKind kind, string templateId)
        {
            var prefix = Prefix(kind, templateId);
            var assembly = Assembly.GetExecutingAssembly();
            return assembly.GetManifestResourceNames()
                .Where(name => name.IndexOf(prefix, StringComparison.OrdinalIgnoreCase) >= 0)
                .Select(name => name.Substring(name.IndexOf(prefix, StringComparison.OrdinalIgnoreCase) + prefix.Length))
                .OrderBy(name => name, StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        /// <summary>
        /// Reads a legacy Shared resource by dotted path (for example
        /// "js.devkit.js", "bat.plugin.deploy.debug.bat", "tt.Plugin.tt").
        /// Returns null when the resource does not exist.
        /// </summary>
        public static Task<string> ReadSharedResourceAsync(string path)
        {
            return ReadAsync($".Resources.{path}");
        }
    }
}
