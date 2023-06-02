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
            replacementsDictionary.Add("$ClientId$", form?.CrmConnection?.Type == "ClientSecret" ? "ClientId" : "Username");
            replacementsDictionary.Add("$ClientSecret$", form?.CrmConnection?.Type == "ClientSecret" ? "ClientSecret" : "Password");
            replacementsDictionary.Add("$AuthTypeValue$", form?.CrmConnection?.Type ?? string.Empty);
            replacementsDictionary.Add("$UrlValue$", form?.CrmConnection?.Url ?? string.Empty);
            replacementsDictionary.Add("$ClientIdValue$", form?.CrmConnection?.UserName ?? string.Empty);
            replacementsDictionary.Add("$ClientSecretValue$", form?.CrmConnection?.Type == "ClientSecret" ? form?.CrmConnection?.Password : (form?.CrmConnection?.Password != string.Empty ? EncryptDecrypt.DecryptString(form?.CrmConnection?.Password) : string.Empty) ?? string.Empty);
        }

        private static void AddCommonReplacements()
        {
            replacements.Add("$DevKitVersion$", Const.Version);
            replacements.Add("$SharedNameSpace$", $"{VsixHelper.GetSolutionName()}.Shared");
            replacements.Add("$SharedProject$", $"{VsixHelper.GetSolutionName()}.Shared");
        }
    }
}
