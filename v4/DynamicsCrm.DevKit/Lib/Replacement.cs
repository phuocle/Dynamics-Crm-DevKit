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
        internal static async Task SetAsync(Dictionary<string, string> replacements, FormProject form)
        {
            await AddCommonReplacementsAsync(replacements);
            await AddNuGetAsync(replacements);
            SetConnectionValues(replacements, form.CrmConnection);
            await SetEmbeddedResourceAsync(replacements);
            replacements["$destinationdirectory$"] = $"{replacements?["$solutiondirectory$"]}\\{form.ProjectName}";
            replacements["$ProjectName$"] = form.ProjectName;
            replacements["$LogicalProjectName$"] = form.ProjectName.ToLower();
            replacements["$SafeProjectName$"] = form.ProjectName;
            replacements["$ConnectionString$"] = Helper.BuildConnectionString(form.CrmConnection, true);
            replacements["$NameSpace$"] = Helper.SafeNamespace(form.ProjectName);
        }

        private static async Task SetEmbeddedResourceAsync(Dictionary<string, string> replacements)
        {
            replacements["$deploy.debug.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("plugin.deploy.debug.bat");
            replacements["$deploy.debug.only.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("plugin.deploy.debug.only.bat");
            replacements["$webresource.deploy.debug.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("webresource.deploy.debug.bat");
            replacements["$devkit.d.ts$"] = await VsixHelper.ReadEmbeddedResourceAsync("devkit.d.ts");
            replacements["$devkit.js$"] = await VsixHelper.ReadEmbeddedResourceAsync("devkit.js");
            replacements["$generator.form.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("generator.form.bat");
            replacements["$generator.webapi.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("generator.webapi.bat");
            replacements["$package.json$"] = await VsixHelper.ReadEmbeddedResourceAsync("package.json");
            replacements["$generator.latebound.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("generator.latebound.bat");
            replacements["$download.reports.bat$"] = await VsixHelper.ReadEmbeddedResourceAsync("download.reports.bat");
        }

        private static async Task AddNuGetAsync(Dictionary<string, string> replacements)
        {
            await NuGetHelper.SetReplacementAsync(replacements, "DynamicsCrm.DevKit.Analyzers");
            await NuGetHelper.SetReplacementAsync(replacements, "DynamicsCrm.DevKit.Cli");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.CrmSdk.CoreAssemblies");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.CrmSdk.Workflow");
            await NuGetHelper.SetReplacementAsync(replacements, "Microsoft.CrmSdk.CoreTools");
        }

        private static void SetConnectionValues(Dictionary<string, string> replacements, CrmConnection crmConnection)
        {
            replacements["$AuthTypeValue$"] = crmConnection.Type;
            replacements["$UrlValue$"] = crmConnection.Url;
            replacements["$UserNameValue$"] = crmConnection.UserName ?? string.Empty;
            replacements["$PasswordValue$"] = Helper.DecryptString(crmConnection.Password) ?? string.Empty;
        }

        private static async Task AddCommonReplacementsAsync(Dictionary<string, string> replacements)
        {
            var solutionName = await VsixHelper.GetSolutionNameAsync();
            replacements["$DevKitVersion$"] = Const.VersionBuild;
            replacements["$SharedNameSpace$"] = $"{solutionName}.Shared";
            replacements["$SharedProject$"] = $"{solutionName}.Shared";
            replacements["$SharedTestProject$"] = $"{solutionName}.Shared.Test";
            replacements["$ProjectProxyTypes$"] = $"{solutionName}.ProxyTypes";            
        }
    }
}
