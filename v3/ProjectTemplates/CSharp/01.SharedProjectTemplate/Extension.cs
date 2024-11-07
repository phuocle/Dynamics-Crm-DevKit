using $SharedNameSpace$;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Xml;

namespace Microsoft.Xrm.Sdk
{
    [DebuggerNonUserCode()]
    public static class Extension
    {

        public static OrganizationRequest ToUpdateRequest(this Entity entity)
        {
            return new UpdateRequest
            {
                Target = entity
            };
        }

        public static OrganizationRequest ToUpdateRequest(this Entity entity, string tag = null)
        {
            var request = entity.ToUpdateRequest();
            if (tag != null) request["tag"] = tag;
            return request;
        }

        public static OrganizationRequest ToUpdateRequest(this EntityBase entity)
        {
            return entity.GetUpdateEntity().ToUpdateRequest();
        }

        public static OrganizationRequest ToUpdateRequest(this EntityBase entity, string tag = null)
        {
            var request = entity.GetUpdateEntity().ToUpdateRequest();
            if (tag != null) request["tag"] = tag;
            return request;
        }

        public static OrganizationRequest ToCreateRequest(this Entity entity)
        {
            return new CreateRequest
            {
                Target = entity
            };
        }

        public static OrganizationRequest ToCreateRequest(this Entity entity, string tag = null)
        {
            var request = entity.ToCreateRequest();
            if (tag != null) request["tag"] = tag;
            return request;
        }

        public static OrganizationRequest ToCreateRequest(this EntityBase entity)
        {
            return entity.GetCreateEntity().ToCreateRequest();
        }

        public static OrganizationRequest ToCreateRequest(this EntityBase entity, string tag = null)
        {
            var request = entity.GetCreateEntity().ToCreateRequest();
            if (tag != null) request["tag"] = tag;
            return request;
        }

        public static OrganizationRequest ToDeleteRequest(this Entity entity)
        {
            return entity.ToEntityReference().ToDeleteRequest();
        }

        public static OrganizationRequest ToDeleteRequest(this EntityReference entityReference)
        {
            return new DeleteRequest
            {
                Target = entityReference
            };
        }

        public static OrganizationRequest ToDeleteRequest(this EntityBase entity)
        {
            return entity.ToEntityReference().ToDeleteRequest();
        }

        public static OrganizationRequest ToDeleteRequest(this Entity entity, string tag = null)
        {
            var request = entity.ToEntityReference().ToDeleteRequest();
            if (tag != null) request["tag"] = tag;
            return request;
        }

        public static OrganizationRequest ToDeleteRequest(this EntityReference entityReference, string tag = null)
        {
            var request = new DeleteRequest
            {
                Target = entityReference
            };
            if (tag != null) request["tag"] = tag;
            return request;
        }

        public static OrganizationRequest ToDeleteRequest(this EntityBase entity, string tag = null)
        {
            var request = entity.ToEntityReference().ToDeleteRequest();
            if (tag != null) request["tag"] = tag;
            return request;
        }

        public static Guid Create(this IOrganizationService service, EntityBase entity)
        {
            return service.Create(entity.GetCreateEntity());
        }

        public static void Update(this IOrganizationService service, EntityBase entity)
        {
            service.Update(entity.GetUpdateEntity());
        }

        public static void Delete(this IOrganizationService service, EntityBase entity)
        {
            service.Delete(entity.LogicalName, entity.Id);
        }

        public static void Delete(this IOrganizationService service, EntityReference entityReference)
        {
            service.Delete(entityReference?.LogicalName, entityReference.Id);
        }

        public static T Retrieve<T>(this IOrganizationService service, string entityName, Guid id, ColumnSet columns)
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

        public static List<T> RetrieveMultiple<T>(this IOrganizationService service, string fetchXml) where T : EntityBase
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

        public static EntityCollection RetrieveMultiple(this IOrganizationService service, string fetchXml)
        {
            var entityCollection = new EntityCollection();
            string pagingCookie = null;
            var pageNumber = 1;
            var fetchCount = 5000;
            while (true)
            {
                fetchXml = CreateXml(fetchXml, pagingCookie, pageNumber, fetchCount);
                var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
                entityCollection.Entities.AddRange(rows.Entities);
                if (rows.MoreRecords)
                {
                    pageNumber++;
                    pagingCookie = rows.PagingCookie;
                }
                else break;
            }
            return entityCollection;
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
#if DEBUG
            tracingService?.Trace(message);
#endif
        }

        public static void DebugContext(this ITracingService tracingService, IExecutionContext context)
        {
#if DEBUG
            var json = context.ToRemoteExecutionContext().SerializeRemoteExecutionContext();
            if (json.Length > 10000)
            {
                json = $"var json = Helper.Decompress(\"{json.Compress()}\");";
                if (json.Length > 10000) json = "json more than 10,000 chars";
            }
            else
            {
                if (json.Contains("'"))
                {
                    json = $"var json = @\"{json.Replace("\"", "\"\"")}\";";
                }
                else
                {
                    json = json.Replace("\"", "'");
                    json = $"var json = @\"{json}\".Replace(\"'\", \"\\\"\");";
                }
            }
            tracingService.LogMessage(json);
#endif
        }
        public static void DebugMessage(this ITracingService tracingService, string message)
        {
#if DEBUG
            tracingService.LogMessage(message);
#endif
        }
        public static void DebugMethod(this ITracingService tracingService)
        {
#if DEBUG
            var stackTrace = new System.Diagnostics.StackTrace();
            System.Reflection.MethodBase method = stackTrace.GetFrame(1).GetMethod();
            var debug = $"{method?.ReflectedType?.Namespace}.{method?.ReflectedType.Name}.{method?.Name}";
            tracingService?.DebugMessage(debug);
#endif
        }

        public static RemoteExecutionContext ToRemoteExecutionContext(this IExecutionContext context)
        {
            var destination = new RemoteExecutionContext();
            var destFields = destination.GetType()
                .GetFields(BindingFlags.NonPublic | BindingFlags.Instance)
                .ToArray();
            foreach (var sourceProperty in context.GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance))
            {
                foreach (var destField in destFields)
                {
                    if (sourceProperty.Name == "PreEntityImages" && destField.Name == "_preImages")
                    {
                        destField.SetValue(destination, sourceProperty.GetValue(context, new object[] { }));
                        break;
                    }
                    if (sourceProperty.Name == "PostEntityImages" && destField.Name == "_postImages")
                    {
                        destField.SetValue(destination, sourceProperty.GetValue(context, new object[] { }));
                        break;
                    }
                    if (!destField.Name.ToLower().Contains(sourceProperty.Name.ToLower()) || !destField.FieldType.IsAssignableFrom(sourceProperty.PropertyType)) continue;
                    destField.SetValue(destination, sourceProperty.GetValue(context, new object[] { }));
                    break;
                }
            }
            return destination;
        }

        public static string SerializeRemoteExecutionContext(this RemoteExecutionContext context)
        {
            var settings = new DataContractJsonSerializerSettings() { DateTimeFormat = new DateTimeFormat("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'") };
            var serializer = new DataContractJsonSerializer(typeof(RemoteExecutionContext), settings);
            using (MemoryStream ms = new MemoryStream())
            {
                using (StreamReader sr = new StreamReader(ms))
                {
                    serializer.WriteObject(ms, context);
                    ms.Position = 0;
                    return sr.ReadToEnd();
                }
            }
        }

        public static string Decompress(this string compressedString)
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

        public static string Compress(this string uncompressedString)
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

        public static Entity GetImage(this EntityImageCollection collection, string imageName)
        {
            if ((collection?.Count ?? 0) == 0) return null;
            return collection[imageName];
        }
    }
}
