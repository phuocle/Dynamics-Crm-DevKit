using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    /// <summary>
    /// Enhanced CLI logging using Spectre.Console.
    /// Provides table-based output, async progress, spinners, and rich formatting.
    /// </summary>
    public static class SpectreLog
    {
        private const string PREFIX = "║";

        #region Banner & Header

        /// <summary>
        /// Displays the CLI banner with version info - sexy gradient design.
        /// </summary>
        public static void WriteHeader()
        {
            var width = 112;
            var colorBox = "green";
            var colorText = "white";
            AnsiConsole.MarkupLine($"[{colorBox}]╔{new string('═', width)}╗[/]");
            AnsiConsole.MarkupLine($"[{colorBox}]║ [/][{colorText}]  ____                              _           ____                  ____             _  ___ _     ____ _ _ [/][{colorBox}]  ║[/]");
            AnsiConsole.MarkupLine($"[{colorBox}]║ [/][{colorText}] |  _ \\ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \\  _____   _| |/ (_) |_  / ___| (_)[/][{colorBox}]  ║[/]");
            AnsiConsole.MarkupLine($"[{colorBox}]║ [/][{colorText}] | | | | | | | '_ \\ / _` | '_ ` _ \\| |/ __/ __| |   | '__| '_ ` _ \\  | | | |/ _ \\ \\ / / ' /| | __|| |   | | |[/][{colorBox}]  ║[/]");
            AnsiConsole.MarkupLine($"[{colorBox}]║ [/][{colorText}] | |_| | |_| | | | | (_| | | | | | | | (__\\__ \\ |___| |  | | | | | |_| |_| |  __/\\ V /| . \\| | |_ | |___| | |[/][{colorBox}]  ║[/]");
            AnsiConsole.MarkupLine($"[{colorBox}]║ [/][{colorText}] |____/ \\__, |_| |_|\\__,_|_| |_| |_|_|\\___|___/\\____|_|  |_| |_| |_(_)____/ \\___| \\_/ |_|\\_\\_|\\__(_)____|_|_|[/][{colorBox}]  ║[/]");
            var part1 = "        |___/            ";
            var part2 = "https://github.com/phuocle/Dynamics-Crm-DevKit ";
            var part3 = $"{Const.Version} [green]Build:[/] {Const.Build}";
            var part3Len = $"{Const.Version} Build: {Const.Build}".Length;
            var currentLen = part1.Length + part2.Length + part3Len;
            var padding = new string(' ', 109 - currentLen);
            AnsiConsole.MarkupLine($"[{colorBox}]║ [/][{colorText}]{part1}[/][green]{part2}[/][{colorText}]{part3}{padding}[/][{colorBox}]  ║[/]");
            AnsiConsole.MarkupLine($"[{colorBox}]╚{new string('═', width)}╝[/]");
        }

        /// <summary>
        /// Displays the help panel.
        /// </summary>
        public static void WriteHelp()
        {
            var panel = new Panel(
                new Markup(
                    "[green]Usage:[/]\n" +
                    "  devkit [cyan]generator[/] --profile [yellow]NAME[/] --json [yellow]FILE[/] [dim][[options]][/]\n" +
                    "  devkit [cyan]server[/] --profile [yellow]NAME[/] --json [yellow]FILE[/] [dim][[options]][/]\n\n" +
                    "[green]Commands:[/]\n" +
                    "  [cyan]generator[/]              Generate form/webapi js/ts code, late-bound C# code\n" +
                    "  [cyan]server[/]                 Deploy server objects (plugins, workflows...)\n" +
                    "  [cyan]plugin[/]                 Deploy plugins\n" +
                    "  [cyan]workflow[/]               Deploy workflows\n" +
                    "  [cyan]dataprovider[/]           Deploy data providers\n" +
                    "  [cyan]proxytype[/]              Generate early-bound proxy classes\n" +
                    "  [cyan]webresource[/]            Deploy web resources\n" +
                    "  [cyan]solution[/]               Pack/unpack solutions\n" +
                    "  [cyan]downloadreport[/]         Download reports from a solution\n" +
                    "  [cyan]uploadreport[/]           Upload reports to a solution\n" +
                    "  [cyan]downloadwebresource[/]    Download web resources from a solution\n" +
                    "  [cyan]datasource[/]             Create data source entities\n\n" +
                    "[green]Options:[/]\n" +
                    "  --conn [yellow]STRING[/]          Dynamics 365 connection string\n" +
                    "  --json [yellow]FILE[/]            Path to DynamicsCrm.DevKit.Cli.json\n" +
                    "  --profile [yellow]NAME[/]         Profile name from json file\n" +
                    "  --url [yellow]URL[/]              Dynamics 365 URL (for SDK login)\n" +
                    "  --sdk-login            Use SDK OOB login dialog\n" +
                    "  --onlyupdateassembly   Fast deploy, only update the assembly\n\n" +
                    "[green]Legacy Syntax (backward compatible):[/]\n" +
                    "  devkit [blue]/type:generators /conn:\"...\" /json:\"...\" /profile:\"...\"[/]\n"
                ))
            {
                Border = BoxBorder.Double,
                BorderStyle = new Style(Color.Green),
                Header = new PanelHeader(" [bold] DynamicsCrm.DevKit.Cli Help[/] ", Justify.Left),
                Padding = new Padding(2, 1),
                Width = 114
            };

            AnsiConsole.Write(panel);
        }

        /// <summary>
        /// Writes an exception to the console.
        /// </summary>
        public static void WriteException(Exception ex)
        {
            AnsiConsole.WriteException(ex, ExceptionFormats.ShortenEverything);
        }

        /// <summary>
        /// Waits for a key press.
        /// </summary>
        public static void WaitForKeyPress()
        {
            if (System.Diagnostics.Debugger.IsAttached)
            {
                WriteLine();
                AnsiConsole.MarkupLine("[dim]Press any key to exit...[/]");
                Console.ReadKey();
                return;
            }
        }

        #endregion

        #region Async Progress & Status

        /// <summary>
        /// Executes an async action with a status spinner.
        /// </summary>
        public static async Task<T> WithStatusAsync<T>(string status, Func<StatusContext, Task<T>> action)
        {
            return await AnsiConsole.Status()
                .Spinner(Spinner.Known.Dots)
                .SpinnerStyle(Style.Parse("green"))
                .StartAsync(status, action);
        }

        /// <summary>
        /// Executes an async action with a status spinner (no return value).
        /// </summary>
        public static async Task WithStatusAsync(string status, Func<StatusContext, Task> action)
        {
            await AnsiConsole.Status()
                .Spinner(Spinner.Known.Dots)
                .SpinnerStyle(Style.Parse("green"))
                .StartAsync(status, action);
        }

        /// <summary>
        /// Shows animated waiting dots with cancellation support.
        /// </summary>
        public static void WaitingWithCancellation(string message = "", CancellationToken cancellationToken = default)
        {
            AnsiConsole.Markup($"[white]{PREFIX}[/]{message}");
            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    AnsiConsole.Markup("[grey].[/]");
                    cancellationToken.WaitHandle.WaitOne(1000);
                }
            }
            catch (OperationCanceledException)
            {
            }
            // Clear the line after completion
            AnsiConsole.Markup($"\r{new string(' ', 60)}\r");
        }

        #endregion

        #region WriteLine Methods

        public static void WriteLine()
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/]");
        }

        public static void WriteLine(string text)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(text)}[/]");
        }

        public static void WriteLine(string v1, string v2, string v3)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(v1)}[/][white]{Escape(v2)}[/][green]{Escape(v3)}[/]");
        }

        public static void WriteLine(string v1, string v2, string v3, string v4)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(v1)}[/][white]{Escape(v2)}[/][green]{Escape(v3)}[/][white]{Escape(v4)}[/]");
        }

        public static void WriteProgress(int current, int total)
        {
            AnsiConsole.Markup($"\r[white]{PREFIX}[/][green] {Escape(CliAction.PROCESSING)}[/][cyan on grey23]{current}[/][green]/[/][cyan on grey23]{total}[/]");
        }

        public static void ClearProgress()
        {
            AnsiConsole.Markup($"\r{new string(' ', 43)}\r");
        }

        /// <summary>
        /// Writes process output directly without the PREFIX (║).
        /// Use this for external process stdout/stderr output.
        /// </summary>
        public static void WriteProcessOutput(string line)
        {
            if (!string.IsNullOrWhiteSpace(line))
            {
                AnsiConsole.MarkupLine($"[grey]{Escape(line)}[/]");
            }
        }

        #endregion

        #region Action Methods

        public static void ActionDoNothing(string message)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(CliAction.DO_NOTHING)}[/][white]{Escape(message)}[/]");
        }

        public static void ActionDoNothing(string message, string details)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(CliAction.DO_NOTHING)}[/][white]{Escape(message)}[/] [grey]{Escape(details)}[/]");
        }

        public static void ActionDoNothing(string v1, string v2, string v3, string v4, string v5)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(CliAction.DO_NOTHING)}[/][white]{Escape(v1)}[/][cyan]{Escape(v2)}[/][green]{Escape(v3)}[/][white]{Escape(v4)}[/][green]{Escape(v5)}[/]");
        }

        public static void ActionCreated(string message)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.CREATED)}[/][white on grey23]{Escape(message)}[/]");
        }

        public static void ActionCreated(string message, string highlight)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.CREATED)}[/][white on grey23]{Escape(message)} [/][yellow on grey23]{Escape(highlight)}[/]");
        }

        public static void ActionCreated(string v1, string v2, string v3)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.CREATED)}[/][white on grey23]{Escape(v1)}[/][green on grey23]{Escape(v2)}[/][white on grey23]{Escape(v3)}[/]");
        }

        public static void ActionUpdated(string message)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.UPDATED)}[/][white on grey23]{Escape(message)}[/]");
        }

        public static void ActionUpdated(string message, string highlight)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.UPDATED)}[/][white on grey23]{Escape(message)} [/][yellow on grey23]{Escape(highlight)}[/]");
        }

        public static void ActionError(string message)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.ERROR)}[/][red on grey23]{Escape(message)}[/]");
        }

        public static void ActionError(string message, string details)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.ERROR)}[/][red on grey23]{Escape(message)}[/] [white on grey23]{Escape(details)}[/]");
        }

        #endregion

        #region Server Actions (Level-based indentation)

        private static string GetIndent(LogLevel level)
        {
            // Actions already have trailing space, so Level1 needs no extra indent
            return level switch
            {
                LogLevel.Level0 => string.Empty,
                LogLevel.Level1 => string.Empty,     // 0 spaces (action trailing space is enough)
                LogLevel.Level2 => "  ",             // 2 spaces
                LogLevel.Level3 => "    ",           // 4 spaces
                LogLevel.Level4 => "      ",         // 6 spaces
                _ => new string(' ', ((int)level - 1) * 2)
            };
        }

        /// <summary>
        /// Writes a file header (Level 0) - for .dll or .nupkg files
        /// </summary>
        public static void ActionFile(string fileName)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.FILE)}[/][yellow on grey23]{Escape(fileName)}[/]");
        }

        /// <summary>
        /// Level-based action with just action + text
        /// </summary>
        public static void ActionWithLevel(LogLevel level, string action, string text)
        {
            var indent = GetIndent(level);
            if (action == CliAction.DO_NOTHING)
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text)}[/]");
            }
            else
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(action)}[/][on grey23]{indent}[/][white on grey23]{Escape(text)}[/]");
            }
        }

        /// <summary>
        /// Level-based action with text + details
        /// </summary>
        public static void ActionWithLevel(LogLevel level, string action, string text, string details)
        {
            var indent = GetIndent(level);
            if (action == CliAction.DO_NOTHING)
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text)} [/][cyan]{Escape(details)}[/]");
            }
            else
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(action)}[/][on grey23]{indent}[/][white on grey23]{Escape(text)} [/][cyan on grey23]{Escape(details)}[/]");
            }
        }

        /// <summary>
        /// Level-based action with text + details + details2
        /// </summary>
        public static void ActionWithLevel(LogLevel level, string action, string text, string details, string details2)
        {
            var indent = GetIndent(level);
            if (action == CliAction.DO_NOTHING)
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text)} [/][cyan]{Escape(details)}[/][white]{Escape(details2)}[/]");
            }
            else
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(action)}[/][on grey23]{indent}[/][white on grey23]{Escape(text)} [/][cyan on grey23]{Escape(details)}[/][white on grey23]{Escape(details2)}[/]");
            }
        }

        /// <summary>
        /// Level-based action with text + multiple highlights
        /// </summary>
        public static void ActionWithLevel(LogLevel level, string action, string text, List<string> metadata)
        {
            var indent = GetIndent(level);
            var metaText = metadata?.Count > 0 ? $" [{string.Join(", ", metadata)}]" : string.Empty;
            if (action == CliAction.DO_NOTHING)
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text)}[/][cyan]{Escape(metaText)}[/]");
            }
            else
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(action)}[/][on grey23]{indent}[/][white on grey23]{Escape(text)}[/][cyan on grey23]{Escape(metaText)}[/]");
            }
        }

        /// <summary>
        /// Level-based action with 5 text parts (alternating colors)
        /// </summary>
        public static void ActionWithLevel(LogLevel level, string action, string v1, string v2, string v3, string v4, string v5)
        {
            var indent = GetIndent(level);
            if (action == CliAction.DO_NOTHING)
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(v1)}[/][cyan]{Escape(v2)}[/][green]{Escape(v3)}[/][white]{Escape(v4)}[/][green]{Escape(v5)}[/]");
            }
            else
            {
                AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(action)}[/][on grey23]{indent}[/][white on grey23]{Escape(v1)}[/][cyan on grey23]{Escape(v2)}[/][green on grey23]{Escape(v3)}[/][white on grey23]{Escape(v4)}[/][green on grey23]{Escape(v5)}[/]");
            }
        }

        /// <summary>
        /// Level-based status (DO_NOTHING) with text
        /// </summary>
        public static void StatusWithLevel(LogLevel level, string text)
        {
            var indent = GetIndent(level);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(CliAction.DO_NOTHING)}[/]{indent}[white]{Escape(text)}[/]");
        }

        /// <summary>
        /// Level-based status with text + details
        /// </summary>
        public static void StatusWithLevel(LogLevel level, string text, string details)
        {
            var indent = GetIndent(level);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(CliAction.DO_NOTHING)}[/]{indent}[white]{Escape(text)} [/][cyan]{Escape(details)}[/]");
        }

        /// <summary>
        /// Level-based status with text + metadata list
        /// </summary>
        public static void StatusWithLevel(LogLevel level, string text, List<string> metadata)
        {
            var indent = GetIndent(level);
            var metaText = metadata?.Count > 0 ? $" [{string.Join(", ", metadata)}]" : string.Empty;
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(CliAction.DO_NOTHING)}[/]{indent}[white]{Escape(text)}[/][cyan]{Escape(metaText)}[/]");
        }

        /// <summary>
        /// Simple message with level indentation (no action tag)
        /// </summary>
        public static void WriteWithLevel(LogLevel level, string text)
        {
            var indent = GetIndent(level);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/]{indent}[white]{Escape(text)}[/]");
        }

        /// <summary>
        /// Message with level + cyan highlight
        /// </summary>
        public static void WriteWithLevel(LogLevel level, string text, string highlight)
        {
            var indent = GetIndent(level);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/]{indent}[white]{Escape(text)}[/][cyan]{Escape(highlight)}[/]");
        }

        #endregion

        #region Highlight

        public static void WriteHighLight(string v1, string v2, string v3)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(v1)}[/][cyan on grey23]{Escape(v2)}[/][green]{Escape(v3)}[/]");
        }

        //public static void WriteHighLight(string v1, string v2, string v3, string v4)
        //{
        //    AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(v1)}[/][cyan on grey23]{Escape(v2)}[/][green]{Escape(v3)}[/][cyan on grey23]{Escape(v4)}[/][white]{string.Empty}[/]");
        //}

        public static void WriteHighLight(string v1, string v2, string v3, string v4, string v5)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(v1)}[/][cyan on grey23]{Escape(v2)}[/][white]{Escape(v3)}[/][cyan on grey23]{Escape(v4)}[/][white]{Escape(v5)}[/]");
        }

        #endregion

        #region Table Methods

        public static void WriteTable(List<string[]> rows)
        {
            var table = new Table().Border(TableBorder.None);
            table.ShowHeaders = false;

            if (rows.Count > 0)
            {
                var colCount = rows[0].Length;
                for (var i = 0; i < colCount; i++)
                {
                    var column = new TableColumn("").NoWrap();
                    if (i == 0)
                        column.Width(55);
                    table.AddColumn(column);
                }
            }

            foreach (var row in rows)
            {
                var markupRows = row.Select(x => new Markup(x)).ToArray();
                table.AddRow(markupRows);
            }
            AnsiConsole.Write(table);
        }

        public static void WriteTable(Dictionary<string, string> items)
        {
            var rows = new List<string[]>();
            foreach (var item in items)
            {
                 rows.Add(new[] { $"[green]{Escape(item.Key)}[/]", $"[white]{Escape(item.Value)}[/]" });
            }
            WriteTable(rows);
        }

        #endregion

        #region Helpers

        /// <summary>
        /// Escapes Spectre.Console markup characters in text.
        /// </summary>
        private static string Escape(string text)
        {
            if (string.IsNullOrEmpty(text)) return string.Empty;
            return Markup.Escape(text);
        }

        #endregion
    }
}
