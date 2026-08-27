using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
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

        // ── list/detail fields ────────────────────────────────────────────

        [JsonPropertyName("formType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? FormType { get; set; }

        [JsonPropertyName("formTypeName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FormTypeName { get; set; }

        [JsonPropertyName("formXml")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FormXml { get; set; }

        [JsonPropertyName("isDefault")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsDefault { get; set; }

        [JsonPropertyName("isActive")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsActive { get; set; }

        [JsonPropertyName("isManaged")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsManaged { get; set; }

        [JsonPropertyName("version")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Version { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("forms")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<FormListEntry> Forms { get; set; }

        [JsonPropertyName("totalCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? TotalCount { get; set; }
    }

    internal sealed class FormListEntry
    {
        [JsonPropertyName("formId")]
        public string FormId { get; set; }

        [JsonPropertyName("formName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FormName { get; set; }

        [JsonPropertyName("formType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? FormType { get; set; }

        [JsonPropertyName("formTypeName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FormTypeName { get; set; }

        [JsonPropertyName("isDefault")]
        public bool IsDefault { get; set; }

        [JsonPropertyName("isActive")]
        public bool IsActive { get; set; }

        [JsonPropertyName("isManaged")]
        public bool IsManaged { get; set; }

        [JsonPropertyName("version")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Version { get; set; }

        [JsonPropertyName("formXml")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FormXml { get; set; }
    }
}
