using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
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
}
