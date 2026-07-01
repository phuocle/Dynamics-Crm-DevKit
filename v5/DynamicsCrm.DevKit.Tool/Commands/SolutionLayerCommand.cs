using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class SolutionLayerSettings : CommandSettings
    {
        [CommandOption("--conn <CONNECTION>")]
        [Description("Dataverse connection string")]
        public string Connection { get; set; }

        [CommandOption("--solutions <SOLUTIONS>")]
        [Description("Comma-separated solution unique names to check")]
        public string Solutions { get; set; }

        [CommandOption("--output <OUTPUT>")]
        [Description("Output file path (optional). Default: console only")]
        public string Output { get; set; }

        public override ValidationResult Validate()
        {
            if (string.IsNullOrWhiteSpace(Connection))
                return ValidationResult.Error("--conn is required");
            if (string.IsNullOrWhiteSpace(Solutions))
                return ValidationResult.Error("--solutions is required");
            return ValidationResult.Success();
        }
    }

    internal sealed class SolutionLayerCommand : Command<SolutionLayerSettings>
    {
        public override int Execute(CommandContext context, SolutionLayerSettings settings, CancellationToken cancellation)
        {
            try
            {
                var solutionNames = settings.Solutions
                    .Split(',', System.StringSplitOptions.RemoveEmptyEntries | System.StringSplitOptions.TrimEntries);
                TaskSolutionLayer.Run(settings.Connection, solutionNames, settings.Output);
                return 0;
            }
            catch (System.Exception ex)
            {
                AnsiConsole.MarkupLine($"[red]Error:[/] {Markup.Escape(ex.Message)}");
                return 1;
            }
        }
    }
}
