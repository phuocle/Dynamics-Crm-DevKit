using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
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
}
