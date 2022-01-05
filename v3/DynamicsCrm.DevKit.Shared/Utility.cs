using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CSharp;
using System;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

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

        public static string ReadAllText(string file)
        {
            try
            {
                return File.ReadAllText(file);
            }
            catch
            {
                return string.Empty;
            }
        }

        public static string ReadEmbeddedResource(string path)
        {
            try
            {
                string data;
                var executingAssembly = Assembly.GetExecutingAssembly();
                var directoryName = Path.GetDirectoryName(executingAssembly.Location);
                var assembly = Assembly.LoadFile(Path.Combine(directoryName, Const.DynamicsCrmDevKitLibDll));
                using (var stream = assembly.GetManifestResourceStream(path))
                using (var reader = new StreamReader(stream ?? throw new InvalidOperationException()))
                {
                    data = reader.ReadToEnd();
                }
                return data;
            }
            catch
            {
            }
            return string.Empty;
        }

        public static string GetSchemaNameFromFile(string file, string endsWith)
        {
            var fileName = Path.GetFileName(file);
            if (fileName.EndsWith(endsWith)) return fileName.Substring(0, fileName.Length - endsWith.Length);
            return fileName;
        }

        public static string SafeIdentifier(string name)
        {
            name = name.Trim();
            name = name.Replace(" ", "_");
            name = name.Replace("____", "_");
            name = name.Replace("___", "_");
            name = name.Replace("__", "_");
            if (name.Length == 0) return "_";
            var sb = new StringBuilder();
            if (!SyntaxFacts.IsIdentifierStartCharacter(name[0]))
            {
                if (name.Length == 1) sb.Append("_");
                else if (name[1] != '_') sb.Append("_");
            }
            foreach (var ch in name)
            {
                if (SyntaxFacts.IsIdentifierPartCharacter(ch))
                {
                    sb.Append(ch);
                }
            }
            var result = sb.ToString();
            if (SyntaxFacts.GetKeywordKind(result) != SyntaxKind.None)
            {
                result = $"@{result}";
            }
            result = result.Replace("__", "_");
            return result;
        }

        public static string SafeDeclareName(string declareName, string schemaName)
        {
            declareName = SafeIdentifier(declareName);
            if (declareName.ToLower() == schemaName.ToLower()) return declareName + "1";
            if (declareName.ToLower() == "EntityLogicalName".ToLower()) return declareName + "1";
            if (declareName.ToLower() == "EntityTypeCode".ToLower()) return declareName + "1";
            if (declareName.ToLower() == "Entity".ToLower()) return declareName + "1";
            if (declareName.ToLower() == "Id".ToLower()) return declareName + "1";
            return declareName;
        }

    }
}
