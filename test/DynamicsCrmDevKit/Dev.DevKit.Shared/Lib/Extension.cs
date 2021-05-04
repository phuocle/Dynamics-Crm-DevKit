using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml;

namespace Microsoft.Xrm.Sdk
{
    [DebuggerNonUserCode()]
    public static class Extension
    {
        public static T RetrieveByGuid<T>(this IOrganizationService service, string entityName, Guid id, ColumnSet columns)
        {
            try
            {
                var entity = service.Retrieve(entityName, id, columns);
                object[] args = new object[] { entity };
                return (T)Activator.CreateInstance(typeof(T), args);
            }
            catch
            {
                return default(T);
            }
        }

        public static List<T> RetrieveAll<T>(this IOrganizationService service, string fetchXml) where T : EntityBase
        {
            var lists = new List<T>();
            string pagingCookie = null;
            var pageNumber = 1;
            var fetchCount = 5000;
            while (true)
            {
                fetchXml = CreateXml(fetchXml, pagingCookie, pageNumber, fetchCount);
                var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
                foreach (var entity in rows.Entities)
                {
                    object[] args = new object[] { entity };
                    lists.Add((T)Activator.CreateInstance(typeof(T), args));
                }
                if (rows.MoreRecords)
                {
                    pageNumber++;
                    pagingCookie = rows.PagingCookie;
                }
                else
                    break;
            }
            return lists;
        }

#if DEBUG
        private static object EntityToObject(Entity x)
        {
            return new
            {
                x.Attributes,
                x.EntityState,
                x.ExtensionData,
                x.FormattedValues,
                x.HasLazyFileAttribute,
                x.Id,
                x.KeyAttributes,
                x.LazyFileAttributeKey,
                x.LazyFileAttributeValue,
                x.LazyFileSizeAttributeKey,
                x.LazyFileSizeAttributeValue,
                x.LogicalName,
                x.RowVersion,
                ToEntityReference = x.ToEntityReference()
            };
        }
#endif

        public static void DebugContext(this ITracingService tracingService, IPluginExecutionContext context)
        {
#if DEBUG
            var preEntityImages = context.PreEntityImages == null ? null : context.PreEntityImages.Values.Select(x => EntityToObject(x));
            var postEntityImages = context.PostEntityImages == null ? null : context.PostEntityImages.Values.Select(x => EntityToObject(x));
            var inputParameters = new Dictionary<string, object>();
            foreach (var key in context.InputParameters.Keys)
            {
                if (context.InputParameters[key] is Entity x)
                {
                    inputParameters.Add(key, EntityToObject(x));
                }
                else
                {
                    inputParameters.Add(key, context.InputParameters[key]);
                }
            }
            var outputParameters = new Dictionary<string, object>();
            foreach (var key in context.OutputParameters.Keys)
            {
                if (context.OutputParameters[key] is Entity x)
                {
                    outputParameters.Add(key, EntityToObject(x));
                }
                else
                {
                    outputParameters.Add(key, context.OutputParameters[key]);
                }
            }
            var obj = new
            {
                context.BusinessUnitId,
                context.CorrelationId,
                context.Depth,
                context.InitiatingUserId,
                context.IsExecutingOffline,
                context.IsInTransaction,
                context.IsOfflinePlayback,
                context.IsolationMode,
                context.MessageName,
                context.Mode,
                context.OperationCreatedOn,
                context.OperationId,
                context.OrganizationId,
                context.OrganizationName,
                context.OwningExtension,
                context.PrimaryEntityId,
                context.PrimaryEntityName,
                context.RequestId,
                context.SecondaryEntityName,
                context.SharedVariables,
                context.Stage,
                context.UserId,
                InputParameters = inputParameters,
                OutputParameters = outputParameters,
                PostEntityImages = postEntityImages,
                PreEntityImages = preEntityImages,
                IsAutoTransact = context.IsAutoTransact(),
                IsWithinMainTransaction = context.IsWithinMainTransaction()
            };
            tracingService.LogMessage(SimpleJson.SerializeObject(obj));
#endif
        }

        public static void DebugMessage(this ITracingService tracingService, string message)
        {
#if DEBUG
            tracingService.LogMessage(message);
#endif
        }

        public static void LogMessage(this ITracingService tracingService, string message)
        {
            tracingService.Trace(message);
        }

        private static string CreateXml(string xml, string cookie, int page, int count)
        {
            StringReader stringReader = new StringReader(xml);
            XmlTextReader reader = new XmlTextReader(stringReader);
            XmlDocument doc = new XmlDocument();
            doc.Load(reader);
            return CreateXml(doc, cookie, page, count);
        }

        private static string CreateXml(XmlDocument doc, string cookie, int page, int count)
        {
            XmlAttributeCollection attrs = doc.DocumentElement.Attributes;
            if (cookie != null)
            {
                XmlAttribute pagingAttr = doc.CreateAttribute("paging-cookie");
                pagingAttr.Value = cookie;
                attrs.Append(pagingAttr);
            }
            XmlAttribute pageAttr = doc.CreateAttribute("page");
            pageAttr.Value = System.Convert.ToString(page);
            attrs.Append(pageAttr);
            XmlAttribute countAttr = doc.CreateAttribute("count");
            countAttr.Value = System.Convert.ToString(count);
            attrs.Append(countAttr);
            StringBuilder sb = new StringBuilder(1024);
            StringWriter stringWriter = new StringWriter(sb);
            XmlTextWriter writer = new XmlTextWriter(stringWriter);
            doc.WriteTo(writer);
            writer.Close();
            return sb.ToString();
        }

        public static string ToDebug(this DataCollection<Entity> entities)
        {
            var records = new List<dynamic>();
            var typeColumns = new List<TextType>();
            foreach (var entity in entities)
                typeColumns = GetTypeColumns(typeColumns, entity);
            foreach (var entity in entities)
                records.Add(ConvertToRecord(entity, typeColumns));
            return SimpleJson.SerializeObject(records);
        }

        public static string ToDebug(this Entity entity)
        {
            return SimpleJson.SerializeObject(ConvertToRecord(entity));
        }

        private static dynamic ConvertToRecord(Entity entity)
        {
            var typeColumns = GetTypeColumns(new List<TextType>(), entity);
            return ConvertToRecord(entity, typeColumns);
        }

        private static dynamic ConvertToRecord(Entity entity, List<TextValue> columns)
        {
            foreach (var column in columns)
            {
                if (!entity.Attributes.Contains(column.Text))
                {
                    if (column.Value == "Text")
                        entity[column.Text] = string.Empty;
                    else
                        entity[column.Text] = new OptionSetValue(99999);
                }
            }
            var typeColumns = GetTypeColumns(new List<TextType>(), entity);
            return ConvertToRecord(entity, typeColumns);
        }

        private static dynamic ConvertToRecord(Entity entity, List<TextType> typeColumns)
        {
            var columns = new List<string>();
            foreach (var key in entity.Attributes)
                if (!columns.Contains(key.Key) && key.Key != $"{entity.LogicalName}id")
                    columns.Add(key.Key);
            columns.Sort();
            var record = new ExpandoObject() as IDictionary<string, object>;
            object id = ParseAttributeToObject(entity.Id, entity, $"{entity.LogicalName}id");
            record.Add($"{entity.LogicalName}id", id);
            typeColumns = typeColumns.OrderBy(x => x.Text).ToList();
            foreach (var typeColumn in typeColumns)
            {
                var column = typeColumn.Text;
                if (column == $"{entity.LogicalName}id") continue;
                if (entity.Attributes.Contains(column))
                {
                    object result = ParseAttributeToObject(entity.Attributes[column], entity, column);
                    record.Add(column.Replace(".", "_"), result);
                }
                else
                {
                    if (typeColumn.Type == typeof(OptionSetValue) ||
                        typeColumn.Type == typeof(EntityReference) ||
                        typeColumn.Type == typeof(bool))
                    {
                        record.Add(column.Replace(".", "_"), new TextValue { Text = null, Value = null });
                    }
                    else if (typeColumn.Type == typeof(OptionSetValueCollection))
                    {
                        record.Add(column.Replace(".", "_"), new List<TextValue>());
                    }
                    else if (typeColumn.Type == typeof(byte[]))
                    {
                        record.Add(column.Replace(".", "_"), new byte[] { });
                    }
                    else if (typeColumn.Type == typeof(AliasedValue))
                    {
                        if (typeColumn.AliasedType == typeof(OptionSetValue) ||
                            typeColumn.AliasedType == typeof(EntityReference) ||
                            typeColumn.AliasedType == typeof(bool))
                        {
                            record.Add(column.Replace(".", "_"), new TextValue { Text = null, Value = null });
                        }
                        else if (typeColumn.AliasedType == typeof(OptionSetValueCollection))
                        {
                            record.Add(column.Replace(".", "_"), new List<TextValue>());
                        }
                        else if (typeColumn.AliasedType == typeof(byte[]))
                        {
                            record.Add(column.Replace(".", "_"), new byte[] { });
                        }
                        else
                        {
                            record.Add(column.Replace(".", "_"), null);
                        }
                    }
                    else
                    {
                        record.Add(column.Replace(".", "_"), null);
                    }
                }
            }
            return record;
        }

        private static object ParseAttributeToObject(object attribute, Entity entity, string attributeLogicalName)
        {
            object result;
            if (attribute is EntityReference)
            {
                EntityReference entityReference = (EntityReference)attribute;
                result = new TextValue
                {
                    Value = entityReference.Id.ToString().ToUpper(),
                    Text = entityReference.Name
                };
            }
            else if (attribute is OptionSetValue)
            {
                var optionSetValue = (OptionSetValue)attribute;
                var value = optionSetValue.Value;
                var text = string.Empty;
                if (entity.FormattedValues.ContainsKey(attributeLogicalName))
                    text = entity.FormattedValues[attributeLogicalName];
                result = new TextValue
                {
                    Text = text,
                    Value = value == 99999 ? string.Empty : value.ToString()
                };
            }
            else if (attribute is OptionSetValueCollection)
            {
                var optionSetValueCollection = (OptionSetValueCollection)attribute;
                var list = new List<TextValue>();
                int i = 0;
                foreach (var optionSetValue in optionSetValueCollection)
                {
                    var value = optionSetValue.Value;
                    var text = string.Empty;
                    if (entity.FormattedValues.ContainsKey(attributeLogicalName))
                    {
                        text = entity.FormattedValues[attributeLogicalName].Split(";".ToCharArray())[i].Trim();
                        i++;
                    }
                    list.Add(new TextValue { Text = text, Value = value.ToString() });
                }
                result = list;
            }
            else if (attribute is DateTime)
            {
                var dateTime = (DateTime)attribute;
                result = dateTime.AddHours(7);
            }
            else if (attribute is Money)
            {
                var money = (Money)attribute;
                result = money.Value;
            }
            else if (attribute is int)
            {
                var @int = (int)attribute;
                result = @int;
            }
            else if (attribute is double)
            {
                var @double = (double)attribute;
                result = @double;
            }
            else if (attribute is Guid)
            {
                var guid = (Guid)attribute;
                result = guid.ToString().ToUpper();
            }
            else if (attribute is AliasedValue)
            {
                var aliasedValue = (AliasedValue)attribute;
                return ParseAttributeToObject(aliasedValue.Value, entity, attributeLogicalName);
            }
            else if (attribute is EntityCollection)
            {
                var entityCollection = (EntityCollection)attribute;
                result = ToDebug(entityCollection.Entities);
            }
            else if (attribute is bool)
            {
                var boolean = (bool)attribute;
                var text = string.Empty;
                if (entity.FormattedValues.ContainsKey(attributeLogicalName))
                    text = entity.FormattedValues[attributeLogicalName];
                result = new TextValue
                {
                    Text = text,
                    Value = boolean.ToString()
                };
            }
            else if (attribute is long)
            {
                var @long = (long)attribute;
                result = @long;
            }
            else if (attribute is decimal)
            {
                var @decimal = (decimal)attribute;
                result = @decimal;
            }
            else if (attribute is byte[])
            {
                var bytes = (byte[])attribute;
                result = bytes;
            }
            else if (attribute is BooleanManagedProperty)
            {
                var @bool = (BooleanManagedProperty)attribute;
                result = @bool.Value;
            }
            else if (attribute is string)
            {
                var @string = (string)attribute;
                result = @string;
            }
            else
                result = attribute.ToString();
            return result;
        }

        private static List<TextType> GetTypeColumns(List<TextType> typeColumns, Entity entity)
        {
            foreach (var attribute in entity.Attributes)
            {
                if (entity.Attributes[attribute.Key] is AliasedValue)
                {
                    if (!typeColumns.Any(x => x.Text == attribute.Key))
                    {
                        var aliased = (AliasedValue)entity.Attributes[attribute.Key];
                        typeColumns.Add(new TextType { Text = attribute.Key, Type = entity.Attributes[attribute.Key].GetType(), AliasedType = aliased.Value.GetType() });
                    }
                }
                else
                {
                    if (!typeColumns.Any(x => x.Text == attribute.Key))
                    {
                        typeColumns.Add(new TextType { Text = attribute.Key, Type = entity.Attributes[attribute.Key].GetType() });
                    }
                }
            }
            return typeColumns;
        }

        public static string ToMobilePhone(this string mobilePhone)
        {
            return mobilePhone
                .Replace(".", string.Empty)
                .Replace(" ", string.Empty)
                .Replace("-", string.Empty)
                .Replace("_", string.Empty);
        }
    }
}

namespace Dev.DevKit.Shared
{
    [DebuggerNonUserCode()]
    public class TextValue
    {
        public string Text { get; set; }
        public string Value { get; set; }
    }

    [DebuggerNonUserCode()]
    public class TextType
    {
        public string Text { get; set; }
        public Type Type { get; set; }
        public Type AliasedType { get; set; }
    }
}
