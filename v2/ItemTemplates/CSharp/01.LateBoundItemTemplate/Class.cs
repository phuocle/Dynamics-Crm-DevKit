using Microsoft.Xrm.Sdk;

namespace $NameSpace$
{
    public partial class $class$
    {
        #region --- PROPERTIES ---

        //public string StringField { get { return GetAliasedValue<string>("aliased.field"); } }
        //public int? IntField { get { return GetAliasedValue<int?>("aliased.field"); } }
        //public DateTime? DateTimeField { get { return GetAliasedValue<DateTime?>("aliased.field"); } }
        //public EntityReference LookupField { get { return GetAliasedValue<EntityReference>("aliased.field"); } }
        //public xxxxxxxOptionSets.xxxxxxxx_code? OptionSetField { get { return (xxxxxxxOptionSets.xxxxxxxx_code?)GetAliasedValue<OptionSetValue>("aliased.field")?.Value; } }
        //public decimal? MoneyField { get { return GetAliasedValue<Money>("aliased.field")?.Value; } }

        #endregion

        #region --- STATIC METHODS ---

        public static $class$ Read_Record(IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, Guid? recordId)
        {
            throw new InvalidPluginExecutionException("Not Implemented");
        }

        #endregion
    }
}
