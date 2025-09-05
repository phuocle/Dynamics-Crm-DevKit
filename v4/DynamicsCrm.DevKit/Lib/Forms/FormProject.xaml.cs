using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormProject : BaseDialogWindow
    {
        public ServiceClient ServiceClient => CONNECTION.ServiceClient;
        public CrmConnection CrmConnection => CONNECTION.CrmConnection;

        public string ProjectName => LabelProjectName.Content?.ToString() ?? string.Empty;

        private ProjectType _ProjectType = ProjectType.None;
        private ProjectType ProjectType
        {
            get => _ProjectType;
            set
            {
                async Task SharedProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Shared Project Template");
                    TextboxProject.IsEnabled = false;
                    TextboxProject.Text = $"{solutionName}.Shared";
                    LabelProjectName.Content = $"{solutionName}.Shared";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task ConsoleProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Console Project Template");
                    LabelProjectName.Content = $"{solutionName}.Console";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task ConsoleCoreProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Core-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Console Core Project Template");
                    LabelProjectName.Content = $"{solutionName}.ConsoleCore";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task ServerProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Server-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Server Project Template");
                    LabelProjectName.Content = $"{solutionName}";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }                
                async Task WebResourceProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("WebResource Project Template");
                    LabelProjectName.Content = $"{solutionName}.WebResource";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task SolutionPackagerProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Solution-Packager-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Solution Packager Project Template");
                    LabelProjectName.Content = $"{solutionName}.SolutionPackager";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task ProxyTypesProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/ProxyTypes-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("ProxyTypes Project Template");
                    TextboxProject.IsEnabled = false;
                    TextboxProject.Text = $"{solutionName}.ProxyTypes";
                    LabelProjectName.Content = $"{solutionName}.ProxyTypes";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task TestProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Test-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Test Project Template");
                    LabelProjectName.Content = $"{solutionName}.Test";
                    LabelProjectName.Tag = $"{solutionName}";
                }
                async Task UiTestAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Ui-Test-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Ui Test Project Template");
                    LabelProjectName.Content = $"{solutionName}.UiTest";
                    LabelProjectName.Tag = $"{solutionName}";
                }
                async Task SharedTestProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Test-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Shared Test Project Template");
                    TextboxProject.IsEnabled = false;
                    TextboxProject.Text = $"{solutionName}.Shared.Test";
                    LabelProjectName.Content = $"{solutionName}.Shared.Test";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task PackageProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Package-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Package Project Template");
                    LabelProjectName.Content = $"{solutionName}.{ProjectType.Package}";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task ReportProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                }
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    _ProjectType = value;
                    switch (_ProjectType)
                    {
                        case ProjectType.Shared:
                            await SharedProjectAsync();
                            break;
                        case ProjectType.Console:
                            await ConsoleProjectAsync();
                            break;
                        case ProjectType.ConsoleCore:
                            await ConsoleCoreProjectAsync();
                            break;
                        case ProjectType.Server:
                            await ServerProjectAsync();
                            break;
                        case ProjectType.WebResource:
                            await WebResourceProjectAsync();
                            break;
                        case ProjectType.SolutionPackager:
                            await SolutionPackagerProjectAsync();
                            break;
                        case ProjectType.ProxyTypes:
                            await ProxyTypesProjectAsync();
                            break;
                        case ProjectType.Test:
                            await TestProjectAsync();
                            break;
                        case ProjectType.UiTest:
                            await UiTestAsync();
                            break;
                        case ProjectType.SharedTest:
                            await SharedTestProjectAsync();
                            break;
                        case ProjectType.Report:
                            await ReportProjectAsync();
                            break;
                        case ProjectType.Package:
                            await PackageProjectAsync();
                            break;
                    }
                });
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

        private async Task ButtonOK_ClickAsync()
        {
            if (await IsValidAsync())
            {
                DialogResult = true;
            }
            async Task<bool> IsValidAsync()
            {
                if (ProjectType != ProjectType.None)
                {
                    if (await VsixHelper.IsProjectExistAsync(ProjectName))
                    {
                        await VS.MessageBox.ShowErrorAsync($"Project: {ProjectName} exist.");
                        return false;
                    }
                    if (!VsixHelper.IsValidProjectName(ProjectName))
                    {
                        await VS.MessageBox.ShowErrorAsync("Invalid enter project name");
                        return false;
                    }                    
                }
                return true;
            }
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = ButtonOK_ClickAsync();            
        }

        private void TextboxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            if (TextboxProject.Text.Length == 0)
            {
                if (ProjectType == ProjectType.Test)
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{ProjectType.Test}";
                else if (ProjectType == ProjectType.UiTest)
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{ProjectType.UiTest}";
                else
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}";
            }
            else
            {
                if (ProjectType == ProjectType.Test)
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}.{ProjectType.Test}";
                else if (ProjectType == ProjectType.UiTest)
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}.{ProjectType.UiTest}";
                else
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}";
            }
        } 

        private void EditProjectName_Click(object sender, RoutedEventArgs e)
        {
            if (TextboxProject.IsEnabled == false)
            {
                return;
            }
            TextBoxProjectNameInline.Text = LabelProjectName.Content?.ToString() ?? string.Empty;
            PanelProjectNameDisplay.Visibility = Visibility.Collapsed;
            TextBoxProjectNameInline.Visibility = Visibility.Visible;
            buttonOK.IsEnabled = false;
            TextBoxProjectNameInline.Focus();
            TextBoxProjectNameInline.SelectAll();
        }

        private void ExitEditMode(bool apply)
        {
            if (apply)
            {
                var newValue = TextBoxProjectNameInline.Text?.Trim() ?? string.Empty;
                if (!string.IsNullOrEmpty(newValue))
                {
                    LabelProjectName.Content = newValue;
                }
            }
            TextBoxProjectNameInline.Visibility = Visibility.Collapsed;
            PanelProjectNameDisplay.Visibility = Visibility.Visible;
            buttonOK.IsEnabled = true;
        }

        private void TextBoxProjectNameInline_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                ExitEditMode(apply: true);
                e.Handled = true;
            }
            else if (e.Key == Key.Escape)
            {
                ExitEditMode(apply: false);
                e.Handled = true;
            }
        }
    }
}
