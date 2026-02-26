using ModelContextProtocol.Server;
using System;
using System.ComponentModel;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public static class ValidatePluginConfigTool
    {
        private static readonly string[] ValidStages = ["PreValidation", "PreOperation", "PostOperation"];
        private static readonly string[] ValidExecutions = ["Synchronous", "Asynchronous"];

        [McpServerTool, Description(
            "Validates a plugin configuration (message, stage, execution mode) for correctness. " +
            "Business rules: PreValidation and PreOperation stages ONLY support Synchronous execution. " +
            "Only PostOperation supports both Synchronous and Asynchronous execution. " +
            "Use this tool to validate before creating a plugin.")]
        public static string validate_plugin_config(
            [Description("The SDK message name (e.g. 'Create', 'Update', 'Delete')")] string message,
            [Description("The pipeline stage: 'PreValidation', 'PreOperation', or 'PostOperation'. Can be null if not yet chosen.")] string stage,
            [Description("The execution mode: 'Synchronous' or 'Asynchronous'. Can be null if not yet chosen.")] string execution)
        {
            if (string.IsNullOrWhiteSpace(message))
            {
                return JsonSerializer.Serialize(new
                {
                    valid = false,
                    error = "Message is required. Ask the user which message they want."
                });
            }

            if (string.IsNullOrWhiteSpace(stage))
            {
                return JsonSerializer.Serialize(new
                {
                    valid = true,
                    needs_input = true,
                    field = "stage",
                    available_stages = ValidStages,
                    hint = "Ask the user which stage they want: PreValidation, PreOperation, or PostOperation."
                });
            }

            var normalizedStage = NormalizeStage(stage);
            if (normalizedStage == null)
            {
                return JsonSerializer.Serialize(new
                {
                    valid = false,
                    error = $"Invalid stage '{stage}'. Valid stages are: PreValidation, PreOperation, PostOperation.",
                    available_stages = ValidStages
                });
            }

            var allowedExecutions = GetAllowedExecutions(normalizedStage);

            if (string.IsNullOrWhiteSpace(execution))
            {
                if (allowedExecutions.Length == 1)
                {
                    return JsonSerializer.Serialize(new
                    {
                        valid = true,
                        needs_input = false,
                        message,
                        stage = normalizedStage,
                        execution = allowedExecutions[0],
                        auto_resolved = true,
                        hint = $"{normalizedStage} only supports {allowedExecutions[0]} execution. Automatically selected."
                    });
                }

                return JsonSerializer.Serialize(new
                {
                    valid = true,
                    needs_input = true,
                    field = "execution",
                    message,
                    stage = normalizedStage,
                    available_executions = allowedExecutions,
                    hint = "Ask the user which execution mode they want: Synchronous or Asynchronous."
                });
            }

            var normalizedExecution = NormalizeExecution(execution);
            if (normalizedExecution == null)
            {
                return JsonSerializer.Serialize(new
                {
                    valid = false,
                    error = $"Invalid execution mode '{execution}'. Valid modes are: Synchronous, Asynchronous.",
                    available_executions = ValidExecutions
                });
            }

            if (!Array.Exists(allowedExecutions, e => e == normalizedExecution))
            {
                return JsonSerializer.Serialize(new
                {
                    valid = false,
                    error = $"{normalizedStage} stage only supports {string.Join(" or ", allowedExecutions)} execution mode. " +
                            $"'{normalizedExecution}' is not allowed for {normalizedStage}.",
                    stage = normalizedStage,
                    requested_execution = normalizedExecution,
                    allowed_executions = allowedExecutions,
                    suggestion = allowedExecutions[0]
                });
            }

            var pluginStageEnum = normalizedStage switch
            {
                "PreValidation" => "PreValidation",
                "PreOperation" => "Pre",
                "PostOperation" => "Post",
                _ => normalizedStage
            };

            return JsonSerializer.Serialize(new
            {
                valid = true,
                needs_input = false,
                message,
                stage = normalizedStage,
                stage_enum = pluginStageEnum,
                execution = normalizedExecution
            });
        }

        private static string NormalizeStage(string stage)
        {
            if (string.IsNullOrWhiteSpace(stage)) return null;
            var s = stage.Trim();
            if (s.Equals("PreValidation", StringComparison.OrdinalIgnoreCase) || s == "10") return "PreValidation";
            if (s.Equals("PreOperation", StringComparison.OrdinalIgnoreCase) || s.Equals("Pre", StringComparison.OrdinalIgnoreCase) || s == "20") return "PreOperation";
            if (s.Equals("PostOperation", StringComparison.OrdinalIgnoreCase) || s.Equals("Post", StringComparison.OrdinalIgnoreCase) || s == "40") return "PostOperation";
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

        private static string[] GetAllowedExecutions(string stage)
        {
            return stage switch
            {
                "PreValidation" => ["Synchronous"],
                "PreOperation" => ["Synchronous"],
                "PostOperation" => ["Synchronous", "Asynchronous"],
                _ => ["Synchronous"]
            };
        }
    }
}
