using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.Xrm.Sdk;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormPlugin : Form
    {
        public FormPlugin(ItemType itemType, DTE dte)
        {
            InitializeComponent();

            progressBar.Visible = false;

            DTE = dte;
            ItemType = itemType;
        }
        private bool IsLoadComboBoxEntity { get; set; } = true;
        public IOrganizationService CrmService { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public DTE DTE { get; }
        private ItemType _itemType;
        public ItemType ItemType
        {
            get => _itemType;
            set
            {
                _itemType = value;
                if (_itemType == ItemType.Plugin)
                {
                    link.Text = "Add New Plugin Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Plugin-Item-Template";
                }
                else if (_itemType == ItemType.CustomAction)
                {
                    link.Text = "Add New Custom Action Class";
                    link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Action-Item-Template";
                    comboBoxStage.Text = "PostOperation";
                    comboBoxStage.Enabled = false;
                    comboBoxExecution.Text = "Synchronous";
                    comboBoxExecution.Enabled = false;
                    comboBoxEntity.Text = "";
                    comboBoxEntity.Enabled = false;
                }
            }
        }
        public string Class
        {
            get
            {
                return comboBoxEntity.Text;
            }
        }

        private void buttonCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
        }

        private void buttonConnection_Click(object sender, EventArgs e)
        {
            var form = new FormConnection2(DTE);
            if (form.ShowDialog() == DialogResult.Cancel) return;

            CrmConnection = form.CrmConnection;
            CrmService = form.CrmService;

            buttonOk.Enabled = true;
            CheckFormByFormType();
        }

        private void CheckFormByFormType()
        {
            progressBar.Visible = true;
            switch (ItemType)
            {
                case ItemType.Plugin:
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
                    EnabledAll(true);
                    LoadComboBoxEntity(entities1);
                    var projects = (object[])DTE.ActiveSolutionProjects;
                    var project = (Project)projects[0];
                    var parts = project.Name.Split(".".ToCharArray());
                    foreach(var part in parts)
                    {
                        if(entities1.Any(x => x.Name.ToLower() == part.ToLower()))
                        {
                            IsLoadComboBoxEntity = false;
                            comboBoxEntity.Text = part;
                            comboBoxEntity_SelectedIndexChanged(null, null);
                            break;
                        }
                    }
                    if (IsLoadComboBoxEntity)
                    {
                        IsLoadComboBoxEntity = false;
                        comboBoxEntity.Text = comboBoxEntity.Items[0].ToString();
                        comboBoxEntity_SelectedIndexChanged(null, null);
                    }
                    comboBoxStage.Text = "PreValidation";
                    comboBoxExecution.Text = "Synchronous";
                    break;
                case ItemType.CustomAction:
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
                    entities2.Insert(0, new XrmEntity { Name = "None", LogicalName = "none", EntityTypeCode = -1, HasImage = false, IsCustomEntity = false  });
                    comboBoxEntity.Enabled = true;
                    comboBoxMessage.Enabled = true;
                    textPluginClass.Enabled = true;
                    buttonConnection.Enabled = true;
                    buttonCancel.Enabled = true;
                    buttonOk.Enabled = comboBoxMessage.Items.Count > 0;
                    LoadComboBoxEntity(entities2);
                    if (IsLoadComboBoxEntity)
                    {
                        IsLoadComboBoxEntity = false;
                        comboBoxEntity.SelectedText = "None";
                        comboBoxEntity_SelectedIndexChanged(null, null);
                    }
                    break;
            }
            progressBar.Visible = false;

        }
        private void LoadComboBoxEntity(List<XrmEntity> entities)
        {
            comboBoxEntity.DataSource = entities;
            comboBoxEntity.ValueMember = "LogicalName";
            comboBoxEntity.DisplayMember = "Name";
        }

        private void LoadComboBoxMessage(List<XrmEntity> entities)
        {
            comboBoxMessage.DataSource = entities;
            comboBoxMessage.ValueMember = "LogicalName";
            comboBoxMessage.DisplayMember = "Name";
        }

        private void EnabledAll(bool value)
        {
            buttonConnection.Enabled = value;
            buttonOk.Enabled = value;
            buttonCancel.Enabled = value;
            comboBoxEntity.Enabled = value;
            comboBoxMessage.Enabled = value;
            comboBoxStage.Enabled = value;
            comboBoxExecution.Enabled = value;
            textPluginClass.Enabled = value;
        }

        private void link_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            link.LinkVisited = true;
            System.Diagnostics.Process.Start((string)link.Tag);
        }

        private void comboBoxEntity_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (IsLoadComboBoxEntity) return;
            var entity = comboBoxEntity.SelectedItem as XrmEntity;
            List<string> list = new List<string>();
            progressBar.Visible = true;
            progressBar.Style = ProgressBarStyle.Marquee;
            if (ItemType == ItemType.Plugin)
            {
                Task task1 = Task.Factory.StartNew(() =>
                {
                    list = XrmHelper.GetSdkMessages(CrmService, entity.LogicalName);
                });
                while (!task1.IsCompleted)
                {
                    Application.DoEvents();
                }
            }
            else if (ItemType == ItemType.CustomAction)
            {
                Task task2 = Task.Factory.StartNew(() =>
                {
                    if (entity.LogicalName == "none")
                        list = XrmHelper.GetAllCustomActions(CrmService);
                    else
                        list = XrmHelper.GetSdkMessages(CrmService, entity.LogicalName);
                });
                while (!task2.IsCompleted)
                {
                    Application.DoEvents();
                }
            }
            comboBoxMessage.DataSource = list;
            buttonOk.Enabled = comboBoxMessage.Items.Count > 0;
            progressBar.Style = ProgressBarStyle.Blocks;
            progressBar.Value = 100;
            UpdateItemName();
            progressBar.Visible = false;
        }

        private void UpdateItemName()
        {
            var stage = comboBoxStage.Text == "PreValidation" ? "PreValidation" : (comboBoxStage.Text == "PreOperation" ? "Pre" : "Post");
            var entityName = comboBoxEntity.Text;
            var message = comboBoxMessage.Text;
            var execution = comboBoxExecution.Text;
            textPluginClass.Text = $"{stage}{entityName}{message}{execution}";
        }

        private void comboBoxStage_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (ItemType == ItemType.CustomAction)
            {
                if (comboBoxStage.Text == @"PreValidation" || comboBoxStage.Text == @"PreOperation")
                {
                    comboBoxExecution.Text = @"Synchronous";
                    comboBoxExecution.Enabled = false;
                }
                else
                {
                    comboBoxExecution.Text = @"Synchronous";
                    comboBoxExecution.Enabled = true;
                }
            }
            else
            {
                if (comboBoxStage.Text == @"PreValidation" || comboBoxStage.Text == @"PreOperation")
                {
                    comboBoxExecution.Text = @"Synchronous";
                    comboBoxExecution.Enabled = false;
                }
                else
                {
                    comboBoxExecution.Enabled = true;
                }
            }
            UpdateItemName();
        }

        private void comboBoxMessage_SelectedIndexChanged(object sender, EventArgs e)
        {
            UpdateItemName();
        }

        private void comboBoxExecution_SelectedIndexChanged(object sender, EventArgs e)
        {
            UpdateItemName();
        }

        private bool IsOk()
        {
            return true;
        }

        private void buttonOk_Click(object sender, EventArgs e)
        {
            if (!IsOk()) return;
            DialogResult = DialogResult.OK;
            Close();
        }

        public string PluginClass
        {
            get
            {
                return textPluginClass.Text;
            }
        }

        public string PluginMessage => comboBoxMessage.Text;
        public string PluginStage => comboBoxStage.Text;
        public string PluginExecution => comboBoxExecution.Text;
        private List<ProjectItem> projectItems = new List<ProjectItem>();
        private string _pluginOrder = string.Empty;
        public string PluginOrder
        {
            get
            {
                if (_pluginOrder.Length > 0) return _pluginOrder;
                var Projects = (object[])DTE.ActiveSolutionProjects;
                var project = (Project)Projects[0];
                projectItems = new List<ProjectItem>();
                var items = project.ProjectItems.GetEnumerator();
                while (items.MoveNext())
                {
                    var item = (ProjectItem)items.Current;
                    projectItems.Add(GetFiles(item));
                }
                var pluginClass = PluginClass;
                var @class = projectItems
                    .Where(x => x.Name.StartsWith(pluginClass))
                    .OrderByDescending(x => x.Name)
                    .FirstOrDefault();
                if (@class == null)
                    _pluginOrder = "1";
                else
                {
                    var temp = @class.Name.Substring(PluginClass.Length);
                    if (temp == ".cs") temp = "1.cs";
                    temp = temp.Substring(0, temp.Length - ".cs".Length);;
                    if (int.TryParse(temp, out var @out))
                        _pluginOrder = (@out + 1).ToString();
                    else
                        _pluginOrder = "1";
                }
                return _pluginOrder;
            }
        }

        private ProjectItem GetFiles(ProjectItem item)
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

        public string PluginOrder2
        {
            get
            {
                var pluginOrder = PluginOrder;
                if (pluginOrder == "1") return string.Empty;
                return pluginOrder;
            }
        }


        public string PluginLogicalName
        {
            get
            {
                var entity = comboBoxEntity.SelectedItem as XrmEntity;
                return entity.LogicalName;
            }
        }

        public string PluginComment
        {
            get
            {
                var entity = comboBoxEntity.SelectedItem as XrmEntity;
                var message = comboBoxMessage.Text;
                var list = XrmHelper.GetPluginInputOutputParameters(CrmService, entity.Name, message);
                if (list.Count == 0) return string.Empty;
                var max = list.OrderByDescending(s => s.Name.Length).First().Name.Length + 4;
                var inputParameters = string.Empty;
                foreach (var item in list.Where(where => where.ParameterType == ParameterType.Input))
                {
                    var @string = new string(' ', max - item.Name.Length);
                    inputParameters +=
                        $"\t\t\t{item.Name}{@string}{item.Type}{(!item.Require ? " - require" : string.Empty)}\r\n";
                }

                var outputParameters = string.Empty;
                foreach (var item in list.Where(where => where.ParameterType == ParameterType.Output))
                {
                    var @string = new string(' ', max - item.Name.Length);
                    outputParameters +=
                        $"\t\t\t{item.Name}{@string}{item.Type}{(!item.Require ? " - require" : string.Empty)}\r\n";
                }
                var code = $@"      /*
        InputParameters:
{inputParameters}         OutputParameters:
{outputParameters}      */";
                return code;
            }
        }
    }
}
