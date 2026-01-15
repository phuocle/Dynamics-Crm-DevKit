using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Threading;
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
                    // Handle DeviceCode specially to allow user copy code
                    Action<string> deviceCodeCallback = null;
                    if (selectedConnection.Type == "DeviceCode")
                    {
                        await SetUIBusyStateAsync(true, disableForm: false);
                        deviceCodeCallback = CreateDeviceCodeCallback(selectedConnection.Type);
                    }
                    else
                    {
                        await SetUIBusyStateAsync(true);
                    }

                    CrmConnection = selectedConnection;
                    await VsixHelper.SaveDefaultCrmConnectionAsync(CrmConnection.Name);
                    
                    var serviceClient = await Task.Run(() => VsixHelper.CreateServiceClientAsync(selectedConnection, deviceCodeCallback));
                    
                    if (serviceClient?.IsReady == true)
                    {
                        ServiceClient = serviceClient;
                        CloseDialog(true);
                        return;
                    }

                    await VS.MessageBox.ShowErrorAsync(ERROR_CONNECTION_FAILED);
                }
                else
                {
                    await VS.MessageBox.ShowErrorAsync(ERROR_SELECT_CONNECTION);
                }
            }
            catch (Exception ex)
            {
                await VS.MessageBox.ShowErrorAsync($"An error occurred: {ex.Message}");
            }
            finally
            {
                // Ensure all controls are re-enabled
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                comboBoxSavedConnection.IsEnabled = true;
                comboBoxType.IsEnabled = true;
                textboxName.IsEnabled = true;
                textboxUrl.IsEnabled = true;
                buttonCheckConnection.IsEnabled = true;
                buttonOK.IsEnabled = true;
                buttonCancel.IsEnabled = true;
                
                await SetUIBusyStateAsync(false);
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
                System.Diagnostics.Debug.WriteLine($"[CheckConnection] Created connection: Name={crmConnection.Name}, Type={crmConnection.Type}, PacProfile={crmConnection.PacProfile}, Url={crmConnection.Url}");
                
                // For DeviceCode, don't disable form so user can copy URL/code
                var isDeviceCode = crmConnection.Type == "DeviceCode";
                await SetUIBusyStateAsync(true, disableForm: !isDeviceCode);

                var deviceCodeCallback = CreateDeviceCodeCallback(crmConnection.Type);
                System.Diagnostics.Debug.WriteLine($"[CheckConnection] Calling CreateServiceClientAsync...");
                var serviceClient = await VsixHelper.CreateServiceClientAsync(crmConnection, deviceCodeCallback);
                System.Diagnostics.Debug.WriteLine($"[CheckConnection] ServiceClient returned: IsReady={serviceClient?.IsReady}, LastError={serviceClient?.LastError}");
                
                if (serviceClient?.IsReady == true)
                {
                    System.Diagnostics.Debug.WriteLine($"[CheckConnection] Connection successful, saving...");
                    await SaveConnectionAsync(crmConnection);
                    await LoadConnectionsAsync();
                    await ClearFormDataAsync();
                    System.Diagnostics.Debug.WriteLine($"[CheckConnection] All done!");
                }
                else
                {
                    System.Diagnostics.Debug.WriteLine($"[CheckConnection] Connection failed: IsReady=false");
                    await VS.MessageBox.ShowErrorAsync(ERROR_CONNECTION_FAILED);
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"[CheckConnection] Exception: {ex.Message}");
                await VS.MessageBox.ShowErrorAsync($"An error occurred while testing connection: {ex.Message}");
            }
            finally
            {
                // Ensure all controls are re-enabled (needed if DeviceCode disabled them)
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                comboBoxSavedConnection.IsEnabled = true;
                comboBoxType.IsEnabled = true;
                textboxName.IsEnabled = true;
                textboxUrl.IsEnabled = true;
                buttonCheckConnection.IsEnabled = true;
                buttonOK.IsEnabled = true;
                buttonCancel.IsEnabled = true;

                await SetUIBusyStateAsync(false);
            }
        }

        /// <summary>
        /// Creates a callback for DeviceCode authentication that parses the message
        /// and updates UI with the authentication URL and code.
        /// </summary>
        private Action<string> CreateDeviceCodeCallback(string connectionType)
        {
            if (connectionType != "DeviceCode") return null;

            return message =>
            {
                // Parse message format: "To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code XXXXXXX to authenticate."
                var url = "https://microsoft.com/devicelogin";
                var code = "";

                // Extract URL from message
                var urlMatch = System.Text.RegularExpressions.Regex.Match(message, @"https?://[^\s]+");
                if (urlMatch.Success)
                {
                    url = urlMatch.Value;
                }

                // Extract code from message (format: "enter the code XXXXXXX")
                var codeMatch = System.Text.RegularExpressions.Regex.Match(message, @"enter the code ([A-Z0-9]+)");
                if (codeMatch.Success && codeMatch.Groups.Count > 1)
                {
                    code = codeMatch.Groups[1].Value;
                }
                // Update UI on main thread
#pragma warning disable VSSDK007
                ThreadHelper.JoinableTaskFactory.RunAsync(async () =>
                {
                    await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    textboxDeviceUrl.Text = url;
                    textboxDeviceCode.Text = code;
                    
                    // Disable other controls so user focuses on copying URL/code
                    comboBoxSavedConnection.IsEnabled = false;
                    comboBoxType.IsEnabled = false;
                    textboxName.IsEnabled = false;
                    textboxUrl.IsEnabled = false;
                    buttonCheckConnection.IsEnabled = false;
                    buttonOK.IsEnabled = false;
                    buttonCancel.IsEnabled = false;
                }).FireAndForget();
#pragma warning restore VSSDK007
            };
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
                case "DeviceCode":  // DeviceCode uses same logic as Interactive (Url only)
                    // Only needs Url - browser/device handles auth
                    break;
                case "FromPac":
                    // Get selected PAC profile name
                    if (comboBoxPacProfile.SelectedItem is PacProfileInfo selectedProfile)
                    {
                        connection.PacProfile = selectedProfile.Name;
                        // Get URL from profile for display purposes
                        connection.Url = selectedProfile.Resource;
                    }
                    break;
            }

            return connection;
        }

        private async Task SaveConnectionAsync(CrmConnection crmConnection)
        {
            System.Diagnostics.Debug.WriteLine($"[SaveConnection] Saving connection: {crmConnection.Name}, Type: {crmConnection.Type}, PacProfile: {crmConnection.PacProfile}, Url: {crmConnection.Url}");
            
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
                System.Diagnostics.Debug.WriteLine($"[SaveConnection] Updating existing connection");
                UpdateExistingConnection(existingConnection, crmConnection);
            }
            else
            {
                System.Diagnostics.Debug.WriteLine($"[SaveConnection] Adding new connection");
                devKitConnections.CrmConnections.Add(crmConnection);
            }

            System.Diagnostics.Debug.WriteLine($"[SaveConnection] Calling SaveDevKitConnectionsAsync");
            await VsixHelper.SaveDevKitConnectionsAsync(devKitConnections);
            System.Diagnostics.Debug.WriteLine($"[SaveConnection] Done!");
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
                case "DeviceCode":  // DeviceCode uses same logic as Interactive
                    // Uses browser/device - clear all credential fields
                    existing.UserName = null;
                    existing.Password = null;
                    existing.ClientId = null;
                    existing.ClientSecret = null;
                    existing.PacProfile = null;
                    break;
                case "FromPac":
                    existing.PacProfile = updated.PacProfile;
                    // Clear all credential fields
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
            comboBoxPacProfile.SelectedIndex = -1;
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

            // Common validation rules (Type and Name always required)
            if (comboBoxType.SelectedItem == null)
            {
                await VS.MessageBox.ShowErrorAsync(ERROR_SELECT_TYPE);
                comboBoxType.Focus();
                return false;
            }
            if (string.IsNullOrWhiteSpace(textboxName.Text))
            {
                await VS.MessageBox.ShowErrorAsync(ERROR_ENTER_NAME);
                textboxName.Focus();
                return false;
            }

            // URL validation (skip for FromPac - URL comes from profile)
            if (typeName != "FromPac")
            {
                if (string.IsNullOrWhiteSpace(textboxUrl.Text))
                {
                    await VS.MessageBox.ShowErrorAsync(ERROR_ENTER_URL);
                    textboxUrl.Focus();
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
                case "DeviceCode":  // DeviceCode uses same validation as Interactive
                    // Only needs Url - already validated in common rules
                    break;
                case "FromPac":
                    if (comboBoxPacProfile.SelectedItem == null || !(comboBoxPacProfile.SelectedItem is PacProfileInfo))
                    {
                        await VS.MessageBox.ShowErrorAsync("Please select a PAC CLI profile");
                        comboBoxPacProfile.Focus();
                        return false;
                    }
                    break;
            }

            // Validate URL format (skip for FromPac - URL comes from profile)
            if (typeName != "FromPac")
            {
                if (!Uri.TryCreate(textboxUrl.Text, UriKind.Absolute, out var uri) || 
                    (uri.Scheme != Uri.UriSchemeHttp && uri.Scheme != Uri.UriSchemeHttps))
                {
                    await VS.MessageBox.ShowErrorAsync("Please enter a valid URL (e.g., https://yourorg.crm.dynamics.com)");
                    textboxUrl.Focus();
                    return false;
                }
            }

            return true;
        }

        private async Task SetUIBusyStateAsync(bool isBusy, bool disableForm = true)
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            // Only disable form if disableForm is true (skip for DeviceCode)
            if (disableForm)
            {
                stackPanelForm.IsEnabled = !isBusy;
            }
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
                    case "DeviceCode":
                        ShowDeviceCodeFields();
                        break;
                    case "FromPac":
                        ShowFromPacFields();
                        break;
                }
            }
        }

        private void HideAllOptionalFields()
        {
            // DeviceCode fields
            labelDeviceUrl.Visibility = System.Windows.Visibility.Collapsed;
            textboxDeviceUrl.Visibility = System.Windows.Visibility.Collapsed;
            labelDeviceCode.Visibility = System.Windows.Visibility.Collapsed;
            textboxDeviceCode.Visibility = System.Windows.Visibility.Collapsed;

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

            // PAC Profile fields
            labelPacProfile.Visibility = System.Windows.Visibility.Collapsed;
            comboBoxPacProfile.Visibility = System.Windows.Visibility.Collapsed;

            // URL field (visible by default, hidden for FromPac)
            labelUrl.Visibility = System.Windows.Visibility.Visible;
            textboxUrl.Visibility = System.Windows.Visibility.Visible;
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

        private void ShowDeviceCodeFields()
        {
            // DeviceCode shows readonly fields for displaying URL and code
            labelDeviceUrl.Visibility = System.Windows.Visibility.Visible;
            textboxDeviceUrl.Visibility = System.Windows.Visibility.Visible;
            textboxDeviceUrl.Text = "Click 'Check Connection' to get URL...";
            labelDeviceCode.Visibility = System.Windows.Visibility.Visible;
            textboxDeviceCode.Visibility = System.Windows.Visibility.Visible;
            textboxDeviceCode.Text = "Waiting for code...";
        }

        private void ShowFromPacFields()
        {
            // FromPac uses ComboBox to select PAC CLI profile
            // Hide URL field since it comes from the profile
            labelUrl.Visibility = System.Windows.Visibility.Collapsed;
            textboxUrl.Visibility = System.Windows.Visibility.Collapsed;

            // Show PAC Profile ComboBox
            labelPacProfile.Visibility = System.Windows.Visibility.Visible;
            comboBoxPacProfile.Visibility = System.Windows.Visibility.Visible;

            // Load PAC profiles into ComboBox
            try
            {
                var profiles = PacProfileHelper.GetPacProfiles();
                
                if (profiles.Count > 0)
                {
                    comboBoxPacProfile.ItemsSource = profiles;
                    comboBoxPacProfile.DisplayMemberPath = "DisplayText";
                    comboBoxPacProfile.SelectedIndex = 0;
                }
                else
                {
                    // No profiles found - show message
                    comboBoxPacProfile.ItemsSource = null;
                    comboBoxPacProfile.DisplayMemberPath = null;
                    comboBoxPacProfile.Items.Clear();
                    comboBoxPacProfile.Items.Add("No PAC profiles found. Run 'pac auth create' first.");
                    comboBoxPacProfile.SelectedIndex = 0;
                }
            }
            catch (Exception ex)
            {
                comboBoxPacProfile.ItemsSource = null;
                comboBoxPacProfile.DisplayMemberPath = null;
                comboBoxPacProfile.Items.Clear();
                comboBoxPacProfile.Items.Add($"Error loading profiles: {ex.Message}");
                comboBoxPacProfile.SelectedIndex = 0;
            }
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
                case "DeviceCode":  // DeviceCode uses same logic as Interactive
                    // Uses browser/device - clear all credential fields
                    connection.UserName = null;
                    connection.Password = null;
                    connection.ClientId = null;
                    connection.ClientSecret = null;
                    break;
                case "FromPac":
                    // FromPac only needs PacProfile - clear all credentials
                    connection.UserName = null;
                    connection.Password = null;
                    connection.ClientId = null;
                    connection.ClientSecret = null;
                    break;
            }
        }
    }
}
