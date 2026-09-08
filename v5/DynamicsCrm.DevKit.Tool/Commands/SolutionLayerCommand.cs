using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using DynamicsCrm.DevKit.Tool.Lib;
using Microsoft.Xrm.Sdk;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class SolutionLayerSettings : DataverseCommandSettings
    {
        [CommandOption("--solutions <SOLUTIONS>")]
        [Description("Comma-separated solution unique names to check")]
        public string Solutions { get; set; }

        [CommandOption("--output <OUTPUT>")]
        [Description("Output file path (optional). Default: console only")]
        public string Output { get; set; }

        public override ValidationResult Validate()
        {
            if (!HasConnectionConfiguration)
                return ValidationResult.Error("--conn is required");
            if (string.IsNullOrWhiteSpace(Solutions))
                return ValidationResult.Error("--solutions is required");
            return ValidationResult.Success();
        }
    }

    internal class SolutionLayerCommand : Command<SolutionLayerSettings>
    {
        protected override int Execute(CommandContext context, SolutionLayerSettings settings, CancellationToken cancellation)
        {
            try
            {
                return RunTask(settings);
            }
            catch (System.Exception ex)
            {
                AnsiConsole.MarkupLine($"[red]Error:[/] {Markup.Escape(ex.Message)}");
                return 1;
            }
        }

        internal virtual int RunTask(SolutionLayerSettings settings)
        {
            RunTaskCore(settings);
            return 0;
        }

        [System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
        internal virtual void RunTaskCore(SolutionLayerSettings settings)
        {
            var solutionNames = settings.Solutions
                .Split(',', System.StringSplitOptions.RemoveEmptyEntries | System.StringSplitOptions.TrimEntries);
            var serviceClient = ToolConnectionEnvironment.ConnectAsync(settings.ExplicitConnection).GetAwaiter().GetResult();
            TaskSolutionLayer.Run((IOrganizationService)serviceClient, solutionNames, settings.Output);
        }
    }
}
