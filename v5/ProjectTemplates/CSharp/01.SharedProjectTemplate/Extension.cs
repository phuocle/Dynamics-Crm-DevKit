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
using System.Text;
using System.Xml;

namespace Microsoft.Xrm.Sdk
{
    [DebuggerNonUserCode()]
    internal static class Extension
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

        public static OrganizationRequest ToUpsertRequest(this Entity entity)
        {
            return new UpsertRequest
            {
                Target = entity
            };
        }

        public static OrganizationRequest ToUpsertRequest(this Entity entity, string tag = null)
        {
            var request = entity.ToUpsertRequest();
            if (tag != null) request["tag"] = tag;
            return request;
        }

        public static OrganizationRequest ToUpsertRequest(this EntityBase entity)
        {
            return entity.GetCreateEntity().ToUpsertRequest();
        }

        public static OrganizationRequest ToUpsertRequest(this EntityBase entity, string tag = null)
        {
            var request = entity.GetCreateEntity().ToUpsertRequest();
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

        public static UpsertResponse Upsert(this IOrganizationService service, Entity entity)
        {
            return (UpsertResponse)service.Execute(new UpsertRequest { Target = entity });
        }

        public static UpsertResponse Upsert(this IOrganizationService service, EntityBase entity)
        {
            return service.Upsert(entity.GetCreateEntity());
        }

        public static void SetState(this IOrganizationService service, EntityReference entityReference, int stateCode, int statusCode)
        {
            var entity = new Entity(entityReference.LogicalName, entityReference.Id);
            entity["statecode"] = new OptionSetValue(stateCode);
            entity["statuscode"] = new OptionSetValue(statusCode);
            service.Update(entity);
        }

        public static void SetState(this IOrganizationService service, Entity entity, int stateCode, int statusCode)
        {
            service.SetState(entity.ToEntityReference(), stateCode, statusCode);
        }

        public static void SetState(this IOrganizationService service, EntityBase entity, int stateCode, int statusCode)
        {
            service.SetState(entity.ToEntityReference(), stateCode, statusCode);
        }

        public static void Associate(this IOrganizationService service, EntityReference target, string relationshipName, params EntityReference[] relatedEntities)
        {
            var collection = new EntityReferenceCollection();
            foreach (var related in relatedEntities) collection.Add(related);
            service.Associate(target.LogicalName, target.Id, new Relationship(relationshipName), collection);
        }

        public static void Disassociate(this IOrganizationService service, EntityReference target, string relationshipName, params EntityReference[] relatedEntities)
        {
            var collection = new EntityReferenceCollection();
            foreach (var related in relatedEntities) collection.Add(related);
            service.Disassociate(target.LogicalName, target.Id, new Relationship(relationshipName), collection);
        }

        public static void ExecuteMultiple(this IOrganizationService service, IEnumerable<OrganizationRequest> requests, bool continueOnError = true, int batchSize = 1000)
        {
            var batch = new OrganizationRequestCollection();
            foreach (var request in requests)
            {
                batch.Add(request);
                if (batch.Count == batchSize)
                {
                    service.Execute(new ExecuteMultipleRequest
                    {
                        Requests = batch,
                        Settings = new ExecuteMultipleSettings
                        {
                            ContinueOnError = continueOnError,
                            ReturnResponses = false
                        }
                    });
                    batch = new OrganizationRequestCollection();
                }
            }
            if (batch.Count > 0)
            {
                service.Execute(new ExecuteMultipleRequest
                {
                    Requests = batch,
                    Settings = new ExecuteMultipleSettings
                    {
                        ContinueOnError = continueOnError,
                        ReturnResponses = false
                    }
                });
            }
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

        public static Entity Retrieve(this IOrganizationService service, string entityName, Guid id, params string[] columns)
        {
            return service.Retrieve(entityName, id, new ColumnSet(columns));
        }

        public static T Retrieve<T>(this IOrganizationService service, string entityName, Guid id, params string[] columns)
        {
            return service.Retrieve<T>(entityName, id, new ColumnSet(columns));
        }

        public static Entity Retrieve(this IOrganizationService service, EntityReference entityReference, ColumnSet columns)
        {
            if (entityReference == null) return null;
            return service.Retrieve(entityReference.LogicalName, entityReference.Id, columns);
        }

        public static T Retrieve<T>(this IOrganizationService service, EntityReference entityReference, ColumnSet columns)
        {
            if (entityReference == null) return default(T);
            return service.Retrieve<T>(entityReference.LogicalName, entityReference.Id, columns);
        }

        public static Entity Retrieve(this IOrganizationService service, EntityReference entityReference, params string[] columns)
        {
            if (entityReference == null) return null;
            return service.Retrieve(entityReference.LogicalName, entityReference.Id, new ColumnSet(columns));
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

        public static T GetAliasedValue<T>(this Entity entity, string alias, string attribute)
        {
            return entity.GetAliasedValue<T>($"{alias}.{attribute}");
        }

        public static T GetAliasedValue<T>(this Entity entity, string aliasedAttributeName)
        {
            if (!entity.Contains(aliasedAttributeName)) return default(T);
            var aliased = entity.GetAttributeValue<AliasedValue>(aliasedAttributeName);
            if (aliased?.Value == null) return default(T);
            if (typeof(T) == typeof(EntityReference) && aliased.Value is Guid guidValue)
                return (T)(object)new EntityReference(aliased.EntityLogicalName, guidValue);
            if (typeof(T) == typeof(Guid) && aliased.Value is EntityReference erValue)
                return (T)(object)erValue.Id;
            if (aliased.Value is T typedValue) return typedValue;
            return (T)aliased.Value;
        }

        public static string GetFormattedValue(this Entity entity, string attribute)
        {
            if (entity.FormattedValues != null && entity.FormattedValues.ContainsKey(attribute))
                return entity.FormattedValues[attribute];
            return null;
        }

        public static void MergeAttributes(this Entity target, Entity source)
        {
            if (source == null) return;
            foreach (var attr in source.Attributes)
            {
                if (!target.Contains(attr.Key))
                    target[attr.Key] = attr.Value;
            }
        }

        public static bool HasChanged(this Entity target, string attribute, Entity preImage)
        {
            if (preImage == null) return target.Contains(attribute);
            var hasInTarget = target.Contains(attribute);
            var hasInPreImage = preImage.Contains(attribute);
            if (!hasInTarget) return false;
            if (!hasInPreImage) return true;
            var targetValue = target[attribute];
            var preImageValue = preImage[attribute];
            if (targetValue == null && preImageValue == null) return false;
            if (targetValue == null || preImageValue == null) return true;
            if (targetValue is OptionSetValue osv1 && preImageValue is OptionSetValue osv2)
                return osv1.Value != osv2.Value;
            if (targetValue is Money m1 && preImageValue is Money m2)
                return m1.Value != m2.Value;
            if (targetValue is EntityReference er1 && preImageValue is EntityReference er2)
                return er1.Id != er2.Id || er1.LogicalName != er2.LogicalName;
            return !object.Equals(targetValue, preImageValue);
        }

        public static bool ContainsValue(this Entity entity, params string[] attributes)
        {
            foreach (var attr in attributes)
            {
                if (!entity.Contains(attr) || entity[attr] == null) return false;
            }
            return true;
        }

        public static bool ContainsAny(this Entity entity, params string[] attributes)
        {
            foreach (var attr in attributes)
            {
                if (entity.Contains(attr) && entity[attr] != null) return true;
            }
            return false;
        }

        public static void AddOrUpdateAttribute(this Entity entity, string name, object value)
        {
            entity[name] = value;
        }

        public static void RemoveAttributes(this Entity entity, params string[] attributes)
        {
            foreach (var attr in attributes)
                entity.Attributes.Remove(attr);
        }

        public static Entity GetTargetEntity(this IExecutionContext context)
        {
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity entity)
                return entity;
            return null;
        }

        public static T GetTargetEntity<T>(this IExecutionContext context) where T : Entity
        {
            var entity = context.GetTargetEntity();
            return entity?.ToEntity<T>();
        }

        public static EntityReference GetTargetEntityReference(this IExecutionContext context)
        {
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is EntityReference entityRef)
                return entityRef;
            return null;
        }

        public static Entity GetPreImage(this IExecutionContext context, string imageName = "PreImage")
        {
            if ((context.PreEntityImages?.Count ?? 0) == 0) return null;
            if (context.PreEntityImages.ContainsKey(imageName))
                return context.PreEntityImages[imageName];
            return context.PreEntityImages.Values.FirstOrDefault();
        }

        public static Entity GetPostImage(this IExecutionContext context, string imageName = "PostImage")
        {
            if ((context.PostEntityImages?.Count ?? 0) == 0) return null;
            if (context.PostEntityImages.ContainsKey(imageName))
                return context.PostEntityImages[imageName];
            return context.PostEntityImages.Values.FirstOrDefault();
        }

        public static T GetSharedVariable<T>(this IExecutionContext context, string key)
        {
            if (context.SharedVariables.ContainsKey(key) && context.SharedVariables[key] is T value)
                return value;
            return default(T);
        }

        public static void SetSharedVariable(this IExecutionContext context, string key, object value)
        {
            context.SharedVariables[key] = value;
        }

        public static T GetValue<T>(this ParameterCollection parameters, string key)
        {
            if (parameters.ContainsKey(key) && parameters[key] is T value)
                return value;
            return default(T);
        }

        public static void LogMessage(this ITracingService tracingService, string message)
        {
#if DEBUG
            tracingService?.Trace(message);
#endif
        }

        /// <summary>
        /// Debug context using DevKitJson compact format.
        /// Uses short keys to maximize data within the 10 KB Plugin Trace Log limit.
        /// Output is a C# code snippet that can be copy-pasted into unit tests.
        /// </summary>
        public static void DebugContext(this ITracingService tracingService, IExecutionContext context)
        {
#if DEBUG
            const int MAX_TRACE_BYTES = 10 * 1024;
            var json = DevKitJson.SerializeContext(context);
            if (Encoding.UTF8.GetByteCount(json) > MAX_TRACE_BYTES)
            {
                json = $"var json = \"{json.Compress()}\".Decompress();";
                if (Encoding.UTF8.GetByteCount(json) > MAX_TRACE_BYTES)
                    json = "DebugContext: context exceeds 10 KB even after compact + compress";
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
            if (!collection.ContainsKey(imageName)) return null;
            return collection[imageName];
        }
    }
}
