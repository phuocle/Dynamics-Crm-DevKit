using System;
using EnvDTE;
using System.IO;
using System.Reflection;
using System.Linq;

namespace PL.DynamicsCrm.DevKit.Shared
{
    public static class Utility
    {
        public static string ReadEmbeddedResource(string path)
        {
            try
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
            catch
            {
                switch (path)
                {
                    case "PL.DynamicsCrm.DevKit.Wizard.data.WebApi.js":
                        path = "PL.DynamicsCrm.DevKit.Cli.Data.WebApi.js";
                        return ReadEmbeddedResource(path);
                    case "PL.DynamicsCrm.DevKit.Wizard.data.DevKit.js":
                        path = "PL.DynamicsCrm.DevKit.Cli.Data.DevKit.js";
                        return ReadEmbeddedResource(path);
                    case "PL.DynamicsCrm.DevKit.Wizard.data.OptionSet.js":
                        path = "PL.DynamicsCrm.DevKit.Cli.Data.OptionSet.js";
                        return ReadEmbeddedResource(path);
                }
            }
            return string.Empty;
        }

        public static string SafeNamespace(string @namespace)
        {
            var items = @namespace.Split('.');
            for (var i = 0; i < items.Length; i++)
            {
                if (int.TryParse(items[i], out _))
                {
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
            foreach (Project project in dte.Solution.Projects)
            {
                if (project.ProjectItems == null || project.FileName.Length == 0) continue;
                if (project.Name == projectName) return true;
            }
            return false;
        }

        public static bool SharedProjectExist(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var sharedProjectName = Utility.GetSharedProject(solutionFullName);
            return Utility.ExistProject(dte, sharedProjectName);
        }

        public static bool ProxyTypesProjectExist(DTE dte)
        {
            var solutionFullName = dte?.Solution?.FullName;
            var proxyTypesProjectName = Utility.GetProxyTypesProject(solutionFullName);
            return Utility.ExistProject(dte, proxyTypesProjectName);
        }

        public static void TryDeleteFile(string file)
        {
            if (File.Exists(file))
            {
                try
                {
                    File.Delete(file);
                }
                catch
                {
                    // ignored
                }
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
                catch
                {
                    // ignored
                }
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

        public static string GetProxyTypesProject(string solutionFullName)
        {
            var fInfo = new FileInfo(solutionFullName);
            var parts = fInfo.Name.Split(".".ToCharArray());
            var value = string.Empty;
            for (var i = 0; i < parts.Length - 1; i++)
                value += parts[i] + ".";
            return value + $"{FormType.ProxyTypes.ToString()}";
        }

        public static string GetFolderProject(string solutionFullName, string projectName)
        {
            var fInfo = new FileInfo(solutionFullName);
            return fInfo.Directory?.FullName + "\\" + projectName;
        }

        private const string IndentString = "  ";

        public static string FormatJson(string json)
        {
            var indentation = 0;
            var quoteCount = 0;
            var result =
                from ch in json
                let quotes = ch == '"' ? quoteCount++ : quoteCount
                let lineBreak = ch == ',' && quotes % 2 == 0
                    ? ch + Environment.NewLine + string.Concat(Enumerable.Repeat(IndentString, indentation))
                    : null
                let openChar = ch == '{' || ch == '['
                    ? ch + Environment.NewLine + string.Concat(Enumerable.Repeat(IndentString, ++indentation))
                    : ch.ToString()
                let closeChar = ch == '}' || ch == ']'
                    ? Environment.NewLine + string.Concat(Enumerable.Repeat(IndentString, --indentation)) + ch
                    : ch.ToString()
                select lineBreak ?? (openChar.Length > 1
                           ? openChar
                           : closeChar);

            var @return = string.Concat(result);
            @return = @return.Replace("\":[", "\": [").Replace("\":\"", "\": \"");
            return @return;
        }

    }
}
