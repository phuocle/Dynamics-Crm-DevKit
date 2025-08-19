using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Windows.Controls;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    public partial class FormWebResource : BaseDialogWindow
    {
        public List<DeployWebResource> WebResources { get; }
        private string _FullFileName = string.Empty;
        public string FullFileName 
        {
            get 
            { 
                return _FullFileName; 
            }
            set 
            {
                _FullFileName = value;
                if (IsNew)
                {
                    ThreadHelper.JoinableTaskFactory.Run(async () => { 
                        var fullFileName = await VsixHelper.SelectedItem.GetFullFileNameAsync();
                        var fullFileNameForCrm = fullFileName.Substring((await VsixHelper.GetActiveProjectFolderAsync()).Length);
                        textboxNewWebResource.Text = fullFileNameForCrm.Replace("\\", "/");
                    });
                }
            }
        }
        public DeployWebResource SelectedWebResource
        {
            get
            {
                var value = (DeployWebResource)comboWebResources.SelectedItem;
                value.File = FullFileName;
                return value;
            }
        }

        public DeployWebResource SelectedNewWebResource
        {
            get
            {
                var solution = (NameValueGuidExtend)comboBoxSolutions.SelectedItem;
                return new DeployWebResource
                {
                    File = FullFileName,
                    SolutionUniqueName = solution.SolutionUniqueName,
                    WebResource = textboxPrefix.Text + textboxNewWebResource.Text
                };
            }
        }

        public bool IsNew { get; set; } = false;

        public FormWebResource(bool isNew, string fullFileName, List<NameValueGuidExtend> solutions)
        {
            InitializeComponent();
            IsNew = isNew;
            FullFileName = fullFileName;
            ExistingWebResource.Visibility = System.Windows.Visibility.Collapsed;
            wikiMapping.Visibility = System.Windows.Visibility.Collapsed;
            NewWebResource.Visibility = System.Windows.Visibility.Visible;
            wikiNewWebResource.Visibility = System.Windows.Visibility.Visible;
            comboBoxSolutions.DisplayMemberPath = "SolutionUniqueName";
            comboBoxSolutions.ItemsSource = solutions;
            if (solutions.Count > 0) comboBoxSolutions.SelectedIndex = 0;
        }

        public FormWebResource(List<DeployWebResource> webResources, string fullFileName)
        {
            InitializeComponent();
            WebResources = webResources;
            FullFileName = fullFileName;
            comboWebResources.DisplayMemberPath = "DisplayWebResourceName";
            comboWebResources.ItemsSource = WebResources;
            CheckButtonOk();
        }

        private void CheckButtonOk()
        {
            if (IsNew)
            {
            }
            else
            {
                buttonOK.IsEnabled = comboWebResources.Items.Count > 0;
                if (buttonOK.IsEnabled)
                {
                    comboWebResources.Text = GetDefaultText();
                }
                else
                {
                    labelError.Visibility = System.Windows.Visibility.Visible;
                    var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(FullFileName);
                    labelError.Content = $"WebResource contains name: [{fileNameWithoutExtension}] not found !!!";
                }
            }
        }

        private string GetDefaultText()
        {
            return ThreadHelper.JoinableTaskFactory.Run(async () =>
            {
                var fileName = await VsixHelper.GetDynamicsCrmDevKitConfigJsonFullFileNameAsync();
                if (File.Exists(fileName))
                {
                    var json = File.ReadAllText(fileName);
                    var cachedJson = SimpleJson.DeserializeObject<ConfigJson>(json);
                    var deployWebResource = cachedJson.WebResources.Where(x => x.File == FullFileName).FirstOrDefault();
                    if (deployWebResource != null)
                    {
                        var webResource = WebResources.Where(x => x.WebResource == deployWebResource.WebResource).FirstOrDefault();
                        if (webResource != null)
                        {
                            return webResource.DisplayWebResourceName;
                        }
                    }
                }
                return String.Empty;
            });            
        }

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = true;
        }

        private void ButtonNewWebResource_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            ExistingWebResource.Visibility = System.Windows.Visibility.Collapsed;
            NewWebResource.Visibility = System.Windows.Visibility.Visible;
            buttonNewWebResource.Visibility = System.Windows.Visibility.Hidden;
        }

        private void comboBoxSolutions_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            var comboBox = (ComboBox)sender;
            if (comboBox?.SelectedItem == null) return;
            var selected = (NameValueGuidExtend)comboBox.SelectedItem;
            textboxPrefix.Text = selected.SolutionPrefix + "_";
        }
    }
}
