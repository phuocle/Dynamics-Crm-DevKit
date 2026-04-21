using Microsoft.Crm.Sdk.Messages;
using System;
using System.IO;
using System.IO.Compression;
using System.Text;

namespace Dev.DevKit.Console
{
    public class Program
    {
        static void Main()
        {
            //CheckWhoAmI();
            RetrieveEntityRibbon("v4_mcp", RibbonLocationFilters.Form, "v4_mcpRibbon_Form.xml");
            RetrieveEntityRibbon("v4_mcp", RibbonLocationFilters.HomepageGrid, "v4_mcpRibbon_HomepageGrid.xml");
            RetrieveEntityRibbon("v4_mcp", RibbonLocationFilters.SubGrid, "v4_mcpRibbon_SubGrid.xml");
            //DebugPlugin();
            //DebugWorkflow();
        }

        private static void CheckWhoAmI()
        {
            var UserId = ((WhoAmIResponse)App.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }

        private static void RetrieveEntityRibbon(string entityName, RibbonLocationFilters filter, string fileName)
        {
            var request = new RetrieveEntityRibbonRequest
            {
                EntityName = entityName,
                RibbonLocationFilter = filter
            };
            var response = (RetrieveEntityRibbonResponse)App.Service.Execute(request);
            var xml = UnzipRibbon(response.CompressedEntityXml);
            var outputPath = Path.GetFullPath(fileName);
            File.WriteAllText(outputPath, xml, Encoding.UTF8);
            System.Console.WriteLine($"Saved: {outputPath}");
        }

        private static string UnzipRibbon(byte[] data)
        {
            using (var memStream = new MemoryStream(data))
            using (var zip = new ZipArchive(memStream, ZipArchiveMode.Read))
            {
                var entry = zip.GetEntry("RibbonXml.xml");
                using (var strm = entry.Open())
                using (var reader = new StreamReader(strm, Encoding.UTF8))
                {
                    return reader.ReadToEnd();
                }
            }
        }

        private static void DebugPlugin()
        {
            //var json = "";
            //Helper.DebugPluginWith<???>(json, App.Service);
        }

        private static void DebugWorkflow()
        {
            //var json = "";
            //var inputs = new Dictionary<string, object> { };
            //Helper.DebugWorkflowWith<???>(json, App.Service, inputs);
        }
    }
}