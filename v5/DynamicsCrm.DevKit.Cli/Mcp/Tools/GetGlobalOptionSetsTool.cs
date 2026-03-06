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
            "If optionset_name is empty, return all. " +
            "If optionset_name is provided, return details for that option set.")]
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
                return ToolResponseFormatter.Error("Failed to load global option sets", ex);
            }
        }

        private string ListAllOptionSets()
        {
            var response = (RetrieveAllOptionSetsResponse)_serviceClient.Execute(new RetrieveAllOptionSetsRequest());
            var optionsets = response.OptionSetMetadata
                .OrderBy(x => x.Name)
                .Select(MetadataFormatter.ToOptionSetDetail)
                .ToList();

            return ToolResponseFormatter.Success(new
            {
                count = optionsets.Count,
                optionsets
            });
        }

        private string GetSingleOptionSet(string name)
        {
            var response = (RetrieveOptionSetResponse)_serviceClient.Execute(new RetrieveOptionSetRequest
            {
                Name = name
            });

            return ToolResponseFormatter.Success(MetadataFormatter.ToOptionSetDetail(response.OptionSetMetadata));
        }
    }
}
