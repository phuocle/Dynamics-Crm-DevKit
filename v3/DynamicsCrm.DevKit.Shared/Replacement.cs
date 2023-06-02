using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Windows.Forms;

namespace DynamicsCrm.DevKit.Shared
{
    public class Replacement
    {
        private static Dictionary<string, string> replacements = new Dictionary<string, string>();
        public static string DestinationDirectory => replacements["$destinationdirectory$"];

        internal static void Set(Dictionary<string, string> replacementsDictionary, FormProject form)
        {
            replacements = replacementsDictionary;
            AddCommonReplacements();

            replacements["$destinationdirectory$"] = $"{Directory.GetParent(DestinationDirectory).FullName}\\{form.ProjectName}";
            replacements["$projectname$"] = form.ProjectName;
            replacements["$safeprojectname$"] = form.ProjectName;

            replacements.Add("$NameSpace$", Utility.SafeNamespace(form.ProjectName));
            replacements.Add("$IsOOBConnection$", form.IsOOBConnection ? "1" : "0");
            replacements.Add("$CrmConnectionString$", XrmHelper.BuildConnectionString(form.DataverseConnectionString));
        }

        private static void AddCommonReplacements()
        {
            replacements.Add("$DevKitVersion$", Const.Version);
            replacements.Add("$SharedNameSpace$", $"{VsixHelper.GetSolutionName()}.Shared");
        }
    }
}
