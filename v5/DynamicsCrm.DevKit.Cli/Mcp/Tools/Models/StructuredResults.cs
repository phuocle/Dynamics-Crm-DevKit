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

        [JsonPropertyName("devkit")]
        public DevKitRuntimeInfo DevKit { get; set; }

        [JsonPropertyName("roles")]
        public List<RoleInfo> Roles { get; set; } = [];

        [JsonPropertyName("accessToken")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AccessToken { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }
    }

    internal sealed class DevKitRuntimeInfo
    {
        [JsonPropertyName("version")]
        public string Version { get; set; }

        [JsonPropertyName("build")]
        public string Build { get; set; }

        [JsonPropertyName("assemblyVersion")]
        public string AssemblyVersion { get; set; }

        [JsonPropertyName("fileVersion")]
        public string FileVersion { get; set; }

        [JsonPropertyName("informationalVersion")]
        public string InformationalVersion { get; set; }

        [JsonPropertyName("processId")]
        public int ProcessId { get; set; }

        [JsonPropertyName("processStartTime")]
        public string ProcessStartTime { get; set; }

        [JsonPropertyName("assemblyPath")]
        public string AssemblyPath { get; set; }

        [JsonPropertyName("assemblySha256")]
        public string AssemblySha256 { get; set; }
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
        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

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

        [JsonPropertyName("appModules")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> AppModules { get; set; }

        [JsonPropertyName("appModuleCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? AppModuleCount { get; set; }

        [JsonPropertyName("includeGlobalOptionSets")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool IncludeGlobalOptionSets { get; set; }

        [JsonPropertyName("includeSiteMap")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool IncludeSiteMap { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("asyncOperationId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AsyncOperationId { get; set; }

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

        [JsonPropertyName("responseBody")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ResponseBody { get; set; }
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

        [JsonPropertyName("operationsCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? OperationsCount { get; set; }

        [JsonPropertyName("fieldsResolved")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? FieldsResolved { get; set; }
    }

    internal sealed class UpsertTableResult
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

        [JsonPropertyName("tableType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TableType { get; set; }

        [JsonPropertyName("primaryAttributeName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryAttributeName { get; set; }

        [JsonPropertyName("primaryAttributeDisplayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryAttributeDisplayName { get; set; }

        [JsonPropertyName("primaryAttributeMaxLength")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public int PrimaryAttributeMaxLength { get; set; }

        [JsonPropertyName("metadataId")]
        public string MetadataId { get; set; }

        [JsonPropertyName("entitySetName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntitySetName { get; set; }

        [JsonPropertyName("solutionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionName { get; set; }

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionMethod { get; set; }

        [JsonPropertyName("addToSolutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionWarning { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("isAuditEnabled")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAuditEnabled { get; set; }

        [JsonPropertyName("isQuickCreateEnabled")]
        public bool IsQuickCreateEnabled { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("changes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, UpdateAttributeChange> Changes { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }
    }

    internal sealed class ManageAppResult
    {
        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("status")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Status { get; set; }

        [JsonPropertyName("appModuleId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AppModuleId { get; set; }

        [JsonPropertyName("appModuleIdUnique")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AppModuleIdUnique { get; set; }

        [JsonPropertyName("appName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AppName { get; set; }

        [JsonPropertyName("uniqueName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UniqueName { get; set; }

        [JsonPropertyName("siteMapId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SiteMapId { get; set; }

        [JsonPropertyName("navigationTree")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string NavigationTree { get; set; }

        [JsonPropertyName("navigationAreas")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ManageAppNavigationAreaResult> NavigationAreas { get; set; }

        [JsonPropertyName("solutionUniqueName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionUniqueName { get; set; }

        [JsonPropertyName("validated")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool Validated { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("backupPath")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string BackupPath { get; set; }

        [JsonPropertyName("restoredFromBackup")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RestoredFromBackup { get; set; }

        [JsonPropertyName("validationErrors")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ValidationErrors { get; set; }

        [JsonPropertyName("validationWarnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ValidationWarnings { get; set; }

        [JsonPropertyName("operationsCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? OperationsCount { get; set; }

        [JsonPropertyName("operationSummaries")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OperationSummaries { get; set; }

        [JsonPropertyName("addedAppComponents")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> AddedAppComponents { get; set; }

        [JsonPropertyName("addedSolutionComponents")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> AddedSolutionComponents { get; set; }

        [JsonPropertyName("nextStep")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string NextStep { get; set; }
    }

    internal sealed class ManageAppNavigationAreaResult
    {
        [JsonPropertyName("id")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Id { get; set; }

        [JsonPropertyName("title")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Title { get; set; }

        [JsonPropertyName("groups")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ManageAppNavigationGroupResult> Groups { get; set; }
    }

    internal sealed class ManageAppNavigationGroupResult
    {
        [JsonPropertyName("id")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Id { get; set; }

        [JsonPropertyName("title")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Title { get; set; }

        [JsonPropertyName("items")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ManageAppNavigationItemResult> Items { get; set; }
    }

    internal sealed class ManageAppNavigationItemResult
    {
        [JsonPropertyName("id")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Id { get; set; }

        [JsonPropertyName("title")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Title { get; set; }

        [JsonPropertyName("entity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity { get; set; }

        [JsonPropertyName("url")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Url { get; set; }
    }

    internal sealed class ManageRibbonResult
    {
        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("entities")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Entities { get; set; }

        [JsonPropertyName("ribbonDiffXml")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RibbonDiffXml { get; set; }

        [JsonPropertyName("backupPath")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string BackupPath { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("asyncOperationId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AsyncOperationId { get; set; }

        [JsonPropertyName("restoredFromBackup")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RestoredFromBackup { get; set; }

        [JsonPropertyName("buttons")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<RibbonSurfaceButtons> Buttons { get; set; }
    }

    internal sealed class RibbonSurfaceButtons
    {
        [JsonPropertyName("surface")]
        public string Surface { get; set; }

        [JsonPropertyName("items")]
        public List<RibbonButtonInfo> Items { get; set; } = [];
    }

    internal sealed class RibbonButtonInfo
    {
        [JsonPropertyName("sequence")]
        public int Sequence { get; set; }

        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("label")]
        public string Label { get; set; }

        [JsonPropertyName("isOob")]
        public bool IsOob { get; set; }

        [JsonPropertyName("isCustom")]
        public bool IsCustom { get; set; }

        [JsonPropertyName("isHide")]
        public bool IsHide { get; set; }
    }

    internal sealed class UpsertColumnResult
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

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionMethod { get; set; }

        [JsonPropertyName("addToSolutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionWarning { get; set; }

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

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        public bool IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        public string AddToSolutionMethod { get; set; } = "none";
    }

    internal sealed class CellUpdateInstruction
    {
        [JsonPropertyName("cell_name")]
        public string CellName { get; set; }

        [JsonPropertyName("set_attributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, string> SetAttributes { get; set; }

        [JsonPropertyName("remove_attributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> RemoveAttributes { get; set; }
    }

    internal sealed class UpdateAttributeChange
    {
        [JsonPropertyName("oldValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OldValue { get; set; }

        [JsonPropertyName("newValue")]
        public string NewValue { get; set; }
    }



    internal sealed class ManageEnvironmentVariableResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("count")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Count { get; set; }

        [JsonPropertyName("solutionFilter")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionFilter { get; set; }

        [JsonPropertyName("variables")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<EnvironmentVariableItem> Variables { get; set; }

        [JsonPropertyName("variableName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string VariableName { get; set; }

        [JsonPropertyName("displayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DisplayName { get; set; }

        [JsonPropertyName("type")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
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

        [JsonPropertyName("valueCleared")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool ValueCleared { get; set; }

        [JsonPropertyName("solutionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionName { get; set; }

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionMethod { get; set; }

        [JsonPropertyName("addToSolutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionWarning { get; set; }

        [JsonPropertyName("solutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionWarning { get; set; }

        [JsonPropertyName("published")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
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

        [JsonPropertyName("pluginTypeName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PluginTypeName { get; set; }

        [JsonPropertyName("pluginTypeFullName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PluginTypeFullName { get; set; }

        [JsonPropertyName("pluginAssemblyName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PluginAssemblyName { get; set; }

        [JsonPropertyName("pluginAssemblyVersion")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PluginAssemblyVersion { get; set; }

        [JsonPropertyName("pluginIsolationMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PluginIsolationMode { get; set; }

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

        [JsonPropertyName("paused")]
        public int Paused { get; set; }

        [JsonPropertyName("skipped")]
        public int Skipped { get; set; }

        [JsonPropertyName("suspended")]
        public int Suspended { get; set; }

        [JsonPropertyName("notSpecified")]
        public int NotSpecified { get; set; }
    }

    internal sealed class GetPluginsResult
    {
        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("assemblies")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<PluginAssemblyEntry> Assemblies { get; set; }

        [JsonPropertyName("steps")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<PluginStepEntry> Steps { get; set; }

        [JsonPropertyName("summary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public PluginStepSummary Summary { get; set; }

        [JsonPropertyName("packages")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<PluginPackageEntry> Packages { get; set; }
    }

    internal sealed class PluginPackageEntry
    {
        [JsonPropertyName("packageId")]
        public string PackageId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("version")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Version { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("hasManagedIdentity")]
        public bool HasManagedIdentity { get; set; }

        [JsonPropertyName("modifiedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("assemblies")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Assemblies { get; set; }
    }

    internal sealed class ManagedIdentityEntry
    {
        [JsonPropertyName("managedIdentityId")]
        public string ManagedIdentityId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("applicationId")]
        public string ApplicationId { get; set; }

        [JsonPropertyName("tenantId")]
        public string TenantId { get; set; }

        [JsonPropertyName("credentialSource")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CredentialSource { get; set; }
    }

    internal sealed class PluginAssemblyEntry
    {
        [JsonPropertyName("assemblyId")]
        public string AssemblyId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("version")]
        public string Version { get; set; }

        [JsonPropertyName("isolationMode")]
        public string IsolationMode { get; set; }

        [JsonPropertyName("sourceType")]
        public string SourceType { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("hasManagedIdentity")]
        public bool HasManagedIdentity { get; set; }

        [JsonPropertyName("managedIdentity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public ManagedIdentityEntry ManagedIdentity { get; set; }

        [JsonPropertyName("packageName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PackageName { get; set; }

        [JsonPropertyName("typeCount")]
        public int TypeCount { get; set; }

        [JsonPropertyName("types")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<PluginTypeEntry> Types { get; set; }
    }

    internal sealed class PluginTypeEntry
    {
        [JsonPropertyName("typeId")]
        public string TypeId { get; set; }

        [JsonPropertyName("typeName")]
        public string TypeName { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("isWorkflow")]
        public bool IsWorkflow { get; set; }

        [JsonPropertyName("workflowActivityGroupName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string WorkflowActivityGroupName { get; set; }

        [JsonPropertyName("stepCount")]
        public int StepCount { get; set; }
    }

    internal sealed class PluginStepEntry
    {
        [JsonPropertyName("stepId")]
        public string StepId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("assemblyName")]
        public string AssemblyName { get; set; }

        [JsonPropertyName("typeName")]
        public string TypeName { get; set; }

        [JsonPropertyName("message")]
        public string Message { get; set; }

        [JsonPropertyName("entity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity { get; set; }

        [JsonPropertyName("stage")]
        public string Stage { get; set; }

        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("rank")]
        public int Rank { get; set; }

        [JsonPropertyName("filteringAttributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FilteringAttributes { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("unsecureConfig")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UnsecureConfig { get; set; }

        [JsonPropertyName("secureConfigId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SecureConfigId { get; set; }

        [JsonPropertyName("secureConfig")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SecureConfig { get; set; }

        [JsonPropertyName("impersonatingUser")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ImpersonatingUser { get; set; }

        [JsonPropertyName("asyncAutoDelete")]
        public bool AsyncAutoDelete { get; set; }

        [JsonPropertyName("supportedDeployment")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SupportedDeployment { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("images")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<PluginImageEntry> Images { get; set; }
    }

    internal sealed class PluginImageEntry
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("entityAlias")]
        public string EntityAlias { get; set; }

        [JsonPropertyName("imageType")]
        public string ImageType { get; set; }

        [JsonPropertyName("attributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Attributes { get; set; }
    }

    internal sealed class PluginStepSummary
    {
        [JsonPropertyName("preValidation")]
        public int PreValidation { get; set; }

        [JsonPropertyName("preOperation")]
        public int PreOperation { get; set; }

        [JsonPropertyName("mainOperation")]
        public int MainOperation { get; set; }

        [JsonPropertyName("postOperation")]
        public int PostOperation { get; set; }

        [JsonPropertyName("syncCount")]
        public int SyncCount { get; set; }

        [JsonPropertyName("asyncCount")]
        public int AsyncCount { get; set; }

        [JsonPropertyName("disabledCount")]
        public int DisabledCount { get; set; }
    }

    internal sealed class GetBpfsResult
    {
        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("bpfs")]
        public List<BpfEntry> Bpfs { get; set; }
    }

    internal sealed class BpfEntry
    {
        [JsonPropertyName("workflowId")]
        public string WorkflowId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("uniqueName")]
        public string UniqueName { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("primaryEntity")]
        public string PrimaryEntity { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("businessProcessType")]
        public string BusinessProcessType { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("owner")]
        public string Owner { get; set; }

        [JsonPropertyName("createdOn")]
        public string CreatedOn { get; set; }

        [JsonPropertyName("modifiedOn")]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("modifiedBy")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedBy { get; set; }

        [JsonPropertyName("stageCount")]
        public int StageCount { get; set; }

        [JsonPropertyName("stages")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<BpfStageEntry> Stages { get; set; }
    }

    internal sealed class BpfStageEntry
    {
        [JsonPropertyName("stageId")]
        public string StageId { get; set; }

        [JsonPropertyName("stageName")]
        public string StageName { get; set; }

        [JsonPropertyName("stageCategory")]
        public string StageCategory { get; set; }

        [JsonPropertyName("primaryEntity")]
        public string PrimaryEntity { get; set; }

        [JsonIgnore]
        public int StageCategoryValue { get; set; }
    }

    internal sealed class GetPluginTraceLogsResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("traces")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<PluginTraceLogEntry> Traces { get; set; }
    }

    internal sealed class GetSystemJobsResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("jobs")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SystemJobEntry> Jobs { get; set; }

        [JsonPropertyName("summary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public JobSummary Summary { get; set; }
    }

    internal sealed class PluginTraceLogEntry
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("typeName")]
        public string TypeName { get; set; }

        [JsonPropertyName("messageName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MessageName { get; set; }

        [JsonPropertyName("primaryEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryEntity { get; set; }

        [JsonPropertyName("mode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Mode { get; set; }

        [JsonPropertyName("depth")]
        public int Depth { get; set; }

        [JsonPropertyName("duration")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Duration { get; set; }

        [JsonPropertyName("correlationId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CorrelationId { get; set; }

        [JsonPropertyName("createdOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedOn { get; set; }

        [JsonPropertyName("messageBlock")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MessageBlock { get; set; }

        [JsonPropertyName("exceptionDetails")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ExceptionDetails { get; set; }
    }

    internal sealed class SystemJobEntry
    {
        [JsonPropertyName("jobId")]
        public string JobId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("operationType")]
        public string OperationType { get; set; }

        [JsonPropertyName("primaryEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryEntity { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("messageName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MessageName { get; set; }

        [JsonPropertyName("startedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string StartedOn { get; set; }

        [JsonPropertyName("completedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CompletedOn { get; set; }

        [JsonPropertyName("executionTime")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ExecutionTime { get; set; }

        [JsonPropertyName("retryCount")]
        public int RetryCount { get; set; }

        [JsonPropertyName("depth")]
        public int Depth { get; set; }

        [JsonPropertyName("errorCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ErrorCode { get; set; }

        [JsonPropertyName("correlationId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CorrelationId { get; set; }

        [JsonPropertyName("owner")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Owner { get; set; }

        [JsonPropertyName("pluginStep")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PluginStep { get; set; }

        [JsonPropertyName("workflowName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string WorkflowName { get; set; }

        [JsonPropertyName("regardingRecord")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RegardingRecord { get; set; }

        [JsonPropertyName("friendlyMessage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FriendlyMessage { get; set; }

        [JsonPropertyName("message")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Message { get; set; }
    }

    internal sealed class JobSummary
    {
        [JsonPropertyName("plugin")]
        public int Plugin { get; set; }

        [JsonPropertyName("workflow")]
        public int Workflow { get; set; }

        [JsonPropertyName("bulkDelete")]
        public int BulkDelete { get; set; }

        [JsonPropertyName("import")]
        public int Import { get; set; }

        [JsonPropertyName("solution")]
        public int Solution { get; set; }

        [JsonPropertyName("other")]
        public int Other { get; set; }
    }

    internal sealed class GetAuditHistoryResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }

        [JsonPropertyName("recordId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordId { get; set; }

        [JsonPropertyName("timeScope")]
        public string TimeScope { get; set; }

        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("entries")]
        public List<AuditHistoryEntry> Entries { get; set; }
    }

    internal sealed class AuditHistoryEntry
    {
        [JsonPropertyName("timestamp")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Timestamp { get; set; }

        [JsonPropertyName("user")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string User { get; set; }

        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("entity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity { get; set; }

        [JsonPropertyName("recordName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordName { get; set; }

        [JsonPropertyName("recordId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordId { get; set; }

        [JsonPropertyName("operation")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Operation { get; set; }

        [JsonPropertyName("field")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Field { get; set; }

        [JsonPropertyName("oldValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OldValue { get; set; }

        [JsonPropertyName("newValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string NewValue { get; set; }
    }

    internal sealed class ManageCommandResult
    {
        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("commandId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CommandId { get; set; }

        [JsonPropertyName("message")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Message { get; set; }

        [JsonPropertyName("totalCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public int TotalCount { get; set; }

        [JsonPropertyName("commands")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<CommandEntry> Commands { get; set; }

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        public bool IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        public string AddToSolutionMethod { get; set; } = "none";
    }

    internal sealed class CommandEntry
    {
        [JsonPropertyName("commandId")]
        public string CommandId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("uniqueName")]
        public string UniqueName { get; set; }

        [JsonPropertyName("buttonLabel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ButtonLabel { get; set; }

        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("location")]
        public string Location { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("onClickEventType")]
        public string OnClickEventType { get; set; }

        [JsonPropertyName("javaScriptFunction")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string JavaScriptFunction { get; set; }

        [JsonPropertyName("javaScriptWebResource")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string JavaScriptWebResource { get; set; }

        [JsonPropertyName("visibilityType")]
        public string VisibilityType { get; set; }

        [JsonPropertyName("fontIcon")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FontIcon { get; set; }

        [JsonPropertyName("origin")]
        public string Origin { get; set; }

        [JsonPropertyName("sequence")]
        public int Sequence { get; set; }

        [JsonPropertyName("hidden")]
        public bool Hidden { get; set; }

        [JsonPropertyName("isDisabled")]
        public bool IsDisabled { get; set; }

        [JsonPropertyName("parentCommandId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ParentCommandId { get; set; }

        [JsonPropertyName("appName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AppName { get; set; }

        [JsonPropertyName("clientType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ClientType { get; set; }

        [JsonPropertyName("iconWebResource")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string IconWebResource { get; set; }

        [JsonPropertyName("onClickComponentLibrary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OnClickComponentLibrary { get; set; }

        [JsonPropertyName("visibilityComponentLibrary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string VisibilityComponentLibrary { get; set; }

        [JsonPropertyName("visibilityFormula")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string VisibilityFormula { get; set; }

        [JsonPropertyName("onClickFormula")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OnClickFormula { get; set; }

        [JsonPropertyName("rules")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<CommandRuleEntry> Rules { get; set; }

        [JsonPropertyName("children")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<CommandChildEntry> Children { get; set; }
    }

    internal sealed class CommandRuleEntry
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("uniqueName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UniqueName { get; set; }

        [JsonPropertyName("ruleType")]
        public string RuleType { get; set; }

        [JsonPropertyName("definition")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Definition { get; set; }

        [JsonPropertyName("contextValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ContextValue { get; set; }
    }

    // ── get_messages models ────────────────────────────────────────────

    internal sealed class GetMessagesResult
    {
        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("scope")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Scope { get; set; }

        [JsonPropertyName("sdkMessageCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? SdkMessageCount { get; set; }

        [JsonPropertyName("customActionCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? CustomActionCount { get; set; }

        [JsonPropertyName("sdkMessages")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> SdkMessages { get; set; }

        [JsonPropertyName("customActions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> CustomActions { get; set; }

        [JsonPropertyName("messageDetail")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SdkMessageDetail MessageDetail { get; set; }

        [JsonPropertyName("actionDetail")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public CustomActionDetail ActionDetail { get; set; }
    }

    internal sealed class SdkMessageDetail
    {
        [JsonPropertyName("messageId")]
        public string MessageId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("isActive")]
        public bool IsActive { get; set; }

        [JsonPropertyName("isCustomAction")]
        public bool IsCustomAction { get; set; }

        [JsonPropertyName("availability")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Availability { get; set; }

        [JsonPropertyName("supportedEntities")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> SupportedEntities { get; set; }

        [JsonPropertyName("pluginStepCount")]
        public int PluginStepCount { get; set; }
    }

    internal sealed class CustomActionDetail
    {
        [JsonPropertyName("workflowId")]
        public string WorkflowId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("uniqueName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UniqueName { get; set; }

        [JsonPropertyName("primaryEntity")]
        public string PrimaryEntity { get; set; }

        [JsonPropertyName("scope")]
        public string Scope { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("isCustomizable")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsCustomizable { get; set; }

        [JsonPropertyName("owner")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Owner { get; set; }

        [JsonPropertyName("modifiedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("inputParameters")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ActionParameterEntry> InputParameters { get; set; }

        [JsonPropertyName("outputParameters")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ActionParameterEntry> OutputParameters { get; set; }

        [JsonPropertyName("pluginStepCount")]
        public int PluginStepCount { get; set; }
    }

    internal sealed class ActionParameterEntry
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("isRequired")]
        public bool IsRequired { get; set; }

        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }
    }

    // ── manage_webresource models ──────────────────────────────────────

    internal sealed class ManageWebResourceResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("webResources")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<WebResourceEntry> WebResources { get; set; }

        [JsonPropertyName("solutionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionName { get; set; }

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionMethod { get; set; }

        [JsonPropertyName("addToSolutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionWarning { get; set; }

        [JsonPropertyName("published")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool Published { get; set; }
    }

    internal sealed class WebResourceEntry
    {
        [JsonPropertyName("webResourceId")]
        public string WebResourceId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("displayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DisplayName { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("typeCode")]
        public int TypeCode { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("languageCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? LanguageCode { get; set; }

        [JsonPropertyName("isCustomizable")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsCustomizable { get; set; }

        [JsonPropertyName("isHidden")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsHidden { get; set; }

        [JsonPropertyName("isEnabledForMobile")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsEnabledForMobile { get; set; }

        [JsonPropertyName("introducedVersion")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string IntroducedVersion { get; set; }

        [JsonPropertyName("createdBy")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedBy { get; set; }

        [JsonPropertyName("createdOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedOn { get; set; }

        [JsonPropertyName("modifiedBy")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedBy { get; set; }

        [JsonPropertyName("modifiedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedOn { get; set; }
    }

    // ── manage_role models ──────────────────────────────────────────────

    internal sealed class ManageRoleResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; } = "";

        [JsonPropertyName("roleId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RoleId { get; set; }

        [JsonPropertyName("roleName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RoleName { get; set; }

        [JsonPropertyName("userId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UserId { get; set; }

        [JsonPropertyName("userName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string UserName { get; set; }

        [JsonPropertyName("businessUnitId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string BusinessUnitId { get; set; }

        [JsonPropertyName("sourceRoleId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SourceRoleId { get; set; }

        [JsonPropertyName("privilegesCopied")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? PrivilegesCopied { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; } = "";

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        public bool IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        public string AddToSolutionMethod { get; set; } = "none";
    }

    // ── upsert_relationship models ──────────────────────────────────────

    internal sealed class UpsertRelationshipResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("relationshipName")]
        public string RelationshipName { get; set; }

        [JsonPropertyName("relationshipType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RelationshipType { get; set; }

        [JsonPropertyName("referencedEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ReferencedEntity { get; set; }

        [JsonPropertyName("referencingEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ReferencingEntity { get; set; }

        [JsonPropertyName("entity1")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity1 { get; set; }

        [JsonPropertyName("entity2")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity2 { get; set; }

        [JsonPropertyName("intersectEntityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string IntersectEntityName { get; set; }

        [JsonPropertyName("lookupAttributeName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LookupAttributeName { get; set; }

        [JsonPropertyName("isHierarchical")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsHierarchical { get; set; }

        [JsonPropertyName("cascadeAssign")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeAssign { get; set; }

        [JsonPropertyName("cascadeDelete")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeDelete { get; set; }

        [JsonPropertyName("cascadeMerge")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeMerge { get; set; }

        [JsonPropertyName("cascadeReparent")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeReparent { get; set; }

        [JsonPropertyName("cascadeShare")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeShare { get; set; }

        [JsonPropertyName("cascadeUnshare")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CascadeUnshare { get; set; }

        [JsonPropertyName("metadataId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MetadataId { get; set; }

        [JsonPropertyName("solutionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionName { get; set; }

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionMethod { get; set; }

        [JsonPropertyName("addToSolutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionWarning { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("changes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, UpdateAttributeChange> Changes { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }
    }

    internal sealed class CommandChildEntry
    {
        [JsonPropertyName("commandId")]
        public string CommandId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("uniqueName")]
        public string UniqueName { get; set; }

        [JsonPropertyName("buttonLabel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ButtonLabel { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("onClickEventType")]
        public string OnClickEventType { get; set; }

        [JsonPropertyName("javaScriptFunction")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string JavaScriptFunction { get; set; }

        [JsonPropertyName("sequence")]
        public int Sequence { get; set; }

        [JsonPropertyName("hidden")]
        public bool Hidden { get; set; }

        [JsonPropertyName("isDisabled")]
        public bool IsDisabled { get; set; }
    }

    // ── generate_demo_data models ─────────────────────────────────────

    internal sealed class ParsedRecordUrlResult
    {
        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("recordId")]
        public string RecordId { get; set; }

        [JsonPropertyName("source")]
        public string Source { get; set; }

        [JsonPropertyName("environmentId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EnvironmentId { get; set; }

        [JsonPropertyName("flowId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FlowId { get; set; }

        [JsonPropertyName("tip")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Tip { get; set; }
    }

    internal sealed class FetchXmlResult
    {
        [JsonPropertyName("totalReturned")]
        public int TotalReturned { get; set; }

        [JsonPropertyName("hasMore")]
        public bool HasMore { get; set; }

        [JsonPropertyName("getAll")]
        public bool GetAll { get; set; }

        [JsonPropertyName("maxRecords")]
        public int MaxRecords { get; set; }

        [JsonPropertyName("singleEntity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SingleEntity { get; set; }

        [JsonPropertyName("records")]
        public List<Dictionary<string, string>> Records { get; set; } = [];
    }

    internal sealed class SearchRecordsResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("searchTerm")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SearchTerm { get; set; }

        [JsonPropertyName("returnedCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ReturnedCount { get; set; }

        [JsonPropertyName("totalCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public long? TotalCount { get; set; }

        [JsonPropertyName("records")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SearchRecordEntry> Records { get; set; }

        [JsonPropertyName("status")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SearchStatusEntry Status { get; set; }

        [JsonPropertyName("statistics")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SearchStatisticsEntry Statistics { get; set; }

        [JsonPropertyName("rawResponse")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RawResponse { get; set; }

        [JsonPropertyName("errorCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ErrorMessage { get; set; }
    }

    internal sealed class SearchRecordEntry
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("objectTypeCode")]
        public int ObjectTypeCode { get; set; }

        [JsonPropertyName("score")]
        public double Score { get; set; }

        [JsonPropertyName("attributes")]
        public Dictionary<string, object> Attributes { get; set; } = [];

        [JsonPropertyName("highlights")]
        public Dictionary<string, string[]> Highlights { get; set; } = [];
    }

    internal sealed class SearchStatusEntry
    {
        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("lockboxStatus")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LockboxStatus { get; set; }

        [JsonPropertyName("cmkStatus")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CmkStatus { get; set; }

        [JsonPropertyName("entityStatusResults")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SearchEntityStatusEntry> EntityStatusResults { get; set; }

        [JsonPropertyName("manyToManyRelationshipSyncStatus")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SearchManyToManyRelationshipEntry> ManyToManyRelationshipSyncStatus { get; set; }
    }

    internal sealed class SearchEntityStatusEntry
    {
        [JsonPropertyName("entityLogicalName")]
        public string EntityLogicalName { get; set; }

        [JsonPropertyName("objectTypeCode")]
        public int ObjectTypeCode { get; set; }

        [JsonPropertyName("primaryNameField")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryNameField { get; set; }

        [JsonPropertyName("entityStatus")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityStatus { get; set; }

        [JsonPropertyName("indexedFields")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> IndexedFields { get; set; }
    }

    internal sealed class SearchManyToManyRelationshipEntry
    {
        [JsonPropertyName("relationshipName")]
        public string RelationshipName { get; set; }

        [JsonPropertyName("searchEntity")]
        public string SearchEntity { get; set; }

        [JsonPropertyName("relatedEntity")]
        public string RelatedEntity { get; set; }

        [JsonPropertyName("intersectEntity")]
        public string IntersectEntity { get; set; }
    }

    internal sealed class SearchStatisticsEntry
    {
        [JsonPropertyName("storageSizeInBytes")]
        public long StorageSizeInBytes { get; set; }

        [JsonPropertyName("storageSizeInMb")]
        public long StorageSizeInMb { get; set; }

        [JsonPropertyName("documentCount")]
        public long DocumentCount { get; set; }
    }

    internal sealed class GetTablesResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("count")]
        public int Count { get; set; }

        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }

        [JsonPropertyName("filter")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Filter { get; set; }

        [JsonPropertyName("tables")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableSummaryEntry> Tables { get; set; }

        [JsonPropertyName("table")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public TableDetailEntry Table { get; set; }
    }

    internal sealed class TableSummaryEntry
    {
        [JsonPropertyName("logicalName")]
        public string LogicalName { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("ownershipType")]
        public string OwnershipType { get; set; }

        [JsonPropertyName("isCustom")]
        public bool IsCustom { get; set; }

        [JsonPropertyName("isActivity")]
        public bool IsActivity { get; set; }

        [JsonPropertyName("isAuditEnabled")]
        public bool IsAuditEnabled { get; set; }
    }

    internal sealed class TableDetailEntry
    {
        [JsonPropertyName("logicalName")]
        public string LogicalName { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("ownershipType")]
        public string OwnershipType { get; set; }

        [JsonPropertyName("isCustom")]
        public bool IsCustom { get; set; }

        [JsonPropertyName("isActivity")]
        public bool IsActivity { get; set; }

        [JsonPropertyName("isAuditEnabled")]
        public bool IsAuditEnabled { get; set; }

        [JsonPropertyName("primaryIdAttribute")]
        public string PrimaryIdAttribute { get; set; }

        [JsonPropertyName("primaryNameAttribute")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PrimaryNameAttribute { get; set; }

        [JsonPropertyName("entitySetName")]
        public string EntitySetName { get; set; }

        [JsonPropertyName("logicalCollectionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LogicalCollectionName { get; set; }

        [JsonPropertyName("objectTypeCode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ObjectTypeCode { get; set; }

        [JsonPropertyName("attributes")]
        public List<TableAttributeEntry> Attributes { get; set; } = [];

        [JsonPropertyName("oneToManyRelationships")]
        public List<TableRelationshipEntry> OneToManyRelationships { get; set; } = [];

        [JsonPropertyName("manyToOneRelationships")]
        public List<TableRelationshipEntry> ManyToOneRelationships { get; set; } = [];

        [JsonPropertyName("manyToManyRelationships")]
        public List<TableManyToManyRelationshipEntry> ManyToManyRelationships { get; set; } = [];

        [JsonPropertyName("alternateKeys")]
        public List<TableKeyEntry> AlternateKeys { get; set; } = [];
    }

    internal sealed class TableAttributeEntry
    {
        [JsonPropertyName("logicalName")]
        public string LogicalName { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("requiredLevel")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RequiredLevel { get; set; }

        [JsonPropertyName("isValidForCreate")]
        public bool IsValidForCreate { get; set; }

        [JsonPropertyName("isValidForUpdate")]
        public bool IsValidForUpdate { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }
    }

    internal sealed class TableRelationshipEntry
    {
        [JsonPropertyName("schemaName")]
        public string SchemaName { get; set; }

        [JsonPropertyName("referencedEntity")]
        public string ReferencedEntity { get; set; }

        [JsonPropertyName("referencingEntity")]
        public string ReferencingEntity { get; set; }

        [JsonPropertyName("referencingAttribute")]
        public string ReferencingAttribute { get; set; }
    }

    internal sealed class TableManyToManyRelationshipEntry
    {
        [JsonPropertyName("schemaName")]
        public string SchemaName { get; set; }

        [JsonPropertyName("entity1")]
        public string Entity1 { get; set; }

        [JsonPropertyName("entity2")]
        public string Entity2 { get; set; }

        [JsonPropertyName("intersectEntityName")]
        public string IntersectEntityName { get; set; }
    }

    internal sealed class TableKeyEntry
    {
        [JsonPropertyName("schemaName")]
        public string SchemaName { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("keyAttributes")]
        public List<string> KeyAttributes { get; set; } = [];
    }

    internal sealed class GetBusinessRulesResult
    {
        [JsonPropertyName("mode")]
        public string Mode { get; set; }

        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("count")]
        public int Count { get; set; }

        [JsonPropertyName("rules")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<BusinessRuleSummaryEntry> Rules { get; set; }

        [JsonPropertyName("rule")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public BusinessRuleDetailEntry Rule { get; set; }
    }

    internal sealed class BusinessRuleSummaryEntry
    {
        [JsonPropertyName("ruleId")]
        public string RuleId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("scope")]
        public string Scope { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("modifiedOn")]
        public string ModifiedOn { get; set; }
    }

    internal sealed class BusinessRuleDetailEntry
    {
        [JsonPropertyName("ruleId")]
        public string RuleId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("scope")]
        public string Scope { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("createdOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedOn { get; set; }

        [JsonPropertyName("createdBy")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedBy { get; set; }

        [JsonPropertyName("modifiedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("modifiedBy")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedBy { get; set; }

        [JsonPropertyName("conditions")]
        public List<string> Conditions { get; set; } = [];

        [JsonPropertyName("actions")]
        public List<string> Actions { get; set; } = [];

        [JsonPropertyName("xamlParseStatus")]
        public string XamlParseStatus { get; set; }
    }

    internal sealed class GetSolutionComponentsResult
    {
        [JsonPropertyName("solution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public SolutionInfoEntry Solution { get; set; }

        [JsonPropertyName("totalComponents")]
        public int TotalComponents { get; set; }

        [JsonPropertyName("includeActiveLayers")]
        public bool IncludeActiveLayers { get; set; }

        [JsonPropertyName("activeLayersOnly")]
        public bool ActiveLayersOnly { get; set; }

        [JsonPropertyName("activeLayerCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ActiveLayerCount { get; set; }

        [JsonPropertyName("fullEntities")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> FullEntities { get; set; }

        [JsonPropertyName("summary")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SolutionComponentSummaryEntry> Summary { get; set; }

        [JsonPropertyName("components")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SolutionComponentEntry> Components { get; set; }

        [JsonPropertyName("solutionMatches")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<SolutionMatchEntry> SolutionMatches { get; set; }
    }

    internal sealed class SolutionInfoEntry
    {
        [JsonPropertyName("solutionId")]
        public string SolutionId { get; set; }

        [JsonPropertyName("uniqueName")]
        public string UniqueName { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("version")]
        public string Version { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("publisherName")]
        public string PublisherName { get; set; }
    }

    internal sealed class SolutionComponentSummaryEntry
    {
        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("typeId")]
        public int TypeId { get; set; }

        [JsonPropertyName("count")]
        public int Count { get; set; }

        [JsonPropertyName("activeLayerCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ActiveLayerCount { get; set; }
    }

    internal sealed class SolutionComponentEntry
    {
        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("typeId")]
        public int TypeId { get; set; }

        [JsonPropertyName("objectId")]
        public string ObjectId { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("hasActiveLayer")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? HasActiveLayer { get; set; }

        [JsonPropertyName("isFullEntity")]
        public bool IsFullEntity { get; set; }
    }

    internal sealed class SolutionMatchEntry
    {
        [JsonPropertyName("uniqueName")]
        public string UniqueName { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("version")]
        public string Version { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }
    }

    internal sealed class GenerateDemoDataResult
    {
        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("count")]
        public int Count { get; set; }

        [JsonPropertyName("fieldsGenerated")]
        public int FieldsGenerated { get; set; }

        [JsonPropertyName("fieldList")]
        public List<string> FieldList { get; set; } = [];

        [JsonPropertyName("filePath")]
        public string FilePath { get; set; }

        [JsonPropertyName("lookupsSampled")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, int> LookupsSampled { get; set; }

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }
    }

    // ── manage_choice models ──────────────────────────────────────────

    internal sealed class ManageChoiceResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("optionSetName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OptionSetName { get; set; }

        [JsonPropertyName("displayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DisplayName { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("optionCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? OptionCount { get; set; }

        [JsonPropertyName("options")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ChoiceOptionItem> Options { get; set; }

        [JsonPropertyName("totalCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? TotalCount { get; set; }

        [JsonPropertyName("items")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ChoiceListItem> Items { get; set; }

        [JsonPropertyName("solutionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionName { get; set; }

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionMethod { get; set; }

        [JsonPropertyName("addToSolutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AddToSolutionWarning { get; set; }

        [JsonPropertyName("solutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionWarning { get; set; }

        [JsonPropertyName("published")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
        public bool Published { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("optionsAdded")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsAdded { get; set; }

        [JsonPropertyName("optionsRenamed")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsRenamed { get; set; }

        [JsonPropertyName("optionsRemoved")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsRemoved { get; set; }

        [JsonPropertyName("optionsColored")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsColored { get; set; }
    }

    internal sealed class ChoiceOptionItem
    {
        [JsonPropertyName("value")]
        public int Value { get; set; }

        [JsonPropertyName("label")]
        public string Label { get; set; }

        [JsonPropertyName("color")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Color { get; set; }
    }

    internal sealed class ChoiceListItem
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("displayName")]
        public string DisplayName { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("isGlobal")]
        public bool IsGlobal { get; set; }
    }

    // ── create_records models ─────────────────────────────────────────

    internal sealed class BatchCreateResult
    {
        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("total")]
        public int Total { get; set; }

        [JsonPropertyName("succeeded")]
        public int Succeeded { get; set; }

        [JsonPropertyName("failed")]
        public int Failed { get; set; }

        [JsonPropertyName("durationSeconds")]
        public double DurationSeconds { get; set; }

        [JsonPropertyName("parallelism")]
        public int Parallelism { get; set; }

        [JsonPropertyName("usedDefaultParallelism")]
        public bool UsedDefaultParallelism { get; set; }

        [JsonPropertyName("items")]
        public List<BatchCreateItem> Items { get; set; } = [];
    }

    internal sealed class BatchCreateItem
    {
        [JsonPropertyName("index")]
        public int Index { get; set; }

        [JsonPropertyName("id")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Id { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("error")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Error { get; set; }
    }

}
