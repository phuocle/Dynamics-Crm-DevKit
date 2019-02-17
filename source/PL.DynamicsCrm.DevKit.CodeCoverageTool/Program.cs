using System.Collections.Generic;
using System.IO;
using Microsoft.VisualStudio.Coverage.Analysis;

namespace PL.DynamicsCrm.DevKit.CodeCoverageTool
{
    public class Program
    {
        //"D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\Release\coverage.xml" "D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\ResultsDirectory\5691dd01-3997-4a19-9e7e-1a49cffc745e\phuoclev_HSSSC1LAP02501 2019-02-14 17_02_33.coverage" "D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\Release\test\PL.CrmGridPlus.CustomAction.Test.dll" "D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\Release\test\PL.CrmGridPlus.DataProvider.D365Icons.Test.dll" "D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\Release\test\PL.CrmGridPlus.Plugin.Email.Test.dll" "D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\Release\test\PL.CrmGridPlus.Plugin.pl_Lead.Test.dll" "D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\Release\test\PL.CrmGridPlus.Plugin.pl_License.Test.dll" "D:\src\vsts\tfs\CDS-CRMGRIDPLUS\CRM\Release\test\PL.CrmGridPlus.Workflow.Test.dll"
        static void Main(string[] args)
        {
            var coverage = args[0];
            var file = args[1];
            var dlls = new List<string>();
            for (var i = 2; i < args.Length; i++)
                dlls.Add(args[i]);
            using (var info = CoverageInfo.CreateFromFile(file, dlls, new string[] { }))
            {
                var data = info.BuildDataSet();
                data.WriteXml(coverage);
            }
        }
    }
}
