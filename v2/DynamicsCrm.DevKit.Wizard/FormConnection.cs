using System;
using System.Collections.Generic;
using System.ServiceModel.Description;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Client;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.Wizard
{
    public partial class FormConnection : Form
    {
        public FormConnection(DTE dte)
        {
            InitializeComponent();

            Text += Const.Version;

            DTE = dte;
            LoadConnections();
        }

        private DTE DTE { get; }

        public OrganizationServiceProxy CrmService { get; private set; } = null;

        public CrmConnection CrmConnection { get; private set; }
        private DevKitCrmConfig Config = null;

        private void LoadConnections()
        {
            Config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            cboConnection.DataSource = Config.CrmConnections;
            cboConnection.Text = Config.DefaultCrmConnection;
            btnOk.Enabled = cboConnection.Items.Count > 0;
        }

        private void btnConnect_Click(object sender, EventArgs e)
        {
            if (!IsValid()) return;
            btnConnect.Enabled = false;
            Cursor = Cursors.WaitCursor;
            bool connected;
            try
            {
                var uri = new Uri(txtUrl.Text);
                var clientCredentials = new ClientCredentials();
                clientCredentials.UserName.UserName = txtUserName.Text;
                clientCredentials.UserName.Password = txtPassword.Text;
                var crmService = new OrganizationServiceProxy(uri, null, clientCredentials, null);
                crmService.Execute(new WhoAmIRequest());
                connected = true;
            }
            catch
            {
                connected = false;
            }
            if (!connected)
            {
                MessageBox.Show(@"Something wrong with your connection. Please try it again", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            else
            {
                var crmConnection = new CrmConnection
                {
                    Name = txtName.Text,
                    Url = txtUrl.Text,
                    UserName = txtUserName.Text,
                    Password = EncryptDecrypt.EncryptString(txtPassword.Text)
                };
                if (Config.CrmConnections == null)
                    Config.CrmConnections = new List<CrmConnection>();
                Config.CrmConnections.Add(crmConnection);
                Config.DefaultCrmConnection = txtName.Text;
                DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, Config);
                txtName.Text = "";
                txtUrl.Text = @"http://???/XRMServices/2011/Organization.svc";
                txtUserName.Text = "";
                txtPassword.Text = "";
                LoadConnections();
            }
            Cursor = Cursors.Default;
            btnConnect.Enabled = true;
        }

        private bool IsValid()
        {
            if (txtName.Visible && txtName.Enabled && txtName.Text.Length == 0)
            {
                MessageBox.Show(@"Please enter Crm Connection Name", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtName.Focus();
                return false;
            }
            if (txtUrl.Visible && txtUrl.Enabled && txtUrl.Text.Length == 0)
            {
                MessageBox.Show(@"Please enter Url", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtUrl.Focus();
                return false;
            }
            if (txtUserName.Visible && txtUserName.Enabled && txtUserName.Text.Length == 0)
            {
                MessageBox.Show(@"Please enter User Name", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtUserName.Focus();
                return false;
            }
            if (txtPassword.Visible && txtPassword.Enabled && txtPassword.Text.Length == 0)
            {
                MessageBox.Show(@"Please enter Password", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtPassword.Focus();
                return false;
            }
            return true;
        }

        private void btnOk_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.OK;
            btnOk.Enabled = false;
            btnCancel.Enabled = false;
            cboConnection.Enabled = false;
            txtName.Enabled = false;
            txtUrl.Enabled = false;
            txtUserName.Enabled = false;
            txtPassword.Enabled = false;
            btnConnect.Enabled = false;
            CrmConnection = (CrmConnection) cboConnection.SelectedValue;
            var uri = new Uri(CrmConnection.Url);
            var clientCredentials = new ClientCredentials();
            clientCredentials.UserName.UserName = CrmConnection.UserName;
            var password = string.Empty;
            try
            {
                password = EncryptDecrypt.DecryptString(CrmConnection.Password);
            }
            catch
            {
                password = CrmConnection.Password;
                CrmConnection.Password = EncryptDecrypt.EncryptString(password);
                DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, CrmConnection);
            }
            clientCredentials.UserName.Password = EncryptDecrypt.DecryptString(CrmConnection.Password);
            try
            {
                CrmService = new OrganizationServiceProxy(uri, null, clientCredentials, null);
            }
            catch
            {
                MessageBox.Show(@"Something wrong with your connection. Please try it again", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            Config.DefaultCrmConnection = cboConnection.Text;
            DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, Config);
            Close();
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }
    }
}
