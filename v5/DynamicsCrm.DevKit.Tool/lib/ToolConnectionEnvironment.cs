using System;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;

namespace DynamicsCrm.DevKit.Tool.Lib
{
    internal static class ToolConnectionEnvironment
    {
        internal static bool HasValues()
        {
            foreach (var key in ProjectEnvironment.ConnectionKeys)
            {
                if (!string.IsNullOrWhiteSpace(Environment.GetEnvironmentVariable(key))) return true;
            }

            return false;
        }

        internal static async Task<ServiceClient> ConnectAsync(string explicitConnection)
        {
            if (!string.IsNullOrWhiteSpace(explicitConnection))
                return EnsureReady(new ServiceClient(explicitConnection));

            var connectionString = Environment.GetEnvironmentVariable(ProjectEnvironment.Connection);
            if (!string.IsNullOrWhiteSpace(connectionString))
                return EnsureReady(new ServiceClient(connectionString));

            var authType = Environment.GetEnvironmentVariable(ProjectEnvironment.AuthType);
            if (string.IsNullOrWhiteSpace(authType))
                throw new InvalidOperationException("--conn or DEVKIT_* connection settings are required");

            var connection = new CrmConnection
            {
                Type = authType,
                Url = Get(ProjectEnvironment.Url),
                ClientId = Get(ProjectEnvironment.ClientId),
                ClientSecret = Get(ProjectEnvironment.ClientSecret),
                PacProfile = Get(ProjectEnvironment.PacProfile),
                UserName = Get(ProjectEnvironment.Username),
                Password = Get(ProjectEnvironment.Password),
                Name = "DynamicsCrm.DevKit.Tool"
            };

            if (authType.Equals("AD", StringComparison.OrdinalIgnoreCase))
            {
                var domain = Get(ProjectEnvironment.Domain);
                if (!string.IsNullOrWhiteSpace(domain) && !string.IsNullOrWhiteSpace(connection.UserName) &&
                    !connection.UserName.Contains("\\"))
                    connection.UserName = $"{domain}\\{connection.UserName}";
            }

            var builder = ConnectionBuilderFactory.GetBuilder(authType);
            var validation = await builder.ValidateAsync(connection).ConfigureAwait(false);
            if (!validation.isValid) throw new InvalidOperationException(validation.error);

            return EnsureReady(await builder.CreateServiceClientAsync(connection).ConfigureAwait(false));
        }

        private static string Get(string key) => Environment.GetEnvironmentVariable(key) ?? string.Empty;

        private static ServiceClient EnsureReady(ServiceClient serviceClient)
        {
            if (serviceClient?.IsReady != true)
                throw new InvalidOperationException($"Cannot connect to Dataverse: {serviceClient?.LastError}");
            return serviceClient;
        }
    }
}
