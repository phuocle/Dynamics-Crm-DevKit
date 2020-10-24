using System;
using System.Collections.Generic;
using System.Net;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormConnection2 : Form
    {
        private DTE DTE { get; }
        private DevKitCrmConfig Config = null;
        public IOrganizationService CrmService { get; private set; } = null;
        public CrmConnection CrmConnection { get; private set; }
        public string Check
        {
            get
            {
                if (chkCheck0.Checked) return "0";
                return "1";
            }
        }

        public FormConnection2(DTE dte)
        {
            InitializeComponent();

            cboType.SelectedIndex = 3;

            DTE = dte;
            LoadConnections();
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }

        private bool IsValid()
        {
            if (txtName.Text.Length == 0)
            {
                MessageBox.Show($"Please enter Crm Connection Name", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtName.Focus();
                return false;
            }
            if (txtUrl.Text.Length == 0)
            {
                MessageBox.Show($"Please enter Url", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtUrl.Focus();
                return false;
            }
            if (txtUserName.Text.Length == 0)
            {
                MessageBox.Show($"Please enter {labelUserName.Text}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtUserName.Focus();
                return false;
            }
            if (txtPassword.Text.Length == 0)
            {
                MessageBox.Show($"Please enter {labelPassword.Text}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtPassword.Focus();
                return false;
            }
            return true;
        }

        private void btnConnect_Click(object sender, EventArgs e)
        {
            if (!IsValid()) return;
            Cursor = Cursors.WaitCursor;
            EnabledControl(false);

            var connectionString = XrmHelper.BuildConnectionString(cboType.Text, txtUrl.Text, txtUserName.Text, txtPassword.Text);
            if (CanConnect(connectionString))
            {
                SaveConnection();
                ClearControl();
                LoadConnections();
            }
            else
            {
                MessageBox.Show(@"Something wrong with your connection. Please try it again", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            EnabledControl(true);
            Cursor = Cursors.Default;
        }

        private void LoadConnections()
        {
            Config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            cboConnection.DataSource = Config.CrmConnections;
            cboConnection.Text = Config.DefaultCrmConnection;
            btnOk.Enabled = cboConnection.Items.Count > 0;
        }

        private void ClearControl()
        {
            txtName.Text = "";
            txtUrl.Text = "";
            txtUserName.Text = "";
            txtPassword.Text = "";
        }

        private void SaveConnection()
        {
            var crmConnection = new CrmConnection
            {
                Name = txtName.Text,
                Url = txtUrl.Text,
                UserName = txtUserName.Text,
                Password = txtPassword.Text,
                Type = cboType.Text,
            };
            if (crmConnection.Type != "ClientSecret")
                crmConnection.Password = EncryptDecrypt.EncryptString(crmConnection.Password);
            if (Config.CrmConnections == null)
                Config.CrmConnections = new List<CrmConnection>();
            Config.CrmConnections.Add(crmConnection);
            Config.DefaultCrmConnection = txtName.Text;
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, Config);
        }

        private bool CanConnect(string connectionString)
        {
            try
            {
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                var crmServiceClient = new CrmServiceClient(connectionString);
                CrmService = XrmHelper.GetIOrganizationService(crmServiceClient);
                CrmService.Execute(new WhoAmIRequest());
                return true;
            }
            catch
            {
                return false;
            }
        }

        private bool CanConnect(CrmConnection crmConnection)
        {
            try
            {
                var connectionString = XrmHelper.BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, crmConnection.Password);
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                var crmServiceClient = new CrmServiceClient(connectionString);
                CrmService = XrmHelper.GetIOrganizationService(crmServiceClient);
                CrmService.Execute(new WhoAmIRequest());
                return true;
            }
            catch(Exception e)
            {
                return false;
            }
        }

        private void EnabledControl(bool enabled)
        {
            cboConnection.Enabled = enabled;
            txtName.Enabled = enabled;
            cboType.Enabled = enabled;
            txtUrl.Enabled = enabled;
            txtUserName.Enabled = enabled;
            txtPassword.Enabled = enabled;
            btnOk.Enabled = enabled;
            btnCancel.Enabled = enabled;
            btnConnect.Enabled = enabled;
        }

        private void btnOk_Click(object sender, EventArgs e)
        {
            if (Check == "1")
            {
                DialogResult = DialogResult.OK;
                Close();
            }
            else
            {
                Cursor = Cursors.WaitCursor;
                EnabledControl(false);

                CrmConnection = (CrmConnection)cboConnection.SelectedValue;
                var password = string.Empty;
                if (CrmConnection.Type != "ClientSecret")
                {
                    try
                    {
                        password = EncryptDecrypt.DecryptString(CrmConnection.Password);
                    }
                    catch
                    {
                        password = CrmConnection.Password;
                    }
                    CrmConnection.Password = password;
                }
                if (CanConnect(CrmConnection))
                {
                    if (CrmConnection.Type != "ClientSecret")
                    {
                        CrmConnection.Password = EncryptDecrypt.EncryptString(password);
                    }
                    Config.DefaultCrmConnection = cboConnection.Text;
                    DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, Config);
                    DialogResult = DialogResult.OK;
                    Cursor = Cursors.Default;
                    Close();
                }
                else
                {
                    Cursor = Cursors.Default;
                    MessageBox.Show(@"Something wrong with your connection. Please try it again", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
                EnabledControl(true);
            }
        }

        private void chkCheck0_CheckedChanged(object sender, EventArgs e)
        {
            chkCheck1.Checked = !chkCheck0.Checked;
            cboConnection.Enabled = chkCheck0.Checked;
            groupBoxConnection.Enabled = chkCheck0.Checked;
        }

        private void chkCheck1_CheckedChanged(object sender, EventArgs e)
        {
            chkCheck0.Checked = !chkCheck1.Checked;
        }
    }
}
