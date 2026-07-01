using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Security;
using System.Text.RegularExpressions;
using System.Xml.Linq;

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
            code += $"{TAB}{TAB}private static void VerifyEntityLogicalName(Entity entity, string parameterName){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (entity == null) return;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (string.Equals(entity.LogicalName, EntityLogicalName, StringComparison.OrdinalIgnoreCase)) return;{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}throw new InvalidPluginExecutionException($\"new {@class} with {{parameterName}}.LogicalName = \\\"{{entity.LogicalName}}\\\", expected \\\"{{EntityLogicalName}}\\\"\");{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
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
            code += $"{TAB}{TAB}/// <para>Use this overload for alternate-key targeting, especially upsert. Updating an alternate-key-only instance requires update support in <c>EntityBase.GetUpdateEntity()</c>.</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(string keyName, object keyValue){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Entity = new Entity(EntityLogicalName, keyName, keyValue);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}PreEntity = CloneThisEntity(Entity);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// Instance new late bound class <see cref=\"{@class}\"/> with <paramref name=\"targetEntity\"/>.{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <exception cref=\"InvalidPluginExecutionException\">when <paramref name=\"targetEntity\"/> LogicalName is not <c>{EntityMetadata.LogicalName}</c>.</exception>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(Entity targetEntity){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}VerifyEntityLogicalName(targetEntity, nameof(targetEntity));{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}PreEntity = CloneThisEntity(Entity);{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// Instance new late bound class <see cref=\"{@class}\"/> with <paramref name=\"preEntity\"/>. Then copy all attributes from <paramref name=\"targetEntity\"/> to <paramref name=\"preEntity\"/>. Existing attribute will be overwritten.{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para>After construction, change tracking starts from the merged entity. <c>GetUpdateEntity()</c> returns only changes made after this constructor completes.</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <exception cref=\"InvalidPluginExecutionException\">when <paramref name=\"targetEntity\"/> is null.</exception>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <exception cref=\"InvalidPluginExecutionException\">when <paramref name=\"preEntity\"/> or <paramref name=\"targetEntity\"/> LogicalName is not <c>{EntityMetadata.LogicalName}</c>.</exception>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(Entity preEntity, Entity targetEntity){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (targetEntity == null) throw new InvalidPluginExecutionException($\"new {@class}(preEntity, targetEntity) with targetEntity = null\");{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}VerifyEntityLogicalName(preEntity, nameof(preEntity));{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}VerifyEntityLogicalName(targetEntity, nameof(targetEntity));{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (preEntity == null) preEntity = new Entity(EntityLogicalName, targetEntity.Id);{NEW_LINE}";
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
            code += $"{TAB}{TAB}/// <para>After construction, change tracking starts from the merged entity. <c>GetUpdateEntity()</c> returns only changes made after this constructor completes.</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <exception cref=\"InvalidPluginExecutionException\">when <paramref name=\"targetEntity\"/> is null.</exception>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <exception cref=\"InvalidPluginExecutionException\">when <paramref name=\"preEntity\"/>, <paramref name=\"targetEntity\"/>, or <paramref name=\"postEntity\"/> LogicalName is not <c>{EntityMetadata.LogicalName}</c>.</exception>{NEW_LINE}";
            code += $"{TAB}{TAB}public {@class}(Entity preEntity, Entity targetEntity, Entity postEntity){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (targetEntity == null) throw new InvalidPluginExecutionException($\"new {@class}(preEntity, targetEntity, postEntity) with targetEntity = null\");{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}VerifyEntityLogicalName(preEntity, nameof(preEntity));{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}VerifyEntityLogicalName(targetEntity, nameof(targetEntity));{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}VerifyEntityLogicalName(postEntity, nameof(postEntity));{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (preEntity == null) preEntity = new Entity(EntityLogicalName, targetEntity.Id);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (postEntity == null) postEntity = new Entity(EntityLogicalName, targetEntity.Id);{NEW_LINE}";
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
            code += $"{TAB}{TAB}/// <para>Use this overload for alternate-key targeting, especially upsert. Updating an alternate-key-only instance requires update support in <c>EntityBase.GetUpdateEntity()</c>.</para>{NEW_LINE}";
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

        private static string XmlText(string value)
        {
            return SecurityElement.Escape(value ?? string.Empty) ?? string.Empty;
        }

        private static string XmlCode(string value)
        {
            return $"<c>{XmlText(value)}</c>";
        }

        private static string XmlPara(string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return string.Empty;
            return $"{TAB}{TAB}/// <para>{value}</para>{NEW_LINE}";
        }

        private static string XmlPara(string label, string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return string.Empty;
            return $"{TAB}{TAB}/// <para><strong>{label}</strong>: {value}</para>{NEW_LINE}";
        }

        private static string TrimAndEscape(string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return string.Empty;
            return XmlText(value.TrimNewLine());
        }

        private static string GetAccessSummary(AttributeMetadata attribute)
        {
            var canCreate = attribute.IsValidForCreate ?? false;
            var canUpdate = attribute.IsValidForUpdate ?? false;
            var canRead = attribute.IsValidForRead ?? true;
            if (canCreate && canUpdate && canRead) return string.Empty;
            if (!canCreate && !canUpdate && canRead) return "ReadOnly";

            var parts = new List<string>();
            if (!canCreate) parts.Add("Create: No");
            if (!canUpdate) parts.Add("Update: No");
            if (!canRead) parts.Add("Read: No");
            return string.Join(", ", parts);
        }

        private static string GetRequiredLevelSummary(AttributeMetadata attribute)
        {
            var requiredLevel = attribute.RequiredLevel?.Value;
            if (!requiredLevel.HasValue || requiredLevel.Value == AttributeRequiredLevel.None) return string.Empty;
            return requiredLevel.Value.ToString();
        }

        private static string GetFieldSecuritySummary(AttributeMetadata attribute)
        {
            return attribute.IsSecured == true ? "Enabled" : string.Empty;
        }

        private static string GetAdvancedFindSummary(AttributeMetadata attribute)
        {
            return attribute.IsValidForAdvancedFind?.Value == false ? "Disabled" : string.Empty;
        }

        private static string GetAlternateKeySummary(AttributeMetadata attribute)
        {
            var keys = EntityMetadata?.Keys?
                .Where(x => x.KeyAttributes != null && x.KeyAttributes.Any(y => y.Equals(attribute.LogicalName, StringComparison.OrdinalIgnoreCase)))
                .OrderBy(x => x.SchemaName)
                .Select(x => XmlCode(x.SchemaName))
                .ToList();
            if (keys == null || keys.Count == 0) return string.Empty;
            return string.Join(", ", keys);
        }

        private static string GetGlobalChoiceSummary(AttributeMetadata attribute)
        {
            var enumAttribute = attribute as EnumAttributeMetadata;
            if (enumAttribute?.OptionSet == null || enumAttribute.OptionSet.IsGlobal != true || string.IsNullOrWhiteSpace(enumAttribute.OptionSet.Name))
                return string.Empty;
            return XmlCode(enumAttribute.OptionSet.Name);
        }

        private static string GetAttributeIdentityXml(AttributeMetadata attribute)
        {
            var xml = string.Empty;
            var displayName = attribute?.DisplayName?.UserLocalizedLabel?.Label;
            xml += XmlPara("Display Name", TrimAndEscape(displayName));
            xml += XmlPara("Logical Name", XmlText(attribute.LogicalName));
            var description = attribute?.Description?.UserLocalizedLabel?.Label;
            xml += XmlPara("Description", TrimAndEscape(description));
            return xml;
        }

        private static string GetAttributeCodingMetadataXml(AttributeMetadata attribute)
        {
            var xml = string.Empty;
            xml += XmlPara("Access", XmlText(GetAccessSummary(attribute)));
            xml += XmlPara("Required Level", XmlText(GetRequiredLevelSummary(attribute)));
            xml += XmlPara("Field Security", XmlText(GetFieldSecuritySummary(attribute)));
            xml += XmlPara("Advanced Find", XmlText(GetAdvancedFindSummary(attribute)));
            xml += XmlPara("Alternate Key", GetAlternateKeySummary(attribute));
            return xml;
        }

        private static string GetLookupSummary(LookupAttributeMetadata lookup)
        {
            var label = "Lookup";
            if (lookup.AttributeType == AttributeTypeCode.Owner)
                label = "Owner";
            else if (lookup.AttributeType == AttributeTypeCode.Customer)
                label = "Customer";
            else if (lookup.Targets != null && lookup.Targets.Length > 1)
                label = "Polymorphic Lookup";

            var summary = $"<strong>{label}</strong>";
            var targets = lookup.Targets?
                .Where(x => !string.IsNullOrWhiteSpace(x))
                .OrderBy(x => x)
                .Select(XmlCode)
                .ToList();
            if (targets != null && targets.Count > 0)
                summary += $": {string.Join(", ", targets)}";

            var relationships = GetLookupRelationshipNames(lookup);
            if (relationships.Count == 1)
                summary += $" - <strong>Relationship</strong>: {relationships[0]}";
            else if (relationships.Count > 1)
                summary += $" - <strong>Relationships</strong>: {string.Join(", ", relationships)}";
            return summary;
        }

        private static List<string> GetLookupRelationshipNames(LookupAttributeMetadata lookup)
        {
            var targets = new HashSet<string>(lookup.Targets ?? new string[0], StringComparer.OrdinalIgnoreCase);
            return EntityMetadata?.ManyToOneRelationships?
                .Where(x => x != null && x.ReferencingAttribute != null && x.ReferencingAttribute.Equals(lookup.LogicalName, StringComparison.OrdinalIgnoreCase))
                .Where(x => targets.Count == 0 || string.IsNullOrWhiteSpace(x.ReferencedEntity) || targets.Contains(x.ReferencedEntity))
                .Where(x => !string.IsNullOrWhiteSpace(x.SchemaName))
                .OrderBy(x => x.SchemaName)
                .Select(x => XmlCode(x.SchemaName))
                .Distinct()
                .ToList() ?? new List<string>();
        }

        private static string GetGeneratorImageCode(string schemaName, ImageAttributeMetadata image)
        {
            var logicalName = image.LogicalName;
            var code = string.Empty;
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Image</strong> - byte[] - Thumbnail image data</para>{NEW_LINE}";
            code += GetAttributeIdentityXml(image);
            code += GetAttributeCodingMetadataXml(image);
            code += $"{TAB}{TAB}/// <para><strong>Image Metadata</strong>: <strong>Primary Image</strong>: {(image.IsPrimaryImage == true ? "Yes" : "No")}";
            if (image.MaxSizeInKB.HasValue)
                code += $" - <strong>MaxSizeInKB</strong>: {image.MaxSizeInKB.Value.ToString("#,##0", CultureInfo.InvariantCulture)} KB";
            if (image.CanStoreFullImage.HasValue)
                code += $" - <strong>CanStoreFullImage</strong>: {(image.CanStoreFullImage == true ? "Yes" : "No")}";
            code += $"</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public byte[] {schemaName}{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<byte[]>(\"{logicalName}\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}set {{ Entity.Attributes[\"{logicalName}\"] = value; }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>ReadOnly</strong> - string - Relative URL for the image</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Logical Name</strong>: {XmlText(logicalName)}_url</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Source Field</strong>: {XmlCode(logicalName)}</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public string {schemaName}Url{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<string>(\"{logicalName}_url\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>ReadOnly</strong> - long? - Timestamp of last image update</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Logical Name</strong>: {XmlText(logicalName)}_timestamp</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Source Field</strong>: {XmlCode(logicalName)}</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public long? {schemaName}Timestamp{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<long?>(\"{logicalName}_timestamp\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para>Download full-size image. Requires <see cref=\"Microsoft.Xrm.Sdk.IOrganizationService\"/>.</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>File Attribute Name</strong>: {XmlCode(logicalName)}</para>{NEW_LINE}";
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
                        code += GetGeneratorImageCode("EntityImage", image);
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
                        code += GetGeneratorImageCode(safeName, image);
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

        private static string GetGeneratorFileCode(string safeName, FileAttributeMetadata file)
        {
            var logicalName = file.LogicalName;
            var code = string.Empty;
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>ReadOnly</strong> - Guid? - File Id. Check if file has been uploaded.</para>{NEW_LINE}";
            code += GetAttributeIdentityXml(file);
            code += GetAttributeCodingMetadataXml(file);
            if (file.MaxSizeInKB.HasValue)
                code += $"{TAB}{TAB}/// <para><strong>File Metadata</strong>: <strong>MaxSizeInKB</strong>: {file.MaxSizeInKB.Value.ToString("#,##0", CultureInfo.InvariantCulture)} KB</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public Guid? {safeName}Id{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<Guid?>(\"{logicalName}\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>ReadOnly</strong> - string - File name of the uploaded file</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Logical Name</strong>: {XmlText(logicalName)}_name</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>Source Field</strong>: {XmlCode(logicalName)}</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// </summary>{NEW_LINE}";
            code += $"{TAB}{TAB}public string {safeName}Name{NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}get {{ return Entity.GetAttributeValue<string>(\"{logicalName}_name\"); }}{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para>Download file data. Requires <see cref=\"Microsoft.Xrm.Sdk.IOrganizationService\"/>.</para>{NEW_LINE}";
            code += $"{TAB}{TAB}/// <para><strong>File Attribute Name</strong>: {XmlCode(logicalName)}</para>{NEW_LINE}";
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
                    code += GetGeneratorFileCode(safeName, file);
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
                        tmp += $"{TAB}{TAB}/// <para><strong>Display Name</strong>: {TrimAndEscape(value.Label)}</para>{NEW_LINE}";
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

        private static string GetFormulaDefinitionXml(AttributeMetadata attribute)
        {
            var definition = GetFormulaDefinition(attribute);
            if (string.IsNullOrWhiteSpace(definition)) return string.Empty;

            if (attribute.SourceType == 3)
                definition = FormatPowerFx(definition);
            else if ((attribute.SourceType == 1 || attribute.SourceType == 2) && LooksLikeFormulaXml(definition))
                definition = ParseFormulaXml(definition, attribute.SourceType ?? 0);
            else
                definition = NormalizeFormulaDefinition(definition);

            if (string.IsNullOrWhiteSpace(definition)) return string.Empty;

            var xml = $"{TAB}{TAB}/// <para><strong>Definition</strong>:</para>{NEW_LINE}";
            xml += $"{TAB}{TAB}/// <code>{NEW_LINE}";
            foreach (var line in definition.Replace("\r\n", "\n").Replace("\r", "\n").Split('\n'))
                xml += $"{TAB}{TAB}/// {SecurityElement.Escape(line)}{NEW_LINE}";
            xml += $"{TAB}{TAB}/// </code>{NEW_LINE}";
            return xml;
        }

        private static string GetFormulaDefinition(AttributeMetadata attribute)
        {
            try
            {
                var propInfo = attribute.GetType().GetProperty("FormulaDefinition");
                var value = propInfo?.GetValue(attribute, null);
                return value?.ToString();
            }
            catch
            {
                return string.Empty;
            }
        }

        private static bool LooksLikeFormulaXml(string definition)
        {
            return definition.IndexOf("<?xml", StringComparison.OrdinalIgnoreCase) >= 0 ||
                   definition.IndexOf("<Activity", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        private static string NormalizeFormulaDefinition(string definition)
        {
            if (string.IsNullOrWhiteSpace(definition)) return string.Empty;

            var normalized = definition
                .Replace("\r\n", " ")
                .Replace("\r", " ")
                .Replace("\n", " ")
                .Replace("\t", " ")
                .Trim();

            while (normalized.Contains("  "))
                normalized = normalized.Replace("  ", " ");

            return normalized;
        }

        private static string FormatPowerFx(string formula)
        {
            formula = WebUtility.HtmlDecode(formula);
            formula = NormalizePowerFxLine(formula);
            if (string.IsNullOrWhiteSpace(formula)) return string.Empty;

            var openParen = formula.IndexOf('(');
            if (openParen <= 0 || !formula.EndsWith(")", StringComparison.Ordinal))
                return formula;

            var functionName = formula.Substring(0, openParen).Trim();
            var body = formula.Substring(openParen + 1, formula.Length - openParen - 2);
            var arguments = SplitTopLevelArguments(body);
            if (arguments.Count <= 1) return formula;

            var lines = new List<string> { functionName + "(" };
            for (var i = 0; i < arguments.Count; i++)
            {
                var suffix = i == arguments.Count - 1 ? string.Empty : ",";
                lines.Add($"{TAB}{NormalizePowerFxLine(arguments[i])}{suffix}");
            }
            lines.Add(")");
            return string.Join(NEW_LINE, lines);
        }

        private static List<string> SplitTopLevelArguments(string text)
        {
            var arguments = new List<string>();
            var start = 0;
            var depth = 0;
            var inString = false;
            for (var i = 0; i < text.Length; i++)
            {
                var c = text[i];
                if (c == '"')
                {
                    inString = !inString;
                    continue;
                }
                if (inString) continue;
                if (c == '(') depth++;
                else if (c == ')') depth--;
                else if (c == ',' && depth == 0)
                {
                    arguments.Add(text.Substring(start, i - start).Trim());
                    start = i + 1;
                }
            }
            arguments.Add(text.Substring(start).Trim());
            return arguments;
        }

        private static string NormalizePowerFxLine(string formula)
        {
            if (string.IsNullOrWhiteSpace(formula)) return string.Empty;

            var normalized = NormalizeFormulaDefinition(formula);
            normalized = FormatPowerFxOutsideStrings(normalized);
            normalized = Regex.Replace(normalized, @",(?=\S)", ", ");
            normalized = Regex.Replace(normalized, @"\s+", " ");
            return normalized.Trim();
        }

        private static string FormatPowerFxOutsideStrings(string formula)
        {
            var parts = new List<string>();
            var start = 0;
            var inString = false;
            for (var i = 0; i < formula.Length; i++)
            {
                if (formula[i] != '"') continue;

                if (inString)
                {
                    i = ReadPowerFxStringEnd(formula, i);
                    parts.Add(formula.Substring(start, i - start + 1));
                    start = i + 1;
                    inString = false;
                }
                else
                {
                    if (i > start) parts.Add(FormatPowerFxOperators(formula.Substring(start, i - start)));
                    start = i;
                    inString = true;
                }
            }

            if (start < formula.Length)
            {
                var tail = formula.Substring(start);
                parts.Add(inString ? tail : FormatPowerFxOperators(tail));
            }

            return string.Concat(parts);
        }

        private static int ReadPowerFxStringEnd(string formula, int quoteIndex)
        {
            while (quoteIndex + 1 < formula.Length && formula[quoteIndex + 1] == '"')
                quoteIndex += 2;
            return quoteIndex;
        }

        private static string FormatPowerFxOperators(string text)
        {
            const string logicalAndPlaceholder = "__DEVKIT_POWERFX_LOGICAL_AND__";
            text = text.Replace("&&", logicalAndPlaceholder);
            text = text.Replace(">=", " >= ");
            text = text.Replace("<=", " <= ");
            text = text.Replace("<>", " <> ");
            text = Regex.Replace(text, @"(?<![<>=])=(?![=])", " = ");
            text = Regex.Replace(text, @"(?<![<>=])>(?![=])", " > ");
            text = Regex.Replace(text, @"(?<![<>=])<(?![=>])", " < ");
            text = Regex.Replace(text, @"(?<!&)&(?!&)", " & ");
            text = text.Replace(logicalAndPlaceholder, " && ");
            text = Regex.Replace(text, @"&\s+&", "&&");
            return text;
        }

        private static string ParseFormulaXml(string xml, int sourceType)
        {
            try
            {
                var document = XDocument.Parse(xml);
                var translator = new FormulaXmlTranslator(document);
                if (sourceType == 2) return translator.TranslateRollup();
                if (sourceType == 1) return translator.TranslateCalculated();
                return "Formula XML could not be translated";
            }
            catch
            {
                return "Formula XML could not be translated";
            }
        }

        private sealed class FormulaXmlTranslator
        {
            private readonly XDocument Document;
            private readonly Dictionary<string, string> Values = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

            public FormulaXmlTranslator(XDocument document)
            {
                Document = document;
                BuildValueMap();
            }

            public string TranslateCalculated()
            {
                var branches = Document.Descendants()
                    .Where(x => IsActivityReference(x) && GetAttribute(x, "AssemblyQualifiedName").Contains("ConditionBranch"))
                    .ToList();
                var lines = new List<string>();

                foreach (var branch in branches)
                {
                    var condition = Resolve(GetArgumentValue(branch, "Condition"));
                    var value = Resolve(GetThenSetValue(branch));
                    if (string.IsNullOrWhiteSpace(value)) continue;

                    if (IsTrue(condition))
                        lines.Add($"else return {value};");
                    else
                        lines.Add($"if ({condition}) return {value};");
                }

                return lines.Count > 0
                    ? string.Join(NEW_LINE, lines)
                    : "Formula XML could not be translated";
            }

            public string TranslateRollup()
            {
                var link = GetRollupLink();
                var filter = GetRollupFilter();
                var aggregate = GetRollupAggregate();
                var lines = new List<string>();

                if (!string.IsNullOrWhiteSpace(link)) lines.Add("Link: " + link);
                if (!string.IsNullOrWhiteSpace(filter)) lines.Add("Filter: " + filter);
                if (!string.IsNullOrWhiteSpace(aggregate)) lines.Add("Aggregate: " + aggregate);

                return lines.Count > 0
                    ? string.Join(NEW_LINE, lines)
                    : "Formula XML could not be translated";
            }

            private void BuildValueMap()
            {
                foreach (var element in Document.Descendants())
                {
                    if (LocalName(element) == "GetEntityProperty")
                    {
                        var value = UnwrapReference(GetAttribute(element, "Value"));
                        if (!string.IsNullOrWhiteSpace(value))
                            Values[value] = FormatEntityProperty(element);
                    }
                    else if (IsActivityReference(element) && GetAttribute(element, "AssemblyQualifiedName").Contains("EvaluateExpression"))
                    {
                        var result = UnwrapReference(GetArgumentValue(element, "Result"));
                        var expressionOperator = GetArgumentValue(element, "ExpressionOperator");
                        if (string.IsNullOrWhiteSpace(result)) continue;

                        if (expressionOperator.Equals("CreateCrmType", StringComparison.OrdinalIgnoreCase))
                            Values[result] = ParseCrmTypeValue(GetArgumentValue(element, "Parameters"));
                        else
                            Values[result] = FormatExpression(expressionOperator, GetArgumentValue(element, "Parameters"));
                    }
                    else if (IsActivityReference(element) && GetAttribute(element, "AssemblyQualifiedName").Contains("EvaluateCondition"))
                    {
                        var result = UnwrapReference(GetArgumentValue(element, "Result"));
                        if (string.IsNullOrWhiteSpace(result)) continue;

                        var left = Resolve(GetArgumentValue(element, "Operand"));
                        var right = Resolve(ParseFirstObjectParameter(GetArgumentValue(element, "Parameters")));
                        var op = FormatConditionOperator(GetArgumentValue(element, "ConditionOperator"));
                        Values[result] = $"{left} {op} {right}";
                    }
                    else if (IsActivityReference(element) && GetAttribute(element, "AssemblyQualifiedName").Contains("EvaluateLogicalCondition"))
                    {
                        var result = UnwrapReference(GetArgumentValue(element, "Result"));
                        if (string.IsNullOrWhiteSpace(result)) continue;

                        var left = Resolve(GetArgumentValue(element, "LeftOperand"));
                        var right = Resolve(GetArgumentValue(element, "RightOperand"));
                        var op = FormatLogicalOperator(GetArgumentValue(element, "LogicalOperator"));
                        Values[result] = $"{left} {op} {right}";
                    }
                }
            }

            private string GetRollupLink()
            {
                var setAttributeValue = Document.Descendants()
                    .FirstOrDefault(x => LocalName(x) == "SetAttributeValue" && !string.IsNullOrWhiteSpace(GetAttribute(x, "DisplayName")));
                if (setAttributeValue == null) return string.Empty;

                var displayName = GetAttribute(setAttributeValue, "DisplayName");
                var entityRef = UnwrapEntityReference(GetAttribute(setAttributeValue, "Entity"));
                var parts = entityRef.Split('#');
                if (parts.Length >= 3)
                    return $"{EntityMetadata.LogicalName} -> {parts[2]} via {displayName}";
                return displayName;
            }

            private string GetRollupFilter()
            {
                var target = Document.Descendants()
                    .FirstOrDefault(x => LocalName(x) == "Sequence" && GetAttribute(x, "DisplayName").Equals("Target", StringComparison.OrdinalIgnoreCase));
                if (target == null) return string.Empty;

                var conditions = target.Descendants()
                    .Where(x => IsActivityReference(x) && GetAttribute(x, "AssemblyQualifiedName").Contains("EvaluateCondition"))
                    .Select(x => Resolve(GetArgumentValue(x, "Result")))
                    .Where(x => !string.IsNullOrWhiteSpace(x))
                    .Distinct()
                    .ToList();
                return string.Join(" && ", conditions);
            }

            private string GetRollupAggregate()
            {
                var aggregate = Document.Descendants()
                    .FirstOrDefault(x => LocalName(x) == "Sequence" && GetAttribute(x, "DisplayName").Equals("Aggregate", StringComparison.OrdinalIgnoreCase));
                if (aggregate == null) return string.Empty;

                foreach (var element in aggregate.Descendants().Where(IsActivityReference))
                {
                    var expressionOperator = GetArgumentValue(element, "ExpressionOperator");
                    if (string.IsNullOrWhiteSpace(expressionOperator) || expressionOperator.Equals("CreateCrmType", StringComparison.OrdinalIgnoreCase))
                        continue;

                    var value = FormatExpression(expressionOperator, GetArgumentValue(element, "Parameters"));
                    if (!string.IsNullOrWhiteSpace(value)) return value;
                }
                return string.Empty;
            }

            private string FormatEntityProperty(XElement element)
            {
                var attribute = GetAttribute(element, "Attribute");
                var entity = GetAttribute(element, "EntityName");
                return string.IsNullOrWhiteSpace(entity) ? attribute : $"{entity}.{attribute}";
            }

            private string GetThenSetValue(XElement branch)
            {
                var then = branch.Descendants()
                    .FirstOrDefault(x => IsActivityReference(x) && GetAttribute(x, "x:Key").Equals("Then", StringComparison.OrdinalIgnoreCase));
                var setEntityProperty = then?.Descendants().FirstOrDefault(x => LocalName(x) == "SetEntityProperty");
                return setEntityProperty == null ? string.Empty : GetAttribute(setEntityProperty, "Value");
            }

            private string FormatExpression(string expressionOperator, string parameters)
            {
                var firstParameter = Resolve(ParseFirstObjectParameter(parameters));
                if (string.IsNullOrWhiteSpace(firstParameter)) return string.Empty;

                var op = expressionOperator.ToUpperInvariant();
                if (op == "AVG") op = "AVERAGE";
                return $"{op}({firstParameter})";
            }

            private string ParseCrmTypeValue(string parameters)
            {
                var match = Regex.Match(parameters ?? string.Empty, @"WorkflowPropertyType\.(?<type>\w+),\s*""(?<value>[^""]*)""", RegexOptions.IgnoreCase);
                if (!match.Success) return string.Empty;

                var type = match.Groups["type"].Value;
                var value = match.Groups["value"].Value;
                if (type.Equals("String", StringComparison.OrdinalIgnoreCase))
                    return "\"" + value.Replace("\"", "\\\"") + "\"";
                if (type.Equals("Boolean", StringComparison.OrdinalIgnoreCase))
                    return value.Equals("true", StringComparison.OrdinalIgnoreCase) ? "true" : "false";
                return value;
            }

            private string ParseFirstObjectParameter(string parameters)
            {
                var match = Regex.Match(parameters ?? string.Empty, @"New Object\(\)\s*\{\s*(?<value>[^,\}]+)", RegexOptions.IgnoreCase);
                return match.Success ? match.Groups["value"].Value.Trim() : string.Empty;
            }

            private string Resolve(string value)
            {
                value = UnwrapReference(value);
                if (string.IsNullOrWhiteSpace(value)) return string.Empty;
                return Values.TryGetValue(value, out var resolved) ? resolved : value;
            }

            private static bool IsTrue(string value)
            {
                return value.Equals("true", StringComparison.OrdinalIgnoreCase) ||
                       value.Equals("True", StringComparison.OrdinalIgnoreCase);
            }

            private static string FormatConditionOperator(string op)
            {
                switch (op)
                {
                    case "Equal": return "==";
                    case "NotEqual": return "!=";
                    case "GreaterThan": return ">";
                    case "GreaterEqual": return ">=";
                    case "LessThan": return "<";
                    case "LessEqual": return "<=";
                    case "Null": return "is null";
                    case "NotNull": return "is not null";
                    default: return op;
                }
            }

            private static string FormatLogicalOperator(string op)
            {
                switch (op)
                {
                    case "And": return "&&";
                    case "Or": return "||";
                    default: return op;
                }
            }

            private static string GetArgumentValue(XElement element, string key)
            {
                var argument = element.Descendants()
                    .FirstOrDefault(x => (LocalName(x) == "InArgument" || LocalName(x) == "OutArgument") &&
                                         GetAttribute(x, "x:Key").Equals(key, StringComparison.OrdinalIgnoreCase));
                return argument?.Value?.Trim() ?? string.Empty;
            }

            private static string GetAttribute(XElement element, string name)
            {
                if (name.IndexOf(':') >= 0)
                {
                    var localName = name.Substring(name.IndexOf(':') + 1);
                    return element.Attributes().FirstOrDefault(x => x.Name.LocalName == localName)?.Value ?? string.Empty;
                }
                return element.Attributes().FirstOrDefault(x => x.Name.LocalName == name)?.Value ?? string.Empty;
            }

            private static string UnwrapReference(string value)
            {
                value = (value ?? string.Empty).Trim();
                if (value.StartsWith("[", StringComparison.Ordinal) && value.EndsWith("]", StringComparison.Ordinal))
                    return value.Substring(1, value.Length - 2).Trim();
                return value;
            }

            private static string UnwrapEntityReference(string value)
            {
                value = UnwrapReference(value);
                var match = Regex.Match(value, @"CreatedEntities\(""(?<ref>[^""]+)""\)", RegexOptions.IgnoreCase);
                return match.Success ? match.Groups["ref"].Value : value;
            }

            private static bool IsActivityReference(XElement element)
            {
                return LocalName(element) == "ActivityReference";
            }

            private static string LocalName(XElement element)
            {
                return element.Name.LocalName;
            }
        }

        private static string GetXml(AttributeMetadata attribute)
        {
            var line3 = string.Empty;
            var line4 = string.Empty;
            if (attribute.IsPrimaryId ?? false)
                if ($"{EntityMetadata.LogicalName}id" == attribute.LogicalName)
                    line3 += "<strong>Primary Key</strong>: ";
            if (attribute.IsPrimaryName ?? false)
                line3 += "<strong>Primary Name</strong>: ";
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
                line3 += GetLookupSummary(lookup);
            }
            else if (attribute is BooleanAttributeMetadata boolean)
            {
                var trueLabel = XmlText(boolean?.OptionSet?.TrueOption?.Label?.UserLocalizedLabel?.Label);
                var falseLabel = XmlText(boolean?.OptionSet?.FalseOption?.Label?.UserLocalizedLabel?.Label);
                var temp = $"[<strong>{trueLabel}</strong>]: true - [<strong>{falseLabel}</strong>]: false";
                line3 += $"<strong>Two Option</strong> - " + temp;
                if (boolean.DefaultValue != null)
                {
                    if (boolean.DefaultValue ?? false)
                        line4 = $"<strong>Default Value</strong> [<strong>{trueLabel}</strong>]: true";
                    else
                        line4 = $"<strong>Default Value</strong> [<strong>{falseLabel}</strong>]: false";
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
                    line3 += $" - <strong>Format</strong>: {XmlText(integer.Format.Value.ToString())}";
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
                    line3 += $" - <strong>Format</strong>: {XmlText(memo.FormatName.Value)}";
            }
            else if (attribute is StringAttributeMetadata str)
            {
                line3 += "<strong>Single Line of Text</strong>";
                if (str.FormatName?.Value != null && str.FormatName.Value != "Text")
                    line3 += $" - <strong>Format</strong>: {XmlText(str.FormatName.Value)}";
            }
            else
                line3 += "<strong>" + XmlText(attribute.AttributeType.ToString()) + "</strong>";
            if (attribute.GetMaxLength().HasValue) line3 += " - <strong>MaxLength</strong>: " + attribute.GetMaxLength().Value.ToString("#,##0", CultureInfo.InvariantCulture);
            if (attribute.GetMinValue().HasValue) line3 += " - <strong>MinValue</strong>: " + attribute.GetMinValue().Value.ToString("#,##0", CultureInfo.InvariantCulture);
            if (attribute.GetMaxValue().HasValue) line3 += " - <strong>MaxValue</strong>: " + attribute.GetMaxValue().Value.ToString("#,##0", CultureInfo.InvariantCulture);
            if (!string.IsNullOrWhiteSpace(attribute.AutoNumberFormat)) line3 += $" - <strong>AutoNumber</strong>: {XmlText(attribute.AutoNumberFormat)}";
            if (attribute.IsAuditEnabled?.Value == true) line3 += " - <strong>Audit</strong>: Enabled";
            var xml = $"{TAB}{TAB}/// <summary>{NEW_LINE}";
            xml += GetAttributeIdentityXml(attribute);
            xml += GetAttributeCodingMetadataXml(attribute);
            xml += XmlPara(line3);
            xml += XmlPara("Global Choice Logical Name", GetGlobalChoiceSummary(attribute));
            if (attribute.SourceType != null && attribute.SourceType != 0)
            {
                if (attribute.SourceType == 1) line4 = "<strong>Calculated Field</strong>";
                else if (attribute.SourceType == 2) line4 = "<strong>Rollup Field</strong>";
                else if (attribute.SourceType == 3) line4 = "<strong>Power-Fx Field</strong>";
                xml += XmlPara(line4);
                xml += GetFormulaDefinitionXml(attribute);
            }
            else if (attribute.SchemaName.EndsWith("_rollup_Date") || attribute.SchemaName.EndsWith("_rollup_State")) {
                line4 = "<strong>Rollup Field</strong>";
                xml += XmlPara(line4);
            }
            else if (line4.Length > 0) {
                xml += XmlPara(line4);
            }
            xml += $"{TAB}{TAB}/// </summary>\r\n";
            return xml;
        }
    }
}
