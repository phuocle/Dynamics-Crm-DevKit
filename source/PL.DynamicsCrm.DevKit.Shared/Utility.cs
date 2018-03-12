using System.IO;
using System.Reflection;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class Utility
    {
        public static string ReadEmbeddedResource(string path)
        {
            var data = string.Empty;
            var assembly = Assembly.GetExecutingAssembly();
            using (Stream stream = assembly.GetManifestResourceStream(path))
            using (StreamReader reader = new StreamReader(stream))
                data = reader.ReadToEnd();
            return data;
        }
    }
}
