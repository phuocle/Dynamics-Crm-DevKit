using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Services
{
    public class T4TemplateProcessor
    {
        public async Task<string> ProcessPluginTemplateAsync(T4Context context, string customTemplatePath = null)
        {
            var template = await LoadTemplateAsync(customTemplatePath);
            return ProcessTemplate(template, context);
        }

        private async Task<string> LoadTemplateAsync(string customTemplatePath)
        {
            if (!string.IsNullOrEmpty(customTemplatePath) && File.Exists(customTemplatePath))
            {
                return await File.ReadAllTextAsync(customTemplatePath);
            }

            var resourceName = $"{typeof(Helper).Assembly.GetName().Name}.Resources.tt.Plugin.tt";
            return await Helper.ReadEmbeddedResourceAsync(resourceName);
        }

        internal string ProcessTemplate(string template, T4Context context)
        {
            var sb = new StringBuilder();
            var i = 0;

            while (i < template.Length)
            {
                if (i + 1 < template.Length && template[i] == '<' && template[i + 1] == '#')
                {
                    var tagEnd = template.IndexOf("#>", i + 2);
                    if (tagEnd == -1)
                    {
                        sb.Append(template[i]);
                        i++;
                        continue;
                    }

                    var tagContent = template.Substring(i + 2, tagEnd - i - 2);
                    var tagLength = tagEnd + 2 - i;

                    if (tagContent.StartsWith("="))
                    {
                        var expr = tagContent.Substring(1).Trim();
                        sb.Append(EvalExpression(expr, context));
                        i += tagLength;
                    }
                    else if (tagContent.StartsWith("if("))
                    {
                        var result = ProcessIfBlock(template, i, context);
                        sb.Append(result.Output);
                        i = result.EndIndex;
                    }
                    else
                    {
                        i += tagLength;
                    }
                }
                else
                {
                    sb.Append(template[i]);
                    i++;
                }
            }

            return sb.ToString();
        }

        private string EvalExpression(string expr, T4Context context)
        {
            return expr switch
            {
                "Context.PluginSharedNameSpace" => context.PluginSharedNameSpace ?? "",
                "Context.PluginNameSpace" => context.PluginNameSpace ?? "",
                "Context.PluginMessage" => context.PluginMessage ?? "",
                "Context.PluginLogicalName" => context.PluginLogicalName ?? "",
                "Context.PluginStage" => context.PluginStage ?? "",
                "Context.PluginExecution" => context.PluginExecution ?? "",
                "Context.Class" => context.Class ?? "",
                "Context.PluginComment" => context.PluginComment ?? "",
                "Context.PluginOrder" => context.PluginOrder.ToString(),
                "Context.PluginSchemaName" => context.PluginSchemaName ?? "",
                "Context.DataSource" => context.DataSource ?? "",
                _ => ""
            };
        }

        private bool EvalCondition(string condition, T4Context context)
        {
            condition = condition.Trim();

            if (condition == "Context.IsPluginSupportedPreImage") return context.IsPluginSupportedPreImage;
            if (condition == "Context.IsPluginSupportedPostImage") return context.IsPluginSupportedPostImage;
            if (condition == "Context.PluginOrder!=1") return context.PluginOrder != 1;

            if (condition.Contains("==\""))
            {
                var parts = condition.Split(new[] { "==\"" }, 2, System.StringSplitOptions.None);
                if (parts.Length == 2)
                {
                    var left = EvalExpression(parts[0].Trim(), context);
                    var right = parts[1].TrimEnd('"');
                    return left == right;
                }
            }

            if (condition.Contains("||"))
            {
                var orParts = condition.Split(new[] { "||" }, System.StringSplitOptions.None);
                foreach (var part in orParts)
                {
                    if (EvalCondition(part.Trim(), context)) return true;
                }
                return false;
            }

            return false;
        }

        private (string Output, int EndIndex) ProcessIfBlock(string template, int startIndex, T4Context context)
        {
            var tagEnd = template.IndexOf("#>", startIndex + 2);
            var tagContent = template.Substring(startIndex + 2, tagEnd - startIndex - 2);

            var condStr = ExtractCondition(tagContent);
            var condResult = EvalCondition(condStr, context);

            var bodyStart = tagEnd + 2;

            var branches = new System.Collections.Generic.List<(bool Condition, string Body)>();
            var (body, endType, endIdx) = CollectBranchBody(template, bodyStart, context);

            branches.Add((condResult, body));

            while (endType == BranchEnd.ElseIf || endType == BranchEnd.Else)
            {
                if (endType == BranchEnd.ElseIf)
                {
                    var elseIfTagEnd = template.IndexOf("#>", endIdx);
                    var elseIfTag = template.Substring(endIdx, elseIfTagEnd - endIdx + 2);
                    var elseIfCond = ExtractElseIfCondition(elseIfTag);
                    var elseIfCondResult = EvalCondition(elseIfCond, context);

                    var elseIfBodyStart = elseIfTagEnd + 2;
                    var (elseIfBody, nextEndType, nextEndIdx) = CollectBranchBody(template, elseIfBodyStart, context);
                    branches.Add((elseIfCondResult, elseIfBody));
                    endType = nextEndType;
                    endIdx = nextEndIdx;
                }
                else
                {
                    var elseTagEnd = template.IndexOf("#>", endIdx);
                    var elseBodyStart = elseTagEnd + 2;
                    var (elseBody, nextEndType, nextEndIdx) = CollectBranchBody(template, elseBodyStart, context);
                    branches.Add((true, elseBody));
                    endType = nextEndType;
                    endIdx = nextEndIdx;
                }
            }

            foreach (var branch in branches)
            {
                if (branch.Condition)
                {
                    var processed = ProcessTemplate(branch.Body, context);
                    return (processed, endIdx);
                }
            }

            return ("", endIdx);
        }

        private enum BranchEnd { Close, ElseIf, Else }

        private (string Body, BranchEnd EndType, int EndIndex) CollectBranchBody(string template, int start, T4Context context)
        {
            var sb = new StringBuilder();
            var i = start;
            var depth = 0;

            while (i < template.Length)
            {
                if (i + 1 < template.Length && template[i] == '<' && template[i + 1] == '#')
                {
                    var tagEnd = template.IndexOf("#>", i + 2);
                    if (tagEnd == -1)
                    {
                        sb.Append(template[i]);
                        i++;
                        continue;
                    }

                    var tagContent = template.Substring(i + 2, tagEnd - i - 2);

                    if (tagContent.StartsWith("if("))
                    {
                        depth++;
                        sb.Append(template, i, tagEnd + 2 - i);
                        i = tagEnd + 2;
                    }
                    else if (tagContent.TrimStart() == "}" || tagContent.TrimStart() == "}#" || tagContent.Trim() == "}")
                    {
                        if (depth > 0)
                        {
                            depth--;
                            sb.Append(template, i, tagEnd + 2 - i);
                            i = tagEnd + 2;
                        }
                        else
                        {
                            return (sb.ToString(), BranchEnd.Close, tagEnd + 2);
                        }
                    }
                    else if (depth == 0 && (tagContent.TrimStart().StartsWith("}else if(") || tagContent.TrimStart().StartsWith("} else if(")))
                    {
                        return (sb.ToString(), BranchEnd.ElseIf, i + 2);
                    }
                    else if (depth == 0 && (tagContent.TrimStart().StartsWith("}else{") || tagContent.TrimStart().StartsWith("} else {") || tagContent.TrimStart().StartsWith("} else {")))
                    {
                        return (sb.ToString(), BranchEnd.Else, i + 2);
                    }
                    else if (depth == 0 && tagContent.TrimStart().StartsWith("}"))
                    {
                        var rest = tagContent.TrimStart().Substring(1).TrimStart();
                        if (rest.StartsWith("else if("))
                            return (sb.ToString(), BranchEnd.ElseIf, i + 2);
                        if (rest.StartsWith("else{") || rest.StartsWith("else {"))
                            return (sb.ToString(), BranchEnd.Else, i + 2);

                        return (sb.ToString(), BranchEnd.Close, tagEnd + 2);
                    }
                    else
                    {
                        sb.Append(template, i, tagEnd + 2 - i);
                        i = tagEnd + 2;
                    }
                }
                else
                {
                    sb.Append(template[i]);
                    i++;
                }
            }

            return (sb.ToString(), BranchEnd.Close, template.Length);
        }

        private static string ExtractCondition(string tagContent)
        {
            var start = tagContent.IndexOf("if(") + 3;
            var end = tagContent.LastIndexOf("){");
            if (end == -1) end = tagContent.LastIndexOf(')');
            return tagContent.Substring(start, end - start);
        }

        private static string ExtractElseIfCondition(string tag)
        {
            var start = tag.IndexOf("else if(");
            if (start == -1) start = tag.IndexOf("elseif(");
            start = tag.IndexOf('(', start) + 1;
            var end = tag.IndexOf("){", start);
            if (end == -1) end = tag.IndexOf(')', start);
            return tag.Substring(start, end - start);
        }
    }
}
