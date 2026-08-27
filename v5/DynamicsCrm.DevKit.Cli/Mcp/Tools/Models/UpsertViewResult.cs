using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class UpsertViewResult
    {
        [JsonPropertyName("action")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Action { get; set; }

        [JsonPropertyName("entity")]
        public string Entity { get; set; }

        [JsonPropertyName("viewId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
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

        [JsonPropertyName("validationWarnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> ValidationWarnings { get; set; }

        [JsonPropertyName("quickFindColumns")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> QuickFindColumns { get; set; }

        [JsonPropertyName("published")]
        public bool Published { get; set; }

        [JsonPropertyName("createMode")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreateMode { get; set; }

        [JsonPropertyName("isAddToSolution")]
        public bool IsAddToSolution { get; set; }

        [JsonPropertyName("addToSolutionMethod")]
        public string AddToSolutionMethod { get; set; } = "none";


        [JsonPropertyName("queryType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? QueryType { get; set; }

        [JsonPropertyName("queryTypeName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string QueryTypeName { get; set; }

        [JsonPropertyName("isActive")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsActive { get; set; }

        [JsonPropertyName("isDefault")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsDefault { get; set; }

        [JsonPropertyName("clearedPreviousDefaults")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? ClearedPreviousDefaults { get; set; }

        [JsonPropertyName("isManaged")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsManaged { get; set; }

        [JsonPropertyName("source")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Source { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }

        [JsonPropertyName("columns")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ViewColumnEntry> Columns { get; set; }

        [JsonPropertyName("fetchXml")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FetchXml { get; set; }

        [JsonPropertyName("layoutXml")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LayoutXml { get; set; }

        [JsonPropertyName("layoutJson")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string LayoutJson { get; set; }

        [JsonPropertyName("conditionalFormatting")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ConditionalFormatting { get; set; }


        [JsonPropertyName("totalCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? TotalCount { get; set; }

        [JsonPropertyName("views")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<ViewListEntry> Views { get; set; }

        [JsonPropertyName("entityMatches")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<TableMatchEntry> EntityMatches { get; set; }
    }

    internal sealed class ViewListEntry
    {
        [JsonPropertyName("viewId")]
        public string ViewId { get; set; }

        [JsonPropertyName("viewName")]
        public string ViewName { get; set; }

        [JsonPropertyName("queryType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? QueryType { get; set; }

        [JsonPropertyName("queryTypeName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string QueryTypeName { get; set; }

        [JsonPropertyName("isDefault")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsDefault { get; set; }

        [JsonPropertyName("isActive")]
        public bool IsActive { get; set; }

        [JsonPropertyName("isManaged")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsManaged { get; set; }

        [JsonPropertyName("source")]
        public string Source { get; set; }

        [JsonPropertyName("description")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Description { get; set; }
    }

    internal sealed class ViewColumnEntry
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("width")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Width { get; set; }

        [JsonPropertyName("isHidden")]
        public bool IsHidden { get; set; }

        [JsonPropertyName("imageProviderWebResource")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ImageProviderWebResource { get; set; }

        [JsonPropertyName("imageProviderFunctionName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ImageProviderFunctionName { get; set; }
    }
}
