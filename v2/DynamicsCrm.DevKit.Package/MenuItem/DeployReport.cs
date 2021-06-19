using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Wizard;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
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

        internal static void Click(DTE dte)
        {
            try
            {
                dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
                if (UtilityPackage.GetCrmServiceClient(dte))
                {
                    var crmServiceClient = (CrmServiceClient)UtilityPackage.GetGlobal("CrmServiceClient", dte);
                    var crmUrl = (string)UtilityPackage.GetGlobal("CrmUrl", dte);
                    UtilityPackage.SetDTEStatusBar(dte, $"[{crmUrl}] Connected");

                    var fullFileName = dte.SelectedItems.Item(1).ProjectItem.FileNames[0];

                    var cacheReportFromVS = GetCacheReportFromVS(dte, fullFileName);
                    if (cacheReportFromVS == null)
                    {
                        var cacheReportFromFile = GetCacheReportFromFile(fullFileName);

                        var formReport = new FormReport(crmServiceClient, cacheReportFromFile);
                        if (formReport.ShowDialog() == DialogResult.OK)
                        {
                            var language = formReport.Language;
                            var solution = formReport.Solution;
                            var reportName = formReport.ReportName;
                            var reportId = formReport.ReportId;

                            DoDeployReport(dte, crmServiceClient, reportId, fullFileName);
                            AddToCache(dte, language, solution, reportName, reportId, fullFileName);
                        }
                    }
                    else
                        DoDeployReport(dte, crmServiceClient, cacheReportFromVS.Value , fullFileName);

                }
                dte.StatusBar.Animate(false, vsStatusAnimation.vsStatusAnimationDeploy);
            }
            catch
            {
                UtilityPackage.SetDTEStatusBarAndStopAnimate(dte, "Deploy WebResource failed");
            }
        }

        private static SavedMappingReport GetCacheReportFromFile(string fullFileName)
        {
            return DevKitSetting.SelectedReports.Where(x => x.FullFileName == fullFileName).FirstOrDefault();
        }

        private static NameValueGuid GetCacheReportFromVS(DTE dte, string fullFileName)
        {
            var reports = (List<NameValueGuid>)UtilityPackage.GetGlobal("Reports", dte);
            if (reports == null) return null;
            return reports.Where(x => x.Name == fullFileName).FirstOrDefault();
        }

        private static void AddToCache(DTE dte, int language, string solution, string reportName, Guid reportId, string fullFileName)
        {
            //Save to VS caeched, get this first
            var reports = (List<NameValueGuid>)UtilityPackage.GetGlobal("Reports", dte);
            if (reports == null) reports = new List<NameValueGuid>();
            var selectedCacheFromVS = reports.Where(x => x.Name == fullFileName).FirstOrDefault();
            if (selectedCacheFromVS != null) reports.Remove(selectedCacheFromVS);
            reports.Add(new NameValueGuid
            {
                Name = fullFileName,
                Value = reportId
            });
            UtilityPackage.SetGlobal("Reports", reports, dte);

            //Saved to existing file, get later
            var selectedCacheFromFile = DevKitSetting.SelectedReports.Where(x => x.FullFileName == fullFileName).FirstOrDefault();
            if (selectedCacheFromFile != null) DevKitSetting.SelectedReports.Remove(selectedCacheFromFile);
            DevKitSetting.SelectedReports.Add(new SavedMappingReport
            {
                Language = language,
                FullFileName = fullFileName,
                ReportName = reportName,
                Solution = solution
            });
        }

        private static void DoDeployReport(DTE dte, CrmServiceClient crmServiceClient, Guid reportId, string fullFileName)
        {
            var update = new Entity("report", reportId);
            update["bodytext"] = File.ReadAllText(fullFileName);
            try
            {
                crmServiceClient.Update(update);
                UtilityPackage.SetDTEStatusBar(dte, $"Deployed: [{fullFileName}]");
            }
            catch
            {
                UtilityPackage.SetDTEStatusBar(dte, $"Deploy report failed !!!");
            }
        }
    }
}
