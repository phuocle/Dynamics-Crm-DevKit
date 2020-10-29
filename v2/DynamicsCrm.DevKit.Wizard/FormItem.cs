using System;
using System.Collections.Generic;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.Xrm.Sdk.Client;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using System.Threading.Tasks;
using System.IO;
using System.Linq;
using System.Drawing;
using Microsoft.Xrm.Sdk;
using DynamicsCrm.DevKit.SdkLogin;
using Microsoft.VisualStudio.TemplateWizard;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormItem : Form
    {
        public string GeneratedLateBoundClass { get; set; }
        public string GeneratedJsWebApiCode { get; set; }
        public string GeneratedJsWebApiCodeTypeScriptDeclaration { get; set; }
        public IOrganizationService CrmService { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public string ComboBoxCrmName => comboBoxCrmName.Text;
        public string ComboBoxEntityName => comboBoxEntity.Text;
        public string NameSpace { get; set; }
        public string SharedNameSpace { get; set; }
        public string Class
        {
            get
            {
                if (ItemType == ItemType.ResourceString) return $"{Utility.SafeName(comboBoxWebResource.Text)}.{comboBoxEntity.SelectedValue}";
                if (ItemType == ItemType.TestUi) return $"{Utility.SafeName(textItemName.Text)}Test";
                if (ItemType == ItemType.Test || ItemType == ItemType.JsTest) return $"{Utility.SafeName(comboBoxEntity.Text)}";
                if (ItemType == ItemType.LateBound) return comboBoxEntity.Text;
                if (comboBoxEntity.Visible) return comboBoxEntity.Text;
                return Utility.SafeName(textItemName.Text);
            }
        }

        public DTE DTE { get; }
        private ItemType _itemType;
        public ItemType ItemType
        {
            get => _itemType;
            set
            {
                _itemType = value;
                if(_itemType == ItemType.LateBound)
                {
                    link.Text = @"Add new C# Late Bound Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Late-Bound-Class-Item-Template";
                    textItemName.Visible = false;
                    comboBoxEntity.Visible = true;
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
                }
                else if (_itemType == ItemType.Workflow)
                {
                    link.Text = @"Add new Workflow Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template";
                    comboBoxCrmName.Enabled = true;
                    buttonConnection.Enabled = false;
                    textItemName.Enabled = true;
                    textItemName.Focus();
                    buttonOk.Enabled = true;
                    progressBar.Value = 100;
                }
                else if (_itemType == ItemType.JsWebApi)
                {
                    link.Text = @"Add New Js WebApi Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-WebApi-Item-Template";
                    textItemName.Visible = false;
                    comboBoxEntity.Visible = true;
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
                    checkBoxDebug.Visible = true;
                }
                else if (_itemType == ItemType.ResourceString)
                {
                    link.Text = @"Add New Resource String";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Resource-String-Item-Template";
                    //buttonConnection.Enabled = false;
                    textItemName.Visible = false;
                    //buttonOk.Enabled = true;
                    comboBoxCrmName.Enabled = true;
                    //comboBoxEntity.Enabled = true;
                    comboBoxEntity.Visible = true;
                    //comboBoxEntity.DataSource = Utility.GetLanguages();
                    comboBoxEntity.DisplayMember = "Name";
                    comboBoxEntity.ValueMember = "Value";
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
                    //comboBoxEntity.Text = "English-United States";
                    comboBoxWebResource.Size = new System.Drawing.Size(comboBoxWebResource.Size.Width / 2 - 50, comboBoxWebResource.Size.Height);
                    comboBoxEntity.Size = new System.Drawing.Size(comboBoxEntity.Size.Width / 2 + 50, comboBoxEntity.Size.Height);
                    comboBoxEntity.Location = new System.Drawing.Point(comboBoxWebResource.Location.X + comboBoxWebResource.Size.Width + 2, comboBoxEntity.Location.Y);
                    comboBoxWebResource.Enabled = true;
                    comboBoxWebResource.Visible = true;
                    comboBoxWebResource.DataSource = Utility.GetAllProjectItems(DTE)
                        .Where(x => x.Name.EndsWith(".resx"))
                        .Select(x => x.Name.Split(".".ToCharArray())[0])
                        .Distinct()
                        .ToList();
                    comboBoxWebResource.Enabled = false;
                }
                else if (_itemType == ItemType.TestUi)
                {
                    link.Text = @"Add New Test UI Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Ui-Item-Template";
                    comboBoxCrmName.Enabled = true;
                    buttonConnection.Enabled = false;
                    textItemName.Enabled = true;
                    textItemName.Focus();
                    buttonOk.Enabled = true;
                    progressBar.Value = 100;
                }
                else if (_itemType == ItemType.Test)
                {
                    link.Text = @"Add New Test Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Item-Template";
                    textItemName.Visible = false;
                    buttonConnection.Enabled = false;
                    comboBoxEntity.Visible = true;
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
                    var currentProjectName = Utility.GetCurrentProjectName(DTE);
                    if (currentProjectName.Contains(ProjectType.Plugin.ToString()) ||
                        currentProjectName.Contains(ProjectType.CustomAction.ToString()))
                    {
                        var list = Utility.GetAllTestProjectItems(DTE)
                            .Where(x => x.Name.EndsWith(".cs"))
                            .Select(x => x.Name.Split(".".ToCharArray())[0])
                            .Distinct()
                            .ToList();
                        var list2 = new List<string>();
                        foreach (var item in list)
                        {
                            var execution = item.EndsWith("Asynchronous") ? "Asynchronous" : (item.EndsWith("Synchronous") ? "Synchronous" : "");
                            if (execution.Length == 0) continue;
                            var stage = item.StartsWith("PreValidation") ? "PreValidation" : (item.StartsWith("Pre") ? "Pre" : (item.StartsWith("Post") ? "Post" : ""));
                            if (stage.Length == 0) continue;
                            list2.Add(item);
                        }
                        var list3 = new List<string>();
                        var existClasses = Utility.GetAllProjectItems(DTE)
                            .Where(x => x.Name.EndsWith(".cs"))
                            .Select(x => x.Name.Substring(0, x.Name.Length - ".cs".Length))
                            .ToList();
                        foreach (var item2 in list2)
                        {
                            if (existClasses.Contains($"{item2}Test")) continue;
                            list3.Add(item2);
                        }
                        comboBoxEntity.DataSource = list3;
                    }
                    else if (currentProjectName.Contains(ProjectType.Workflow.ToString()) ||
                        currentProjectName.Contains(ProjectType.DataProvider.ToString()))
                    {
                        var notIn = new List<string> { "Date", "EntityBase", "Extension", "PluginCore", "SimpleJson", "AssemblyInfo" };
                        var list = Utility.GetAllTestProjectItems(DTE)
                            .Where(x => x.Name.EndsWith(".cs"))
                            .Select(x => x.Name.Split(".".ToCharArray())[0])
                            .Distinct()
                            .ToList();
                        var list3 = new List<string>();
                        var existClasses = Utility.GetAllProjectItems(DTE)
                            .Where(x => x.Name.EndsWith(".cs"))
                            .Select(x => x.Name.Substring(0, x.Name.Length - ".cs".Length))
                            .ToList();
                        var list2 = new List<string>();
                        foreach (var item in list)
                        {
                            if (notIn.Contains(item)) continue;
                            list2.Add(item);
                        }
                        foreach (var item2 in list2)
                        {
                            if (existClasses.Contains($"{item2}Test")) continue;
                            list3.Add(item2);
                        }
                        comboBoxEntity.DataSource = list3;
                    }
                    buttonOk.Enabled = comboBoxEntity.Items.Count > 0;
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    comboBoxCrmName.Enabled = true;
                    progressBar.Value = 100;
                }
                else if (_itemType == ItemType.JsTest)
                {
                    link.Text = @"Add New Js Test Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Test-Item-Template";
                    textItemName.Visible = false;
                    comboBoxEntity.Visible = true;
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
                }
            }
        }

        public FormItem(ItemType itemType, DTE dte, string nameSpace, string sharedNameSpace)
        {
            InitializeComponent();

            progressBar.Visible = false;

            DTE = dte;
            ItemType = itemType;
            NameSpace = nameSpace;
            SharedNameSpace = sharedNameSpace;
            LoadComboBoxCrmName();
        }

        private void LoadComboBoxCrmName()
        {
            var dataSource = Const.DataSourceCrm;
            comboBoxCrmName.DataSource = dataSource;
            comboBoxCrmName.ValueMember = "Version";
            comboBoxCrmName.DisplayMember = "Name";
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            if (config.DefaultCrmName != null || config.DefaultCrmName != "null")
                comboBoxCrmName.Text = config.DefaultCrmName;
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

        private bool IsOk()
        {
            switch (ItemType)
            {
                case ItemType.ResourceString:
                    if(Utility.GetAllProjectItems(DTE).Any(x => x.Name == labelItemName.Text))
                    {
                        MessageBox.Show($"You already define this resource string: {labelItemName.Text}", @"Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                        return false;
                    }
                    break;
            }
            return true;
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            if (!IsOk()) return;
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            config.DefaultCrmName = comboBoxCrmName.Text;
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
            progressBar.Visible = true;
            if(ItemType == ItemType.LateBound)
            {
                EnabledAll(false);
                progressBar.Style = ProgressBarStyle.Marquee;
                var crmService = CrmService;
                var crmName = ComboBoxCrmName;
                var entityName = ComboBoxEntityName;
                var nameSpace = NameSpace;
                var sharedNameSpace = SharedNameSpace;
                Task task1 = Task.Factory.StartNew(() =>
                {
                    GeneratedLateBoundClass = XrmHelper.GeneratedLateBoundClass(crmService, crmName, entityName, nameSpace, sharedNameSpace);
                });
                while (!task1.IsCompleted)
                {
                    Application.DoEvents();
                }
            }
            else if (ItemType == ItemType.JsWebApi)
            {
                EnabledAll(false);
                progressBar.Style = ProgressBarStyle.Marquee;
                var entityName = ComboBoxEntityName;
                var isDebug = checkBoxDebug.Checked;
                var file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.d.ts";
                var isDebugForm = false;
                var jsForm = new List<string>();
                var jsFormVersion = string.Empty;
                if (File.Exists(file))
                {
                    var lines = File.ReadAllLines(file);
                    var json = lines[lines.Length - 1];
                    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    isDebugForm = comment.IsDebugForm;
                    jsForm = comment.JsForm;
                    jsFormVersion = comment.JsFormVersion;
                }
                var jsGlobalNameSpace = Utility.GetJsGlobalNameSpace(DTE);
                Task task2 = Task.Factory.StartNew(() =>
                {
                    var jsWebApi = new JsWebApi(CrmService, jsGlobalNameSpace, entityName, isDebug, jsForm, isDebugForm, jsFormVersion);
                    jsWebApi.GeneratorCode();
                    GeneratedJsWebApiCode = jsWebApi.WebApiCode;
                    GeneratedJsWebApiCodeTypeScriptDeclaration = jsWebApi.WebApiCodeTypeScriptDeclaration;
                });
                while (!task2.IsCompleted)
                {
                    Application.DoEvents();
                }
            }
            progressBar.Visible = false;
            DialogResult = DialogResult.OK;
        }

        private void buttonancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }

        private void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }

        private void buttonConnection_Click(object sender, EventArgs e)
        {
            var form = new FormConnection2(DTE);
            if (form.ShowDialog() == DialogResult.Cancel) return;
            if (form.Check == "1")
            {
                if (ItemType == ItemType.LateBound ||
                    ItemType == ItemType.JsWebApi ||
                    ItemType == ItemType.JsTest ||
                    ItemType == ItemType.ResourceString)
                {
                    var loginForm = new FormLogin();
                    loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                    loginForm.ShowDialog();
                    if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                    {
                        if (loginForm.CrmConnectionMgr.CrmSvc.OrganizationServiceProxy != null)
                            CrmService = (IOrganizationService)loginForm.CrmConnectionMgr.CrmSvc.OrganizationServiceProxy;
                        else if (loginForm.CrmConnectionMgr.CrmSvc.OrganizationWebProxyClient != null)
                            CrmService = (IOrganizationService)loginForm.CrmConnectionMgr.CrmSvc.OrganizationWebProxyClient;
                        else
                            throw new WizardCancelledException();
                        CrmConnection = new CrmConnection { Name = string.Empty, Password = string.Empty, Type = string.Empty, Url = string.Empty, UserName = string.Empty };
                    }
                    else
                        throw new WizardCancelledException();
                }
            }
            else
            {
                CrmConnection = form.CrmConnection;
                CrmService = form.CrmService;
            }

            buttonOk.Enabled = true;
            comboBoxCrmName.Enabled = true;
            CheckFormByFormType();
        }

        private void CheckFormByFormType()
        {
            progressBar.Visible = true;
            switch (ItemType)
            {
                case ItemType.LateBound:
                    EnabledAll(false);
                    List<XrmEntity> entities1 = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task task1 = Task.Factory.StartNew(() =>
                    {
                        entities1 = XrmHelper.GetAllEntities(CrmService);
                    });
                    while (!task1.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entities1);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ItemType.JsWebApi:
                    EnabledAll(false);
                    List<XrmEntity> entities2 = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task task2 = Task.Factory.StartNew(() =>
                    {
                        entities2 = XrmHelper.GetAllEntities(CrmService);
                    });
                    while (!task2.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entities2);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    checkBoxDebug.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ItemType.JsTest:
                    EnabledAll(false);
                    List<XrmEntity> entities3 = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task task3 = Task.Factory.StartNew(() =>
                    {
                        entities3 = XrmHelper.GetAllEntities(CrmService);
                    });
                    while (!task3.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entities3);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ItemType.ResourceString:
                    EnabledAll(false);
                    List<int> languages = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task task4 = Task.Factory.StartNew(() =>
                    {
                        languages = XrmHelper.GetProvisionedLanguages(CrmService);
                    });
                    while (!task4.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    comboBoxEntity.DataSource = Utility.GetLanguages().Where(x => languages.Contains(int.Parse(x.Value))).ToList();
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    comboBoxWebResource.Enabled = comboBoxEntity.Enabled;
                    comboBoxEntity.SelectedIndex = 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = false;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
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
            comboBoxCrmName.Enabled = value;
            textItemName.Enabled = value;
            comboBoxEntity.Enabled = value;
            checkBoxDebug.Enabled = value;
        }

        private void link_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            link.LinkVisited = true;
            System.Diagnostics.Process.Start((string)link.Tag);
        }

        private void textItemName_TextChanged(object sender, EventArgs e)
        {
            ComboBoxEntityChange(textItemName.Text);
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
            switch (ItemType)
            {
                case ItemType.JsWebApi:
                    labelItemName.Text = $"{Utility.SafeName(text)}.webapi.js";
                    LoadDebugCheckBox();
                    break;
                case ItemType.JsTest:
                    labelItemName.Text = $"{Utility.SafeName(text)}.test.js";
                    break;
                case ItemType.LateBound:
                case ItemType.Workflow:
                    labelItemName.Text = $"{Utility.SafeName(text)}.cs";
                    break;
                case ItemType.ResourceString:
                    labelItemName.Text = $"{Utility.SafeName(comboBoxWebResource.Text)}.{comboBoxEntity.SelectedValue}.resx";
                    break;
                case ItemType.TestUi:
                case ItemType.Test:
                    labelItemName.Text = $"{Utility.SafeName(text)}Test.cs";
                    break;
            }
        }

        private void LoadDebugCheckBox()
        {
            var entity = comboBoxEntity.SelectedItem as XrmEntity;
            var file1 = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entity.Name}.intellisense.js";
            var file2 = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entity.Name}.d.ts";
            var file = File.Exists(file2) ? file2 : file1;
            if (File.Exists(file))
            {
                try
                {
                    var lines = File.ReadAllLines(file);
                    var json = lines[lines.Length - 1];
                    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                    checkBoxDebug.Checked = comment.IsDebugWebApi;
                }
                catch
                {
                }
            }
        }

        private void ComboBoxWebResource_SelectedIndexChanged(object sender, EventArgs e)
        {
            ComboBoxEntityChange(comboBoxWebResource.Text);
        }

        private void ComboBoxWebResource_TextChanged(object sender, EventArgs e)
        {
            ComboBoxEntityChange(comboBoxWebResource.Text);
        }
    }
}
