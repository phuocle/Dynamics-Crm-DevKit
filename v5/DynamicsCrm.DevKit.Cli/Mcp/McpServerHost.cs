using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.PowerPlatform.Dataverse.Client;
using ModelContextProtocol.Server;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp
{
    public class McpServerHost
    {
        private readonly ServiceClient _serviceClient;

        public McpServerHost(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        public async Task RunAsync()
        {
            var builder = Host.CreateApplicationBuilder();

            builder.Logging.AddConsole(options =>
            {
                options.LogToStandardErrorThreshold = Microsoft.Extensions.Logging.LogLevel.Trace;
            });

            builder.Services.AddSingleton(_serviceClient);
            builder.Services.AddSingleton(new MetadataService(_serviceClient));

            builder.Services
                .AddMcpServer(options =>
                {
                    options.ServerInfo = new()
                    {
                        Name = "DynamicsCrm.DevKit",
                        Version = DynamicsCrm.DevKit.Shared.Const.Version
                    };
                    options.ServerInstructions =
                        $"Connected to Dataverse environment: {_serviceClient.ConnectedOrgUriActual} | " +
                        $"Org: {_serviceClient.ConnectedOrgFriendlyName} ({_serviceClient.ConnectedOrgUniqueName}) | " +
                        $"Version: {_serviceClient.ConnectedOrgVersion}";
                })
                .WithStdioServerTransport()
                .WithToolsFromAssembly();

            await builder.Build().RunAsync();
        }
    }
}
