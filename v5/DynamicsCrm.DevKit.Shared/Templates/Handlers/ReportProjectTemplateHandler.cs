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
    /// Project handler for the Report project template (VSIX 12.
    /// ReportProjectTemplate, SSRS): renders the three payload files of
    /// CSharpReportProjectTemplate.vstemplate — README (ReplaceParameters=
    /// true like the vstemplate declares) and the two report scripts — and
    /// writes the {ProjectName}.rptproj Reporting Services project file
    /// next to them. The .rptproj IS the project: the vstemplate's
    /// ProjectTemplate.csproj is a wizard bootstrap only (Visual Studio
    /// removes it once its Reporting Services project factory loaded the
    /// .rptproj), so the CLI never emits it and registers the .rptproj in
    /// the solution instead — the same end state the wizard reaches
    /// (aP ruling P.12 ROUND 2; SolutionMutator writes the Reporting
    /// Services entry shapes of .sln/.slnx). The .rptproj content comes
    /// from the Shared ReportProjectTemplate.rptproj resource with
    /// $DevKitVersion$ stamped, written with a UTF-8 BOM exactly like the
    /// VSIX wizard's RunFinished (FileHelper.ForceWriteAllTextAsync always
    /// writes the BOM). The scripts bake the CLI connection arguments of
    /// the connection (<c>devkit downloadreport</c>/<c>uploadreport</c>
    /// through the profile "DEBUG"). No strong-name key (the wizard calls
    /// no SigningHelper), no Shared requirement. The report scripts follow
    /// the Shared template platform choice: .bat on Windows (vstemplate
    /// parity), the bash twins on macOS/Linux. Cross-platform port of the
    /// VSIX wizard DynamicsCrm.DevKit.Wizard.ProjectTemplates.Report.
    /// </summary>
    public sealed class ReportProjectTemplateHandler : ITemplateHandler
    {
        /// <summary>
        /// Connection types the Report template accepts, in the canonical
        /// devkit order — FormProject filters nothing for Report (the
        /// scripts carry no connection-type-specific sources).
        /// </summary>
        public static readonly string[] SupportedConnectionTypes = { "Interactive", "DeviceCode", "ClientSecret", "FromPac", "OAuth", "AD" };

        public string TemplateId
        {
            get { return ProjectType.Report.ToString(); }
        }

        /// <summary>
        /// The payload declaration, mirroring the file entries of
        /// CSharpReportProjectTemplate.vstemplate (target names and
        /// ReplaceParameters flags included) — README.md carries
        /// ReplaceParameters=true, the only project template payload of the
        /// catalog that does. The wizard bootstrap ProjectTemplate.csproj
        /// is NOT a manifest entry (the CLI never emits it — the .rptproj
        /// is the project); the .rptproj is NOT one either: the handler
        /// writes it itself, like the wizard's RunFinished. The report
        /// scripts follow the Shared template platform choice: .bat on
        /// Windows (vstemplate parity), the bash twin on macOS/Linux.
        /// </summary>
        public static TemplateManifest CreateManifest()
        {
            var manifest = new TemplateManifest
            {
                TemplateId = ProjectType.Report.ToString(),
                Kind = TemplateKind.Project,
            };
            var prefix = TemplatePayload.Prefix(TemplateKind.Project, ProjectType.Report.ToString());
            manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "README.md", TargetFileName = "README.md", ReplaceParameters = true });
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "download.reports.bat", TargetFileName = "download.reports.bat", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "upload.reports.bat", TargetFileName = "upload.reports.bat", ReplaceParameters = true });
            }
            else
            {
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "download.reports.sh", TargetFileName = "download.reports.sh", ReplaceParameters = true });
                manifest.Files.Add(new TemplatePayloadFile { ResourceName = prefix + "upload.reports.sh", TargetFileName = "upload.reports.sh", ReplaceParameters = true });
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

            // The report scripts bake the CLI connection arguments of the
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

            // Without --solution the scaffold is create-only: the project
            // lands under --out and no solution file is touched. With
            // several solutions in one tree the CLI cannot pick one — the
            // caller names it, or adds the project by hand later.
            var projectDirectory = Path.Combine(workspace.SolutionDirectory, input.ProjectName);
            var reportFile = Path.Combine(projectDirectory, input.ProjectName + ".rptproj");
            if (File.Exists(reportFile) && !input.Force)
            {
                result.AddWarning($"Project '{input.ProjectName}' already exists — existing files are skipped (use --force to overwrite).");
            }

            Directory.CreateDirectory(projectDirectory);
            await ScaffoldingEngine.RenderManifestFilesAsync(CreateManifest(), request.Tokens, projectDirectory, input.Force, result);
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "download.reports.sh"));
            ScaffoldingEngine.MarkExecutable(Path.Combine(projectDirectory, "upload.reports.sh"));
            await WriteReportProjectAsync(request, projectDirectory, input, result);

            // The .rptproj is the project — when a solution was named
            // (--solution) it gains the Reporting Services entry the way
            // Visual Studio writes it (no SharedMSBuildProjectFiles
            // consumer line — nothing imports .projitems). No --solution =
            // create-only.
            if (!string.IsNullOrEmpty(input.SolutionFile))
            {
                var solutionChanged = await SolutionMutator.AddReportProjectToSolutionAsync(workspace.SolutionFile, reportFile);
                result.Files.Add(new ScaffoldFileResult(Path.GetFileName(workspace.SolutionFile), workspace.SolutionFile, solutionChanged ? "Updated" : "Unchanged"));
            }

            return result;
        }

        /// <summary>
        /// The handler-side .rptproj of the VSIX RunFinished: the Shared
        /// ReportProjectTemplate.rptproj resource with $DevKitVersion$
        /// stamped, written through FileHelper.ForceWriteAllTextAsync so the
        /// file carries the UTF-8 BOM the wizard's output has (the resource
        /// itself is BOM-less — the writer adds it). On reruns the file is
        /// user territory (reports/datasets/datasources are registered
        /// there): only rewritten with --force or when the stamped content
        /// differs.
        /// </summary>
        private static async Task WriteReportProjectAsync(ScaffoldRequest request, string projectDirectory, ProjectTemplateInput input, ScaffoldResult result)
        {
            var reportResource = await TemplatePayload.ReadSharedResourceAsync("ReportProjectTemplate.rptproj");
            if (reportResource == null)
            {
                result.AddError("resource not found: ReportProjectTemplate.rptproj");
                return;
            }
            var reportContent = reportResource.Replace("$DevKitVersion$", Const.VersionBuild);
            var reportFile = Path.Combine(projectDirectory, input.ProjectName + ".rptproj");
            var reportFileName = Path.GetFileName(reportFile);
            if (File.Exists(reportFile) && !input.Force)
            {
                var existing = await FileHelper.ReadAllTextAsync(reportFile);
                result.Files.Add(new ScaffoldFileResult(reportFileName, reportFile, existing == reportContent ? "Unchanged" : "Skipped"));
                return;
            }
            var existed = File.Exists(reportFile);
            await FileHelper.ForceWriteAllTextAsync(reportFile, reportContent);
            result.Files.Add(new ScaffoldFileResult(reportFileName, reportFile, existed ? "Updated" : "Created"));
        }

        /// <summary>
        /// Port of the FormProject validation for ProjectType.Report:
        /// FormProject restricts no connection type for Report — only an
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
                return $"The connection type '{connection?.Type}' is not supported for the Report project template. Supported types: {string.Join(", ", SupportedConnectionTypes)}.";
            }
            return null;
        }
    }
}
