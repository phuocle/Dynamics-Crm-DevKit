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
                else if (typeDescriptor?.Id == ItemType.CustomAction.ToString())
                {
                    if (string.IsNullOrWhiteSpace(args.Entity)) missing.Add("--entity <schema-name|none>");
                    if (string.IsNullOrWhiteSpace(args.Message)) missing.Add("--message <custom-action>");
                    if (string.IsNullOrWhiteSpace(args.Stage)) missing.Add("--stage <PreValidation|PreOperation|PostOperation>");
                    if (string.IsNullOrWhiteSpace(args.Name)) missing.Add("--name <class-name>");
                }
                else if (typeDescriptor?.Id == ItemType.CustomApi.ToString())
                {
                    if (string.IsNullOrWhiteSpace(args.Entity)) missing.Add("--entity <schema-name|none>");
                    if (string.IsNullOrWhiteSpace(args.Message)) missing.Add("--message <custom-api>");
                    if (string.IsNullOrWhiteSpace(args.Name)) missing.Add("--name <class-name>");
                }
                else if (typeDescriptor?.Id == ItemType.Workflow.ToString())
                {
                    // FormPlugin.WorkflowItem collapses every org combo —
                    // the class name is the only dialog input.
                    if (string.IsNullOrWhiteSpace(args.Name)) missing.Add("--name <class-name>");
                }
                else if (typeDescriptor?.Id == ItemType.DataProvider.ToString())
                {
                    // FormPlugin.DataProviderItem collapses the class,
                    // message, stage and execution fields — the data source
                    // combo (the relabeled entity list) is the only input.
                    if (string.IsNullOrWhiteSpace(args.Datasource)) missing.Add("--datasource <data-source-logical-name>");
                }
                else if (typeDescriptor?.Id == ItemType.Test.ToString())
                {
                    // FormPlugin.TestItem: candidates on the test-plugin
                    // combo (the scan of the test project's ProjectReference
                    // folders) make the SELECTION the only requirement —
                    // the class textbox auto-fills from the picked candidate
                    // (ApplySelectedTestPluginToForm). An empty scan is the
                    // wizard's empty combo: the class name is typed. A
                    // --test-target given up front supplies the default
                    // class itself, so nothing is required from the gate.
                    if (string.IsNullOrWhiteSpace(args.TestTarget) && !string.IsNullOrWhiteSpace(args.Project))
                    {
                        var startDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : Path.GetFullPath(args.Out);
                        var testProjectDirectory = ResolveProjectDirectory(args.Project, startDirectory);
                        if (testProjectDirectory != null)
                        {
                            var testProjectFile = Directory.GetFiles(testProjectDirectory, "*.csproj").FirstOrDefault() ??
                                                  Directory.GetFiles(testProjectDirectory, "*.shproj").FirstOrDefault();
                            if (testProjectFile != null)
                            {
                                var candidates = await PluginTestDiscovery.GetTestCandidatesAsync(testProjectFile);
                                if (candidates.Count > 0)
                                {
                                    missing.Add("--test-target <plugin-or-workflow-full-class-name>");
                                }
                                else if (string.IsNullOrWhiteSpace(args.Name))
                                {
                                    missing.Add("--name <test-class-name>");
                                }
                            }
                            else if (string.IsNullOrWhiteSpace(args.Name))
                            {
                                missing.Add("--name <test-class-name>");
                            }
                        }
                        else if (string.IsNullOrWhiteSpace(args.Name))
                        {
                            missing.Add("--name <test-class-name>");
                        }
                    }
                }
                else if (typeDescriptor?.Id == ItemType.UiTest.ToString())
                {
                    // FormPlugin.UiTestItem collapses every org combo —
                    // the class name is the only dialog input.
                    if (string.IsNullOrWhiteSpace(args.Name)) missing.Add("--name <class-name>");
                }
                else if (typeDescriptor?.Id == ItemType.ResourceString.ToString())
                {
                    // FormPlugin.ResourceStringItem: the relabeled entity
                    // combo ("Language", filled on connect with the
                    // provisioned languages) holds the LCID and the
                    // relabeled class textbox ("Resource") holds the
                    // resource base name — the dialog's two fields, class
                    // last.
                    if (string.IsNullOrWhiteSpace(args.Language)) missing.Add("--language <lcid>");
                    if (string.IsNullOrWhiteSpace(args.Name)) missing.Add("--name <class-name>");
                }
                else if (typeDescriptor?.Id == ItemType.BatFile.ToString())
                {
                    // FormPlugin.BatFileItem: the relabeled entity combo
                    // ("File", the six static utility files) is the
                    // dialog's only input — the pick names the output file
                    // itself (the wizard's $batfilename$).
                    if (string.IsNullOrWhiteSpace(args.Name)) missing.Add("--name <utility-file>");
                }
                else if (typeDescriptor != null &&
                         (typeDescriptor.Id == ItemType.LateBound.ToString() ||
                          typeDescriptor.Id == ItemType.JsForm.ToString() ||
                          typeDescriptor.Id == ItemType.JsWebApi.ToString() ||
                          typeDescriptor.Id == ItemType.TsForm.ToString() ||
                          typeDescriptor.Id == ItemType.TsWebApi.ToString()) &&
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

            // Every add is connected (aP ruling 2026-10-29 — the command
            // connects before this task runs, like the VSIX wizard); the
            // engine keeps its offline path for tests/MCP only.
            var isPlugin = descriptor.Id == ItemType.Plugin.ToString();
            var isCustomAction = descriptor.Id == ItemType.CustomAction.ToString();
            var isCustomApi = descriptor.Id == ItemType.CustomApi.ToString();
            var isWorkflow = descriptor.Id == ItemType.Workflow.ToString();
            var isDataProvider = descriptor.Id == ItemType.DataProvider.ToString();
            var isTest = descriptor.Id == ItemType.Test.ToString();
            var isUiTest = descriptor.Id == ItemType.UiTest.ToString();
            var isResourceString = descriptor.Id == ItemType.ResourceString.ToString();
            var isBatFile = descriptor.Id == ItemType.BatFile.ToString();
            if (descriptor.RequiresConnection)
            {
                // Connected and interactive: pick the entity from the org
                // (searchable, the CLI twin of the FormItem list). The
                // metadata read once into the XrmHelper cache also feeds
                // the codegen. Non-interactive runs pass --entity.
                // CustomAction and CustomApi are excluded: their dialog
                // inserts the "None" choice at the top, so their chains
                // own the entity prompt. Workflow is excluded too: its
                // dialog collapses the entity combo (no org input at all).
                // DataProvider is excluded as well: its dialog relabels
                // the combo "Data Source" and fills it with the provider's
                // virtual tables, not the entities. Test is excluded for
                // the same reason: the dialog collapses the entity combo
                // (the entity rides in with the test-plugin candidate).
                // ResourceString is excluded too: its dialog relabels the
                // combo "Language" and fills it with the org's provisioned
                // languages, not the entities.
                if (!isCustomAction && !isCustomApi && !isWorkflow && !isDataProvider && !isTest && !isResourceString &&
                    string.IsNullOrWhiteSpace(args.Entity) && args.ServiceClient != null && TaskNewShared.CanPrompt())
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
            else if (!isUiTest && !isBatFile && string.IsNullOrWhiteSpace(args.Name) && TaskNewShared.CanPrompt())
            {
                // UiTest is excluded: its chain owns the class-name prompt
                // (the FormPlugin twin — the dialog's collapsed combos make
                // the class the only input). BatFile is excluded too: its
                // chain owns the file prompt (the dialog's relabeled
                // "File" combo — a selection, not a typed name).
                args.Name = AnsiConsole.Prompt(new TextPrompt<string>("[green]Name[/]:").AllowEmpty());
            }
            if (isPlugin)
            {
                // The FormPlugin twin: entity → message → stage →
                // execution → class name → custom template.
                await PromptPluginItemAsync(args);
            }
            else if (isCustomAction)
            {
                // The FormPlugin twin for CustomAction: entity (the
                // wizard's None choice first) → custom action → stage →
                // execution lock → class name → custom template. No
                // execution prompt difference: the dialog locks
                // Synchronous for PreValidation/PreOperation exactly like
                // Plugin.
                await PromptCustomActionItemAsync(args);
            }
            else if (isCustomApi)
            {
                // The FormPlugin twin for CustomApi: entity (the wizard's
                // None choice first) → custom api → class name → custom
                // template. No stage or execution — the dialog hides both
                // combos (a custom api step has no stage or execution
                // mode) and the class suggestion is {message}Request.
                await PromptCustomApiItemAsync(args);
            }
            else if (isWorkflow)
            {
                // The FormPlugin twin for Workflow: class name (the only
                // dialog input — the wizard collapses the entity, message,
                // stage and execution combos and reads nothing from the
                // org) → custom T4 template.
                await PromptWorkflowItemAsync(args);
            }
            else if (isDataProvider)
            {
                // The FormPlugin twin for DataProvider: data source (the
                // dialog's relabeled entity combo, filled from the
                // provider's virtual tables) → nothing else — the dialog
                // collapses the class, message, stage and execution
                // fields and hides the template panel.
                await PromptDataProviderItemAsync(args);
            }
            else if (isTest)
            {
                // The FormPlugin twin for Test: the test-plugin combo (the
                // scan of the test project's ProjectReference folders)
                // when it has candidates, then the class name (auto-filled
                // with the picked class), then the custom T4 template —
                // the dialog's entity, message, stage and execution
                // combos are collapsed and their values ride in with the
                // picked candidate (resolved by the handler).
                await PromptTestItemAsync(args);
            }
            else if (isUiTest)
            {
                // The FormPlugin twin for UiTest: class name (the only
                // dialog input — the wizard collapses the entity, message,
                // stage and execution combos and reads nothing from the
                // org; the preview label shows the generated class name)
                // → custom T4 template.
                await PromptUiTestItemAsync(args);
            }
            else if (isResourceString)
            {
                // The FormPlugin twin for ResourceString: language (the
                // dialog's relabeled entity combo, filled from the org's
                // provisioned languages) → class name (the dialog's
                // relabeled "Resource" textbox). The dialog hides the
                // message, stage and execution combos and the template
                // panel — no message, stage, execution, order or custom
                // template prompt.
                await PromptResourceStringItemAsync(args);
            }
            else if (isBatFile)
            {
                // The FormPlugin twin for BatFile: file (the dialog's
                // relabeled entity combo, the six static utility files —
                // the wizard's combo is static, no org call) and nothing
                // else. The dialog hides the message, stage and execution
                // combos, the class textbox and the template panel — no
                // message, stage, execution, class, order or custom
                // template prompt.
                await PromptBatFileItemAsync(args);
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
                TestTarget = args.TestTarget,
                Language = args.Language,
                TemplateTitle = args.Template,
                T4Path = args.T4,
                ProjectName = args.Project,
                RootNamespace = args.Namespace,
                OutputDirectory = args.Out,
                ServiceClient = args.ServiceClient,
                CrmConnection = args.CrmConnection,
                // The host's T4 engine — the Shared handlers render
                // through the ITextTransformer contract (I.4).
                Transformer = new MonoTextTransformer(),
                Force = args.Force,
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
        /// The CustomAction item prompt chain — the CLI twin of FormPlugin
        /// with ItemType.CustomAction: entity (the wizard inserts "None"
        /// at the top — an unbound custom action registration) → custom
        /// action (MetadataService.GetCustomActionsAsync, the dialog's own
        /// message combo) → stage → execution (PreValidation/PreOperation
        /// lock Synchronous) → class name (the FormPlugin suggestion) →
        /// custom T4 template. Every prompt is skipped when its flag is
        /// present; non-interactive runs fail on a missing required value
        /// instead of prompting. Order is not prompted (the dialog has no
        /// order field) — it comes from --order.
        /// </summary>
        private static async Task PromptCustomActionItemAsync(NewItemCommandArgs args)
        {
            var canPrompt = TaskNewShared.CanPrompt();

            if (string.IsNullOrWhiteSpace(args.Entity))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--entity: required for template 'CustomAction' — a schema name or 'none' for an unbound custom action.");
                }
                if (args.ServiceClient != null)
                {
                    await new MetadataService(args.ServiceClient).ReadEntitiesMetadataAsync(EntityFilters.Entity);
                    // FormPlugin.Connection_Connected: the entities ordered
                    // by logical name with "None" inserted at the top.
                    var schemas = XrmHelper.EntitiesMetadata
                        .Select(x => x.LogicalName)
                        .OrderBy(x => x, StringComparer.OrdinalIgnoreCase)
                        .ToList();
                    args.Entity = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select an [green]entity[/] [grey](--entity, 'None' for an unbound custom action)[/]:")
                            .PageSize(20)
                            .EnableSearch()
                            .AddChoices(new[] { CustomActionItemTemplateHandler.NoneSchemaName }.Concat(schemas)));
                }
                else
                {
                    args.Entity = AnsiConsole.Prompt(new TextPrompt<string>("Entity [green]schema name[/] [grey](--entity, 'none' for an unbound custom action)[/]:"));
                }
            }

            // The wizard's None choice: SchemaName "None", LogicalName
            // "none" — the unbound registration. Any other value resolves
            // through the org metadata (connected) or is typed and trusted
            // (offline).
            string schemaName;
            string logicalName;
            if (CustomActionItemTemplateHandler.IsNoneEntity(args.Entity))
            {
                schemaName = CustomActionItemTemplateHandler.NoneSchemaName;
                logicalName = CustomActionItemTemplateHandler.NoneLogicalName;
            }
            else if (args.ServiceClient != null)
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
                    throw new DevKitValidationException("--message: required for template 'CustomAction'.");
                }
                if (args.ServiceClient != null)
                {
                    var actions = logicalName == CustomActionItemTemplateHandler.NoneLogicalName
                        ? await new MetadataService(args.ServiceClient).GetCustomActionsAsync()
                        : await new MetadataService(args.ServiceClient).GetCustomActionsAsync(logicalName);
                    args.Message = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select a [green]custom action[/] [grey](--message)[/]:")
                            .PageSize(20)
                            .EnableSearch()
                            .AddChoices(actions.Select(x => x.Name)));
                }
                else
                {
                    args.Message = AnsiConsole.Prompt(new TextPrompt<string>("Dataverse [green]custom action[/] [grey](--message)[/]:"));
                }
            }

            if (string.IsNullOrWhiteSpace(args.Stage))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--stage: required for template 'CustomAction'. Use PreValidation, PreOperation or PostOperation.");
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
            // PreValidation/PreOperation (CustomAction included); the
            // Asynchronous choice is PostOperation's (prompted like the
            // wizard's enabled combo).
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
                    throw new DevKitValidationException("--name: required for template 'CustomAction' — the custom action class name.");
                }
                var suggestion = CustomActionItemTemplateHandler.SuggestClassName(args.Stage, schemaName, args.Message, args.Execution);
                args.Name = AnsiConsole.Prompt(new TextPrompt<string>("Class [green]name[/] [grey](--name)[/]:").DefaultValue(suggestion));
            }

            // The FormPlugin template combo: Default plus the custom
            // titles from DynamicsCrm.DevKit.Cli.json — only when a choice
            // actually exists and the flags did not already pick one.
            if (canPrompt && string.IsNullOrWhiteSpace(args.T4) && args.Template.Equals("Default", StringComparison.Ordinal))
            {
                var configDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : args.Out;
                var titles = T4TemplateResolver.GetCustomTemplateTitles(ItemType.CustomAction, configDirectory);
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
        /// The CustomApi item prompt chain — the CLI twin of FormPlugin
        /// with ItemType.CustomApi: entity (the wizard inserts "None" at
        /// the top — an unbound custom api registration) → custom api
        /// (MetadataService.GetCustomApisAsync, the dialog's own message
        /// combo — one call for the bound entity and "none") → class name
        /// (the FormPlugin suggestion {message}Request) → custom T4
        /// template. No stage or execution prompts: the dialog hides both
        /// combos — a custom api step has no stage or execution mode.
        /// Every prompt is skipped when its flag is present; non-
        /// interactive runs fail on a missing required value instead of
        /// prompting. Order is not prompted (the dialog has no order
        /// field) — it comes from --order.
        /// </summary>
        private static async Task PromptCustomApiItemAsync(NewItemCommandArgs args)
        {
            var canPrompt = TaskNewShared.CanPrompt();

            if (string.IsNullOrWhiteSpace(args.Entity))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--entity: required for template 'CustomApi' — a schema name or 'none' for an unbound custom api.");
                }
                if (args.ServiceClient != null)
                {
                    await new MetadataService(args.ServiceClient).ReadEntitiesMetadataAsync(EntityFilters.Entity);
                    // FormPlugin.Connection_Connected: the entities ordered
                    // by logical name with "None" inserted at the top.
                    var schemas = XrmHelper.EntitiesMetadata
                        .Select(x => x.LogicalName)
                        .OrderBy(x => x, StringComparer.OrdinalIgnoreCase)
                        .ToList();
                    args.Entity = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select an [green]entity[/] [grey](--entity, 'None' for an unbound custom api)[/]:")
                            .PageSize(20)
                            .EnableSearch()
                            .AddChoices(new[] { CustomApiItemTemplateHandler.NoneSchemaName }.Concat(schemas)));
                }
                else
                {
                    args.Entity = AnsiConsole.Prompt(new TextPrompt<string>("Entity [green]schema name[/] [grey](--entity, 'none' for an unbound custom api)[/]:"));
                }
            }

            // The wizard's None choice: SchemaName "None", LogicalName
            // "none" — the unbound registration. Any other value resolves
            // through the org metadata (connected) or is typed and trusted
            // (offline).
            string logicalName;
            if (CustomApiItemTemplateHandler.IsNoneEntity(args.Entity))
            {
                logicalName = CustomApiItemTemplateHandler.NoneLogicalName;
            }
            else if (args.ServiceClient != null)
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
                logicalName = metadata.LogicalName;
            }
            else
            {
                logicalName = args.Entity.ToLowerInvariant();
            }

            if (string.IsNullOrWhiteSpace(args.Message))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--message: required for template 'CustomApi'.");
                }
                if (args.ServiceClient != null)
                {
                    // FormPlugin fills the message combo with one call —
                    // GetCustomApisAsync handles the "none" unbound case
                    // itself (boundentitylogicalname null).
                    var apis = await new MetadataService(args.ServiceClient).GetCustomApisAsync(logicalName);
                    args.Message = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select a [green]custom api[/] [grey](--message)[/]:")
                            .PageSize(20)
                            .EnableSearch()
                            .AddChoices(apis.Select(x => x.Name)));
                }
                else
                {
                    args.Message = AnsiConsole.Prompt(new TextPrompt<string>("Dataverse [green]custom api[/] [grey](--message)[/]:"));
                }
            }

            if (string.IsNullOrWhiteSpace(args.Name))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--name: required for template 'CustomApi' — the custom api class name.");
                }
                var suggestion = CustomApiItemTemplateHandler.SuggestClassName(args.Message);
                args.Name = AnsiConsole.Prompt(new TextPrompt<string>("Class [green]name[/] [grey](--name)[/]:").DefaultValue(suggestion));
            }

            // The FormPlugin template combo: Default plus the custom
            // titles from DynamicsCrm.DevKit.Cli.json — only when a choice
            // actually exists and the flags did not already pick one.
            if (canPrompt && string.IsNullOrWhiteSpace(args.T4) && args.Template.Equals("Default", StringComparison.Ordinal))
            {
                var configDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : args.Out;
                var titles = T4TemplateResolver.GetCustomTemplateTitles(ItemType.CustomApi, configDirectory);
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
        /// The Workflow item prompt chain — the CLI twin of FormPlugin
        /// with ItemType.Workflow: class name (the only dialog input —
        /// the wizard collapses the entity, message, stage and execution
        /// combos, so nothing is read from the org) → custom T4 template.
        /// The dialog carries no class suggestion for a workflow (no
        /// combo drives UpdateClassName), so the prompt starts empty.
        /// Order is not prompted (the dialog has no order field) — it
        /// comes from --order.
        /// </summary>
        private static async Task PromptWorkflowItemAsync(NewItemCommandArgs args)
        {
            var canPrompt = TaskNewShared.CanPrompt();

            if (string.IsNullOrWhiteSpace(args.Name))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--name: required for template 'Workflow' — the workflow class name.");
                }
                args.Name = AnsiConsole.Prompt(new TextPrompt<string>("Class [green]name[/] [grey](--name)[/]:"));
            }

            // The FormPlugin template combo: Default plus the custom
            // titles from DynamicsCrm.DevKit.Cli.json — only when a choice
            // actually exists and the flags did not already pick one.
            if (canPrompt && string.IsNullOrWhiteSpace(args.T4) && args.Template.Equals("Default", StringComparison.Ordinal))
            {
                var configDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : args.Out;
                var titles = T4TemplateResolver.GetCustomTemplateTitles(ItemType.Workflow, configDirectory);
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
        /// The DataProvider item prompt chain — the CLI twin of FormPlugin
        /// with ItemType.DataProvider: data source (the dialog's relabeled
        /// entity combo, filled from
        /// MetadataService.GetAllDataSourceAsync — the virtual tables
        /// backed by the DevKit data provider) and nothing else. The
        /// dialog collapses the class, message, stage and execution
        /// fields (the five classes are named Create, Update, Delete,
        /// Retrieve and RetrieveMultiple in the templates themselves) and
        /// hides the template panel, so there is no class, order or
        /// template prompt. A --datasource given up front is verified
        /// against the org list like the Plugin entity lookup.
        /// </summary>
        private static async Task PromptDataProviderItemAsync(NewItemCommandArgs args)
        {
            var canPrompt = TaskNewShared.CanPrompt();

            if (string.IsNullOrWhiteSpace(args.Datasource))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--datasource: required for template 'DataProvider' — the virtual table data source logical name.");
                }
                if (args.ServiceClient != null)
                {
                    var dataSources = await new MetadataService(args.ServiceClient).GetAllDataSourceAsync();
                    if (dataSources.Count == 0)
                    {
                        throw new DevKitValidationException("--datasource: no data source found in the current instance — no virtual table is backed by the DevKit data provider.");
                    }
                    args.Datasource = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select a [green]data source[/] [grey](--datasource)[/]:")
                            .PageSize(20)
                            .EnableSearch()
                            .AddChoices(dataSources.Select(x => x.LogicalName)));
                }
                else
                {
                    args.Datasource = AnsiConsole.Prompt(new TextPrompt<string>("Data source [green]logical name[/] [grey](--datasource)[/]:"));
                }
            }
            else if (args.ServiceClient != null)
            {
                // The wizard's combo only offers the provider's virtual
                // tables — a flag value resolves through the same list.
                var dataSources = await new MetadataService(args.ServiceClient).GetAllDataSourceAsync();
                var match = dataSources.FirstOrDefault(x => string.Equals(x.LogicalName, args.Datasource, StringComparison.OrdinalIgnoreCase));
                if (match == null)
                {
                    throw new DevKitValidationException($"--datasource '{args.Datasource}': data source not found in the current instance.");
                }
                args.Datasource = match.LogicalName;
            }
        }

        /// <summary>
        /// The Test item prompt chain — the CLI twin of FormPlugin with
        /// ItemType.Test: the test-plugin combo (the scan of the test
        /// project's ProjectReference folders — PluginTestDiscovery, the
        /// wizard's own loader) when it has candidates, then the class
        /// name (auto-filled with the picked class name, its trailing
        /// Test stripped by the handler), then the custom T4 template.
        /// The dialog's entity, message, stage and execution combos are
        /// collapsed — their values ride in with the picked candidate and
        /// the handler takes them from the same scan; nothing is read
        /// from the org (the scan is file-system only). Order is not
        /// prompted (the dialog has no order field) — it comes from
        /// --order.
        /// </summary>
        private static async Task PromptTestItemAsync(NewItemCommandArgs args)
        {
            var canPrompt = TaskNewShared.CanPrompt();

            var startDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : Path.GetFullPath(args.Out);
            var testProjectDirectory = ResolveProjectDirectory(args.Project, startDirectory);
            var testProjectFile = testProjectDirectory != null
                ? Directory.GetFiles(testProjectDirectory, "*.csproj").FirstOrDefault() ??
                  Directory.GetFiles(testProjectDirectory, "*.shproj").FirstOrDefault()
                : null;
            var candidates = testProjectFile != null
                ? await PluginTestDiscovery.GetTestCandidatesAsync(testProjectFile)
                : new List<PluginTestCandidate>();

            if (candidates.Count > 0)
            {
                // The flag resolution scans EVERY testable class (an
                // existing {ClassName}Test only leaves the wizard's combo,
                // it never blocks a --test-target rerun).
                var resolvable = testProjectFile != null
                    ? await PluginTestDiscovery.GetAllTestCandidatesAsync(testProjectFile)
                    : candidates;

                if (string.IsNullOrWhiteSpace(args.TestTarget))
                {
                    if (!canPrompt)
                    {
                        throw new DevKitValidationException("--test-target: required for template 'Test' — the full class name of the plugin or workflow to test.");
                    }
                    // The wizard auto-selects the first candidate and
                    // searches by display name.
                    args.TestTarget = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select the [green]plugin or workflow to test[/] [grey](--test-target)[/]:")
                            .PageSize(20)
                            .EnableSearch()
                            .AddChoices(candidates.Select(x => x.DisplayName)));
                    args.TestTarget = candidates.First(x => x.DisplayName == args.TestTarget).FullClassName;
                }
                else
                {
                    // A flag value resolves through the same scan like the
                    // Plugin entity lookup — the wizard's combo only
                    // offers the scanned candidates.
                    var named = resolvable.FirstOrDefault(x => string.Equals(x.FullClassName, args.TestTarget, StringComparison.OrdinalIgnoreCase));
                    if (named == null)
                    {
                        throw new DevKitValidationException($"--test-target '{args.TestTarget}': not found among the plugin/workflow classes of the project references.");
                    }
                    args.TestTarget = named.FullClassName;
                }

                if (string.IsNullOrWhiteSpace(args.Name))
                {
                    // FormPlugin.ApplySelectedTestPluginToForm: the class
                    // textbox auto-fills with the picked class name —
                    // interactive runs prompt with the same default,
                    // non-interactive runs take it directly.
                    var selected = resolvable.First(x => string.Equals(x.FullClassName, args.TestTarget, StringComparison.OrdinalIgnoreCase));
                    if (!canPrompt)
                    {
                        args.Name = selected.SuggestedTestClassBaseName;
                    }
                    else
                    {
                        args.Name = AnsiConsole.Prompt(new TextPrompt<string>("Class [green]name[/] [grey](--name)[/]:").DefaultValue(selected.SuggestedTestClassBaseName));
                    }
                }
            }
            else if (string.IsNullOrWhiteSpace(args.Name))
            {
                // The wizard's empty combo: the typed class name is the
                // only input.
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--name: required for template 'Test' — the test class name.");
                }
                args.Name = AnsiConsole.Prompt(new TextPrompt<string>("Class [green]name[/] [grey](--name)[/]:"));
            }

            // The FormPlugin template combo: Default plus the custom
            // titles from DynamicsCrm.DevKit.Cli.json — only when a choice
            // actually exists and the flags did not already pick one.
            if (canPrompt && string.IsNullOrWhiteSpace(args.T4) && args.Template.Equals("Default", StringComparison.Ordinal))
            {
                var configDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : args.Out;
                var titles = T4TemplateResolver.GetCustomTemplateTitles(ItemType.Test, configDirectory);
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
        /// The UiTest item prompt chain — the CLI twin of FormPlugin with
        /// ItemType.UiTest: class name (the only dialog input — the
        /// wizard collapses the entity, message, stage and execution
        /// combos, so nothing is read from the org; the dialog carries no
        /// class suggestion, the preview label just shows the generated
        /// class name) → custom T4 template. Order is not prompted (the
        /// dialog has no order field) — it comes from --order.
        /// </summary>
        private static async Task PromptUiTestItemAsync(NewItemCommandArgs args)
        {
            var canPrompt = TaskNewShared.CanPrompt();

            if (string.IsNullOrWhiteSpace(args.Name))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--name: required for template 'UiTest' — the UI test class name.");
                }
                args.Name = AnsiConsole.Prompt(new TextPrompt<string>("Class [green]name[/] [grey](--name)[/]:"));
            }

            // The FormPlugin template combo: Default plus the custom
            // titles from DynamicsCrm.DevKit.Cli.json — only when a choice
            // actually exists and the flags did not already pick one.
            if (canPrompt && string.IsNullOrWhiteSpace(args.T4) && args.Template.Equals("Default", StringComparison.Ordinal))
            {
                var configDirectory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : args.Out;
                var titles = T4TemplateResolver.GetCustomTemplateTitles(ItemType.UiTest, configDirectory);
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
        /// The ResourceString item prompt chain — the CLI twin of FormPlugin
        /// with ItemType.ResourceString: language (the dialog's relabeled
        /// entity combo, filled from
        /// MetadataService.GetProvisionedLanguagesAsync — the org's
        /// provisioned languages, the XrmEntity LogicalName being the LCID)
        /// → class name (the dialog's relabeled "Resource" textbox). The
        /// dialog hides the
        /// message, stage and execution combos and the template panel, so
        /// there is no message, stage, execution, order or template prompt.
        /// A --language given up front is verified against the org list
        /// like the Plugin entity lookup; offline runs type it. The class
        /// carries no suggestion (no combo drives UpdateClassName) — the
        /// prompt starts empty.
        /// </summary>
        private static async Task PromptResourceStringItemAsync(NewItemCommandArgs args)
        {
            var canPrompt = TaskNewShared.CanPrompt();

            if (string.IsNullOrWhiteSpace(args.Language))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--language: required for template 'ResourceString' — the LCID of a language provisioned in the instance (e.g. 1033).");
                }
                if (args.ServiceClient != null)
                {
                    var languages = await new MetadataService(args.ServiceClient).GetProvisionedLanguagesAsync();
                    if (languages.Count == 0)
                    {
                        throw new DevKitValidationException("--language: no provisioned language found in the current instance.");
                    }
                    // FormPlugin.Connection_Connected: the combo displays
                    // the language name (XrmEntity SchemaName) and carries
                    // the LCID (LogicalName) as the wizard's $LanguageCode$
                    // value.
                    var selected = AnsiConsole.Prompt(
                        new SelectionPrompt<string>()
                            .Title("Select a [green]language[/] [grey](--language)[/]:")
                            .PageSize(20)
                            .EnableSearch()
                            .AddChoices(languages.Select(x => x.SchemaName)));
                    args.Language = languages.First(x => x.SchemaName == selected).LogicalName;
                }
                else
                {
                    args.Language = AnsiConsole.Prompt(new TextPrompt<string>("Language [green]LCID[/] [grey](--language)[/]:"));
                }
            }
            else if (args.ServiceClient != null)
            {
                // The wizard's combo only offers the provisioned languages
                // — a flag value resolves through the same list like the
                // Plugin entity lookup.
                var languages = await new MetadataService(args.ServiceClient).GetProvisionedLanguagesAsync();
                var match = languages.FirstOrDefault(x => string.Equals(x.LogicalName, args.Language, StringComparison.Ordinal));
                if (match == null)
                {
                    throw new DevKitValidationException($"--language '{args.Language}': language not provisioned in the current instance.");
                }
                args.Language = match.LogicalName;
            }

            if (string.IsNullOrWhiteSpace(args.Name))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--name: required for template 'ResourceString' — the resource class name.");
                }
                args.Name = AnsiConsole.Prompt(new TextPrompt<string>("Resource [green]class name[/] [grey](--name)[/]:"));
            }
        }

        /// <summary>
        /// The BatFile item prompt chain — the CLI twin of FormPlugin with
        /// ItemType.BatFile: file (the dialog's relabeled entity combo
        /// "File", filled with the six static utility files — the wizard's
        /// combo is static, filled on connect without an org call) and
        /// nothing else. A --name given up front passes through: the
        /// handler resolves it against the same static list (the
        /// wizard's combo only ever offers those six).
        /// </summary>
        private static Task PromptBatFileItemAsync(NewItemCommandArgs args)
        {
            var canPrompt = TaskNewShared.CanPrompt();

            if (string.IsNullOrWhiteSpace(args.Name))
            {
                if (!canPrompt)
                {
                    throw new DevKitValidationException("--name: required for template 'BatFile' — the utility file to add.");
                }
                args.Name = AnsiConsole.Prompt(
                    new SelectionPrompt<string>()
                        .Title("Select a [green]file[/] [grey](--name)[/]:")
                        .AddChoices(BatFileItemTemplateHandler.UtilityFiles));
            }
            return Task.CompletedTask;
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
