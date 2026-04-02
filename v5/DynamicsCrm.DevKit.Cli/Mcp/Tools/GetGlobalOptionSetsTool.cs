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
    public class GetGlobalOptionSetsTool
    {
        private readonly ServiceClient _serviceClient;

        public GetGlobalOptionSetsTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_global_optionsets", Title = "Get global choices/optionsets",
            Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieve global option sets (choices/picklists) from Dataverse metadata.\n\n" +

            "TWO MODES:\n" +
            "- If optionset_name is EMPTY: returns a summary markdown table of ALL global option sets " +
            "(name, displayName, type, isGlobal). Use this to discover available option sets.\n" +
            "- If optionset_name is PROVIDED: returns detailed options for that specific option set " +
            "(value, label, description for each option).\n\n" +

            "RETURNS:\n" +
            "- Summary mode: markdown table with name, displayName, type (Picklist/State/Status/Boolean), isGlobal\n" +
            "- Detail mode: option set properties + options table with value (integer stored in Dataverse), " +
            "label (display text), description\n\n" +

            "WHEN TO USE:\n" +
            "- When you need to know the valid values for a global choice/picklist column\n" +
            "- When building FetchXML filters on option set fields and need the integer values\n" +
            "- When you see an integer value in query results and need to map it to a label\n" +
            "- When get_metadata_entities shows a column is PicklistType but the options are empty " +
            "(this means it references a global option set — use this tool to get the values)\n\n" +

            "NOTE: This retrieves GLOBAL option sets only. For entity-specific (local) picklists, " +
            "use get_metadata_entities which includes options in the attribute definition.")]
        public string get_global_optionsets(
            [Description(
                "The logical name of the global option set (always lowercase). " +
                "Examples: 'msdyn_committype', 'budgetstatus', 'msdyn_bookingstatus'. " +
                "Leave EMPTY to list all global option sets. " +
                "If unsure of the name, use get_metadata_entities on the entity that uses the column — " +
                "if the options are empty, the column references a global option set."
            )] string optionset_name = "")
        {
            try
            {
                if (string.IsNullOrWhiteSpace(optionset_name))
                    return ListAllOptionSets();

                return GetSingleOptionSet(optionset_name.Trim());
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
            var response = (RetrieveOptionSetResponse)_serviceClient.Execute(new RetrieveOptionSetRequest
            {
                Name = name
            });
            return CompactFormatter.FormatOptionSetDetail(response.OptionSetMetadata);
        }
    }
}
