using DynamicsCrm.DevKit.Cli.Models;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Cli.Tasks
{
    internal class TaskDownloadReport : ITask
    {
        public string CurrentDirectory { get; set; }
        public CrmServiceClient CrmServiceClient { get; set; }
        private JsonDownloadReport Json { get; set; }

        public TaskDownloadReport(CrmServiceClient crmServiceClient, string currentDirectory, JsonDownloadReport json)
        {
            CrmServiceClient = crmServiceClient;
            CurrentDirectory = currentDirectory;
            Json = json;
        }

        public void Run()
        {

        }
    }
}
