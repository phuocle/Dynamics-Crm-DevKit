using MarkMpn.Sql4Cds.Engine;
using MarkMpn.Sql4Cds.Engine.FetchXml;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Microsoft.Xrm.Sdk.Query;
using MyFather.DataProvider.SqlAccount.Mappers;
using MyFather.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Xml.Serialization;

namespace MyFather.DataProvider.SqlAccount
{
    public class SqlHelper
    {
        public static EntityCollection RetrieveMultipleToSql(IPluginExecutionContext context, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            var collection = new EntityCollection();
            var setting = new devkit_azuresql(dataSource);
            if (setting.devkit_SqlConnectionString == null) return collection;
            var query = context.InputParameters["Query"];
            string fetchXml;
            if (query is QueryExpression qe)
            {
                var convertRequest = new QueryExpressionToFetchXmlRequest();
                convertRequest.Query = (QueryExpression)qe;
                var response = (QueryExpressionToFetchXmlResponse)service.Execute(convertRequest);
                fetchXml = response.FetchXml;
            }
            else if (query is FetchExpression fe)
            {
                fetchXml = fe.Query;
                throw new InvalidPluginExecutionException("A");
            }
            else
                return collection;
            var metadata = new AttributeMetadataCache(service);
            var fetch = Deserialize(fetchXml);
            var mapper = new GenericMapper(context, service, tracing);
            int page = -1;
            int count = -1;
            if (!string.IsNullOrEmpty(fetch.page))
            {
                page = Int32.Parse(fetch.page);
                fetch.page = string.Empty;
            }
            if (!string.IsNullOrEmpty(fetch.count))
            {
                count = Int32.Parse(fetch.count);
                fetch.count = string.Empty;
            }
            var sql = FetchXml2Sql.Convert(service, metadata, fetch, new FetchXml2SqlOptions { PreserveFetchXmlOperatorsAsFunctions = false }, out _);
            sql = mapper.MapVirtualEntityAttributes(sql);
            if (page != -1 && count != -1)
            {
                collection = GetEntitiesFromSql(context, mapper, setting.devkit_SqlConnectionString, sql, count, page);
            }
            else
            {
                collection = GetEntitiesFromSql(context, mapper, setting.devkit_SqlConnectionString, sql, -1, 1);
            }
            return collection;
        }

        public static Entity RetrieveToSql(IPluginExecutionContext context, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            var setting = new devkit_azuresql(dataSource);
            var entity = new Entity(context.PrimaryEntityName, context.PrimaryEntityId);
            var mapper = new GenericMapper(context, service, tracing);
            string sql = $"SELECT * FROM {context.PrimaryEntityName} WITH(NOLOCK) WHERE {mapper.PrimaryEntityMetadata.PrimaryIdAttribute} = '{mapper.MapToVirtualEntityValue(mapper.PrimaryEntityMetadata.PrimaryIdAttribute, context.PrimaryEntityId)}'";
            sql = mapper.MapVirtualEntityAttributes(sql);

            var entities = GetEntitiesFromSql(context, mapper, setting.devkit_SqlConnectionString, sql, 1, 1);
            if (entities.Entities != null && entities.Entities.Count > 0)
            {
                entity = entities.Entities[0];
                entity.Id = context.PrimaryEntityId;
                entity.LogicalName = context.PrimaryEntityName;
            }
            return entity;
        }

        public static void UpdateToSql(IPluginExecutionContext context, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            var setting = new devkit_azuresql(dataSource);
            var mapper = new GenericMapper(context, service, tracing);
            var mappings = mapper.GetCustomMappings();
            var entity = context.InputParameterOrDefault<Entity>("Target");
            string sql = $"UPDATE {mappings[context.PrimaryEntityName]} SET {{0}} WHERE {mappings[mapper.PrimaryEntityMetadata.PrimaryIdAttribute]} = '{context.PrimaryEntityId}'";
            using (SqlConnection sqlConnection = new SqlConnection(setting.devkit_SqlConnectionString))
            {
                using (SqlCommand command = sqlConnection.CreateCommand())
                {
                    List<string> setList = new List<string>();
                    foreach (var attribute in entity.Attributes)
                    {
                        if (attribute.Key == mapper.PrimaryEntityMetadata.PrimaryIdAttribute) continue;
                        if (mappings[attribute.Key] == setting.devkit_ExternalCreatedOnField || mappings[attribute.Key] == setting.devkit_ExternalModifiedOnField) continue;
                        command.Parameters.AddWithValue($"@{mappings[attribute.Key]}", GetValueOfAttribute(attribute.Value));
                        setList.Add($"{mappings[attribute.Key]}=@{mappings[attribute.Key]}");
                    }
                    if (setting.devkit_ExternalModifiedOnField != null)
                    {
                        setList.Add($"{setting.devkit_ExternalModifiedOnField}=@{setting.devkit_ExternalModifiedOnField}");
                        command.Parameters.AddWithValue($"@{setting.devkit_ExternalModifiedOnField}", DateTime.UtcNow);
                    }
                    sql = string.Format(sql, string.Join(", ", setList));
                    command.CommandText = sql;
                    sqlConnection.Open();
                    command.ExecuteNonQuery();
                    sqlConnection.Close();
                }
            }
        }

        public static Guid CreateToSql(IPluginExecutionContext context, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            var setting = new devkit_azuresql(dataSource);
            var mapper = new GenericMapper(context, service, tracing);
            var mappings = mapper.GetCustomMappings();
            var entity = context.InputParameterOrDefault<Entity>("Target");
            string sql = $"INSERT INTO {mappings[context.PrimaryEntityName]}({{0}}) VALUES ({{1}})";
            var id = Guid.NewGuid();
            using (SqlConnection sqlConnection = new SqlConnection(setting.devkit_SqlConnectionString))
            {
                using (SqlCommand command = sqlConnection.CreateCommand())
                {
                    List<string> columns = new List<string>();
                    List<string> values = new List<string>();
                    foreach (var attribute in entity.Attributes)
                    {
                        if (mappings[attribute.Key] == setting.devkit_ExternalCreatedOnField || mappings[attribute.Key] == setting.devkit_ExternalModifiedOnField)
                            continue;
                        columns.Add($"{mappings[attribute.Key]}");
                        values.Add($"@{mappings[attribute.Key]}");
                        command.Parameters.AddWithValue($"@{mappings[attribute.Key]}", GetValueOfAttribute(attribute.Value));
                    }
                    columns.Add($"{mappings[mapper.PrimaryEntityMetadata.PrimaryIdAttribute]}");
                    values.Add($"@{mappings[mapper.PrimaryEntityMetadata.PrimaryIdAttribute]}");
                    command.Parameters.AddWithValue($"@{mappings[mapper.PrimaryEntityMetadata.PrimaryIdAttribute]}", id);
                    if (setting.devkit_ExternalCreatedOnField != null)
                    {
                        columns.Add($"{setting.devkit_ExternalCreatedOnField}");
                        values.Add($"@{setting.devkit_ExternalCreatedOnField}");
                        command.Parameters.AddWithValue($"@{setting.devkit_ExternalCreatedOnField}", DateTime.UtcNow);
                    }
                    if (setting.devkit_ExternalModifiedOnField != null)
                    {
                        columns.Add($"{setting.devkit_ExternalModifiedOnField}");
                        values.Add($"@{setting.devkit_ExternalModifiedOnField}");
                        command.Parameters.AddWithValue($"@{setting.devkit_ExternalModifiedOnField}", DateTime.UtcNow);
                    }
                    sql = string.Format(sql, string.Join(", ", columns), string.Join(", ", values));
                    command.CommandText = sql;
                    sqlConnection.Open();
                    command.ExecuteNonQuery();
                    sqlConnection.Close();
                }
            }
            return id;
        }

        public static void DeleteToSql(IPluginExecutionContext context, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            var setting = new devkit_azuresql(dataSource);
            var mapper = new GenericMapper(context, service, tracing);
            var mappings = mapper.GetCustomMappings();
            string sql = $"DELETE {mappings[context.PrimaryEntityName]} WHERE {mappings[mapper.PrimaryEntityMetadata.PrimaryIdAttribute]} = '{context.PrimaryEntityId}'";
            using (SqlConnection sqlConnection = new SqlConnection(setting.devkit_SqlConnectionString))
            {
                using (SqlCommand command = sqlConnection.CreateCommand())
                {
                    command.CommandText = sql;
                    sqlConnection.Open();
                    command.ExecuteNonQuery();
                    sqlConnection.Close();
                }
            }
        }

        private static object GetValueOfAttribute(object value)
        {
            if (value is AliasedValue)
                return GetValueOfAttribute(((AliasedValue)value).Value);
            else if (value is EntityReference)
                return ((EntityReference)value).Id;
            else if (value is OptionSetValue)
                return ((OptionSetValue)value).Value;
            else if (value is Money)
                return ((Money)value).Value;
            if (value != null)
                return value;
            else
                return DBNull.Value;
        }

        private static FetchType Deserialize(string fetchXml)
        {
            var serializer = new XmlSerializer(typeof(FetchType));
            object result;
            using (TextReader reader = new StringReader(fetchXml))
            {
                result = serializer.Deserialize(reader);
            }
            return result as FetchType;
        }

        private static EntityCollection GetEntitiesFromSql(IPluginExecutionContext context, GenericMapper mapper, string sqlConnectionString, string sql, int pageSize, int pageNumber)
        {
            var collection = new EntityCollection();
            using (SqlConnection sqlConnection = new SqlConnection(sqlConnectionString))
            {
                SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(sql, sqlConnection);
                DataSet dataSet = new DataSet();
                sqlConnection.Open();
                sqlDataAdapter.Fill(dataSet, "SqlData");
                sqlConnection.Close();
                collection = mapper.CreateEntities(dataSet, pageSize, pageNumber);
            }
            return collection;
        }
    }
}
