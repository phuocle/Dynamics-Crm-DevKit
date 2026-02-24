using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Services
{
    /// <summary>
    /// Facade for code generation operations.
    /// Delegates to XrmHelper for backward compatibility while providing a cleaner API.
    /// </summary>
    public class CodeGenService
    {
        private readonly ServiceClient _serviceClient;

        public CodeGenService(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public async Task<string> GetDefaultJsFormFileAsync(EntityMetadata entityMetadata, string rootNamespace)
        {
            return await XrmHelper.GetDefaultFileWithFormAsync(_serviceClient, entityMetadata, rootNamespace);
        }

        public async Task<string> GetDefaultTsFormFileAsync(EntityMetadata entityMetadata)
        {
            return await XrmHelper.GetDefaultTsFileWithFormAsync(_serviceClient, entityMetadata);
        }

        public string GetDefaultCsFile(EntityMetadata entityMetadata, string rootNamespace)
        {
            return Helper.GetDefaultFileWithCs(entityMetadata, rootNamespace);
        }

        public string GetDefaultWebApiFile(string schemaName)
        {
            return Helper.GetDefaultFileWithWebApi(schemaName);
        }

        public async Task<string> GetPluginCommentAsync(string entityLogicalName, string message)
        {
            return await XrmHelper.GetPluginCommentAsync(_serviceClient, entityLogicalName, message);
        }
    }
}
