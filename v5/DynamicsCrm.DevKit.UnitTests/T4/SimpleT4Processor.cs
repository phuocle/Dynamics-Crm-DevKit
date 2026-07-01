using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.UnitTests.T4;

/// <summary>
/// Lightweight T4 template processor for unit testing.
/// Handles <#=Context.Property#> expressions and <#if(cond){#>...<#}#> blocks.
/// Does NOT support nested if/else-if beyond 2 levels or arbitrary C# code blocks.
/// </summary>
public static class SimpleT4Processor
{
    public static string Process(string template, T4Context context)
    {
        var result = ProcessConditionals(template, context);
        result = ProcessExpressions(result, context);
        return result;
    }

    private static string ProcessExpressions(string template, T4Context context)
    {
        return Regex.Replace(template, @"<#=\s*Context\.(\w+)\s*#>", match =>
        {
            var propName = match.Groups[1].Value;
            return ResolveProperty(context, propName);
        });
    }

    private static string ProcessConditionals(string template, T4Context context)
    {
        var maxIterations = 50;
        var iteration = 0;

        while (iteration++ < maxIterations)
        {
            var processed = ProcessOneConditionalPass(template, context);
            if (processed == template) break;
            template = processed;
        }

        return template;
    }

    private static string ProcessOneConditionalPass(string template, T4Context context)
    {
        var result = new StringBuilder();
        var pos = 0;

        while (pos < template.Length)
        {
            var ifStart = template.IndexOf("<#if(", pos, StringComparison.Ordinal);
            if (ifStart < 0)
            {
                result.Append(template, pos, template.Length - pos);
                break;
            }

            result.Append(template, pos, ifStart - pos);
            var (replacement, endPos) = ParseAndEvaluateIfChain(template, ifStart, context);
            result.Append(replacement);
            pos = endPos;
        }

        return result.ToString();
    }

    private static (string replacement, int endPos) ParseAndEvaluateIfChain(string template, int start, T4Context context)
    {
        var branches = new List<(string condition, string body)>();
        string? elseBody = null;
        var pos = start;

        var ifHeaderEnd = template.IndexOf("{#>", pos, StringComparison.Ordinal);
        if (ifHeaderEnd < 0) return (template.Substring(start, 5), start + 5);

        var condStart = pos + 5; // skip "<#if("
        var condEnd = template.IndexOf("){#>", condStart, StringComparison.Ordinal);
        if (condEnd < 0) return (template.Substring(start, 5), start + 5);

        var condition = template.Substring(condStart, condEnd - condStart);
        pos = condEnd + 4; // skip "){#>"

        var (body, bodyEnd) = ExtractBodyFromTemplate(template, pos);
        branches.Add((condition, body));
        pos = bodyEnd;

        while (pos < template.Length)
        {
            if (!MatchAt(template, pos, "<#}")) break;

            var afterClose = pos + 3; // skip "<#}"
            var restSnippet = template.Substring(afterClose);

            var elseIfMatch = Regex.Match(restSnippet, @"^\s*else\s+if\(([^)]+)\)\{#>");
            if (elseIfMatch.Success)
            {
                condition = elseIfMatch.Groups[1].Value;
                pos = afterClose + elseIfMatch.Length;
                (body, bodyEnd) = ExtractBodyFromTemplate(template, pos);
                branches.Add((condition, body));
                pos = bodyEnd;
                continue;
            }

            var elseMatch = Regex.Match(restSnippet, @"^\s*else\s*\{#>");
            if (elseMatch.Success)
            {
                pos = afterClose + elseMatch.Length;
                (body, bodyEnd) = ExtractBodyFromTemplate(template, pos);
                elseBody = body;
                pos = bodyEnd;

                if (MatchAt(template, pos, "<#}#>"))
                    pos += 5;
                break;
            }

            if (MatchAt(template, pos, "<#}#>"))
            {
                pos += 5;
                break;
            }

            break;
        }

        foreach (var branch in branches)
        {
            if (EvaluateCondition(branch.condition, context))
                return (branch.body, pos);
        }

        return (elseBody ?? string.Empty, pos);
    }

    private static (string body, int endPos) ExtractBodyFromTemplate(string template, int start)
    {
        var depth = 0;
        var i = start;

        while (i < template.Length)
        {
            if (i + 1 < template.Length && template[i] == '<' && template[i + 1] == '#')
            {
                if (i + 4 < template.Length && template.Substring(i, 5) == "<#if(")
                {
                    depth++;
                    i += 5;
                    continue;
                }

                if (i + 2 < template.Length && template[i + 2] == '}')
                {
                    if (depth == 0)
                        return (template.Substring(start, i - start), i);

                    var afterBrace = i + 3;
                    var elseIfNested = Regex.Match(template.Substring(afterBrace), @"^\s*else\s+if\([^)]+\)\{#>");
                    if (elseIfNested.Success)
                    {
                        i = afterBrace + elseIfNested.Length;
                        continue;
                    }
                    var elseNested = Regex.Match(template.Substring(afterBrace), @"^\s*else\s*\{#>");
                    if (elseNested.Success)
                    {
                        i = afterBrace + elseNested.Length;
                        continue;
                    }

                    depth--;
                    if (MatchAt(template, i, "<#}#>"))
                        i += 5;
                    else
                    {
                        var closeEnd = template.IndexOf("#>", afterBrace, StringComparison.Ordinal);
                        i = closeEnd >= 0 ? closeEnd + 2 : afterBrace;
                    }
                    continue;
                }
            }
            i++;
        }

        return (template.Substring(start), template.Length);
    }

    private static bool MatchAt(string text, int pos, string pattern)
    {
        if (pos + pattern.Length > text.Length) return false;
        return text.Substring(pos, pattern.Length) == pattern;
    }

    private static bool EvaluateCondition(string condition, T4Context context)
    {
        condition = condition.Trim();

        if (condition.Contains("||"))
        {
            var parts = condition.Split(new[] { "||" }, StringSplitOptions.None);
            return parts.Any(p => EvaluateCondition(p, context));
        }

        if (condition.Contains("&&"))
        {
            var parts = condition.Split(new[] { "&&" }, StringSplitOptions.None);
            return parts.All(p => EvaluateCondition(p, context));
        }

        if (condition.StartsWith("!"))
            return !EvaluateCondition(condition.Substring(1).Trim(), context);

        var neqMatch = Regex.Match(condition, @"Context\.(\w+)\s*!=\s*""([^""]*)""");
        if (neqMatch.Success)
        {
            var val = ResolveProperty(context, neqMatch.Groups[1].Value);
            return val != neqMatch.Groups[2].Value;
        }

        var eqMatch = Regex.Match(condition, @"Context\.(\w+)\s*==\s*""([^""]*)""");
        if (eqMatch.Success)
        {
            var val = ResolveProperty(context, eqMatch.Groups[1].Value);
            return val == eqMatch.Groups[2].Value;
        }

        var propMatch = Regex.Match(condition, @"Context\.(\w+)");
        if (propMatch.Success)
        {
            var propName = propMatch.Groups[1].Value;
            var prop = typeof(T4Context).GetProperty(propName, BindingFlags.Public | BindingFlags.Instance);
            if (prop != null && prop.PropertyType == typeof(bool))
                return (bool)prop.GetValue(context)!;
            var val = ResolveProperty(context, propName);
            return !string.IsNullOrEmpty(val) && val != "0" && val.ToLower() != "false";
        }

        return false;
    }

    private static string ResolveProperty(T4Context context, string propertyName)
    {
        var prop = typeof(T4Context).GetProperty(propertyName, BindingFlags.Public | BindingFlags.Instance);
        if (prop == null) return $"{{UNKNOWN:{propertyName}}}";
        var value = prop.GetValue(context);
        return value?.ToString() ?? string.Empty;
    }

    public static string LoadTemplate(string templateFileName)
    {
        var assembly = typeof(T4Context).Assembly;
        var resourceName = assembly.GetManifestResourceNames()
            .FirstOrDefault(n => n.EndsWith($"tt.{templateFileName}"));

        if (resourceName == null)
        {
            var ttFolder = FindTtFolder();
            if (ttFolder != null)
            {
                var filePath = Path.Combine(ttFolder, templateFileName);
                if (File.Exists(filePath))
                    return File.ReadAllText(filePath);
            }
            throw new FileNotFoundException($"Template '{templateFileName}' not found as embedded resource or file.");
        }

        using var stream = assembly.GetManifestResourceStream(resourceName)!;
        using var reader = new StreamReader(stream);
        return reader.ReadToEnd();
    }

    private static string? FindTtFolder()
    {
        var dir = new DirectoryInfo(AppContext.BaseDirectory);
        while (dir != null)
        {
            var candidate = Path.Combine(dir.FullName, "DynamicsCrm.DevKit.Shared", "Resources", "tt");
            if (Directory.Exists(candidate)) return candidate;
            dir = dir.Parent;
        }
        return null;
    }
}
