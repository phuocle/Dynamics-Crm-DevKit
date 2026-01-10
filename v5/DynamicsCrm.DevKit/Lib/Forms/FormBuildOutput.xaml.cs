using System;
using System.Windows;
using System.Windows.Media;
using System.Windows.Threading;

namespace DynamicsCrm.DevKit.Lib.Forms
{
    /// <summary>
    /// Form to display TypeScript build output in real-time
    /// Shows as modal dialog, auto-closes on success, stays open on error
    /// </summary>
    public partial class FormBuildOutput : BaseDialogWindow
    {
        private bool _buildFailed;
        private readonly string _fileName;

        public FormBuildOutput(string fileName)
        {
            InitializeComponent();
            _fileName = fileName;
            Title = $"Building TypeScript: {fileName}";
            StatusText.Text = $"Building {fileName}...";
        }

        /// <summary>
        /// Append a line to the output textbox (thread-safe)
        /// </summary>
        public void AppendOutput(string line)
        {
            if (Dispatcher.CheckAccess())
            {
                OutputTextbox.AppendText(line + Environment.NewLine);
                OutputTextbox.ScrollToEnd();
            }
            else
            {
                Dispatcher.Invoke(() =>
                {
                    OutputTextbox.AppendText(line + Environment.NewLine);
                    OutputTextbox.ScrollToEnd();
                });
            }
        }

        /// <summary>
        /// Mark build as complete - closes automatically if success, stays open if failed
        /// </summary>
        public void BuildComplete(bool success, string message = null)
        {
            if (Dispatcher.CheckAccess())
            {
                UpdateBuildStatus(success, message);
            }
            else
            {
                Dispatcher.Invoke(() => UpdateBuildStatus(success, message));
            }
        }

        private void UpdateBuildStatus(bool success, string message)
        {
            _buildFailed = !success;

            if (success)
            {
                StatusBlock.Background = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#28A745"));
                StatusText.Text = $"✓ Build succeeded: {_fileName}";
                AppendOutput("");
                AppendOutput("=== BUILD SUCCEEDED ===");

                // Auto close after short delay
                var timer = new DispatcherTimer { Interval = TimeSpan.FromMilliseconds(500) };
                timer.Tick += (s, e) =>
                {
                    timer.Stop();
                    DialogResult = true;
                };
                timer.Start();
            }
            else
            {
                StatusBlock.Background = new SolidColorBrush((Color)ColorConverter.ConvertFromString("#DC3545"));
                StatusText.Text = $"✗ Build failed: {_fileName}";
                AppendOutput("");
                AppendOutput("=== BUILD FAILED ===");
                if (!string.IsNullOrEmpty(message))
                {
                    AppendOutput(message);
                }
                buttonClose.Visibility = Visibility.Visible;
            }
        }

        private void ButtonClose_Click(object sender, RoutedEventArgs e)
        {
            DialogResult = _buildFailed ? false : true;
        }

        private void BaseDialogWindow_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            OutputTextbox.Height = e.NewSize.Height - 100;
        }
    }
}
