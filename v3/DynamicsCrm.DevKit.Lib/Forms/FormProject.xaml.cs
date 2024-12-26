using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.VisualStudio.Shell;
using System.Collections.Generic;
using ItemType = DynamicsCrm.DevKit.Shared.ItemType;
using EnvDTE;
using System;
using System.Linq;
using System.IO;

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
                return LabelProjectName.Content?.ToString();
            }
        }
        public string ItemName
        {
            get
            {
                if (ItemType == ItemType.ResourceString) return ProjectName;
                return ((XrmEntity)ComboBoxProject.SelectedItem)?.Name ?? LabelProjectName.Content?.ToString();
            }
        }
        public bool IsOOBConnection => CONNECTION.IsOOBConnection;
        public CrmServiceClient CrmServiceClient => CONNECTION.CrmServiceClient;
        public string DataverseConnectionString => CONNECTION.DataverseConnectionString;
        public CrmConnection CrmConnection => CONNECTION.CrmConnection;
        public DTE DTE { get; }
        public XrmEntity SelectedClassType
        {
            get
            {
                return ((XrmEntity)ComboBoxProject.SelectedItem);
            }
        }

        public string PluginMessage => SelectedClassType?.ServerMessage;
        public string PluginStage => SelectedClassType?.ServerStage;
        public string PluginExecution => SelectedClassType?.ServerMode;
        public string PluginLogicalName => SelectedClassType?.LogicalName;

        private ItemType _ItemType = DynamicsCrm.DevKit.Shared.ItemType.None;
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
                void JsWebApiItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-WebApi-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("JavaScript WebApi Item Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                    ComboBoxProject.IsEditable = false;
                    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                    LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                    LabelProjectItemName.Content = "Item Name";
                }
                void WorkflowItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Workflow Item Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectItemName.Content = "Class";
                    LabelProjectName.Content = "_";
                    buttonCustom.Visibility = System.Windows.Visibility.Visible;
                }
                void UiTestItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Ui-Test-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Ui Test Item Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectItemName.Content = "Class";
                    LabelProjectName.Content = "UiTest";
                    buttonCustom.Visibility = System.Windows.Visibility.Visible;
                }
                void TestItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Test Item Template");
                    LabelProjectItemName.Content = "Class";
                    LabelProjectName.Content = "";
                    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                    ComboBoxProject.IsEditable = false;
                    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                    buttonCustom.Visibility = System.Windows.Visibility.Visible;
                }
                void DownloadWebResourcesItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Download-WebResources-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Download WebResources Item Template");
                    LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                    var items = new List<XrmEntity> { new XrmEntity { Name = $"download.webresources.bat" } };
                    ComboBoxProject.DisplayMemberPath = "Name";
                    ComboBoxProject.ItemsSource = items;
                    ComboBoxProject.SelectedIndex = 0;
                    ComboBoxProject.IsEnabled = false;
                    LabelProjectName.Content = $"download.webresources.bat";
                    LabelProjectItemName.Content = ".bat file";
                }
                void DataProviderItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Data-Provider-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Data Provider Item Template");
                    LabelProjectItemName.Content = "Data Source";
                    ComboBoxProject.IsEditable = false;
                    LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                    buttonCustom.Visibility = System.Windows.Visibility.Visible;
                }
                void ResourceStringItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Resource-String-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Resource String Item Template");
                    LabelLanguage.Visibility = System.Windows.Visibility.Visible;
                    ComboBoxLanguage.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectItemName.Content = "Resource";
                    ComboBoxProject.DisplayMemberPath = "Name";
                    ComboBoxProject.ItemsSource = VsixHelper.GetAllExistingResource();
                }
                void DownloadReportsItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Download-Reports-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Download Reports Item Template");
                    LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                    var items = new List<XrmEntity> { new XrmEntity { Name = $"download.reports.bat" } };
                    ComboBoxProject.DisplayMemberPath = "Name";
                    ComboBoxProject.ItemsSource = items;
                    ComboBoxProject.SelectedIndex = 0;
                    ComboBoxProject.IsEnabled = false;
                    LabelProjectName.Content = $"download.reports.bat";
                    LabelProjectItemName.Content = ".bat file";
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
                    case ItemType.JsWebApi:
                        JsWebApiItem();
                        break;
                    case ItemType.Workflow:
                        WorkflowItem();
                        break;
                    case ItemType.UiTest:
                        UiTestItem();
                        break;
                    case ItemType.Test:
                        TestItem();
                        break;
                    case ItemType.DownloadWebResources:
                        DownloadWebResourcesItem();
                        break;
                    case ItemType.DataProvider:
                        DataProviderItem();
                        break;
                    case ItemType.ResourceString:
                        ResourceStringItem();
                        break;
                    case ItemType.DownloadReports:
                        DownloadReportsItem();
                        break;
                }
            }
        }
        private ProjectType _ProjectType = ProjectType.None;
        private ProjectType ProjectType {
            get => _ProjectType;
            set
            {
                void SharedProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Shared Project Template");
                    LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                    var items = new List<XrmEntity> { new XrmEntity { Name = $"{VsixHelper.GetSolutionName()}.Shared" } };
                    ComboBoxProject.DisplayMemberPath = "Name";
                    ComboBoxProject.ItemsSource = items;
                    ComboBoxProject.SelectedIndex = 0;
                    ComboBoxProject.IsEnabled = false;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Shared";
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
                void SharedTestProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Test-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Shared Test Project Template");
                    LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                    var items = new List<XrmEntity> { new XrmEntity { Name = $"{VsixHelper.GetSolutionName()}.Shared.Test" } };
                    ComboBoxProject.DisplayMemberPath = "Name";
                    ComboBoxProject.ItemsSource = items;
                    ComboBoxProject.SelectedIndex = 0;
                    ComboBoxProject.IsEnabled = false;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Shared.Test";
                }
                void ReportProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Report-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Report Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Report";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                void PackageProject()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Package-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Package Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Package";
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
                    case ProjectType.SharedTest:
                        SharedTestProject();
                        break;
                    case ProjectType.Report:
                        ReportProject();
                        break;
                    case ProjectType.Package:
                        PackageProject();
                        break;
                }
            }
        }

        private void ButtonCustom_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ItemType != ItemType.None)
            {
                if (IsValid())
                {
                    var T4Context = GetT4Context();
                    var form = new FormCustom(ItemType, T4Context, TemplateTitle);
                    form.ShowDialog();
                    LoadCustomTemplates();
                }
            }
        }

        private T4Context GetT4Context()
        {
            var solutionName = VsixHelper.GetSolutionName();
            var pluginSharedNameSpace = $"{solutionName}.Shared";
            var pluginNameSpace = string.Empty;
            var serverType = this.SelectedClassType?.ServerType;
            if (serverType == "Plugin" || serverType == "Workflow" || serverType == "CustomAction" || serverType == "CustomApi" || serverType == "DataProvider")
                pluginNameSpace = NameSpace.Contains($".{serverType}.") ? NameSpace.Replace($".{serverType}.", $".{serverType}") : NameSpace;
            else
                pluginNameSpace = NameSpace.Contains($".{ItemType.Plugin}.") ? NameSpace.Replace($".{ItemType.Plugin}.", $".{ItemType.Plugin}") : NameSpace;
            if (ItemType == ItemType.Workflow)
            {
                var t4Context = new T4Context
                {
                    PluginSharedNameSpace = pluginSharedNameSpace,
                    PluginNameSpace = pluginNameSpace,
                    Class = this.ItemName
                };
                return t4Context;
            }
            else if (ItemType == ItemType.DataProvider)
            {
                var t4Context = new T4Context
                {
                    PluginSharedNameSpace = pluginSharedNameSpace,
                    PluginNameSpace = pluginNameSpace,
                    Class = this.ItemName,
                    DataSource = this.ItemName
                };
                return t4Context;
            }
            else if (ItemType == ItemType.Test)
            {
                var t4Context = new T4Context
                {
                    PluginSharedNameSpace = pluginSharedNameSpace,
                    PluginNameSpace = pluginNameSpace,
                    Class = this.ItemName,
                    DataSource = this.ItemName,
                    ProxyTypes = $"{solutionName}.ProxyTypes",
                    PluginStage = this.PluginStage,
                    PluginMessage = this.PluginMessage,
                    PluginExecution = this.PluginExecution,
                    PluginLogicalName = this.PluginLogicalName,
                };
                return t4Context;
            }
            return new T4Context();
        }

        public string NameSpace { get; set; }

        public FormProject(ProjectType projectType)
        {
            InitializeComponent();
            ProjectType = projectType;
            PanelCustom.Visibility = System.Windows.Visibility.Hidden;
        }

        public FormProject(ItemType itemType, DTE dte = null)
        {
            InitializeComponent();
            ItemType = itemType;
            DTE = dte;
            if (ItemType == ItemType.Plugin ||
                ItemType == ItemType.Workflow ||
                ItemType == ItemType.CustomAction ||
                ItemType == ItemType.CustomApi ||
                ItemType == ItemType.Test ||
                ItemType == ItemType.UiTest
                )
            {
                LoadCustomTemplates();
            }
            else
                PanelCustom.Visibility = System.Windows.Visibility.Hidden;

        }

        public string TemplateTitle
        {
            get
            {
                var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
                return selected.Title;
            }
        }
        private void LoadCustomTemplates()
        {
            var templates = GetCustomTemplates();
            ComboBoxTemplate.ItemsSource = null;
            ComboBoxTemplate.ItemsSource = templates;
            ComboBoxTemplate.DisplayMemberPath = "Title";
            ComboBoxTemplate.SelectedItem = templates.FirstOrDefault(x => x.IsDefault);
            if (ComboBoxTemplate.SelectedItem == null) ComboBoxTemplate.SelectedIndex = 0;

            List<CustomTemplate> GetCustomTemplates()
            {
                var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                var CachedJson = new CachedJson();
                if (File.Exists(fileName)) CachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
                var customTemplates = CachedJson.CustomTemplates.Where(x => x.Type == ItemType.ToString()).ToList() ?? new List<CustomTemplate>();
                foreach (var customTemplate in customTemplates)
                {
                    customTemplate.Body = Utility.Decompress(customTemplate.Body);
                }
                if (ItemType == ItemType.Test)
                {
                    customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = $"Default - {ItemType.CustomApi.ToString()}", Body = null, IsDefault = false });
                    customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = $"Default - {ItemType.CustomAction.ToString()}", Body = null, IsDefault = false });
                    customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = $"Default - {ItemType.Workflow.ToString()}", Body = null, IsDefault = false });
                    customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = $"Default - {ItemType.Plugin.ToString()}", Body = null, IsDefault = false });
                }
                else
                    customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = "Default", Body = null, IsDefault = false });
                return customTemplates;
            }
        }

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
        }

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
            if (VsixHelper.IsExistItem(ProjectName))
            {
                VS.MessageBox.ShowError($"Item: {ProjectName} exist.");
                return false;
            }
            if (ComboBoxProject.IsEnabled && ComboBoxProject.SelectedItem == null)
            {
                VS.MessageBox.ShowError("Please select item.");
                return false;
            }
            return true;
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (IsValid())
            {
                DialogResult = true;
            }
        }

        private void Connection_Connected(object sender, System.EventArgs e)
        {
            if (
                ProjectType == ProjectType.Plugin ||
                ProjectType == ProjectType.Server ||
                ProjectType == ProjectType.Package ||
                ProjectType == ProjectType.Workflow ||
                ProjectType == ProjectType.CustomAction ||
                ProjectType == ProjectType.CustomApi ||
                ItemType == ItemType.LateBound ||
                ItemType == ItemType.JsForm ||
                ItemType == ItemType.JsWebApi
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
            else if (
                ItemType == ItemType.Test
                )
            {
                var items = VsixHelper.GetTestClasses(DTE);
                ComboBoxProject.DisplayMemberPath = "Name";
                ComboBoxProject.ItemsSource = items;
                buttonOK.IsEnabled = items.Count > 0;
            }
            else if (ItemType == ItemType.DataProvider)
            {
                progressBar.Visibility = System.Windows.Visibility.Visible;
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async delegate
                    {
                        var items = XrmHelper.GetAllDataSource(CrmServiceClient);
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        ComboBoxProject.DisplayMemberPath = "Name";
                        ComboBoxProject.ItemsSource = items;
                        buttonOK.IsEnabled = items.Count > 0;
                        progressBar.Visibility = System.Windows.Visibility.Hidden;
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
            else if (ItemType == ItemType.ResourceString)
            {
                progressBar.Visibility = System.Windows.Visibility.Visible;
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async delegate
                    {
                        var items = XrmHelper.GetProvisionedLanguages(CrmServiceClient);
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        ComboBoxLanguage.DisplayMemberPath = "Name";
                        ComboBoxLanguage.ItemsSource = items;
                        buttonOK.IsEnabled = items.Count > 0;
                        progressBar.Visibility = System.Windows.Visibility.Hidden;
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
        }

        private void TextboxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            if (TextboxProject.Text.Length == 0)
            {
                if (ProjectType == ProjectType.UiTest)
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.UiTest";
                else if (ItemType == ItemType.Workflow)
                    LabelProjectName.Content = $"_";
                else if (ItemType == ItemType.UiTest)
                    LabelProjectName.Content = $"_UiTest";
                else
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}";
            }
            else
            {
                if (ProjectType == ProjectType.UiTest)
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}.UiTest";
                else if (ItemType == ItemType.Workflow)
                    LabelProjectName.Content = $"{TextboxProject?.Text}";
                else if (ItemType == ItemType.UiTest)
                    LabelProjectName.Content = $"{TextboxProject?.Text}UiTest";
                else
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}";
            }
        }

        private void ComboBoxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            if (ComboBoxProject.IsEnabled)
            {
                if (ItemType == ItemType.ResourceString)
                {
                    UpdateResouceString();
                }
                else
                {
                    if (ComboBoxProject.SelectedItem == null)
                    {
                        if (ComboBoxProject.Text.Length == 0)
                            LabelProjectName.Content = $"{LabelProjectName?.Tag}";
                        else
                            LabelProjectName.Content = $"{LabelProjectName?.Tag}.{ComboBoxProject?.Text}";
                    }
                    else
                    {
                        LabelProjectName.Content = $"{LabelProjectName?.Tag}.{((XrmEntity)ComboBoxProject.SelectedItem)?.Name}";
                    }
                }
            }
        }

        private void ComboBoxProject_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            if (ComboBoxProject.IsEnabled)
            {
                if (ItemType == ItemType.ResourceString)
                {
                    UpdateResouceString();
                }
                else
                {
                    if (ComboBoxProject.SelectedItem == null)
                        LabelProjectName.Content = $"{LabelProjectName?.Tag}.{ProjectType}";
                    else
                    {
                        if (ItemType == ItemType.Test)
                            LabelProjectName.Content = $"{((XrmEntity)ComboBoxProject.SelectedItem)?.Name}Test";
                        else
                            LabelProjectName.Content = $"{((XrmEntity)ComboBoxProject.SelectedItem)?.Name}.{ProjectType}";
                    }
                }
            }
        }

        private void UpdateResouceString()
        {
            var selectedLanguage = (NameValue)ComboBoxLanguage.SelectedItem;
            LabelProjectName.Content = $"{ComboBoxProject.Text}.{selectedLanguage.Value}.resx";
        }

        private void ComboBoxLanguage_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            UpdateResouceString();
        }
    }
}
