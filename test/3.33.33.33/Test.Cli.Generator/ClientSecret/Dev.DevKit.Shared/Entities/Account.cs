using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Dev.DevKit.Shared.Entities
{
	public partial class Account
	{
		#region --- PROPERTIES ---

		//public string StringField { get { return GetAliasedValue<string>("aliased.field"); } }
		//public int? IntField { get { return GetAliasedValue<int?>("aliased.field"); } }
		//public DateTime? DateTimeField { get { return GetAliasedValue<DateTime?>("aliased.field"); } }
		//public EntityReference LookupField { get { return GetAliasedValue<EntityReference>("aliased.field"); } }
		//public xxxOptionSets.xxx? OptionSetField { get { return (xxxOptionSets.xxx?)GetAliasedValue<OptionSetValue>("aliased.field")?.Value; } }
		//public decimal? MoneyField { get { return GetAliasedValue<Money>("aliased.field")?.Value; } }

		#endregion

		#region --- STATIC METHODS ---

		public static Account Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? AccountId, ColumnSet columns = null)
		{
			if (AccountId == null) return new Account();
			if (columns == null) columns = new ColumnSet(true);
			var entity = serviceAdmin.Retrieve(EntityLogicalName, AccountId.Value, columns);
			return new Account(entity);
		}
        public static Account Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, FilterExpression filterExpression, ColumnSet columns = null)
        {
			var rows = Read_Records(serviceAdmin, service, tracing, filterExpression, columns);
			if (rows.Count == 1) return rows[0];
			return new Account();
        }
        public static List<Account> Read_Records(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, FilterExpression filterExpression, ColumnSet columns = null, int count = 5000)
        {
            if (columns == null) columns = new ColumnSet(true);
            var query = new QueryExpression(EntityLogicalName)
            {
                ColumnSet = columns,
                Criteria = filterExpression,
                PageInfo = new PagingInfo()
                {
                    Count = count,
                    PageNumber = 1,
                    ReturnTotalRecordCount = true
                }
            };
            var result = serviceAdmin.RetrieveMultiple(query);
            var entities = new List<Entity>();
            entities.AddRange(result.Entities);
            do
            {
                query.PageInfo.PageNumber += 1;
                query.PageInfo.PagingCookie = result.PagingCookie;
                result = serviceAdmin.RetrieveMultiple(query);
                entities.AddRange(result.Entities);
            }
            while (result.MoreRecords);
            return entities.Select(x => new Account(x)).ToList();
        }

        #endregion
    }
}
