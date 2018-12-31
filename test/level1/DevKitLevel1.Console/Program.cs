using DevKitLevel1.Shared.Entities;
using Microsoft.Xrm.Sdk;

namespace DevKitLevel1.Console
{
    public class Program
    {
        static void Main(string[] args)
        {
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='account'>
    <all-attributes />
  </entity>
</fetch>
";
            var accounts = AppSettings.CrmService.RetrieveAll<Account>(fetchXml);
            foreach(var account in accounts)
            {
                System.Console.WriteLine(account.Name);
            }
            System.Console.ReadKey();
        }
    }
}