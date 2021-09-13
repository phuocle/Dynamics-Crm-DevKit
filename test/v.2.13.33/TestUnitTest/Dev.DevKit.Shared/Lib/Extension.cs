using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Diagnostics;
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

        public static void LogMessage(this ITracingService tracingService, string message)
        {
            tracingService.Trace(message);
        }

#if DEBUG
        private static DebugEntity EntityToObject(Entity x)
        {
            return new DebugEntity
            {
                Attributes = x?.Attributes.ToDictionary(a => a.Key, a => AttributeValue(a.Value)),
                FormattedValues = x?.FormattedValues.ToDictionary(a => a.Key, a => a.Value),                    
                KeyAttributes = x?.KeyAttributes.ToDictionary(a => a.Key, a => AttributeValue(a.Value)),
                Id = x?.Id,
                LogicalName = x?.LogicalName,
                RowVersion = x?.RowVersion                    
            };
        }

        private static DebugEntityReference EntityReferenceToObject(EntityReference x)
        {
            return new DebugEntityReference
            {
                Id = x?.Id,
                LogicalName = x?.LogicalName
            };
        }

        private static DebugAttributeValue AttributeValue(object value)
        {
            if (value is EntityReference er)
            {
                return new DebugAttributeValue
                {                    
                    Type = nameof(EntityReference),
                    Value = er.Id,
                    EntityLogicalName = er.LogicalName
                };
            }
            else if (value is OptionSetValue osv)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(OptionSetValue),
                    Value = osv.Value
                };
            }
            else if (value is int i)
            {
                return new DebugAttributeValue
                {
                    Type = "int",
                    Value = i
                };
            }
            else if (value is bool b)
            {
                return new DebugAttributeValue
                {
                    Type = "bool",
                    Value = b
                };
            }
            else if (value is double d)
            {
                return new DebugAttributeValue
                {
                    Type = "double",
                    Value = d
                };
            }
            else if (value is decimal de)
            {
                return new DebugAttributeValue
                {
                    Type = "decimal",
                    Value = de
                };
            }
            else if (value is Money m)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(Money),
                    Value = m.Value
                };
            }
            else if (value is DateTime dt)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(DateTime),
                    Value = dt
                };
            }
            else if (value is Guid g)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(Guid),
                    Value = g
                };
            }
            else if (value is string s)
            {
                return new DebugAttributeValue
                {
                    Type = "string",
                    Value = s
                };
            }
            else if (value is byte[] by)
            {
                return new DebugAttributeValue
                {
                    Type = "byte[]",
                    Value = by
                };
            }
            else if (value is long l)
            {
                return new DebugAttributeValue
                {
                    Type = "long",
                    Value = l
                };
            }
            else if (value is OptionSetValueCollection ovc)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(OptionSetValueCollection),
                    Value = ovc.Select(x => x.Value).ToList()
                };
            }
            else if (value is EntityCollection ec)
            {
                return new DebugAttributeValue
                {
                    Type = nameof(EntityCollection),
                    Value = ec.Entities.Select(x => EntityToObject(x)).ToList()
                };
            }
            return new DebugAttributeValue
            {
                Type = "???",
                Value = value
            };
        }
#endif

        public static void DebugContext(this ITracingService tracingService, IExecutionContext context)
        {
#if DEBUG
            try
            {
                var preEntityImages = new Dictionary<string, object>();
                foreach (var key in context?.PreEntityImages?.Keys)
                {
                    preEntityImages.Add(key, EntityToObject(context?.PreEntityImages?[key]));
                }
                var postEntityImages = new Dictionary<string, object>();
                foreach (var key in context?.PostEntityImages?.Keys)
                {
                    postEntityImages.Add(key, EntityToObject(context?.PostEntityImages?[key]));
                }
                var inputParameters = new Dictionary<string, object>();
                foreach (var key in context?.InputParameters?.Keys)
                {
                    if (context?.InputParameters?[key] is Entity x)
                    {
                        inputParameters.Add(key, EntityToObject(x));
                    }
                    else if (context?.InputParameters?[key] is EntityReference er)
                    {
                        inputParameters.Add(key, EntityReferenceToObject(er));
                    }
                    else
                    {
                        inputParameters.Add(key, context?.InputParameters?[key]);
                    }
                }
                var outputParameters = new Dictionary<string, object>();
                foreach (var key in context?.OutputParameters?.Keys)
                {
                    if (context?.OutputParameters?[key] is Entity x)
                    {
                        outputParameters.Add(key, EntityToObject(x));
                    }
                    else if (context?.OutputParameters?[key] is EntityReference er)
                    {
                        outputParameters.Add(key, EntityReferenceToObject(er));
                    }
                    else
                    {
                        outputParameters.Add(key, context?.OutputParameters?[key]);
                    }
                }
                var debug = new DebugContext
                {
                    BusinessUnitId = context?.BusinessUnitId,
                    CorrelationId = context?.CorrelationId,
                    Depth = context?.Depth,
                    InitiatingUserId = context?.InitiatingUserId,
                    IsExecutingOffline = context?.IsExecutingOffline,
                    IsInTransaction = context?.IsInTransaction,
                    IsOfflinePlayback = context?.IsOfflinePlayback,
                    IsolationMode = context?.IsolationMode,
                    MessageName = context?.MessageName,
                    Mode = context?.Mode,
                    OperationCreatedOn = context?.OperationCreatedOn,
                    OperationId = context?.OperationId,
                    OrganizationId = context?.OrganizationId,
                    OrganizationName = context?.OrganizationName,
                    OwningExtension = EntityReferenceToObject(context?.OwningExtension),
                    PrimaryEntityId = context?.PrimaryEntityId,
                    PrimaryEntityName = context?.PrimaryEntityName,
                    RequestId = context?.RequestId,
                    SecondaryEntityName = context?.SecondaryEntityName,
                    SharedVariables = context?.SharedVariables,
                    UserId = context?.UserId,
                    InputParameters = inputParameters,
                    OutputParameters = outputParameters,
                    PostEntityImages = postEntityImages,
                    PreEntityImages = preEntityImages,
                };
                var json = SimpleJson.SerializeObject(debug);
                json = json.Replace("\"", "'").Replace(":{}", ":null").Replace(": {}", ": null").Replace(",'EntityLogicalName':null", "");
                tracingService.LogMessage(json);
            }
            catch { }
#endif
        }

        public static void DebugMessage(this ITracingService tracingService, string message)
        {
#if DEBUG
            tracingService.LogMessage(message);
#endif
        }

        public static string ToDebug(this DataCollection<Entity> entities)
        {
#if DEBUG
            var records = new List<object>();
            foreach (var entity in entities)
                records.Add(EntityToObject(entity));
            return SimpleJson.SerializeObject(records);
#else
            return string.Empty;
#endif
        }

        public static string ToDebug(this Entity entity)
        {
#if DEBUG
            return SimpleJson.SerializeObject(EntityToObject(entity));
#else
            return string.Empty;
#endif
        }
    }
}
