using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;

namespace TestAnalyzers.PluginAccount
{
    public class NotUseColumnSetTrue
    {
        private void Test01(IOrganizationService service)
        {
            var enttiy = service.Retrieve("account", Guid.NewGuid(), new Microsoft.Xrm.Sdk.Query.ColumnSet(true));
            var enttiy2 = service.Retrieve("account", Guid.NewGuid(), new ColumnSet(   true)  );

            var columnSet = new ColumnSet(); 
            columnSet.AllColumns = true;
            var enttiy3 = service.Retrieve("account", Guid.NewGuid(), columnSet);

            var columnSet2 = new    ColumnSet(    true);
            var enttiy4 = service.Retrieve("account", Guid.NewGuid(), columnSet2);

            var expression = new QueryExpression("account");
            expression.ColumnSet = new ColumnSet(true);


        }
    }
}
