using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    public partial class ManageRibbonTool
    {
        // ── Action: list ─────────────────────────────────────────────────

        private CallToolResult ListEntitiesWithRibbon()
        {
            // The devkit_ribbon solution is created on the first ribbon update; if it does not
            // exist yet there is nothing to list. Probe explicitly instead of catching the export.
            if (GetSolutionId() == null)
            {
                return Success(
                    $"manage_ribbon list — Solution '{SOLUTION_NAME}' does not exist yet.\n" +
                    "No ribbon customizations found.\n" +
                    "Hint: Use manage_ribbon(action='update', entity_name=..., operations=[...]) to add your first ribbon button.",
                    new ManageRibbonResult
                    {
                        Action = "list",
                        Status = "empty",
                        Entities = null
                    });
            }

            var exportReq = new ExportSolutionRequest
            {
                SolutionName = SOLUTION_NAME,
                Managed = false
            };
            var exportResp = (ExportSolutionResponse)_orgService.Execute(exportReq);
            var zipBytes = exportResp.ExportSolutionFile;

            var entities = ExtractEntitiesFromSolution(zipBytes);

            if (entities.Count == 0)
            {
                return Success(
                    $"manage_ribbon list — 0 entities with ribbon customizations in '{SOLUTION_NAME}'.",
                    new ManageRibbonResult
                    {
                        Action = "list",
                        Status = "ok",
                        Entities = entities.Select(e => e.Name).ToList()
                    });
            }

            var entitySummary = string.Join(", ", entities.Select(e => $"{e.Name} ({e.ButtonCount} buttons)"));
            return Success(
                $"manage_ribbon list — {entities.Count} {(entities.Count == 1 ? "entity" : "entities")} with ribbon customizations: {entitySummary}.",
                new ManageRibbonResult
                {
                    Action = "list",
                    Status = "ok",
                    Entities = entities.Select(e => e.Name).ToList()
                });
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

            // Load hidden buttons and LocLabels from devkit solution RibbonDiffXml (single export)
            LoadDevKitRibbonData(entityName, out var hiddenBySurface, out var locLabels);

            foreach (var (surface, (filter, groupSuffix)) in SurfaceRibbonMap)
            {
                try
                {
                    var surfaceResult = new RibbonSurfaceButtons { Surface = surface };
                    hiddenBySurface.TryGetValue(surface, out var hiddenForSurface);
                    hiddenForSurface ??= [];

                    var request = new RetrieveEntityRibbonRequest
                    {
                        EntityName = entityName,
                        RibbonLocationFilter = filter
                    };
                    var response = _orgService.Execute(request) as RetrieveEntityRibbonResponse;
                    var compressed = response?.CompressedEntityXml;
                    var xml = compressed is { Length: > 0 } ? UnzipRibbonXml(compressed) : null;

                    surfaceResult.Items = xml == null
                        ? []
                        : ParseButtonsFromRibbon(xml, entityName, groupSuffix, locLabels);

                    // Append hidden buttons that no longer appear in the merged ribbon XML
                    foreach (var hiddenBtn in hiddenForSurface)
                    {
                        if (!surfaceResult.Items.Any(b => string.Equals(b.Id, hiddenBtn.Id, StringComparison.OrdinalIgnoreCase)))
                            surfaceResult.Items.Add(hiddenBtn);
                    }

                    // Re-sort after appending hidden buttons
                    surfaceResult.Items = surfaceResult.Items.OrderBy(b => b.Sequence).ThenBy(b => b.IsHide ? 1 : 0).ToList();

                    allSurfaces.Add(surfaceResult);
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException(
                        $"ListRibbonButtons stage=surface({surface}, filter={filter}, groupSuffix={groupSuffix}): {ex.GetType().Name} {ex.Message}", ex);
                }
            }

            var countSummary = string.Join(", ", allSurfaces.Select(s => $"{s.Surface}={s.Items.Count}"));
            return Success(
                $"manage_ribbon buttons — {entityName}: {countSummary}.",
                new ManageRibbonResult
                {
                    Action = "buttons",
                    EntityName = entityName,
                    Status = "ok",
                    Buttons = allSurfaces
                });
        }

        private void LoadDevKitRibbonData(string entityName,
            out Dictionary<string, List<RibbonButtonInfo>> hiddenBySurface,
            out Dictionary<string, string> locLabels)
        {
            hiddenBySurface = new Dictionary<string, List<RibbonButtonInfo>>(StringComparer.OrdinalIgnoreCase);
            locLabels = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

            if (_options.DryRun)
                return;

            // FetchExistingRibbonDiffXml returns an empty RibbonDiffXml when the devkit_ribbon
            // solution does not exist yet, so no swallow-catch is needed here.
            var fetcher = new RibbonSolutionFetcher(_orgService, _context);
            var ribbonDiffXml = fetcher.FetchExistingRibbonDiffXml(entityName);
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

        // ── Action: detail ───────────────────────────────────────────────

        private CallToolResult DetailRibbon(string entityName)
        {
            var fetcher = new RibbonSolutionFetcher(_orgService, _context);
            var ribbonXml = _options.DryRun
                ? fetcher.ReadRibbonWithoutMutation(entityName)
                : fetcher.FetchExistingRibbonDiffXml(entityName);

            if (ribbonXml == null)
            {
                return Success(
                    $"manage_ribbon detail — {entityName}\n" +
                    $"No ribbon customizations found for '{entityName}' in solution '{SOLUTION_NAME}'.\n" +
                    $"Hint: Use manage_ribbon(action='update', entity_name='{entityName}', operations=[...]) to create ribbon buttons.",
                    new ManageRibbonResult
                    {
                        Action = "detail",
                        EntityName = entityName,
                        Status = "empty"
                    });
            }

            // Pretty-print the XML
            var doc = XDocument.Parse(ribbonXml);
            var prettyXml = doc.ToString(SaveOptions.None);

            var customActionCount = doc.Descendants("CustomAction").Count();
            var commandCount = doc.Descendants("CommandDefinition").Count();
            var enableRuleCount = doc.Descendants("EnableRule").Count();
            var locLabelCount = doc.Descendants("LocLabel").Count();

            return Success(
                $"manage_ribbon detail — {entityName}: {customActionCount} CustomAction, {commandCount} CommandDefinition, {enableRuleCount} EnableRule, {locLabelCount} LocLabel.",
                new ManageRibbonResult
                {
                    Action = "detail",
                    EntityName = entityName,
                    Status = "ok",
                    RibbonDiffXml = prettyXml
                });
        }

        // ── Zip helpers ──────────────────────────────────────────────────

        private static string UnzipRibbonXml(byte[] data)
        {
            using var memStream = new MemoryStream(data);
            using var zip = new ZipArchive(memStream, ZipArchiveMode.Read);
            var entry = zip.GetEntry("RibbonXml.xml");
            // A filter can legitimately return a zip without RibbonXml.xml (no ribbon data for that surface).
            if (entry == null)
                return null;
            using var strm = entry.Open();
            using var reader = new StreamReader(strm, Encoding.UTF8);
            return reader.ReadToEnd();
        }

        private static List<(string Name, int ButtonCount)> ExtractEntitiesFromSolution(byte[] zipBytes)
        {
            var result = new List<(string Name, int ButtonCount)>();

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
    }
}
