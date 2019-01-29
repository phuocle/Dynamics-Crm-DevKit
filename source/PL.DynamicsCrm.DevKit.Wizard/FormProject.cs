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
        public string LanguageCode => cboEntity.SelectedValue.ToString();
        public string ResourceStringName => txtName.Text;
        public string CrmVersion => cboCrmVersion.Text;

        public NuGetPackage CoreToolsVersion
        {
            get
            {
                return NuGetHelper.GetMicrosoftCrmSdkCoreToolsPackages().FirstOrDefault();
            }
        }

        public string NetVersion => cboNetVersion.Text;

        public string ProjectName => lblProjectName.Text;

        public string EntityName { get; set; }
        public string EntityNameTest
        {
            get
            {
                var name = cboEntity.Text;
                if (name.StartsWith("PostNone")) return "None";
                var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
                name = name.Substring(0, name.IndexOf(config.SolutionPrefix));
                return name.Substring("Post".Length);

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
                        link.Text = @"Add New Console Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.Console.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;
                        btnConnection.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        lblNetVersion.Visible = true;
                        cboNetVersion.Visible = true;

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
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        lblNetVersion.Visible = true;
                        cboNetVersion.Visible = true;

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
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        lblNetVersion.Visible = true;
                        cboNetVersion.Visible = true;

                        cboEntity.Enabled = false;
                        btnOk.Enabled = false;

                        break;
                    case FormType.Test:
                        link.Text = @"Add New Test Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Test-Project-Template";

                        lblProjectName.Text = $@"???.Test";

                        LoadProjects();
                        cboEntity.Visible = true;

                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y);
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y);

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
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        lblNetVersion.Visible = true;
                        cboNetVersion.Visible = true;
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
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        lblNetVersion.Visible = true;
                        cboNetVersion.Visible = true;
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

                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y);
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y);

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
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        lblNetVersion.Visible = true;
                        cboNetVersion.Visible = true;

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
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        lblNetVersion.Visible = true;
                        cboNetVersion.Visible = true;
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

                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y);
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y);

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

                        cboEntity.Location = new Point(txtName.Location.X, txtName.Location.Y + txtName.Height + 8);
                        btnOk.Location = new Point(txtName.Location.X, btnOk.Location.Y + cboEntity.Height );
                        btnCancel.Location = new Point(txtName.Location.X + btnOk.Width + 20, btnCancel.Location.Y + cboEntity.Height);

                        break;
                    case FormType.DataProvider:
                        link.Text = @"Add New Data Provider Project";
                        link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Data-Provider-Project-Template";

                        lblProjectName.Text = GetName(parts) + $@"{FormType.DataProvider.ToString()}";
                        lblProjectName.Tag = lblProjectName.Text;

                        txtName.Visible = true;
                        txtName.Enabled = false;
                        btnConnection.Visible = true;
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        lblNetVersion.Visible = true;
                        cboNetVersion.Visible = true;
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
                        lblCrmVersion.Visible = true;
                        cboCrmVersion.Visible = true;
                        lblNetVersion.Visible = true;
                        cboNetVersion.Visible = true;
                        btnOk.Enabled = false;

                        break;
                }
                link.Text = "Github Wiki: " + link.Text;
            }
        }

        private void LoadLanguages()
        {
            var languages = new List<NameValue>
            {
                new NameValue { Name = "Afrikaans-South Africa", Value = "1078" },
                new NameValue { Name = "Albanian-Albania", Value = "1052" },
                new NameValue { Name = "Arabic-Algeria", Value = "5121" },
                new NameValue { Name = "Arabic-Bahrain", Value = "15361" },
                new NameValue { Name = "Arabic-Egypt", Value = "3073" },
                new NameValue { Name = "Arabic-Iraq", Value = "2049" },
                new NameValue { Name = "Arabic-Jordan", Value = "11265" },
                new NameValue { Name = "Arabic-Kuwait", Value = "13313" },
                new NameValue { Name = "Arabic-Lebanon", Value = "12289" },
                new NameValue { Name = "Arabic-Libya", Value = "4097" },
                new NameValue { Name = "Arabic-Morocco", Value = "6145" },
                new NameValue { Name = "Arabic-Oman", Value = "8193" },
                new NameValue { Name = "Arabic-Qatar", Value = "16385" },
                new NameValue { Name = "Arabic-Saudi Arabia", Value = "1025" },
                new NameValue { Name = "Arabic-Syria", Value = "10241" },
                new NameValue { Name = "Arabic-Tunisia", Value = "7169" },
                new NameValue { Name = "Arabic-U.A.E.", Value = "14337" },
                new NameValue { Name = "Arabic-Yemen", Value = "9217" },
                new NameValue { Name = "Armenian-Armenia", Value = "1067" },
                new NameValue { Name = "Azeri (Cyrillic)-Azerbaijan", Value = "2092" },
                new NameValue { Name = "Azeri (Latin)-Azerbaijan", Value = "1068" },
                new NameValue { Name = "Basque-Spain", Value = "1069" },
                new NameValue { Name = "Belarusian-Belarus", Value = "1059" },
                new NameValue { Name = "Bulgarian-Bulgaria", Value = "1026" },
                new NameValue { Name = "Catalan-Spain", Value = "1027" },
                new NameValue { Name = "Chinese-Hong Kong S.A.R.", Value = "3076" },
                new NameValue { Name = "Chinese-Macau S.A.R.", Value = "5124" },
                new NameValue { Name = "Chinese-People's Republic of China", Value = "2052" },
                new NameValue { Name = "Chinese-Singapore", Value = "4100" },
                new NameValue { Name = "Chinese-Taiwan", Value = "1028" },
                new NameValue { Name = "Croatian-Croatia", Value = "1050" },
                new NameValue { Name = "Czech-Czech Republic", Value = "1029" },
                new NameValue { Name = "Danish-Denmark", Value = "1030" },
                new NameValue { Name = "Divehi-Maldives", Value = "1125" },
                new NameValue { Name = "Dutch-Belgium", Value = "2067" },
                new NameValue { Name = "Dutch-Netherlands", Value = "1043" },
                new NameValue { Name = "English-Australia", Value = "3081" },
                new NameValue { Name = "English-Belize", Value = "10249" },
                new NameValue { Name = "English-Canada", Value = "4105" },
                new NameValue { Name = "English-Caribbean", Value = "9225" },
                new NameValue { Name = "English-Ireland", Value = "6153" },
                new NameValue { Name = "English-Jamaica", Value = "8201" },
                new NameValue { Name = "English-New Zealand", Value = "5129" },
                new NameValue { Name = "English-Republic of the Philippines", Value = "13321" },
                new NameValue { Name = "English-South Africa", Value = "7177" },
                new NameValue { Name = "English-Trinidad and Tobago", Value = "11273" },
                new NameValue { Name = "English-United Kingdom", Value = "2057" },
                new NameValue { Name = "English-United States", Value = "1033" },
                new NameValue { Name = "English-Zimbabwe", Value = "12297" },
                new NameValue { Name = "Estonian-Estonia", Value = "1061" },
                new NameValue { Name = "Faroese-Faeroe Islands", Value = "1080" },
                new NameValue { Name = "Farsi-Iran", Value = "1065" },
                new NameValue { Name = "Finnish-Finland", Value = "1035" },
                new NameValue { Name = "French-Belgium", Value = "2060" },
                new NameValue { Name = "French-Canada", Value = "3084" },
                new NameValue { Name = "French-France", Value = "1036" },
                new NameValue { Name = "French-Luxembourg", Value = "5132" },
                new NameValue { Name = "French-Principality of Monaco", Value = "6156" },
                new NameValue { Name = "French-Switzerland", Value = "4108" },
                new NameValue { Name = "FYRO Macedonian-Former Yugoslav Republic of Macedonia", Value = "1071" },
                new NameValue { Name = "Galician-Spain", Value = "1110" },
                new NameValue { Name = "Georgian-Georgia", Value = "1079" },
                new NameValue { Name = "German-Austria", Value = "3079" },
                new NameValue { Name = "German-Germany", Value = "1031" },
                new NameValue { Name = "German-Liechtenstein", Value = "5127" },
                new NameValue { Name = "German-Luxembourg", Value = "4103" },
                new NameValue { Name = "German-Switzerland", Value = "2055" },
                new NameValue { Name = "Greek-Greece", Value = "1032" },
                new NameValue { Name = "Gujarati-India", Value = "1095" },
                new NameValue { Name = "Hebrew-Israel", Value = "1037" },
                new NameValue { Name = "Hindi-India", Value = "1081" },
                new NameValue { Name = "Hungarian-Hungary", Value = "1038" },
                new NameValue { Name = "Icelandic-Iceland", Value = "1039" },
                new NameValue { Name = "Indonesian-Indonesia", Value = "1057" },
                new NameValue { Name = "Italian-Italy", Value = "1040" },
                new NameValue { Name = "Italian-Switzerland", Value = "2064" },
                new NameValue { Name = "Japanese-Japan", Value = "1041" },
                new NameValue { Name = "Kannada-India", Value = "1099" },
                new NameValue { Name = "Kazakh-Kazakhstan", Value = "1087" },
                new NameValue { Name = "Konkani-India", Value = "1111" },
                new NameValue { Name = "Korean-Korea", Value = "1042" },
                new NameValue { Name = "Kyrgyz-Kyrgyzstan", Value = "1088" },
                new NameValue { Name = "Latvian-Latvia", Value = "1062" },
                new NameValue { Name = "Lithuanian-Lithuania", Value = "1063" },
                new NameValue { Name = "Malay-Brunei Darussalam", Value = "2110" },
                new NameValue { Name = "Malay-Malaysia", Value = "1086" },
                new NameValue { Name = "Marathi-India", Value = "1102" },
                new NameValue { Name = "Mongolian-Mongolia", Value = "1104" },
                new NameValue { Name = "Norwegian (Bokmål)-Norway", Value = "1044" },
                new NameValue { Name = "Norwegian (Nynorsk)-Norway", Value = "2068" },
                new NameValue { Name = "Polish-Poland", Value = "1045" },
                new NameValue { Name = "Portuguese-Brazil", Value = "1046" },
                new NameValue { Name = "Portuguese-Portugal", Value = "2070" },
                new NameValue { Name = "Punjabi-India", Value = "1094" },
                new NameValue { Name = "Romanian-Romania", Value = "1048" },
                new NameValue { Name = "Russian-Russia", Value = "1049" },
                new NameValue { Name = "Sanskrit-India", Value = "1103" },
                new NameValue { Name = "Serbian (Cyrillic)-Serbia and Montenegro", Value = "3098" },
                new NameValue { Name = "Serbian (Latin)-Serbia and Montenegro", Value = "2074" },
                new NameValue { Name = "Slovak-Slovakia", Value = "1051" },
                new NameValue { Name = "Slovenian-Slovenia", Value = "1060" },
                new NameValue { Name = "Spanish-Argentina", Value = "11274" },
                new NameValue { Name = "Spanish-Bolivia", Value = "16394" },
                new NameValue { Name = "Spanish-Chile", Value = "13322" },
                new NameValue { Name = "Spanish-Colombia", Value = "9226" },
                new NameValue { Name = "Spanish-Costa Rica", Value = "5130" },
                new NameValue { Name = "Spanish-Dominican Republic", Value = "7178" },
                new NameValue { Name = "Spanish-Ecuador", Value = "12298" },
                new NameValue { Name = "Spanish-El Salvador", Value = "17418" },
                new NameValue { Name = "Spanish-Guatemala", Value = "4106" },
                new NameValue { Name = "Spanish-Honduras", Value = "18442" },
                new NameValue { Name = "Spanish-Mexico", Value = "2058" },
                new NameValue { Name = "Spanish-Nicaragua", Value = "19466" },
                new NameValue { Name = "Spanish-Panama", Value = "6154" },
                new NameValue { Name = "Spanish-Paraguay", Value = "15370" },
                new NameValue { Name = "Spanish-Peru", Value = "10250" },
                new NameValue { Name = "Spanish-Puerto Rico", Value = "20490" },
                new NameValue { Name = "Spanish-Spain", Value = "1034" },
                new NameValue { Name = "Spanish-Uruguay", Value = "14346" },
                new NameValue { Name = "Spanish-Venezuela", Value = "8202" },
                new NameValue { Name = "Spanish - Modern Sort-Spain", Value = "3082" },
                new NameValue { Name = "Swahili-Kenya", Value = "1089" },
                new NameValue { Name = "Swedish-Finland", Value = "2077" },
                new NameValue { Name = "Swedish-Sweden", Value = "1053" },
                new NameValue { Name = "Syriac-Syria", Value = "1114" },
                new NameValue { Name = "Tamil-India", Value = "1097" },
                new NameValue { Name = "Tatar-Tatarstan", Value = "1092" },
                new NameValue { Name = "Telugu-India", Value = "1098" },
                new NameValue { Name = "Thai-Thailand", Value = "1054" },
                new NameValue { Name = "Turkish-Turkey", Value = "1055" },
                new NameValue { Name = "Ukrainian-Ukraine", Value = "1058" },
                new NameValue { Name = "Urdu-Islamic Republic of Pakistan", Value = "1056" },
                new NameValue { Name = "Uzbek (Cyrillic)-Uzbekistan", Value = "2115" },
                new NameValue { Name = "Uzbek (Latin)-Uzbekistan", Value = "1091" },
                new NameValue { Name = "Vietnamese-Viet Nam", Value = "1066" },
                new NameValue { Name = "Welsh-United Kingdom", Value = "1106" }
            };
            cboEntity.DisplayMember = "Name";
            cboEntity.ValueMember = "Value";
            cboEntity.DataSource = languages;
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
                    code += $"\t\t\tvar @class = new {cboEntity.Text}(null, null);\r\n";
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
                var package = NuGetHelper.GetPLDynamicsCrmDevKitCliPackage();
                return package.Version;
            }
        }

        public string PLDynamicsCrmDevKitAnalyzersVersion
        {
            get
            {
                try
                {
                    var package = NuGetHelper.GetPLDynamicsCrmDevKitAnalyzersPackage();
                    return package.Version;
                }
                catch
                {
                    return "1.2.0";
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
            if (cboCrmVersion.Visible && cboCrmVersion.Enabled && cboCrmVersion.Text.Length == 0)
            {
                MessageBox.Show(@"Please select Crm Version!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (cboNetVersion.Visible && cboNetVersion.Enabled && cboNetVersion.Text.Length == 0)
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
                    MessageBox.Show(@"Please add Shared project and try again!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
                    MessageBox.Show(@"Please add ProxyTypes project and try again!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    btnCancel.Enabled = true;
                    return;
                }
                else
                {
                    ProxyTypes = new ProjectData
                    {
                        Id = Const.ProxyTypesGuid.ToString(),
                        Name = $"{GetName(parts)}ProxyTypes"
                    };
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

                progressBar.Visible = true;
                Task task = Task.Factory.StartNew(() =>
                {
                    _generated = lateBound.Go(CrmService, /*companyName,*//* projectName,*/ entityName, RootNameSpace, SharedNameSpace);
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
            else if (FormType == FormType.ResourceString)
            {
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.DataProvider)
            {
                txtName.Enabled = false;
                cboCrmVersion.Enabled = false;
                cboNetVersion.Enabled = false;
                btnOk.Enabled = false;
                btnCancel.Enabled = false;
                DialogResult = DialogResult.OK;
                Close();
            }
            else if (FormType == FormType.SolutionPackager)
            {
                txtName.Enabled = false;
                cboCrmVersion.Enabled = false;
                cboNetVersion.Enabled = false;
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
            if (FormType == FormType.Workflow || FormType == FormType.CustomAction || FormType == FormType.Report || FormType == FormType.DataProvider)
                btnOk.Enabled = true;
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
                    cboCrmVersion.Enabled = cboEntity.Enabled;
                    cboNetVersion.Enabled = cboEntity.Enabled;
                    cboEntity.SelectedIndex = 0;
                    txtName_TextChanged(null, null);
                    cboEntity_SelectedIndexChanged(null, null);
                    btnOk.Focus();
                }

                if (FormType == FormType.ProxyTypes || FormType == FormType.WebResource ||
                    FormType == FormType.Console || FormType == FormType.UiTest || FormType == FormType.DataProvider || FormType == FormType.SolutionPackager)
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
    }
}
