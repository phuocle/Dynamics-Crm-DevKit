using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Wooow.Kool.Shared.Entities;

namespace Wooow.Kool.Console
{
    public class Program
    {
        static void Main(string[] args)
        {
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='account'>
    <attribute name='accountid'/>
    <attribute name='accountnumber'/>
    <order attribute='accountnumber' descending='false'/>
  </entity>
</fetch>
";
            var rows = AppSettings.CrmService.RetrieveMultiple(new FetchExpression(fetchXml));
            foreach(var entity in rows.Entities)
            {
                var account = new Account(entity);
                if (account.AccountNumber == null) continue;
                var request = new OrganizationRequest("wo_AnnualRevenue");
                request["AccountNumber"] = account.AccountNumber;
                var response = AppSettings.CrmService.Execute(request);
            }
        }
    }
}
