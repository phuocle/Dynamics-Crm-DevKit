using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security;

namespace DynamicsCrm.DevKit.Shared.Logic
{
    public static class CSharpLateBound
    {
        private const string NEW_LINE = "\r\n";
        private const string TAB = "\t";
        private static EntityMetadata EntityMetadata { get; set; }
        private static string RootNamespace { get; set; }

        public static string GetCsCode(ServiceClient service, EntityMetadata entityMetadata, string rootNameSpace, string shareProject = null)
        {
            EntityMetadata = entityMetadata;
            if (EntityMetadata.Attributes == null)
            {
                var metadataService = new MetadataService(service);
                EntityMetadata = metadataService.FetchEntityMetadata(entityMetadata.LogicalName);
            }
            RootNamespace = rootNameSpace;
            var code = string.Empty;
            var @class = Helper.SafeDeclareName(entityMetadata.SchemaName, GeneratorType.csharp);
            code += $"using Microsoft.Xrm.Sdk;{NEW_LINE}";
            code += $"using System;{NEW_LINE}";
            code += $"using System.Diagnostics;{NEW_LINE}";
            code += $"using System.Linq;{NEW_LINE}{NEW_LINE}";
            code += $"namespace {rootNameSpace}.{@class}OptionSets{NEW_LINE}";
            code += $"{{{NEW_LINE}";
            code += $"{GeneratorEnum()}";
            code += $"}}{NEW_LINE}";
            code += $"namespace {rootNameSpace}{NEW_LINE}";
            code += $"{{{NEW_LINE}";
            code += $"{TAB}[DebuggerNonUserCode()]{NEW_LINE}";
            if (shareProject != null) shareProject += ".";
            code += $"{TAB}internal partial class {@class} : {shareProject}EntityBase{NEW_LINE}";
            code += $"{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}internal struct Fields{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{GeneratorClassFields()}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}public const string EntityLogicalName = \"{EntityMetadata.LogicalName}\";{NEW_LINE}";
            code += $"{TAB}{TAB}[System.Obsolete(\"This value is different for each instance. Please don't use it.\")]{NEW_LINE}";
            code += $"{TAB}{TAB}public const int EntityTypeCode = {EntityMetadata.ObjectTypeCode};{NEW_LINE}";
            code += $"{TAB}{TAB}public const string EntityCollectionSchemaName = \"{EntityMetadata.CollectionSchemaName}\";{NEW_LINE}";
            code += $"{TAB}{TAB}public const string EntityDisplayCollectionName = \"{EntityMetadata.DisplayCollectionName?.UserLocalizedLabel?.Label}\";{NEW_LINE}";
            code += $"{TAB}{TAB}public const string DisplayName = \"{EntityMetadata.DisplayName?.UserLocalizedLabel?.Label}\";{NEW_LINE}";
            code += $"{TAB}{TAB}public const string EntitySetName = \"{EntityMetadata.EntitySetName}\";{NEW_LINE}";
            code += $"{TAB}{TAB}public const string EntityLogicalCollectionName = \"{EntityMetadata.LogicalCollectionName}\";{NEW_LINE}";
            code += $"{TAB}{TAB}public const string EntityPrimaryIdAttribute = \"{EntityMetadata.PrimaryIdAttribute}\";{NEW_LINE}";
            code += $"{TAB}{TAB}public const string EntityPrimaryImageAttribute = \"{EntityMetadata.PrimaryImageAttribute}\";{NEW_LINE}";
            code += $"{TAB}{TAB}public const string EntityPrimaryNameAttribute = \"{EntityMetadata.PrimaryNameAttribute}\";{NEW_LINE}";
            code += $"{TAB}{TAB}public const string EntitySchemaName = \"{EntityMetadata.SchemaName}\";{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// Instance new late bound class <see cref=\"{@class}\"/> with empty Guid.{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Entity = new Entity(EntityLogicalName, Guid.Empty);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}PreEntity = CloneThisEntity(Entity);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// Instance new late bound class <see cref=\"{@class}\"/> with <paramref name=\"{@class}Id\"/>.{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(Guid {@class}Id){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Entity = new Entity(EntityLogicalName, {@class}Id);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}PreEntity = CloneThisEntity(Entity);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// Instance new late bound class <see cref=\"{@class}\"/> with alternate key (<paramref name=\"keyName\"/>, <paramref name=\"keyValue\"/>).{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(string keyName, object keyValue){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Entity = new Entity(EntityLogicalName, keyName, keyValue);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}PreEntity = CloneThisEntity(Entity);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// Instance new late bound class <see cref=\"{@class}\"/> with <paramref name=\"targetEntity\"/>.{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(Entity targetEntity){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}PreEntity = CloneThisEntity(Entity);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// Instance new late bound class <see cref=\"{@class}\"/> with <paramref name=\"preEntity\"/>. Then copy all attributes from <paramref name=\"targetEntity\"/> to <paramref name=\"preEntity\"/>. Existing attribute will be overwritten.{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <exception cref=\"InvalidPluginExecutionException\">when <paramref name=\"targetEntity\"/> is null.</exception>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(Entity preEntity, Entity targetEntity){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (targetEntity == null) throw new InvalidPluginExecutionException($\"new {@class}(preEntity, targetEntity) with targetEntity = null\");{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Entity = CloneThisEntity(preEntity);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}foreach (var property in targetEntity?.Attributes?.ToList()){NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var key = property.Key;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var value = property.Value;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}Entity[key] = value;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}PreEntity = CloneThisEntity(Entity);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// Instance new late bound class <see cref=\"{@class}\"/> with <paramref name=\"preEntity\"/>. Then copy all attributes from <paramref name=\"targetEntity\"/> to <paramref name=\"preEntity\"/>. After that copy all attributes from <paramref name=\"postEntity\"/> to the last result. Existing attribute will be overwritten.{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <exception cref=\"InvalidPluginExecutionException\">when <paramref name=\"targetEntity\"/> is null.</exception>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(Entity preEntity, Entity targetEntity, Entity postEntity){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (targetEntity == null) throw new InvalidPluginExecutionException($\"new {@class}(preEntity, targetEntity, postEntity) with targetEntity = null\");{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (postEntity == null) postEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Entity = CloneThisEntity(preEntity);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}foreach (var property in targetEntity?.Attributes?.ToList()){NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var key = property.Key;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var value = property.Value;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}Entity[key] = value;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}foreach (var property in postEntity?.Attributes?.ToList()){NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var key = property.Key;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var value = property.Value;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}Entity[key] = value;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}PreEntity = CloneThisEntity(Entity);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// Instance new late bound class <see cref=\"{@class}\"/> with alternate <paramref name=\"keys\"/>.{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(KeyAttributeCollection keys){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Entity = new Entity(EntityLogicalName, keys);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}PreEntity = CloneThisEntity(Entity);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{GeneratorCode()}";
            var existingNames = GetExistingPropertyNames();
            code += $"{GeneratorImageCode(existingNames)}";
            code += $"{GeneratorFileCode(existingNames)}";
            code = code.TrimEnd($"{NEW_LINE}".ToCharArray());
            code += $"{NEW_LINE}";
            code += $"{TAB}}}{NEW_LINE}";
            code += $"}}";
            return $"{Helper.GetDefaultHeaderForGeneratedCs()}{code}";
        }

        private static HashSet<string> GetExistingPropertyNames()
        {
            var names = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (!IsFieldOk(attribute)) continue;
                var utc = string.Empty;
                if (attribute is DateTimeAttributeMetadata datetime)
                    if (datetime.DateTimeBehavior == DateTimeBehavior.UserLocal) utc = "Utc";
                var propName = Helper.SafeDeclareName(attribute.SchemaName, GeneratorType.csharp, EntityMetadata.SchemaName, attribute) + utc;
                names.Add(propName);
            }
            return names;
        }

        private static string GetGeneratorImageCode(string schemaName, string logicalName)
        {
            var code = string.Empty;
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Image</strong> - byte[] - Thumbnail image data</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Logical Name</strong>: {logicalName}</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public byte[] {schemaName}{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<byte[]>(\"{logicalName}\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[\"{logicalName}\"] = value; }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>ReadOnly</strong> - string - Relative URL for the image</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Logical Name</strong>: {logicalName}_url</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public string {schemaName}Url{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<string>(\"{logicalName}_url\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>ReadOnly</strong> - long? - Timestamp of last image update</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Logical Name</strong>: {logicalName}_timestamp</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public long? {schemaName}Timestamp{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<long?>(\"{logicalName}_timestamp\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para>Download full-size image. Requires <see cref=\"Microsoft.Xrm.Sdk.IOrganizationService\"/>.</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public byte[] {schemaName}_Download(Microsoft.Xrm.Sdk.IOrganizationService service){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var request = new Microsoft.Crm.Sdk.Messages.InitializeFileBlocksDownloadRequest{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}Target = Entity.ToEntityReference(),{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}FileAttributeName = \"{logicalName}\"{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var response = (Microsoft.Crm.Sdk.Messages.InitializeFileBlocksDownloadResponse)service.Execute(request);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var data = new byte[response.FileSizeInBytes];{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}long offset = 0;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}while (offset < response.FileSizeInBytes){NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var blockRequest = new Microsoft.Crm.Sdk.Messages.DownloadBlockRequest{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{TAB}FileContinuationToken = response.FileContinuationToken,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{TAB}BlockLength = (int)Math.Min(4 * 1024 * 1024, response.FileSizeInBytes - offset),{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Offset = offset{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var blockResponse = (Microsoft.Crm.Sdk.Messages.DownloadBlockResponse)service.Execute(blockRequest);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}Array.Copy(blockResponse.Data, 0, data, offset, blockResponse.Data.Length);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}offset += blockResponse.Data.Length;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}return data;{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";

            return code;
        }
        private static string GeneratorImageCode(HashSet<string> existingNames)
        {
            var code = string.Empty;
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (attribute is ImageAttributeMetadata image)
                {
                    if (image.IsPrimaryImage ?? false)
                    {
                        code += GetGeneratorImageCode("EntityImage", image.LogicalName);
                        existingNames.Add("EntityImage");
                        existingNames.Add("EntityImageUrl");
                        existingNames.Add("EntityImageTimestamp");
                        existingNames.Add("EntityImage_Download");
                    }
                    else
                    {
                        if (image.LogicalName == "entityimage") continue;
                        var safeName = attribute.SchemaName;
                        if (existingNames.Contains(safeName) || existingNames.Contains(safeName + "Url") || existingNames.Contains(safeName + "Timestamp"))
                            safeName = safeName + "_Image";
                        code += GetGeneratorImageCode(safeName, attribute.LogicalName);
                        existingNames.Add(safeName);
                        existingNames.Add(safeName + "Url");
                        existingNames.Add(safeName + "Timestamp");
                        existingNames.Add(safeName + "_Download");
                    }
                }
            }
            code = code.TrimEnd($",{NEW_LINE}".ToCharArray());
            return code;
        }

        private static string GetGeneratorFileCode(string safeName, string logicalName, int? maxSizeInKB)
        {
            var code = string.Empty;
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>ReadOnly</strong> - Guid? - File Id. Check if file has been uploaded.</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Logical Name</strong>: {logicalName}</para>{NEW_LINE}";
            if (maxSizeInKB.HasValue)
                code += $"{TAB}{TAB}/// <para><strong>File</strong> - <strong>MaxSize</strong>: {maxSizeInKB.Value.ToString("#,##0", CultureInfo.InvariantCulture)} KB</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public Guid? {safeName}Id{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<Guid?>(\"{logicalName}\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>ReadOnly</strong> - string - File name of the uploaded file</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Logical Name</strong>: {logicalName}_name</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public string {safeName}Name{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<string>(\"{logicalName}_name\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para>Download file data. Requires <see cref=\"Microsoft.Xrm.Sdk.IOrganizationService\"/>.</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public byte[] {safeName}_Download(Microsoft.Xrm.Sdk.IOrganizationService service){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var request = new Microsoft.Crm.Sdk.Messages.InitializeFileBlocksDownloadRequest{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}Target = Entity.ToEntityReference(),{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}FileAttributeName = \"{logicalName}\"{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var response = (Microsoft.Crm.Sdk.Messages.InitializeFileBlocksDownloadResponse)service.Execute(request);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var data = new byte[response.FileSizeInBytes];{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}long offset = 0;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}while (offset < response.FileSizeInBytes){NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var blockRequest = new Microsoft.Crm.Sdk.Messages.DownloadBlockRequest{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{TAB}FileContinuationToken = response.FileContinuationToken,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{TAB}BlockLength = (int)Math.Min(4 * 1024 * 1024, response.FileSizeInBytes - offset),{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Offset = offset{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}var blockResponse = (Microsoft.Crm.Sdk.Messages.DownloadBlockResponse)service.Execute(blockRequest);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}Array.Copy(blockResponse.Data, 0, data, offset, blockResponse.Data.Length);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}offset += blockResponse.Data.Length;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}return data;{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";

            return code;
        }

        private static string GeneratorFileCode(HashSet<string> existingNames)
        {
            var code = string.Empty;
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (attribute is FileAttributeMetadata file)
                {
                    var safeName = attribute.SchemaName;
                    if (existingNames.Contains(safeName + "Id") || existingNames.Contains(safeName + "Name"))
                        safeName = safeName + "_File";
                    code += GetGeneratorFileCode(safeName, attribute.LogicalName, file.MaxSizeInKB);
                    existingNames.Add(safeName + "Id");
                    existingNames.Add(safeName + "Name");
                    existingNames.Add(safeName + "_Download");
                }
            }
            return code;
        }

        private static string GeneratorEnum()
        {
            var @enum = string.Empty;
            @enum += $"{TAB}internal enum [[Enum]]{NEW_LINE}";
            @enum += $"{TAB}{{{NEW_LINE}";
            @enum += $"[[Declare]]";
            @enum += $"{TAB}}}{NEW_LINE}";
            var code = string.Empty;
            var attributes = EntityMetadata.Attributes.OrderBy(x => x.SchemaName);
            var stateCodeAttribute = attributes.Where(x => x.LogicalName == "statecode").FirstOrDefault();
            var stateCodeOptions = new List<NameValue>();
            if (stateCodeAttribute != null) stateCodeOptions = GetStateCodeOptions(stateCodeAttribute);
            foreach (var attribute in attributes)
            {
                if (Helper.IsOptionSet(attribute))
                {
                    if (attribute.SchemaName.EndsWith("IdType")) continue;
                    var tmp = string.Empty;
                    var values = attribute.OptionSetValues();
                    if (values.Count == 0) continue;
                    foreach (var value in values)
                    {
                        tmp += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
                        tmp += $"{TAB}{TAB}/// <para><strong>Display Name</strong>: {value.Label?.TrimEnd("\r\n".ToCharArray())}</para>{NEW_LINE}";
                        tmp += $"{TAB}{TAB}/// <para><strong>Value</strong>: {int.Parse(value.Value).ToString("#,##0")}</para>{NEW_LINE}";
                        if (value.Name3.Length > 0)
                        {
                            var statusCodeComment = $"<strong>StateCode.{stateCodeOptions.Where(x => x.Value == value.Name3).FirstOrDefault()?.Name}</strong>";
                            tmp += $"{TAB}{TAB}/// <para>{statusCodeComment}</para>{NEW_LINE}";
                        }
                        tmp += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
                        tmp += $"{TAB}{TAB}{value.Name} = {int.Parse(value.Value).ToString("#,##0", CultureInfo.InvariantCulture).Replace(",", "_")},{NEW_LINE}";
                    }
                    tmp = tmp.TrimEnd($",{NEW_LINE}".ToCharArray());
                    tmp += $"{NEW_LINE}";
                    code += @enum.Replace("[[Enum]]", Helper.SafeIdentifier(attribute.SchemaName)).Replace("[[Declare]]", tmp);
                }
            }
            code = code.TrimEnd($",{NEW_LINE}".ToCharArray());
            code += $"{NEW_LINE}";
            return code;
        }

        private static List<NameValue> GetStateCodeOptions(AttributeMetadata stateCodeAttribute)
        {
            var values = new List<NameValue>();
            var options = ((EnumAttributeMetadata)stateCodeAttribute)?.OptionSet?.Options;
            if (options == null) return values;
            foreach (StateOptionMetadata option in options)
            {
                var value = option?.Value ?? -1;
                var name = option?.Label?.UserLocalizedLabel?.Label ?? String.Empty;
                name = name.Replace("-", "_");
                if (name.Length == 0) continue;
                name = Helper.SafeIdentifier(name);
                values.Add(new NameValue
                {
                    Name = $"{name}",
                    Value = $"{value}"
                });
            }
            return values;
        }

        private static bool IsFieldOk(AttributeMetadata attribute)
        {
            if (attribute is ImageAttributeMetadata) return false;
            if (attribute is FileAttributeMetadata) return false;
            if (attribute.AttributeOf != null) return false;
            if (attribute.AttributeTypeName == AttributeTypeDisplayName.ImageType) return false;
            if (attribute.AttributeType == AttributeTypeCode.EntityName) return true;
            if (Helper.IsOptionSet(attribute) && attribute.OptionSetValues().Count == 0) return false;
            if (attribute.AttributeType == AttributeTypeCode.Memo ||
                attribute.AttributeType == AttributeTypeCode.Virtual ||
                attribute.AttributeType == AttributeTypeCode.EntityName ||
                attribute.AttributeType == AttributeTypeCode.String ||
                attribute.AttributeType == AttributeTypeCode.Boolean ||
                attribute.AttributeType == AttributeTypeCode.Integer ||
                attribute.AttributeType == AttributeTypeCode.BigInt ||
                attribute.AttributeType == AttributeTypeCode.DateTime ||
                attribute.AttributeType == AttributeTypeCode.Uniqueidentifier ||
                attribute.AttributeType == AttributeTypeCode.Decimal ||
                attribute.AttributeType == AttributeTypeCode.Double ||
                attribute.AttributeType == AttributeTypeCode.Lookup ||
                attribute.AttributeType == AttributeTypeCode.Owner ||
                attribute.AttributeType == AttributeTypeCode.Customer ||
                attribute.AttributeType == AttributeTypeCode.Picklist ||
                attribute.AttributeType == AttributeTypeCode.Money ||
                attribute.AttributeType == AttributeTypeCode.State ||
                attribute.AttributeType == AttributeTypeCode.Status ||
                attribute.AttributeType == AttributeTypeCode.PartyList
            )
                return true;
            return false;
        }

        private static string GeneratorClassFields()
        {
            var code = string.Empty;
            var t = string.Empty;
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (!IsFieldOk(attribute)) continue;
                if (!string.IsNullOrWhiteSpace(attribute.DeprecatedVersion))
                    code += $"{TAB}{TAB}{TAB}[System.Obsolete(\"Deprecated from version: {attribute.DeprecatedVersion}\")]{NEW_LINE}";
                code += $"{TAB}{TAB}{TAB}public const string {attribute.SchemaName} = \"{attribute.LogicalName}\";{NEW_LINE}";
            }
            return code;
        }

        private static string GeneratorCode()
        {
            var code = string.Empty;
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (!IsFieldOk(attribute)) continue;
                var utc = string.Empty;
                if (attribute is DateTimeAttributeMetadata datetime)
                    if (datetime.DateTimeBehavior == DateTimeBehavior.UserLocal) utc = "Utc";
                code += $"{GetXml(attribute)}";
                if (!string.IsNullOrWhiteSpace(attribute.DeprecatedVersion))
                    code += $"{TAB}{TAB}[System.Obsolete(\"Deprecated from version: {attribute.DeprecatedVersion}\")]{NEW_LINE}";
                code += $"{TAB}{TAB}public {DeclareType(attribute)} {Helper.SafeDeclareName(attribute.SchemaName, GeneratorType.csharp, EntityMetadata.SchemaName, attribute)}{utc}{NEW_LINE}";
                code += $"{TAB}{TAB}{{{NEW_LINE}";
                code += $"{GetGet(attribute)}";
                if ((attribute.IsValidForCreate ?? false) || (attribute.IsValidForUpdate ?? false))
                    code += $"{GetSet(attribute)}";
                code += $"{TAB}{TAB}}}{NEW_LINE}";

            }
            code = code.TrimEnd($",{NEW_LINE}".ToCharArray());
            code += $"{NEW_LINE}";
            return code;
        }

        private static string DeclareType(AttributeMetadata attribute)
        {
            if ((attribute.IsPrimaryId ?? false) && $"{EntityMetadata.LogicalName}id" == attribute.LogicalName)
                return $"Guid";
            switch (attribute.AttributeType)
            {
                case AttributeTypeCode.Picklist:
                case AttributeTypeCode.State:
                case AttributeTypeCode.Status:
                    return $"{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)}?";
                case AttributeTypeCode.BigInt:
                    return $"long?";
                case AttributeTypeCode.Integer:
                    return $"int?";
                case AttributeTypeCode.Boolean:
                    return $"bool?";
                case AttributeTypeCode.DateTime:
                    {
                        var datetime = attribute as DateTimeAttributeMetadata;
                        if (datetime.DateTimeBehavior == null)
                            return $"DateTime?";
                        else if (datetime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                            return $"Date?";
                        else if (datetime.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                            return $"DateTime?";
                        else
                            return $"DateTime?";
                    }
                case AttributeTypeCode.Decimal:
                    return $"decimal?";
                case AttributeTypeCode.Money:
                    return $"decimal?";
                case AttributeTypeCode.Double:
                    return $"double?";
                case AttributeTypeCode.Uniqueidentifier:
                    if ($"{EntityMetadata.LogicalName}id" == attribute.LogicalName)
                        return $"Guid";
                    return $"Guid?";
                case AttributeTypeCode.Lookup:
                case AttributeTypeCode.Owner:
                case AttributeTypeCode.Customer:
                    return $"EntityReference";
                case AttributeTypeCode.Memo:
                case AttributeTypeCode.Virtual:
                case AttributeTypeCode.EntityName:
                case AttributeTypeCode.String:
                    if (attribute is MultiSelectPicklistAttributeMetadata)
                        return $"System.Collections.Generic.List<{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{attribute.SchemaName}>";
                    else
                        return $"string";
                case AttributeTypeCode.PartyList:
                    return $"System.Collections.Generic.List<ActivityParty>";
                default:
                    throw new InvalidOperationException($"Unsupported AttributeType '{attribute.AttributeType}' for attribute '{attribute.LogicalName}'. IsFieldOk should have filtered this.");
            }
        }

        private static string GetSet(AttributeMetadata attribute)
        {
            var code = string.Empty;
            switch (attribute.AttributeType)
            {
                case AttributeTypeCode.Picklist:
                case AttributeTypeCode.State:
                case AttributeTypeCode.Status:
                    code += $"{TAB}{TAB}{TAB}set{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}if (value.HasValue){NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = new OptionSetValue((int)value.Value);{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}else{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = null;{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                    return code;
                case AttributeTypeCode.BigInt:
                    return $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[Fields.{attribute.SchemaName}] = value; }}{NEW_LINE}";
                case AttributeTypeCode.Integer:
                    return $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[Fields.{attribute.SchemaName}] = value; }}{NEW_LINE}";
                case AttributeTypeCode.Boolean:
                    return $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[Fields.{attribute.SchemaName}] = value; }}{NEW_LINE}";
                case AttributeTypeCode.DateTime:
                    var datetime = attribute as DateTimeAttributeMetadata;
                    if (datetime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    {
                        code += $"{TAB}{TAB}{TAB}set{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}if (value.HasValue){NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}DateTime dateTime = value.Value.ToDateTime();{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = dateTime;{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}else{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = null;{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        return code;
                    }
                    else
                    {
                        return $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[Fields.{attribute.SchemaName}] = value; }}{NEW_LINE}";
                    }
                case AttributeTypeCode.Decimal:
                    return $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[Fields.{attribute.SchemaName}] = value; }}{NEW_LINE}";
                case AttributeTypeCode.Money:
                    code += $"{TAB}{TAB}{TAB}set{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}if (value.HasValue){NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = new Money(value.Value);{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}else{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = null;{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                    return code;
                case AttributeTypeCode.Double:
                    return $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[Fields.{attribute.SchemaName}] = value; }}{NEW_LINE}";
                case AttributeTypeCode.Uniqueidentifier:
                    if ($"{EntityMetadata.LogicalName}id" == attribute.LogicalName)
                    {
                        code += $"{TAB}{TAB}{TAB}set{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = value;{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}Entity.Id = value;{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        return code;
                    }
                    else
                    {
                        return $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[Fields.{attribute.SchemaName}] = value; }}{NEW_LINE}";
                    }
                case AttributeTypeCode.Lookup:
                case AttributeTypeCode.Owner:
                case AttributeTypeCode.Customer:
                    return $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[Fields.{attribute.SchemaName}] = value; }}{NEW_LINE}";
                case AttributeTypeCode.Memo:
                case AttributeTypeCode.Virtual:
                case AttributeTypeCode.EntityName:
                case AttributeTypeCode.String:
                    if (attribute is MultiSelectPicklistAttributeMetadata)
                    {
                        code += $"{TAB}{TAB}{TAB}set{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}var data = new OptionSetValueCollection();{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}foreach (var item in value){NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}data.Add(new OptionSetValue((int)item));{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}if (data.Count == 0){NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = null;{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}else{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = data;{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        return code;
                    }
                    else
                        return $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[Fields.{attribute.SchemaName}] = value; }}{NEW_LINE}";
                case AttributeTypeCode.PartyList:
                    code += $"{TAB}{TAB}{TAB}set{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}var data = new EntityCollection();{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}foreach (var item in value){NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}{TAB}data.Entities.Add(item.Entity);{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}Entity.Attributes[Fields.{attribute.SchemaName}] = data;{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                    return code;
                default:
                    throw new InvalidOperationException($"Unsupported AttributeType '{attribute.AttributeType}' for attribute '{attribute.LogicalName}'. IsFieldOk should have filtered this.");
            }
        }

        private static string GetGet(AttributeMetadata attribute)
        {
            var code = string.Empty;
            switch (attribute.AttributeType)
            {
                case AttributeTypeCode.Picklist:
                case AttributeTypeCode.State:
                case AttributeTypeCode.Status:
                    code += $"{TAB}{TAB}{TAB}get{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}var value = Entity.GetAttributeValue<OptionSetValue>(Fields.{attribute.SchemaName});{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}if (value == null) return null;{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}return ({RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)})value.Value;{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                    return code;
                case AttributeTypeCode.BigInt:
                    return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<long?>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                case AttributeTypeCode.Integer:
                    return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<int?>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                case AttributeTypeCode.Boolean:
                    return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<bool?>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                case AttributeTypeCode.DateTime:
                    var datetime = attribute as DateTimeAttributeMetadata;
                    if (datetime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    {
                        code += $"{TAB}{TAB}{TAB}get{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}var dateTime = Entity.GetAttributeValue<DateTime?>(Fields.{attribute.SchemaName});{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}if (dateTime == null) return null;{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}return dateTime.Value.ToDate();{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        return code;
                    }
                    else
                        return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<DateTime?>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                case AttributeTypeCode.Decimal:
                    return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<decimal?>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                case AttributeTypeCode.Money:
                    code += $"{TAB}{TAB}{TAB}get{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}var value = Entity.GetAttributeValue<Money>(Fields.{attribute.SchemaName});{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}if (value == null) return null;{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}return value.Value;{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                    return code;
                case AttributeTypeCode.Double:
                    return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<double?>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                case AttributeTypeCode.Uniqueidentifier:
                    if ((attribute.IsPrimaryId ?? false) && $"{EntityMetadata.LogicalName}id" == attribute.LogicalName)
                        return $"{TAB}{TAB}{TAB}get {{ return Id; }}{NEW_LINE}";
                    else
                    {
                        if ($"{EntityMetadata.LogicalName}id" == attribute.LogicalName)
                            return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<Guid>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                        return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<Guid?>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                    }
                case AttributeTypeCode.Lookup:
                case AttributeTypeCode.Owner:
                case AttributeTypeCode.Customer:
                    return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<EntityReference>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                case AttributeTypeCode.Memo:
                case AttributeTypeCode.Virtual:
                case AttributeTypeCode.EntityName:
                case AttributeTypeCode.String:
                    if (attribute is MultiSelectPicklistAttributeMetadata)
                    {
                        code += $"{TAB}{TAB}{TAB}get{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}var data = new System.Collections.Generic.List<{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{attribute.SchemaName}>();{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}var items = Entity.GetAttributeValue<OptionSetValueCollection>(Fields.{attribute.SchemaName});{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}if (items != null){NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}foreach (OptionSetValue item in items){NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}{{{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}{TAB}data.Add(({RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{attribute.SchemaName})item.Value);{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}{TAB}return data;{NEW_LINE}";
                        code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                        return code;
                    }
                    else
                        return $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<string>(Fields.{attribute.SchemaName}); }}{NEW_LINE}";
                case AttributeTypeCode.PartyList:
                    code += $"{TAB}{TAB}{TAB}get{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}var data = new System.Collections.Generic.List<ActivityParty>();{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}foreach (var item in Entity.GetAttributeValue<EntityCollection>(Fields.{attribute.SchemaName}).Entities){NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}{TAB}data.Add(new ActivityParty(item));{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}{TAB}return data;{NEW_LINE}";
                    code += $"{TAB}{TAB}{TAB}}}{NEW_LINE}";
                    return code;
                default:
                    throw new InvalidOperationException($"Unsupported AttributeType '{attribute.AttributeType}' for attribute '{attribute.LogicalName}'. IsFieldOk should have filtered this.");
            }
        }

        private static string GetXml(AttributeMetadata attribute)
        {
            var line1 = string.Empty;
            var line2 = string.Empty;
            var line3 = string.Empty;
            var line4 = string.Empty;
            var readOnly = string.Empty;
            if (!(attribute.IsValidForCreate ?? false) && !(attribute.IsValidForUpdate ?? false))
                readOnly = "<strong>ReadOnly</strong>";
            if (readOnly.Length > 0) line3 += readOnly + " - ";
            if (attribute.IsPrimaryId ?? false)
                if ($"{EntityMetadata.LogicalName}id" == attribute.LogicalName)
                    line3 += "<strong>Primary Key</strong>: ";
            if (attribute.IsPrimaryName ?? false)
                line3 += "<strong>Primary Name</strong>: ";
            if (attribute.RequiredLevel?.Value == AttributeRequiredLevel.ApplicationRequired) line3 += "Required - ";
            if (attribute is DateTimeAttributeMetadata datetime)
            {
                line3 += "<strong>Date and Time</strong> - ";
                if (datetime.DateTimeBehavior == DateTimeBehavior.DateOnly)
                    line3 += "<strong>DateTimeBehavior</strong>: DateOnly - <strong>DateTimeFormat</strong>: DateOnly";
                else if (datetime.DateTimeBehavior == DateTimeBehavior.UserLocal)
                {
                    if (datetime.Format == DateTimeFormat.DateOnly)
                        line3 += "<strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly";
                    else if (datetime.Format == DateTimeFormat.DateAndTime)
                        line3 += "<strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime";
                }
                else if (datetime.DateTimeBehavior == DateTimeBehavior.TimeZoneIndependent)
                {
                    if (datetime.Format == DateTimeFormat.DateOnly)
                        line3 += "<strong>DateTimeBehavior</strong>: TimeZoneIndependent - <strong>DateTimeFormat</strong>: DateOnly";
                    else if (datetime.Format == DateTimeFormat.DateAndTime)
                        line3 += "<strong>DateTimeBehavior</strong>: TimeZoneIndependent - <strong>DateTimeFormat</strong>: DateAndTime";
                }
                else
                    line3 += $"<strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime";
            }
            else if (attribute is MultiSelectPicklistAttributeMetadata multiple)
            {
                line3 += $"<strong>MultiSelect OptionSet</strong>: <see cref=\"{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)}\"/>";
                if (multiple.DefaultFormValue != null && multiple.DefaultFormValue != -1)
                {
                    var option = multiple.OptionSetValues().FirstOrDefault(x => x.Value == multiple.DefaultFormValue.ToString());
                    if (option != null)
                    {
                        line4 = $"<strong>Default Value</strong>: <see cref=\"{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)}.{option.Name}\"/>";
                    }
                }
                else
                {
                    line4 = $"<strong>Default Value</strong>: <see langword=\"null\"/>";
                }
            }
            else if (attribute is PicklistAttributeMetadata picklist)
            {
                line3 += $"<strong>OptionSet</strong>: <see cref=\"{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)}\"/>";
                if (picklist.DefaultFormValue != null && picklist.DefaultFormValue != -1)
                {
                    var option = picklist.OptionSetValues().FirstOrDefault(x => x.Value == picklist.DefaultFormValue.ToString());
                    if (option != null)
                    {
                        line4 = $"<strong>Default Value</strong>: <see cref=\"{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)}.{option.Name}\"/>";
                    }
                }
                else
                {
                    line4 = $"<strong>Default Value</strong>: <see langword=\"null\"/>";
                }
            }
            else if (attribute is StateAttributeMetadata state)
            {
                line3 += $"<strong>Status</strong>: <see cref=\"{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)}\"/>";
                if (state.DefaultFormValue != null && state.DefaultFormValue != -1)
                {
                    var option = state.OptionSetValues().FirstOrDefault(x => x.Value == state.DefaultFormValue.ToString());
                    if (option != null)
                    {
                        line4 = $"<strong>Default Value</strong>: <see cref=\"{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)}.{option.Name}\"/>";
                    }
                }
            }
            else if (attribute is StatusAttributeMetadata status)
            {
                line3 += $"<strong>Status Reason</strong>: <see cref=\"{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)}\"/>";
                if (status.DefaultFormValue != null && status.DefaultFormValue != -1)
                {
                    var option = status.OptionSetValues().FirstOrDefault(x => x.Value == status.DefaultFormValue.ToString());
                    if (option != null)
                    {
                        line4 = $"<strong>Default Value</strong>: <see cref=\"{RootNamespace}.{Helper.SafeDeclareName(EntityMetadata.SchemaName, GeneratorType.csharp)}OptionSets.{Helper.SafeIdentifier(attribute.SchemaName)}.{option.Name}\"/>";
                    }
                }
                else
                {
                    line4 = $"<strong>Default Value</strong>: <see langword=\"null\"/>";
                }
            }
            else if (attribute is LookupAttributeMetadata lookup)
            {
                if (attribute.AttributeType == AttributeTypeCode.Owner)
                    line3 += $"<strong>Owner</strong>: ";
                else if (attribute.AttributeType == AttributeTypeCode.Customer)
                    line3 += $"<strong>Customer</strong>: ";
                else if (lookup.Targets != null && lookup.Targets.Length > 1)
                    line3 += $"<strong>Polymorphic Lookup</strong>: ";
                else
                    line3 += $"<strong>Lookup</strong>: ";
                if (lookup.Targets != null)
                {
                    foreach (var target in lookup.Targets)
                    {
                        line3 += $"<see cref=\"{target}\"/>, ";
                    }
                    line3 = line3.TrimEnd(", ".ToCharArray());
                }
            }
            else if (attribute is BooleanAttributeMetadata boolean)
            {
                var temp = $"[<strong>{boolean?.OptionSet?.TrueOption?.Label?.UserLocalizedLabel?.Label}</strong>]: true - [<strong>{boolean?.OptionSet?.FalseOption?.Label?.UserLocalizedLabel?.Label}</strong>]: false";
                line3 += $"<strong>Two Option</strong> - " + temp;
                if (boolean.DefaultValue != null)
                {
                    if (boolean.DefaultValue ?? false)
                        line4 = $"<strong>Default Value</strong> [<strong>{boolean?.OptionSet?.TrueOption?.Label?.UserLocalizedLabel?.Label}</strong>]: true";
                    else
                        line4 = $"<strong>Default Value</strong> [<strong>{boolean?.OptionSet?.FalseOption?.Label?.UserLocalizedLabel?.Label}</strong>]: false";
                }
            }
            else if (attribute is DoubleAttributeMetadata @double)
            {
                line3 += "<strong>Floating Point Number</strong>";
                if (@double.Precision.HasValue) line3 += $" - <strong>Precision</strong>: {@double.Precision.Value}";
            }
            else if (attribute is DecimalAttributeMetadata @decimal)
            {
                line3 += "<strong>Decimal Number</strong>";
                if (@decimal.Precision.HasValue) line3 += $" - <strong>Precision</strong>: {@decimal.Precision.Value}";
            }
            else if (attribute is IntegerAttributeMetadata integer)
            {
                line3 += "<strong>Whole Number</strong>";
                if (integer.Format.HasValue && integer.Format.Value != IntegerFormat.None)
                    line3 += $" - <strong>Format</strong>: {integer.Format.Value}";
            }
            else if (attribute is MoneyAttributeMetadata money)
            {
                line3 += "<strong>Currency</strong>";
                if (money.PrecisionSource.HasValue)
                {
                    if (money.PrecisionSource.Value == 0)
                        line3 += $" - <strong>Precision</strong>: {(money.Precision.HasValue ? money.Precision.Value.ToString() : "2")}";
                    else if (money.PrecisionSource.Value == 1)
                        line3 += " - <strong>Precision</strong>: Organization.PricingDecimalPrecision";
                    else if (money.PrecisionSource.Value == 2)
                        line3 += " - <strong>Precision</strong>: TransactionCurrency.CurrencyPrecision";
                }
                else if (money.Precision.HasValue)
                    line3 += $" - <strong>Precision</strong>: {money.Precision.Value}";
            }
            else if (attribute is BigIntAttributeMetadata)
            {
                line3 += "<strong>Big Integer</strong>";
            }
            else if (attribute is MemoAttributeMetadata memo)
            {
                line3 += "<strong>Multiple Lines of Text</strong>";
                if (memo.FormatName?.Value != null && memo.FormatName.Value != "TextArea")
                    line3 += $" - <strong>Format</strong>: {memo.FormatName.Value}";
            }
            else if (attribute is StringAttributeMetadata str)
            {
                line3 += "<strong>Single Line of Text</strong>";
                if (str.FormatName?.Value != null && str.FormatName.Value != "Text")
                    line3 += $" - <strong>Format</strong>: {str.FormatName.Value}";
            }
            else
                line3 += "<strong>" + attribute.AttributeType.ToString() + "</strong>";
            if (attribute.GetMaxLength().HasValue) line3 += " - <strong>MaxLength</strong>: " + attribute.GetMaxLength().Value.ToString("#,##0", CultureInfo.InvariantCulture);
            if (attribute.GetMinValue().HasValue) line3 += " - <strong>MinValue</strong>: " + attribute.GetMinValue().Value.ToString("#,##0", CultureInfo.InvariantCulture);
            if (attribute.GetMaxValue().HasValue) line3 += " - <strong>MaxValue</strong>: " + attribute.GetMaxValue().Value.ToString("#,##0", CultureInfo.InvariantCulture);
            if (!string.IsNullOrWhiteSpace(attribute.AutoNumberFormat)) line3 += $" - <strong>AutoNumber</strong>: {attribute.AutoNumberFormat}";
            if (attribute.IsAuditEnabled?.Value == true) line3 += " - <strong>Audit</strong>: Enabled";
            var xml = $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            line1 = attribute?.DisplayName?.UserLocalizedLabel?.Label.TrimNewLine();
            if (line1 != null && line1.Length > 0)
            {
                xml += $"{TAB}{TAB}/// <para><strong>Display Name</strong>: {line1}</para>{NEW_LINE}";
            }
            xml += $"{TAB}{TAB}/// <para><strong>Logical Name</strong>: {attribute.LogicalName}</para>{NEW_LINE}";
            var description = attribute?.Description?.UserLocalizedLabel?.Label;
            if (!string.IsNullOrWhiteSpace(description))
            {
                line2 = SecurityElement.Escape(description.TrimNewLine());
                xml += $"{TAB}{TAB}/// <para><strong>Description</strong>: {line2}</para>{NEW_LINE}";
            }
            xml += $"{TAB}{TAB}/// <para>{line3}</para>{NEW_LINE}";
            if (attribute.SourceType != null && attribute.SourceType != 0)
            {
                if (attribute.SourceType == 1) line4 = "<strong>Calculated Field</strong>";
                else if (attribute.SourceType == 2) line4 = "<strong>Rollup Field</strong>";
                else if (attribute.SourceType == 3) line4 = "<strong>Power-Fx Field</strong>";
                xml += $"{TAB}{TAB}/// <para>{line4}</para>{NEW_LINE}";
            }
            else if (attribute.SchemaName.EndsWith("_rollup_Date") || attribute.SchemaName.EndsWith("_rollup_State")) {
                line4 = "<strong>Rollup Field</strong>";
                xml += $"{TAB}{TAB}/// <para>{line4}</para>{NEW_LINE}";
            }
            else if (line4.Length > 0) {
                xml += $"{TAB}{TAB}/// <para>{line4}</para>{NEW_LINE}";
            }
            xml += $"{TAB}{TAB}/// </summary>\r\n";
            return xml;
        }
    }
}