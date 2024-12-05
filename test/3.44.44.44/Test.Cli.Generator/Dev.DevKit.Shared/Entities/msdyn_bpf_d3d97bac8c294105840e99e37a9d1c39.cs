using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Shared.Entities
{
	public partial class msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39
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

		public static msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId)
		{
			var fetchData = new
			{
				msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39id = recordId ?? Guid.Empty
			};
			var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39'>
    <all-attributes/>
    <filter type='and'>
      <condition attribute='msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39id' operator='eq' value='{fetchData.msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39id}'/>
    </filter>
  </entity>
</fetch>
";
			var rows = serviceAdmin.RetrieveMultiple<msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39>(fetchXml);
			if (rows.Count == 1) return rows[0];
			return new msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39();
		}

		#endregion
	}
}
