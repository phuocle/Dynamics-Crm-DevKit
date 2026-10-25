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
    /// Project handler for the WebResource TypeScript project template
    /// (VSIX 13. WebResourceTsProjectTemplate, net462 TypeScript): renders
    /// the payload files of CSharpWebResourceTsProjectTemplate.vstemplate —
    /// the csproj, README, the build.js toolchain, the devkit.ts library
    /// and devkit.d.ts typings, package.json + tsconfig.json + .eslintrc.json,
    /// and the deploy/generator scripts. The build.js / devkit.ts /
    /// devkit.d.ts contents come from the Shared ts.* resources (the same
    /// source the VSIX Replacement pipeline reads) — the payload folder only
    /// carries the token stubs. Like the WebResource template there is no
    /// strong-name key (the wizard calls no SigningHelper) and no Shared
    /// requirement (the csproj imports no .projitems at all). The
    /// generator/deploy scripts follow the Shared template platform choice:
    /// .bat on Windows (vstemplate parity), the bash twins on macOS/Linux.
    /// Cross-platform port of the VSIX wizard
    /// DynamicsCrm.DevKit.Wizard.ProjectTemplates.WebResourceTs.
    /// </summary>
    public sealed class WebResourceTsProjectTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// Connection types the WebResource TypeScript template accepts, in
        /// the canonical devkit order — FormProject filters nothing for
        /// WebResourceTs (the scripts carry no connection-type-specific
        /// sources).
        /// </summary>
        public static readonly string[] SupportedConnectionTypes = { "Interactive", "DeviceCode", "ClientSecret", "FromPac", "OAuth", "AD" };

        /// <summary>
        /// The empty folders the vstemplate declares as Folder elements
        /// (and the csproj mirrors as Folder Include entries). Visual
        /// Studio creates them physically when running the template — the
        /// CLI does the same, without .gitkeep markers (the payload has
        /// none).
        /// </summary>
        public static readonly string[] Folders = { "lib", "entities", "build", "images", "resources", "html", "css" };

        public string TemplateId
        {
            get { return ProjectType.WebResourceTs.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpWebResourceTsProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included). No key.snk — the vstemplate
        /// copies none and the csproj carries no SignAssembly. The
        /// deploy/generator scripts follow the Shared template platform
        /// choice: .bat on Windows (vstemplate parity), the bash twin on
        /// macOS/Linux.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.WebResourceTs.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.WebResourceTs.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "ProjectTemplate.csproj.template", TargetFileName = "$SafeProjectName$.csproj", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "deploy.debug.bat", TargetFileName = "deploy.debug.bat", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "deploy.release.bat", TargetFileName = "deploy.release.bat", ReplaceParameters = true });
            }
            else
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "deploy.debug.sh", TargetFileName = "deploy.debug.sh", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "deploy.release.sh", TargetFileName = "deploy.release.sh", ReplaceParameters = true });
            }
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "package.json", TargetFileName = "package.json", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + ".eslintrc.json", TargetFileName = ".eslintrc.json", ReplaceParameters = false });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "tsconfig.json", TargetFileName = "tsconfig.json", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "build.js", TargetFileName = "build.js", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "devkitts.d.ts", TargetFileName = "lib/devkit.d.ts", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "devkit.ts", TargetFileName = "lib/devkit.ts", ReplaceParameters = true });
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "generator.form.bat", TargetFileName = "entities/generator.form.bat", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "generator.webapi.bat", TargetFileName = "entities/generator.webapi.bat", ReplaceParameters = true });
            }
            else
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "generator.form.sh", TargetFileName = "entities/generator.form.sh", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "generator.webapi.sh", TargetFileName = "entities/generator.webapi.sh", ReplaceParameters = true });
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

            // The deploy/generator scripts bake the CLI connection
            // arguments of the connection. Hosts that cannot ask
            // (non-interactive CLI/AI/CI, MCP without a connection object)
            // may pass none: derive the .env marker first, else bake
            // ClientSecret placeholders.
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
            // The vstemplate Folder elements (lib, entities, ...) are
            // created physically by Visual Studio; lib and entities also
            // receive payload files.
            foreach (var folder in Folders)
            {
                Directory.CreateDirectory(Path.Combine(projectDirectory, folder));
            }
            await ScaffoldingEngine.RenderManifestFilesAsync(CreateManifest(), request.Tokens, projectDirectory, input.Force, result);
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "deploy.debug.sh"));
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "deploy.release.sh"));
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "entities", "generator.form.sh"));
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "entities", "generator.webapi.sh"));

            // The TypeScript toolchain lives in node_modules: remind the
            // user (and AI agents) that the first build needs npm install
            // (the deploy scripts install it automatically when it is
            // missing).
            result.AddWarning("Run 'npm install' in the project directory before building (the deploy scripts install it automatically when node_modules is missing).");

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
        /// Port of the FormProject validation for ProjectType.WebResourceTs:
        /// FormProject restricts no connection type for WebResourceTs — only
        /// an unknown type (one without a registry entry) is rejected.
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
                return $"The connection type '{connection?.Type}' is not supported for the WebResource TypeScript project template. Supported types: {string.Join(", ", SupportedConnectionTypes)}.";
            }
            return null;
        }
    }
}
