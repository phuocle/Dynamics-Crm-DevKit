using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;

using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageChoiceTool
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;

        public ManageChoiceTool(ServiceClient serviceClient, McpDryRunOptions options)
        {
            _serviceClient = serviceClient;
            _options = options;
        }

        [McpServerTool(Name = "manage_choice",
            Title = "Manage global option sets (choices)",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageChoiceResult)),
        Description(
            "Global option sets (choices/picklists) — list/detail/create/update. Required: list=(none); detail=optionset_name (logical name OR display name — display name resolved automatically); create=display_name+options+solution_name (optionset_name optional — auto-derived from publisher prefix + compact lowercase display_name if omitted; if provided it MUST start with the solution publisher prefix or an error is returned); update=optionset_name+at least one of (display_name, description, add_options, update_options, remove_options). For local picklists use get_tables. list/detail never publish. create and delete-only update do not issue a publish request because Dataverse auto-publishes newly created/deleted customizations. Other updates publish only the affected option set when auto_publish=true. list supports optional filter= to search by name or display name (contains, case-insensitive).\n\n" +

            "OPTION VALUES: solution_name is REQUIRED for create and for label-only add_options — if not provided by the user, ask; never search or guess. Pass options/add_options as label-only ('Draft;Confirmed'). For update_options use 'OldLabel:NewLabel;...' pairs. For remove_options use label names ('Draft,Cancelled') — labels are resolved to values automatically.\n\n" +

            "OPTION COLORS: Use option_colors='Label:#RRGGBB;...' or 'value:#RRGGBB;...' to assign hex colors to option items. Applies to create and update. Labels are resolved case-insensitively. Example: 'Draft:#808080;Paid:#008000'. Color keys must resolve to existing options; duplicates are rejected.\n\n" +

            "WHEN TO USE:\n" +
            "- Resolve label for picklist fields in FetchXML / query results\n" +
            "- Create a global choice for upsert_column to reference\n" +
            "- Add, rename, or remove option values on an existing global choice\n\n" +

            "SAFETY:\n" +
            "- remove_options is destructive and cannot be undone")]
        public CallToolResult manage_choice(
            [Description(
                "'list', 'detail', 'create', 'update'."
            )] string action,
            [Description(
                "Logical name OR display name. Required except list and create. For detail/update: Display Name contains is resolved first, then logical name contains; ambiguity returns an error. For create: if omitted, auto-derived as '{publisher_prefix}_{compact_lowercase_display_name}' (portal default, e.g. 'devkit_invoicestatus'); if provided, must start with the solution publisher prefix (e.g. 'devkit_invoicestatus') — error returned otherwise."
            )] string optionset_name = "",
            [Description(
                "Required for create. Optional for update. For list: used as a filter (contains match on name and display name, case-insensitive)."
            )] string display_name = "",
            [Description(
                "list only. Optional keyword filter applied to both logical name and display name (contains, case-insensitive). Shorthand alternative to display_name for filtering."
            )] string filter = "",
            [Description(
                "Optional for create/update."
            )] string description = "",
            [Description(
                "Create only. Label-only 'Draft;Confirmed'. Values are auto-assigned from the solution publisher's customizationoptionvalueprefix. solution_name is required."
            )] string options = "",
            [Description(
                "Update only. Label-only 'NewLabel' (value auto-assigned from solution publisher prefix, next sequential) or 'value:label;...' pairs to add."
            )] string add_options = "",
            [Description(
                "Update only. 'OldLabel:NewLabel;...' pairs to rename. Labels are resolved to values automatically."
            )] string update_options = "",
            [Description(
                "Update only. Comma-separated label names to remove (e.g. 'Draft,Cancelled'). Irreversible."
            )] string remove_options = "",
            [Description(
                "Required for create. Required for label-only add_options. Used to resolve the publisher prefix for auto-generating option values."
            )] string solution_name = "",
            [Description(
                "Optional for create/update. Semicolon-separated color mappings. Use 'Label:#RRGGBB' or 'value:#RRGGBB'. Labels are resolved case-insensitively. Example: 'Draft:#808080;Paid:#008000'."
            )] string option_colors = "",
            [Description(
                "Update only: publish only this option set after changes that need publishing. Create and delete-only update do not issue a publish request because new/deleted customizations are automatically published by Dataverse."
            )] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'create', 'update'.");

            var normalizedAction = action.Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(!string.IsNullOrWhiteSpace(filter) ? filter : display_name),
                    "detail" => HandleDetail(optionset_name),
                    "create" => HandleCreate(optionset_name, display_name, description, options, solution_name, option_colors, auto_publish),
                    "update" => HandleUpdate(optionset_name, display_name, description, add_options, update_options, remove_options, solution_name, option_colors, auto_publish),
                    _ => ErrorResult($"Error: Invalid action '{action}'. Valid values: 'list', 'detail', 'create', 'update'.")
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to manage global option set: {ex.Message}");
            }
        }

        #region Action Handlers

        private CallToolResult HandleList(string filter = "")
        {
            var response = (RetrieveAllOptionSetsResponse)_serviceClient.Execute(new RetrieveAllOptionSetsRequest());
            var all = response.OptionSetMetadata.OrderBy(x => x.Name).ToList();
            var sorted = string.IsNullOrWhiteSpace(filter)
                ? all
                : all.Where(os =>
                    (os.Name?.Contains(filter, StringComparison.OrdinalIgnoreCase) == true) ||
                    (os.DisplayName?.UserLocalizedLabel?.Label?.Contains(filter, StringComparison.OrdinalIgnoreCase) == true))
                  .ToList();
            var items = sorted.Select(os => new ChoiceListItem
            {
                Name = os.Name,
                DisplayName = os.DisplayName?.UserLocalizedLabel?.Label ?? "",
                Type = os.OptionSetType?.ToString() ?? "",
                IsGlobal = os.IsGlobal == true
            }).ToList();
            return StructuredResult(CompactFormatter.FormatOptionSetList(sorted), new ManageChoiceResult
            {
                Action = "list",
                TotalCount = items.Count,
                Items = items,
                Status = "ok"
            });
        }

        private CallToolResult HandleDetail(string optionsetName)
        {
            if (string.IsNullOrWhiteSpace(optionsetName))
                return ErrorResult("Error: optionset_name is required for 'detail'. " +
                    "Use action='list' to see all available global option sets.");

            var resolved = DisplayNameFirstResolver.ResolveGlobalOptionSet(_serviceClient, optionsetName, "manage_choice");
            if (!resolved.IsSuccess)
                return ErrorResult($"Error: {resolved.Error}");

            return BuildDetailResult(resolved.Value);
        }

        private CallToolResult BuildDetailResult(OptionSetMetadataBase meta)
        {
            var options = (meta as OptionSetMetadata)?.Options
                .OrderBy(o => o.Value)
                .Select(o => new ChoiceOptionItem
                {
                    Value = o.Value ?? 0,
                    Label = o.Label?.UserLocalizedLabel?.Label ?? "",
                    Color = string.IsNullOrWhiteSpace(o.Color) ? null : o.Color
                }).ToList();
            return StructuredResult(CompactFormatter.FormatOptionSetDetail(meta), new ManageChoiceResult
            {
                Action = "detail",
                OptionSetName = meta.Name,
                DisplayName = meta.DisplayName?.UserLocalizedLabel?.Label ?? "",
                Description = meta.Description?.UserLocalizedLabel?.Label,
                OptionCount = options?.Count,
                Options = options,
                Status = "ok"
            });
        }

        private CallToolResult HandleCreate(string optionsetName, string displayName, string description,
            string options, string solutionName, string optionColors, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                return ErrorResult("Error: display_name is required for 'create'.");

            if (string.IsNullOrWhiteSpace(options))
                return ErrorResult("Error: options is required for 'create'. " +
                    "Provide label-only values separated by semicolons (e.g. 'Draft;Confirmed;Paid'). solution_name is also required.");

            var identityInput = string.IsNullOrWhiteSpace(optionsetName) ? displayName : optionsetName;
            var existingChoice = DisplayNameFirstResolver.ResolveGlobalOptionSet(_serviceClient, identityInput, "manage_choice");
            if (existingChoice.IsSuccess)
                return ErrorResult(
                    $"Error: Global option set '{identityInput.Trim()}' already exists as '{existingChoice.Value.Name}' ({existingChoice.Value.DisplayName?.UserLocalizedLabel?.Label ?? ""}). " +
                    "Use action='update' to modify it.");
            if (existingChoice.Status == ResolveStatus.Ambiguous || existingChoice.Status == ResolveStatus.Error)
                return ErrorResult($"Error: {existingChoice.Error}");

            var name = optionsetName.Trim().ToLowerInvariant();

            // solution_name is required for create — code-level enforcement, not just AI description
            if (string.IsNullOrWhiteSpace(solutionName))
                return ErrorResult(
                    "Error: solution_name is required for 'create'. " +
                    "Provide the solution unique name or display name so the publisher's customizationoptionvalueprefix can be resolved and option integer values can be assigned correctly.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
            if (!solResult.IsSuccess)
                return ErrorResult($"Error: {solResult.Error}");

            var publisherPrefix = solResult.Prefix.ToLowerInvariant();

            if (string.IsNullOrWhiteSpace(name))
            {
                name = DerivePortalOptionSetName(displayName, publisherPrefix);
            }
            else if (!name.StartsWith(publisherPrefix + "_", StringComparison.OrdinalIgnoreCase))
            {
                var suggested = DerivePortalOptionSetName(displayName, publisherPrefix);
                return ErrorResult(
                    $"Error: optionset_name '{name}' does not start with the solution publisher prefix '{publisherPrefix}_'. " +
                    $"Use '{suggested}' or omit optionset_name to auto-derive it.");
            }

            var parsedOptions = ParseOptionsWithAutoValue(options, solResult.OptionValuePrefix * 10000);

            if (parsedOptions == null)
                return ErrorResult("Error: Invalid options format. " +
                    "Provide label-only values separated by semicolons (e.g. 'Draft;Confirmed;Paid').");

            if (parsedOptions.Count == 0)
                return ErrorResult("Error: At least one option is required for 'create'.");

            // Parse and validate option_colors
            Dictionary<string, string> colorMap = null;
            if (!string.IsNullOrWhiteSpace(optionColors))
            {
                var (parsed, colorError) = ParseOptionColors(optionColors);
                if (colorError != null)
                    return ErrorResult(colorError);
                var (resolved, resolveError) = ResolveOptionColors(parsedOptions, parsed, name);
                if (resolveError != null)
                    return ErrorResult(resolveError);
                colorMap = resolved;
            }

            // Check if already exists
            if (OptionSetExists(name))
                return ErrorResult($"Error: Global option set '{name}' already exists. " +
                    "Use action='update' to modify it.");

            if (_options.DryRun)
                return DryRunResult($"Would CREATE global option set '{name}' with {parsedOptions.Count} option(s).");

            var langCode = McpHelper.GetBaseLanguageCode(_serviceClient);
            var optionSetMetadata = new OptionSetMetadata
            {
                Name = name,
                DisplayName = new Label(displayName.Trim(), langCode),
                IsGlobal = true,
                OptionSetType = OptionSetType.Picklist
            };

            if (!string.IsNullOrWhiteSpace(description))
                optionSetMetadata.Description = new Label(description.Trim(), langCode);

            foreach (var (value, label) in parsedOptions)
            {
                var optMeta = new OptionMetadata(new Label(label, langCode), value);
                if (colorMap != null && colorMap.TryGetValue(value.ToString(), out var hex))
                    optMeta.Color = hex;
                optionSetMetadata.Options.Add(optMeta);
            }

            var createResp = (CreateOptionSetResponse)_serviceClient.Execute(
                new CreateOptionSetRequest { OptionSet = optionSetMetadata });

            var addResult = SolutionComponentCreateHelper.AddExistingComponent(
                _serviceClient,
                createResp.OptionSetId,
                9,
                solResult.IsSuccess ? solResult.UniqueName : solutionName.Trim());
            string solWarning = null;
            if (!string.IsNullOrWhiteSpace(addResult.AddToSolutionWarning))
                solWarning = $"Warning: Created but failed to add to solution '{solutionName}': {addResult.AddToSolutionWarning}";

            var published = false;

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Choice] Created: {name}");
            sb.AppendLine($"DisplayName: {displayName.Trim()}");
            if (!string.IsNullOrWhiteSpace(description))
                sb.AppendLine($"Description: {description.Trim()}");
            sb.AppendLine($"Options: {parsedOptions.Count}");
            foreach (var (value, label) in parsedOptions)
            {
                var colorSuffix = colorMap != null && colorMap.TryGetValue(value.ToString(), out var c) ? $" ({c})" : "";
                sb.AppendLine($"  {value}: {label}{colorSuffix}");
            }
            sb.AppendLine("Published: no");
            sb.AppendLine("PublishScope: skipped (new choice metadata is automatically published by Dataverse)");
            if (solWarning != null)
                sb.AppendLine(solWarning);

            return StructuredResult(sb.ToString(), new ManageChoiceResult
            {
                Action = "create",
                OptionSetName = name,
                DisplayName = displayName.Trim(),
                Description = string.IsNullOrWhiteSpace(description) ? null : description.Trim(),
                OptionCount = parsedOptions.Count,
                Options = parsedOptions.Select(p =>
                {
                    string c = null;
                    colorMap?.TryGetValue(p.value.ToString(), out c);
                    return new ChoiceOptionItem { Value = p.value, Label = p.label, Color = c };
                }).ToList(),
                SolutionName = addResult.SolutionUniqueName,
                CreateMode = SolutionComponentCreateMode.RecordCreateThenAddSolutionComponent.ToString(),
                IsAddToSolution = addResult.IsAddToSolution,
                AddToSolutionMethod = addResult.AddToSolutionMethod,
                AddToSolutionWarning = addResult.AddToSolutionWarning,
                SolutionWarning = solWarning,
                Published = published,
                Status = "created"
            });
        }

        private CallToolResult HandleUpdate(string optionsetName, string displayName, string description,
            string addOptions, string updateOptions, string removeOptionValues, string solutionName, string optionColors, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(optionsetName))
                return ErrorResult("Error: optionset_name is required for 'update'.");

            // Resolve logical name (accepts logical name OR display name)
            if (!TryResolveToLogicalName(optionsetName, out var name, out var resolveErr))
                return ErrorResult(resolveErr);

            // Validate parameters BEFORE hitting Dataverse
            var hasDisplayName = !string.IsNullOrWhiteSpace(displayName);
            var hasDescription = !string.IsNullOrWhiteSpace(description);

            // For add_options, resolve publisher prefix when solution_name provided so labels-only are accepted
            int? addOptionValueBase = null;
            if (!string.IsNullOrWhiteSpace(addOptions) && !string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult2 = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
                if (!solResult2.IsSuccess)
                    return ErrorResult($"Error: {solResult2.Error}");
                // Use max existing value + 1 as starting point so new options don't collide
                try
                {
                    var existingResp = (RetrieveOptionSetResponse)_serviceClient.Execute(
                        new RetrieveOptionSetRequest { Name = name });
                    var existingOpts = (existingResp.OptionSetMetadata as OptionSetMetadata)?.Options;
                    var maxExisting = existingOpts != null && existingOpts.Count > 0
                        ? existingOpts.Max(o => o.Value ?? 0)
                        : solResult2.OptionValuePrefix * 10000 - 1;
                    addOptionValueBase = maxExisting + 1;
                }
                catch
                {
                    addOptionValueBase = solResult2.OptionValuePrefix * 10000;
                }
            }

            var parsedAdd = addOptionValueBase.HasValue
                ? ParseOptionsWithAutoValue(addOptions, addOptionValueBase.Value)
                : ParseOptions(addOptions);
            var parsedUpdateLabels = ParseLabelPairs(updateOptions);
            var parsedRemoveLabels = ParseLabelList(removeOptionValues);

            // Validate add_options format
            if (!string.IsNullOrWhiteSpace(addOptions) && parsedAdd == null)
                return ErrorResult("Error: Invalid add_options format. " +
                    "Use label-only 'NewLabel' (requires solution_name) e.g. 'Pending;Archived'.");

            // Validate update_options format
            if (!string.IsNullOrWhiteSpace(updateOptions) && parsedUpdateLabels == null)
                return ErrorResult("Error: Invalid update_options format. " +
                    "Expected 'OldLabel:NewLabel;...' (e.g., 'Draft:Open;Paid:Completed').");

            // Validate remove_options format
            if (!string.IsNullOrWhiteSpace(removeOptionValues) && parsedRemoveLabels == null)
                return ErrorResult("Error: Invalid remove_options format. " +
                    "Expected comma-separated label names (e.g., 'Draft,Cancelled').");

            var hasAdd = parsedAdd != null && parsedAdd.Count > 0;
            var hasUpdate = parsedUpdateLabels != null && parsedUpdateLabels.Count > 0;
            var hasRemove = parsedRemoveLabels != null && parsedRemoveLabels.Count > 0;
            var hasColors = !string.IsNullOrWhiteSpace(optionColors);

            if (!hasDisplayName && !hasDescription && !hasAdd && !hasUpdate && !hasRemove && !hasColors)
                return ErrorResult("Error: No changes specified. Provide at least one of: " +
                    "display_name, description, add_options, update_options, remove_options, option_colors.");

            // Fetch current metadata for label→value resolution (name is already resolved above)
            OptionSetMetadata existingMeta;
            try
            {
                var resp = (RetrieveOptionSetResponse)_serviceClient.Execute(new RetrieveOptionSetRequest { Name = name });
                existingMeta = resp.OptionSetMetadata as OptionSetMetadata;
            }
            catch (Exception)
            {
                return ErrorResult($"Error: Global option set '{name}' not found. " +
                    "Use action='create' to create it, or action='list' to see all available option sets.");
            }

            // Resolve update labels → values
            List<(int value, string newLabel)> parsedUpdate = null;
            if (hasUpdate)
            {
                parsedUpdate = [];
                foreach (var (oldLabel, newLabel) in parsedUpdateLabels)
                {
                    var match = existingMeta?.Options.FirstOrDefault(o =>
                        o.Label?.UserLocalizedLabel?.Label?.Equals(oldLabel, StringComparison.OrdinalIgnoreCase) == true);
                    if (match == null || match.Value == null)
                        return ErrorResult($"Error: Option label '{oldLabel}' not found in '{name}'. " +
                            "Use action='detail' to see existing option labels.");
                    parsedUpdate.Add((match.Value.Value, newLabel));
                }
            }

            // Resolve remove labels → values
            List<int> parsedRemove = null;
            if (hasRemove)
            {
                parsedRemove = [];
                foreach (var label in parsedRemoveLabels)
                {
                    var match = existingMeta?.Options.FirstOrDefault(o =>
                        o.Label?.UserLocalizedLabel?.Label?.Equals(label, StringComparison.OrdinalIgnoreCase) == true);
                    if (match == null || match.Value == null)
                        return ErrorResult($"Error: Option label '{label}' not found in '{name}'. " +
                            "Use action='detail' to see existing option labels.");
                    parsedRemove.Add(match.Value.Value);
                }
            }

            if (_options.DryRun)
            {
                var parts = new List<string>();
                if (hasDisplayName) parts.Add("displayName");
                if (hasDescription) parts.Add("description");
                if (hasAdd) parts.Add($"add {parsedAdd.Count} option(s)");
                if (hasUpdate) parts.Add($"update {parsedUpdate.Count} label(s)");
                if (hasRemove) parts.Add($"remove {parsedRemove.Count} option(s)");
                if (hasColors) parts.Add("colors");
                return DryRunResult($"Would UPDATE global option set '{name}': {string.Join(", ", parts)}.");
            }

            var sb = new StringBuilder(512);
            sb.AppendLine($"[Choice] Updated: {name}");

            // Update metadata (display_name, description)
            if (hasDisplayName || hasDescription)
            {
                var updateMeta = new OptionSetMetadata
                {
                    Name = name,
                    IsGlobal = true
                };
                if (hasDisplayName)
                {
                    updateMeta.DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                    sb.AppendLine($"DisplayName: {displayName.Trim()}");
                }
                if (hasDescription)
                {
                    updateMeta.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                    sb.AppendLine($"Description: {description.Trim()}");
                }
                _serviceClient.Execute(new UpdateOptionSetRequest { OptionSet = updateMeta });
            }

            // Remove options first (before add, to avoid value conflicts)
            if (hasRemove)
            {
                for (var i = 0; i < parsedRemove.Count; i++)
                {
                    _serviceClient.Execute(new DeleteOptionValueRequest
                    {
                        OptionSetName = name,
                        Value = parsedRemove[i]
                    });
                    sb.AppendLine($"Removed: {parsedRemoveLabels[i]}");
                }
            }

            // Add new options
            if (hasAdd)
            {
                foreach (var (value, label) in parsedAdd)
                {
                    _serviceClient.Execute(new InsertOptionValueRequest
                    {
                        OptionSetName = name,
                        Value = value,
                        Label = new Label(label, McpHelper.GetBaseLanguageCode(_serviceClient))
                    });
                    sb.AppendLine($"Added: {label}");
                }
            }

            // Update existing option labels
            if (hasUpdate)
            {
                foreach (var (oldLabel, newLabel) in parsedUpdateLabels)
                {
                    var (value, _) = parsedUpdate.First(t => t.newLabel == newLabel);
                    _serviceClient.Execute(new UpdateOptionValueRequest
                    {
                        OptionSetName = name,
                        Value = value,
                        Label = new Label(newLabel, McpHelper.GetBaseLanguageCode(_serviceClient))
                    });
                    sb.AppendLine($"Updated: {oldLabel} -> {newLabel}");
                }
            }

            // Update colors — resolve against projected option state after add/rename
            List<string> coloredSummary = null;
            if (hasColors)
            {
                // Build projected option list: existing - removed + added, with labels after rename
                var projected = existingMeta.Options
                    .Where(o => o.Value.HasValue && (parsedRemove == null || !parsedRemove.Contains(o.Value.Value)))
                    .Select(o =>
                    {
                        var val = o.Value.Value;
                        // apply rename if any
                        var renamed = parsedUpdate?.FirstOrDefault(t => t.value == val);
                        var lbl = renamed.HasValue ? renamed.Value.newLabel : (o.Label?.UserLocalizedLabel?.Label ?? "");
                        return (value: val, label: lbl);
                    }).ToList();
                if (hasAdd)
                    projected.AddRange(parsedAdd);

                var (colorRaw, colorParseError) = ParseOptionColors(optionColors);
                if (colorParseError != null)
                    return ErrorResult(colorParseError);
                var (colorMap, resolveError) = ResolveOptionColors(projected, colorRaw, name);
                if (resolveError != null)
                    return ErrorResult(resolveError);

                coloredSummary = [];
                foreach (var kv in colorMap)
                {
                    var val = int.Parse(kv.Key);
                    var lbl = projected.FirstOrDefault(p => p.value == val).label ?? kv.Key;
                    var colorReq = new UpdateOptionValueRequest
                    {
                        OptionSetName = name,
                        Value = val,
                        MergeLabels = true
                    };
                    colorReq.Parameters["Color"] = kv.Value;
                    _serviceClient.Execute(colorReq);
                    sb.AppendLine($"Colored: {lbl} -> {kv.Value}");
                    coloredSummary.Add($"{val}:{lbl}:{kv.Value}");
                }
            }

            var requiresPublish = hasDisplayName || hasDescription || hasAdd || hasUpdate || hasColors;
            var published = autoPublish && requiresPublish && PublishOptionSet(name);
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            if (!requiresPublish && hasRemove)
                sb.AppendLine("PublishScope: skipped (removed choices are automatically published by Dataverse)");

            return StructuredResult(sb.ToString(), new ManageChoiceResult
            {
                Action = "update",
                OptionSetName = name,
                DisplayName = hasDisplayName ? displayName.Trim() : null,
                OptionsAdded = hasAdd ? parsedAdd.Select(p => $"{p.value}:{p.label}").ToList() : null,
                OptionsRenamed = hasUpdate ? parsedUpdateLabels.Select(p => $"{p.oldLabel}:{p.newLabel}").ToList() : null,
                OptionsRemoved = hasRemove ? parsedRemoveLabels : null,
                OptionsColored = coloredSummary,
                Published = published,
                Status = "updated"
            });
        }

        #endregion

        #region Helpers

        private bool TryResolveToLogicalName(string nameOrDisplay, out string resolvedName, out string error)
        {
            resolvedName = null;
            error = null;
            var resolved = DisplayNameFirstResolver.ResolveGlobalOptionSet(_serviceClient, nameOrDisplay, "manage_choice");
            if (resolved.IsSuccess)
            {
                resolvedName = resolved.CanonicalName ?? resolved.Value.Name;
                return true;
            }

            error = $"Error: {resolved.Error}";
            return false;
        }

        internal static bool TryNormalizeHexColor(string input, out string color)
        {
            color = null;
            if (string.IsNullOrWhiteSpace(input)) return false;
            var s = input.Trim();
            if (s.StartsWith("#")) s = s[1..];
            if (s.Length != 6) return false;
            foreach (var c in s)
                if (!((c >= '0' && c <= '9') || (c >= 'A' && c <= 'F') || (c >= 'a' && c <= 'f')))
                    return false;
            color = "#" + s.ToUpperInvariant();
            return true;
        }

        private static (Dictionary<string, string> Result, string Error) ParseOptionColors(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return (new Dictionary<string, string>(), null);

            var result = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            foreach (var part in input.Split(';'))
            {
                var trimmed = part.Trim();
                if (string.IsNullOrEmpty(trimmed)) continue;
                var colonIndex = trimmed.LastIndexOf(':');
                if (colonIndex <= 0 || colonIndex >= trimmed.Length - 1)
                    return (null, $"Error: Invalid option_colors format. Expected 'Label:#RRGGBB;...' or 'value:#RRGGBB;...'.");
                var key = trimmed[..colonIndex].Trim();
                var colorPart = trimmed[(colonIndex + 1)..].Trim();
                if (string.IsNullOrEmpty(key))
                    return (null, $"Error: Invalid option_colors format. Expected 'Label:#RRGGBB;...' or 'value:#RRGGBB;...'.");
                if (!TryNormalizeHexColor(colorPart, out var hex))
                    return (null, $"Error: Invalid color '{colorPart}'. Expected hex color '#RRGGBB'.");
                if (result.ContainsKey(key))
                    return (null, $"Error: Duplicate option color key '{key}'.");
                result[key] = hex;
            }
            return (result, null);
        }

        // Returns a value-keyed dictionary (value.ToString() -> hex) or error.
        private static (Dictionary<string, string> Result, string Error) ResolveOptionColors(
            IEnumerable<(int value, string label)> options,
            Dictionary<string, string> colorsByKey,
            string optionSetName)
        {
            if (colorsByKey == null || colorsByKey.Count == 0)
                return (new Dictionary<string, string>(), null);

            var optList = options.ToList();
            var result = new Dictionary<string, string>();
            foreach (var (key, hex) in colorsByKey)
            {
                if (int.TryParse(key, out var intKey))
                {
                    // resolve by integer value
                    var match = optList.FirstOrDefault(o => o.value == intKey);
                    if (match.label == null && !optList.Any(o => o.value == intKey))
                        return (null, $"Error: Option color key '{key}' not found in '{optionSetName}'. Use action='detail' to see existing option labels and values.");
                    result[intKey.ToString()] = hex;
                }
                else
                {
                    // resolve by label (case-insensitive)
                    var match = optList.FirstOrDefault(o => o.label.Equals(key, StringComparison.OrdinalIgnoreCase));
                    if (match.label == null)
                        return (null, $"Error: Option color key '{key}' not found in '{optionSetName}'. Use action='detail' to see existing option labels and values.");
                    result[match.value.ToString()] = hex;
                }
            }
            return (result, null);
        }

        /// <summary>
        /// Parses options that may be label-only ('Draft;Confirmed') or 'value:label' pairs.
        /// For label-only entries, values are assigned starting from startValue and incrementing by 1.
        /// Returns null if a 'value:label' entry has an invalid format.
        /// </summary>
        public static List<(int value, string label)> ParseOptionsWithAutoValue(string input, int startValue)
        {
            if (string.IsNullOrWhiteSpace(input))
                return [];

            var result = new List<(int value, string label)>();
            var parts = input.Split(';');
            var nextValue = startValue;

            foreach (var part in parts)
            {
                var trimmed = part.Trim();
                if (string.IsNullOrEmpty(trimmed)) continue;

                var colonIndex = trimmed.IndexOf(':');
                if (colonIndex > 0 && colonIndex < trimmed.Length - 1)
                {
                    // Explicit 'value:label' pair
                    var valuePart = trimmed.Substring(0, colonIndex).Trim();
                    var labelPart = trimmed.Substring(colonIndex + 1).Trim();
                    if (!int.TryParse(valuePart, out var explicitValue) || explicitValue < 0)
                        return null;
                    if (string.IsNullOrEmpty(labelPart))
                        return null;
                    result.Add((explicitValue, labelPart));
                    if (explicitValue >= nextValue) nextValue = explicitValue + 1;
                }
                else if (colonIndex < 0)
                {
                    // Label-only — auto-assign next value
                    result.Add((nextValue, trimmed));
                    nextValue++;
                }
                else
                {
                    return null; // malformed
                }
            }

            return result;
        }

        private static string DerivePortalOptionSetName(string displayName, string publisherPrefix)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                throw new ArgumentException("displayName is required.", nameof(displayName));
            if (string.IsNullOrWhiteSpace(publisherPrefix))
                throw new ArgumentException("publisherPrefix is required.", nameof(publisherPrefix));

            var compactName = System.Text.RegularExpressions.Regex
                .Replace(displayName.Trim().ToLowerInvariant(), @"[^a-z0-9]+", "");
            if (string.IsNullOrWhiteSpace(compactName))
                throw new ArgumentException($"Display name '{displayName}' contains no valid characters for a global choice name.", nameof(displayName));

            return $"{publisherPrefix.Trim().ToLowerInvariant()}_{compactName}";
        }

        private bool OptionSetExists(string name)
        {
            try
            {
                _serviceClient.Execute(new RetrieveOptionSetRequest { Name = name });
                return true;
            }
            catch
            {
                return false;
            }
        }

        private bool PublishOptionSet(string optionSetName)
        {
            var safeName = System.Security.SecurityElement.Escape(optionSetName);
            var publishXml = $"<importexportxml><optionsets><optionset>{safeName}</optionset></optionsets></importexportxml>";
            _serviceClient.Execute(new PublishXmlRequest { ParameterXml = publishXml });
            return true;
        }

        /// <summary>
        /// Parse "value:label;value:label" format into list of (int value, string label) tuples.
        /// Returns null if format is invalid. Returns empty list if input is empty/whitespace.
        /// </summary>
        public static List<(int value, string label)> ParseOptions(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return [];

            var result = new List<(int value, string label)>();
            var pairs = input.Split(';');

            foreach (var pair in pairs)
            {
                var trimmed = pair.Trim();
                if (string.IsNullOrEmpty(trimmed)) continue;

                var colonIndex = trimmed.IndexOf(':');
                if (colonIndex <= 0 || colonIndex >= trimmed.Length - 1)
                    return null; // invalid format

                var valuePart = trimmed.Substring(0, colonIndex).Trim();
                var labelPart = trimmed.Substring(colonIndex + 1).Trim();

                if (!int.TryParse(valuePart, out var value) || value < 0)
                    return null; // invalid value

                if (string.IsNullOrEmpty(labelPart))
                    return null; // empty label

                result.Add((value, labelPart));
            }

            return result;
        }

        /// <summary>
        /// Parse comma-separated integer values for remove_options.
        /// Returns null if format is invalid. Returns empty list if input is empty/whitespace.
        /// </summary>
        public static List<(string oldLabel, string newLabel)> ParseLabelPairs(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return [];

            var result = new List<(string, string)>();
            foreach (var part in input.Split(';'))
            {
                var trimmed = part.Trim();
                if (string.IsNullOrEmpty(trimmed)) continue;
                var colonIndex = trimmed.IndexOf(':');
                if (colonIndex <= 0 || colonIndex >= trimmed.Length - 1)
                    return null;
                var oldLabel = trimmed[..colonIndex].Trim();
                var newLabel = trimmed[(colonIndex + 1)..].Trim();
                if (string.IsNullOrEmpty(oldLabel) || string.IsNullOrEmpty(newLabel))
                    return null;
                result.Add((oldLabel, newLabel));
            }
            return result;
        }

        public static List<string> ParseLabelList(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return [];

            var result = new List<string>();
            foreach (var part in input.Split(','))
            {
                var trimmed = part.Trim();
                if (string.IsNullOrEmpty(trimmed)) continue;
                result.Add(trimmed);
            }
            return result.Count > 0 ? result : null;
        }

        public static List<int> ParseRemoveValues(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return [];

            var result = new List<int>();
            var parts = input.Split(',');

            foreach (var part in parts)
            {
                var trimmed = part.Trim();
                if (string.IsNullOrEmpty(trimmed)) continue;

                if (!int.TryParse(trimmed, out var value))
                    return null; // invalid format

                result.Add(value);
            }

            return result;
        }

        private static CallToolResult StructuredResult(string text, ManageChoiceResult structured) => new()
        {
            Content = [new TextContentBlock { Text = text }],
            StructuredContent = JsonSerializer.SerializeToElement(structured)
        };

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };

        private static CallToolResult DryRunResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = $"[DRY-RUN] {message}\nNo changes were made." }]
        };

        #endregion
    }
}
