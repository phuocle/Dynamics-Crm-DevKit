using Microsoft.CodeAnalysis.CSharp;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using static DynamicsCrm.DevKit.Shared.XrmHelper;

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
            if (name == null) return string.Empty;
            if (Guid.TryParse(name, out var outputGuid) || (name.Length > 38 && Guid.TryParse(name.Substring(0, 38), out var outputGuid2)))
            {
                name = name.ToUpper()
                    .Replace("-", "_")
                    .Replace("{", string.Empty)
                    .Replace("}", string.Empty);
                return "_" + name;
            }
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
                else if (name[0] != '_') sb.Append("_");
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
                result = $"_{result}";
            }
            result = result.Replace("__", "_");
            if (IsJsKeywords(name)) return "_" + name;
            return result;
        }

        private static bool IsJsKeywords(string name)
        {
            switch (name)
            {
                case "import":
                    return true;
                default:
                    return false;
            }
        }

        public static string SafeDeclareName(string declareName, GeneratorType generatorType, string schemaName = null, AttributeMetadata attribute = null)
        {
            declareName = SafeIdentifier(declareName);
            if (declareName.ToLower() == schemaName?.ToLower()) return declareName + "1";
            if (declareName.ToLower() == schemaName?.ToLower() + "id")
                if (attribute != null && attribute.AttributeType == AttributeTypeCode.Uniqueidentifier)
                    return declareName;
                else
                    return declareName + "1";
            if (declareName.ToLower() == "EntityLogicalName".ToLower()) return declareName + "1";
            if (declareName.ToLower() == "EntityTypeCode".ToLower()) return declareName + "1";
            if (generatorType != GeneratorType.csharp)
            {
                if (declareName.ToLower() == "EntityName".ToLower()) return declareName + "1";
            }
            if (declareName.ToLower() == "Entity".ToLower()) return declareName + "1";
            if (declareName.ToLower() == "Id".ToLower()) return declareName + "1";
            return declareName;
        }

        public static string GetNameSpace(string rootNamespace)
        {
            var parts = rootNamespace.Split(".".ToCharArray());
            var @namespace = parts.Length > 1 ? parts[1] : parts[0];
            return Utility.SafeIdentifier(@namespace);
        }

        public static string GetFormName(string formName, string @class)
        {
            if (formName.ToLower() == "information") return $"{@class} Information";
            else if (formName.ToLower() == "wizard") return $"{@class} Wizard";
            else if (formName.ToLower() == "ai for sales") return $"{@class} AI for Sales";
            else if (formName.ToLower() == "quick create") return $"{@class} Quick Create";
            else if (formName.ToLower() == "quickcreate") return $"{@class} QuickCreate";
            else if (formName.ToLower() == "new form") return $"{@class} New_Form";
            else if (formName.ToLower() == "adobe sign") return $"{@class} Adobe_Sign";
            else if (formName.ToLower() == "sales insights") return $"{@class} Sales_Insights";
            else if (formName.ToLower() == "agreement") return $"{@class} Agreement";
            else if (formName.ToLower() == "project information") return $"{@class} Project Information";
            else if (formName.ToLower() == "project quick create") return $"{@class} Project Quick Create";
            else if (formName.ToLower() == "omnichannel information") return $"{@class} Omnichannel Information";
            else if (formName.ToLower() == "field service information") return $"{@class} Field Service Information";
            else if (formName.ToLower() == "main form") return $"{@class} Main Form";
            else if (formName.ToLower() == "quick create form") return $"{@class} Quick Create Form";
            else if (formName.ToLower() == "quick create from requirement") return $"{@class} Quick Create from Requirement";
            return formName;
        }

        public static string GeneratorOptionSet(EntityMetadata EntityMetadata)
        {
            const string NEW_LINE = "\r\n";
            const string TAB = "\t";
            var code = string.Empty;
            code += $"/** @namespace OptionSet */{NEW_LINE}";
            code += $"var OptionSet;{NEW_LINE}";
            code += $"(function (OptionSet) {{{NEW_LINE}";
            code += $"{TAB}OptionSet.{EntityMetadata.SchemaName} = {{{NEW_LINE}";
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (XrmHelper.IsOptionSet(attribute))
                {
                    var values = attribute.OptionSetValues();
                    if (values.Count == 0) continue;
                    code += $"{TAB}{TAB}{attribute.SchemaName} : {{{NEW_LINE}";
                    foreach (var value in values)
                    {
                        code += $"{TAB}{TAB}{TAB}{value.Name}: {value.Value},{NEW_LINE}";
                    }
                    code = code.TrimEnd($",{NEW_LINE}".ToCharArray());
                    code += $"{NEW_LINE}";
                    code += $"{TAB}{TAB}}},{NEW_LINE}";
                }
            }
            code += $"{TAB}{TAB}RollupState : {{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}NotCalculated: 0,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}Calculated: 1,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}OverflowError: 2,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}OtherError: 3,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}RetryLimitExceeded: 4,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}HierarchicalRecursionLimitReached: 5,{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}LoopDetected: 6{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += $"{TAB}}};{NEW_LINE}";
            code += $"}})(OptionSet || (OptionSet = {{}}));";
            return code;
        }

        public static string TrimGuid(string guid)
        {
            if (guid == null) return null;
            if (Guid.TryParse(guid, out var guidType))
                return guid.Replace("{", string.Empty).Replace("}", string.Empty);
            return guid;
        }
    }
}
