using System;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal static class ToolResponseFormatter
    {
        private static readonly JsonSerializerOptions JsonOptions = new JsonSerializerOptions
        {
            WriteIndented = true
        };

        public static string Success(object data)
        {
            return JsonSerializer.Serialize(new
            {
                success = true,
                data
            }, JsonOptions);
        }

        public static string Error(string message, Exception ex = null)
        {
            return JsonSerializer.Serialize(new
            {
                success = false,
                error = ex == null ? message : $"{message}: {ex.Message}"
            }, JsonOptions);
        }
    }
}
