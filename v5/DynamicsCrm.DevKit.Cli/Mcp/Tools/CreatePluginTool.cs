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
    [McpServerToolType]
    public static class CreatePluginTool
    {
        [McpServerTool, Description(
            "Creates a Dynamics 365 plugin C# file from a T4 template. " +
            "Requires all 4 parameters: entity, message, stage, and execution mode. " +
            "Use validate_entity, get_entity_messages, and validate_plugin_config tools first to gather and validate inputs. " +
            "The generated file follows the DynamicsCrm.DevKit plugin pattern with CrmPluginRegistration attribute.")]
        public static async Task<string> create_plugin(
            MetadataService metadataService,
            T4TemplateProcessor templateProcessor,
            [Description("The logical name of the entity (e.g. 'account')")] string entity_logical_name,
            [Description("The schema name of the entity (e.g. 'Account')")] string entity_schema_name,
            [Description("The SDK message name (e.g. 'Create', 'Update', 'Delete')")] string message,
            [Description("The pipeline stage: 'PreValidation', 'PreOperation', or 'PostOperation'")] string stage,
            [Description("The execution mode: 'Synchronous' or 'Asynchronous'")] string execution,
            [Description("The C# namespace for the plugin class (e.g. 'MyProject.Plugins')")] string plugin_namespace,
            [Description("The shared project namespace (e.g. 'MyProject.Shared')")] string shared_namespace,
            [Description("The full output file path where the .cs file will be written")] string output_path,
            [Description("Optional: path to a custom T4 template file. If null, uses the default Plugin.tt template.")] string t4_template_path = null,
            [Description("Optional: the plugin execution order (default: 1)")] int plugin_order = 1)
        {
            try
            {
                var validation = ValidateInputs(entity_logical_name, entity_schema_name, message, stage, execution, plugin_namespace, output_path);
                if (validation != null) return validation;

                var normalizedStage = NormalizeStage(stage);
                var normalizedExecution = NormalizeExecution(execution);

                var stagePrefix = normalizedStage switch
                {
                    "PreValidation" => "PreValidation",
                    "PreOperation" => "Pre",
                    "PostOperation" => "Post",
                    _ => normalizedStage
                };

                var className = $"{stagePrefix}{entity_schema_name}{message}{normalizedExecution}";

                var pluginStageEnum = normalizedStage switch
                {
                    "PreValidation" => "PreValidation",
                    "PreOperation" => "Pre",
                    "PostOperation" => "Post",
                    _ => normalizedStage
                };

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
                    PluginStage = pluginStageEnum,
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

        private static string ValidateInputs(string entityLogicalName, string entitySchemaName, string message, string stage, string execution, string pluginNamespace, string outputPath)
        {
            if (string.IsNullOrWhiteSpace(entityLogicalName))
                return Error("entity_logical_name is required.");
            if (string.IsNullOrWhiteSpace(entitySchemaName))
                return Error("entity_schema_name is required.");
            if (string.IsNullOrWhiteSpace(message))
                return Error("message is required.");
            if (string.IsNullOrWhiteSpace(stage))
                return Error("stage is required.");
            if (string.IsNullOrWhiteSpace(execution))
                return Error("execution is required.");
            if (string.IsNullOrWhiteSpace(pluginNamespace))
                return Error("plugin_namespace is required.");
            if (string.IsNullOrWhiteSpace(outputPath))
                return Error("output_path is required.");

            var normalizedStage = NormalizeStage(stage);
            var normalizedExecution = NormalizeExecution(execution);

            if (normalizedStage == null)
                return Error($"Invalid stage '{stage}'. Use: PreValidation, PreOperation, PostOperation.");
            if (normalizedExecution == null)
                return Error($"Invalid execution '{execution}'. Use: Synchronous, Asynchronous.");

            if ((normalizedStage == "PreValidation" || normalizedStage == "PreOperation") && normalizedExecution == "Asynchronous")
                return Error($"{normalizedStage} stage only supports Synchronous execution mode.");

            return null;
        }

        private static string Error(string message)
        {
            return JsonSerializer.Serialize(new { success = false, error = message });
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
