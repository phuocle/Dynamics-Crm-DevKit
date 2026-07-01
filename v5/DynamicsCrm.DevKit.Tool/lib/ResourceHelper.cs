using System;
using System.IO;

namespace DynamicsCrm.DevKit.Tool.Lib
{
    internal class ResourceHelper
    {
        public static string ReadResource(string name)
        {
            var assembly = typeof(ResourceHelper).Assembly;
            var resourceName = $"DynamicsCrm.DevKit.Tool.Resources.CreateEntity.{name}";
            using (var stream = assembly.GetManifestResourceStream(resourceName))
            {
                if (stream == null)
                    throw new Exception($"Embedded resource '{resourceName}' not found.");
                using (var reader = new StreamReader(stream))
                {
                    return reader.ReadToEnd();
                }
            }
        }
    }
}
