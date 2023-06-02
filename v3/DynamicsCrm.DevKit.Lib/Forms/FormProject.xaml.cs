using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormProject : BaseDialogWindow
    {
        public string ProjectName => ComboBoxProject.Text;
        public bool IsOOBConnection => CONNECTION.IsOOBConnection;
        public CrmServiceClient CrmServiceClient => CONNECTION.CrmServiceClient;
        public string DataverseConnectionString => CONNECTION.DataverseConnectionString;

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
                _ProjectType = value;
                switch (_ProjectType)
                {
                    case ProjectType.Shared:
                        SharedProject();
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
                var projectName = ComboBoxProject.SelectedItem.ToString();
                if (VsixHelper.IsExistProject(projectName))
                {
                    VS.MessageBox.ShowError($"Project: {projectName} exist.");
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
    }
}
