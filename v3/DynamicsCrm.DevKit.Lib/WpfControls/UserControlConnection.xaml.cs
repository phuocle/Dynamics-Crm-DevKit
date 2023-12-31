using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.ComponentModel;
using System.Windows;
using System.Windows.Controls;

namespace DynamicsCrm.DevKit.Lib.WpfControls
{
    public partial class UserControlConnection : UserControl, INotifyPropertyChanged
    {
        public UserControlConnection()
        {
            InitializeComponent();
            IsConnected = false;
        }

        private bool _isConnected = false;
        public bool IsConnected
        {
            get => _isConnected;
            set
            {
                _isConnected = value;
                labelInformation.Content = _isConnected ? $"Connected: {XrmHelper.ConnectedUrl(CrmServiceClient)}" : $"Please connect to your Dataverse";
                if (_isConnected) {
                    var sender = new object();
                    Connected(sender, EventArgs.Empty);
                }
                NotifyPropertyChanged(nameof(IsConnected));
            }
        }

        public bool IsOOBConnection { get; set; }
        public CrmServiceClient CrmServiceClient { get; set; }
        public string DataverseConnectionString { get; set; }
        public DynamicsCrm.DevKit.Shared.Models.CrmConnection CrmConnection {get;set; }

        public event EventHandler Connected;

        public event PropertyChangedEventHandler PropertyChanged;
        protected void NotifyPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        private void ButtonConnection_Click(object sender, RoutedEventArgs e)
        {
            var formConnection = new FormConnection();
            var result = formConnection.ShowModal() ?? false;
            if (result) {
                if (formConnection.IsOOBConnection)
                {
                    var loginForm = new FormLogin(false);
                    loginForm.ConnectionToCrmCompleted += LoginForm_ConnectionToCrmCompleted;
                    loginForm.ShowDialog();
                    if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                    {
                        CrmServiceClient = loginForm.CrmConnectionMgr.CrmSvc;
                        IsOOBConnection = true;
                        DataverseConnectionString = string.Empty;
                        IsConnected = true;
                        CrmConnection = null;
                    }
                }
                else
                {
                    CrmServiceClient = formConnection.CrmServiceClient;
                    IsOOBConnection = false;
                    DataverseConnectionString = formConnection.DataverseConnectionString;
                    IsConnected = CrmServiceClient != null;
                    CrmConnection = formConnection.CrmConnection;
                }
            }
            else
                IsConnected = false;
        }

        private void LoginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }
    }
}
