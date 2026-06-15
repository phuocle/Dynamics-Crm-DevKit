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

        protected async Task<bool> ShouldAddProjectItemAsync(string templateFilePath, string targetFileName)
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
            return !IsFilePathExist;
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
            var fullPath = GetTargetFilePath(targetFileName);
            if (string.IsNullOrWhiteSpace(fullPath)) return;
            var oldContent = File.Exists(fullPath) ? await FileHelper.ReadAllTextAsync(fullPath) : null;
            if (string.Equals(oldContent, content, StringComparison.Ordinal)) return;
            await FileHelper.ForceWriteAllTextAsync(fullPath, content);
        }

        protected async Task<ProjectItem> AddTargetFileToProjectAsync(string targetFileName)
        {
            return await VsixHelper.TryAddProjectItemAsync(TargetProjectItems, GetTargetFilePath(targetFileName));
        }
    }
}
