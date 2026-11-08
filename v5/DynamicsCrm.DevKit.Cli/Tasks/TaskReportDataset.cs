using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Lib.Models;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    /// <summary>
    /// Task for 'devkit report --type dataset' — manages FetchXML datasets
    /// inside a .rdl report (CLI port of the VSIX "Manage Datasets..." dialog).
    /// All mutation goes through ReportDatasetService (Shared) — conflict
    /// detection, backup and atomic write are the service's, never bypassed.
    /// </summary>
    public class TaskReportDataset(CommandLineArgs arg, ReportDatasetRequest request) : ITask
    {
        public CommandLineArgs Arg { get; set; } = arg;
        private ReportDatasetRequest Request { get; set; } = request;
        public bool IsOk { get; set; }
        public Guid SolutionId { get; set; }
        public string SolutionPrefix { get; set; }
        public string CurrentDirectory { get; set; } = arg.CurrentDirectory;
        public IOrganizationServiceAsync2 OrgServiceAsync { get; set; } = arg.ServiceClient;
        public string TaskType => $"[{nameof(CliType.reportdatasets).ToUpper()}]";

        public Task<bool> IsValidAsync()
        {
            // File and argument validation happens in RunAsync and surfaces as
            // DevKitValidationException (exit 1) — one error, before any org call.
            return Task.FromResult(true);
        }

        public async Task RunAsync()
        {
            SpectreLog.ActionWithLevel0("START");
            SpectreLog.WriteLine();

            if (string.IsNullOrWhiteSpace(Arg.File))
                throw new DevKitValidationException("--file: required — the .rdl report file to manage.");
            var file = Path.GetFullPath(Arg.File);
            if (!File.Exists(file))
                throw new DevKitValidationException($"File does not exist: {file}");
            if (!".rdl".Equals(Path.GetExtension(file), StringComparison.OrdinalIgnoreCase))
                throw new DevKitValidationException($"File is not a .rdl report file: {file}");

            ReportDatasetService service;
            try
            {
                service = new ReportDatasetService(file);
            }
            catch (Exception ex)
            {
                throw new DevKitValidationException(ex.Message);
            }

            var action = (Request.Action ?? "list").Trim().ToLowerInvariant();
            switch (action)
            {
                case "list": RunList(service); break;
                case "validate": await RunValidateAsync(service); break;
                case "add": await RunAddAsync(service); break;
                case "update": await RunUpdateAsync(service); break;
                case "delete": await RunDeleteAsync(service); break;
                default:
                    throw new DevKitValidationException($"--action '{Request.Action}': unknown — valid: list, validate, add, update, delete.");
            }

            SpectreLog.WriteRequestCounts();
            SpectreLog.WriteLine();
            SpectreLog.ActionWithLevel0("END");
        }

        private void RunList(ReportDatasetService service)
        {
            var datasets = service.List();
            SpectreLog.WriteHighLight("Found: ", $"{datasets.Count}", " ", "dataset(s)", $" in {GetDisplayFile(service.FilePath)}");
            SpectreLog.WriteLine();
            foreach (var dataset in datasets)
            {
                SpectreLog.ActionWithLevel3(
                    $" {dataset.Name} = root: {dataset.RootEntityName ?? "-"} | fields: {dataset.FieldSummary} | parameters: {dataset.ParameterSummary} | pre-filter: {dataset.PreFilterSummary} | references: {dataset.ReferenceSummary}");
                foreach (var warning in dataset.Warnings)
                    SpectreLog.ActionWithLevel4($" warning: {warning}");
            }
        }

        private async Task RunValidateAsync(ReportDatasetService service)
        {
            var fetchXml = await ResolveFetchXmlSourceAsync("validate");
            if (fetchXml == null)
            {
                if (string.IsNullOrWhiteSpace(Request.Name))
                    throw new DevKitValidationException("--fetchxml or --fetchxml-file: required for action 'validate' (or pass --name to re-validate the current CommandText).");
                var current = service.Get(Request.Name.Trim());
                if (current == null)
                    throw new DevKitValidationException($"--name '{Request.Name.Trim()}': dataset not found.");
                fetchXml = current.CommandText;
            }
            var selections = ParsePrefilterSelections(ReadFetchEntities(fetchXml));
            var validation = await service.ValidateAsync(Arg.ServiceClient, fetchXml, selections,
                string.IsNullOrWhiteSpace(Request.Name) ? null : Request.Name.Trim());
            if (!validation.IsSuccess)
                FailValidation(validation);
            SpectreLog.ActionWithLevel1("[VALID]", $"root entity: {validation.RootEntityName} | fields: {validation.Fields.Count} | parameters: {validation.Parameters.Count}");
            foreach (var warning in validation.Warnings)
                SpectreLog.ActionWithLevel2($" warning: {warning}");
            SpectreLog.ActionWithLevel3($" Fields ({validation.Fields.Count}):");
            foreach (var field in validation.Fields)
                SpectreLog.ActionWithLevel4($" {field.Name} : {field.TypeName} <- {field.SourceEntityPath}/{field.SourceAttribute ?? "-"}{(field.IsGeneratedCompanion ? " (companion)" : string.Empty)}");
            SpectreLog.ActionWithLevel3($" Parameters ({validation.Parameters.Count}):");
            foreach (var parameter in validation.Parameters)
                SpectreLog.ActionWithLevel4($" {parameter.FetchToken} -> {parameter.ReportParameterName} : {parameter.DataType}{(parameter.IsMultiValue ? " (multi-value)" : string.Empty)}{(parameter.ExistsInReport ? " (exists)" : " (new)")}");
            SpectreLog.ActionWithLevel3(" Pre-filter:");
            foreach (var entity in validation.FetchEntities)
                SpectreLog.ActionWithLevel4($" {entity.DisplayName} : {(entity.IsPreFiltered ? "ON -> " + entity.PrefilterParameterName : "off")}");
        }

        private async Task RunAddAsync(ReportDatasetService service)
        {
            if (string.IsNullOrWhiteSpace(Request.Name))
                throw new DevKitValidationException("--name: required for action 'add'.");
            var name = Request.Name.Trim();
            var fetchXml = await ResolveFetchXmlSourceAsync("add");
            var selections = ParsePrefilterSelections(ReadFetchEntities(fetchXml));
            var validation = await service.ValidateAsync(Arg.ServiceClient, fetchXml, selections, null);
            if (!validation.IsSuccess)
                FailValidation(validation);
            service.Add(name, validation);
            var backup = await service.SaveAsync(null);
            SpectreLog.ActionWithLevel1(CliAction.CREATED, $"dataset {name}", $" {GetDisplayFile(service.FilePath)}", $"fields: {validation.Fields.Count}, parameters: {validation.Parameters.Count}");
            if (backup != null)
                SpectreLog.ActionWithLevel0("Saved", $" backup: {backup}");
        }

        private async Task RunUpdateAsync(ReportDatasetService service)
        {
            if (string.IsNullOrWhiteSpace(Request.Name))
                throw new DevKitValidationException("--name: required for action 'update'.");
            var name = Request.Name.Trim();
            var current = service.Get(name);
            if (current == null)
                throw new DevKitValidationException($"--name '{name}': dataset not found.");
            var fetchXml = await ResolveFetchXmlSourceAsync("update") ?? current.CommandText;
            var selections = ParsePrefilterSelections(ReadFetchEntities(fetchXml));
            var validation = await service.ValidateAsync(Arg.ServiceClient, fetchXml, selections, name);
            if (!validation.IsSuccess)
                FailValidation(validation);
            var removed = current.Fields
                .Select(x => x.Name)
                .Except(validation.Fields.Select(x => x.Name), StringComparer.OrdinalIgnoreCase)
                .ToList();
            if (removed.Count > 0 && !Request.Force)
            {
                SpectreLog.ActionError($"--force: required — the update removes {removed.Count} field(s) from dataset '{name}':");
                foreach (var field in removed)
                    SpectreLog.ActionWithLevel3($" {field}");
                SpectreLog.ActionWithLevel3(" Run again with --force to remove them.");
                throw new DevKitValidationException($"update blocked: {removed.Count} field(s) would be removed.");
            }
            var newName = string.IsNullOrWhiteSpace(Request.NewName) ? name : Request.NewName.Trim();
            service.Update(name, newName, validation);
            var backup = await service.SaveAsync(null);
            SpectreLog.ActionWithLevel1(CliAction.UPDATED, $"dataset {newName}", $" {GetDisplayFile(service.FilePath)}", $"fields: {validation.Fields.Count}, parameters: {validation.Parameters.Count}");
            if (backup != null)
                SpectreLog.ActionWithLevel0("Saved", $" backup: {backup}");
        }

        private async Task RunDeleteAsync(ReportDatasetService service)
        {
            if (string.IsNullOrWhiteSpace(Request.Name))
                throw new DevKitValidationException("--name: required for action 'delete'.");
            var name = Request.Name.Trim();
            var references = service.FindReferences(name).ToList();
            if (references.Count > 0 && !Request.Force)
            {
                SpectreLog.ActionError($"--force: required — dataset '{name}' is still referenced by {references.Count} element(s):");
                foreach (var reference in references)
                    SpectreLog.ActionWithLevel3($" {reference}");
                SpectreLog.ActionWithLevel3(" Run again with --force to delete it anyway.");
                throw new DevKitValidationException($"delete blocked: dataset '{name}' has {references.Count} reference(s).");
            }
            service.Delete(name);
            var backup = await service.SaveAsync(null);
            SpectreLog.ActionWithLevel1(CliAction.DELETED, $"dataset {name}", $" {GetDisplayFile(service.FilePath)}");
            if (backup != null)
                SpectreLog.ActionWithLevel0("Saved", $" backup: {backup}");
        }

        /// <summary>
        /// FetchXML comes inline (--fetchxml) or from a file (--fetchxml-file) —
        /// never both (ruling aP 2026-11-04). update without either falls back
        /// to the dataset's current CommandText ("Validate &amp; Refresh Fields").
        /// </summary>
        private async Task<string> ResolveFetchXmlSourceAsync(string action)
        {
            var inline = Request.FetchXml;
            var file = Request.FetchXmlFile;
            if (!string.IsNullOrWhiteSpace(inline) && !string.IsNullOrWhiteSpace(file))
                throw new DevKitValidationException("use only one: pass either --fetchxml or --fetchxml-file, not both.");
            if (!string.IsNullOrWhiteSpace(inline))
                return inline;
            if (!string.IsNullOrWhiteSpace(file))
            {
                var path = Path.GetFullPath(file);
                if (!File.Exists(path))
                    throw new DevKitValidationException($"File does not exist: {path}");
                return (await FileHelper.ReadAllTextAsync(path)).Trim();
            }
            if (action == "add")
                throw new DevKitValidationException($"--fetchxml or --fetchxml-file: required for action '{action}'.");
            // validate: the caller falls back to the --name dataset's current
            // CommandText (or reports the missing source itself); update: keep it.
            return null;
        }

        private static List<ReportFetchEntityInfo> ReadFetchEntities(string fetchXml)
        {
            return ReportDatasetService.ReadFetchEntitiesForEditor(fetchXml).ToList();
        }

        /// <summary>
        /// "account=on,ctry=off" → path-keyed selections, the same shape the
        /// dialog's Selections() feeds ValidateAsync. Key resolves to a fetch
        /// entity path: exact path, then alias, then logical name (must be
        /// unique). Undeclared entities keep their current file state.
        /// </summary>
        private IDictionary<string, bool> ParsePrefilterSelections(List<ReportFetchEntityInfo> entities)
        {
            if (string.IsNullOrWhiteSpace(Request.PreFilter))
                return null;
            var selections = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);
            foreach (var part in Request.PreFilter.Split(','))
            {
                var trimmed = part.Trim();
                if (trimmed.Length == 0) continue;
                var separator = trimmed.IndexOf('=');
                if (separator <= 0 || separator == trimmed.Length - 1)
                    throw new DevKitValidationException($"--prefilter '{trimmed}': invalid — use key=on|off pairs separated by commas.");
                var key = trimmed.Substring(0, separator).Trim();
                var rawValue = trimmed.Substring(separator + 1).Trim();
                var value = rawValue.ToLowerInvariant();
                if (value != "on" && value != "off")
                    throw new DevKitValidationException($"--prefilter '{key}={rawValue}': value must be 'on' or 'off'.");
                selections[ResolvePrefilterPath(key, entities)] = value == "on";
            }
            return selections;
        }

        private static string ResolvePrefilterPath(string key, List<ReportFetchEntityInfo> entities)
        {
            var exact = entities.FirstOrDefault(x => string.Equals(x.Path, key, StringComparison.OrdinalIgnoreCase));
            if (exact != null) return exact.Path;
            var byAlias = entities.FirstOrDefault(x => !x.IsRoot && string.Equals(x.Alias, key, StringComparison.OrdinalIgnoreCase));
            if (byAlias != null) return byAlias.Path;
            var byName = entities.Where(x => string.Equals(x.LogicalName, key, StringComparison.OrdinalIgnoreCase)).ToList();
            if (byName.Count == 1) return byName[0].Path;
            if (byName.Count > 1)
                throw new DevKitValidationException(
                    $"--prefilter '{key}': ambiguous — matches {byName.Count} entities. Use the full path: {string.Join(", ", byName.Select(x => x.Path))}.");
            throw new DevKitValidationException(
                $"--prefilter '{key}': unknown entity. Valid paths: {string.Join(", ", entities.Select(x => x.Path))}.");
        }

        private static void FailValidation(ReportDatasetValidationResult validation)
        {
            foreach (var error in validation.Errors)
                SpectreLog.ActionError(error);
            throw new DevKitValidationException($"validation failed with {validation.Errors.Count} error(s).");
        }

        private string GetDisplayFile(string file)
        {
            var fullFile = Path.GetFullPath(file);
            return fullFile.StartsWith(CurrentDirectory, StringComparison.OrdinalIgnoreCase)
                ? ".." + fullFile.Substring(CurrentDirectory.Length)
                : fullFile;
        }
    }
}
