using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class SearchRecordEntry
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("entityName")]
        public string EntityName { get; set; }

        // Dataverse /searchquery response uses PascalCase for these top-level
        // fields (verified via Dev.AllInOne.Console probe on 30.07.2026):
        //   "ObjectTypeCode": 0,         <-- top-level, but server returns 0;
        //                                    the REAL OTC lives inside attributes["@search.objecttypecode"]
        //   "Score": 14.69               <-- top-level, real relevance score
        // (Earlier versions used lowercase "objecttypecode" + "@search.score", which
        // always produced 0.0 because those keys are NOT in the response.)
        [JsonPropertyName("objectTypeCode")]
        public int ObjectTypeCode { get; set; }

        [JsonPropertyName("score")]
        public double Score { get; set; }

        [JsonPropertyName("name")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Name { get; set; }

        [JsonPropertyName("attributes")]
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public Dictionary<string, object> Attributes { get; set; } = [];

        [JsonPropertyName("highlights")]
        public Dictionary<string, string[]> Highlights { get; set; } = [];
    }
}
