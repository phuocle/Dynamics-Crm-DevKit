using System;
using System.IO;
using System.Linq;

namespace DynamicsCrm.DevKit.Shared
{
    public static class Utility
    {
        public static bool IsWebResourceExtension(string extension)
        {
            return Const.WEB_RESOURCE_EXTENSIONS.Contains(extension);
        }
        public static void ForceWriteAllText(string file, string content)
        {
            if (!File.Exists(file))
            {
                var fInfo = new FileInfo(file);
                if (!fInfo.Directory.Exists) fInfo.Directory.Create();
                File.WriteAllText(file, content, System.Text.Encoding.UTF8);
            }
            else
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                {
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
                }
                File.WriteAllText(file, content, System.Text.Encoding.UTF8);
            }
        }
        public static bool IsTheSame(string value1, string value2)
        {
            if (value1 == null && value2 == null) return true;
            if (value1 != null && value2 == null) return false;
            if (value1 == null && value2 != null) return false;
            return string.Equals(value1, value2, StringComparison.OrdinalIgnoreCase);
        }

        public static string GeNextFileName(string path)
        {
            var extension = Path.GetExtension(path);
            var i = 0;
            while (File.Exists(path))
            {
                if (i == 0)
                    path = path.Replace(extension, "(" + ++i + ")" + extension);
                else
                    path = path.Replace("(" + i + ")" + extension, "(" + ++i + ")" + extension);
            }
            return path;
        }
    }
}
