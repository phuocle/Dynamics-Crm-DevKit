using System.Windows.Forms;
using EnvDTE;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk.Client;
using System.Drawing;
using PL.DynamicsCrm.DevKit.Shared.Xrm;
using PL.DynamicsCrm.DevKit.Shared;
using PL.DynamicsCrm.DevKit.Shared.NuGet;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public partial class FormProject : Form
    {
        public string CrmVersion {
            get
            {
                return cboCrmVersion.Text;
            }
        }

        public string NetVersion
        {
            get
            {
                return cboNetVersion.Text;
            }
        }

        public string ProjectName
        {
            get
            {
                return lblProjectName.Text;
            }
        }
        public string EntityName { get; set; }
        public string AssemblyName => ProjectName;
        public string CrmConnectionString
        {
            get
            {
                var url = CrmConnection.Url.Substring(0, CrmConnection.Url.Length - "/XRMServices/2011/Organization.svc".Length);
                url = url.Replace(".api.", ".");
                if (CrmConnection.Url.Contains(".dynamics.com"))
                    return $"AuthType=Office365;Url={url};Username={CrmConnection.UserName};Password={CrmConnection.Password};";
                else
                {
                    var domain = CrmConnection.UserName.Split("\\".ToCharArray())[0];
                    var user = CrmConnection.UserName.Split("\\".ToCharArray())[1];
                    return $"AuthType=AD;Url={url};Domain={domain};Username={user};Password={CrmConnection.Password};";
                }
            }
        }

        public string CrmConnectionString2
        {
            get
            {
                var url = CrmConnection.Url.Substring(0, CrmConnection.Url.Length - "/XRMServices/2011/Organization.svc".Length);
                url = url.Replace(".api.", ".");
                return $"{url}\t{CrmConnection.UserName}\t{CrmConnection.Password}";
            }
        }

        public string RootNamespace
        {
            get
            {
                var parts = ProjectName.Split(".".ToCharArray());
                if (parts.Length == 3)
                    return ProjectName;
                return $"{parts[0]}.{parts[1]}.{parts[2]}";
            }
        }

        public OrganizationServiceProxy CrmService { get; set; }
        public CrmConnection CrmConnection { get; set; }
        private FormType _formType;
        private DTE DTE { get; set; }

        public FormType FormType {
            get
            {
                return _formType;
            }
            set
            {
                var solutionFullName = DTE?.Solution?.FullName;
                var fInfo = new FileInfo(solutionFullName);
                var parts = fInfo?.Name?.Split(".".ToCharArray());
                _formType = value;

                txtName.Visible = false;
                cboEntity.Visible = false;
                btnConnection.Visible = false;

                switch (_formType)
                {
                    case FormType.Console:
                        txtName.Visible = true;
                        Text = "Add new Console Project";
                        lblProjectName.Text = $"{parts[0]}.{parts[1]}.{FormType.Console.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        break;
                    case FormType.WebResource:
                        txtName.Visible = true;
                        Text = "Add new WebResource Project";
                        lblProjectName.Text = $"{parts[0]}.{parts[1]}.{FormType.WebResource.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        break;
                    case FormType.Plugin:
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Text = "Add new Plugin Project";
                        lblProjectName.Text = $"{parts[0]}.{parts[1]}.{FormType.Plugin.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        break;
                    case FormType.Test:
                        cboEntity.Visible = true;
                        Text = "Add new Test Project";
                        lblProjectName.Text = $"???.Test";
                        LoadProjects();
                        break;
                    case FormType.TestItem:
                        Size = new Size(626, 177);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        cboEntity.Visible = true;
                        Text = "Add new Test Class";
                        lblProject.Text = "Class";
                        lblProjectName.Text = $"???.Test";
                        LoadClasses();
                        break;
                    case FormType.Workflow:
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        chkOthers.Visible = true;
                        Text = "Add new Workflow Project";
                        lblProjectName.Text = $"{parts[0]}.{parts[1]}.{FormType.Workflow.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        break;
                    case FormType.WorkflowItem:
                        Size = new Size(626, 177);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        txtName.Visible = true;
                        Text = "Add new Workflow Item";
                        lblProject.Text = "Class Name";
                        lblProjectName.Text = $"{parts[0]}{parts[1]}{FormType.Workflow.ToString()}{EntityName}";
                        lblProjectName.Tag = lblProjectName.Text;
                        break;
                    case FormType.CustomAction:
                        txtName.Visible = true;
                        Text = "Add new Custom Action Project";
                        lblProjectName.Text = $"{parts[0]}.{parts[1]}.{FormType.CustomAction.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        break;
                    case FormType.LateBoundClass:
                        Size = new Size(626, 177);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Text = "Add new Late Bound Class";
                        lblProject.Text = "Class:";
                        lblProjectName.Text = $"";
                        break;
                    case FormType.JsWebApiItem:
                        Size = new Size(626, 177);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Text = "Add new Js WebApi Class";
                        lblProject.Text = "Class:";
                        lblProjectName.Text = $"";
                        break;
                    case FormType.ProxyTypes:
                        txtName.Visible = true;
                        txtName.Enabled = false;
                        Text = "Add new Proxy Types Project";
                        lblProjectName.Tag = $"{parts[0]}.{parts[1]}";
                        txtName.Text = "ProxyTypes";
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        break;
                    case FormType.UiTest:
                        txtName.Visible = true;
                        Text = "Add new Ui Test Project";
                        lblProjectName.Text = $"{parts[0]}.{parts[1]}.{FormType.UiTest.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = false;
                        btnOk.Enabled = true;
                        break;
                    case FormType.UiTestItem:
                        Size = new Size(626, 177);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        txtName.Visible = true;
                        Text = "Add new Ui Test Item";
                        lblProject.Text = "Class Name";
                        lblProjectName.Text = "";
                        lblProjectName.Tag = lblProjectName.Text;
                        break;
                    case FormType.Report:
                        txtName.Visible = true;
                        Text = "Add new Report Project";
                        lblProjectName.Text = $"{parts[0]}.{parts[1]}.{FormType.Report.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = false;
                        btnOk.Enabled = true;
                        break;
                }
            }
        }

        public string Class
        {
            get
            {
                var @class = cboEntity.Text;
                if (@class.EndsWith("Synchronous"))
                    return @class.Substring(0, @class.Length - "Synchronous".Length);
                else if (@class.EndsWith("Asynchronous"))
                    return @class.Substring(0, @class.Length - "Asynchronous".Length);
                return @class;
            }
        }

        private string _generated = string.Empty;
        public string Generated
        {
            get
            {
                if (_generated == string.Empty)
                {
                    Cursor = Cursors.WaitCursor;
                    btnOk.Enabled = false;
                    btnCancel.Enabled = false;
                    var lateBound = new GeneratedCSharpLateBound();
                    var solutionFullName = DTE?.Solution?.FullName;
                    var fInfo = new FileInfo(solutionFullName);
                    var parts = fInfo?.Name?.Split(".".ToCharArray());
                    var companyName = parts[0];
                    var projectName = parts[1];
                    var entityName = lblProjectName.Text;
                    _generated = lateBound.Go(CrmService, companyName, projectName, entityName);
                    Cursor = Cursors.Default;
                }
                return _generated;
            }
        }

        public string GeneratedJsWebApi { get; set; }

        public string MessageError { get; set; }
        public void DoGeneratorCode()
        {
            Cursor = Cursors.WaitCursor;
            btnOk.Enabled = false;
            btnCancel.Enabled = false;
            var js = new GeneratedJScriptLateBound();
            var solutionFullName = DTE?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo?.Name?.Split(".".ToCharArray());
            var projectName = parts[1];
            var entityName = lblProjectName.Text;

            var codeAndIntellisense = js.GoFormCode(CrmService, projectName, entityName);
            MessageError = codeAndIntellisense.Message;
            GeneratedJsForm = codeAndIntellisense.FormCode;
            GeneratedJsIntellisenseForm = codeAndIntellisense.FormIntellisense;
            GeneratedJsWebApi = codeAndIntellisense.WebApiCode;
            GeneratedJsIntellisense = codeAndIntellisense.WebApiIntellisense;
            btnCancel.Enabled = true;
            btnOk.Enabled = true;
            Cursor = Cursors.Default;
        }


        public string GeneratedJsForm { get; set; }

        public string GeneratedJsIntellisense { get; set; }

        public string GeneratedJsIntellisenseForm { get; set; }

        public string FilteringAttributes
        {
            get
            {
                if (Class.EndsWith("Update"))
                {
                    var code = string.Empty;
                    code += $"\t\t[TestMethod]\r\n";
                    code += $"\t\tpublic void {Class}_CrmPluginRegistration_Check_FilteringAttributes()\r\n";
                    code += $"\t\t{{\r\n";
                    code += $"\t\t\tvar @class = new {cboEntity.Text}();\r\n";
                    code += $"\t\t\tforeach(var attribute in Attribute.GetCustomAttributes(@class.GetType()))\r\n";
                    code += $"\t\t\t{{\r\n";
                    code += $"\t\t\t\tif (attribute.GetType().Equals(typeof(CrmPluginRegistrationAttribute)))\r\n";
                    code += $"\t\t\t\t{{\r\n";
                    code += $"\t\t\t\t\tvar check = attribute as CrmPluginRegistrationAttribute;\r\n";
                    code += $"\t\t\t\t\t Assert.IsNotNull(check.FilteringAttributes);\r\n";
                    code += $"\t\t\t\t}}\r\n";
                    code += $"\t\t\t\telse\r\n";
                    code += $"\t\t\t\t\tAssert.Fail();\r\n";
                    code += $"\t\t\t}}\r\n";
                    code += $"\t\t}}\r\n";
                    return code;
                }
                return string.Empty;
            }
        }

        public string Message
        {
            get
            {
                var @class = cboEntity.Text;
                var stage = string.Empty;
                if (StageString == "PostOperation") stage = "Post";
                if (StageString == "PreValidation") stage = "PreValidation";
                if (StageString == "PreOperation") stage = "Pre";
                if (stage.Length == 0) return string.Empty;
                var temp = @class.Substring((stage + EntityName).Length);
                return temp.Substring(0, temp.Length - Execution.Length);
            }
        }

        public string StageString
        {
            get
            {
                var @class = cboEntity.Text;
                if (@class.StartsWith("Post"))
                    return "PostOperation";
                else if (@class.StartsWith("PreValidation"))
                    return "PreValidation";
                else if (@class.StartsWith("Pre"))
                    return "PreOperation";
                return @class;
            }
        }

        public string Execution
        {
            get
            {
                var @class = cboEntity.Text;
                if (@class.EndsWith("Synchronous"))
                    return "Synchronous";
                else if (@class.EndsWith("Asynchronous"))
                    return "Asynchronous";
                if (FormType == FormType.TestItem)
                    return string.Empty;
                return @class;
            }
        }

        private List<ProjectItem> projectItems = new List<ProjectItem>();
        private List<ProjectItem> projectItems2 = new List<ProjectItem>();

        ProjectItem GetFiles(ProjectItem item)
        {
            if (item.ProjectItems == null)
                return item;
            var items = item.ProjectItems.GetEnumerator();
            while (items.MoveNext())
            {
                var currentItem = (ProjectItem)items.Current;
                projectItems.Add(GetFiles(currentItem));
            }
            return item;
        }

        ProjectItem GetFiles2(ProjectItem item)
        {
            if (item.ProjectItems == null)
                return item;
            var items = item.ProjectItems.GetEnumerator();
            while (items.MoveNext())
            {
                var currentItem = (ProjectItem)items.Current;
                projectItems2.Add(GetFiles(currentItem));
            }
            return item;
        }

        private void LoadClasses()
        {
            projectItems = new List<ProjectItem>();
            projectItems2 = new List<ProjectItem>();
            var allProjects = (object[])DTE.ActiveSolutionProjects;
            var projectTest = (Project)allProjects[0];
            Project projectWithoutTest = null;
            foreach (Project p in DTE.Solution.Projects)
            {
                if ($"{p.Name}.Test" == projectTest.Name)
                {
                    projectWithoutTest = p;
                    break;
                }
            }
            if (projectWithoutTest == null)
            {
                btnOk.Enabled = false;
                return;
            }
            var items = projectWithoutTest.ProjectItems.GetEnumerator();
            while (items.MoveNext())
            {
                var item = (ProjectItem)items.Current;
                projectItems.Add(GetFiles(item));
            }
            var startsWithName = projectWithoutTest.Name.Replace(".", "") + "_";
            var select = projectItems.Where(pi =>
                pi.Name.EndsWith("Synchronous.cs") ||
                pi.Name.EndsWith("Asynchronous.cs") ||
                pi.Name.StartsWith(startsWithName));
            var projects = select.Select(o => o.Name.Substring(0, o.Name.Length - ".cs".Length)).ToList();
            var items2 = projectTest.ProjectItems.GetEnumerator();
            while (items2.MoveNext())
            {
                var item = (ProjectItem)items2.Current;
                projectItems2.Add(GetFiles2(item));
            }
            var select2 = projectItems2.Where(pi => pi.Name.EndsWith("Test.cs"));
            var projects2 = select2.Select(o => o.Name.Substring(0, o.Name.Length - "Test.cs".Length)).ToList();
            var classes = projects.Where(check => !projects2.Contains(check)).ToList();

            cboEntity.DisplayMember = null;
            cboEntity.ValueMember = null;
            cboEntity.DataSource = classes;
            btnOk.Enabled = cboEntity.Items.Count > 0;
        }

        public class ProjectData
        {
            public string Name { get; set; }
            public string Id { get; set; }
        }

        public ProjectData ProxyTypes { get; set; } = null;
        public ProjectData SelectedProjectData {
            get
            {
                return (ProjectData)cboEntity.SelectedItem;
            }
        }

        private void LoadProjects()
        {
            var projects = new List<ProjectData>();
            foreach (Project project in DTE.Solution.Projects)
            {
                if (project.FileName.Length == 0) continue;
                var id = project.Properties.Item("AssemblyGuid").Value.ToString();
                var name = project.Name;
                if (project.Name.EndsWith(".ProxyTypes"))
                    ProxyTypes = new ProjectData { Id = id, Name = name };
                if (project.Name.Contains($".{FormType.Plugin.ToString()}.") ||
                    project.Name.Contains($".{FormType.Workflow.ToString()}.") ||
                    project.Name.Contains($".{FormType.CustomAction.ToString()}.") ||
                    project.Name.EndsWith($".{FormType.CustomAction.ToString()}"))
                {
                    if (project.Name.EndsWith(".Test")) continue;
                    if (IsAddedTestProject(DTE.Solution.Projects, $"{project.Name}.Test")) continue;
                    projects.Add(new ProjectData { Id = id, Name = name });
                }
            }
            cboEntity.DisplayMember = "Name";
            cboEntity.ValueMember = "Id";
            cboEntity.DataSource = projects;
        }

        private bool IsAddedTestProject(Projects projects, string projectName)
        {
            foreach (Project project in projects)
                if (project.Name == projectName) return true;
            return false;
        }

        public FormProject(FormType formType, DTE dte, string entityName = null)
        {
            InitializeComponent();

            DTE = dte;
            EntityName = entityName;
            FormType = formType;

            cboCrmVersion.DataSource = NuGetHelper.GetMicrosoftCrmSdkCoreAssembliesPackages();
            cboNetVersion.DataSource = new List<string> { "v4.5.2", "v4.6.2" };

            LoadDefault();
        }

        public string PLDynamicsCrmDevKitCliVersion
        {
            get
            {
                var package = NuGetHelper.GetPLDynamicsCrmDevKitCliPackage();
                return package.Version;
            }
        }

        private void LoadDefault()
        {
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            cboCrmVersion.Text = config.DefaultCrmVersion;
            cboNetVersion.Text = config.DefaultNetVersion;
        }

        private void btnCancel_Click(object sender, System.EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        private void btnOk_Click(object sender, System.EventArgs e)
        {
            if (cboCrmVersion.Text.Length == 0)
            {
                MessageBox.Show("Please select Crm Version!");
                return;
            }
            if (cboNetVersion.Text.Length == 0)
            {
                MessageBox.Show("Please select .NET Version!");
                return;
            }
            if (cboEntity.Visible)
            {
                if (cboEntity.Text.Length == 0)
                {
                    MessageBox.Show("Please select data!");
                    return;
                }
            }
            if (FormType == FormType.JsWebApiItem)
            {
                DoGeneratorCode();
                if (MessageError.Length > 0)
                {
                    MessageBox.Show(MessageError, "ERROR");
                }
                else
                {
                    DialogResult = DialogResult.OK;
                    Close();
                }
            }
            else
            {
                DialogResult = DialogResult.OK;
                Close();
            }
        }

        private void txtName_TextChanged(object sender, System.EventArgs e)
        {
            if (txtName.Text.Length == 0)
                lblProjectName.Text = $"{lblProjectName?.Tag?.ToString()}";
            else
            {
                if (FormType == FormType.WorkflowItem)
                {
                    lblProjectName.Text = $"{lblProjectName.Tag.ToString()}_{txtName.Text}";
                }
                else if (FormType == FormType.UiTestItem)
                {
                    lblProjectName.Text = $"{txtName.Text}";
                }
                else
                    lblProjectName.Text = $"{lblProjectName.Tag.ToString()}.{txtName.Text}";
            }
            btnOk.Enabled = (btnConnection.Visible && CrmConnection != null && txtName.Text.Length > 0) ||
                            (!btnConnection.Visible && txtName.Text.Length > 0);
        }

        private void btnDefaultCrmVersion_Click(object sender, System.EventArgs e)
        {
            if(MessageBox.Show("Are you sure to make this default ?", "Confirm?", MessageBoxButtons.YesNo) == DialogResult.Yes)
            {
                var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
                config.DefaultCrmVersion = cboCrmVersion.Text;
                DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
            }
        }

        private void btnConnection_Click(object sender, System.EventArgs e)
        {
            var form = new FormConnection(DTE);
            if (form.ShowDialog() == DialogResult.OK)
            {
                Cursor = Cursors.WaitCursor;
                CrmConnection = form.CrmConnection;
                CrmService = form.CrmService;
                var xrmHelper = new XrmHelper(CrmService);
                if (FormType == FormType.Plugin || FormType == FormType.LateBoundClass || FormType == FormType.JsWebApiItem || FormType == FormType.Workflow)
                {
                    cboEntity.DataSource = xrmHelper.GetAllEntities();
                    btnOk.Enabled = cboEntity.Items.Count > 0;
                    txtName_TextChanged(null, null);
                    cboEntity_SelectedIndexChanged(null, null);
                }
                if (FormType == FormType.ProxyTypes || FormType == FormType.WebResource || FormType == FormType.Console || FormType == FormType.CustomAction )
                {
                    btnOk.Enabled = true;
                }
                Cursor = Cursors.Default;
            }
        }

        private void cboEntity_SelectedIndexChanged(object sender, System.EventArgs e)
        {
            if (FormType == FormType.Test)
                lblProjectName.Text = $"{cboEntity.Text}.Test";
            else if (FormType == FormType.TestItem)
                lblProjectName.Text = $"{cboEntity.Text}Test";
            else if (FormType == FormType.LateBoundClass || FormType == FormType.JsWebApiItem)
                lblProjectName.Text = cboEntity.Text;
            else
                lblProjectName.Text = $"{lblProjectName.Tag.ToString()}.{cboEntity.Text}";
            btnOk.Enabled = cboEntity.Items.Count > 0;
        }

        private void btnDefaultNetVersion_Click(object sender, System.EventArgs e)
        {
            if (MessageBox.Show("Are you sure to make this default ?", "Confirm?", MessageBoxButtons.YesNo) == DialogResult.Yes)
            {
                var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
                config.DefaultNetVersion = cboNetVersion.Text;
                DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
            }
        }

        private void chkOthers_CheckedChanged(object sender, System.EventArgs e)
        {
            var value = chkOthers.Checked;
            cboEntity.Visible = !value;
            txtName.Visible = value;
            if (value)
                txtName_TextChanged(null, null);
            else
                cboEntity_SelectedIndexChanged(null, null);
        }
    }
}
