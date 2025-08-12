using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormConnection : BaseDialogWindow
    {
        private const string ERROR_SELECT_CONNECTION = "Please select a connection or create a new one.";
        private const string ERROR_SELECT_TYPE = "Please select Type";
        private const string ERROR_ENTER_NAME = "Please enter Name";
        private const string ERROR_ENTER_URL = "Please enter Url";
        private const string ERROR_ENTER_USER = "Please enter {0}";
        private const string ERROR_ENTER_PASSWORD = "Please enter {0}";
        private const string ERROR_AD_USERNAME_FORMAT = "For AD authentication, username must be in format 'domain\\username'";
        private const string ERROR_CONNECTION_FAILED = "Failed to connect create ServiceClient. Please check your connection settings.";

        public FormConnection()
        {
            InitializeComponent();
            _ = LoadConnectionsAsync();
        }
        
        public ServiceClient ServiceClient { get; set; }
        public CrmConnection CrmConnection { get; set; }

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            CloseDialog(false);
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = ButtonOK_ClickAsync();
        }

        private async Task ButtonOK_ClickAsync()
        {
            try
            {
                if (comboBoxSavedConnection.SelectedItem is CrmConnection selectedConnection)
                {
                    await SetUIBusyStateAsync(true);                    
                    CrmConnection = selectedConnection;
                    await VsixHelper.SaveDefaultCrmConnectionAsync(CrmConnection.Name);
                    var serviceClient = await Task.Run(() => VsixHelper.CreateServiceClientAsync(selectedConnection));
                    if (serviceClient?.IsReady == true)
                    {
                        ServiceClient = serviceClient;
                        CloseDialog(true);
                        return;
                    }
                    
                    await SetUIBusyStateAsync(false);
                    await VS.MessageBox.ShowErrorAsync(ERROR_CONNECTION_FAILED);
                }
                else
                {
                    await VS.MessageBox.ShowErrorAsync(ERROR_SELECT_CONNECTION);
                }
            }
            catch (Exception ex)
            {
                await SetUIBusyStateAsync(false);
                await VS.MessageBox.ShowErrorAsync($"An error occurred: {ex.Message}");
            }
        }

        private void ButtonCheckConnection_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = ButtonCheckConnection_ClickAsync();
        }

        private async Task ButtonCheckConnection_ClickAsync()
        {
            try
            {
                if (!await IsValidAsync()) return;

                var crmConnection = CreateCrmConnectionFromInput();
                await SetUIBusyStateAsync(true);

                var crmServiceClient = await VsixHelper.CreateServiceClientAsync(crmConnection);
                if (crmServiceClient?.IsReady == true)
                {
                    await SaveConnectionAsync(crmConnection);
                    await LoadConnectionsAsync();
                    await ClearFormDataAsync();
                }
                else
                {
                    await VS.MessageBox.ShowErrorAsync(ERROR_CONNECTION_FAILED);
                }
            }
            catch (Exception ex)
            {
                await VS.MessageBox.ShowErrorAsync($"An error occurred while testing connection: {ex.Message}");
            }
            finally
            {
                await SetUIBusyStateAsync(false);
            }
        }

        private CrmConnection CreateCrmConnectionFromInput()
        {
            return new CrmConnection
            {
                Name = textboxName.Text,
                Password = textboxPassword.Password,
                Type = ((ComboBoxItem)comboBoxType.SelectedItem).Content.ToString(),
                Url = textboxUrl.Text,
                UserName = textboxUser.Text
            };
        }

        private async Task SaveConnectionAsync(CrmConnection crmConnection)
        {
            crmConnection.Password = Helper.EncryptString(crmConnection.Password);
            var devKitConnections = await VsixHelper.GetDevKitConnectionsAsync();
            devKitConnections.DefaultCrmConnection = crmConnection.Name;

            var existingConnection = devKitConnections.CrmConnections.FirstOrDefault(x => x.Name == crmConnection.Name);
            if (existingConnection != null)
            {
                UpdateExistingConnection(existingConnection, crmConnection);
            }
            else
            {
                devKitConnections.CrmConnections.Add(crmConnection);
            }

            await VsixHelper.SaveDevKitConnectionsAsync(devKitConnections);
        }

        private static void UpdateExistingConnection(CrmConnection existing, CrmConnection updated)
        {
            existing.Password = updated.Password;
            existing.Type = updated.Type;
            existing.Url = updated.Url;
            existing.UserName = updated.UserName;
        }

        private async Task ClearFormDataAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            comboBoxType.SelectedIndex = -1;
            textboxName.Text = string.Empty;
            textboxUrl.Text = string.Empty;
            textboxUser.Text = string.Empty;
            textboxPassword.Password = string.Empty;
        }

        private async Task LoadConnectionsAsync()
        {
            try
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var devKitConnections = await VsixHelper.GetDevKitConnectionsAsync();
                
                comboBoxSavedConnection.DisplayMemberPath = "Name";
                comboBoxSavedConnection.ItemsSource = devKitConnections.CrmConnections;
                
                if (!string.IsNullOrEmpty(devKitConnections.DefaultCrmConnection))
                {
                    comboBoxSavedConnection.SelectedItem = devKitConnections.CrmConnections
                        .FirstOrDefault(x => x.Name == devKitConnections.DefaultCrmConnection);
                }
                
                buttonOK.IsEnabled = comboBoxSavedConnection.Items.Count > 0;
            }
            catch (Exception ex)
            {
                await VS.MessageBox.ShowErrorAsync($"Failed to load connections: {ex.Message}");
            }
        }

        private async Task<bool> IsValidAsync()
        {
            var validationRules = new[]
            {
                new { IsValid = comboBoxType.SelectedItem != null, Message = ERROR_SELECT_TYPE, Control = (Control)comboBoxType },
                new { IsValid = !string.IsNullOrEmpty(textboxName.Text), Message = ERROR_ENTER_NAME, Control = (Control)textboxName },
                new { IsValid = !string.IsNullOrEmpty(textboxUrl.Text), Message = ERROR_ENTER_URL, Control = (Control)textboxUrl },
                new { IsValid = !string.IsNullOrEmpty(textboxUser.Text), Message = string.Format(ERROR_ENTER_USER, labelUser.Content), Control = (Control)textboxUser },
                new { IsValid = !string.IsNullOrEmpty(textboxPassword.Password), Message = string.Format(ERROR_ENTER_PASSWORD, labelPassword.Content), Control = (Control)textboxPassword }
            };

            foreach (var rule in validationRules)
            {
                if (!rule.IsValid)
                {
                    await VS.MessageBox.ShowErrorAsync(rule.Message);
                    rule.Control.Focus();
                    return false;
                }
            }

            // Special validation for AD authentication
            var selectedType = ((ComboBoxItem)comboBoxType.SelectedItem).Content?.ToString();
            if (selectedType == "AD" && !textboxUser.Text.Contains("\\"))
            {
                await VS.MessageBox.ShowErrorAsync(ERROR_AD_USERNAME_FORMAT);
                textboxUser.Focus();
                return false;
            }

            return true;
        }

        private async Task SetUIBusyStateAsync(bool isBusy)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            stackPanelForm.IsEnabled = !isBusy;
            progressBar.Visibility = isBusy ? System.Windows.Visibility.Visible : System.Windows.Visibility.Hidden;
        }

        private void CloseDialog(bool result)
        {
            if (IsLoaded && IsVisible)
            {
                DialogResult = result;
            }
            Close();
        }

        private void ComboBoxType_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            if (!(sender is ComboBox comboBox) || comboBox.SelectedItem == null) 
                return;

            var selectedText = ((ComboBoxItem)comboBox.SelectedItem).Content?.ToString();
            if (string.IsNullOrEmpty(selectedText)) 
                return;

            var isClientSecret = selectedText == "ClientSecret";
            labelUser.Content = isClientSecret ? "Client Id" : "User Name";
            labelPassword.Content = isClientSecret ? "Client Secret" : "Password";
        }
    }
}
