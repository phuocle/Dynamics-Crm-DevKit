using DynamicsCrm.DevKit.Cli.Templates;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using DynamicsCrm.DevKit.Shared.Templates.T4;
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
    /// Implementation of 'devkit new-item': scaffolds one DevKit ITEM
    /// template through the cross-platform ScaffoldingEngine into the
    /// required --project (aP ruling — the combined 'devkit new' mixed two
    /// argument sets and could not own its requirements). Interactive
    /// prompts fire on their own for the missing values, the Plugin chain
    /// following the FormPlugin field order.
    /// </summary>
    internal static class TaskNewItem
    {
        public static async Task RunAsync(NewItemCommandArgs args)
        {
            TemplateHandlers.RegisterAll();

            var list = (args.List ?? string.Empty).Trim();
            if (list.Length > 0)
            {
                if (!list.Equals("list", StringComparison.OrdinalIgnoreCase))
                {
                    throw new DevKitValidationException($"'{args.List}': unknown — pass 'list' to show the item templates, or omit it to scaffold.");
                }
                await TaskNewShared.ListAsync(TemplateKind.Item);
                return;
            }

            // The gate keeper (aP): every missing required argument reported
            // in ONE error — "required arguments missing: A, B, C" — so an
            // AI agent or a human can fix them in a single rerun. An
            // interactive terminal is never stopped here: the wizard asks
            // for the missing values one dialog step at a time.
            var missing = new List<string>();
            if (string.IsNullOrWhiteSpace(args.Type))
            {
                missing.Add("--type <template-id>");
            }
            else
            {
                var typeDescriptor = TemplateCatalog.Find(args.Type, TemplateKind.Item);
                if (typeDescriptor?.Id == ItemType.Plugin.ToString())
                {
                    if (string.IsNullOrWhiteSpace(args.Entity)) missing.Add("--entity <schema-name>");
                    if (string.IsNullOrWhiteSpace(args.Message)) missing.Add("--message <message>");
                    if (string.IsNullOrWhiteSpace(args.Stage)) missing.Add("--stage <PreValidation|PreOperation|PostOperation>");
                    if (string.IsNullOrWhiteSpace(args.Name)) missing.Add("--name <class-name>");
                }
                else if (typeDescriptor != null &&
                         (typeDescriptor.Id == ItemType.LateBound.ToString() ||
                          typeDescriptor.Id == ItemType.JsForm.ToString() ||
                          typeDescriptor.Id == ItemType.JsWebApi.ToString()) &&
                         string.IsNullOrWhiteSpace(args.Entity))
                {
                    missing.Add("--entity <schema-name>");
                }
            }
            if (string.IsNullOrWhiteSpace(args.Project)) missing.Add("--project <project-name>");
            if (missing.Count > 0 && !TaskNewShared.CanPrompt())
            {
                throw new DevKitValidationException($"required arguments missing: {string.Join(", ", missing)}.");
            }

            if (string.IsNullOrWhiteSpace(args.Type))
            {
                args.Type = TaskNewShared.PromptTemplate(TemplateKind.Item);
            }

            var descriptor = TemplateCatalog.Find(args.Type, TemplateKind.Item);
            if (descriptor == null)
            {
                throw new DevKitValidationException($"--type '{args.Type}': unknown item template. Run 'devkit new-item list' to see all templates.");
            }

            // The named project resolves up front so the workspace scan and
            // the default output directory anchor there.
            if (string.IsNullOrWhiteSpace(args.Project) && TaskNewShared.CanPrompt())
            {
                var nearestProject = FindNearestProjectName(string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : Path.GetFullPath(args.Out));
                var projectPrompt = new TextPrompt<string>("Project [green]name[/] [grey](--project)[/]:");
                if (!string.IsNullOrEmpty(nearestProject)) projectPrompt.DefaultValue(nearestProject);
                args.Project = AnsiConsole.Prompt(projectPrompt);
            }
            {
                var startDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : Path.GetFullPath(args.Out);
                var projectDirectory = ResolveProjectDirectory(args.Project, startDirectory);
                if (projectDirectory == null)
                {
                    throw new DevKitValidationException($"--project '{args.Project}': project not found. Run 'devkit new-item' inside the project folder or check the name.");
                }
                if (string.IsNullOrWhiteSpace(args.Out))
                {
                    args.Out = projectDirectory;
                }
            }

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
            if (descriptor.RequiresConnection)
            {
                // Connected and interactive: pick the entity from the org
                // (searchable, the CLI twin of the FormItem list). The
                // metadata read once into the XrmHelper cache also feeds
                // the codegen. Non-interactive runs pass --entity.
                if (string.IsNullOrWhiteSpace(args.Entity) && args.ServiceClient != null && TaskNewShared.CanPrompt())
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
            else if (string.IsNullOrWhiteSpace(args.Name) && TaskNewShared.CanPrompt())
            {
                args.Name = AnsiConsole.Prompt(new TextPrompt<string>("[green]Name[/]:").AllowEmpty());
            }
            var isPlugin = descriptor.Id == ItemType.Plugin.ToString();
            if (isPlugin)
            {
                // The FormPlugin twin: entity → message → stage →
                // execution → class name → custom template.
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
            var result = await ScaffoldingEngine.ScaffoldItemAsync(input);
            TaskNewShared.WriteResult(result);
            if (!result.Success)
            {
                throw new DevKitValidationException(string.Join(Environment.NewLine, result.Errors));
            }
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
        private static async Task PromptPluginItemAsync(NewItemCommandArgs args)
        {
            var canPrompt = TaskNewShared.CanPrompt();

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
        /// suggested default of the interactive --project prompt.
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
    }
}
