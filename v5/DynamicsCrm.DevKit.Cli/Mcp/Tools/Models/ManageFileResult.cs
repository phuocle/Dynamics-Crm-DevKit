using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    /// <summary>
    /// Structured output for manage_file (info / upload / download / delete on
    /// File and Image columns). Never carries binary data — only metadata and
    /// local file paths.
    /// </summary>
    internal sealed class ManageFileResult
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        [JsonPropertyName("recordId")]
        public string RecordId { get; set; }

        [JsonPropertyName("recordPrimaryName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string RecordPrimaryName { get; set; }

        [JsonPropertyName("columnName")]
        public string ColumnName { get; set; }

        [JsonPropertyName("columnType")]
        public string ColumnType { get; set; }

        [JsonPropertyName("maxSizeInKB")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? MaxSizeInKB { get; set; }

        [JsonPropertyName("isPrimaryImage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? IsPrimaryImage { get; set; }

        [JsonPropertyName("canStoreFullImage")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? CanStoreFullImage { get; set; }

        [JsonPropertyName("hasValue")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? HasValue { get; set; }

        [JsonPropertyName("fileId")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FileId { get; set; }

        [JsonPropertyName("fileName")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string FileName { get; set; }

        [JsonPropertyName("fileSizeInBytes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public long? FileSizeInBytes { get; set; }

        [JsonPropertyName("mimeType")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string MimeType { get; set; }

        [JsonPropertyName("imageUrl")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string ImageUrl { get; set; }

        [JsonPropertyName("imageTimestamp")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public long? ImageTimestamp { get; set; }

        [JsonPropertyName("blockCount")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public int? BlockCount { get; set; }

        [JsonPropertyName("fullSize")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public bool? FullSize { get; set; }

        [JsonPropertyName("savedPath")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string SavedPath { get; set; }

        [JsonPropertyName("sha256")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Sha256 { get; set; }

        [JsonPropertyName("status")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Status { get; set; }

        [JsonPropertyName("extra")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, string> Extra { get; set; }
    }
}
