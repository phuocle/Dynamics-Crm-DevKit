using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.IO;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormCustom : BaseDialogWindow
    {
        private ItemType _ItemType = DynamicsCrm.DevKit.Shared.ItemType.None;
        private ItemType ItemType
        {
            get => _ItemType;
            set
            {
                _ItemType = value;
                var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                CachedJson cachedJson = new CachedJson();
                if (File.Exists(fileName)) cachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
                void PluginItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Plugin-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Plugin Item Template Customize");
                    if (cachedJson.Plugin != null)
                        Textbox.Text = Utility.Decompress(cachedJson.Plugin);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Plugin.tt");
                }
                void WorkflowItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Workflow Item Template Customize");
                    if (cachedJson.Workflow != null)
                        Textbox.Text = Utility.Decompress(cachedJson.Workflow);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Workflow.tt");
                }
                void CustomActionItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Action-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Action Item Template Customize");
                    if (cachedJson.CustomAction != null)
                        Textbox.Text = Utility.Decompress(cachedJson.CustomAction);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomAction.tt");
                }
                void CustomApiItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Api-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Api Item Template Customize");
                    if (cachedJson.CustomApi != null)
                        Textbox.Text = Utility.Decompress(cachedJson.CustomApi);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomApi.tt");
                }
                void UiTestItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Ui-Test-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("UI Test Item Template Customize");
                    if (cachedJson.CustomApi != null)
                        Textbox.Text = Utility.Decompress(cachedJson.UiTest);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.UiTest.tt");
                }
                void DataProviderItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Data-Provider-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Data Provider Item Template Customize");
                    var items = new List<string> { "Create", "Update", "Delete", "Retrieve", "RetrieveMultiple" };
                    ComboBoxSelect.Visibility = System.Windows.Visibility.Visible;
                    ComboBoxSelect.ItemsSource = items;
                    ComboBoxSelect.SelectedIndex = 0;
                    ComboBoxSelect_SelectionChanged(null, null);
                }
                switch (_ItemType)
                {
                    case ItemType.Plugin:
                        PluginItem();
                        break;
                    case
                        ItemType.Workflow: WorkflowItem();
                        break;
                    case ItemType.CustomAction:
                        CustomActionItem();
                        break;
                    case ItemType.CustomApi:
                        CustomApiItem();
                        break;
                    case ItemType.UiTest:
                        UiTestItem();
                        break;
                    case ItemType.DataProvider:
                        DataProviderItem();
                        break;
                }
            }
        }

        public FormCustom(ItemType itemType)
        {
            InitializeComponent();
            ItemType = itemType;
            WindowState = System.Windows.WindowState.Maximized;
        }


        private void ButtonClose_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = true;
        }

        private void ButtonSave_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
            CachedJson cachedJson = new CachedJson();
            if (File.Exists(fileName)) cachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
            if (ItemType == ItemType.Plugin)
                cachedJson.Plugin = Utility.Compress(Textbox.Text);
            else if (ItemType == ItemType.Workflow)
                cachedJson.Workflow = Utility.Compress(Textbox.Text);
            else if (ItemType == ItemType.CustomAction)
                cachedJson.CustomAction = Utility.Compress(Textbox.Text);
            else if (ItemType == ItemType.CustomApi)
                cachedJson.CustomApi = Utility.Compress(Textbox.Text);
            else if (ItemType == ItemType.DataProvider)
            {
                if ((string)ComboBoxSelect.SelectedItem == "Create")
                {
                    cachedJson.DataProviderCreate = Utility.Compress(Textbox.Text);
                }
                else if ((string)ComboBoxSelect.SelectedItem == "Update")
                {
                    cachedJson.DataProviderUpdate = Utility.Compress(Textbox.Text);
                }
                else if ((string)ComboBoxSelect.SelectedItem == "Delete")
                {
                    cachedJson.DataProviderDelete = Utility.Compress(Textbox.Text);
                }
                else if ((string)ComboBoxSelect.SelectedItem == "Retrieve")
                {
                    cachedJson.DataProviderRetrieve = Utility.Compress(Textbox.Text);
                }
                else if ((string)ComboBoxSelect.SelectedItem == "RetrieveMultiple")
                {
                    cachedJson.DataProviderRetrieveMultiple = Utility.Compress(Textbox.Text);
                }
            }
            Utility.ForceWriteAllText(fileName, SimpleJson.SerializeObject(cachedJson));
            VS.MessageBox.Show("Saved !!!");
        }

        private void ButtonReset_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (VS.MessageBox.ShowConfirm("This will reset the template to original setting.", "Do you want to continue?"))
            {
                var template = string.Empty;
                if (ItemType == ItemType.Plugin)
                    template = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Plugin.tt");
                else if (ItemType == ItemType.Workflow)
                    template = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Workflow.tt");
                else if (ItemType == ItemType.CustomAction)
                    template = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomAction.tt");
                else if (ItemType == ItemType.CustomApi)
                    template = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomApi.tt");
                else if (ItemType == ItemType.DataProvider)
                {
                    if ((string)ComboBoxSelect.SelectedItem == "Create")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderCreate.tt");
                    }
                    else if ((string)ComboBoxSelect.SelectedItem == "Update")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderUpdate.tt");
                    }
                    else if ((string)ComboBoxSelect.SelectedItem == "Delete")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderDelete.tt");
                    }
                    else if ((string)ComboBoxSelect.SelectedItem == "Retrieve")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderRetrieve.tt");
                    }
                    else if ((string)ComboBoxSelect.SelectedItem == "RetrieveMultiple")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderRetrieveMultiple.tt");
                    }
                }
                Textbox.Text = template;
            }
        }

        private void BaseDialogWindow_SizeChanged(object sender, System.Windows.SizeChangedEventArgs e)
        {
            Textbox.Height = e.NewSize.Height - 110;
        }

        private void ComboBoxSelect_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
            CachedJson cachedJson = new CachedJson();
            if (File.Exists(fileName)) cachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
            if (ItemType == ItemType.DataProvider)
            {
                if ((string)ComboBoxSelect.SelectedItem == "Create")
                {
                    if (cachedJson.DataProviderCreate != null)
                        Textbox.Text = Utility.Decompress(cachedJson.DataProviderCreate);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderCreate.tt");
                }
                else if ((string)ComboBoxSelect.SelectedItem == "Update")
                {
                    if (cachedJson.DataProviderUpdate != null)
                        Textbox.Text = Utility.Decompress(cachedJson.DataProviderUpdate);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderUpdate.tt");
                }
                else if ((string)ComboBoxSelect.SelectedItem == "Delete")
                {
                    if (cachedJson.DataProviderDelete != null)
                        Textbox.Text = Utility.Decompress(cachedJson.DataProviderDelete);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderDelete.tt");
                }
                else if ((string)ComboBoxSelect.SelectedItem == "Retrieve")
                {
                    if (cachedJson.DataProviderRetrieve != null)
                        Textbox.Text = Utility.Decompress(cachedJson.DataProviderRetrieve);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderRetrieve.tt");
                }
                else if ((string)ComboBoxSelect.SelectedItem == "RetrieveMultiple")
                {
                    if (cachedJson.DataProviderRetrieveMultiple != null)
                        Textbox.Text = Utility.Decompress(cachedJson.DataProviderRetrieveMultiple);
                    else
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderRetrieveMultiple.tt");
                }
            }
        }
    }
}
