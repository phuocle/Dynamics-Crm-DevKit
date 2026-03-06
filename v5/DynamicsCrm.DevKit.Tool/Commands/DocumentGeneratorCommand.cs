using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class DocumentGeneratorSettings : CommandSettings
    {
        [CommandOption("--conn <CONNECTION>")]
        [Description("Dataverse connection string")]
        public string Connection { get; set; }

        [CommandOption("--folder <FOLDER>")]
        [Description("Output folder for generated markdown files")]
        public string Folder { get; set; }

        [CommandOption("--solution <SOLUTION>")]
        [Description("Dataverse solution unique name")]
        public string Solution { get; set; }

        [CommandOption("--timezone <TIMEZONE>")]
        [Description("Timezone override (e.g. +7, -6, 'SE Asia Standard Time'). Defaults to WhoAmI user timezone")]
        public string TimeZone { get; set; }

        public override ValidationResult Validate()
        {
            if (string.IsNullOrWhiteSpace(Connection))
                return ValidationResult.Error("--conn is required");
            if (string.IsNullOrWhiteSpace(Folder))
                return ValidationResult.Error("--folder is required");
            if (string.IsNullOrWhiteSpace(Solution))
                return ValidationResult.Error("--solution is required");
            return ValidationResult.Success();
        }
    }

    internal sealed class DocumentGeneratorCommand : Command<DocumentGeneratorSettings>
    {
        public override int Execute(CommandContext context, DocumentGeneratorSettings settings, CancellationToken cancellation)
        {
            try
            {
                TaskDocumentGenerator.Run(settings.Connection, settings.Folder, settings.Solution, settings.TimeZone);
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
