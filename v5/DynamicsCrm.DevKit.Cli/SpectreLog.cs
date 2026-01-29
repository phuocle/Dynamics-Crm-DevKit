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
                    "  [cyan]server[/]                 Deploy plugins, workflows, dataproviders (auto-detect)\n" +
                    "  [cyan]plugin[/]                 [red](DEPRECATED)[/] Use: devkit server\n" +
                    "  [cyan]workflow[/]               [red](DEPRECATED)[/] Use: devkit server\n" +
                    "  [cyan]dataprovider[/]           [red](DEPRECATED)[/] Use: devkit server\n" +
                    "  [cyan]proxytype[/]              [red](DEPRECATED)[/] Generate early-bound proxy classes\n" +
                    "  [cyan]modelbuilder[/]           Generate early-bound entity classes using PAC ModelBuilder\n" +
                    "  [cyan]webresource[/]            Deploy web resources\n" +
                    "  [cyan]solution[/]               Extract or pack solutions using PAC CLI\n" +
                    "  [cyan]legacy-solution[/]        [red](DEPRECATED)[/] Use: devkit solution\n" +
                    "  [cyan]downloadreport[/]         Download reports from a solution\n" +
                    "  [cyan]uploadreport[/]           Upload reports to a solution\n" +
                    "  [cyan]downloadwebresource[/]    Download web resources from a solution\n" +
                    "  [cyan]datasource[/]             Create data source entities\n\n" +
                    "[green]Connection Options:[/]\n" +
                    "  --conn [yellow]STRING[/]          Dynamics 365 connection string (legacy)\n" +
                    "  --auth [yellow]TYPE[/]            Modern auth type (see below)\n" +
                    "  --url [yellow]URL[/]              Dynamics 365 environment URL\n" +
                    "  --clientid [yellow]GUID[/]        Azure AD application (client) ID\n" +
                    "  --secret [yellow]SECRET[/]        Client secret (plain or encrypted)\n" +
                    "  --pacprofile [yellow]NAME[/]      PAC CLI profile name\n" +
                    "  --sdk-login            Use SDK OOB login dialog\n\n" +
                    "[green]Auth Types (--auth):[/]\n" +
                    "  [cyan]Interactive[/]            Browser-based login (MFA supported)\n" +
                    "  [cyan]DeviceCode[/]             Device code flow for headless/SSH\n" +
                    "  [cyan]ClientSecret[/]           App registration with secret\n" +
                    "  [cyan]FromPac[/]                Use PAC CLI cached tokens\n" +
                    "  [cyan]OAuth[/]                  Username/password (legacy)\n" +
                    "  [cyan]AD[/]                     On-premise Active Directory\n\n" +
                    "[green]Common Options:[/]\n" +
                    "  --json [yellow]FILE[/]            Path to DynamicsCrm.DevKit.Cli.json\n" +
                    "  --profile [yellow]NAME[/]         Profile name from json file\n" +
                    "  --onlyupdateassembly   Fast deploy, only update the assembly\n\n" +
                    "[green]Examples:[/]\n" +
                    "  devkit server --auth [cyan]Interactive[/] --url [cyan]https://org.crm.dynamics.com[/] --json [cyan]cli.json[/] --profile [cyan]PROD[/]\n" +
                    "  devkit server --auth [cyan]FromPac[/] --pacprofile [cyan]DEVKITV4[/] --json [cyan]cli.json[/] --profile [cyan]DEBUG[/]\n" +
                    "  devkit server --auth [cyan]ClientSecret[/] --url [cyan]URL[/] --clientid [cyan]ID[/] --secret [cyan]SEC[/] --json [cyan]cli.json[/] --profile [cyan]CI[/]\n"
                ))
            {
                Border = BoxBorder.Double,
                BorderStyle = new Style(Color.Green),
                Header = new PanelHeader(" [bold] DynamicsCrm.DevKit.Cli Help [/] ", Justify.Left),
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
            AnsiConsole.Markup($"\r[white]{PREFIX}[/][green]{Escape(CliAction.PROCESSING)}[/][cyan on grey23]{current}[/][green]/[/][cyan on grey23]{total}[/]");
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

        public static void ActionError(string message)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.ERROR)}[/][red on grey23]{Escape(message)}[/]");
        }

        #endregion

        #region Highlight

        public static void WriteHighLight(string v1, string v2, string v3)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(v1)}[/][cyan on grey23]{Escape(v2)}[/][green]{Escape(v3)}[/]");
        }

        public static void WriteHighLight(string v1, string v2, string v3, string v4, string v5)
        {
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(v1)}[/][cyan on grey23]{Escape(v2)}[/][white]{Escape(v3)}[/][cyan on grey23]{Escape(v4)}[/][white]{Escape(v5)}[/]");
        }

        #endregion

        #region ActionWithLevel0

        /// <summary>
        /// Level 0 message with 1 text parameter (no action tag)
        /// Colors: text1 (white)
        /// </summary>
        public static void ActionWithLevel0(string text1)
        {
            var indent = GetIndent(LogLevel.Level0);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 0: [ACTION] text1
        /// Colors: action (green), text1 (white)
        /// </summary>
        public static void ActionWithLevel0(string action, string text1)
        {
            var indent = GetIndent(LogLevel.Level0);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 0: [ACTION] text1 text2
        /// Colors: action (green), text1 (white), text2 (cyan)
        /// </summary>
        public static void ActionWithLevel0(string action, string text1, string text2)
        {
            var indent = GetIndent(LogLevel.Level0);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)}[/]");
        }

        /// <summary>
        /// Level 0: [ACTION] text1 text2 text3
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta)
        /// </summary>
        public static void ActionWithLevel0(string action, string text1, string text2, string text3)
        {
            var indent = GetIndent(LogLevel.Level0);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)}[/]");
        }

        /// <summary>
        /// Level 0: [ACTION] text1 text2 text3 text4
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow)
        /// </summary>
        public static void ActionWithLevel0(string action, string text1, string text2, string text3, string text4)
        {
            var indent = GetIndent(LogLevel.Level0);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)}[/]");
        }

        /// <summary>
        /// Level 0: [ACTION] text1 text2 text3 text4 text5
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white)
        /// </summary>
        public static void ActionWithLevel0(string action, string text1, string text2, string text3, string text4, string text5)
        {
            var indent = GetIndent(LogLevel.Level0);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)}[/]");
        }

        /// <summary>
        /// Level 0: [ACTION] text1 text2 text3 text4 text5 text6
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white), text6 (cyan)
        /// </summary>
        public static void ActionWithLevel0(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            var indent = GetIndent(LogLevel.Level0);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)} [/][cyan]{Escape(text6)}[/]");
        }

        #endregion

        #region ActionWithLevel1

        /// <summary>
        /// Level 1 message with 1 text parameter (no action tag)
        /// Colors: text1 (white)
        /// </summary>
        public static void ActionWithLevel1(string text1)
        {
            var indent = GetIndent(LogLevel.Level1);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 1: [ACTION] text1
        /// Colors: action (green), text1 (white)
        /// </summary>
        public static void ActionWithLevel1(string action, string text1)
        {
            var indent = GetIndent(LogLevel.Level1);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 1: [ACTION] text1 text2
        /// Colors: action (green), text1 (white), text2 (cyan)
        /// </summary>
        public static void ActionWithLevel1(string action, string text1, string text2)
        {
            var indent = GetIndent(LogLevel.Level1);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)}[/]");
        }

        /// <summary>
        /// Level 1: [ACTION] text1 text2 text3
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta)
        /// </summary>
        public static void ActionWithLevel1(string action, string text1, string text2, string text3)
        {
            var indent = GetIndent(LogLevel.Level1);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)}[/]");
        }

        /// <summary>
        /// Level 1: [ACTION] text1 text2 text3 text4
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow)
        /// </summary>
        public static void ActionWithLevel1(string action, string text1, string text2, string text3, string text4)
        {
            var indent = GetIndent(LogLevel.Level1);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)}[/]");
        }

        /// <summary>
        /// Level 1: [ACTION] text1 text2 text3 text4 text5
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white)
        /// </summary>
        public static void ActionWithLevel1(string action, string text1, string text2, string text3, string text4, string text5)
        {
            var indent = GetIndent(LogLevel.Level1);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)}[/]");
        }

        /// <summary>
        /// Level 1: [ACTION] text1 text2 text3 text4 text5 text6
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white), text6 (cyan)
        /// </summary>
        public static void ActionWithLevel1(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            var indent = GetIndent(LogLevel.Level1);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)} [/][cyan]{Escape(text6)}[/]");
        }

        /// <summary>
        /// Level 1: [ACTION] text1 text2 [text3 list]
        /// Colors: action (green), text1 (white), text2 (cyan), text3 list (magenta)
        /// </summary>
        public static void ActionWithLevel1(string action, string text1, string text2, List<string> text3)
        {
            var text3Value = text3?.Count > 0 ? $"[{string.Join(", ", text3)}]" : string.Empty;
            ActionWithLevel1(action, text1, text2, text3Value);
        }

        #endregion

        #region ActionWithLevel2

        /// <summary>
        /// Level 2 message with 1 text parameter (no action tag)
        /// Colors: text1 (white)
        /// </summary>
        public static void ActionWithLevel2(string text1)
        {
            var indent = GetIndent(LogLevel.Level2);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 2: [ACTION] text1
        /// Colors: action (green), text1 (white)
        /// </summary>
        public static void ActionWithLevel2(string action, string text1)
        {
            var indent = GetIndent(LogLevel.Level2);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 2: [ACTION] text1 text2
        /// Colors: action (green), text1 (white), text2 (cyan)
        /// </summary>
        public static void ActionWithLevel2(string action, string text1, string text2)
        {
            var indent = GetIndent(LogLevel.Level2);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)}[/]");
        }

        /// <summary>
        /// Level 2: [ACTION] text1 text2 text3
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta)
        /// </summary>
        public static void ActionWithLevel2(string action, string text1, string text2, string text3)
        {
            var indent = GetIndent(LogLevel.Level2);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)}[/]");
        }

        /// <summary>
        /// Level 2: [ACTION] text1 text2 text3 text4
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow)
        /// </summary>
        public static void ActionWithLevel2(string action, string text1, string text2, string text3, string text4)
        {
            var indent = GetIndent(LogLevel.Level2);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)}[/]");
        }

        /// <summary>
        /// Level 2: [ACTION] text1 text2 text3 text4 text5
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white)
        /// </summary>
        public static void ActionWithLevel2(string action, string text1, string text2, string text3, string text4, string text5)
        {
            var indent = GetIndent(LogLevel.Level2);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)}[/]");
        }

        /// <summary>
        /// Level 2: [ACTION] text1 text2 text3 text4 text5 text6
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white), text6 (cyan)
        /// </summary>
        public static void ActionWithLevel2(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            var indent = GetIndent(LogLevel.Level2);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)} [/][cyan]{Escape(text6)}[/]");
        }

        /// <summary>
        /// Level 2: [ACTION] text1 text2 [text3 list]
        /// Colors: action (green), text1 (white), text2 (cyan), text3 list (magenta)
        /// </summary>
        public static void ActionWithLevel2(string action, string text1, string text2, List<string> text3)
        {
            var text3Value = text3?.Count > 0 ? $"[{string.Join(", ", text3)}]" : string.Empty;
            ActionWithLevel2(action, text1, text2, text3Value);
        }

        #endregion

        #region ActionWithLevel3

        /// <summary>
        /// Level 3 message with 1 text parameter (no action tag)
        /// Colors: text1 (white)
        /// </summary>
        public static void ActionWithLevel3(string text1)
        {
            var indent = GetIndent(LogLevel.Level3);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 3: [ACTION] text1
        /// Colors: action (green), text1 (white)
        /// </summary>
        public static void ActionWithLevel3(string action, string text1)
        {
            var indent = GetIndent(LogLevel.Level3);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 3: [ACTION] text1 text2
        /// Colors: action (green), text1 (white), text2 (cyan)
        /// </summary>
        public static void ActionWithLevel3(string action, string text1, string text2)
        {
            var indent = GetIndent(LogLevel.Level3);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)}[/]");
        }

        /// <summary>
        /// Level 3: [ACTION] text1 text2 text3
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta)
        /// </summary>
        public static void ActionWithLevel3(string action, string text1, string text2, string text3)
        {
            var indent = GetIndent(LogLevel.Level3);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)}[/]");
        }

        /// <summary>
        /// Level 3: [ACTION] text1 text2 text3 text4
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow)
        /// </summary>
        public static void ActionWithLevel3(string action, string text1, string text2, string text3, string text4)
        {
            var indent = GetIndent(LogLevel.Level3);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)}[/]");
        }

        /// <summary>
        /// Level 3: [ACTION] text1 text2 text3 text4 text5
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white)
        /// </summary>
        public static void ActionWithLevel3(string action, string text1, string text2, string text3, string text4, string text5)
        {
            var indent = GetIndent(LogLevel.Level3);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)}[/]");
        }

        /// <summary>
        /// Level 3: [ACTION] text1 text2 text3 text4 text5 text6
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white), text6 (cyan)
        /// </summary>
        public static void ActionWithLevel3(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            var indent = GetIndent(LogLevel.Level3);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)} [/][cyan]{Escape(text6)}[/]");
        }

        /// <summary>
        /// Level 3: [ACTION] text1 text2 [text3 list]
        /// Colors: action (green), text1 (white), text2 (cyan), text3 list (magenta)
        /// </summary>
        public static void ActionWithLevel3(string action, string text1, string text2, List<string> text3)
        {
            var text3Value = text3?.Count > 0 ? $"[{string.Join(", ", text3)}]" : string.Empty;
            ActionWithLevel3(action, text1, text2, text3Value);
        }

        /// <summary>
        /// Level 3: [ACTION] text1 text2 text3 [text4 list]
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 list (yellow)
        /// </summary>
        public static void ActionWithLevel3(string action, string text1, string text2, string text3, List<string> text4)
        {
            var text4Value = text4?.Count > 0 ? $"[{string.Join(", ", text4)}]" : string.Empty;
            ActionWithLevel3(action, text1, text2, text3, text4Value);
        }

        #endregion

        #region ActionWithLevel4

        /// <summary>
        /// Level 4 message with 1 text parameter (no action tag)
        /// Colors: text1 (white)
        /// </summary>
        public static void ActionWithLevel4(string text1)
        {
            var indent = GetIndent(LogLevel.Level4);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 4: [ACTION] text1
        /// Colors: action (green), text1 (white)
        /// </summary>
        public static void ActionWithLevel4(string action, string text1)
        {
            var indent = GetIndent(LogLevel.Level4);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)}[/]");
        }

        /// <summary>
        /// Level 4: [ACTION] text1 text2
        /// Colors: action (green), text1 (white), text2 (cyan)
        /// </summary>
        public static void ActionWithLevel4(string action, string text1, string text2)
        {
            var indent = GetIndent(LogLevel.Level4);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)}[/]");
        }

        /// <summary>
        /// Level 4: [ACTION] text1 text2 text3
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta)
        /// </summary>
        public static void ActionWithLevel4(string action, string text1, string text2, string text3)
        {
            var indent = GetIndent(LogLevel.Level4);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)}[/]");
        }

        /// <summary>
        /// Level 4: [ACTION] text1 text2 text3 text4
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow)
        /// </summary>
        public static void ActionWithLevel4(string action, string text1, string text2, string text3, string text4)
        {
            var indent = GetIndent(LogLevel.Level4);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)}[/]");
        }

        /// <summary>
        /// Level 4: [ACTION] text1 text2 text3 text4 text5
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white)
        /// </summary>
        public static void ActionWithLevel4(string action, string text1, string text2, string text3, string text4, string text5)
        {
            var indent = GetIndent(LogLevel.Level4);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)}[/]");
        }

        /// <summary>
        /// Level 4: [ACTION] text1 text2 text3 text4 text5 text6
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 (yellow), text5 (white), text6 (cyan)
        /// </summary>
        public static void ActionWithLevel4(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            var indent = GetIndent(LogLevel.Level4);
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(action)}[/]{indent}[white]{Escape(text1)} [/][cyan]{Escape(text2)} [/][magenta]{Escape(text3)} [/][yellow]{Escape(text4)} [/][white]{Escape(text5)} [/][cyan]{Escape(text6)}[/]");
        }

        /// <summary>
        /// Level 4: [ACTION] text1 text2 [text3 list]
        /// Colors: action (green), text1 (white), text2 (cyan), text3 list (magenta)
        /// </summary>
        public static void ActionWithLevel4(string action, string text1, string text2, List<string> text3)
        {
            var text3Value = text3?.Count > 0 ? $"[{string.Join(", ", text3)}]" : string.Empty;
            ActionWithLevel4(action, text1, text2, text3Value);
        }

        /// <summary>
        /// Level 4: [ACTION] text1 text2 text3 [text4 list]
        /// Colors: action (green), text1 (white), text2 (cyan), text3 (magenta), text4 list (yellow)
        /// </summary>
        public static void ActionWithLevel4(string action, string text1, string text2, string text3, List<string> text4)
        {
            var text4Value = text4?.Count > 0 ? $"[{string.Join(", ", text4)}]" : string.Empty;
            ActionWithLevel4(action, text1, text2, text3, text4Value);
        }

        #endregion

        #region Table Methods

        /// <summary>
        /// Writes rows with aligned columns using plain text (no Spectre.Table).
        /// Uses green for text labels, white for parameter names (--xxx), cyan for values.
        /// </summary>
        public static void WriteTable(List<string[]> rows, int labelWidth = 30)
        {
            foreach (var row in rows)
            {
                if (row.Length >= 2)
                {
                    // Extract text from markup (remove [color] tags for padding calculation)
                    var labelText = StripMarkup(row[0]);
                    var valueText = StripMarkup(row[1]);
                    // Pad label to fixed width for alignment
                    var paddedLabel = labelText.PadRight(labelWidth - 2);
                    // Check if label contains a parameter (--xxx pattern)
                    var dashIndex = paddedLabel.IndexOf("--", StringComparison.Ordinal);
                    if (dashIndex >= 0)
                    {
                        // Split: prefix part (green) + parameter part (white)
                        var prefix = paddedLabel.Substring(0, dashIndex);
                        var param = paddedLabel.Substring(dashIndex);
                        AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(prefix)}[/][white]{Escape(param)}[/][cyan]{Escape(valueText)}[/]");
                    }
                    else
                    {
                        // No parameter, all green label
                        AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(paddedLabel)}[/][cyan]{Escape(valueText)}[/]");
                    }
                }
                else if (row.Length == 1)
                {
                    var text = StripMarkup(row[0]);
                    AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green]{Escape(text)}[/]");
                }
            }
        }

        /// <summary>
        /// Writes dictionary items with aligned columns using plain text.
        /// </summary>
        public static void WriteTable(Dictionary<string, string> items)
        {
            var rows = new List<string[]>();
            foreach (var item in items)
            {
                rows.Add(new[] { item.Key, item.Value });
            }
            WriteTable(rows);
        }

        /// <summary>
        /// Strips Spectre.Console markup tags from text.
        /// </summary>
        private static string StripMarkup(string text)
        {
            if (string.IsNullOrEmpty(text)) return string.Empty;
            // Remove [color]...[/] patterns
            return System.Text.RegularExpressions.Regex.Replace(text, @"\[/?[^\]]+\]", string.Empty);
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

        #endregion
    }
}
