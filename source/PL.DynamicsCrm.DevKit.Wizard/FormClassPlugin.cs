using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using EnvDTE;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public partial class FormClassPlugin : Form
    {
        private XrmHelper _xrmHelper;

        public FormClassPlugin(DTE dte, FormType formType, string entityName, string logicalName)
        {
            InitializeComponent();

            Dte = dte;

            link.Text = "Add New Plugin Class";
            link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Plugin-Item-Template";

            FormType = formType;
            EntityName = entityName;
            LogicalName = logicalName;
            ddlMessage.Enabled = false;
            ddlStage.Enabled = false;
            ddlExecution.Enabled = false;
            if (FormType == FormType.CustomActionItem)
            {
                link.Text = "Add New Custom Action Class";
                link.Tag = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Action-Item-Template";

                ddlStage.Text = @"PostOperation";
                ddlStage.Enabled = false;
                ddlStage.Visible = false;
                label4.Visible = false;
                ddlExecution.Text = @"Synchronous";
                ddlExecution.Enabled = false;
                ddlExecution.Visible = false;
                label1.Visible = false;
            }
            link.Text = "Github Wiki: " + link.Text;
        }

        public FormType FormType { get; }
        public string LogicalName { get; private set; }
        public string EntityName { get; private set; }
        public DTE Dte { get; set; }

        public string Message => ddlMessage.Text;
        public string Execution => ddlExecution.Text;
        public string StageString => ddlStage.Text;

        public string Class
        {
            get
            {
                const string tmp = "{0}{1}{2}";
                string stage;
                if (ddlStage.Text == @"PreValidation")
                    stage = "PreValidation";
                else if (ddlStage.Text == @"PreOperation")
                    stage = "Pre";
                else
                    stage = "Post";
                return string.Format(tmp, stage, EntityName, ddlMessage.Text);
            }
        }

        public string PrivateClass
        {
            get
            {
                var list = _xrmHelper.GetPluginInputOutputParameters(EntityName, Message);
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

        private void btnCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        private void btnConnection_Click(object sender, EventArgs e)
        {
            var form = new FormConnection(Dte);
            if (form.ShowDialog() == DialogResult.OK)
            {
                progressBar.Visible = true;
                btnConnection.Enabled = false;
                btnCancel.Enabled = false;
                List<string> list = null;
                List<XrmEntity> list2 = null;
                _xrmHelper = new XrmHelper(form.CrmService);
                var failed = false;
                Task task = Task.Factory.StartNew(() =>
                {
                    if (FormType == FormType.PluginItem)
                    {
                        try
                        {
                            list = _xrmHelper.GetSdkMessages(LogicalName);
                        }
                        catch
                        {
                            failed = true;
                        }
                    }
                    else if (FormType == FormType.CustomActionItem)
                    {
                        list2 = _xrmHelper.GetAllCustomActions();
                    }
                });
                while (!task.IsCompleted)
                {
                    Application.DoEvents();
                }
                if (failed)
                {
                    var form2 = new FormProject(FormType.SelectEntity, Dte);
                    form2.LoadSelectEntity(_xrmHelper.GetAllEntities());
                    if (form2.ShowDialog() == DialogResult.OK)
                    {
                        list = _xrmHelper.GetSdkMessages(form2.SelectedEntity.ToLower());
                        EntityName = form2.SelectedEntity;
                        LogicalName = form2.SelectedEntity.ToLower();
                    }
                }
                btnConnection.Enabled = true;
                progressBar.Visible = false;
                if (FormType == FormType.PluginItem)
                {
                    ddlMessage.DataSource = list;
                }
                else if (FormType == FormType.CustomActionItem)
                {
                    ddlMessage.DisplayMember = "LogicalName";
                    ddlMessage.ValueMember = "Name";
                    ddlMessage.DataSource = list2;
                }
                btnOk.Enabled = ddlMessage.Items.Count > 0;
                ddlMessage.Enabled = btnOk.Enabled;
                ddlStage.Enabled = btnOk.Enabled;
                ddlExecution.Enabled = btnOk.Enabled;
                btnCancel.Enabled = true;
                btnOk.Focus();
            }
        }

        private void btnOk_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.OK;
            Close();
        }

        private void ddlMessage_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (FormType == FormType.CustomActionItem)
            {
                EntityName = ddlMessage.SelectedValue.ToString();
                LogicalName = EntityName.ToLower();
            }
        }

        private void ddlStage_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (ddlStage?.Text == @"PreValidation" ||
                ddlStage?.Text == @"PreOperation")
            {
                ddlExecution.Text = @"Synchronous";
                ddlExecution.Enabled = false;
            }
            else
            {
                ddlExecution.Text = "";
                ddlExecution.Enabled = true;
            }
        }

        private void link_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            link.LinkVisited = true;
            System.Diagnostics.Process.Start((string)link.Tag);
        }
    }
}