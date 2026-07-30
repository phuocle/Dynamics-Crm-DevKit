using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    /// <summary>
    /// One audit event = one save/action in Dataverse.
    /// May contain many field changes; each change is <see cref="AuditHistoryChange"/>.
    /// </summary>
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

        [JsonPropertyName("event")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Event { get; set; }

        // Browse-mode fields (audit list view, one row per audit record)
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

        // Detail-mode: per-event list of field changes (may be empty for system events)
        [JsonPropertyName("changes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<AuditHistoryChange> Changes { get; set; }
    }

    /// <summary>
    /// One field-level change within an audit event.
    /// </summary>
    internal sealed class AuditHistoryChange
    {
        [JsonPropertyName("logicalName")]
        public string LogicalName { get; set; }

        [JsonPropertyName("displayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string DisplayName { get; set; }

        [JsonPropertyName("oldValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string OldValue { get; set; }

        [JsonPropertyName("newValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string NewValue { get; set; }
    }
}
