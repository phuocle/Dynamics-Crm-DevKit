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

        [McpServerTool(Name = "get_global_optionsets", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Get Dataverse global option sets (choices). " +
            "If optionset_name is empty, return a summary table of all. " +
            "If optionset_name is provided, return detailed options for that option set.")]
        public string get_global_optionsets(
            [Description("Optional global option set name. Empty means list all.")] string optionset_name = "")
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
            return MarkdownFormatter.FormatOptionSetList(sorted);
        }

        private string GetSingleOptionSet(string name)
        {
            var response = (RetrieveOptionSetResponse)_serviceClient.Execute(new RetrieveOptionSetRequest
            {
                Name = name
            });
            return MarkdownFormatter.FormatOptionSetDetail(response.OptionSetMetadata);
        }
    }
}
