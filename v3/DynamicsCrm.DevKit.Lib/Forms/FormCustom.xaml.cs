namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormCustom : BaseDialogWindow
    {
        public FormCustom()
        {
            InitializeComponent();
            WindowState = System.Windows.WindowState.Maximized;
        }


        private void ButtonCancel_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = false;
        }

        private void ButtonSave_Click(object sender, System.Windows.RoutedEventArgs e)
        {

        }

        private void ButtonReset_Click(object sender, System.Windows.RoutedEventArgs e)
        {

        }

        private void BaseDialogWindow_SizeChanged(object sender, System.Windows.SizeChangedEventArgs e)
        {
            Textbox.Height = e.NewSize.Height - 110;
        }
    }
}
