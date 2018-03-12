using EnvDTE;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Client;
using PL.DynamicsCrm.DevKit.Shared;
using PL.DynamicsCrm.DevKit.Shared.Xrm;
using System;
using System.Collections.Generic;
using System.ServiceModel.Description;
using System.Windows.Forms;

namespace PL.DynamicsCrm.DevKit.Wizard
{
    public partial class FormConnection : Form
    {
        private DTE DTE { get; set; }
        public FormConnection(DTE dte)
        {
            InitializeComponent();

            DTE = dte;
            LoadConnections();
        }

        private void LoadConnections()
        {
            var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
            cboConnection.DataSource = config.CrmConnections;
            cboConnection.Text = config.DefaultCrmConnection;
            btnOk.Enabled = cboConnection.Items.Count > 0;
        }

        public OrganizationServiceProxy CrmService { get; set; }

        private void btnConnect_Click(object sender, System.EventArgs e)
        {
            if (!IsValid()) return;
            btnConnect.Enabled = false;
            Cursor = Cursors.WaitCursor;
            var uri = new Uri(txtUrl.Text);
            var clientCredentials = new ClientCredentials();
            clientCredentials.UserName.UserName = txtUserName.Text;
            clientCredentials.UserName.Password = txtPassword.Text;
            CrmService = new OrganizationServiceProxy(uri, null, clientCredentials, null);
            var connected = false;
            try
            {
                var who = (WhoAmIResponse)CrmService.Execute(new WhoAmIRequest());
                connected = true;
            }
            catch
            {
                connected = false;
            }
            if (!connected)
            {
                MessageBox.Show("Something wrong with your connection. Please try it again");
                Cursor = Cursors.Default;
                btnConnect.Enabled = true;
                CrmService = null;
            }
            else
            {
                var config = DevKitCrmConfigHelper.GetDevKitCrmConfig(DTE);
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
                DevKitCrmConfigHelper.SetDevKitCrmConfig(DTE, config);
                txtName.Text = "";
                txtUrl.Text = "http://???/XRMServices/2011/Organization.svc";
                txtUserName.Text = "";
                txtPassword.Text = "";
                LoadConnections();
                Cursor = Cursors.Default;
                btnConnect.Enabled = true;
            }
        }

        private bool IsValid()
        {
            if (txtName.Text.Length == 0)
            {
                MessageBox.Show("Please enter Crm Connection Name");
                txtName.Focus();
                return false;
            }
            if (txtUrl.Text.Length == 0)
            {
                MessageBox.Show("Please enter Url");
                txtUrl.Focus();
                return false;
            }
            if (txtUserName.Text.Length == 0)
            {
                MessageBox.Show("Please enter User Name");
                txtUserName.Focus();
                return false;
            }
            if (txtPassword.Text.Length == 0)
            {
                MessageBox.Show("Please enter Password");
                txtPassword.Focus();
                return false;
            }
            return true;
        }

        public CrmConnection CrmConnection { get; set; }

        private void btnOk_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.OK;
            CrmConnection = (CrmConnection)cboConnection.SelectedValue;
            Cursor = Cursors.WaitCursor;
            var uri = new Uri(CrmConnection.Url);
            var clientCredentials = new ClientCredentials();
            clientCredentials.UserName.UserName = CrmConnection.UserName;
            clientCredentials.UserName.Password = CrmConnection.Password;
            CrmService = new OrganizationServiceProxy(uri, null, clientCredentials, null);
            Cursor = Cursors.Default;
            Close();
        }
    }
}
