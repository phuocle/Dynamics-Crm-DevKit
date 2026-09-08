using System.ComponentModel;
using System.Threading;
using DynamicsCrm.DevKit.Tool.Tasks;
using DynamicsCrm.DevKit.Tool.Lib;
using Microsoft.Xrm.Sdk;
using Spectre.Console;
using Spectre.Console.Cli;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    internal sealed class CreateEntitySettings : DataverseCommandSettings
    {
        [CommandOption("--solution <SOLUTION>")]
        [Description("Dataverse solution unique name")]
        public string Solution { get; set; }

        [CommandOption("--entity <ENTITY>")]
        [Description("Entity display name (e.g. 'My Entity')")]
        public string EntityDisplayName { get; set; }

        [CommandOption("--type <TYPE>")]
        [Description("Entity type: UserOwned, OrganizationOwned, Activity, Elastic_UserOwned, Elastic_OrganizationOwned")]
        public string EntityType { get; set; }

        public override ValidationResult Validate()
        {
            if (!HasConnectionConfiguration)
                return ValidationResult.Error("--conn is required");
            if (string.IsNullOrWhiteSpace(Solution))
                return ValidationResult.Error("--solution is required");
            if (string.IsNullOrWhiteSpace(EntityDisplayName))
                return ValidationResult.Error("--entity is required");
            if (string.IsNullOrWhiteSpace(EntityType))
                return ValidationResult.Error("--type is required");
            var valid = new[] { "UserOwned", "OrganizationOwned", "Activity", "Elastic_UserOwned", "Elastic_OrganizationOwned" };
            if (System.Array.IndexOf(valid, EntityType) < 0)
                return ValidationResult.Error("--type must be one of: UserOwned, OrganizationOwned, Activity, Elastic_UserOwned, Elastic_OrganizationOwned");
            return ValidationResult.Success();
        }
    }

    internal class CreateEntityCommand : Command<CreateEntitySettings>
    {
        protected override int Execute(CommandContext context, CreateEntitySettings settings, CancellationToken cancellation)
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

        internal virtual int RunTask(CreateEntitySettings settings)
        {
            RunTaskCore(settings);
            return 0;
        }

        [System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
        internal virtual void RunTaskCore(CreateEntitySettings settings)
        {
            var serviceClient = ToolConnectionEnvironment.ConnectAsync(settings.ExplicitConnection).GetAwaiter().GetResult();
            TaskCreateEntity.Run((IOrganizationService)serviceClient, settings.Solution, settings.EntityDisplayName, settings.EntityType);
        }
    }
}
