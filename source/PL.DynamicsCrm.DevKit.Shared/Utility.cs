using EnvDTE;
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

        public static string SafeNamespace(string @namespace)
        {
            var items = @namespace.Split('.');
            for(var i = 0; i<items.Length; i++ )
            {
                int output = -1;
                if (int.TryParse(items[i], out output)){
                    items[i] = $"_{items[i]}";
                }
            }
            return string.Join(".", items);
        }

        public static string SafeNamespace2(string @namespace)
        {
            var lastIndex = @namespace.LastIndexOf('.');
            return @namespace.Substring(0, lastIndex) + @namespace.Substring(lastIndex + 1);
        }

        public static bool ExistProject(DTE dte, string projectName)
        {
            foreach(Project project in dte.Solution.Projects)
            {
                if (project.FileName.Length == 0) continue;
                if (project.Name == projectName) return true;
            }
            return false;
        }
    }
}