using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.VisualStudio.Shell;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormProject : BaseDialogWindow
    {
        public string ProjectName
        {
            get
            {
                switch (ProjectType)
                {
                    case ProjectType.Shared:
                        return ComboBoxProject.Text;
                    case ProjectType.Console:
                    case ProjectType.Server:
                    case ProjectType.Plugin:
                        return LabelProjectName.Content.ToString();
                }
                return string.Empty;
            }
        }
        public bool IsOOBConnection => CONNECTION.IsOOBConnection;
        public CrmServiceClient CrmServiceClient => CONNECTION.CrmServiceClient;
        public string DataverseConnectionString => CONNECTION.DataverseConnectionString;
        public CrmConnection CrmConnection => CONNECTION.CrmConnection;

        private ProjectType _ProjectType;
        private ProjectType ProjectType  {
            get => _ProjectType;
            set
            {
                void SharedProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Shared Project Template");
                    LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxProject.Items.Clear();
                    ComboBoxProject.Items.Add($"{VsixHelper.GetSolutionName()}.Shared");
                    ComboBoxProject.SelectedIndex = 0;
                    ComboBoxProject.IsEnabled = false;
                }
                void ConsoleProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Console Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Console";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void ServerProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Server-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Server Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void PluginProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Plugin-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Plugin Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Plugin";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                _ProjectType = value;
                switch (_ProjectType)
                {
                    case ProjectType.Shared:
                        SharedProject();
                        break;
                    case ProjectType.Console:
                        ConsoleProject();
                        break;
                    case ProjectType.Server:
                        ServerProject();
                        break;
                    case ProjectType.Plugin:
                        PluginProject();
                        break;
                }
            }
        }

        public FormProject(ProjectType projectType)
        {
            InitializeComponent();
            ProjectType = projectType;
        }

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            bool IsValid()
            {
                if (VsixHelper.IsExistProject(ProjectName))
                {
                    VS.MessageBox.ShowError($"Project: {ProjectName} exist.");
                    return false;
                }
                if (!VsixHelper.IsValidProjectName(ProjectName))
                {
                    VS.MessageBox.ShowError("Invalid enter project name");
                    return false;
                }
                return true;
            }
            if (IsValid())
            {
                DialogResult = true;
            }
        }

        private void Connection_Connected(object sender, System.EventArgs e)
        {
            progressBar.Visibility = System.Windows.Visibility.Visible;
            _ = Task.Factory.StartNew(() =>
            {
                ThreadHelper.JoinableTaskFactory.Run(async delegate
                {
                    await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    ComboBoxProject.DisplayMemberPath = "Name";
                    ComboBoxProject.ItemsSource = XrmHelper.GetAllEntities(CrmServiceClient);
                    progressBar.Visibility = System.Windows.Visibility.Hidden;
                });
            }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
        }

        private void TextboxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            if (TextboxProject.Text.Length == 0)
                LabelProjectName.Content = $"{LabelProjectName?.Tag}";
            else
                LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}";
        }

        private void ComboBoxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            if (ComboBoxProject.SelectedItem == null)
            {
                if (ComboBoxProject.Text.Length == 0)
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}";
                else
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{ComboBoxProject?.Text}";
            }
            else
                LabelProjectName.Content = $"{LabelProjectName?.Tag}.{((XrmEntity)ComboBoxProject.SelectedItem)?.Name}";
        }
    }
}
