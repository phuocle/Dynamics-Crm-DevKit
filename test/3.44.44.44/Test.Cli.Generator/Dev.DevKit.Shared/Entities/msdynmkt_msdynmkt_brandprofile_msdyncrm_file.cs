﻿using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Shared.Entities
{
	public partial class msdynmkt_msdynmkt_brandprofile_msdyncrm_file
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

		public static msdynmkt_msdynmkt_brandprofile_msdyncrm_file Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId)
		{
			var fetchData = new
			{
				msdynmkt_msdynmkt_brandprofile_msdyncrm_fileid = recordId ?? Guid.Empty
			};
			var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='msdynmkt_msdynmkt_brandprofile_msdyncrm_file'>
    <all-attributes/>
    <filter type='and'>
      <condition attribute='msdynmkt_msdynmkt_brandprofile_msdyncrm_fileid' operator='eq' value='{fetchData.msdynmkt_msdynmkt_brandprofile_msdyncrm_fileid}'/>
    </filter>
  </entity>
</fetch>
";
			var rows = serviceAdmin.RetrieveMultiple<msdynmkt_msdynmkt_brandprofile_msdyncrm_file>(fetchXml);
			if (rows.Count == 1) return rows[0];
			return new msdynmkt_msdynmkt_brandprofile_msdyncrm_file();
		}

		#endregion
	}
}
