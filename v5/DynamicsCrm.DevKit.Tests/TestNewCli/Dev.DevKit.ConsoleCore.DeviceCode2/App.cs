using Microsoft.Extensions.Configuration;
using Microsoft.Identity.Client;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Dev.DevKit.ConsoleCore.DeviceCode2
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
                _Service = CreateServiceClientAsync().GetAwaiter().GetResult();
                ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                return _Service;
            }
        }

        private static string Url => GetAppSettingValue("Url");

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
