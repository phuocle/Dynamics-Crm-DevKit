using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Input;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormCustom : BaseDialogWindow
    {
        private string T4Code => Textbox.Text;
        private ItemType _ItemType = DynamicsCrm.DevKit.Shared.ItemType.None;

        private ItemType ItemType
        {
            get => _ItemType;
            set
            {
                _ItemType = value;
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
                }
                void CustomActionItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Action-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Action Item Template Customize");
                }
                void CustomApiItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Custom-Api-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("Custom Api Item Template Customize");
                }
                void UiTestItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Ui-Test-Item-Template-Customize");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("UI Test Item Template Customize");
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

        public T4Context T4Context { get; set; }

        private List<CustomTemplate> CustomTemplates { get; set; }

        public FormCustom(List<CustomTemplate> customTemplates, string templateTitle, ItemType itemType, T4Context t4Context)
        {
            InitializeComponent();
            ItemType = itemType;
            T4Context = t4Context;
            CustomTemplates = customTemplates;
            LoadCustomTemplates(templateTitle);
            WindowState = System.Windows.WindowState.Maximized;
        }

        private void LoadCustomTemplates(string selectedTitle = null)
        {
            ComboBoxTemplate.ItemsSource = null;
            ComboBoxTemplate.ItemsSource = CustomTemplates;
            ComboBoxTemplate.DisplayMemberPath = "Title";
            ComboBoxTemplate.SelectedItem = selectedTitle != null
                ? CustomTemplates.FirstOrDefault(x => x.Title == selectedTitle)
                : CustomTemplates.FirstOrDefault(x => x.IsDefault);
            if (ComboBoxTemplate.SelectedItem == null) ComboBoxTemplate.SelectedIndex = 0;
        }

        private void ButtonClose_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = true;
        }

        private void ButtonReview_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = ButtonReview_ClickAsync();
            async Task ButtonReview_ClickAsync()
            {
                Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                var code = await T4Helper.ProcessTemplateAsync(T4Code, T4Context);
                var form = new FormReview(code);
                Mouse.OverrideCursor = null;
                form.ShowDialog();
            }    
        }

        private void BaseDialogWindow_SizeChanged(object sender, System.Windows.SizeChangedEventArgs e)
        {
            Textbox.Height = e.NewSize.Height - 110;
        }

        private void ComboBoxSelect_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {            
        }

        private void buttonSaveAs_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = buttonSaveAs_ClickAsync();
            async Task buttonSaveAs_ClickAsync()
            {
                var form = new FormInput();
                if (form.ShowDialog() ?? false)
                {
                    var found = CustomTemplates.FirstOrDefault(x => x.Title == form.InputValue);
                    if (found != null || Const.DEFAULTS.Contains(form.InputValue))
                    {
                        await VS.MessageBox.ShowErrorAsync($"An existing custom template named '{form.InputValue}' was found. The save as action failed.");
                    }
                    else
                    {
                        Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                        var save = new CustomTemplate
                        {
                            Body = Helper.Compress(Textbox.Text),
                            IsDefault = false,
                            Title = form.InputValue,
                            Type = ItemType.ToString()
                        };
                        await VsixHelper.SaveCustomTemplatesAsync(save);
                        CustomTemplates = await VsixHelper.GetCustomTemplatesAsync(ItemType);
                        LoadCustomTemplates(form.InputValue);
                        Mouse.OverrideCursor = null;
                        await VS.MessageBox.ShowAsync($"Custom template: '{form.InputValue}' saved as.", icon: Microsoft.VisualStudio.Shell.Interop.OLEMSGICON.OLEMSGICON_INFO, buttons: Microsoft.VisualStudio.Shell.Interop.OLEMSGBUTTON.OLEMSGBUTTON_OK, defaultButton: Microsoft.VisualStudio.Shell.Interop.OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
                    }
                }
            }
        }
        
        private void buttonSave_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = buttonSave_ClickAsync();
            async Task buttonSave_ClickAsync()
            {   
                var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
                var found = CustomTemplates.FirstOrDefault(x => x.Title == selected.Title);
                if (found != null)
                {
                    Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                    found.Body = Helper.Compress(Textbox.Text);
                    await VsixHelper.SaveCustomTemplatesAsync(found);
                    CustomTemplates = await VsixHelper.GetCustomTemplatesAsync(ItemType);
                    LoadCustomTemplates(found.Title);
                    Mouse.OverrideCursor = null;
                    await VS.MessageBox.ShowAsync($"Custom template: '{selected.Title}' saved.", icon: Microsoft.VisualStudio.Shell.Interop.OLEMSGICON.OLEMSGICON_INFO, buttons: Microsoft.VisualStudio.Shell.Interop.OLEMSGBUTTON.OLEMSGBUTTON_OK, defaultButton: Microsoft.VisualStudio.Shell.Interop.OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
                }
            }
        }

        private void buttonDefault_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = buttonDefault_ClickAsync();
            async Task buttonDefault_ClickAsync()
            {
                var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
                var ok = await VS.MessageBox.ShowConfirmAsync($"Are you sure to set: {selected.Title} to default for custom template {ItemType}");
                if (ok)
                {
                    var fileName = await VsixHelper.GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
                    if (System.IO.File.Exists(fileName))
                    {
                        Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                        var configJson = SimpleJson.DeserializeObject<ConfigJson>(await Task.Run(() => System.IO.File.ReadAllText(fileName)));
                        foreach(var item in configJson.CustomTemplates.Where(x => x.Type == ItemType.ToString()))
                            item.IsDefault = false;
                        var found = configJson.CustomTemplates.Where(x => x.Type == selected.Type && x.Title == selected.Title).FirstOrDefault();
                        found.IsDefault = true;
                        var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(configJson));
                        await FileHelper.ForceWriteAllTextAsync(fileName, json);
                        Mouse.OverrideCursor = null;
                        await VS.MessageBox.ShowAsync($"Custom template: '{selected.Title}' is default now.", icon: Microsoft.VisualStudio.Shell.Interop.OLEMSGICON.OLEMSGICON_INFO, buttons: Microsoft.VisualStudio.Shell.Interop.OLEMSGBUTTON.OLEMSGBUTTON_OK, defaultButton: Microsoft.VisualStudio.Shell.Interop.OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
                    }
                }
            }
        }       

        private void ComboBoxTemplate_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
            Textbox.Text = Helper.Decompress(selected?.Body);
            var isDefault = selected?.Title == "Default" ||
                            selected?.Title == $"Default - {ItemType.CustomApi}" ||
                            selected?.Title == $"Default - {ItemType.CustomAction}" ||
                            selected?.Title == $"Default - {ItemType.Workflow}" ||
                            selected?.Title == $"Default - {ItemType.Plugin}";
            buttonDefault.IsEnabled = !isDefault;
            buttonSave.IsEnabled = !isDefault;
            buttonSaveAs.IsEnabled = true;
            buttonDelete.IsEnabled = !isDefault;
            buttonRename.IsEnabled = !isDefault;
        }        

        private void buttonRename_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = buttonRename_ClickAsync();
            async Task buttonRename_ClickAsync()
            {
                var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
                var form = new FormInput(selected.Title);
                if (form.ShowDialog() ?? false)
                {
                    var fileName = await VsixHelper.GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
                    if (System.IO.File.Exists(fileName))
                    {                        
                        var configJson = SimpleJson.DeserializeObject<ConfigJson>(await Task.Run(() => System.IO.File.ReadAllText(fileName)));
                        if (Const.DEFAULTS.Contains(form.InputValue) || configJson.CustomTemplates.Any(x => x.Title.Equals(form.InputValue, StringComparison.OrdinalIgnoreCase)))
                        {
                            await VS.MessageBox.ShowErrorAsync($"An existing custom template named '{form.InputValue}' was found. The rename action failed.");
                            return;
                        }
                        Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                        var found = configJson.CustomTemplates.Where(x => x.Type == selected.Type && x.Title == selected.Title).FirstOrDefault();                        
                        found.Title = form.InputValue;
                        configJson.CustomTemplates = [.. configJson.CustomTemplates.OrderBy(x => x.Type).ThenBy(x => x.Title)];
                        var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(configJson));
                        await FileHelper.ForceWriteAllTextAsync(fileName, json);
                        Mouse.OverrideCursor = null;
                        await VS.MessageBox.ShowAsync($"Custom template: '{selected.Title}' renamed to: '{form.InputValue}'.", icon: Microsoft.VisualStudio.Shell.Interop.OLEMSGICON.OLEMSGICON_INFO, buttons: Microsoft.VisualStudio.Shell.Interop.OLEMSGBUTTON.OLEMSGBUTTON_OK, defaultButton: Microsoft.VisualStudio.Shell.Interop.OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
                    }
                }
            }
        }

        private void buttonDelete_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _ = buttonDelete_ClickAsync();
            async Task buttonDelete_ClickAsync()
            {
                var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
                var ok = await VS.MessageBox.ShowConfirmAsync($"Are you sure to delete this custom template {ItemType}: '{selected.Title}'");
                if (ok)
                {
                    var fileName = await VsixHelper.GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
                    if (System.IO.File.Exists(fileName))
                    {
                        Mouse.OverrideCursor = System.Windows.Input.Cursors.Wait;
                        var configJson = SimpleJson.DeserializeObject<ConfigJson>(await Task.Run(() => System.IO.File.ReadAllText(fileName)));
                        var found = configJson.CustomTemplates.Where(x => x.Type == selected.Type && x.Title == selected.Title).FirstOrDefault();
                        if (found != null) configJson.CustomTemplates.Remove(found);
                        configJson.CustomTemplates = [.. configJson.CustomTemplates.OrderBy(x => x.Type).ThenBy(x => x.Title)];
                        var json = JsonHelper.FormatJson(SimpleJson.SerializeObject(configJson));
                        await FileHelper.ForceWriteAllTextAsync(fileName, json);                        
                        CustomTemplates = await VsixHelper.GetCustomTemplatesAsync(ItemType);
                        var haveDefaultValue = CustomTemplates.FirstOrDefault(x => x.IsDefault);
                        if (haveDefaultValue != null)
                        {
                            LoadCustomTemplates(haveDefaultValue.Title);
                        }
                        else
                        {
                            LoadCustomTemplates();
                        }
                        Mouse.OverrideCursor = null;
                        await VS.MessageBox.ShowAsync($"The custom template '{selected.Title}' has been deleted.", icon: Microsoft.VisualStudio.Shell.Interop.OLEMSGICON.OLEMSGICON_INFO, buttons: Microsoft.VisualStudio.Shell.Interop.OLEMSGBUTTON.OLEMSGBUTTON_OK, defaultButton: Microsoft.VisualStudio.Shell.Interop.OLEMSGDEFBUTTON.OLEMSGDEFBUTTON_FIRST);
                    }
                }
            }
        }
    }
}
