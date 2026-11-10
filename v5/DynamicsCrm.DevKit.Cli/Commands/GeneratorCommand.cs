using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Linq;
using System.Threading.Tasks;
using System;
using System.IO;
using Spectre.Console;

namespace DynamicsCrm.DevKit.Cli.Commands
{
    /// <summary>
    /// Command for 'devkit generator' - generates form/webapi code.
    /// Syntax: devkit generator --conn "..." --json "..." --profile "..."
    /// </summary>
    public class GeneratorCommand : DevKitCommand<GeneratorCommandArgs>
    {
        private static readonly (string Type, string Description)[] Types =
        {
            ("JsForm", "JavaScript form code and typings"),
            ("JsWebApi", "JavaScript Web API code and typings"),
            ("TsForm", "TypeScript form code and option sets"),
            ("TsWebApi", "TypeScript Web API code"),
            ("CSharp", "C# late-bound entity code")
        };
        protected override bool IsProfileRequired(GeneratorCommandArgs settings) => string.IsNullOrWhiteSpace(settings.Type);
        protected override bool IsJsonRequired(GeneratorCommandArgs settings) => string.IsNullOrWhiteSpace(settings.Type);

        protected override async Task<bool> IsValidAsync(GeneratorCommandArgs settings)
        {
            if (!string.IsNullOrWhiteSpace(settings.List))
            {
                if (!settings.List.Trim().Equals("list", StringComparison.OrdinalIgnoreCase))
                {
                    SpectreLog.ActionError($"'{settings.List}': unknown — use 'devkit generator list' to show generator types.");
                    return false;
                }
                return true;
            }
            if (!string.IsNullOrWhiteSpace(settings.Type))
            {
                if (!string.IsNullOrWhiteSpace(settings.Profile) || !string.IsNullOrWhiteSpace(settings.Json))
                {
                    SpectreLog.ActionError("Use either --type with direct options or --json with --profile.");
                    return false;
                }
                if (!Types.Any(x => x.Type.Equals(settings.Type, StringComparison.OrdinalIgnoreCase)))
                {
                    SpectreLog.ActionError("--type: unknown generator type; run 'devkit generator list'.");
                    return false;
                }
                if (string.IsNullOrWhiteSpace(settings.Out) || !Directory.Exists(settings.Out))
                {
                    SpectreLog.ActionError("--out: existing output directory required");
                    return false;
                }
                if ((settings.Type.Equals("CSharp", StringComparison.OrdinalIgnoreCase) || settings.Type.StartsWith("Js", StringComparison.OrdinalIgnoreCase)) && string.IsNullOrWhiteSpace(settings.RootNamespace))
                {
                    SpectreLog.ActionError("--rootnamespace: required for JsForm, JsWebApi and CSharp");
                    return false;
                }
            }
            else if (settings.Out != null || settings.Entities != null || settings.RootNamespace != null || settings.Namespace != null)
            {
                SpectreLog.ActionError("--type: required when using direct generator options");
                return false;
            }
            return await base.IsValidAsync(settings);
        }

        protected override async Task RunTaskAsync(GeneratorCommandArgs settings)
        {
            if (!string.IsNullOrWhiteSpace(settings.List))
            {
                WriteTypes();
                return;
            }
            if (!string.IsNullOrWhiteSpace(settings.Type))
            {
                var direct = new JsonGenerator { type = settings.Type, rootfolder = Path.GetFullPath(settings.Out), rootnamespace = settings.RootNamespace, @namespace = settings.Namespace, entities = settings.Entities ?? "folder" };
                await new TaskGenerator(new CommandLineArgs { ServiceClient = settings.ServiceClient }, direct).RunAsync();
                return;
            }
            var json = JsonHelper.Deserialize<Json>(await FileHelper.ReadAllTextAsync(settings.JsonFile));

            if (json.generators == null)
            {
                SpectreLog.ActionError("'generators' section not found in json file");
                return;
            }

            var profile = json.generators.FirstOrDefault(x => x.profile == settings.Profile);
            if (profile != null)
            {
                // Create CommandLineArgs for TaskGenerator compatibility
                var args = new CommandLineArgs
                {
                    Connection = settings.Connection,
                    Json = settings.Json,
                    Profile = settings.Profile,
                    Type = "generators",
                    ServiceClient = settings.ServiceClient
                };
                var generator = new TaskGenerator(args, profile);
                await generator.RunAsync();
            }
            else
            {
                SpectreLog.ActionError($"Profile '{settings.Profile}' not found in 'generators' section");
            }
        }

        private static void WriteTypes()
        {
            const string example = "devkit generator --type JsForm --entities account --out entities --rootnamespace Contoso";
            if (SpectreLog.IsPlain)
            {
                foreach (var type in Types) Console.WriteLine($"| {type.Type,-10} | {type.Description}");
                Console.WriteLine($"Example: {example}");
                return;
            }
            var table = new Table().Border(TableBorder.Minimal);
            table.AddColumn("[green]Type (--type)[/]");
            table.AddColumn("[green]Description[/]");
            foreach (var type in Types) table.AddRow($"[yellow]{type.Type}[/]", type.Description);
            const string styledExample = "devkit [cyan]generator[/] --type [cyan]JsForm[/] --entities [cyan]account[/] --out [cyan]entities[/] --rootnamespace [cyan]Contoso[/]";
            AnsiConsole.Write(new Panel(new Rows(table, new Markup($"[green]Example:[/] {styledExample}")))
            {
                Border = BoxBorder.Double,
                BorderStyle = new Style(Color.Green),
                Header = new PanelHeader(" [bold]devkit generator list[/] "),
                Padding = new Padding(1, 1),
                Width = 114
            });
        }
    }
}
