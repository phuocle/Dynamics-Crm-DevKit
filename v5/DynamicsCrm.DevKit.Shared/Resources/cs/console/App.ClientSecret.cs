using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Configuration;
using System.IO;

namespace $NameSpace$
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
            if (!string.IsNullOrWhiteSpace(value)) return value;
            value = GetProjectEnvironmentValue(environmentVariable);
            return value;
        }

        private static string GetProjectEnvironmentValue(string key)
        {
            var file = FindProjectEnvironmentFile(AppDomain.CurrentDomain.BaseDirectory);
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

        private static string Url => GetAppSettingOrEnvironment("Url", "DEVKIT_URL");
        private static string ClientId => GetAppSettingOrEnvironment("ClientId", "DEVKIT_CLIENT_ID");
        private static string ClientSecret => GetAppSettingOrEnvironment("ClientSecret", "DEVKIT_CLIENT_SECRET");
        private static string ConnectionString => $"AuthType=ClientSecret;Url={Url};ClientId={ClientId};ClientSecret={ClientSecret};";
    }
}
