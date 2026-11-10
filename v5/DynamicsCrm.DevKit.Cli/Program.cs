using DynamicsCrm.DevKit.Cli.Commands;
using DynamicsCrm.DevKit.Shared;
using Spectre.Console;
using Spectre.Console.Cli;
using Spectre.Console.Cli.Help;
using Spectre.Console.Rendering;
using System.Collections.Generic;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    public class Program
    {
        [STAThread]
        public static async Task<int> Main(string[] args)
        {
            try
            {

                // Ensure flushed output for AI agents and correct encoding
                Console.OutputEncoding = System.Text.Encoding.UTF8;
                // Force console width to 8000 to prevent wrapping
                AnsiConsole.Profile.Width = 8000;

                // Detect plain mode: --plain flag > DEVKIT_NO_COLOR in the project
                // .env (searched from the current directory upward to the drive
                // root) > default (rich). Environment variables are never read.
                if (args != null && args.Any(a => a.Equals("--plain", StringComparison.OrdinalIgnoreCase)))
                {
                    SpectreLog.IsPlain = true;
                    // Remove --plain from args so Spectre.Console.Cli doesn't reject it
                    args = args.Where(a => !a.Equals("--plain", StringComparison.OrdinalIgnoreCase)).ToArray();
                }
                else if (IsPlainFromProjectEnvironment())
                {
                    SpectreLog.IsPlain = true;
                }


                // Convert legacy /arg:value format to --arg value if needed
                var originalArgs = args;
                args = LegacyArgConverter.Convert(args);
                args = LegacyArgConverter.RewriteShorthandOptions(args);
                args = LegacyArgConverter.RewriteTrailingHelp(args);

                // 'devkit new' was removed with the new-project/new-item
                // split (aP: keeping a list-only 'new' serves no purpose —
                // listing lives in 'devkit new-project list' and
                // 'devkit new-item list'). Point old scripts the right way.
                if (args != null && args.Length > 0 && args[0].Equals("new", StringComparison.OrdinalIgnoreCase))
                {
                    SpectreLog.WriteException(new InvalidOperationException("'devkit new' was removed — the scaffold split into 'devkit new-project' and 'devkit new-item'. List templates with 'devkit new-project list' / 'devkit new-item list'."));
                    return 1;
                }

                var updateTask = UpdateChecker.CheckAsync();

                // Show help if no args or explicit help request — the bare
                // word 'help' (what users naturally type) counts as --help
                // (aP: 'devkit help' must not die on "No such command").
                if (args == null || args.Length == 0 ||
                    (args.Length == 1 && (args[0] == "--help" || args[0] == "-h" ||
                                          args[0].Equals("help", StringComparison.OrdinalIgnoreCase))))
                {
                    SpectreLog.WriteHeader();
                    SpectreLog.WriteHelp();
                    try
                    {
                        var updateResult = await updateTask;
                        UpdateChecker.ShowNotification(updateResult);
                    }
                    catch { /* best-effort update notification — failure is non-critical */ }
                    SpectreLog.WaitForKeyPress();
                    return 0;
                }

                // These commands require arguments; show their normal help when
                // invoked bare. MCP and configured scaffold wizards retain their startup flow.
                if (ShouldShowBareCommandHelp(args))
                    args = new[] { args[0], "--help" };
                var app = new CommandApp();
                app.Configure(config =>
                {
                    var defaults = HelpProviderStyle.Default;
                    var green = new Style(Color.Green);
                    config.Settings.HelpProviderStyles = new HelpProviderStyle
                    {
                        Description = new DescriptionStyle { Header = green },
                        Usage = new UsageStyle { Header = green, CurrentCommand = defaults.Usage.CurrentCommand, Command = defaults.Usage.Command, Options = defaults.Usage.Options, RequiredArgument = defaults.Usage.RequiredArgument, OptionalArgument = defaults.Usage.OptionalArgument },
                        Examples = new ExampleStyle { Header = green, Arguments = defaults.Examples.Arguments },
                        Arguments = new ArgumentStyle { Header = green, RequiredArgument = defaults.Arguments.RequiredArgument, OptionalArgument = defaults.Arguments.OptionalArgument },
                        Options = new OptionStyle { Header = green, DefaultValueHeader = defaults.Options.DefaultValueHeader, DefaultValue = defaults.Options.DefaultValue, RequiredOption = defaults.Options.RequiredOption, RequiredOptionValue = defaults.Options.RequiredOptionValue, OptionalOptionValue = defaults.Options.OptionalOptionValue },
                        Commands = new CommandStyle { Header = green, ChildCommand = defaults.Commands.ChildCommand, RequiredArgument = defaults.Commands.RequiredArgument }
                    };
                    config.SetHelpProvider(new DevKitHelpProvider(config.Settings));
                    config.SetApplicationName("devkit");
                    config.SetApplicationVersion($"{DynamicsCrm.DevKit.Shared.Const.Version} Build: {DynamicsCrm.DevKit.Shared.Const.Build}");

                    // Generator command
                    config.AddCommand<GeneratorCommand>("generator")
                          .WithDescription("Generate JavaScript/TypeScript Form and Web API code, and C# late-bound code")
                          .WithExample(new[] { "generator", "--json", "DynamicsCrm.DevKit.Cli.json", "--profile", "Account" });

                    // Server commands (plugin/workflow deployment)
                    config.AddCommand<ServerCommand>("server")
                          .WithDescription("Deploy plugins, workflows, dataproviders; Create datasource")
                          .WithExample(new[] { "server", "--json", "DynamicsCrm.DevKit.Cli.json", "--profile", "DEBUG" })
                          .WithExample(new[] { "server", "--json", "DynamicsCrm.DevKit.Cli.json", "--profile", "DEBUG", "-t", "plugins", "-o" });

                    config.AddCommand<PluginCommand>("plugin")
                          .WithDescription("[red]DEPRECATED[/] Use: devkit server");

                    config.AddCommand<WorkflowCommand>("workflow")
                          .WithDescription("[red]DEPRECATED[/] Use: devkit server");

                    config.AddCommand<DataProviderCommand>("dataprovider")
                          .WithDescription("[red]DEPRECATED[/] Use: devkit server");

                    config.AddCommand<WebResourceCommand>("webresource")
                          .WithDescription("Deploy or download web resources (--type upload | download; --file .ts --build debug | release)")
                          .WithExample(new[] { "webresource", "--json", "DynamicsCrm.DevKit.Cli.json", "--profile", "DEBUG" })
                          .WithExample(new[] { "webresource", "--file", "entities/Account.ts", "--build", "release", "--webresource", "dev_/entities/Account.js" })
                          .WithExample(new[] { "webresource", "--file", "entities/Account.ts", "--build", "release", "-wid", "00000000-0000-0000-0000-000000000000" })
                          .WithExample(new[] { "webresource", "--type", "download", "--json", "DynamicsCrm.DevKit.Cli.json", "--profile", "DOWNLOAD" });

                    config.AddCommand<ProxyTypeCommand>("proxytype")
                          .WithDescription("[red]DEPRECATED[/] Auto-redirects to: devkit modelbuilder");

                    config.AddCommand<ModelBuilderCommand>("modelbuilder")
                          .WithDescription("Generate early-bound entity classes using PAC ModelBuilder")
                          .WithExample(new[] { "modelbuilder", "--json", "DynamicsCrm.DevKit.Cli.json", "--profile", "ALL" });

                    config.AddCommand<SolutionPackagerCommand>("legacy-solution")
                          .WithDescription("[red]DEPRECATED[/] Auto-redirects to: devkit solution");

                    config.AddCommand<PacSolutionPackagerCommand>("solution")
                          .WithDescription("Extract or pack solutions using PAC CLI")
                          .WithExample(new[] { "solution", "--json", "DynamicsCrm.DevKit.Cli.json", "--profile", "Extract-Both" });

                    config.AddCommand<ReportCommand>("report")
                          .WithDescription("Report operations (--type dataset | upload | download)")
                          .WithExample(new[] { "report", "--type", "dataset", "--file", "Account.rdl", "--action", "list" })
                          .WithExample(new[] { "report", "--type", "dataset", "-f", "Account.rdl", "-a", "add", "-n", "Dataset2", "--fetchxml-file", "filter.xml", "-p", "account=on" })
                          .WithExample(new[] { "report", "--type", "upload", "--file", "Report1.rdl", "--report", "Revenue", "--language", "1033" })
                          .WithExample(new[] { "report", "--type", "download", "--json", "DynamicsCrm.DevKit.Cli.json", "--profile", "DEBUG" });

                    config.AddCommand<DownloadReportCommand>("downloadreport")
                          .WithDescription("[red]DEPRECATED[/] Auto-redirects to: devkit report --type download");

                    config.AddCommand<UploadReportCommand>("uploadreport")
                          .WithDescription("[red]DEPRECATED[/] Auto-redirects to: devkit report --type upload");

                    config.AddCommand<DownloadWebResourceCommand>("downloadwebresource")
                          .WithDescription("[red]DEPRECATED[/] Auto-redirects to: devkit webresource --type download");

                    config.AddCommand<DataSourceCommand>("datasource")
                          .WithDescription("[red]DEPRECATED[/] Auto-redirects to: devkit server --type datasources");

                    // The 'new' family split (aP): one combined scaffold
                    // command mixed two argument sets and could not own its
                    // requirements — 'devkit new-project' and
                    // 'devkit new-item' scaffold with their own required
                    // arguments, and each lists its own catalog ('list').
                    config.AddCommand<NewProjectCommand>("new-project")
                          .WithDescription("Create a DevKit project template (Shared, Console, Server, ...) in the required solution")
                          .WithExample(new[] { "new-project", "list" })
                          .WithExample(new[] { "new-project", "--type", "Shared", "--name", "Contoso.Shared", "--solution", "MySolution.slnx" });

                    config.AddCommand<NewItemCommand>("new-item")
                          .WithDescription("Create a DevKit item template (LateBound, Plugin, ...) in the required project")
                          .WithExample(new[] { "new-item", "list" })
                          .WithExample(new[] { "new-item", "--type", "LateBound", "--entity", "Account", "--project", "Contoso.Shared" })
                          .WithExample(new[] { "new-item", "--type", "Workflow", "--name", "MyWorkflow", "--project", "Contoso.Server" });

                    config.AddCommand<McpCommand>("mcp")
                          .WithDescription("Start MCP server for AI agent integration (auth: CLI args > project .env; see --setup-guide)")
                          .WithExample(new[] { "mcp", "--tools" })
                          .WithExample(new[] { "mcp", "--setup-guide" })
                          .WithExample(new[] { "mcp", "--auth", "ClientSecret", "--url", "https://org.crm.dynamics.com", "--clientid", "ID", "--clientsecret", "SECRET" })
                          .WithExample(new[] { "mcp", "--auth", "FromPac", "--pacprofile", "default" })
                          .WithExample(new[] { "mcp", "--auth", "Interactive", "--url", "https://org.crm.dynamics.com" });
                });

                var result = await app.RunAsync(args);

                try
                {
                    var updateResult = await updateTask;
                    UpdateChecker.ShowNotification(updateResult);
                }
                catch
                {
                }

                SpectreLog.WaitForKeyPress();
                return result;
            }
            catch (Exception ex)
            {
                SpectreLog.WriteException(ex);
                SpectreLog.WaitForKeyPress();
                return 1;
            }
        }

        private static readonly HashSet<string> BareHelpCommands = new(StringComparer.OrdinalIgnoreCase)
        {
            "generator", "server", "plugin", "workflow", "dataprovider", "datasource",
            "webresource", "downloadwebresource", "modelbuilder", "proxytype",
            "solution", "legacy-solution", "report", "downloadreport", "uploadreport"
        };

        internal static bool ShouldShowBareCommandHelp(string[] args, string currentDirectory = null)
        {
            if (args == null || args.Length != 1) return false;
            if (BareHelpCommands.Contains(args[0])) return true;
            if (!args[0].Equals("new-item", StringComparison.OrdinalIgnoreCase) &&
                !args[0].Equals("new-project", StringComparison.OrdinalIgnoreCase)) return false;

            var envFile = ProjectEnvironment.FindFile(currentDirectory ?? Directory.GetCurrentDirectory());
            var values = ProjectEnvironment.Read(envFile);
            return string.IsNullOrWhiteSpace(ProjectEnvironment.GetValue(values, ProjectEnvironment.AuthType)) &&
                   string.IsNullOrWhiteSpace(ProjectEnvironment.GetValue(values, ProjectEnvironment.Connection));
        }
        // HelpProvider sections already include their own line breaks. Concatenate
        // their segments without the extra separators that Rows adds.
        private sealed class HelpContent : Renderable
        {
            private readonly IEnumerable<IRenderable> _sections;

            public HelpContent(IEnumerable<IRenderable> sections) => _sections = sections;

            protected override IEnumerable<Segment> Render(RenderOptions options, int maxWidth)
            {
                foreach (var section in _sections)
                    foreach (var segment in section.Render(options, maxWidth))
                        yield return segment;
            }
        }
        private sealed class DevKitHelpProvider : HelpProvider
        {
            public DevKitHelpProvider(ICommandAppSettings settings) : base(settings) { }


            public override IEnumerable<IRenderable> GetExamples(ICommandModel model, ICommandInfo command)
            {
                if (command == null) return base.GetExamples(model, command);
                var examples = command.Examples.ToList();
                if (examples.Count == 0 && BareHelpCommands.Contains(command.Name))
                    examples.Add(new[] { command.Name, "--json", "DynamicsCrm.DevKit.Cli.json", "--profile", "DEBUG" });
                if (examples.Count == 0) return base.GetExamples(model, command);

                if (SpectreLog.IsPlain)
                {
                    var lines = examples.Select(example => "    devkit " + string.Join(" ", example));
                    return new IRenderable[] { new Text("\nEXAMPLES:\n" + string.Join("\n", lines) + "\n") };
                }

                var styledLines = examples.Select(example => "    devkit " + string.Join(" ",
                    example.Select(part => part.StartsWith("-", StringComparison.Ordinal)
                        ? Markup.Escape(part)
                        : $"[cyan]{Markup.Escape(part)}[/]")));
                return new IRenderable[] { new Markup("\n[green]EXAMPLES:[/]\n" + string.Join("\n", styledLines) + "\n") };
            }

            public override IEnumerable<IRenderable> Write(ICommandModel model, ICommandInfo command)
            {
                SpectreLog.WriteHeader();
                var help = base.Write(model, command);
                if (SpectreLog.IsPlain) return help;

                var title = string.IsNullOrWhiteSpace(command?.Name) ? "devkit" : $"devkit {command.Name}";
                return new IRenderable[]
                {
                    new Panel(new HelpContent(help))
                    {
                        Border = BoxBorder.Double,
                        BorderStyle = new Style(Color.Green),
                        Header = new PanelHeader($" [bold]{Markup.Escape(title)} Help[/] ", Justify.Left),
                        Padding = new Padding(2, 1),
                        Width = 114
                    }
                };
            }
        }
        /// <summary>
        /// Plain output is also requested through DEVKIT_NO_COLOR in the project
        /// .env file, found by the same walk-up search as connection values:
        /// from the current directory upward to the drive root. Any non-empty
        /// value enables plain output; OS environment variables are never read.
        /// </summary>
        internal static bool IsPlainFromProjectEnvironment()
        {
            try
            {
                var envFile = ProjectEnvironment.FindFile(Directory.GetCurrentDirectory());
                if (envFile == null) return false;
                var value = ProjectEnvironment.GetValue(ProjectEnvironment.Read(envFile), ProjectEnvironment.NoColor);
                return !string.IsNullOrWhiteSpace(value);
            }
            catch
            {
                return false;
            }
        }
    }
}
