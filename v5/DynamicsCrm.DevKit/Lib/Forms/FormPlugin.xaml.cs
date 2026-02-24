using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Input;
using ItemType = DynamicsCrm.DevKit.Shared.ItemType;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormPlugin : BaseDialogWindow
    {
        private const string TAB = "\t";
        private const string NEW_LINE = "\r\n";
        public ServiceClient ServiceClient => CONNECTION.ServiceClient;
        public CrmConnection CrmConnection => CONNECTION.CrmConnection;
        private List<CustomTemplate> CustomTemplates { get; set; } = new List<CustomTemplate>();
        public string Class =>  TextboxClass.Text.EndsWith("Test") ? TextboxClass.Text.Substring(0, TextboxClass.Text.Length - 4) : TextboxClass.Text ?? string.Empty;
        public string PluginSchemaName
        {
            get
            {
                if (ComboBoxEntity.Visibility == System.Windows.Visibility.Collapsed) return string.Empty;
                if (ComboBoxEntity?.SelectedItem is XrmEntity entity)
                    return entity.SchemaName ?? string.Empty;
                return string.Empty;
            }
        }
        public string DataSource => PluginLogicalName;
        public string PluginMessage
        {
            get
            {
                if (ComboBoxMessage.Visibility == System.Windows.Visibility.Collapsed) return string.Empty;
                if (ComboBoxMessage?.SelectedItem is NameValue message)
                    return message.Name ?? string.Empty;
                return string.Empty;
            }
        }
        public string PluginStage
        {
            get
            {
                if (ComboBoxStage.Visibility == System.Windows.Visibility.Collapsed) return string.Empty;
                if (ComboBoxStage?.SelectedItem is NameValue stage)
                    return stage.Name ?? string.Empty;
                return string.Empty;
            }
        }
        public string PluginExecution
        {
            get
            {
                if (ComboBoxExecution.Visibility == System.Windows.Visibility.Collapsed) return string.Empty;
                if (ComboBoxExecution?.SelectedItem is NameValue execution)
                    return execution.Name ?? string.Empty;
                return string.Empty;
            }
        }
        public string PluginLogicalName
        {
            get
            {
                if (ComboBoxEntity.Visibility == System.Windows.Visibility.Collapsed) return string.Empty;
                var selected = (XrmEntity)ComboBoxEntity.SelectedItem;
                return selected.LogicalName ?? string.Empty;
            }
        }

        public string LanguageCode => PluginLogicalName;
        public string BatFileName => PluginLogicalName;

        public int PluginOrder
        {
            get
            {
                return ThreadHelper.JoinableTaskFactory.Run(async () => await VsixHelper.PluginOrderAsync(Class));
            }
        }
        public string PluginComment
        {
            get
            {
                return ThreadHelper.JoinableTaskFactory.Run(async () => await new MetadataService(ServiceClient).GetPluginCommentAsync(PluginLogicalName, PluginMessage));
            }
        }

        private ItemType _ItemType = DynamicsCrm.DevKit.Shared.ItemType.None;

        private ItemType ItemType
        {
            get => _ItemType;
            set
            {
                void PluginItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Plugin-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Plugin Item Template");
                }
                void CustomActionItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Action-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Action Item Template");
                }
                void CustomApiItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Api-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Api Template");
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
                }
                void WorkflowItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Workflow Item Template");
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelEntity.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxEntity.Visibility = System.Windows.Visibility.Collapsed;
                    LabelMessage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxMessage.Visibility = System.Windows.Visibility.Collapsed;
                }
                void DataProviderItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Data-Provider-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Data Provider Item Template");
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelMessage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxMessage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelClass.Visibility = System.Windows.Visibility.Collapsed;
                    TextboxClass.Visibility = System.Windows.Visibility.Collapsed;
                    LabelEntity.Content = "Data Source";
                    TemplatePanel.Visibility = System.Windows.Visibility.Hidden;
                }
                void UiTestItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Ui-Test-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Ui Test Item Template");
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelEntity.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxEntity.Visibility = System.Windows.Visibility.Collapsed;
                    LabelMessage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxMessage.Visibility = System.Windows.Visibility.Collapsed;
                }
                void TestItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Test Item Template");
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelEntity.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxEntity.Visibility = System.Windows.Visibility.Collapsed;
                    LabelMessage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxMessage.Visibility = System.Windows.Visibility.Collapsed;
                }
                void ResourceStringItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Resource-String-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Resource String Item Template");
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelMessage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxMessage.Visibility = System.Windows.Visibility.Collapsed;
                    TemplatePanel.Visibility = System.Windows.Visibility.Hidden;
                    LabelClass.Content = "Resouce";
                    LabelEntity.Content = "Language";
                }
                void BatFileItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Bat-File-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Bat File Item Template");
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelMessage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxMessage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelClass.Visibility = System.Windows.Visibility.Collapsed;
                    TextboxClass.Visibility = System.Windows.Visibility.Collapsed;
                    LabelEntity.Content = "Bat File";
                    TemplatePanel.Visibility = System.Windows.Visibility.Hidden;
                }
                _ItemType = value;
                switch (_ItemType)
                {
                    case ItemType.Plugin:
                        PluginItem();
                        break;
                    case ItemType.CustomAction:
                        CustomActionItem();
                        break;
                    case ItemType.CustomApi:
                        CustomApiItem();
                        break;
                    case ItemType.Workflow:
                        WorkflowItem();
                        break;
                    case ItemType.DataProvider:
                        DataProviderItem();
                        break;
                    case ItemType.UiTest:
                        UiTestItem();
                        break;
                    case ItemType.Test:
                        TestItem();
                        break;
                    case ItemType.ResourceString:
                        ResourceStringItem();
                        break;
                    case ItemType.BatFile:
                        BatFileItem();
                        break;
                }
            }
        }

        public string PluginNameSpace { get; set; }

        public FormPlugin(ItemType itemType, string nameSpace)
        {
            InitializeComponent();
            ItemType = itemType;
            PluginNameSpace = nameSpace;
            LoadComboBoxes();
            _ = LoadCustomTemplatesAsync();
        }

        public string CustomTemplate
        {
            get
            {
                var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
                return selected.Title ?? string.Empty;
            }
        }

        private async Task LoadCustomTemplatesAsync()
        {
            if (ItemType == ItemType.Plugin || ItemType == ItemType.CustomAction || ItemType == ItemType.CustomApi || ItemType == ItemType.Workflow || ItemType == ItemType.UiTest || ItemType == ItemType.Test)
            {
                CustomTemplates = await VsixHelper.GetCustomTemplatesAsync(ItemType);
                ComboBoxTemplate.ItemsSource = null;
                ComboBoxTemplate.ItemsSource = CustomTemplates;
                ComboBoxTemplate.DisplayMemberPath = "Title";
                ComboBoxTemplate.SelectedItem = CustomTemplates.FirstOrDefault(x => x.IsDefault);
                if (ComboBoxTemplate.SelectedItem == null) ComboBoxTemplate.SelectedIndex = 0;
            }
        }

        private void LoadComboBoxes()
        {
            loadStage();
            loadExecution();

            void loadStage()
            {
                var items = new List<NameValue>()
                {
                    new NameValue { Name = "PreValidation", Value = "PreValidation" },
                    new NameValue { Name = "PreOperation", Value = "Pre" },
                    new NameValue { Name = "PostOperation", Value = "Post" }
                };
                ComboBoxStage.DisplayMemberPath = "Name";
                ComboBoxStage.ItemsSource = items;
            }
            void loadExecution()
            {
                var items = new List<NameValue>()
                {
                    new NameValue { Name = "Synchronous" },
                    new NameValue { Name = "Asynchronous" }
                };
                ComboBoxExecution.DisplayMemberPath = "Name";
                ComboBoxExecution.ItemsSource = items;
            }
        }

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private async Task ButtonCustom_ClickAsync()
        {
            if (IsValid())
            {
                if (ItemType == ItemType.Plugin || ItemType == ItemType.CustomAction || ItemType == ItemType.CustomApi || ItemType == ItemType.Workflow || ItemType == ItemType.UiTest || ItemType == ItemType.Test)
                {
                    Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                    var form = new FormCustom(CustomTemplates, CustomTemplate, ItemType, await T4Helper.BuildContextAsync(this));
                    Mouse.OverrideCursor = null;
                    form.ShowDialog();
                    await LoadCustomTemplatesAsync();
                }
            }
        }

        private void ButtonCustom_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = ButtonCustom_ClickAsync();
        }

        bool IsValid()
        {
            if (ComboBoxEntity.Visibility == System.Windows.Visibility.Visible && ComboBoxEntity.SelectedItem == null)
            {
                VS.MessageBox.ShowError($"Please select {LabelEntity.Content}");
                return false;
            }
            if (ComboBoxMessage.Visibility == System.Windows.Visibility.Visible && ComboBoxMessage.SelectedItem == null)
            {
                VS.MessageBox.ShowError($"Please select {LabelMessage.Content}");
                return false;
            }
            if (ComboBoxStage.Visibility == System.Windows.Visibility.Visible && ComboBoxStage.SelectedItem == null)
            {
                VS.MessageBox.ShowError($"Please select {LabelStage.Content}");
                return false;
            }
            if (ComboBoxExecution.Visibility == System.Windows.Visibility.Visible && ComboBoxExecution.SelectedItem == null)
            {
                VS.MessageBox.ShowError($"Please select {LabelExecution.Content}");
                return false;
            }
            if (TextboxClass.Visibility == System.Windows.Visibility.Visible && string.IsNullOrEmpty(TextboxClass.Text))
            {
                VS.MessageBox.ShowError($"Please enter {LabelClass.Content}");
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
            if (ItemType == ItemType.Plugin || ItemType == ItemType.CustomAction || ItemType == ItemType.CustomApi)
            {
                LockUi(true);
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () =>
                    {
                        await new MetadataService(ServiceClient).ReadEntitiesMetadataAsync(Microsoft.Xrm.Sdk.Metadata.EntityFilters.Entity);
                        var items = MetadataService.GetListXrmEntity(XrmHelper.EntitiesMetadata);
                        items = items.OrderBy(x => x.LogicalName).ToList();
                        if (ItemType == ItemType.CustomAction || ItemType == ItemType.CustomApi)
                        {
                            items.Insert(0, new XrmEntity { Name = "None", SchemaName = "None", LogicalName = "none", EntityTypeCode = -1, HasImage = false, IsCustomEntity = false });
                        }
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        ComboBoxEntity.DisplayMemberPath = Const.SchemaName;
                        ComboBoxEntity.ItemsSource = items;
                        buttonOK.IsEnabled = items.Count > 0;
                        LockUi(false);
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
            else if (ItemType == ItemType.DataProvider)
            {
                LockUi(true);
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () =>
                    {
                        var items = await new MetadataService(ServiceClient).GetAllDataSourceAsync();
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        ComboBoxEntity.DisplayMemberPath = Const.LogicalName;
                        ComboBoxEntity.ItemsSource = items;
                        buttonOK.IsEnabled = items.Count > 0;
                        LockUi(false);
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
            else if (ItemType == ItemType.ResourceString)
            {
                LockUi(true);
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () =>
                    {
                        var items = await new MetadataService(ServiceClient).GetProvisionedLanguagesAsync();
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        ComboBoxEntity.DisplayMemberPath = Const.SchemaName;
                        ComboBoxEntity.ItemsSource = items;
                        buttonOK.IsEnabled = items.Count > 0;
                        LockUi(false);
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
            else if (ItemType == ItemType.BatFile)
            {
                var items = new List<XrmEntity>()
                {
                    new XrmEntity { SchemaName = "download.reports.bat", LogicalName = "download.reports.bat" },
                    new XrmEntity { SchemaName = "upload.reports.bat", LogicalName = "upload.reports.bat" },
                    new XrmEntity { SchemaName = "download.webresources.bat", LogicalName = "download.webresources.bat" },
                    new XrmEntity { SchemaName = "deploy.datasource.bat", LogicalName = "deploy.datasource.bat" },
                    new XrmEntity { SchemaName = "Plugin-Managed-Identity.ps1", LogicalName = "Plugin-Managed-Identity.ps1" }
                };
                ComboBoxEntity.DisplayMemberPath = Const.SchemaName;
                ComboBoxEntity.ItemsSource = items;
                buttonOK.IsEnabled = items.Count > 0;
            }
        }

        private void LockUi(bool value)
        {
            if (value)
            {
                StackPanelMain.IsEnabled = false;
                progressBar.Visibility = System.Windows.Visibility.Visible;
                CONNECTION.SetIsEnabledButtonConnection(false);
            }
            else
            {
                StackPanelMain.IsEnabled = true;
                progressBar.Visibility = System.Windows.Visibility.Hidden;
                CONNECTION.SetIsEnabledButtonConnection(true);
            }
        }

        private void ComboBoxEntity_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            if (ItemType == ItemType.Plugin)
            {
                LockUi(true);
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () =>
                    {
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        var selectedEntity = (XrmEntity)ComboBoxEntity.SelectedItem;
                        var items = await new MetadataService(ServiceClient).GetSdkMessagesAsync(selectedEntity.LogicalName);
                        ComboBoxMessage.DisplayMemberPath = "Name";
                        ComboBoxMessage.ItemsSource = items;
                        ComboBoxMessage.SelectedItem = null;
                        ComboBoxStage.SelectedItem = null;
                        ComboBoxExecution.SelectedItem = null;
                        TextboxClass.Text = null;
                        UpdateClassName();
                        LockUi(false);
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
            else if (ItemType == ItemType.CustomAction)
            {
                LockUi(true);
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () =>
                    {
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        var selectedEntity = (XrmEntity)ComboBoxEntity.SelectedItem;
                        if (selectedEntity.LogicalName == "none")
                            ComboBoxMessage.ItemsSource = await new MetadataService(ServiceClient).GetCustomActionsAsync();
                        else
                            ComboBoxMessage.ItemsSource = await new MetadataService(ServiceClient).GetCustomActionsAsync(selectedEntity.LogicalName);
                        ComboBoxMessage.DisplayMemberPath = "Name";
                        ComboBoxMessage.SelectedItem = null;
                        ComboBoxStage.SelectedItem = null;
                        ComboBoxExecution.SelectedItem = null;
                        TextboxClass.Text = null;
                        UpdateClassName();
                        LockUi(false);
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
            else if (ItemType == ItemType.CustomApi)
            {
                LockUi(true);
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () =>
                    {
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        var selectedEntity = (XrmEntity)ComboBoxEntity.SelectedItem;
                        ComboBoxMessage.ItemsSource = await new MetadataService(ServiceClient).GetCustomApisAsync(selectedEntity.LogicalName);
                        ComboBoxMessage.DisplayMemberPath = "Name";
                        ComboBoxMessage.SelectedItem = null;
                        ComboBoxStage.SelectedItem = null;
                        ComboBoxExecution.SelectedItem = null;
                        TextboxClass.Text = null;
                        UpdateClassName();
                        LockUi(false);
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
        }

        private void UpdateClassName()
        {
            if (ItemType == ItemType.CustomApi)
            {
                TextboxClass.Text = $"{PluginMessage}Request";
            }
            else
                TextboxClass.Text = $"{PluginStage.Replace("Operation", string.Empty)}{PluginSchemaName}{PluginMessage}{PluginExecution}";
        }

        private void ComboBoxMessage_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            UpdateClassName();
        }

        private void ComboBoxStage_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            var selected = (NameValue)ComboBoxStage.SelectedItem;
            if (ItemType == ItemType.CustomAction || ItemType == ItemType.CustomApi)
            {
                if (selected?.Name == @"PreValidation" || selected?.Name == @"PreOperation")
                {
                    ComboBoxExecution.Text = @"Synchronous";
                    ComboBoxExecution.IsEnabled = false;
                }
                else
                {
                    ComboBoxExecution.Text = @"Synchronous";
                    ComboBoxExecution.IsEnabled = true;
                }
            }
            else
            {
                ComboBoxExecution.Text = @"Synchronous";
                if (selected?.Name == @"PreValidation" || selected?.Name == @"PreOperation")
                {
                    ComboBoxExecution.IsEnabled = false;
                }
                else
                {
                    ComboBoxExecution.IsEnabled = true;
                }
            }
            UpdateClassName();
        }

        private void ComboBoxExecution_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            UpdateClassName();
        }
    }
}