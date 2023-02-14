using Microsoft.Xrm.Sdk;
using System;

namespace $NameSpace$
{
    public partial class $class$
    {
        #region --- PROPERTIES ---

        //public string StringField { get { return GetAliasedValue<string>("aliased.field"); } }
        //public int? IntField { get { return GetAliasedValue<int?>("aliased.field"); } }
        //public bool? BooleanField { get { return GetAliasedValue<bool?>("aliased.field"); } }
        //public DateTime? DateTimeField { get { return GetAliasedValue<DateTime?>("aliased.field"); } }
        //public EntityReference LookupField { get { return GetAliasedValue<EntityReference>("aliased.field"); } }
        //public xxxOptionSets.xxx? OptionSetField { get { return (xxxOptionSets.xxx?)GetAliasedValue<OptionSetValue>("aliased.field")?.Value; } }
        //public decimal? MoneyField { get { return GetAliasedValue<Money>("aliased.field")?.Value; } }

        #endregion

        #region --- STATIC METHODS ---

        public static $class$ Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId)
        {
            var fetchData = new
            {
                $key$ = recordId ?? Guid.Empty
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='$classLogical$'>
    <all-attributes/>
    <filter type='and'>
      <condition attribute='$key$' operator='eq' value='{fetchData.$key$}'/>
    </filter>
  </entity>
</fetch>
";
            var rows = serviceAdmin.RetrieveMultiple<$class$>(fetchXml);
            if (rows.Count == 1) return rows[0];
            return new $class$();
        }

        #endregion
    }
}
