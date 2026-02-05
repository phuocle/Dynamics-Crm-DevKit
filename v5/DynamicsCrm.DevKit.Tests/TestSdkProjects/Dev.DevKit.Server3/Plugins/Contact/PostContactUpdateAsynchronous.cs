using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using System.Collections.Generic;
using System.Net.Http;

namespace Dev.DevKit.Server3.Plugins.Contact
{
    [CrmPluginRegistration("Update", "contact", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "firstname", "Dev.DevKit.Server3.Plugins.Contact.PostContactUpdateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*")]
    public class PostContactUpdateAsynchronous : IPlugin
    {
        /*
        InputParameters:
            Target                             Microsoft.Xrm.Sdk.Entity - require
            SuppressDuplicateDetection         System.Boolean
            CalculateMatchCodeSynchronously    System.Boolean
            SolutionUniqueName                 System.String
            MaintainLegacyAppServerBehavior    System.Boolean
            ConcurrencyBehavior                Microsoft.Xrm.Sdk.ConcurrencyBehavior
            ReturnRowVersion                   System.Boolean
        OutputParameters:
        */

        //private readonly string unSecureConfiguration = null;
        //private readonly string secureConfiguration = null;
        //public PostContactUpdateAsynchronous(string unSecureConfiguration, string secureConfiguration)
        //{
        //    this.unSecureConfiguration = unSecureConfiguration;
        //    this.secureConfiguration = secureConfiguration;
        //}

        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (!int.Equals(context.Stage, (int)StageEnum.PostOperation)) throw new InvalidPluginExecutionException("Stage does not equals PostOperation");
            if (!string.Equals(context.MessageName, "Update", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("MessageName does not equals Update");
            if (!string.Equals(context.PrimaryEntityName, "contact", StringComparison.OrdinalIgnoreCase)) throw new InvalidPluginExecutionException("PrimaryEntityName does not equals contact");
            if (!int.Equals(context.Mode, (int)ExecutionModeEnum.Asynchronous)) throw new InvalidPluginExecutionException("Execution does not equals Asynchronous");
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var serviceAdmin = serviceFactory.CreateOrganizationService(null);
            var service = serviceFactory.CreateOrganizationService(context.UserId);

            var identityService = (IManagedIdentityService)serviceProvider.GetService(typeof(IManagedIdentityService));
            var scopes = new List<string> { "https://vault.azure.net/.default" };
            var accessToken = identityService.AcquireToken(scopes);

            //tracing?.DebugContext(context);

            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing, accessToken);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, string accessToken)
        {
            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            context.PreEntityImages.TryGetValue("PreImage", out Entity preEntity);
            context.PostEntityImages.TryGetValue("PostImage", out Entity postEntity);

            // Get secret from Key Vault
            var keyVaultUrl = "https://kv-devkit-server3.vault.azure.net/";
            var secretName = "TestSecret";
            var secretUrl = $"{keyVaultUrl}secrets/{secretName}?api-version=7.4";
            var secretValue = string.Empty;

            using (var httpClient = new System.Net.Http.HttpClient())
            {
                httpClient.DefaultRequestHeaders.ConnectionClose = true;
                httpClient.Timeout = TimeSpan.FromMinutes(1);
                httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {accessToken}");
                var response = httpClient.GetAsync(secretUrl).GetAwaiter().GetResult();
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
                    var start = result.IndexOf("\"value\":\"", StringComparison.OrdinalIgnoreCase) + 9;
                    var end = result.IndexOf("\"", start, StringComparison.OrdinalIgnoreCase);
                    if (start > 9 && end > start)
                    {
                        secretValue = result.Substring(start, end - start);
                    }
                }
                else
                {
                    throw new InvalidPluginExecutionException($"Azure KeyVault error: {response.StatusCode} {response.ReasonPhrase}");
                }
            }

            throw new InvalidPluginExecutionException($"SUCCESS! secretValue = [{secretValue}]");
        }
    }
}