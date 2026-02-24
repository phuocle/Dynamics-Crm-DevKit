using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli
{
    public class CliOutput
    {
        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("exitCode")]
        public int ExitCode { get; set; }

        [JsonPropertyName("command")]
        public string Command { get; set; }

        [JsonPropertyName("profile")]
        public string Profile { get; set; }

        [JsonPropertyName("environment")]
        public string Environment { get; set; }

        [JsonPropertyName("duration")]
        public string Duration { get; set; }

        [JsonPropertyName("summary")]
        public CliOutputSummary Summary { get; set; } = new();

        [JsonPropertyName("items")]
        public List<CliOutputItem> Items { get; set; } = [];

        [JsonPropertyName("errors")]
        public List<string> Errors { get; set; } = [];

        [JsonPropertyName("dryRun")]
        public bool DryRun { get; set; }

        private static readonly JsonSerializerOptions JsonOptions = new()
        {
            WriteIndented = true,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        public string ToJson() => JsonSerializer.Serialize(this, JsonOptions);
    }

    public class CliOutputSummary
    {
        [JsonPropertyName("total")]
        public int Total { get; set; }

        [JsonPropertyName("created")]
        public int Created { get; set; }

        [JsonPropertyName("updated")]
        public int Updated { get; set; }

        [JsonPropertyName("skipped")]
        public int Skipped { get; set; }

        [JsonPropertyName("errors")]
        public int Errors { get; set; }

        [JsonPropertyName("deleted")]
        public int Deleted { get; set; }
    }

    public class CliOutputItem
    {
        [JsonPropertyName("action")]
        public string Action { get; set; }

        [JsonPropertyName("type")]
        public string Type { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("details")]
        public string Details { get; set; }
    }
}
