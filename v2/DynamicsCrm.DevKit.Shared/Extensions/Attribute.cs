
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Shared.Extensions
{
    public static class Attribute
    {
        public static CrmPluginRegistrationAttribute CreateFromData(this CustomAttributeData data)
        {
            var attribute = new CrmPluginRegistrationAttribute();
            var arguments = data.ConstructorArguments.ToArray();
            var hasNamedArgumentPluginType = false;
            var isCodeActivity = false;
            var isPlugin = false;
            if (arguments.Length == 8)
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

        public static void ForEach<T>(this IEnumerable<T> ie, Action<T> action)
        {
            foreach (var i in ie)
            {
                action(i);
            }
        }

        public static List<NameValue> OptionSetValues(this AttributeMetadata attribute)
        {
            var values = new List<NameValue>();
            if (!XrmHelper.IsOptionSet(attribute)) return values;
            var options = ((EnumAttributeMetadata)attribute)?.OptionSet?.Options;
            if (options == null) return values;
            foreach (var option in options)
            {
                var name = option?.Label?.UserLocalizedLabel?.Label ?? String.Empty;
                name = name.Replace("-", "_");
                if (name.Length == 0) continue;
                name = Utility.SafeIdentifier(name);
                var value = option?.Value ?? -1;
                if (name.Length == 0 || value == -1) continue;
                var suffix = string.Empty;
                if (options.Count(x => Utility.SafeIdentifier(x?.Label?.UserLocalizedLabel?.Label) == name) > 1)
                {
                    var count = values.Count(x => x.Name2 == name);
                    suffix = $"_{value}";
                }
                var addValue = new NameValue
                {
                    Name = $"{name}{suffix}",
                    Name2 = $"{name}",
                    Value = $"{value}",
                    Label = option?.Label?.UserLocalizedLabel?.Label ?? String.Empty,
                    Name3 = string.Empty
                };
                if (option is StatusOptionMetadata statusOption) addValue.Name3 = statusOption?.State.ToString() ?? string.Empty;
                values.Add(addValue);
            }
            return values.OrderBy(x => x.Name).ToList();
        }

        public static int? GetMaxLength(this AttributeMetadata attribute)
        {
            if (attribute is StringAttributeMetadata attr1)
                return attr1.MaxLength ?? (int?)null;
            if (attribute is MemoAttributeMetadata attr2)
                return attr2.MaxLength ?? (int?)null;
            return (int?)null;
        }

        public static decimal? GetMinValue(this AttributeMetadata attribute)
        {
            if (attribute is IntegerAttributeMetadata attr1)
                return attr1.MinValue ?? -1;
            if (attribute is DecimalAttributeMetadata attr2)
                return attr2.MinValue ?? -1;
            if (attribute is MoneyAttributeMetadata attr3)
                return attr3.MinValue != null ? (decimal)attr3.MinValue.Value : -1;
            if (attribute is DoubleAttributeMetadata attr)
                return attr.MinValue != null ? (decimal)attr.MinValue.Value : -1;
            return (decimal?)null;
        }

        public static decimal? GetMaxValue(this AttributeMetadata attribute)
        {
            if (attribute is IntegerAttributeMetadata attr1)
                return attr1.MaxValue ?? -1;
            if (attribute is DecimalAttributeMetadata attr2)
                return attr2.MaxValue ?? -1;
            if (attribute is MoneyAttributeMetadata attr3)
                return attr3.MaxValue != null ? (decimal)attr3.MaxValue.Value : -1;
            if (attribute is DoubleAttributeMetadata attr)
                return attr.MaxValue != null ? (decimal)attr.MaxValue.Value : -1;
            return (decimal?)null;
        }

        public static string TrimNewLine(this string value)
        {
            if (value == null) return null;
            return value.Trim().Replace("\r\n", "").Replace("\r", "").Replace("\n", "");
        }

        public static bool IsReadOnly(this AttributeMetadata attribute)
        {
            return attribute.SourceType == 1 || attribute.SourceType == 2;
        }
        public static void AddIfNotExist(this List<EntityMetadata> entitiesMetadata, CrmServiceClient crmServiceClient, string entityLogicalName)
        {
            if (!XrmHelper.EntitiesMetadata.Any(x => x.LogicalName == entityLogicalName))
            {
                XrmHelper.EntitiesMetadata.Add(XrmHelper.GetEntityMetadata(crmServiceClient, entityLogicalName));
            }
        }

        public static void AddIfNotExist(this List<SystemForm> entitiesFormXml, CrmServiceClient crmServiceClient, string entityLogicalName)
        {
            if (!XrmHelper.EntitiesFormXml.Any(x => x.EntityLogicalName == entityLogicalName))
            {
                XrmHelper.EntitiesMetadata.AddIfNotExist(crmServiceClient, entityLogicalName);
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == entityLogicalName);
                if (entityMetadata != null)
                {
                    var forms = XrmHelper.GetEntityFormXml(crmServiceClient, entityMetadata.ObjectTypeCode);
                    if (forms.Count > 0) XrmHelper.EntitiesFormXml.AddRange(forms);
                }
            }
        }

        public static void AddIfNotExist(this List<ProcessForm> entitiesProcessForm, CrmServiceClient crmServiceClient, string entityLogicalName)
        {
            if (!XrmHelper.EntitiesProcessForm.Any(x => x.EntityLogicalName == entityLogicalName))
            {
                XrmHelper.EntitiesMetadata.AddIfNotExist(crmServiceClient, entityLogicalName);
                var entityMetadata = XrmHelper.EntitiesMetadata.FirstOrDefault(x => x.LogicalName == entityLogicalName);
                var processes = XrmHelper.GetEntityProcessForm(crmServiceClient, entityMetadata.ObjectTypeCode, entityLogicalName);
                if (processes.Count > 0) XrmHelper.EntitiesProcessForm.AddRange(processes);
            }
        }
    }
}
