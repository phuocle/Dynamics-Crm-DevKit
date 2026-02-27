using DynamicsCrm.DevKit.Cli.Mcp.Services;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    //[McpServerToolType] // Temporarily disabled - not exposed as MCP tool
    public static class CreatePluginTool
    {
        [McpServerTool(Name = "create_plugin", Idempotent = false, Destructive = false, ReadOnly = false),
        Description(
            "Creates a Dynamics 365 plugin C# file from a T4 template. " +
            "IMPORTANT: Do NOT call this tool until you have ALL required parameters confirmed by the user. " +
            "REQUIRED workflow before calling this tool: " +
            "Step 1: ASK the user which entity they want. Then call get_entity_metadata to validate and get the schema name. " +
            "Step 2: Call get_entity_messages to get available SDK messages for that entity. ASK the user which message they want. " +
            "Step 3: ASK the user which stage (PreValidation, PreOperation, PostOperation). " +
            "Step 4: ASK the user which execution mode (Synchronous or Asynchronous). Rule: PreValidation and PreOperation ONLY support Synchronous. " +
            "Step 5: Determine plugin_namespace from the current project's namespace. Determine output_path from the project structure. " +
            "Step 6: Only after ALL parameters are confirmed by the user, call this tool. " +
            "NEVER guess or assume entity, message, stage, or execution mode - always ask the user.")]
        public static async Task<string> create_plugin(
            MetadataService metadataService,
            T4TemplateProcessor templateProcessor,
            [Description("The logical name of the entity (e.g. 'account'). MUST be validated via get_entity_metadata first.")] string entity_logical_name,
            [Description("The schema name of the entity (e.g. 'Account'). Get this from get_entity_metadata result.")] string entity_schema_name,
            [Description("The SDK message name (e.g. 'Create', 'Update', 'Delete'). MUST be from get_entity_messages result.")] string message,
            [Description("The pipeline stage: 'PreValidation', 'PreOperation', or 'PostOperation'. MUST be explicitly chosen by the user.")] string stage,
            [Description("The execution mode: 'Synchronous' or 'Asynchronous'. MUST be explicitly chosen by the user.")] string execution,
            [Description("The C# namespace for the plugin class (e.g. 'MyProject.Plugins').")] string plugin_namespace,
            [Description("The shared project namespace (e.g. 'MyProject.Shared').")] string shared_namespace,
            [Description("The full output file path where the .cs file will be written.")] string output_path,
            [Description("Optional: path to a custom T4 template file. If null, uses the default Plugin.tt template.")] string t4_template_path = null,
            [Description("Optional: the plugin execution order (default: 1).")] int plugin_order = 1)
        {
            try
            {
                var missing = ValidateAndReportMissing(entity_logical_name, entity_schema_name, message, stage, execution, plugin_namespace, output_path);
                if (missing != null) return missing;

                var normalizedStage = NormalizeStage(stage);
                var normalizedExecution = NormalizeExecution(execution);

                if (normalizedStage == null)
                    return NeedsInput("stage", $"Invalid stage '{stage}'.", "Ask the user: PreValidation, PreOperation, or PostOperation?", new[] { "PreValidation", "PreOperation", "PostOperation" });
                if (normalizedExecution == null)
                    return NeedsInput("execution", $"Invalid execution '{execution}'.", "Ask the user: Synchronous or Asynchronous?", new[] { "Synchronous", "Asynchronous" });

                if ((normalizedStage == "PreValidation" || normalizedStage == "PreOperation") && normalizedExecution == "Asynchronous")
                    return NeedsInput("execution", $"{normalizedStage} only supports Synchronous execution.", "Inform the user and set execution to Synchronous.", new[] { "Synchronous" });

                var stagePrefix = normalizedStage switch
                {
                    "PreValidation" => "PreValidation",
                    "PreOperation" => "Pre",
                    "PostOperation" => "Post",
                    _ => normalizedStage
                };

                var className = $"{stagePrefix}{entity_schema_name}{message}{normalizedExecution}";

                var comment = string.Empty;
                try
                {
                    comment = await metadataService.GetPluginCommentAsync(entity_logical_name, message);
                }
                catch
                {
                    comment = $"        Entity: {entity_logical_name}\r\n        Message: {message}\r\n        Stage: {normalizedStage}\r\n        Execution: {normalizedExecution}";
                }

                var context = new T4Context
                {
                    PluginNameSpace = plugin_namespace,
                    PluginSharedNameSpace = shared_namespace ?? plugin_namespace,
                    PluginMessage = message,
                    PluginLogicalName = entity_logical_name,
                    PluginSchemaName = entity_schema_name,
                    PluginStage = normalizedStage,
                    PluginExecution = normalizedExecution,
                    PluginOrder = plugin_order,
                    PluginComment = comment,
                    Class = className
                };

                var generatedCode = await templateProcessor.ProcessPluginTemplateAsync(context, t4_template_path);

                if (string.IsNullOrWhiteSpace(generatedCode))
                {
                    return JsonSerializer.Serialize(new
                    {
                        success = false,
                        error = "Template processing produced empty output."
                    });
                }

                var directory = Path.GetDirectoryName(output_path);
                if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }

                await File.WriteAllTextAsync(output_path, generatedCode);

                return JsonSerializer.Serialize(new
                {
                    success = true,
                    file_path = output_path,
                    class_name = className + (plugin_order != 1 ? plugin_order.ToString() : ""),
                    entity = entity_logical_name,
                    message,
                    stage = normalizedStage,
                    execution = normalizedExecution,
                    plugin_namespace,
                    supports_pre_image = context.IsPluginSupportedPreImage,
                    supports_post_image = context.IsPluginSupportedPostImage
                });
            }
            catch (Exception ex)
            {
                return JsonSerializer.Serialize(new
                {
                    success = false,
                    error = $"Failed to create plugin: {ex.Message}"
                });
            }
        }

        private static string ValidateAndReportMissing(string entityLogicalName, string entitySchemaName, string message, string stage, string execution, string pluginNamespace, string outputPath)
        {
            if (string.IsNullOrWhiteSpace(entityLogicalName))
                return NeedsInput("entity_logical_name", "Entity is required.", "Ask the user which entity (table) they want to create a plugin for. Then call get_entity_metadata to validate it exists and get the schema name.", null);

            if (string.IsNullOrWhiteSpace(entitySchemaName))
                return NeedsInput("entity_schema_name", "Entity schema name is required.", "Call get_entity_metadata with the entity logical name to get the schema name.", null);

            if (string.IsNullOrWhiteSpace(message))
                return NeedsInput("message", "SDK message is required.", "Call get_entity_messages to get available messages for this entity. Then ask the user which message they want (e.g. Create, Update, Delete).", null);

            if (string.IsNullOrWhiteSpace(stage))
                return NeedsInput("stage", "Pipeline stage is required.", "Ask the user which stage: PreValidation, PreOperation, or PostOperation?", new[] { "PreValidation", "PreOperation", "PostOperation" });

            if (string.IsNullOrWhiteSpace(execution))
                return NeedsInput("execution", "Execution mode is required.", "Ask the user: Synchronous or Asynchronous? Note: PreValidation and PreOperation only support Synchronous.", new[] { "Synchronous", "Asynchronous" });

            if (string.IsNullOrWhiteSpace(pluginNamespace))
                return NeedsInput("plugin_namespace", "Plugin namespace is required.", "Determine from the current project's root namespace, or ask the user.", null);

            if (string.IsNullOrWhiteSpace(outputPath))
                return NeedsInput("output_path", "Output file path is required.", "Determine from the project structure where plugin files are stored, or ask the user.", null);

            return null;
        }

        private static string NeedsInput(string field, string reason, string instruction, string[] options)
        {
            return JsonSerializer.Serialize(new
            {
                success = false,
                needs_input = true,
                field,
                reason,
                instruction,
                options
            });
        }

        private static string NormalizeStage(string stage)
        {
            if (string.IsNullOrWhiteSpace(stage)) return null;
            var s = stage.Trim();
            if (s.Equals("PreValidation", StringComparison.OrdinalIgnoreCase)) return "PreValidation";
            if (s.Equals("PreOperation", StringComparison.OrdinalIgnoreCase) || s.Equals("Pre", StringComparison.OrdinalIgnoreCase)) return "PreOperation";
            if (s.Equals("PostOperation", StringComparison.OrdinalIgnoreCase) || s.Equals("Post", StringComparison.OrdinalIgnoreCase)) return "PostOperation";
            return null;
        }

        private static string NormalizeExecution(string execution)
        {
            if (string.IsNullOrWhiteSpace(execution)) return null;
            var e = execution.Trim();
            if (e.Equals("Synchronous", StringComparison.OrdinalIgnoreCase) || e.Equals("Sync", StringComparison.OrdinalIgnoreCase)) return "Synchronous";
            if (e.Equals("Asynchronous", StringComparison.OrdinalIgnoreCase) || e.Equals("Async", StringComparison.OrdinalIgnoreCase)) return "Asynchronous";
            return null;
        }
    }
}
