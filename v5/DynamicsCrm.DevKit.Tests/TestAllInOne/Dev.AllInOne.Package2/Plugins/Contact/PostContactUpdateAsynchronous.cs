using Dev.AllInOne.Shared;
using Microsoft.Xrm.Sdk;
using Niam.XRM.Framework.Interfaces.Plugin;
using Niam.XRM.Framework.Plugin;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using System.Text;

namespace Dev.AllInOne.Package2.Plugins.Contact
{
    [CrmPluginRegistration("Update", "contact", StageEnum.PostOperation, ExecutionModeEnum.Asynchronous, "lastname", "Dev.AllInOne.Package2.Plugins.Contact.PostContactUpdateAsynchronousPackage", 1, IsolationModeEnum.Sandbox, PluginType = PluginType.Plugin, DeleteAsyncOperation = true, Image1Name = "PreImage", Image1Alias = "PreImage", Image1Type = ImageTypeEnum.PreImage, Image1Attributes = "*", Image2Name = "PostImage", Image2Alias = "PostImage", Image2Type = ImageTypeEnum.PostImage, Image2Attributes = "*")]
    public class PostContactUpdateAsynchronousPackage : PluginBase<Entity>, IPlugin
    {
        private const string KEY_VAULT_SCOPE = "https://vault.azure.net/.default";
        private const string KEY_VAULT_URL = "https://devallinonepackage2.vault.azure.net/";
        private const string KEY_VAULT_SECRET_NAME = "DevAllInOnePackage2";

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
        public PostContactUpdateAsynchronousPackage(string unsecure, string secure) : base(unsecure, secure)
        {

        }
        protected override void ExecuteCrmPlugin(IPluginContext<Entity> context)
        {
            context.TracingService.DebugContext(context.PluginExecutionContext);

            var accessToken = AcquireManagedIdentityToken(context);
            new ContactOperation(context, accessToken, context.TracingService).Execute();
        }

        private static string AcquireManagedIdentityToken(IPluginContext<Entity> context)
        {
            var identityService = (IManagedIdentityService)context.ServiceProvider.GetService(typeof(IManagedIdentityService));
            if (identityService == null)
                throw new InvalidPluginExecutionException("Managed Identity service is not available.");

            var accessToken = identityService.AcquireToken(new List<string> { KEY_VAULT_SCOPE });
            if (string.IsNullOrWhiteSpace(accessToken))
                throw new InvalidPluginExecutionException("Managed Identity access token is empty.");

            return accessToken;
        }

        internal static string ReadKeyVaultSecret(ITracingService tracing, string accessToken)
        {
            return GetKeyVaultSecret(tracing, accessToken, KEY_VAULT_URL, KEY_VAULT_SECRET_NAME);
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

            var request = (HttpWebRequest)WebRequest.Create(secretUrl);
            request.Method = "GET";
            request.KeepAlive = false;
            request.Timeout = (int)TimeSpan.FromMinutes(1).TotalMilliseconds;
            request.Headers[HttpRequestHeader.Authorization] = $"Bearer {accessToken}";

            try
            {
                using (var response = (HttpWebResponse)request.GetResponse())
                using (var responseStream = response.GetResponseStream())
                {
                    var secret = Deserialize<KeyVaultSecretResponse>(responseStream);
                    if (string.IsNullOrEmpty(secret?.Value))
                        throw new InvalidPluginExecutionException("Azure Key Vault returned an empty secret value.");

                    tracing?.Trace($"Azure Key Vault secret '{secretName}' read successfully.");
                    return secret.Value;
                }
            }
            catch (WebException ex)
            {
                var response = ex.Response as HttpWebResponse;
                if (tracing != null)
                {
                    tracing.Trace($"Azure Key Vault secret read failed: {(int?)response?.StatusCode} {response?.StatusDescription}.");
                    tracing.Trace($"Exception Type: {ex.GetType().FullName}");
                    tracing.Trace($"Exception Message: {ex.Message}");
                    tracing.Trace($"Stack Trace: {ex.StackTrace}");
                }
                throw new InvalidPluginExecutionException($"Azure Key Vault error: {(int?)response?.StatusCode} {response?.StatusDescription}", ex);
            }
        }

        private static T Deserialize<T>(Stream stream)
        {
            var serializer = new DataContractJsonSerializer(typeof(T));
            return (T)serializer.ReadObject(stream);
        }

        [DataContract]
        private sealed class KeyVaultSecretResponse
        {
            [DataMember(Name = "value")]
            public string Value { get; set; }
        }
    }

    public class ContactOperation : OperationBase
    {
        private readonly string _accessToken;
        private readonly ITracingService _tracing;

        public ContactOperation(ITransactionContext<Entity> context, string accessToken, ITracingService tracing) : base(context)
        {
            _accessToken = accessToken;
            _tracing = tracing;
        }
        protected override void HandleExecute()
        {
            //YOUR PLUGIN-CODE GO HERE
            var secretValue = ReadKeyVaultSecret();

            _tracing?.Trace($"Managed Identity Key Vault secret value: {secretValue}");
            throw new InvalidPluginExecutionException($"Managed Identity Key Vault secret value: {secretValue}");
        }

        private string ReadKeyVaultSecret()
        {
            return PostContactUpdateAsynchronousPackage.ReadKeyVaultSecret(_tracing, _accessToken);
        }
    }
}
