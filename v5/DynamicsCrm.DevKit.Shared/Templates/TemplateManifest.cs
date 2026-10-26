using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared.Templates
{
    /// <summary>
    /// One payload file of a template manifest: the embedded resource that
    /// holds the content and the target file name pattern (may contain
    /// $tokens$ such as $ProjectName$.csproj).
    /// </summary>
    public sealed class TemplatePayloadFile
    {
        public string ResourceName { get; set; }
        public string TargetFileName { get; set; }
        public bool ReplaceParameters { get; set; } = true;

        /// <summary>
        /// Designer/generated files ({Entity}.generated.cs, {Entity}.form.js,
        /// .d.ts, ...) are always updated when content changed; user files
        /// are never overwritten unless force is requested.
        /// </summary>
        public bool IsGenerated { get; set; }
    }

    /// <summary>
    /// Declares the payload of one template. The data mirrors the file
    /// entries of the VSIX .vstemplate manifests and is registered by each
    /// template handler (P.* / I.* work units) so the engine can render it.
    /// </summary>
    public sealed class TemplateManifest
    {
        public string TemplateId { get; set; }

        /// <summary>
        /// Scopes the registry key of this manifest — CreateManifest
        /// implementations must set it explicitly (Test, UiTest and Report
        /// exist in both kinds).
        /// </summary>
        public TemplateKind Kind { get; set; }
        public List<TemplatePayloadFile> Files { get; } = new List<TemplatePayloadFile>();
    }

    /// <summary>
    /// Registry of the manifests registered by template handlers. Handlers
    /// register on startup of their host; the registry is the extension
    /// point filled in by the P.* / I.* work units. Entries are keyed by
    /// (Kind, TemplateId) — project and item templates may share an id
    /// (Test, UiTest, Report) without one manifest shadowing the other.
    /// </summary>
    public static class TemplateManifests
    {
        private static readonly object Lock = new object();
        private static readonly Dictionary<string, TemplateManifest> All = new Dictionary<string, TemplateManifest>(StringComparer.OrdinalIgnoreCase);

        private static string Key(TemplateKind kind, string templateId)
        {
            return $"{kind}:{templateId.Trim()}";
        }

        public static void Register(TemplateManifest manifest)
        {
            if (manifest == null || string.IsNullOrWhiteSpace(manifest.TemplateId)) return;
            lock (Lock)
            {
                All[Key(manifest.Kind, manifest.TemplateId)] = manifest;
            }
        }

        public static bool TryGet(TemplateKind kind, string templateId, out TemplateManifest manifest)
        {
            manifest = null;
            if (string.IsNullOrWhiteSpace(templateId)) return false;
            lock (Lock)
            {
                return All.TryGetValue(Key(kind, templateId), out manifest);
            }
        }

        public static IEnumerable<TemplateManifest> Registered
        {
            get
            {
                lock (Lock)
                {
                    return All.Values.ToList();
                }
            }
        }

        public static void Clear()
        {
            lock (Lock)
            {
                All.Clear();
            }
        }
    }
}
