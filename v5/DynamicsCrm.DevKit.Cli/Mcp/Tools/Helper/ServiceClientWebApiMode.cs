using Microsoft.PowerPlatform.Dataverse.Client;
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    internal sealed class ServiceClientWebApiMode : IDisposable
    {
        private readonly ServiceClient _serviceClient;
        private readonly bool _previousUseWebApi;

        public ServiceClientWebApiMode(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
            _previousUseWebApi = serviceClient.UseWebApi;
            serviceClient.UseWebApi = true;
        }

        public void Dispose()
        {
            _serviceClient.UseWebApi = _previousUseWebApi;
        }
    }
}
