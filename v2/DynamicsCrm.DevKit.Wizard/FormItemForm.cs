//522, 178
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

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormItemForm : Form
    {
        public string GeneratedJsForm { get; set; }
        public string GeneratedJsFormCode { get; set; }
        public string GeneratedJsFormCodeTypeScriptDeclaration { get; set; }

        public OrganizationServiceProxy CrmService { get; set; }
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
            }
        }

        public FormItemForm(ItemType itemType, DTE dte, string nameSpace, string sharedNameSpace)
        {
            InitializeComponent();

            Text += Const.Version;

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
            return true;
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            if (!IsOk()) return;
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            config.DefaultCrmName = comboBoxCrmName.Text;
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
            if (ItemType == ItemType.JsForm)
            {
                EnabledAll(false);
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
                    var jsForm = new JsForm(CrmService, jsGlobalNameSpace, @class);
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
            DialogResult = DialogResult.OK;
        }

        private void buttonancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }

        private void buttonConnection_Click(object sender, EventArgs e)
        {
            var form = new FormConnection(DTE);
            if (form.ShowDialog() == DialogResult.Cancel) return;

            CrmConnection = form.CrmConnection;
            CrmService = form.CrmService;

            buttonOk.Enabled = true;
            comboBoxCrmName.Enabled = true;
            CheckFormByFormType();
        }

        private void CheckFormByFormType()
        {
            switch (ItemType)
            {
                case ItemType.JsForm:
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
                    checkListForm.Enabled = comboBoxEntity.Enabled;
                    progressBar.Style = ProgressBarStyle.Blocks;
                    progressBar.Value = 100;
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
            progressBar.Style = ProgressBarStyle.Marquee;
            if (ItemType == ItemType.JsForm)
            {
                Task task1 = Task.Factory.StartNew(() =>
                {
                    forms = XrmHelper.GetForms(CrmService, entity.LogicalName);
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
                            if (form == checkListForm.Items[i].ToString())
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
            labelItemName.Text = $"{Utility.SafeName(comboBoxEntity.Text)}.form.js";
        }

        private void CheckListForm_SelectedIndexChanged(object sender, EventArgs e)
        {
            buttonOk.Enabled = checkListForm.CheckedItems.Count > 0;
        }
    }
}
