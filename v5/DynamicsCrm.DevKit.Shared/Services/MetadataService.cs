using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Services
{
    /// <summary>
    /// Facade for entity metadata operations.
    /// Delegates to XrmHelper for backward compatibility while providing a cleaner API.
    /// </summary>
    public class MetadataService
    {
        private readonly ServiceClient _serviceClient;

        public MetadataService(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public async Task<List<EntityMetadata>> GetEntitiesAsync(List<string> schemaNames = null)
        {
            if (schemaNames != null && schemaNames.Count > 0)
                return await XrmHelper.GetEntitiesMetadataAsync(_serviceClient, schemaNames);

            await XrmHelper.ReadEntitiesMetadataAsync(_serviceClient, EntityFilters.Attributes);
            return XrmHelper.EntitiesMetadata;
        }

        public async Task<EntityMetadata> GetEntityAsync(string logicalName)
        {
            return await XrmHelper.FetchEntityMetadataAsync(_serviceClient, logicalName);
        }

        public async Task<List<SystemForm>> GetFormsAsync(int? objectTypeCode = null)
        {
            if (objectTypeCode.HasValue)
                return await XrmHelper.GetEntityFormXmlAsync(_serviceClient, objectTypeCode);
            await XrmHelper.ReadEntitiesFormXmlAsync(_serviceClient);
            return XrmHelper.EntitiesFormXml;
        }

        public async Task<List<SystemForm>> GetEntityFormsAsync(string entityLogicalName)
        {
            return await XrmHelper.GetEntityFormsAsync(_serviceClient, entityLogicalName);
        }

        public async Task<List<NameValue>> GetSdkMessagesAsync(string entityLogicalName)
        {
            return await XrmHelper.GetSdkMessagesAsync(_serviceClient, entityLogicalName);
        }

        public async Task<List<PluginInputOutputParameter>> GetPluginParametersAsync(string entityName, string requestName)
        {
            return await XrmHelper.GetPluginInputOutputParametersAsync(_serviceClient, entityName, requestName);
        }
    }
}
