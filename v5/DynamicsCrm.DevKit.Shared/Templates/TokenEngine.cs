using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Templates.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
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
            // Name parts join without a stray leading dot when no solution
            // is in play (create-only scaffolds — see --solution): an empty
            // solution name degrades "Contoso.Shared" to "Shared".
            string Scoped(params string[] parts)
            {
                return string.Join(".", parts.Where(part => !string.IsNullOrEmpty(part)));
            }
            replacements["$DevKitVersion$"] = Const.VersionBuild;
            replacements["$SharedNameSpace$"] = Scoped(solutionName, ProjectType.Shared.ToString());
            replacements["$SharedProject$"] = !string.IsNullOrEmpty(workspace?.SharedProjectName)
                ? workspace.SharedProjectName
                : Scoped(solutionName, ProjectType.Shared.ToString());
            replacements["$SharedTestProject$"] = Scoped(solutionName, ProjectType.Shared.ToString(), ProjectType.Test.ToString());
            replacements["$ProjectProxyTypes$"] = Scoped(solutionName, ProjectType.ProxyTypes.ToString());
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
            // Resource names are case-sensitive: normalize the connection
            // type to its canonical registry casing (clientsecret →
            // ClientSecret) before any connection-dependent lookup.
            if (input.CrmConnection != null && !string.IsNullOrEmpty(input.CrmConnection.Type))
            {
                var registryType = ConnectionTypeRegistry.GetMetadata(input.CrmConnection.Type);
                if (registryType != null)
                {
                    input.CrmConnection.Type = registryType.Type;
                }
            }
            AddCommonTokens(replacements, workspace);
            await AddNuGetTokensAsync(replacements, input.Offline);
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

        /// <summary>
        /// Every package the project templates stamp — one shared list so
        /// the live-first batch and the offline table stay in sync with the
        /// NuGetVersionCache preload list.
        /// </summary>
        private static readonly string[] NuGetPackages =
        {
            "DynamicsCrm.DevKit.Analyzers",
            "DynamicsCrm.DevKit.Cli",
            "Microsoft.CrmSdk.CoreAssemblies",
            "Microsoft.CrmSdk.Workflow",
            "Microsoft.CrmSdk.CoreTools",
            "Microsoft.PowerPlatform.Dataverse.Client",
            "Microsoft.Identity.Client.Extensions.Msal",
            "Azure.Identity",
            "Microsoft.Extensions.Configuration",
            "Microsoft.Extensions.Configuration.Json",
            "NSubstitute",
            "MSTest.TestAdapter",
            "MSTest.TestFramework",
            "Dynamics365.UIAutomation.Api",
            "Bogus",
            "Selenium.WebDriver",
            "Selenium.WebDriver.ChromeDriver",
            "Selenium.Support",
        };

        private static Task AddNuGetTokensAsync(Dictionary<string, string> replacements, bool offline)
        {
            // Online scaffolds stamp the live nuget.org latest (VSIX parity);
            // --offline (or a failed query) falls back to DefaultVersions.
            return NuGetHelper.SetReplacementsAsync(replacements, NuGetPackages, offline);
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
            // Non-Windows twins of the Server deploy scripts (bash) — same
            // set-only-when-exists contract.
            var deployDebugSh = await ReadBatResourceAsync("sh.plugin.deploy.debug.sh", crmConnection);
            if (deployDebugSh != null)
            {
                replacements["$deploy.debug.sh$"] = deployDebugSh;
            }
            var deployDebugOnlySh = await ReadBatResourceAsync("sh.plugin.deploy.debug.only.sh", crmConnection);
            if (deployDebugOnlySh != null)
            {
                replacements["$deploy.debug.only.sh$"] = deployDebugOnlySh;
            }
            // Non-Windows twins of the WebResource deploy + JS generator
            // scripts (bash) — same set-only-when-exists contract.
            var webResourceDeploySh = await ReadBatResourceAsync("sh.webresource.deploy.debug.sh", crmConnection);
            if (webResourceDeploySh != null)
            {
                replacements["$webresource.deploy.debug.sh$"] = webResourceDeploySh;
            }
            var generatorFormSh = await ReadBatResourceAsync("sh.generator.form.sh", crmConnection);
            if (generatorFormSh != null)
            {
                replacements["$generator.form.sh$"] = generatorFormSh;
            }
            var generatorWebApiSh = await ReadBatResourceAsync("sh.generator.webapi.sh", crmConnection);
            if (generatorWebApiSh != null)
            {
                replacements["$generator.webapi.sh$"] = generatorWebApiSh;
            }
            // Non-Windows twins of the WebResource TypeScript deploy +
            // generator scripts (bash) — same set-only-when-exists contract.
            var webResourceDeployDebugTsSh = await ReadBatResourceAsync("sh.webresource.deploy.debug.ts.sh", crmConnection);
            if (webResourceDeployDebugTsSh != null)
            {
                replacements["$webresource.deploy.debug.ts.sh$"] = webResourceDeployDebugTsSh;
            }
            var webResourceDeployReleaseTsSh = await ReadBatResourceAsync("sh.webresource.deploy.release.ts.sh", crmConnection);
            if (webResourceDeployReleaseTsSh != null)
            {
                replacements["$webresource.deploy.release.ts.sh$"] = webResourceDeployReleaseTsSh;
            }
            var generatorFormTsSh = await ReadBatResourceAsync("sh.generator.form.ts.sh", crmConnection);
            if (generatorFormTsSh != null)
            {
                replacements["$generator.form.ts.sh$"] = generatorFormTsSh;
            }
            var generatorWebApiTsSh = await ReadBatResourceAsync("sh.generator.webapi.ts.sh", crmConnection);
            if (generatorWebApiTsSh != null)
            {
                replacements["$generator.webapi.ts.sh$"] = generatorWebApiTsSh;
            }
            replacements["$run.bat$"] = await ReadBatResourceAsync("bat.proxytypes.run.bat", crmConnection);
            // Non-Windows twin of the modelbuilder runner (bash) — same
            // set-only-when-exists contract.
            var proxyTypesRunSh = await ReadBatResourceAsync("sh.proxytypes.run.sh", crmConnection);
            if (proxyTypesRunSh != null)
            {
                replacements["$run.sh$"] = proxyTypesRunSh;
            }
            replacements["$Extract-Both.bat$"] = await ReadBatResourceAsync("bat.solutionpackager.extract.both.bat", crmConnection);
            replacements["$Pack-Both.bat$"] = await ReadBatResourceAsync("bat.solutionpackager.pack.both.bat", crmConnection);
            replacements["$download.reports.bat$"] = await ReadBatResourceAsync("bat.download.reports.bat", crmConnection);
            replacements["$upload.reports.bat$"] = await ReadBatResourceAsync("bat.upload.reports.bat", crmConnection);
            replacements["$Helper.cs$"] = await TemplatePayload.ReadSharedResourceAsync("Helper.cs");
            replacements["$Program.cs$"] = await TemplatePayload.ReadSharedResourceAsync("Program.cs");
            replacements["$TracingServiceFake.cs$"] = await TemplatePayload.ReadSharedResourceAsync("TracingServiceFake.cs");
            replacements["$Runtime$"] = await TemplatePayload.ReadSharedResourceAsync("cs.console.runtime.xml");

            await SetConsoleResourceTokensAsync(replacements, crmConnection);
            await SetConsoleCoreResourceTokensAsync(replacements, crmConnection);
        }

        /// <summary>
        /// Connection-type-specific App.cs/App.config tokens of the Console
        /// (net462) project template: the resource variant selected by the
        /// connection type, with the current replacements applied once
        /// (nested tokens such as $UrlValue$ resolve here; $NameSpace$
        /// resolves on the outer payload pass — the same two-step pipeline
        /// as Replacement.SetEmbeddedResourceAsync in the VSIX).
        /// </summary>
        public static async Task SetConsoleResourceTokensAsync(Dictionary<string, string> replacements, CrmConnection crmConnection)
        {
            if (replacements == null) throw new ArgumentNullException(nameof(replacements));
            var connectionType = crmConnection?.Type;
            if (string.IsNullOrEmpty(connectionType)) return;

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

        /// <summary>
        /// Connection-type-specific AppCore.cs/AppSettings.json tokens of
        /// the Console Core project template — same selection scheme as
        /// SetConsoleResourceTokensAsync.
        /// </summary>
        public static async Task SetConsoleCoreResourceTokensAsync(Dictionary<string, string> replacements, CrmConnection crmConnection)
        {
            if (replacements == null) throw new ArgumentNullException(nameof(replacements));
            var connectionType = crmConnection?.Type;
            if (string.IsNullOrEmpty(connectionType)) return;

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

        private static async Task<string> ReadBatResourceAsync(string resourcePath, CrmConnection crmConnection)
        {
            var content = await TemplatePayload.ReadSharedResourceAsync(resourcePath);
            return ApplyCliConnectionArgs(content, crmConnection);
        }
    }
}
