using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Linq;

namespace TestAnalyzers.PluginAccount
{
    public class A
    {
        public bool AllColumns { get; set; }
    }

    public class NotUseColumnSetTrue
    {
        private void Test01(IOrganizationService service)
        {
            var enttiy = service.Retrieve("account", Guid.NewGuid(), new Microsoft.Xrm.Sdk.Query.ColumnSet(true));
            var enttiy2 = service.Retrieve("account", Guid.NewGuid(), new ColumnSet(true));

            var columnSet = new ColumnSet();
            columnSet.AllColumns = true;
            var enttiy3 = service.Retrieve("account", Guid.NewGuid(), columnSet);

            var columnSet2 = new ColumnSet(true);
            var enttiy4 = service.Retrieve("account", Guid.NewGuid(), columnSet2);

            var expression = new QueryExpression("account");
            expression.ColumnSet = new ColumnSet(true);

            var a = new A();
            a.AllColumns = true; //NO ERROR


            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>  
  <entity name='account'>
    <all-attributes />
    <order attribute='name' descending='false'/>
  </entity>
</fetch> 
";

            var fetchXml2 = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'><entity name='account'><all-attributes /><order attribute='name' descending='false'/></entity></fetch>";
            var fetchXml3 = string.Join(string.Empty, new string[] {
"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
"  <entity name='account'>",
"    <all-attributes />",
"    <order attribute='name' descending='false'/>",
"  </entity>",
"</fetch>" });


            var fetchXml4 = "<fetch version=\"1.0\" output-format=\"xml-platform\" mapping=\"logical\" distinct=\"false\"> ";
            fetchXml4 += "<entity name=\"account\">";
            fetchXml4 += "<all-attributes />";
            fetchXml4 += "<order attribute=\"name\" descending=\"false\"/>";
            fetchXml4 += "</entity>";
            fetchXml4 += "</fetch>";


            var fetchXml5 = string.Empty;
            fetchXml5 += "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>";
            fetchXml5 += "  <entity name='account'>";
            fetchXml5 += "    <all-attributes/>";
            fetchXml5 += "    <order attribute='name' descending='false'/>";
            fetchXml5 += "  </entity>";
            fetchXml5 += "</fetch>";


            var fetchXml6 = string.Empty;
            fetchXml5 += $"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>";
            fetchXml5 += $"  <entity name='account'>";
            fetchXml5 += $"    <all-attributes />";
            fetchXml5 += $"    <order attribute='name' descending='false'/>";
            fetchXml5 += $"  </entity>";
            fetchXml5 += $"</fetch>";
        }
    }
}
