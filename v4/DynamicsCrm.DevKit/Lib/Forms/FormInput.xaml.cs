namespace DynamicsCrm.DevKit.Lib.Forms
{
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
