using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.VisualStudio.Shell;
using Microsoft.Build.Framework.XamlTypes;
using ItemType = DynamicsCrm.DevKit.Shared.ItemType;

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
                return LabelProjectName.Content.ToString();
            }
        }

        public string ItemName
        {
            get
            {
                return ((XrmEntity)ComboBoxProject.SelectedItem)?.Name;
        }
        }
        public bool IsOOBConnection => CONNECTION.IsOOBConnection;
        public CrmServiceClient CrmServiceClient => CONNECTION.CrmServiceClient;
        public string DataverseConnectionString => CONNECTION.DataverseConnectionString;
        public CrmConnection CrmConnection => CONNECTION.CrmConnection;

        private ItemType _ItemType;
        private ItemType ItemType
        {
            get => _ItemType;
            set
            {
                void LateBoundItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Late-Bound-Class-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Late Bound Class Item Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                    ComboBoxProject.IsEditable = false;
                    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                    LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                    LabelProjectItemName.Content = "Item Name";
                }
                void JsFormItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Form-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("JavaScript Form Item Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                    ComboBoxProject.IsEditable = false;
                    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                    LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                    LabelProjectItemName.Content = "Item Name";
                }
                _ItemType = value;
                switch (_ItemType)
                {
                    case ItemType.LateBound:
                        LateBoundItem();
                        break;
                    case ItemType.JsForm:
                        JsFormItem();
                        break;
                }
            }
        }

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
                void WorkflowProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Workflow-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Workflow Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Workflow";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void CustomActionProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Custom-Action-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Action Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.CustomAction";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void CustomApiProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Custom-Api-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Api Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.CustomApi";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void DataProviderProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Data-Provider-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Data Provider Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.DataProvider";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void WebResourceProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("WebResource Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.WebResource";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void SolutionPackagerProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Solution-Packager-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Solution Packager Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.SolutionPackager";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void ProxyTypesProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/ProxyTypes-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("ProxyTypes Project Template");
                    TextboxProject.IsEnabled = false;
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.ProxyTypes";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void TestProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Test-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Test Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                    ComboBoxProject.IsEditable = false;
                    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Test";
                    LabelProjectName.Tag = $"{VsixHelper.GetSolutionName()}";
                }
                void UiTest()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Ui-Test-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Ui Test Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.UiTest";
                    LabelProjectName.Tag = $"{VsixHelper.GetSolutionName()}";
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
                    case ProjectType.Workflow:
                        WorkflowProject();
                        break;
                    case ProjectType.CustomAction:
                        CustomActionProject();
                        break;
                    case ProjectType.CustomApi:
                        CustomApiProject();
                        break;
                    case ProjectType.DataProvider:
                        DataProviderProject();
                        break;
                    case ProjectType.WebResource:
                        WebResourceProject();
                        break;
                    case ProjectType.SolutionPackager:
                        SolutionPackagerProject();
                        break;
                    case ProjectType.ProxyTypes:
                        ProxyTypesProject();
                        break;
                    case ProjectType.Test:
                        TestProject();
                        break;
                    case ProjectType.UiTest:
                        UiTest();
                        break;
                }
            }
        }

        public FormProject(ProjectType projectType)
        {
            InitializeComponent();
            ProjectType = projectType;
        }

        public FormProject(ItemType itemType)
        {
            InitializeComponent();
            ItemType = itemType;
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
            if (
                ProjectType == ProjectType.Plugin ||
                ProjectType == ProjectType.Workflow ||
                ProjectType == ProjectType.CustomAction ||
                ProjectType == ProjectType.CustomApi ||
                ItemType == ItemType.LateBound ||
                ItemType == ItemType.JsForm
                )
            {
                progressBar.Visibility = System.Windows.Visibility.Visible;
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async delegate
                    {
                        var items = XrmHelper.GetAllEntities(CrmServiceClient);
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        ComboBoxProject.DisplayMemberPath = "Name";
                        ComboBoxProject.ItemsSource = items;
                        buttonOK.IsEnabled = items.Count > 0;
                        progressBar.Visibility = System.Windows.Visibility.Hidden;
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
            else if (
                ProjectType == ProjectType.Test
                )
            {
                var items = VsixHelper.GetAllProjects();
                ComboBoxProject.DisplayMemberPath = "Name";
                ComboBoxProject.ItemsSource = items;
                buttonOK.IsEnabled = items.Count > 0;
            }
        }

        private void TextboxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            if (TextboxProject.Text.Length == 0)
            {
                if (ProjectType == ProjectType.UiTest)
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.UiTest";
                else
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}";
            }
            else
            {
                if (ProjectType == ProjectType.UiTest)
                {
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}.UiTest";
                }
                else
                {
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}";
                }
            }
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

        private void ComboBoxProject_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            if (ComboBoxProject.SelectedItem == null)
            {
                LabelProjectName.Content = $"{LabelProjectName?.Tag}.{ProjectType.ToString()}";
            }
            else
                LabelProjectName.Content = $"{((XrmEntity)ComboBoxProject.SelectedItem)?.Name}.{ProjectType.ToString()}";
        }
    }
}
