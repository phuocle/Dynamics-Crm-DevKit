using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageRibbonTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private const string SOLUTION_NAME = "devkit_ribbon";
        private const string SOLUTION_DISPLAY_NAME = "DEVKIT_RIBBON";

        public ManageRibbonTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_ribbon", Title = "Manage entity ribbon customizations (classic/legacy — DEFAULT for generic button requests)",
            Destructive = true, ReadOnly = false, Idempotent = true,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageRibbonResult)),
        Description(
            "Retrieve and modify RibbonDiffXml for Dataverse entities via solution import.\n\n" +

            "TOOL SELECTION — READ BEFORE CHOOSING:\n" +
            "CLASSIC/LEGACY ribbon (RibbonDiffXml). DEFAULT FALLBACK for all button requests.\n" +
            "Use when: 'ribbon', 'legacy', 'classic', 'button', 'nút', 'custom button', 'action button', " +
            "'UI button', 'JavaScript button', 'sub_grid button', 'homepage grid button', or any generic button request.\n" +
            "Use manage_command ONLY for: 'modern', 'Power Fx', 'appaction', 'new UI', " +
            "'Model-Driven App command bar', 'command designer'.\n" +
            "When in doubt → always use manage_ribbon, never manage_command.\n\n" +

            "ACTIONS: list, buttons, detail, update, undo\n" +
            "- list: entities with ribbon customizations in solution 'devkit-ribbon'\n" +
            "- buttons: all ribbon buttons (OOB+custom) across form/main_grid/sub_grid. Required: entity_name\n" +
            "- detail: show current RibbonDiffXml. Required: entity_name\n" +
            "- update: apply ribbonxml from build_ribbon_xml. Required: entity_name + ribbonxml. Backup→Import→PublishAll\n" +
            "- undo: restore from backup file. Required: entity_name + ribbonxml (backup path)\n\n" +
            "WORKFLOW: build_ribbon_xml → manage_ribbon(action='update') [auto-publishes all by default]\n" +
            "Auto-backup before update; backup failure blocks update.\n" +
            "NOTE: Ribbon requires PublishAll (not entity-scoped publish). auto_publish=true (default) runs PublishAll synchronously. Set false when batching, then call publish_customizations once.")]
        public CallToolResult manage_ribbon(
            [Description("'list', 'buttons', 'detail', 'update', or 'undo'.")] string action,
            [Description("Entity logical name (e.g., 'account'). Required for detail/update/undo.")] string entity_name = "",
            [Description("For 'update': RibbonDiffXml file path from build_ribbon_xml. For 'undo': backup file path.")] string ribbonxml = "",
            [Description("Publish after changes (default: true). Set false when batching.")] bool auto_publish = true,
            [Description("Backup current ribbon before overwriting (default: true). Backup failure blocks update.")] bool backup = true)
        {
            var actionName = (action ?? "").Trim().ToLowerInvariant();

            if (string.IsNullOrWhiteSpace(actionName))
                return ErrorResult("Error: action is required. Valid actions: 'list', 'buttons', 'detail', 'update', 'undo'.");

            try
            {
                switch (actionName)
                {
                    case "list":
                        return ListEntitiesWithRibbon();

                    case "buttons":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return ErrorResult("Error: entity_name is required for action='buttons'.");
                        return ListRibbonButtons(entity_name.Trim().ToLowerInvariant());

                    case "detail":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return ErrorResult("Error: entity_name is required for action='detail'.");
                        return DetailRibbon(entity_name.Trim().ToLowerInvariant());

                    case "update":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return ErrorResult("Error: entity_name is required for action='update'.");
                        if (string.IsNullOrWhiteSpace(ribbonxml))
                            return ErrorResult(
                                "Error: ribbonxml is required for action='update'.\n" +
                                "Provide file path from build_ribbon_xml or inline RibbonDiffXml.");
                        return UpdateRibbon(entity_name.Trim().ToLowerInvariant(), ribbonxml.Trim(), backup, auto_publish);

                    case "undo":
                        if (string.IsNullOrWhiteSpace(entity_name))
                            return ErrorResult("Error: entity_name is required for action='undo'.");
                        if (string.IsNullOrWhiteSpace(ribbonxml))
                            return ErrorResult(
                                "Error: ribbonxml is required for action='undo'.\n" +
                                "Provide backup file path from .devkit/backups/ribbons/.");
                        return UndoRibbon(entity_name.Trim().ToLowerInvariant(), ribbonxml.Trim(), auto_publish);

                    default:
                        return ErrorResult($"Error: Invalid action '{action}'. Valid actions: 'list', 'buttons', 'detail', 'update', 'undo'.");
                }
            }
            catch (System.ServiceModel.FaultException<Microsoft.Xrm.Sdk.OrganizationServiceFault> fex)
            {
                var fault = fex.Detail;
                var errorDetail = fault != null
                    ? $"{fault.Message} (ErrorCode: 0x{fault.ErrorCode:X8})"
                    : fex.Message;
                if (fault?.InnerFault != null)
                    errorDetail += $" → InnerFault: {fault.InnerFault.Message}";
                return ErrorResult($"[Error] Ribbon {actionName} failed\nEntity: {entity_name}\nMessage: {errorDetail}");
            }
            catch (Exception ex)
            {
                var errorDetail = ex.InnerException != null
                    ? $"{ex.Message} → {ex.InnerException.Message}"
                    : ex.Message;
                return ErrorResult($"[Error] Ribbon {actionName} failed\nEntity: {entity_name}\nMessage: {errorDetail}");
            }
        }

        // ── Action: list ─────────────────────────────────────────────────

        private CallToolResult ListEntitiesWithRibbon()
        {
            byte[] zipBytes;
            try
            {
                var exportReq = new ExportSolutionRequest
                {
                    SolutionName = SOLUTION_NAME,
                    Managed = false
                };
                var exportResp = (ExportSolutionResponse)_serviceClient.Execute(exportReq);
                zipBytes = exportResp.ExportSolutionFile;
            }
            catch
            {
                return new CallToolResult
                {
                    Content = [new TextContentBlock
                    {
                        Text = $"[ManageRibbon] list\n" +
                            $"Solution '{SOLUTION_NAME}' does not exist yet.\n" +
                            $"No ribbon customizations found.\n" +
                            $"Tip: Use build_ribbon_xml + manage_ribbon(action='update') to add your first ribbon button."
                    }],
                    StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                    {
                        Action = "list",
                        Status = "empty",
                        Entities = []
                    })
                };
            }

            var entities = ExtractEntitiesFromSolution(zipBytes);

            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] list — Solution: {SOLUTION_NAME}");
            sb.AppendLine($"Entities with ribbon customizations: {entities.Count}");
            sb.AppendLine();

            if (entities.Count == 0)
            {
                sb.AppendLine("No entities with ribbon customizations found.");
            }
            else
            {
                sb.AppendLine("| Entity | Buttons |");
                sb.AppendLine("|--------|---------|");
                foreach (var e in entities)
                    sb.AppendLine($"| {e.Name} | {e.ButtonCount} |");
            }

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "list",
                    Status = "ok",
                    Entities = entities.Select(e => e.Name).ToList()
                })
            };
        }

        // ── Action: buttons ──────────────────────────────────────────────

        // Surface → (RibbonLocationFilter, GroupId suffix containing devkit buttons)
        // form      → Form    → Mscrm.Form.{entity}.MainTab.Save.Controls
        // main_grid → HomepageGrid → Mscrm.HomepageGrid.{entity}.MainTab.Actions.Controls
        // sub_grid  → SubGrid → Mscrm.SubGrid.{entity}.MainTab.Actions.Controls
        private static readonly Dictionary<string, (RibbonLocationFilters Filter, string GroupSuffix)> SurfaceRibbonMap = new()
        {
            ["form"]      = (RibbonLocationFilters.Form,     "MainTab.Save"),
            ["main_grid"] = (RibbonLocationFilters.HomepageGrid, "MainTab.Actions"),
            ["sub_grid"]  = (RibbonLocationFilters.SubGrid,  "MainTab.Actions"),
        };

        private CallToolResult ListRibbonButtons(string entityName)
        {
            var allSurfaces = new List<RibbonSurfaceButtons>();
            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] buttons — {entityName}");
            sb.AppendLine($"Showing buttons in devkit-managed locations (form, main_grid, sub_grid)");
            sb.AppendLine();

            // Load hidden buttons and LocLabels from devkit solution RibbonDiffXml (single export)
            LoadDevKitRibbonData(entityName, out var hiddenBySurface, out var locLabels);

            foreach (var (surface, (filter, groupSuffix)) in SurfaceRibbonMap)
            {
                var surfaceResult = new RibbonSurfaceButtons { Surface = surface };
                hiddenBySurface.TryGetValue(surface, out var hiddenForSurface);
                hiddenForSurface ??= [];

                try
                {
                    var request = new RetrieveEntityRibbonRequest
                    {
                        EntityName = entityName,
                        RibbonLocationFilter = filter
                    };
                    var response = (RetrieveEntityRibbonResponse)_serviceClient.Execute(request);
                    var xml = UnzipRibbonXml(response.CompressedEntityXml);

                    surfaceResult.Items = ParseButtonsFromRibbon(xml, entityName, groupSuffix, locLabels);
                }
                catch (Exception ex)
                {
                    sb.AppendLine($"### {surface.ToUpperInvariant()}");
                    sb.AppendLine($"Error retrieving ribbon: {ex.Message}");
                    sb.AppendLine();
                    allSurfaces.Add(surfaceResult);
                    continue;
                }

                // Append hidden buttons that no longer appear in the merged ribbon XML
                foreach (var hiddenBtn in hiddenForSurface)
                {
                    if (!surfaceResult.Items.Any(b => string.Equals(b.Id, hiddenBtn.Id, StringComparison.OrdinalIgnoreCase)))
                        surfaceResult.Items.Add(hiddenBtn);
                }

                // Re-sort after appending hidden buttons
                surfaceResult.Items = surfaceResult.Items.OrderBy(b => b.Sequence).ThenBy(b => b.IsHide ? 1 : 0).ToList();

                sb.AppendLine($"### {surface.ToUpperInvariant()} (Mscrm.{{entity}}.{groupSuffix}.Controls)");
                sb.AppendLine($"| # | Sequence | Button Label | Button Id | OOB | Custom | Hide |");
                sb.AppendLine($"|---|----------|-------------|-----------|-----|--------|------|");
                var idx = 1;
                foreach (var btn in surfaceResult.Items)
                {
                    var oob = btn.IsOob ? "✓" : "";
                    var custom = btn.IsCustom ? "✓" : "";
                    var hide = btn.IsHide ? "✓" : "";
                    var label = string.IsNullOrWhiteSpace(btn.Label) ? $"[{btn.Id}]" : btn.Label;
                    var seqDisplay = btn.Sequence == 0 && btn.IsHide ? "(hidden)" : btn.Sequence.ToString();
                    sb.AppendLine($"| {idx++} | {seqDisplay} | {label} | {btn.Id} | {oob} | {custom} | {hide} |");
                }

                sb.AppendLine();
                allSurfaces.Add(surfaceResult);
            }

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "buttons",
                    EntityName = entityName,
                    Status = "ok",
                    Buttons = allSurfaces
                })
            };
        }

        // Single export: returns hidden buttons by surface + LocLabels dictionary
        private void LoadDevKitRibbonData(string entityName,
            out Dictionary<string, List<RibbonButtonInfo>> hiddenBySurface,
            out Dictionary<string, string> locLabels)
        {
            hiddenBySurface = new Dictionary<string, List<RibbonButtonInfo>>(StringComparer.OrdinalIgnoreCase);
            locLabels = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            try
            {
                var exportReq = new ExportSolutionRequest { SolutionName = SOLUTION_NAME, Managed = false };
                var exportResp = (ExportSolutionResponse)_serviceClient.Execute(exportReq);
                var ribbonDiffXml = ExtractRibbonDiffXml(exportResp.ExportSolutionFile, entityName);
                if (string.IsNullOrWhiteSpace(ribbonDiffXml)) return;

                var doc = XDocument.Parse(ribbonDiffXml);

                // LocLabels: Id → first Title/@description
                foreach (var locLabelEl in doc.Descendants("LocLabel"))
                {
                    var id = (string)locLabelEl.Attribute("Id") ?? "";
                    var desc = (string)locLabelEl.Descendants("Title").FirstOrDefault()?.Attribute("description") ?? "";
                    if (!string.IsNullOrWhiteSpace(id) && !string.IsNullOrWhiteSpace(desc))
                        locLabels[id] = desc;
                }

                // HideCustomAction: Location = hidden button ID
                foreach (var hideEl in doc.Descendants("HideCustomAction"))
                {
                    var buttonId = (string)hideEl.Attribute("Location") ?? "";
                    if (string.IsNullOrWhiteSpace(buttonId)) continue;

                    var surface = DetectSurfaceFromButtonId(buttonId, entityName);
                    if (surface == null) continue;

                    if (!hiddenBySurface.ContainsKey(surface))
                        hiddenBySurface[surface] = [];

                    hiddenBySurface[surface].Add(new RibbonButtonInfo
                    {
                        Id = buttonId,
                        Sequence = 0,
                        Label = ExtractReadableNameFromId(buttonId),
                        IsOob = true,
                        IsCustom = false,
                        IsHide = true
                    });
                }
            }
            catch { /* solution may not exist */ }
        }

        private static string DetectSurfaceFromButtonId(string buttonId, string entityName)
        {
            // e.g. "Mscrm.Form.v4_mcp.Activate" → form
            // "Mscrm.HomepageGrid.v4_mcp.xxx" → main_grid
            // "Mscrm.SubGrid.v4_mcp.xxx" → sub_grid
            if (buttonId.StartsWith($"Mscrm.Form.{entityName}.", StringComparison.OrdinalIgnoreCase) ||
                buttonId.StartsWith($"Mscrm.Form.", StringComparison.OrdinalIgnoreCase))
                return "form";
            if (buttonId.StartsWith($"Mscrm.HomepageGrid.", StringComparison.OrdinalIgnoreCase))
                return "main_grid";
            if (buttonId.StartsWith($"Mscrm.SubGrid.", StringComparison.OrdinalIgnoreCase))
                return "sub_grid";
            return null;
        }

        private static List<RibbonButtonInfo> ParseButtonsFromRibbon(string ribbonXml, string entityName, string groupSuffix, Dictionary<string, string> locLabels = null)
        {
            var doc = XDocument.Parse(ribbonXml);

            // Find the group whose Id ends with the expected suffix
            // e.g. "Mscrm.Form.v4_mcp.MainTab.Save" or "Mscrm.HomepageGrid.v4_mcp.MainTab.Actions"
            var targetGroupIdSuffix = $".{entityName}.{groupSuffix}";

            var group = doc.Descendants("Group")
                .FirstOrDefault(g =>
                {
                    var id = (string)g.Attribute("Id") ?? "";
                    return id.EndsWith(targetGroupIdSuffix, StringComparison.OrdinalIgnoreCase);
                });

            if (group == null)
                return [];

            var controls = group.Element("Controls");
            if (controls == null)
                return [];

            var result = new List<RibbonButtonInfo>();
            foreach (var el in controls.Elements())
            {
                var tagName = el.Name.LocalName;
                if (tagName != "Button" && tagName != "FlyoutAnchor" && tagName != "SplitButton")
                    continue;

                var id = (string)el.Attribute("Id") ?? "";
                var seqStr = (string)el.Attribute("Sequence") ?? "0";
                if (!int.TryParse(seqStr, out var seq)) seq = 0;

                var labelText = (string)el.Attribute("LabelText") ?? "";
                var label = ResolveLabel(labelText, id, locLabels);

                var solutionName = (string)el.Attribute("SolutionUniqueName") ?? "";
                var isOob = solutionName.Equals("System", StringComparison.OrdinalIgnoreCase);
                var isCustom = !isOob;

                result.Add(new RibbonButtonInfo
                {
                    Id = id,
                    Sequence = seq,
                    Label = label,
                    IsOob = isOob,
                    IsCustom = isCustom,
                    IsHide = false
                });
            }

            return result.OrderBy(b => b.Sequence).ToList();
        }

        private static string ResolveLabel(string labelText, string buttonId, Dictionary<string, string> locLabels = null)
        {
            if (string.IsNullOrWhiteSpace(labelText))
                return ExtractReadableNameFromId(buttonId);

            // $LocLabels:devkit.v4_mcp.MCPForm.Button.LabelText → look up in locLabels dict first
            if (labelText.StartsWith("$LocLabels:", StringComparison.OrdinalIgnoreCase))
            {
                var key = labelText.Substring("$LocLabels:".Length);
                if (locLabels != null && locLabels.TryGetValue(key, out var resolved))
                    return resolved;
                // Fallback: last segment
                var parts = key.Split('.');
                return parts.Last();
            }

            // $Resources:Ribbon.Form.MainTab.Save.Save → take last segment
            if (labelText.StartsWith("$Resources:", StringComparison.OrdinalIgnoreCase))
            {
                var key = labelText.Substring("$Resources:".Length);
                var parts = key.Split('.');
                return parts.Last();
            }

            // {!EntityDisplayName:email} → "email"
            if (labelText.StartsWith("{!"))
            {
                var inner = labelText.TrimStart('{', '!').TrimEnd('}');
                return inner.Contains(':') ? inner.Substring(inner.IndexOf(':') + 1) : inner;
            }

            return labelText;
        }

        private static string ExtractReadableNameFromId(string buttonId)
        {
            if (string.IsNullOrWhiteSpace(buttonId)) return "";
            var parts = buttonId.Split('.');
            return parts.Last();
        }

        private static string UnzipRibbonXml(byte[] data)
        {
            using var memStream = new MemoryStream(data);
            using var zip = new ZipArchive(memStream, ZipArchiveMode.Read);
            var entry = zip.GetEntry("RibbonXml.xml");
            using var strm = entry.Open();
            using var reader = new StreamReader(strm, Encoding.UTF8);
            return reader.ReadToEnd();
        }

        // ── Action: detail ───────────────────────────────────────────────

        private CallToolResult DetailRibbon(string entityName)
        {
            string ribbonXml;
            try
            {
                var exportReq = new ExportSolutionRequest
                {
                    SolutionName = SOLUTION_NAME,
                    Managed = false
                };
                var exportResp = (ExportSolutionResponse)_serviceClient.Execute(exportReq);
                ribbonXml = ExtractRibbonDiffXml(exportResp.ExportSolutionFile, entityName);
            }
            catch
            {
                ribbonXml = null;
            }

            if (ribbonXml == null)
            {
                return new CallToolResult
                {
                    Content = [new TextContentBlock
                    {
                        Text = $"[ManageRibbon] detail — {entityName}\n" +
                            $"No ribbon customizations found for '{entityName}' in solution '{SOLUTION_NAME}'.\n" +
                            $"Tip: Use build_ribbon_xml to create ribbon buttons."
                    }],
                    StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                    {
                        Action = "detail",
                        EntityName = entityName,
                        Status = "empty"
                    })
                };
            }

            // Pretty-print the XML
            string prettyXml;
            try
            {
                prettyXml = XDocument.Parse(ribbonXml).ToString(SaveOptions.None);
            }
            catch
            {
                prettyXml = ribbonXml;
            }

            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] detail — {entityName}");
            sb.AppendLine($"Solution: {SOLUTION_NAME}");
            sb.AppendLine();
            sb.AppendLine("```xml");
            sb.AppendLine(prettyXml);
            sb.AppendLine("```");

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "detail",
                    EntityName = entityName,
                    Status = "ok",
                    RibbonDiffXml = prettyXml
                })
            };
        }

        // ── Action: update ───────────────────────────────────────────────

        private CallToolResult UpdateRibbon(string entityName, string ribbonxml, bool doBackup, bool autoPublish)
        {
            // Step 1: Resolve ribbonxml input (file path or inline)
            var resolvedXml = ResolveRibbonXmlInput(ribbonxml);
            if (resolvedXml == null)
                return ErrorResult(
                    $"[Error] RibbonXml file not found\nPath: {ribbonxml}\n" +
                    "Tip: Re-run build_ribbon_xml to regenerate the file.");

            // Step 2: Backup current ribbon
            string backupPath = null;
            if (doBackup)
            {
                try
                {
                    backupPath = BackupCurrentRibbon(entityName);
                }
                catch (Exception ex)
                {
                    // Only block if solution exists (meaning there's something to lose)
                    if (SolutionExists())
                        return ErrorResult(
                            $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                            $"Entity: {entityName}\n" +
                            $"Message: {ex.Message}\n" +
                            "Tip: Fix the issue or set backup=false (not recommended).");
                    // If solution doesn't exist, nothing to back up — proceed
                }
            }

            // Step 3: Build solution ZIP from template
            if (_options.DryRun)
                return DryRunResult($"Would UPDATE ribbon for entity '{entityName}'.");

            var solutionZip = BuildSolutionZip(entityName, resolvedXml);

            // Step 4: Import solution
            var importReq = new ImportSolutionRequest
            {
                CustomizationFile = solutionZip,
                OverwriteUnmanagedCustomizations = true,
                PublishWorkflows = true
            };
            _serviceClient.Execute(importReq);

            // Step 4b: Remove stale entities from solution (keep only current entity)
            CleanupOtherEntities(entityName);

            // Step 5: Publish
            var published = TryPublish(autoPublish, entityName);

            // Step 6: Return result
            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] update — {entityName}");
            sb.AppendLine($"Solution: {SOLUTION_NAME}");
            sb.AppendLine($"Status: Updated successfully");
            sb.AppendLine($"Backup: {backupPath ?? "skipped"}");
            sb.AppendLine($"Published: {(published ? "yes" : "no — run publish_customizations manually")}");
            sb.AppendLine();
            if (backupPath != null)
                sb.AppendLine($"To rollback: manage_ribbon(action='undo', entity_name='{entityName}', ribbonxml='{backupPath}')");

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "update",
                    EntityName = entityName,
                    Status = published || !autoPublish ? "updated" : "updated_publish_failed",
                    BackupPath = backupPath,
                    Published = published
                })
            };
        }

        // ── Action: undo ─────────────────────────────────────────────────

        private CallToolResult UndoRibbon(string entityName, string backupFilePath, bool autoPublish)
        {
            if (!File.Exists(backupFilePath))
                return ErrorResult(
                    $"[Error] Backup file not found\nPath: {backupFilePath}\n" +
                    "Tip: Check the path. Backups are at: .devkit/backups/ribbons/");

            string restoredXml;
            try
            {
                var json = File.ReadAllText(backupFilePath, Encoding.UTF8);
                var backupData = JsonSerializer.Deserialize<RibbonBackup>(json);
                if (backupData == null || string.IsNullOrWhiteSpace(backupData.RibbonDiffXml))
                    return ErrorResult(
                        $"[Error] Backup file is empty or invalid\nPath: {backupFilePath}\n" +
                        "Tip: The backup must be a JSON file with a 'ribbonDiffXml' field.");
                restoredXml = backupData.RibbonDiffXml;
            }
            catch (JsonException ex)
            {
                return ErrorResult(
                    $"[Error] Failed to parse backup file\nPath: {backupFilePath}\nMessage: {ex.Message}");
            }

            if (_options.DryRun)
                return DryRunResult($"Would RESTORE ribbon for entity '{entityName}' from backup.");

            // Build and import
            var solutionZip = BuildSolutionZip(entityName, restoredXml);
            _serviceClient.Execute(new ImportSolutionRequest
            {
                CustomizationFile = solutionZip,
                OverwriteUnmanagedCustomizations = true,
                PublishWorkflows = true
            });

            // Remove stale entities from solution (keep only current entity)
            CleanupOtherEntities(entityName);

            var published = TryPublish(autoPublish, entityName);

            var sb = new StringBuilder();
            sb.AppendLine($"[ManageRibbon] undo — {entityName}");
            sb.AppendLine($"Restored from: {backupFilePath}");
            sb.AppendLine($"Status: Restored successfully");
            sb.AppendLine($"Published: {(published ? "yes" : "no — run publish_customizations manually")}");

            return new CallToolResult
            {
                Content = [new TextContentBlock { Text = sb.ToString() }],
                StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
                {
                    Action = "undo",
                    EntityName = entityName,
                    Status = "restored",
                    RestoredFromBackup = backupFilePath,
                    Published = published
                })
            };
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

        private static List<(string Name, int ButtonCount)> ExtractEntitiesFromSolution(byte[] zipBytes)
        {
            var result = new List<(string, int)>();

            using var ms = new MemoryStream(zipBytes);
            using var archive = new ZipArchive(ms, ZipArchiveMode.Read);

            var entry = archive.Entries
                .FirstOrDefault(e => e.FullName.Equals("customizations.xml", StringComparison.OrdinalIgnoreCase));

            if (entry == null) return result;

            using var stream = entry.Open();
            var doc = XDocument.Load(stream);

            foreach (var entityNode in doc.Descendants("Entity"))
            {
                var nameEl = entityNode.Element("Name");
                if (nameEl == null) continue;

                var ribbonEl = entityNode.Element("RibbonDiffXml");
                var buttonCount = ribbonEl?.Element("CustomActions")?.Elements("CustomAction").Count() ?? 0;

                result.Add((nameEl.Value, buttonCount));
            }

            return result;
        }

        // ── Backup ───────────────────────────────────────────────────────

        private string BackupCurrentRibbon(string entityName)
        {
            string currentXml = null;

            try
            {
                var exportReq = new ExportSolutionRequest
                {
                    SolutionName = SOLUTION_NAME,
                    Managed = false
                };
                var exportResp = (ExportSolutionResponse)_serviceClient.Execute(exportReq);
                currentXml = ExtractRibbonDiffXml(exportResp.ExportSolutionFile, entityName);
            }
            catch
            {
                // Solution doesn't exist — nothing to backup
            }

            if (string.IsNullOrWhiteSpace(currentXml))
                return null; // Nothing to backup

            var workingDir = Directory.GetCurrentDirectory();
            var backupDir = Path.Combine(workingDir, ".devkit", "backups", "ribbons");
            Directory.CreateDirectory(backupDir);

            var timestamp = DateTime.Now.ToString("yyyyMMddHHmmss");
            var backupFile = $"{entityName}_{timestamp}.ribbon.json";
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

        // ── Cleanup stale entities from solution ─────────────────────

        private void CleanupOtherEntities(string keepEntityName)
        {
            try
            {
                var solutionId = GetSolutionId();
                if (solutionId == null) return;

                var keepMetadataId = GetEntityMetadataId(keepEntityName);

                var components = _serviceClient.RetrieveMultiple(new QueryExpression("solutioncomponent")
                {
                    NoLock = true,
                    ColumnSet = new ColumnSet("objectid", "componenttype"),
                    Criteria = new FilterExpression
                    {
                        Conditions =
                        {
                            new ConditionExpression("solutionid", ConditionOperator.Equal, solutionId.Value),
                            new ConditionExpression("componenttype", ConditionOperator.Equal, 1)
                        }
                    }
                }).Entities;

                foreach (var comp in components)
                {
                    var objectId = comp.GetAttributeValue<Guid>("objectid");
                    if (keepMetadataId.HasValue && objectId == keepMetadataId.Value)
                        continue;

                    try
                    {
                        _serviceClient.Execute(new RemoveSolutionComponentRequest
                        {
                            ComponentId = objectId,
                            ComponentType = 1,
                            SolutionUniqueName = SOLUTION_NAME
                        });
                    }
                    catch { }
                }
            }
            catch { }
        }

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
            var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetch));
            return result.Entities.Count > 0 ? result.Entities[0].Id : null;
        }

        private Guid? GetEntityMetadataId(string entityName)
        {
            try
            {
                var request = new RetrieveEntityRequest
                {
                    LogicalName = entityName,
                    EntityFilters = EntityFilters.Entity
                };
                var response = (RetrieveEntityResponse)_serviceClient.Execute(request);
                return response.EntityMetadata.MetadataId;
            }
            catch { return null; }
        }

        // ── Helpers ──────────────────────────────────────────────────────

        private bool SolutionExists()
        {
            try
            {
                var solutionId = GetSolutionId();
                return solutionId.HasValue;
            }
            catch { return false; }
        }

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

        private bool TryPublish(bool autoPublish, string entityName)
        {
            if (!autoPublish) return false;
            try
            {
                _serviceClient.Execute(new PublishAllXmlRequest());
                return true;
            }
            catch
            {
                return false;
            }
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };

        // ── Backup model ─────────────────────────────────────────────────

        private sealed class RibbonBackup
        {
            [JsonPropertyName("entity")]
            public string Entity { get; set; }

            [JsonPropertyName("timestamp")]
            public string Timestamp { get; set; }

            [JsonPropertyName("ribbonDiffXml")]
            public string RibbonDiffXml { get; set; }
        }
    }
}
