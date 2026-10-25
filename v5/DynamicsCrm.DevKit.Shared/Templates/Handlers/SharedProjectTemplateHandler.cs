using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Project handler for the Shared project template (VSIX 01.
    /// SharedProjectTemplate): renders the 11 payload files, renames the
    /// .shproj/.projitems after the project name, registers the shared
    /// project in the solution (Project entry + GlobalSection(
    /// SharedMSBuildProjectFiles)) and ensures DynamicsCrm.DevKit.Cli.json
    /// exists at the solution root. Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ProjectTemplates.Shared.
    /// </summary>
    public sealed class SharedProjectTemplateHandler : ITemplateHandler
    {
        private static readonly string[] InvalidProjectNameChars = { "/", "?", ":", "&", "\\\\", "*", "\"", "<", ">", "|", "#", "%", "'" };

        public string TemplateId
        {
            get { return ProjectType.Shared.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpSharedProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included).
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.Shared.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.Shared.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Shared.shproj", TargetFileName = "$SafeProjectName$.shproj", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Shared.projitems", TargetFileName = "$NameSpace$.projitems", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Date.cs", TargetFileName = Path.Combine("Lib", "Date.cs"), ReplaceParameters = false });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "PluginCore.cs", TargetFileName = Path.Combine("Lib", "PluginCore.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Extension.cs", TargetFileName = Path.Combine("Lib", "Extension.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "EntityBase.cs", TargetFileName = Path.Combine("Lib", "EntityBase.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "DevKitJson.cs", TargetFileName = Path.Combine("Lib", "DevKitJson.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "PluginExecutionContext7Wrapper.cs", TargetFileName = Path.Combine("Lib", "PluginExecutionContext7Wrapper.cs"), ReplaceParameters = false });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "DocumentMethodAttribute.cs", TargetFileName = Path.Combine("Lib", "DocumentMethodAttribute.cs"), ReplaceParameters = true });
            // The late-bound generator runner is platform-specific: .bat on
            // Windows, executable bash script on macOS/Linux.
            if (System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Windows))
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "generator.bat", TargetFileName = Path.Combine("Entities", "generator.bat"), ReplaceParameters = true });
            }
            else
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "generator.sh", TargetFileName = Path.Combine("Entities", "generator.sh"), ReplaceParameters = true });
            }
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
            if (!workspace.HasSolution)
            {
                result.AddError($"--out '{input.OutputDirectory}': no .sln/.slnx found here or in any parent folder. The Shared project template must be scaffolded into a solution folder.");
                return result;
            }
            if (!IsValidProjectName(input.ProjectName))
            {
                result.AddError($"--name '{input.ProjectName}': invalid project name.");
                return result;
            }

            var projectDirectory = Path.Combine(workspace.SolutionDirectory, input.ProjectName);
            var shprojPath = Path.Combine(projectDirectory, input.ProjectName + ".shproj");
            if (File.Exists(shprojPath))
            {
                result.AddWarning($"Project '{input.ProjectName}' already exists — existing files are skipped (use --force to overwrite).");
            }

            // Visual Studio replaces $guid1$..$guidN$ itself; the engine has
            // no such host service, so the handler mints the one GUID the
            // payload uses for ProjectGuid (shproj) and SharedGUID (projitems).
            request.Tokens["$guid1$"] = Guid.NewGuid().ToString("D").ToLowerInvariant();

            Directory.CreateDirectory(projectDirectory);
            await ScaffoldingEngine.RenderManifestFilesAsync(CreateManifest(), request.Tokens, projectDirectory, input.Force, result);
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "Entities", "generator.sh"));

            var cliJsonPath = Path.Combine(workspace.SolutionDirectory, Const.DynamicsCrmDevKitCliJson);
            var cliJsonExisted = File.Exists(cliJsonPath);
            var ensuredCliJson = await SolutionMutator.EnsureDevKitCliJsonAsync(workspace.SolutionDirectory, workspace.SolutionName);
            if (ensuredCliJson != null)
            {
                result.Files.Add(new ScaffoldFileResult(Const.DynamicsCrmDevKitCliJson, ensuredCliJson, cliJsonExisted ? "Unchanged" : "Created"));
            }

            // The VSIX connection store: opening the solution in Visual
            // Studio must already offer a working connection (.env-backed).
            var devKitJsonPath = Path.Combine(workspace.SolutionDirectory, Const.DynamicsCrmDevKitJson);
            var devKitJsonExisted = File.Exists(devKitJsonPath);
            var ensuredDevKitJson = await SolutionMutator.EnsureDevKitJsonAsync(workspace.SolutionDirectory, input.CrmConnection);
            if (ensuredDevKitJson != null)
            {
                result.Files.Add(new ScaffoldFileResult(Const.DynamicsCrmDevKitJson, ensuredDevKitJson, devKitJsonExisted ? "Unchanged" : "Created"));
            }

            var solutionChanged = await SolutionMutator.AddSharedProjectToSolutionAsync(workspace.SolutionFile, shprojPath);
            result.Files.Add(new ScaffoldFileResult(Path.GetFileName(workspace.SolutionFile), workspace.SolutionFile, solutionChanged ? "Updated" : "Unchanged"));

            return result;
        }

        /// <summary>
        /// Port of VsixHelper.IsValidProjectName — same forbidden characters.
        /// </summary>
        public static bool IsValidProjectName(string projectName)
        {
            if (string.IsNullOrEmpty(projectName)) return false;
            return Array.TrueForAll(InvalidProjectNameChars, invalid => projectName.IndexOf(invalid, StringComparison.Ordinal) < 0);
        }
    }
}
