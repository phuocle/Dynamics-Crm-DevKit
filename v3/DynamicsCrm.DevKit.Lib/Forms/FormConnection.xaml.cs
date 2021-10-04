using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
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

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (IsOOBConnection)
            {
                DialogResult = true;
                Close();
            }
            else
            {
                stackPanelForm.IsEnabled = false;
                progressBar.Visibility = System.Windows.Visibility.Visible;
            }
        }

        private void ButtonCheckConnection_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (!IsValid()) return;

            var crmConnection = new CrmConnection
            {
                Name = textboxName.Text,
                Password = textboxPassword.Password,
                Type = comboBoxType.Text,
                Url = textboxUrl.Text,
                UserName = textboxUser.Text
            };
            var connectionString = XrmHelper.BuildConnectionString(crmConnection);
            stackPanelForm.IsEnabled = false;
            progressBar.Visibility = System.Windows.Visibility.Visible;
            _ = Task.Factory.StartNew(() =>
              {
                  var isConnected = XrmHelper.IsConnected(connectionString);
                  ThreadHelper.JoinableTaskFactory.Run(async delegate {
                      await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                      stackPanelForm.IsEnabled = true;
                      progressBar.Visibility = System.Windows.Visibility.Hidden;
                  });
                  if (isConnected)
                  {
                      var devKitConnections = VsixHelper.GetDevKitConnections();
                      devKitConnections.DefaultCrmConnection = crmConnection.Name;
                      if (devKitConnections.CrmConnections == null) devKitConnections.CrmConnections = new List<CrmConnection>();
                      devKitConnections.CrmConnections.Add(crmConnection);
                      //VsixHelper.SaveDevKitConnections(devKitConnections);
                      LoadConnections();
                      //ClearData();
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

        private void ClearData()
        {
            comboBoxType.SelectedItem = null;
            comboBoxType.Text = null;
            textboxName.Text = null;
            textboxUrl.Text = null;
            textboxUser.Text = null;
            textboxPassword.Password = null;
        }

        private void LoadConnections()
        {

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
            return true;
        }

        private void ComboBoxType_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            //var selectedText = ((ComboBoxItem)comboBoxType.SelectedItem).Content.ToString();
            //labelUser.Content = selectedText == "ClientSecret" ? "Client Id" : "User Name";
            //labelPassword.Content = selectedText == "ClientSecret" ? "Client Secret" : "Password";
        }
    }
}
