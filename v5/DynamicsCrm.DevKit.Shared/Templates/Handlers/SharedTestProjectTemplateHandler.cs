using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Project handler for the SharedTest project template (VSIX 07.
    /// SharedTestProjectTemplate): renders the 12 payload files — the
    /// .shproj/.projitems pair plus the FakeXrmEasy test infrastructure
    /// sources — renames the pair after the project name, registers the
    /// shared project in the solution like the Shared template does and
    /// ensures DynamicsCrm.DevKit.Cli.json (the wizard calls
    /// VsixHelper.AddDynamicsCrmDevKitCliJsonAsync) and the VSIX connection
    /// store at the solution root. There is no strong-name key (the wizard
    /// calls no SigningHelper), no connection-dependent payload file (the
    /// template prompts for no connection) and no script to mark executable.
    /// Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ProjectTemplates.SharedTest.
    /// </summary>
    public sealed class SharedTestProjectTemplateHandler : ITemplateHandler
    {
        public string TemplateId
        {
            get { return ProjectType.SharedTest.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpSharedTestProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included). Properties/AssemblyInfo.cs is
        /// payload-only (it builds the template dll and is not part of the
        /// .vstemplate), so it scaffolds nowhere.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.SharedTest.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.SharedTest.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Shared.shproj", TargetFileName = "$SafeProjectName$.shproj", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Shared.projitems", TargetFileName = "$NameSpace$.projitems", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Guids.cs", TargetFileName = Path.Combine("Lib", "Guids.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Extension.cs", TargetFileName = Path.Combine("Lib", "Extension.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "FakerHelper.cs", TargetFileName = Path.Combine("Lib", "FakerHelper.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TestHelper.cs", TargetFileName = Path.Combine("Lib", "TestHelper.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TestTracingService.cs", TargetFileName = Path.Combine("Lib", "TestTracingService.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "PluginContextBuilder.cs", TargetFileName = Path.Combine("Lib", "PluginContextBuilder.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TestDataLoader.cs", TargetFileName = Path.Combine("Lib", "TestDataLoader.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "FakeXrmEasyTestBase.cs", TargetFileName = "FakeXrmEasyTestBase.cs", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "CalculateRollupFieldRequestExecutor.cs", TargetFileName = Path.Combine("Executor", "CalculateRollupFieldRequestExecutor.cs"), ReplaceParameters = true });
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

            // Visual Studio replaces $guid1$..$guidN$ itself; the engine has
            // no such host service, so the handler mints the one GUID the
            // payload uses for ProjectGuid (shproj) and SharedGUID (projitems).
            request.Tokens["$guid1$"] = Guid.NewGuid().ToString("D").ToLowerInvariant();

            // Without --solution the scaffold is create-only: the project
            // lands under --out and no solution file is touched. With
            // several solutions in one tree the CLI cannot pick one — the
            // caller names it, or adds the project by hand later.
            var projectDirectory = Path.Combine(workspace.SolutionDirectory, input.ProjectName);
            var shprojPath = Path.Combine(projectDirectory, input.ProjectName + ".shproj");
            if (File.Exists(shprojPath) && !input.Force)
            {
                result.AddWarning($"Project '{input.ProjectName}' already exists — existing files are skipped (use --force to overwrite).");
            }

            Directory.CreateDirectory(projectDirectory);
            await ScaffoldingEngine.RenderManifestFilesAsync(CreateManifest(), request.Tokens, projectDirectory, input.Force, result);

            // Wizard parity: SharedTest.cs (like Shared.cs) calls
            // VsixHelper.AddDynamicsCrmDevKitCliJsonAsync, so both files are
            // ensured at the solution root. The template prompts for no
            // connection — the store derives one from the project .env
            // (marker) when none is passed, and an empty store otherwise.
            var cliJsonPath = Path.Combine(workspace.SolutionDirectory, Const.DynamicsCrmDevKitCliJson);
            var cliJsonExisted = File.Exists(cliJsonPath);
            var ensuredCliJson = await SolutionMutator.EnsureDevKitCliJsonAsync(workspace.SolutionDirectory, workspace.SolutionName);
            if (ensuredCliJson != null)
            {
                result.Files.Add(new ScaffoldFileResult(Const.DynamicsCrmDevKitCliJson, ensuredCliJson, cliJsonExisted ? "Unchanged" : "Created"));
            }

            var devKitJsonPath = Path.Combine(workspace.SolutionDirectory, Const.DynamicsCrmDevKitJson);
            var devKitJsonExisted = File.Exists(devKitJsonPath);
            var ensuredDevKitJson = await SolutionMutator.EnsureDevKitJsonAsync(workspace.SolutionDirectory, input.CrmConnection);
            if (ensuredDevKitJson != null)
            {
                result.Files.Add(new ScaffoldFileResult(Const.DynamicsCrmDevKitJson, ensuredDevKitJson, devKitJsonExisted ? "Unchanged" : "Created"));
            }

            if (!string.IsNullOrEmpty(input.SolutionFile))
            {
                var solutionChanged = await SolutionMutator.AddSharedProjectToSolutionAsync(workspace.SolutionFile, shprojPath);
                result.Files.Add(new ScaffoldFileResult(Path.GetFileName(workspace.SolutionFile), workspace.SolutionFile, solutionChanged ? "Updated" : "Unchanged"));
            }

            return result;
        }
    }
}
