using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using Microsoft.Xrm.Tooling.Connector;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormConnection : BaseDialogWindow
    {
        public FormConnection()
        {
            InitializeComponent();
            FixMicrosoftXrmToolingUiStyles();
            LoadConnections();
        }

        private void FixMicrosoftXrmToolingUiStyles()
        {
            var executingAssembly = Assembly.GetExecutingAssembly();
            var fInfo = new System.IO.FileInfo(executingAssembly.Location);
            var checkFile = $"{fInfo.Directory.FullName}\\Microsoft.Xrm.Tooling.Ui.Styles.dll";
            if (System.IO.File.Exists(checkFile))
                Assembly.LoadFrom(checkFile);
        }

        public bool IsOOBConnection => radioButtonOOBConnection.IsChecked ?? false;
        public CrmServiceClient CrmServiceClient { get; set; }
        public string DataverseConnectionString { get; set; } = string.Empty;
        public CrmConnection CrmConnection { get; set; }

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
            Close();
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (IsOOBConnection)
            {
                VsixHelper.SaveDefaultCrmConnection(null);
                DialogResult = true;
                Close();
            }
            else
            {
                stackPanelForm.IsEnabled = false;
                progressBar.Visibility = System.Windows.Visibility.Visible;
                CrmConnection = comboBoxSavedConnection.SelectedItem as CrmConnection;
                VsixHelper.SaveDefaultCrmConnection(CrmConnection.Name);
                _ = Task.Factory.StartNew(() => {
                    CrmServiceClient = XrmHelper.IsConnected(CrmConnection);
                    ThreadHelper.JoinableTaskFactory.Run(async delegate
                    {
                        DataverseConnectionString = XrmHelper.BuildConnectionString(CrmConnection);
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        DialogResult = true;
                        Close();
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
        }

        private void ButtonCheckConnection_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (!IsValid()) return;
            var crmConnection = new CrmConnection
            {
                Name = textboxName.Text,
                Password = comboBoxType.Text == "ClientSecret" ? textboxPassword.Password : EncryptDecrypt.EncryptString(textboxPassword.Password),
                Type = comboBoxType.Text,
                Url = textboxUrl.Text,
                UserName = textboxUser.Text
            };
            stackPanelForm.IsEnabled = false;
            progressBar.Visibility = System.Windows.Visibility.Visible;
            _ = Task.Factory.StartNew(() =>
            {
                var crmServiceClient = XrmHelper.IsConnected(crmConnection);
                ThreadHelper.JoinableTaskFactory.Run(async delegate
                {
                    await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    stackPanelForm.IsEnabled = true;
                    progressBar.Visibility = System.Windows.Visibility.Hidden;
                });
                if (crmServiceClient != null)
                {
                    var devKitConnections = VsixHelper.GetDevKitConnections();
                    devKitConnections.DefaultCrmConnection = crmConnection.Name;
                    devKitConnections.CrmConnections.Add(crmConnection);
                    VsixHelper.SaveDevKitConnections(devKitConnections);
                    LoadConnections();
                    ClearData();
                }
                else
                {
                    ThreadHelper.JoinableTaskFactory.Run(async delegate
                    {
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        await VS.MessageBox.ShowErrorAsync(@"Something wrong with your connection. Please try it again");
                    });
                }
            }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
        }

        public void ClearData()
        {
            ThreadHelper.JoinableTaskFactory.Run(async () => {
                await ClearDataAsync();
            });
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
            var devKitConnections = VsixHelper.GetDevKitConnections();
            comboBoxSavedConnection.DisplayMemberPath = "Name";
            comboBoxSavedConnection.ItemsSource = devKitConnections.CrmConnections;
            if (devKitConnections.DefaultCrmConnection != null)
            {
                comboBoxSavedConnection.SelectedItem = devKitConnections.CrmConnections.FirstOrDefault(x => x.Name == devKitConnections.DefaultCrmConnection);
                buttonOK.IsEnabled = comboBoxSavedConnection.Items.Count > 0;
            }
            else
            {
                radioButtonOOBConnection.IsChecked = true;
                buttonOK.IsEnabled = true;
            }
        }
        private bool IsValid()
        {
            if (comboBoxType.Text.Length == 0)
            {
                VS.MessageBox.ShowError($"Please select Type");
                comboBoxType.Focus();
                return false;
            }
            if (textboxName.Text.Length == 0)
            {
                VS.MessageBox.ShowError($"Please enter {Const.CrmString} Name");
                textboxName.Focus();
                return false;
            }
            if (textboxUrl.Text.Length == 0)
            {
                VS.MessageBox.ShowError("Please enter Url");
                textboxUrl.Focus();
                return false;
            }
            if (textboxUser.Text.Length == 0)
            {
                VS.MessageBox.ShowError($"Please enter {labelUser.Content}");
                textboxUser.Focus();
                return false;
            }
            if (textboxPassword.Password.Length == 0)
            {
                VS.MessageBox.ShowError($"Please enter {labelPassword.Content}");
                textboxPassword.Focus();
                return false;
            }
            if (VsixHelper.GetDevKitConnections().CrmConnections.Any(x => x.Name == textboxName.Text)) {
                VS.MessageBox.ShowError($"Name already used");
                textboxName.Focus();
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

        private void RadioButtonOOBConnection_Checked(object sender, System.Windows.RoutedEventArgs e)
        {
            buttonOK.IsEnabled = true;
        }

        private void RadioButtonConnection_Checked(object sender, System.Windows.RoutedEventArgs e)
        {
            if (comboBoxSavedConnection == null) return;
            buttonOK.IsEnabled = comboBoxSavedConnection.Items?.Count > 0;
        }
    }
}
