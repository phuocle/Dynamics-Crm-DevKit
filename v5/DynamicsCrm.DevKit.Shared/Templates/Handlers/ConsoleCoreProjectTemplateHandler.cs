using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Project handler for the Console Core project template (VSIX 03.
    /// ConsoleCoreProjectTemplate, net10.0): renders the 7 payload files of
    /// CSharpConsoleCoreProjectTemplate.vstemplate, selecting the App.cs /
    /// AppSettings.json resource variant that matches the connection type
    /// (Interactive, DeviceCode, ClientSecret, FromPac or OAuth — AD needs
    /// WCF/ServiceModel and stays on the .NET Framework Console template)
    /// and registering the .csproj in the solution together with the
    /// SharedMSBuildProjectFiles consumer line of the imported Shared
    /// project. The generated SDK-style net10 project is the template that
    /// proves the whole CLI effort end to end: it builds with plain
    /// 'dotnet build' on every platform. Cross-platform port of the VSIX
    /// wizard DynamicsCrm.DevKit.Wizard.ProjectTemplates.ConsoleCore.
    /// </summary>
    public sealed class ConsoleCoreProjectTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// Connection types the net10 Console Core template can generate, in
        /// the canonical devkit order (a filtered view of Interactive,
        /// DeviceCode, ClientSecret, FromPac, OAuth, AD — same restriction
        /// as FormProject).
        /// </summary>
        public static readonly string[] SupportedConnectionTypes = { "Interactive", "DeviceCode", "ClientSecret", "FromPac", "OAuth" };

        public string TemplateId
        {
            get { return ProjectType.ConsoleCore.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpConsoleCoreProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included). App.cs and AppSettings.json
        /// hold one nested resource token each — the engine expands them to
        /// the connection-type-specific AppCore/AppSettings variant.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.ConsoleCore.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.ConsoleCore.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "ProjectTemplate.csproj.template", TargetFileName = "$SafeProjectName$.csproj", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "App.cs", TargetFileName = "App.cs", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "AppSettings.json", TargetFileName = "AppSettings.json", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "Program.cs", TargetFileName = "Program.cs", ReplaceParameters = true });
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
            if (!SharedProjectTemplateHandler.IsValidProjectName(input.ProjectName))
            {
                result.AddError($"--name '{input.ProjectName}': invalid project name.");
                return result;
            }

            // The connection type selects the App.cs/AppSettings.json
            // resource variant. Hosts that cannot ask (non-interactive
            // CLI/AI/CI, MCP without a connection object) may pass none:
            // derive the .env marker first, else bake ClientSecret
            // placeholders.
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
                await TokenEngine.SetConsoleCoreResourceTokensAsync(request.Tokens, connection);
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

            // The csproj imports ..\{Shared}\{Shared}.projitems; when the
            // shared project exists AND a solution was named, the .sln
            // gains the consumer line of GlobalSection(
            // SharedMSBuildProjectFiles). No --solution = create-only.
            if (!string.IsNullOrEmpty(input.SolutionFile))
            {
                var solutionChanged = await SolutionMutator.AddProjectToSolutionAsync(workspace.SolutionFile, csprojPath, workspace.SharedProjectFile);
                result.Files.Add(new ScaffoldFileResult(Path.GetFileName(workspace.SolutionFile), workspace.SolutionFile, solutionChanged ? "Updated" : "Unchanged"));
            }

            return result;
        }

        /// <summary>
        /// Port of the FormProject validation for ProjectType.ConsoleCore:
        /// AD needs WCF/ServiceModel which is not fully supported on .NET;
        /// any other unknown type has no App.cs/AppSettings.json resource
        /// variant. Returns null when the connection is usable, else the
        /// error text.
        /// </summary>
        private static string ValidateConnection(CrmConnection connection)
        {
            var registryType = ConnectionTypeRegistry.GetMetadata(connection?.Type);
            if (registryType != null)
            {
                connection.Type = registryType.Type;
            }
            var connectionType = connection?.Type?.Trim().ToUpperInvariant();
            if (connectionType == "AD")
            {
                return
                    $"The connection type 'AD' is not supported for Console Core project template (.NET Core). " +
                    "AD authentication requires WCF/ServiceModel which is not fully supported on .NET Core. " +
                    "Please use Console project template (.NET Framework) for AD connection type, or select a different connection type.";
            }
            if (registryType == null)
            {
                return $"The connection type '{connection?.Type}' is not supported for the Console Core project template. Supported types: {string.Join(", ", SupportedConnectionTypes)}.";
            }
            return null;
        }
    }
}
