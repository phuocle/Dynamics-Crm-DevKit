using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class GetTablesTool
    {
        private readonly MetadataService _metadataService;

        public GetTablesTool(MetadataService metadataService)
        {
            _metadataService = metadataService;
        }

        [McpServerTool(Name = "get_tables", Title = "Inspect table metadata, columns, and relationships",
            Idempotent = true, Destructive = false, ReadOnly = true,
            UseStructuredContent = true, OutputSchemaType = typeof(GetTablesResult)),
        Description(
            "Dataverse entity metadata. entity_name empty = list (filter by keyword/custom_only/names; includes IsAuditEnabled). Set = detail (attributes, relationships, alternate keys).\n\n" +

            "WHEN TO USE:\n" +
            "- Discover entity/attribute names before building FetchXML\n" +
            "- Find join columns, picklist options, required fields, primary key\n" +
            "- Audit settings on a set of entities (use names= with solution entity list)\n\n" +

            "MODE/CONVENTION:\n" +
            "- names= filters by exact logical-name list; filter= uses contains (list) or prefix (detail).")]
        public async Task<CallToolResult> get_tables(
            [Description("Logical name → detail mode. Empty = list mode."
            )] string entity_name = "",
            [Description("LIST: keyword filter on entity. DETAIL: prefix filter on attributes/relationships."
            )] string filter = "",
            [Description("LIST: only custom entities.")] bool custom_only = false,
            [Description("LIST: include N:N intersect entities.")] bool include_intersect = false,
            [Description("LIST: comma-separated logical names. Overrides filter/custom_only."
            )] string names = "")
        {
            try
            {
                var trimmedFilter = string.IsNullOrWhiteSpace(filter) ? "" : filter.Trim();
                if (!string.IsNullOrWhiteSpace(entity_name))
                    return await GetEntityDetail(entity_name.Trim().ToLowerInvariant(), trimmedFilter);

                return await ListAllEntities(trimmedFilter, custom_only, include_intersect, names);
            }
            catch (Exception ex)
            {
                var target = string.IsNullOrWhiteSpace(entity_name) ? "entities metadata" : $"metadata for '{entity_name}'";
                return ErrorResult($"Error: Failed to load {target}: {ex.Message}");
            }
        }

        private async Task<CallToolResult> GetEntityDetail(string entityName, string attributePrefix)
        {
            var metadata = await _metadataService.FetchEntityMetadataAsync(entityName);
            var structured = new GetTablesResult
            {
                Mode = "detail",
                EntityName = entityName,
                Filter = string.IsNullOrWhiteSpace(attributePrefix) ? null : attributePrefix,
                Count = 1,
                Table = BuildTableDetail(metadata, attributePrefix)
            };
            return StructuredResult(CompactFormatter.FormatEntityDetail(metadata, attributePrefix), structured);
        }

        private async Task<CallToolResult> ListAllEntities(string filter, bool customOnly, bool includeIntersect, string names)
        {
            var entities = await _metadataService.GetEntitiesMetadataAsync(EntityFilters.Entity);
            var query = entities.AsEnumerable();

            if (!string.IsNullOrWhiteSpace(names))
            {
                var nameSet = names
                    .Split(new[] { ',', ';' }, StringSplitOptions.RemoveEmptyEntries)
                    .Select(n => n.Trim().ToLowerInvariant())
                    .Where(n => !string.IsNullOrEmpty(n))
                    .ToHashSet();
                query = query.Where(x => nameSet.Contains(x.LogicalName));
            }
            else
            {
                if (!includeIntersect)
                    query = query.Where(x => x.IsIntersect != true);

                if (customOnly)
                    query = query.Where(x => x.IsCustomEntity == true);

                if (!string.IsNullOrWhiteSpace(filter))
                {
                    var keyword = filter.Trim().ToLowerInvariant();
                    query = query.Where(x =>
                        (!string.IsNullOrWhiteSpace(x.LogicalName) && x.LogicalName.ToLowerInvariant().Contains(keyword)) ||
                        (!string.IsNullOrWhiteSpace(x.DisplayName?.UserLocalizedLabel?.Label) &&
                         x.DisplayName.UserLocalizedLabel.Label.ToLowerInvariant().Contains(keyword)));
                }
            }

            var sorted = query.OrderBy(x => x.LogicalName).ToList();
            var structured = new GetTablesResult
            {
                Mode = "list",
                Filter = string.IsNullOrWhiteSpace(filter) ? null : filter,
                Count = sorted.Count,
                Tables = sorted.Select(BuildTableSummary).ToList()
            };
            return StructuredResult(CompactFormatter.FormatEntitySummaryTable(sorted), structured);
        }

        private static TableSummaryEntry BuildTableSummary(EntityMetadata metadata) => new()
        {
            LogicalName = metadata.LogicalName,
            DisplayName = metadata.DisplayName?.UserLocalizedLabel?.Label ?? "",
            OwnershipType = metadata.OwnershipType?.ToString() ?? "",
            IsCustom = metadata.IsCustomEntity == true,
            IsActivity = metadata.IsActivity == true,
            IsAuditEnabled = metadata.IsAuditEnabled?.Value == true
        };

        private static TableDetailEntry BuildTableDetail(EntityMetadata metadata, string prefixFilter)
        {
            var hasPrefix = !string.IsNullOrEmpty(prefixFilter);
            var summary = BuildTableSummary(metadata);
            return new TableDetailEntry
            {
                LogicalName = summary.LogicalName,
                DisplayName = summary.DisplayName,
                OwnershipType = summary.OwnershipType,
                IsCustom = summary.IsCustom,
                IsActivity = summary.IsActivity,
                IsAuditEnabled = summary.IsAuditEnabled,
                PrimaryIdAttribute = metadata.PrimaryIdAttribute,
                PrimaryNameAttribute = metadata.PrimaryNameAttribute,
                EntitySetName = metadata.EntitySetName,
                LogicalCollectionName = metadata.LogicalCollectionName,
                ObjectTypeCode = metadata.ObjectTypeCode,
                Attributes = metadata.Attributes
                    .Where(a => a.AttributeOf == null || a is ImageAttributeMetadata)
                    .Where(a => !hasPrefix || a.LogicalName.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(a => a.LogicalName)
                    .Select(BuildAttribute)
                    .ToList(),
                OneToManyRelationships = (metadata.OneToManyRelationships ?? [])
                    .Where(r => !hasPrefix || r.ReferencingEntity.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(r => r.ReferencingEntity)
                    .Select(BuildRelationship)
                    .ToList(),
                ManyToOneRelationships = (metadata.ManyToOneRelationships ?? [])
                    .Where(r => !hasPrefix || r.ReferencedEntity.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(r => r.ReferencedEntity)
                    .Select(BuildRelationship)
                    .ToList(),
                ManyToManyRelationships = (metadata.ManyToManyRelationships ?? [])
                    .Where(r => !hasPrefix ||
                        r.Entity1LogicalName.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase) ||
                        r.Entity2LogicalName.StartsWith(prefixFilter, StringComparison.OrdinalIgnoreCase))
                    .OrderBy(r => r.IntersectEntityName)
                    .Select(r => new TableManyToManyRelationshipEntry
                    {
                        SchemaName = r.SchemaName,
                        Entity1 = r.Entity1LogicalName,
                        Entity2 = r.Entity2LogicalName,
                        IntersectEntityName = r.IntersectEntityName
                    })
                    .ToList(),
                AlternateKeys = (metadata.Keys ?? [])
                    .OrderBy(k => k.SchemaName)
                    .Select(k => new TableKeyEntry
                    {
                        SchemaName = k.SchemaName,
                        DisplayName = k.DisplayName?.UserLocalizedLabel?.Label ?? "",
                        KeyAttributes = (k.KeyAttributes ?? []).ToList()
                    })
                    .ToList()
            };
        }

        private static TableAttributeEntry BuildAttribute(AttributeMetadata attribute) => new()
        {
            LogicalName = attribute.LogicalName,
            Type = FormatAttributeType(attribute),
            RequiredLevel = attribute.RequiredLevel?.Value switch
            {
                AttributeRequiredLevel.ApplicationRequired => "Required",
                AttributeRequiredLevel.Recommended => "Recommended",
                _ => null
            },
            IsValidForCreate = attribute.IsValidForCreate == true,
            IsValidForUpdate = attribute.IsValidForUpdate == true,
            DisplayName = attribute.DisplayName?.UserLocalizedLabel?.Label ?? ""
        };

        private static TableRelationshipEntry BuildRelationship(OneToManyRelationshipMetadata relationship) => new()
        {
            SchemaName = relationship.SchemaName,
            ReferencedEntity = relationship.ReferencedEntity,
            ReferencingEntity = relationship.ReferencingEntity,
            ReferencingAttribute = relationship.ReferencingAttribute
        };

        private static string FormatAttributeType(AttributeMetadata attribute) => attribute switch
        {
            LookupAttributeMetadata lookup => $"Lookup -> {string.Join(", ", lookup.Targets ?? [])}",
            PicklistAttributeMetadata => "Picklist",
            StatusAttributeMetadata => "Status",
            StateAttributeMetadata => "State",
            MultiSelectPicklistAttributeMetadata => "MultiSelect",
            ImageAttributeMetadata => "Image",
            FileAttributeMetadata => "File",
            _ => attribute.AttributeType?.ToString() ?? "Unknown"
        };

        private static CallToolResult StructuredResult(string text, GetTablesResult structured) => new()
        {
            Content = [new TextContentBlock { Text = text }],
            StructuredContent = JsonSerializer.SerializeToElement(structured)
        };

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
