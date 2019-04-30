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
        private DevKitCrmConfig Config = null;
        private NuGetHelper nuget = null;

        private FormType _formType;

        private List<ProjectItem> projectItems = new List<ProjectItem>();
        private List<ProjectItem> projectItems2 = new List<ProjectItem>();

        public FormProject(FormType formType, DTE dte, string entityName = null)
        {
            InitializeComponent();

            DTE = dte;
            Config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            nuget = new NuGetHelper();
            cboCrmName.DataSource = nuget.CrmNameDataSource;
            if (!string.IsNullOrEmpty(Config.DefaultCrmName))
            {
                cboCrmName.Text = Config.DefaultCrmName;
                cboCrmName_SelectedIndexChanged(null, null);
                if (!string.IsNullOrEmpty(Config.DefaultCrmVersion))
                {
                    cboCrmVersion.Text = Config.DefaultCrmVersion;
                    cboCrmVersion_SelectedIndexChanged(null, null);
                }
            }
            EntityName = entityName;
            FormType = formType;
        }
        public string LanguageCode => cboEntity.SelectedValue.ToString();
        public string ResourceStringName => txtName.Text;
        public string CrmVersion { get; set; }
        public string NetVersion { get; set; }

        public string PortalName { get { return cboEntity.Text; } }

        public NuGetPackage CoreToolsVersion
        {
            get
            {
                var name = cboCrmName.Text;
                if (cboCrmName.Text == "Dynamics Crm 2013")
                    name = "Dynamics Crm 2015";
                return nuget.MicrosoftCrmSdkCoreToolsPackages.Where(w => w.CrmName == name).FirstOrDefault();
            }
        }

        public NuGetPackage FakeXrmEasy
        {
            get
            {
                return nuget.FakeXrmEasy(FakeXrmEasyShortName);
            }
        }

        public NuGetPackage MicrosoftCrmSdkXrmToolingCoreAssembly
        {
            get
            {
                return nuget.MicrosoftCrmSdkXrmToolingCoreAssembly(cboCrmName.Text);
            }
        }

        public NuGetPackage MicrosoftCrmSdkDeployment
        {
            get
            {
                return nuget.MicrosoftCrmSdkDeployment(cboCrmName.Text);
            }
        }

        public NuGetPackage MicrosoftCrmSdkWorkflow
        {
            get
            {
                return nuget.MicrosoftCrmSdkWorkflow(cboCrmName.Text);
            }
        }

        public string CrmName
        {
            get
            {
                if (cboCrmName.Text == "Dynamics Crm 2011") return "2011";
                if (cboCrmName.Text == "Dynamics Crm 2013") return "2013";
                if (cboCrmName.Text == "Dynamics Crm 2015") return "2015";
                if (cboCrmName.Text == "Dynamics Crm 2016") return "2016";
                return "365";
            }
        }

        public string NugetNetVersion
        {
            get
            {
                if (CrmName == "2015") return "45";
                return NetVersion.Replace(".", string.Empty);
            }
        }

        public string FakeXrmEasyShortName
        {
            get
            {
                if (CrmName == "365") return "9";
                return CrmName;
            }
        }

        public string ProjectName => lblProjectName.Text;

        public string EntityName { get; set; }
        public string EntityNameTest
        {
            get
            {
                try
                {
                    var name = cboEntity.Text;
                    if (name.StartsWith("PostNone")) return "None";
                    return EntityName;
                }
                catch
                {
                    return EntityName;
                }
            }
        }
        public string AssemblyName => ProjectName;

        public string RootNameSpace { get; set; }
        public string SharedNameSpace { get; set; }

        public bool Others => chkOthers.Checked;

        public string CrmConnectionString
        {
            get
            {
                var url = CrmConnection.Url.Substring(0, CrmConnection.Url.Length - "/XRMServices/2011/Organization.svc".Length);
                url = url.Replace(".api.", ".");
                if (CrmConnection.Url.Contains(".dynamics.com"))
                    return $"AuthType=Office365;Url={url};Username={CrmConnection.UserName};Password={CrmConnection.Password};";
                var domain = CrmConnection.UserName.Split("\\".ToCharArray())[0];
                var user = CrmConnection.UserName.Split("\\".ToCharArray())[1];
                return $"AuthType=AD;Url={url};Domain={domain};Username={user};Password={CrmConnection.Password};";
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
                Text = "PL.DynamicsCrm.DevKit - v." + Const.Version;
                switch (_formType)
                {
                    case FormType.Console:
                        link.Text = @"Add New Console Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.Console.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;
                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;

                        txtName.Enabled = false;
                        btnOk.Enabled = false;

                        break;
                    case FormType.WebResource:
                        link.Text = @"Add New WebResource Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.WebResource.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;
                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;

                        txtName.Enabled = false;
                        btnOk.Enabled = false;

                        break;
                    case FormType.Plugin:
                        link.Text = @"Add New Plugin Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Plugin-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.Plugin.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;

                        cboEntity.Enabled = false;
                        btnOk.Enabled = false;

                        break;
                    case FormType.Test:
                        link.Text = @"Add New Test Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Test-Project-Template";

                        lblProjectName.Text = $@"???.Test";

                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        cboCrmName.Enabled = false;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        cboCrmVersion.Enabled = false;

                        LoadProjects();
                        cboEntity.Visible = true;

                        break;
                    case FormType.TestItem:
                        link.Text = @"Add New Test Class";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Item-Template";

                        lblProject.Text = @"Class";
                        lblProjectName.Text = $@"???.Test";

                        LoadClasses();
                        cboEntity.Visible = true;

                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y);
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y);

                        break;
                    case FormType.Workflow:
                        link.Text = @"Add New Workflow Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Workflow-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.Workflow.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        lblProject.Text = "Entity:";

                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        chkOthers.Visible = true;
                        chkOthers.Enabled = false;

                        btnOk.Enabled = false;
                        cboEntity.Enabled = false;

                        break;
                    case FormType.WorkflowItem:
                        link.Text = @"Add new Workflow Class";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template";

                        lblProject.Text = @"Class Name";
                        lblProjectName.Text = "";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;

                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y);
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y);

                        break;
                    case FormType.CustomAction:
                        link.Text = @"Add new Custom Action Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Custom-Action-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.CustomAction.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;
                        lblProject.Text = "Entity:";

                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        chkOthers.Visible = true;
                        chkOthers.Enabled = false;

                        btnOk.Enabled = false;
                        cboEntity.Enabled = false;

                        break;
                    case FormType.LateBoundClass:
                        link.Text = @"Add new C# Late Bound Class";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Late-Bound-Class-Item-Template";

                        lblProjectName.Text = $@"";
                        lblProject.Text = @"Entity:";

                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        cboEntity.Enabled = false;

                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        cboCrmName.Enabled = false;
                        cboCrmVersion.Enabled = false;

                        break;
                case FormType.JsTestItem:
                        link.Text = @"Add New Js Test Class";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Test-Item-Template";

                        lblProject.Text = @"Entity:";
                        lblProjectName.Text = $"";

                        cboEntity.Visible = true;
                        cboEntity.Enabled = false;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;

                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y);
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y);

                        break;
                    case FormType.JsWebApiItem:
                        link.Text = @"Add New Js WebApi Class";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-WebApi-Item-Template";

                        lblProject.Text = @"Class:";
                        lblProjectName.Text = $"";
                        chkOthers.Visible = true;
                        chkOthers.Text = "Debug";
                        lblProject.Text = "Entity:";
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;

                        cboEntity.Enabled = false;
                        chkOthers.Enabled = false;

                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y);
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y);

                        break;
                    case FormType.ProxyTypes:
                        link.Text = @"Add New Proxy Types Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/ProxyTypes-Project-Template";

                        lblProjectName.Tag = $"{GetName(parts).Substring(0, GetName(parts).Length - 1)}";
                        txtName.Text = @"ProxyTypes";

                        txtName.Visible = true;
                        txtName.Enabled = false;

                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;

                        cboEntity.Enabled = false;
                        btnOk.Enabled = false;

                        break;
                    case FormType.Shared:
                        link.Text = @"Add New Shared Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Project-Template";

                        lblProjectName.Tag = $"{GetName(parts).Substring(0, GetName(parts).Length - 1)}";
                        txtName.Text = @"Shared";

                        txtName.Visible = true;
                        txtName.Enabled = false;

                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;

                        cboEntity.Enabled = false;
                        btnOk.Enabled = false;

                        break;
                    case FormType.UiTest:
                        link.Text = @"Add New UI Test Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Ui-Test-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.UiTest.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;
                        txtName.Enabled = false;
                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        btnOk.Enabled = false;

                        break;
                    case FormType.UiTestItem:
                        link.Text = @"Add New UI Test Class";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Ui-Item-Template";

                        lblProject.Text = @"Class Name";
                        lblProjectName.Text = "";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;

                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y);
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y);

                        break;
                    case FormType.Report:
                        link.Text = @"Add New Report Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Report-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.Report.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;

                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        cboCrmName.Enabled = false;
                        cboCrmVersion.Enabled = false;

                        break;
                    case FormType.JsFormItem:
                        link.Text = @"Add New Js Form Class";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Form-Item-Template";

                        lblProject.Text = "Entity:";
                        lblProjectName.Text = $"";
                        chkOthers.Visible = true;
                        chkOthers.Text = @"Debug";

                        chkListForm.Visible = true;
                        btnLoadForms.Visible = true;
                        cboEntity.Visible = true;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;
                        cboEntity.Enabled = false;
                        chkOthers.Enabled = false;
                        chkListForm.Enabled = false;
                        break;
                    case FormType.SelectEntity:
                        link.Text = @"Select Entity for Plugin Class";

                        lblProjectName.Text = $@"";
                        lblProject.Text = @"Entity:";

                        cboEntity.Visible = true;
                        cboEntity.Enabled = false;
                        btnConnection.Visible = true;
                        btnOk.Enabled = false;

                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y);
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y);

                        break;
                    case FormType.ResourceString:
                        link.Text = @"Add New Resource String";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Resource-String-Item-Template";

                        lblProject.Text = @"Language";
                        LoadLanguages();

                        lblProjectName.Visible = false;
                        txtName.Visible = true;
                        cboEntity.Visible = true;

                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;

                        cboEntity.Location = new Point(txtName.Location.X, txtName.Location.Y + txtName.Height + 8);
                        btnOk.Location = new Point(btnOk.Location.X, cboEntity.Location.Y + cboEntity.Height + 12);
                        btnCancel.Location = new Point(btnOk.Location.X + btnOk.Width + 12, btnOk.Location.Y);
                        cboCrmName.Location = new Point(cboCrmName.Location.X, btnOk.Location.Y);
                        lblCrmName.Location = new Point(lblCrmName.Location.X, cboCrmName.Location.Y + 3);

                        cboCrmVersion.Location = new Point(cboCrmVersion.Location.X, cboCrmVersion.Location.Y + 16);
                        lblCrmVersion.Location = new Point(lblCrmVersion.Location.X, cboCrmVersion.Location.Y + 3);

                        if (cboCrmName.Text != "Dynamics 365")
                        {
                            btnOk.Enabled = false;
                            cboCrmName.Enabled = false;
                            cboCrmVersion.Enabled = false;
                        }

                        break;
                    case FormType.DataProvider:
                        link.Text = @"Add New Data Provider Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Data-Provider-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.DataProvider.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;
                        txtName.Enabled = false;
                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        btnOk.Enabled = false;

                        break;
                    case FormType.SolutionPackager:
                        link.Text = @"Add New Solution Packager Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Solution-Packager-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.SolutionPackager.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;
                        txtName.Enabled = false;
                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        btnOk.Enabled = false;

                        break;
                    case FormType.Portal:
                        link.Text = @"Add New Portal WebResource Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Portal-WebResource-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.Portal.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        cboEntity.Visible = true;
                        cboEntity.Enabled = false;
                        lblProject.Visible = true;
                        lblProject.Text = "Portal:\r\n\r\nProject Name:";

                        var x = cboEntity.Location.X;

                        txtName.Visible = true;
                        txtName.Location = new Point(x, cboEntity.Location.Y + cboEntity.Height + 8);
                        lblProjectName.Location = new Point(x, txtName.Location.Y + txtName.Height + 8);

                        lblCrmName.Location = new Point(lblCrmName.Location.X, lblCrmName.Location.Y + 54);
                        cboCrmName.Location = new Point(cboCrmName.Location.X, cboCrmName.Location.Y + 54);

                        lblCrmVersion.Location = new Point(lblCrmVersion.Location.X, lblCrmVersion.Location.Y + 54);
                        cboCrmVersion.Location = new Point(cboCrmVersion.Location.X, cboCrmVersion.Location.Y + 54);

                        btnOk.Location = new Point(btnOk.Location.X, cboCrmName.Top);
                        btnCancel.Location = new Point(btnCancel.Location.X, cboCrmName.Top);

                        btnConnection.Visible = true;
                        lblCrmName.Visible = true;
                        cboCrmName.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;

                        txtName.Enabled = false;
                        btnOk.Enabled = false;

                        break;
                }
                link.Text = "Wiki: " + link.Text;
            }
        }

        private void LoadLanguages()
        {
            cboEntity.DisplayMember = "Name";
            cboEntity.ValueMember = "Value";
            cboEntity.DataSource = Utility.GetLanguages();
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
            if (data.EndsWith(".Report."))
                data = data.Replace(".Report.", ".");
            if (data.EndsWith(".Test."))
                data = data.Replace(".Test.", ".");
            return data;
        }

        public string Generated { get; private set; }

        public string MessageError { get; set; }

        public string GeneratedJsForm { get; set; }

        public string GeneratedJsFormCode { get; set; }
        public string GeneratedJsWebApiCode { get; set; }

        public string GeneratedJsFormCodeIntellisense { get; set; }
        public string GeneratedJsFormCodeIntellisense2 { get; set; }
        public string GeneratedJsWebApiCodeIntellisense { get; set; }
        public string GeneratedJsWebApiCodeIntellisense2 { get; set; }

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
                try
                {
                    var @class = cboEntity.Text;
                    var stage = string.Empty;
                    if (StageString == "PostOperation") stage = "Post";
                    if (StageString == "PreValidation") stage = "PreValidation";
                    if (StageString == "PreOperation") stage = "Pre";
                    if (stage.Length == 0) return string.Empty;
                    if (@class.StartsWith("PostNone"))
                    {
                        @class = @class.Substring("PostNone".Length);
                        if (@class.EndsWith("Synchronous"))
                            return @class.Substring(0, @class.Length - "Synchronous".Length);
                        return "_";
                    }
                    var temp = @class.Substring((stage + EntityNameTest).Length);
                    return temp.Substring(0, temp.Length - Execution.Length);
                }
                catch
                {
                    return "????";
                }
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
                var package = nuget.PLDynamicsCrmDevKitCliPackage;
                return package.Version;
            }
        }

        public string PLDynamicsCrmDevKitAnalyzersVersion
        {
            get
            {
                try
                {
                    var package = nuget.PLDynamicsCrmDevKitAnalyzersPackage;
                    return package.Version;
                }
                catch
                {
                    return Const.Version;
                }
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
            GeneratedJsWebApiCodeIntellisense2 = JsWebApi.WebApiCodeIntellisense2;
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
            JsForm.GeneratorCode(lists.OfType<string>().ToList() , isDebugForm, isJsWebApi, isDebugWebApi);
            MessageError = JsForm.Message;
            GeneratedJsForm = JsForm.Form;
            GeneratedJsFormCode = JsForm.FormCode;
            GeneratedJsFormCodeIntellisense = JsForm.FormCodeIntellisense;
            GeneratedJsFormCodeIntellisense2 = JsForm.FormCodeIntellisense2;
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
                if (project.ProjectItems == null || project.FileName.Length == 0) continue;
                if (project.Name.Contains($".{FormType.Plugin.ToString()}.") ||
                    project.Name.Contains($".{FormType.Workflow.ToString()}.") ||
                    project.Name.EndsWith($".{FormType.Workflow.ToString()}") ||
                    project.Name.Contains($".{FormType.CustomAction.ToString()}.") ||
                    project.Name.EndsWith($".{FormType.CustomAction.ToString()}") ||
                    project.Name.Contains($".{FormType.DataProvider.ToString()}.") ||
                    project.Name.EndsWith($".{FormType.DataProvider.ToString()}"))
                {
                    if (project.Name.EndsWith(".Test")) continue;
                    if (IsAddedTestProject(DTE.Solution.Projects, $"{project.Name}.Test")) continue;
                    var id = project.Properties.Item("AssemblyGuid").Value.ToString();
                    var name = project.Name;
                    var @namespace = project.Properties.Item("RootNamespace").Value.ToString();
                    projects.Add(new ProjectData {Id = id, Name = name, Namespace = @namespace});
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

        private void btnCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        public string UseTypeScriptDeclaration { get; set; }

        private void btnOk_Click(object sender, EventArgs e)
        {
            if (cboCrmName.Visible && cboCrmName.Enabled && cboCrmName.Text.Length == 0)
            {
                MessageBox.Show(@"Please select Crm Version!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (cboCrmVersion.Visible && cboCrmVersion.Enabled && cboCrmVersion.Text.Length == 0)
            {
                MessageBox.Show(@"Please select .NET Version!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (cboEntity.Visible && cboEntity.Enabled && cboEntity.Text.Length == 0)
            {
                MessageBox.Show(@"Please select data!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (FormType == FormType.ResourceString && txtName.Visible && txtName.Enabled && txtName.Text.Length == 0)
            {
                MessageBox.Show(@"Please enter data!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            UseTypeScriptDeclaration = Config.UseTypeScriptDeclaration;
            Config.DefaultCrmName = cboCrmName.Text;
            Config.DefaultCrmVersion = cboCrmVersion.Text;
            Config.DefaultNetVersion = NetVersion;
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, Config);

            if (FormType == FormType.Console ||
                FormType == FormType.CustomAction ||
                FormType == FormType.Plugin ||
                FormType == FormType.Workflow)
            {
                cboEntity.Enabled = false;
                btnConnection.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                cboCrmName.Enabled = false;
                cboCrmVersion.Enabled = false;
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
                cboCrmName.Enabled = false;
                cboCrmVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                var solutionFullName = DTE?.Solution?.FullName;
                ProxyTypes = new ProjectData
                {
                    Id = Const.ProxyTypesGuid.ToString(),
                    Name = Utility.GetProxyTypesProject(solutionFullName)
                };
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
                var file1 = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.intellisense.js";
                var file2 = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.d.ts";
                var file = File.Exists(file2) ? file2 : file1;
                if (!File.Exists(file))
                {
                    MessageBox.Show($@"File not found: {file}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
                    MessageBox.Show(MessageError, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
                    MessageBox.Show(MessageError, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    btnCancel.Enabled = true;
                    btnOk.Enabled = true;
                    cboEntity.Enabled = true;
                    btnLoadForms.Enabled = true;
                    chkListForm.Enabled = true;
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
                var crmVersionName = (CrmVersionName)int.Parse(CrmName);
                progressBar.Visible = true;
                Task task = Task.Factory.StartNew(() =>
                {
                    _generated = lateBound.Go(CrmService, crmVersionName, /*companyName,*//* projectName,*/ entityName, RootNameSpace, SharedNameSpace);
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
                cboCrmName.Enabled = false;
                cboCrmVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.Shared)
            {
                btnConnection.Enabled = false;
                cboCrmName.Enabled = false;
                cboCrmVersion.Enabled = false;
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
                cboCrmName.Enabled = false;
                cboCrmVersion.Enabled = false;
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
                cboCrmName.Enabled = false;
                cboCrmVersion.Enabled = false;
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
                cboCrmName.Enabled = false;
                cboCrmVersion.Enabled = false;
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
            else if (FormType == FormType.ResourceString)
            {
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.DataProvider)
            {
                txtName.Enabled = false;
                cboCrmName.Enabled = false;
                cboCrmVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.SolutionPackager)
            {
                txtName.Enabled = false;
                cboCrmName.Enabled = false;
                cboCrmVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.Portal)
            {
                cboEntity.Enabled = false;
                btnConnection.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
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
            if (FormType == FormType.Workflow || FormType == FormType.CustomAction || FormType == FormType.Report)
                btnOk.Enabled = true;
            if (FormType == FormType.DataProvider && CrmName != "365")
                btnOk.Enabled = false;
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
                    FormType == FormType.JsFormItem || FormType == FormType.JsTestItem || FormType == FormType.CustomAction)
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
                    if (FormType != FormType.LateBoundClass)
                    {
                        cboCrmName.Enabled = cboEntity.Enabled;
                        cboCrmVersion.Enabled = cboEntity.Enabled;
                    }
                    cboEntity.SelectedIndex = 0;
                    txtName_TextChanged(null, null);
                    cboEntity_SelectedIndexChanged(null, null);
                    btnOk.Focus();
                }
                if (FormType == FormType.ProxyTypes || FormType == FormType.WebResource || FormType == FormType.Shared || FormType == FormType.Portal ||
                    FormType == FormType.Console || FormType == FormType.UiTest || FormType == FormType.DataProvider || FormType == FormType.SolutionPackager)
                {
                    if (FormType == FormType.DataProvider)
                        btnOk.Enabled = CrmName == "365";
                    else
                        btnOk.Enabled = true;
                    btnCancel.Enabled = true;
                    txtName.Enabled = true;
                    cboEntity.Enabled = true;
                    cboCrmVersion.Enabled = true;
                    cboCrmName.Enabled = true;
                    if (FormType == FormType.ProxyTypes || FormType == FormType.Shared)
                    {
                        txtName.Enabled = false;
                    }
                    if (FormType == FormType.Portal)
                    {
                        progressBar.Visible = true;
                        List<string> list = null;
                        Task task = Task.Factory.StartNew(() =>
                        {
                            list = xrmHelper.GetAllPortals();
                        });
                        while (!task.IsCompleted)
                        {
                            Application.DoEvents();
                        }
                        progressBar.Visible = false;
                        cboEntity.DataSource = list;
                        btnOk.Enabled = cboEntity.Items.Count > 0;
                        cboEntity.Enabled = btnOk.Enabled;
                    }
                }
            }
        }

        private void cboEntity_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (FormType == FormType.Portal) return;
            if (FormType == FormType.Test)
                lblProjectName.Text = $"{cboEntity.Text}.Test";
            else if (FormType == FormType.TestItem)
                lblProjectName.Text = $"{cboEntity.Text}Test";
            else if (FormType == FormType.LateBoundClass || FormType == FormType.JsWebApiItem || FormType == FormType.Portal ||
                     FormType == FormType.JsFormItem || FormType == FormType.JsTestItem || FormType == FormType.SelectEntity)
            {
                if (FormType == FormType.JsWebApiItem)
                {
                    var file = string.Empty;
                    if (Config.UseTypeScriptDeclaration == "true")
                        file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{cboEntity.Text}.d.ts";
                    else
                        file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{cboEntity.Text}.intellisense.js";
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
                MessageBox.Show($@"Duplicate Form name for this entity: {entityName} !", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
            public string Namespace { get; set; }
        }

        private void link_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            link.LinkVisited = true;
            System.Diagnostics.Process.Start((string)link.Tag);
        }

        private void cboCrmName_SelectedIndexChanged(object sender, EventArgs e)
        {
            var crmName = cboCrmName.Text;
            cboCrmVersion.DisplayMember = "Version";
            cboCrmVersion.ValueMember = "Version";
            cboCrmVersion.DataSource = nuget.CrmVersionDataSource(crmName);
        }

        private void cboCrmVersion_SelectedIndexChanged(object sender, EventArgs e)
        {
            var item = cboCrmVersion.SelectedItem as NuGetPackage;
            CrmVersion = item.Version;
            NetVersion = item.NetVersion;
        }
    }
}
