using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.CSharp;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
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
            PasswordDeriveBytes password = new(passPhrase, null);
            byte[] keyBytes = password.GetBytes(keysize / 8);
            RijndaelManaged symmetricKey = new()
            {
                Mode = CipherMode.CBC
            };
            ICryptoTransform encryptor = symmetricKey.CreateEncryptor(keyBytes, initVectorBytes);
            MemoryStream memoryStream = new();
            CryptoStream cryptoStream = new(memoryStream, encryptor, CryptoStreamMode.Write);
            cryptoStream.Write(plainTextBytes, 0, plainTextBytes.Length);
            cryptoStream.FlushFinalBlock();
            byte[] cipherTextBytes = memoryStream.ToArray();
            memoryStream.Close();
            cryptoStream.Close();
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
                PasswordDeriveBytes password = new(passPhrase, null);
                byte[] keyBytes = password.GetBytes(keysize / 8);
                RijndaelManaged symmetricKey = new()
                {
                    Mode = CipherMode.CBC
                };
                ICryptoTransform decryptor = symmetricKey.CreateDecryptor(keyBytes, initVectorBytes);
                MemoryStream memoryStream = new(cipherTextBytes);
                CryptoStream cryptoStream = new(memoryStream, decryptor, CryptoStreamMode.Read);
                byte[] plainTextBytes = new byte[cipherTextBytes.Length];
                int decryptedByteCount = cryptoStream.Read(plainTextBytes, 0, plainTextBytes.Length);
                memoryStream.Close();
                cryptoStream.Close();
                return Encoding.UTF8.GetString(plainTextBytes, 0, decryptedByteCount);
            }
            catch { return cipherText; }
        }

        public static bool IsTheSame(string value1, string value2)
        {
            if (value1 == null && value2 == null) return true;
            if (value1 != null && value2 == null) return false;
            if (value1 == null && value2 != null) return false;
            value1 = value1.Replace("\r\n", string.Empty).Replace("\r", string.Empty).Replace("\t", string.Empty).Replace(" ", string.Empty).Trim();
            value2 = value2.Replace("\r\n", string.Empty).Replace("\r", string.Empty).Replace("\t", string.Empty).Replace(" ", string.Empty).Trim();
            return string.Equals(value1, value2, StringComparison.OrdinalIgnoreCase);
        }

        public static async Task<string> ReadEmbeddedResourceAsync(string path)
        {
            string data;
            var assembly = typeof(Helper).Assembly;
            Stream resourceStream = assembly.GetManifestResourceStream(path); ;
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
            code += $"var OptionSet;{NEW_LINE}";
            code += $"(function (OptionSet) {{{NEW_LINE}";
            code += $"{TAB}OptionSet.{EntityMetadata.SchemaName} = {{{NEW_LINE}";
            foreach (var attribute in EntityMetadata.Attributes.OrderBy(x => x.SchemaName))
            {
                if (Helper.IsOptionSet(attribute))
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
            code += $"{TAB}public partial class {@class}{NEW_LINE}";
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

        public static async Task<string> GetDefaultFileWithFormAsync(ServiceClient CrmServiceClient, EntityMetadata entityMetadata, string rootnamespace)
        {
            string GetUnquieFormName(List<string> FormNames, string formName)
            {
                if (!FormNames.Contains(formName))
                {
                    FormNames.Add(formName);
                    return formName;
                }
                else
                {
                    var count = FormNames.Count(x => x == formName) + 1;
                    FormNames.Add(formName);
                    return $"{formName}{count}";
                }
            }
            var forms = await XrmHelper.GetEntityFormsAsync(CrmServiceClient, entityMetadata.LogicalName);
            if (!forms.Any()) return GetDefaultFileWithWebApi(entityMetadata.SchemaName);
            var @namespace = Helper.GetNameSpace(rootnamespace);
            var code = string.Empty;
            code += $"//@ts-check\r\n";
            code += $"///<reference path=\"{entityMetadata.SchemaName}.d.ts\" />\r\n";
            code += "\"use strict\";\r\n";
            var formNames = new List<string>();
            foreach (var form in forms)
            {
                var formName = Helper.GetFormName(form.Name, entityMetadata.SchemaName);
                formName = GetUnquieFormName(formNames, formName);
                var type = $"{@namespace}.Form{Helper.SafeIdentifier(formName)}";
                code += $"var form{Helper.SafeIdentifier(formName)} = (function () {{\r\n";
                code += $"\t\"use strict\";\r\n";
                code += $"\t/** @type {type} */\r\n";
                code += $"\tvar form = null;\r\n";
                code += $"\t/** @param {{any}} executionContext */\r\n";
                code += $"\tasync function onLoad(executionContext) {{\r\n";
                code += $"\t\tform = new {type}(executionContext);\r\n";
                code += $"\t\tregisterEvents();\r\n";
                code += $"\t\tform.UiAddLoaded(UiAddLoaded);\r\n";
                code += $"\t}}\r\n";
                code += $"\tfunction registerEvents() {{\r\n";
                code += $"\t\tif (form.ExecutionContext.IsInitialLoad()) {{\r\n";
                code += $"\t\t}}\r\n";
                code += $"\t}}\r\n";
                code += $"\t//BEGIN ON LOAD ========================================================\r\n";
                code += $"\tasync function UiAddLoaded(executionContext) {{\r\n";
                code += $"\t}}\r\n";
                code += $"\t//END ON LOAD ==========================================================\r\n";
                code += $"\t//BEGIN ON CHANGE ======================================================\r\n";
                code += $"\r\n";
                code += $"\t//END ON CHANGE ========================================================\r\n";
                code += $"\t//BEGIN PRE SEARCH =====================================================\r\n";
                code += $"\r\n";
                code += $"\t//END PRE SEARCH =======================================================\r\n";
                code += $"\t//BEGIN OTHERS =========================================================\r\n";
                code += $"\r\n";
                code += $"\t//END OTHERS ===========================================================\r\n";
                code += $"\treturn {{\r\n\t\tOnLoad: onLoad\r\n\t}};\r\n";
                code += $"}})();\r\n";
            }
            code = code.TrimEnd("\r\n".ToCharArray());
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

        public static string BuildConnectionStringLog(string connectionString)
        {
            if (string.IsNullOrWhiteSpace(connectionString)) return string.Empty;
            var crmConn = ParseConnectionString(connectionString);
            if (crmConn == null) return string.Empty;
            var full = BuildConnectionString(crmConn);
            var parts = full.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
            var sb = new StringBuilder();
            foreach (var part in parts)
            {
                var kv = part.Split(new[] { '=' }, 2, StringSplitOptions.None);
                if (kv.Length != 2)
                {
                    sb.Append(part).Append(';');
                    continue;
                }
                var key = kv[0];
                if (key.Equals("Password", StringComparison.OrdinalIgnoreCase))
                    sb.Append("Password=********;");
                else if (key.Equals("ClientSecret", StringComparison.OrdinalIgnoreCase))
                    sb.Append("ClientSecret=********;");
                else
                    sb.Append(part).Append(';');
            }
            return sb.ToString().Replace(";;", ";");
        }

        public static async Task<(ServiceClient serviceClient, string error)> IsConnectedAsync(string connectionString)
        {
            try
            {
                var crmServiceClient = new ServiceClient(connectionString);

                // Wait a bit for the connection to establish
                await Task.Delay(100);

                if (crmServiceClient.IsReady)
                {
                    return (crmServiceClient, null);
                }

                // Wait up to 30 seconds for connection to establish
                var timeout = TimeSpan.FromSeconds(30);
                var start = DateTime.Now;
                while (!crmServiceClient.IsReady && DateTime.Now - start < timeout)
                {
                    await Task.Delay(500);
                }

                if (crmServiceClient.IsReady)
                {
                    return (crmServiceClient, null);
                }
                else
                {
                    var error = !string.IsNullOrEmpty(crmServiceClient.LastError)
                        ? crmServiceClient.LastError
                        : "Unable to connect to Dynamics 365. Connection timeout.";
                    return (null, error);
                }
            }
            catch (Exception ex)
            {
                return (null, ex.Message);
            }
        }

        public static ServiceClient IsConnected(string connectionString, out string error)
        {
            error = null;

            var crmServiceClient = new ServiceClient(connectionString);

            return crmServiceClient;
        }

        public static string BuildConnectionString(CrmConnection crmConnection, bool isEncrypt = false)
        {
            if (crmConnection == null) return string.Empty;
            var type = crmConnection.Type;
            var url = crmConnection.Url;
            var userName = crmConnection.UserName;
            var password = DecryptString(crmConnection.Password);
            if (isEncrypt) password = Helper.EncryptString(password);
            switch (type.ToUpperInvariant())
            {
                case "CLIENTSECRET":
                    return $"AuthType=ClientSecret;Url={url};ClientId={userName};ClientSecret={password};";
                case "AD":
                    if (string.IsNullOrEmpty(userName) || !userName.Contains("\\"))
                        throw new ArgumentException("For AD authentication, username must be in format 'domain\\username'");
                    var parts = userName.Split('\\');
                    if (parts.Length != 2)
                        throw new ArgumentException("For AD authentication, username must be in format 'domain\\username'");
                    var domain = parts[0];
                    var user = parts[1];
                    return $"AuthType=AD;Url={url};Domain={domain};Username={user};Password={password};";
                case "OAUTH":
                default:
                    var connectionString = $"AuthType=OAuth;Url={url};Username={userName};Password={password};";
                    if (!connectionString.ToLower().Contains("appid="))
                    {
                        connectionString += "AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;";
                    }
                    if (!connectionString.ToLower().Contains("redirecturi="))
                    {
                        connectionString += "RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;";
                    }
                    if (!connectionString.ToLower().Contains("loginprompt="))
                    {
                        connectionString += "LoginPrompt=Auto;";
                    }
                    return connectionString;
            }
        }

        /// <summary>
        /// Parse a raw connection string (with plain or encrypted Password/ClientSecret) into a CrmConnection.
        /// Returned CrmConnection stores the secret encrypted so the ONLY place to build a runtime usable
        /// connection string is BuildConnectionString(CrmConnection,...).
        /// </summary>
        public static CrmConnection ParseConnectionString(string connectionString)
        {
            if (string.IsNullOrWhiteSpace(connectionString)) return null;
            string authType = null;
            string url = null;
            string username = null; // user or clientid
            string domain = null;
            string secretOrPassword = null;

            var parts = connectionString.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries);
            foreach (var part in parts)
            {
                var kv = part.Split(new[] { '=' }, 2, StringSplitOptions.None);
                if (kv.Length != 2) continue;
                var key = kv[0].Trim();
                var value = kv[1];
                if (key.Equals("AuthType", StringComparison.OrdinalIgnoreCase)) authType = value;
                else if (key.Equals("Url", StringComparison.OrdinalIgnoreCase)) url = value;
                else if (key.Equals("ClientId", StringComparison.OrdinalIgnoreCase)) username = value;
                else if (key.Equals("Username", StringComparison.OrdinalIgnoreCase)) username = value;
                else if (key.Equals("Domain", StringComparison.OrdinalIgnoreCase)) domain = value;
                else if (key.Equals("Password", StringComparison.OrdinalIgnoreCase)) secretOrPassword = value;
                else if (key.Equals("ClientSecret", StringComparison.OrdinalIgnoreCase)) secretOrPassword = value;
            }
            if (string.IsNullOrWhiteSpace(authType)) authType = "OAuth";
            if (!string.IsNullOrEmpty(domain) && !string.IsNullOrEmpty(username) && authType.Equals("AD", StringComparison.OrdinalIgnoreCase))
                username = domain + "\\" + username;

            // Ensure we store encrypted
            string storedPassword;
            var decryptedAttempt = DecryptString(secretOrPassword);
            if (decryptedAttempt != secretOrPassword)
                storedPassword = secretOrPassword; // already encrypted
            else
                storedPassword = string.IsNullOrEmpty(secretOrPassword) ? string.Empty : EncryptString(secretOrPassword);

            return new CrmConnection
            {
                Name = string.Empty,
                Type = authType,
                Url = url,
                UserName = username,
                Password = storedPassword
            };
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
    }
}