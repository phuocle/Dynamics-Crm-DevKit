namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormInput : BaseDialogWindow
    {
        public FormInput(string @default = null)
        {
            InitializeComponent();
            if (@default != null ) textboxInputValue.Text = @default;
        }

        public string InputValue => textboxInputValue.Text;

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
