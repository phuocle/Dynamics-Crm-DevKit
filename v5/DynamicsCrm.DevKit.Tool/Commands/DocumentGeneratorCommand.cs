using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using DynamicsCrm.DevKit.Tool.Lib;
using Microsoft.Xrm.Sdk;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class DocumentGeneratorSettings : DataverseCommandSettings
    {
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
            if (!HasConnectionConfiguration)
                return ValidationResult.Error("--conn is required");
            if (string.IsNullOrWhiteSpace(Folder))
                return ValidationResult.Error("--folder is required");
            if (string.IsNullOrWhiteSpace(Solution))
                return ValidationResult.Error("--solution is required");
            return ValidationResult.Success();
        }
    }

    internal class DocumentGeneratorCommand : Command<DocumentGeneratorSettings>
    {
        protected override int Execute(CommandContext context, DocumentGeneratorSettings settings, CancellationToken cancellation)
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

        internal virtual int RunTask(DocumentGeneratorSettings settings)
        {
            RunTaskCore(settings);
            return 0;
        }

        [System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
        internal virtual void RunTaskCore(DocumentGeneratorSettings settings)
        {
            var serviceClient = ToolConnectionEnvironment.ConnectAsync(settings.ExplicitConnection).GetAwaiter().GetResult();
            TaskDocumentGenerator.Run((IOrganizationService)serviceClient, settings.Folder, settings.Solution, settings.TimeZone);
        }
    }
}
