using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PL.DynamicsCrm.DevKit.Shared.Xrm
{
    public class XrmHelper
    {
        private OrganizationServiceProxy CrmService { get; set; }
        public XrmHelper(OrganizationServiceProxy crmService)
        {
            CrmService = crmService;
        }
        public List<XrmEntity> GetAllCustomActions()
        {
            var fetchData = new
            {
                customizationlevel = "1",
                endpoint = "api/data"
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessagerequest'>
    <attribute name='name' />
    <attribute name='primaryobjecttypecode' />
    <filter type='and'>
      <condition attribute='customizationlevel' operator='eq' value='{fetchData.customizationlevel}'/>
    </filter>
    <link-entity name='sdkmessagepair' from='sdkmessagepairid' to='sdkmessagepairid'>
      <filter type='and'>
        <condition attribute='endpoint' operator='eq' value='{fetchData.endpoint}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
            var list = (from entity in rows.Entities
                        select new XrmEntity {
                            LogicalName = entity["name"].ToString(),
                            Name = GetSchemaName(entity["primaryobjecttypecode"].ToString())
                       }).ToList<XrmEntity>();
            return list;
        }



        public List<XrmEntity> GetAllEntities()
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)CrmService.Execute(request);
            var entities = new List<XrmEntity>();
            foreach (EntityMetadata entity in response.EntityMetadata)
            {
                entities.Add(new XrmEntity
                {
                    Name = entity.SchemaName,
                    LogicalName = entity.LogicalName,
                    HasImage = !string.IsNullOrEmpty(entity.PrimaryImageAttribute),
                    EntityTypeCode = entity.ObjectTypeCode ?? -1,
                });
            }
            entities = entities.OrderBy(entity => entity.Name).ToList();
            return entities;
        }

        public List<string> GetSdkMessages(string logicalName)
        {
            var request = new RetrieveEntityRequest() {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse)CrmService.Execute(request);
            var fetchData = new
            {
                customizationlevel = "0",
                primaryobjecttypecode = response.EntityMetadata.ObjectTypeCode,
                iscustomprocessingstepallowed = "1"
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessage'>
    <attribute name='name' />
    <link-entity name='sdkmessagefilter' from='sdkmessageid' to='sdkmessageid'>
      <filter type='and'>
        <condition attribute='customizationlevel' operator='eq' value='{fetchData.customizationlevel}' />
        <condition attribute='primaryobjecttypecode' operator='eq' value='{fetchData.primaryobjecttypecode}'/>
        <condition attribute='iscustomprocessingstepallowed' operator='eq' value='{fetchData.iscustomprocessingstepallowed}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
            var messages = (from entity in rows.Entities
                            select entity["name"].ToString()
                           ).ToList<string>();
            messages.Sort();
            return messages;
        }

        public List<PluginInputOutputParameter> GetPluginInputOutputParameters(string entityName, string requestName)
        {
            var fetchData = new
            {
                name = requestName,
                name2 = $"{requestName + entityName}",
                endpoint = "api/data"
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessagerequest'>
    <filter type='or'>
      <condition attribute='name' operator='eq' value='{fetchData.name}'/>
      <condition attribute='name' operator='eq' value='{fetchData.name2}'/>
    </filter>
    <link-entity name='sdkmessagepair' from='sdkmessagepairid' to='sdkmessagepairid'>
      <filter type='and'>
        <condition attribute='endpoint' operator='eq' value='{fetchData.endpoint}'/>
      </filter>
    </link-entity>
    <link-entity name='sdkmessagerequestfield' from='sdkmessagerequestid' to='sdkmessagerequestid' link-type='inner' alias='f'>
      <attribute name='name' />
      <attribute name='clrparser' />
      <attribute name='optional' />
      <attribute name='position' />
    </link-entity>
  </entity>
</fetch>";
            var rows = CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
            var list = new List<PluginInputOutputParameter>();
            Guid sdkMessageRequestId = Guid.Empty;
            foreach (var row in rows.Entities)
            {
                var name = (string)row.GetAttributeValue<AliasedValue>("f.name")?.Value ?? string.Empty;
                var clrparser = (string)row.GetAttributeValue<AliasedValue>("f.clrparser")?.Value ?? string.Empty;
                var optional = (bool?)row.GetAttributeValue<AliasedValue>("f.optional")?.Value ?? false;
                var position = (int?)row.GetAttributeValue<AliasedValue>("f.position")?.Value ?? -1;
                list.Add(new PluginInputOutputParameter
                {
                    Name = name,
                    Position = position,
                    Require = optional,
                    Type = clrparser.Split(",".ToCharArray())[0],
                    ParameterType = ParameterType.Input
                });
                sdkMessageRequestId = row.Id;
            }
            var fetchData2 = new
            {
                sdkmessagerequestid = sdkMessageRequestId
            };
            var fetchXml2 = $@"
<fetch>
  <entity name='sdkmessageresponse'>
    <filter type='and'>
      <condition attribute='sdkmessagerequestid' operator='eq' value='{fetchData2.sdkmessagerequestid}'/>
    </filter>
    <link-entity name='sdkmessageresponsefield' from='sdkmessageresponseid' to='sdkmessageresponseid' link-type='inner' alias='f'>
      <attribute name='name' />
      <attribute name='clrformatter' />
      <attribute name='position' />
    </link-entity>
  </entity>
</fetch>";
            var rows2 = CrmService.RetrieveMultiple(new FetchExpression(fetchXml2));
            foreach (var row in rows2.Entities)
            {
                var name = (string)row.GetAttributeValue<AliasedValue>("f.name")?.Value ?? string.Empty;
                var clrformatter = (string)row.GetAttributeValue<AliasedValue>("f.clrformatter")?.Value ?? string.Empty;
                var optional = false;
                var position = (int?)row.GetAttributeValue<AliasedValue>("f.position")?.Value ?? -1;
                list.Add(new PluginInputOutputParameter
                {
                    Name = name,
                    Position = position,
                    Require = optional,
                    Type = clrformatter.Split(",".ToCharArray())[0],
                    ParameterType = ParameterType.Output
                });
            }
            list = list
                .OrderBy(order => order.ParameterType)
                .ThenBy(order => order.Position)
                .ToList();
            return list;
        }

        private int GetPrimaryObjectTypeCode(string entityName)
        {
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = entityName.ToLower()
            };
            var response = (RetrieveEntityResponse)CrmService.Execute(request);
            return response.EntityMetadata.ObjectTypeCode.Value;
        }

        private string GetSchemaName(string logicalName)
        {
            if (logicalName == "none") return "None";
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse)CrmService.Execute(request);
            return response.EntityMetadata.SchemaName;
        }
    }
}
