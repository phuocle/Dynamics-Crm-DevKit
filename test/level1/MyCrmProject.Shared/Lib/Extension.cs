using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Xml;
using MyCrmProject.Shared;

namespace Microsoft.Xrm.Sdk
{
    [DebuggerNonUserCode()]
    public static class Extension
    {
        public static bool Delete(this IOrganizationService service, string entityName, KeyAttributeCollection keys)
        {
            var qe = new QueryExpression(entityName);
            qe.ColumnSet = new ColumnSet(true);
            foreach (var key in keys)
                qe.Criteria.AddCondition(key.Key, ConditionOperator.Equal, key.Value);
            var rows = service.RetrieveMultiple(qe);
            if (rows.Entities.Count != 1) return false;
            service.Delete(entityName, rows.Entities[0].Id);
            return true;
        }

        public static T RetrieveByGuid<T>(this IOrganizationService service, string entityName, Guid id)
        {
            try
            {
                var entity = service.Retrieve(entityName, id, new ColumnSet(true));
                object[] args = new object[] { entity };
                return (T)Activator.CreateInstance(typeof(T), args);
            }
            catch
            {
                return default(T);
            }
        }

        public static T RetrieveByKeyAttributeCollection<T>(this IOrganizationService service, string entityName, KeyAttributeCollection keys)
        {
            var qe = new QueryExpression(entityName);
            qe.ColumnSet = new ColumnSet(true);
            foreach (var key in keys)
                qe.Criteria.AddCondition(key.Key, ConditionOperator.Equal, key.Value);
            var rows = service.RetrieveMultiple(qe);
            if (rows.Entities.Count != 1) return default(T);
            var entity = rows.Entities[0];
            object[] args = new object[] { entity };
            return (T)Activator.CreateInstance(typeof(T), args);
        }

        public static List<T> RetrieveNewOrUpdatedChanges<T>(this IOrganizationService service, string entityName, ref string dataToken)
        {
            var request = new RetrieveEntityChangesRequest();
            request.EntityName = entityName;
            request.DataVersion = dataToken;
            request.Columns = new ColumnSet(true);
            request.PageInfo = new PagingInfo() { Count = 5000, PageNumber = 1, ReturnTotalRecordCount = false };
            var lists = new List<T>();
            while (true)
            {
                var response = (RetrieveEntityChangesResponse)service.Execute(request);
                foreach (var change in response.EntityChanges.Changes)
                {
                    if (change.Type == ChangeType.NewOrUpdated)
                    {
                        var changedItem = (NewOrUpdatedItem)change;
                        object[] args = new object[] { changedItem.NewOrUpdatedEntity };
                        lists.Add((T)Activator.CreateInstance(typeof(T), args));
                    }
                }
                if (!response.EntityChanges.MoreRecords)
                {
                    dataToken = response.EntityChanges.DataToken;
                    break;
                }
                request.PageInfo.PageNumber++;
                request.PageInfo.PagingCookie = response.EntityChanges.PagingCookie;
            }
            return lists;
        }

        public static List<EntityReference> RetrieveRemovedOrDeletedChanges(this IOrganizationService service, string entityName, ref string dataToken)
        {
            var request = new RetrieveEntityChangesRequest();
            request.EntityName = entityName;
            request.DataVersion = dataToken;
            request.Columns = new ColumnSet(true);
            request.PageInfo = new PagingInfo() { Count = 5000, PageNumber = 1, ReturnTotalRecordCount = false };
            var lists = new List<EntityReference>();
            while (true)
            {
                var response = (RetrieveEntityChangesResponse)service.Execute(request);
                foreach (var change in response.EntityChanges.Changes)
                {
                    if (change.Type == ChangeType.RemoveOrDeleted)
                    {
                        var changedItem = (RemovedOrDeletedItem)change;
                        lists.Add(changedItem.RemovedItem);
                    }
                }
                if (!response.EntityChanges.MoreRecords)
                {
                    dataToken = response.EntityChanges.DataToken;
                    break;
                }
                request.PageInfo.PageNumber++;
                request.PageInfo.PagingCookie = response.EntityChanges.PagingCookie;
            }
            return lists;
        }

        public static List<T> RetrieveAll<T>(this IOrganizationService service, string fetchXml = null) where T : EntityBase
        {
            if (fetchXml == null)
            {
                var entityLogicalName = typeof(T).GetField("EntityLogicalName").GetRawConstantValue().ToString();
                fetchXml = BuildFetchXmlRetrieveAll(entityLogicalName);
            }
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

        private static string BuildFetchXmlRetrieveAll(string entityLogicalName)
        {
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='{entityLogicalName}'>
    <all-attributes />
  </entity>
</fetch>
";
            return fetchXml;
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
    }
}