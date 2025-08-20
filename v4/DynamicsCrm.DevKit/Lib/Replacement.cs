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
            replacements["$destinationdirectory$"] = $"{replacements?["$solutiondirectory$"]}\\{form.ProjectName}";
            replacements["$ProjectName$"] = form.ProjectName;
            replacements["$SafeProjectName$"] = form.ProjectName;
            replacements["$ConnectionString$"] = Helper.BuildConnectionString(form.CrmConnection, true);
            replacements["$NameSpace$"] = Helper.SafeNamespace(form.ProjectName);
        }

        private static async Task AddNuGetAsync(Dictionary<string, string> replacements)
        {
            await NuGetHelper.SetReplacementAsync(replacements, "DynamicsCrm.DevKit.Analyzers");
            await NuGetHelper.SetReplacementAsync(replacements, "DynamicsCrm.DevKit.Cli");
        }

        private static void SetConnectionValues(Dictionary<string, string> replacements, CrmConnection crmConnection)
        {
            replacements["$AuthTypeValue$"] = crmConnection.Type;
            replacements["$UrlValue$"] = crmConnection.Url;
            replacements["$UserNameValue$"] = crmConnection.UserName ?? string.Empty;
            replacements["$PasswordValue$"] = crmConnection.Password ?? string.Empty;
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
