using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Windows.Input;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormCustom : BaseDialogWindow
    {
        private ItemType _ItemType = DynamicsCrm.DevKit.Shared.ItemType.None;

        private CachedJson CachedJson { get; set; }
        private ItemType ItemType
        {
            get => _ItemType;
            set
            {
                _ItemType = value;
                //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
                //if (File.Exists(fileName))
                //    CachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
                //else
                //    CachedJson = new CachedJson();
                void PluginItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Plugin-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Plugin Item Template Customize");
                }
                void WorkflowItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Workflow-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Workflow Item Template Customize");
                    //if (cachedJson.Workflow != null)
                    //    Textbox.Text = Utility.Decompress(cachedJson.Workflow);
                    //else
                    //    Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Workflow.tt");
                }
                void CustomActionItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Action-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Action Item Template Customize");
                    //if (cachedJson.CustomAction != null)
                    //    Textbox.Text = Utility.Decompress(cachedJson.CustomAction);
                    //else
                    //    Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomAction.tt");
                }
                void CustomApiItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Api-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Api Item Template Customize");
                    //if (cachedJson.CustomApi != null)
                    //    Textbox.Text = Utility.Decompress(cachedJson.CustomApi);
                    //else
                    //    Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomApi.tt");
                }
                void UiTestItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Ui-Test-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("UI Test Item Template Customize");
                    //if (cachedJson.CustomApi != null)
                    //    Textbox.Text = Utility.Decompress(cachedJson.UiTest);
                    //else
                    //    Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.UiTest.tt");
                }
                void DataProviderItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Data-Provider-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Data Provider Item Template Customize");
                    //var items = new List<string> { "Create", "Update", "Delete", "Retrieve", "RetrieveMultiple" };
                    //ComboBoxSelect.Visibility = System.Windows.Visibility.Visible;
                    //ComboBoxSelect.ItemsSource = items;
                    //ComboBoxSelect.SelectedIndex = 0;
                    //ComboBoxSelect_SelectionChanged(null, null);
                }
                void TestItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Test Item Template Customize");
                    //var items = new List<string> { "Plugin", "Workflow", "CustomAction", "CustomApi", "DataProvider" };
                    //ComboBoxSelect.Visibility = System.Windows.Visibility.Visible;
                    //ComboBoxSelect.ItemsSource = items;
                    //ComboBoxSelect.SelectedIndex = 0;
                    //ComboBoxSelect_SelectionChanged(null, null);
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
                    case ItemType.Test:
                        TestItem();
                        break;
                }
            }
        }

        private List<CustomTemplate> GetCustomTemplates()
        {
            var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
            if (File.Exists(fileName))
                CachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
            else
                CachedJson = new CachedJson();
            var customTemplates = CachedJson.CustomTemplates.Where(x => x.Type == ItemType.ToString()).ToList() ?? new List<CustomTemplate>();
            customTemplates.Insert(0, new CustomTemplate { Type = ItemType.ToString(), Title = "Default", Body = GetDefaultCustomBody(), IsDefault = false });
            return customTemplates;
        }

        private string GetDefaultCustomBody()
        {
            if (ItemType == ItemType.Plugin)
                return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Plugin.tt");
            else if (ItemType == ItemType.Workflow)
                return Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Workflow.tt");
            return string.Empty;
        }

        public T4Context T4Context { get; set; }

        //private List<CustomTemplate> _CustomTemplates = null;
        //private List<CustomTemplate> CustomTemplates
        //{
        //    get
        //    {
        //        if (_CustomTemplates == null) _CustomTemplates = GetCustomTemplates();
        //        return _CustomTemplates;
        //    }
        //}

        public FormCustom(ItemType itemType, T4Context t4Context, string templateTitle)
        {
            InitializeComponent();
            ItemType = itemType;
            T4Context = t4Context;
            LoadCustomTemplates(templateTitle);
            WindowState = System.Windows.WindowState.Maximized;
        }

        private void LoadCustomTemplates(string selectedTitle = null)
        {
            ComboBoxTemplate.ItemsSource = null;
            ComboBoxTemplate.ItemsSource = GetCustomTemplates();
            ComboBoxTemplate.DisplayMemberPath = "Title";
            if (selectedTitle != null)
            {
                ComboBoxTemplate.SelectedItem = CachedJson.CustomTemplates.FirstOrDefault(x => x.Title == selectedTitle);
            }
            else
            {
                ComboBoxTemplate.SelectedItem = CachedJson.CustomTemplates.FirstOrDefault(x => x.IsDefault);
            }
            if (ComboBoxTemplate.SelectedItem == null) ComboBoxTemplate.SelectedIndex = 0;
        }

        private void ButtonClose_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = true;
        }

        private void ButtonReview_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
            var t4Code = Textbox.Text;
            var code = T4Helper.ProcessTemplate(t4Code, T4Context);
            var form = new FormReview(code);
            Mouse.OverrideCursor = null;
            form.ShowDialog();
        }

        private void ButtonSave_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
            //CachedJson cachedJson = new CachedJson();
            //if (File.Exists(fileName)) cachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
            //if (ItemType == ItemType.Plugin)
            //    cachedJson.Plugin = Utility.Compress(Textbox.Text);
            //else if (ItemType == ItemType.Workflow)
            //    cachedJson.Workflow = Utility.Compress(Textbox.Text);
            //else if (ItemType == ItemType.CustomAction)
            //    cachedJson.CustomAction = Utility.Compress(Textbox.Text);
            //else if (ItemType == ItemType.CustomApi)
            //    cachedJson.CustomApi = Utility.Compress(Textbox.Text);
            //else if (ItemType == ItemType.DataProvider)
            //{
            //    if ((string)ComboBoxSelect.SelectedItem == "Create")
            //    {
            //        cachedJson.DataProviderCreate = Utility.Compress(Textbox.Text);
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "Update")
            //    {
            //        cachedJson.DataProviderUpdate = Utility.Compress(Textbox.Text);
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "Delete")
            //    {
            //        cachedJson.DataProviderDelete = Utility.Compress(Textbox.Text);
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "Retrieve")
            //    {
            //        cachedJson.DataProviderRetrieve = Utility.Compress(Textbox.Text);
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "RetrieveMultiple")
            //    {
            //        cachedJson.DataProviderRetrieveMultiple = Utility.Compress(Textbox.Text);
            //    }
            //}
            //else if (ItemType == ItemType.Test)
            //{
            //    if ((string)ComboBoxSelect.SelectedItem == "Plugin")
            //    {
            //        cachedJson.TestPlugin = Utility.Compress(Textbox.Text);
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "Workflow")
            //    {
            //        cachedJson.TestWorkflow = Utility.Compress(Textbox.Text);
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "CustomAcion")
            //    {
            //        cachedJson.TestCustomAction = Utility.Compress(Textbox.Text);
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "CustomApi")
            //    {
            //        cachedJson.TestCustomApi = Utility.Compress(Textbox.Text);
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "DataProvider")
            //    {
            //        cachedJson.TestDataProvider = Utility.Compress(Textbox.Text);
            //    }
            //}
            //Utility.ForceWriteAllText(fileName, SimpleJson.SerializeObject(cachedJson));
            //VS.MessageBox.Show("Saved !!!");
        }

        private void ButtonReset_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (VS.MessageBox.ShowConfirm("This will reset the template to original setting.", "Do you want to continue?"))
            {
                var template = string.Empty;
                if (ItemType == ItemType.Plugin)
                {
                    Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Plugin.tt");
                }
                else if (ItemType == ItemType.Workflow)
                {
                    Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.Workflow.tt");
                }
                else if (ItemType == ItemType.CustomAction)
                {
                    Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomAction.tt");
                }
                else if (ItemType == ItemType.CustomApi)
                {
                    Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomApi.tt");
                }
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
                else if (ItemType == ItemType.Test)
                {
                    if ((string)ComboBoxSelect.SelectedItem == "Plugin")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestPlugin.tt");
                    }
                    else if ((string)ComboBoxSelect.SelectedItem == "Workflow")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestWorkflow.tt");
                    }
                    else if ((string)ComboBoxSelect.SelectedItem == "CustomAction")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestCustomAction.tt");
                    }
                    else if ((string)ComboBoxSelect.SelectedItem == "CustomApi")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestCustomApi.tt");
                    }
                    else if ((string)ComboBoxSelect.SelectedItem == "DataProvider")
                    {
                        Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestDataProvider.tt");
                    }
                }
            }
        }

        private void BaseDialogWindow_SizeChanged(object sender, System.Windows.SizeChangedEventArgs e)
        {
            Textbox.Height = e.NewSize.Height - 110;
        }

        private void ComboBoxSelect_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            //var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
            //CachedJson cachedJson = new CachedJson();
            //if (File.Exists(fileName)) cachedJson = SimpleJson.DeserializeObject<CachedJson>(File.ReadAllText(fileName));
            //if (ItemType == ItemType.DataProvider)
            //{
            //    if ((string)ComboBoxSelect.SelectedItem == "Create")
            //    {
            //        if (cachedJson.DataProviderCreate != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.DataProviderCreate);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderCreate.tt");
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "Update")
            //    {
            //        if (cachedJson.DataProviderUpdate != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.DataProviderUpdate);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderUpdate.tt");
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "Delete")
            //    {
            //        if (cachedJson.DataProviderDelete != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.DataProviderDelete);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderDelete.tt");
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "Retrieve")
            //    {
            //        if (cachedJson.DataProviderRetrieve != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.DataProviderRetrieve);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderRetrieve.tt");
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "RetrieveMultiple")
            //    {
            //        if (cachedJson.DataProviderRetrieveMultiple != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.DataProviderRetrieveMultiple);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.DataProviderRetrieveMultiple.tt");
            //    }
            //}
            //else if (ItemType == ItemType.Test)
            //{
            //    if ((string)ComboBoxSelect.SelectedItem == "Plugin")
            //    {
            //        if (cachedJson.TestPlugin != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.TestPlugin);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestPlugin.tt");
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "Workflow")
            //    {
            //        if (cachedJson.TestWorkflow != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.TestWorkflow);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestWorkflow.tt");
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "CustomAction")
            //    {
            //        if (cachedJson.TestCustomAction != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.TestCustomAction);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources. .tt");
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "CustomApi")
            //    {
            //        if (cachedJson.TestCustomApi != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.TestCustomApi);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestCustomApi.tt");
            //    }
            //    else if ((string)ComboBoxSelect.SelectedItem == "DataProvider")
            //    {
            //        if (cachedJson.TestDataProvider != null)
            //            Textbox.Text = Utility.Decompress(cachedJson.TestDataProvider);
            //        else
            //            Textbox.Text = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.TestDataProvider.tt");
            //    }
            //}
        }

        private void buttonSaveAs_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            var form = new FormInput();
            if (form.ShowDialog() ?? false)
            {
                var found = CachedJson.CustomTemplates.FirstOrDefault(x => x.Title == form.InputValue);
                if (found != null || form.InputValue.ToLower() == "default")
                {
                    VS.MessageBox.ShowError($"An existing custom template named '{form.InputValue}' was found. The save as action failed.");
                }
                else
                {
                    var save = new CustomTemplate
                    {
                        Body = Utility.Compress(Textbox.Text),
                        IsDefault = false,
                        Title = form.InputValue,
                        Type = ItemType.ToString()
                    };
                    SaveCachedJson(save);
                    LoadCustomTemplates(form.InputValue);
                }
            }
        }

        void SaveCachedJson(CustomTemplate customTemplate = null)
        {
            var save = new CachedJson
            {
                WebResources = CachedJson.WebResources,
                CustomTemplates = CachedJson.CustomTemplates
            };
            if (customTemplate != null) save.CustomTemplates.Add(customTemplate);
            var fileName = VsixHelper.GetDynamicsCrmDevKitConfigJsonFileName();
            Utility.ForceWriteAllText(fileName, JsonHelper.FormatJson(SimpleJson.SerializeObject(save)));
        }
        private void buttonSave2_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
            var found = CachedJson.CustomTemplates.FirstOrDefault(x => x.Title == selected.Title);
            if (found != null)
            {
                found.Body = Utility.Compress(Textbox.Text);
                SaveCachedJson();
                VS.MessageBox.ShowWarning($"Custom template: '{selected.Title}' saved.");
            }
        }

        private void ComboBoxTemplate_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
            Textbox.Text = Utility.Decompress(selected?.Body);
            var isDefault = selected?.Title == "Default";
            buttonDefault.IsEnabled = !isDefault;
            buttonSave2.IsEnabled = !isDefault;
            buttonSaveAs.IsEnabled = true;
            buttonDelete.IsEnabled = !isDefault;
            buttonRename.IsEnabled = !isDefault;
        }

        private void buttonDefault_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
            if (VS.MessageBox.ShowConfirm($"Are you sure to set: {selected.Title} to default for custom template {ItemType.ToString()}"))
            {
                foreach (var customTemplate in CachedJson.CustomTemplates.Where(x => x.Type == ItemType.ToString()).ToList() ?? new List<CustomTemplate>())
                    customTemplate.IsDefault = false;
                var found = CachedJson.CustomTemplates.FirstOrDefault(x => x.Title == selected.Title);
                if (found != null) found.IsDefault = true;
                SaveCachedJson();
                VS.MessageBox.ShowWarning($"The custom template '{selected.Title}' has been set as the default.");
            }
        }

        private void buttonRename_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
            var form = new FormInput(selected.Title);
            if (form.ShowDialog() ?? false)
            {
                var found = CachedJson.CustomTemplates.FirstOrDefault(x => x.Title == selected.Title);
                if (found != null) found.Title = form.InputValue;
                var count = CachedJson.CustomTemplates.Count(x => x.Title == form.InputValue);
                if (count > 1)
                {
                    VS.MessageBox.ShowError($"An existing custom template named '{form.InputValue}' was found. The rename action failed.");
                }
                else
                {
                    SaveCachedJson();
                    LoadCustomTemplates(form.InputValue);
                }
            }
        }

        private void buttonDelete_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
            if (VS.MessageBox.ShowConfirm($"Are you sure to delete this custom template {ItemType.ToString()}: '{selected.Title}'"))
            {
                var found = CachedJson.CustomTemplates.FirstOrDefault(x => x.Title == selected.Title);
                if (found != null) CachedJson.CustomTemplates.Remove(found);
                var haveDefaultValue = CachedJson.CustomTemplates.FirstOrDefault(x => x.IsDefault);
                SaveCachedJson();
                VS.MessageBox.ShowWarning($"The custom template '{selected.Title}' has been deleted.");
                if (haveDefaultValue != null)
                {
                    LoadCustomTemplates(haveDefaultValue.Title);
                }
                else
                {
                    LoadCustomTemplates();
                }
            }
        }
    }
}
