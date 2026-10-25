using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Project handler for the Console project template (VSIX 02.
    /// ConsoleProjectTemplate, net462): renders the 7 payload files of
    /// CSharpConsoleProjectTemplate.vstemplate, selecting the App.cs /
    /// App.config resource variant that matches the connection type
    /// (ClientSecret, Interactive, OAuth or AD — DeviceCode and FromPac need
    /// the Console Core template) and registering the .csproj in the
    /// solution together with the SharedMSBuildProjectFiles consumer line
    /// of the imported Shared project. Cross-platform port of the VSIX
    /// wizard DynamicsCrm.DevKit.Wizard.ProjectTemplates.Console.
    /// </summary>
    public sealed class ConsoleProjectTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// Connection types the net462 Console template can generate, in the
        /// canonical devkit order (a filtered view of Interactive, DeviceCode,
        /// ClientSecret, FromPac, OAuth, AD — same restriction as FormProject).
        /// </summary>
        public static readonly string[] SupportedConnectionTypes = { "Interactive", "ClientSecret", "OAuth", "AD" };

        public string TemplateId
        {
            get { return ProjectType.Console.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpConsoleProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included). App.cs and App.config.template
        /// hold one nested resource token each — the engine expands them to
        /// the connection-type-specific App/App.config variant.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.Console.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.Console.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "ProjectTemplate.csproj.template", TargetFileName = "$SafeProjectName$.csproj", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "App.cs", TargetFileName = "App.cs", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Program.cs", TargetFileName = "Program.cs", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "App.config.template", TargetFileName = "App.config", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Helper.cs", TargetFileName = Path.Combine("Lib", "Helper.cs"), ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TracingServiceFake.cs", TargetFileName = Path.Combine("Lib", "TracingServiceFake.cs"), ReplaceParameters = true });
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
                result.AddError($"--out '{input.OutputDirectory}': no .sln/.slnx found here or in any parent folder. The Console project template must be scaffolded into a solution folder.");
                return result;
            }
            if (!SharedProjectTemplateHandler.IsValidProjectName(input.ProjectName))
            {
                result.AddError($"--name '{input.ProjectName}': invalid project name.");
                return result;
            }

            // The connection type selects the App.cs/App.config resource
            // variant. Hosts that cannot ask (non-interactive CLI/AI/CI, MCP
            // without a connection object) may pass none: derive the .env
            // marker first, else bake ClientSecret placeholders.
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
                // the connection-dependent token sets now that it is known.
                TokenEngine.SetConnectionValues(request.Tokens, connection);
                await TokenEngine.SetConsoleResourceTokensAsync(request.Tokens, connection);
            }

            // Visual Studio replaces $year$ itself when running templates;
            // the engine has no host service, so the handler mints it.
            request.Tokens["$year$"] = DateTime.Now.Year.ToString();

            var projectDirectory = Path.Combine(workspace.SolutionDirectory, input.ProjectName);
            var csprojPath = Path.Combine(projectDirectory, input.ProjectName + ".csproj");
            if (File.Exists(csprojPath))
            {
                result.AddWarning($"Project '{input.ProjectName}' already exists — existing files are skipped (use --force to overwrite).");
            }

            Directory.CreateDirectory(projectDirectory);
            await ScaffoldingEngine.RenderManifestFilesAsync(CreateManifest(), request.Tokens, projectDirectory, input.Force, result);

            // The csproj imports ..\{Shared}\{Shared}.projitems; when the
            // shared project exists, the .sln also gains the consumer line
            // of GlobalSection(SharedMSBuildProjectFiles).
            var solutionChanged = await SolutionMutator.AddProjectToSolutionAsync(workspace.SolutionFile, csprojPath, workspace.SharedProjectFile);
            result.Files.Add(new ScaffoldFileResult(Path.GetFileName(workspace.SolutionFile), workspace.SolutionFile, solutionChanged ? "Updated" : "Unchanged"));

            return result;
        }

        /// <summary>
        /// Port of the FormProject validation for ProjectType.Console:
        /// DeviceCode and FromPac need the Console Core template; any other
        /// unknown type has no App.cs/App.config resource variant. Returns
        /// null when the connection is usable, else the error text.
        /// </summary>
        private static string ValidateConnection(CrmConnection connection)
        {
            var registryType = ConnectionTypeRegistry.GetMetadata(connection?.Type);
            if (registryType != null)
            {
                connection.Type = registryType.Type;
            }
            var connectionType = connection?.Type?.Trim().ToUpperInvariant();
            if (connectionType == "DEVICECODE" || connectionType == "FROMPAC")
            {
                return
                    $"The connection type '{connection.Type}' is not supported for Console project template (.NET Framework). " +
                    "DeviceCode and FromPac authentication require modern .NET Core dependencies (Azure.Identity). " +
                    "Please use Console Core project template (.NET Core) for DeviceCode or FromPac connection types, or select a different connection type.";
            }
            if (registryType == null)
            {
                return $"The connection type '{connection?.Type}' is not supported for the Console project template. Supported types: {string.Join(", ", SupportedConnectionTypes)}.";
            }
            return null;
        }
    }
}
