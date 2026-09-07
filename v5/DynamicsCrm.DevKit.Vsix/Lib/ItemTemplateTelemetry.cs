using System;
using System.Diagnostics;

namespace DynamicsCrm.DevKit.Lib
{
    internal static class ItemTemplateTelemetry
    {
        private const string Prefix = "[DynamicsCrm.DevKit][ItemTemplate]";

        internal static string NewCorrelationId()
        {
            return Guid.NewGuid().ToString("N").Substring(0, 8);
        }

        internal static IDisposable Start(string templateName, string correlationId, string operation, string details = null)
        {
            return new Scope(templateName, correlationId, operation, details);
        }

        internal static void Log(string templateName, string correlationId, string operation, string message)
        {
            Debug.WriteLine($"{Prefix} [{templateName}] [{correlationId}] {operation}: {message}");
        }

        private sealed class Scope : IDisposable
        {
            private readonly string _templateName;
            private readonly string _correlationId;
            private readonly string _operation;
            private readonly Stopwatch _stopwatch;

            internal Scope(string templateName, string correlationId, string operation, string details)
            {
                _templateName = string.IsNullOrWhiteSpace(templateName) ? "Unknown" : templateName;
                _correlationId = string.IsNullOrWhiteSpace(correlationId) ? "no-cid" : correlationId;
                _operation = string.IsNullOrWhiteSpace(operation) ? "Unknown" : operation;
                _stopwatch = Stopwatch.StartNew();
                Debug.WriteLine($"{Prefix} [{_templateName}] [{_correlationId}] START {_operation}{FormatDetails(details)}");
            }

            public void Dispose()
            {
                _stopwatch.Stop();
                Debug.WriteLine($"{Prefix} [{_templateName}] [{_correlationId}] END {_operation} elapsedMs={_stopwatch.ElapsedMilliseconds}");
            }

            private static string FormatDetails(string details)
            {
                return string.IsNullOrWhiteSpace(details) ? string.Empty : $" {details}";
            }
        }
    }
}
