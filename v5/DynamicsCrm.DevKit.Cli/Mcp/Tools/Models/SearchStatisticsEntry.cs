using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SearchStatisticsEntry
    {
        [JsonPropertyName("storageSizeInBytes")]
        public long StorageSizeInBytes { get; set; }

        [JsonPropertyName("storageSizeInMb")]
        public long StorageSizeInMb { get; set; }

        [JsonPropertyName("documentCount")]
        public long DocumentCount { get; set; }
    }
}
