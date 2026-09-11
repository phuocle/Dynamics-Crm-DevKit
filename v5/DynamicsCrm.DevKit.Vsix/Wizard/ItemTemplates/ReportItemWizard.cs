using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    [ComVisible(true)]
    [Guid("D9C4B6D7-59A6-4B1F-9D93-6BBF0E0F1D18")]
    [ClassInterface(ClassInterfaceType.None)]
    public sealed class ReportItemWizard : IDTWizard
    {
        private const string ReportDesignerEditorGuid = "{7651A702-06E5-11D1-8EBD-00A0C90F26EA}";

        public void Execute(object application, IntPtr hwndOwner, ref object[] contextParams, ref object[] customParams, ref wizardResult retval)
        {
            retval = wizardResult.wizardResultFailure;
            try
            {
                var projectItems = contextParams != null && contextParams.Length > 2 ? contextParams[2] as ProjectItems : null;
                var itemName = contextParams != null && contextParams.Length > 4 ? contextParams[4] as string : null;
                if (projectItems == null)
                    return;

                retval = ThreadHelper.JoinableTaskFactory.Run(() => GenerateAsync(projectItems, itemName));
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"DevKit: ReportItemWizard failed: {ex}");
            }
        }

        private static async Task<wizardResult> GenerateAsync(ProjectItems projectItems, string itemName)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var form = new FormItem(ItemType.Report);
            if (!(form.ShowModal() ?? false))
                return wizardResult.wizardResultCancel;

            var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.SchemaName == form.ItemName);
            if (entityMetadata == null)
                throw new InvalidOperationException($"Entity metadata not found for '{form.ItemName}'.");

            var template = await VsixHelper.ReadEmbeddedResourceAsync("ReportTemplate.rdl");
            var report = await ReportTemplateBuilder.BuildAsync(template, form.ServiceClient, entityMetadata);
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var fileName = NormalizeFileName(itemName);
            var folderPath = GetProjectItemsFolder(projectItems);
            if (string.IsNullOrWhiteSpace(folderPath))
                throw new InvalidOperationException("The selected report project folder could not be resolved.");

            var fullPath = Path.Combine(folderPath, fileName);
            if (File.Exists(fullPath))
                return wizardResult.wizardResultFailure;

            await FileHelper.ForceWriteAllTextAsync(fullPath, report);
            try
            {
                var projectItem = projectItems.AddFromFile(fullPath);
                if (projectItem == null)
                {
                    File.Delete(fullPath);
                    return wizardResult.wizardResultFailure;
                }

                projectItem.Open(ReportDesignerEditorGuid)?.Activate();
                return wizardResult.wizardResultSuccess;
            }
            catch
            {
                if (File.Exists(fullPath))
                    File.Delete(fullPath);
                throw;
            }
        }

        private static string GetProjectItemsFolder(ProjectItems projectItems)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            try
            {
                if (projectItems.Parent is ProjectItem parentItem)
                {
                    var parentPath = VsixHelper.TryGetProjectItemFullPath(parentItem);
                    if (Directory.Exists(parentPath))
                        return parentPath;
                    if (!string.IsNullOrWhiteSpace(parentPath))
                        return Path.GetDirectoryName(parentPath);
                }

                if (projectItems.Parent is Project parentProject && !string.IsNullOrWhiteSpace(parentProject.FullName))
                    return Path.GetDirectoryName(parentProject.FullName);
            }
            catch
            {
            }

            return null;
        }

        private static string NormalizeFileName(string value)
        {
            value = Path.GetFileName(string.IsNullOrWhiteSpace(value) ? "Report.rdl" : value.Trim());
            if (string.IsNullOrWhiteSpace(value) || value == "." || value == "..")
                value = "Report.rdl";
            if (!value.EndsWith(".rdl", StringComparison.OrdinalIgnoreCase))
                value += ".rdl";
            return value;
        }
    }
}
