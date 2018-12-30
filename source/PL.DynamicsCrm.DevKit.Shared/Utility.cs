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
                if (project.ProjectItems == null ||  project.FileName.Length == 0) continue;
                if (project.Name == projectName) return true;
            }
            return false;
        }

        public static void TryDeleteFile(string file)
        {
            if (File.Exists(file))
            {
                try
                {
                    File.Delete(file);
                }
                catch { }
            }
        }

        public static void TryDeleteDirectory(string directory)
        {
            if (Directory.Exists(directory))
            {
                try
                {
                    Directory.Delete(directory, true);
                }
                catch { }
            }
        }

        public static string GetSharedProject(string solutionFullName)
        {
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo.Name.Split(".".ToCharArray());
            var value = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                value += parts[i] + ".";
            return value + $"{FormType.Shared.ToString()}";
        }

        public static string GetFolderProject(string solutionFullName, string projectName)
        {
            var fInfo = new FileInfo(solutionFullName);
            return fInfo.Directory.FullName + "\\" + projectName;
        }
    }
}