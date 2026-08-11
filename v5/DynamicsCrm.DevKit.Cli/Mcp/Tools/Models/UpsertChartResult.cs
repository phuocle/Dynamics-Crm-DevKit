using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class UpsertChartResult
    {
        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("entity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity { get; set; }

        [JsonPropertyName("chartId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ChartId { get; set; }

        [JsonPropertyName("chartName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ChartName { get; set; }

        [JsonPropertyName("chartType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ChartType { get; set; }

        [JsonPropertyName("category")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Category { get; set; }

        [JsonPropertyName("legend")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Legend { get; set; }

        [JsonPropertyName("aggregateType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string AggregateType { get; set; }

        [JsonPropertyName("measures")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ChartMeasureResult> Measures { get; set; }

        [JsonPropertyName("filter")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Filter { get; set; }

        [JsonPropertyName("solutionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionName { get; set; }

        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("needsConfirmation")]
        public bool NeedsConfirmation { get; set; }

        [JsonPropertyName("defaultsApplied")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> DefaultsApplied { get; set; }

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

        [JsonPropertyName("restoredFromBackup")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RestoredFromBackup { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        // ---- list only ----

        [JsonPropertyName("totalCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? TotalCount { get; set; }

        [JsonPropertyName("charts")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ChartListEntry> Charts { get; set; }

        // ---- detail only ----

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("isDefault")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsDefault { get; set; }

        [JsonPropertyName("dataDescription")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DataDescription { get; set; }

        [JsonPropertyName("presentationDescription")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PresentationDescription { get; set; }

        // ---- create/update/rename/undo: add-to-solution warning channel ----

        [JsonPropertyName("solutionWarning")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SolutionWarning { get; set; }
    }

    /// <summary>
    /// One measure entry for multi-series charts (from the <c>measures</c> param).
    /// </summary>
    internal sealed class ChartMeasureResult
    {
        [JsonPropertyName("column")]
        public string Column { get; set; }

        [JsonPropertyName("aggregateType")]
        public string AggregateType { get; set; }

        [JsonPropertyName("label")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Label { get; set; }
    }

    /// <summary>
    /// One chart row in the <c>list</c> action result.
    /// </summary>
    internal sealed class ChartListEntry
    {
        [JsonPropertyName("chartId")]
        public string ChartId { get; set; }

        [JsonPropertyName("chartName")]
        public string ChartName { get; set; }

        [JsonPropertyName("entity")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Entity { get; set; }

        [JsonPropertyName("isDefault")]
        public bool IsDefault { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }
    }
}
