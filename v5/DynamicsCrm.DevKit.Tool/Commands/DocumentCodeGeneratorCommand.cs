using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class DocumentCodeGeneratorSettings : CommandSettings
    {
        [CommandOption("--folder <FOLDER>")]
        [Description("Folder containing compiled DLL assemblies to scan")]
        public string Folder { get; set; }

        [CommandOption("--output <OUTPUT>")]
        [Description("Output folder for generated markdown files")]
        public string Output { get; set; }

        [CommandOption("--devops <DEVOPS>")]
        [Description("DevOps platform: AzureDevOps, GitHub, Jira, Custom")]
        public string DevOps { get; set; }

        [CommandOption("--org <ORG>")]
        [Description("DevOps organization name (e.g. 'phuocle' for Azure DevOps, 'owner' for GitHub)")]
        public string Org { get; set; }

        [CommandOption("--project <PROJECT>")]
        [Description("DevOps project name (e.g. 'CONTOSO PL' for Azure DevOps, 'repo' for GitHub)")]
        public string Project { get; set; }

        public override ValidationResult Validate()
        {
            if (string.IsNullOrWhiteSpace(Folder))
                return ValidationResult.Error("--folder is required");
            if (string.IsNullOrWhiteSpace(Output))
                return ValidationResult.Error("--output is required");
            if (!string.IsNullOrWhiteSpace(DevOps) && string.IsNullOrWhiteSpace(Org))
                return ValidationResult.Error("--org is required when --devops is specified");
            return ValidationResult.Success();
        }
    }

    internal sealed class DocumentCodeGeneratorCommand : Command<DocumentCodeGeneratorSettings>
    {
        protected override int Execute(CommandContext context, DocumentCodeGeneratorSettings settings, CancellationToken cancellation)
        {
            try
            {
                TaskDocumentCodeGenerator.Run(settings.Folder, settings.Output, settings.DevOps, settings.Org, settings.Project);
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
