using System.IO;
using System.Text;

namespace DynamicsCrm.DevKit.Tool
{
    internal class Utility
    {
        private static readonly Encoding Utf8WithoutBom = new UTF8Encoding(false);

        public static void ForceWriteAllText(string file, string content)
        {
            var directory = Path.GetDirectoryName(file);
            if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
                Directory.CreateDirectory(directory);
            if (File.Exists(file))
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
            }
            File.WriteAllText(file, content, Utf8WithoutBom);
        }
    }
}
