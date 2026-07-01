using Microsoft.Extensions.Configuration;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;

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

        public static string GetAppSettingValue(string key, string environmentVariable)
        {
            var settings = Configuration.GetSection("Dataverse");
            var value = settings.GetValue<string>(key);
            if (!string.IsNullOrWhiteSpace(value)) return value;
            value = GetProjectEnvironmentValue(environmentVariable);
            return value;
        }

        private static string GetProjectEnvironmentValue(string key)
        {
            var file = FindProjectEnvironmentFile(AppContext.BaseDirectory);
            if (string.IsNullOrWhiteSpace(file)) return null;

            foreach (var rawLine in File.ReadAllLines(file))
            {
                var line = rawLine.Trim();
                if (string.IsNullOrWhiteSpace(line) || line.StartsWith("#")) continue;
                var index = line.IndexOf('=');
                if (index <= 0) continue;
                var name = line.Substring(0, index).Trim();
                if (!name.Equals(key, StringComparison.OrdinalIgnoreCase)) continue;
                return Unquote(line.Substring(index + 1).Trim());
            }

            return null;
        }

        private static string FindProjectEnvironmentFile(string startDirectory)
        {
            var directory = new DirectoryInfo(startDirectory);
            while (directory != null)
            {
                var file = Path.Combine(directory.FullName, ".env");
                if (File.Exists(file)) return file;
                directory = directory.Parent;
            }
            return null;
        }

        private static string Unquote(string value)
        {
            if (string.IsNullOrEmpty(value) || value.Length < 2) return value;
            var first = value[0];
            var last = value[value.Length - 1];
            return (first == '"' && last == '"') || (first == '\'' && last == '\'')
                ? value.Substring(1, value.Length - 2)
                : value;
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
        private static string UserName => GetAppSettingValue("UserName", "DEVKIT_USERNAME");
        private static string Password => GetAppSettingValue("Password", "DEVKIT_PASSWORD");
        private static string ConnectionString => $"AuthType=OAuth;Url={Url};Username={UserName};Password={Password};AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=http://localhost;LoginPrompt=Auto;";
    }
}
