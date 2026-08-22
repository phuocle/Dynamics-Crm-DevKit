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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ManageChoiceTool : McpToolBase
    {
        private readonly ServiceClient _serviceClient;
        private readonly McpDryRunOptions _options;
        private readonly McpExecutionContext _context;

        public ManageChoiceTool(ServiceClient serviceClient, McpDryRunOptions options, McpExecutionContext context)
        {
            _serviceClient = serviceClient;
            _options = options ?? throw new ArgumentNullException(nameof(options));
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [McpServerTool(Name = "manage_choice",
            Title = "Manage global option sets (choices)",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(ManageChoiceResult)),
        Description(
            "Manage GLOBAL option sets (choices). Actions: 'list', 'detail' (read-only) | 'create', 'update' (mutations). For local picklists → manage_column. solution_name is REQUIRED for create and label-only add_options — ask the user if missing, never guess. If needsWait=true, wait pollAfterSeconds before detail.\n\n" +
            "WHEN TO USE:\n" +
            "- Create a global choice with options, or update options (add/rename/remove/recolor), display name, description\n" +
            "- Inspect a global choice before binding it to a column\n\n" +
            "RELATED TOOLS:\n" +
            "- manage_column → local picklists; bind a global choice to a column\n" +
            "- get_tables → see which columns use a choice\n" +
            "- publish_customizations → batch publish after multiple metadata changes")]
        public CallToolResult manage_choice(
            [Description("'list', 'detail', 'create', 'update'.")] string action = "",
            [Description("Logical or display name. Required: detail/update. Optional: create (auto-derived). Display Name matched first.")] string optionset_name = "",
            [Description("Required: create. Optional: update (rename). For list, prefer filter=.")] string display_name = "",
            [Description("'list' only. Contains filter on logical+display name.")] string filter = "",
            [Description("Optional: create/update. Localized description.")] string description = "",
            [Description("'create' only. 'Draft;Confirmed' (auto-value) or 'value:label'. solution_name required.")] string options = "",
            [Description("'update' only. 'NewLabel' (needs solution_name) or 'value:label'. Existing labels skipped.")] string add_options = "",
            [Description("'update' only. 'OldLabel:NewLabel;...' pairs.")] string update_options = "",
            [Description("'update' only. 'Label1,Label2'. IRREVERSIBLE.")] string remove_options = "",
            [Description("Required: create + label-only add_options. Solution unique/display name.")] string solution_name = "",
            [Description("Optional: create/update. 'Label:#RRGGBB;...' or 'value:#RRGGBB;...'.")] string option_colors = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(action))
                    return Error("action is required.", "Valid values: 'list', 'detail', 'create', 'update'.");

                var normalizedAction = action.Trim().ToLowerInvariant();

                return normalizedAction switch
                {
                    "list" => HandleList(!string.IsNullOrWhiteSpace(filter) ? filter : display_name),
                    "detail" => HandleDetail(optionset_name),
                    "create" => HandleCreate(optionset_name, display_name, description, options, solution_name, option_colors),
                    "update" => HandleUpdateSafe(optionset_name, display_name, description, add_options, update_options, remove_options, solution_name, option_colors),
                    _ => Error($"Invalid action '{action}'.", "Valid values: 'list', 'detail', 'create', 'update'.")
                };
            }
            catch (Exception ex)
            {
                return ThrowException(ex);
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
            var summary = string.IsNullOrWhiteSpace(filter)
                ? $"{items.Count} global option set(s)."
                : $"{items.Count} global option set(s) matching '{filter}'.";
            return Success(summary, new ManageChoiceResult
            {
                Action = "list",
                TotalCount = items.Count,
                Items = items.Count > 0 ? items : null,
                Status = "ok"
            });
        }

        private CallToolResult HandleUpdateSafe(string optionsetName, string displayName, string description,
            string addOptions, string updateOptions, string removeOptionValues, string solutionName, string optionColors)
        {
            if (string.IsNullOrWhiteSpace(optionsetName))
                return Error("optionset_name is required for 'update'.");

            if (!string.IsNullOrWhiteSpace(removeOptionValues) && ParseLabelList(removeOptionValues) == null)
                return Error("Invalid remove_options format. Expected comma-separated label names (e.g., 'Draft,Cancelled').");

            if (!string.IsNullOrWhiteSpace(addOptions) && string.IsNullOrWhiteSpace(solutionName) && ParseOptions(addOptions) == null)
                return Error("Invalid add_options format. Use label-only 'NewLabel' (requires solution_name) e.g. 'Pending;Archived'.");

            if (string.IsNullOrWhiteSpace(displayName) && string.IsNullOrWhiteSpace(description) &&
                string.IsNullOrWhiteSpace(addOptions) && string.IsNullOrWhiteSpace(updateOptions) &&
                string.IsNullOrWhiteSpace(removeOptionValues) && string.IsNullOrWhiteSpace(optionColors))
                return Error("No changes specified. Provide at least one of: display_name, description, add_options, update_options, remove_options, option_colors.");

            if (!TryResolveToLogicalName(optionsetName, out var name, out var resolveErr))
                return Error(resolveErr.Split("\r\n")[0], "Use manage_choice(action='list') to see all available global option sets.");

            var existingMeta = RetrieveOptionSetMetadata(name);
            if (existingMeta == null)
                return Error($"Global option set '{name}' not found. Use action='create' to create it, or action='list' to see all available option sets.");

            var hasDisplayName = !string.IsNullOrWhiteSpace(displayName);
            var hasDescription = !string.IsNullOrWhiteSpace(description);
            var hasColors = !string.IsNullOrWhiteSpace(optionColors);

            var addStartValue = 0;
            if (!string.IsNullOrWhiteSpace(addOptions) && !string.IsNullOrWhiteSpace(solutionName))
            {
                var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
                if (!solResult.IsSuccess)
                    return Error(solResult.Error.Split("\r\n")[0], "Use get_solution_components to find valid solution names.");
                var maxExisting = existingMeta.Options != null && existingMeta.Options.Count > 0
                    ? existingMeta.Options.Max(o => o.Value ?? 0)
                    : solResult.OptionValuePrefix * 10000 - 1;
                addStartValue = maxExisting + 1;
            }

            var parsedAddRequest = !string.IsNullOrWhiteSpace(addOptions) && !string.IsNullOrWhiteSpace(solutionName)
                ? ParseOptionsWithAutoValue(addOptions, addStartValue)
                : ParseOptions(addOptions);
            var parsedUpdateLabels = ParseLabelPairs(updateOptions);
            var parsedRemoveLabels = ParseLabelList(removeOptionValues);

            if (!string.IsNullOrWhiteSpace(addOptions) && parsedAddRequest == null)
                return Error("Invalid add_options format. Use label-only 'NewLabel' (requires solution_name) e.g. 'Pending;Archived'.");
            if (!string.IsNullOrWhiteSpace(updateOptions) && parsedUpdateLabels == null)
                return Error("Invalid update_options format. Expected 'OldLabel:NewLabel;...' (e.g., 'Draft:Open;Paid:Completed').");
            if (!string.IsNullOrWhiteSpace(removeOptionValues) && parsedRemoveLabels == null)
                return Error("Invalid remove_options format. Expected comma-separated label names (e.g., 'Draft,Cancelled').");

            var hasAddRequest = parsedAddRequest != null && parsedAddRequest.Count > 0;
            var hasUpdate = parsedUpdateLabels != null && parsedUpdateLabels.Count > 0;
            var hasRemove = parsedRemoveLabels != null && parsedRemoveLabels.Count > 0;
            if (!hasDisplayName && !hasDescription && !hasAddRequest && !hasUpdate && !hasRemove && !hasColors)
                return Error("No changes specified. Provide at least one of: display_name, description, add_options, update_options, remove_options, option_colors.");

            var optionsToInsert = new List<(int value, string label)>();
            var optionsAlreadyExisted = new List<(int value, string label)>();
            if (hasAddRequest)
            {
                foreach (var opt in parsedAddRequest)
                {
                    var existingByLabel = FindOptionByLabel(existingMeta, opt.label);
                    if (existingByLabel?.Value != null)
                    {
                        optionsAlreadyExisted.Add((existingByLabel.Value.Value, opt.label));
                        continue;
                    }
                    if (existingMeta.Options.Any(o => o.Value == opt.value))
                        return Error($"Option value '{opt.value}' already exists in '{name}'. Use a different explicit value or omit the value so it can be auto-assigned.");
                    optionsToInsert.Add(opt);
                }
            }

            var parsedUpdate = new List<(int value, string newLabel)>();
            if (hasUpdate)
            {
                foreach (var (oldLabel, newLabel) in parsedUpdateLabels)
                {
                    var match = FindOptionByLabel(existingMeta, oldLabel);
                    if (match?.Value == null)
                        return Error($"Option label '{oldLabel}' not found in '{name}'. Use action='detail' to see existing option labels.");
                    parsedUpdate.Add((match.Value.Value, newLabel));
                }
            }

            var parsedRemove = new List<int>();
            if (hasRemove)
            {
                foreach (var label in parsedRemoveLabels)
                {
                    var match = FindOptionByLabel(existingMeta, label);
                    if (match?.Value == null)
                        return Error($"Option label '{label}' not found in '{name}'. Use action='detail' to see existing option labels.");
                    parsedRemove.Add(match.Value.Value);
                }
            }

            var projected = BuildProjectedOptions(existingMeta, parsedRemove, parsedUpdate, optionsToInsert);
            Dictionary<string, string> colorMap;
            if (hasColors)
            {
                var (colorRaw, colorParseError) = ParseOptionColors(optionColors);
                if (colorParseError != null)
                    return Error(colorParseError);
                var (resolvedColors, resolveError) = ResolveOptionColors(projected, colorRaw, name);
                if (resolveError != null)
                    return Error(resolveError);
                colorMap = resolvedColors;
            }
            else
            {
                colorMap = new Dictionary<string, string>();
            }

            if (_options.DryRun)
            {
                var parts = new List<string>();
                if (hasDisplayName) parts.Add("displayName");
                if (hasDescription) parts.Add("description");
                if (optionsToInsert.Count > 0) parts.Add($"add {optionsToInsert.Count} option(s)");
                if (optionsAlreadyExisted.Count > 0) parts.Add($"{optionsAlreadyExisted.Count} option(s) already exist");
                if (hasUpdate) parts.Add($"update {parsedUpdate.Count} label(s)");
                if (hasRemove) parts.Add($"remove {parsedRemove.Count} option(s)");
                if (hasColors) parts.Add("colors");
                return DryRun($"Would UPDATE global option set '{name}': {string.Join(", ", parts)}.", new ManageChoiceResult
                {
                    Action = "update",
                    OptionSetName = name,
                    DisplayName = hasDisplayName ? displayName.Trim() : null,
                    Description = hasDescription ? description.Trim() : null,
                    SolutionName = string.IsNullOrWhiteSpace(solutionName) ? null : solutionName.Trim(),
                    Status = "not_executed",
                    OptionsAdded = optionsToInsert.Count > 0 ? optionsToInsert.Select(x => x.label).ToList() : null,
                    OptionsAlreadyExisted = optionsAlreadyExisted.Count > 0 ? optionsAlreadyExisted.Select(x => x.label).ToList() : null,
                    OptionsRenamed = parsedUpdate.Count > 0 ? parsedUpdate.Select(x => x.newLabel).ToList() : null,
                    OptionsRemoved = parsedRemoveLabels?.Count > 0 ? parsedRemoveLabels.ToList() : null,
                    OptionsColored = colorMap.Count > 0 ? colorMap.Keys.ToList() : null,
                    Published = false
                });
            }

            var metadataMutated = false;
            var coloredSummary = new List<string>();
            var colorAppliedValues = new HashSet<int>();

            if (hasDisplayName || hasDescription)
            {
                var updateMeta = new OptionSetMetadata { Name = name, IsGlobal = true };
                if (hasDisplayName)
                    updateMeta.DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                if (hasDescription)
                    updateMeta.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));
                DataverseMutationExecutor.Execute(_context, _serviceClient, new UpdateOptionSetRequest { OptionSet = updateMeta });
                metadataMutated = true;
            }

            foreach (var value in parsedRemove)
            {
                var deleteReq = InitializeRequest(new DeleteOptionValueRequest());
                deleteReq.OptionSetName = name;
                deleteReq.Value = value;
                DataverseMutationExecutor.Execute(_context, _serviceClient, deleteReq);
                metadataMutated = true;
            }

            foreach (var (value, label) in optionsToInsert)
            {
                var insertReq = InitializeRequest(new InsertOptionValueRequest());
                insertReq.OptionSetName = name;
                insertReq.Value = value;
                insertReq.Label = new Label(label, McpHelper.GetBaseLanguageCode(_serviceClient));
                if (colorMap.TryGetValue(value.ToString(), out var insertColor))
                {
                    SetRequestParameter(insertReq, "Color", insertColor);
                    colorAppliedValues.Add(value);
                    coloredSummary.Add($"{value}:{label}:{insertColor}");
                }
                DataverseMutationExecutor.Execute(_context, _serviceClient, insertReq);
                metadataMutated = true;
            }

            foreach (var (_, newLabel) in parsedUpdateLabels ?? [])
            {
                var (value, _) = parsedUpdate.First(t => t.newLabel == newLabel);
                var updateReq = InitializeRequest(new UpdateOptionValueRequest());
                updateReq.OptionSetName = name;
                updateReq.Value = value;
                updateReq.Label = new Label(newLabel, McpHelper.GetBaseLanguageCode(_serviceClient));
                updateReq.MergeLabels = true;
                if (colorMap.TryGetValue(value.ToString(), out var updateColor) && !ColorEquals(GetOptionColor(existingMeta, value), updateColor))
                {
                    SetRequestParameter(updateReq, "Color", updateColor);
                    colorAppliedValues.Add(value);
                    coloredSummary.Add($"{value}:{newLabel}:{updateColor}");
                }
                DataverseMutationExecutor.Execute(_context, _serviceClient, updateReq);
                metadataMutated = true;
            }

            foreach (var kv in colorMap)
            {
                var val = int.Parse(kv.Key);
                if (colorAppliedValues.Contains(val) || ColorEquals(GetOptionColor(existingMeta, val), kv.Value))
                    continue;

                var lbl = projected.FirstOrDefault(p => p.value == val).label ?? kv.Key;
                var colorReq = InitializeRequest(new UpdateOptionValueRequest());
                colorReq.OptionSetName = name;
                colorReq.Value = val;
                colorReq.MergeLabels = true;
                SetRequestParameter(colorReq, "Color", kv.Value);
                DataverseMutationExecutor.Execute(_context, _serviceClient, colorReq);
                coloredSummary.Add($"{val}:{lbl}:{kv.Value}");
                metadataMutated = true;
            }

            var metadataVerified = true;
            if (metadataMutated)
            {
                MetadataOperationWaitHelper.WaitAfterMutation();
                var verifiedMeta = RetrieveOptionSetMetadata(name);
                var verifyErrors = VerifyChoiceUpdate(verifiedMeta, displayName, description, parsedAddRequest,
                    parsedUpdateLabels, parsedRemoveLabels, colorMap);
                if (verifyErrors.Count > 0)
                    return Error("Choice metadata update could not be verified after waiting. " + string.Join(" ", verifyErrors));
            }

            var requiresPublish = metadataMutated && (hasDisplayName || hasDescription || optionsToInsert.Count > 0 || hasUpdate || hasColors);
            var published = requiresPublish && PublishHelper.PublishOptionSet(_context, _serviceClient, name);

            // Removed choices are automatically published by Dataverse — no PublishXml needed for remove-only updates.
            var changeParts = new List<string>();
            if (hasDisplayName) changeParts.Add("display name");
            if (hasDescription) changeParts.Add("description");
            if (optionsToInsert.Count > 0) changeParts.Add($"{optionsToInsert.Count} added");
            if (optionsAlreadyExisted.Count > 0) changeParts.Add($"{optionsAlreadyExisted.Count} already existed");
            if (hasUpdate) changeParts.Add($"{parsedUpdate.Count} renamed");
            if (hasRemove) changeParts.Add($"{parsedRemove.Count} removed");
            if (hasColors) changeParts.Add(coloredSummary.Count > 0 ? $"{coloredSummary.Count} colored" : "colors unchanged");
            if (published) changeParts.Add("published");
            var summary = changeParts.Count > 0
                ? $"Updated global option set '{name}': {string.Join(", ", changeParts)}."
                : $"Updated global option set '{name}': no changes.";
            if (published)
                summary += $" Wait {MetadataOperationWaitHelper.DefaultWaitSeconds}s before readback.";

            return Success(summary, BuildChoiceUpdateResult(name, displayName, hasDisplayName,
                optionsToInsert, optionsAlreadyExisted, parsedUpdateLabels, parsedRemoveLabels, coloredSummary,
                published, metadataVerified, metadataMutated ? "updated" : "unchanged", null, needsWait: published));
        }

        private CallToolResult HandleDetail(string optionsetName)
        {
            if (string.IsNullOrWhiteSpace(optionsetName))
                return Error("optionset_name is required for 'detail'.",
                    "Use manage_choice(action='list') to see all available global option sets.");

            optionsetName = optionsetName.Trim().ToLowerInvariant();

            var resolved = DisplayNameFirstResolver.ResolveGlobalOptionSet(_serviceClient, optionsetName, "manage_choice");
            if (!resolved.IsSuccess)
                return Error(resolved.Error.Split("\r\n")[0], "Use manage_choice(action='list') to see all available global option sets.");

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
            var display = meta.DisplayName?.UserLocalizedLabel?.Label;
            var optionInfo = meta is BooleanOptionSetMetadata
                ? "boolean (true/false)"
                : $"{options?.Count ?? 0} option(s)";
            var summary = string.IsNullOrWhiteSpace(display)
                ? $"'{meta.Name}': {optionInfo}."
                : $"'{meta.Name}' ({display}): {optionInfo}.";
            return Success(summary, new ManageChoiceResult
            {
                Action = "detail",
                OptionSetName = meta.Name,
                DisplayName = meta.DisplayName?.UserLocalizedLabel?.Label ?? "",
                Description = meta.Description?.UserLocalizedLabel?.Label,
                OptionCount = options?.Count,
                Options = options?.Count > 0 ? options : null,
                Status = "ok"
            });
        }

        private CallToolResult HandleCreate(string optionsetName, string displayName, string description,
            string options, string solutionName, string optionColors)
        {
            if (string.IsNullOrWhiteSpace(displayName))
                return Error("display_name is required for 'create'.");

            if (string.IsNullOrWhiteSpace(options))
                return Error("options is required for 'create'. " +
                    "Provide label-only values separated by semicolons (e.g. 'Draft;Confirmed;Paid'). solution_name is also required.");

            // Early format validation (no Dataverse needed)
            if (ParseOptionsWithAutoValue(options, 0) == null)
                return Error("Invalid options format. " +
                    "Provide label-only values separated by semicolons (e.g. 'Draft;Confirmed;Paid').");

            var identityInput = string.IsNullOrWhiteSpace(optionsetName) ? displayName : optionsetName;
            var existingChoice = DisplayNameFirstResolver.ResolveGlobalOptionSet(_serviceClient, identityInput, "manage_choice");
            if (existingChoice.IsSuccess)
                return Error(
                    $"Global option set '{identityInput.Trim()}' already exists as '{existingChoice.Value.Name}' ({existingChoice.Value.DisplayName?.UserLocalizedLabel?.Label ?? ""}). " +
                    "Use action='update' to modify it.");
            if (existingChoice.Status == ResolveStatus.Ambiguous || existingChoice.Status == ResolveStatus.Error)
                return Error(existingChoice.Error.Split("\r\n")[0], "Use manage_choice(action='list') to see all available global option sets.");

            var name = optionsetName.Trim().ToLowerInvariant();

            // solution_name is required for create — code-level enforcement, not just AI description
            if (string.IsNullOrWhiteSpace(solutionName))
                return Error(
                    "solution_name is required for 'create'.",
                    "Provide the solution unique name or display name so the publisher's customizationoptionvalueprefix can be resolved and option integer values can be assigned correctly.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
            if (!solResult.IsSuccess)
                return Error(solResult.Error.Split("\r\n")[0], "Use get_solution_components to find valid solution names.");

            var publisherPrefix = solResult.Prefix.ToLowerInvariant();

            if (string.IsNullOrWhiteSpace(name))
            {
                name = DerivePortalOptionSetName(displayName, publisherPrefix);
            }
            else if (!name.StartsWith(publisherPrefix + "_", StringComparison.OrdinalIgnoreCase))
            {
                var suggested = DerivePortalOptionSetName(displayName, publisherPrefix);
                return Error(
                    $"optionset_name '{name}' does not start with the solution publisher prefix '{publisherPrefix}_'.",
                    $"Use '{suggested}' or omit optionset_name to auto-derive it.");
            }

            var parsedOptions = ParseOptionsWithAutoValue(options, solResult.OptionValuePrefix * 10000);

            if (parsedOptions == null)
                return Error("Invalid options format. " +
                    "Provide label-only values separated by semicolons (e.g. 'Draft;Confirmed;Paid').");

            if (parsedOptions.Count == 0)
                return Error("At least one option is required for 'create'.");

            // Parse and validate option_colors
            Dictionary<string, string> colorMap = null;
            if (!string.IsNullOrWhiteSpace(optionColors))
            {
                var (parsed, colorError) = ParseOptionColors(optionColors);
                if (colorError != null)
                    return Error(colorError);
                var (resolved, resolveError) = ResolveOptionColors(parsedOptions, parsed, name);
                if (resolveError != null)
                    return Error(resolveError);
                colorMap = resolved;
            }

            if (_options.DryRun)
                return DryRun($"Would CREATE global option set '{name}' with {parsedOptions.Count} option(s).", new ManageChoiceResult
                {
                    Action = "create",
                    OptionSetName = name,
                    DisplayName = displayName.Trim(),
                    Description = string.IsNullOrWhiteSpace(description) ? null : description.Trim(),
                    OptionCount = parsedOptions.Count,
                    Options = parsedOptions.Select(x => new ChoiceOptionItem { Label = x.label, Value = x.value }).ToList(),
                    SolutionName = solutionName.Trim(),
                    CreateMode = "metadata",
                    IsAddToSolution = true,
                    AddToSolutionMethod = "SolutionUniqueName",
                    Status = "not_executed",
                    Published = false
                });

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

            // Wrap create in retry to handle lock contention
            CreateOptionSetResponse createResp = null;
            var createSuccess = MetadataRetryHelper.RetryOnLockContention(() =>
            {
                createResp = (CreateOptionSetResponse)DataverseMutationExecutor.Execute(_context, _serviceClient,
                    new CreateOptionSetRequest { OptionSet = optionSetMetadata });
            }, $"create global option set '{name}'");

            if (!createSuccess)
            {
                return Error(
                    $"Failed to create global option set '{name}' after multiple retry attempts.\n" +
                    $"Reason: Lock contention or metadata cache not ready.\n" +
                    $"Action: Wait 30 seconds and retry manually.");
            }

            var addResult = SolutionComponentCreateHelper.AddExistingComponent(
                _context, _serviceClient,
                createResp.OptionSetId,
                9,
                solResult.IsSuccess ? solResult.UniqueName : solutionName.Trim());
            string solWarning = null;
            if (!string.IsNullOrWhiteSpace(addResult.AddToSolutionWarning))
                solWarning = $"Warning: Created but failed to add to solution '{solutionName}': {addResult.AddToSolutionWarning}";

            // New choice metadata is automatically published by Dataverse — no PublishXml needed.
            var summary = $"Created global option set '{name}' with {parsedOptions.Count} option(s).";
            if (solWarning != null)
                summary += $" Not added to solution '{solutionName.Trim()}' (see solutionWarning).";

            return Success(summary, new ManageChoiceResult
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
                Published = false,
                Status = "created"
            });
        }



        #endregion

        #region Helpers

        private OptionSetMetadata RetrieveOptionSetMetadata(string name)
        {
            var resp = (RetrieveOptionSetResponse)_serviceClient.Execute(new RetrieveOptionSetRequest { Name = name });
            return resp.OptionSetMetadata as OptionSetMetadata;
        }

        private static OptionMetadata FindOptionByLabel(OptionSetMetadata meta, string label)
        {
            if (meta?.Options == null || string.IsNullOrWhiteSpace(label))
                return null;

            return meta.Options.FirstOrDefault(o =>
                o.Label?.UserLocalizedLabel?.Label?.Equals(label, StringComparison.OrdinalIgnoreCase) == true);
        }

        private static List<(int value, string label)> BuildProjectedOptions(
            OptionSetMetadata existingMeta,
            List<int> removedValues,
            List<(int value, string newLabel)> renamedOptions,
            List<(int value, string label)> insertedOptions)
        {
            var result = existingMeta.Options
                .Where(o => o.Value.HasValue && (removedValues == null || !removedValues.Contains(o.Value.Value)))
                .Select(o =>
                {
                    var val = o.Value.Value;
                    var lbl = o.Label?.UserLocalizedLabel?.Label ?? "";
                    if (renamedOptions != null)
                    {
                        var renamed = renamedOptions.FirstOrDefault(t => t.value == val);
                        if (!string.IsNullOrWhiteSpace(renamed.newLabel))
                            lbl = renamed.newLabel;
                    }
                    return (value: val, label: lbl);
                }).ToList();

            if (insertedOptions != null && insertedOptions.Count > 0)
                result.AddRange(insertedOptions);

            return result;
        }

        private static string GetOptionColor(OptionSetMetadata meta, int value)
            => meta?.Options?.FirstOrDefault(o => o.Value == value)?.Color;

        private static bool ColorEquals(string left, string right)
            => string.Equals(NormalizeColor(left), NormalizeColor(right), StringComparison.OrdinalIgnoreCase);

        private static string NormalizeColor(string color)
            => string.IsNullOrWhiteSpace(color) ? "" : color.Trim();

        private static T InitializeRequest<T>(T request) where T : OrganizationRequest
        {
            if (request.Parameters == null)
                request.Parameters = new ParameterCollection();
            return request;
        }

        private static void SetRequestParameter(OrganizationRequest request, string key, object value)
        {
            InitializeRequest(request);
            request.Parameters[key] = value;
        }

        private static List<string> VerifyChoiceUpdate(
            OptionSetMetadata meta,
            string displayName,
            string description,
            List<(int value, string label)> requestedAdds,
            List<(string oldLabel, string newLabel)> requestedRenames,
            List<string> requestedRemoves,
            Dictionary<string, string> colorsByValue)
        {
            var errors = new List<string>();
            if (meta == null)
            {
                errors.Add("Option set metadata could not be read back.");
                return errors;
            }

            if (!string.IsNullOrWhiteSpace(displayName) &&
                !string.Equals(meta.DisplayName?.UserLocalizedLabel?.Label, displayName.Trim(), StringComparison.Ordinal))
                errors.Add($"Display name was not updated to '{displayName.Trim()}'.");

            if (!string.IsNullOrWhiteSpace(description) &&
                !string.Equals(meta.Description?.UserLocalizedLabel?.Label, description.Trim(), StringComparison.Ordinal))
                errors.Add("Description was not updated.");

            if (requestedAdds != null)
            {
                foreach (var (_, label) in requestedAdds)
                {
                    if (FindOptionByLabel(meta, label) == null)
                        errors.Add($"Option '{label}' was not found after update.");
                }
            }

            if (requestedRenames != null)
            {
                foreach (var (_, newLabel) in requestedRenames)
                {
                    if (FindOptionByLabel(meta, newLabel) == null)
                        errors.Add($"Renamed option '{newLabel}' was not found after update.");
                }
            }

            if (requestedRemoves != null)
            {
                foreach (var label in requestedRemoves)
                {
                    if (FindOptionByLabel(meta, label) != null)
                        errors.Add($"Removed option '{label}' still exists after update.");
                }
            }

            if (colorsByValue != null)
            {
                foreach (var kv in colorsByValue)
                {
                    if (!int.TryParse(kv.Key, out var value))
                        continue;
                    var actual = GetOptionColor(meta, value);
                    if (!ColorEquals(actual, kv.Value))
                        errors.Add($"Color for option value '{value}' was not updated to '{kv.Value}'.");
                }
            }

            return errors;
        }

        private static ManageChoiceResult BuildChoiceUpdateResult(
            string name,
            string displayName,
            bool hasDisplayName,
            List<(int value, string label)> optionsAdded,
            List<(int value, string label)> optionsAlreadyExisted,
            List<(string oldLabel, string newLabel)> optionsRenamed,
            List<string> optionsRemoved,
            List<string> optionsColored,
            bool published,
            bool metadataVerified,
            string status,
            string publishError,
            bool needsWait)
        {
            return new ManageChoiceResult
            {
                Action = "update",
                OptionSetName = name,
                DisplayName = hasDisplayName ? displayName.Trim() : null,
                OptionsAdded = optionsAdded != null && optionsAdded.Count > 0 ? optionsAdded.Select(p => $"{p.value}:{p.label}").ToList() : null,
                OptionsAlreadyExisted = optionsAlreadyExisted != null && optionsAlreadyExisted.Count > 0 ? optionsAlreadyExisted.Select(p => $"{p.value}:{p.label}").ToList() : null,
                OptionsRenamed = optionsRenamed != null && optionsRenamed.Count > 0 ? optionsRenamed.Select(p => $"{p.oldLabel}:{p.newLabel}").ToList() : null,
                OptionsRemoved = optionsRemoved != null && optionsRemoved.Count > 0 ? optionsRemoved : null,
                OptionsColored = optionsColored != null && optionsColored.Count > 0 ? optionsColored : null,
                Published = published,
                MetadataVerified = metadataVerified,
                NeedsWait = needsWait,
                WaitTool = needsWait ? "manage_choice" : null,
                PollAfterSeconds = needsWait ? MetadataOperationWaitHelper.DefaultWaitSeconds : null,
                ReadbackAllowed = needsWait ? false : null,
                NextAllowedActions = needsWait ? new List<string> { "manage_choice detail" } : null,
                WaitReason = needsWait ? "Wait for Dataverse metadata or publish propagation before readback." : null,
                PublishError = publishError,
                Status = status
            };
        }

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

            error = resolved.Error;
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
                    return (null, $"Invalid option_colors format. Expected 'Label:#RRGGBB;...' or 'value:#RRGGBB;...'.");
                var key = trimmed[..colonIndex].Trim();
                var colorPart = trimmed[(colonIndex + 1)..].Trim();
                if (string.IsNullOrEmpty(key))
                    return (null, $"Invalid option_colors format. Expected 'Label:#RRGGBB;...' or 'value:#RRGGBB;...'.");
                if (!TryNormalizeHexColor(colorPart, out var hex))
                    return (null, $"Invalid color '{colorPart}'. Expected hex color '#RRGGBB'.");
                if (result.ContainsKey(key))
                    return (null, $"Duplicate option color key '{key}'.");
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
                        return (null, $"Option color key '{key}' not found in '{optionSetName}'. Use action='detail' to see existing option labels and values.");
                    result[intKey.ToString()] = hex;
                }
                else
                {
                    // resolve by label (case-insensitive)
                    var match = optList.FirstOrDefault(o =>
                        !string.IsNullOrWhiteSpace(o.label) &&
                        o.label.Equals(key, StringComparison.OrdinalIgnoreCase));
                    if (string.IsNullOrWhiteSpace(match.label))
                        return (null, $"Option color key '{key}' not found in '{optionSetName}'. Use action='detail' to see existing option labels and values.");
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

        #endregion
    }
}
