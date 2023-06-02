using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;

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
                _ProjectType = value;
                switch (_ProjectType)
                {
                    case ProjectType.Shared:
                        SharedProject();
                        break;
                    case ProjectType.Console:
                        ConsoleProject();
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
                return true;
            }
            if (IsValid())
            {
                DialogResult = true;
            }
        }

        private void Connection_Connected(object sender, System.EventArgs e)
        {
        }

        private void TextboxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            if (TextboxProject.Text.Length == 0)
                LabelProjectName.Content = $"{LabelProjectName?.Tag}";
            else
                LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}";
        }
    }
}
