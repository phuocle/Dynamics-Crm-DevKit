﻿//522, 178
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
using Microsoft.Xrm.Sdk;
using DynamicsCrm.DevKit.SdkLogin;
using Microsoft.VisualStudio.TemplateWizard;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormItemForm : Form
    {
        public string GeneratedJsForm { get; set; }
        public string GeneratedJsFormCode { get; set; }
        public string GeneratedJsFormCodeTypeScriptDeclaration { get; set; }
        public string GeneratedJsFormCodeTypeScriptDeclaration2 { get; set; }

        public CrmServiceClient CrmServiceClient { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public string ComboBoxCrmName => comboBoxCrmName.Text;
        public string NameSpace { get; set; }
        public string SharedNameSpace { get; set; }
        public string Class
        {
            get
            {
                return $"{Utility.SafeName(comboBoxEntity.Text)}";
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
                if(_itemType == ItemType.JsForm)
                {
                    link.Text = @"Add New Js Form Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Form-Item-Template";
                }
                else if (_itemType == ItemType.JsForm2)
                {
                    link.Text = @"Add New Js Form Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Form-Item-Template";
                }
            }
        }

        public FormItemForm(ItemType itemType, DTE dte, string nameSpace, string sharedNameSpace)
        {
            InitializeComponent();

            comboBoxCrmName.Visible = false;

            progressBar.Visible = false;

            DTE = dte;
            ItemType = itemType;
            NameSpace = nameSpace;
            SharedNameSpace = sharedNameSpace;
            //LoadComboBoxCrmName();
        }

        //private void LoadComboBoxCrmName()
        //{
        //    var dataSource = Const.DataSourceCrm;
        //    comboBoxCrmName.DataSource = dataSource;
        //    comboBoxCrmName.ValueMember = "Version";
        //    comboBoxCrmName.DisplayMember = "Name";
        //    var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
        //    if (config.DefaultCrmName != null || config.DefaultCrmName != "null")
        //        comboBoxCrmName.Text = config.DefaultCrmName;
        //}

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
            return true;
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            if (!IsOk()) return;
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            //config.DefaultCrmName = comboBoxCrmName.Text;
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
            if (ItemType == ItemType.JsForm)
            {
                EnabledAll(false);
                progressBar.Visible = true;
                progressBar.Style = ProgressBarStyle.Marquee;
                var isDebugForm = checkBoxDebug.Checked;
                var file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{Class}.d.ts";
                var isDebugWebApi = false;
                var jsWebApi = false;
                if (File.Exists(file))
                {
                    try
                    {
                        var lines = File.ReadAllLines(file);
                        var json = lines[lines.Length - 1];
                        var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                        isDebugWebApi = comment.IsDebugWebApi;
                        jsWebApi = comment.JsWebApi;
                    }
                    catch { }
                }
                var jsGlobalNameSpace = Utility.GetJsGlobalNameSpace(DTE);
                var forms = checkListForm.CheckedItems.OfType<string>().ToList();
                var @class = Class;
                Task task2 = Task.Factory.StartNew(() =>
                {
                    var jsForm = new JsForm(CrmServiceClient, jsGlobalNameSpace, @class);
                    jsForm.GeneratorCode(forms, isDebugForm, jsWebApi, isDebugWebApi);
                    GeneratedJsForm = jsForm.Form;
                    GeneratedJsFormCode = jsForm.FormCode;
                    GeneratedJsFormCodeTypeScriptDeclaration = jsForm.FormCodeTypeScriptDeclaration;
                });
                while (!task2.IsCompleted)
                {
                    Application.DoEvents();
                }
            }
            else if (ItemType == ItemType.JsForm2)
            {
                EnabledAll(false);
                progressBar.Visible = true;
                progressBar.Style = ProgressBarStyle.Marquee;
                var isDebugForm = checkBoxDebug.Checked;
                var file = $"{DTE.SelectedItems.Item(1).ProjectItem.FileNames[0]}{Class}.d.ts";
                var isDebugWebApi = false;
                var jsWebApi = false;
                if (File.Exists(file))
                {
                    try
                    {
                        var lines = File.ReadAllLines(file);
                        var json = lines[lines.Length - 1];
                        var comment = SimpleJson.DeserializeObject<CommentTypeScriptDeclaration>(json.Substring("//".Length).Replace("'", "\""));
                        isDebugWebApi = comment.IsDebugWebApi;
                        jsWebApi = comment.JsWebApi;
                    }
                    catch { }
                }
                var jsGlobalNameSpace = Utility.GetJsGlobalNameSpace(DTE);
                var forms = checkListForm.CheckedItems.OfType<string>().ToList();
                var @class = Class;
                Task task2 = Task.Factory.StartNew(() =>
                {
                    var jsForm2 = new JsForm2(CrmServiceClient, jsGlobalNameSpace, @class);
                    jsForm2.GeneratorCode(forms, isDebugForm, jsWebApi, isDebugWebApi);
                    GeneratedJsForm = jsForm2.Form;
                    GeneratedJsFormCode = jsForm2.FormCode;
                    GeneratedJsFormCodeTypeScriptDeclaration2 = jsForm2.FormCodeTypeScriptDeclaration2;
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
            comboBoxCrmName.Enabled = true;
            CheckFormByFormType();
            Text = $"Connected: {XrmHelper.ConnectedUrl(CrmServiceClient)}";
        }

        private void CheckFormByFormType()
        {
            switch (ItemType)
            {
                case ItemType.JsForm:
                case ItemType.JsForm2:
                    List<XrmEntity> entities2 = null;
                    progressBar.Visible = true;
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
                    comboBoxCrmName.Enabled = comboBoxEntity.Enabled;
                    checkBoxDebug.Enabled = comboBoxEntity.Enabled;
                    checkListForm.Enabled = comboBoxEntity.Enabled;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
                    progressBar.Visible = false;
                    break;
            }
        }

        private void EnabledAll(bool value)
        {
            buttonConnection.Enabled = value;
            buttonOk.Enabled = value;
            buttonCancel.Enabled = value;
            comboBoxCrmName.Enabled = value;
            comboBoxEntity.Enabled = value;
            checkBoxDebug.Enabled = value;
            checkListForm.Enabled = value;
        }

        private void link_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            link.LinkVisited = true;
            System.Diagnostics.Process.Start((string)link.Tag);
        }

        private void comboBoxEntity_SelectedIndexChanged(object sender, EventArgs e)
        {
            var entity = comboBoxEntity.SelectedItem as XrmEntity;
            var forms = new List<string>();
            progressBar.Visible = true;
            progressBar.Style = ProgressBarStyle.Marquee;
            if (ItemType == ItemType.JsForm || ItemType == ItemType.JsForm2)
            {
                Task task1 = Task.Factory.StartNew(() =>
                {
                    forms = XrmHelper.GetForms(CrmServiceClient, entity.LogicalName);
                });
                while (!task1.IsCompleted)
                {
                    Application.DoEvents();
                }
            }
            checkListForm.Items.Clear();
            foreach(var form in forms)
            {
                checkListForm.Items.Add(form);
            }
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
                    checkBoxDebug.Checked = comment.IsDebugForm;
                    for (var i = 0; i < checkListForm.Items.Count; i++)
                    {
                        foreach (var form in comment.JsForm)
                        {
                            if (form.ToLower() == checkListForm.Items[i].ToString().ToLower() /*|| checkListForm.Items[i].ToString().ToLower().EndsWith(form.ToLower())*/)
                            {
                                checkListForm.SetItemChecked(i, true);
                            }
                        }
                    }
                    CheckListForm_SelectedIndexChanged(null, null);
                }
                catch
                {
                }
            }
            progressBar.Style = ProgressBarStyle.Blocks;
            progressBar.Value = 100;
            progressBar.Visible = false;
            labelItemName.Text = $"{Utility.SafeName(comboBoxEntity.Text)}.form.js";
        }

        private void CheckListForm_SelectedIndexChanged(object sender, EventArgs e)
        {
            buttonOk.Enabled = checkListForm.CheckedItems.Count > 0;
        }
    }
}
