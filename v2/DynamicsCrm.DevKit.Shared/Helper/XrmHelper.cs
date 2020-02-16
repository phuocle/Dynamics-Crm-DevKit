using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Specialized;
using DynamicsCrm.DevKit.Shared;
using System;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Shared.Helper
{
    public class XrmHelper
    {
        public static List<string> GetAllCustomActions(IOrganizationService service)
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
    <link-entity name='sdkmessagepair' from='sdkmessagepairid' to='sdkmessagepairid' link-type='inner'>
      <filter type='and'>
        <condition attribute='endpoint' operator='eq' value='{fetchData.endpoint}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var list = (from entity in rows.Entities
                        select new XrmEntity
                        {
                            LogicalName = entity["name"].ToString(),
                            Name = GetSchemaName(service, entity["primaryobjecttypecode"].ToString())
                        }).ToList();

            var json = SimpleJson.SerializeObject(list);
            return list
                .Where(x => x.Name.ToLower() == "none")
                .Select(x => x.LogicalName)
                .ToList();
        }

        private static string GetSchemaName(IOrganizationService service, string logicalName)
        {
            if (logicalName == "none") return "None";
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse)service.Execute(request);
            return response.EntityMetadata.SchemaName;
        }

        public static List<XrmEntity> GetAllEntities(IOrganizationService service)
        {
            var request = new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            };
            var response = (RetrieveAllEntitiesResponse)service.Execute(request);
            var entities = new List<XrmEntity>();
            foreach (var entity in response.EntityMetadata)
                entities.Add(new XrmEntity
                {
                    Name = entity.SchemaName,
                    LogicalName = entity.LogicalName,
                    HasImage = !string.IsNullOrEmpty(entity.PrimaryImageAttribute),
                    EntityTypeCode = entity.ObjectTypeCode ?? -1,
                    IsCustomEntity = entity.IsCustomEntity ?? false
                });
            entities = entities.OrderBy(entity => entity.Name).ToList();
            return entities;
        }

        public static List<int> GetProvisionedLanguages(IOrganizationService service)
        {
            var request = new RetrieveProvisionedLanguagesRequest();
            var response = (RetrieveProvisionedLanguagesResponse)service.Execute(request);
            return response.RetrieveProvisionedLanguages.ToList();
        }


        public static decimal? GetMetadataMinValue(AttributeMetadata attribute)
        {
            if (attribute is IntegerAttributeMetadata attr1)
                return attr1.MinValue ?? -1;
            if (attribute is DecimalAttributeMetadata attr2)
                return attr2.MinValue ?? -1;
            if (attribute is MoneyAttributeMetadata attr3)
                return attr3.MinValue != null ? (decimal)attr3.MinValue.Value : -1;
            if (attribute is DoubleAttributeMetadata attr)
                return attr.MinValue != null ? (decimal)attr.MinValue.Value : -1;
            return (decimal?)null;
        }

        public static decimal? GetMetadataMaxValue(AttributeMetadata attribute)
        {
            if (attribute is IntegerAttributeMetadata attr1)
                return attr1.MaxValue ?? -1;
            if (attribute is DecimalAttributeMetadata attr2)
                return attr2.MaxValue ?? -1;
            if (attribute is MoneyAttributeMetadata attr3)
                return attr3.MaxValue != null ? (decimal)attr3.MaxValue.Value : -1;
            if (attribute is DoubleAttributeMetadata attr)
                return attr.MaxValue != null ? (decimal)attr.MaxValue.Value : -1;
            return (decimal?)null;
        }

        public static int? GetMetadataMaxLengthValue(AttributeMetadata attribute)
        {
            if (attribute is StringAttributeMetadata attr1)
                return attr1.MaxLength ?? (int?)null;
            if (attribute is MemoAttributeMetadata attr2)
                return attr2.MaxLength ?? (int?)null;
            return (int?)null;
        }

        public static NameValueCollection GetMetadataOptionSetValues(AttributeMetadata attribute)
        {
            if (attribute is PicklistAttributeMetadata optionMetadata1)
            {
                var values = new NameValueCollection();
                foreach (var c in optionMetadata1.OptionSet.Options)
                    values.Add(Utility.SafeName(c.Label.UserLocalizedLabel.Label), c.Value?.ToString());
                return values;
            }
            else if (attribute is StateAttributeMetadata optionMetadata2)
            {
                var values = new NameValueCollection();
                foreach (var c in optionMetadata2.OptionSet.Options)
                    values.Add(Utility.SafeName(c.Label.UserLocalizedLabel.Label), c.Value?.ToString());
                return values;
            }
            else if (attribute is StatusAttributeMetadata optionMetadata)
            {
                var values = new NameValueCollection();
                foreach (var c in optionMetadata.OptionSet.Options)
                    values.Add(Utility.SafeName(c.Label.UserLocalizedLabel.Label), c.Value?.ToString());
                return values;
            }
            else if (attribute is MultiSelectPicklistAttributeMetadata optionMetadata3)
            {
                var values = new NameValueCollection();
                foreach (var c in optionMetadata3.OptionSet.Options)
                    values.Add(Utility.SafeName(c.Label.UserLocalizedLabel.Label), c.Value?.ToString());
                return values;
            }
            return new NameValueCollection();
        }

        public static List<string> GetSdkMessages(IOrganizationService service, string logicalName)
        {
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse)service.Execute(request);
            var fetchData = new
            {
                primaryobjecttypecode = response.EntityMetadata.ObjectTypeCode,
                iscustomprocessingstepallowed = "1"
            };
            var fetchXml = $@"
<fetch>
  <entity name='sdkmessage'>
    <attribute name='name' />
    <link-entity name='sdkmessagefilter' from='sdkmessageid' to='sdkmessageid'>
      <filter type='and'>
        <condition attribute='primaryobjecttypecode' operator='eq' value='{fetchData.primaryobjecttypecode}'/>
        <condition attribute='iscustomprocessingstepallowed' operator='eq' value='{fetchData.iscustomprocessingstepallowed}'/>
      </filter>
    </link-entity>
  </entity>
</fetch>";
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var messages = (from entity in rows.Entities
                            select entity["name"].ToString()
                ).ToList();
            messages.Sort();
            return messages;
        }

        public static string GeneratedLateBoundClass(IOrganizationService service, string crmName, string entitySchemaName, string nameSpace, string sharedNameSpace)
        {
            var lateBound = new CSharpLateBound();
            return lateBound.Go(service, Utility.ConvertCrmNameToCrmVersionName(crmName), entitySchemaName, nameSpace, sharedNameSpace);
        }

        public static List<PluginInputOutputParameter> GetPluginInputOutputParameters(IOrganizationService service, string entityName, string requestName)
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
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var list = new List<PluginInputOutputParameter>();
            var sdkMessageRequestId = Guid.Empty;
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
            var rows2 = service.RetrieveMultiple(new FetchExpression(fetchXml2));
            foreach (var row in rows2.Entities)
            {
                var name = (string)row.GetAttributeValue<AliasedValue>("f.name")?.Value ?? string.Empty;
                var clrformatter = (string)row.GetAttributeValue<AliasedValue>("f.clrformatter")?.Value ??
                                   string.Empty;
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


        public static int GetObjectTypeCode(IOrganizationService service, string logicalName)
        {
            var request = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Entity,
                LogicalName = logicalName
            };
            var response = (RetrieveEntityResponse)service.Execute(request);
            if (response.EntityMetadata.ObjectTypeCode != null)
                return response.EntityMetadata.ObjectTypeCode.Value;
            return -1;
        }

        public static List<string> GetForms(IOrganizationService service, string logicalName)
        {
            var fetchData = new
            {
                formactivationstate = "1",
                objecttypecode = GetObjectTypeCode(service, logicalName),
                type = "2",
                type2 = "7"
            };
            var fetchXml = $@"
<fetch>
  <entity name='systemform'>
    <attribute name='description' />
    <attribute name='name' />
    <attribute name='formxml' />
    <attribute name='type' />
    <order attribute='name' descending='false'/>
    <filter type='and'>
      <condition attribute='formactivationstate' operator='eq' value='{fetchData.formactivationstate}'/>
      <condition attribute='objecttypecode' operator='eq' value='{fetchData.objecttypecode}'/>
      <filter type='or'>
        <condition attribute='type' operator='eq' value='{fetchData.type}'/>
        <condition attribute='type' operator='eq' value='{fetchData.type2}'/>
      </filter>
    </filter>
  </entity>
</fetch>";
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var forms = new List<string>();
            foreach (var entity in rows.Entities)
            {
                var name = entity.GetAttributeValue<string>("name");
                forms.Add(name);
            }
            return forms;
        }

        public static IOrganizationService GetIOrganizationService(CrmServiceClient crmServiceClient)
        {
            if (crmServiceClient.OrganizationServiceProxy != null)
                return (IOrganizationService)crmServiceClient.OrganizationServiceProxy;
            if (crmServiceClient.OrganizationWebProxyClient != null)
                return (IOrganizationService)crmServiceClient.OrganizationWebProxyClient;
            throw new Exception("Get IOrganizationService FAILED !!!");
        }

        public static string BuildConnectionString(CrmConnection crmConnection)
        {
            return BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, crmConnection.Password);
        }

        public static string BuildConnectionString(string type, string url, string user, string pass)
        {
            if (type == "ClientSecret")
                return $"AuthType=ClientSecret;url={url};ClientId={user};ClientSecret={pass};";
            else if (type == "AD" || type == "IFD")
            {
                var arr = user.Split("\\".ToCharArray());
                if (arr.Length != 2)
                    throw new Exception("Please enter User name like: contoso\\jsmith");
                var domain = arr[0];
                user = arr[1];
                return $"AuthType={type};Url={url};Domain={domain};Username={user};Password={pass};";
            }
            return $"AuthType=Office365;Url={url};Username={user};Password={pass};";
        }

        public static string BuildConnectionString(string connectionString)
        {
            if (connectionString.IndexOf("=ClientSecret;") >= 0) return connectionString;
            var array = connectionString.Split(";".ToCharArray());
            if (array.Length == 5)
            {
                var authType = array.First(x => x.ToLower().StartsWith("authtype=")).Split("=".ToCharArray())[1];
                var url = array.First(x => x.ToLower().StartsWith("url=")).Split("=".ToCharArray())[1];
                var userName = array.First(x => x.ToLower().StartsWith("username=")).Split("=".ToCharArray())[1];
                var password = array.First(x => x.ToLower().StartsWith("password="));
                if (password.EndsWith("="))
                    password = password.Split("=".ToCharArray())[1] + "=";
                else
                    password = password.Split("=".ToCharArray())[1];
                password = EncryptDecrypt.DecryptString(password);
                return BuildConnectionString(authType, url, userName, password);
            }
            else if (array.Length == 6)
            {
                var authType = array.First(x => x.ToLower().StartsWith("authtype=")).Split("=".ToCharArray())[1];
                var url = array.First(x => x.ToLower().StartsWith("url=")).Split("=".ToCharArray())[1];
                var domain = array.First(x => x.ToLower().StartsWith("domain=")).Split("=".ToCharArray())[1];
                var userName = array.First(x => x.ToLower().StartsWith("username=")).Split("=".ToCharArray())[1];
                var password = array.First(x => x.ToLower().StartsWith("password="));
                if (password.EndsWith("="))
                    password = password.Split("=".ToCharArray())[1] + "=";
                else
                    password = password.Split("=".ToCharArray())[1];
                password = EncryptDecrypt.DecryptString(password);
                return BuildConnectionString(authType, url, $"{domain}\\{userName}", password);
            }
            throw new Exception("Fail when BuildConnectionString");
        }

        public static string BuildConnectionStringLog(string connectionString)
        {
            if (connectionString.IndexOf("=ClientSecret;") >= 0) return connectionString;
            var array = connectionString.Split(";".ToCharArray());
            if (array.Length == 5)
            {
                var authType = array.First(x => x.ToLower().StartsWith("authtype=")).Split("=".ToCharArray())[1];
                var url = array.First(x => x.ToLower().StartsWith("url=")).Split("=".ToCharArray())[1];
                var userName = array.First(x => x.ToLower().StartsWith("username=")).Split("=".ToCharArray())[1];
                var password = "********";
                return BuildConnectionString(authType, url, userName, password);
            }
            else if (array.Length == 6)
            {
                var authType = array.First(x => x.ToLower().StartsWith("authtype=")).Split("=".ToCharArray())[1];
                var url = array.First(x => x.ToLower().StartsWith("url=")).Split("=".ToCharArray())[1];
                var domain = array.First(x => x.ToLower().StartsWith("domain=")).Split("=".ToCharArray())[1];
                var userName = array.First(x => x.ToLower().StartsWith("username=")).Split("=".ToCharArray())[1];
                var password = "********";
                return BuildConnectionString(authType, url, $"{domain}\\{userName}", password);
            }
            throw new Exception("Fail when BuildConnectionString");
        }
    }
}
