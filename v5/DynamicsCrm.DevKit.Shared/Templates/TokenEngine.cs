using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Templates
{
    /// <summary>
    /// Cross-platform port of DynamicsCrm.DevKit.Vsix/Lib/Replacement.cs.
    /// Populates the $token$ dictionary from platform-neutral inputs
    /// (TemplateInput DTOs + WorkspaceContext) instead of WPF forms and
    /// EnvDTE lookups, so VSIX, CLI and MCP share one token engine.
    /// </summary>
    public static class TokenEngine
    {
        /// <summary>
        /// Common tokens shared by project and item templates. Mirrors
        /// Replacement.AddCommonReplacementsAsync.
        /// </summary>
        public static void AddCommonTokens(Dictionary<string, string> replacements, WorkspaceContext workspace)
        {
            if (replacements == null) throw new ArgumentNullException(nameof(replacements));
            var solutionName = workspace?.SolutionName ?? string.Empty;
            replacements["$DevKitVersion$"] = Const.VersionBuild;
            replacements["$SharedNameSpace$"] = $"{solutionName}.{ProjectType.Shared}";
            replacements["$SharedProject$"] = !string.IsNullOrEmpty(workspace?.SharedProjectName)
                ? workspace.SharedProjectName
                : $"{solutionName}.{ProjectType.Shared}";
            replacements["$SharedTestProject$"] = $"{solutionName}.{ProjectType.Shared}.{ProjectType.Test}";
            replacements["$ProjectProxyTypes$"] = $"{solutionName}.{ProjectType.ProxyTypes}";
        }

        /// <summary>
        /// Full project-template token set. Mirrors
        /// Replacement.SetAsync(Dictionary, FormProject) including NuGet
        /// versions, connection values and embedded resources. The
        /// $destinationdirectory$ path is built with Path.Combine (the VSIX
        /// original concatenated a hard-coded backslash).
        /// </summary>
        public static async Task AddProjectTokensAsync(Dictionary<string, string> replacements, ProjectTemplateInput input, WorkspaceContext workspace)
        {
            if (replacements == null) throw new ArgumentNullException(nameof(replacements));
            if (input == null) throw new ArgumentNullException(nameof(input));
            AddCommonTokens(replacements, workspace);
            await AddNuGetTokensAsync(replacements);
            SetConnectionValues(replacements, input.CrmConnection);
            await SetEmbeddedResourceTokensAsync(replacements, input.CrmConnection);

            var solutionDirectory = workspace != null && !string.IsNullOrEmpty(workspace.SolutionDirectory)
                ? workspace.SolutionDirectory
                : input.OutputDirectory;
            var projectName = input.ProjectName ?? string.Empty;
            replacements["$destinationdirectory$"] = Path.Combine(solutionDirectory ?? string.Empty, projectName);
            replacements["$ProjectName$"] = projectName;
            replacements["$LogicalProjectName$"] = projectName.ToLowerInvariant();
            replacements["$SafeProjectName$"] = projectName;
            replacements["$CliConnectionArgs$"] = input.CrmConnection == null
                ? string.Empty
                : CliArgsBuilder.Build(input.CrmConnection, true);
            replacements["$NameSpace$"] = Helper.SafeNamespace(projectName);
        }

        /// <summary>
        /// Item-template token set. Mirrors
        /// Replacement.SetAsync(Dictionary, FormItem) plus $rootnamespace$.
        /// </summary>
        public static void AddItemTokens(Dictionary<string, string> replacements, ItemTemplateInput input, WorkspaceContext workspace)
        {
            if (replacements == null) throw new ArgumentNullException(nameof(replacements));
            if (input == null) throw new ArgumentNullException(nameof(input));
            AddCommonTokens(replacements, workspace);
            SetConnectionValues(replacements, input.CrmConnection);

            replacements["$SchemaName$"] = !string.IsNullOrEmpty(input.Entity) ? input.Entity : input.Name;
            replacements["$rootnamespace$"] = input.RootNamespace ?? string.Empty;
        }

        /// <summary>
        /// Applies every $token$ to the given content — the equivalent of
        /// the Visual Studio "ReplaceParameters" file substitution performed
        /// by the CLI engine.
        /// </summary>
        public static string ApplyReplacements(string content, Dictionary<string, string> replacements)
        {
            if (content == null || replacements == null) return content;
            foreach (var token in replacements)
            {
                if (token.Value != null)
                {
                    content = content.Replace(token.Key, token.Value);
                }
            }
            return content;
        }

        /// <summary>
        /// Embeds the CLI connection arguments into bat/deploy file content.
        /// Mirrors Replacement.ApplyCliConnectionArgs.
        /// </summary>
        public static string ApplyCliConnectionArgs(string content, CrmConnection crmConnection)
        {
            if (content == null) return null;

            var cliConnectionArgs = crmConnection == null ? string.Empty : CliArgsBuilder.Build(crmConnection, true);
            if (string.IsNullOrWhiteSpace(cliConnectionArgs))
            {
                content = content.Replace(" $CliConnectionArgs$", string.Empty);
                return content.Replace("$CliConnectionArgs$", string.Empty);
            }

            content = content.Replace(" $CliConnectionArgs$", $" {cliConnectionArgs}");
            return content.Replace("$CliConnectionArgs$", cliConnectionArgs);
        }

        /// <summary>
        /// Connection values and the .env comment tokens. Mirrors
        /// Replacement.SetConnectionValues + SetAppConfigComments.
        /// </summary>
        public static void SetConnectionValues(Dictionary<string, string> replacements, CrmConnection crmConnection)
        {
            if (replacements == null) throw new ArgumentNullException(nameof(replacements));
            replacements["$AuthTypeValue$"] = crmConnection?.Type ?? string.Empty;
            replacements["$UrlValue$"] = crmConnection?.Url ?? string.Empty;

            replacements["$UserNameValue$"] = crmConnection?.UserName ?? string.Empty;
            replacements["$PasswordValue$"] = crmConnection == null ? string.Empty : Helper.DecryptString(crmConnection.Password) ?? string.Empty;

            replacements["$ClientIdValue$"] = crmConnection?.ClientId ?? string.Empty;
            replacements["$ClientSecretValue$"] = crmConnection == null ? string.Empty : Helper.DecryptString(crmConnection.ClientSecret) ?? string.Empty;

            replacements["$PacProfileValue$"] = crmConnection?.PacProfile ?? string.Empty;

            string Comment(string environmentVariable)
            {
                return crmConnection?.UseProjectEnvironment == true
                    ? $"<!-- Value is read from project .env: {environmentVariable} -->"
                    : string.Empty;
            }

            replacements["$UrlConfigComment$"] = Comment(ProjectEnvironment.Url);
            replacements["$ClientIdConfigComment$"] = Comment(ProjectEnvironment.ClientId);
            replacements["$ClientSecretConfigComment$"] = Comment(ProjectEnvironment.ClientSecret);
            replacements["$UserNameConfigComment$"] = Comment(ProjectEnvironment.Username);
            replacements["$PasswordConfigComment$"] = Comment(ProjectEnvironment.Password);
        }

        private static async Task AddNuGetTokensAsync(Dictionary<string, string> replacements)
        {
            await NuGetHelper.SetReplacementAsync(replacements, "DynamicsCrm.DevKit.Analyzers");
            await NuGetHelper.SetReplacementAsync(replacements, "DynamicsCrm.DevKit.Cli");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.CrmSdk.CoreAssemblies");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.CrmSdk.Workflow");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.CrmSdk.CoreTools");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.PowerPlatform.Dataverse.Client");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.Identity.Client.Extensions.Msal");
            await NuGetHelper.SetReplacementAsync(replacements, "Azure.Identity");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.Extensions.Configuration");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.Extensions.Configuration.Json");
            await NuGetHelper.SetReplacementAsync(replacements, "NSubstitute");
            await NuGetHelper.SetReplacementAsync(replacements, "MSTest.TestAdapter");
            await NuGetHelper.SetReplacementAsync(replacements, "MSTest.TestFramework");
            await NuGetHelper.SetReplacementAsync(replacements, "Dynamics365.UIAutomation.Api");
            await NuGetHelper.SetReplacementAsync(replacements, "Bogus");
            await NuGetHelper.SetReplacementAsync(replacements, "Selenium.WebDriver");
            await NuGetHelper.SetReplacementAsync(replacements, "Selenium.WebDriver.ChromeDriver");
            await NuGetHelper.SetReplacementAsync(replacements, "Selenium.Support");
        }

        /// <summary>
        /// Content tokens backed by Shared embedded resources. Mirrors
        /// Replacement.SetEmbeddedResourceAsync, including the
        /// connection-type-specific App/App.config/AppCore/AppSettings
        /// variants and nested token application on those resources.
        /// </summary>
        public static async Task SetEmbeddedResourceTokensAsync(Dictionary<string, string> replacements, CrmConnection crmConnection)
        {
            if (replacements == null) throw new ArgumentNullException(nameof(replacements));
            var connectionType = crmConnection?.Type;

            replacements["$deploy.debug.bat$"] = await ReadBatResourceAsync("bat.plugin.deploy.debug.bat", crmConnection);
            replacements["$deploy.debug.only.bat$"] = await ReadBatResourceAsync("bat.plugin.deploy.debug.only.bat", crmConnection);
            replacements["$webresource.deploy.debug.bat$"] = await ReadBatResourceAsync("bat.webresource.deploy.debug.bat", crmConnection);
            replacements["$webresource.deploy.debug.ts.bat$"] = await ReadBatResourceAsync("bat.webresource.deploy.debug.ts_bat", crmConnection);
            replacements["$webresource.deploy.release.ts.bat$"] = await ReadBatResourceAsync("bat.webresource.deploy.release.ts_bat", crmConnection);
            replacements["$devkit.d.ts$"] = await TemplatePayload.ReadSharedResourceAsync("js.devkit.d.ts");
            replacements["$devkit.js$"] = await TemplatePayload.ReadSharedResourceAsync("js.devkit.js");
            replacements["$devkit.ts$"] = await TemplatePayload.ReadSharedResourceAsync("ts.devkit.ts");
            replacements["$devkitts.d.ts$"] = await TemplatePayload.ReadSharedResourceAsync("ts.devkit.d.ts");
            replacements["$build.js$"] = await TemplatePayload.ReadSharedResourceAsync("ts.build.js");
            replacements["$generator.form.bat$"] = await ReadBatResourceAsync("bat.generator.form.bat", crmConnection);
            replacements["$generator.form.ts.bat$"] = await ReadBatResourceAsync("bat.generator.form.ts_bat", crmConnection);
            replacements["$generator.webapi.bat$"] = await ReadBatResourceAsync("bat.generator.webapi.bat", crmConnection);
            replacements["$generator.webapi.ts.bat$"] = await ReadBatResourceAsync("bat.generator.webapi.ts_bat", crmConnection);
            replacements["$package.json$"] = await TemplatePayload.ReadSharedResourceAsync("js.package.json");
            replacements["$jsconfig.json$"] = await TemplatePayload.ReadSharedResourceAsync("js.jsconfig.json");
            replacements["$generator.latebound.bat$"] = await ReadBatResourceAsync("bat.generator.latebound.bat", crmConnection);
            // Non-Windows twin of the late-bound generator (bash). Only set
            // when the resource exists so the token never leaks verbatim.
            var lateBoundSh = await ReadBatResourceAsync("sh.generator.latebound.sh", crmConnection);
            if (lateBoundSh != null)
            {
                replacements["$generator.latebound.sh$"] = lateBoundSh;
            }
            replacements["$run.bat$"] = await ReadBatResourceAsync("bat.proxytypes.run.bat", crmConnection);
            replacements["$Extract-Both.bat$"] = await ReadBatResourceAsync("bat.solutionpackager.extract.both.bat", crmConnection);
            replacements["$Pack-Both.bat$"] = await ReadBatResourceAsync("bat.solutionpackager.pack.both.bat", crmConnection);
            replacements["$download.reports.bat$"] = await ReadBatResourceAsync("bat.download.reports.bat", crmConnection);
            replacements["$upload.reports.bat$"] = await ReadBatResourceAsync("bat.upload.reports.bat", crmConnection);
            replacements["$Helper.cs$"] = await TemplatePayload.ReadSharedResourceAsync("Helper.cs");
            replacements["$Program.cs$"] = await TemplatePayload.ReadSharedResourceAsync("Program.cs");
            replacements["$TracingServiceFake.cs$"] = await TemplatePayload.ReadSharedResourceAsync("TracingServiceFake.cs");
            replacements["$Runtime$"] = await TemplatePayload.ReadSharedResourceAsync("cs.console.runtime.xml");

            if (!string.IsNullOrEmpty(connectionType))
            {
                var appCsResource = await TemplatePayload.ReadSharedResourceAsync($"cs.console.App.{connectionType}.cs");
                if (!string.IsNullOrEmpty(appCsResource))
                {
                    replacements["$App.cs$"] = ApplyReplacements(appCsResource, replacements);
                }

                var appConfigResource = await TemplatePayload.ReadSharedResourceAsync($"cs.console.App.config.{connectionType}");
                if (!string.IsNullOrEmpty(appConfigResource))
                {
                    replacements["$App.config$"] = ApplyReplacements(appConfigResource, replacements);
                }
            }

            if (!string.IsNullOrEmpty(connectionType))
            {
                var appCsCoreResource = await TemplatePayload.ReadSharedResourceAsync($"cs.consolecore.App.{connectionType}.cs");
                if (!string.IsNullOrEmpty(appCsCoreResource))
                {
                    replacements["$AppCore.cs$"] = ApplyReplacements(appCsCoreResource, replacements);
                }

                var appSettingsResource = await TemplatePayload.ReadSharedResourceAsync($"cs.consolecore.AppSettings.{connectionType}.json");
                if (!string.IsNullOrEmpty(appSettingsResource))
                {
                    replacements["$AppSettings.json$"] = ApplyReplacements(appSettingsResource, replacements);
                }
            }
        }

        private static async Task<string> ReadBatResourceAsync(string resourcePath, CrmConnection crmConnection)
        {
            var content = await TemplatePayload.ReadSharedResourceAsync(resourcePath);
            return ApplyCliConnectionArgs(content, crmConnection);
        }
    }
}
