using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class ExportTestDataTool
    {
        private readonly ServiceClient _serviceClient;

        public ExportTestDataTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "export_test_data", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Export CRM/Dataverse records as DevKitJson JSON for unit test data seeding with FakeXrmEasy. " +
            "Returns a JSON array of Entity objects using DevKitJson __type markers that can be directly " +
            "used with TestDataLoader.FromJson() or FakeXrmEasyTestBase.InitializeFromJson() in unit tests. " +
            "Supports all Dataverse attribute types: EntityReference, Money, OptionSetValue, DateTime, etc.")]
        public string export_test_data(
            [Description("FetchXML query to retrieve test data. Must be valid FetchXML.")] string fetchxml,
            [Description("Maximum number of records to export. Default is 10, max is 100.")] int max_records = 10)
        {
            if (string.IsNullOrWhiteSpace(fetchxml))
            {
                return "Error: fetchxml is required.";
            }

            if (max_records <= 0) max_records = 10;
            if (max_records > 100) max_records = 100;

            try
            {
                var result = _serviceClient.RetrieveMultiple(new FetchExpression(fetchxml));
                if (result.Entities.Count == 0)
                {
                    return "[]";
                }

                var entities = result.Entities.Take(max_records).ToList();
                return DevKitJson.Serialize(entities);
            }
            catch (Exception ex)
            {
                return $"Error exporting test data: {ex.Message}";
            }
        }
    }
}
