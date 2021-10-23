using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Shared.CliTasks
{
    public class CliWebResource : CliTask
    {
        public CliWebResource(CrmServiceClient service) : base(service)
        {
        }

        public async Task<bool> DeployWebResourceAsync(string fullFileName, Guid webResourceId)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var webResource = new Entity("webresource") { Id = webResourceId };
                    webResource["content"] = Convert.ToBase64String(File.ReadAllBytes(fullFileName));
                    var request = new UpdateRequest { Target = webResource };
                    var response = (UpdateResponse)Service.Execute(request);
                    return true;
                }
                catch
                {
                    return false;
                }
            });
        }

        public bool DeployNewWebResource(string fullFileName, string solutionLogicalName)
        {
            return true;
        }

        public async Task<bool> PublishWebResourceAsync(Guid webResourceId)
        {
            return await Task.Run(() => {
                try
                {
                    var publishXml = $"<importexportxml><webresources><webresource>{webResourceId}</webresource></webresources></importexportxml>";
                    var request = new PublishXmlRequest { ParameterXml = publishXml };
                    var response = (PublishXmlResponse)Service.Execute(request);
                    return true;
                }
                catch
                {
                    return false;
                }
            });
        }
    }
}
