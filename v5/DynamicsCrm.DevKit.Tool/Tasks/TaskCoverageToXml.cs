using System;
using System.Diagnostics;
using System.IO;
using Spectre.Console;

namespace DynamicsCrm.DevKit.Tool.Tasks
{
    internal class TaskCoverageToXml
    {
        internal static void Run(string coverage, string xml, string dlls)
        {
            if (!File.Exists(coverage))
                throw new FileNotFoundException($"Coverage file not found: {coverage}");

            AnsiConsole.MarkupLine($"[cyan]Coverage:[/] {Markup.Escape(coverage)}");
            AnsiConsole.MarkupLine($"[cyan]Output:[/] {Markup.Escape(xml)}");

            var xmlDir = Path.GetDirectoryName(xml);
            if (!string.IsNullOrEmpty(xmlDir) && !Directory.Exists(xmlDir))
                Directory.CreateDirectory(xmlDir);

            var psi = new ProcessStartInfo
            {
                FileName = "dotnet-coverage",
                Arguments = $"merge \"{coverage}\" --output \"{xml}\" --output-format xml",
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            };

            using var process = Process.Start(psi);
            if (process == null)
                throw new InvalidOperationException(
                    "Failed to start dotnet-coverage. Install it with: dotnet tool install -g dotnet-coverage");

            var output = process.StandardOutput.ReadToEnd();
            var error = process.StandardError.ReadToEnd();
            process.WaitForExit();

            if (process.ExitCode != 0)
            {
                var msg = !string.IsNullOrWhiteSpace(error) ? error : output;
                throw new InvalidOperationException(
                    $"dotnet-coverage failed (exit code {process.ExitCode}): {msg.Trim()}");
            }

            AnsiConsole.MarkupLine($"[green]Done![/] Output: {Markup.Escape(xml)}");
        }
    }
}
