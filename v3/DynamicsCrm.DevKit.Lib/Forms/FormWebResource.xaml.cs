using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormWebResource : BaseDialogWindow
    {
        public List<DeployWebResource> WebResources { get; }
        public string FullFileName { get; }
        public DeployWebResource SelectedWebResource
        {
            get
            {
                if (IsNew)
                {
                    return null;
                }
                else
                {
                    var value = (DeployWebResource)comboWebResources.SelectedItem;
                    value.FullFileName = FullFileName;
                    return value;
                }
            }
        }

        public bool IsNew { get; set; } = false;

        public FormWebResource(bool isNew)
        {
            InitializeComponent();
            IsNew = isNew;
        }

        public FormWebResource(List<DeployWebResource> webResources, string fullFileName)
        {
            InitializeComponent();
            WebResources = webResources;
            FullFileName = fullFileName;
            comboWebResources.DisplayMemberPath = "DisplayWebResourceName";
            comboWebResources.ItemsSource = WebResources;
            buttonOK.IsEnabled = comboWebResources.Items.Count > 0;
            comboWebResources.Text = GetDefaultText();
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
    }
}
