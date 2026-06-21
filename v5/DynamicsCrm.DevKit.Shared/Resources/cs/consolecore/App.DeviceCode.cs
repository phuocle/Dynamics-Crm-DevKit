using Microsoft.Extensions.Configuration;
using Microsoft.Identity.Client;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace $NameSpace$
{
    public static class App
    {
        private const string DefaultClientId = "51f81489-12ee-4a9e-aaae-a2591f45987d";
        private static readonly TimeSpan DefaultTimeout = TimeSpan.FromMinutes(5);

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
                _Service = CreateServiceClientAsync().GetAwaiter().GetResult();
                ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                return _Service;
            }
        }

        private static string Url => GetAppSettingValue("Url", "DEVKIT_URL");

        private static async Task<ServiceClient> CreateServiceClientAsync()
        {
            var publicClient = PublicClientApplicationBuilder
                .Create(DefaultClientId)
                .WithRedirectUri("http://localhost")
                .Build();

            var scope = new Uri(new Uri(Url), "/.default").ToString();
            var scopes = new[] { scope };

            using var cts = new CancellationTokenSource(DefaultTimeout);

            var authResult = await publicClient.AcquireTokenWithDeviceCode(scopes, deviceCodeResult =>
            {
                Console.WriteLine();
                Console.WriteLine("═══════════════════════════════════════════════════════════════");
                Console.WriteLine(" Device Code Authentication");
                Console.WriteLine("═══════════════════════════════════════════════════════════════");
                Console.WriteLine();
                Console.WriteLine($" {deviceCodeResult.Message}");
                Console.WriteLine();
                Console.WriteLine(" Waiting for authentication...");
                Console.WriteLine("═══════════════════════════════════════════════════════════════");
                return Task.CompletedTask;
            }).ExecuteAsync(cts.Token);

            return new ServiceClient(
                new Uri(Url),
                async (url) => authResult.AccessToken
            );
        }
    }
}
