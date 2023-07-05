using Community.VisualStudio.Toolkit;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
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
                else if(ItemType == ItemType.CustomAction)
                    template = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomAction.tt");
                else if (ItemType == ItemType.CustomApi)
                    template = Utility.ReadEmbeddedResource("DynamicsCrm.DevKit.Lib.Resources.CustomApi.tt");
                Textbox.Text = template;
            }
        }

        private void BaseDialogWindow_SizeChanged(object sender, System.Windows.SizeChangedEventArgs e)
        {
            Textbox.Height = e.NewSize.Height - 110;
        }
    }
}
