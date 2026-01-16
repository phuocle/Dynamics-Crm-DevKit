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
            await SetEmbeddedResourceAsync(replacements, form.CrmConnection.Type);
            replacements["$destinationdirectory$"] = $"{replacements?["$solutiondirectory$"]}\\{form.ProjectName}";
            replacements["$ProjectName$"] = form.ProjectName;
            replacements["$LogicalProjectName$"] = form.ProjectName.ToLower();
            replacements["$SafeProjectName$"] = form.ProjectName;
            replacements["$CliConnectionArgs$"] = CliArgsBuilder.Build(form.CrmConnection, true);
            replacements["$NameSpace$"] = Helper.SafeNamespace(form.ProjectName);
        }

        private static async Task SetEmbeddedResourceAsync(Dictionary<string, string> replacements, string connectionType = null)
        {
            replacements["$deploy.debug.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.plugin.deploy.debug.bat");
            replacements["$deploy.debug.only.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.plugin.deploy.debug.only.bat");
            replacements["$webresource.deploy.debug.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.webresource.deploy.debug.bat");
            replacements["$webresource.deploy.debug.ts.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.webresource.deploy.debug.ts_bat");
            replacements["$devkit.d.ts$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.devkit.d.ts");
            replacements["$devkit.js$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.devkit.js");
            replacements["$devkit.ts$"] = await VsixHelper.ReadEmbeddedResourceAsync("ts.devkit.ts");
            replacements["$devkitts.d.ts$"] = await VsixHelper.ReadEmbeddedResourceAsync("ts.devkit.d.ts");
            replacements["$build.js$"] = await VsixHelper.ReadEmbeddedResourceAsync("ts.build.js");
            replacements["$generator.form.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.generator.form.bat");
            replacements["$generator.form.ts.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.generator.form.ts_bat");
            replacements["$generator.webapi.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.generator.webapi.bat");
            replacements["$generator.webapi.ts.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.generator.webapi.ts_bat");
            replacements["$package.json$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.package.json");
            replacements["$jsconfig.json$"] = await VsixHelper.ReadEmbeddedResourceAsync("js.jsconfig.json");
            replacements["$generator.latebound.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.generator.latebound.bat");
            replacements["$run.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.proxytypes.run.bat");
            replacements["$Extract-Both.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.solutionpackager.extract.both.bat");
            replacements["$Pack-Both.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.solutionpackager.pack.both.bat");
            replacements["$download.reports.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("bat.download.reports.bat");
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
        }

        public static void SetConnectionValues(Dictionary<string, string> replacements, CrmConnection crmConnection)
        {
            replacements["$AuthTypeValue$"] = crmConnection.Type;
            replacements["$UrlValue$"] = crmConnection.Url;
            
            // Generic placeholders (for backward compatibility)
            replacements["$UserNameValue$"] = crmConnection.UserName ?? string.Empty;
            replacements["$PasswordValue$"] = Helper.DecryptString(crmConnection.Password) ?? string.Empty;
            
            // ClientSecret-specific placeholders
            replacements["$ClientIdValue$"] = crmConnection.ClientId ?? string.Empty;
            replacements["$ClientSecretValue$"] = Helper.DecryptString(crmConnection.ClientSecret) ?? string.Empty;
            
            // FromPac-specific placeholders
            replacements["$PacProfileValue$"] = crmConnection.PacProfile ?? string.Empty;
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
