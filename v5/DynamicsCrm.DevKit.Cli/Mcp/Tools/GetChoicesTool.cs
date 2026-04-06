using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Messages;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetChoicesTool
    {
        private readonly ServiceClient _serviceClient;

        public GetChoicesTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_choices", Title = "Get global choices/optionsets",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve global option sets (choices/picklists) from Dataverse metadata.\n\n" +

            "TWO MODES:\n" +
            "- optionset_name EMPTY: list all global option sets (name, displayName, type)\n" +
            "- optionset_name PROVIDED: detail with value/label pairs for each option\n\n" +

            "WHEN TO USE:\n" +
            "- Get valid integer values for FetchXML filters on option set fields\n" +
            "- Map integer values in query results to display labels\n\n" +

            "NOTE: GLOBAL option sets only. For entity-specific (local) picklists, " +
            "use get_tables which includes options in the attribute definition.")]
        public string get_choices(
            [Description(
                "Logical name of the global option set. Leave empty to list all. " +
                "If get_tables shows empty options for a PicklistType column, " +
                "it references a global option set — use this tool."
            )] string optionset_name = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(optionset_name))
                    return ListAllOptionSets();

                return GetSingleOptionSet(optionset_name.Trim().ToLowerInvariant());
            }
            catch (Exception ex)
            {
                return $"Error: Failed to load global option sets: {ex.Message}";
            }
        }

        private string ListAllOptionSets()
        {
            var response = (RetrieveAllOptionSetsResponse)_serviceClient.Execute(new RetrieveAllOptionSetsRequest());
            var sorted = response.OptionSetMetadata.OrderBy(x => x.Name);
            return CompactFormatter.FormatOptionSetList(sorted);
        }

        private string GetSingleOptionSet(string name)
        {
            try
            {
                var response = (RetrieveOptionSetResponse)_serviceClient.Execute(new RetrieveOptionSetRequest
                {
                    Name = name
                });
                return CompactFormatter.FormatOptionSetDetail(response.OptionSetMetadata);
            }
            catch (Exception)
            {
                return $"Error: Could not find global option set '{name}'. " +
                       "Make sure you use the logical name (Name column), not the display name. " +
                       "Call get_choices with empty optionset_name to list all available option sets.";
            }
        }
    }
}
