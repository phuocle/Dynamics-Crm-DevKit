using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Shared.Entities
{
	public partial class msevtmgt_msevtmgt_session_msevtmgt_teammember
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

		public static msevtmgt_msevtmgt_session_msevtmgt_teammember Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId)
		{
			var fetchData = new
			{
				msevtmgt_msevtmgt_session_msevtmgt_teammemberid = recordId ?? Guid.Empty
			};
			var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='msevtmgt_msevtmgt_session_msevtmgt_teammember'>
    <all-attributes/>
    <filter type='and'>
      <condition attribute='msevtmgt_msevtmgt_session_msevtmgt_teammemberid' operator='eq' value='{fetchData.msevtmgt_msevtmgt_session_msevtmgt_teammemberid}'/>
    </filter>
  </entity>
</fetch>
";
			var rows = serviceAdmin.RetrieveMultiple<msevtmgt_msevtmgt_session_msevtmgt_teammember>(fetchXml);
			if (rows.Count == 1) return rows[0];
			return new msevtmgt_msevtmgt_session_msevtmgt_teammember();
		}

		#endregion
	}
}
