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
            "Global option sets (choices/picklists) — list/detail/create/update. Required: list=(none); detail=optionset_name; create=optionset_name+display_name+options; update=optionset_name+at least one of (display_name, description, add_options, update_options, remove_option_values). For local picklists use get_tables. Auto-published unless auto_publish=false.\n\n" +

            "WHEN TO USE:\n" +
            "- Resolve integer \u2194 label for picklist fields in FetchXML / query results\n" +
            "- Create a global choice for upsert_column to reference\n" +
            "- Add, rename, or remove option values on an existing global choice\n\n" +

            "SAFETY:\n" +
            "- remove_option_values is destructive and cannot be undone")]
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
                "Create only. 'value:label;...' pairs (e.g. '100000000:Active;100000001:Inactive'). Values: integer ≥ 0."
            )] string options = "",
            [Description(
                "Update only. 'value:label;...' pairs to add."
            )] string add_options = "",
            [Description(
                "Update only. 'value:newLabel;...' pairs to rename."
            )] string update_options = "",
            [Description(
                "Update only. Comma-separated values to remove. Irreversible."
            )] string remove_option_values = "",
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
                    "create" => HandleCreate(optionset_name, display_name, description, options, auto_publish),
                    "update" => HandleUpdate(optionset_name, display_name, description, add_options, update_options, remove_option_values, auto_publish),
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
            string options, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(optionsetName))
                return ErrorResult("Error: optionset_name is required for 'create'.");

            if (string.IsNullOrWhiteSpace(displayName))
                return ErrorResult("Error: display_name is required for 'create'.");

            if (string.IsNullOrWhiteSpace(options))
                return ErrorResult("Error: options is required for 'create'. " +
                    "Format: 'value:label;value:label' (e.g., '100000000:Active;100000001:Inactive').");

            var name = optionsetName.Trim().ToLowerInvariant();
            var parsedOptions = ParseOptions(options);
            if (parsedOptions == null)
                return ErrorResult("Error: Invalid options format. " +
                    "Expected 'value:label;value:label' (e.g., '100000000:Active;100000001:Inactive'). " +
                    "Values must be integers ≥ 0.");

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

            _serviceClient.Execute(new CreateOptionSetRequest { OptionSet = optionSetMetadata });

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

            return SuccessResult(sb.ToString());
        }

        private CallToolResult HandleUpdate(string optionsetName, string displayName, string description,
            string addOptions, string updateOptions, string removeOptionValues, bool autoPublish)
        {
            if (string.IsNullOrWhiteSpace(optionsetName))
                return ErrorResult("Error: optionset_name is required for 'update'.");

            var name = optionsetName.Trim().ToLowerInvariant();

            // Validate parameters BEFORE hitting Dataverse
            var hasDisplayName = !string.IsNullOrWhiteSpace(displayName);
            var hasDescription = !string.IsNullOrWhiteSpace(description);
            var parsedAdd = ParseOptions(addOptions);
            var parsedUpdate = ParseOptions(updateOptions);
            var parsedRemove = ParseRemoveValues(removeOptionValues);

            // Validate add_options format
            if (!string.IsNullOrWhiteSpace(addOptions) && parsedAdd == null)
                return ErrorResult("Error: Invalid add_options format. " +
                    "Expected 'value:label;value:label' (e.g., '100000002:Pending;100000003:Archived').");

            // Validate update_options format
            if (!string.IsNullOrWhiteSpace(updateOptions) && parsedUpdate == null)
                return ErrorResult("Error: Invalid update_options format. " +
                    "Expected 'value:newLabel;value:newLabel' (e.g., '100000000:Active Account').");

            // Validate remove_option_values format
            if (!string.IsNullOrWhiteSpace(removeOptionValues) && parsedRemove == null)
                return ErrorResult("Error: Invalid remove_option_values format. " +
                    "Expected comma-separated integer values (e.g., '100000002,100000003').");

            var hasAdd = parsedAdd != null && parsedAdd.Count > 0;
            var hasUpdate = parsedUpdate != null && parsedUpdate.Count > 0;
            var hasRemove = parsedRemove != null && parsedRemove.Count > 0;

            if (!hasDisplayName && !hasDescription && !hasAdd && !hasUpdate && !hasRemove)
                return ErrorResult("Error: No changes specified. Provide at least one of: " +
                    "display_name, description, add_options, update_options, remove_option_values.");

            // Verify it exists (only after all parameter validation passes)
            try
            {
                _serviceClient.Execute(new RetrieveOptionSetRequest { Name = name });
            }
            catch (Exception)
            {
                return ErrorResult($"Error: Global option set '{name}' not found. " +
                    "Use action='create' to create it, or action='list' to see all available option sets.");
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
                foreach (var value in parsedRemove)
                {
                    _serviceClient.Execute(new DeleteOptionValueRequest
                    {
                        OptionSetName = name,
                        Value = value
                    });
                    sb.AppendLine($"Removed: {value}");
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
                    sb.AppendLine($"Added: {value}: {label}");
                }
            }

            // Update existing option labels
            if (hasUpdate)
            {
                foreach (var (value, label) in parsedUpdate)
                {
                    _serviceClient.Execute(new UpdateOptionValueRequest
                    {
                        OptionSetName = name,
                        Value = value,
                        Label = new Label(label, McpHelper.GetBaseLanguageCode(_serviceClient))
                    });
                    sb.AppendLine($"Updated: {value}: {label}");
                }
            }

            var published = autoPublish && Publish();
            sb.AppendLine($"Published: {(published ? "yes" : "no")}");

            return SuccessResult(sb.ToString());
        }

        #endregion

        #region Helpers

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
        /// Parse comma-separated integer values for remove_option_values.
        /// Returns null if format is invalid. Returns empty list if input is empty/whitespace.
        /// </summary>
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
