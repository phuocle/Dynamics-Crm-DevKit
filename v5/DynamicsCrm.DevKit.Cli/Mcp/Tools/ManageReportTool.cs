using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Globalization;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageReportTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;
        public ManageReportTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        private const int ReportComponentType = 31;
        private const string DiscoverReportsHint = "Use manage_report(action='list') to discover reports.";

        [McpServerTool(Name = "manage_report", Title = "Manage SSRS reports",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageReportResult)),
        Description(
            "Manage Dataverse SSRS reports (report entity). Actions: 'list', 'detail', 'create', 'download', 'update', 'delete'.\n" +
            "- list/detail are read-only; create/download/update/delete are mutations\n" +
            "- create: provide file_path to an .rdl file, or omit it to use the embedded ReportTemplate.rdl (single source of truth); the embedded template is normalized for the connected organization and language defaults to the organization's base language\n" +
            "- create uploads the report, then downloads its bodytext to .devkit/manage_report/{languageCode}/ as {report}.rdl; existing Dataverse reports and local output files fail fast\n" +
            "- download writes bodytext to .devkit/manage_report/{languageCode}/ as {report}.rdl and returns the saved path and SHA-256\n" +
            "- update replaces bodytext (.rdl content) and/or description; reports need no publish after update\n" +
            "- managed reports (isManaged=true) cannot be created/updated/deleted\n\n" +
            "WHEN TO USE:\n" +
            "- List or inspect reports of the organization or of a solution (solution component type 31)\n" +
            "- Create a new report from a local .rdl file or from the built-in template\n" +
            "- Download a report definition (.rdl) to local disk for editing\n" +
            "- Deploy an updated .rdl back to an existing report, or delete an unmanaged report\n\n" +
            "RELATED TOOLS:\n" +
            "- get_solution_components → find valid solution names and report components\n" +
            "- execute_fetchxml → query report records directly")]
        public async Task<CallToolResult> manage_report(
            McpServer server,
            [Description("'list', 'detail', 'create', 'download', 'update', 'delete'.")] string action = "",
            [Description("Report identifier: GUID, report name, or .rdl file name. Required for detail/download/update/delete.")] string report_id = "",
            [Description("create/update: local .rdl file path. Relative paths resolve against the workspace folder (auto-resolved from MCP roots or server cwd). Omit on create to use the embedded ReportTemplate.rdl.")] string file_path = "",
            [Description("create: report display name. Default: file name without extension, or 'Report Template' when using the embedded template.")] string name = "",
            [Description("create/update: report description.")] string description = "",
            [Description("create: language name (e.g. 'English') or LCID. Default: organization's base language.")] string language = "",
            [Description("list/create: solution unique or display name. list: filter reports by solution; create: add the new report to this solution.")] string solution_name = "",
            [Description("list: case-insensitive contains filter on report name or file name.")] string name_filter = "",
            [Description("list: max records, 1-500. Default 50.")] int max_records = 50)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'create', 'download', 'update', 'delete'.");
                var normalizedAction = action.Trim().ToLowerInvariant();
                var workspaceFolder = normalizedAction is "create" or "download" or "update"
                    ? await WorkspaceFolderHelper.GetAsync(server)
                    : "";
                return normalizedAction switch
                {
                    "list" => HandleList(name_filter, solution_name, max_records),
                    "detail" => HandleDetail(report_id),
                    "create" => await HandleCreate(file_path, name, description, language, solution_name, workspaceFolder),
                    "download" => await HandleDownload(report_id, workspaceFolder),
                    "update" => await HandleUpdate(report_id, file_path, description, workspaceFolder),
                    "delete" => HandleDelete(report_id),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list', 'detail', 'create', 'download', 'update', 'delete'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowExceptionFriendly(ex);
            }
        }

        private CallToolResult HandleList(string nameFilter, string solutionName, int maxRecords)
        {
            if (maxRecords <= 0)
                return Error("max_records must be between 1 and 500.", "Use a value from 1 to 500. Default is 50.");
            if (maxRecords > 500) maxRecords = 500;
            var filters = new StringBuilder();
            if (!string.IsNullOrWhiteSpace(nameFilter))
            {
                var escapedNameFilter = EscapeXml(nameFilter.Trim());
                filters.AppendLine("      <filter type='or'>");
                filters.AppendLine($"        <condition attribute='name' operator='like' value='%{escapedNameFilter}%'/>");
                filters.AppendLine($"        <condition attribute='filename' operator='like' value='%{escapedNameFilter}%'/>");
                filters.AppendLine("      </filter>");
            }
            var solutionJoin = "";
            var resolvedSolutionName = (string)null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return Error(solResult.Error.Split("\r\n")[0], "Use get_solution_components to find valid solution names.");
                resolvedSolutionName = solResult.UniqueName;
                solutionJoin = $@"
    <link-entity name='solutioncomponent' from='objectid' to='reportid' link-type='inner'>
      <link-entity name='solution' from='solutionid' to='solutionid' link-type='inner'>
        <filter>
          <condition attribute='uniquename' operator='eq' value='{EscapeXml(resolvedSolutionName)}'/>
        </filter>
      </link-entity>
    </link-entity>";
            }
            var fetchXml = $@"<fetch top='{maxRecords}'>
  <entity name='report'>
    <attribute name='reportid'/>
    <attribute name='name'/>
    <attribute name='filename'/>
    <attribute name='languagecode'/>
    <attribute name='ismanaged'/>
    <attribute name='modifiedon'/>
    <attribute name='modifiedby'/>
    <filter type='and'>
{filters}    </filter>
    <order attribute='name'/>
    <link-entity name='languagelocale' from='localeid' to='languagecode' link-type='outer' alias='l'>
      <attribute name='language'/>
    </link-entity>{solutionJoin}
  </entity>
</fetch>";
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (result.Entities.Count == 0)
            {
                var emptyResult = new ManageReportResult { Action = "list", TotalCount = 0, SolutionName = resolvedSolutionName };
                return Success("0 reports found.", emptyResult);
            }
            var entries = result.Entities.Select(MapEntry).ToList();
            var structured = new ManageReportResult
            {
                Action = "list",
                TotalCount = entries.Count,
                Reports = entries,
                SolutionName = resolvedSolutionName
            };
            var countWord = entries.Count == 1 ? "report" : "reports";
            return Success($"{entries.Count} {countWord} found.", structured);
        }

        private CallToolResult HandleDetail(string reportId)
        {
            if (string.IsNullOrWhiteSpace(reportId))
                return Error("report_id is required for 'detail'.",
                             "Use action='list' to find report IDs.");
            var resolved = ResolveReportIdInput(reportId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error.Split("\r\n")[0], DiscoverReportsHint);
            var entity = RetrieveById(resolved.Id.Value, new ColumnSet(
                "reportid", "name", "filename", "languagecode", "ismanaged", "iscustomizable",
                "description", "bodytext", "createdby", "createdon", "modifiedby", "modifiedon"));
            if (entity == null)
                return Error($"Report '{reportId}' not found.",
                             "Use action='list' to find valid report IDs.");
            var entry = MapEntry(entity);
            if (string.IsNullOrWhiteSpace(entry.Language) && entry.LanguageCode.HasValue)
            {
                var languageFetch = $@"<fetch top='1'>
  <entity name='languagelocale'>
    <attribute name='language'/>
    <filter>
      <condition attribute='localeid' operator='eq' value='{entry.LanguageCode.Value}'/>
    </filter>
  </entity>
</fetch>";
                var languageRows = _serviceClient.RetrieveMultiple(new FetchExpression(languageFetch));
                entry.Language = languageRows.Entities.FirstOrDefault()?.GetAttributeValue<string>("language");
            }
            entry.Description = NullIfEmpty(entity.GetAttributeValue<string>("description"));
            entry.IsCustomizable = entity.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value;
            var bodyText = entity.GetAttributeValue<string>("bodytext") ?? "";
            entry.BodyTextSize = bodyText.Length;
            try
            {
                var doc = XDocument.Parse(bodyText);
                var ns = doc.Root?.Name.Namespace ?? XNamespace.None;
                entry.DataSources = doc.Descendants(ns + "DataSource")
                    .Select(d => d.Attribute("Name")?.Value)
                    .Where(n => !string.IsNullOrWhiteSpace(n))
                    .ToList();
                entry.DataSets = doc.Descendants(ns + "DataSet")
                    .Select(d => d.Attribute("Name")?.Value)
                    .Where(n => !string.IsNullOrWhiteSpace(n))
                    .ToList();
            }
            catch
            {
                // bodytext is not parseable XML — leave DataSources/DataSets null
            }
            var createdBy = entity.GetAttributeValue<EntityReference>("createdby");
            entry.CreatedBy = createdBy != null ? (createdBy.Name ?? createdBy.Id.ToString()) : null;
            entry.CreatedOn = entity.GetAttributeValue<DateTime?>("createdon")?.ToString("yyyy-MM-dd HH:mm:ss");
            var structured = new ManageReportResult
            {
                Action = "detail",
                TotalCount = 1,
                Reports = [entry]
            };
            return Success($"Report '{entry.Name}' ({entry.ReportId}), language {entry.Language} ({entry.LanguageCode}).", structured);
        }

        private async Task<CallToolResult> HandleCreate(string filePath, string name, string description,
            string language, string solutionName, string workspaceFolder)
        {
            string bodyText;
            string createSource;
            if (string.IsNullOrWhiteSpace(filePath))
            {
                bodyText = await DynamicsCrm.DevKit.Shared.Helper.ReadEmbeddedResourceAsync("DynamicsCrm.DevKit.Cli.Resources.ReportTemplate.rdl");
                if (string.IsNullOrEmpty(bodyText))
                    return Error("Embedded ReportTemplate.rdl resource not found.",
                                 "Rebuild the CLI — the resource is embedded from DynamicsCrm.DevKit.Shared/Resources/ReportTemplate.rdl.");
                bodyText = PrepareEmbeddedReportTemplate(bodyText);
                createSource = "embedded_template";
            }
            else
            {
                var resolvedPath = ResolveFilePath(filePath, workspaceFolder);
                if (!File.Exists(resolvedPath))
                    return Error($"File not found at path '{filePath}'.",
                                 "Provide a valid absolute or relative path to an .rdl file.");
                if (!resolvedPath.EndsWith(".rdl", StringComparison.OrdinalIgnoreCase))
                    return Error($"File '{filePath}' is not an .rdl report definition.",
                                 "Provide a file with the .rdl extension.");
                bodyText = await FileHelper.ReadAllTextAsync(resolvedPath);
                createSource = "file";
            }
            var languageCode = string.IsNullOrWhiteSpace(language)
                ? McpHelper.GetBaseLanguageCode(_serviceClient)
                : await new DeploymentService(_serviceClient).GetLanguageCodeAsync(language);
            if (languageCode == null || languageCode <= 0)
                return string.IsNullOrWhiteSpace(language)
                    ? Error("Organization base language could not be resolved.",
                             "Verify the Dataverse connection can read organization.languagecode, then retry the create operation.")
                    : Error($"Language '{language}' not found.",
                             "Provide a language name (e.g. 'English') or LCID (e.g. 1033) that is provisioned in the organization.");
            var provisionedLanguageError = await ValidateProvisionedLanguageAsync(language, languageCode.Value);
            if (provisionedLanguageError != null)
                return provisionedLanguageError;
            var fileName = string.IsNullOrWhiteSpace(filePath)
                ? "ReportTemplate.rdl"
                : Path.GetFileName(filePath.Trim());
            var reportName = !string.IsNullOrWhiteSpace(name)
                ? name.Trim()
                : (string.IsNullOrWhiteSpace(filePath) ? "Report Template" : Path.GetFileNameWithoutExtension(fileName));
            var existing = await new DeploymentService(_serviceClient).GetReportsAsync(reportName, languageCode);
            var duplicates = existing.Where(r => string.Equals(r.ReportName, reportName, StringComparison.OrdinalIgnoreCase)).ToList();
            if (duplicates.Count > 0)
                return Error($"Report name '{reportName}' already exists (ID: {duplicates[0].ReportId}, language {duplicates[0].Language}).",
                             "Use action='update' to modify it, or provide a different name.");
            var outputPath = GetReportOutputPath(workspaceFolder, reportName, languageCode.Value);
            if (File.Exists(outputPath))
                return Error($"Local report file '{outputPath}' already exists.",
                             "Choose a different report name or remove the existing local file before creating the report.");
            var solutionUniqueName = (string)null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName.Trim());
                if (!solResult.IsSuccess)
                    return Error(solResult.Error.Split("\r\n")[0], "Use get_solution_components to find valid solution names.");
                solutionUniqueName = solResult.UniqueName;
            }
            var report = new Entity("report")
            {
                ["name"] = reportName,
                ["filename"] = fileName,
                ["bodytext"] = bodyText,
                ["languagecode"] = languageCode.Value,
                ["reporttypecode"] = new OptionSetValue(1)
            };
            if (!string.IsNullOrWhiteSpace(description))
                report["description"] = description.Trim();
            if (_options.DryRun)
                return DryRun($"Would CREATE report '{reportName}' (language {languageCode.Value}, source: {createSource})" +
                    (solutionUniqueName != null ? $" and add it to solution '{solutionUniqueName}'." : "."), new ManageReportResult
                {
                    Action = "create",
                    Status = "not_executed",
                    TotalCount = 1,
                    Reports =
                    [
                        new ReportEntry
                        {
                            Name = reportName,
                            FileName = fileName,
                            LanguageCode = languageCode.Value,
                            BodyTextSize = bodyText.Length,
                            Description = NullIfEmpty(description)
                        }
                    ],
                    SolutionName = solutionUniqueName,
                    CreateMode = createSource,
                    IsAddToSolution = solutionUniqueName != null,
                    AddToSolutionMethod = solutionUniqueName != null ? "AddSolutionComponentRequest" : null
                });
            var reportId = DataverseMutationExecutor.Create(_context, _serviceClient, report);
            SolutionComponentCreateResult addResult = null;
            if (solutionUniqueName != null)
                addResult = SolutionComponentCreateHelper.AddExistingComponent(
                    _context, _serviceClient,
                    reportId,
                    ReportComponentType,
                    solutionUniqueName);
            Directory.CreateDirectory(Path.GetDirectoryName(outputPath));
            await FileHelper.ForceWriteAllTextAsync(outputPath, bodyText);
            var sha256 = Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(bodyText))).ToLowerInvariant();
            var summary = $"Created report '{reportName}' ({reportId}) and downloaded to file (see savedPath): language={languageCode.Value}, source={createSource}" +
                (solutionUniqueName == null
                    ? "."
                    : addResult.IsAddToSolution
                        ? $", added to solution '{solutionUniqueName}'."
                        : $". Not added to solution '{solutionUniqueName}' (see addToSolutionWarning).");
            return Success(summary, new ManageReportResult
            {
                Action = "created",
                Status = "created_and_downloaded",
                TotalCount = 1,
                Reports =
                [
                    new ReportEntry
                    {
                        ReportId = reportId.ToString(),
                        Name = reportName,
                        FileName = fileName,
                        LanguageCode = languageCode.Value,
                        IsManaged = false,
                        BodyTextSize = bodyText.Length,
                        Description = NullIfEmpty(description)
                    }
                ],
                SolutionName = solutionUniqueName,
                CreateMode = createSource,
                IsAddToSolution = addResult?.IsAddToSolution ?? false,
                AddToSolutionMethod = addResult?.AddToSolutionMethod,
                AddToSolutionWarning = addResult?.AddToSolutionWarning,
                SavedPath = outputPath,
                Sha256 = sha256
            });
        }

        private async Task<CallToolResult> ValidateProvisionedLanguageAsync(string language, int languageCode)
        {
            var response = (RetrieveProvisionedLanguagesResponse)await _serviceClient.ExecuteAsync(
                new RetrieveProvisionedLanguagesRequest());
            if (response.RetrieveProvisionedLanguages.Contains(languageCode))
                return null;

            var requestedLanguage = string.IsNullOrWhiteSpace(language) ? "organization base language" : $"'{language}'";
            return Error(
                $"Language {requestedLanguage} (LCID {languageCode}) is not installed in the organization.",
                "Install/provision this language in Dataverse, or choose a language already listed by the organization, then retry.");
        }

        private string PrepareEmbeddedReportTemplate(string bodyText)
        {
            var document = XDocument.Parse(bodyText, LoadOptions.PreserveWhitespace);
            var reportNamespace = document.Root?.GetDefaultNamespace()
                ?? throw new InvalidOperationException("Embedded ReportTemplate.rdl has no report-definition namespace.");
            var baseUrl = _serviceClient.ConnectedOrgUriActual?.GetLeftPart(UriPartial.Authority)?.TrimEnd('/');
            var orgUniqueName = _serviceClient.ConnectedOrgUniqueName?.Trim();
            if (string.IsNullOrWhiteSpace(baseUrl) || string.IsNullOrWhiteSpace(orgUniqueName))
                throw new InvalidOperationException("Connected Dataverse organization URL or unique name is unavailable.");

            var connectString = document.Descendants(reportNamespace + "ConnectString").FirstOrDefault();
            if (connectString == null)
                throw new InvalidOperationException("Embedded ReportTemplate.rdl has no Dynamics 365 ConnectString.");
            connectString.Value = $"{baseUrl}/;{orgUniqueName}";

            var languageCode = McpHelper.GetBaseLanguageCode(_serviceClient);
            if (languageCode <= 0)
                throw new InvalidOperationException("The organization's base language could not be resolved.");

            var languageParameter = document.Descendants(reportNamespace + "ReportParameter")
                .FirstOrDefault(p => string.Equals((string)p.Attribute("Name"), "CRM_UILanguageId", StringComparison.Ordinal));
            SetReportParameterDefault(languageParameter, languageCode.ToString(CultureInfo.InvariantCulture));

            var crmUrlParameter = document.Descendants(reportNamespace + "ReportParameter")
                .FirstOrDefault(p => string.Equals((string)p.Attribute("Name"), "CRM_URL", StringComparison.Ordinal));
            SetReportParameterDefault(crmUrlParameter, baseUrl);

            foreach (var parameterName in new[] { "CRM_FullName", "CRM_UserTimeZoneName" })
            {
                var parameter = document.Descendants(reportNamespace + "ReportParameter")
                    .FirstOrDefault(p => string.Equals((string)p.Attribute("Name"), parameterName, StringComparison.Ordinal));
                parameter?.Element(reportNamespace + "DefaultValue")?.Remove();
            }

            var reportLanguage = document.Root.Element(reportNamespace + "Language");
            try
            {
                var culture = CultureInfo.GetCultureInfo(languageCode);
                if (reportLanguage != null && !string.IsNullOrWhiteSpace(culture.Name))
                    reportLanguage.Value = culture.Name;
            }
            catch (CultureNotFoundException)
            {
                // The Dataverse LCID remains authoritative; keep the template culture when .NET has no mapping.
            }

            return document.ToString(SaveOptions.DisableFormatting);
        }

        private static void SetReportParameterDefault(XElement parameter, string value)
        {
            if (parameter == null) return;
            var reportNamespace = parameter.Name.Namespace;
            var defaultValue = parameter.Element(reportNamespace + "DefaultValue");
            if (defaultValue == null)
            {
                defaultValue = new XElement(reportNamespace + "DefaultValue");
                parameter.AddFirst(defaultValue);
            }
            var values = defaultValue.Element(reportNamespace + "Values");
            if (values == null)
            {
                values = new XElement(reportNamespace + "Values");
                defaultValue.Add(values);
            }
            values.RemoveNodes();
            values.Add(new XElement(reportNamespace + "Value", value));
        }

        private async Task<CallToolResult> HandleDownload(string reportId, string workspaceFolder)
        {
            if (string.IsNullOrWhiteSpace(reportId))
                return Error("report_id is required for 'download'.",
                             "Use action='list' to find report IDs.");
            var resolved = ResolveReportIdInput(reportId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error.Split("\r\n")[0], DiscoverReportsHint);
            var entity = RetrieveById(resolved.Id.Value, new ColumnSet("reportid", "name", "filename", "languagecode", "ismanaged", "bodytext"));
            if (entity == null)
                return Error($"Report '{reportId}' not found.",
                             "Use action='list' to find valid report IDs.");
            var bodyText = entity.GetAttributeValue<string>("bodytext");
            if (string.IsNullOrEmpty(bodyText))
                return Error($"Report '{reportId}' has an empty bodytext — nothing to download.",
                             "Deploy a definition first with action='update' and file_path.");
            var entry = MapEntry(entity);
            var downloadFileName = !string.IsNullOrWhiteSpace(entry.FileName)
                ? entry.FileName
                : FileColumnTransferHelper.SanitizeFolderName(entry.Name) + ".rdl";
            var folder = GetReportOutputFolder(workspaceFolder, entry.LanguageCode);
            if (_options.DryRun)
            {
                var dryRunResult = new ManageReportResult
                {
                    Action = "download",
                    Status = "not_executed",
                    TotalCount = 1,
                    Reports = [entry],
                    Sha256 = Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(bodyText))).ToLowerInvariant()
                };
                return DryRun(
                    $"Would download report '{entry.Name}' ({resolved.Id.Value}) bodytext ({bodyText.Length:N0} chars) to '{folder}' as '{downloadFileName}'. No file written.",
                    dryRunResult);
            }
            Directory.CreateDirectory(folder);
            var savedPath = FileColumnTransferHelper.GetUniqueFilePath(folder, downloadFileName);
            await FileHelper.ForceWriteAllTextAsync(savedPath, bodyText);
            var sha256 = Convert.ToHexString(SHA256.HashData(Encoding.UTF8.GetBytes(bodyText))).ToLowerInvariant();
            return Success(
                $"Downloaded report '{entry.Name}' ({resolved.Id.Value}) bodytext ({bodyText.Length:N0} chars) — saved to file (see savedPath).",
                new ManageReportResult
                {
                    Action = "download",
                    Status = "downloaded",
                    TotalCount = 1,
                    Reports = [entry],
                    SavedPath = savedPath,
                    Sha256 = sha256
                });
        }

        private async Task<CallToolResult> HandleUpdate(string reportId, string filePath, string description, string workspaceFolder)
        {
            if (string.IsNullOrWhiteSpace(reportId))
                return Error("report_id is required for 'update'.",
                             "Use action='list' to find report IDs.");
            var resolved = ResolveReportIdInput(reportId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error.Split("\r\n")[0], DiscoverReportsHint);
            var id = resolved.Id.Value;
            var existing = RetrieveById(id, new ColumnSet("reportid", "name", "filename", "languagecode", "ismanaged", "iscustomizable", "bodytext"));
            if (existing == null)
                return Error($"Report '{reportId}' not found.",
                             "Use action='list' to find valid report IDs.");
            var isManaged = existing.GetAttributeValue<bool?>("ismanaged");
            var isCustomizable = existing.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
            if (isManaged == true && isCustomizable?.Value == false)
                return Error($"Cannot update report '{reportId}' — it is managed and not customizable.",
                             "Only unmanaged reports can be updated — use action='list' to find one (isManaged=false), or action='create' your own.");
            string newBodyText = null;
            if (!string.IsNullOrWhiteSpace(filePath))
            {
                var resolvedPath = ResolveFilePath(filePath, workspaceFolder);
                if (!File.Exists(resolvedPath))
                    return Error($"File not found at path '{filePath}'.",
                                 "Provide a valid absolute or relative path to an .rdl file.");
                if (!resolvedPath.EndsWith(".rdl", StringComparison.OrdinalIgnoreCase))
                    return Error($"File '{filePath}' is not an .rdl report definition.",
                                 "Provide a file with the .rdl extension.");
                newBodyText = await FileHelper.ReadAllTextAsync(resolvedPath);
            }
            var hasDescription = !string.IsNullOrWhiteSpace(description);
            if (newBodyText == null && !hasDescription)
                return Error("No fields to update.", "Provide at least one of: file_path, description.");
            if (newBodyText != null && DynamicsCrm.DevKit.Shared.Helper.IsTheSame(existing.GetAttributeValue<string>("bodytext"), newBodyText))
                return Success($"Report '{existing.GetAttributeValue<string>("name")}' ({id}) is up-to-date — bodytext identical, nothing to do.",
                    new ManageReportResult
                    {
                        Action = "update",
                        Status = "no_change",
                        TotalCount = 1,
                        Reports = [MapEntry(existing)]
                    });
            var update = new Entity("report", id);
            var fieldsUpdated = 0;
            if (newBodyText != null)
            {
                update["bodytext"] = newBodyText;
                fieldsUpdated++;
            }
            if (hasDescription)
            {
                update["description"] = description.Trim();
                fieldsUpdated++;
            }
            var existingName = existing.GetAttributeValue<string>("name") ?? "";
            if (_options.DryRun)
                return DryRun($"Would UPDATE report '{existingName}' ({id}), {fieldsUpdated} field(s). No publish needed for reports.", new ManageReportResult
                {
                    Action = "update",
                    Status = "not_executed",
                    TotalCount = 1,
                    Reports =
                    [
                        new ReportEntry
                        {
                            ReportId = id.ToString(),
                            Name = existingName,
                            FileName = NullIfEmpty(existing.GetAttributeValue<string>("filename")),
                            LanguageCode = existing.GetAttributeValue<int?>("languagecode"),
                            IsManaged = isManaged ?? false,
                            BodyTextSize = newBodyText?.Length,
                            Description = hasDescription ? description.Trim() : null
                        }
                    ]
                });
            DataverseMutationExecutor.Update(_context, _serviceClient, update);
            return Success($"Updated report '{existingName}' ({id}): fieldsUpdated={fieldsUpdated}. No publish needed for reports.", new ManageReportResult
            {
                Action = "updated",
                TotalCount = 1,
                Reports =
                [
                    new ReportEntry
                    {
                        ReportId = id.ToString(),
                        Name = existingName,
                        FileName = NullIfEmpty(existing.GetAttributeValue<string>("filename")),
                        LanguageCode = existing.GetAttributeValue<int?>("languagecode"),
                        IsManaged = isManaged ?? false,
                        BodyTextSize = newBodyText?.Length,
                        Description = hasDescription ? description.Trim() : null
                    }
                ]
            });
        }

        private CallToolResult HandleDelete(string reportId)
        {
            if (string.IsNullOrWhiteSpace(reportId))
                return Error("report_id is required for 'delete'.",
                             "Use action='list' to find report IDs.");
            var resolved = ResolveReportIdInput(reportId);
            if (!string.IsNullOrEmpty(resolved.Error))
                return Error(resolved.Error.Split("\r\n")[0], DiscoverReportsHint);
            var id = resolved.Id.Value;
            var existing = RetrieveById(id, new ColumnSet("reportid", "name", "filename", "languagecode", "ismanaged", "iscustomizable"));
            if (existing == null)
                return Error($"Report '{reportId}' not found.",
                             "Use action='list' to find valid report IDs.");
            var isManaged = existing.GetAttributeValue<bool?>("ismanaged");
            var isCustomizable = existing.GetAttributeValue<BooleanManagedProperty>("iscustomizable");
            if (isManaged == true && isCustomizable?.Value == false)
                return Error($"Cannot delete report '{reportId}' — it is managed and not customizable.",
                             "Only unmanaged reports can be deleted — use action='list' to find one (isManaged=false).");
            var existingName = existing.GetAttributeValue<string>("name") ?? "";
            if (_options.DryRun)
                return DryRun($"Would DELETE report '{existingName}' ({id}).", new ManageReportResult
                {
                    Action = "delete",
                    Status = "not_executed",
                    TotalCount = 1,
                    Reports =
                    [
                        new ReportEntry
                        {
                            ReportId = id.ToString(),
                            Name = existingName,
                            FileName = NullIfEmpty(existing.GetAttributeValue<string>("filename")),
                            LanguageCode = existing.GetAttributeValue<int?>("languagecode"),
                            IsManaged = isManaged ?? false
                        }
                    ]
                });
            DataverseMutationExecutor.Delete(_context, _serviceClient, "report", id);
            return Success($"Deleted report '{existingName}' ({id}).", new ManageReportResult
            {
                Action = "deleted",
                TotalCount = 1,
                Reports =
                [
                    new ReportEntry
                    {
                        ReportId = id.ToString(),
                        Name = existingName,
                        FileName = NullIfEmpty(existing.GetAttributeValue<string>("filename")),
                        LanguageCode = existing.GetAttributeValue<int?>("languagecode"),
                        IsManaged = isManaged ?? false
                    }
                ]
            });
        }

        private Entity RetrieveById(Guid id, ColumnSet columnSet)
        {
            var query = new QueryExpression("report")
            {
                ColumnSet = columnSet,
                Criteria = new FilterExpression
                {
                    Conditions = { new ConditionExpression("reportid", ConditionOperator.Equal, id) }
                },
                TopCount = 1
            };
            var result = _serviceClient.RetrieveMultiple(query);
            return result.Entities.FirstOrDefault();
        }

        private static ReportEntry MapEntry(Entity e)
        {
            var modifiedBy = e.GetAttributeValue<EntityReference>("modifiedby");
            var modifiedOn = e.GetAttributeValue<DateTime?>("modifiedon");
            return new ReportEntry
            {
                ReportId = e.Id.ToString(),
                Name = e.GetAttributeValue<string>("name") ?? "",
                FileName = NullIfEmpty(e.GetAttributeValue<string>("filename")),
                LanguageCode = e.GetAttributeValue<int?>("languagecode"),
                Language = e.GetAttributeValue<AliasedValue>("l.language")?.Value?.ToString(),
                IsManaged = e.GetAttributeValue<bool?>("ismanaged") ?? false,
                ModifiedOn = modifiedOn?.ToString("yyyy-MM-dd HH:mm:ss"),
                ModifiedBy = modifiedBy != null ? (modifiedBy.Name ?? modifiedBy.Id.ToString()) : null
            };
        }

        private (Guid? Id, string Error) ResolveReportIdInput(string reportInput)
        {
            var trimmed = reportInput?.Trim();
            if (string.IsNullOrWhiteSpace(trimmed))
                return (null, "report_id is required.");
            if (Guid.TryParse(trimmed, out var guid))
                return (guid, null);
            if (_serviceClient == null)
                return (null, $"'{trimmed}' is not a valid GUID. Use action='list' to find valid report IDs.");
            var resolved = DisplayNameFirstResolver.ResolveReport(_serviceClient, trimmed, "manage_report");
            if (!resolved.IsSuccess)
                return (null, resolved.Error);
            var resolvedId = resolved.Value.Id;
            if (resolvedId == Guid.Empty && resolved.Value.Contains("reportid"))
                resolvedId = resolved.Value.GetAttributeValue<Guid>("reportid");
            if (resolvedId == Guid.Empty)
                return (null, $"Report '{trimmed}' resolved without a valid ID. Use action='list' to find valid report IDs.");
            return (resolvedId, null);
        }

        private static string ResolveFilePath(string filePath, string workspaceFolder)
        {
            var trimmed = filePath.Trim();
            if (Path.IsPathRooted(trimmed))
                return trimmed;
            return Path.GetFullPath(Path.Combine(workspaceFolder, trimmed));
        }

        private static string GetReportOutputFolder(string workspaceFolder, int? languageCode)
        {
            var languageFolder = FileColumnTransferHelper.SanitizeFolderName((languageCode ?? 1033).ToString());
            return Path.Combine(workspaceFolder, ".devkit", "manage_report", languageFolder);
        }

        private static string GetReportOutputPath(string workspaceFolder, string reportName, int languageCode)
        {
            var fileName = FileColumnTransferHelper.SanitizeFolderName(reportName) + ".rdl";
            return Path.Combine(GetReportOutputFolder(workspaceFolder, languageCode), fileName);
        }

        private static string NullIfEmpty(string value) =>
            string.IsNullOrWhiteSpace(value) ? null : value.Trim();
        private static string EscapeXml(string value) =>
            value.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace("\"", "&quot;");
    }
}
