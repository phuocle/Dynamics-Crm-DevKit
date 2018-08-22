using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.Xrm.Sdk.Client;
using PL.DynamicsCrm.DevKit.Shared;
using PL.DynamicsCrm.DevKit.Shared.NuGet;
using PL.DynamicsCrm.DevKit.Shared.Xrm;
using static System.Windows.Forms.CheckedListBox;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public partial class FormProject : Form
    {
        private FormType _formType;

        private List<ProjectItem> projectItems = new List<ProjectItem>();
        private List<ProjectItem> projectItems2 = new List<ProjectItem>();

        public FormProject(FormType formType, DTE dte, string entityName = null)
        {
            InitializeComponent();

            DTE = dte;
            EntityName = entityName;
            FormType = formType;

            cboCrmVersion.DataSource = NuGetHelper.GetMicrosoftCrmSdkCoreAssembliesPackages();
            cboNetVersion.DataSource = new List<string> {"v4.5.2", "v4.6.2"};

            LoadDefault();
        }

        public string CrmVersion => cboCrmVersion.Text;

        public string NetVersion => cboNetVersion.Text;

        public string ProjectName => lblProjectName.Text;

        public string EntityName { get; set; }
        public string AssemblyName => ProjectName;

        public string RootNameSpace { get; set; }
        public string SharedNameSpace { get; set; }

        public string CrmConnectionString
        {
            get
            {
                var url = CrmConnection.Url.Substring(0,
                    CrmConnection.Url.Length - "/XRMServices/2011/Organization.svc".Length);
                url = url.Replace(".api.", ".");
                if (CrmConnection.Url.Contains(".dynamics.com"))
                    return
                        $"AuthType=Office365;Url={url};Username={CrmConnection.UserName};Password={CrmConnection.Password};";

                var domain = CrmConnection.UserName.Split("\\".ToCharArray())[0];
                var user = CrmConnection.UserName.Split("\\".ToCharArray())[1];
                return $"AuthType=AD;Url={url};Domain={domain};Username={user};Password={CrmConnection.Password};";
            }
        }

        public string CrmConnectionString2
        {
            get
            {
                var url = CrmConnection.Url.Substring(0,
                    CrmConnection.Url.Length - "/XRMServices/2011/Organization.svc".Length);
                url = url.Replace(".api.", ".");
                return $"{url}\t{CrmConnection.UserName}\t{CrmConnection.Password}";
            }
        }

        public string RootNamespace
        {
            get
            {
                return ProjectName;
            }
        }

        public OrganizationServiceProxy CrmService { get; set; }
        public CrmConnection CrmConnection { get; set; }
        private DTE DTE { get; }

        public FormType FormType
        {
            get => _formType;
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
                        txtName.Enabled = false;
                        Text = @"Add new Console Project";
                        lblProjectName.Text = GetName(parts) + $@"{FormType.Console.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Size = new Size(596, 200);
                        cboCrmVersion.Enabled = false;
                        cboNetVersion.Enabled = false;
                        cboEntity.Enabled = false;
                        break;
                    case FormType.WebResource:
                        txtName.Visible = true;
                        Text = @"Add new WebResource Project";
                        lblProjectName.Text = GetName(parts) + $@"{FormType.WebResource.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        btnCancel.Enabled = true;
                        txtName.Enabled = false;
                        cboEntity.Enabled = false;
                        cboCrmVersion.Enabled = false;
                        cboNetVersion.Enabled = false;
                        Size = new Size(596, 200);
                        break;
                    case FormType.Plugin:
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Text = @"Add new Plugin Project";
                        lblProjectName.Text = GetName(parts) + $@"{FormType.Plugin.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        Size = new Size(596, 200);
                        cboCrmVersion.Enabled = false;
                        cboNetVersion.Enabled = false;
                        cboEntity.Enabled = false;
                        break;
                    case FormType.Test:
                        cboEntity.Visible = true;
                        Text = @"Add new Test Project";
                        lblProjectName.Text = $@"???.Test";
                        LoadProjects();
                        Size = new Size(596, 200);
                        cboEntity.Size = new Size(440, 25);
                        break;
                    case FormType.TestItem:
                        Size = new Size(596, 165);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        cboEntity.Visible = true;
                        Text = @"Add new Test Class";
                        lblProject.Text = @"Class";
                        lblProjectName.Text = $@"???.Test";
                        cboEntity.Size = new Size(440, 25);
                        LoadClasses();
                        btnOk.Location = new Point(115, 75);
                        btnCancel.Location = new Point(115 + 150 + 15, 75);
                        lblProject.Location = new Point(20, 21);
                        break;
                    case FormType.Workflow:
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        chkOthers.Visible = true;
                        Text = @"Add new Workflow Project";
                        lblProjectName.Text = GetName(parts) + $@"{FormType.Workflow.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        Size = new Size(596, 200);
                        chkOthers.Enabled = false;
                        cboCrmVersion.Enabled = false;
                        cboNetVersion.Enabled = false;
                        cboEntity.Enabled = false;
                        break;
                    case FormType.WorkflowItem:
                        Size = new Size(596, 166);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        txtName.Visible = true;
                        Text = @"Add new Workflow Item";
                        lblProject.Text = @"Class Name";
                        lblProjectName.Text = "";//$@"{(GetName(parts).Substring(0, GetName(parts).Length -1)).Replace(".","")}{FormType.Workflow.ToString()}{EntityName}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnOk.Location = new Point(115, 75);
                        btnCancel.Location = new Point(115 + 150 + 15, 75);
                        lblProject.Location = new Point(20, 21);
                        break;
                    case FormType.CustomAction:
                        txtName.Visible = true;
                        txtName.Enabled = false;
                        Text = @"Add new Custom Action Project";
                        lblProjectName.Text = GetName(parts) + $@"{FormType.CustomAction.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Size = new Size(596, 200);
                        cboCrmVersion.Enabled = false;
                        cboNetVersion.Enabled = false;
                        cboEntity.Enabled = false;
                        break;
                    case FormType.LateBoundClass:
                        Size = new Size(596, 166);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Text = @"Add new C# Late Bound Class";
                        lblProject.Text = @"Class:";
                        lblProjectName.Text = $@"";
                        btnOk.Location = new Point(115, 75);
                        btnCancel.Location = new Point(115 + 150 + 15, 75);
                        cboEntity.Enabled = false;
                        lblProject.Text = @"Entity:";
                        lblProject.Location = new Point(40, 21);
                        break;
                case FormType.JsTestItem:
                        Size = new Size(596, 166);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Text = "Add new Js Test Class";
                        lblProject.Text = "Class:";
                        lblProjectName.Text = $"";
                        btnOk.Location = new Point(115, 75);
                        btnCancel.Location = new Point(115 + 150 + 15, 75);
                        cboEntity.Enabled = false;
                        lblProject.Text = "Entity:";
                        lblProject.Location = new Point(40, 21);
                        break;
                    case FormType.JsWebApiItem:
                        Size = new Size(596, 166);
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
                        chkOthers.Visible = true;
                        chkOthers.Text = "Debug";
                        btnOk.Location = new Point(115, 75);
                        btnCancel.Location = new Point(115 + 150 + 15, 75);
                        cboEntity.Enabled = false;
                        chkOthers.Enabled = false;
                        lblProject.Text = "Entity:";
                        lblProject.Location = new Point(40, 21);
                        break;
                    case FormType.ProxyTypes:
                        txtName.Visible = true;
                        txtName.Enabled = false;
                        Text = "Add new Proxy Types Project";
                        lblProjectName.Tag = $"{GetName(parts).Substring(0, GetName(parts).Length - 1)}";
                        txtName.Text = "ProxyTypes";
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Size = new Size(596, 200);
                        cboCrmVersion.Enabled = false;
                        cboNetVersion.Enabled = false;
                        cboEntity.Enabled = false;
                        break;
                    case FormType.UiTest:
                        txtName.Visible = true;
                        txtName.Enabled = false;
                        Text = @"Add new Ui Test Project";
                        lblProjectName.Text = GetName(parts) + $@"{FormType.UiTest.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Size = new Size(596, 200);
                        cboCrmVersion.Enabled = false;
                        cboNetVersion.Enabled = false;
                        cboEntity.Enabled = false;
                        cboNetVersion.Enabled = false;
                        break;
                    case FormType.UiTestItem:
                        Size = new Size(596, 166);
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
                        btnOk.Location = new Point(115, 75);
                        btnCancel.Location = new Point(115 + 150 + 15, 75);
                        txtName.Size = new Size(440, 23);
                        break;
                    case FormType.Report:
                        txtName.Visible = true;
                        Text = "Add new Report Project";
                        lblProjectName.Text = GetName(parts) + $@"{FormType.Report.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        btnConnection.Visible = false;
                        btnOk.Enabled = true;
                        Size = new Size(596, 200);
                        txtName.Size = new Size(440, 23);
                        break;
                    case FormType.JsFormItem:
                        Size = new Size(596, 380);
                        chkListForm.Visible = true;
                        btnLoadForms.Visible = true;
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        Text = "Add new Js Form Class";
                        lblProject.Text = "Entity:";
                        lblProject.Location = new Point(40, 21);
                        lblProjectName.Text = $"";
                        chkOthers.Visible = true;
                        chkOthers.Text = "Debug";
                        cboEntity.Enabled = false;
                        chkOthers.Enabled = false;
                        chkListForm.Enabled = false;
                        break;
                    case FormType.SelectEntity:
                        Size = new Size(556, 166);
                        lblCrmVersion.Visible = false;
                        cboCrmVersion.Visible = false;
                        btnDefaultCrmVersion.Visible = false;
                        lblNetVersion.Visible = false;
                        cboNetVersion.Visible = false;
                        btnDefaultNetVersion.Visible = false;
                        cboEntity.Visible = true;
                        btnConnection.Visible = false;
                        btnOk.Enabled = false;
                        Text = @"Slect Entity for Plugin Class";
                        lblProjectName.Text = $@"";
                        btnOk.Location = new Point(115, 75);
                        btnCancel.Location = new Point(115 + 150 + 15, 75);
                        cboEntity.Enabled = false;
                        lblProject.Text = @"Entity:";
                        lblProject.Location = new Point(40, 21);
                        break;
                }
            }
        }

        internal void LoadSelectEntity(List<XrmEntity> list)
        {
            cboEntity.DataSource = list;
            cboEntity.Enabled = cboEntity.Items.Count > 0;
            btnOk.Enabled = cboEntity.Enabled;
            btnCancel.Enabled = cboEntity.Enabled;
        }

        public string Class
        {
            get
            {
                var @class = cboEntity.Text;
                if (@class.EndsWith("Synchronous"))
                    return @class.Substring(0, @class.Length - "Synchronous".Length);
                if (@class.EndsWith("Asynchronous"))
                    return @class.Substring(0, @class.Length - "Asynchronous".Length);
                return @class;
            }
        }

        private string GetName(string[] parts)
        {
            var data = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                data += parts[i] + ".";
            return data;
        }

        public string Generated { get; private set; }

        public string MessageError { get; set; }

        public string GeneratedJsForm { get; set; }

        public string GeneratedJsFormCode { get; set; }
        public string GeneratedJsWebApiCode { get; set; }

        public string GeneratedJsFormCodeIntellisense { get; set; }
        public string GeneratedJsWebApiCodeIntellisense { get; set; }

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
                if (@class.StartsWith("PreValidation"))
                    return "PreValidation";
                if (@class.StartsWith("Pre"))
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
                if (@class.EndsWith("Asynchronous"))
                    return "Asynchronous";
                if (FormType == FormType.TestItem)
                    return string.Empty;
                return @class;
            }
        }

        public ProjectData ProxyTypes { get; private set; }

        public ProjectData SelectedProjectData => (ProjectData) cboEntity.SelectedItem;

        public string PLDynamicsCrmDevKitCliVersion
        {
            get
            {
                var package = NuGetHelper.GetPLDynamicsCrmDevKitCliPackage();
                return package.Version;
            }
        }

        private JsForm JsForm { get; set; }

        public void DoGeneratorCodeWebApi(string entityName, bool isDebug, string file)
        {
            var lines = File.ReadAllLines(file);
            var json = lines[lines.Length - 1];
            var comment = SimpleJson.DeserializeObject<CommentIntellisense>(json.Substring("//".Length).Replace("'", "\""));

            var solutionFullName = DTE?.Solution?.FullName;
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo?.Name?.Split(".".ToCharArray());
            var projectName = parts[1];
            if (projectName == "sln") projectName = "WebResource";
            var JsWebApi = new JsWebApi(CrmService, projectName, entityName, chkOthers.Checked, comment.JsForm, comment.IsDebugForm);
            JsWebApi.GeneratorCode();

            MessageError = JsWebApi.Message;
            GeneratedJsWebApiCode = JsWebApi.WebApiCode;
            GeneratedJsWebApiCodeIntellisense = JsWebApi.WebApiCodeIntellisense;
        }

        public void DoGeneratorCodeForm(CheckedItemCollection lists, bool isDebugForm, string file)
        {
            var isJsWebApi = false;
            var isDebugWebApi = false;
            if (File.Exists(file))
            {
                var lines = File.ReadAllLines(file);
                var json = lines[lines.Length - 1];
                var comment = SimpleJson.DeserializeObject<CommentIntellisense>(json.Substring("//".Length).Replace("'", "\""));
                isJsWebApi = comment.JsWebApi;
                isDebugWebApi = comment.IsDebugWebApi;
            }
            JsForm.GeneratorCode(lists, isDebugForm, isJsWebApi, isDebugWebApi);
            MessageError = JsForm.Message;
            GeneratedJsForm = JsForm.Form;
            GeneratedJsFormCode = JsForm.FormCode;
            GeneratedJsFormCodeIntellisense = JsForm.FormCodeIntellisense;
        }

        private ProjectItem GetFiles(ProjectItem item)
        {
            if (item.ProjectItems == null)
                return item;
            var items = item.ProjectItems.GetEnumerator();
            while (items.MoveNext())
            {
                var currentItem = (ProjectItem) items.Current;
                projectItems.Add(GetFiles(currentItem));
            }

            return item;
        }

        private ProjectItem GetFiles2(ProjectItem item)
        {
            if (item.ProjectItems == null)
                return item;
            var items = item.ProjectItems.GetEnumerator();
            while (items.MoveNext())
            {
                var currentItem = (ProjectItem) items.Current;
                projectItems2.Add(GetFiles(currentItem));
            }

            return item;
        }

        private void LoadClasses()
        {
            projectItems = new List<ProjectItem>();
            projectItems2 = new List<ProjectItem>();
            var allProjects = (object[]) DTE.ActiveSolutionProjects;
            var projectTest = (Project) allProjects[0];
            Project projectWithoutTest = null;
            foreach (Project p in DTE.Solution.Projects)
                if ($"{p.Name}.Test" == projectTest.Name)
                {
                    projectWithoutTest = p;
                    break;
                }

            if (projectWithoutTest == null)
            {
                btnOk.Enabled = false;
                return;
            }

            var items = projectWithoutTest.ProjectItems.GetEnumerator();
            while (items.MoveNext())
            {
                var item = (ProjectItem) items.Current;
                projectItems.Add(GetFiles(item));
            }

            var startsWithName = projectWithoutTest.Name.Replace(".", "") + "_";
            var select = projectItems.Where(pi =>
                 pi.Name.EndsWith(".cs") ||
                 pi.Name.StartsWith(startsWithName));
            var projects = select.Select(o => o.Name.Substring(0, o.Name.Length - ".cs".Length)).ToList();
            var items2 = projectTest.ProjectItems.GetEnumerator();
            while (items2.MoveNext())
            {
                var item = (ProjectItem) items2.Current;
                projectItems2.Add(GetFiles2(item));
            }

            var select2 = projectItems2.Where(pi => pi.Name.EndsWith("Test.cs"));
            var projects2 = select2.Select(o => o.Name.Substring(0, o.Name.Length - "Test.cs".Length)).ToList();
            var classes = projects.Where(check => !projects2.Contains(check)).ToList();

            var notIn = new List<string> { "Date", "EntityBase", "Extension", "PluginCore", "SimpleJson", "AssemblyInfo" };
            var classes2 = classes.Except(notIn).ToList<string>();
            var classes3 = new List<string>();
            var entity = string.Empty;
            foreach(var item in classes2)
            {
                if(item.EndsWith(".generated"))
                {
                    entity = item.Substring(0, item.Length - ".generated".Length);
                    continue;
                }
                if (item == entity) continue;
                classes3.Add(item);
            }
            cboEntity.DisplayMember = null;
            cboEntity.ValueMember = null;
            cboEntity.DataSource = classes3;
            btnOk.Enabled = cboEntity.Items.Count > 0;
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
                    ProxyTypes = new ProjectData {Id = id, Name = name};
                if (project.Name.Contains($".{FormType.Plugin.ToString()}.") ||
                    project.Name.Contains($".{FormType.Workflow.ToString()}.") ||
                    project.Name.EndsWith($".{FormType.Workflow.ToString()}") ||
                    project.Name.Contains($".{FormType.CustomAction.ToString()}.") ||
                    project.Name.EndsWith($".{FormType.CustomAction.ToString()}"))
                {
                    if (project.Name.EndsWith(".Test")) continue;
                    if (IsAddedTestProject(DTE.Solution.Projects, $"{project.Name}.Test")) continue;
                    projects.Add(new ProjectData {Id = id, Name = name});
                }
            }

            cboEntity.DisplayMember = "Name";
            cboEntity.ValueMember = "Id";
            cboEntity.DataSource = projects;
        }

        private bool IsAddedTestProject(Projects projects, string projectName)
        {
            foreach (Project project in projects)
                if (project.Name == projectName)
                    return true;
            return false;
        }

        private void LoadDefault()
        {
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            cboCrmVersion.Text = config.DefaultCrmVersion;
            cboNetVersion.Text = config.DefaultNetVersion;
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        private void btnOk_Click(object sender, EventArgs e)
        {
            if (cboCrmVersion.Text.Length == 0)
            {
                MessageBox.Show(@"Please select Crm Version!");
                return;
            }
            if (cboNetVersion.Text.Length == 0)
            {
                MessageBox.Show(@"Please select .NET Version!");
                return;
            }
            if (cboEntity.Visible)
                if (cboEntity.Text.Length == 0)
                {
                    MessageBox.Show(@"Please select data!");
                    return;
                }
            if (FormType == FormType.Console ||
                FormType == FormType.CustomAction ||
                FormType == FormType.Plugin ||
                FormType == FormType.Workflow)
            {
                var solutionFullName = DTE?.Solution?.FullName;
                var fInfo = new FileInfo(solutionFullName);
                var parts = fInfo?.Name?.Split(".".ToCharArray());
                var sharedProject = $"{fInfo.DirectoryName}\\{GetName(parts)}Shared\\{GetName(parts)}Shared.shproj";
                if (!File.Exists(sharedProject))
                {
                    MessageBox.Show(@"Please add Shared project and try again!");
                    btnCancel.Enabled = true;
                    return;
                }
                cboEntity.Enabled = false;
                btnConnection.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                cboCrmVersion.Enabled = false;
                cboNetVersion.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.WorkflowItem)
            {
                txtName.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.Test)
            {
                cboEntity.Enabled = false;
                cboCrmVersion.Enabled = false;
                cboNetVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                var solutionFullName = DTE?.Solution?.FullName;
                var fInfo = new FileInfo(solutionFullName);
                var parts = fInfo?.Name?.Split(".".ToCharArray());
                var sharedProject = $"{fInfo.DirectoryName}\\{GetName(parts)}ProxyTypes\\{GetName(parts)}ProxyTypes.csproj";
                if (!File.Exists(sharedProject))
                {
                    MessageBox.Show(@"Please add ProxyTypes project and try again!");
                    btnCancel.Enabled = true;
                    return;
                }
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.JsWebApiItem)
            {
                cboEntity.Enabled = false;
                btnLoadForms.Enabled = false;
                btnConnection.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                chkOthers.Enabled = false;
                var entityName = lblProjectName.Text;
                var file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.intellisense.js";
                if (!File.Exists(file))
                {
                    MessageBox.Show($@"File not found: {file}");
                    return;
                }
                progressBar.Visible = true;
                var debug = chkOthers.Checked;
                Task task = Task.Factory.StartNew(() =>
                {
                    DoGeneratorCodeWebApi(entityName, debug, file);
                });
                while (!task.IsCompleted)
                {
                    Application.DoEvents();
                }
                progressBar.Visible = false;

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
            else if (FormType == FormType.JsFormItem)
            {
                cboEntity.Enabled = false;
                btnLoadForms.Enabled = false;
                btnConnection.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                chkListForm.Enabled = false;
                chkOthers.Enabled = false;
                var entityName = lblProjectName.Text;
                var file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.intellisense.js";

                progressBar.Visible = true;
                Task task = Task.Factory.StartNew(() =>
                {
                    DoGeneratorCodeForm(chkListForm.CheckedItems, chkOthers.Checked, file);
                });
                while (!task.IsCompleted)
                {
                    Application.DoEvents();
                }
                progressBar.Visible = false;

                if (MessageError?.Length > 0)
                {
                    btnCancel.Enabled = true;
                    MessageBox.Show(MessageError, "ERROR");
                }
                else
                {
                    DialogResult = DialogResult.OK;
                    Close();
                }
            }
            else if (FormType == FormType.LateBoundClass)
            {
                cboEntity.Enabled = false;
                btnConnection.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                var lateBound = new GeneratedCSharpLateBound();
                var solutionFullName = DTE?.Solution?.FullName;
                var fInfo = new FileInfo(solutionFullName);
                var parts = fInfo?.Name?.Split(".".ToCharArray());
                var companyName = parts[0];
                var projectName = parts[1];
                var entityName = lblProjectName.Text;
                var _generated = string.Empty;

                progressBar.Visible = true;
                Task task = Task.Factory.StartNew(() =>
                {
                    _generated = lateBound.Go(CrmService, companyName, projectName, entityName, RootNameSpace, SharedNameSpace);
                });
                while (!task.IsCompleted)
                {
                    Application.DoEvents();
                }
                progressBar.Visible = false;

                Generated = _generated;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.ProxyTypes)
            {
                btnConnection.Enabled = false;
                cboCrmVersion.Enabled = false;
                cboNetVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.TestItem)
            {
                cboEntity.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.UiTest)
            {
                txtName.Enabled = false;
                cboCrmVersion.Enabled = false;
                cboNetVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.UiTestItem)
            {
                txtName.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.WebResource)
            {
                txtName.Enabled = false;
                cboCrmVersion.Enabled = false;
                cboNetVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                btnConnection.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.JsTestItem)
            {
                cboEntity.Enabled = false;
                btnConnection.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.Report)
            {
                txtName.Enabled = false;
                cboCrmVersion.Enabled = false;
                cboNetVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.SelectEntity)
            {
                SelectedEntity = cboEntity.Text;
                DialogResult = DialogResult.OK;
                Close();
            }
        }

        public string SelectedEntity { get; set; }

        private void txtName_TextChanged(object sender, EventArgs e)
        {
            if (txtName.Text.Length == 0)
            {
                lblProjectName.Text = $@"{lblProjectName?.Tag}";
            }
            else
            {
                if (FormType == FormType.WorkflowItem)
                    lblProjectName.Text = $@"{txtName.Text}";
                else if (FormType == FormType.UiTestItem)
                    lblProjectName.Text = $"{txtName.Text}Test";
                else
                    lblProjectName.Text = $@"{lblProjectName.Tag}.{txtName.Text}";
            }

            btnOk.Enabled = btnConnection.Visible && CrmConnection != null && txtName.Text.Length > 0 ||
                            !btnConnection.Visible && txtName.Text.Length > 0;
            if (FormType == FormType.Workflow) btnOk.Enabled = true;
        }

        private void btnConnection_ClickAsync(object sender, EventArgs e)
        {
            var form = new FormConnection(DTE);
            if (form.ShowDialog() == DialogResult.OK)
            {
                CrmConnection = form.CrmConnection;
                CrmService = form.CrmService;
                var xrmHelper = new XrmHelper(CrmService);
                if (FormType == FormType.Plugin || FormType == FormType.LateBoundClass ||
                    FormType == FormType.JsWebApiItem || FormType == FormType.Workflow ||
                    FormType == FormType.JsFormItem || FormType == FormType.JsTestItem)
                {

                    progressBar.Visible = true;
                    btnConnection.Enabled = false;
                    btnCancel.Enabled = false;
                    List<XrmEntity> list = null;
                    Task task = Task.Factory.StartNew(() =>
                    {
                         list = xrmHelper.GetAllEntities();
                    });
                    while (!task.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    btnConnection.Enabled = true;
                    progressBar.Visible = false;
                    cboEntity.DataSource = list;

                    cboEntity.Enabled = cboEntity.Items.Count > 0;
                    btnOk.Enabled = cboEntity.Enabled;
                    btnCancel.Enabled = cboEntity.Enabled;
                    chkOthers.Enabled = cboEntity.Enabled;
                    chkListForm.Enabled = cboEntity.Enabled;
                    cboCrmVersion.Enabled = cboEntity.Enabled;
                    cboNetVersion.Enabled = cboEntity.Enabled;
                    cboEntity.SelectedIndex = 0;
                    txtName_TextChanged(null, null);
                    cboEntity_SelectedIndexChanged(null, null);
                    btnOk.Focus();
                }

                if (FormType == FormType.ProxyTypes || FormType == FormType.WebResource ||
                    FormType == FormType.Console || FormType == FormType.CustomAction || FormType == FormType.UiTest)
                {
                    btnOk.Enabled = true;
                    btnCancel.Enabled = true;
                    txtName.Enabled = true;
                    cboEntity.Enabled = true;
                    cboNetVersion.Enabled = true;
                    cboCrmVersion.Enabled = true;
                    if (FormType == FormType.ProxyTypes)
                    {
                        txtName.Enabled = false;
                    }
                }
                //Cursor = Cursors.Default;
            }
        }

        private void cboEntity_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (FormType == FormType.Test)
                lblProjectName.Text = $"{cboEntity.Text}.Test";
            else if (FormType == FormType.TestItem)
                lblProjectName.Text = $"{cboEntity.Text}Test";
            else if (FormType == FormType.LateBoundClass || FormType == FormType.JsWebApiItem ||
                     FormType == FormType.JsFormItem || FormType == FormType.JsTestItem || FormType == FormType.SelectEntity)
            {
                if (FormType == FormType.JsWebApiItem)
                {
                    var file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{cboEntity.Text}.intellisense.js";
                    if (File.Exists(file))
                    {
                        try
                        {
                            var lines = File.ReadAllLines(file);
                            var json = lines[lines.Length - 1];
                            var comment = SimpleJson.DeserializeObject<CommentIntellisense>(json.Substring("//".Length).Replace("'", "\""));
                            chkOthers.Checked = comment.IsDebugWebApi;
                        }
                        catch { }
                    }
                }
                lblProjectName.Text = cboEntity.Text;
            }
            else
                lblProjectName.Text = $@"{lblProjectName.Tag}.{cboEntity.Text}";
            if (FormType != FormType.JsFormItem)
                btnOk.Enabled = cboEntity.Items.Count > 0;
            else
                btnLoadForms.Enabled = cboEntity.Items.Count > 0;
        }

        private void chkOthers_CheckedChanged(object sender, EventArgs e)
        {
            if (FormType == FormType.JsFormItem || FormType == FormType.JsWebApiItem) return;
            var value = chkOthers.Checked;
            cboEntity.Visible = !value;
            txtName.Visible = value;
            if (value)
                txtName_TextChanged(null, null);
            else
                cboEntity_SelectedIndexChanged(null, null);
        }

        private void cboCrmVersion_SelectedIndexChanged(object sender, EventArgs e)
        {
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            config.DefaultCrmVersion = cboCrmVersion.Text;
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
        }

        private void cboNetVersion_SelectedIndexChanged(object sender, EventArgs e)
        {
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            config.DefaultNetVersion = cboNetVersion.Text;
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
        }

        private void btnLoadForms_Click(object sender, EventArgs e)
        {
            chkListForm.Items.Clear();
            var solutionFullName = DTE?.Solution?.FullName;

            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo?.Name?.Split(".".ToCharArray());
            var projectName = parts[1];
            if (projectName == "sln") projectName = "WebResource";
            var entityName = lblProjectName.Text;
            var jsForm = new JsForm(CrmService, projectName, entityName);
            var forms = jsForm.GetForms();
            var checkDuplicate = forms.GroupBy(x => x).Any(g => g.Count() > 1);
            if (checkDuplicate)
            {
                MessageBox.Show($@"Duplicate Form name for this entity: {entityName} !");
                return;
            }

            foreach (var form in forms)
                chkListForm.Items.Add(form);
            var file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.intellisense.js";
            if (File.Exists(file))
            {
                try
                {
                    var lines = File.ReadAllLines(file);
                    var json = lines[lines.Length - 1];
                    var comment = SimpleJson.DeserializeObject<CommentIntellisense>(json.Substring("//".Length).Replace("'", "\""));
                    chkOthers.Checked = comment.IsDebugForm;
                    for (var i=0; i < chkListForm.Items.Count; i++)
                    {
                        foreach(var form in comment.JsForm)
                        {
                            if (form == chkListForm.Items[i].ToString())
                            {
                                chkListForm.SetItemChecked(i, true);
                            }
                        }
                    }
                    chkListForm_SelectedIndexChanged(null, null);
                }
                catch
                {
                    // ignored
                }
            }
            JsForm = jsForm;
        }

        private void chkListForm_SelectedIndexChanged(object sender, EventArgs e)
        {
            btnOk.Enabled = chkListForm.CheckedItems.Count > 0;
        }

        public class ProjectData
        {
            public string Name { get; set; }
            public string Id { get; set; }
        }
    }
}