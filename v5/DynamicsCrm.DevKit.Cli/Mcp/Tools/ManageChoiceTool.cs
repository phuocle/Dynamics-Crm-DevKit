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
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

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
            Destructive = true, ReadOnly = false, Idempotent = false),
        Description(
            "Global option sets (choices/picklists) — list/detail/create/update. Required: list=(none); detail=optionset_name; create=optionset_name+display_name+options; update=optionset_name+at least one of (display_name, description, add_options, update_options, remove_options). For local picklists use get_tables. Auto-published unless auto_publish=false.\n\n" +

            "OPTION VALUES: solution_name is REQUIRED for create and for label-only add_options — if not provided by the user, ask; never search or guess. Pass options/add_options as label-only ('Draft;Confirmed'). For update_options use 'OldLabel:NewLabel;...' pairs. For remove_options use label names ('Draft,Cancelled') — labels are resolved to values automatically.\n\n" +

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
                "Logical name. Required except list."
            )] string optionset_name = "",
            [Description(
                "Required for create. Optional for update."
            )] string display_name = "",
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
                "Publish after changes."
            )] bool auto_publish = true)
        {
            if (string.IsNullOrWhiteSpace(action))
                return ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'create', 'update'.");

            var normalizedAction = action.Trim().ToLowerInvariant();

            try
            {
                return normalizedAction switch
                {
                    "list" => HandleList(),
                    "detail" => HandleDetail(optionset_name),
                    "create" => HandleCreate(optionset_name, display_name, description, options, solution_name, auto_publish),
                    "update" => HandleUpdate(optionset_name, display_name, description, add_options, update_options, remove_options, solution_name, auto_publish),
                    _ => ErrorResult($"Error: Invalid action '{action}'. Valid values: 'list', 'detail', 'create', 'update'.")
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: Failed to manage global option set: {ex.Message}");
            }
        }

        #region Action Handlers

        private CallToolResult HandleList()
        {
            var response = (RetrieveAllOptionSetsResponse)_serviceClient.Execute(new RetrieveAllOptionSetsRequest());
            var sorted = response.OptionSetMetadata.OrderBy(x => x.Name);
            return SuccessResult(CompactFormatter.FormatOptionSetList(sorted));
        }

        private CallToolResult HandleDetail(string optionsetName)
        {
            if (string.IsNullOrWhiteSpace(optionsetName))
                return ErrorResult("Error: optionset_name is required for 'detail'. " +
                    "Use action='list' to see all available global option sets.");

            var name = optionsetName.Trim().ToLowerInvariant();

            try
            {
                var response = (RetrieveOptionSetResponse)_serviceClient.Execute(new RetrieveOptionSetRequest
                {
                    Name = name
                });
                return SuccessResult(CompactFormatter.FormatOptionSetDetail(response.OptionSetMetadata));
            }
            catch (Exception)
            {
                return ErrorResult($"Error: Could not find global option set '{name}'. " +
                       "Make sure you use the logical name (Name column), not the display name. " +
                       "Call manage_choice with action='list' to see all available option sets.");
            }
        }

        private CallToolResult HandleCreate(string optionsetName, string displayName, string description,
            string options, string solutionName, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(optionsetName))
                return ErrorResult("Error: optionset_name is required for 'create'.");

            if (string.IsNullOrWhiteSpace(displayName))
                return ErrorResult("Error: display_name is required for 'create'.");

            if (string.IsNullOrWhiteSpace(options))
                return ErrorResult("Error: options is required for 'create'. " +
                    "Provide label-only values separated by semicolons (e.g. 'Draft;Confirmed;Paid'). solution_name is also required.");

            var name = optionsetName.Trim().ToLowerInvariant();

            // solution_name is required for create — code-level enforcement, not just AI description
            if (string.IsNullOrWhiteSpace(solutionName))
                return ErrorResult(
                    "Error: solution_name is required for 'create'. " +
                    "Provide the solution unique name or display name so the publisher's customizationoptionvalueprefix can be resolved and option integer values can be assigned correctly.");

            var solResult = SolutionResolverHelper.Resolve(_serviceClient, solutionName);
            if (!solResult.IsSuccess)
                return ErrorResult($"Error: {solResult.Error}");

            var parsedOptions = ParseOptionsWithAutoValue(options, solResult.OptionValuePrefix * 10000);

            if (parsedOptions == null)
                return ErrorResult("Error: Invalid options format. " +
                    "Provide label-only values separated by semicolons (e.g. 'Draft;Confirmed;Paid').");

            if (parsedOptions.Count == 0)
                return ErrorResult("Error: At least one option is required for 'create'.");

            // Check if already exists
            if (OptionSetExists(name))
                return ErrorResult($"Error: Global option set '{name}' already exists. " +
                    "Use action='update' to modify it.");

            if (_options.DryRun)
                return DryRunResult($"Would CREATE global option set '{name}' with {parsedOptions.Count} option(s).");

            var optionSetMetadata = new OptionSetMetadata
            {
                Name = name,
                DisplayName = new Label(displayName.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient)),
                IsGlobal = true,
                OptionSetType = OptionSetType.Picklist
            };

            if (!string.IsNullOrWhiteSpace(description))
                optionSetMetadata.Description = new Label(description.Trim(), McpHelper.GetBaseLanguageCode(_serviceClient));

            foreach (var (value, label) in parsedOptions)
            {
                optionSetMetadata.Options.Add(new OptionMetadata(new Label(label, McpHelper.GetBaseLanguageCode(_serviceClient)), value));
            }

            var createResp = (CreateOptionSetResponse)_serviceClient.Execute(
                new CreateOptionSetRequest { OptionSet = optionSetMetadata });

            string solWarning = null;
            if (!string.IsNullOrWhiteSpace(solutionName))
            {
                try
                {
                    var solName = solResult.IsSuccess ? solResult.UniqueName : solutionName.Trim();
                    _serviceClient.Execute(new AddSolutionComponentRequest
                    {
                        AddRequiredComponents = false,
                        ComponentType = 9, // OptionSet
                        ComponentId = createResp.OptionSetId,
                        SolutionUniqueName = solName
                    });
                }
                catch (Exception ex)
                {
                    solWarning = $"Warning: Created but failed to add to solution '{solutionName}': {ex.Message}";
                }
            }

            var published = autoPublish && Publish();

            var sb = new StringBuilder(256);
            sb.AppendLine($"[Choice] Created: {name}");
            sb.AppendLine($"DisplayName: {displayName.Trim()}");
            if (!string.IsNullOrWhiteSpace(description))
                sb.AppendLine($"Description: {description.Trim()}");
            sb.AppendLine($"Options: {parsedOptions.Count}");
            foreach (var (value, label) in parsedOptions)
                sb.AppendLine($"  {value}: {label}");
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");
            if (solWarning != null)
                sb.AppendLine(solWarning);

            return SuccessResult(sb.ToString());
        }

        private CallToolResult HandleUpdate(string optionsetName, string displayName, string description,
            string addOptions, string updateOptions, string removeOptionValues, string solutionName, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(optionsetName))
                return ErrorResult("Error: optionset_name is required for 'update'.");

            var name = optionsetName.Trim().ToLowerInvariant();

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

            if (!hasDisplayName && !hasDescription && !hasAdd && !hasUpdate && !hasRemove)
                return ErrorResult("Error: No changes specified. Provide at least one of: " +
                    "display_name, description, add_options, update_options, remove_options.");

            // Verify it exists and fetch options for label→value resolution
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

            var published = autoPublish && Publish();
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return SuccessResult(sb.ToString());
        }

        #endregion

        #region Helpers



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

        private bool Publish()
        {
            McpHelper.FireAndForgetPublishAll(_serviceClient);
            return true; // publishing is running in background
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

        private static CallToolResult SuccessResult(string text) => new()
        {
            Content = [new TextContentBlock { Text = text }]
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
