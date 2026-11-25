using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.TemplateWizard;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml;

namespace DynamicsCrm.DevKit.Wizard.ProjectTemplates
{
    public sealed class DataverseTest : ProjectTemplateBase, IWizard
    {
        private string _projectDirectory;
        private Dictionary<string, string> _frameworkTokens;

        public void RunStarted(object automationObject, Dictionary<string, string> replacements,
            WizardRunKind runKind, object[] customParams)
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                try
                {
                    await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    DTE = automationObject as DTE;
                    var solution = DTE?.Solution?.FullName;
                    if (string.IsNullOrWhiteSpace(solution) || !File.Exists(solution))
                        throw new ArgumentException("Open an existing solution and save it before adding a DataverseTest project.");

                    var servers = DataverseTestProjectHandler.FindServerProjects(solution);
                    if (servers.Count == 0)
                        throw new ArgumentException("Add a DevKit Server project to this solution first.");

                    var solutionDirectory = Path.GetDirectoryName(solution);
                    var choices = servers.Select(path => new NameValue
                    {
                        Name = DataverseTestProjectHandler.RelativePath(solutionDirectory, path),
                        Value = path
                    }).ToArray();
                    var preferred = choices.FirstOrDefault(choice =>
                        DataverseTestProjectHandler.HasName(choice.Value, Path.GetFileNameWithoutExtension(solution) + ".Server"));
                    var form = new FormProject(ProjectType.DataverseTest);
                    form.SetDataverseServerProjects(choices, preferred);
                    if (form.ShowModal() != true)
                        throw new WizardCancelledException();

                    ProjectName = form.ProjectName;
                    var visualStudioDirectory = Path.GetFullPath(replacements["$destinationdirectory$"])
                        .TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar);
                    _projectDirectory = Path.Combine(Path.GetDirectoryName(visualStudioDirectory), ProjectName);
                    if (DataverseTestProjectHandler.ReadSolutionProjects(solution).Any(path => DataverseTestProjectHandler.HasName(path, ProjectName)))
                        throw new ArgumentException($"Project '{ProjectName}' already exists. Choose a new name.");
                    EnsureProjectDirectoryIsEmpty();

                    var workspace = WorkspaceScanner.FromSolution(solution, solutionDirectory);
                    DataverseTestProjectHandler.SetDependencyTokens(solution, _projectDirectory, form.DataverseServerProject, replacements);
                    await TokenEngine.AddProjectTokensAsync(replacements, new ProjectTemplateInput
                    {
                        TemplateId = TemplateCatalog.DataverseTestId,
                        ProjectName = ProjectName,
                        CrmConnection = form.CrmConnection
                    }, workspace);
                    replacements["$destinationdirectory$"] = _projectDirectory;
                    _frameworkTokens = new Dictionary<string, string>(replacements, StringComparer.Ordinal);
                }
                catch (Exception ex) when (ex is ArgumentException or IOException or UnauthorizedAccessException or XmlException)
                {
                    await VS.MessageBox.ShowErrorAsync(ex.Message, "Dataverse Test Project");
                    throw new WizardCancelledException();
                }
            });
        }

        public void BeforeOpeningFile(ProjectItem projectItem) { }
        public void ProjectFinishedGenerating(Project project)
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            Project = project;
            if (!string.Equals(project.Name, ProjectName, StringComparison.Ordinal))
                project.Name = ProjectName;
        }

        public void ProjectItemFinishedGenerating(ProjectItem projectItem) { }

        public void RunFinished()
        {
            ThreadHelper.ThrowIfNotOnUIThread();
            if (Project == null) return;

            var generatedDirectory = Path.GetDirectoryName(Path.GetFullPath(Project.FullName));
            if (!string.Equals(generatedDirectory, _projectDirectory, StringComparison.OrdinalIgnoreCase))
            {
                // Visual Studio can still generate into its original folder after the wizard updates the token.
                if (!string.Equals(Path.GetDirectoryName(generatedDirectory), Path.GetDirectoryName(_projectDirectory), StringComparison.OrdinalIgnoreCase))
                    throw new InvalidOperationException($"Visual Studio generated the project in an unexpected folder: '{generatedDirectory}'.");
                EnsureProjectDirectoryIsEmpty();
                VsixHelper.FixProjectFolder(DTE, Project, ProjectName);
            }

            // The SDK project discovers these files through its default Compile glob.
            // Write them through the CLI's manifest renderer so VS does not format them on creation.
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var result = await ScaffoldingEngine.RenderManifestFilesAsync(
                    DataverseTestProjectHandler.CreateManifest(frameworkOnly: true), _frameworkTokens, _projectDirectory, false,
                    new ScaffoldResult { TemplateId = TemplateCatalog.DataverseTestId });
                if (!result.Success)
                    throw new InvalidOperationException(string.Join(Environment.NewLine, result.Errors));
            });
        }

        private void EnsureProjectDirectoryIsEmpty()
        {
            if (File.Exists(_projectDirectory) || (Directory.Exists(_projectDirectory) && Directory.EnumerateFileSystemEntries(_projectDirectory).Any()))
                throw new IOException($"The project folder '{_projectDirectory}' already contains files or is unavailable.");
        }

        public bool ShouldAddProjectItem(string filePath) => true;
    }
}
