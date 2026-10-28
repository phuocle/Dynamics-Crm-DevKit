using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata;
using DynamicsCrm.DevKit.Shared.Models;
using Spectre.Console;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    /// <summary>
    /// Interactive connection prompt of 'devkit new-project' — the CLI twin
    /// of the VSIX FormConnection dialog: pick the connection type, then
    /// answer the per-type questions with defaults suggested from the
    /// project .env. Accepting the .env shortcut produces the same
    /// UseProjectEnvironment marker connection the VSIX "use project .env"
    /// checkbox saves. The prompt is skippable — the VSIX dialog allows OK
    /// without connecting, and skipping here returns null so the generated
    /// files bake the project .env markers (aP: no --offline flag on
    /// new-project).
    /// </summary>
    internal static class ConnectionPrompter
    {
        private const string SkipChoice = "(skip — configure later via the project .env)";

        public static CrmConnection Prompt(IReadOnlyList<string> supportedTypes, string outputDirectory)
        {
            var environment = ReadEnvironment(outputDirectory);

            var type = PromptType(supportedTypes, environment);
            if (type == null)
            {
                return null;
            }
            if (type == "FromPac")
            {
                return PromptFromPac();
            }
            if (HasEnvironmentValues(environment, type))
            {
                if (AnsiConsole.Confirm("Use the project .env values for this connection?", true))
                {
                    return new CrmConnection { Name = type, Type = type, UseProjectEnvironment = true };
                }
            }
            return PromptFields(type, environment);
        }

        /// <summary>
        /// Reads the project .env (DEVKIT_*) walking up from the output
        /// directory — the same fallback every devkit command uses.
        /// </summary>
        private static IDictionary<string, string> ReadEnvironment(string outputDirectory)
        {
            var directory = string.IsNullOrWhiteSpace(outputDirectory)
                ? Environment.CurrentDirectory
                : Path.GetFullPath(outputDirectory);
            var envFile = ProjectEnvironment.FindFile(directory);
            return envFile == null
                ? new Dictionary<string, string>()
                : ProjectEnvironment.Read(envFile);
        }

        private static string PromptType(IReadOnlyList<string> supportedTypes, IDictionary<string, string> environment)
        {
            // The skip choice leads when the .env suggests nothing — the
            // Enter-to-skip mirror of pressing OK in the VSIX dialog without
            // connecting. With an .env AuthType present that suggestion
            // keeps the lead (its "use the project .env values" flow bakes
            // the same markers).
            var choices = new List<string> { SkipChoice };
            choices.AddRange(supportedTypes);
            var suggested = SuggestType(environment, supportedTypes);
            if (suggested != null)
            {
                choices.Remove(suggested);
                choices.Insert(1, suggested);
            }

            var choice = AnsiConsole.Prompt(
                new SelectionPrompt<string>()
                    .Title("Configure the [green]connection[/] now? [grey](pick a type, or skip and the generated files use the project .env)[/]:")
                    .AddChoices(choices));
            return choice == SkipChoice ? null : choice;
        }

        private static string SuggestType(IDictionary<string, string> environment, IReadOnlyList<string> choices)
        {
            var authType = ProjectEnvironment.GetValue(environment, ProjectEnvironment.AuthType);
            if (string.IsNullOrWhiteSpace(authType)) return null;
            return choices.FirstOrDefault(choice => string.Equals(choice, authType, StringComparison.OrdinalIgnoreCase));
        }

        /// <summary>
        /// True when the .env carries every value the connection type needs
        /// (the same key set FormConnection saves for the type).
        /// </summary>
        private static bool HasEnvironmentValues(IDictionary<string, string> environment, string type)
        {
            switch (type)
            {
                case "ClientSecret":
                    return HasValue(environment, ProjectEnvironment.Url)
                        && HasValue(environment, ProjectEnvironment.ClientId)
                        && HasValue(environment, ProjectEnvironment.ClientSecret);
                case "Interactive":
                case "DeviceCode":
                    return HasValue(environment, ProjectEnvironment.Url);
                case "OAuth":
                case "AD":
                    return HasValue(environment, ProjectEnvironment.Url)
                        && HasValue(environment, ProjectEnvironment.Username)
                        && HasValue(environment, ProjectEnvironment.Password);
                default:
                    return false;
            }
        }

        private static bool HasValue(IDictionary<string, string> environment, string key)
        {
            return !string.IsNullOrWhiteSpace(ProjectEnvironment.GetValue(environment, key));
        }

        /// <summary>
        /// Asks the fields of the connection type (labels, order and
        /// placeholders come from the same IConnectionTypeMetadata the VSIX
        /// form renders). Secrets are typed masked; only non-secret fields
        /// get a .env default suggested.
        /// </summary>
        private static CrmConnection PromptFields(string type, IDictionary<string, string> environment)
        {
            var connection = new CrmConnection { Name = type, Type = type };
            var metadata = ConnectionTypeRegistry.GetMetadata(type);
            foreach (var field in (metadata?.Fields ?? Array.Empty<ConnectionFieldDefinition>()).OrderBy(field => field.DisplayOrder))
            {
                var value = PromptField(field, environment);
                switch (field.FieldName)
                {
                    case "Url": connection.Url = value; break;
                    case "ClientId": connection.ClientId = value; break;
                    case "ClientSecret": connection.ClientSecret = value; break;
                    case "UserName": connection.UserName = value; break;
                    case "Password": connection.Password = value; break;
                }
            }
            return connection;
        }

        private static string PromptField(ConnectionFieldDefinition field, IDictionary<string, string> environment)
        {
            var prompt = new TextPrompt<string>($"[green]{field.Label}[/]:");
            if (field.IsPassword)
            {
                prompt.Secret();
            }
            else
            {
                var environmentKey = EnvironmentKeyOf(field.FieldName);
                if (environmentKey != null)
                {
                    var suggested = ProjectEnvironment.GetValue(environment, environmentKey);
                    if (!string.IsNullOrWhiteSpace(suggested))
                    {
                        prompt.DefaultValue(suggested);
                    }
                }
            }
            if (field.FieldName == "Url")
            {
                prompt.Validate(url =>
                    Uri.TryCreate(url, UriKind.Absolute, out var uri)
                        && (uri.Scheme == Uri.UriSchemeHttp || uri.Scheme == Uri.UriSchemeHttps)
                        ? ValidationResult.Success()
                        : ValidationResult.Error("Please enter a valid URL (e.g., https://yourorg.crm.dynamics.com)"));
            }
            return AnsiConsole.Prompt(prompt);
        }

        private static string EnvironmentKeyOf(string fieldName)
        {
            switch (fieldName)
            {
                case "Url": return ProjectEnvironment.Url;
                case "ClientId": return ProjectEnvironment.ClientId;
                case "UserName": return ProjectEnvironment.Username;
                default: return null;
            }
        }

        /// <summary>
        /// FromPac connections pick one of the local PAC CLI profiles (the
        /// CLI twin of the FormConnection profile combo box).
        /// </summary>
        private static CrmConnection PromptFromPac()
        {
            List<PacProfileInfo> profiles;
            try
            {
                profiles = PacProfileHelper.GetPacProfiles();
            }
            catch (Exception ex)
            {
                throw new DevKitValidationException($"Failed to load PAC CLI profiles: {ex.Message}. Run 'pac auth create' first or choose another connection type.");
            }
            if (profiles == null || profiles.Count == 0)
            {
                throw new DevKitValidationException("No PAC CLI profiles found. Run 'pac auth create' first or choose another connection type.");
            }

            var choice = AnsiConsole.Prompt(
                new SelectionPrompt<PacProfileInfo>()
                    .Title("Select a [green]PAC CLI profile[/] [grey](AuthType)[/]:")
                    .AddChoices(profiles));
            return new CrmConnection
            {
                Name = choice.ConnectionName,
                Type = "FromPac",
                PacProfile = choice.Identifier,
                Url = choice.Resource,
            };
        }
    }
}
