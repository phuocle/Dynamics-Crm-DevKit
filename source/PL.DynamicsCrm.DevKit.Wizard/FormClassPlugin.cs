using EnvDTE;
using PL.DynamicsCrm.DevKit.Shared.Xrm;
using System;
using System.Drawing;
using System.Linq;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public partial class FormClassPlugin : Form
    {
        public FormType FormType { get; set; }
        private XrmHelper xrmHelper = null;
        public string LogicalName { get; set; }
        public string EntityName { get; set; }
        public DTE DTE { get; set; }

        public string Message => ddlMessage.Text;
        public string Execution => ddlExecution.Text;
        public string StageString => ddlStage.Text;

        public string Class
        {
            get
            {
                const string tmp = "{0}{1}{2}";
                string stage;
                if (ddlStage.Text == "PreValidation")
                    stage = "PreValidation";
                else if (ddlStage.Text == "PreOperation")
                    stage = "Pre";
                else
                    stage = "Post";
                return string.Format(tmp, stage, EntityName, ddlMessage.Text);
            }
        }

        public FormClassPlugin(DTE dte, FormType formType, string entityName, string logicalName)
        {
            InitializeComponent();

            DTE = dte;
            FormType = formType;
            EntityName = entityName;
            LogicalName = logicalName;

            if (FormType == FormType.CustomActionItem)
            {
                ddlStage.Text = "PostOperation";
                ddlStage.Enabled = false;
                ddlStage.Visible = false;
                label4.Visible = false;
                ddlExecution.Text = "Synchronous";
                ddlExecution.Enabled = false;
                ddlExecution.Visible = false;
                label1.Visible = false;
                Text = "Add New Custom Action Class";
                Size = new Size(503, 164);
            }
        }

        public string PrivateClass
        {
            get
            {
                var list = xrmHelper.GetPluginInputOutputParameters(EntityName, Message);
                if (list.Count == 0) return string.Empty;
                var max = list.OrderByDescending(s => s.Name.Length).First().Name.Length + 4;
                var inputParameters = string.Empty;
                foreach (var item in list.Where(where => where.ParameterType == ParameterType.Input))
                {
                    var @string = new string(' ', max - item.Name.Length);
                    inputParameters += $"\t\t\t{item.Name}{@string}{item.Type}{(!item.Require ? " - require" : string.Empty)}\r\n";
                }
                var outputParameters = string.Empty;
                foreach (var item in list.Where(where => where.ParameterType == ParameterType.Output))
                {
                    var @string = new string(' ', max - item.Name.Length);
                    outputParameters += $"\t\t\t{item.Name}{@string}{item.Type}{(!item.Require ? " - require" : string.Empty)}\r\n";
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
            var form = new FormConnection(DTE);
            if (form.ShowDialog() == DialogResult.OK)
            {
                Cursor = Cursors.WaitCursor;
                xrmHelper = new XrmHelper(form.CrmService);
                if (FormType == FormType.PluginItem)
                {
                    ddlMessage.DataSource = xrmHelper.GetSdkMessages(LogicalName);
                }
                else if (FormType == FormType.CustomActionItem)
                {
                    ddlMessage.DisplayMember = "LogicalName";
                    ddlMessage.ValueMember = "Name";
                    ddlMessage.DataSource = xrmHelper.GetAllCustomActions();
                }
                btnOk.Enabled = ddlMessage.Items.Count > 0;
                Cursor = Cursors.Default;
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
            //PreValidation             PreOperation

            if (ddlStage?.Text?.ToString() == "PreValidation" ||
                ddlStage?.Text?.ToString() == "PreOperation")
            {
                ddlExecution.Text = "Synchronous";
                ddlExecution.Enabled = false;
            }
            else
            {
                ddlExecution.Text = "";
                ddlExecution.Enabled = true;
            }
        }
    }
}
