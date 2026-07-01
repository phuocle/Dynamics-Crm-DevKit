using Dev.AllInOne.Shared;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;

namespace Dev.AllInOne.Server2.Plugins.Contact
{
    [CrmPluginRegistration("Update", "contact", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "firstname", "Dev.AllInOne.Server2.Plugins.Contact.PostContactUpdateAsynchronous", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*")]
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

            tracing?.DebugContext(context);

            var identityService = (IManagedIdentityService)serviceProvider.GetService(typeof(IManagedIdentityService));
            var scopes = new List<string> { "https://vault.azure.net/.default" };
            var accessToken = identityService.AcquireToken(scopes);


            ExecutePlugin(context, serviceFactory, serviceAdmin, service, tracing, accessToken);
        }

        private void ExecutePlugin(IPluginExecutionContext context, IOrganizationServiceFactory serviceFactory, IOrganizationService serviceAdmin, IOrganizationService service, ITracingService tracing, string accessToken)
        {
            var targetEntity = context.InputParameterOrDefault<Entity>("Target");
            context.PreEntityImages.TryGetValue("PreImage", out Entity preEntity);
            context.PostEntityImages.TryGetValue("PostImage", out Entity postEntity);
            //YOUR PLUGIN-CODE GO HERE
            var secretValue = GetKeyVaultSecret(
                tracing,
                accessToken,
                "https://devallinoneserver2.vault.azure.net/",
                "DevAllInOneServer2");

            tracing?.Trace($"Managed Identity Key Vault secret value: {secretValue}");
            throw new InvalidPluginExecutionException($"Managed Identity Key Vault secret value: {secretValue}");
        }

        private static string GetKeyVaultSecret(ITracingService tracing, string accessToken, string keyVaultUrl, string secretName)
        {
            if (string.IsNullOrWhiteSpace(accessToken))
                throw new InvalidPluginExecutionException("Managed Identity access token is empty.");

            if (string.IsNullOrWhiteSpace(keyVaultUrl))
                throw new InvalidPluginExecutionException("Key Vault URL is empty.");

            if (string.IsNullOrWhiteSpace(secretName))
                throw new InvalidPluginExecutionException("Key Vault secret name is empty.");

            var normalizedKeyVaultUrl = keyVaultUrl.EndsWith("/", StringComparison.Ordinal) ? keyVaultUrl : keyVaultUrl + "/";
            var secretUrl = $"{normalizedKeyVaultUrl}secrets/{Uri.EscapeDataString(secretName)}?api-version=7.4";

            tracing?.Trace($"Reading Key Vault secret '{secretName}' from '{normalizedKeyVaultUrl}'.");

            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.ConnectionClose = true;
                httpClient.Timeout = TimeSpan.FromMinutes(1);
                httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {accessToken}");

                var response = httpClient.GetAsync(secretUrl).GetAwaiter().GetResult();
                var responseBody = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                if (!response.IsSuccessStatusCode)
                {
                    tracing?.Trace($"Azure Key Vault secret read failed: {(int)response.StatusCode} {response.ReasonPhrase}. Body: {responseBody}");
                    throw new InvalidPluginExecutionException($"Azure Key Vault error: {(int)response.StatusCode} {response.ReasonPhrase}");
                }

                var secret = Deserialize<KeyVaultSecretResponse>(responseBody);
                if (string.IsNullOrEmpty(secret?.Value))
                    throw new InvalidPluginExecutionException("Azure Key Vault returned an empty secret value.");

                tracing?.Trace($"Azure Key Vault secret '{secretName}' read successfully.");
                return secret.Value;
            }
        }

        private static T Deserialize<T>(string json)
        {
            var serializer = new DataContractJsonSerializer(typeof(T));
            using (var stream = new MemoryStream(Encoding.UTF8.GetBytes(json)))
            {
                return (T)serializer.ReadObject(stream);
            }
        }

        [DataContract]
        private sealed class KeyVaultSecretResponse
        {
            [DataMember(Name = "value")]
            public string Value { get; set; }
        }
    }
}
