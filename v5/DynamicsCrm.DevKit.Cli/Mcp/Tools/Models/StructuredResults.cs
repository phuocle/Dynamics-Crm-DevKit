using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class WhoAmIResult
    {
        [JsonPropertyName("userId")]
        public string UserId { get; set; }

        [JsonPropertyName("fullName")]
        public string FullName { get; set; }

        [JsonPropertyName("domainName")]
        public string DomainName { get; set; }

        [JsonPropertyName("email")]
        public string Email { get; set; }

        [JsonPropertyName("businessUnitId")]
        public string BusinessUnitId { get; set; }

        [JsonPropertyName("organizationId")]
        public string OrganizationId { get; set; }

        [JsonPropertyName("environmentUrl")]
        public string EnvironmentUrl { get; set; }

        [JsonPropertyName("version")]
        public string Version { get; set; }

        [JsonPropertyName("orgFriendlyName")]
        public string OrgFriendlyName { get; set; }

        [JsonPropertyName("orgUniqueName")]
        public string OrgUniqueName { get; set; }

        [JsonPropertyName("tenantId")]
        public string TenantId { get; set; }

        [JsonPropertyName("environmentId")]
        public string EnvironmentId { get; set; }

        [JsonPropertyName("language")]
        public string Language { get; set; }

        [JsonPropertyName("currency")]
        public string Currency { get; set; }

        [JsonPropertyName("fiscalStart")]
        public string FiscalStart { get; set; }

        [JsonPropertyName("auditEnabled")]
        public bool? AuditEnabled { get; set; }

        [JsonPropertyName("roles")]
        public List<RoleInfo> Roles { get; set; } = [];

        [JsonPropertyName("accessToken")]
        public string AccessToken { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }
    }

    internal sealed class RoleInfo
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("roleId")]
        public string RoleId { get; set; }
    }

    internal sealed class CrudResult
    {
        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("fieldsUpdated")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? FieldsUpdated { get; set; }
    }

    internal sealed class PublishResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("entities")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Entities { get; set; }

        [JsonPropertyName("entityCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? EntityCount { get; set; }

        [JsonPropertyName("includeGlobalOptionSets")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool IncludeGlobalOptionSets { get; set; }

        [JsonPropertyName("includeSiteMap")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool IncludeSiteMap { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("durationSeconds")]
        public double DurationSeconds { get; set; }
    }

    internal sealed class WebApiResult
    {
        [JsonPropertyName("method")]
        public string Method { get; set; }

        [JsonPropertyName("url")]
        public string Url { get; set; }

        [JsonPropertyName("statusCode")]
        public int StatusCode { get; set; }

        [JsonPropertyName("statusText")]
        public string StatusText { get; set; }

        [JsonPropertyName("isSuccess")]
        public bool IsSuccess { get; set; }
    }

    internal sealed class UpsertFormResult
    {
        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("formId")]
        public string FormId { get; set; }

        [JsonPropertyName("formName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FormName { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("validated")]
        public bool Validated { get; set; }

        [JsonPropertyName("validationErrors")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ValidationErrors { get; set; }

        [JsonPropertyName("validationWarnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ValidationWarnings { get; set; }

        [JsonPropertyName("backupPath")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string BackupPath { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("restoredFromBackup")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RestoredFromBackup { get; set; }
    }

    internal sealed class BuildFormxmlResult
    {
        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("formId")]
        public string FormId { get; set; }

        [JsonPropertyName("formName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FormName { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("operationsCount")]
        public int OperationsCount { get; set; }

        [JsonPropertyName("fieldsResolved")]
        public int FieldsResolved { get; set; }

        [JsonPropertyName("formXml")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FormXml { get; set; }
    }

    internal sealed class UpsertEntityResult
    {
        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("displayCollectionName")]
        public string DisplayCollectionName { get; set; }

        [JsonPropertyName("schemaName")]
        public string SchemaName { get; set; }

        [JsonPropertyName("ownershipType")]
        public string OwnershipType { get; set; }

        [JsonPropertyName("primaryAttributeName")]
        public string PrimaryAttributeName { get; set; }

        [JsonPropertyName("primaryAttributeDisplayName")]
        public string PrimaryAttributeDisplayName { get; set; }

        [JsonPropertyName("primaryAttributeMaxLength")]
        public int PrimaryAttributeMaxLength { get; set; }

        [JsonPropertyName("metadataId")]
        public string MetadataId { get; set; }

        [JsonPropertyName("entitySetName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntitySetName { get; set; }

        [JsonPropertyName("solutionName")]
        public string SolutionName { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }
    }

    internal sealed class UpsertSiteMapResult
    {
        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("appModuleId")]
        public string AppModuleId { get; set; }

        [JsonPropertyName("appName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AppName { get; set; }

        [JsonPropertyName("siteMapId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SiteMapId { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("validated")]
        public bool Validated { get; set; }

        [JsonPropertyName("validationErrors")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ValidationErrors { get; set; }

        [JsonPropertyName("validationWarnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ValidationWarnings { get; set; }

        [JsonPropertyName("backupPath")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string BackupPath { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("restoredFromBackup")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RestoredFromBackup { get; set; }
    }

    internal sealed class UpsertAttributeResult
    {
        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("attributeName")]
        public string AttributeName { get; set; }

        [JsonPropertyName("attributeType")]
        public string AttributeType { get; set; }

        [JsonPropertyName("displayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DisplayName { get; set; }

        [JsonPropertyName("requiredLevel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RequiredLevel { get; set; }

        [JsonPropertyName("metadataId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MetadataId { get; set; }

        [JsonPropertyName("solutionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionName { get; set; }

        [JsonPropertyName("changes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, UpdateAttributeChange> Changes { get; set; }

        [JsonPropertyName("optionsAdded")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsAdded { get; set; }

        [JsonPropertyName("optionsRenamed")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsRenamed { get; set; }

        [JsonPropertyName("optionsDeleted")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsDeleted { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("extra")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, string> Extra { get; set; }
    }

    internal sealed class UpsertViewResult
    {
        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("viewId")]
        public string ViewId { get; set; }

        [JsonPropertyName("viewName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ViewName { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("validated")]
        public bool Validated { get; set; }

        [JsonPropertyName("validationErrors")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ValidationErrors { get; set; }

        [JsonPropertyName("updatedParts")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UpdatedParts { get; set; }

        [JsonPropertyName("fetchXmlBackupPath")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FetchXmlBackupPath { get; set; }

        [JsonPropertyName("layoutXmlBackupPath")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LayoutXmlBackupPath { get; set; }

        [JsonPropertyName("restoredFromFetchXmlBackup")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RestoredFromFetchXmlBackup { get; set; }

        [JsonPropertyName("restoredFromLayoutXmlBackup")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RestoredFromLayoutXmlBackup { get; set; }

        [JsonPropertyName("validationWarnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ValidationWarnings { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }
    }

    internal sealed class UpdateAttributeChange
    {
        [JsonPropertyName("oldValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OldValue { get; set; }

        [JsonPropertyName("newValue")]
        public string NewValue { get; set; }
    }



    internal sealed class UpsertVariableResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("variableName")]
        public string VariableName { get; set; }

        [JsonPropertyName("displayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DisplayName { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("defaultValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DefaultValue { get; set; }

        [JsonPropertyName("currentValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CurrentValue { get; set; }

        [JsonPropertyName("valueCleared")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool ValueCleared { get; set; }

        [JsonPropertyName("solutionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionName { get; set; }

        [JsonPropertyName("solutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionWarning { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }
    }

    internal sealed class EnvironmentVariableItem
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("defaultValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DefaultValue { get; set; }

        [JsonPropertyName("currentValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CurrentValue { get; set; }
    }

    internal sealed class EnvironmentVariableListResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("count")]
        public int Count { get; set; }

        [JsonPropertyName("solutionFilter")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionFilter { get; set; }

        [JsonPropertyName("variables")]
        public List<EnvironmentVariableItem> Variables { get; set; } = [];
    }

    internal sealed class GetWorkflowsResult
    {
        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }

        [JsonPropertyName("summary")]
        public WorkflowSummary Summary { get; set; }

        [JsonPropertyName("workflows")]
        public List<WorkflowEntry> Workflows { get; set; }
    }

    internal sealed class WorkflowSummary
    {
        [JsonPropertyName("backgroundCount")]
        public int BackgroundCount { get; set; }

        [JsonPropertyName("realtimeCount")]
        public int RealtimeCount { get; set; }

        [JsonPropertyName("onDemandCount")]
        public int OnDemandCount { get; set; }

        [JsonPropertyName("subprocessCount")]
        public int SubprocessCount { get; set; }
    }

    internal sealed class WorkflowEntry
    {
        [JsonPropertyName("workflowId")]
        public string WorkflowId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("primaryEntity")]
        public string PrimaryEntity { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("triggerOnCreate")]
        public bool TriggerOnCreate { get; set; }

        [JsonPropertyName("triggerOnDelete")]
        public bool TriggerOnDelete { get; set; }

        [JsonPropertyName("triggerOnUpdateFields")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TriggerOnUpdateFields { get; set; }

        [JsonPropertyName("createStage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateStage { get; set; }

        [JsonPropertyName("updateStage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UpdateStage { get; set; }

        [JsonPropertyName("deleteStage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DeleteStage { get; set; }

        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("scope")]
        public string Scope { get; set; }

        [JsonPropertyName("runAs")]
        public string RunAs { get; set; }

        [JsonPropertyName("rank")]
        public int Rank { get; set; }

        [JsonPropertyName("onDemand")]
        public bool OnDemand { get; set; }

        [JsonPropertyName("subprocess")]
        public bool Subprocess { get; set; }

        [JsonPropertyName("isTransacted")]
        public bool IsTransacted { get; set; }

        [JsonPropertyName("asyncAutoDelete")]
        public bool AsyncAutoDelete { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("owner")]
        public string Owner { get; set; }

        [JsonPropertyName("modifiedOn")]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("modifiedBy")]
        public string ModifiedBy { get; set; }
    }

    internal sealed class GetApisResult
    {
        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("entityFilter")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityFilter { get; set; }

        [JsonPropertyName("apis")]
        public List<CustomApiEntry> Apis { get; set; }
    }

    internal sealed class CustomApiEntry
    {
        [JsonPropertyName("customApiId")]
        public string CustomApiId { get; set; }

        [JsonPropertyName("uniqueName")]
        public string UniqueName { get; set; }

        [JsonPropertyName("displayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DisplayName { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("bindingType")]
        public string BindingType { get; set; }

        [JsonPropertyName("boundEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string BoundEntity { get; set; }

        [JsonPropertyName("isFunction")]
        public bool IsFunction { get; set; }

        [JsonPropertyName("isPrivate")]
        public bool IsPrivate { get; set; }

        [JsonPropertyName("processingType")]
        public string ProcessingType { get; set; }

        [JsonPropertyName("pluginType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PluginType { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("owner")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Owner { get; set; }

        [JsonPropertyName("solutionId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionId { get; set; }

        [JsonPropertyName("createdOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedOn { get; set; }

        [JsonPropertyName("modifiedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("requestParameters")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<CustomApiParameter> RequestParameters { get; set; }

        [JsonPropertyName("responseProperties")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<CustomApiParameter> ResponseProperties { get; set; }
    }

    internal sealed class CustomApiParameter
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("isOptional")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsOptional { get; set; }

        [JsonPropertyName("logicalEntityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LogicalEntityName { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }
    }

    internal sealed class GetFlowsResult
    {
        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("flows")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<CloudFlowEntry> Flows { get; set; }

        [JsonPropertyName("runs")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<FlowRunEntry> Runs { get; set; }

        [JsonPropertyName("runSummary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public FlowRunSummary RunSummary { get; set; }
    }

    internal sealed class CloudFlowEntry
    {
        [JsonPropertyName("workflowId")]
        public string WorkflowId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("owner")]
        public string Owner { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("uniqueName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UniqueName { get; set; }

        [JsonPropertyName("createdOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedOn { get; set; }

        [JsonPropertyName("modifiedOn")]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("modifiedBy")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedBy { get; set; }
    }

    internal sealed class FlowRunEntry
    {
        [JsonPropertyName("flowSessionId")]
        public string FlowSessionId { get; set; }

        [JsonPropertyName("startedOn")]
        public string StartedOn { get; set; }

        [JsonPropertyName("completedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CompletedOn { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("duration")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Duration { get; set; }

        [JsonPropertyName("errorCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorMessage { get; set; }

        [JsonPropertyName("triggerType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TriggerType { get; set; }
    }

    internal sealed class FlowRunSummary
    {
        [JsonPropertyName("succeeded")]
        public int Succeeded { get; set; }

        [JsonPropertyName("failed")]
        public int Failed { get; set; }

        [JsonPropertyName("running")]
        public int Running { get; set; }

        [JsonPropertyName("cancelled")]
        public int Cancelled { get; set; }

        [JsonPropertyName("waiting")]
        public int Waiting { get; set; }
    }

    internal sealed class EnvironmentVariableGetResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("displayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DisplayName { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("defaultValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DefaultValue { get; set; }

        [JsonPropertyName("currentValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CurrentValue { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }
    }

}
