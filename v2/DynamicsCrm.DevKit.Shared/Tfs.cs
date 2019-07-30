using System.Diagnostics;
using System.IO;
using EnvDTE;
using Process = System.Diagnostics.Process;

namespace DynamicsCrm.DevKit.Shared
{
    public class Tfs
    {
        public Tfs(DTE dte)
        {
            DTE = dte;
        }

        private DTE DTE { get; }

        private string Tf
        {
            get
            {
                var exe = DTE.Application.FileName;
                var fInfo = new FileInfo(exe);
                if (File.Exists($"{fInfo.DirectoryName}\\fe.exe"))
                    return $"{fInfo.DirectoryName}\\fe.exe";
                if (File.Exists($"{fInfo.DirectoryName}\\CommonExtensions\\Microsoft\\TeamFoundation\\Team Explorer\\tf.exe"))
                    return $"{fInfo.DirectoryName}\\CommonExtensions\\Microsoft\\TeamFoundation\\Team Explorer\\tf.exe";
                return null;
            }
        }

        private void Run(string tf, string arguments)
        {
            try
            {
                var startInfo = new ProcessStartInfo
                {
                    FileName = tf,
                    Arguments = arguments,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                };
                var processTemp = new Process
                {
                    StartInfo = startInfo,
                    EnableRaisingEvents = true
                };
                processTemp.Start();
            }
            catch
            {
                // ignored
            }
        }

        public void Undo(string folder)
        {
            var tf = Tf;
            if (tf == null) return;
            Run(tf, $"undo {folder}\\*.* /recursive");
        }

        public void Add(string folder)
        {
            var tf = Tf;
            if (tf == null) return;
            Run(tf, $"add {folder}\\*.* /recursive");
        }
    }
}
