using System;
using System.IO;
using System.Reflection;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class Utility
    {
        public static string ReadEmbeddedResource(string path)
        {
            string data;
            var assembly = Assembly.GetExecutingAssembly();
            using (var stream = assembly.GetManifestResourceStream(path))
            using (var reader = new StreamReader(stream ?? throw new InvalidOperationException()))
            {
                data = reader.ReadToEnd();
            }

            return data;
        }
    }
}