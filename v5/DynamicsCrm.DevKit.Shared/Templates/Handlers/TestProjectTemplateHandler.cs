using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Project handler for the Test project template (VSIX 09.
    /// TestProjectTemplate, net462 MSTest + FakeXrmEasy): renders the two
    /// payload files of CSharpTestProjectTemplate.vstemplate — the csproj
    /// and the README. Like the VSIX wizard, the Test template refuses to
    /// run unless the Shared, ProxyTypes and SharedTest projects all exist
    /// (the generated .csproj imports the Shared and SharedTest .projitems
    /// and project-references the ProxyTypes project), validated in the
    /// wizard's order before any file is written. No strong-name key (the
    /// wizard calls no SigningHelper), no DynamicsCrm.DevKit.Cli.json (the
    /// wizard calls no AddDynamicsCrmDevKitCliJsonAsync), no script to mark
    /// executable and no connection-dependent payload file (the template
    /// prompts for no connection). Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ProjectTemplates.Test.
    /// </summary>
    public sealed class TestProjectTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ProjectType.Test.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpTestProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included). Properties/AssemblyInfo.cs is
        /// payload-only (it builds the template dll and is not part of the
        /// .vstemplate), so it scaffolds nowhere.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.Test.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.Test.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "ProjectTemplate.csproj.template", TargetFileName = "$SafeProjectName$.csproj", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            return manifest;
        }

        public async Task<ScaffoldResult> ScaffoldAsync(ScaffoldRequest request)
        {
            var result = new ScaffoldResult { TemplateId = TemplateId };
            var input = request?.ProjectInput;
            if (input == null)
            {
                result.AddError("input: required");
                return result;
            }
            var workspace = request.Workspace ?? WorkspaceContext.Empty(input.OutputDirectory);
            if (!SharedProjectTemplateHandler.IsValidProjectName(input.ProjectName))
            {
                result.AddError($"--name '{input.ProjectName}': invalid project name.");
                return result;
            }

            // VSIX parity: the Test wizard aborts — in this order — when
            // the Shared, ProxyTypes or SharedTest project is missing.
            // Validate before any file is written so a failed scaffold
            // leaves no debris behind.
            if (string.IsNullOrEmpty(workspace.SharedProjectFile))
            {
                result.AddError(
                    "The Test project template requires the Shared project (the generated .csproj imports its .projitems). " +
                    "Scaffold it first: devkit new --kind project --type Shared --name " +
                    (string.IsNullOrEmpty(workspace.SolutionName) ? ProjectType.Shared.ToString() : $"{workspace.SolutionName}.{ProjectType.Shared}"));
                return result;
            }
            if (string.IsNullOrEmpty(workspace.ProxyTypesProjectFile))
            {
                result.AddError(
                    "The Test project template requires the ProxyTypes project (the generated .csproj project-references it). " +
                    "Scaffold it first: devkit new --kind project --type ProxyTypes --name " +
                    (string.IsNullOrEmpty(workspace.SolutionName) ? ProjectType.ProxyTypes.ToString() : $"{workspace.SolutionName}.{ProjectType.ProxyTypes}"));
                return result;
            }
            if (string.IsNullOrEmpty(workspace.SharedTestProjectFile))
            {
                result.AddError(
                    "The Test project template requires the SharedTest project (the generated .csproj imports its .projitems). " +
                    "Scaffold it first: devkit new --kind project --type SharedTest --name " +
                    (string.IsNullOrEmpty(workspace.SolutionName)
                        ? $"{ProjectType.Shared}.{ProjectType.Test}"
                        : $"{workspace.SolutionName}.{ProjectType.Shared}.{ProjectType.Test}"));
                return result;
            }

            // Visual Studio replaces $year$ itself when running templates;
            // the engine has no host service, so the handler mints it.
            request.Tokens["$year$"] = DateTime.Now.Year.ToString();

            // Without --solution the scaffold is create-only: the project
            // lands under --out and no solution file is touched. With
            // several solutions in one tree the CLI cannot pick one — the
            // caller names it, or adds the project by hand later.
            var projectDirectory = Path.Combine(workspace.SolutionDirectory, input.ProjectName);
            var csprojPath = Path.Combine(projectDirectory, input.ProjectName + ".csproj");
            if (File.Exists(csprojPath) && !input.Force)
            {
                result.AddWarning($"Project '{input.ProjectName}' already exists — existing files are skipped (use --force to overwrite).");
            }

            Directory.CreateDirectory(projectDirectory);
            await ScaffoldingEngine.RenderManifestFilesAsync(CreateManifest(), request.Tokens, projectDirectory, input.Force, result);

            // The csproj imports the Shared and SharedTest .projitems —
            // when a solution was named (--solution) it also gains the
            // csproj entry plus one GlobalSection(SharedMSBuildProjectFiles)
            // consumer line per imported shared project. No --solution =
            // create-only.
            if (!string.IsNullOrEmpty(input.SolutionFile))
            {
                var solutionChanged = await SolutionMutator.AddProjectToSolutionAsync(workspace.SolutionFile, csprojPath, workspace.SharedProjectFile, workspace.SharedTestProjectFile);
                result.Files.Add(new ScaffoldFileResult(Path.GetFileName(workspace.SolutionFile), workspace.SolutionFile, solutionChanged ? "Updated" : "Unchanged"));
            }

            return result;
        }
    }
}
