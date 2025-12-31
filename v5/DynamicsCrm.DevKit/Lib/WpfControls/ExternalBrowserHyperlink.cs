using System.Diagnostics;
using System.Windows.Documents;
using System.Windows.Navigation;

namespace DynamicsCrm.DevKit.Lib.WpfControls
{
    public class ExternalBrowserHyperlink : Hyperlink
    {
        public ExternalBrowserHyperlink()
        {
            RequestNavigate += OnRequestNavigate;
        }

        private void OnRequestNavigate(object sender, RequestNavigateEventArgs e)
        {
            Process.Start(new ProcessStartInfo(e.Uri.AbsoluteUri));
            e.Handled = true;
        }
    }
}
