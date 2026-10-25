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
    /// Project handler for the Solution Packager project template (VSIX 11.
    /// SolutionPackagerProjectTemplate): renders the five payload files of
    /// CSharpSolutionPackagerProjectTemplate.vstemplate — the csproj, README,
    /// mapping.xml and the two packager scripts. The scripts bake the CLI
    /// connection arguments of the connection (<c>devkit solution</c>
    /// extract/pack both managed and unmanaged through the
    /// DynamicsCrm.DevKit.Cli.json profiles "Extract-Both"/"Pack-Both").
    /// Like the Server/Package/WebResource templates there is no strong-name
    /// key (the wizard calls no SigningHelper), no Shared requirement (the
    /// csproj imports no .projitems) and no empty folders (the vstemplate
    /// declares none). The packager scripts follow the Shared template
    /// platform choice: .bat on Windows (vstemplate parity), the bash twins
    /// on macOS/Linux. Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ProjectTemplates.SolutionPackager.
    /// </summary>
    public sealed class SolutionPackagerProjectTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// Connection types the Solution Packager template accepts, in the
        /// canonical devkit order — FormProject filters nothing for
        /// SolutionPackager (the scripts carry no connection-type-specific
        /// sources).
        /// </summary>
        public static readonly string[] SupportedConnectionTypes = { "Interactive", "DeviceCode", "ClientSecret", "FromPac", "OAuth", "AD" };

        public string TemplateId
        {
            get { return ProjectType.SolutionPackager.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpSolutionPackagerProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included). The packager scripts follow the
        /// Shared template platform choice: .bat on Windows (vstemplate
        /// parity), the bash twin on macOS/Linux.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.SolutionPackager.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.SolutionPackager.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "ProjectTemplate.csproj.template", TargetFileName = "$SafeProjectName$.csproj", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "mapping.xml", TargetFileName = "mapping.xml", ReplaceParameters = false });
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Extract-Both.bat", TargetFileName = "Extract-Both.bat", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Pack-Both.bat", TargetFileName = "Pack-Both.bat", ReplaceParameters = true });
            }
            else
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Extract-Both.sh", TargetFileName = "Extract-Both.sh", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Pack-Both.sh", TargetFileName = "Pack-Both.sh", ReplaceParameters = true });
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

            // The packager scripts bake the CLI connection arguments of the
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
                // the connection-dependent token sets (the script tokens
                // embed $CliConnectionArgs$) now that it is known.
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
            if (File.Exists(csprojPath) && !input.Force)
            {
                result.AddWarning($"Project '{input.ProjectName}' already exists — existing files are skipped (use --force to overwrite).");
            }

            Directory.CreateDirectory(projectDirectory);
            await ScaffoldingEngine.RenderManifestFilesAsync(CreateManifest(), request.Tokens, projectDirectory, input.Force, result);
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "Extract-Both.sh"));
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "Pack-Both.sh"));

            // The csproj imports no Shared .projitems — when a solution was
            // named (--solution) the .sln gains the plain csproj entry only
            // (no SharedMSBuildProjectFiles consumer line). No --solution =
            // create-only.
            if (!string.IsNullOrEmpty(input.SolutionFile))
            {
                var solutionChanged = await SolutionMutator.AddProjectToSolutionAsync(workspace.SolutionFile, csprojPath);
                result.Files.Add(new ScaffoldFileResult(Path.GetFileName(workspace.SolutionFile), workspace.SolutionFile, solutionChanged ? "Updated" : "Unchanged"));
            }

            return result;
        }

        /// <summary>
        /// Port of the FormProject validation for ProjectType.SolutionPackager:
        /// FormProject restricts no connection type for SolutionPackager —
        /// only an unknown type (one without a registry entry) is rejected.
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
                return $"The connection type '{connection?.Type}' is not supported for the Solution Packager project template. Supported types: {string.Join(", ", SupportedConnectionTypes)}.";
            }
            return null;
        }
    }
}
