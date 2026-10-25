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
        public string ProxyTypesProjectName { get; set; }
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
        public string TemplateTitle { get; set; } = "Default";
        public string RootNamespace { get; set; }
        public string OutputDirectory { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public ServiceClient ServiceClient { get; set; }
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
