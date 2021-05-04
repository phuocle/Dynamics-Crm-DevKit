using System;
using System.Windows.Forms;
using DynamicsCrm.DevKit.SdkLogin;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Wizard;
using EnvDTE;

namespace DynamicsCrm.DevKit.Package
{
    public static class PackageHelper
    {
        public static bool GetCrmServiceClient(DTE dte)
        {
            var check = UtilityPackage.GetGlobal("CrmServiceClient", dte);
            if (check == null)
            {
                var form = new FormConnection2(dte);
                if (form.ShowDialog() == DialogResult.Cancel) return false;
                if (form.Check == "1")
                {
                    var loginForm = new FormLogin();
                    loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                    loginForm.ShowDialog();
                    if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                    {
                        UtilityPackage.SetGlobal("CrmUrl", XrmHelper.ConnectedUrl(loginForm.CrmConnectionMgr.CrmSvc), dte);
                        UtilityPackage.SetGlobal("CrmServiceClient", loginForm.CrmConnectionMgr.CrmSvc, dte);
                    }
                    else
                    {
                        UtilityPackage.SetDTEStatusBar(dte, "Connection failed");
                        return false;
                    }
                }
                else
                {
                    UtilityPackage.SetGlobal("CrmUrl", XrmHelper.ConnectedUrl(form.CrmServiceClient), dte);
                    UtilityPackage.SetGlobal("CrmServiceClient", form.CrmServiceClient, dte);
                }
            }
            return true;
        }

        private static void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }
    }
}
