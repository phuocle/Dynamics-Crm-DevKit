using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Configuration;

namespace Dev.DevKitV5.Console
{
    public static class App
    {
        private static ServiceClient _Service = null;
        public static ServiceClient Service
        {
            get
            {
                if (_Service != null) return _Service;
                _Service = new ServiceClient(ConnectionString);
                ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                return _Service;
            }
        }
        private static string GetAppSettingOrEnvironment(string key, string environmentVariable)
        {
            var value = ConfigurationManager.AppSettings[key];
            return string.IsNullOrWhiteSpace(value) ? Environment.GetEnvironmentVariable(environmentVariable) : value;
        }

        private static string Url => GetAppSettingOrEnvironment("Url", "DEVKIT_URL");
        private static string ClientId => GetAppSettingOrEnvironment("ClientId", "DEVKIT_CLIENT_ID");
        private static string ClientSecret => GetAppSettingOrEnvironment("ClientSecret", "DEVKIT_CLIENT_SECRET");
        private static string ConnectionString => $"AuthType=ClientSecret;Url={Url};ClientId={ClientId};ClientSecret={ClientSecret};";
    }
}
