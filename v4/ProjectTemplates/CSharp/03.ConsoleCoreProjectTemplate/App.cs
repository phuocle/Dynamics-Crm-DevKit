using Microsoft.Extensions.Configuration;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Configuration;
using System.IO;
using System.Runtime.CompilerServices;
using System.Threading;

namespace $NameSpace$
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

        private static string GetAppSettingValue(string key)
        {
            var settings = Configuration.GetSection("Dataverse");
            var value = settings.GetValue<string>(key);
            return value ?? string.Empty;
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
        private static string AuthType { get { return GetAppSettingValue("AuthType"); } }
        private static string Url { get { return GetAppSettingValue("Url"); } }
        private static string UserName { get { return GetAppSettingValue("UserName"); } }
        private static string Password { get { return GetAppSettingValue("Password"); } }
        private static string ConnectionString
        {
            get
            {
                switch (AuthType.ToUpperInvariant())
                {
                    case "CLIENTSECRET":
                        return $"AuthType=ClientSecret;Url={Url};ClientId={UserName};ClientSecret={Password};";
                    case "AD":
                        if (string.IsNullOrEmpty(UserName) || !UserName.Contains("\\"))
                            throw new ArgumentException("For AD authentication, username must be in format 'domain\\username'");
                        var parts = UserName.Split('\\');
                        if (parts.Length != 2)
                            throw new ArgumentException("For AD authentication, username must be in format 'domain\\username'");
                        return $"AuthType=AD;Url={Url};Domain={parts[0]};Username={parts[1]};Password={Password};";
                    case "OAUTH":
                    default:
                        var connectionString = $"AuthType=OAuth;Url={Url};Username={UserName};Password={Password};";
                        if (!connectionString.ToLower().Contains("appid="))
                        {
                            connectionString += "AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;";
                        }
                        if (!connectionString.ToLower().Contains("redirecturi="))
                        {
                            connectionString += "RedirectUri=http://localhost;";
                        }
                        if (!connectionString.ToLower().Contains("loginprompt="))
                        {
                            connectionString += "LoginPrompt=Auto;";
                        }
                        return connectionString;
                }
            }
        }
    }
}
