using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Tool.Extensions
{
    internal static class MetadataExtensions
    {
        public static readonly List<string> ignoreAttributes = new List<string> { "createdby", "modifiedonbehalfby", "importsequencenumber", "utcconversiontimezonecode", "modifiedby", "versionnumber", "createdonbehalfby", "timezoneruleversionnumber", "modifiedon", "createdon", "overriddencreatedon" };
        public static readonly List<string> ignoreAttributes2 = new List<string> { "ownerid", "owningbusinessunit", "owningteam", "owninguser", "transactioncurrencyid", "bcc", "cc", "from", "to", "businessunitid", "defaultmailbox", "organizationid", "optionalattendees", "partners", "regardingobjectid", "requiredattendees", "sendermailboxid", "slaid", "slainvokedid", "calendarid", "mobileofflineprofileid", "parentsystemuserid", "territoryid", "queueid", "positionid", "organizer", "resources", "customers" };

        public static string ToWikiString(this Label label)
        {
            return label?.UserLocalizedLabel?.Label.Trim().Replace("\r\n", ". ").Replace("\n", ". ");
        }

        public static string ToWikiString(this DateTime date)
        {
            return date.ToString("yyyy-MMM-dd HH:mm:ss");
        }

        public static string ToWikiBooleanString(this bool? value)
        {
            return (value ?? false) ? "✅" : "⬜";
        }

        public static string ToWikiBooleanString(this bool value)
        {
            return value ? "✅" : "⬜";
        }

        public static string ToWikiBooleanString(this BooleanManagedProperty value)
        {
            return value?.Value.ToWikiBooleanString();
        }

        public static string ToWikiBooleanString(this AttributeRequiredLevelManagedProperty value)
        {
            if (value.Value == AttributeRequiredLevel.ApplicationRequired) return "✅";
            if (value.Value == AttributeRequiredLevel.SystemRequired) return "✅";
            if (value.Value == AttributeRequiredLevel.Recommended) return "🔳";
            return "⬜";
        }

        public static string ToWikiOptionSetString(this AttributeTypeCode? value)
        {
            if (value == null) return string.Empty;
            return value.Value.ToWikiOptionSetString();
        }

        public static string ToWikiOptionSetString(this AttributeTypeCode value)
        {
            return value.ToString();
        }

        public static bool IsVirtualEntity(this EntityMetadata entity)
        {
            return entity.DataProviderId.HasValue &&
                   entity.DataProviderId.Value != Guid.Empty &&
                   !string.Equals(entity.TableType, "Elastic", StringComparison.OrdinalIgnoreCase);
        }

        public static bool IsElasticEntity(this EntityMetadata entity)
        {
            return string.Equals(entity.TableType, "Elastic", StringComparison.OrdinalIgnoreCase);
        }

        public static string GetEntityTypeName(this EntityMetadata entity)
        {
            if (entity.IsElasticEntity()) return "Elastic";
            if (entity.IsVirtualEntity()) return "Virtual";
            return "Standard";
        }

        public static string GetOwnershipTypeName(this EntityMetadata entity)
        {
            if (entity.OwnershipType == null) return "None";
            return entity.OwnershipType.Value.ToString();
        }

        public static List<AttributeMetadata> ToWikiAttributes(this AttributeMetadata[] attributes)
        {
            var values = new List<AttributeMetadata>();
            foreach (var attribute in attributes)
            {
                if (ignoreAttributes.Contains(attribute.LogicalName)) continue;
                if (IsIgnoreEndsWith(attribute.LogicalName)) continue;
                if (attribute.AttributeOf != null) continue;
                values.Add(attribute);
            }
            return values
                .OrderBy(x => x.LogicalName, StringComparer.OrdinalIgnoreCase)
                .ThenBy(x => x.SchemaName, StringComparer.OrdinalIgnoreCase)
                .ToList();
        }

        private static bool IsIgnoreEndsWith(string logicalName)
        {
            var endsWith = new List<string> { "_rollup_date", "_rollup_state" };
            foreach (var item in endsWith)
                if (logicalName.EndsWith(item)) return true;
            return false;
        }

        public static DateTime UtcToUserLocal(this DateTime date, TimeSpan utcOffset)
        {
            return date.Add(utcOffset);
        }
    }
}
