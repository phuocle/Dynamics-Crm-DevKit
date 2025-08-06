using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormConnection : BaseDialogWindow
    {
        public FormConnection(bool IsUseOOBConnection = true)
        {
            InitializeComponent();
            //FixMicrosoftXrmToolingUiStyles();
            LoadConnections();
        }

        //private void FixMicrosoftXrmToolingUiStyles()
        //{
        //    var executingAssembly = Assembly.GetExecutingAssembly();
        //    var fInfo = new System.IO.FileInfo(executingAssembly.Location);
        //    var checkFile = $"{fInfo.Directory.FullName}\\Microsoft.Xrm.Tooling.Ui.Styles.dll";
        //    if (System.IO.File.Exists(checkFile))
        //        Assembly.LoadFrom(checkFile);
        //}

        public ServiceClient ServiceClient { get; set; }
        public CrmConnection CrmConnection { get; set; }

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
            Close();
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            // Check if user has selected a saved connection
            if (comboBoxSavedConnection.SelectedItem is CrmConnection selectedConnection)
            {
                stackPanelForm.IsEnabled = false;
                progressBar.Visibility = System.Windows.Visibility.Visible;
                CrmConnection = selectedConnection;
                VsixHelper.SaveDefaultCrmConnection(CrmConnection.Name);                
                _ = Task.Factory.StartNew(async () =>
                {
                    try
                    {
                        ServiceClient = Helper.CreateServiceClient(CrmConnection);
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();                        
                        if (ServiceClient != null && ServiceClient.IsReady)
                        {
                            DialogResult = true;
                            Close();
                        }
                        else
                        {
                            stackPanelForm.IsEnabled = true;
                            progressBar.Visibility = System.Windows.Visibility.Hidden;
                            await VS.MessageBox.ShowErrorAsync("Failed to connect. Please check your connection settings.");
                        }
                    }
                    catch (Exception ex)
                    {
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        stackPanelForm.IsEnabled = true;
                        progressBar.Visibility = System.Windows.Visibility.Hidden;
                        await VS.MessageBox.ShowErrorAsync($"Connection failed: {ex.Message}");
                    }
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
            else
            {
                // If no connection selected, show message
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    await VS.MessageBox.ShowErrorAsync("Please select a connection or create a new one.");
                });
            }
        }

        private void ButtonCheckConnection_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            //if (!IsValid()) return;
            //var crmConnection = new CrmConnection
            //{
            //    Name = textboxName.Text,
            //    Password = comboBoxType.Text == "ClientSecret" ? textboxPassword.Password : textboxPassword.Password, // Note: Consider encryption for production
            //    Type = comboBoxType.Text,
            //    Url = textboxUrl.Text,
            //    UserName = textboxUser.Text
            //};
            //stackPanelForm.IsEnabled = false;
            //progressBar.Visibility = System.Windows.Visibility.Visible;
            
            //_ = Task.Factory.StartNew(async () =>
            //{
            //    var crmServiceClient = await CacheHelper.CreateServiceClientAsync(crmConnection);
            //    await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            //    stackPanelForm.IsEnabled = true;
            //    progressBar.Visibility = System.Windows.Visibility.Hidden;
                
            //    if (crmServiceClient != null && crmServiceClient.IsReady)
            //    {
            //        var devKitConnections = VsixHelper.GetDevKitConnections();
            //        devKitConnections.DefaultCrmConnection = crmConnection.Name;
                    
            //        // Check if connection already exists, if not add it
            //        if (!devKitConnections.CrmConnections.Any(x => x.Name == crmConnection.Name))
            //        {
            //            devKitConnections.CrmConnections.Add(crmConnection);
            //        }
                    
            //        VsixHelper.SaveDevKitConnections(devKitConnections);
            //        LoadConnections();
            //        ClearData();
            //        await VS.MessageBox.ShowAsync("Connection test successful!");
            //    }
            //    else
            //    {
            //        await VS.MessageBox.ShowErrorAsync(@"Something wrong with your connection. Please try it again");
            //    }
            //}, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
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
            //else
            //{
            //    radioButtonOOBConnection.IsChecked = true;
            //    buttonOK.IsEnabled = true;
            //}
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
            //if (VsixHelper.GetDevKitConnections().CrmConnections.Any(x => x.Name == textboxName.Text)) {
            //    VS.MessageBox.ShowError($"Name already used");
            //    textboxName.Focus();
            //    return false;
            //}
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
