using System;
using System.Windows.Forms;
using DynamicsCrm.DevKit.SdkLogin;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Wizard;
using EnvDTE;

namespace DynamicsCrm.DevKit.Package
{
    public static class UtilityPackage
    {
        public static object GetGlobal(string globalName, DTE dte)
        {
            var globals = dte.Globals;
            return globals.VariableExists[globalName] ? globals[globalName] : null;
        }

        public static void SetGlobal(string globalName, object value, DTE dte)
        {
            var globals = dte.Globals;
            globals[globalName] = value;
        }

        public static void SetDTEStatusBar(DTE dte, string text)
        {
            dte.StatusBar.Text = text;
        }

        public static void SetDTEStatusBarAndStopAnimate(DTE dte, string text)
        {
            dte.StatusBar.Text = text;
            dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
        }

        public static bool GetCrmServiceClient(DTE dte)
        {
            var check = GetGlobal("CrmServiceClient", dte);
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
                        SetGlobal("CrmUrl", XrmHelper.ConnectedUrl(loginForm.CrmConnectionMgr.CrmSvc), dte);
                        SetGlobal("CrmServiceClient", loginForm.CrmConnectionMgr.CrmSvc, dte);
                    }
                    else
                    {
                        SetDTEStatusBar(dte, "Connection failed");
                        return false;
                    }
                }
                else
                {
                    SetGlobal("CrmUrl", XrmHelper.ConnectedUrl(form.CrmServiceClient), dte);
                    SetGlobal("CrmServiceClient", form.CrmServiceClient, dte);
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
