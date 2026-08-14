using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class DecryptSettings : CommandSettings
    {
        [CommandOption("--password <PASSWORD>")]
        [Description("The encrypted password string to decrypt")]
        public string Password { get; set; }

        public override ValidationResult Validate()
        {
            if (string.IsNullOrWhiteSpace(Password))
                return ValidationResult.Error("--password is required");
            return ValidationResult.Success();
        }
    }

    internal sealed class DecryptCommand : Command<DecryptSettings>
    {
        protected override int Execute(CommandContext context, DecryptSettings settings, CancellationToken cancellation)
        {
            try
            {
                TaskDecrypt.Run(settings.Password);
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
