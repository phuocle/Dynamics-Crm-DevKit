using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    public static class SpectreLog
    {
        public static bool IsPlain { get; set; } = false;
        private const string PREFIX = "║";
        private const string PLAIN_PREFIX = "|";
        private const string HIGHLIGHT_BG = "darkgreen";
        private const string ACTION_COLOR = "green";
        private const string TEXT1_COLOR = "white";
        private const string TEXT2_COLOR = "cyan";
        private const string TEXT3_COLOR = "magenta";
        private const string TEXT4_COLOR = "yellow";
        private const string TEXT5_COLOR = "white";
        private const string TEXT6_COLOR = "cyan";
        private static List<string> ACTIONS_NO_INDENT = new List<string> { CliAction.DEACTIVATED, CliAction.UNREGISTERED, CliAction.ACTIVATED };
        private static List<string> ACTIONS_HIGHLIGHT = new List<string> { CliAction.CREATED, CliAction.UPDATED, CliAction.REGISTERED, CliAction.DELETED, CliAction.FLAG, CliAction.SIGNED, CliAction.ADDED };

        private static bool IsNoIndent(string action) => ACTIONS_NO_INDENT.Any(a => action.Equals(a, StringComparison.OrdinalIgnoreCase));
        private static bool IsHighlight(string action) => IsNoIndent(action) || ACTIONS_HIGHLIGHT.Any(a => action.Equals(a, StringComparison.OrdinalIgnoreCase));
        private static string GetBg(string action) => IsHighlight(action) ? $" on {HIGHLIGHT_BG}" : string.Empty;


        #region Banner & Header
        public static void WriteHeader()
        {
            if (IsPlain)
            {
                Console.WriteLine($"{PLAIN_PREFIX} DynamicsCrm.DevKit.Cli {Const.Version} Build: {Const.Build}");
                Console.WriteLine($"{PLAIN_PREFIX} https://github.com/phuocle/Dynamics-Crm-DevKit");
                return;
            }
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
        public static void WriteHelp()
        {
            var helpContent =
                "Usage:\n" +
                "  devkit generator --profile NAME --json FILE [options]\n" +
                "  devkit server --profile NAME --json FILE [options]\n\n" +
                "Commands:\n" +
                "  generator              Generate form/webapi js/ts code, late-bound C# code\n" +
                "  server                 Deploy plugins, workflows, dataproviders (auto-detect)\n" +
                "  plugin                 (DEPRECATED) Use: devkit server\n" +
                "  workflow               (DEPRECATED) Use: devkit server\n" +
                "  dataprovider           (DEPRECATED) Use: devkit server\n" +
                "  proxytype              (DEPRECATED) Auto-redirects to modelbuilder\n" +
                "  modelbuilder           Generate early-bound entity classes using PAC ModelBuilder\n" +
                "  webresource            Deploy web resources\n" +
                "  solution               Extract or pack solutions using PAC CLI\n" +
                "  legacy-solution        (DEPRECATED) Auto-redirects to solution\n" +
                "  downloadreport         Download reports from a solution\n" +
                "  uploadreport           Upload reports to a solution\n" +
                "  downloadwebresource    Download web resources from a solution\n" +
                "  datasource             Create data source entities\n" +
                "  mcp                    Start MCP server for AI agent integration\n\n" +
                "Connection Options:\n" +
                "  --conn STRING          Dynamics 365 connection string (legacy)\n" +
                "  --auth TYPE            Modern auth type (see below)\n" +
                "  --url URL              Dynamics 365 environment URL\n" +
                "  --clientid GUID        Azure AD application (client) ID\n" +
                "  --secret SECRET        Client secret (plain or encrypted)\n" +
                "  --pacprofile NAME      PAC CLI profile name\n" +
                "  --sdk-login            Use SDK OOB login dialog\n\n" +
                "Auth Types (--auth):\n" +
                "  Interactive            Browser-based login (MFA supported)\n" +
                "  DeviceCode             Device code flow for headless/SSH\n" +
                "  ClientSecret           App registration with secret\n" +
                "  FromPac                Use PAC CLI cached tokens\n" +
                "  OAuth                  Username/password (legacy)\n" +
                "  AD                     On-premise Active Directory\n\n" +
                "Common Options:\n" +
                "  --json FILE            Path to DynamicsCrm.DevKit.Cli.json\n" +
                "  --profile NAME         Profile name from json file\n" +
                "  --plain                Plain text output (for AI agents/CI)\n" +
                "  --onlyupdateassembly   Fast deploy, only update the assembly (server command only)\n\n" +
                "Examples:\n" +
                "  devkit server --auth Interactive --url https://org.crm.dynamics.com --json cli.json --profile PROD\n" +
                "  devkit server --auth FromPac --pacprofile DEVKITV4 --json cli.json --profile DEBUG\n" +
                "  devkit server --auth ClientSecret --url URL --clientid ID --secret SEC --json cli.json --profile CI\n" +
                "  devkit mcp --auth ClientSecret --url URL --clientid ID --clientsecret SEC\n\n" +
                "Environment Variables (DEVKIT_*):\n" +
                "  All connection args support env var fallback. Priority: CLI args > env vars > empty.\n" +
                "  DEVKIT_AUTH_TYPE     Auth type (Interactive, ClientSecret, FromPac, ...)\n" +
                "  DEVKIT_URL           Environment URL\n" +
                "  DEVKIT_CLIENT_ID     Azure AD application (client) ID\n" +
                "  DEVKIT_CLIENT_SECRET Client secret\n" +
                "  DEVKIT_PAC_PROFILE   PAC CLI profile name\n" +
                "  NO_COLOR             Set to any value to enable plain text output\n\n" +
                "MCP Server (AI Agent Integration):\n" +
                "  devkit mcp                    26 tools + 6 resources: metadata, upsert, FetchXML, search, WebAPI, publish, trace logs, URL parser, forms, views, security, form builder, audit, sitemap, schema\n" +
                "  devkit mcp --setup-guide      Setup instructions for all IDEs\n";

            if (IsPlain)
            {
                Console.WriteLine("DynamicsCrm.DevKit.Cli Help");
                Console.WriteLine(new string('-', 40));
                Console.WriteLine(helpContent);
                return;
            }

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
                    "  [cyan]proxytype[/]              [red](DEPRECATED)[/] Auto-redirects to modelbuilder\n" +
                    "  [cyan]modelbuilder[/]           Generate early-bound entity classes using PAC ModelBuilder\n" +
                    "  [cyan]webresource[/]            Deploy web resources\n" +
                    "  [cyan]solution[/]               Extract or pack solutions using PAC CLI\n" +
                    "  [cyan]legacy-solution[/]        [red](DEPRECATED)[/] Auto-redirects to solution\n" +
                    "  [cyan]downloadreport[/]         Download reports from a solution\n" +
                    "  [cyan]uploadreport[/]           Upload reports to a solution\n" +
                    "  [cyan]downloadwebresource[/]    Download web resources from a solution\n" +
                    "  [cyan]datasource[/]             Create data source entities\n" +
                    "  [cyan]mcp[/]                    Start MCP server for AI agent integration\n\n" +
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
                    "  --plain                Plain text output (for AI agents/CI)\n" +
                    "  --onlyupdateassembly   Fast deploy, only update the assembly (server command only)\n\n" +
                    "[green]Examples:[/]\n" +
                    "  devkit server --auth [cyan]Interactive[/] --url [cyan]https://org.crm.dynamics.com[/] --json [cyan]cli.json[/] --profile [cyan]PROD[/]\n" +
                    "  devkit server --auth [cyan]FromPac[/] --pacprofile [cyan]DEVKITV4[/] --json [cyan]cli.json[/] --profile [cyan]DEBUG[/]\n" +
                    "  devkit server --auth [cyan]ClientSecret[/] --url [cyan]URL[/] --clientid [cyan]ID[/] --secret [cyan]SEC[/] --json [cyan]cli.json[/] --profile [cyan]CI[/]\n" +
                    "  devkit mcp --auth [cyan]ClientSecret[/] --url [cyan]URL[/] --clientid [cyan]ID[/] --clientsecret [cyan]SEC[/]\n\n" +
                    "[green]Environment Variables (DEVKIT_*):[/]\n" +
                    "  All connection args support env var fallback. Priority: CLI args > env vars > empty.\n" +
                    "  [cyan]DEVKIT_AUTH_TYPE[/]     Auth type (Interactive, ClientSecret, FromPac, ...)\n" +
                    "  [cyan]DEVKIT_URL[/]           Environment URL\n" +
                    "  [cyan]DEVKIT_CLIENT_ID[/]     Azure AD application (client) ID\n" +
                    "  [cyan]DEVKIT_CLIENT_SECRET[/] Client secret\n" +
                    "  [cyan]DEVKIT_PAC_PROFILE[/]   PAC CLI profile name\n" +
                    "  [cyan]NO_COLOR[/]             Set to any value to enable plain text output\n\n" +
                    "[green]MCP Server (AI Agent Integration):[/]\n" +
                    "  devkit [cyan]mcp[/]                    26 tools + 6 resources: metadata, upsert, FetchXML, search, WebAPI, publish, trace logs, URL parser, forms, views, security, form builder, audit, sitemap, schema\n" +
                    "  devkit [cyan]mcp[/] --setup-guide      Setup instructions for all IDEs\n"

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
        public static void WriteException(Exception ex)
        {
            if (IsPlain)
            {
                Console.WriteLine(ex.ToString());
                return;
            }
            AnsiConsole.WriteException(ex, ExceptionFormats.ShortenEverything);
        }
        public static void WaitForKeyPress()
        {
            if (IsPlain) return;
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
        public static async Task WithStatusAsync(string status, Func<StatusContext, Task> action)
        {
            if (IsPlain)
            {
                Console.WriteLine($"{PLAIN_PREFIX} {status}");
                await action(null);
                return;
            }
            await AnsiConsole.Status()
                .Spinner(Spinner.Known.Dots)
                .SpinnerStyle(Style.Parse("green"))
                .StartAsync($"[{TEXT1_COLOR}]{Escape(status)}[/]", async ctx =>
                {
                    await action(ctx);
                });
        }
        public static void WaitingWithCancellation(string message = "", CancellationToken cancellationToken = default)
        {
            if (IsPlain)
            {
                Console.WriteLine($"{PLAIN_PREFIX} {message}...");
                try { cancellationToken.WaitHandle.WaitOne(); }
                catch (OperationCanceledException) { }
                return;
            }
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
            if (IsPlain) { Console.WriteLine(PLAIN_PREFIX); return; }
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/]");
        }


        public static void WriteProgress(int current, int total)
        {
            if (IsPlain) { Console.Write($"\r{PLAIN_PREFIX} PROCESSING {current}/{total}"); return; }
            AnsiConsole.Markup($"\r[white]{PREFIX}[/][green]{Escape(CliAction.PROCESSING)}[/][cyan on grey23]{current}[/][green]/[/][cyan on grey23]{total}[/]");
        }

        public static void ClearProgress()
        {
            AnsiConsole.Markup($"\r{new string(' ', 43)}\r");
        }
        public static void WriteProcessOutput(string line)
        {
            if (!string.IsNullOrWhiteSpace(line))
            {
                if (IsPlain) { Console.WriteLine(line); return; }
                AnsiConsole.MarkupLine($"[grey]{Escape(line)}[/]");
            }
        }

        #endregion

        #region Action Methods

        public static void ActionError(string message)
        {
            if (IsPlain) { Console.WriteLine($"{PLAIN_PREFIX} [ERROR] {message}"); return; }
            AnsiConsole.MarkupLine($"[white]{PREFIX}[/][green on grey23]{Escape(CliAction.ERROR)} [/][red on grey23]{Escape(message)}[/]");
        }

        #endregion

        #region Highlight

        public static void WriteHighLight(string v1, string v2, string v3)
        {
            if (IsPlain) { Console.WriteLine($"{PLAIN_PREFIX} {v1}{v2}{v3}"); return; }
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/][{ACTION_COLOR}]{Escape(v1)}[/][{TEXT2_COLOR} on grey23]{Escape(v2)}[/][{ACTION_COLOR}]{Escape(v3)}[/]");
        }

        public static void WriteHighLight(string v1, string v2, string v3, string v4, string v5)
        {
            if (IsPlain) { Console.WriteLine($"{PLAIN_PREFIX} {v1}{v2}{v3}{v4}{v5}"); return; }
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/][{ACTION_COLOR}]{Escape(v1)}[/][{TEXT2_COLOR} on grey23]{Escape(v2)}[/][{TEXT1_COLOR}]{Escape(v3)}[/][{TEXT2_COLOR} on grey23]{Escape(v4)}[/][{TEXT1_COLOR}]{Escape(v5)}[/]");
        }

        #endregion

        #region ActionWithLevel0
        public static void ActionWithLevel0(string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level0, "", text1); return; }
            var indent = GetIndent(LogLevel.Level0);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/]{indent}[{ACTION_COLOR}]{Escape(text1)}[/]");
        }
        public static void ActionWithLevel0(string action, string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level0, action, text1); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level0);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)}[/]");
        }
        public static void ActionWithLevel0(string action, string text1, string text2)
        {
            if (IsPlain) { PlainAction(LogLevel.Level0, action, text1, text2); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level0);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)}[/]");
        }
        public static void ActionWithLevel0(string action, string text1, string text2, string text3)
        {
            if (IsPlain) { PlainAction(LogLevel.Level0, action, text1, text2, text3); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level0);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)}[/]");
        }
        public static void ActionWithLevel0(string action, string text1, string text2, string text3, string text4)
        {
            if (IsPlain) { PlainAction(LogLevel.Level0, action, text1, text2, text3, text4); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level0);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)}[/]");
        }
        public static void ActionWithLevel0(string action, string text1, string text2, string text3, string text4, string text5)
        {
            if (IsPlain) { PlainAction(LogLevel.Level0, action, text1, text2, text3, text4, text5); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level0);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)}[/]");
        }
        public static void ActionWithLevel0(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            if (IsPlain) { PlainAction(LogLevel.Level0, action, text1, text2, text3, text4, text5, text6); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level0);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)} [/][{TEXT6_COLOR}{bg}]{Escape(text6)}[/]");
        }

        #endregion

        #region ActionWithLevel1
        public static void ActionWithLevel1(string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level1, "", text1); return; }
            var indent = GetIndent(LogLevel.Level1);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/]{indent}[{TEXT1_COLOR}]{Escape(text1)}[/]");
        }
        public static void ActionWithLevel1(string action, string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level1, action, text1); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level1);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)}[/]");
        }
        public static void ActionWithLevel1(string action, string text1, string text2)
        {
            if (IsPlain) { PlainAction(LogLevel.Level1, action, text1, text2); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level1);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)}[/]");
        }
        public static void ActionWithLevel1(string action, string text1, string text2, string text3)
        {
            if (IsPlain) { PlainAction(LogLevel.Level1, action, text1, text2, text3); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level1);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)}[/]");
        }
        public static void ActionWithLevel1(string action, string text1, string text2, string text3, string text4)
        {
            if (IsPlain) { PlainAction(LogLevel.Level1, action, text1, text2, text3, text4); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level1);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)}[/]");
        }
        public static void ActionWithLevel1(string action, string text1, string text2, string text3, string text4, string text5)
        {
            if (IsPlain) { PlainAction(LogLevel.Level1, action, text1, text2, text3, text4, text5); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level1);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)}[/]");
        }
        public static void ActionWithLevel1(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            if (IsPlain) { PlainAction(LogLevel.Level1, action, text1, text2, text3, text4, text5, text6); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level1);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)} [/][{TEXT6_COLOR}{bg}]{Escape(text6)}[/]");
        }
        public static void ActionWithLevel1(string action, string text1, string text2, List<string> text3)
        {
            var text3Value = text3?.Count > 0 ? $"[{string.Join(", ", text3)}]" : string.Empty;
            ActionWithLevel1(action, text1, text2, text3Value);
        }

        #endregion

        #region ActionWithLevel2
        public static void ActionWithLevel2(string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level2, "", text1); return; }
            var indent = GetIndent(LogLevel.Level2);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/]{indent}[{TEXT1_COLOR}]{Escape(text1)}[/]");
        }
        public static void ActionWithLevel2(string action, string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level2, action, text1); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level2);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)}[/]");
        }
        public static void ActionWithLevel2(string action, string text1, string text2)
        {
            if (IsPlain) { PlainAction(LogLevel.Level2, action, text1, text2); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level2);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)}[/]");
        }
        public static void ActionWithLevel2(string action, string text1, string text2, string text3)
        {
            if (IsPlain) { PlainAction(LogLevel.Level2, action, text1, text2, text3); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level2);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)}[/]");
        }
        public static void ActionWithLevel2(string action, string text1, string text2, string text3, string text4)
        {
            if (IsPlain) { PlainAction(LogLevel.Level2, action, text1, text2, text3, text4); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level2);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)}[/]");
        }
        public static void ActionWithLevel2(string action, string text1, string text2, string text3, string text4, string text5)
        {
            if (IsPlain) { PlainAction(LogLevel.Level2, action, text1, text2, text3, text4, text5); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level2);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)}[/]");
        }
        public static void ActionWithLevel2(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            if (IsPlain) { PlainAction(LogLevel.Level2, action, text1, text2, text3, text4, text5, text6); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level2);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)} [/][{TEXT6_COLOR}{bg}]{Escape(text6)}[/]");
        }
        public static void ActionWithLevel2(string action, string text1, string text2, List<string> text3)
        {
            var text3Value = text3?.Count > 0 ? $"[{string.Join(", ", text3)}]" : string.Empty;
            ActionWithLevel2(action, text1, text2, text3Value);
        }

        #endregion

        #region ActionWithLevel3
        public static void ActionWithLevel3(string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level3, "", text1); return; }
            var indent = GetIndent(LogLevel.Level3);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/]{indent}[{TEXT1_COLOR}]{Escape(text1)}[/]");
        }
        public static void ActionWithLevel3(string action, string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level3, action, text1); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level3);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)}[/]");
        }
        public static void ActionWithLevel3(string action, string text1, string text2)
        {
            if (IsPlain) { PlainAction(LogLevel.Level3, action, text1, text2); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level3);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)}[/]");
        }
        public static void ActionWithLevel3(string action, string text1, string text2, string text3)
        {
            if (IsPlain) { PlainAction(LogLevel.Level3, action, text1, text2, text3); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level3);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)}[/]");
        }
        public static void ActionWithLevel3(string action, string text1, string text2, string text3, string text4)
        {
            if (IsPlain) { PlainAction(LogLevel.Level3, action, text1, text2, text3, text4); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level3);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)}[/]");
        }
        public static void ActionWithLevel3(string action, string text1, string text2, string text3, string text4, string text5)
        {
            if (IsPlain) { PlainAction(LogLevel.Level3, action, text1, text2, text3, text4, text5); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level3);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)}[/]");
        }
        public static void ActionWithLevel3(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            if (IsPlain) { PlainAction(LogLevel.Level3, action, text1, text2, text3, text4, text5, text6); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level3);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)} [/][{TEXT6_COLOR}{bg}]{Escape(text6)}[/]");
        }
        public static void ActionWithLevel3(string action, string text1, string text2, List<string> text3)
        {
            var text3Value = text3?.Count > 0 ? $"[{string.Join(", ", text3)}]" : string.Empty;
            ActionWithLevel3(action, text1, text2, text3Value);
        }
        public static void ActionWithLevel3(string action, string text1, string text2, string text3, List<string> text4)
        {
            var text4Value = text4?.Count > 0 ? $"[{string.Join(", ", text4)}]" : string.Empty;
            ActionWithLevel3(action, text1, text2, text3, text4Value);
        }

        #endregion

        #region ActionWithLevel4
        public static void ActionWithLevel4(string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level4, "", text1); return; }
            var indent = GetIndent(LogLevel.Level4);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/]{indent}[{TEXT1_COLOR}]{Escape(text1)}[/]");
        }
        public static void ActionWithLevel4(string action, string text1)
        {
            if (IsPlain) { PlainAction(LogLevel.Level4, action, text1); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level4);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)}[/]");
        }
        public static void ActionWithLevel4(string action, string text1, string text2)
        {
            if (IsPlain) { PlainAction(LogLevel.Level4, action, text1, text2); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level4);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)}[/]");
        }
        public static void ActionWithLevel4(string action, string text1, string text2, string text3)
        {
            if (IsPlain) { PlainAction(LogLevel.Level4, action, text1, text2, text3); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level4);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)}[/]");
        }
        public static void ActionWithLevel4(string action, string text1, string text2, string text3, string text4)
        {
            if (IsPlain) { PlainAction(LogLevel.Level4, action, text1, text2, text3, text4); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level4);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)}[/]");
        }
        public static void ActionWithLevel4(string action, string text1, string text2, string text3, string text4, string text5)
        {
            if (IsPlain) { PlainAction(LogLevel.Level4, action, text1, text2, text3, text4, text5); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level4);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)}[/]");
        }
        public static void ActionWithLevel4(string action, string text1, string text2, string text3, string text4, string text5, string text6)
        {
            if (IsPlain) { PlainAction(LogLevel.Level4, action, text1, text2, text3, text4, text5, text6); return; }
            var indent = IsNoIndent(action) ? "" : GetIndent(LogLevel.Level4);
            var bg = GetBg(action);
            AnsiConsole.MarkupLine($"[{TEXT1_COLOR}{bg}]{PREFIX}[/][{ACTION_COLOR}{bg}]{Escape(action)} [/][{TEXT1_COLOR}{bg}]{indent}{Escape(text1)} [/][{TEXT2_COLOR}{bg}]{Escape(text2)} [/][{TEXT3_COLOR}{bg}]{Escape(text3)} [/][{TEXT4_COLOR}{bg}]{Escape(text4)} [/][{TEXT5_COLOR}{bg}]{Escape(text5)} [/][{TEXT6_COLOR}{bg}]{Escape(text6)}[/]");
        }
        public static void ActionWithLevel4(string action, string text1, string text2, List<string> text3)
        {
            var text3Value = text3?.Count > 0 ? $"[{string.Join(", ", text3)}]" : string.Empty;
            ActionWithLevel4(action, text1, text2, text3Value);
        }
        public static void ActionWithLevel4(string action, string text1, string text2, string text3, List<string> text4)
        {
            var text4Value = text4?.Count > 0 ? $"[{string.Join(", ", text4)}]" : string.Empty;
            ActionWithLevel4(action, text1, text2, text3, text4Value);
        }

        #endregion

        #region Table Methods
        public static void WriteTable(List<string[]> rows, int labelWidth = 30)
        {
            foreach (var row in rows)
            {
                if (row.Length >= 2)
                {
                    var labelText = StripMarkup(row[0]);
                    var valueText = StripMarkup(row[1]);
                    var paddedLabel = labelText.PadRight(labelWidth - 2);

                    if (IsPlain)
                    {
                        Console.WriteLine($"{PLAIN_PREFIX} {paddedLabel}{valueText}");
                        continue;
                    }

                    var dashIndex = paddedLabel.IndexOf("--", StringComparison.Ordinal);
                    if (dashIndex >= 0)
                    {
                        var prefix = paddedLabel.Substring(0, dashIndex);
                        var param = paddedLabel.Substring(dashIndex);
                        AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/][{ACTION_COLOR}]{Escape(prefix)}[/][{TEXT1_COLOR}]{Escape(param)}[/][{TEXT2_COLOR}]{Escape(valueText)}[/]");
                    }
                    else
                    {
                        AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/][{ACTION_COLOR}]{Escape(paddedLabel)}[/][{TEXT2_COLOR}]{Escape(valueText)}[/]");
                    }
                }
                else if (row.Length == 1)
                {
                    var text = StripMarkup(row[0]);
                    if (IsPlain) { Console.WriteLine($"{PLAIN_PREFIX} {text}"); continue; }
                    AnsiConsole.MarkupLine($"[{TEXT1_COLOR}]{PREFIX}[/][{ACTION_COLOR}]{Escape(text)}[/]");
                }
            }
        }
        private static string StripMarkup(string text)
        {
            if (string.IsNullOrEmpty(text)) return string.Empty;
            // Remove [color]...[/] patterns
            return System.Text.RegularExpressions.Regex.Replace(text, @"\[/?[^\]]+\]", string.Empty);
        }

        #endregion

        #region Request Counts

        [Conditional("DEBUG")]
        public static void WriteRequestCounts()
        {
            var total = XrmHelper.GetTotalCount();
            if (total == 0) return;
            WriteLine();
            ActionWithLevel0("DATAVERSE API REQUESTS SUMMARY");
            if (XrmHelper.COUNT_ExecuteAsync > 0)
                ActionWithLevel1("ExecuteAsync:", $"{XrmHelper.COUNT_ExecuteAsync}");
            if (XrmHelper.COUNT_RetrieveMultipleAsync > 0)
                ActionWithLevel1("RetrieveMultipleAsync:", $"{XrmHelper.COUNT_RetrieveMultipleAsync}");
            if (XrmHelper.COUNT_CreateAsync > 0)
                ActionWithLevel1("CreateAsync:", $"{XrmHelper.COUNT_CreateAsync}");
            if (XrmHelper.COUNT_UpdateAsync > 0)
                ActionWithLevel1("UpdateAsync:", $"{XrmHelper.COUNT_UpdateAsync}");
            if (XrmHelper.COUNT_DeleteAsync > 0)
                ActionWithLevel1("DeleteAsync:", $"{XrmHelper.COUNT_DeleteAsync}");
            if (XrmHelper.COUNT_RetrieveAsync > 0)
                ActionWithLevel1("RetrieveAsync:", $"{XrmHelper.COUNT_RetrieveAsync}");
            WriteLine();
            ActionWithLevel0("TOTAL REQUESTS:", $"{total}");
        }

        #endregion

        #region Helpers
        private static void PlainAction(LogLevel level, string action, params string[] texts)
        {
            var indent = IsNoIndent(action) ? "" : GetIndent(level);
            var joined = string.Join(" ", texts.Where(t => !string.IsNullOrEmpty(t)));
            if (string.IsNullOrEmpty(action))
                Console.WriteLine($"{PLAIN_PREFIX}{indent}{joined}");
            else
                Console.WriteLine($"{PLAIN_PREFIX}{indent}{action} {joined}");
        }

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
