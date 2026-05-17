using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
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

        [JsonPropertyName("optionsAlreadyExisted")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsAlreadyExisted { get; set; }

        [JsonPropertyName("optionsRenamed")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsRenamed { get; set; }

        [JsonPropertyName("optionsRemoved")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsRemoved { get; set; }

        [JsonPropertyName("optionsColored")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> OptionsColored { get; set; }

        [JsonPropertyName("metadataVerified")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? MetadataVerified { get; set; }

        [JsonPropertyName("needsWait")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? NeedsWait { get; set; }

        [JsonPropertyName("waitTool")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string WaitTool { get; set; }

        [JsonPropertyName("pollAfterSeconds")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? PollAfterSeconds { get; set; }

        [JsonPropertyName("readbackAllowed")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? ReadbackAllowed { get; set; }

        [JsonPropertyName("nextAllowedActions")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> NextAllowedActions { get; set; }

        [JsonPropertyName("waitReason")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string WaitReason { get; set; }

        [JsonPropertyName("publishError")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PublishError { get; set; }
    }
}
