using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow
{
    /// <summary>Per-decompile cache for option labels and referenced workflow names.</summary>
    internal sealed class WorkflowMetadataResolver
    {
        private readonly IOrganizationService _orgService;
        private readonly Dictionary<string, EntityMetadata> _entities = new(StringComparer.OrdinalIgnoreCase);
        private readonly Dictionary<Guid, string> _workflows = new();

        public WorkflowMetadataResolver(IOrganizationService orgService) => _orgService = orgService;

        public string FormatValue(string entityName, string attributeName, string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return value;
            if (string.IsNullOrWhiteSpace(entityName) || string.IsNullOrWhiteSpace(attributeName) || _orgService == null) return value;
            try
            {
                var metadata = GetEntity(entityName)?.Attributes.FirstOrDefault(a => a.LogicalName.Equals(attributeName, StringComparison.OrdinalIgnoreCase));
                if (metadata is EnumAttributeMetadata enumMetadata && int.TryParse(value.Trim().Trim('"'), out var optionValue))
                {
                    var option = enumMetadata.OptionSet?.Options.FirstOrDefault(o => o.Value == optionValue);
                    var label = option?.Label?.UserLocalizedLabel?.Label ?? option?.Label?.LocalizedLabels?.FirstOrDefault()?.Label;
                    return "[" + (label ?? "Unknown") + ":" + optionValue + "]";
                }
                if (metadata is BooleanAttributeMetadata booleanMetadata && bool.TryParse(value.Trim().Trim('"', '[', ']'), out var boolValue))
                {
                    var option = boolValue ? booleanMetadata.OptionSet?.TrueOption : booleanMetadata.OptionSet?.FalseOption;
                    var label = option?.Label?.UserLocalizedLabel?.Label ?? option?.Label?.LocalizedLabels?.FirstOrDefault()?.Label;
                    return string.IsNullOrWhiteSpace(label) ? boolValue.ToString().ToLowerInvariant() : "[" + label + ":" + boolValue.ToString().ToLowerInvariant() + "]";
                }
            }
            catch (Exception) { /* Missing metadata must not prevent workflow inspection. */ }
            return value;
        }

        public string GetChildWorkflowName(string workflowId)
        {
            if (!Guid.TryParse(workflowId, out var id) || _orgService == null) return null;
            try
            {
                if (!_workflows.TryGetValue(id, out var name))
                {
                    var workflow = _orgService.Retrieve("workflow", id, new ColumnSet("name"));
                    name = workflow.GetAttributeValue<string>("name");
                    _workflows[id] = name;
                }
                return name;
            }
            catch (Exception) { return null; }
        }

        public string FormatLookup(string entityName, string name, string id)
        {
            if (Guid.TryParse(id, out var guid) && string.IsNullOrWhiteSpace(name) && _orgService != null)
            {
                try
                {
                    var metadata = GetEntity(entityName);
                    var primaryName = metadata?.PrimaryNameAttribute;
                    if (!string.IsNullOrWhiteSpace(primaryName))
                        name = _orgService.Retrieve(entityName, guid, new ColumnSet(primaryName)).GetAttributeValue<string>(primaryName);
                }
                catch (Exception) { }
            }
            return entityName + ":[" + (string.IsNullOrWhiteSpace(name) ? "Unknown" : name) + ":" + id + "]";
        }

        private EntityMetadata GetEntity(string entityName)
        {
            if (_entities.TryGetValue(entityName, out var cached)) return cached;
            var response = (RetrieveEntityResponse)_orgService.Execute(new RetrieveEntityRequest
            {
                LogicalName = entityName,
                EntityFilters = EntityFilters.Attributes,
                RetrieveAsIfPublished = true
            });
            _entities[entityName] = response.EntityMetadata;
            return response.EntityMetadata;
        }
    }
}
