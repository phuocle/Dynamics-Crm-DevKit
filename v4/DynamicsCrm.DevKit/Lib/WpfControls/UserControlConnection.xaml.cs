using DynamicsCrm.DevKit.Lib.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
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
        }

        private bool _isConnected = false;
        public bool IsConnected
        {
            get => _isConnected;
            set
            {
                _isConnected = value;
                labelInformation.Content = _isConnected ? $"Connected: {ServiceClient.ConnectedUrl()}" : $"Please connect to your Dataverse";
                if (_isConnected)
                {
                    var sender = new object();
                    Connected(sender, EventArgs.Empty);
                }
                NotifyPropertyChanged(nameof(IsConnected));
            }
        }

        public ServiceClient ServiceClient { get; set; }
        public CrmConnection CrmConnection { get; set; }
        public bool IsUseOOBConnection { get; set; } = true;

        public event EventHandler Connected;

        public event PropertyChangedEventHandler PropertyChanged;
        protected void NotifyPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        private void ButtonConnection_Click(object sender, RoutedEventArgs e)
        {
            var formConnection = new FormConnection();
            var ok = formConnection.ShowModal() ?? false;
            if (ok)
            {                
                ServiceClient = formConnection.ServiceClient;
                CrmConnection = formConnection.CrmConnection;
                IsConnected = ServiceClient != null;                
            }
            else
                IsConnected = false;
        }
    }
}
