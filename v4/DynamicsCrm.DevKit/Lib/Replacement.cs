using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib
{
    public class Replacement
    {
        internal static async Task SetAsync(Dictionary<string, string> replacements, FormProject form)
        {
            await AddCommonReplacementsAsync(replacements);

            replacements["$destinationdirectory$"] = $"{replacements?["$solutiondirectory$"]}\\{form.ProjectName}";
            replacements["ProjectName"] = form.ProjectName;
            replacements["$SafeProjectName$"] = form.ProjectName;
            replacements["$ConnectionString$"] = Helper.BuildConnectionString(form.CrmConnection, true);
            replacements["$NameSpace$"] = Helper.SafeNamespace(form.ProjectName);
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
