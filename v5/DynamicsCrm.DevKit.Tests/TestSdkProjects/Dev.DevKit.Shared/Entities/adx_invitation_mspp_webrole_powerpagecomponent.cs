using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Shared.Entities
{
	public partial class adx_invitation_mspp_webrole_powerpagecomponent
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

		public static adx_invitation_mspp_webrole_powerpagecomponent Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId)
		{
			var fetchData = new
			{
				adx_invitation_mspp_webrole_powerpagecomponentid = recordId ?? Guid.Empty
			};
			var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='adx_invitation_mspp_webrole_powerpagecomponent'>
    <all-attributes/>
    <filter type='and'>
      <condition attribute='adx_invitation_mspp_webrole_powerpagecomponentid' operator='eq' value='{fetchData.adx_invitation_mspp_webrole_powerpagecomponentid}'/>
    </filter>
  </entity>
</fetch>
";
			var rows = serviceAdmin.RetrieveMultiple<adx_invitation_mspp_webrole_powerpagecomponent>(fetchXml);
			if (rows.Count == 1) return rows[0];
			return new adx_invitation_mspp_webrole_powerpagecomponent();
		}

		#endregion
	}
}
