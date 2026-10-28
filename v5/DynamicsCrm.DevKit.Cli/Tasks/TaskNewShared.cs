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
            var descriptors = TemplateCatalog.All
                .Where(x => x.Kind == kind)
                .OrderBy(x => x.Order)
                .ToList();

            if (SpectreLog.IsPlain)
            {
                foreach (var descriptor in descriptors)
                {
                    var kindName = descriptor.Kind == TemplateKind.Project ? "project" : "item";
                    Console.WriteLine($"| {kindName,-7} | {descriptor.Order,2} | {descriptor.Id,-15} | {(IsReady(descriptor) ? "yes" : "no "),3} | {(descriptor.RequiresConnection ? "yes" : "no "),3} | {descriptor.Description}");
                }
            }
            else
            {
                var table = new Table().Border(TableBorder.Minimal).Expand();
                table.AddColumn(new TableColumn("[green]#[/]").Width(3));
                table.AddColumn(new TableColumn("[green]Type (--type)[/]"));
                table.AddColumn(new TableColumn("[green]Name[/]"));
                table.AddColumn(new TableColumn("[green]Ready[/]").Width(5));
                table.AddColumn(new TableColumn("[green]Conn[/]").Width(4));
                table.AddColumn(new TableColumn("[green]Description[/]"));
                foreach (var descriptor in descriptors)
                {
                    table.AddRow($"{descriptor.Order}", $"[yellow]{descriptor.Id}[/]", descriptor.DisplayName, IsReady(descriptor) ? "[green]yes[/]" : "[grey]no[/]", descriptor.RequiresConnection ? "yes" : "no", descriptor.Description);
                }
                AnsiConsole.Write(table);
            }

            SpectreLog.WriteLine();
            if (kind == TemplateKind.Project)
            {
                SpectreLog.WriteHighLight("Usage: ", "devkit new-project --type Shared --name Contoso.Shared --solution MySolution.slnx", string.Empty);
            }
            else
            {
                SpectreLog.WriteHighLight("Usage: ", "devkit new-item --type LateBound --entity Account --project Contoso.Shared", string.Empty);
            }
            return Task.CompletedTask;
        }

        /// <summary>
        /// True when a kind-matching handler or manifest is registered for
        /// the template — the "Ready" column of the catalog list tells
        /// users and AI agents which types scaffold today. The registry is
        /// scoped by kind, so project Test/UiTest/Report never light up
        /// their not-yet-ported item twins.
        /// </summary>
        private static bool IsReady(TemplateDescriptor descriptor)
        {
            return ScaffoldingEngine.FindHandler(descriptor.Kind, descriptor.Id) != null
                || TemplateManifests.TryGet(descriptor.Kind, descriptor.Id, out _);
        }

        public static string PromptTemplate(TemplateKind kind)
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
