using System.IO;

namespace DynamicsCrm.DevKit.Tool
{
    public class Utility
    {
        public static void ForceWriteAllText(string file, string content)
        {
            if (!File.Exists(file))
            {
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
