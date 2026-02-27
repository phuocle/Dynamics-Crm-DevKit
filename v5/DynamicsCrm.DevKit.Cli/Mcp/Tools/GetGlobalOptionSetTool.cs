using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    //[McpServerToolType] // Temporarily disabled - not exposed as MCP tool
    public class GetGlobalOptionSetTool
    {
        private readonly ServiceClient _serviceClient;

        public GetGlobalOptionSetTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_global_optionset", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve a global option set (choice) definition from Dataverse. " +
            "Returns all option values with their labels. " +
            "If no name is provided, lists all global option sets in the environment. " +
            "Use this to understand valid values for picklist/choice fields that use global option sets.")]
        public string get_global_optionset(
            [Description("The logical name of the global option set (e.g. 'budgetstatus', 'socialprofiletype'). Leave empty to list all global option sets.")] string optionset_name = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(optionset_name))
                    return ListAllGlobalOptionSets();

                return GetSingleGlobalOptionSet(optionset_name.Trim().ToLowerInvariant());
            }
            catch (Exception ex)
            {
                return $"Error: {ex.Message}";
            }
        }

        private string ListAllGlobalOptionSets()
        {
            var request = new RetrieveAllOptionSetsRequest();
            var response = (RetrieveAllOptionSetsResponse)_serviceClient.Execute(request);

            var optionSets = response.OptionSetMetadata
                .OrderBy(o => o.Name)
                .ToArray();

            var sb = new StringBuilder();
            sb.AppendLine($"Found {optionSets.Length} global option sets.");
            sb.AppendLine();
            sb.AppendLine("| Name | Display Name | Type | Option Count |");
            sb.AppendLine("| --- | --- | --- | --- |");

            foreach (var os in optionSets)
            {
                var displayName = os.DisplayName?.UserLocalizedLabel?.Label ?? "";
                var type = os.OptionSetType?.ToString() ?? "";
                var count = os is OptionSetMetadata osm ? osm.Options?.Count.ToString() ?? "" : "";
                if (os is BooleanOptionSetMetadata) count = "2";
                sb.AppendLine($"| {os.Name} | {displayName} | {type} | {count} |");
            }

            return sb.ToString();
        }

        private string GetSingleGlobalOptionSet(string name)
        {
            var request = new RetrieveOptionSetRequest { Name = name };
            var response = (RetrieveOptionSetResponse)_serviceClient.Execute(request);
            var metadata = response.OptionSetMetadata;

            var sb = new StringBuilder();
            sb.AppendLine($"## {metadata.Name}");
            sb.AppendLine();

            if (metadata.DisplayName?.UserLocalizedLabel?.Label != null)
                sb.AppendLine($"- **Display Name**: {metadata.DisplayName.UserLocalizedLabel.Label}");
            if (metadata.Description?.UserLocalizedLabel?.Label != null)
                sb.AppendLine($"- **Description**: {metadata.Description.UserLocalizedLabel.Label}");
            sb.AppendLine($"- **Type**: {metadata.OptionSetType}");
            sb.AppendLine($"- **Is Global**: {metadata.IsGlobal}");
            sb.AppendLine();

            if (metadata is OptionSetMetadata osm && osm.Options != null)
            {
                sb.AppendLine($"### Options ({osm.Options.Count})");
                sb.AppendLine();
                sb.AppendLine("| Value | Label | Description |");
                sb.AppendLine("| --- | --- | --- |");

                foreach (var option in osm.Options.OrderBy(o => o.Value))
                {
                    var label = option.Label?.UserLocalizedLabel?.Label ?? "";
                    var desc = option.Description?.UserLocalizedLabel?.Label ?? "";
                    sb.AppendLine($"| {option.Value} | {label} | {desc} |");
                }
            }
            else if (metadata is BooleanOptionSetMetadata bos)
            {
                sb.AppendLine("### Options");
                sb.AppendLine();
                sb.AppendLine("| Value | Label |");
                sb.AppendLine("| --- | --- |");
                sb.AppendLine($"| {bos.TrueOption?.Value} | {bos.TrueOption?.Label?.UserLocalizedLabel?.Label ?? "True"} |");
                sb.AppendLine($"| {bos.FalseOption?.Value} | {bos.FalseOption?.Label?.UserLocalizedLabel?.Label ?? "False"} |");
            }

            return sb.ToString();
        }
    }
}
