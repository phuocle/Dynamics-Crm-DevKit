using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.CSharp;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared
{
    public static class Helper
    {
        private const string initVector = "ikols9i3edkdosad";

        private const int keysize = 256;

        public static string EncryptString(string plainText)
        {
            if (string.IsNullOrEmpty(plainText)) return string.Empty;
            string passPhrase = "PL.DynamicsCrm.DevKit";
            byte[] initVectorBytes = Encoding.UTF8.GetBytes(initVector);
            byte[] plainTextBytes = Encoding.UTF8.GetBytes(plainText);
#pragma warning disable SYSLIB0041
            PasswordDeriveBytes password = new(passPhrase, null);
            byte[] keyBytes = password.GetBytes(keysize / 8);
#pragma warning restore SYSLIB0041
            using var aes = Aes.Create();
            aes.Mode = CipherMode.CBC;
            aes.KeySize = keysize;
            using var encryptor = aes.CreateEncryptor(keyBytes, initVectorBytes);
            using MemoryStream memoryStream = new();
            using CryptoStream cryptoStream = new(memoryStream, encryptor, CryptoStreamMode.Write);
            cryptoStream.Write(plainTextBytes, 0, plainTextBytes.Length);
            cryptoStream.FlushFinalBlock();
            byte[] cipherTextBytes = memoryStream.ToArray();
            return Convert.ToBase64String(cipherTextBytes);
        }

        public static string DecryptString(string cipherText)
        {
            try
            {
                if (string.IsNullOrEmpty(cipherText)) return string.Empty;
                string passPhrase = "PL.DynamicsCrm.DevKit";
                byte[] initVectorBytes = Encoding.UTF8.GetBytes(initVector);
                byte[] cipherTextBytes = Convert.FromBase64String(cipherText);
#pragma warning disable SYSLIB0041
                PasswordDeriveBytes password = new(passPhrase, null);
                byte[] keyBytes = password.GetBytes(keysize / 8);
#pragma warning restore SYSLIB0041
                using var aes = Aes.Create();
                aes.Mode = CipherMode.CBC;
                aes.KeySize = keysize;
                using var decryptor = aes.CreateDecryptor(keyBytes, initVectorBytes);
                using MemoryStream memoryStream = new(cipherTextBytes);
                using CryptoStream cryptoStream = new(memoryStream, decryptor, CryptoStreamMode.Read);
                using StreamReader reader = new(cryptoStream, Encoding.UTF8);
                return reader.ReadToEnd();
            }
            catch { return cipherText; }
        }

        public static bool IsTheSame(string value1, string value2)
        {
            if (string.Equals(value1, value2, StringComparison.OrdinalIgnoreCase)) return true;
            if (string.IsNullOrEmpty(value1) && string.IsNullOrEmpty(value2)) return true;
            if (string.IsNullOrEmpty(value1) || string.IsNullOrEmpty(value2)) return false;
            var i = 0;
            var j = 0;
            while (i < value1.Length && j < value2.Length)
            {
                if (char.IsWhiteSpace(value1[i]))
                {
                    i++;
                    continue;
                }
                if (char.IsWhiteSpace(value2[j]))
                {
                    j++;
                    continue;
                }
                if (char.ToUpperInvariant(value1[i]) != char.ToUpperInvariant(value2[j])) return false;
                i++;
                j++;
            }
            while (i < value1.Length)
            {
                if (!char.IsWhiteSpace(value1[i])) return false;
                i++;
            }
            while (j < value2.Length)
            {
                if (!char.IsWhiteSpace(value2[j])) return false;
                j++;
            }
            return true;
        }

        public static async Task<string> ReadEmbeddedResourceAsync(string path)
        {
            string data;
            var assembly = typeof(Helper).Assembly;
            Stream resourceStream = assembly.GetManifestResourceStream(path);
            using (resourceStream)
            using (var reader = new StreamReader(resourceStream))
            {
                data = await reader.ReadToEndAsync();
            }
            return data;
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

            name = name.Replace("-", "_");

            name = name.Replace(" ", "_");
            name = name.Replace("____", "_");
            name = name.Replace("___", "_");
            name = name.Replace("__", "_");
            name = name.Replace("Đ", "D");
            name = name.Replace("đ", "d");

            if (name.Length == 0) return "_";

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
            return name switch
            {
                "import" => true,
                "package" => true,
                _ => false,
            };
        }

        public static string SafeDeclareName(string declareName, GeneratorType generatorType, string schemaName = null, AttributeMetadata attribute = null)
        {
            var SAFE_DECLARE_NAME = new List<string>
            {
                "EntityLogicalName",
                "EntityTypeCode",
                "EntityCollectionSchemaName",
                "EntityDisplayCollectionName",
                "DisplayName",
                "EntitySetName",
                "EntityLogicalCollectionName",
                "EntityPrimaryIdAttribute",
                "EntityPrimaryImageAttribute",
                "EntityPrimaryNameAttribute",
                "EntitySchemaName",
                "EntityName",
                "Entity",
                "Id",
                "LogicalName",
                "PreEntity"
            };
            var SAFE_DECLARE_NAME2 = new List<string>
            {
                "EntityName",
                "Entity",
                "EntityCollectionName"
            };
            declareName = SafeIdentifier(declareName);
            var check = generatorType == GeneratorType.csharp ? SAFE_DECLARE_NAME : SAFE_DECLARE_NAME2;
            foreach (var name in check)
                if (name.Equals(declareName))
                    return declareName + "2";
            if (attribute is FileAttributeMetadata) declareName += "_name";
            if (declareName.ToLower() == schemaName?.ToLower()) return declareName + "2";
            if (declareName.ToLower() == schemaName?.ToLower() + "id")
                if (attribute != null && attribute.AttributeType == AttributeTypeCode.Uniqueidentifier)
                    return declareName;
                else
                    return declareName + "2";
            return declareName;
        }

        public static string GetNameSpace(string rootNamespace)
        {
            var parts = rootNamespace.Split(".".ToCharArray());
            var @namespace = parts.Length > 1 ? parts[1] : parts[0];
            return Helper.SafeIdentifier(@namespace);
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
            code += $"// @ts-ignore{NEW_LINE}";
            code += $"var OptionSet;{NEW_LINE}";
            code += $"(function (/** @type {{any}} */ OptionSet) {{{NEW_LINE}";
            code += $"{TAB}OptionSet.{EntityMetadata.SchemaName} = {{{NEW_LINE}";
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (Helper.IsOptionSet(attribute))
                {
                    if (attribute.SchemaName == "OwnerIdType") continue;
                    var values = attribute.OptionSetValues();
                    if (values.Count == 0)
                    {
                        code += $"{TAB}{TAB}{attribute.SchemaName}: {{ }},{NEW_LINE}";
                    }
                    else
                    {
                        code += $"{TAB}{TAB}{attribute.SchemaName}: {{ ";
                        foreach (var value in values)
                        {
                            code += $"{value.Name}: {value.Value}, ";
                        }
                        code = code.TrimEnd($", ".ToCharArray());
                        code += $" }},{NEW_LINE}";
                    }
                }
            }
            code += $"{TAB}{TAB}RollupState: {{ NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }}{NEW_LINE}";
            code += $"{TAB}}};{NEW_LINE}";
            code += $"}})(OptionSet || (OptionSet = /** @type {{any}} */ ({{}})));";
            return code;
        }

        public static string TrimGuid(string guid)
        {
            if (guid == null) return null;
            if (Guid.TryParse(guid, out _))
                return guid.Replace("{", string.Empty).Replace("}", string.Empty);
            return guid;
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
                    case "Unregister":
                        attribute.Unregister = (bool)namedArgument.TypedValue.Value;
                        break;
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
                    case "Id":
                        attribute.Id = (string)namedArgument.TypedValue.Value;
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

        public static string GetDefaultHeaderForGeneratedCs()
        {
            var code = string.Empty;
            var NEW_LINE = "\r\n";
            var TAB = "\t";
            code += $"//---------------------------------------------------------------------------------------------------{NEW_LINE}";
            code += $"// <auto-generated>{NEW_LINE}";
            code += $"//{TAB}{TAB}Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.{NEW_LINE}";
            code += $"//{TAB}{TAB}Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit{NEW_LINE}";
            code += $"//{TAB}{TAB}Last Modified: {DateTime.Now:yyyy-MM-dd HH:mm:ss}{NEW_LINE}";
            code += $"// </auto-generated>{NEW_LINE}";
            code += $"//---------------------------------------------------------------------------------------------------{NEW_LINE}";
            return code;
        }

        public static string GetDefaultFileWithCs(EntityMetadata entityMetadata, string @namespace)
        {
            const string NEW_LINE = "\r\n";
            const string TAB = "\t";
            var code = string.Empty;
            var @class = Helper.SafeDeclareName(entityMetadata.SchemaName, GeneratorType.csharp);
            var key = (entityMetadata.IsActivity ?? false) ? "activityid" : $"{@class.ToLower()}id";
            code += $"using Microsoft.Xrm.Sdk;{NEW_LINE}";

            code += $"using System;{NEW_LINE}";
            code += NEW_LINE;
            code += $"namespace {@namespace}{NEW_LINE}";
            code += $"{{{NEW_LINE}";
            code += $"{TAB}internal partial class {@class}{NEW_LINE}";
            code += $"{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}#region --- PROPERTIES ---{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}//public string StringField {{ get {{ return GetAliasedValue<string>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public int? IntField {{ get {{ return GetAliasedValue<int?>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public DateTime? DateTimeField {{ get {{ return GetAliasedValue<DateTime?>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public EntityReference LookupField {{ get {{ return GetAliasedValue<EntityReference>(\"aliased.field\"); }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public xxxOptionSets.xxx? OptionSetField {{ get {{ return (xxxOptionSets.xxx?)GetAliasedValue<OptionSetValue>(\"aliased.field\")?.Value; }} }}{NEW_LINE}";
            code += $"{TAB}{TAB}//public decimal? MoneyField {{ get {{ return GetAliasedValue<Money>(\"aliased.field\")?.Value; }} }}{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}#endregion{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}#region --- STATIC METHODS ---{NEW_LINE}";
            code += NEW_LINE;
            code += $"{TAB}{TAB}public static {@class} Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId){NEW_LINE}";
            code += $"{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var fetchData = new{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{{{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}{TAB}{key} = recordId ?? Guid.Empty{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}}};{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var fetchXml = $@\"{NEW_LINE}";
            code += $"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>{NEW_LINE}";
            code += $"  <entity name='{@class.ToLower()}'>{NEW_LINE}";
            code += $"    <all-attributes/>{NEW_LINE}";
            code += $"    <filter type='and'>{NEW_LINE}";
            code += $"      <condition attribute='{key}' operator='eq' value='{{fetchData.{key}}}'/>{NEW_LINE}";
            code += $"    </filter>{NEW_LINE}";
            code += $"  </entity>{NEW_LINE}";
            code += $"</fetch>{NEW_LINE}";
            code += $"\";{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}var rows = serviceAdmin.RetrieveMultiple<{@class}>(fetchXml);{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}if (rows.Count == 1) return rows[0];{NEW_LINE}";
            code += $"{TAB}{TAB}{TAB}return new {@class}();{NEW_LINE}";
            code += $"{TAB}{TAB}}}{NEW_LINE}";
            code += NEW_LINE;

            code += $"{TAB}{TAB}#endregion{NEW_LINE}";
            code += $"{TAB}}}{NEW_LINE}";
            code += $"}}{NEW_LINE}";
            return code;
        }
        public static string GetDefaultFileWithWebApi(string schemaName)
        {
            const string NEW_LINE = "\r\n";
            var code = string.Empty;
            code += $"//@ts-check{NEW_LINE}";
            code += $"///<reference path=\"{schemaName}.d.ts\" />{NEW_LINE}";
            return code;
        }
        public static bool IsWebResourceExtension(string extension)
        {
            return Const.WEB_RESOURCE_EXTENSIONS.Contains(extension);
        }

        public static async Task DelayAsync(int delayInSeconds)
        {
            await Task.Delay(delayInSeconds * 1000);
        }

        public static bool IsOptionSet(AttributeMetadata attribute)
        {
            return attribute is EnumAttributeMetadata;
        }

        public static string GetExtension(WebResourceWebResourceType webresourcetype)
        {
            return webresourcetype switch
            {
                WebResourceWebResourceType.WebpageHtml => ".html",
                WebResourceWebResourceType.ScriptJScript => ".js",
                WebResourceWebResourceType.PngFormat => ".png",
                WebResourceWebResourceType.GifFormat => ".gif",
                WebResourceWebResourceType.JpgFormat => ".jpg",
                WebResourceWebResourceType.StyleSheetCss => ".css",
                WebResourceWebResourceType.IcoFormat => ".ico",
                WebResourceWebResourceType.DataXml => ".xml",
                WebResourceWebResourceType.StyleSheetXsl => ".xsl",
                WebResourceWebResourceType.SilverlightXap => ".xap",
                WebResourceWebResourceType.StringResx => ".resx",
                WebResourceWebResourceType.SvgFormat => ".svg",
                _ => ".html",
            };
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
            try
            {
                if (File.Exists(file)) File.Delete(file);
            }
            catch { }
        }

        // Return content starting from line 6 (skip the first 7 lines) from a given string content
        public static string GetContentFromLine6(string content)
        {
            try
            {
                if (string.IsNullOrEmpty(content)) return string.Empty;
                // Normalize newlines to \n for splitting
                var normalized = content.Replace("\r\n", "\n").Replace("\r", "\n");
                var lines = normalized.Split(new[] { '\n' }, StringSplitOptions.None).ToList();
                for (int i = 0; i < 7 && lines.Count > 0; i++)
                {
                    lines.RemoveAt(0);
                }
                return string.Join("\r\n", lines);
            }
            catch
            {
                return string.Empty;
            }
        }

        // Async wrapper for GetContentFromLine6
        public static Task<string> ReadContentFromLine6Async(string content)
        {
            return Task.FromResult(GetContentFromLine6(content));
        }

        public static string Decompress(string compressedString)
        {
            try
            {
                byte[] decompressedBytes;
                var compressedStream = new MemoryStream(Convert.FromBase64String(compressedString));
                using (var decompressorStream = new DeflateStream(compressedStream, CompressionMode.Decompress))
                {
                    using (var decompressedStream = new MemoryStream())
                    {
                        decompressorStream.CopyTo(decompressedStream);
                        decompressedBytes = decompressedStream.ToArray();
                    }
                }
                return Encoding.UTF8.GetString(decompressedBytes);
            }
            catch { return compressedString; }
        }

        public static string Compress(string uncompressedString)
        {
            try
            {
                byte[] compressedBytes;
                using (var uncompressedStream = new MemoryStream(Encoding.UTF8.GetBytes(uncompressedString)))
                {
                    using (var compressedStream = new MemoryStream())
                    {
                        using (var compressorStream = new DeflateStream(compressedStream, CompressionLevel.Fastest, true))
                        {
                            uncompressedStream.CopyTo(compressorStream);
                        }
                        compressedBytes = compressedStream.ToArray();
                    }
                }
                return Convert.ToBase64String(compressedBytes);
            }
            catch { return uncompressedString; }
        }

        public static List<string> GetFiles(string folder, List<string> includePatternFiles, List<string> excludePatternFiles)
        {
            if (!Directory.Exists(folder))
                return new List<string>();

            var includefiles = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var pattern in includePatternFiles)
            {
                foreach (var file in Directory.GetFiles(folder, pattern, SearchOption.AllDirectories))
                    includefiles.Add(file);
            }

            var excludefiles = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var pattern in excludePatternFiles)
            {
                foreach (var file in Directory.GetFiles(folder, pattern, SearchOption.AllDirectories))
                    excludefiles.Add(file);
            }

            var files = includefiles.Where(file => !excludefiles.Contains(file)).ToList();
            files.Sort(StringComparer.OrdinalIgnoreCase);
            return files;
        }
        public static bool IsEqualsContent(string oldContent, string newContent)
        {
            return oldContent == newContent;
        }

        public static bool IsMessageUpdate(string message)
        {
            return message.ToLower() switch
            {
                "update" or
                "updatemultiple" or
                "onexternalupdated" => true,
                _ => false,
            };
        }

        public static bool IsMessageCreate(string message)
        {
            return message.ToLower() switch
            {
                "create" or
                "createmultiple" or
                "onexternalcreated" => true,
                _ => false,
            };
        }

        public static string GetMessagePropertyName(string message)
        {
            return message.ToLower() switch
            {
                "create" => "Id",
                "createmultiple" => "Ids",
                "updatemultiple" => "Targets",
                "setstate" => "EntityMoniker",
                "setstatedynamicentity" => "EntityMoniker",
                "deliverincoming" => "EmailId",
                "deliverpromote" => "EmailId",
                "send" => "EmailId",
                _ => "Target"
            };
        }

        public static bool IsSupportPluginImage(CrmPluginRegistrationAttribute attribute)
        {
            return (attribute?.Message?.ToLower()) switch
            {
                "assign" or
                "create" or
                "delete" or
                "deliverincoming" or
                "deliverpromote" or
                "merge" or
                "route" or
                "send" or
                "setstate" or
                "setstatedynamicentity" or
                "update" or
                "createmultiple" or
                "updatemultiple" or
                "executeworkflow" => true,
                _ => false,
            };
        }

        public static async Task<(bool ok, string error)> SignAssemblyAsync(string signToolPath, string file, string certificatePath, string certificatePassword = null)
        {
            if (string.IsNullOrEmpty(signToolPath)) return (false, "SignTool.exe not found. Please install Windows SDK.");
            string arguments;
            if (string.IsNullOrEmpty(certificatePassword))
            {
                arguments = $"sign /f \"{certificatePath}\" /fd SHA256 /v \"{file}\"";
            }
            else
            {
                arguments = $"sign /f \"{certificatePath}\" /p \"{certificatePassword}\" /fd SHA256 /v \"{file}\"";
            }
            var processStartInfo = new ProcessStartInfo
            {
                FileName = signToolPath,
                Arguments = arguments,
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                CreateNoWindow = true
            };
            using (var process = new Process { StartInfo = processStartInfo })
            {
                var output = new System.Text.StringBuilder();
                var error = new System.Text.StringBuilder();
                process.OutputDataReceived += (sender, args) =>
                {
                    if (!string.IsNullOrEmpty(args.Data)) output.AppendLine(args.Data);
                };
                process.ErrorDataReceived += (sender, args) =>
                {
                    if (!string.IsNullOrEmpty(args.Data)) error.AppendLine(args.Data);
                };
                process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();
                await Task.Run(() => process.WaitForExit());
                if (process.ExitCode == 0)
                {

                    return (true, string.Empty);
                }
                else
                {
                    return (false, $"{error}");
                }
            }
        }

        public static string FindSignTool()
        {
            var programFilesX86 = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86);
            var programFiles = Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles);
            var searchPaths = new List<string>
                {
                    Path.Combine(programFilesX86, "Windows Kits", "10", "bin"),
                    Path.Combine(programFiles, "Windows Kits", "10", "bin"),
                    Path.Combine(programFilesX86, "Windows Kits", "8.1", "bin"),
                    Path.Combine(programFiles, "Windows Kits", "8.1", "bin"),
                    Path.Combine(programFilesX86, "Windows Kits", "8.0", "bin"),
                    Path.Combine(programFiles, "Windows Kits", "8.0", "bin")
                };
            foreach (var searchPath in searchPaths)
            {
                if (!Directory.Exists(searchPath)) continue;
                if (searchPath.Contains("Windows Kits\\10"))
                {
                    var versionDirs = Directory.GetDirectories(searchPath)
                        .Where(d => Directory.Exists(Path.Combine(d, "x64")) || Directory.Exists(Path.Combine(d, "x86")))
                        .OrderByDescending(d => d);
                    foreach (var versionDir in versionDirs)
                    {
                        var x64Path = Path.Combine(versionDir, "x64", "signtool.exe");
                        if (File.Exists(x64Path))
                        {
                            return x64Path;
                        }
                        var x86Path = Path.Combine(versionDir, "x86", "signtool.exe");
                        if (File.Exists(x86Path))
                        {
                            return x86Path;
                        }
                    }
                }
                else
                {
                    var x64Path = Path.Combine(searchPath, "x64", "signtool.exe");
                    if (File.Exists(x64Path))
                    {
                        return x64Path;
                    }
                    var x86Path = Path.Combine(searchPath, "x86", "signtool.exe");
                    if (File.Exists(x86Path))
                    {
                        return x86Path;
                    }
                }
            }
            return null;
        }

        public static async Task<(bool ok, string error)> SignPackageAsync(string file, string certificatePath, string certificatePassword = null)
        {
            var arguments = $"nuget sign \"{file}\" --certificate-path \"{certificatePath}\" --certificate-password \"{certificatePassword}\" --timestamper \"http://timestamp.digicert.com\"";
            var processStartInfo = new ProcessStartInfo
            {
                FileName = "dotnet",
                Arguments = arguments,
                WorkingDirectory = Path.GetDirectoryName(file),
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                CreateNoWindow = true
            };
            using (var process = new Process { StartInfo = processStartInfo })
            {
                process.Start();
                string output = await process.StandardOutput.ReadToEndAsync();
                string error = await process.StandardError.ReadToEndAsync();
                await Task.Run(() => process.WaitForExit());
                if (process.ExitCode == 0)
                {
                    return (true, string.Empty);
                }
                else
                {
                    var outputs = output.Trim().Split("\n".ToCharArray());
                    foreach (var o in outputs)
                    {
                        if (o.StartsWith("error: NU3001:")) return (false, "Package already contains a signature. Please remove the existing signature by 'Clean' and then 'Rebuild' project.");
                    }
                    return (false, $"{output}");
                }
            }
        }
    }
}