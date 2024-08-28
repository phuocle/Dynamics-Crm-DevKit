using ItemType = DynamicsCrm.DevKit.Shared.ItemType;
using DynamicsCrm.DevKit.Shared;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.VisualStudio.Shell;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;
using System.Collections.Generic;
using System.Linq;
using Community.VisualStudio.Toolkit;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormPlugin : BaseDialogWindow
    {
        public bool IsOOBConnection => CONNECTION.IsOOBConnection;

        public CrmServiceClient CrmServiceClient => CONNECTION.CrmServiceClient;

        public string DataverseConnectionString => CONNECTION.DataverseConnectionString;

        public CrmConnection CrmConnection => CONNECTION.CrmConnection;

        public string PluginClass => TextboxClass.Text;

        public string PluginMessage => ComboBoxMessage.Text;

        public string PluginStage => ComboBoxStage.Text;

        public string PluginExecution => ComboBoxExecution.Text;

        public string PluginLogicalName
        {
            get
            {
                var selected = (XrmEntity)ComboBoxEntity.SelectedItem;
                return selected.LogicalName;
            }
        }

        public string PluginSchemaName
        {
            get
            {
                var selected = (XrmEntity)ComboBoxEntity.SelectedItem;
                return selected.SchemaName;
            }
        }

        public string PluginOrder => "1";

        public string PluginOrder2 => "";

        public string PluginComment
        {
            get
            {
                var selected = (XrmEntity)ComboBoxEntity.SelectedItem;
                var message = ComboBoxMessage.Text;
                var list = XrmHelper.GetPluginInputOutputParameters(CrmServiceClient, selected.LogicalName, message);
                if (list.Count == 0) return string.Empty;
                var max = list.OrderByDescending(s => s.Name.Length).First().Name.Length + 4;
                var code = string.Empty;
                code += $"InputParameters:\r\n";
                var inputParameters = string.Empty;
                foreach (var item in list.Where(where => where.ParameterType == ParameterType.Input))
                {
                    var @string = new string(' ', max - item.Name.Length);
                    inputParameters +=
                        $"\t\t\t{item.Name}{@string}{item.Type}{(!item.Require ? " - require" : string.Empty)}\r\n";
                }
                code += inputParameters;
                code += $"\t\tOutputParameters:\r\n";
                var outputParameters = string.Empty;
                foreach (var item in list.Where(where => where.ParameterType == ParameterType.Output))
                {
                    var @string = new string(' ', max - item.Name.Length);
                    outputParameters +=
                        $"\t\t\t{item.Name}{@string}{item.Type}{(!item.Require ? " - require" : string.Empty)}\r\n";
                }
                code += outputParameters;
                code = code.TrimEnd("\r\n".ToCharArray());
                code = code.Replace("\t", "    ");
                return code;
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
                    HELP.Inlines.Add("Custom Action Api Template");
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
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

        public FormPlugin(ItemType itemType)
        {
            InitializeComponent();
            ItemType = itemType;
            LoadComboBoxes();
        }

        private void LoadComboBoxes()
        {
            void loadStage()
            {
                var items = new List<NameValue>()
                {
                    new NameValue { Name = "PreValidation" },
                    new NameValue { Name = "PreOperation" },
                    new NameValue { Name = "PostOperation" }
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

            loadStage();
            loadExecution();
        }

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private void ButtonCustom_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            var form = new FormCustom(ItemType);
            form.ShowDialog();
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
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
                progressBar.Visibility = System.Windows.Visibility.Visible;
                _ = Task.Factory.StartNew(() =>
                {
                    ThreadHelper.JoinableTaskFactory.Run(async delegate
                    {
                        var items = XrmHelper.GetAllEntities(CrmServiceClient);
                        await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                        ComboBoxEntity.DisplayMemberPath = "Name";
                        if (ItemType == ItemType.Plugin || ItemType == ItemType.CustomAction || ItemType == ItemType.CustomApi)
                        {
                            items.Insert(0, new XrmEntity { Name = "None", LogicalName = "none", EntityTypeCode = -1, HasImage = false, IsCustomEntity = false });
                        }
                        ComboBoxEntity.ItemsSource = items;
                        buttonOK.IsEnabled = items.Count > 0;
                        var activeProject = await VsixHelper.GetActiveProjectAsync();
                        var parts = activeProject.Name.Split('.');
                        foreach (var part in parts)
                        {
                            var found = items.FirstOrDefault(x => x.LogicalName.ToLower() == part.ToLower());
                            if (found != null)
                            {
                                ComboBoxEntity.SelectedItem = found;
                                break;
                            }
                        }
                        progressBar.Visibility = System.Windows.Visibility.Hidden;
                    });
                }, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
            }
        }

        private void ComboBoxEntity_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            if (ItemType == ItemType.Plugin)
            {
                var selectedEntity = (XrmEntity)ComboBoxEntity.SelectedItem;
                var items = XrmHelper.GetSdkMessages(CrmServiceClient, selectedEntity.LogicalName);
                ComboBoxMessage.DisplayMemberPath = "Name";
                ComboBoxMessage.ItemsSource = items;
                ComboBoxMessage.SelectedItem = null;
                ComboBoxStage.SelectedItem = null;
                ComboBoxExecution.SelectedItem = null;
                TextboxClass.Text = null;
            }
            else if (ItemType == ItemType.CustomAction)
            {
                var selectedEntity = (XrmEntity)ComboBoxEntity.SelectedItem;
                var items = new List<NameValue>();
                if (selectedEntity.LogicalName == "none")
                    items = XrmHelper.GetAllCustomActions(CrmServiceClient);
                else
                    items = XrmHelper.GetCustomActionMessages(CrmServiceClient, selectedEntity.LogicalName);
                ComboBoxMessage.DisplayMemberPath = "Name";
                ComboBoxMessage.ItemsSource = items;
                ComboBoxMessage.SelectedItem = null;
                ComboBoxStage.SelectedItem = null;
                ComboBoxExecution.SelectedItem = null;
                TextboxClass.Text = null;
            }
            else if (ItemType == ItemType.CustomApi)
            {
                var selectedEntity = (XrmEntity)ComboBoxEntity.SelectedItem;
                var items = XrmHelper.GetCustomApiMessages(CrmServiceClient, selectedEntity.LogicalName);
                ComboBoxMessage.DisplayMemberPath = "Name";
                ComboBoxMessage.ItemsSource = items;
                ComboBoxMessage.SelectedItem = null;
                ComboBoxStage.SelectedItem = null;
                ComboBoxExecution.SelectedItem = null;
                TextboxClass.Text = null;
            }
        }

        private void UpdateClassName()
        {
            var selectedStage = (NameValue)ComboBoxStage.SelectedItem;
            var stage = selectedStage?.Name == "PreValidation" ? "PreValidation" : (selectedStage?.Name == "PreOperation" ? "Pre" : "Post");
            var selectedEntity = (XrmEntity)ComboBoxEntity.SelectedItem;
            var entity = selectedEntity?.Name;
            var selectedMessage = (NameValue)ComboBoxMessage.SelectedItem;
            var message = selectedMessage?.Name;
            var selectedExecution = (NameValue)ComboBoxExecution.SelectedItem;
            var execution = selectedExecution?.Name;
            if (ItemType == ItemType.CustomApi)
                TextboxClass.Text = $"{message}Request";
            else
                TextboxClass.Text = $"{stage}{entity}{message}{execution}";
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