using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.IO;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Project handler for the Server project template (VSIX 04.
    /// ServerProjectTemplate, net462): renders the payload files of
    /// CSharpServerProjectTemplate.vstemplate (csproj + README + the two
    /// deploy scripts), generates a fresh strong-name key with the
    /// cross-platform SigningService instead of copying the payload
    /// key.snk (the VSIX wizard overwrites the copy with a
    /// SigningHelper/mscoree key — Windows-only) and registers the
    /// .csproj in the solution together with the SharedMSBuildProjectFiles
    /// consumer line of the imported Shared project. Like the VSIX wizard,
    /// the Server template refuses to run without a Shared project in the
    /// solution. Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ProjectTemplates.Server.
    /// </summary>
    public sealed class ServerProjectTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// Connection types the Server template accepts, in the canonical
        /// devkit order — FormProject filters nothing for Server (the
        /// plugin assembly carries no connection-type-specific sources).
        /// </summary>
        public static readonly string[] SupportedConnectionTypes = { "Interactive", "DeviceCode", "ClientSecret", "FromPac", "OAuth", "AD" };

        public string TemplateId
        {
            get { return ProjectType.Server.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpServerProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included). The vstemplate also copies
        /// key.snk to $ProjectName$.snk — the CLI generates a fresh key
        /// with SigningService instead (see ScaffoldAsync), so the sample
        /// key is not part of the manifest. Deploy scripts follow the
        /// Shared template platform choice: .bat on Windows (vstemplate
        /// parity), the bash twin on macOS/Linux.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.Server.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.Server.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "ProjectTemplate.csproj.template", TargetFileName = "$SafeProjectName$.csproj", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "deploy.debug.bat", TargetFileName = "deploy.debug.bat", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "deploy.debug.only.bat", TargetFileName = "deploy.debug.only.bat", ReplaceParameters = true });
            }
            else
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "deploy.debug.sh", TargetFileName = "deploy.debug.sh", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "deploy.debug.only.sh", TargetFileName = "deploy.debug.only.sh", ReplaceParameters = true });
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
            if (!SharedProjectTemplateHandler.IsValidProjectName(input.ProjectName))
            {
                result.AddError($"--name '{input.ProjectName}': invalid project name.");
                return result;
            }

            // VSIX parity: the Server wizard aborts with "Please add
            // DynamicsCrm.DevKit Shared project." — the generated .csproj
            // imports the Shared .projitems. Validate before any file is
            // written so a failed scaffold leaves no debris behind.
            if (string.IsNullOrEmpty(workspace.SharedProjectFile))
            {
                result.AddError(
                    "The Server project template requires the Shared project (the generated .csproj imports its .projitems). " +
                    "Scaffold it first: devkit new --kind project --type Shared --name " +
                    (string.IsNullOrEmpty(workspace.SolutionName) ? input.ProjectName : $"{workspace.SolutionName}.{ProjectType.Shared}"));
                return result;
            }

            // The deploy scripts bake the CLI connection arguments of the
            // connection. Hosts that cannot ask (non-interactive CLI/AI/CI,
            // MCP without a connection object) may pass none: derive the
            // .env marker first, else bake ClientSecret placeholders.
            var connection = input.CrmConnection
                ?? SolutionMutator.ConnectionFromProjectEnvironment(workspace.SolutionDirectory)
                ?? new CrmConnection { Type = "ClientSecret" };
            var connectionError = ValidateConnection(connection);
            if (connectionError != null)
            {
                result.AddError(connectionError);
                return result;
            }
            if (input.CrmConnection == null)
            {
                // The engine built the tokens without a connection; re-run
                // the connection-dependent token sets (the deploy script
                // tokens embed $CliConnectionArgs$) now that it is known.
                TokenEngine.SetConnectionValues(request.Tokens, connection);
                await TokenEngine.SetEmbeddedResourceTokensAsync(request.Tokens, connection);
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
            if (File.Exists(csprojPath))
            {
                result.AddWarning($"Project '{input.ProjectName}' already exists — existing files are skipped (use --force to overwrite).");
            }

            Directory.CreateDirectory(projectDirectory);
            await ScaffoldingEngine.RenderManifestFilesAsync(CreateManifest(), request.Tokens, projectDirectory, input.Force, result);
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "deploy.debug.sh"));
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "deploy.debug.only.sh"));

            // The fresh strong-name key (wizard step SigningHelper.
            // GenerateKey). An existing key is kept unless --force:
            // regenerating would silently change the assembly identity of
            // an already-deployed plugin.
            var snkPath = Path.Combine(projectDirectory, input.ProjectName + ".snk");
            var snkExisted = File.Exists(snkPath);
            if (snkExisted && !input.Force)
            {
                result.Files.Add(new ScaffoldFileResult(input.ProjectName + ".snk", snkPath, "Skipped"));
            }
            else
            {
                SigningService.GenerateKeyFile(projectDirectory, input.ProjectName + ".snk");
                result.Files.Add(new ScaffoldFileResult(input.ProjectName + ".snk", snkPath, snkExisted ? "Updated" : "Created"));
            }

            // The csproj imports ..\{Shared}\{Shared}.projitems; when a
            // solution was named (--solution), it also gains the csproj
            // entry plus the consumer line of GlobalSection(
            // SharedMSBuildProjectFiles). No --solution = create-only.
            if (!string.IsNullOrEmpty(input.SolutionFile))
            {
                var solutionChanged = await SolutionMutator.AddProjectToSolutionAsync(workspace.SolutionFile, csprojPath, workspace.SharedProjectFile);
                result.Files.Add(new ScaffoldFileResult(Path.GetFileName(workspace.SolutionFile), workspace.SolutionFile, solutionChanged ? "Updated" : "Unchanged"));
            }

            return result;
        }

        /// <summary>
        /// Port of the FormProject validation for ProjectType.Server:
        /// FormProject restricts no connection type for Server — only an
        /// unknown type (one without a registry entry) is rejected.
        /// Returns null when the connection is usable, else the error text.
        /// </summary>
        private static string ValidateConnection(CrmConnection connection)
        {
            var registryType = ConnectionTypeRegistry.GetMetadata(connection?.Type);
            if (registryType != null)
            {
                connection.Type = registryType.Type;
            }
            if (registryType == null)
            {
                return $"The connection type '{connection?.Type}' is not supported for the Server project template. Supported types: {string.Join(", ", SupportedConnectionTypes)}.";
            }
            return null;
        }
    }
}
