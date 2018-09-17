using System;
using System.Collections.Generic;
using System.ServiceModel.Description;
using System.Windows.Forms;
using EnvDTE;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Client;
using PL.DynamicsCrm.DevKit.Shared;
using PL.DynamicsCrm.DevKit.Shared.Xrm;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public partial class FormConnection : Form
    {
        public FormConnection(DTE dte)
        {
            InitializeComponent();

            Dte = dte;
            LoadConnections();
        }

        private DTE Dte { get; }

        public OrganizationServiceProxy CrmService { get; private set; }

        public CrmConnection CrmConnection { get; private set; }

        private void LoadConnections()
        {
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(Dte);
            cboConnection.DataSource = config.CrmConnections;
            cboConnection.Text = config.DefaultCrmConnection;
            btnOk.Enabled = cboConnection.Items.Count > 0;
        }

        private void btnConnect_Click(object sender, EventArgs e)
        {
            if (!IsValid()) return;
            btnConnect.Enabled = false;
            Cursor = Cursors.WaitCursor;
            var uri = new Uri(txtUrl.Text);
            var clientCredentials = new ClientCredentials();
            clientCredentials.UserName.UserName = txtUserName.Text;
            clientCredentials.UserName.Password = txtPassword.Text;
            CrmService = new OrganizationServiceProxy(uri, null, clientCredentials, null);
            bool connected;
            try
            {
                CrmService.Execute(new WhoAmIRequest());
                connected = true;
            }
            catch
            {
                connected = false;
            }

            if (!connected)
            {
                MessageBox.Show(@"Something wrong with your connection. Please try it again");
                Cursor = Cursors.Default;
                btnConnect.Enabled = true;
                CrmService = null;
            }
            else
            {
                var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(Dte);
                var crmConnection = new CrmConnection
                {
                    Name = txtName.Text,
                    Url = txtUrl.Text,
                    UserName = txtUserName.Text,
                    Password = txtPassword.Text
                };
                if (config.CrmConnections == null)
                    config.CrmConnections = new List<CrmConnection>();
                config.CrmConnections.Add(crmConnection);
                config.DefaultCrmConnection = txtName.Text;
                DevKitCrmConfigHelper.SetDevKitCrmConfig(Dte, config);
                txtName.Text = "";
                txtUrl.Text = @"http://???/XRMServices/2011/Organization.svc";
                txtUserName.Text = "";
                txtPassword.Text = "";
                LoadConnections();
                Cursor = Cursors.Default;
                btnConnect.Enabled = true;
            }
        }

        private bool IsValid()
        {
            if (txtName.Visible && txtName.Enabled && txtName.Text.Length == 0)
            {
                MessageBox.Show(@"Please enter Crm Connection Name");
                txtName.Focus();
                return false;
            }

            if (txtUrl.Visible && txtUrl.Enabled && txtUrl.Text.Length == 0)
            {
                MessageBox.Show(@"Please enter Url");
                txtUrl.Focus();
                return false;
            }

            if (txtUserName.Visible && txtUserName.Enabled && txtUserName.Text.Length == 0)
            {
                MessageBox.Show(@"Please enter User Name");
                txtUserName.Focus();
                return false;
            }

            if (txtPassword.Visible && txtPassword.Enabled && txtPassword.Text.Length == 0)
            {
                MessageBox.Show(@"Please enter Password");
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
            clientCredentials.UserName.Password = CrmConnection.Password;
            CrmService = new OrganizationServiceProxy(uri, null, clientCredentials, null);
            Close();
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            Close();
        }
    }
}