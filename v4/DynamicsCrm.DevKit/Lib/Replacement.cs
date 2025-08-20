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
            var projectName = Helper.SafeIdentifier(form.ProjectName);
            await AddCommonReplacementsAsync(replacements);
            SetConnectionValues(replacements, form.CrmConnection);

            replacements["$destinationdirectory$"] = $"{replacements?["$solutiondirectory$"]}\\{form.ProjectName}";
            replacements["$ProjectName$"] = projectName;
            replacements["$SafeProjectName$"] = projectName;
            replacements["$ConnectionString$"] = Helper.BuildConnectionString(form.CrmConnection, true);
            replacements["$NameSpace$"] = projectName;
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
