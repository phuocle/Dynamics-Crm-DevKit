using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormConnection : BaseDialogWindow
    {
        private const string ERROR_SELECT_CONNECTION = "Please select a connection or create a new one.";
        private const string ERROR_SELECT_TYPE = "Please select Type";
        private const string ERROR_ENTER_NAME = "Please enter Name";
        private const string ERROR_ENTER_URL = "Please enter Dynamics 365 URL";
        private const string ERROR_ENTER_CLIENT_ID = "Please enter Client ID";
        private const string ERROR_ENTER_CLIENT_SECRET = "Please enter Client Secret";
        private const string ERROR_CONNECTION_FAILED = "Failed to connect create ServiceClient. Please check your connection settings.";

        public FormConnection()
        {
            InitializeComponent();
            Loaded += FormConnection_Loaded;
        }

        private void FormConnection_Loaded(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = InitializeFormAsync();
        }

        private async Task InitializeFormAsync()
        {
            await LoadConnectionTypesAsync();
            await LoadConnectionsAsync();
        }

        private async Task LoadConnectionTypesAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();

            // Load connection types from registry (VSIX-supported only)
            var types = ConnectionTypeRegistry.GetSupportedTypes(vsixOnly: true);
            comboBoxType.ItemsSource = types;

            // Select first type (ClientSecret) by default
            if (types.Count > 0)
            {
                comboBoxType.SelectedIndex = 0;
            }
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

                var serviceClient = await VsixHelper.CreateServiceClientAsync(crmConnection);
                if (serviceClient?.IsReady == true)
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
            // Get selected connection type metadata
            var selectedType = comboBoxType.SelectedItem as IConnectionTypeMetadata;
            var typeName = selectedType?.Type ?? "ClientSecret";

            return new CrmConnection
            {
                Name = textboxName.Text,
                Type = typeName,
                Url = textboxUrl.Text,
                ClientId = textboxClientId.Text,
                ClientSecret = textboxClientSecret.Password,
                CreatedAt = DateTime.UtcNow
            };
        }

        private async Task SaveConnectionAsync(CrmConnection crmConnection)
        {
            // Encrypt the ClientSecret before saving
            if (!string.IsNullOrEmpty(crmConnection.ClientSecret))
            {
                crmConnection.ClientSecret = Helper.EncryptString(crmConnection.ClientSecret);
            }

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
            // Update to new format
            existing.ClientId = updated.ClientId;
            existing.ClientSecret = updated.ClientSecret;
            existing.Type = updated.Type;
            existing.Url = updated.Url;
            existing.ModifiedAt = DateTime.UtcNow;
            
            // Clear legacy fields to migrate to new format
            existing.UserName = null;
            existing.Password = null;
        }

        private async Task ClearFormDataAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            // Keep type selected (first one)
            if (comboBoxType.Items.Count > 0)
            {
                comboBoxType.SelectedIndex = 0;
            }
            textboxName.Text = string.Empty;
            textboxUrl.Text = string.Empty;
            textboxClientId.Text = string.Empty;
            textboxClientSecret.Password = string.Empty;
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
            // Validate required fields for ClientSecret connection
            var validationRules = new[]
            {
                new { IsValid = comboBoxType.SelectedItem != null, Message = ERROR_SELECT_TYPE, Control = (System.Windows.FrameworkElement)comboBoxType },
                new { IsValid = !string.IsNullOrWhiteSpace(textboxName.Text), Message = ERROR_ENTER_NAME, Control = (System.Windows.FrameworkElement)textboxName },
                new { IsValid = !string.IsNullOrWhiteSpace(textboxUrl.Text), Message = ERROR_ENTER_URL, Control = (System.Windows.FrameworkElement)textboxUrl },
                new { IsValid = !string.IsNullOrWhiteSpace(textboxClientId.Text), Message = ERROR_ENTER_CLIENT_ID, Control = (System.Windows.FrameworkElement)textboxClientId },
                new { IsValid = !string.IsNullOrWhiteSpace(textboxClientSecret.Password), Message = ERROR_ENTER_CLIENT_SECRET, Control = (System.Windows.FrameworkElement)textboxClientSecret }
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

            // Validate URL format
            if (!Uri.TryCreate(textboxUrl.Text, UriKind.Absolute, out var uri) || 
                (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps))
            {
                await VS.MessageBox.ShowErrorAsync("Please enter a valid URL (e.g., https://yourorg.crm.dynamics.com)");
                textboxUrl.Focus();
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
            // Currently only ClientSecret is supported, so no dynamic field changes needed.
            // Future: When adding more types, show/hide fields based on IConnectionTypeMetadata.Fields
        }
    }
}
