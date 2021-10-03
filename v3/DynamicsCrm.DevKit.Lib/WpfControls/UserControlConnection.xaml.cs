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
                NotifyPropertyChanged(nameof(IsConnected));
                if (_isConnected) {
                    var sender = new object();
                    Connected(sender, EventArgs.Empty);
                }
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
            var result = formConnection.ShowModal();
            IsConnected = result ?? false;
        }
    }
}
