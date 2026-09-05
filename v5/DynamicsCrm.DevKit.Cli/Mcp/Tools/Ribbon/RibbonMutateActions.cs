using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public partial class ManageRibbonTool
    {
        // ── Action: update (from raw ribbonxml patch) ────────────────────

        private CallToolResult UpdateRibbon(string entityName, string ribbonxml)
        {
            // Step 1: Resolve ribbonxml input (file path or inline)
            var resolvedXml = ResolveRibbonXmlInput(ribbonxml);
            if (resolvedXml == null)
                return Error(
                    "RibbonXml file not found.",
                    $"Path: {ribbonxml}. Re-run build_ribbon_xml to regenerate the file.");

            // Step 2: Preserve existing RibbonDiffXml nodes that are not present in the supplied XML.
            // Raw ribbonxml updates are treated as patches so adding one button cannot delete siblings.
            var fetcher = new RibbonSolutionFetcher(_orgService, _context);
            var existingXml = fetcher.FetchExistingRibbonDiffXml(entityName);
            var targetDoc = XDocument.Parse(resolvedXml);
            var existingDoc = XDocument.Parse(existingXml);

            RibbonXmlHelpers.PreserveMissingRibbonDiffElements(targetDoc, existingDoc);
            resolvedXml = targetDoc.ToString(SaveOptions.None);

            // Step 3: Build solution ZIP from template
            if (_options.DryRun)
                return DryRun($"Would UPDATE ribbon for entity '{entityName}'.", new ManageRibbonResult
                {
                    Action = "update",
                    EntityName = entityName,
                    Status = "not_executed",
                    Published = false
                });

            // Backup current ribbon only when actually mutating (a genuine fetch failure bubbles to the entry-point catch)
            var backupPath = BackupCurrentRibbon(entityName);

            // Step 5: Import solution. Execute returns only after Dataverse finishes the import request.
            var solutionZip = BuildSolutionZip(entityName, resolvedXml);
            SolutionImportHelper.Import(_context, _orgService, solutionZip);

            // Step 6: Publish immediately after import completes (PublishAll async).
            var asyncJobId = PublishHelper.PublishAllAsync(_context, _orgService);
            var functionSignatures = BuildFunctionSignatures(resolvedXml);

            // Step 7: Return result
            return BuildUpdateResult(entityName, backupPath, asyncJobId, functionSignatures,
                opsCount: null, summaries: null, xsdWarnings: null);
        }

        // ── Action: update (from operations) ────────────────────────────

        private CallToolResult UpdateRibbonFromOperations(string entityName, string operationsJson)
        {
            // Step 1: Validate entity
            var validation = new RibbonValidation(_orgService);
            var entityError = validation.ValidateEntityExists(entityName);
            if (entityError != null)
                return Error(entityError, "Use get_tables to find valid entity names.");

            // Step 2: Parse operations JSON (invalid JSON returns a friendly error instead of an exception)
            List<JsonElement> ops;
            try
            {
                ops = JsonSerializer.Deserialize<List<JsonElement>>(operationsJson);
            }
            catch (JsonException)
            {
                return Error(
                    "Invalid 'operations' JSON: expected a JSON array of ribbon operations.",
                    "Provide a JSON array of ribbon operations, e.g. " +
                    "[{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"My Button\",...}]");
            }
            if (ops == null || ops.Count == 0)
                return Error("operations must be a non-empty JSON array.",
                    "Provide a JSON array with at least one ribbon operation, e.g. " +
                    "[{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"My Button\",...}]");

            var (normalizedOps, nameResolutionErrors) = NormalizeOperationWebResources(ops);
            if (nameResolutionErrors.Count > 0)
                return Error(
                    FormatOperationNameResolutionErrors(nameResolutionErrors),
                    "Display Name contains is resolved first, then logical/unique/schema contains. Use a more specific web resource name when matches are ambiguous.");
            ops = normalizedOps;

            // Step 3: Fetch existing RibbonDiffXml from devkit-ribbon solution
            var fetcher = new RibbonSolutionFetcher(_orgService, _context);
            var existingXml = fetcher.FetchExistingRibbonDiffXml(entityName);

            // Step 4: Parse existing XML
            var ribbonDoc = XDocument.Parse(existingXml);

            // Step 5: Execute operations via helper classes
            var lcid = McpHelper.GetBaseLanguageCode(_orgService);
            var btnOps = new RibbonButtonOperations(validation, lcid);
            var flyoutOps = new RibbonFlyoutOperations(validation, lcid);

            var summaries = new List<string>();
            var existingButtonCount = RibbonXmlHelpers.CountExistingButtons(ribbonDoc);

            foreach (var op in ops)
            {
                if (!op.TryGetProperty("action", out var actionProp))
                    return Error("Each operation must have an 'action' field.",
                        "Add \"action\":\"<operation>\". Valid: add_button, update_button, hide_button, show_button, " +
                        "add_split_button, update_split_button, add_flyout_static, update_flyout_static, hide_flyout_item, show_flyout_item.");

                var opAction = actionProp.GetString()?.Trim().ToLowerInvariant();
                (string error, string hint, string summary) result = opAction switch
                {
                    "add_button"           => btnOps.ExecuteAddButton(ribbonDoc, entityName, op),
                    "update_button"        => btnOps.ExecuteUpdateButton(ribbonDoc, entityName, op),
                    "hide_button"          => btnOps.ExecuteHideButton(ribbonDoc, entityName, op),
                    "show_button"          => btnOps.ExecuteShowButton(ribbonDoc, entityName, op),
                    "add_split_button"     => flyoutOps.ExecuteAddSplitButton(ribbonDoc, entityName, op),
                    "update_split_button"  => flyoutOps.ExecuteUpdateSplitButton(ribbonDoc, entityName, op),
                    "add_flyout_static"    => flyoutOps.ExecuteAddFlyoutStatic(ribbonDoc, entityName, op),
                    "update_flyout_static" => flyoutOps.ExecuteUpdateFlyoutStatic(ribbonDoc, entityName, op),
                    "hide_flyout_item"     => flyoutOps.ExecuteHideFlyoutItem(ribbonDoc, entityName, op),
                    "show_flyout_item"     => flyoutOps.ExecuteShowFlyoutItem(ribbonDoc, entityName, op),
                    _ => ($"Unknown action '{opAction}'.",
                          "Valid: add_button, update_button, hide_button, show_button, " +
                          "add_split_button, update_split_button, add_flyout_static, " +
                          "update_flyout_static, hide_flyout_item, show_flyout_item", null)
                };

                if (result.error != null) return Error(result.error, result.hint);
                summaries.Add(result.summary);
            }

            // Step 6: Sort CommandDefinitions, DisplayRules, EnableRules by Id
            RibbonXmlHelpers.SortChildrenById(ribbonDoc.Root?.Element("CommandDefinitions"), "CommandDefinition");
            var ruleDefsSortEl = ribbonDoc.Root?.Element("RuleDefinitions");
            RibbonXmlHelpers.SortChildrenById(ruleDefsSortEl?.Element("DisplayRules"), "DisplayRule");
            RibbonXmlHelpers.SortChildrenById(ruleDefsSortEl?.Element("EnableRules"), "EnableRule");

            // Step 7: Validate output XML against Ribbon XSD
            var xmlString = ribbonDoc.ToString(SaveOptions.None);
            var (xsdErrors, xsdWarnings) = RibbonValidation.ValidateRibbonXml(xmlString);
            if (xsdErrors.Count > 0)
                return Error($"Generated XML failed Ribbon XSD validation:\n{string.Join("\n", xsdErrors)}",
                    "Fix the operation fields reported above and retry; if a message does not map to an input field, report it to the tool maintainer.");
            var functionSignatures = BuildFunctionSignatures(ribbonDoc);

            if (_options.DryRun)
                return DryRun($"Would UPDATE ribbon for entity '{entityName}' with {ops.Count} operations.", new ManageRibbonResult
                {
                    Action = "update",
                    EntityName = entityName,
                    Status = "not_executed",
                    Published = false
                });

            // Step 8: Backup current ribbon only when actually mutating (a genuine fetch failure bubbles to the entry-point catch)
            var backupPath = BackupCurrentRibbon(entityName);

            // Step 9: Build solution ZIP + import. Execute returns only after Dataverse finishes the import request.
            var solutionZip = BuildSolutionZip(entityName, xmlString);
            SolutionImportHelper.Import(_context, _orgService, solutionZip);

            // Step 10: Publish immediately after import completes (PublishAll async).
            var asyncJobId = PublishHelper.PublishAllAsync(_context, _orgService);

            // Step 11: Build result
            return BuildUpdateResult(entityName, backupPath, asyncJobId, functionSignatures,
                opsCount: ops.Count, summaries: summaries, xsdWarnings: xsdWarnings);
        }

        private CallToolResult BuildUpdateResult(string entityName, string backupPath, Guid asyncJobId,
            List<RibbonFunctionSignature> functionSignatures, int? opsCount, List<string> summaries, List<string> xsdWarnings)
        {
            var opsText = opsCount.HasValue
                ? $"{opsCount.Value} operation{(opsCount.Value == 1 ? "" : "s")} ({string.Join("; ", summaries)})"
                : "ribbonxml patch applied";
            return Success(
                $"manage_ribbon update — {entityName}: {opsText}, PublishAll started asynchronously ({asyncJobId}).",
                new ManageRibbonResult
                {
                Action = "update",
                EntityName = entityName,
                Status = "publish_in_progress",
                BackupPath = backupPath,
                Published = true,
                FunctionSignatures = functionSignatures.Count > 0 ? functionSignatures : null,
                AsyncOperationId = asyncJobId.ToString(),
                NeedsWait = true,
                WaitTool = "get_system_jobs",
                PollAfterSeconds = 30,
                PollScheduleSeconds = NewPublishPollScheduleSeconds(),
                MaxPollAttempts = PublishMaxPollAttempts,
                MaxWaitSeconds = PublishMaxWaitSeconds,
                ReadbackAllowed = false,
                NextAllowedActions = new List<string> { "get_system_jobs" },
                WaitReason = "PublishAll started asynchronously; wait for the system job before ribbon readback or the next prompt.",
                WaitTimeoutAction = PublishWaitTimeoutAction,
                WaitTimeoutInstruction = PublishWaitTimeoutInstruction
            });
        }

        // ── Action: undo ─────────────────────────────────────────────────

        private CallToolResult UndoRibbon(string entityName, string backupFilePath)
        {
            if (!File.Exists(backupFilePath))
                return Error(
                    "Backup file not found.",
                    $"Path: {backupFilePath}. Backups are at: .devkit/manage_ribbon/{{entity}}/");

            var json = File.ReadAllText(backupFilePath, Encoding.UTF8);
            var backupData = JsonSerializer.Deserialize<RibbonBackup>(json);
            if (backupData == null || string.IsNullOrWhiteSpace(backupData.RibbonDiffXml))
                return Error(
                    "Backup file is empty or invalid.",
                    $"Path: {backupFilePath}. The backup must be a JSON file with a 'ribbonDiffXml' field.");
            var restoredXml = backupData.RibbonDiffXml;

            if (_options.DryRun)
                return DryRun($"Would RESTORE ribbon for entity '{entityName}' from backup.", new ManageRibbonResult
                {
                    Action = "undo",
                    EntityName = entityName,
                    Status = "not_executed",
                    RestoredFromBackup = backupFilePath,
                    Published = false
                });

            // Build and import. Execute returns only after Dataverse finishes the import request.
            var solutionZip = BuildSolutionZip(entityName, restoredXml);
            SolutionImportHelper.Import(_context, _orgService, solutionZip);

            // Publish immediately after import completes (PublishAll async).
            var asyncJobId = PublishHelper.PublishAllAsync(_context, _orgService);

            return Success(
                $"manage_ribbon undo — {entityName}: restored from {backupFilePath}, PublishAll started asynchronously ({asyncJobId}).",
                new ManageRibbonResult
                {
                Action = "undo",
                EntityName = entityName,
                Status = "publish_in_progress",
                RestoredFromBackup = backupFilePath,
                Published = true,
                AsyncOperationId = asyncJobId.ToString(),
                NeedsWait = true,
                WaitTool = "get_system_jobs",
                PollAfterSeconds = 30,
                PollScheduleSeconds = NewPublishPollScheduleSeconds(),
                MaxPollAttempts = PublishMaxPollAttempts,
                MaxWaitSeconds = PublishMaxWaitSeconds,
                ReadbackAllowed = false,
                NextAllowedActions = new List<string> { "get_system_jobs" },
                WaitReason = "PublishAll started asynchronously; wait for the system job before ribbon readback or the next prompt.",
                WaitTimeoutAction = PublishWaitTimeoutAction,
                WaitTimeoutInstruction = PublishWaitTimeoutInstruction
            });
        }

        // ── Solution ZIP builder (from template) ─────────────────────────

        private byte[] BuildSolutionZip(string entityName, string ribbonDiffXml)
        {
            // Load template from embedded resource
            var templateBytes = LoadTemplateZip();

            using var inputMs = new MemoryStream(templateBytes);
            using var outputMs = new MemoryStream();

            // Copy template to output and modify
            inputMs.CopyTo(outputMs);
            outputMs.Position = 0;

            using (var archive = new ZipArchive(outputMs, ZipArchiveMode.Update, leaveOpen: true))
            {
                // Modify solution.xml
                var solutionEntry = archive.GetEntry("solution.xml");
                if (solutionEntry != null)
                {
                    var solutionXml = ReadEntryText(solutionEntry);
                    // Replace entity placeholder
                    solutionXml = solutionXml
                        .Replace("v4_mcp", entityName)
                        .Replace("v4_MCP", entityName);
                    WriteEntryText(solutionEntry, solutionXml);
                }

                // Modify customizations.xml
                var customizationsEntry = archive.GetEntry("customizations.xml");
                if (customizationsEntry != null)
                {
                    var customDoc = XDocument.Parse(ReadEntryText(customizationsEntry));

                    var entityNode = customDoc.Descendants("Entity").FirstOrDefault();
                    if (entityNode != null)
                    {
                        // Update entity name
                        var nameEl = entityNode.Element("Name");
                        if (nameEl != null)
                        {
                            nameEl.Value = entityName;
                            nameEl.SetAttributeValue("LocalizedName", entityName);
                            nameEl.SetAttributeValue("OriginalName", entityName);
                        }

                        var entityInfoEl = entityNode.Element("EntityInfo")?.Element("entity");
                        if (entityInfoEl != null)
                            entityInfoEl.SetAttributeValue("Name", entityName);

                        // Replace RibbonDiffXml
                        var ribbonEl = entityNode.Element("RibbonDiffXml");
                        if (ribbonEl != null)
                        {
                            var newRibbonEl = XElement.Parse(ribbonDiffXml);
                            ribbonEl.ReplaceWith(newRibbonEl);
                        }
                    }

                    WriteEntryText(customizationsEntry, customDoc.Declaration != null
                        ? customDoc.Declaration.ToString() + "\n" + customDoc.Root.ToString()
                        : customDoc.Root.ToString());
                }
            }

            return outputMs.ToArray();
        }

        private static byte[] LoadTemplateZip()
        {
            var assembly = Assembly.GetExecutingAssembly();
            var resourceNames = assembly.GetManifestResourceNames();
            var resourceName = resourceNames.FirstOrDefault(n => n.EndsWith("ribbon.zip"));

            if (resourceName == null)
                throw new InvalidOperationException(
                    "Embedded resource 'ribbon.zip' not found. Ensure it's included as EmbeddedResource in the project.");

            using var stream = assembly.GetManifestResourceStream(resourceName);
            using var ms = new MemoryStream();
            stream.CopyTo(ms);
            return ms.ToArray();
        }

        private static string ReadEntryText(ZipArchiveEntry entry)
        {
            using var stream = entry.Open();
            using var reader = new StreamReader(stream, Encoding.UTF8);
            return reader.ReadToEnd();
        }

        private static void WriteEntryText(ZipArchiveEntry entry, string content)
        {
            using var stream = entry.Open();
            stream.SetLength(0);
            using var writer = new StreamWriter(stream, Encoding.UTF8);
            writer.Write(content);
        }

        // ── Extract from solution ZIP ────────────────────────────────────

        private static string ExtractRibbonDiffXml(byte[] zipBytes, string entityName)
        {
            using var ms = new MemoryStream(zipBytes);
            using var archive = new ZipArchive(ms, ZipArchiveMode.Read);

            var entry = archive.Entries
                .FirstOrDefault(e => e.FullName.Equals("customizations.xml", StringComparison.OrdinalIgnoreCase));

            if (entry == null) return null;

            using var stream = entry.Open();
            var doc = XDocument.Load(stream);

            var entityNode = doc.Descendants("Entity")
                .FirstOrDefault(e =>
                {
                    var nameEl = e.Element("Name");
                    return nameEl != null && string.Equals(nameEl.Value, entityName, StringComparison.OrdinalIgnoreCase);
                });

            var ribbonEl = entityNode?.Element("RibbonDiffXml");
            return ribbonEl?.ToString();
        }

        // ── Backup ───────────────────────────────────────────────────────

        private string BackupCurrentRibbon(string entityName)
        {
            // FetchExistingRibbonDiffXml returns an empty RibbonDiffXml when the devkit_ribbon
            // solution does not exist yet, so no swallow-catch is needed here. A genuine fetch
            // failure bubbles up to the caller, which decides whether to block the update.
            var fetcher = new RibbonSolutionFetcher(_orgService, _context);
            var currentXml = fetcher.FetchExistingRibbonDiffXml(entityName);

            if (string.IsNullOrWhiteSpace(currentXml))
                return null; // Nothing to backup

            var backupDir = Path.Combine(_workspaceFolder, ".devkit", "manage_ribbon", entityName);
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{timestamp}.ribbon.json";
            var backupPath = Path.Combine(backupDir, backupFile);

            var backupData = new RibbonBackup
            {
                Entity = entityName,
                Timestamp = DateTime.Now.ToString("yyyy-MM-ddTHH:mm:ss"),
                RibbonDiffXml = currentXml
            };

            var json = JsonSerializer.Serialize(backupData, new JsonSerializerOptions
            {
                WriteIndented = true,
                Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping
            });

            File.WriteAllText(backupPath, json, Encoding.UTF8);
            return backupPath;
        }

        // ── Solution lookup ──────────────────────────────────────────────

        private Guid? GetSolutionId()
        {
            var fetch = $@"<fetch top='1'>
                <entity name='solution'>
                    <attribute name='solutionid'/>
                    <filter>
                        <condition attribute='uniquename' operator='eq' value='{SOLUTION_NAME}'/>
                    </filter>
                </entity>
            </fetch>";
            var result = _orgService.RetrieveMultiple(new FetchExpression(fetch));
            return result.Entities.Count > 0 ? result.Entities[0].Id : null;
        }

        // ── RibbonXml input resolution ───────────────────────────────────

        private static string ResolveRibbonXmlInput(string ribbonxml)
        {
            // Check if it's a file path
            if (ribbonxml.EndsWith(".ribbondiffxml", StringComparison.OrdinalIgnoreCase) ||
                ribbonxml.EndsWith(".xml", StringComparison.OrdinalIgnoreCase))
            {
                if (File.Exists(ribbonxml))
                    return File.ReadAllText(ribbonxml, Encoding.UTF8);
                return null;
            }

            // Check if it looks like XML (inline)
            if (ribbonxml.TrimStart().StartsWith("<"))
                return ribbonxml;

            // Try as file path anyway
            if (File.Exists(ribbonxml))
                return File.ReadAllText(ribbonxml, Encoding.UTF8);

            return null;
        }
    }
}
