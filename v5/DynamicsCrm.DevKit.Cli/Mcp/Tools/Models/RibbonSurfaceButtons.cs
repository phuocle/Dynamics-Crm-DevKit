using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Models
{
    internal sealed class RibbonSurfaceButtons
    {
        [JsonPropertyName("surface")]
        public string Surface { get; set; }

        [JsonPropertyName("items")]
        public List<RibbonButtonInfo> Items { get; set; } = [];
    }
}
