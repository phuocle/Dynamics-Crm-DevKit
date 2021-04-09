using MarkMpn.Sql4Cds.Engine;
using MarkMpn.Sql4Cds.Engine.FetchXml;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using MyFather.DataProvider.SqlAccount.Mappers;
using System;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Xml.Serialization;

namespace MyFather.DataProvider.SqlAccount
{
    public class SqlHelper
    {
        public static EntityCollection QueryToSql(IPluginExecutionContext context, IOrganizationService service, ITracingService tracing, Entity dataSource)
        {
            var collection = new EntityCollection();
            var sqlConnectionString = dataSource.GetAttributeValue<string>("devkit_sqlconnectionstring");
            if (sqlConnectionString == null) return collection;
            var query = context.InputParameters["Query"];
            if (query == null) return collection;
            var fetchXml = string.Empty;
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
            }
            else
                return collection; //only support QueryExpression and FetchExpression
            var metadata = new AttributeMetadataCache(service);
            var fetch = Deserialize(fetchXml);
            var mapper = new GenericMapper(context, service,  tracing);
            mapper.MapFetchXml(fetch);
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
                collection = GetEntitiesFromSql(context, mapper, sqlConnectionString, sql, count, page);
            }
            else
            {
                collection = GetEntitiesFromSql(context, mapper, sqlConnectionString, sql, -1, 1);
            }
            return collection;
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
