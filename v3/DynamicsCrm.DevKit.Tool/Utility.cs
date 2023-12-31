using System.IO;

namespace DynamicsCrm.DevKit.Tool
{
    public class Utility
    {
        public static void ForceWriteAllText(string file, string content)
        {
            var utf8WithoutBom = new System.Text.UTF8Encoding(false);
            if (!File.Exists(file))
            {
                File.WriteAllText(file, content, utf8WithoutBom);
            }
            else
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                {
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
                }
                File.WriteAllText(file, content, utf8WithoutBom);
            }
        }
    }
}
