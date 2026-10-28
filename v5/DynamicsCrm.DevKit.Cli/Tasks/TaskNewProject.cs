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
    /// Implementation of 'devkit new-project': scaffolds one DevKit PROJECT
    /// template through the cross-platform ScaffoldingEngine and registers
    /// it in the required --solution (aP ruling — the combined 'devkit new'
    /// mixed two argument sets and could not own its requirements; the
    /// project flow itself is unchanged).
    /// </summary>
    internal static class TaskNewProject
    {
        public static async Task RunAsync(NewProjectCommandArgs args)
        {
            TemplateHandlers.RegisterAll();

            var list = (args.List ?? string.Empty).Trim();
            if (list.Length > 0)
            {
                if (!list.Equals("list", StringComparison.OrdinalIgnoreCase))
                {
                    throw new DevKitValidationException($"'{args.List}': unknown — pass 'list' to show the project templates, or omit it to scaffold.");
                }
                await TaskNewShared.ListAsync(TemplateKind.Project);
                return;
            }

            // The gate keeper (aP): every missing required argument reported
            // in ONE error — "required arguments missing: A, B, C" — so an
            // AI agent or a human can fix them in a single rerun. An
            // interactive terminal is never stopped here: the wizard asks
            // for the missing values one dialog step at a time.
            var missing = new List<string>();
            if (string.IsNullOrWhiteSpace(args.Type)) missing.Add("--type <template-id>");
            if (string.IsNullOrWhiteSpace(args.Name)) missing.Add("--name <project-name>");
            if (string.IsNullOrWhiteSpace(args.Solution)) missing.Add("--solution <file.sln|.slnx>");
            if (missing.Count > 0 && !TaskNewShared.CanPrompt())
            {
                throw new DevKitValidationException($"required arguments missing: {string.Join(", ", missing)}.");
            }

            if (string.IsNullOrWhiteSpace(args.Type))
            {
                args.Type = TaskNewShared.PromptTemplate(TemplateKind.Project);
            }

            var descriptor = TemplateCatalog.Find(args.Type, TemplateKind.Project);
            if (descriptor == null)
            {
                throw new DevKitValidationException($"--type '{args.Type}': unknown project template. Run 'devkit new-project list' to see all templates.");
            }

            if (string.IsNullOrWhiteSpace(args.Name) && TaskNewShared.CanPrompt())
            {
                var prompt = new TextPrompt<string>($"[green]{descriptor.DisplayName}[/] project name:");
                var defaultName = GetDefaultProjectName(descriptor, args.Out);
                if (!string.IsNullOrEmpty(defaultName))
                {
                    prompt.DefaultValue(defaultName);
                }
                args.Name = AnsiConsole.Prompt(prompt);
            }

            if (string.IsNullOrWhiteSpace(args.Solution) && TaskNewShared.CanPrompt())
            {
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
                // The project is registered in the required solution
                // (--solution): the anchor for the Shared-project lookup and
                // the default project name as well.
                SolutionFile = args.Solution,
            };
            // The Console/ConsoleCore templates bake the connection
            // type into App.cs/App.config or App.cs/AppSettings.json,
            // and the Server/Package deploy scripts bake the CLI
            // connection arguments — ask for it like FormProject does
            // (defaults from .env, AuthType list filtered to what the
            // template supports); non-interactive hosts leave it null
            // and the handler falls back to the .env marker. The prompt
            // itself is skippable (the "(skip)" choice) — the VSIX dialog
            // allows OK without connecting, and the CLI mirrors that
            // instead of an --offline flag (aP: no --offline on
            // new-project).
            if ((descriptor.Id == nameof(ProjectType.Console) || descriptor.Id == nameof(ProjectType.ConsoleCore) || descriptor.Id == nameof(ProjectType.Server) || descriptor.Id == nameof(ProjectType.Package) || descriptor.Id == nameof(ProjectType.WebResource) || descriptor.Id == nameof(ProjectType.ProxyTypes) || descriptor.Id == nameof(ProjectType.WebResourceTs) || descriptor.Id == nameof(ProjectType.UiTest) || descriptor.Id == nameof(ProjectType.SolutionPackager) || descriptor.Id == nameof(ProjectType.Report)) && TaskNewShared.CanPrompt())
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
            // Shared scaffold joins the same --solution.
            if (descriptor.Id == nameof(ProjectType.Server) && TaskNewShared.CanPrompt())
            {
                var directory = string.IsNullOrWhiteSpace(args.Out) ? Environment.CurrentDirectory : Path.GetFullPath(args.Out);
                var workspace = File.Exists(args.Solution)
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
                        });
                        TaskNewShared.WriteResult(sharedResult);
                        if (!sharedResult.Success)
                        {
                            throw new DevKitValidationException(string.Join(Environment.NewLine, sharedResult.Errors));
                        }
                    }
                }
            }

            var result = await ScaffoldingEngine.ScaffoldProjectAsync(input);
            TaskNewShared.WriteResult(result);
            if (!result.Success)
            {
                throw new DevKitValidationException(string.Join(Environment.NewLine, result.Errors));
            }
        }

        /// <summary>
        /// The nearest .slnx/.sln at or above the start directory — the
        /// suggested default of the interactive --solution prompt.
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
    }
}
