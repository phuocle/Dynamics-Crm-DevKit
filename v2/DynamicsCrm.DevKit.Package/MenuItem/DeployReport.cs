using System;
using System.IO;
using System.Windows.Forms;
using DynamicsCrm.DevKit.SdkLogin;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Wizard;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Package.MenuItem
{
    public class DeployReport
    {
        public const int CommandDeployReportId = 0x0300;
        public static readonly Guid CommandSetDeployReport = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bd");

        internal static void BeforeQueryStatus(object sender, DTE dte)
        {
            var menuCommand = sender as OleMenuCommand;
            menuCommand.Visible = false;
            try
            {
                if (dte == null || dte.SelectedItems == null || dte.SelectedItems.Count != 1) return;
                var selectedItem = dte.SelectedItems.Item(1);
                if (selectedItem.ProjectItem == null) return;
                var fileName = selectedItem.ProjectItem.FileNames[0];
                var extension = Path.GetExtension(fileName);
                if (extension != ".rdl") return;
                menuCommand.Visible = true;
            }
            catch { }
        }

        private static void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }

        internal static void Click(DTE dte)
        {
            try
            {
                dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
                var check = UtilityPackage.GetGlobal("CrmService", dte);
                if (check == null)
                {
                    var form = new FormConnection2(dte);
                    if (form.ShowDialog() == DialogResult.Cancel) return;
                    if (form.Check == "1")
                    {
                        var loginForm = new FormLogin();
                        loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                        loginForm.ShowDialog();
                        if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                        {
                            UtilityPackage.SetGlobal("CrmServiceClient", loginForm.CrmConnectionMgr.CrmSvc, dte);
                        }
                        else
                        {
                            UtilityPackage.SetDTEStatusBar(dte, "Connection failed", true);
                            return;
                        }
                    }
                    else
                    {
                        UtilityPackage.SetGlobal("CrmUrl", XrmHelper.ConnectedUrl(form.CrmServiceClient), dte);
                        UtilityPackage.SetGlobal("CrmServiceClient", form.CrmServiceClient, dte);
                    }
                }
                var crmServiceClient = (CrmServiceClient)UtilityPackage.GetGlobal("CrmServiceClient", dte);
                var crmUrl = (string)UtilityPackage.GetGlobal("CrmUrl", dte);

                UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] Connected");

                var fullFileName = dte.SelectedItems.Item(1).ProjectItem.FileNames[0];
                var fileName = Path.GetFileName(fullFileName);
                var reportId = GetReportId(crmServiceClient, fileName);
                if (reportId == Guid.Empty)
                {
                    UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] Report: {fileName} not found", true);
                }
                else
                {
                    var update = new Entity("report", reportId);
                    update["bodytext"] = File.ReadAllText(fullFileName);
                    crmServiceClient.Update(update);
                    UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] Deployed: {fileName}", true);
                }
            }
            catch
            {
                UtilityPackage.SetDTEStatusBar(dte, "Deploy report failed", true);
            }
        }

        private static Guid GetReportId(CrmServiceClient crmServiceClient, string fileName)
        {
            var fetchData = new
            {
                ismanaged = "0",
                filename = fileName
            };
            var fetchXml = $@"
            <fetch>
              <entity name='report'>
                <attribute name='reportid' />
                <filter type='and'>
                  <condition attribute='ismanaged' operator='eq' value='{fetchData.ismanaged/*0*/}'/>
                  <condition attribute='filename' operator='eq' value='{fetchData.filename/*ReportTemplate.rdl*/}'/>
                </filter>
              </entity>
            </fetch>";
            var rows = crmServiceClient.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1) return Guid.Empty;
            return rows.Entities[0].Id;
        }
    }
}
