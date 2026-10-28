using DynamicsCrm.DevKit.Cli.Templates;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Shared.Templates.T4;
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
                // --solution is REQUIRED for every project template (aP
                // ruling): the scaffolded project registers in that
                // solution. The interactive prompt suggests the nearest
                // solution; non-interactive runs must pass it.
                if (string.IsNullOrWhiteSpace(args.Solution))
                {
                    if (!CanPrompt(args))
                    {
                        throw new DevKitValidationException("--solution: required for project templates — pass --solution <file.sln|.slnx>.");
                    }
                    var nearestSolution = FindNearestSolutionFile(string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : Path.GetFullPath(args.Out));
                    var solutionPrompt = new TextPrompt<string>("Solution [green]file[/] [grey](--solution)[/]:");
                    if (!string.IsNullOrEmpty(nearestSolution)) solutionPrompt.DefaultValue(nearestSolution);
                    args.Solution = AnsiConsole.Prompt(solutionPrompt);
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
                // The T4 items (Plugin first, I.4) render from the typed
                // values: work unit §5 allows full manual input offline
                // with a warning in the result.
                if (descriptor.RequiresConnection && args.Offline && descriptor.Id != ItemType.Plugin.ToString())
                {
                    throw new DevKitValidationException($"--offline: template '{descriptor.Id}' requires a Dataverse connection to read entity metadata. Run without --offline and pass --auth/--conn (or run from a folder with a project .env).");
                }
                // --project is REQUIRED for every item template (aP
                // ruling): the wizard always knows the project from the
                // Solution Explorer selection. The interactive prompt
                // suggests the nearest project; non-interactive runs must
                // pass it.
                if (string.IsNullOrWhiteSpace(args.Project))
                {
                    if (!CanPrompt(args))
                    {
                        throw new DevKitValidationException("--project: required for item templates — pass --project <name>.");
                    }
                    var nearestProject = FindNearestProjectName(string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : Path.GetFullPath(args.Out));
                    var projectPrompt = new TextPrompt<string>("Project [green]name[/] [grey](--project)[/]:");
                    if (!string.IsNullOrEmpty(nearestProject)) projectPrompt.DefaultValue(nearestProject);
                    args.Project = AnsiConsole.Prompt(projectPrompt);
                }
                // The named project resolves up front so the workspace scan
                // and the default output directory anchor there.
                {
                    var startDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : Path.GetFullPath(args.Out);
                    var projectDirectory = ResolveProjectDirectory(args.Project, startDirectory);
                    if (projectDirectory == null)
                    {
                        throw new DevKitValidationException($"--project '{args.Project}': project not found. Run 'devkit new' inside the project folder or check the name.");
                    }
                    if (string.IsNullOrWhiteSpace(args.Out))
                    {
                        args.Out = projectDirectory;
                    }
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
                var isPlugin = descriptor.Id == ItemType.Plugin.ToString();
                if (isPlugin)
                {
                    // The FormPlugin twin: entity → message → stage →
                    // execution → order → class name → custom template.
                    await PromptPluginItemAsync(args);
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
                    T4Path = args.T4,
                    ProjectName = args.Project,
                    RootNamespace = args.Namespace,
                    OutputDirectory = args.Out,
                    ServiceClient = args.ServiceClient,
                    // The host's T4 engine — the Shared handlers render
                    // through the ITextTransformer contract (I.4).
                    Transformer = new MonoTextTransformer(),
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

        /// <summary>
        /// The Plugin item prompt chain — the CLI twin of FormPlugin, in
        /// the dialog's own field order: entity → message (the entity's
        /// sdk messages) → stage → execution (PreValidation/PreOperation
        /// lock Synchronous) → class name (the FormPlugin suggestion) →
        /// custom T4 template. Every prompt is skipped when its flag is
        /// present; non-interactive runs fail on a missing required value
        /// instead of prompting. Order is not prompted (the dialog has no
        /// order field) — it comes from --order.
        /// </summary>
        private static async Task PromptPluginItemAsync(NewCommandArgs args)
        {
            var canPrompt = CanPrompt(args);

            if (string.IsNullOrWhiteSpace(args.Entity))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--entity: required for template 'Plugin'.");
                }
                if (args.ServiceClient != null)
                {
                    await new MetadataService(args.ServiceClient).ReadEntitiesMetadataAsync(EntityFilters.Entity);
                    var schemas = XrmHelper.EntitiesMetadata.Select(x => x.SchemaName).OrderBy(x => x, StringComparer.OrdinalIgnoreCase).ToList();
                    args.Entity = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select an [green]entity[/] [grey](--entity)[/]:")
                            .PageSize(20)
                            .EnableSearch()
                            .AddChoices(schemas));
                }
                else
                {
                    args.Entity = AnsiConsole.Prompt(new TextPrompt<string>("Entity [green]schema name[/] [grey](--entity)[/]:"));
                }
            }

            // The wizard lists the messages of the selected entity; offline
            // runs have no org to ask and type one instead.
            string schemaName;
            string logicalName;
            if (args.ServiceClient != null)
            {
                if (XrmHelper.EntitiesMetadata.Count == 0)
                {
                    await new MetadataService(args.ServiceClient).ReadEntitiesMetadataAsync(EntityFilters.Entity);
                }
                var metadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x =>
                    string.Equals(x.SchemaName, args.Entity, StringComparison.OrdinalIgnoreCase) ||
                    string.Equals(x.LogicalName, args.Entity, StringComparison.OrdinalIgnoreCase));
                if (metadata == null)
                {
                    throw new DevKitValidationException($"--entity '{args.Entity}': entity not found in the current instance.");
                }
                schemaName = metadata.SchemaName;
                logicalName = metadata.LogicalName;
            }
            else
            {
                schemaName = args.Entity;
                logicalName = args.Entity.ToLowerInvariant();
            }

            if (string.IsNullOrWhiteSpace(args.Message))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--message: required for template 'Plugin'.");
                }
                if (args.ServiceClient != null)
                {
                    var messages = await new MetadataService(args.ServiceClient).GetSdkMessagesAsync(logicalName);
                    args.Message = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select a [green]message[/] [grey](--message)[/]:")
                            .PageSize(20)
                            .EnableSearch()
                            .AddChoices(messages.Select(x => x.Name)));
                }
                else
                {
                    args.Message = AnsiConsole.Prompt(new TextPrompt<string>("Dataverse [green]message[/] [grey](--message)[/]:"));
                }
            }

            if (string.IsNullOrWhiteSpace(args.Stage))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--stage: required for template 'Plugin'. Use PreValidation, PreOperation or PostOperation.");
                }
                args.Stage = AnsiConsole.Prompt(
                    new SelectionPrompt<string>()
                        .Title("Select the [green]stage[/] [grey](--stage)[/]:")
                        .AddChoices("PreValidation", "PreOperation", "PostOperation"));
            }
            else if (!args.Stage.Equals("PreValidation", StringComparison.OrdinalIgnoreCase) &&
                     !args.Stage.Equals("PreOperation", StringComparison.OrdinalIgnoreCase) &&
                     !args.Stage.Equals("PostOperation", StringComparison.OrdinalIgnoreCase))
            {
                throw new DevKitValidationException($"--stage '{args.Stage}': invalid. Use PreValidation, PreOperation or PostOperation.");
            }

            if (!string.IsNullOrWhiteSpace(args.Execution) &&
                !args.Execution.Equals("Synchronous", StringComparison.OrdinalIgnoreCase) &&
                !args.Execution.Equals("Asynchronous", StringComparison.OrdinalIgnoreCase))
            {
                throw new DevKitValidationException($"--execution '{args.Execution}': invalid. Use Synchronous or Asynchronous.");
            }

            // FormPlugin locks the execution combo to Synchronous for
            // PreValidation/PreOperation; Asynchronous is PostOperation's
            // choice (prompted like the wizard's enabled combo).
            if (args.Stage.Equals("PreValidation", StringComparison.OrdinalIgnoreCase) ||
                args.Stage.Equals("PreOperation", StringComparison.OrdinalIgnoreCase))
            {
                if (args.Execution.Equals("Asynchronous", StringComparison.OrdinalIgnoreCase))
                {
                    throw new DevKitValidationException("--execution 'Asynchronous': requires stage PostOperation — PreValidation/PreOperation steps run Synchronous.");
                }
                args.Execution = "Synchronous";
            }
            else if (string.IsNullOrWhiteSpace(args.Execution))
            {
                if (canPrompt)
                {
                    args.Execution = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select the [green]execution mode[/] [grey](--execution)[/]:")
                            .AddChoices("Synchronous", "Asynchronous"));
                }
                else
                {
                    args.Execution = "Synchronous";
                }
            }

            // No order prompt — the FormPlugin carries no order field (the
            // wizard computes the registration order itself); the CLI takes
            // it from --order (default 1).

            if (string.IsNullOrWhiteSpace(args.Name))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--name: required for template 'Plugin' — the plugin class name.");
                }
                var suggestion = PluginItemTemplateHandler.SuggestClassName(args.Stage, schemaName, args.Message, args.Execution);
                args.Name = AnsiConsole.Prompt(new TextPrompt<string>("Class [green]name[/] [grey](--name)[/]:").DefaultValue(suggestion));
            }

            // The FormPlugin template combo: Default plus the custom
            // titles from DynamicsCrm.DevKit.Cli.json — only when a choice
            // actually exists and the flags did not already pick one.
            if (canPrompt && string.IsNullOrWhiteSpace(args.T4) && args.Template.Equals("Default", StringComparison.Ordinal))
            {
                var configDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : args.Out;
                var titles = T4TemplateResolver.GetCustomTemplateTitles(ItemType.Plugin, configDirectory);
                if (titles.Count > 0)
                {
                    args.Template = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select a [green]template[/] [grey](--template)[/]:")
                            .AddChoices(new[] { T4TemplateResolver.DefaultTemplateTitle }.Concat(titles)));
                }
            }
        }

        /// <summary>
        /// The nearest project name at or above the start directory — the
        /// suggested default of the required --project prompt (the CLI
        /// never guesses silently: the user confirms the suggestion).
        /// </summary>
        private static string FindNearestProjectName(string startDirectory)
        {
            var directory = new DirectoryInfo(Path.GetFullPath(startDirectory));
            while (directory != null)
            {
                var projectFile = Directory.GetFiles(directory.FullName, "*.csproj").FirstOrDefault() ??
                                  Directory.GetFiles(directory.FullName, "*.shproj").FirstOrDefault();
                if (projectFile != null) return Path.GetFileNameWithoutExtension(projectFile);
                directory = directory.Parent;
            }
            return null;
        }

        /// <summary>
        /// The nearest .slnx/.sln at or above the start directory — the
        /// suggested default of the required --solution prompt.
        /// </summary>
        private static string FindNearestSolutionFile(string startDirectory)
        {
            var directory = new DirectoryInfo(Path.GetFullPath(startDirectory));
            while (directory != null)
            {
                var solution = Directory.GetFiles(directory.FullName, "*.slnx").FirstOrDefault() ??
                               Directory.GetFiles(directory.FullName, "*.sln").FirstOrDefault();
                if (solution != null) return solution;
                directory = directory.Parent;
            }
            return null;
        }

        /// <summary>
        /// Locates the named project for --project: the walk up from the
        /// start directory first, then the whole solution tree (the same
        /// bin/obj exclusions the workspace scanner applies). Returns the
        /// project directory, or null when nothing matches.
        /// </summary>
        private static string ResolveProjectDirectory(string projectName, string startDirectory)
        {
            var directory = new DirectoryInfo(Path.GetFullPath(startDirectory));
            while (directory != null)
            {
                var match = Directory.GetFiles(directory.FullName, "*.csproj")
                    .Concat(Directory.GetFiles(directory.FullName, "*.shproj"))
                    .FirstOrDefault(path => string.Equals(Path.GetFileNameWithoutExtension(path), projectName, StringComparison.OrdinalIgnoreCase));
                if (match != null) return Path.GetDirectoryName(match);
                directory = directory.Parent;
            }

            directory = new DirectoryInfo(Path.GetFullPath(startDirectory));
            while (directory != null)
            {
                var solution = Directory.GetFiles(directory.FullName, "*.slnx").FirstOrDefault() ??
                               Directory.GetFiles(directory.FullName, "*.sln").FirstOrDefault();
                if (solution != null)
                {
                    var solutionMatch = Directory.GetFiles(directory.FullName, "*.csproj", SearchOption.AllDirectories)
                        .Concat(Directory.GetFiles(directory.FullName, "*.shproj", SearchOption.AllDirectories))
                        .Where(path => path.IndexOf("\\bin\\", StringComparison.OrdinalIgnoreCase) < 0 &&
                                       path.IndexOf("\\obj\\", StringComparison.OrdinalIgnoreCase) < 0)
                        .FirstOrDefault(path => string.Equals(Path.GetFileNameWithoutExtension(path), projectName, StringComparison.OrdinalIgnoreCase));
                    return solutionMatch != null ? Path.GetDirectoryName(solutionMatch) : null;
                }
                directory = directory.Parent;
            }
            return null;
        }

        /// <summary>
        /// Prompts fire on their own whenever the terminal is interactive
        /// and a required value is missing — there is no flag to force
        /// them (aP: the flow mirrors the VSIX dialog, which asks by
        /// itself). Redirected/plain runs never prompt: missing required
        /// values fail with clear errors instead.
        /// </summary>
        private static bool CanPrompt(NewCommandArgs args)
        {
            return !Console.IsInputRedirected && !SpectreLog.IsPlain;
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
