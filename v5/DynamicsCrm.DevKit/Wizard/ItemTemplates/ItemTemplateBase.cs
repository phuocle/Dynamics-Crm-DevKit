using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public class ItemTemplateBase
    {
        protected string ItemName { get; set; }
        protected string FilePath { get; set; }
        protected bool IsFilePathExist { get; set; } = false;
        protected string FullFilePath { get; set; }
        protected string TargetFolderPath { get; private set; }
        protected ProjectItems TargetProjectItems { get; private set; }
        private readonly Dictionary<string, string> _targetFilePaths = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        private readonly Dictionary<string, ProjectItem> _generatedProjectItems = new Dictionary<string, ProjectItem>(StringComparer.OrdinalIgnoreCase);
        private readonly string _telemetryCorrelationId = ItemTemplateTelemetry.NewCorrelationId();

        protected IDisposable TraceRunStarted()
        {
            return Trace("RunStarted");
        }

        protected IDisposable TraceRunFinished()
        {
            return Trace("RunFinished");
        }

        protected IDisposable TraceShouldAddProjectItem(string templateFilePath)
        {
            return Trace("ShouldAddProjectItem", $"templateFile={templateFilePath}");
        }

        protected IDisposable Trace(string operation, string details = null)
        {
            return ItemTemplateTelemetry.Start(GetType().Name, _telemetryCorrelationId, operation, details);
        }

        protected async Task<bool> ShouldAddProjectItemAsync(string templateFilePath, string targetFileName)
        {
            using (Trace("ShouldAddProjectItemAsync", $"templateFile={templateFilePath}; targetFile={targetFileName}"))
            {
                if (string.IsNullOrWhiteSpace(TargetFolderPath) || TargetProjectItems == null)
                {
                    var container = await VsixHelper.SelectedItem.GetProjectItemsContainerAsync();
                    TargetFolderPath = container?.FolderPath;
                    TargetProjectItems = container?.ProjectItems;
                }

                FilePath = targetFileName;
                FullFilePath = string.IsNullOrWhiteSpace(TargetFolderPath) ? targetFileName : Path.Combine(TargetFolderPath, targetFileName);
                IsFilePathExist = File.Exists(FullFilePath);
                _targetFilePaths[templateFilePath] = FullFilePath;
                _targetFilePaths[targetFileName] = FullFilePath;
                ItemTemplateTelemetry.Log(GetType().Name, _telemetryCorrelationId, "ShouldAddProjectItemAsync", $"exists={IsFilePathExist}; fullPath={FullFilePath}");
                return !IsFilePathExist;
            }
        }

        protected string GetTargetFilePath(string targetFileName)
        {
            if (targetFileName != null && _targetFilePaths.TryGetValue(targetFileName, out var fullPath)) return fullPath;
            return string.IsNullOrWhiteSpace(TargetFolderPath) ? null : Path.Combine(TargetFolderPath, targetFileName);
        }

        protected void TrackGeneratedProjectItem(ProjectItem projectItem)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (projectItem == null) return;
            if (!string.IsNullOrWhiteSpace(projectItem.Name))
                _generatedProjectItems[projectItem.Name] = projectItem;

            var fullPath = VsixHelper.TryGetProjectItemFullPath(projectItem);
            if (!string.IsNullOrWhiteSpace(fullPath))
                _generatedProjectItems[Path.GetFileName(fullPath)] = projectItem;
        }

        protected ProjectItem GetGeneratedProjectItem(string targetFileName)
        {
            return targetFileName != null && _generatedProjectItems.TryGetValue(targetFileName, out var projectItem) ? projectItem : null;
        }

        protected async Task WriteTargetFileIfChangedAsync(string targetFileName, string content)
        {
            using (Trace("WriteTargetFileIfChanged", $"targetFile={targetFileName}"))
            {
                var fullPath = GetTargetFilePath(targetFileName);
                if (string.IsNullOrWhiteSpace(fullPath)) return;
                var oldContent = File.Exists(fullPath) ? await FileHelper.ReadAllTextAsync(fullPath) : null;
                if (string.Equals(oldContent, content, StringComparison.Ordinal))
                {
                    ItemTemplateTelemetry.Log(GetType().Name, _telemetryCorrelationId, "WriteTargetFileIfChanged", $"skipped unchanged; fullPath={fullPath}");
                    return;
                }
                await FileHelper.ForceWriteAllTextAsync(fullPath, content);
                ItemTemplateTelemetry.Log(GetType().Name, _telemetryCorrelationId, "WriteTargetFileIfChanged", $"written; fullPath={fullPath}");
            }
        }

        protected async Task<ProjectItem> AddTargetFileToProjectAsync(string targetFileName)
        {
            using (Trace("AddTargetFileToProject", $"targetFile={targetFileName}"))
            {
                return await VsixHelper.TryAddProjectItemAsync(TargetProjectItems, GetTargetFilePath(targetFileName));
            }
        }
    }
}
