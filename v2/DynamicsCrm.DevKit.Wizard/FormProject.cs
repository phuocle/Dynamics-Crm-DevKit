using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Windows.Forms;
using EnvDTE;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
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
                return "365";
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
        public string ComboBoxCrmName => Const.Dynamics365;
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
                else if (_projectType == ProjectType.Server)
                {
                    link.Text = @"Add new Server Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Server-Project-Template";
                }
                else if (_projectType == ProjectType.DataProvider)
                {
                    link.Text = @"Add New Data Provider Project";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Data-Provider-Project-Template";
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
                MessageBox.Show($@"{ProjectType} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (Utility.ExistProject(DTE, ProjectName))
            {
                MessageBox.Show($@"{ProjectName} project exist!", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
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
            else
            {
                CrmConnection = form.CrmConnection;
                CrmServiceClient = form.CrmServiceClient;
            }
            Check = form.Check;
            buttonOk.Enabled = true;
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
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ProjectType.DataProvider:
                    textProjectName.Enabled = true;
                    textProjectName.Focus();
                    progressBar.Value = 100;
                    break;
                case ProjectType.Server:
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
                var temp = $@"{text}.{ProjectType}";
                temp = temp.Replace("..", ".");
                labelProjectName.Text = temp;
            }
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
