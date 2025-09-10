using ItemType = DynamicsCrm.DevKit.Shared.ItemType;
using DynamicsCrm.DevKit.Shared;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.VisualStudio.Shell;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.Linq;
using Community.VisualStudio.Toolkit;
using System.Windows.Input;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormPlugin : BaseDialogWindow
    {
        private const string TAB = "\t";
        private const string NEW_LINE = "\r\n";
        public ServiceClient ServiceClient => CONNECTION.ServiceClient;
        public CrmConnection CrmConnection => CONNECTION.CrmConnection;
        private List<CustomTemplate> CustomTemplates { get; set; } = new List<CustomTemplate>();

        public string Class => TextboxClass.Text ?? string.Empty;
        public string PluginSchemaName
        {
            get
            {
                if (ComboBoxEntity?.SelectedItem is XrmEntity entity)
                    return entity.SchemaName ?? string.Empty;
                return string.Empty;
            }
        }
        public string PluginMessage
        {
            get
            {
                if (ComboBoxMessage?.SelectedItem is NameValue message)
                    return message.Name ?? string.Empty;
                return string.Empty;
            }
        }
        public string PluginStage
        {
            get
            {
                if (ComboBoxStage?.SelectedItem is NameValue stage)
                    return stage.Value ?? string.Empty;
                return string.Empty;
            }
        }
        public string PluginExecution
        {
            get
            {
                if (ComboBoxExecution?.SelectedItem is NameValue execution)
                    return execution.Name ?? string.Empty;
                return string.Empty;
            }
        }

        public string PluginLogicalName
        {
            get
            {
                var selected = (XrmEntity)ComboBoxEntity.SelectedItem;
                return selected.LogicalName ?? string.Empty;
            }
        }

        public int PluginOrder => 1;


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
                    //Height = 344;
                }
                void CustomActionItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Action-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Action Item Template");
                    Height = 344;
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
                    Height = 282;
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
                return selected.Title;
            }
        }
        private async Task LoadCustomTemplatesAsync()
        {
            if (ItemType == ItemType.Plugin || ItemType == ItemType.CustomAction || ItemType == ItemType.CustomApi)
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
                if (
                    ItemType == ItemType.Plugin || 
                    ItemType == ItemType.CustomAction || 
                    ItemType == ItemType.CustomApi
                    )
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
            if (ComboBoxEntity.SelectedItem == null)
            {
                VS.MessageBox.ShowError("Please select entity");
                return false;
            }
            if (ComboBoxMessage.SelectedItem == null)
            {
                VS.MessageBox.ShowError("Please select message");
                return false;
            }
            if (ComboBoxStage.Visibility == System.Windows.Visibility.Visible && ComboBoxStage.SelectedItem == null)
            {
                VS.MessageBox.ShowError("Please select stage");
                return false;
            }
            if (ComboBoxExecution.Visibility == System.Windows.Visibility.Visible && ComboBoxExecution.SelectedItem == null)
            {
                VS.MessageBox.ShowError("Please select execution");
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
                ItemType == ItemType.Plugin ||
                ItemType == ItemType.CustomAction ||
                ItemType == ItemType.CustomApi
                )
            {
                LockUi(true);
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () =>
                    {
                        await XrmHelper.ReadEntitiesMetadataAsync(ServiceClient);
                        var items = XrmHelper.GetListXrmEntity(XrmHelper.EntitiesMetadata);
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        ComboBoxEntity.DisplayMemberPath = Const.SchemaName;
                        ComboBoxEntity.ItemsSource = items;
                        buttonOK.IsEnabled = items.Count > 0;
                        LockUi(false);
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
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
                        var items = await XrmHelper.GetSdkMessagesAsync(ServiceClient, selectedEntity.LogicalName);
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
                //var selectedEntity = (XrmEntity)ComboBoxEntity.SelectedItem;
                //var items = new List<NameValue>();
                //if (selectedEntity.LogicalName == "none")
                //    items = XrmHelper.GetAllCustomActions(CrmServiceClient);
                //else
                //    items = XrmHelper.GetCustomActionMessages(CrmServiceClient, selectedEntity.LogicalName);
                //ComboBoxMessage.DisplayMemberPath = "Name";
                //ComboBoxMessage.ItemsSource = items;
                //ComboBoxMessage.SelectedItem = null;
                //ComboBoxStage.SelectedItem = null;
                //ComboBoxExecution.SelectedItem = null;
                //TextboxClass.Text = null;
            }
            else if (ItemType == ItemType.CustomApi)
            {
                //var selectedEntity = (XrmEntity)ComboBoxEntity.SelectedItem;
                //var items = XrmHelper.GetCustomApiMessages(CrmServiceClient, selectedEntity.LogicalName);
                //ComboBoxMessage.DisplayMemberPath = "Name";
                //ComboBoxMessage.ItemsSource = items;
                //ComboBoxMessage.SelectedItem = null;
                //ComboBoxStage.SelectedItem = null;
                //ComboBoxExecution.SelectedItem = null;
                //TextboxClass.Text = null;
            }            
        }

        private void UpdateClassName()
        {
            if (ItemType == ItemType.CustomApi)
                TextboxClass.Text = $"{PluginMessage}Request";
            else
                TextboxClass.Text = $"{PluginStage}{PluginSchemaName}{PluginMessage}{PluginExecution}";
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