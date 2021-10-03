using DynamicsCrm.DevKit.Lib.Forms;
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
                labelInformation.Content = _isConnected ? $"Connected: https://......" : $"Please connect to your Dataverse/CDS";
                if (_isConnected) {
                    var sender = new object();
                    Connected(sender, EventArgs.Empty);
                }
                NotifyPropertyChanged(nameof(IsConnected));
            }
        }

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
                    var loginForm = new FormLogin();
                    loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                    loginForm.ShowDialog();
                    if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                    {
                        //CrmServiceClient = loginForm.CrmConnectionMgr.CrmSvc;
                        //CrmConnection = new CrmConnection { Name = string.Empty, Password = string.Empty, Type = string.Empty, Url = string.Empty, UserName = string.Empty };
                        IsConnected = true;
                    }
                }
                else
                {
                    IsConnected = true;//check saved connection string ;
                }                
            }
            else 
                IsConnected = false;            
        }

        private void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }
    }
}
