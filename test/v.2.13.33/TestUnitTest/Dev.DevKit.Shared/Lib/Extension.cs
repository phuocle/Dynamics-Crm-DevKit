using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Xml;

namespace Microsoft.Xrm.Sdk
{
    [System.Diagnostics.DebuggerNonUserCode()]
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

        public static void DebugContext(this ITracingService tracingService, IExecutionContext context)
        {
#if DEBUG
            var json = Debug.DebugContext(context);
            tracingService.LogMessage(json);
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
                records.Add(Debug.EntityToObject(entity));
            return SimpleJson.SerializeObject(records);
#else
            return string.Empty;
#endif
        }

        public static string ToDebug(this Entity entity)
        {
#if DEBUG
            return SimpleJson.SerializeObject(Debug.EntityToObject(entity));
#else
            return string.Empty;
#endif
        }
    }
}
