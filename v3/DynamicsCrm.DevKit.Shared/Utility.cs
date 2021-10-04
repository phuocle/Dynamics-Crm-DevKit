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
    }
}
