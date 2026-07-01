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

        private void LockUi(bool value)
        {
            StackPanelMain.IsEnabled = !value;
            progressBar.Visibility = value ? Visibility.Visible : Visibility.Hidden;
            CONNECTION.SetIsEnabledButtonConnection(!value);
        }

        private ProjectType _ProjectType = ProjectType.None;
        private ProjectType ProjectType
        {
            get => _ProjectType;
            set
            {
                StackPanelMain.IsEnabled = false;
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    try
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
                            LabelProjectName.Content = $"{solutionName}.Server";
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
                        async Task WebResourceTsProjectAsync()
                        {
                            var solutionName = await VsixHelper.GetSolutionNameAsync();
                            HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-TypeScript-Project-Template");
                            HELP.Inlines.Clear();
                            HELP.Inlines.Add("WebResource TypeScript Project Template");
                            LabelProjectName.Content = $"{solutionName}.WebResourceTs";
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
                            HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Report-Project-Template");
                            HELP.Inlines.Clear();
                            HELP.Inlines.Add("Report Project Template");
                            LabelProjectName.Content = $"{solutionName}.Report";
                            LabelProjectName.Tag = LabelProjectName.Content;
                        }

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
                            case ProjectType.WebResourceTs:
                                await WebResourceTsProjectAsync();
                                break;
                        }
                    }
                    finally
                    {
                    }
                });
            }
        }

        public FormProject(ProjectType projectType)
        {
            InitializeComponent();
            this.ContentRendered += FormProject_ContentRendered;
            ProjectType = projectType;
        }

        private void FormProject_ContentRendered(object sender, EventArgs e)
        {
            // Fire-and-forget: Start preloading NuGet versions in background
            // This runs after the form is fully displayed, so user sees UI immediately
            // By the time user fills in form and clicks OK, cache should be ready
            NuGetVersionCache.StartPreload();
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
                    // Console project (.NET Framework) does not support DeviceCode and FromPac connection types
                    if (ProjectType == ProjectType.Console && CrmConnection != null)
                    {
                        var connectionType = CrmConnection.Type?.ToUpperInvariant();
                        if (connectionType == "DEVICECODE" || connectionType == "FROMPAC")
                        {
                            await VS.MessageBox.ShowErrorAsync(
                                $"The connection type '{CrmConnection.Type}' is not supported for Console project template (.NET Framework).\n\n" +
                                "DeviceCode and FromPac authentication require modern .NET Core dependencies (Azure.Identity).\n\n" +
                                "Please use Console Core project template (.NET Core) for DeviceCode or FromPac connection types, " +
                                "or select a different connection type.");
                            return false;
                        }
                    }
                    // Console Core project (.NET Core) does not support AD connection type (WCF/ServiceModel limitation)
                    if (ProjectType == ProjectType.ConsoleCore && CrmConnection != null)
                    {
                        var connectionType = CrmConnection.Type?.ToUpperInvariant();
                        if (connectionType == "AD")
                        {
                            await VS.MessageBox.ShowErrorAsync(
                                $"The connection type 'AD' is not supported for Console Core project template (.NET Core).\n\n" +
                                "AD authentication requires WCF/ServiceModel which is not fully supported on .NET Core.\n\n" +
                                "Please use Console project template (.NET Framework) for AD connection type, " +
                                "or select a different connection type.");
                            return false;
                        }
                    }
                    if (ProjectType == ProjectType.UiTest && CrmConnection != null)
                    {
                        var connectionType = CrmConnection.Type?.ToUpperInvariant();
                        if (connectionType != "OAUTH")
                        {
                            await VS.MessageBox.ShowErrorAsync(
                                $"The connection type '{CrmConnection.Type}' is not supported for UI Test project template.\n\n" +
                                "UI Test uses EasyRepro browser login and requires OAuth username/password credentials.\n\n" +
                                "Please select an OAuth connection.");
                            return false;
                        }
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

        private void Connection_Connected(object sender, EventArgs e)
        {
            LockUi(false);
        }
    }
}
