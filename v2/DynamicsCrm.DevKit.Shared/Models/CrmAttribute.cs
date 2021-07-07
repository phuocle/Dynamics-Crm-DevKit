using System.Collections.Specialized;
using DynamicsCrm.DevKit.Shared.Helper;
using Microsoft.Xrm.Sdk.Metadata;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class CrmAttribute
    {
        public CrmAttribute(AttributeMetadata attribute, string entityName)
        {
            EntityName = entityName;
            Name = attribute.SchemaName;
            DisplayName = attribute?.DisplayName?.UserLocalizedLabel?.Label;
            SchemaName = attribute.SchemaName;
            if (attribute.AttributeType != null)
            {
                FieldType = attribute.AttributeType.Value;
                if (FieldType == AttributeTypeCode.Owner)
                {
                    EntityReferenceLogicalName = "systemuser;team";
                }
                else if (FieldType == AttributeTypeCode.Lookup || FieldType == AttributeTypeCode.Customer)
                {
                    var lookup = (LookupAttributeMetadata)attribute;
                    var value = string.Empty;
                    foreach (var target in lookup.Targets)
                        value += target + ";";
                    if (value.Length > 0) value = value.Substring(0, value.Length - 1);
                    EntityReferenceLogicalName = value;
                }
            }
            IsCustomAttribute = attribute.IsCustomAttribute.Value;
            IsPrimaryKey = attribute.IsPrimaryId == true && entityName.ToLower() + "id" == Name.ToLower();
            IsRequired = attribute.RequiredLevel != null && attribute.RequiredLevel.Value == AttributeRequiredLevel.ApplicationRequired;
            AttributeOf = attribute.AttributeOf;
            IsValidForCreate = attribute.IsValidForCreate ?? false;
            IsValidForRead = attribute.IsValidForRead ?? false;
            IsValidForUpdate = attribute.IsValidForUpdate ?? false;
            LogicalName = attribute.LogicalName;
            IsStateCode = attribute.AttributeType == AttributeTypeCode.State;
            DeprecatedVersion = attribute.DeprecatedVersion;
            IsDeprecated = !string.IsNullOrWhiteSpace(DeprecatedVersion);
            if (attribute.Description?.UserLocalizedLabel != null)
                Description = attribute.Description.UserLocalizedLabel.Label;
            Min = XrmHelper.GetMetadataMinValue(attribute);
            Max = XrmHelper.GetMetadataMaxValue(attribute);
            MaxLength = XrmHelper.GetMetadataMaxLengthValue(attribute);
            OptionSetValues = XrmHelper.GetMetadataOptionSetValues(attribute);
            DateTimeFormat = null;
            DateTimeBehavior = null;
            if (attribute is DateTimeAttributeMetadata dateAttribute)
                try
                {
                    DateTimeBehavior = dateAttribute.DateTimeBehavior;
                    if (dateAttribute.Format != null) DateTimeFormat = dateAttribute.Format.Value;
                }
                catch
                {
                }
            if (attribute is MultiSelectPicklistAttributeMetadata) IsMultiSelectPicklist = true;
            IsReadOnly = attribute.SourceType == 1 || attribute.SourceType == 2;
        }
        public bool IsReadOnly { get; set; }
        public bool IsCustomAttribute { get; set; }
        public string EntityName { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public AttributeTypeCode FieldType { get; set; }
        public bool IsPrimaryKey { get; set; }
        public bool IsRequired { get; set; }
        public string AttributeOf { get; set; }
        public bool IsValidForCreate { get; set; }
        public bool IsValidForRead { get; set; }
        public bool IsValidForUpdate { get; set; }
        public string LogicalName { get; set; }
        public string SchemaName { get; set; }
        public string EntityReferenceLogicalName { get; set; }
        public string Description { get; set; }
        public int? MaxLength { get; set; }
        public decimal? Min { get; set; }
        public decimal? Max { get; set; }
        public NameValueCollection OptionSetValues { get; set; }
        public bool IsStateCode { get; set; }
        public bool IsDeprecated { get; set; }
        public string DeprecatedVersion { get; set; }
        public DateTimeFormat? DateTimeFormat { get; set; }
        public DateTimeBehavior DateTimeBehavior { get; set; }
        public string LogicalCollectionName { get; set; }
        public string NavigationPropertyName { get; set; }
        public bool IsMultiSelectPicklist { get; set; }
    }
}
