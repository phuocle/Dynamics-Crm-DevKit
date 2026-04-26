using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
{
    internal sealed class RibbonSolutionFetcher
    {
        private readonly ServiceClient _serviceClient;
        private const string SOLUTION_NAME = "devkit_ribbon";

        public RibbonSolutionFetcher(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public string FetchExistingRibbonDiffXml(string entityName)
        {
            try
            {
                var exportReq = new ExportSolutionRequest
                {
                    SolutionName = SOLUTION_NAME,
                    Managed = false
                };
                var exportResp = (ExportSolutionResponse)_serviceClient.Execute(exportReq);
                var zipBytes = exportResp.ExportSolutionFile;

                using var ms = new MemoryStream(zipBytes);
                using var archive = new ZipArchive(ms, ZipArchiveMode.Read);

                var customizationsEntry = archive.Entries
                    .FirstOrDefault(e => e.FullName.Equals("customizations.xml", StringComparison.OrdinalIgnoreCase));

                if (customizationsEntry != null)
                {
                    using var entryStream = customizationsEntry.Open();
                    var doc = XDocument.Load(entryStream);

                    var entityNode = doc.Descendants("Entity")
                        .FirstOrDefault(e =>
                        {
                            var nameEl = e.Element("Name");
                            return nameEl != null && string.Equals(
                                nameEl.Value, entityName, StringComparison.OrdinalIgnoreCase);
                        });

                    if (entityNode != null)
                    {
                        var ribbonDiffEl = entityNode.Element("RibbonDiffXml");
                        if (ribbonDiffEl != null)
                            return ribbonDiffEl.ToString();
                    }
                }
            }
            catch
            {
                // Solution doesn't exist yet or export failed — use empty skeleton
            }

            return RibbonXmlHelpers.GetEmptyRibbonDiffXml();
        }
    }
}
