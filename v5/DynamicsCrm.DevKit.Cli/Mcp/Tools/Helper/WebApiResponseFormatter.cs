using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class WebApiResponseFormatter
    {
        public static string FormatResponse(
            HttpStatusCode statusCode,
            string reasonPhrase,
            Dictionary<string, string> responseHeaders,
            string responseBody,
            int maxResponseLines)
        {
            var sb = new StringBuilder(2048);

            sb.AppendLine($"**HTTP {(int)statusCode} {reasonPhrase}**");
            sb.AppendLine();

            AppendNotableHeaders(sb, responseHeaders);

            if (string.IsNullOrWhiteSpace(responseBody))
            {
                sb.AppendLine("_(empty response body)_");
                return sb.ToString();
            }

            try
            {
                using var doc = JsonDocument.Parse(responseBody);
                var root = doc.RootElement;

                if (TryFormatAsValueTable(sb, root, maxResponseLines))
                    return sb.ToString();

                if (root.ValueKind == JsonValueKind.Object && IsFlatObject(root))
                {
                    FormatAsFlatTable(sb, root, maxResponseLines);
                    return sb.ToString();
                }

                FormatAsJsonCodeBlock(sb, responseBody, maxResponseLines);
            }
            catch
            {
                FormatAsPlainText(sb, responseBody, maxResponseLines);
            }

            return sb.ToString();
        }

        private static void AppendNotableHeaders(StringBuilder sb, Dictionary<string, string> headers)
        {
            if (headers == null || headers.Count == 0)
                return;

            var notable = new[] { "OData-EntityId", "Location", "Preference-Applied" };
            var found = false;

            foreach (var key in notable)
            {
                if (headers.TryGetValue(key, out var value))
                {
                    if (!found)
                    {
                        sb.AppendLine("| Header | Value |");
                        sb.AppendLine("| --- | --- |");
                        found = true;
                    }
                    sb.AppendLine($"| {key} | {EscapePipe(value)} |");
                }
            }

            if (found)
                sb.AppendLine();
        }

        private static bool TryFormatAsValueTable(StringBuilder sb, JsonElement root, int maxLines)
        {
            if (root.ValueKind != JsonValueKind.Object)
                return false;

            if (!root.TryGetProperty("value", out var valueElement))
                return false;

            if (valueElement.ValueKind != JsonValueKind.Array || valueElement.GetArrayLength() == 0)
                return false;

            var items = new List<JsonElement>();
            foreach (var item in valueElement.EnumerateArray())
            {
                if (item.ValueKind != JsonValueKind.Object)
                    return false;
                items.Add(item);
            }

            var allKeys = items
                .SelectMany(item => item.EnumerateObject().Select(p => p.Name))
                .Where(k => !k.StartsWith("@odata.", StringComparison.OrdinalIgnoreCase))
                .Distinct()
                .ToList();

            if (allKeys.Count == 0)
                return false;

            var context = "";
            if (root.TryGetProperty("@odata.context", out var ctx))
                context = $"> Context: {ctx.GetString()}\n\n";

            var count = "";
            if (root.TryGetProperty("@odata.count", out var cnt))
                count = $"Total count: **{cnt}**\n\n";

            sb.Append(context);
            sb.Append(count);
            sb.AppendLine($"Returned **{items.Count}** records");
            sb.AppendLine();

            sb.Append("| ");
            sb.Append(string.Join(" | ", allKeys));
            sb.AppendLine(" |");

            sb.Append("| ");
            sb.Append(string.Join(" | ", allKeys.Select(_ => "---")));
            sb.AppendLine(" |");

            var lineCount = 3;
            var totalItems = items.Count;

            foreach (var item in items)
            {
                if (lineCount >= maxLines)
                {
                    sb.AppendLine();
                    sb.AppendLine($"_(truncated, showing first {lineCount - 3} of {totalItems} records)_");
                    return true;
                }

                sb.Append("| ");
                sb.Append(string.Join(" | ", allKeys.Select(k =>
                {
                    if (!item.TryGetProperty(k, out var val))
                        return "";
                    return EscapePipe(FormatJsonValue(val));
                })));
                sb.AppendLine(" |");
                lineCount++;
            }

            return true;
        }

        private static bool IsFlatObject(JsonElement obj)
        {
            foreach (var prop in obj.EnumerateObject())
            {
                if (prop.Name.StartsWith("@odata.", StringComparison.OrdinalIgnoreCase))
                    continue;
                if (prop.Value.ValueKind == JsonValueKind.Object || prop.Value.ValueKind == JsonValueKind.Array)
                    return false;
            }
            return true;
        }

        private static void FormatAsFlatTable(StringBuilder sb, JsonElement obj, int maxLines)
        {
            sb.AppendLine("| Property | Value |");
            sb.AppendLine("| --- | --- |");

            var lineCount = 2;
            var totalProps = 0;

            foreach (var prop in obj.EnumerateObject())
            {
                totalProps++;
            }

            foreach (var prop in obj.EnumerateObject())
            {
                if (lineCount >= maxLines)
                {
                    sb.AppendLine();
                    sb.AppendLine($"_(truncated, showing first {lineCount - 2} of {totalProps} properties)_");
                    return;
                }
                sb.AppendLine($"| {EscapePipe(prop.Name)} | {EscapePipe(FormatJsonValue(prop.Value))} |");
                lineCount++;
            }
        }

        private static void FormatAsJsonCodeBlock(StringBuilder sb, string json, int maxLines)
        {
            string prettyJson;
            try
            {
                using var doc = JsonDocument.Parse(json);
                prettyJson = JsonSerializer.Serialize(doc, new JsonSerializerOptions { WriteIndented = true });
            }
            catch
            {
                prettyJson = json;
            }

            var lines = prettyJson.Split('\n');

            sb.AppendLine("```json");
            for (var i = 0; i < Math.Min(lines.Length, maxLines); i++)
            {
                sb.AppendLine(lines[i].TrimEnd('\r'));
            }
            sb.AppendLine("```");

            if (lines.Length > maxLines)
            {
                sb.AppendLine();
                sb.AppendLine($"_(truncated, showing first {maxLines} of {lines.Length} total lines)_");
            }
        }

        private static void FormatAsPlainText(StringBuilder sb, string text, int maxLines)
        {
            var lines = text.Split('\n');

            for (var i = 0; i < Math.Min(lines.Length, maxLines); i++)
            {
                sb.AppendLine(lines[i].TrimEnd('\r'));
            }

            if (lines.Length > maxLines)
            {
                sb.AppendLine();
                sb.AppendLine($"_(truncated, showing first {maxLines} of {lines.Length} total lines)_");
            }
        }

        private static string FormatJsonValue(JsonElement value) => value.ValueKind switch
        {
            JsonValueKind.String => value.GetString() ?? "",
            JsonValueKind.Number => value.GetRawText(),
            JsonValueKind.True => "true",
            JsonValueKind.False => "false",
            JsonValueKind.Null => "",
            _ => value.GetRawText()
        };

        private static string EscapePipe(string value) =>
            value?.Replace("|", "\\|").Replace("\n", " ").Replace("\r", "") ?? "";
    }
}
