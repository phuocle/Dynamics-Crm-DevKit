using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Shared.Services
{
    /// <summary>
    /// Facade for deployment operations (web resources, reports).
    /// Delegates to XrmHelper for backward compatibility while providing a cleaner API.
    /// </summary>
    public class DeploymentService
    {
        private readonly ServiceClient _serviceClient;

        public DeploymentService(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public async Task<(bool ok, string message)> DeployWebResourceAsync(string fullFileName, Guid webResourceId)
        {
            return await XrmHelper.DeployWebResourceAsync(_serviceClient, fullFileName, webResourceId);
        }

        public async Task<(Guid webResourceId, string message)> DeployNewWebResourceAsync(string fullFileName, string webResourceName)
        {
            return await XrmHelper.DeployNewWebResourceAsync(_serviceClient, fullFileName, webResourceName);
        }

        public async Task<(bool ok, string message)> PublishWebResourceAsync(Guid webResourceId)
        {
            return await XrmHelper.PublishWebResourceAsync(_serviceClient, webResourceId);
        }

        public async Task<List<DownloadFile>> GetWebResourcesBySolutionAsync(string solutionName)
        {
            return await XrmHelper.GetWebResourcesBySolutionAsync(_serviceClient, solutionName);
        }

        public async Task<List<DownloadFile>> GetReportsBySolutionAsync(string solutionName)
        {
            return await XrmHelper.GetReportsBySolutionAsync(_serviceClient, solutionName);
        }

        public async Task DeployReportAsync(Guid reportId, string fullFileName)
        {
            await XrmHelper.DeployReportAsync(_serviceClient, reportId, fullFileName);
        }

        public async Task<(bool IsOk, Guid SolutionId, string Prefix)> SolutionExistsAsync(string solutionUniqueName)
        {
            return await XrmHelper.IsExistSolutionAsync(_serviceClient, solutionUniqueName);
        }
    }
}
