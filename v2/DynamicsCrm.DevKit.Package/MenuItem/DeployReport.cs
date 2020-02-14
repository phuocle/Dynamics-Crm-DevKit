using System;
using System.IO;
using System.Linq;
using System.Windows.Forms;
using System.Xml.Linq;
using EnvDTE;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;

namespace DynamicsCrm.DevKit.Package.MenuItem
{
    public class DeployReport
    {
        public const int CommandDeployReportId = 0x0300;
        public static readonly Guid CommandSetDeployReport = new Guid("0c1acc31-15ac-417c-86b2-eefdc669e8bd");
        private static string ProjectUniqueName { get; set; }
        private static DTE DTE { get; set; }

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
            dte.StatusBar.Animate(true, vsStatusAnimation.vsStatusAnimationDeploy);
            var selectedItem = dte.SelectedItems.Item(1);
            ProjectUniqueName = selectedItem.ProjectItem.ContainingProject.UniqueName;
            var activeConfiguration = dte.Solution.SolutionBuild.ActiveConfiguration.Name;
            DTE = dte;
            try
            {
                UtilityPackage.SetDTEStatusBar(dte, "Building project report...");
                dte.Events.BuildEvents.OnBuildProjConfigDone += BuildEvents_OnBuildProjConfigDone;
                dte.Solution.SolutionBuild.BuildProject(activeConfiguration, ProjectUniqueName, true);
            }
            catch
            {
                dte.Events.BuildEvents.OnBuildProjConfigDone -= BuildEvents_OnBuildProjConfigDone;
                UtilityPackage.SetDTEStatusBar(dte, "   !!!   Building project report fail   !!!   ", true);
                MessageBox.Show("Build report project fail. Please double check and try it again.", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private static void BuildEvents_OnBuildProjConfigDone(string Project, string ProjectConfig, string Platform, string SolutionConfig, bool Success)
        {
            DTE.Events.BuildEvents.OnBuildProjConfigDone -= BuildEvents_OnBuildProjConfigDone;
            if (!Success || !ProjectUniqueName.EndsWith(Project)) return;
            UtilityPackage.SetDTEStatusBar(DTE, "Build project report succeeded!");
#if DEBUG
            ProjectUniqueName = @"C:\src\github\phuocle\Dynamics-Crm-DevKit\test\TestReport\Test.Abc.Report.2015\Test.Abc.Report.2015.rptproj";
#endif
            var xml = File.ReadAllText(ProjectUniqueName);
            var xdoc = XDocument.Parse(xml);
            //Fist check for project VS2015
            var node = (from x in xdoc?.Descendants("Project")?.Descendants("Configurations")?.Elements("Configuration")
                        where x?.Element("Name")?.Value == ProjectConfig
                        select x)?.FirstOrDefault();
            var outputPath = node?.Descendants("Options")?.FirstOrDefault()?.Element("OutputPath")?.Value;
            //if null, then check for project VS2017
            if (outputPath == null)
            {
                var nodes = (from x in xdoc?.Root.Elements()
                             where x?.Name?.LocalName == "PropertyGroup"
                             select x);
                foreach (var n in nodes)
                {
                    if (n.Elements().Where(x => x?.Name?.LocalName == "FullPath" && x?.Value == "Debug").Any())
                    {
                        outputPath = n.Elements().Where(x => x?.Name?.LocalName == "OutputPath").FirstOrDefault()?.Value;
                        break;
                    }
                }
            }
            if (outputPath == null) throw new Exception("Cannot read the Output directory of the current report project");
            var folderOutput = Path.Combine(Path.GetDirectoryName(ProjectUniqueName), outputPath);
            var fileName = Path.GetFileName(DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]);
            var deployFile = Path.Combine(folderOutput, fileName);
            if (!File.Exists(deployFile)) throw new Exception($"Cannot find deployable report: {deployFile}");

            var config = UtilityPackage.IsValid(DTE);
            if (config == null) return;
            UtilityPackage.SetDTEStatusBar(DTE, " !!! Read DynamicsCrm.DevKit.Cli.json config !!! ");
            var check = UtilityPackage.GetGlobal("CrmService", DTE);
            if (check == null)
            {
                var connection = UtilityPackage.IsConnection(config.CrmConnection);
                if (connection == null)
                {
                    UtilityPackage.SetDTEStatusBar(DTE, " !!! Connection Dynamics CRM  failed !!! ", true);
                    return;
                }
                UtilityPackage.SetGlobal("CrmService", connection, DTE);
            }
            var crmService = (IOrganizationService)UtilityPackage.GetGlobal("CrmService", DTE);
            UtilityPackage.SetDTEStatusBar(DTE, " !!! Connected Dynamics CRM !!! ");

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
            var rows = crmService.RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count == 0) throw new Exception("Please deploy this report first by Dynamics 365");
            if (rows.Entities.Count != 1) throw new Exception($"Found {rows.Entities.Count} reports file name: {fileName} in the system. Cannot deploy.");
            UtilityPackage.SetDTEStatusBar(DTE, "Deploying Report ...");
            var update = new Entity("report", rows.Entities[0].Id);
            update["bodytext"] = File.ReadAllText(deployFile);
            crmService.Update(update);
            UtilityPackage.SetDTEStatusBar(DTE, "   !!!   Deploy Report succeeded   !!!   ", true);
        }
    }
}
