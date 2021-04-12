using MarkMpn.Sql4Cds.Engine.FetchXml;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace MyFather.DataProvider.SqlAccount.Mappers
{
    public class GenericMapper
    {
        protected IPluginExecutionContext context { get; set; }
        protected IOrganizationService service { get; set; }
        protected ITracingService tracing { get; set; }

        private EntityMetadata primaryEntityMetadata = null;

        public GenericMapper(IPluginExecutionContext context, IOrganizationService service, ITracingService tracing)
        {
            this.context = context;
            this.service = service;
            this.tracing = tracing;
        }
        public EntityMetadata PrimaryEntityMetadata
        {
            get
            {
                if (primaryEntityMetadata == null)
                {
                    //Create RetrieveEntityRequest
                    RetrieveEntityRequest retrievesEntityRequest = new RetrieveEntityRequest
                    {
                        EntityFilters = EntityFilters.Entity | EntityFilters.Attributes,
                        LogicalName = context.PrimaryEntityName
                    };

                    //Execute Request
                    RetrieveEntityResponse retrieveEntityResponse = (RetrieveEntityResponse)service.Execute(retrievesEntityRequest);
                    primaryEntityMetadata = retrieveEntityResponse.EntityMetadata;
                }

                return primaryEntityMetadata;
            }
        }

        public virtual void MapFetchXml(object fetch)
        {
            //if (fetch is condition cond)
            //{
            //    if (!string.IsNullOrEmpty(cond.value))
            //    {
            //        cond.value = MapToVirtualEntityValue(cond.attribute, cond.value).ToString();
            //    }
            //    else if (cond.Items.Length > 0)
            //    {
            //        for (int i = 0; i < cond.Items.Length; i++)
            //        {
            //            tracing.DebugMessage($"PreConvert: {cond.Items[i].Value}");
            //            cond.Items[i].Value = MapToVirtualEntityValue(cond.attribute, cond.Items[i].Value).ToString();
            //            tracing.DebugMessage($"PostConvert: {cond.Items[i].Value}");
            //        }
            //    }
            //}

            if (fetch is FetchType ft)
            {
                for (int i = 0; i < ft.Items.Length; i++)
                {
                    object item = ft.Items[i];
                    MapFetchXml(item);
                }
            }
            else if (fetch is FetchEntityType fet)
            {
                for (int i = 0; i < fet.Items.Length; i++)
                {
                    object item = fet.Items[i];
                    MapFetchXml(item);
                }
            }
            else if (fetch is FetchLinkEntityType felt)
            {
                for (int i = 0; i < felt.Items.Length; i++)
                {
                    object item = felt.Items[i];
                    MapFetchXml(item);
                }
            }
            else if (fetch is filter filt)
            {
                for (int i = 0; i < filt.Items.Length; i++)
                {
                    object item = filt.Items[i];
                    MapFetchXml(item);
                }
            }

        }

        public virtual string MapVirtualEntityAttributes(string sql)
        {
            var iEnum = this.GetCustomMappings().GetEnumerator();
            while (iEnum.MoveNext())
            {
                sql = sql.Replace(iEnum.Current.Key, iEnum.Current.Value);
            }

            return sql;
        }

        public virtual EntityCollection CreateEntities(DataSet dataSet, int pageSize, int pageNumber)
        {
            var collection = new EntityCollection();
            collection.EntityName = context.PrimaryEntityName;
            collection.TotalRecordCount = dataSet.Tables[0].Rows.Count;
            collection.MoreRecords = (collection.TotalRecordCount > (pageSize * pageNumber)) || pageSize == -1;
            if (dataSet != null && dataSet.Tables.Count > 0)
            {
                var rows = (pageSize > -1) ? dataSet.Tables[0].AsEnumerable().Skip(pageSize * (pageNumber - 1)).Take(pageSize) : dataSet.Tables[0].AsEnumerable();
                foreach (DataRow row in rows)
                {
                    Entity entity = new Entity(context.PrimaryEntityName);
                    foreach (DataColumn col in dataSet.Tables[0].Columns)
                    {
                        if (row[col] != null && row[col] != DBNull.Value)
                        {
                            var entityAttribute = this.PrimaryEntityMetadata.Attributes.FirstOrDefault(a => a.ExternalName == col.ColumnName);
                            if (entityAttribute != null)
                            {
                                var value = MapToVirtualEntityValue(entityAttribute, row[col]);
                                entity[entityAttribute.LogicalName] = value;
                                if (entityAttribute.IsPrimaryId.Value)
                                {
                                    entity.Id = Guid.Parse(value.ToString());
                                }
                            }
                        }
                    }
                    collection.Entities.Add(entity);
                }
            }
            return collection;
        }

        public virtual Dictionary<string, string> GetCustomMappings()
        {
            Dictionary<string, string> mappings = new Dictionary<string, string>();

            foreach (var att in PrimaryEntityMetadata.Attributes)
            {
                if (!string.IsNullOrEmpty(att.ExternalName))
                {
                    mappings.Add(att.LogicalName, att.ExternalName);
                }
            }
            mappings.Add(PrimaryEntityMetadata.LogicalName, PrimaryEntityMetadata.ExternalName);

            return mappings;
        }

        public virtual object MapToVirtualEntityValue(string attributeName, object value)
        {
            var att = this.PrimaryEntityMetadata.Attributes.FirstOrDefault(a => a.LogicalName == attributeName);
            return MapToVirtualEntityValue(att, value);
        }

        public virtual object MapToVirtualEntityValue(AttributeMetadata entityAttribute, object value)
        {
            if (value == null || value == DBNull.Value)
            {
                return null;
            }
            else if (entityAttribute.LogicalName == this.PrimaryEntityMetadata.PrimaryIdAttribute && Int32.TryParse(value.ToString(), out int keyInt))
            {
                //This is a generic method of creating a guid from an int value if no guid is available in the database
                return new Guid(keyInt.ToString().PadLeft(32, 'a'));
            }
            else if (entityAttribute.LogicalName == this.PrimaryEntityMetadata.PrimaryIdAttribute && Guid.TryParse(value.ToString(), out Guid keyGuid))
            {
                return keyGuid;
            }
            else if (entityAttribute is LookupAttributeMetadata lookupAttr && Int32.TryParse(value.ToString(), out int lookupInt))
            {
                var lookup = new EntityReference(lookupAttr.Targets[0], new Guid(lookupInt.ToString().PadLeft(32, 'a')));
                return lookup;
            }
            else if (entityAttribute is LookupAttributeMetadata lookupAttr2 && Guid.TryParse(value.ToString(), out Guid lookupGuid))
            {
                var lookup = new EntityReference(lookupAttr2.Targets[0], lookupGuid);
                return lookup;
            }
            else if ((entityAttribute is StatusAttributeMetadata || entityAttribute is StateAttributeMetadata || entityAttribute is PicklistAttributeMetadata) && Int32.TryParse(value.ToString(), out int picklistInt))
            {
                return new OptionSetValue(picklistInt);
            }
            else if (Int32.TryParse(value.ToString().Replace("{", string.Empty).Replace("}", string.Empty).Replace("a", string.Empty).Replace("A", string.Empty).Replace("-", string.Empty), out int intValue))
            {
                //This converts the generated guid back to an int.
                return intValue.ToString();
            }
            else
            {
                return value;
            }
        }
    }
}
