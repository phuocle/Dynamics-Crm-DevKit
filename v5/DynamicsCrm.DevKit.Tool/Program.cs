using System;
using System.Reflection;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Tool.Commands;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool
{
    class Program
    {
        static int Main(string[] args)
        {
            Console.OutputEncoding = System.Text.Encoding.UTF8;

            if (args == null || args.Length == 0 ||
                (args.Length == 1 && (args[0] == "--help" || args[0] == "-h" || args[0] == "/?")))
            {
                WriteBanner();
                WriteHelp();
                return 0;
            }

            WriteBanner();

            var app = new CommandApp();
            app.Configure(config =>
            {
                config.SetApplicationName("DynamicsCrm.DevKit.Tool");

                config.AddCommand<DocumentGeneratorCommand>("documentgenerator")
                      .WithDescription("Generate Dataverse entity documentation (markdown)");

                config.AddCommand<DocumentCodeGeneratorCommand>("documentcodegenerator")
                      .WithDescription("Generate server-side code documentation from assemblies");

                config.AddCommand<CoverageToXmlCommand>("coveragetoxml")
                      .WithDescription("Convert Visual Studio coverage file to XML");

                config.AddCommand<NUglifyCommand>("nuglify")
                      .WithDescription("Minify HTML, CSS, or JS files");

                config.AddCommand<DecryptCommand>("decrypt")
                      .WithDescription("Decrypt an encrypted password string");
            });

            return app.Run(args);
        }

        internal static void WriteBanner()
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

        private static void WriteHelp()
        {
            var panel = new Panel(
                new Markup(
                    "[green]Usage:[/]\n" +
                    "  DynamicsCrm.DevKit.Tool [cyan]<command>[/] [dim][[options]][/]\n\n" +
                    "[green]Commands:[/]\n" +
                    "  [cyan]documentgenerator[/]      Generate Dataverse entity documentation (markdown)\n" +
                    "  [cyan]documentcodegenerator[/]  Generate server-side code documentation from assemblies\n" +
                    "  [cyan]coveragetoxml[/]          Convert Visual Studio coverage file to XML\n" +
                    "  [cyan]nuglify[/]                Minify HTML, CSS, or JS files\n" +
                    "  [cyan]decrypt[/]                Decrypt an encrypted password string\n\n" +
                    "[green]Examples:[/]\n" +
                    "  DynamicsCrm.DevKit.Tool [cyan]documentgenerator[/] --conn [yellow]\"...\"[/] --solution [yellow]HsapCustomize[/] --folder [yellow]./docs[/]\n" +
                    "  DynamicsCrm.DevKit.Tool [cyan]documentcodegenerator[/] --folder [yellow]./bin/Debug[/] --output [yellow]./docs[/] --devops [yellow]AzureDevOps[/]\n" +
                    "  DynamicsCrm.DevKit.Tool [cyan]coveragetoxml[/] --coverage [yellow]file.coverage[/] --xml [yellow]output.xml[/] --dlls [yellow]\"a.dll;b.dll\"[/]\n" +
                    "  DynamicsCrm.DevKit.Tool [cyan]nuglify[/] --source [yellow]input.js[/] --destination [yellow]output.min.js[/]\n" +
                    "  DynamicsCrm.DevKit.Tool [cyan]decrypt[/] --password [yellow]\"encrypted_string\"[/]\n\n" +
                    "[dim]Use[/] [cyan]<command> --help[/] [dim]for more details on each command.[/]"
                ))
            {
                Border = BoxBorder.Double,
                BorderStyle = new Style(Color.Green),
                Header = new PanelHeader(" [bold] DynamicsCrm.DevKit.Tool Help [/] ", Justify.Left),
                Padding = new Padding(2, 1),
                Width = 114
            };
            AnsiConsole.Write(panel);
        }
    }
}
