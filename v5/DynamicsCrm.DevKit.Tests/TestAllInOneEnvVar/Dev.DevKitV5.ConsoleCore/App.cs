using Microsoft.Extensions.Configuration;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;

namespace Dev.DevKitV5.ConsoleCore
{
    public static class App
    {
        private static void InitializeConfiguration()
        {
            var configurationBuilder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("AppSettings.json", optional: false, reloadOnChange: true);
            _Configuration = configurationBuilder.Build();
        }
        private static IConfiguration _Configuration = null;
        public static IConfiguration Configuration
        {
            get
            {
                if (_Configuration is null) InitializeConfiguration();
                return _Configuration ?? throw new InvalidOperationException("Configuration could not be initialized.");
            }
        }

        private static string GetAppSettingValue(string key, string environmentVariable)
        {
            var settings = Configuration.GetSection("Dataverse");
            var value = settings.GetValue<string>(key);
            return string.IsNullOrWhiteSpace(value) ? Environment.GetEnvironmentVariable(environmentVariable) : value;
        }

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
        private static string Url => GetAppSettingValue("Url", "DEVKIT_URL");
        private static string ClientId => GetAppSettingValue("ClientId", "DEVKIT_CLIENT_ID");
        private static string ClientSecret => GetAppSettingValue("ClientSecret", "DEVKIT_CLIENT_SECRET");
        private static string ConnectionString => $"AuthType=ClientSecret;Url={Url};ClientId={ClientId};ClientSecret={ClientSecret};";
    }
}
