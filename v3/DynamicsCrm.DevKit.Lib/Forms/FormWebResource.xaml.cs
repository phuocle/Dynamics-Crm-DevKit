using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.Shell;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormWebResource : BaseDialogWindow
    {
        public List<DeployWebResource> WebResources { get; }
        private string _FullFileName = string.Empty;
        public string FullFileName {
            get { return _FullFileName; }
            set {
                _FullFileName = value;
                textboxNewWebResource.Text = _FullFileName.Replace(@"\", "/");
            }
        }
        public DeployWebResource SelectedWebResource
        {
            get
            {
                var value = (DeployWebResource)comboWebResources.SelectedItem;
                value.FullFileName = FullFileName;
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
                    FullFileName = FullFileName,
                    SolutionUniqueName = solution.SolutionUniqueName,
                    WebResourceName = textboxPrefix.Text + textboxNewWebResource.Text
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
            checkButtonOk();
        }

        private void checkButtonOk()
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
            var fileName = VsixHelper.GetDynamicsCrmDevKitCachedJsonFileName();
            if (File.Exists(fileName))
            {
                var json = File.ReadAllText(fileName);
                var cachedJson = SimpleJson.DeserializeObject<CachedJson>(json);
                var deployWebResource = cachedJson.DeployWebResources.Where(x => x.FullFileName == FullFileName).FirstOrDefault();
                if (deployWebResource != null)
                {
                    var webResource = WebResources.Where(x => x.WebResourceName == deployWebResource.WebResourceName).FirstOrDefault();
                    if (webResource != null)
                    {
                        return webResource.DisplayWebResourceName;
                    }
                }
            }
            return String.Empty;
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
