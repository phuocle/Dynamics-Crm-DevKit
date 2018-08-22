using System.Collections.Specialized;
using Microsoft.Xrm.Sdk.Metadata;

namespace PL.DynamicsCrm.DevKit.Shared.Xrm
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
                    var lookup = (LookupAttributeMetadata) attribute;
                    var value = string.Empty;
                    foreach (var target in lookup.Targets)
                        value += target + ";";
                    if (value.Length > 0) value = value.Substring(0, value.Length - 1);
                    EntityReferenceLogicalName = value;
                }
            }

            IsPrimaryKey = attribute.IsPrimaryId == true && entityName.ToLower() + "id" == Name.ToLower();
            IsRequired = attribute.RequiredLevel != null &&
                         attribute.RequiredLevel.Value == AttributeRequiredLevel.ApplicationRequired;
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
            ParseMinMaxValues(attribute);
            ParseOptionSetValues(attribute);
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
                    // ignored
                }

            if (attribute is MultiSelectPicklistAttributeMetadata) IsMultiSelectPicklist = true;
        }

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

        private static string ProcessName(string name)
        {
            try
            {
                name = name.Replace(" ", "_");
                name = name.Replace("'", string.Empty);
                name = name.Replace("-", "_");
                name = name.Replace("(", string.Empty);
                name = name.Replace(")", string.Empty);
                name = name.Replace("/", string.Empty);
                name = name.Replace("%", string.Empty);
                name = name.Replace(",", string.Empty);
                name = name.Replace("$", string.Empty);
                name = name.Replace(".", string.Empty);
                name = name.Replace("{", string.Empty);
                name = name.Replace("}", string.Empty);
                name = name.Replace(":", string.Empty);
                name = name.Replace(";", string.Empty);
                name = name.Replace("&", string.Empty);
                name = name.Replace("=", string.Empty);
                name = name.Replace("+", string.Empty);
                name = name.Replace("-", string.Empty);
                name = name.Replace(".", string.Empty);
                name = name.Replace("___", "_");
                var firstchar = name[0];
                if (firstchar >= '0' && firstchar <= '9') name = "_" + name;
                return name;
            }
            catch
            {
                return "_";
            }
        }

        private void ParseOptionSetValues(AttributeMetadata attribute)
        {
            if (attribute is PicklistAttributeMetadata optionMetadata1)
            {
                var values = new NameValueCollection();
                foreach (var c in optionMetadata1.OptionSet.Options)
                    values.Add(ProcessName(c.Label.UserLocalizedLabel.Label), c.Value?.ToString());
                OptionSetValues = values;
            }
            else if (attribute is StateAttributeMetadata optionMetadata2)
            {
                var values = new NameValueCollection();
                foreach (var c in optionMetadata2.OptionSet.Options)
                    values.Add(ProcessName(c.Label.UserLocalizedLabel.Label), c.Value?.ToString());
                OptionSetValues = values;
            }
            else if (attribute is StatusAttributeMetadata optionMetadata)
            {
                var values = new NameValueCollection();
                foreach (var c in optionMetadata.OptionSet.Options)
                    values.Add(ProcessName(c.Label.UserLocalizedLabel.Label), c.Value?.ToString());
                OptionSetValues = values;
            }
        }

        private void ParseMinMaxValues(AttributeMetadata attribute)
        {
            if (attribute is StringAttributeMetadata metadata)
                MaxLength = metadata.MaxLength ?? -1;
            if (attribute is MemoAttributeMetadata attributeMetadata) MaxLength = attributeMetadata.MaxLength ?? -1;
            if (attribute is IntegerAttributeMetadata attr1)
            {
                Min = attr1.MinValue ?? -1;
                Max = attr1.MaxValue ?? -1;
            }

            if (attribute is DecimalAttributeMetadata attr2)
            {
                Min = attr2.MinValue ?? -1;
                Max = attr2.MaxValue ?? -1;
            }

            if (attribute is MoneyAttributeMetadata attr3)
            {
                Min = attr3.MinValue != null ? (decimal) attr3.MinValue.Value : -1;
                Max = attr3.MaxValue != null ? (decimal) attr3.MaxValue.Value : -1;
            }

            if (attribute is DoubleAttributeMetadata attr)
            {
                Min = attr.MinValue != null ? (decimal) attr.MinValue.Value : -1;
                Max = attr.MaxValue != null ? (decimal) attr.MaxValue.Value : -1;
            }
        }
    }
}