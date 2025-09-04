using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using ItemType = DynamicsCrm.DevKit.Shared.ItemType;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormProject : BaseDialogWindow
    {
        public ServiceClient ServiceClient => CONNECTION.ServiceClient;
        public CrmConnection CrmConnection => CONNECTION.CrmConnection;

        public string ProjectName => LabelProjectName.Content?.ToString() ?? string.Empty;

        //public string ItemName
        //{
        //    get
        //    {
        //        if (ItemType == ItemType.ResourceString) return ProjectName;
        //        return ((XrmEntity)ComboBoxProject.SelectedItem)?.Name ?? LabelProjectName.Content?.ToString();
        //    }
        //}

        //public DTE DTE { get; }
        //public XrmEntity SelectedClassType
        //{
        //    get
        //    {
        //        return ((XrmEntity)ComboBoxProject.SelectedItem);
        //    }
        //}

        //public string PluginMessage => SelectedClassType?.ServerMessage;
        //public string PluginStage => SelectedClassType?.ServerStage;
        //public string PluginExecution => SelectedClassType?.ServerMode;
        //public string PluginLogicalName => SelectedClassType?.LogicalName;

        private ItemType _ItemType = DynamicsCrm.DevKit.Shared.ItemType.None;
        private ItemType ItemType
        {
            get => _ItemType;
            set
            {
                //    void LateBoundItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Late-Bound-Class-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("Late Bound Class Item Template");
                //        ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                //        ComboBoxProject.IsEditable = false;
                //        TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                //        LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                //        LabelProjectItemName.Content = "Item Name";
                //    }
                //    void JsFormItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Form-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("JavaScript Form Item Template");
                //        ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                //        ComboBoxProject.IsEditable = false;
                //        TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                //        LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                //        LabelProjectItemName.Content = "Item Name";
                //    }
                //    void JsWebApiItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-WebApi-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("JavaScript WebApi Item Template");
                //        ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                //        ComboBoxProject.IsEditable = false;
                //        TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                //        LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                //        LabelProjectItemName.Content = "Item Name";
                //    }
                //    void WorkflowItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("Workflow Item Template");
                //        ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                //        TextboxProject.Visibility = System.Windows.Visibility.Visible;
                //        LabelProjectItemName.Content = "Class";
                //        LabelProjectName.Content = "_";
                //        buttonCustom.Visibility = System.Windows.Visibility.Visible;
                //    }
                //    void UiTestItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Ui-Test-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("Ui Test Item Template");
                //        ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                //        TextboxProject.Visibility = System.Windows.Visibility.Visible;
                //        LabelProjectItemName.Content = "Class";
                //        LabelProjectName.Content = "UiTest";
                //        buttonCustom.Visibility = System.Windows.Visibility.Visible;
                //    }
                //    void TestItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("Test Item Template");
                //        LabelProjectItemName.Content = "Class";
                //        LabelProjectName.Content = "";
                //        ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                //        ComboBoxProject.IsEditable = false;
                //        TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                //        buttonCustom.Visibility = System.Windows.Visibility.Visible;
                //    }
                //    void DownloadWebResourcesItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Download-WebResources-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("Download WebResources Item Template");
                //        LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                //        var items = new List<XrmEntity> { new XrmEntity { Name = $"download.webresources.bat" } };
                //        ComboBoxProject.DisplayMemberPath = "Name";
                //        ComboBoxProject.ItemsSource = items;
                //        ComboBoxProject.SelectedIndex = 0;
                //        ComboBoxProject.IsEnabled = false;
                //        LabelProjectName.Content = $"download.webresources.bat";
                //        LabelProjectItemName.Content = ".bat file";
                //    }
                //    void DataProviderItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Data-Provider-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("Data Provider Item Template");
                //        LabelProjectItemName.Content = "Data Source";
                //        ComboBoxProject.IsEditable = false;
                //        LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                //        buttonCustom.Visibility = System.Windows.Visibility.Visible;
                //    }
                //    void ResourceStringItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Resource-String-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("Resource String Item Template");
                //        LabelLanguage.Visibility = System.Windows.Visibility.Visible;
                //        ComboBoxLanguage.Visibility = System.Windows.Visibility.Visible;
                //        LabelProjectItemName.Content = "Resource";
                //        ComboBoxProject.DisplayMemberPath = "Name";
                //        ComboBoxProject.ItemsSource = VsixHelper.GetAllExistingResource();
                //    }
                //    void DownloadReportsItem()
                //    {
                //        HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Download-Reports-Item-Template");
                //        HELP.Inlines.Clear();
                //        HELP.Inlines.Add("Download Reports Item Template");
                //        LabelProjectName.Visibility = System.Windows.Visibility.Collapsed;
                //        var items = new List<XrmEntity> { new XrmEntity { Name = $"download.reports.bat" } };
                //        ComboBoxProject.DisplayMemberPath = "Name";
                //        ComboBoxProject.ItemsSource = items;
                //        ComboBoxProject.SelectedIndex = 0;
                //        ComboBoxProject.IsEnabled = false;
                //        LabelProjectName.Content = $"download.reports.bat";
                //        LabelProjectItemName.Content = ".bat file";
                //    }
                //    _ItemType = value;
                //    switch (_ItemType)
                //    {
                //        case ItemType.LateBound:
                //            LateBoundItem();
                //            break;
                //        case ItemType.JsForm:
                //            JsFormItem();
                //            break;
                //        case ItemType.JsWebApi:
                //            JsWebApiItem();
                //            break;
                //        case ItemType.Workflow:
                //            WorkflowItem();
                //            break;
                //        case ItemType.UiTest:
                //            UiTestItem();
                //            break;
                //        case ItemType.Test:
                //            TestItem();
                //            break;
                //        case ItemType.DownloadWebResources:
                //            DownloadWebResourcesItem();
                //            break;
                //        case ItemType.DataProvider:
                //            DataProviderItem();
                //            break;
                //        case ItemType.ResourceString:
                //            ResourceStringItem();
                //            break;
                //        case ItemType.DownloadReports:
                //            DownloadReportsItem();
                //            break;
                //    }
                //}
            }
        }
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
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
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
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{solutionName}.Console";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task ConsoleCoreProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Console-Core-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Console Core Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{solutionName}.ConsoleCore";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task ServerProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Server-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Server Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{solutionName}";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                //void PluginProject()
                //{
                //    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Plugin-Project-Template");
                //    HELP.Inlines.Clear();
                //    HELP.Inlines.Add("Plugin Project Template");
                //    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                //    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                //    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Plugin";
                //    LabelProjectName.Tag = LabelProjectName.Content;
                //}
                //void WorkflowProject()
                //{
                //    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Workflow-Project-Template");
                //    HELP.Inlines.Clear();
                //    HELP.Inlines.Add("Workflow Project Template");
                //    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                //    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                //    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Workflow";
                //    LabelProjectName.Tag = LabelProjectName.Content;
                //}
                //void CustomActionProject()
                //{
                //    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Custom-Action-Project-Template");
                //    HELP.Inlines.Clear();
                //    HELP.Inlines.Add("Custom Action Project Template");
                //    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                //    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                //    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.CustomAction";
                //    LabelProjectName.Tag = LabelProjectName.Content;
                //}
                //void CustomApiProject()
                //{
                //    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Custom-Api-Project-Template");
                //    HELP.Inlines.Clear();
                //    HELP.Inlines.Add("Custom Api Project Template");
                //    ComboBoxProject.Visibility = System.Windows.Visibility.Visible;
                //    TextboxProject.Visibility = System.Windows.Visibility.Hidden;
                //    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.CustomApi";
                //    LabelProjectName.Tag = LabelProjectName.Content;
                //}
                //void DataProviderProject()
                //{
                //    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Data-Provider-Project-Template");
                //    HELP.Inlines.Clear();
                //    HELP.Inlines.Add("Data Provider Project Template");
                //    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                //    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                //    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.DataProvider";
                //    LabelProjectName.Tag = LabelProjectName.Content;
                //}
                async Task WebResourceProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/WebResource-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("WebResource Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{solutionName}.WebResource";
                    LabelProjectName.Tag = LabelProjectName.Content;
                }
                async Task SolutionPackagerProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Solution-Packager-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Solution Packager Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
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
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
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
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{solutionName}.Test";
                    LabelProjectName.Tag = $"{solutionName}";
                }
                async Task UiTestAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Ui-Test-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Ui Test Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{solutionName}.UiTest";
                    LabelProjectName.Tag = $"{solutionName}";
                }
                async Task SharedTestProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Shared-Test-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Shared Test Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    TextboxProject.IsEnabled = false;
                    TextboxProject.Text = $"{solutionName}.Shared.Test";
                    LabelProjectName.Content = $"{solutionName}.Shared.Test";
                    LabelProjectName.Tag = LabelProjectName.Content;

                }
                //void ReportProject()
                //{
                //    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Report-Project-Template");
                //    HELP.Inlines.Clear();
                //    HELP.Inlines.Add("Report Project Template");
                //    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                //    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                //    LabelProjectName.Content = $"{VsixHelper.GetSolutionName()}.Report";
                //    LabelProjectName.Tag = LabelProjectName.Content;
                //}
                async Task PackageProjectAsync()
                {
                    var solutionName = await VsixHelper.GetSolutionNameAsync();
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Package-Project-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Package Project Template");
                    ComboBoxProject.Visibility = System.Windows.Visibility.Hidden;
                    TextboxProject.Visibility = System.Windows.Visibility.Visible;
                    LabelProjectName.Content = $"{solutionName}.{ProjectType.Package}";
                    LabelProjectName.Tag = LabelProjectName.Content;
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
                        //case ProjectType.Plugin:
                        //    PluginProject();
                        //    break;
                        //case ProjectType.Workflow:
                        //    WorkflowProject();
                        //    break;
                        //case ProjectType.CustomAction:
                        //    CustomActionProject();
                        //    break;
                        //case ProjectType.CustomApi:
                        //    CustomApiProject();
                        //    break;
                        //case ProjectType.DataProvider:
                        //    DataProviderProject();
                        //    break;
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
                        //case ProjectType.Report:
                        //    ReportProject();
                        //    break;
                        case ProjectType.Package:
                            await PackageProjectAsync();
                            break;
                    }
                });
            }
        }

        private void ButtonCustom_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            //if (PanelCustom.Visibility != System.Windows.Visibility.Hidden)
            //{
            //    if (IsValid())
            //    {
            //        var T4Context = GetT4Context();
            //        var form = new FormCustom(ItemType, T4Context, TemplateTitle);
            //        form.ShowDialog();
            //        LoadCustomTemplates();
            //    }
            //}
            //bool IsValid()
            //{
            //    if (ItemType == ItemType.Workflow || ItemType == ItemType.Test || ItemType == ItemType.UiTest)
            //    {
            //        if (ItemType == ItemType.Test && ComboBoxProject.SelectedItem == null)
            //        {
            //            VS.MessageBox.ShowError($"Please select class first.");
            //            return false;
            //        }
            //    }
            //    return true;
            //}
        }

        private T4Context GetT4Context()
        {
            //var solutionName = VsixHelper.GetSolutionName();
            //var pluginSharedNameSpace = $"{solutionName}.Shared";
            //var pluginNameSpace = string.Empty;
            //var serverType = this.SelectedClassType?.ServerType;
            //if (serverType == "Plugin" || serverType == "Workflow" || serverType == "CustomAction" || serverType == "CustomApi" || serverType == "DataProvider")
            //    pluginNameSpace = NameSpace.Contains($".{serverType}.") ? NameSpace.Replace($".{serverType}.", $".{serverType}") : NameSpace;
            //else
            //    pluginNameSpace = NameSpace.Contains($".{ItemType.Plugin}.") ? NameSpace.Replace($".{ItemType.Plugin}.", $".{ItemType.Plugin}") : NameSpace;
            //if (ItemType == ItemType.Workflow)
            //{
            //    var t4Context = new T4Context
            //    {
            //        PluginSharedNameSpace = pluginSharedNameSpace,
            //        PluginNameSpace = pluginNameSpace,
            //        Class = this.ItemName
            //    };
            //    return t4Context;
            //}
            //else if (ItemType == ItemType.DataProvider)
            //{
            //    var t4Context = new T4Context
            //    {
            //        PluginSharedNameSpace = pluginSharedNameSpace,
            //        PluginNameSpace = pluginNameSpace,
            //        Class = this.ItemName,
            //        DataSource = this.ItemName
            //    };
            //    return t4Context;
            //}
            //else if (ItemType == ItemType.Test || ItemType == ItemType.UiTest)
            //{
            //    var t4Context = new T4Context
            //    {
            //        PluginSharedNameSpace = pluginSharedNameSpace,
            //        PluginNameSpace = pluginNameSpace,
            //        Class = this.ItemName,
            //        DataSource = this.ItemName,
            //        ProxyTypes = $"{solutionName}.ProxyTypes",
            //        PluginStage = this.PluginStage,
            //        PluginMessage = this.PluginMessage,
            //        PluginExecution = this.PluginExecution,
            //        PluginLogicalName = this.PluginLogicalName,
            //    };
            //    return t4Context;
            //}
            return new T4Context();
        }

        public string NameSpace { get; set; }

        public FormProject(ProjectType projectType)
        {
            InitializeComponent();
            ProjectType = projectType;
        }

        public FormProject(ItemType itemType)
        {
            InitializeComponent();
            //ItemType = itemType;
            //DTE = dte;
            //CONNECTION.IsUseOOBConnection = true; // Default to true for ItemType constructor
            //if (ItemType == ItemType.Workflow || ItemType == ItemType.Test || ItemType == ItemType.UiTest)
            //{
            //    LoadCustomTemplates();
            //}
            //else
            //    PanelCustom.Visibility = System.Windows.Visibility.Hidden;

        }

        public string TemplateTitle
        {
            get
            {
                //var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
                //return selected.Title;
                return string.Empty;
            }
        }
        private void LoadCustomTemplates()
        {
            //var templates = GetCustomTemplates();
            //ComboBoxTemplate.ItemsSource = null;
            //ComboBoxTemplate.ItemsSource = templates;
            //ComboBoxTemplate.DisplayMemberPath = "Title";
            //ComboBoxTemplate.SelectedItem = templates.FirstOrDefault(x => x.IsDefault);
            //if (ComboBoxTemplate.SelectedItem == null) ComboBoxTemplate.SelectedIndex = 0;

            //List<CustomTemplate> GetCustomTemplates()
            //{
            //    var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
            //    var CachedJson = new CachedJson();
            //    if (File.Exists(fileName)) CachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
            //    var customTemplates = CachedJson.CustomTemplates.Where(x => x.Type == ItemType.ToString()).ToList() ?? new List<CustomTemplate>();
            //    foreach (var customTemplate in customTemplates)
            //    {
            //        customTemplate.Body = Utility.Decompress(customTemplate.Body);
            //    }
            //    if (ItemType == ItemType.Test)
            //    {
            //        customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = $"Default - {ItemType.CustomApi.ToString()}", Body = null, IsDefault = false });
            //        customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = $"Default - {ItemType.CustomAction.ToString()}", Body = null, IsDefault = false });
            //        customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = $"Default - {ItemType.Workflow.ToString()}", Body = null, IsDefault = false });
            //        customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = $"Default - {ItemType.Plugin.ToString()}", Body = null, IsDefault = false });
            //    }
            //    else
            //        customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = "Default", Body = null, IsDefault = false });
            //    return customTemplates;
            //}
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
                if (ItemType != ItemType.None)
                {
                    
                }
                return true;
            }
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = ButtonOK_ClickAsync();            
        }

        private void Connection_Connected(object sender, System.EventArgs e)
        {
            //if (
            //    ProjectType == ProjectType.Plugin ||
            //    ProjectType == ProjectType.Server ||
            //    ProjectType == ProjectType.Package ||
            //    ProjectType == ProjectType.Workflow ||
            //    ProjectType == ProjectType.CustomAction ||
            //    ProjectType == ProjectType.CustomApi ||
            //    ItemType == ItemType.LateBound ||
            //    ItemType == ItemType.JsForm ||
            //    ItemType == ItemType.JsWebApi
            //    )
            //{
            //    progressBar.Visibility = System.Windows.Visibility.Visible;
            //    _ = Task.Factory.StartNew(() =>
            //    {
            //        ThreadHelper.JoinableTaskFactory.Run(async delegate
            //        {
            //            var items = await XrmHelper.GetAllEntities(CrmServiceClient);
            //            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            //            ComboBoxProject.DisplayMemberPath = "Name";
            //            ComboBoxProject.ItemsSource = items;
            //            buttonOK.IsEnabled = items.Count > 0;
            //            progressBar.Visibility = System.Windows.Visibility.Hidden;
            //        });
            //    }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            //}
            //else if (
            //    ProjectType == ProjectType.Test
            //    )
            //{
            //    var items = VsixHelper.GetAllProjects();
            //    ComboBoxProject.DisplayMemberPath = "Name";
            //    ComboBoxProject.ItemsSource = items;
            //    buttonOK.IsEnabled = items.Count > 0;
            //}
            //else if (
            //    ItemType == ItemType.Test
            //    )
            //{
            //    var items = VsixHelper.GetTestClasses(DTE);
            //    ComboBoxProject.DisplayMemberPath = "Name";
            //    ComboBoxProject.ItemsSource = items;
            //    buttonOK.IsEnabled = items.Count > 0;
            //}
            //else if (ItemType == ItemType.DataProvider)
            //{
            //    progressBar.Visibility = System.Windows.Visibility.Visible;
            //    _ = Task.Factory.StartNew(() =>
            //    {
            //        ThreadHelper.JoinableTaskFactory.Run(async delegate
            //        {
            //            var items = XrmHelper.GetAllDataSource(CrmServiceClient);
            //            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            //            ComboBoxProject.DisplayMemberPath = "Name";
            //            ComboBoxProject.ItemsSource = items;
            //            buttonOK.IsEnabled = items.Count > 0;
            //            progressBar.Visibility = System.Windows.Visibility.Hidden;
            //        });
            //    }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            //}
            //else if (ItemType == ItemType.ResourceString)
            //{
            //    progressBar.Visibility = System.Windows.Visibility.Visible;
            //    _ = Task.Factory.StartNew(() =>
            //    {
            //        ThreadHelper.JoinableTaskFactory.Run(async delegate
            //        {
            //            var items = XrmHelper.GetProvisionedLanguages(CrmServiceClient);
            //            await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
            //            ComboBoxLanguage.DisplayMemberPath = "Name";
            //            ComboBoxLanguage.ItemsSource = items;
            //            buttonOK.IsEnabled = items.Count > 0;
            //            progressBar.Visibility = System.Windows.Visibility.Hidden;
            //        });
            //    }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            //}
        }

        private void TextboxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            if (TextboxProject.Text.Length == 0)
            {
                //if (ProjectType == ProjectType.UiTest)
                //    LabelProjectName.Content = $"{LabelProjectName?.Tag}.UiTest";
                //else if (ItemType == ItemType.Workflow)
                //    LabelProjectName.Content = $"_";
                //else if (ItemType == ItemType.UiTest)
                //    LabelProjectName.Content = $"_UiTest";
                //else
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
                //else if (ItemType == ItemType.Workflow)
                //    LabelProjectName.Content = $"{TextboxProject?.Text}";
                //else if (ItemType == ItemType.UiTest)
                //    LabelProjectName.Content = $"{TextboxProject?.Text}UiTest";
                else
                    LabelProjectName.Content = $"{LabelProjectName?.Tag}.{TextboxProject?.Text}";
            }
        }

        private void ComboBoxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            //if (ComboBoxProject.IsEnabled)
            //{
            //    if (ItemType == ItemType.ResourceString)
            //    {
            //        UpdateResouceString();
            //    }
            //    else
            //    {
            //        if (ComboBoxProject.SelectedItem == null)
            //        {
            //            if (ComboBoxProject.Text.Length == 0)
            //                LabelProjectName.Content = $"{LabelProjectName?.Tag}";
            //            else
            //                LabelProjectName.Content = $"{LabelProjectName?.Tag}.{ComboBoxProject?.Text}";
            //        }
            //        else
            //        {
            //            LabelProjectName.Content = $"{LabelProjectName?.Tag}.{((XrmEntity)ComboBoxProject.SelectedItem)?.Name}";
            //        }
            //    }
            //}
        }

        private void ComboBoxProject_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            //if (ComboBoxProject.IsEnabled)
            //{
            //    if (ItemType == ItemType.ResourceString)
            //    {
            //        UpdateResouceString();
            //    }
            //    else
            //    {
            //        if (ComboBoxProject.SelectedItem == null)
            //            LabelProjectName.Content = $"{LabelProjectName?.Tag}.{ProjectType}";
            //        else
            //        {
            //            if (ItemType == ItemType.Test)
            //                LabelProjectName.Content = $"{((XrmEntity)ComboBoxProject.SelectedItem)?.Name}Test";
            //            else
            //                LabelProjectName.Content = $"{((XrmEntity)ComboBoxProject.SelectedItem)?.Name}.{ProjectType}";
            //        }
            //    }
            //}
        }

        private void UpdateResouceString()
        {
            //var selectedLanguage = (NameValue)ComboBoxLanguage.SelectedItem;
            //LabelProjectName.Content = $"{ComboBoxProject.Text}.{selectedLanguage.Value}.resx";
        }

        private void ComboBoxLanguage_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            //UpdateResouceString();
        }

        private void EditProjectName_Click(object sender, RoutedEventArgs e)
        {
            if (TextboxProject.IsEnabled == false)
            {
                return;
            }
            // Enter edit mode
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
