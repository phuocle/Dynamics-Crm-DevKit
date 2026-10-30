using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.Templates.Models
{
    /// <summary>
    /// The two template families ported from the VSIX project/item templates.
    /// </summary>
    public enum TemplateKind
    {
        Project,
        Item
    }

    /// <summary>
    /// One entry of the shared template catalog. The catalog is the single
    /// source of truth for template ids, VSIX ordering and metadata for the
    /// VSIX / CLI / MCP hosts.
    /// </summary>
    public sealed class TemplateDescriptor
    {
        public string Id { get; set; }
        public TemplateKind Kind { get; set; }
        public int Order { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public bool RequiresConnection { get; set; }
        public bool SupportsCustomT4 { get; set; }

        public override string ToString()
        {
            return $"{Id} ({Kind})";
        }
    }

    /// <summary>
    /// Workspace facts (solution, shared project, namespaces) resolved from
    /// the file system. Replaces the EnvDTE-based lookups used by the VSIX
    /// wizards (VsixHelper.GetSolutionNameAsync / GetSharedProjectAsync).
    /// </summary>
    public sealed class WorkspaceContext
    {
        public string SolutionName { get; set; }
        public string SolutionFile { get; set; }
        public string SolutionDirectory { get; set; }
        public string SharedProjectName { get; set; }
        public string SharedProjectFile { get; set; }
        public string SharedProjectNameSpace { get; set; }
        public string SharedTestProjectName { get; set; }
        public string SharedTestProjectFile { get; set; }
        public string ProxyTypesProjectName { get; set; }
        public string ProxyTypesProjectFile { get; set; }
        public string RootNamespace { get; set; }
        public string ProjectDirectory { get; set; }

        public bool HasSolution
        {
            get { return !string.IsNullOrEmpty(SolutionFile); }
        }

        public static WorkspaceContext Empty(string projectDirectory)
        {
            return new WorkspaceContext
            {
                SolutionName = string.Empty,
                SolutionDirectory = projectDirectory ?? string.Empty,
                ProjectDirectory = projectDirectory ?? string.Empty,
            };
        }
    }

    /// <summary>
    /// Platform-neutral input for a project template. Field-for-field
    /// replacement of the VSIX FormProject dialog output.
    /// </summary>
    public class ProjectTemplateInput
    {
        public string TemplateId { get; set; }
        public string ProjectName { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public string OutputDirectory { get; set; }

        /// <summary>
        /// Explicit solution file (.sln/.slnx) to register the scaffolded
        /// project in. Projects are added to a solution ONLY when the host
        /// names one — with several solutions in one tree the CLI cannot
        /// pick, and the VSIX never needs to (its wizard runs inside the
        /// solution the user opened). Null/empty = create the project only.
        /// </summary>
        public string SolutionFile { get; set; }
        public bool Force { get; set; }
        public bool Offline { get; set; }
    }

    /// <summary>
    /// Platform-neutral input for an item template. Field-for-field
    /// replacement of the VSIX FormItem / FormPlugin dialog output.
    /// </summary>
    public class ItemTemplateInput
    {
        public string TemplateId { get; set; }
        public string Name { get; set; }
        public string Entity { get; set; }
        public string Message { get; set; }
        public string Stage { get; set; }
        public string Execution { get; set; }
        public int Order { get; set; } = 1;
        public string Class { get; set; }
        public string DataSource { get; set; }

        /// <summary>
        /// The full class name of the plugin/workflow the test targets
        /// (the wizard's test-plugin combo selection). The handler
        /// resolves it against the PluginTestDiscovery scan of the test
        /// project's references and takes the missing message, stage,
        /// execution and entity fields from the candidate — the dialog's
        /// combos are collapsed and the candidate is their only voice.
        /// Empty = the plain (guard-less) test skeleton.
        /// </summary>
        public string TestTarget { get; set; }

        /// <summary>
        /// The T4 template title from DynamicsCrm.DevKit.Cli.json
        /// ("Default" = built-in resource) — the FormPlugin template combo.
        /// </summary>
        public string TemplateTitle { get; set; } = "Default";

        /// <summary>
        /// Direct path to a custom .tt T4 file (CLI convenience; the wizard
        /// only knows Cli.json titles). When set it wins over TemplateTitle.
        /// </summary>
        public string T4Path { get; set; }

        /// <summary>
        /// The comment rendered into the template's comment block — the
        /// org-derived InputParameters/OutputParameters doc of the wizard.
        /// Empty when the host has none (offline).
        /// </summary>
        public string Comment { get; set; }

        /// <summary>
        /// The project the item scaffolds into (the wizard's selected
        /// project): names the .csproj/.shproj the RootNamespace and
        /// $rootnamespace$ are read from. Empty = the nearest project at or
        /// above the output directory.
        /// </summary>
        public string ProjectName { get; set; }
        public string RootNamespace { get; set; }
        public string OutputDirectory { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public ServiceClient ServiceClient { get; set; }

        /// <summary>
        /// The host's T4 engine (CLI: MonoTextTransformer; the VSIX keeps
        /// its VS T4 service). The Shared handlers render through this
        /// contract — the Mono package is not referenced by the VSIX.
        /// </summary>
        public Templates.T4.ITextTransformer Transformer { get; set; }
        public bool Force { get; set; }
        public bool Offline { get; set; }
    }

    /// <summary>
    /// Per-file outcome of a scaffold run.
    /// </summary>
    public sealed class ScaffoldFileResult
    {
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public string Action { get; set; }

        public ScaffoldFileResult()
        {
        }

        public ScaffoldFileResult(string fileName, string filePath, string action)
        {
            FileName = fileName;
            FilePath = filePath;
            Action = action;
        }
    }

    /// <summary>
    /// Result of a scaffold run, shared by every host (CLI console table,
    /// MCP tool JSON payload).
    /// </summary>
    public sealed class ScaffoldResult
    {
        public string TemplateId { get; set; }
        public bool Success { get; set; } = true;
        public List<string> Errors { get; } = new List<string>();
        public List<string> Warnings { get; } = new List<string>();
        public List<ScaffoldFileResult> Files { get; } = new List<ScaffoldFileResult>();

        public void AddError(string error)
        {
            Success = false;
            Errors.Add(error);
        }

        public void AddWarning(string warning)
        {
            Warnings.Add(warning);
        }
    }
}
