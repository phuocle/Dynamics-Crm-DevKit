using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates.Handlers
{
    /// <summary>
    /// Project handler for the UiTest project template (VSIX 10.
    /// TestUiProjectTemplate, net462 Selenium + Dynamics365.UIAutomation —
    /// EasyRepro): renders the six payload files of
    /// CSharpTestUiProjectTemplate.vstemplate — the csproj, README,
    /// TestSettings, the runsettings (retargeted to
    /// $SafeProjectName$.runsettings), App.cs and App.config. The
    /// connection values land in App.config ($UrlValue$/$UserNameValue$/
    /// $PasswordValue$ — EasyRepro logs in through the browser with the
    /// OAuth username/password of the connection). Like FormProject the
    /// template accepts OAuth connections only; unlike Console the payload
    /// carries no per-type resource variants. No strong-name key (the
    /// wizard calls no SigningHelper), no Shared requirement (the csproj
    /// imports no .projitems), no empty folders (the vstemplate declares
    /// none) and no scripts to mark executable. Properties/AssemblyInfo.cs
    /// is payload-only (it builds the template dll and is not part of the
    /// .vstemplate), so it scaffolds nowhere. Cross-platform port of the
    /// VSIX wizard DynamicsCrm.DevKit.Wizard.ProjectTemplates.UiTest.
    /// </summary>
    public sealed class UiTestProjectTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// Connection types the UiTest template accepts: OAuth only —
        /// FormProject rejects every other type ("UI Test uses EasyRepro
        /// browser login and requires OAuth username/password credentials").
        /// </summary>
        public static readonly string[] SupportedConnectionTypes = { "OAuth" };

        public string TemplateId
        {
            get { return ProjectType.UiTest.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpTestUiProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included).
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.UiTest.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.UiTest.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "ProjectTemplate.csproj.template", TargetFileName = "$SafeProjectName$.csproj", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = false });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "TestSettings.cs", TargetFileName = "TestSettings.cs", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "UiTest.runsettings", TargetFileName = "$SafeProjectName$.runsettings", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "App.cs", TargetFileName = "App.cs", ReplaceParameters = true });
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "App.config", TargetFileName = "App.config", ReplaceParameters = true });
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

            // EasyRepro logs in with the OAuth username/password of the
            // connection, which App.config bakes in. Hosts that cannot ask
            // (non-interactive CLI/AI/CI, MCP without a connection object)
            // may pass none: derive the .env marker first, else render the
            // empty OAuth placeholders (the VSIX renders the same empty
            // values when the user skips the connection — FormProject
            // validates only a selected connection).
            var connection = input.CrmConnection
                ?? SolutionMutator.ConnectionFromProjectEnvironment(workspace.SolutionDirectory)
                ?? new CrmConnection { Type = "OAuth" };
            var connectionError = ValidateConnection(connection);
            if (connectionError != null)
            {
                result.AddError(connectionError);
                return result;
            }
            if (input.CrmConnection == null)
            {
                // The engine built the tokens without a connection; re-run
                // the connection-value tokens ($UrlValue$/$UserNameValue$/
                // $PasswordValue$ of App.config) now that it is known. The
                // payload embeds no scripts, so no other token set depends
                // on the connection.
                TokenEngine.SetConnectionValues(request.Tokens, connection);
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
        /// Port of the FormProject validation for ProjectType.UiTest:
        /// EasyRepro browser login needs OAuth username/password
        /// credentials, so every other registry type is rejected. Returns
        /// null when the connection is usable, else the error text.
        /// </summary>
        private static string ValidateConnection(CrmConnection connection)
        {
            var registryType = ConnectionTypeRegistry.GetMetadata(connection?.Type);
            if (registryType != null)
            {
                connection.Type = registryType.Type;
            }
            if (!string.Equals(connection?.Type?.Trim(), "OAuth", StringComparison.OrdinalIgnoreCase))
            {
                return
                    $"The connection type '{connection?.Type}' is not supported for the UI Test project template. " +
                    "UI Test uses EasyRepro browser login and requires OAuth username/password credentials. " +
                    $"Supported types: {string.Join(", ", SupportedConnectionTypes)}. Please select an OAuth connection.";
            }
            return null;
        }
    }
}
