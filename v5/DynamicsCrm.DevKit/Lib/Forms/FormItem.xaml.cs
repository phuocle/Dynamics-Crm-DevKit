using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormItem : BaseDialogWindow
    {       
        
        public ServiceClient ServiceClient => CONNECTION.ServiceClient;
        public CrmConnection CrmConnection => CONNECTION.CrmConnection;
        public string ItemName
        {
            get
            {
                return ((XrmEntity)ComboBox.SelectedItem)?.SchemaName ?? LabelItemNameLatest.Content?.ToString();
            }
        }
        
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
                    ComboBox.Visibility = System.Windows.Visibility.Visible;
                    ComboBox.IsEditable = false;
                    Textbox.Visibility = System.Windows.Visibility.Hidden;
                    LabelItemNameLatest.Visibility = System.Windows.Visibility.Collapsed;
                    LabelItemName.Content = "Entity";
                }
                void JsFormItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-Form-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("JavaScript Form Item Template");
                    ComboBox.Visibility = System.Windows.Visibility.Visible;
                    ComboBox.IsEditable = false;
                    Textbox.Visibility = System.Windows.Visibility.Hidden;
                    LabelItemNameLatest.Visibility = System.Windows.Visibility.Collapsed;
                    LabelItemName.Content = "Entity";
                }
                void TsFormItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/TypeScript-Form-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("TypeScript Form Item Template");
                    ComboBox.Visibility = System.Windows.Visibility.Visible;
                    ComboBox.IsEditable = false;
                    Textbox.Visibility = System.Windows.Visibility.Hidden;
                    LabelItemNameLatest.Visibility = System.Windows.Visibility.Collapsed;
                    LabelItemName.Content = "Entity";
                }
                void JsWebApiItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/JavaScript-WebApi-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("JavaScript WebApi Item Template");
                    ComboBox.Visibility = System.Windows.Visibility.Visible;
                    ComboBox.IsEditable = false;
                    Textbox.Visibility = System.Windows.Visibility.Hidden;
                    LabelItemNameLatest.Visibility = System.Windows.Visibility.Collapsed;
                    LabelItemName.Content = "Entity";
                }
                void TsWebApiItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/TypeScript-WebApi-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("TypeScript WebApi Item Template");
                    ComboBox.Visibility = System.Windows.Visibility.Visible;
                    ComboBox.IsEditable = false;
                    Textbox.Visibility = System.Windows.Visibility.Hidden;
                    LabelItemNameLatest.Visibility = System.Windows.Visibility.Collapsed;
                    LabelItemName.Content = "Entity";
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
                    case ItemType.TsForm:
                        TsFormItem();
                        break;
                    case ItemType.TsWebApi:
                        TsWebApiItem();
                        break;
                }
            }
        }

        private void ButtonCustom_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            
        }        

        public FormItem(ItemType itemType)
        {
            InitializeComponent();
            ItemType = itemType;
        }

        public string TemplateTitle
        {
            get
            {
                return string.Empty;
            }
        }        

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (IsValid())
            {
                DialogResult = true;
            }
            bool IsValid()
            {                
                return true;
            }
        }

        private void Connection_Connected(object sender, System.EventArgs e)
        {
            if (
                ItemType == ItemType.LateBound ||
                ItemType == ItemType.JsForm ||
                ItemType == ItemType.JsWebApi ||
                ItemType == ItemType.TsForm ||
                ItemType == ItemType.TsWebApi
                )
            {
                StackPanelMain.IsEnabled = false;
                progressBar.Visibility = System.Windows.Visibility.Visible;
                CONNECTION.SetIsEnabledButtonConnection(false);
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () =>
                    {
                        await XrmHelper.ReadEntitiesMetadataAsync(ServiceClient, Microsoft.Xrm.Sdk.Metadata.EntityFilters.Entity);
                        var items = XrmHelper.GetListXrmEntity(XrmHelper.EntitiesMetadata);
                        items = items.OrderBy(x => x.LogicalName).ToList();
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        ComboBox.DisplayMemberPath = Const.SchemaName;
                        ComboBox.ItemsSource = items;
                        buttonOK.IsEnabled = items.Count > 0;
                        StackPanelMain.IsEnabled = true;
                        progressBar.Visibility = System.Windows.Visibility.Hidden;
                        CONNECTION.SetIsEnabledButtonConnection(true);
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }            
        }

        private void TextboxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {            
        }

        private void ComboBoxProject_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {            
        }

        private void ComboBoxProject_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {            
        }
    }
}
