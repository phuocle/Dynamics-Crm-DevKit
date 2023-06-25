﻿//using Microsoft.CodeAnalysis.CSharp;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.CSharp;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Globalization;
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

        private static string GetIdentifier(string name)
        {
            var value = string.Empty;
            for (int i = 0; i < name.Length; ++i)
            {
                if (char.IsLetterOrDigit(name[i]) || name[i] == ' ' || name[i] == '-' || name[i] == '_')
                    value += name[i];
            }
            return value;
        }

        public static string SafeIdentifier(string name)
        {
            if (name == null) return string.Empty;
            name = string.Concat(name.Normalize(NormalizationForm.FormD).Where(ch => CharUnicodeInfo.GetUnicodeCategory(ch) != UnicodeCategory.NonSpacingMark)).Normalize(NormalizationForm.FormC);
            if (Guid.TryParse(name, out var outputGuid) || (name.Length > 38 && Guid.TryParse(name.Substring(0, 38), out var outputGuid2)))
            {
                name = name.ToUpper()
                    .Replace("-", "_")
                    .Replace("{", string.Empty)
                    .Replace("}", string.Empty);
                return "_" + name;
            }
            name = GetIdentifier(name);
            name = name.Trim();
            //name = name.Replace("~", string.Empty);
            //name = name.Replace("`", string.Empty);
            //name = name.Replace("!", string.Empty);
            //name = name.Replace("@", string.Empty);
            //name = name.Replace("#", string.Empty);
            //name = name.Replace("$", string.Empty);
            //name = name.Replace("%", string.Empty);
            //name = name.Replace("^", string.Empty);
            //name = name.Replace("&", string.Empty);
            //name = name.Replace("＆", string.Empty);
            //name = name.Replace("|", string.Empty);
            //name = name.Replace("*", string.Empty);
            //name = name.Replace("(", string.Empty);
            //name = name.Replace(")", string.Empty);
            name = name.Replace("-", "_");
            //name = name.Replace("{", string.Empty);
            //name = name.Replace("}", string.Empty);
            //name = name.Replace("[", string.Empty);
            //name = name.Replace("]", string.Empty);
            //name = name.Replace("\"", string.Empty);
            //name = name.Replace("'", string.Empty);
            //name = name.Replace("’", string.Empty);
            //name = name.Replace(":", string.Empty);
            //name = name.Replace(";", string.Empty);
            //name = name.Replace("<", string.Empty);
            //name = name.Replace(",", string.Empty);
            //name = name.Replace(">", string.Empty);
            //name = name.Replace(".", string.Empty);
            //name = name.Replace("?", string.Empty);
            //name = name.Replace("/", string.Empty);
            //name = name.Replace("+", string.Empty);
            //name = name.Replace("=", string.Empty);
            //name = name.Replace("–", string.Empty);
            //name = name.Replace("＆", string.Empty);
            //name = name.Replace("％", string.Empty);
            //name = name.Replace("\t", string.Empty);
            //name = name.Replace("…", string.Empty);
            name = name.Replace(" ", "_");
            name = name.Replace("____", "_");
            name = name.Replace("___", "_");
            name = name.Replace("__", "_");
            name = name.Replace("Đ", "D");
            name = name.Replace("đ", "d");
            //…
            if (name.Length == 0) return "_";
            //var sb = new StringBuilder();
            //if (!SyntaxFacts.IsIdentifierStartCharacter(name[0]))
            //{
            //    if (name.Length == 1) sb.Append("_");
            //    else if (name[0] != '_') sb.Append("_");
            //}
            //foreach (var ch in name)
            //{
            //    if (SyntaxFacts.IsIdentifierPartCharacter(ch))
            //    {
            //        sb.Append(ch);
            //    }
            //}
            //var result = sb.ToString();
            //if (SyntaxFacts.GetKeywordKind(result) != SyntaxKind.None)
            //{
            //    result = $"_{result}";
            //}
            var cs = new CSharpCodeProvider();
            name = cs.CreateValidIdentifier(name);
            name = name.Replace("__", "_");
            if (IsJsKeywords(name) || !IsFirstCharValid(name)) return "_" + name;
            return name;
        }

        private static bool IsFirstCharValid(string name)
        {
            var firstchar = name[0];
            if (firstchar >= '0' && firstchar <= '9') return false;
            return true;
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
            if (attribute is FileAttributeMetadata) declareName += "_name";
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
                    if (attribute.SchemaName == "OwnerIdType") continue;
                    var values = attribute.OptionSetValues();
                    if (values.Count == 0)
                    {
                        code += $"{TAB}{TAB}{attribute.SchemaName} : {{{NEW_LINE}";
                        code = code.TrimEnd($",{NEW_LINE}".ToCharArray());
                        code += $"{NEW_LINE}";
                        code += $"{TAB}{TAB}}},{NEW_LINE}";
                    }
                    else
                    {
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

        public static string WriteTempFile(string filename, byte[] solutionBytes)
        {
            try
            {
                var tempFolder = Path.GetTempPath();
                var tempFile = Path.Combine(tempFolder, filename);
                if (File.Exists(tempFile))
                    File.Delete(tempFile);
                File.WriteAllBytes(tempFile, solutionBytes);
                return tempFile;
            }
            catch
            {
                return null;
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
                }
            }
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
                }
            }
        }

        public static string SafeNamespace(string @namespace)
        {
            if (@namespace == null || @namespace.Length == 0) return string.Empty;
            var items = @namespace.Split('.');
            for (var i = 0; i < items.Length; i++)
            {
                if (int.TryParse(items[i], out _))
                {
                    items[i] = $"_{items[i]}";
                }
                else if (int.TryParse(items[i].Substring(0, 1), out _))
                {
                    items[i] = $"_{items[i]}";
                }
            }
            return string.Join(".", items);
        }

        public static CrmPluginRegistrationAttribute ConvertAttributeToCrmPluginRegistration(CustomAttributeData data)
        {
            var attribute = new CrmPluginRegistrationAttribute();
            var arguments = data.ConstructorArguments.ToArray();
            var hasNamedArgumentPluginType = false;
            var isCodeActivity = false;
            var isPlugin = false;
            if (arguments.Length == 8 && data.ConstructorArguments[0].ArgumentType.Name == "String")
            {
                attribute.Message = (string)arguments[0].Value;
                attribute.EntityLogicalName = (string)arguments[1].Value;
                attribute.Stage = (StageEnum)Enum.ToObject(typeof(StageEnum), (int)arguments[2].Value);
                attribute.ExecutionMode = (ExecutionModeEnum)Enum.ToObject(typeof(ExecutionModeEnum), (int)arguments[3].Value);
                attribute.FilteringAttributes = (string)arguments[4].Value;
                attribute.Name = (string)arguments[5].Value;
                attribute.ExecutionOrder = (int)arguments[6].Value;
                attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)arguments[7].Value);
                isPlugin = true;
            }
            else if (arguments.Length == 8 && data.ConstructorArguments[0].ArgumentType.Name == "MessageNameEnum")
            {
                attribute.Message = Enum.ToObject(typeof(MessageNameEnum), (int)arguments[0].Value).ToString();
                attribute.EntityLogicalName = (string)arguments[1].Value;
                attribute.Stage = (StageEnum)Enum.ToObject(typeof(StageEnum), (int)arguments[2].Value);
                attribute.ExecutionMode = (ExecutionModeEnum)Enum.ToObject(typeof(ExecutionModeEnum), (int)arguments[3].Value);
                attribute.FilteringAttributes = (string)arguments[4].Value;
                attribute.Name = (string)arguments[5].Value;
                attribute.ExecutionOrder = (int)arguments[6].Value;
                attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)arguments[7].Value);
                isPlugin = true;
            }
            else if (arguments.Length == 5)
            {
                attribute.Name = (string)arguments[0].Value;
                attribute.FriendlyName = (string)arguments[1].Value;
                attribute.Description = (string)arguments[2].Value;
                attribute.GroupName = (string)arguments[3].Value;
                attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)arguments[4].Value);
                isCodeActivity = true;
            }
            else if (arguments.Length == 3)
            {
                attribute.Name = (string)arguments[0].Value;
                attribute.Message = (string)arguments[1].Value;
                attribute.PluginType = (PluginType)Enum.ToObject(typeof(PluginType), (int)arguments[2].Value);
            }
            foreach (var namedArgument in data.NamedArguments)
            {
                switch (namedArgument.MemberName)
                {
                    case "RunAs":
                        attribute.RunAs = (string)namedArgument.TypedValue.Value;
                        break;
                    case "FriendlyName":
                        attribute.FriendlyName = (string)namedArgument.TypedValue.Value;
                        break;
                    case "GroupName":
                        attribute.GroupName = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Description":
                        attribute.Description = (string)namedArgument.TypedValue.Value;
                        break;
                    case "DeleteAsyncOperation":
                        attribute.DeleteAsyncOperation = (bool)namedArgument.TypedValue.Value;
                        break;
                    case "Offline":
                        attribute.Offline = (bool)namedArgument.TypedValue.Value;
                        break;
                    case "Server":
                        attribute.Server = (bool)namedArgument.TypedValue.Value;
                        break;
                    case "Action":
                        attribute.Action = (PluginStepOperationEnum)Enum.ToObject(typeof(PluginStepOperationEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "IsolationMode":
                        attribute.IsolationMode = (IsolationModeEnum)Enum.ToObject(typeof(IsolationModeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Message":
                        attribute.Message = (string)namedArgument.TypedValue.Value;
                        break;
                    case "EntityLogicalName":
                        attribute.EntityLogicalName = (string)namedArgument.TypedValue.Value;
                        break;
                    case "FilteringAttributes":
                        attribute.FilteringAttributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Name":
                        attribute.Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "ExecutionOrder":
                        attribute.ExecutionOrder = (int)namedArgument.TypedValue.Value;
                        break;
                    case "Stage":
                        attribute.Stage = (StageEnum)Enum.ToObject(typeof(StageEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "ExecutionMode":
                        attribute.ExecutionMode = (ExecutionModeEnum)Enum.ToObject(typeof(ExecutionModeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "UnSecureConfiguration":
                        attribute.UnSecureConfiguration = (string)namedArgument.TypedValue.Value;
                        break;
                    case "SecureConfiguration":
                        attribute.SecureConfiguration = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image1Name":
                        attribute.Image1Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image1Alias":
                        attribute.Image1Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image1Type":
                        attribute.Image1Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image1Attributes":
                        attribute.Image1Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image2Name":
                        attribute.Image2Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image2Alias":
                        attribute.Image2Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image2Type":
                        attribute.Image2Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image2Attributes":
                        attribute.Image2Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image3Name":
                        attribute.Image3Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image3Alias":
                        attribute.Image3Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image3Type":
                        attribute.Image3Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image3Attributes":
                        attribute.Image3Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image4Name":
                        attribute.Image4Name = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image4Alias":
                        attribute.Image4Alias = (string)namedArgument.TypedValue.Value;
                        break;
                    case "Image4Type":
                        attribute.Image4Type = (ImageTypeEnum)Enum.ToObject(typeof(ImageTypeEnum), (int)namedArgument.TypedValue.Value);
                        break;
                    case "Image4Attributes":
                        attribute.Image4Attributes = (string)namedArgument.TypedValue.Value;
                        break;
                    case "PluginType":
                        hasNamedArgumentPluginType = true;
                        attribute.PluginType = (PluginType)Enum.ToObject(typeof(PluginType), (int)namedArgument.TypedValue.Value);
                        break;
                    case "DataSource":
                        attribute.DataSource = (string)namedArgument.TypedValue.Value;
                        break;
                }
            }
            if (!hasNamedArgumentPluginType)
            {
                if (isCodeActivity || attribute.GroupName.Length > 0) attribute.PluginType = PluginType.Workflow;
                if (isPlugin) attribute.PluginType = PluginType.Plugin;
                if (isPlugin && attribute.EntityLogicalName?.ToLower() == "none") attribute.PluginType = PluginType.CustomAction;
            }
            return attribute;
        }

        public static void ForceWriteAllTextWithoutUTF8(string file, string content)
        {
            if (!File.Exists(file))
            {
                File.WriteAllText(file, content);
            }
            else
            {
                var attributes = File.GetAttributes(file);
                if ((attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly)
                {
                    File.SetAttributes(file, attributes & ~FileAttributes.ReadOnly);
                }
                File.WriteAllText(file, content);
            }
        }
    }
}
