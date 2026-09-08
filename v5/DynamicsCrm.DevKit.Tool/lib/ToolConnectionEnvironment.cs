using System;
using System.Collections.Generic;
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
            var values = ReadProjectValues();
            foreach (var key in ProjectEnvironment.ConnectionKeys)
            {
                if (!string.IsNullOrWhiteSpace(ProjectEnvironment.GetValue(values, key))) return true;
            }

            return false;
        }

        internal static async Task<ServiceClient> ConnectAsync(string explicitConnection)
        {
            if (!string.IsNullOrWhiteSpace(explicitConnection))
                return EnsureReady(new ServiceClient(explicitConnection));

            var values = ReadProjectValues();
            var connectionString = ProjectEnvironment.GetValue(values, ProjectEnvironment.Connection);
            if (!string.IsNullOrWhiteSpace(connectionString))
                return EnsureReady(new ServiceClient(connectionString));

            var authType = ProjectEnvironment.GetValue(values, ProjectEnvironment.AuthType);
            if (string.IsNullOrWhiteSpace(authType))
                throw new InvalidOperationException("--conn or project .env DEVKIT_* connection settings are required");

            var connection = new CrmConnection
            {
                Type = authType,
                Url = Get(values, ProjectEnvironment.Url),
                ClientId = Get(values, ProjectEnvironment.ClientId),
                ClientSecret = Get(values, ProjectEnvironment.ClientSecret),
                PacProfile = Get(values, ProjectEnvironment.PacProfile),
                UserName = Get(values, ProjectEnvironment.Username),
                Password = Get(values, ProjectEnvironment.Password),
                Name = "DynamicsCrm.DevKit.Tool"
            };

            if (authType.Equals("AD", StringComparison.OrdinalIgnoreCase))
            {
                var domain = Get(values, ProjectEnvironment.Domain);
                if (!string.IsNullOrWhiteSpace(domain) && !string.IsNullOrWhiteSpace(connection.UserName) &&
                    !connection.UserName.Contains("\\"))
                    connection.UserName = $"{domain}\\{connection.UserName}";
            }

            var builder = ConnectionBuilderFactory.GetBuilder(authType);
            var validation = await builder.ValidateAsync(connection).ConfigureAwait(false);
            if (!validation.isValid) throw new InvalidOperationException(validation.error);

            return EnsureReady(await builder.CreateServiceClientAsync(connection).ConfigureAwait(false));
        }

        private static Dictionary<string, string> ReadProjectValues()
        {
            var file = ProjectEnvironment.FindFile(Environment.CurrentDirectory);
            return ProjectEnvironment.Read(file);
        }

        private static string Get(Dictionary<string, string> values, string key) =>
            ProjectEnvironment.GetValue(values, key) ?? string.Empty;

        private static ServiceClient EnsureReady(ServiceClient serviceClient)
        {
            if (serviceClient?.IsReady != true)
                throw new InvalidOperationException($"Cannot connect to Dataverse: {serviceClient?.LastError}");
            return serviceClient;
        }
    }
}
