using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed record FormNavigationItem(
        [property: JsonPropertyName("id")] string Id,
        [property: JsonPropertyName("type")] string Type,
        [property: JsonPropertyName("relationshipName")] string RelationshipName,
        [property: JsonPropertyName("label")] string Label,
        [property: JsonPropertyName("area")] string Area,
        [property: JsonPropertyName("sequence")] int? Sequence,
        [property: JsonPropertyName("visible")] bool Visible);
}
