using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    /// <summary>
    /// Implementation of 'devkit new': lists the shared template catalog
    /// and scaffolds project/item templates through the cross-platform
    /// ScaffoldingEngine. Interactive Spectre.Console prompts (the CLI
    /// equivalent of the VSIX wizard dialogs) fill missing arguments when
    /// running in an interactive terminal.
    /// </summary>
    internal static class TaskNew
    {
        public static async Task RunAsync(NewCommandArgs args)
        {
            TemplateHandlers.RegisterAll();

            var kind = (args.Kind ?? string.Empty).Trim();
            if (kind.Equals("list", StringComparison.OrdinalIgnoreCase))
            {
                await ListAsync();
                return;
            }

            if (kind.Length == 0)
            {
                if (CanPrompt(args))
                {
                    var choice = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("What do you want to [green]create[/]?")
                            .AddChoices(new[] { "Project template", "Item template", "List all templates" }));
                    if (choice == "List all templates")
                    {
                        await ListAsync();
                        return;
                    }
                    kind = choice == "Project template" ? "project" : "item";
                }
                else
                {
                    throw new DevKitValidationException("--kind: required (project, item or list). Run 'devkit new list' to see all templates.");
                }
            }

            if (!kind.Equals("project", StringComparison.OrdinalIgnoreCase) &&
                !kind.Equals("item", StringComparison.OrdinalIgnoreCase))
            {
                throw new DevKitValidationException($"--kind '{args.Kind}': invalid. Use project, item or list.");
            }

            var isProject = kind.Equals("project", StringComparison.OrdinalIgnoreCase);
            if (string.IsNullOrWhiteSpace(args.Type))
            {
                if (!CanPrompt(args))
                {
                    throw new DevKitValidationException("--type: required. Run 'devkit new list' to see all templates.");
                }
                args.Type = PromptTemplate(isProject ? TemplateKind.Project : TemplateKind.Item);
            }

            var descriptor = TemplateCatalog.Find(args.Type, isProject ? TemplateKind.Project : TemplateKind.Item);
            if (descriptor == null)
            {
                throw new DevKitValidationException($"--type '{args.Type}': unknown {kind} template. Run 'devkit new list' to see all templates.");
            }

            ScaffoldResult result;
            if (isProject)
            {
                if (string.IsNullOrWhiteSpace(args.Name) && CanPrompt(args))
                {
                    var prompt = new TextPrompt<string>($"[green]{descriptor.DisplayName}[/] project name:");
                    var defaultName = GetDefaultProjectName(descriptor, args.Out);
                    if (!string.IsNullOrEmpty(defaultName))
                    {
                        prompt.DefaultValue(defaultName);
                    }
                    args.Name = AnsiConsole.Prompt(prompt);
                }
                var input = new ProjectTemplateInput
                {
                    TemplateId = descriptor.Id,
                    ProjectName = args.Name,
                    OutputDirectory = args.Out,
                    Force = args.Force,
                    Offline = args.Offline,
                };
                result = await ScaffoldingEngine.ScaffoldProjectAsync(input);
            }
            else
            {
                if (string.IsNullOrWhiteSpace(args.Name) && string.IsNullOrWhiteSpace(args.Entity) && CanPrompt(args))
                {
                    var promptLabel = descriptor.RequiresConnection ? "[green]Entity[/] schema name (e.g. Account):" : "[green]Name[/]:";
                    var answer = AnsiConsole.Prompt(new TextPrompt<string>(promptLabel).AllowEmpty());
                    if (descriptor.RequiresConnection)
                    {
                        args.Entity = answer;
                    }
                    else
                    {
                        args.Name = answer;
                    }
                }
                var input = new ItemTemplateInput
                {
                    TemplateId = descriptor.Id,
                    Name = args.Name,
                    Entity = args.Entity,
                    Message = args.Message,
                    Stage = args.Stage,
                    Execution = args.Execution,
                    Order = args.Order,
                    Class = args.Name,
                    DataSource = args.Datasource,
                    TemplateTitle = args.Template,
                    RootNamespace = args.Namespace,
                    OutputDirectory = args.Out,
                    Force = args.Force,
                    Offline = args.Offline,
                };
                result = await ScaffoldingEngine.ScaffoldItemAsync(input);
            }

            WriteResult(result);
            if (!result.Success)
            {
                throw new DevKitValidationException(string.Join(Environment.NewLine, result.Errors));
            }
        }

        public static Task ListAsync()
        {
            var descriptors = TemplateCatalog.All
                .OrderBy(x => x.Kind)
                .ThenBy(x => x.Order)
                .ToList();

            if (SpectreLog.IsPlain)
            {
                foreach (var descriptor in descriptors)
                {
                    var kind = descriptor.Kind == TemplateKind.Project ? "project" : "item";
                    Console.WriteLine($"| {kind,-7} | {descriptor.Order,2} | {descriptor.Id,-15} | {(IsReady(descriptor) ? "yes" : "no "),3} | {(descriptor.RequiresConnection ? "yes" : "no "),3} | {descriptor.Description}");
                }
            }
            else
            {
                var table = new Table().Border(TableBorder.Minimal).Expand();
                table.AddColumn(new TableColumn("[green]Kind[/]"));
                table.AddColumn(new TableColumn("[green]#[/]").Width(3));
                table.AddColumn(new TableColumn("[green]Type (--type)[/]"));
                table.AddColumn(new TableColumn("[green]Name[/]"));
                table.AddColumn(new TableColumn("[green]Ready[/]").Width(5));
                table.AddColumn(new TableColumn("[green]Conn[/]").Width(4));
                table.AddColumn(new TableColumn("[green]Description[/]"));
                foreach (var descriptor in descriptors)
                {
                    var kind = descriptor.Kind == TemplateKind.Project ? "project" : "item";
                    table.AddRow(kind, $"{descriptor.Order}", $"[yellow]{descriptor.Id}[/]", descriptor.DisplayName, IsReady(descriptor) ? "[green]yes[/]" : "[grey]no[/]", descriptor.RequiresConnection ? "yes" : "no", descriptor.Description);
                }
                AnsiConsole.Write(table);
            }

            SpectreLog.WriteLine();
            SpectreLog.WriteHighLight("Usage: ", "devkit new", " --kind project --type Shared --name Contoso.Shared");
            return Task.CompletedTask;
        }

        /// <summary>
        /// True when a handler or manifest is registered for the template —
        /// the "Ready" column of 'devkit new list' tells users and AI agents
        /// which types scaffold today.
        /// </summary>
        private static bool IsReady(TemplateDescriptor descriptor)
        {
            return ScaffoldingEngine.FindHandler(descriptor.Id) != null
                || TemplateManifests.TryGet(descriptor.Id, out _);
        }

        /// <summary>
        /// Default project name shown by the interactive prompt. Mirrors the
        /// pre-filled name of FormProject: {SolutionName}.{ProjectType} for
        /// every project template except SharedTest ({SolutionName}.Shared.Test).
        /// </summary>
        private static string GetDefaultProjectName(TemplateDescriptor descriptor, string outputDirectory)
        {
            var directory = string.IsNullOrWhiteSpace(outputDirectory)
                ? Environment.CurrentDirectory
                : outputDirectory;
            var workspace = WorkspaceScanner.Scan(Path.GetFullPath(directory));
            if (!workspace.HasSolution) return null;
            if (descriptor.Id == nameof(ProjectType.SharedTest))
            {
                return $"{workspace.SolutionName}.{ProjectType.Shared}.{ProjectType.Test}";
            }
            return $"{workspace.SolutionName}.{descriptor.Id}";
        }

        private static string PromptTemplate(TemplateKind kind)
        {
            var choices = TemplateCatalog.OfKind(kind)
                .Select(descriptor => $"{descriptor.Order,2}. {descriptor.DisplayName,-24} {descriptor.Id}")
                .ToList();
            var choice = AnsiConsole.Prompt(
                new SelectionPrompt<string>()
                    .Title($"Select a [green]{kind} template[/] [grey](--type)[/]:")
                    .PageSize(20)
                    .AddChoices(choices));
            var id = choice.Substring(choice.LastIndexOf(' ') + 1);
            return id;
        }

        private static bool CanPrompt(NewCommandArgs args)
        {
            return args.Interactive || (!Console.IsInputRedirected && !SpectreLog.IsPlain);
        }

        private static void WriteResult(ScaffoldResult result)
        {
            if (result.Files.Count > 0)
            {
                var rows = new List<string[]> { new[] { "Action", "File" } };
                rows.AddRange(result.Files.Select(file => new[] { file.Action, file.FilePath }));
                SpectreLog.WriteTable(rows);
            }

            foreach (var warning in result.Warnings)
            {
                SpectreLog.WriteLine();
                SpectreLog.ActionWarning(warning);
            }

            if (result.Success)
            {
                SpectreLog.WriteLine();
                var created = result.Files.Count(f => f.Action == "Created");
                var updated = result.Files.Count(f => f.Action == "Updated");
                var skipped = result.Files.Count(f => f.Action == "Skipped" || f.Action == "Unchanged");
                SpectreLog.WriteHighLight($"Template '{result.TemplateId}': ", $"{created} created, ", string.Empty, $"{updated} updated, ", $"{skipped} skipped.");
            }
        }
    }
}
