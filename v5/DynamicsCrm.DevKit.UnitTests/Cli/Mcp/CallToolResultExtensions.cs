using ModelContextProtocol.Protocol;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Extension methods for CallToolResult to simplify text assertions in unit tests.
/// </summary>
internal static class CallToolResultExtensions
{
    internal static string GetText(this CallToolResult result)
    {
        if (result?.Content == null || result.Content.Count == 0) return "";
        var first = result.Content[0];
        if (first is TextContentBlock textBlock) return textBlock.Text ?? "";
        return "";
    }

    internal static bool Contains(this CallToolResult result, string value)
        => GetText(result).Contains(value);

    internal static bool StartsWith(this CallToolResult result, string value)
        => GetText(result).StartsWith(value);
}
