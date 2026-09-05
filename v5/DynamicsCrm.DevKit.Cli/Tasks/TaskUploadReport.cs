using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class TaskUploadReport(CommandLineArgs arg, JsonUploadReport json) : ITask
    {
        public CommandLineArgs Arg { get; set; } = arg;
        private JsonUploadReport Json { get; set; } = json;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public IOrganizationServiceAsync2 OrgServiceAsync { get; set; } = arg.ServiceClient;
        public string TaskType => $"[{nameof(CliType.uploadreports).ToUpper()}]";

        private DeploymentService _deploymentService;
        private DeploymentService Deployment => _deploymentService ??= new DeploymentService(OrgServiceAsync);
        public async Task<bool> IsValidAsync()
        {
            if (!string.IsNullOrEmpty(Arg.File))
                return true; // Bypass profile validation for single file fast deploy
            if (Json == null)
            {
                SpectreLog.ActionError($"{TaskType} 'profile' not found: '{Arg.Profile}'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            if (Json.solution == "???" || (Json.solution != null && Json?.solution?.Trim().Length == 0))
            {
                SpectreLog.ActionError($"{TaskType} 'solution' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            var solutionExists = await Deployment.IsExistSolutionAsync(Json.solution);
            if (!solutionExists.IsOk)
            {
                SpectreLog.ActionError($"{TaskType} solution '{Json.solution}' not exist");
                return false;
            }
            if (Json.languages == null || Json.languages.Count == 0 || Json.languages.Count(x => x != "???") == 0)
            {
                SpectreLog.ActionError($"{TaskType} 'languages' 'empty' or '???'. Please check DynamicsCrm.DevKit.Cli.json file.");
                return false;
            }
            foreach (var language in Json.languages)
            {
                var folder = Path.Combine(CurrentDirectory, Json.solution, language);
                if (!Directory.Exists(folder))
                {
                    SpectreLog.ActionError($"Folder does not exist: {folder}");
                    return false;
                }
            }
            return true;
        }

        public async Task RunAsync()
        {
            SpectreLog.ActionWithLevel0("START");
            SpectreLog.WriteLine();

            if (!string.IsNullOrEmpty(Arg.File))
            {
                await RunFastDeployAsync();
            }
            else if (await IsValidAsync())
            {
                foreach (var language in Json.languages)
                {
                    var folder = Path.Combine(CurrentDirectory, Json.solution, language);
                    var files = Directory.GetFiles(folder, "*.rdl", SearchOption.AllDirectories);
                    if (files.Length == 0)
                    {
                        SpectreLog.ActionWithLevel0("Not found any reports to deploy");
                        SpectreLog.WriteLine();
                    }
                    else
                    {
                        var totalUploadFiles = files.Length;
                        SpectreLog.WriteHighLight("Found: ", $"{totalUploadFiles}", " ", language, " .rdl files");
                        SpectreLog.WriteLine();
                        var reportFiles = await Deployment.GetReportsBySolutionAsync(Json.solution);
                        foreach (var file in files)
                        {
                            var fileName = Path.GetFileName(file);
                            var reports = reportFiles.Where(x => x?.Language.ToLower() == language.ToLower() && x.FileName?.ToLower() == fileName?.ToLower());
                            if (reports.Count() != 1)
                            {
                                var matchCount = reports.Count();
                                var matchText = matchCount == 0 ? " report file name " : " report(s) file name ";
                                SpectreLog.ActionError($"File {file} found {matchCount}{matchText}{fileName} with language: {language}");
                            }
                            else
                            {
                                var report = reports.First();
                                if (Helper.IsTheSame(report.Content, await FileHelper.ReadAllTextAsync(file)))
                                {
                                    SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{language} report", " .." + file.Substring(CurrentDirectory.Length), "to", fileName, " report file name");
                                }
                                else
                                {
                                    await Deployment.DeployReportAsync(report.ObjectId, file);
                                    SpectreLog.ActionWithLevel1(CliAction.DEPLOYED, $"{language} report", " .." + file.Substring(CurrentDirectory.Length), $"to {fileName} report file name");
                                }
                            }
                        }
                    }
                }
            }

            SpectreLog.WriteRequestCounts();
            SpectreLog.WriteLine();
            SpectreLog.ActionWithLevel0("END");
        }

        private async Task RunFastDeployAsync()
        {
            var file = Path.GetFullPath(Arg.File);
            if (!File.Exists(file))
            {
                SpectreLog.ActionError($"File does not exist: {file}");
                return;
            }
            if (!".rdl".Equals(Path.GetExtension(file), StringComparison.OrdinalIgnoreCase))
            {
                SpectreLog.ActionError($"File is not a .rdl report file: {file}");
                return;
            }
            var languageCode = await Deployment.GetLanguageCodeAsync(Arg.Language);
            if (languageCode == null)
            {
                SpectreLog.ActionError($"Language not found: {Arg.Language}");
                return;
            }
            var report = await ResolveReportAsync(file, languageCode.Value);
            if (report == null) return;
            if (report.IsManaged)
            {
                SpectreLog.ActionError($"Report is managed, cannot deploy: {report.DisplayReportName}");
                return;
            }
            XrmHelper.COUNT_RetrieveAsync++;
            var existing = await OrgServiceAsync.RetrieveAsync("report", report.ReportId, new ColumnSet("bodytext", "iscustomizable"));
            if (existing == null)
            {
                SpectreLog.ActionError($"Report not found: {report.DisplayReportName}");
                return;
            }
            var isCustomizable = existing.GetAttributeValue<BooleanManagedProperty>("iscustomizable")?.Value ?? true;
            if (!isCustomizable)
            {
                SpectreLog.ActionError($"Report is not customizable, cannot deploy: {report.DisplayReportName}");
                return;
            }
            if (Helper.IsTheSame(existing.GetAttributeValue<string>("bodytext"), await FileHelper.ReadAllTextAsync(file)))
            {
                SpectreLog.ActionWithLevel0(CliAction.DO_NOTHING, $"{report.Language} report", $" {GetDisplayFile(file)}", "to", report.ReportFileName, " report file name");
            }
            else
            {
                await Deployment.DeployReportAsync(report.ReportId, file);
                SpectreLog.ActionWithLevel1(CliAction.DEPLOYED, $"{report.Language} report", $" {GetDisplayFile(file)}", $"to {report.ReportFileName} report file name");
            }
            await SaveReportMappingAsync(file, report);
        }

        private async Task<DeployReport> ResolveReportAsync(string file, int languageCode)
        {
            var mapping = await GetReportMappingAsync(file);
            if (mapping != null)
            {
                var mapped = await Deployment.GetReportsAsync(mapping.ReportId.ToString(), null);
                if (mapped.Count == 1) return mapped[0];
                SpectreLog.ActionError($"Mapping found in {Const.DynamicsCrmDevKitConfigJson} but report not exist in Dataverse: {mapping.DisplayReportName}");
                return null;
            }
            var identifier = !string.IsNullOrEmpty(Arg.Report) ? Arg.Report : Path.GetFileName(file);
            var reports = await Deployment.GetReportsAsync(identifier, languageCode);
            if (reports.Count == 0)
            {
                SpectreLog.ActionError($"File {file} found 0 report {identifier} with language code: {languageCode}");
                return null;
            }
            if (reports.Count > 1)
            {
                SpectreLog.ActionError($"File {file} found {reports.Count} report(s) {identifier} with language code: {languageCode}");
                foreach (var item in reports)
                {
                    SpectreLog.ActionWithLevel3($" {item.DisplayReportName} = {item.ReportId}");
                }
                return null;
            }
            return reports[0];
        }

        private async Task<DeployReport> GetReportMappingAsync(string file)
        {
            var configFile = Path.Combine(GetConfigDirectory(), Const.DynamicsCrmDevKitConfigJson);
            if (!File.Exists(configFile)) return null;
            var configJson = JsonHelper.Deserialize<ConfigJson>(await FileHelper.ReadAllTextAsync(configFile));
            var fileValue = GetConfigFileValue(file);
            return configJson?.Reports?.FirstOrDefault(x =>
                string.Equals(x?.File, fileValue, StringComparison.OrdinalIgnoreCase) ||
                string.Equals(x?.File, file, StringComparison.OrdinalIgnoreCase));
        }

        private async Task SaveReportMappingAsync(string file, DeployReport report)
        {
            if (report.ReportId == Guid.Empty) return;
            var mapping = new DeployReport
            {
                File = GetConfigFileValue(file),
                ReportId = report.ReportId,
                ReportName = report.ReportName,
                ReportFileName = report.ReportFileName,
                LanguageCode = report.LanguageCode,
                Language = report.Language,
                IsManaged = report.IsManaged
            };
            var configFile = Path.Combine(GetConfigDirectory(), Const.DynamicsCrmDevKitConfigJson);
            var configJson = new ConfigJson();
            if (File.Exists(configFile))
            {
                configJson = JsonHelper.Deserialize<ConfigJson>(await FileHelper.ReadAllTextAsync(configFile)) ?? new ConfigJson();
            }
            configJson.WebResources ??= [];
            configJson.Reports ??= [];
            configJson.CustomTemplates ??= [];
            var found = configJson.Reports.FirstOrDefault(x =>
                string.Equals(x?.File, mapping.File, StringComparison.OrdinalIgnoreCase));
            if (found == null)
            {
                configJson.Reports.Add(mapping);
            }
            else
            {
                found.ReportId = mapping.ReportId;
                found.ReportName = mapping.ReportName;
                found.ReportFileName = mapping.ReportFileName;
                found.LanguageCode = mapping.LanguageCode;
                found.Language = mapping.Language;
                found.IsManaged = mapping.IsManaged;
            }
            configJson.Reports = [.. configJson.Reports.OrderBy(x => x.File)];
            var json = JsonHelper.FormatJson(JsonHelper.Serialize(configJson));
            await FileHelper.ForceWriteAllTextAsync(configFile, json);
            SpectreLog.ActionWithLevel0(CliAction.UPDATED, Const.DynamicsCrmDevKitConfigJson);
        }

        private string GetConfigDirectory()
        {
            return string.IsNullOrEmpty(Arg.JsonResolvedDirectory) ? CurrentDirectory : Arg.JsonResolvedDirectory;
        }

        private string GetConfigFileValue(string file)
        {
            var fullFile = Path.GetFullPath(file);
            var root = GetConfigDirectory();
            var relative = Path.GetRelativePath(root, fullFile);
            if (!relative.StartsWith("..", StringComparison.Ordinal) && !Path.IsPathRooted(relative))
            {
                return "\\" + relative.Replace("/", "\\");
            }
            return fullFile;
        }

        private string GetDisplayFile(string file)
        {
            var fullFile = Path.GetFullPath(file);
            if (fullFile.StartsWith(CurrentDirectory, StringComparison.OrdinalIgnoreCase))
            {
                return ".." + fullFile.Substring(CurrentDirectory.Length);
            }
            return fullFile;
        }
    }
}
