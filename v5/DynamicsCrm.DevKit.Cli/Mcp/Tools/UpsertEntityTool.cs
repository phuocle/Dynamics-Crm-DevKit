using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Globalization;
using System.Text;
using System.Text.Json;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class UpsertEntityTool
    {
        private readonly ServiceClient _serviceClient;

        public UpsertEntityTool(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        [McpServerTool(Name = "upsert_entity", Title = "Create a new custom Dataverse table (entity)",
            Destructive = true, ReadOnly = false, Idempotent = false,
            UseStructuredContent = true, OutputSchemaType = typeof(UpsertEntityResult)),
        Description(
            "Create a new custom Dataverse entity (table). Auto-creates primary name attribute and configures common properties.\n\n" +

            "TIPS:\n" +
            "- Entity name MUST include publisher prefix (e.g., 'new_project')\n" +
            "- After creation: upsert_attribute to add columns, build_formxml + upsert_form to customize the form")]
        public CallToolResult upsert_entity(
            [Description("Logical name with publisher prefix (e.g., 'new_project').")] string entity_name,
            [Description("Singular display name (e.g., 'Project').")] string display_name,
            [Description("Plural display name (e.g., 'Projects').")] string display_collection_name,
            [Description("Solution unique name to add the entity to.")] string solution_name,
            [Description("Entity description.")] string description = "",
            [Description("Primary name attribute logical name. Auto-derived if omitted.")] string primary_attribute_name = "",
            [Description("Display name for primary attribute. Default: 'Name'.")] string primary_attribute_display_name = "Name",
            [Description("Max length of primary attribute (1-4000). Default: 100.")] int primary_attribute_max_length = 100,
            [Description("'User' (default, supports sharing/assigning) or 'Organization' (no row-level security).")] string ownership_type = "User",
            [Description("Create as activity entity. Default: false.")] bool is_activity = false,
            [Description("Enable notes. Default: true.")] bool has_notes = true,
            [Description("Enable activities. Default: true.")] bool has_activities = true,
            [Description("Enable feedback/ratings. Default: false.")] bool has_feedback = false,
            [Description("Enable quick create form. Default: false.")] bool is_quick_create_enabled = false,
            [Description("Enable duplicate detection. Default: true.")] bool is_duplicate_detection_enabled = true,
            [Description("Enable change tracking. Default: true.")] bool change_tracking_enabled = true,
            [Description("Hex color code (e.g., '#4A90D9').")] string entity_color = "",
            [Description("Publish after creation. Default: true.")] bool auto_publish = true)
        {
            // Validate required fields
            if (string.IsNullOrWhiteSpace(entity_name))
                return ErrorResult("Error: entity_name is required.");
            if (string.IsNullOrWhiteSpace(display_name))
                return ErrorResult("Error: display_name is required.");
            if (string.IsNullOrWhiteSpace(display_collection_name))
                return ErrorResult("Error: display_collection_name is required.");
            if (string.IsNullOrWhiteSpace(solution_name))
                return ErrorResult("Error: solution_name is required.");

            entity_name = entity_name.Trim().ToLowerInvariant();

            // Validate publisher prefix
            var underscoreIndex = entity_name.IndexOf('_');
            if (underscoreIndex < 1 || underscoreIndex >= entity_name.Length - 1)
                return ErrorResult(
                    $"[Error] Cannot create entity\n" +
                    $"EntityName: {entity_name}\n" +
                    $"Message: Entity name must include a publisher prefix (e.g., 'new_project', 'cr_project')\n" +
                    $"Tip: Check solution publisher prefix. Use get_solution_components to find solution details.");

            var prefix = entity_name.Substring(0, underscoreIndex);
            var namePart = entity_name.Substring(underscoreIndex + 1);

            // Validate max length
            if (primary_attribute_max_length < 1) primary_attribute_max_length = 100;
            if (primary_attribute_max_length > 4000) primary_attribute_max_length = 4000;

            // Auto-derive schema name: new_project → new_Project
            var schemaName = prefix + "_" + CultureInfo.InvariantCulture.TextInfo.ToTitleCase(namePart);

            // Auto-derive primary attribute name
            if (string.IsNullOrWhiteSpace(primary_attribute_name))
                primary_attribute_name = prefix + "_name";
            else
                primary_attribute_name = primary_attribute_name.Trim().ToLowerInvariant();

            // Auto-derive primary attribute schema name
            var primaryUnderscoreIndex = primary_attribute_name.IndexOf('_');
            string primarySchemaName;
            if (primaryUnderscoreIndex > 0 && primaryUnderscoreIndex < primary_attribute_name.Length - 1)
            {
                var primaryPrefix = primary_attribute_name.Substring(0, primaryUnderscoreIndex);
                var primaryNamePart = primary_attribute_name.Substring(primaryUnderscoreIndex + 1);
                primarySchemaName = primaryPrefix + "_" + CultureInfo.InvariantCulture.TextInfo.ToTitleCase(primaryNamePart);
            }
            else
            {
                primarySchemaName = primary_attribute_name;
            }

            // Parse ownership type
            OwnershipTypes ownershipTypeValue;
            if (ownership_type.Trim().Equals("Organization", StringComparison.OrdinalIgnoreCase) ||
                ownership_type.Trim().Equals("Org", StringComparison.OrdinalIgnoreCase))
                ownershipTypeValue = OwnershipTypes.OrganizationOwned;
            else
                ownershipTypeValue = OwnershipTypes.UserOwned;

            try
            {
                var entityMetadata = new EntityMetadata
                {
                    SchemaName = schemaName,
                    LogicalName = entity_name,
                    DisplayName = new Label(display_name.Trim(), 1033),
                    DisplayCollectionName = new Label(display_collection_name.Trim(), 1033),
                    OwnershipType = ownershipTypeValue,
                    IsActivity = is_activity,
                    HasActivities = has_activities,
                    HasFeedback = has_feedback,
                    IsQuickCreateEnabled = is_quick_create_enabled,
                    IsDuplicateDetectionEnabled = new BooleanManagedProperty(is_duplicate_detection_enabled),
                    ChangeTrackingEnabled = change_tracking_enabled
                };

                if (!string.IsNullOrWhiteSpace(description))
                    entityMetadata.Description = new Label(description.Trim(), 1033);

                if (!string.IsNullOrWhiteSpace(entity_color))
                    entityMetadata.EntityColor = entity_color.Trim();

                var primaryAttribute = new StringAttributeMetadata
                {
                    SchemaName = primarySchemaName,
                    LogicalName = primary_attribute_name,
                    DisplayName = new Label(primary_attribute_display_name.Trim(), 1033),
                    MaxLength = primary_attribute_max_length,
                    RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired),
                    FormatName = StringFormatName.Text
                };

                var request = new CreateEntityRequest
                {
                    Entity = entityMetadata,
                    PrimaryAttribute = primaryAttribute,
                    SolutionUniqueName = solution_name.Trim(),
                    HasNotes = has_notes,
                    HasActivities = has_activities
                };

                var response = (CreateEntityResponse)_serviceClient.Execute(request);
                var entityId = response.EntityId;

                // Retrieve the created entity to get EntitySetName
                var entitySetName = "";
                try
                {
                    var retrieveRequest = new RetrieveEntityRequest
                    {
                        LogicalName = entity_name,
                        EntityFilters = EntityFilters.Entity
                    };
                    var retrieveResponse = (RetrieveEntityResponse)_serviceClient.Execute(retrieveRequest);
                    entitySetName = retrieveResponse.EntityMetadata.EntitySetName ?? "";
                }
                catch
                {
                    // Non-critical — entity was created, just can't get EntitySetName
                }

                // Auto-publish
                var published = false;
                if (auto_publish)
                {
                    try
                    {
                        var publishXml = $"<importexportxml><entities><entity>{entity_name}</entity></entities></importexportxml>";
                        _serviceClient.Execute(new Microsoft.Crm.Sdk.Messages.PublishXmlRequest { ParameterXml = publishXml });
                        published = true;
                    }
                    catch
                    {
                        // Non-critical — entity was created, publish failed
                    }
                }

                // Format compact output
                var sb = new StringBuilder(512);
                sb.AppendLine($"[EntityCreated] {entity_name}");
                sb.AppendLine($"DisplayName: {display_name.Trim()}");
                sb.AppendLine($"PluralName: {display_collection_name.Trim()}");
                sb.AppendLine($"SchemaName: {schemaName}");
                sb.AppendLine($"Ownership: {ownershipTypeValue}");
                sb.AppendLine($"PrimaryAttribute: {primary_attribute_name} ({primary_attribute_display_name.Trim()})");
                sb.AppendLine($"PrimaryAttrMaxLength: {primary_attribute_max_length}");
                sb.AppendLine($"HasNotes: {(has_notes ? "yes" : "no")}");
                sb.AppendLine($"HasActivities: {(has_activities ? "yes" : "no")}");
                sb.AppendLine($"IsActivity: {(is_activity ? "yes" : "no")}");
                sb.AppendLine($"DuplicateDetection: {(is_duplicate_detection_enabled ? "yes" : "no")}");
                sb.AppendLine($"ChangeTracking: {(change_tracking_enabled ? "yes" : "no")}");
                sb.AppendLine($"Solution: {solution_name.Trim()}");
                sb.AppendLine($"Published: {(published ? "yes" : "no")}");
                sb.AppendLine($"MetadataId: {entityId}");
                if (!string.IsNullOrEmpty(entitySetName))
                    sb.AppendLine($"EntitySetName: {entitySetName}");

                var structured = new UpsertEntityResult
                {
                    EntityName = entity_name,
                    DisplayName = display_name.Trim(),
                    DisplayCollectionName = display_collection_name.Trim(),
                    SchemaName = schemaName,
                    OwnershipType = ownershipTypeValue.ToString(),
                    PrimaryAttributeName = primary_attribute_name,
                    PrimaryAttributeDisplayName = primary_attribute_display_name.Trim(),
                    PrimaryAttributeMaxLength = primary_attribute_max_length,
                    MetadataId = entityId.ToString(),
                    EntitySetName = string.IsNullOrEmpty(entitySetName) ? null : entitySetName,
                    SolutionName = solution_name.Trim(),
                    Published = published,
                    Status = "created"
                };

                return new CallToolResult
                {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                var msg = ex.Message;

                // Handle duplicate entity name
                if (msg.Contains("already exists", StringComparison.OrdinalIgnoreCase) ||
                    msg.Contains("duplicate", StringComparison.OrdinalIgnoreCase))
                {
                    return ErrorResult(
                        $"[Error] Entity '{entity_name}' already exists\n" +
                        $"Message: {msg}\n" +
                        $"Tip: Use get_metadata_entities to inspect the existing entity, or choose a different name");
                }

                // Handle solution not found
                if (msg.Contains("solution", StringComparison.OrdinalIgnoreCase) &&
                    (msg.Contains("not found", StringComparison.OrdinalIgnoreCase) ||
                     msg.Contains("does not exist", StringComparison.OrdinalIgnoreCase)))
                {
                    return ErrorResult(
                        $"[Error] Solution '{solution_name}' not found\n" +
                        $"Message: {msg}\n" +
                        $"Tip: Use get_solution_components to find valid solution names");
                }

                return ErrorResult($"Error: Failed to create entity '{entity_name}'\nMessage: {msg}");
            }
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
