using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Shared.Entities
{
	public partial class Team
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

		public static Team Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId)
		{
			var fetchData = new
			{
				teamid = recordId ?? Guid.Empty
			};
			var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='team'>
    <all-attributes/>
    <filter type='and'>
      <condition attribute='teamid' operator='eq' value='{fetchData.teamid}'/>
    </filter>
  </entity>
</fetch>
";
			var rows = serviceAdmin.RetrieveMultiple<Team>(fetchXml);
			if (rows.Count == 1) return rows[0];
			return new Team();
		}

		#endregion
	}
}
