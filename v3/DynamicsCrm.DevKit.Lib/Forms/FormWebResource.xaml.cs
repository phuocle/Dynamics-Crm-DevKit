using DynamicsCrm.DevKit.Shared.Models;
using System.Collections.Generic;

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
            comboWebResources.DisplayMemberPath = "WebResourceName";
            comboWebResources.ItemsSource = WebResources;
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
