using System;
using Spectre.Console;

namespace DynamicsCrm.DevKit.Tool
{
    internal static class ToolConsole
    {
        internal static void MarkupLine(string markup)
        {
            AnsiConsole.MarkupLine($"[white]║[/] {markup}");
        }

        internal static void WriteLine(string text)
        {
            foreach (var line in (text ?? string.Empty).Split(new[] { "\r\n", "\n" }, StringSplitOptions.None))
                AnsiConsole.MarkupLine($"[white]║[/] {Markup.Escape(line)}");
        }
    }
}
