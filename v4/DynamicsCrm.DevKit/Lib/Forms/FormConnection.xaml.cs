using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Threading;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormConnection : BaseDialogWindow
    {
        public FormConnection()
        {
            InitializeComponent();
            LoadConnections();
        }
        
        public ServiceClient ServiceClient { get; set; }
        public CrmConnection CrmConnection { get; set; }

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (this.IsLoaded && this.IsVisible) DialogResult = false;
            Close();
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = ButtonOK_ClickAsync(sender, e);
        }

        private async Task ButtonOK_ClickAsync(object sender, System.Windows.RoutedEventArgs e)
        {
            if (comboBoxSavedConnection.SelectedItem is CrmConnection selectedConnection)
            {
                stackPanelForm.IsEnabled = false;
                progressBar.Visibility = System.Windows.Visibility.Visible;
                CrmConnection = selectedConnection;
                await VsixHelper.SaveDefaultCrmConnectionAsync(CrmConnection.Name);                
                ServiceClient = await VsixHelper.CreateServiceClientAsync(CrmConnection);                    
                if (ServiceClient != null && ServiceClient.IsReady)
                {
                    if (this.IsLoaded && this.IsVisible) DialogResult = true;
                    Close();
                }
                else
                {
                    stackPanelForm.IsEnabled = true;
                    progressBar.Visibility = System.Windows.Visibility.Hidden;
                }                
            }
            else
            {
                await VS.MessageBox.ShowErrorAsync("Please select a connection or create a new one.");
            }            
        }

        private void ButtonCheckConnection_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = ButtonCheckConnection_ClickAsync(sender, e);
        }

        private async Task ButtonCheckConnection_ClickAsync(object sender, System.Windows.RoutedEventArgs e)
        {
            if (!await IsValidAsync()) return;
            var crmConnection = new CrmConnection
            {
                Name = textboxName.Text,
                Password = textboxPassword.Password,
                Type = ((ComboBoxItem)comboBoxType.SelectedItem).Content.ToString(),
                Url = textboxUrl.Text,
                UserName = textboxUser.Text
            };
            stackPanelForm.IsEnabled = false;
            progressBar.Visibility = System.Windows.Visibility.Visible;
            var crmServiceClient = await VsixHelper.CreateServiceClientAsync(crmConnection);
            if (crmServiceClient != null && crmServiceClient.IsReady)
            {   
                crmConnection.Password = Helper.EncryptString(crmConnection.Password);
                var devKitConnections = await VsixHelper.GetDevKitConnectionsAsync();
                devKitConnections.DefaultCrmConnection = crmConnection.Name;
                if (!devKitConnections.CrmConnections.Any(x => x.Name == crmConnection.Name))
                {
                    devKitConnections.CrmConnections.Add(crmConnection);
                }
                else
                {
                    var existingConnection = devKitConnections.CrmConnections.FirstOrDefault(x => x.Name == crmConnection.Name);
                    if (existingConnection != null)
                    {
                        existingConnection.Password = crmConnection.Password;
                        existingConnection.Type = crmConnection.Type;
                        existingConnection.Url = crmConnection.Url;
                        existingConnection.UserName = crmConnection.UserName;
                    }
                }
                await VsixHelper.SaveDevKitConnectionsAsync(devKitConnections);
                await LoadConnectionsAsync();
                await ClearDataAsync();
            }
            else
            {
                await VS.MessageBox.ShowErrorAsync(@"Something wrong with your connection. Please try it again");
            }

            stackPanelForm.IsEnabled = true;
            progressBar.Visibility = System.Windows.Visibility.Hidden;
        }
        public async Task ClearDataAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            comboBoxType.SelectedIndex = -1;
            textboxName.Text = null;
            textboxUrl.Text = null;
            textboxUser.Text = null;
            textboxPassword.Password = null;
        }
        public void LoadConnections()
        {
            ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                await LoadConnectionsAsync();
            });
        }
        public async Task LoadConnectionsAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            var devKitConnections = await VsixHelper.GetDevKitConnectionsAsync();
            comboBoxSavedConnection.DisplayMemberPath = "Name";
            comboBoxSavedConnection.ItemsSource = devKitConnections.CrmConnections;
            if (devKitConnections.DefaultCrmConnection != null)
            {
                comboBoxSavedConnection.SelectedItem = devKitConnections.CrmConnections.FirstOrDefault(x => x.Name == devKitConnections.DefaultCrmConnection);
                buttonOK.IsEnabled = comboBoxSavedConnection.Items.Count > 0;
            }
        }

        private async Task<bool> IsValidAsync()
        {
            if (comboBoxType.SelectedItem == null)
            {
                await VS.MessageBox.ShowErrorAsync($"Please select Type");
                comboBoxType.Focus();
                return false;
            }
            if (string.IsNullOrEmpty(textboxName.Text))
            {
                await VS.MessageBox.ShowErrorAsync($"Please enter Name");
                textboxName.Focus();
                return false;
            }
            if (string.IsNullOrEmpty(textboxUrl.Text))
            {
                await VS.MessageBox.ShowErrorAsync("Please enter Url");
                textboxUrl.Focus();
                return false;
            }
            if (string.IsNullOrEmpty(textboxUser.Text))
            {
                await VS.MessageBox.ShowErrorAsync($"Please enter {labelUser.Content}");
                textboxUser.Focus();
                return false;
            }
            if (string.IsNullOrEmpty(textboxPassword.Password))
            {
                await VS.MessageBox.ShowErrorAsync($"Please enter {labelPassword.Content}");
                textboxPassword.Focus();
                return false;
            }
            return true;
        }

        private void ComboBoxType_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            var comboBox = (ComboBox)sender;
            if (comboBox?.SelectedItem == null) return;
            var selectedText = ((ComboBoxItem)comboBox.SelectedItem).Content?.ToString();
            if (selectedText == null) return;
            labelUser.Content = selectedText == "ClientSecret" ? "Client Id" : "User Name";
            labelPassword.Content = selectedText == "ClientSecret" ? "Client Secret" : "Password";
        }
    }
}
