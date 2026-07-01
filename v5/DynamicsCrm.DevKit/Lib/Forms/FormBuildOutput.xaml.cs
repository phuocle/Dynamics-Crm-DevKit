using System;
using System.Runtime.InteropServices;
using System.Windows;
using System.Windows.Interop;
using System.Windows.Media;
using System.Windows.Threading;
using Microsoft.VisualStudio.Shell;

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

        // Win32 API constants and imports for disabling close button
        private const int GWL_STYLE = -16;
        private const int WS_SYSMENU = 0x80000;

        [DllImport("user32.dll", SetLastError = true)]
        private static extern int GetWindowLong(IntPtr hWnd, int nIndex);

        [DllImport("user32.dll")]
        private static extern int SetWindowLong(IntPtr hWnd, int nIndex, int dwNewLong);

        public FormBuildOutput(string fileName, string buildMode = "Debug")
        {
            InitializeComponent();
            _fileName = fileName;
            Title = $"Building TypeScript ({buildMode}): {fileName}";
            StatusText.Text = $"Building {fileName} ({buildMode})...";
            Loaded += FormBuildOutput_Loaded;
        }

        private void FormBuildOutput_Loaded(object sender, RoutedEventArgs e)
        {
            DisableCloseButton();
        }

        private void DisableCloseButton()
        {
            var hwnd = new WindowInteropHelper(this).Handle;
            var style = GetWindowLong(hwnd, GWL_STYLE);
            SetWindowLong(hwnd, GWL_STYLE, style & ~WS_SYSMENU);
        }

        private void EnableCloseButton()
        {
            var hwnd = new WindowInteropHelper(this).Handle;
            var style = GetWindowLong(hwnd, GWL_STYLE);
            SetWindowLong(hwnd, GWL_STYLE, style | WS_SYSMENU);
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
                // Switch to UI thread safely using the VS JoinableTaskFactory
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
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
                // Switch to UI thread safely using the VS JoinableTaskFactory
                ThreadHelper.JoinableTaskFactory.Run(async () =>
                {
                    await ThreadHelper.JoinableTaskFactory.SwitchToMainThreadAsync();
                    UpdateBuildStatus(success, message);
                });
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
                // Enable the X button so user can close after reviewing errors
                EnableCloseButton();
            }
        }
    }
}
