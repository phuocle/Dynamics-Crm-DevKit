﻿using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Shared.Entities
{
	public partial class msevtmgt_HotelRoomAllocation
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

		public static msevtmgt_HotelRoomAllocation Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId)
		{
			var fetchData = new
			{
				msevtmgt_hotelroomallocationid = recordId ?? Guid.Empty
			};
			var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='msevtmgt_hotelroomallocation'>
    <all-attributes/>
    <filter type='and'>
      <condition attribute='msevtmgt_hotelroomallocationid' operator='eq' value='{fetchData.msevtmgt_hotelroomallocationid}'/>
    </filter>
  </entity>
</fetch>
";
			var rows = serviceAdmin.RetrieveMultiple<msevtmgt_HotelRoomAllocation>(fetchXml);
			if (rows.Count == 1) return rows[0];
			return new msevtmgt_HotelRoomAllocation();
		}

		#endregion
	}
}
