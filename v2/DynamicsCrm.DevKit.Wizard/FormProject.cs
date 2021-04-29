using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using EnvDTE;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk;
using DynamicsCrm.DevKit.SdkLogin;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormProject : Form
    {
        public string WizardCrmConnectionString
        {
            get
            {
                return XrmHelper.BuildConnectionString(CrmConnection);
            }
        }

        public string WizardShortCrmName
        {
            get
            {
                var crmName = Utility.GetCrmName(comboBoxCrmName.Text);
                if (crmName.Length == 0) return crmName;
                return crmName.Substring(crmName.LastIndexOf(" ")).Trim();
            }
        }

        public string WizardNameSpace => labelProjectName.Text;

        public CrmServiceClient CrmServiceClient { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public string ProjectName => labelProjectName.Text;
        public string ProjectJsName
        {
            get
            {
                var parts = ProjectName.Split(".".ToCharArray());
                for(var i=0; i<parts.Length; i++)
                {
                    if (parts[i].ToLower() == ProjectType.WebResource.ToString().ToLower())
                    {
                        if (i > 1)
                        {
                            var projectJsName = parts[i - 1];
                            if (int.TryParse(projectJsName.Substring(0, 1), out _))
                            {
                                projectJsName = $"_{projectJsName}";
                            }
                            return projectJsName;
                        }
                    }
                }
                return ProjectType.WebResource.ToString();
            }
        }
        public string ComboBoxCrmName => comboBoxCrmName.Text;
        public string Check { get; set; } = "0";

        public DTE DTE { get; }
        private ProjectType _projectType;
        public ProjectType ProjectType
        {
            get => _projectType;
            set
            {
                _projectType = value;
                if (_projectType == ProjectType.Shared)
                {
                    link.Text = @"Add New Shared Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Project-Template";
                }
                else if (_projectType == ProjectType.Console)
                {
                    link.Text = @"Add New Console Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Project-Template";
                }
                else if (_projectType == ProjectType.Plugin)
                {
                    link.Text = @"Add New Plugin Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Plugin-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }
                else if (_projectType == ProjectType.ProxyTypes)
                {
                    link.Text = @"Add New Proxy Types Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/ProxyTypes-Project-Template";
                }
                else if (_projectType == ProjectType.Workflow)
                {
                    link.Text = @"Add New Workflow Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Workflow-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }
                else if (_projectType == ProjectType.CustomAction)
                {
                    link.Text = @"Add new Custom Action Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Custom-Action-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }
                else if (_projectType == ProjectType.CustomApi)
                {
                    link.Text = @"Add new Custom Api Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Custom-Api-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }
                else if (_projectType == ProjectType.DataProvider)
                {
                    link.Text = @"Add New Data Provider Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Data-Provider-Project-Template";
                    //textProjectName.Visible = false;
                    //comboBoxEntity.Visible = true;
                }
                else if (_projectType == ProjectType.WebResource)
                {
                    link.Text = @"Add New WebResource Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template";
                }
                else if (_projectType == ProjectType.SolutionPackager)
                {
                    link.Text = @"Add New Solution Packager Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Solution-Packager-Project-Template";
                }
                else if (_projectType == ProjectType.Test)
                {
                    link.Text = @"Add New Test Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Test-Project-Template";
                    textProjectName.Visible = false;
                    comboBoxEntity.Visible = true;
                }
                else if (_projectType == ProjectType.UiTest)
                {
                    link.Text = @"Add New UI Test Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Ui-Test-Project-Template";
                }
                else if (_projectType == ProjectType.Report)
                {
                    link.Text = @"Add New Report Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Report-Project-Template";
                }

                labelProjectName.Text = $"{Utility.GetProjectName(DTE, _projectType)}";
                labelProjectName.Tag = labelProjectName.Text;
            }
        }

        public FormProject(ProjectType projectType, DTE dte)
        {
            InitializeComponent();

            progressBar.Visible = false;

            DTE = dte;
            ProjectType = projectType;
            LoadComboBoxCrmName();
        }

        private void LoadComboBoxCrmName()
        {
            var dataSource = Const.DataSourceCrm;
            if (ProjectType == ProjectType.DataProvider)
            {
                dataSource = Const.DataSourceCrm.Where(x => x.Name.StartsWith(Const.Dynamics365)).ToList();
            }
            else if (ProjectType == ProjectType.UiTest)
            {
                dataSource = Const.DataSourceCrm.Where(x => x.Name.StartsWith(Const.Dynamics365) || x.Name.StartsWith(Const.DynamicsCrm2016)).ToList();
            }
            comboBoxCrmName.DataSource = dataSource;
            comboBoxCrmName.ValueMember = "Version";
            comboBoxCrmName.DisplayMember = "Name";

            comboBoxCrmName.SelectedIndex = 0;
            comboBoxCrmName.Enabled = false;

            //var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            //if (config.DefaultCrmName != null || config.DefaultCrmName != "null")
            //    comboBoxCrmName.Text = config.DefaultCrmName;
        }

        private void LoadComboBoxEntity(List<XrmEntity> entities)
        {
            comboBoxEntity.DataSource = entities;
            comboBoxEntity.ValueMember = "LogicalName";
            comboBoxEntity.DisplayMember = "Name";
        }

        private void LoadComboBoxEntity(List<string> projects)
        {
            comboBoxEntity.DataSource = projects;
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            if (Utility.ExistProject(DTE, textProjectName.Text))
            {
                MessageBox.Show($@"{ProjectType.ToString()} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (Utility.ExistProject(DTE, ProjectName))
            {
                MessageBox.Show($@"{ProjectName} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            config.DefaultCrmName = comboBoxCrmName.Text;
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
            DialogResult = DialogResult.OK;
        }

        private void buttonancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }

        private void buttonConnection_Click(object sender, EventArgs e)
        {
            var form = new FormConnection2(DTE, ProjectType);
            if (form.ShowDialog() == DialogResult.Cancel) return;
            if (form.Check == "1")
            {
                if (//ProjectType == ProjectType.DataProvider ||
                    ProjectType == ProjectType.CustomAction ||
                    ProjectType == ProjectType.CustomApi ||
                    ProjectType == ProjectType.Workflow ||
                    //ProjectType == ProjectType.Report ||
                    ProjectType == ProjectType.Plugin)
                {
                    var loginForm = new FormLogin();
                    loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                    loginForm.ShowDialog();
                    if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                    {
                        CrmServiceClient = loginForm.CrmConnectionMgr.CrmSvc;
                        CrmConnection = new CrmConnection {Name = string.Empty, Password = string.Empty, Type = string.Empty, Url = string.Empty, UserName = string.Empty };
                    }
                    else
                        throw new WizardCancelledException();
                }
            }
            else
            {
                CrmConnection = form.CrmConnection;
                CrmServiceClient = form.CrmServiceClient;
            }
            Check = form.Check;
            buttonOk.Enabled = true;
            //comboBoxCrmName.Enabled = true;
            CheckFormByFormType();
            Text = $"Connected: {XrmHelper.ConnectedUrl(CrmServiceClient)}";
        }

        private void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }

        private void CheckFormByFormType()
        {
            progressBar.Visible = true;
            switch (ProjectType)
            {
                case ProjectType.Shared:
                    textProjectName.Enabled = false;
                    progressBar.Value = 100;
                    break;
                case ProjectType.Console:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case ProjectType.Plugin:
                    EnabledAll(false);
                    List<XrmEntity> entitiesPlugin = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task taskPlugin = Task.Factory.StartNew(() =>
                    {
                        entitiesPlugin = XrmHelper.GetAllEntities(CrmServiceClient);
                    });
                    while (!taskPlugin.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entitiesPlugin);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    //comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ProjectType.ProxyTypes:
                    progressBar.Value = 100;
                    break;
                case ProjectType.Workflow:
                    EnabledAll(false);
                    List<XrmEntity> entitiesWorkflow = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task taskWorkflow = Task.Factory.StartNew(() =>
                    {
                        entitiesWorkflow = XrmHelper.GetAllEntities(CrmServiceClient);
                    });
                    while (!taskWorkflow.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entitiesWorkflow);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    //comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ProjectType.CustomAction:
                case ProjectType.CustomApi:
                    EnabledAll(false);
                    List<XrmEntity> entitiesCustomAction = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task taskCustomAction = Task.Factory.StartNew(() =>
                    {
                        entitiesCustomAction = XrmHelper.GetAllEntities(CrmServiceClient);
                    });
                    while (!taskCustomAction.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entitiesCustomAction);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    //comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ProjectType.DataProvider:
                    //EnabledAll(false);
                    //List<XrmEntity> entitiesDataProvider = null;
                    //progressBar.Style = ProgressBarStyle.Marquee;
                    //Task taskDataProvider = Task.Factory.StartNew(() =>
                    //{
                    //    entitiesDataProvider = XrmHelper.GetAllEntities(CrmService);
                    //});
                    //while (!taskDataProvider.IsCompleted)
                    //{
                    //    Application.DoEvents();
                    //}
                    //LoadComboBoxEntity(entitiesDataProvider);
                    //comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    //buttonOk.Enabled = comboBoxEntity.Enabled;
                    //comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    //buttonConnection.Enabled = true;
                    //buttonCancel.Enabled = true;
                    //progressBar.Style = ProgressBarStyle.Blocks;
                    //progressBar.Value = 100;
                    //break;
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case ProjectType.WebResource:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case ProjectType.SolutionPackager:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case ProjectType.Test:
                    EnabledAll(false);
                    List<string> projects = new List<string>();
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task taskTest = Task.Factory.StartNew(() =>
                    {
                        projects = Utility.GetAllProjectForTesting(DTE);
                    });
                    while (!taskTest.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(projects);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    //comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ProjectType.UiTest:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case ProjectType.Report:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
            }
            progressBar.Visible = false;
        }

        private void EnabledAll(bool value)
        {
            buttonConnection.Enabled = value;
            buttonOk.Enabled = value;
            buttonCancel.Enabled = value;
            //comboBoxCrmName.Enabled = value;
            textProjectName.Enabled = value;
            comboBoxEntity.Enabled = value;
        }

        private void link_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            link.LinkVisited = true;
            System.Diagnostics.Process.Start((string)link.Tag);
        }

        private void textProjectName_TextChanged(object sender, EventArgs e)
        {
            ComboBoxEntityChange(textProjectName.Text);
        }

        private void comboBoxEntity_SelectedIndexChanged(object sender, EventArgs e)
        {
            ComboBoxEntityChange(comboBoxEntity.Text);
        }

        private void comboBoxEntity_TextUpdate(object sender, EventArgs e)
        {
            ComboBoxEntityChange(comboBoxEntity.Text);
        }

        private void ComboBoxEntityChange(string text)
        {
            if (ProjectType == ProjectType.Test || ProjectType == ProjectType.UiTest)
            {
                var solutionName = Utility.GetSolutionName(DTE);
                if (!text.StartsWith(solutionName)) text = solutionName + "." + text;
                var temp = $@"{text}.{ProjectType.ToString()}";
                temp = temp.Replace("..", ".");
                labelProjectName.Text = temp;
            }
            //else if (ProjectType == ProjectType.Report)
            //{
            //        var temp = $@"{text}.Report";
            //    if (temp.StartsWith("."))
            //        temp = temp.Substring(1);
            //    labelProjectName.Text = temp;
            //}
            else
            {
                var temp = $@"{labelProjectName.Tag}.{text}";
                if (temp.EndsWith("."))
                    temp = temp.Substring(0, temp.Length - 1);
                labelProjectName.Text = temp;
            }
        }
    }
}
