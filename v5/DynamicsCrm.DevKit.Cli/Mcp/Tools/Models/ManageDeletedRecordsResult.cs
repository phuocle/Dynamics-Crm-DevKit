using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    /// <summary>
    /// Result of <c>manage_deleted_records</c> for actions list/detail/restore/status.
    /// All string/bool/int properties are null-aware — properties with null values are
    /// omitted from JSON output to keep the payload compact.
    /// </summary>
    internal sealed class ManageDeletedRecordsResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        // ---- Common (list/detail/restore) ----

        [JsonPropertyName("entityName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityName { get; set; }

        [JsonPropertyName("entityDisplayName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string EntityDisplayName { get; set; }

        [JsonPropertyName("timeScope")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string TimeScope { get; set; }

        [JsonPropertyName("totalCount")]
        public int TotalCount { get; set; }

        [JsonPropertyName("records")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<DeletedRecordEntry> Records { get; set; }

        [JsonPropertyName("hasMore")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? HasMore { get; set; }

        [JsonPropertyName("pagingCookie")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string PagingCookie { get; set; }

        // ---- Detail only ----

        [JsonPropertyName("recordId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordId { get; set; }

        [JsonPropertyName("recordName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordName { get; set; }

        [JsonPropertyName("modifiedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("createdOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedOn { get; set; }

        [JsonPropertyName("expiresOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ExpiresOn { get; set; }

        [JsonPropertyName("attributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, string> Attributes { get; set; }

        [JsonPropertyName("notFound")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? NotFound { get; set; }

        [JsonPropertyName("notFoundHint")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string NotFoundHint { get; set; }

        // ---- Restore only ----

        // ---- Restore only ----

        [JsonPropertyName("dryRun")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? DryRun { get; set; }

        [JsonPropertyName("totalRequested")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? TotalRequested { get; set; }

        [JsonPropertyName("restored")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Restored { get; set; }

        [JsonPropertyName("failed")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? Failed { get; set; }

        [JsonPropertyName("results")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<RestoreResultEntry> Results { get; set; }

        // ---- Warnings (any action) ----

        [JsonPropertyName("warnings")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public List<string> Warnings { get; set; }
    }

    /// <summary>
    /// One row in the list of soft-deleted records.
    /// </summary>
    internal sealed class DeletedRecordEntry
    {
        [JsonPropertyName("recordId")]
        public string RecordId { get; set; }

        [JsonPropertyName("recordName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordName { get; set; }

        // Bin records (datasource="bin") do NOT expose system fields like deletedon/deletedby
        // (verified via probe — only entity attributes are returned). modifiedOn is the closest
        // proxy for "when the record was deleted" since delete is a final update operation.
        [JsonPropertyName("modifiedOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedOn { get; set; }

        [JsonPropertyName("createdOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string CreatedOn { get; set; }

        [JsonPropertyName("modifiedBy")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ModifiedBy { get; set; }

        [JsonPropertyName("expiresOn")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ExpiresOn { get; set; }

        [JsonPropertyName("canRestore")]
        public bool CanRestore { get; set; } = true;
    }

    /// <summary>
    /// Per-record outcome of a restore operation.
    /// </summary>
    internal sealed class RestoreResultEntry
    {
        [JsonPropertyName("recordId")]
        public string RecordId { get; set; }

        /// <summary>
        /// "would-restore" (dry-run), "restored" (success), or "failed" (per-record error).
        /// </summary>
        [JsonPropertyName("status")]
        public string Status { get; set; }

        [JsonPropertyName("message")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Message { get; set; }

        [JsonPropertyName("restoredRecordId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RestoredRecordId { get; set; }
    }
}
