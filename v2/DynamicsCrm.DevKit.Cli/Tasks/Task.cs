using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    public class Task
    {
        private CrmServiceClient crmServiceClient;
        private string currentDirectory;
        private CommandLineArgs arguments;

        public Task(CrmServiceClient crmServiceClient, string currentDirectory, CommandLineArgs arguments)
        {
            this.crmServiceClient = crmServiceClient;
            this.currentDirectory = currentDirectory;
            this.arguments = arguments;
        }

        public void Run()
        {
            switch (arguments.Type)
            {
                case "plugins":
                    var plugin = new TaskPlugin(crmServiceClient, currentDirectory, arguments);
                    plugin.Run();
                    break;
                case "workflows":
                    var workflow = new TaskWorkflow(crmServiceClient, currentDirectory, arguments);
                    workflow.Run();
                    break;
                case "webresources":
                    var webresource = new TaskWebResource(crmServiceClient, currentDirectory, arguments);
                    webresource.Run();
                    break;
                case "dataproviders":
                    var dataprovider = new TaskDataProvider(crmServiceClient, currentDirectory, arguments);
                    dataprovider.Run();
                    break;
                case "solutionpackagers":
                    var solutionpackager = new TaskSolutionPackager(crmServiceClient, currentDirectory, arguments);
                    solutionpackager.Run();
                    break;
                case "generators":
                    var generator = new TaskGenerator(crmServiceClient, currentDirectory, arguments);
                    generator.Run();
                    break;
                case "proxytypes":
                    var proxytype = new TaskProxyType(crmServiceClient, currentDirectory, arguments);
                    proxytype.Run();
                    break;
                case "downloadwebresources":
                    var downloadwebresource = new TaskDownloadWebResource(crmServiceClient, currentDirectory, arguments);
                    downloadwebresource.Run();
                    break;
                case "downloadreports":
                    var downloadreport = new TaskDownloadReport(crmServiceClient, currentDirectory, arguments);
                    downloadreport.Run();
                    break;
                //case "initialize":
                //    var initialize = new TaskInitialize(crmServiceClient, currentDirectory, arguments);
                //    initialize.Run();
                //    break;
                //case "portals":
                //    var portal = new TaskPortal(crmServiceClient, currentDirectory, arguments);
                //    portal.Run();
                //    break;
                case "datasources":
                    var datasource = new TaskDataSource(crmServiceClient, currentDirectory, arguments);
                    datasource.Run();
                    break;
            }
        }
    }
}
