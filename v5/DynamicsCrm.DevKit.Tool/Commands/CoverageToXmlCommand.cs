using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class CoverageToXmlSettings : CommandSettings
    {
        [CommandOption("--coverage <COVERAGE>")]
        [Description("Coverage file path (absolute)")]
        public string Coverage { get; set; }

        [CommandOption("--xml <XML>")]
        [Description("Output XML file path (absolute)")]
        public string Xml { get; set; }

        [CommandOption("--dlls <DLLS>")]
        [Description("DLL files (absolute paths, separated by ';')")]
        public string Dlls { get; set; }

        public override ValidationResult Validate()
        {
            if (string.IsNullOrWhiteSpace(Coverage))
                return ValidationResult.Error("--coverage is required");
            if (string.IsNullOrWhiteSpace(Xml))
                return ValidationResult.Error("--xml is required");
            if (string.IsNullOrWhiteSpace(Dlls))
                return ValidationResult.Error("--dlls is required");
            return ValidationResult.Success();
        }
    }

    internal sealed class CoverageToXmlCommand : Command<CoverageToXmlSettings>
    {
        public override int Execute(CommandContext context, CoverageToXmlSettings settings, CancellationToken cancellation)
        {
            try
            {
                TaskCoverageToXml.Run(settings.Coverage, settings.Xml, settings.Dlls);
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
