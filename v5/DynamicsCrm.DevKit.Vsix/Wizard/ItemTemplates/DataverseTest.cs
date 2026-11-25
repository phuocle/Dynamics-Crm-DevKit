using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Shared.Templates.T4;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml;
using PluginTestDiscovery = DynamicsCrm.DevKit.Shared.Templates.PluginTestDiscovery;

namespace DynamicsCrm.DevKit.Wizard.ItemTemplates
{
    public sealed class DataverseTest : ItemTemplateBase, IWizard
    {
        private string _itemPath;
        private string _itemMarker;
        private string _itemContent;

        public void RunStarted(object automationObject, Dictionary<string, string> replacements,
            WizardRunKind runKind, object[] customParams)
        {
            using (TraceRunStarted())
            {
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    try
                    {
                        var container = await VsixHelper.SelectedItem.GetProjectItemsContainerAsync();
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        var projectFile = container?.Project?.FullName;
                        if (string.IsNullOrWhiteSpace(projectFile))
                            throw new ArgumentException("Select a DataverseTest project or a source folder in that project.");
                        DataverseTestItemHandler.ReadTestProject(projectFile);
                        var directory = container.FolderPath ?? Path.GetDirectoryName(projectFile);

                        var candidates = await PluginTestDiscovery.GetDataverseTestCandidatesAsync(projectFile);
                        var titles = new[] { T4TemplateResolver.DefaultTemplateTitle }
                            .Concat(T4TemplateResolver.GetCustomTemplateTitles(TemplateCatalog.DataverseTestId, directory))
                            .Distinct(StringComparer.Ordinal).ToArray();

                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        var form = new FormPlugin(candidates, titles,
                            replacements.TryGetValue("$safeitemname$", out var suggestedName) ? suggestedName : "Class");
                        if (form.ShowModal() != true)
                            throw new WizardCancelledException();

                        var input = new ItemTemplateInput
                        {
                            TemplateId = TemplateCatalog.DataverseTestId,
                            Name = form.Class,
                            TestTarget = form.TestTargetFullClassName,
                            TemplateTitle = form.CustomTemplate,
                            OutputDirectory = directory
                        };
                        var item = await DataverseTestItemHandler.PrepareItemAsync(input, projectFile);
                        if (File.Exists(item.Path))
                            throw new ArgumentException($"'{Path.GetFileName(item.Path)}' already exists. Choose another test class name.");

                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        var code = await T4Helper.ProcessTemplateAsync(item.Template, item.Context, throwOnErrors: true);
                        _itemPath = item.Path;
                        _itemMarker = item.Marker;
                        _itemContent = DataverseTestItemHandler.GetItemContent(item.Marker, code, input);
                        replacements["$test$"] = _itemContent;
                        replacements["$Class$"] = item.Context.ClassWithOrder;
                    }
                    catch (Exception ex) when (ex is ArgumentException or IOException or UnauthorizedAccessException or InvalidOperationException or XmlException)
                    {
                        await VS.MessageBox.ShowErrorAsync(ex.Message, "Dataverse Test Class");
                        throw new WizardCancelledException();
                    }
                });
            }
        }

        public void BeforeOpeningFile(ProjectItem projectItem) => WriteGeneratedItem();
        public void ProjectFinishedGenerating(Project project) { }
        public void ProjectItemFinishedGenerating(ProjectItem projectItem) { }
        public void RunFinished() => WriteGeneratedItem();

        private void WriteGeneratedItem()
        {
            if (_itemContent == null) return;

            // The VS item engine adds the file to the project and can alter its encoding and layout.
            // Replace only the file carrying the marker from this wizard invocation.
            using var stream = new FileStream(_itemPath, FileMode.Open, FileAccess.ReadWrite, FileShare.Read);
            using (var reader = new StreamReader(stream, Encoding.UTF8, true, 1024, leaveOpen: true))
            {
                if (!string.Equals(reader.ReadLine(), _itemMarker, StringComparison.Ordinal))
                    throw new IOException($"'{_itemPath}' does not contain the generated DataverseTest item.");
            }
            stream.Position = 0;
            DataverseTestItemHandler.WriteItemContent(stream, _itemContent);
            stream.SetLength(stream.Position);
        }

        public bool ShouldAddProjectItem(string filePath) => true;
    }
}
