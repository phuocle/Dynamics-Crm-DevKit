using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
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
            var sb = new StringBuilder(template);

            sb.Replace("<#=Context.PluginSharedNameSpace#>", context.PluginSharedNameSpace ?? string.Empty);
            sb.Replace("<#=Context.PluginNameSpace#>", context.PluginNameSpace ?? string.Empty);
            sb.Replace("<#=Context.PluginMessage#>", context.PluginMessage ?? string.Empty);
            sb.Replace("<#=Context.PluginLogicalName#>", context.PluginLogicalName ?? string.Empty);
            sb.Replace("<#=Context.PluginStage#>", context.PluginStage ?? string.Empty);
            sb.Replace("<#=Context.PluginExecution#>", context.PluginExecution ?? string.Empty);
            sb.Replace("<#=Context.Class#>", context.Class ?? string.Empty);
            sb.Replace("<#=Context.PluginComment#>", context.PluginComment ?? string.Empty);
            sb.Replace("<#=Context.PluginOrder#>", context.PluginOrder.ToString());

            var result = sb.ToString();

            result = ProcessConditionalBlocks(result, context);

            return result;
        }

        private string ProcessConditionalBlocks(string template, T4Context context)
        {
            var result = template;

            result = ProcessPluginOrderConditionals(result, context);
            result = ProcessExecutionConditionals(result, context);
            result = ProcessImageConditionals(result, context);
            result = ProcessMessageConditionals(result, context);

            return result;
        }

        private string ProcessPluginOrderConditionals(string template, T4Context context)
        {
            return Regex.Replace(template,
                @"<#if\(Context\.PluginOrder!=1\)\{#>(.*?)<#\}#>",
                m => context.PluginOrder != 1 ? m.Groups[1].Value : string.Empty);
        }

        private string ProcessExecutionConditionals(string template, T4Context context)
        {
            return Regex.Replace(template,
                @"<#if\(Context\.PluginExecution==""Asynchronous""\)\{#>(.*?)<#\}#>",
                m => context.PluginExecution == "Asynchronous" ? m.Groups[1].Value : string.Empty);
        }

        private string ProcessImageConditionals(string template, T4Context context)
        {
            var result = template;

            result = Regex.Replace(result,
                @"<#if\(Context\.IsPluginSupportedPreImage\)\{#>(.*?)<#\}#>",
                m => context.IsPluginSupportedPreImage ? m.Groups[1].Value : string.Empty);

            result = Regex.Replace(result,
                @"<#if\(Context\.IsPluginSupportedPostImage\)\{#><#if\(Context\.IsPluginSupportedPreImage\)\{#>(.*?)<#\} else \{#>(.*?)<#\}#><#\}#>",
                m =>
                {
                    if (!context.IsPluginSupportedPostImage) return string.Empty;
                    return context.IsPluginSupportedPreImage ? m.Groups[1].Value : m.Groups[2].Value;
                });

            return result;
        }

        private string ProcessMessageConditionals(string template, T4Context context)
        {
            var result = template;

            var messageBlockPattern = @"<#if\(Context\.PluginMessage==""Create"" \|\| Context\.PluginMessage==""Update""\)\{#>(.*?)<#\}else if\(Context\.PluginMessage==""CreateMultiple"" \|\| Context\.PluginMessage==""UpdateMultiple""\)\{#>(.*?)<#\}else if\(Context\.PluginMessage==""Delete""\)\{#>(.*?)<#\}else\{#>(.*?)<#\}#>";

            result = Regex.Replace(result, messageBlockPattern, m =>
            {
                if (context.PluginMessage == "Create" || context.PluginMessage == "Update")
                    return m.Groups[1].Value;
                if (context.PluginMessage == "CreateMultiple" || context.PluginMessage == "UpdateMultiple")
                    return m.Groups[2].Value;
                if (context.PluginMessage == "Delete")
                    return m.Groups[3].Value;
                return m.Groups[4].Value;
            }, RegexOptions.Singleline);

            return result;
        }
    }
}
