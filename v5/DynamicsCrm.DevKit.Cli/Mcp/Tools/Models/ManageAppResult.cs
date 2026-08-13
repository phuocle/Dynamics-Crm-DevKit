using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
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

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("totalCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? TotalCount { get; set; }

        [JsonPropertyName("apps")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ManageAppListEntryResult> Apps { get; set; }

        [JsonPropertyName("appComponents")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> AppComponents { get; set; }

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

        [JsonPropertyName("navigationChanged")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? NavigationChanged { get; set; }

        [JsonPropertyName("changedOperations")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ChangedOperations { get; set; }

        [JsonPropertyName("noOpOperations")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? NoOpOperations { get; set; }

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
}
