using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Dev.AllInOne.Console
{
    public class Program
    {
        static void Main()
        {
            try
            {
                CloneCalculated();
            }
            catch (Exception ex)
            {
                System.Console.WriteLine($"ERROR: {ex.Message}");
                System.Console.WriteLine(ex.StackTrace);
            }
        }

        private static void CloneCalculated()
        {
            var service = App.Service;
            System.Console.WriteLine("Connected to Dataverse.");

            var sourceEntity = FindEntityByDisplayName(service, "All In One");
            if (sourceEntity == null)
            {
                System.Console.WriteLine("ERROR: Source table 'All In One' not found.");
                return;
            }
            System.Console.WriteLine($"Source table: {sourceEntity.LogicalName} ({GetLocalizedLabel(sourceEntity.DisplayName)})");

            var targetEntity = FindEntityByDisplayName(service, "All In One Clone");
            if (targetEntity == null)
            {
                System.Console.WriteLine("ERROR: Target table 'All In One Clone' not found.");
                return;
            }
            System.Console.WriteLine($"Target table: {targetEntity.LogicalName} ({GetLocalizedLabel(targetEntity.DisplayName)})");

            var sourceAttribute = FindAttributeByDisplayNamePrefix(service, sourceEntity.LogicalName, "40");
            if (sourceAttribute == null)
            {
                System.Console.WriteLine("ERROR: No column with display name starting with '40' found on source table.");
                return;
            }

            var displayName = GetLocalizedLabel(sourceAttribute.DisplayName);
            System.Console.WriteLine($"Source column: {sourceAttribute.LogicalName} (display: {displayName}, type: {sourceAttribute.AttributeType}, sourceType: {sourceAttribute.SourceType})");

            if (sourceAttribute.SourceType != 1)
            {
                System.Console.WriteLine("ERROR: Source column is not a Calculated column (SourceType != 1).");
                return;
            }

            var formulaXml = GetFormulaDefinition(sourceAttribute);
            if (string.IsNullOrEmpty(formulaXml))
            {
                System.Console.WriteLine("ERROR: Could not read FormulaDefinition from source column.");
                return;
            }

            var newLogicalName = GenerateUniqueAttributeName(service, targetEntity.LogicalName, sourceAttribute.LogicalName);
            var newSchemaName = ToSchemaName(newLogicalName);

            var rewrittenXml = RewriteFormulaReferences(formulaXml, sourceEntity.LogicalName, targetEntity.LogicalName, sourceAttribute.LogicalName, newLogicalName);

            var clone = CloneAttribute(sourceAttribute, newSchemaName, newLogicalName);
            SetFormulaDefinition(clone, rewrittenXml);
            clone.SourceType = 1;

            System.Console.WriteLine($"Creating cloned column: {clone.LogicalName} (schema: {clone.SchemaName}) on {targetEntity.LogicalName}");

            var request = new CreateAttributeRequest
            {
                EntityName = targetEntity.LogicalName,
                Attribute = clone
            };

            var response = (CreateAttributeResponse)service.Execute(request);
            System.Console.WriteLine($"SUCCESS: Created column {clone.LogicalName} with id {response.AttributeId}");
        }

        private static EntityMetadata FindEntityByDisplayName(ServiceClient service, string displayName)
        {
            var response = (RetrieveAllEntitiesResponse)service.Execute(new RetrieveAllEntitiesRequest
            {
                EntityFilters = EntityFilters.Entity,
                RetrieveAsIfPublished = true
            });

            foreach (var emd in response.EntityMetadata)
            {
                if (GetLocalizedLabel(emd.DisplayName) == displayName)
                    return emd;
            }
            return null;
        }

        private static AttributeMetadata FindAttributeByDisplayNamePrefix(ServiceClient service, string entityLogicalName, string prefix)
        {
            var response = (RetrieveEntityResponse)service.Execute(new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Attributes,
                LogicalName = entityLogicalName,
                RetrieveAsIfPublished = true
            });

            AttributeMetadata match = null;
            foreach (var attr in response.EntityMetadata.Attributes)
            {
                var label = GetLocalizedLabel(attr.DisplayName);
                if (!string.IsNullOrEmpty(label) && label.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                {
                    if (match == null)
                        match = attr;
                    else
                        System.Console.WriteLine($"WARNING: Multiple columns match prefix '{prefix}': also found {attr.LogicalName} ({label}). Using first match {match.LogicalName}.");
                }
            }
            return match;
        }

        private static string GenerateUniqueAttributeName(ServiceClient service, string entityLogicalName, string baseLogicalName)
        {
            var response = (RetrieveEntityResponse)service.Execute(new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.Attributes,
                LogicalName = entityLogicalName,
                RetrieveAsIfPublished = true
            });

            var existing = new HashSet<string>(response.EntityMetadata.Attributes.Select(a => a.LogicalName), StringComparer.OrdinalIgnoreCase);
            var candidate = baseLogicalName + "_clone";
            if (!existing.Contains(candidate)) return candidate;

            int counter = 1;
            while (true)
            {
                var numbered = candidate + counter;
                if (!existing.Contains(numbered)) return numbered;
                counter++;
                if (counter > 1000) throw new Exception("Could not generate unique attribute name.");
            }
        }

        private static string ToSchemaName(string logicalName)
        {
            if (string.IsNullOrEmpty(logicalName)) return logicalName;
            var parts = logicalName.Split('_');
            for (int i = 0; i < parts.Length; i++)
            {
                if (parts[i].Length > 0)
                    parts[i] = char.ToUpperInvariant(parts[i][0]) + parts[i].Substring(1);
            }
            return string.Join("_", parts);
        }

        private static string GetLocalizedLabel(Label label)
        {
            return label?.UserLocalizedLabel?.Label;
        }

        private static string GetFormulaDefinition(AttributeMetadata attr)
        {
            var prop = attr.GetType().GetProperty("FormulaDefinition");
            return prop?.GetValue(attr, null)?.ToString();
        }

        private static void SetFormulaDefinition(AttributeMetadata attr, string formula)
        {
            var prop = attr.GetType().GetProperty("FormulaDefinition");
            if (prop != null && prop.CanWrite)
                prop.SetValue(attr, formula);
            else
                throw new InvalidOperationException("Cannot set FormulaDefinition via reflection.");
        }

        private static string RewriteFormulaReferences(string xaml, string sourceEntity, string targetEntity, string sourceAttribute, string targetAttribute)
        {
            var result = xaml;

            // Calculated column owner entity rewrite
            result = Regex.Replace(result, $@"EntityName=""{Regex.Escape(sourceEntity)}""", $@"EntityName=""{targetEntity}""");

            // New Entity(&quot;source&quot;) -> New Entity(&quot;target&quot;)
            result = Regex.Replace(result, $@"New Entity\(&quot;{Regex.Escape(sourceEntity)}&quot;\)", $@"New Entity(&quot;{targetEntity}&quot;)");

            // Target attribute rewrite (the field being calculated)
            result = Regex.Replace(result, $@"Attribute=""{Regex.Escape(sourceAttribute)}""", $@"Attribute=""{targetAttribute}""");

            // Rollup-style related relationship rewrite (defensive)
            result = Regex.Replace(result, $@"relatedlinked_{Regex.Escape(sourceEntity)}_", $@"relatedlinked_{targetEntity}_");
            result = Regex.Replace(result, $@"{Regex.Escape(sourceEntity)}\.deletedobject\.{Regex.Escape(sourceEntity)}_", $@"{targetEntity}.deletedobject.{targetEntity}_");

            return result;
        }

        private static AttributeMetadata CloneAttribute(AttributeMetadata source, string newSchemaName, string newLogicalName)
        {
            AttributeMetadata clone;
            switch (source.AttributeType)
            {
                case AttributeTypeCode.String:
                    var srcString = (StringAttributeMetadata)source;
                    clone = new StringAttributeMetadata
                    {
                        MaxLength = srcString.MaxLength,
                        Format = srcString.Format,
                        ImeMode = srcString.ImeMode
                    };
                    break;
                case AttributeTypeCode.Memo:
                    var srcMemo = (MemoAttributeMetadata)source;
                    clone = new MemoAttributeMetadata
                    {
                        MaxLength = srcMemo.MaxLength,
                        Format = srcMemo.Format,
                        ImeMode = srcMemo.ImeMode
                    };
                    break;
                case AttributeTypeCode.Integer:
                    var srcInt = (IntegerAttributeMetadata)source;
                    clone = new IntegerAttributeMetadata
                    {
                        MinValue = srcInt.MinValue,
                        MaxValue = srcInt.MaxValue,
                        Format = srcInt.Format
                    };
                    break;
                case AttributeTypeCode.BigInt:
                    clone = new BigIntAttributeMetadata();
                    break;
                case AttributeTypeCode.Decimal:
                    var srcDecimal = (DecimalAttributeMetadata)source;
                    clone = new DecimalAttributeMetadata
                    {
                        MinValue = srcDecimal.MinValue,
                        MaxValue = srcDecimal.MaxValue,
                        Precision = srcDecimal.Precision
                    };
                    break;
                case AttributeTypeCode.Money:
                    var srcMoney = (MoneyAttributeMetadata)source;
                    clone = new MoneyAttributeMetadata
                    {
                        MinValue = srcMoney.MinValue,
                        MaxValue = srcMoney.MaxValue,
                        Precision = srcMoney.Precision,
                        PrecisionSource = srcMoney.PrecisionSource
                    };
                    break;
                case AttributeTypeCode.Double:
                    var srcDouble = (DoubleAttributeMetadata)source;
                    clone = new DoubleAttributeMetadata
                    {
                        MinValue = srcDouble.MinValue,
                        MaxValue = srcDouble.MaxValue,
                        Precision = srcDouble.Precision
                    };
                    break;
                case AttributeTypeCode.Boolean:
                    var srcBool = (BooleanAttributeMetadata)source;
                    clone = new BooleanAttributeMetadata
                    {
                        OptionSet = new BooleanOptionSetMetadata
                        {
                            TrueOption = new OptionMetadata(
                                new Label(GetLocalizedLabel(srcBool.OptionSet.TrueOption.Label), 1033),
                                srcBool.OptionSet.TrueOption.Value ?? 1),
                            FalseOption = new OptionMetadata(
                                new Label(GetLocalizedLabel(srcBool.OptionSet.FalseOption.Label), 1033),
                                srcBool.OptionSet.FalseOption.Value ?? 0),
                            OptionSetType = OptionSetType.Boolean
                        },
                        DefaultValue = srcBool.DefaultValue
                    };
                    break;
                case AttributeTypeCode.DateTime:
                    var srcDateTime = (DateTimeAttributeMetadata)source;
                    clone = new DateTimeAttributeMetadata
                    {
                        Format = srcDateTime.Format
                    };
                    break;
                case AttributeTypeCode.Picklist:
                    var srcPicklist = (PicklistAttributeMetadata)source;
                    clone = new PicklistAttributeMetadata
                    {
                        OptionSet = CloneOptionSet(srcPicklist.OptionSet)
                    };
                    break;
                default:
                    throw new NotSupportedException($"Unsupported attribute type for cloning: {source.AttributeType}");
            }

            clone.SchemaName = newSchemaName;
            clone.LogicalName = newLogicalName;
            clone.DisplayName = source.DisplayName;
            clone.Description = source.Description;
            clone.RequiredLevel = source.RequiredLevel;
            clone.IsValidForAdvancedFind = source.IsValidForAdvancedFind;
            clone.IsAuditEnabled = source.IsAuditEnabled;
            clone.IsSecured = source.IsSecured;

            return clone;
        }

        private static OptionSetMetadata CloneOptionSet(OptionSetMetadata source)
        {
            var options = new List<OptionMetadata>();
            foreach (var opt in source.Options)
            {
                options.Add(new OptionMetadata(
                    new Label(GetLocalizedLabel(opt.Label), 1033),
                    opt.Value ?? 0));
            }

            var optionsCollection = new OptionMetadataCollection(options);
            return new OptionSetMetadata(optionsCollection)
            {
                Name = source.Name,
                DisplayName = source.DisplayName,
                Description = source.Description,
                IsCustomOptionSet = true,
                OptionSetType = source.OptionSetType
            };
        }
    }
}
