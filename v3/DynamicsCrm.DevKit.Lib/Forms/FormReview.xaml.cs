namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Interaction logic for FormConnection.xaml
    /// </summary>
    public partial class FormReview : BaseDialogWindow
    {
        public FormReview(string review)
        {
            InitializeComponent();
            WindowState = System.Windows.WindowState.Maximized;
            Textbox.Text = review;
        }


        private void ButtonClose_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            DialogResult = true;
        }

        private void BaseDialogWindow_SizeChanged(object sender, System.Windows.SizeChangedEventArgs e)
        {
            Textbox.Height = e.NewSize.Height - 110;
        }
    }
}
