using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using Microsoft.VisualStudio.Threading;
using System;
using System.Collections.Generic;
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
        private const string ERROR_CONNECTION_FAILED = "Failed to connect to Dataverse. Please check your connection settings.";
        private const string ENV_AUTH_TYPE = "DEVKIT_AUTH_TYPE";
        private const string ENV_URL = "DEVKIT_URL";
        private const string ENV_CLIENT_ID = "DEVKIT_CLIENT_ID";
        private const string ENV_CLIENT_SECRET = "DEVKIT_CLIENT_SECRET";
        private const string ENV_PAC_PROFILE = "DEVKIT_PAC_PROFILE";
        private const string ENV_USERNAME = "DEVKIT_USERNAME";
        private const string ENV_PASSWORD = "DEVKIT_PASSWORD";
        private const string ENV_DOMAIN = "DEVKIT_DOMAIN";

        public FormConnection()
        {
            InitializeComponent();
            Loaded += FormConnection_Loaded;
            textboxName.TextChanged += (_, __) => UpdateEnvVarPreview();
            textboxUrl.TextChanged += (_, __) => UpdateEnvVarPreview();
            textboxClientId.TextChanged += (_, __) => UpdateEnvVarPreview();
            textboxUserName.TextChanged += (_, __) => UpdateEnvVarPreview();
            textboxClientSecret.PasswordChanged += (_, __) => UpdateEnvVarPreview();
            textboxPassword.PasswordChanged += (_, __) => UpdateEnvVarPreview();
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
            var types = new List<IConnectionTypeMetadata> { new EmptyConnectionTypeMetadata() };
            types.AddRange(ConnectionTypeRegistry.GetSupportedTypes(vsixOnly: true));
            comboBoxType.ItemsSource = types;
            comboBoxType.SelectedIndex = 0;
            UpdateConnectionInputState();
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
                    var connectionToConnect = selectedConnection;
                    if (selectedConnection.UseEnvironmentVariables)
                    {
                        connectionToConnect = CreateCrmConnectionFromEnvironment(selectedConnection, out var missing);
                        if (connectionToConnect == null)
                        {
                            await VS.MessageBox.ShowErrorAsync($"Connection uses DEVKIT_* environment variables, but {missing} is missing.");
                            return;
                        }
                    }

                    // Handle DeviceCode specially to allow user copy code
                    Action<string> deviceCodeCallback = null;
                    if (connectionToConnect.Type == "DeviceCode")
                    {
                        await SetUIBusyStateAsync(true, disableForm: false);
                        deviceCodeCallback = CreateDeviceCodeCallback(connectionToConnect.Type);
                    }
                    else
                    {
                        await SetUIBusyStateAsync(true);
                    }

                    CrmConnection = selectedConnection;
                    await VsixHelper.SaveDefaultCrmConnectionAsync(CrmConnection.Name);
                    
                    var serviceClient = await Task.Run(() => VsixHelper.CreateServiceClientAsync(connectionToConnect, deviceCodeCallback));
                    
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
                UpdateConnectionInputState();
                UpdateConnectionActionState();
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
                
                // For DeviceCode, don't disable form so user can copy URL/code
                var isDeviceCode = crmConnection.Type == "DeviceCode";
                await SetUIBusyStateAsync(true, disableForm: !isDeviceCode);

                var deviceCodeCallback = CreateDeviceCodeCallback(crmConnection.Type);
                var serviceClient = await VsixHelper.CreateServiceClientAsync(crmConnection, deviceCodeCallback);
                
                if (serviceClient?.IsReady == true)
                {
                    var savedToEnvironment = crmConnection.UseEnvironmentVariables;
                    await SaveConnectionAsync(crmConnection);
                    if (savedToEnvironment)
                    {
                        await VS.MessageBox.ShowAsync(
                            "DEVKIT_* user environment variables were updated. New terminal sessions will use the updated values.",
                            icon: Microsoft.VisualStudio.Shell.Interop.OLEMSGICON.OLEMSGICON_INFO,
                            buttons: Microsoft.VisualStudio.Shell.Interop.OLEMSGBUTTON.OLEMSGBUTTON_OK,
                            defaultButton: Microsoft.VisualStudio.Shell.Interop.OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
                    }
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
                // Ensure all controls are re-enabled (needed if DeviceCode disabled them)
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                comboBoxSavedConnection.IsEnabled = true;
                comboBoxType.IsEnabled = true;
                UpdateConnectionInputState();
                UpdateConnectionActionState();
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
            var typeName = selectedType?.Type;

            var connection = new CrmConnection
            {
                Name = textboxName.Text,
                Type = typeName,
                Url = textboxUrl.Text,
                CreatedAt = DateTime.UtcNow,
                UseEnvironmentVariables = checkBoxSaveToEnvVar.IsChecked == true
            };

            // Set type-specific fields
            switch (typeName)
            {
                case "OAuth":
                case "AD":  // AD uses same fields as OAuth
                    connection.UserName = textboxUserName.Text;
                    connection.Password = !string.IsNullOrEmpty(textboxPassword.Password)
                        ? textboxPassword.Password
                        : connection.UseEnvironmentVariables
                            ? Environment.GetEnvironmentVariable(ENV_PASSWORD)
                            : null;
                    break;
                case "ClientSecret":
                    connection.ClientId = textboxClientId.Text;
                    connection.ClientSecret = !string.IsNullOrEmpty(textboxClientSecret.Password)
                        ? textboxClientSecret.Password
                        : connection.UseEnvironmentVariables
                            ? Environment.GetEnvironmentVariable(ENV_CLIENT_SECRET)
                            : null;
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
            if (crmConnection.UseEnvironmentVariables)
            {
                SaveEnvironmentVariables(crmConnection);
                crmConnection = CreateEnvironmentVariableMarker(crmConnection);
            }

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
                    existing.UseEnvironmentVariables = updated.UseEnvironmentVariables;
                    // Clear ClientSecret fields
                    existing.ClientId = null;
                    existing.ClientSecret = null;
                    break;
                case "ClientSecret":
                    existing.ClientId = updated.ClientId;
                    existing.ClientSecret = updated.ClientSecret;
                    existing.UseEnvironmentVariables = updated.UseEnvironmentVariables;
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
                    existing.UseEnvironmentVariables = updated.UseEnvironmentVariables;
                    break;
                case "FromPac":
                    existing.PacProfile = updated.PacProfile;
                    // Clear all credential fields
                    existing.UserName = null;
                    existing.Password = null;
                    existing.ClientId = null;
                    existing.ClientSecret = null;
                    existing.Url = updated.Url;
                    existing.UseEnvironmentVariables = updated.UseEnvironmentVariables;
                    break;
            }

            if (updated.UseEnvironmentVariables)
            {
                existing.Url = null;
                existing.UserName = null;
                existing.Password = null;
                existing.ClientId = null;
                existing.ClientSecret = null;
                existing.PacProfile = null;
            }
        }

        private async Task ClearFormDataAsync()
        {
            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            comboBoxType.SelectedIndex = 0;
            textboxName.Text = string.Empty;
            textboxUrl.Text = string.Empty;
            textboxClientId.Text = string.Empty;
            textboxClientSecret.Password = string.Empty;
            textboxUserName.Text = string.Empty;
            textboxPassword.Password = string.Empty;
            comboBoxPacProfile.SelectedIndex = -1;
            checkBoxSaveToEnvVar.IsChecked = false;
            UpdateEnvVarPreview();
            UpdateConnectionInputState();
            UpdateConnectionActionState();
        }

        private async Task LoadConnectionsAsync()
        {
            try
            {
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                var devKitConnections = await VsixHelper.GetDevKitConnectionsAsync();

                comboBoxSavedConnection.DisplayMemberPath = null;
                comboBoxSavedConnection.ItemsSource = devKitConnections.CrmConnections;

                if (!string.IsNullOrEmpty(devKitConnections.DefaultCrmConnection))
                {
                    comboBoxSavedConnection.SelectedItem = devKitConnections.CrmConnections
                        .FirstOrDefault(x => x.Name == devKitConnections.DefaultCrmConnection);
                }

                if (comboBoxSavedConnection.SelectedItem == null && comboBoxSavedConnection.Items.Count > 0)
                {
                    comboBoxSavedConnection.SelectedIndex = 0;
                }

                UpdateConnectionActionState();
            }
            catch (Exception ex)
            {
                await VS.MessageBox.ShowErrorAsync($"Failed to load connections: {ex.Message}");
            }
        }

        private async Task<bool> IsValidAsync()
        {
            var selectedType = comboBoxType.SelectedItem as IConnectionTypeMetadata;
            var typeName = selectedType?.Type;

            // Common validation rules (Type and Name always required)
            if (string.IsNullOrWhiteSpace(typeName))
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
                    if (string.IsNullOrWhiteSpace(textboxPassword.Password) &&
                        !(checkBoxSaveToEnvVar.IsChecked == true && !string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable(ENV_PASSWORD))))
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
                    if (string.IsNullOrWhiteSpace(textboxClientSecret.Password) &&
                        !(checkBoxSaveToEnvVar.IsChecked == true && !string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable(ENV_CLIENT_SECRET))))
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

                UpdateEnvVarPreview();
                UpdateConnectionInputState();
            }
        }

        private void CheckBoxSaveToEnvVar_Changed(object sender, System.Windows.RoutedEventArgs e)
        {
            UpdateEnvVarPreview();
        }

        private void UpdateConnectionInputState()
        {
            var hasType = !string.IsNullOrWhiteSpace((comboBoxType?.SelectedItem as IConnectionTypeMetadata)?.Type);

            textboxName.IsEnabled = hasType;
            textboxUrl.IsEnabled = hasType;
            textboxUserName.IsEnabled = hasType;
            textboxPassword.IsEnabled = hasType;
            textboxClientId.IsEnabled = hasType;
            textboxClientSecret.IsEnabled = hasType;
            comboBoxPacProfile.IsEnabled = hasType;
            checkBoxSaveToEnvVar.IsEnabled = hasType;

            if (!hasType)
            {
                checkBoxSaveToEnvVar.IsChecked = false;
                HideAllOptionalFields();
            }

            UpdateConnectionActionState();
            UpdateEnvVarPreview();
        }

        private void UpdateConnectionActionState()
        {
            var hasType = !string.IsNullOrWhiteSpace((comboBoxType?.SelectedItem as IConnectionTypeMetadata)?.Type);
            buttonCheckConnection.IsEnabled = hasType;
            buttonOK.IsEnabled = comboBoxSavedConnection?.SelectedItem is CrmConnection;
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

        private static CrmConnection CreateEnvironmentVariableMarker(CrmConnection connection)
        {
            return new CrmConnection
            {
                Name = connection.Name,
                Type = connection.Type,
                UseEnvironmentVariables = true,
                CreatedAt = connection.CreatedAt,
                ModifiedAt = DateTime.UtcNow
            };
        }

        private static CrmConnection CreateCrmConnectionFromEnvironment(CrmConnection marker, out string missingVariable)
        {
            missingVariable = null;
            if (marker == null) return null;

            var type = marker.Type;
            var connection = new CrmConnection
            {
                Name = marker.Name,
                Type = type,
                UseEnvironmentVariables = true,
                Url = Environment.GetEnvironmentVariable(ENV_URL),
                ClientId = Environment.GetEnvironmentVariable(ENV_CLIENT_ID),
                ClientSecret = Environment.GetEnvironmentVariable(ENV_CLIENT_SECRET),
                PacProfile = Environment.GetEnvironmentVariable(ENV_PAC_PROFILE),
                UserName = Environment.GetEnvironmentVariable(ENV_USERNAME),
                Password = Environment.GetEnvironmentVariable(ENV_PASSWORD)
            };

            var envAuthType = Environment.GetEnvironmentVariable(ENV_AUTH_TYPE);
            if (string.IsNullOrWhiteSpace(type))
                type = envAuthType;
            connection.Type = type;

            if (string.IsNullOrWhiteSpace(connection.Type))
            {
                missingVariable = ENV_AUTH_TYPE;
                return null;
            }

            switch (connection.Type)
            {
                case "ClientSecret":
                    if (string.IsNullOrWhiteSpace(connection.Url)) { missingVariable = ENV_URL; return null; }
                    if (string.IsNullOrWhiteSpace(connection.ClientId)) { missingVariable = ENV_CLIENT_ID; return null; }
                    if (string.IsNullOrWhiteSpace(connection.ClientSecret)) { missingVariable = ENV_CLIENT_SECRET; return null; }
                    break;
                case "Interactive":
                case "DeviceCode":
                    if (string.IsNullOrWhiteSpace(connection.Url)) { missingVariable = ENV_URL; return null; }
                    break;
                case "FromPac":
                    if (string.IsNullOrWhiteSpace(connection.PacProfile)) { missingVariable = ENV_PAC_PROFILE; return null; }
                    break;
                case "OAuth":
                    if (string.IsNullOrWhiteSpace(connection.Url)) { missingVariable = ENV_URL; return null; }
                    if (string.IsNullOrWhiteSpace(connection.UserName)) { missingVariable = ENV_USERNAME; return null; }
                    if (string.IsNullOrWhiteSpace(connection.Password)) { missingVariable = ENV_PASSWORD; return null; }
                    break;
                case "AD":
                    if (string.IsNullOrWhiteSpace(connection.Url)) { missingVariable = ENV_URL; return null; }
                    if (string.IsNullOrWhiteSpace(connection.UserName)) { missingVariable = ENV_USERNAME; return null; }
                    if (string.IsNullOrWhiteSpace(connection.Password)) { missingVariable = ENV_PASSWORD; return null; }
                    break;
            }

            return connection;
        }

        private static void SaveEnvironmentVariables(CrmConnection connection)
        {
            SetUserEnv(ENV_AUTH_TYPE, connection.Type);

            switch (connection.Type)
            {
                case "ClientSecret":
                    SetUserEnv(ENV_URL, connection.Url);
                    SetUserEnv(ENV_CLIENT_ID, connection.ClientId);
                    SetUserEnv(ENV_CLIENT_SECRET, connection.ClientSecret);
                    break;
                case "Interactive":
                case "DeviceCode":
                    SetUserEnv(ENV_URL, connection.Url);
                    if (!string.IsNullOrWhiteSpace(connection.ClientId))
                        SetUserEnv(ENV_CLIENT_ID, connection.ClientId);
                    break;
                case "FromPac":
                    SetUserEnv(ENV_PAC_PROFILE, connection.PacProfile);
                    break;
                case "OAuth":
                    SetUserEnv(ENV_URL, connection.Url);
                    SetUserEnv(ENV_USERNAME, connection.UserName);
                    SetUserEnv(ENV_PASSWORD, connection.Password);
                    if (!string.IsNullOrWhiteSpace(connection.ClientId))
                        SetUserEnv(ENV_CLIENT_ID, connection.ClientId);
                    break;
                case "AD":
                    SetUserEnv(ENV_URL, connection.Url);
                    SetUserEnv(ENV_USERNAME, connection.UserName);
                    SetUserEnv(ENV_PASSWORD, connection.Password);
                    var domain = ExtractDomain(connection.UserName);
                    if (!string.IsNullOrWhiteSpace(domain))
                        SetUserEnv(ENV_DOMAIN, domain);
                    break;
            }
        }

        private static void SetUserEnv(string name, string value)
        {
            if (string.IsNullOrWhiteSpace(value)) return;
            Environment.SetEnvironmentVariable(name, value, EnvironmentVariableTarget.User);
            Environment.SetEnvironmentVariable(name, value, EnvironmentVariableTarget.Process);
        }

        private void UpdateEnvVarPreview()
        {
            if (textBlockEnvVarPreview == null) return;

            var selectedTypeName = GetSelectedTypeName();
            if (checkBoxSaveToEnvVar?.IsChecked != true || string.IsNullOrWhiteSpace(selectedTypeName))
            {
                textBlockEnvVarPreview.Visibility = System.Windows.Visibility.Collapsed;
                textBlockEnvVarPreview.Text = string.Empty;
                return;
            }

            textBlockEnvVarPreview.Visibility = System.Windows.Visibility.Visible;
            var preview = new List<string>
            {
                $"{ENV_AUTH_TYPE}={selectedTypeName}"
            };

            switch (selectedTypeName)
            {
                case "ClientSecret":
                    preview.Add($"{ENV_URL}={textboxUrl.Text}");
                    preview.Add($"{ENV_CLIENT_ID}={textboxClientId.Text}");
                    preview.Add($"{ENV_CLIENT_SECRET}={(HasValue(textboxClientSecret.Password, ENV_CLIENT_SECRET) ? "[set]" : "[missing]")}");
                    break;
                case "Interactive":
                case "DeviceCode":
                    preview.Add($"{ENV_URL}={textboxUrl.Text}");
                    if (!string.IsNullOrWhiteSpace(textboxClientId.Text))
                        preview.Add($"{ENV_CLIENT_ID}={textboxClientId.Text}");
                    break;
                case "FromPac":
                    preview.Add($"{ENV_PAC_PROFILE}={GetSelectedPacProfileName()}");
                    break;
                case "OAuth":
                    preview.Add($"{ENV_URL}={textboxUrl.Text}");
                    preview.Add($"{ENV_USERNAME}={textboxUserName.Text}");
                    preview.Add($"{ENV_PASSWORD}={(HasValue(textboxPassword.Password, ENV_PASSWORD) ? "[set]" : "[missing]")}");
                    break;
                case "AD":
                    preview.Add($"{ENV_URL}={textboxUrl.Text}");
                    preview.Add($"{ENV_USERNAME}={textboxUserName.Text}");
                    preview.Add($"{ENV_PASSWORD}={(HasValue(textboxPassword.Password, ENV_PASSWORD) ? "[set]" : "[missing]")}");
                    var domain = ExtractDomain(textboxUserName.Text);
                    if (!string.IsNullOrWhiteSpace(domain))
                        preview.Add($"{ENV_DOMAIN}={domain}");
                    break;
            }

            textBlockEnvVarPreview.Text = string.Join(Environment.NewLine, preview);
        }

        private string GetSelectedTypeName()
        {
            return (comboBoxType?.SelectedItem as IConnectionTypeMetadata)?.Type;
        }

        private string GetSelectedPacProfileName()
        {
            return comboBoxPacProfile?.SelectedItem is PacProfileInfo profile ? profile.Name : string.Empty;
        }

        private static bool HasValue(string fieldValue, string envName)
        {
            return !string.IsNullOrWhiteSpace(fieldValue) ||
                   !string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable(envName));
        }

        private static string ExtractDomain(string username)
        {
            if (string.IsNullOrWhiteSpace(username) || !username.Contains("\\")) return string.Empty;
            var parts = username.Split('\\');
            return parts.Length == 2 ? parts[0] : string.Empty;
        }

        private sealed class EmptyConnectionTypeMetadata : IConnectionTypeMetadata
        {
            public string Type => string.Empty;
            public string DisplayName => string.Empty;
            public string Description => string.Empty;
            public bool SupportedInVsix => true;
            public IReadOnlyList<ConnectionFieldDefinition> Fields => Array.Empty<ConnectionFieldDefinition>();
        }
    }
}
