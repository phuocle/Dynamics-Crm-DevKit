using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    /// <summary>
    /// Pieces shared by the split 'devkit new' family: the catalog list
    /// ('devkit new'), the template prompt, the result table and the
    /// prompt gate. Scaffolding lives in TaskNewProject / TaskNewItem.
    /// </summary>
    internal static class TaskNewShared
    {
        /// <summary>
        /// Prompts fire on their own whenever the terminal is interactive
        /// and a required value is missing — there is no flag to force
        /// them (aP: the flow mirrors the VSIX dialog, which asks by
        /// itself). Redirected/plain runs never prompt: missing required
        /// values fail with clear errors instead.
        /// </summary>
        public static bool CanPrompt()
        {
            return !Console.IsInputRedirected && !SpectreLog.IsPlain;
        }

        /// <summary>
        /// The catalog list of one kind ('devkit new-project list' /
        /// 'devkit new-item list').
        /// </summary>
        public static Task ListAsync(TemplateKind kind)
        {
            var descriptors = TemplateCatalog.OfKind(kind).ToList();

            if (SpectreLog.IsPlain)
            {
                foreach (var (descriptor, index) in descriptors.Select((descriptor, index) => (descriptor, index)))
                {
                    var kindName = descriptor.Kind == TemplateKind.Project ? "project" : "item";
                    Console.WriteLine($"| {kindName,-7} | {index + 1,2} | {descriptor.Id,-15} | {CatalogDescription(descriptor)}");
                }
            }
            else
            {
                // No .Expand(): the table hugs its content — padding it to the
                // full console width explodes when the detected width is huge
                // (pipes/odd hosts report ~8000 columns, aP: broken UI).
                var table = new Table().Border(TableBorder.Minimal);
                table.AddColumn(new TableColumn("[green]#[/]").Width(3));
                table.AddColumn(new TableColumn("[green]Type (--type)[/]"));
                table.AddColumn(new TableColumn("[green]Name[/]"));
                table.AddColumn(new TableColumn("[green]Description[/]"));
                foreach (var (descriptor, index) in descriptors.Select((descriptor, index) => (descriptor, index)))
                {
                    table.AddRow($"{index + 1}", $"[yellow]{descriptor.Id}[/]", descriptor.DisplayName, Markup.Escape(CatalogDescription(descriptor)));
                }
                var example = kind == TemplateKind.Project
                    ? $"devkit [cyan]new-project[/] --type [cyan]{TemplateCatalog.SharedId}[/] --name [cyan]Contoso.Shared[/] --solution [cyan]MySolution.slnx[/]"
                    : $"devkit [cyan]new-item[/] --type [cyan]{TemplateCatalog.LateBoundId}[/] --entity [cyan]Account[/] --project [cyan]Contoso.Shared[/]";
                AnsiConsole.Write(new Panel(new Rows(table, new Markup($"[green]Example:[/] {example}")))
                {
                    Border = BoxBorder.Double,
                    BorderStyle = new Style(Color.Green),
                    Header = new PanelHeader($" [bold]devkit new-{(kind == TemplateKind.Project ? "project" : "item")} list[/] "),
                    Padding = new Padding(1, 1),
                    Width = 114
                });
                return Task.CompletedTask;
            }

            SpectreLog.WriteLine();
            if (kind == TemplateKind.Project)
            {
                SpectreLog.WriteHighLight("Example: ", $"devkit new-project --type {TemplateCatalog.SharedId} --name Contoso.Shared --solution MySolution.slnx", string.Empty);
            }
            else
            {
                SpectreLog.WriteHighLight("Example: ", $"devkit new-item --type {TemplateCatalog.LateBoundId} --entity Account --project Contoso.Shared", string.Empty);
            }
            return Task.CompletedTask;
        }

        // Compact CLI descriptions keep the catalog readable inside the help-width frame.
        private static string CatalogDescription(TemplateDescriptor descriptor) => (descriptor.Kind, descriptor.Id) switch
        {
            (TemplateKind.Project, TemplateCatalog.SharedId) => "Shared plugin core, entities and CLI config",
            (TemplateKind.Project, TemplateCatalog.ConsoleId) => ".NET Framework 4.6.2 Dataverse console",
            (TemplateKind.Project, TemplateCatalog.ConsoleCoreId) => ".NET 10 Dataverse console",
            (TemplateKind.Project, TemplateCatalog.ServerId) => "Plugins, workflows, APIs and data providers",
            (TemplateKind.Project, TemplateCatalog.PackageId) => "Dataverse Package Deployer project",
            (TemplateKind.Project, TemplateCatalog.WebResourceId) => "JavaScript web resources and deployment",
            (TemplateKind.Project, TemplateCatalog.SharedTestId) => "Shared FakeXrmEasy test helpers",
            (TemplateKind.Project, TemplateCatalog.ProxyTypesId) => "Early-bound entity classes with modelbuilder",
            (TemplateKind.Project, TemplateCatalog.TestId) => "Server unit tests with MSTest and FakeXrmEasy",
            (TemplateKind.Project, TemplateCatalog.DataverseTestId) => "MSTest with DataverseFakes.Community",
            (TemplateKind.Project, TemplateCatalog.UiTestId) => "UI tests with Selenium and Dynamics365.UIAutomation",
            (TemplateKind.Project, TemplateCatalog.SolutionPackagerId) => "Extract and pack solutions using PAC CLI",
            (TemplateKind.Project, TemplateCatalog.ReportId) => "Download and upload SSRS reports",
            (TemplateKind.Project, TemplateCatalog.WebResourceTsId) => "TypeScript web resources and deployment",
            (TemplateKind.Item, TemplateCatalog.LateBoundId) => "Late-bound entity class and generated code",
            (TemplateKind.Item, TemplateCatalog.JsFormId) => "Entity form JavaScript and type declarations",
            (TemplateKind.Item, TemplateCatalog.JsWebApiId) => "Entity WebAPI JavaScript and type declarations",
            (TemplateKind.Item, TemplateCatalog.PluginId) => "Plugin step class (T4-generated)",
            (TemplateKind.Item, TemplateCatalog.CustomActionId) => "Custom action handler (T4-generated)",
            (TemplateKind.Item, TemplateCatalog.CustomApiId) => "Custom API handler (T4-generated)",
            (TemplateKind.Item, TemplateCatalog.WorkflowId) => "Workflow activity class (T4-generated)",
            (TemplateKind.Item, TemplateCatalog.DataProviderId) => "Virtual entity CRUD classes (T4-generated)",
            (TemplateKind.Item, TemplateCatalog.TestId) => "Plugin or workflow unit test (T4-generated)",
            (TemplateKind.Item, TemplateCatalog.DataverseTestId) => "Dataverse server unit test (T4-generated)",
            (TemplateKind.Item, TemplateCatalog.UiTestId) => "Selenium UI test class (T4-generated)",
            (TemplateKind.Item, TemplateCatalog.ResourceStringId) => "Entity resource strings by language",
            (TemplateKind.Item, TemplateCatalog.BatFileId) => "Deploy scripts and DevKit utility files",
            (TemplateKind.Item, TemplateCatalog.TsFormId) => "Entity form TypeScript",
            (TemplateKind.Item, TemplateCatalog.TsWebApiId) => "Entity WebAPI TypeScript",
            (TemplateKind.Item, TemplateCatalog.TsDialogId) => "Dialog TypeScript",
            (TemplateKind.Item, TemplateCatalog.JsDialogId) => "Dialog JavaScript and type declarations",
            (TemplateKind.Item, TemplateCatalog.ReportId) => "SSRS report with a FetchXML dataset",
            _ => descriptor.Description
        };

        public static string PromptTemplate(TemplateKind kind)
        {
            var choices = TemplateCatalog.OfKind(kind)
                .Select((descriptor, index) => $"{index + 1,2}. {descriptor.DisplayName,-24} {descriptor.Id}")
                .ToList();
            var choice = AnsiConsole.Prompt(
                new SelectionPrompt<string>()
                    .Title($"Select a [green]{kind} template[/] [grey](--type)[/]:")
                    .PageSize(20)
                    .AddChoices(choices));
            var id = choice.Substring(choice.LastIndexOf(' ') + 1);
            return id;
        }

        public static void WriteResult(ScaffoldResult result)
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
