using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    public class Replacement
    {
        internal static async Task SetAsync(Dictionary<string, string> replacements, FormItem form)
        {
            await AddCommonReplacementsAsync(replacements);
            SetConnectionValues(replacements, form.CrmConnection);

            replacements["$SchemaName$"] = form.ItemName;
        }

        internal static async Task SetAsync(Dictionary<string, string> replacements, FormProject form)
        {
            await AddCommonReplacementsAsync(replacements);
            await AddNuGetAsync(replacements);
            SetConnectionValues(replacements, form.CrmConnection);
            await SetEmbeddedResourceAsync(replacements, form.CrmConnection);
            replacements["$destinationdirectory$"] = $"{replacements?["$solutiondirectory$"]}\\{form.ProjectName}";
            replacements["$ProjectName$"] = form.ProjectName;
            replacements["$LogicalProjectName$"] = form.ProjectName.ToLower();
            replacements["$SafeProjectName$"] = form.ProjectName;
            replacements["$CliConnectionArgs$"] = CliArgsBuilder.Build(form.CrmConnection, true);
            replacements["$NameSpace$"] = Helper.SafeNamespace(form.ProjectName);
        }

        private static async Task SetEmbeddedResourceAsync(Dictionary<string, string> replacements, CrmConnection crmConnection = null)
        {
            var connectionType = crmConnection?.Type;

            replacements["$deploy.debug.bat$"] = await ReadBatResourceAsync("bat.plugin.deploy.debug.bat", crmConnection);
            replacements["$deploy.debug.only.bat$"] = await ReadBatResourceAsync("bat.plugin.deploy.debug.only.bat", crmConnection);
            replacements["$webresource.deploy.debug.bat$"] = await ReadBatResourceAsync("bat.webresource.deploy.debug.bat", crmConnection);
            replacements["$webresource.deploy.debug.ts.bat$"] = await ReadBatResourceAsync("bat.webresource.deploy.debug.ts_bat", crmConnection);
            replacements["$devkit.d.ts$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.devkit.d.ts");
            replacements["$devkit.js$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.devkit.js");
            replacements["$devkit.ts$"] = await VsixHelper.ReadEmbeddedResourceAsync("ts.devkit.ts");
            replacements["$devkitts.d.ts$"] = await VsixHelper.ReadEmbeddedResourceAsync("ts.devkit.d.ts");
            replacements["$build.js$"] = await VsixHelper.ReadEmbeddedResourceAsync("ts.build.js");
            replacements["$generator.form.bat$"] = await ReadBatResourceAsync("bat.generator.form.bat", crmConnection);
            replacements["$generator.form.ts.bat$"] = await ReadBatResourceAsync("bat.generator.form.ts_bat", crmConnection);
            replacements["$generator.webapi.bat$"] = await ReadBatResourceAsync("bat.generator.webapi.bat", crmConnection);
            replacements["$generator.webapi.ts.bat$"] = await ReadBatResourceAsync("bat.generator.webapi.ts_bat", crmConnection);
            replacements["$package.json$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.package.json");
            replacements["$jsconfig.json$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.jsconfig.json");
            replacements["$generator.latebound.bat$"] = await ReadBatResourceAsync("bat.generator.latebound.bat", crmConnection);
            replacements["$run.bat$"] = await ReadBatResourceAsync("bat.proxytypes.run.bat", crmConnection);
            replacements["$Extract-Both.bat$"] = await ReadBatResourceAsync("bat.solutionpackager.extract.both.bat", crmConnection);
            replacements["$Pack-Both.bat$"] = await ReadBatResourceAsync("bat.solutionpackager.pack.both.bat", crmConnection);
            replacements["$download.reports.bat$"] = await ReadBatResourceAsync("bat.download.reports.bat", crmConnection);
            replacements["$upload.reports.bat$"] = await ReadBatResourceAsync("bat.upload.reports.bat", crmConnection);
            replacements["$Helper.cs$"] = await VsixHelper.ReadEmbeddedResourceAsync("Helper.cs");
            replacements["$Program.cs$"] = await VsixHelper.ReadEmbeddedResourceAsync("Program.cs");
            replacements["$TracingServiceFake.cs$"] = await VsixHelper.ReadEmbeddedResourceAsync("TracingServiceFake.cs");

            // Shared runtime assembly binding redirects
            replacements["$Runtime$"] = await VsixHelper.ReadEmbeddedResourceAsync("cs.console.runtime.xml");

            // Connection-type-specific App.cs and App.config for Console projects
            if (!string.IsNullOrEmpty(connectionType))
            {
                var appCsResource = await VsixHelper.ReadEmbeddedResourceAsync($"cs.console.App.{connectionType}.cs");
                if (!string.IsNullOrEmpty(appCsResource))
                {
                    // Apply replacements to embedded resource content
                    appCsResource = ApplyReplacements(appCsResource, replacements);
                    replacements["$App.cs$"] = appCsResource;
                }

                var appConfigResource = await VsixHelper.ReadEmbeddedResourceAsync($"cs.console.App.config.{connectionType}");
                if (!string.IsNullOrEmpty(appConfigResource))
                {
                    // Apply replacements to embedded resource content
                    appConfigResource = ApplyReplacements(appConfigResource, replacements);
                    replacements["$App.config$"] = appConfigResource;
                }
            }

            // Connection-type-specific App.cs and AppSettings.json for Console Core projects
            if (!string.IsNullOrEmpty(connectionType))
            {
                var appCsCoreResource = await VsixHelper.ReadEmbeddedResourceAsync($"cs.consolecore.App.{connectionType}.cs");
                if (!string.IsNullOrEmpty(appCsCoreResource))
                {
                    appCsCoreResource = ApplyReplacements(appCsCoreResource, replacements);
                    replacements["$AppCore.cs$"] = appCsCoreResource;
                }

                var appSettingsResource = await VsixHelper.ReadEmbeddedResourceAsync($"cs.consolecore.AppSettings.{connectionType}.json");
                if (!string.IsNullOrEmpty(appSettingsResource))
                {
                    appSettingsResource = ApplyReplacements(appSettingsResource, replacements);
                    replacements["$AppSettings.json$"] = appSettingsResource;
                }
            }
        }

        internal static async Task<string> ReadBatResourceAsync(string resourcePath, CrmConnection crmConnection)
        {
            var content = await VsixHelper.ReadEmbeddedResourceAsync(resourcePath);
            return ApplyCliConnectionArgs(content, crmConnection);
        }

        internal static string ApplyCliConnectionArgs(string content, CrmConnection crmConnection)
        {
            if (content == null) return null;

            var cliConnectionArgs = CliArgsBuilder.Build(crmConnection, true);
            if (string.IsNullOrWhiteSpace(cliConnectionArgs))
            {
                content = content.Replace(" $CliConnectionArgs$", string.Empty);
                return content.Replace("$CliConnectionArgs$", string.Empty);
            }

            content = content.Replace(" $CliConnectionArgs$", $" {cliConnectionArgs}");
            return content.Replace("$CliConnectionArgs$", cliConnectionArgs);
        }

        private static string ApplyReplacements(string content, Dictionary<string, string> replacements)
        {
            foreach (var kvp in replacements)
            {
                if (kvp.Value != null)
                {
                    content = content.Replace(kvp.Key, kvp.Value);
                }
            }
            return content;
        }

        private static async Task AddNuGetAsync(Dictionary<string, string> replacements)
        {
            await NuGetHelper.SetReplacementAsync(replacements, "DynamicsCrm.DevKit.Analyzers");
            await NuGetHelper.SetReplacementAsync(replacements, "DynamicsCrm.DevKit.Cli");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.CrmSdk.CoreAssemblies");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.CrmSdk.Workflow");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.CrmSdk.CoreTools");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.PowerPlatform.Dataverse.Client");
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

        public static void SetConnectionValues(Dictionary<string, string> replacements, CrmConnection crmConnection)
        {
            replacements["$AuthTypeValue$"] = crmConnection?.Type ?? string.Empty;
            replacements["$UrlValue$"] = crmConnection?.Url ?? string.Empty;

            // Generic placeholders (for backward compatibility)
            replacements["$UserNameValue$"] = crmConnection?.UserName ?? string.Empty;
            replacements["$PasswordValue$"] = crmConnection == null ? string.Empty : Helper.DecryptString(crmConnection.Password) ?? string.Empty;

            // ClientSecret-specific placeholders
            replacements["$ClientIdValue$"] = crmConnection?.ClientId ?? string.Empty;
            replacements["$ClientSecretValue$"] = crmConnection == null ? string.Empty : Helper.DecryptString(crmConnection.ClientSecret) ?? string.Empty;

            // FromPac-specific placeholders
            replacements["$PacProfileValue$"] = crmConnection?.PacProfile ?? string.Empty;
        }

        private static async Task AddCommonReplacementsAsync(Dictionary<string, string> replacements)
        {
            var solutionName = await VsixHelper.GetSolutionNameAsync();
            replacements["$DevKitVersion$"] = Const.VersionBuild;
            replacements["$SharedNameSpace$"] = $"{solutionName}.{ProjectType.Shared}";
            replacements["$SharedProject$"] = await VsixHelper.GetSharedProjectAsync();
            replacements["$SharedTestProject$"] = $"{solutionName}.{ProjectType.Shared}.{ProjectType.Test}";
            replacements["$ProjectProxyTypes$"] = $"{solutionName}.{ProjectType.ProxyTypes}";
        }
    }
}
