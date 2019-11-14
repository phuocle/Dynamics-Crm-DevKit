using System.Linq;
using CmdLine;
using DynamicsCrm.DevKit.Tool.Args;
using Microsoft.VisualStudio.Coverage.Analysis;

namespace DynamicsCrm.DevKit.Tool.Commands
{
    class TaskCoverageToXml
    {
        internal static void Run()
        {
            // /type:"CoverageToXml" /coverage:"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Cli\Release\DEBUG\VssAdministrator_fv-az776 2019-10-11 04_42_38.coverage" /xml:"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Cli\Release\DEBUG\coverage.xml" /dlls:"C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Cli\Release\DEBUG\PL.D365Icons.CustomAction.Test.dll;C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Cli\Release\DEBUG\PL.D365Icons.DataProvider.AppSourceLead.Test.dll;C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Cli\Release\DEBUG\PL.D365Icons.Plugin.Account.Test.dll;C:\src\github\phuocle\Dynamics-Crm-DevKit\v2\DynamicsCrm.DevKit.Cli\Release\DEBUG\PL.D365Icons.Workflow.Test.dll"
            var args = CommandLine.Parse<CoverageToXmlArgs>();
            var coverage = args.Coverage;
            var xml = args.Xml;
            var dlls = args.Dlls.Split(';').ToList<string>();
            using (var info = CoverageInfo.CreateFromFile(coverage, dlls, new string[] { }))
            {
                var data = info.BuildDataSet();
                data.WriteXml(xml);
            }
        }
    }
}
