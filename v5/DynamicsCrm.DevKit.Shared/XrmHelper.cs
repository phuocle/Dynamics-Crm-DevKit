using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    public static class XrmHelper
    {
        public static int COUNT_RetrieveMultipleAsync = 0;
        public static int COUNT_RetrieveAsync = 0;
        public static int COUNT_ExecuteAsync = 0;
        public static int COUNT_UpdateAsync = 0;
        public static int COUNT_DeleteAsync = 0;
        public static int COUNT_CreateAsync = 0;
        public static List<EntityMetadata> EntitiesMetadata { get; set; } = [];
        public static List<SystemForm> EntitiesFormXml { get; set; } = [];
        public static List<ProcessForm> EntitiesProcessForm { get; set; } = [];

        public static async Task<List<Entity>> RetrieveAllRecordsByFetchXmlAsync(ServiceClient serviceClient, string fetchXml)
            => await new DeploymentService(serviceClient).RetrieveAllRecordsByFetchXmlAsync(fetchXml);

        public static async Task<(bool IsOk, Guid SolutionId, string Prefix)> IsExistSolutionAsync(ServiceClient serviceClient, string solutionuniquename)
            => await new DeploymentService(serviceClient).IsExistSolutionAsync(solutionuniquename);

        public static async Task<bool> IsExistDataSourceAsync(ServiceClient serviceClient, string logicalname)
            => await new MetadataService(serviceClient).IsExistDataSourceAsync(logicalname);

        public static async Task<List<DownloadFile>> GetReportsBySolutionAsync(ServiceClient serviceClient, string solution)
            => await new DeploymentService(serviceClient).GetReportsBySolutionAsync(solution);

        public static async Task DeployReportAsync(ServiceClient serviceClient, Guid reportId, string fullFileName)
            => await new DeploymentService(serviceClient).DeployReportAsync(reportId, fullFileName);

        public static async Task<List<EntityMetadata>> GetEntitiesMetadataAsync(ServiceClient serviceClient, EntityFilters entityFilters)
            => await new MetadataService(serviceClient).GetEntitiesMetadataAsync(entityFilters);

        public static async Task<List<string>> GetAllEntitiesSchemaAsync(ServiceClient serviceClient, EntityFilters entityFilters)
            => await new MetadataService(serviceClient).GetAllEntitiesSchemaAsync(entityFilters);

        public static async Task<List<EntityMetadata>> GetEntitiesMetadataAsync(ServiceClient serviceClient, List<string> schemaNames)
            => await new MetadataService(serviceClient).GetEntitiesMetadataAsync(schemaNames);

        public static EntityMetadata FetchEntityMetadata(ServiceClient serviceClient, string entityLogicalName)
            => new MetadataService(serviceClient).FetchEntityMetadata(entityLogicalName);

        public static async Task<EntityMetadata> FetchEntityMetadataAsync(ServiceClient serviceClient, string entityLogicalName)
            => await new MetadataService(serviceClient).FetchEntityMetadataAsync(entityLogicalName);

        public static async Task<EntityMetadata> GetEntityMetadataAsync(ServiceClient serviceClient, string entityLogicalName)
            => await new MetadataService(serviceClient).GetEntityMetadataAsync(entityLogicalName);

        public static async Task ReadEntitiesMetadataAsync(ServiceClient serviceClient, EntityFilters entityFilters)
            => await new MetadataService(serviceClient).ReadEntitiesMetadataAsync(entityFilters);

        public static async Task ReadEntitiesFormXmlAsync(ServiceClient serviceClient)
            => await new MetadataService(serviceClient).ReadEntitiesFormXmlAsync();

        public static async Task<List<SystemForm>> GetEntityFormXmlAsync(ServiceClient serviceClient, int? objectTypeCode)
            => await new MetadataService(serviceClient).GetEntityFormXmlAsync(objectTypeCode);

        public static async Task<List<SystemForm>> GetEntitiesFormXmlAsync(ServiceClient serviceClient)
            => await new MetadataService(serviceClient).GetEntitiesFormXmlAsync();

        public static async Task<CommentTypeScriptDeclaration> GetCommentAsync(ServiceClient serviceClient, string entityLogicalName, string dtsFile)
            => await new MetadataService(serviceClient).GetCommentAsync(entityLogicalName, dtsFile);

        public static async Task<List<SystemForm>> GetEntityFormsAsync(ServiceClient serviceClient, string entityLogicalName)
            => await new MetadataService(serviceClient).GetEntityFormsAsync(entityLogicalName);

        public static async Task<List<DeployWebResource>> GetWebResourcesAsync(ServiceClient serviceClient, string fullFileName)
            => await new DeploymentService(serviceClient).GetWebResourcesAsync(fullFileName);

        public static async Task<(bool ok, string message)> DeployWebResourceAsync(ServiceClient serviceClient, string fullFileName, Guid webResourceId)
            => await new DeploymentService(serviceClient).DeployWebResourceAsync(fullFileName, webResourceId);

        public static async Task<(Guid webResourceId, string message)> DeployNewWebResourceAsync(ServiceClient serviceClient, string fullFileName, string webResourceName)
            => await new DeploymentService(serviceClient).DeployNewWebResourceAsync(fullFileName, webResourceName);

        public static async Task<(bool ok, string message)> PublishWebResourceAsync(ServiceClient serviceClient, Guid webResourceId)
            => await new DeploymentService(serviceClient).PublishWebResourceAsync(webResourceId);

        public static async Task<List<NameValueGuidExtend>> GetSolutionsAsync(ServiceClient serviceClient)
            => await new DeploymentService(serviceClient).GetSolutionsAsync();

        public static async Task<int> GetLanguageCodeAsync(ServiceClient serviceClient)
            => await new MetadataService(serviceClient).GetLanguageCodeAsync();

        public static async Task<List<DownloadFile>> GetWebResourcesBySolutionAsync(ServiceClient serviceClient, string solution)
            => await new DeploymentService(serviceClient).GetWebResourcesBySolutionAsync(solution);

        public static async Task<List<ProcessForm>> GetEntityProcessFormAsync(ServiceClient serviceClient, int? objectTypeCode, string logicalName)
            => await new MetadataService(serviceClient).GetEntityProcessFormAsync(objectTypeCode, logicalName);

        public static async Task<string> GetDefaultFileWithFormAsync(ServiceClient serviceClient, EntityMetadata entityMetadata, string rootnamespace)
            => await new CodeGenService(serviceClient).GetDefaultJsFormFileAsync(entityMetadata, rootnamespace);

        public static async Task<string> GetDefaultFileWithWebApiAsync(string schemaName)
            => await new CodeGenService(null).GetDefaultWebApiFileAsync(schemaName);

        public static async Task<string> GetDefaultTsFileWithFormAsync(ServiceClient serviceClient, EntityMetadata entityMetadata)
            => await new CodeGenService(serviceClient).GetDefaultTsFormFileAsync(entityMetadata);

        public static async Task<ServiceClient> IsConnectedAsync(string connectionString)
            => await DeploymentService.IsConnectedAsync(connectionString);

        public static T GetAliasedValue<T>(Entity entity, string name)
            => DeploymentService.GetAliasedValue<T>(entity, name);

        public static async Task AddWebResourceToSolutionAsync(ServiceClient serviceClient, Guid webResourceId, string solutionUniqueName)
            => await new DeploymentService(serviceClient).AddWebResourceToSolutionAsync(webResourceId, solutionUniqueName);

        internal static List<XrmEntity> GetListXrmEntity(List<EntityMetadata> entitiesMetadata)
            => MetadataService.GetListXrmEntity(entitiesMetadata);

        public static async Task<List<PluginInputOutputParameter>> GetPluginInputOutputParametersAsync(ServiceClient service, string entityName, string requestName)
            => await new MetadataService(service).GetPluginInputOutputParametersAsync(entityName, requestName);

        public static async Task<List<NameValue>> GetSdkMessagesAsync(ServiceClient service, string logicalName)
            => await new MetadataService(service).GetSdkMessagesAsync(logicalName);

        public static async Task<string> GetPluginCommentAsync(ServiceClient service, string pluginLogicalName, string pluginMessage)
            => await new MetadataService(service).GetPluginCommentAsync(pluginLogicalName, pluginMessage);

        internal static async Task<List<NameValue>> GetCustomActionsAsync(ServiceClient service)
            => await new MetadataService(service).GetCustomActionsAsync();

        internal static async Task<List<NameValue>> GetCustomActionsAsync(ServiceClient service, string logicalName)
            => await new MetadataService(service).GetCustomActionsAsync(logicalName);

        internal static async Task<List<NameValue>> GetCustomApisAsync(ServiceClient service, string entity)
            => await new MetadataService(service).GetCustomApisAsync(entity);

        internal static async Task<List<XrmEntity>> GetAllDataSourceAsync(ServiceClient service)
            => await new MetadataService(service).GetAllDataSourceAsync();

        internal static async Task<List<XrmEntity>> GetProvisionedLanguagesAsync(ServiceClient service)
            => await new MetadataService(service).GetProvisionedLanguagesAsync();

        internal static async Task<Guid?> GetImpersonatingUserIdAsync(ServiceClient service, string runAs)
            => await new MetadataService(service).GetImpersonatingUserIdAsync(runAs);

        internal static async Task<Entity> GetEntityDataProviderIdAsync(ServiceClient service, string dataSource)
            => await new DeploymentService(service).GetEntityDataProviderIdAsync(dataSource);

        internal static async Task<bool> IsVirtualTableSupportCRUDAsync(ServiceClient service)
            => await new DeploymentService(service).IsVirtualTableSupportCRUDAsync();

        internal static bool IsWorkflowType(Type type)
        {
            if (type?.FullName == "System.Activities.CodeActivity") return true;
            if (type?.BaseType != null) return IsWorkflowType(type?.BaseType);
            return false;
        }

        internal static string GetMessagePropertyName(string message)
        {
            return message.ToLower() switch
            {
                "create" => "Id",
                "createmultiple" => "Ids",
                "updatemultiple" => "Targets",
                "setstate" => "EntityMoniker",
                "setstatedynamicentity" => "EntityMoniker",
                "deliverincoming" => "EmailId",
                "deliverpromote" => "EmailId",
                "send" => "EmailId",
                _ => "Target"
            };
        }

        internal static bool IsEqualsWorkflowType(string old, string @new)
        {
            return old == @new;
        }

        internal static bool IsEqualsContent(string oldContent, string newContent)
        {
            return oldContent == newContent;
        }

        internal static bool IsMessageUpdate(string message)
        {
            return message.ToLower() switch
            {
                "update" or
                "updatemultiple" or
                "onexternalupdated" => true,
                _ => false,
            };
        }

        internal static List<string> GetFiles(string folder, List<string> includePatternFiles, List<string> excludePatternFiles)
        {
            var includefiles = new List<string>();
            foreach (var includefile in includePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange([.. Directory.GetFiles(folder, includefile)]);
                }
            }
            foreach (var includefile in includePatternFiles)
            {
                var other = includefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    includefiles.AddRange([.. Directory.GetFiles(folder, other)]);
                }
            }
            var excludefiles = new List<string>();
            foreach (var excludefile in excludePatternFiles)
            {
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange([.. Directory.GetFiles(folder, excludefile)]);
                }
            }
            foreach (var excludefile in excludePatternFiles)
            {
                var other = excludefile.Replace("*.", string.Empty);
                if (Directory.Exists(folder))
                {
                    excludefiles.AddRange([.. Directory.GetFiles(folder, other)]);
                }
            }
            var files = includefiles.Where(file => !excludefiles.Contains(file)).Distinct().ToList();
            files.Sort();
            return files;
        }

        internal static bool IsSupportPluginImage(string message)
        {
            return (message?.ToLower()) switch
            {
                "assign" or
                "create" or
                "delete" or
                "deliverincoming" or
                "deliverpromote" or
                "merge" or
                "route" or
                "send" or
                "setstate" or
                "setstatedynamicentity" or
                "update" or
                "createmultiple" or
                "updatemultiple" or
                "executeworkflow" => true,
                _ => false,
            };
        }
    }
}
