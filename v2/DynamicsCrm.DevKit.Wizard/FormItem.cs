using System;
using System.Collections.Generic;
using System.Windows.Forms;
using EnvDTE;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using System.Threading.Tasks;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.SdkLogin;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormItem : Form
    {
        public string GeneratedLateBoundClass { get; set; }
        public string GeneratedJsWebApiCode { get; set; }
        public string GeneratedJsForm { get; set; }
        public string GeneratedJsFormCode { get; set; }
        public string GeneratedJsTypeScriptDeclaration { get; set; }

        public CrmServiceClient CrmServiceClient { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public string ComboBoxCrmName => Const.Dynamics365;
        public string ComboBoxEntityName => comboBoxEntity.Text;
        public string NameSpace { get; set; }
        public string SharedNameSpace { get; set; }
        public string DataSource
        {
            get
            {
                if (ItemType == ItemType.DataProvider) return comboBoxEntity.Text;
                return string.Empty;
            }
        }
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

        public string CrmPluginRegistrationPluginType
        {
            get
            {
                var nv = comboBoxEntity.SelectedItem as NameValue;
                return nv.Value;
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
                    labelItem.Text = "Table";
                    textItemName.Visible = false;
                    comboBoxEntity.Visible = true;
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
                }
                else if (_itemType == ItemType.Workflow)
                {
                    link.Text = @"Add new Workflow Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template";
                    buttonConnection.Enabled = false;
                    labelItem.Text = "Class";
                    textItemName.Enabled = true;
                    textItemName.Focus();
                    buttonOk.Enabled = true;
                    progressBar.Value = 100;
                }
                else if (_itemType == ItemType.DataProvider)
                {
                    link.Text = @"Add new Data Provider Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Data-Provider-Item-Template";
                    labelItem.Text = "Data Source";
                    textItemName.Visible = false;
                    comboBoxEntity.Visible = true;
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
                }
                else if (_itemType == ItemType.JsWebApi)
                {
                    link.Text = @"Add New Js WebApi Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-WebApi-Item-Template";
                    textItemName.Visible = false;
                    comboBoxEntity.Visible = true;
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
                    //checkBoxDebug.Visible = true;
                }
                else if (_itemType == ItemType.JsForm2)
                {
                    link.Text = @"Add New Js Form Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Form-Item-Template";
                    textItemName.Visible = false;
                    comboBoxEntity.Visible = true;
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
                    //checkBoxDebug.Visible = true;
                }
                else if (_itemType == ItemType.ResourceString)
                {
                    link.Text = @"Add New Resource String";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Resource-String-Item-Template";
                    textItemName.Visible = false;
                    comboBoxEntity.Visible = true;
                    comboBoxEntity.DisplayMember = "Name";
                    comboBoxEntity.ValueMember = "Value";
                    comboBoxEntity.DropDownStyle = ComboBoxStyle.DropDownList;
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
                    var list = Utility.GetAllClassesOfPluginAndWorkflow(DTE);
                    var list2 = Utility.GetAllTestClasses(DTE);
                    var list3 = list.Where(x => !list2.Contains(x.Name)).ToList<NameValue>();
                    comboBoxEntity.DisplayMember = "Name";
                    comboBoxEntity.ValueMember = "Value";
                    comboBoxEntity.DataSource = list3;
                    buttonOk.Enabled = comboBoxEntity.Items.Count > 0;
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
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
        }

        private void LoadComboBoxEntity(List<XrmEntity> entities)
        {
            comboBoxEntity.DataSource = entities;
            comboBoxEntity.ValueMember = "LogicalName";
            comboBoxEntity.DisplayMember = "Name";
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
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
            progressBar.Visible = true;
            if(ItemType == ItemType.LateBound)
            {
                EnabledAll(false);
                progressBar.Style = ProgressBarStyle.Marquee;
                var crmName = ComboBoxCrmName;
                var entityName = ComboBoxEntityName;
                var nameSpace = NameSpace;
                var sharedNameSpace = SharedNameSpace;
                Task task1 = Task.Factory.StartNew(() =>
                {
                    GeneratedLateBoundClass = XrmHelper.GeneratedLateBoundClass(CrmServiceClient, crmName, entityName, nameSpace, sharedNameSpace);
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
                //var isDebugForm = false;
                var jsForm = new List<string>();
                var jsFormVersion = string.Empty;
                //if (File.Exists(file))
                //{
                //    var lines = File.ReadAllLines(file);
                //    var json = lines[lines.Length - 1];
                //    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                //    isDebugForm = comment.IsDebugForm;
                //    jsForm = comment.JsForm;
                //    jsFormVersion = comment.JsFormVersion;
                //}
                var jsGlobalNameSpace = Utility.GetJsGlobalNameSpace(DTE);
                Task task2 = Task.Factory.StartNew(() =>
                {
                    //var jsWebApi = new JsWebApi(CrmServiceClient, jsGlobalNameSpace, entityName, isDebug, jsForm, isDebugForm, jsFormVersion);
                    //jsWebApi.GeneratorCode();
                    var dtsFile = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.d.ts";
                    var newCode = string.Empty;
                    var newDTS = string.Empty;
                    var entityMetadata = XrmHelper.GetEntityMetadata(CrmServiceClient, entityName.ToLower());
                    var comment = XrmHelper.GetComment(CrmServiceClient, entityMetadata.LogicalName, dtsFile);
                    newCode = JsWebApi2.GetCode(CrmServiceClient, entityMetadata, jsGlobalNameSpace, comment, out newDTS);
                    GeneratedJsWebApiCode = newCode;
                    GeneratedJsTypeScriptDeclaration = newDTS;
                });
                while (!task2.IsCompleted)
                {
                    Application.DoEvents();
                }
            }
            else if (ItemType == ItemType.JsForm2)
            {
                EnabledAll(false);
                progressBar.Style = ProgressBarStyle.Marquee;
                var entityName = ComboBoxEntityName;
                var isDebug = checkBoxDebug.Checked;
                var file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.d.ts";
                //var isDebugForm = false;
                var jsForm = new List<string>();
                var jsFormVersion = string.Empty;
                //if (File.Exists(file))
                //{
                //    var lines = File.ReadAllLines(file);
                //    var json = lines[lines.Length - 1];
                //    var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                //    isDebugForm = comment.IsDebugForm;
                //    jsForm = comment.JsForm;
                //    jsFormVersion = comment.JsFormVersion;
                //}
                var jsGlobalNameSpace = Utility.GetJsGlobalNameSpace(DTE);
                Task task2 = Task.Factory.StartNew(() =>
                {
                    ////var jsWebApi = new JsWebApi(CrmServiceClient, jsGlobalNameSpace, entityName, isDebug, jsForm, isDebugForm, jsFormVersion);
                    ////jsWebApi.GeneratorCode();
                    //var dtsFile = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.d.ts";
                    //var newCode = string.Empty;
                    //var newDTS = string.Empty;
                    //var entityMetadata = XrmHelper.GetEntityMetadata(CrmServiceClient, entityName.ToLower());
                    //var comment = XrmHelper.GetComment(CrmServiceClient, entityMetadata.LogicalName, dtsFile);
                    //newCode = JsWebApi2.GetCode(CrmServiceClient, entityMetadata, jsGlobalNameSpace, comment, out newDTS);
                    //GeneratedJsWebApiCode = newCode;
                    //GeneratedJsWebApiCodeTypeScriptDeclaration = newDTS;

                    var dtsFile = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entityName}.d.ts";
                    var entityMetadata = XrmHelper.GetEntityMetadata(CrmServiceClient, entityName.ToLower());
                    var comment = XrmHelper.GetComment(CrmServiceClient, entityMetadata.LogicalName, dtsFile);
                    var newCode = JsForm3.GetCode(CrmServiceClient, entityMetadata, jsGlobalNameSpace, comment, out var newDTS);

                    GeneratedJsForm = string.Empty;
                    GeneratedJsFormCode = newCode;
                    GeneratedJsTypeScriptDeclaration = newDTS;

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
                var loginForm = new FormLogin();
                loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                loginForm.ShowDialog();
                if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                {
                    CrmServiceClient = loginForm.CrmConnectionMgr.CrmSvc;
                    CrmConnection = new CrmConnection { Name = string.Empty, Password = string.Empty, Type = string.Empty, Url = string.Empty, UserName = string.Empty };
                }
                else
                    throw new WizardCancelledException();
            }
            else
            {
                CrmConnection = form.CrmConnection;
                CrmServiceClient = form.CrmServiceClient;
            }
            buttonOk.Enabled = true;
            CheckFormByFormType();
            Text = $"Connected: {XrmHelper.ConnectedUrl(CrmServiceClient)}";
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
                        entities1 = XrmHelper.GetAllEntities(CrmServiceClient);
                    });
                    while (!task1.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entities1);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
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
                        entities2 = XrmHelper.GetAllEntities(CrmServiceClient);
                    });
                    while (!task2.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entities2);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    checkBoxDebug.Enabled = comboBoxEntity.Enabled;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ItemType.JsForm2:
                    EnabledAll(false);
                    List<XrmEntity> entities22 = null;
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task task22 = Task.Factory.StartNew(() =>
                    {
                        entities22 = XrmHelper.GetAllEntities(CrmServiceClient);
                    });
                    while (!task22.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entities22);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
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
                        entities3 = XrmHelper.GetAllEntities(CrmServiceClient);
                    });
                    while (!task3.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    LoadComboBoxEntity(entities3);
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
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
                        languages = XrmHelper.GetProvisionedLanguages(CrmServiceClient);
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
                    buttonConnection.Enabled = false;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                case ItemType.DataProvider:
                    EnabledAll(false);
                    List<string> dataSource = new List<string>();
                    progressBar.Style = ProgressBarStyle.Marquee;
                    Task task5 = Task.Factory.StartNew(() =>
                    {
                        dataSource = XrmHelper.GetAllDataSource(CrmServiceClient);
                    });
                    while (!task5.IsCompleted)
                    {
                        Application.DoEvents();
                    }
                    comboBoxEntity.DataSource = dataSource;
                    comboBoxEntity.Enabled = comboBoxEntity.Items.Count > 0;
                    comboBoxWebResource.Enabled = comboBoxEntity.Enabled;
                    comboBoxEntity.SelectedIndex = 0;
                    buttonOk.Enabled = comboBoxEntity.Enabled;
                    buttonCancel.Enabled = true;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    break;
                default:
                    break;
            }
            progressBar.Visible = false;
        }

        private void EnabledAll(bool value)
        {
            buttonConnection.Enabled = value;
            buttonOk.Enabled = value;
            buttonCancel.Enabled = value;
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
                    //LoadDebugCheckBox();
                    break;
                case ItemType.JsForm2:
                    labelItemName.Text = $"{Utility.SafeName(text)}.form.js";
                    //LoadDebugCheckBox();
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
            //var entity = comboBoxEntity.SelectedItem as XrmEntity;
            //var file1 = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entity.Name}.intellisense.js";
            //var file2 = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{entity.Name}.d.ts";
            //var file = File.Exists(file2) ? file2 : file1;
            //if (File.Exists(file))
            //{
            //    try
            //    {
            //        var lines = File.ReadAllLines(file);
            //        var json = lines[lines.Length - 1];
            //        var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
            //        checkBoxDebug.Checked = comment.IsDebugWebApi;
            //    }
            //    catch
            //    {
            //    }
            //}
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
