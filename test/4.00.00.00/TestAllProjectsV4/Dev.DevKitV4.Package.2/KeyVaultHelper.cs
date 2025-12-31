using System;
using System.IO;
using System.Net;
using System.Text;
using Microsoft.Xrm.Sdk;

namespace Dev.DevKitV4.Package._2
{
    /// <summary>
    /// Simple helper to get Azure Key Vault secret using managed identity token
    /// No external dependencies required - uses pure HttpWebRequest
    /// </summary>
    public static class KeyVaultHelper
    {
        /// <summary>
        /// Get secret value from Azure Key Vault
        /// </summary>
        /// <param name="token">Managed Identity token from IManagedIdentityService</param>
        /// <param name="keyVaultUrl">Key Vault URL (e.g., "https://dataverse-plugin-kv.vault.azure.net/")</param>
        /// <param name="secretName">Secret name (e.g., "ApiEndPoint")</param>
        /// <param name="tracing">Optional tracing service for logging</param>
        /// <returns>Secret value as string</returns>
        public static string GetSecret(string token, string keyVaultUrl, string secretName, ITracingService tracing = null)
        {
            try
            {
                // Ensure Key Vault URL ends with /
                if (!keyVaultUrl.EndsWith("/"))
                    keyVaultUrl += "/";

                // Build Key Vault secret URL - using latest API version
                var secretUrl = $"{keyVaultUrl}secrets/{secretName}?api-version=7.4";

                tracing?.DebugMessage($"[KeyVault] Requesting secret: {secretName}");
                tracing?.DebugMessage($"[KeyVault] URL: {secretUrl}");

                // Create HTTP request
                var request = (HttpWebRequest)WebRequest.Create(secretUrl);
                request.Method = "GET";
                request.Headers.Add("Authorization", $"Bearer {token}");
                request.ContentType = "application/json";

                // Get response
                using (var response = (HttpWebResponse)request.GetResponse())
                {
                    tracing?.DebugMessage($"[KeyVault] Response Status: {response.StatusCode}");

                    using (var stream = response.GetResponseStream())
                    using (var reader = new StreamReader(stream, Encoding.UTF8))
                    {
                        var responseBody = reader.ReadToEnd();
                        tracing?.DebugMessage($"[KeyVault] Response received (length: {responseBody.Length})");

                        // Parse JSON response manually (no JSON library needed for simple case)
                        // Response format: {"value":"secret-value","id":"...","attributes":{...}}
                        var secretValue = ExtractJsonValue(responseBody, "value");

                        if (string.IsNullOrEmpty(secretValue))
                        {
                            tracing?.DebugMessage($"[KeyVault] ERROR: Could not extract 'value' from response");
                            tracing?.DebugMessage($"[KeyVault] Response body: {responseBody}");
                            throw new InvalidPluginExecutionException($"Failed to extract secret value from Key Vault response");
                        }

                        tracing?.DebugMessage($"[KeyVault] Secret retrieved successfully!");
                        tracing?.DebugMessage($"[KeyVault] Secret value length: {secretValue.Length} characters");

                        return secretValue;
                    }
                }
            }
            catch (WebException webEx)
            {
                var errorMessage = new StringBuilder();
                errorMessage.AppendLine($"[KeyVault] WebException occurred:");
                errorMessage.AppendLine($"Status: {webEx.Status}");
                errorMessage.AppendLine($"Message: {webEx.Message}");

                if (webEx.Response != null)
                {
                    using (var errorResponse = (HttpWebResponse)webEx.Response)
                    using (var stream = errorResponse.GetResponseStream())
                    using (var reader = new StreamReader(stream))
                    {
                        var errorBody = reader.ReadToEnd();
                        errorMessage.AppendLine($"Response Status: {errorResponse.StatusCode}");
                        errorMessage.AppendLine($"Response Body: {errorBody}");
                    }
                }

                tracing?.DebugMessage(errorMessage.ToString());
                throw new InvalidPluginExecutionException($"Failed to retrieve secret from Key Vault: {webEx.Message}", webEx);
            }
            catch (Exception ex)
            {
                tracing?.DebugMessage($"[KeyVault] Exception: {ex.GetType().Name}");
                tracing?.DebugMessage($"[KeyVault] Message: {ex.Message}");
                tracing?.DebugMessage($"[KeyVault] StackTrace: {ex.StackTrace}");
                throw new InvalidPluginExecutionException($"Error retrieving Key Vault secret: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// Simple JSON value extractor (no JSON library dependency)
        /// Extracts value for a given key from JSON string
        /// </summary>
        private static string ExtractJsonValue(string json, string key)
        {
            var searchKey = $"\"{key}\":\"";
            var startIndex = json.IndexOf(searchKey);
            if (startIndex == -1)
                return null;

            startIndex += searchKey.Length;
            var endIndex = json.IndexOf("\"", startIndex);
            if (endIndex == -1)
                return null;

            return json.Substring(startIndex, endIndex - startIndex);
        }
    }
}