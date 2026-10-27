using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk.Metadata;
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
                    // The project is registered in a solution ONLY when the
                    // caller names one (--solution): several .sln/.slnx in
                    // one tree make an auto-pick ambiguous, and the VSIX
                    // host always supplies its opened solution.
                    SolutionFile = args.Solution,
                    Force = args.Force,
                    Offline = args.Offline,
                };
                // The Console/ConsoleCore templates bake the connection
                // type into App.cs/App.config or App.cs/AppSettings.json,
                // and the Server/Package deploy scripts bake the CLI
                // connection arguments — ask for it like FormProject does
                // (defaults from .env, AuthType list filtered to what the
                // template supports); non-interactive hosts leave it null
                // and the handler falls back to the .env marker.
                if ((descriptor.Id == nameof(ProjectType.Console) || descriptor.Id == nameof(ProjectType.ConsoleCore) || descriptor.Id == nameof(ProjectType.Server) || descriptor.Id == nameof(ProjectType.Package) || descriptor.Id == nameof(ProjectType.WebResource) || descriptor.Id == nameof(ProjectType.ProxyTypes) || descriptor.Id == nameof(ProjectType.WebResourceTs) || descriptor.Id == nameof(ProjectType.UiTest) || descriptor.Id == nameof(ProjectType.SolutionPackager) || descriptor.Id == nameof(ProjectType.Report)) && !args.Offline && CanPrompt(args))
                {
                    var supportedTypes = descriptor.Id == nameof(ProjectType.ConsoleCore)
                        ? ConsoleCoreProjectTemplateHandler.SupportedConnectionTypes
                        : descriptor.Id == nameof(ProjectType.Console)
                            ? ConsoleProjectTemplateHandler.SupportedConnectionTypes
                            : descriptor.Id == nameof(ProjectType.Package)
                                ? PackageProjectTemplateHandler.SupportedConnectionTypes
                                : descriptor.Id == nameof(ProjectType.WebResource)
                                    ? WebResourceProjectTemplateHandler.SupportedConnectionTypes
                                    : descriptor.Id == nameof(ProjectType.ProxyTypes)
                                        ? ProxyTypesProjectTemplateHandler.SupportedConnectionTypes
                                        : descriptor.Id == nameof(ProjectType.WebResourceTs)
                                            ? WebResourceTsProjectTemplateHandler.SupportedConnectionTypes
                                            : descriptor.Id == nameof(ProjectType.UiTest)
                                                ? UiTestProjectTemplateHandler.SupportedConnectionTypes
                                                : descriptor.Id == nameof(ProjectType.SolutionPackager)
                                                    ? SolutionPackagerProjectTemplateHandler.SupportedConnectionTypes
                                                    : descriptor.Id == nameof(ProjectType.Report)
                                                        ? ReportProjectTemplateHandler.SupportedConnectionTypes
                                                        : ServerProjectTemplateHandler.SupportedConnectionTypes;
                    input.CrmConnection = ConnectionPrompter.Prompt(supportedTypes, args.Out);
                }
                // The Server template requires the Shared project (its
                // .csproj imports the Shared .projitems) — offer the Shared
                // scaffold when it is missing, the interactive counterpart
                // of the VSIX wizard's blocking "Please add Shared project"
                // message (the handler still refuses without it). The
                // Shared scaffold joins the same --solution when given.
                if (descriptor.Id == nameof(ProjectType.Server) && CanPrompt(args))
                {
                    var directory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : Path.GetFullPath(args.Out);
                    var workspace = string.IsNullOrWhiteSpace(args.Solution)
                        ? WorkspaceScanner.Scan(directory)
                        : File.Exists(args.Solution)
                            ? WorkspaceScanner.FromSolution(args.Solution, directory)
                            : WorkspaceScanner.Scan(directory);
                    if (string.IsNullOrEmpty(workspace.SharedProjectFile))
                    {
                        var sharedName = string.IsNullOrEmpty(workspace.SolutionName)
                            ? $"{input.ProjectName}.{ProjectType.Shared}"
                            : $"{workspace.SolutionName}.{ProjectType.Shared}";
                        if (AnsiConsole.Confirm($"No Shared project found. Scaffold [green]{sharedName}[/] now?", true))
                        {
                            var sharedResult = await ScaffoldingEngine.ScaffoldProjectAsync(new ProjectTemplateInput
                            {
                                TemplateId = nameof(ProjectType.Shared),
                                ProjectName = sharedName,
                                OutputDirectory = args.Out,
                                SolutionFile = args.Solution,
                                CrmConnection = input.CrmConnection,
                                Force = args.Force,
                                Offline = args.Offline,
                            });
                            WriteResult(sharedResult);
                            if (!sharedResult.Success)
                            {
                                throw new DevKitValidationException(string.Join(Environment.NewLine, sharedResult.Errors));
                            }
                        }
                    }
                }
                result = await ScaffoldingEngine.ScaffoldProjectAsync(input);
            }
            else
            {
                // Entity-driven item templates (LateBound) generate from
                // live entity metadata — there is no offline fallback: the
                // generated class is built from the entity's attributes.
                if (descriptor.RequiresConnection && args.Offline)
                {
                    throw new DevKitValidationException($"--offline: template '{descriptor.Id}' requires a Dataverse connection to read entity metadata. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                }
                if (descriptor.RequiresConnection)
                {
                    // Connected and interactive: pick the entity from the org
                    // (searchable, the CLI twin of the FormItem list). The
                    // metadata read once into the XrmHelper cache also feeds
                    // the codegen. Non-interactive runs pass --entity.
                    if (string.IsNullOrWhiteSpace(args.Entity) && args.ServiceClient != null && CanPrompt(args))
                    {
                        await new MetadataService(args.ServiceClient).ReadEntitiesMetadataAsync(EntityFilters.Attributes);
                        var schemas = XrmHelper.EntitiesMetadata.Select(x => x.SchemaName).OrderBy(x => x, StringComparer.OrdinalIgnoreCase).ToList();
                        args.Entity = AnsiConsole.Prompt(
                            new SelectionPrompt<string>()
                                .Title("Select an [green]entity[/] [grey](--entity)[/]:")
                                .PageSize(20)
                                .EnableSearch()
                                .AddChoices(schemas));
                    }
                }
                else if (string.IsNullOrWhiteSpace(args.Name) && CanPrompt(args))
                {
                    args.Name = AnsiConsole.Prompt(new TextPrompt<string>("[green]Name[/]:").AllowEmpty());
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
                    ServiceClient = args.ServiceClient,
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
        /// True when a kind-matching handler or manifest is registered for
        /// the template — the "Ready" column of 'devkit new list' tells
        /// users and AI agents which types scaffold today. The registry is
        /// scoped by kind, so project Test/UiTest/Report never light up
        /// their not-yet-ported item twins.
        /// </summary>
        private static bool IsReady(TemplateDescriptor descriptor)
        {
            return ScaffoldingEngine.FindHandler(descriptor.Kind, descriptor.Id) != null
                || TemplateManifests.TryGet(descriptor.Kind, descriptor.Id, out _);
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
