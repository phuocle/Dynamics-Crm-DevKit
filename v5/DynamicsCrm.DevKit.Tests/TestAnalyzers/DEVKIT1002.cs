#pragma warning disable

/// <summary>
/// DEVKIT1002: Do not use ColumnSet(true) analyzer
///
/// File Scope:
/// - This file intentionally demonstrates DEVKIT1002 only.
/// - Visual Studio Error List should show DEVKIT1002 diagnostics from this file, not unrelated DEVKIT rules.
/// - New DEVKIT rules do not require changing this file because all warnings are disabled first, then DEVKIT1002 is restored.
///
/// Severity Rules:
/// - ColumnSet(true) and FetchXML all-attributes: WARNING - retrieve explicit columns instead
/// </summary>
#pragma warning restore DEVKIT1002

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAnalyzers
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
#pragma warning restore
