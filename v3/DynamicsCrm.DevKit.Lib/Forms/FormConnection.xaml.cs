using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormConnection : BaseDialogWindow
    {
        public FormConnection()
        {
            InitializeComponent();
            FixMicrosoftXrmToolingUiStyles();
        }

        private void FixMicrosoftXrmToolingUiStyles()
        {
            var executingAssembly = Assembly.GetExecutingAssembly();
            var fInfo = new System.IO.FileInfo(executingAssembly.Location);
            var checkFile = $"{fInfo.Directory.FullName}\\Microsoft.Xrm.Tooling.Ui.Styles.dll";
            if (System.IO.File.Exists(checkFile))
                Assembly.LoadFrom(checkFile);
        }

        public bool IsOOBConnection => radioButtonOOBConnection.IsChecked ?? false;

        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private void ButtonOK_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = true;
        }
    }
}
