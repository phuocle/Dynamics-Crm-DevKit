using DynamicsCrm.DevKit.Lib;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.Shell;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Input;
using DataverseTestCandidate = DynamicsCrm.DevKit.Shared.Templates.PluginTestCandidate;
using ItemType = DynamicsCrm.DevKit.Shared.ItemType;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormPlugin : BaseDialogWindow
    {
        private const string TAB = "\t";
        private const string NEW_LINE = "\r\n";
        public ServiceClient ServiceClient => CONNECTION.ServiceClient;
        private EnvDTE.Project TestProject { get; }
        private MetadataService _metadataService;
        private MetadataService Metadata => _metadataService ??= new MetadataService(ServiceClient);
        private static readonly ConcurrentDictionary<string, List<XrmEntity>> ProvisionedLanguagesCache = new ConcurrentDictionary<string, List<XrmEntity>>();
        public CrmConnection CrmConnection => CONNECTION.CrmConnection;
        private List<CustomTemplate> CustomTemplates { get; set; } = new List<CustomTemplate>();
        private PluginTestCandidate SelectedTestPlugin => ComboBoxTestPlugin?.SelectedItem as PluginTestCandidate;
        private readonly string _telemetryCorrelationId = ItemTemplateTelemetry.NewCorrelationId();
        private readonly System.IDisposable _dialogTelemetryScope;
        public string Class => GetClassBaseName(TextboxClass.Text);
        public string PluginSchemaName
        {
            get
            {
                if (ItemType == ItemType.Test && SelectedTestPlugin != null) return SelectedTestPlugin.EntitySchemaName ?? string.Empty;
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
                if (ItemType == ItemType.Test && SelectedTestPlugin != null) return SelectedTestPlugin.MessageName ?? string.Empty;
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
                if (ItemType == ItemType.Test && SelectedTestPlugin != null) return SelectedTestPlugin.Stage ?? string.Empty;
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
                if (ItemType == ItemType.Test && SelectedTestPlugin != null) return SelectedTestPlugin.ExecutionMode ?? string.Empty;
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
                if (ItemType == ItemType.Test && SelectedTestPlugin != null) return SelectedTestPlugin.EntityLogicalName ?? string.Empty;
                if (ComboBoxEntity.Visibility == System.Windows.Visibility.Collapsed) return string.Empty;
                var selected = (XrmEntity)ComboBoxEntity.SelectedItem;
                return selected.LogicalName ?? string.Empty;
            }
        }

        public string EntityDisplayName
        {
            get
            {
                if (ComboBoxEntity.Visibility == System.Windows.Visibility.Collapsed) return string.Empty;
                if (ComboBoxEntity?.SelectedItem is XrmEntity entity)
                    return entity.DisplayName ?? string.Empty;
                return string.Empty;
            }
        }
        public string EntitySetName
        {
            get
            {
                if (ComboBoxEntity.Visibility == System.Windows.Visibility.Collapsed) return string.Empty;
                if (ComboBoxEntity?.SelectedItem is XrmEntity entity)
                    return entity.EntitySetName ?? string.Empty;
                return string.Empty;
            }
        }
        public int EntityTypeCode
        {
            get
            {
                if (ComboBoxEntity.Visibility == System.Windows.Visibility.Collapsed) return -1;
                if (ComboBoxEntity?.SelectedItem is XrmEntity entity)
                    return entity.EntityTypeCode;
                return -1;
            }
        }
        public bool IsCustomEntity
        {
            get
            {
                if (ComboBoxEntity.Visibility == System.Windows.Visibility.Collapsed) return false;
                if (ComboBoxEntity?.SelectedItem is XrmEntity entity)
                    return entity.IsCustomEntity;
                return false;
            }
        }

        public string LanguageCode => PluginLogicalName;
        public string BatFileName => PluginLogicalName;
        public string TestTargetFullClassName => ItemType switch
        {
            ItemType.DataverseTest => (ComboBoxTestPlugin.SelectedItem as DataverseTestCandidate)?.FullClassName ?? string.Empty,
            ItemType.Test when SelectedTestPlugin?.SupportsGuardTest == true => SelectedTestPlugin.FullClassName ?? string.Empty,
            _ => string.Empty
        };

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
                return ThreadHelper.JoinableTaskFactory.Run(async () => await Metadata.GetPluginCommentAsync(PluginLogicalName, PluginMessage));
            }
        }

        private ItemType _ItemType = DynamicsCrm.DevKit.Shared.ItemType.None;

        private bool IsTestClassItem => ItemType is ItemType.Test or ItemType.UiTest or ItemType.DataverseTest;

        private string GetClassBaseName(string className)
        {
            var name = className?.Trim() ?? string.Empty;
            if ((ItemType is ItemType.Test or ItemType.UiTest) && name.EndsWith("Test", System.StringComparison.Ordinal))
                return name.Substring(0, name.Length - 4);
            return name;
        }

        private string GetTestClassPreviewName()
        {
            var name = TextboxClass.Text?.Trim() ?? string.Empty;
            if (string.IsNullOrEmpty(name)) return string.Empty;
            if (ItemType == ItemType.DataverseTest)
            {
                var baseName = name.Length > 4 && name.EndsWith("Test", System.StringComparison.OrdinalIgnoreCase)
                    ? name.Substring(0, name.Length - 4)
                    : name;
                return $"{baseName}Test";
            }
            return name.EndsWith("Test", System.StringComparison.Ordinal) ? name : $"{name}Test";
        }

        private void UpdateTestClassPreview()
        {
            if (!IsTestClassItem || LabelTestClassPreview == null) return;
            LabelTestClassPreview.Content = GetTestClassPreviewName();
        }

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
                    LabelTestClassPreview.Visibility = System.Windows.Visibility.Visible;
                    UpdateTestClassPreview();
                }
                void TestItem()
                {
                    var dataverseTest = ItemType == ItemType.DataverseTest;
                    HELP.NavigateUri = new System.Uri(dataverseTest
                        ? "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Dataverse-Test-Item-Template"
                        : "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/CSharp-Test-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add(dataverseTest ? "Dataverse Test Item Template" : "Test Item Template");
                    if (dataverseTest)
                    {
                        LabelTestPlugin.Content = "Server class";
                        CONNECTION.Visibility = System.Windows.Visibility.Collapsed;
                        StackPanelMain.IsEnabled = true;
                        buttonCustom.Visibility = System.Windows.Visibility.Collapsed;
                    }
                    LabelTestPlugin.Visibility = System.Windows.Visibility.Visible;
                    ComboBoxTestPlugin.Visibility = System.Windows.Visibility.Visible;
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelEntity.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxEntity.Visibility = System.Windows.Visibility.Collapsed;
                    LabelMessage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxMessage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelTestClassPreview.Visibility = System.Windows.Visibility.Visible;
                    UpdateTestClassPreview();
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
                    LabelClass.Content = "Resource";
                    LabelEntity.Content = "Language";
                }
                void BatFileItem()
                {
                    HELP.NavigateUri = new System.Uri("https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/DevKit-File-Item-Template");
                    HELP.Inlines.Clear();
                    HELP.Inlines.Add("DevKit File Item Template");
                    LabelExecution.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxExecution.Visibility = System.Windows.Visibility.Collapsed;
                    LabelStage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxStage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelMessage.Visibility = System.Windows.Visibility.Collapsed;
                    ComboBoxMessage.Visibility = System.Windows.Visibility.Collapsed;
                    LabelClass.Visibility = System.Windows.Visibility.Collapsed;
                    TextboxClass.Visibility = System.Windows.Visibility.Collapsed;
                    LabelEntity.Content = "File";
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
                    case ItemType.DataverseTest:
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

        public FormPlugin(ItemType itemType, string nameSpace, EnvDTE.Project testProject = null)
        {
            InitializeComponent();
            TestProject = testProject;
            ItemType = itemType;
            PluginNameSpace = nameSpace;
            _dialogTelemetryScope = ItemTemplateTelemetry.Start(nameof(FormPlugin), _telemetryCorrelationId, "DialogShown", $"itemType={itemType}");
            LoadComboBoxes();
            _ = LoadCustomTemplatesAsync();
        }

        internal FormPlugin(IReadOnlyList<DataverseTestCandidate> candidates, IReadOnlyList<string> templateTitles, string suggestedClassName)
            : this(ItemType.DataverseTest, null)
        {
            TextboxClass.Text = suggestedClassName;
            ComboBoxTestPlugin.IsEnabled = candidates.Count > 0;
            SetTestCandidates(candidates);
            SetCustomTemplates(templateTitles.Select(title => new CustomTemplate { Title = title }).ToList());
        }

        public string CustomTemplate
        {
            get
            {
                var selected = (CustomTemplate)ComboBoxTemplate.SelectedItem;
                return selected?.Title ?? string.Empty;
            }
        }

        private async Task LoadCustomTemplatesAsync()
        {
            if (ItemType == ItemType.Plugin || ItemType == ItemType.CustomAction || ItemType == ItemType.CustomApi || ItemType == ItemType.Workflow || ItemType == ItemType.UiTest || ItemType == ItemType.Test)
            {
                SetCustomTemplates(await VsixHelper.GetCustomTemplatesAsync(ItemType));
            }
        }

        private void SetCustomTemplates(List<CustomTemplate> templates)
        {
            CustomTemplates = templates;
            ComboBoxTemplate.ItemsSource = null;
            ComboBoxTemplate.ItemsSource = CustomTemplates;
            ComboBoxTemplate.DisplayMemberPath = nameof(DynamicsCrm.DevKit.Shared.Models.CustomTemplate.Title);
            ComboBoxTemplate.SelectedItem = CustomTemplates.FirstOrDefault(x => x.IsDefault);
            if (ComboBoxTemplate.SelectedItem == null) ComboBoxTemplate.SelectedIndex = 0;
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
            ItemTemplateTelemetry.Log(nameof(FormPlugin), _telemetryCorrelationId, "DialogCancel", $"itemType={ItemType}");
            _dialogTelemetryScope?.Dispose();
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
            if ((ItemType is ItemType.Test or ItemType.DataverseTest) && ComboBoxTestPlugin.Items.Count > 0 && ComboBoxTestPlugin.SelectedItem == null)
            {
                VS.MessageBox.ShowError($"Please select {LabelTestPlugin.Content}");
                return false;
            }
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
            var className = ItemType == ItemType.DataverseTest ? Class : TextboxClass.Text;
            if (TextboxClass.Visibility == System.Windows.Visibility.Visible && string.IsNullOrEmpty(className))
            {
                VS.MessageBox.ShowError($"Please enter {LabelClass.Content}");
                return false;
            }
            return true;
        }

        private async Task LoadPluginTestCandidatesAsync()
        {
            if (ItemType != ItemType.Test) return;
            using (ItemTemplateTelemetry.Start(nameof(FormPlugin), _telemetryCorrelationId, "LoadPluginTestCandidates"))
            {
                LockUi(true);
                var candidates = await PluginTestDiscovery.GetTestCandidatesAsync(TestProject);
                await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                SetTestCandidates(candidates);
                LockUi(false);
            }
        }

        private void SetTestCandidates<T>(IReadOnlyList<T> candidates) where T : class
        {
            ComboBoxTestPlugin.DisplayMemberPath = nameof(PluginTestCandidate.DisplayName);
            ComboBoxTestPlugin.ItemsSource = candidates;
            ComboBoxTestPlugin.SelectedItem = candidates.FirstOrDefault();
            ApplySelectedTestPluginToForm();
        }

        private void ApplySelectedTestPluginToForm()
        {
            var className = ItemType switch
            {
                ItemType.DataverseTest => (ComboBoxTestPlugin.SelectedItem as DataverseTestCandidate)?.SuggestedTestClassBaseName,
                ItemType.Test => SelectedTestPlugin?.SuggestedTestClassBaseName,
                _ => null
            };
            if (className == null) return;
            TextboxClass.Text = className;
            UpdateTestClassPreview();
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (IsValid())
            {
                ItemTemplateTelemetry.Log(nameof(FormPlugin), _telemetryCorrelationId, "DialogOK", $"itemType={ItemType}; class={Class}; entity={PluginLogicalName}; message={PluginMessage}");
                _dialogTelemetryScope?.Dispose();
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
                        await Metadata.ReadEntitiesMetadataAsync(Microsoft.Xrm.Sdk.Metadata.EntityFilters.Entity);
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
                        var items = await Metadata.GetAllDataSourceAsync();
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
                        var cacheKey = ServiceClient?.ConnectedOrgUriActual?.ToString() ?? "default";
                        if (!ProvisionedLanguagesCache.TryGetValue(cacheKey, out var items))
                        {
                            using (ItemTemplateTelemetry.Start(nameof(FormPlugin), _telemetryCorrelationId, "LoadProvisionedLanguages", $"cacheKey={cacheKey}"))
                            {
                                items = await Metadata.GetProvisionedLanguagesAsync();
                                ProvisionedLanguagesCache[cacheKey] = items;
                            }
                        }
                        else
                        {
                            ItemTemplateTelemetry.Log(nameof(FormPlugin), _telemetryCorrelationId, "LoadProvisionedLanguages", $"cacheHit cacheKey={cacheKey}; count={items.Count}");
                        }
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
                    new XrmEntity { SchemaName = "devkit.js", LogicalName = "devkit.js" },
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
            else if (ItemType == ItemType.Test)
            {
                _ = LoadPluginTestCandidatesAsync();
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
                        var items = await Metadata.GetSdkMessagesAsync(selectedEntity.LogicalName);
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
                            ComboBoxMessage.ItemsSource = await Metadata.GetCustomActionsAsync();
                        else
                            ComboBoxMessage.ItemsSource = await Metadata.GetCustomActionsAsync(selectedEntity.LogicalName);
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
                        ComboBoxMessage.ItemsSource = await Metadata.GetCustomApisAsync(selectedEntity.LogicalName);
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

        private void TextboxClass_TextChanged(object sender, System.Windows.Controls.TextChangedEventArgs e)
        {
            UpdateTestClassPreview();
        }

        private void ComboBoxTestPlugin_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            ApplySelectedTestPluginToForm();
        }
    }
}
