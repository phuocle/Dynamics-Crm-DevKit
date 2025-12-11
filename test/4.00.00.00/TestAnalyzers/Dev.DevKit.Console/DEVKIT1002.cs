using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dev.DevKit.Console
{
    internal class DEVKIT1002
    {
        private void Test1()
        {
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='account'>
    <all-attributes/>
  </entity>
</fetch>
";
        }

        private void Test2()
        {
            var account = AppSettings.Service.Retrieve("account", Guid.NewGuid(), new Microsoft.Xrm.Sdk.Query.ColumnSet(true));
        }
    }
}