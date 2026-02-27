using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetEntityMessagesTool
    {
        private readonly ServiceClient _serviceClient;

        public GetEntityMessagesTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "get_entity_messages", Idempotent = true, Destructive = false, ReadOnly = true),
        Description(
            "Retrieves all available SDK messages (operations) for a Dataverse entity that support custom plugin registration. " +
            "Returns messages like Create, Update, Delete, Retrieve, RetrieveMultiple, etc. " +
            "Use 'none' as entity name to get global messages (not bound to any entity). " +
            "Use this before create_plugin to know which messages are available for the entity.")]
        public string get_entity_messages(
            [Description("The entity logical name (e.g. 'account', 'contact'). Use 'none' for global messages.")] string entity_logical_name)
        {
            if (string.IsNullOrWhiteSpace(entity_logical_name))
            {
                return JsonSerializer.Serialize(new { success = false, error = "entity_logical_name is required." });
            }

            try
            {
                var logicalName = entity_logical_name.Trim().ToLowerInvariant();
                var messages = logicalName == "none"
                    ? GetGlobalMessages()
                    : GetEntityMessages(logicalName);

                return JsonSerializer.Serialize(new
                {
                    success = true,
                    entity = logicalName,
                    messages,
                    count = messages.Length
                });
            }
            catch (Exception ex)
            {
                return JsonSerializer.Serialize(new
                {
                    success = false,
                    error = $"Failed to retrieve messages for '{entity_logical_name}': {ex.Message}"
                });
            }
        }

        private string[] GetEntityMessages(string logicalName)
        {
            var entityRequest = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            var entityResponse = (RetrieveEntityResponse)_serviceClient.Execute(entityRequest);
            var objectTypeCode = entityResponse.EntityMetadata.ObjectTypeCode;

            var fetchXml = $@"
<fetch>
  <entity name='sdkmessage'>
    <attribute name='name' />
    <filter>
      <condition attribute='categoryname' operator='ne' value='CustomOperation' />
      <condition attribute='categoryname' operator='ne' value='CustomApi' />
      <condition attribute='isprivate' operator='eq' value='0' />
    </filter>
    <order attribute='name' />
    <link-entity name='sdkmessagefilter' from='sdkmessageid' to='sdkmessageid'>
      <filter>
        <condition attribute='primaryobjecttypecode' operator='eq' value='{objectTypeCode}' />
        <condition attribute='iscustomprocessingstepallowed' operator='eq' value='1' />
      </filter>
    </link-entity>
  </entity>
</fetch>";

            return ExtractDistinctMessages(_serviceClient.RetrieveMultiple(new FetchExpression(fetchXml)));
        }

        private string[] GetGlobalMessages()
        {
            var fetchXml = @"
<fetch>
  <entity name='sdkmessage'>
    <attribute name='name' />
    <filter>
      <condition attribute='categoryname' operator='eq' value='None' />
      <condition attribute='isprivate' operator='eq' value='0' />
      <condition attribute='availability' operator='in'>
        <value>0</value>
        <value>2</value>
      </condition>
    </filter>
    <link-entity name='sdkmessagefilter' from='sdkmessageid' to='sdkmessageid' link-type='inner'>
      <filter>
        <condition attribute='iscustomprocessingstepallowed' operator='eq' value='1' />
      </filter>
    </link-entity>
  </entity>
</fetch>";

            return ExtractDistinctMessages(_serviceClient.RetrieveMultiple(new FetchExpression(fetchXml)));
        }

        private static string[] ExtractDistinctMessages(EntityCollection result)
        {
            return result.Entities
                .Select(e => e.GetAttributeValue<string>("name"))
                .Where(n => !string.IsNullOrEmpty(n))
                .Distinct()
                .OrderBy(n => n)
                .ToArray();
        }
    }
}
