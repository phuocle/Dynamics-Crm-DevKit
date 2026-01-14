using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata;
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
        private const string ERROR_ENTER_USERNAME = "Please enter Username";
        private const string ERROR_ENTER_PASSWORD = "Please enter Password";
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

            var connection = new CrmConnection
            {
                Name = textboxName.Text,
                Type = typeName,
                Url = textboxUrl.Text,
                CreatedAt = DateTime.UtcNow
            };

            // Set type-specific fields
            switch (typeName)
            {
                case "OAuth":
                case "AD":  // AD uses same fields as OAuth
                    connection.UserName = textboxUserName.Text;
                    connection.Password = textboxPassword.Password;
                    break;
                case "ClientSecret":
                    connection.ClientId = textboxClientId.Text;
                    connection.ClientSecret = textboxClientSecret.Password;
                    break;
                case "Interactive":
                    // Interactive only needs Url - browser handles auth
                    break;
            }

            return connection;
        }

        private async Task SaveConnectionAsync(CrmConnection crmConnection)
        {
            // Clear unused fields based on connection type before saving
            ClearUnusedFieldsForType(crmConnection);

            // Encrypt sensitive fields before saving
            if (!string.IsNullOrEmpty(crmConnection.ClientSecret))
            {
                crmConnection.ClientSecret = Helper.EncryptString(crmConnection.ClientSecret);
            }
            if (!string.IsNullOrEmpty(crmConnection.Password))
            {
                crmConnection.Password = Helper.EncryptString(crmConnection.Password);
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
            // Update common fields
            existing.Type = updated.Type;
            existing.Url = updated.Url;
            existing.ModifiedAt = DateTime.UtcNow;

            // Update type-specific fields based on connection type
            switch (updated.Type)
            {
                case "OAuth":
                case "AD":  // AD uses same fields as OAuth
                    existing.UserName = updated.UserName;
                    existing.Password = updated.Password;
                    // Clear ClientSecret fields
                    existing.ClientId = null;
                    existing.ClientSecret = null;
                    break;
                case "ClientSecret":
                    existing.ClientId = updated.ClientId;
                    existing.ClientSecret = updated.ClientSecret;
                    // Clear OAuth fields when switching to ClientSecret
                    existing.UserName = null;
                    existing.Password = null;
                    break;
                case "Interactive":
                    // Interactive uses browser - clear all credential fields
                    existing.UserName = null;
                    existing.Password = null;
                    existing.ClientId = null;
                    existing.ClientSecret = null;
                    break;
            }
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
            textboxUserName.Text = string.Empty;
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
            var selectedType = comboBoxType.SelectedItem as IConnectionTypeMetadata;
            var typeName = selectedType?.Type ?? "ClientSecret";

            // Common validation rules
            var commonRules = new[]
            {
                new { IsValid = comboBoxType.SelectedItem != null, Message = ERROR_SELECT_TYPE, Control = (System.Windows.FrameworkElement)comboBoxType },
                new { IsValid = !string.IsNullOrWhiteSpace(textboxName.Text), Message = ERROR_ENTER_NAME, Control = (System.Windows.FrameworkElement)textboxName },
                new { IsValid = !string.IsNullOrWhiteSpace(textboxUrl.Text), Message = ERROR_ENTER_URL, Control = (System.Windows.FrameworkElement)textboxUrl }
            };

            foreach (var rule in commonRules)
            {
                if (!rule.IsValid)
                {
                    await VS.MessageBox.ShowErrorAsync(rule.Message);
                    rule.Control.Focus();
                    return false;
                }
            }

            // Type-specific validation
            switch (typeName)
            {
                case "OAuth":
                case "AD":  // AD uses same validation as OAuth
                    if (string.IsNullOrWhiteSpace(textboxUserName.Text))
                    {
                        await VS.MessageBox.ShowErrorAsync(ERROR_ENTER_USERNAME);
                        textboxUserName.Focus();
                        return false;
                    }
                    if (string.IsNullOrWhiteSpace(textboxPassword.Password))
                    {
                        await VS.MessageBox.ShowErrorAsync(ERROR_ENTER_PASSWORD);
                        textboxPassword.Focus();
                        return false;
                    }
                    break;
                case "ClientSecret":
                    if (string.IsNullOrWhiteSpace(textboxClientId.Text))
                    {
                        await VS.MessageBox.ShowErrorAsync(ERROR_ENTER_CLIENT_ID);
                        textboxClientId.Focus();
                        return false;
                    }
                    if (string.IsNullOrWhiteSpace(textboxClientSecret.Password))
                    {
                        await VS.MessageBox.ShowErrorAsync(ERROR_ENTER_CLIENT_SECRET);
                        textboxClientSecret.Focus();
                        return false;
                    }
                    break;
                case "Interactive":
                    // Interactive only needs Url - already validated in common rules
                    break;
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
            if (comboBoxType.SelectedItem is IConnectionTypeMetadata selectedType)
            {
                // First hide all optional fields
                HideAllOptionalFields();

                // Then show fields based on connection type
                switch (selectedType.Type)
                {
                    case "ClientSecret":
                        ShowClientSecretFields();
                        break;
                    case "OAuth":
                    case "AD":  // AD uses same fields as OAuth
                        ShowOAuthFields();
                        break;
                    case "Interactive":
                        ShowInteractiveFields();
                        break;
                }
            }
        }

        private void HideAllOptionalFields()
        {
            // OAuth fields
            labelUserName.Visibility = System.Windows.Visibility.Collapsed;
            textboxUserName.Visibility = System.Windows.Visibility.Collapsed;
            labelPassword.Visibility = System.Windows.Visibility.Collapsed;
            textboxPassword.Visibility = System.Windows.Visibility.Collapsed;

            // ClientSecret fields
            labelClientId.Visibility = System.Windows.Visibility.Collapsed;
            textboxClientId.Visibility = System.Windows.Visibility.Collapsed;
            labelClientSecret.Visibility = System.Windows.Visibility.Collapsed;
            textboxClientSecret.Visibility = System.Windows.Visibility.Collapsed;
        }

        private void ShowClientSecretFields()
        {
            labelClientId.Visibility = System.Windows.Visibility.Visible;
            textboxClientId.Visibility = System.Windows.Visibility.Visible;
            labelClientSecret.Visibility = System.Windows.Visibility.Visible;
            textboxClientSecret.Visibility = System.Windows.Visibility.Visible;
        }

        private void ShowOAuthFields()
        {
            labelUserName.Visibility = System.Windows.Visibility.Visible;
            textboxUserName.Visibility = System.Windows.Visibility.Visible;
            labelPassword.Visibility = System.Windows.Visibility.Visible;
            textboxPassword.Visibility = System.Windows.Visibility.Visible;
        }

        private void ShowInteractiveFields()
        {
            // Interactive only needs Url which is always visible
            // No additional fields to show
        }

        /// <summary>
        /// Clears fields that are not relevant for the connection type.
        /// This ensures clean JSON output and prevents data leakage from connection builders
        /// that may modify the connection object during authentication.
        /// </summary>
        private static void ClearUnusedFieldsForType(CrmConnection connection)
        {
            switch (connection.Type)
            {
                case "ClientSecret":
                    connection.UserName = null;
                    connection.Password = null;
                    break;
                case "OAuth":
                case "AD":  // AD uses same fields as OAuth
                    connection.ClientId = null;
                    connection.ClientSecret = null;
                    break;
                case "Interactive":
                    // Interactive uses browser - clear all credential fields
                    connection.UserName = null;
                    connection.Password = null;
                    connection.ClientId = null;
                    connection.ClientSecret = null;
                    break;
            }
        }
    }
}
