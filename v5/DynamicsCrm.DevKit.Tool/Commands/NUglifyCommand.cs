using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class NUglifySettings : CommandSettings
    {
        [CommandOption("--source <SOURCE>")]
        [Description("Source file path (absolute)")]
        public string Source { get; set; }

        [CommandOption("--destination <DESTINATION>")]
        [Description("Destination file path (absolute)")]
        public string Destination { get; set; }

        public override ValidationResult Validate()
        {
            if (string.IsNullOrWhiteSpace(Source))
                return ValidationResult.Error("--source is required");
            if (string.IsNullOrWhiteSpace(Destination))
                return ValidationResult.Error("--destination is required");
            return ValidationResult.Success();
        }
    }

    internal sealed class NUglifyCommand : Command<NUglifySettings>
    {
        protected override int Execute(CommandContext context, NUglifySettings settings, CancellationToken cancellation)
        {
            try
            {
                TaskNUglify.Run(settings.Source, settings.Destination);
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
