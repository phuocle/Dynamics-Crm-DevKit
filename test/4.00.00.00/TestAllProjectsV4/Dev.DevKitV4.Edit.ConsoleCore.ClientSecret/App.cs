using Microsoft.Extensions.Configuration;
using Microsoft.PowerPlatform.Dataverse.Client;
using System.Runtime.CompilerServices;

namespace Dev.DevKitV4.Edit.ConsoleCore.ClientSecret
{
    internal static class App
    {
        private static ServiceClient? _service;
        private static IConfiguration? _configuration;
        private static readonly Lock _lock = new();
        private static bool _disposed = false;

        public static ServiceClient Service
        {
            get
            {
                ThrowIfDisposed();
                if (_service is null)
                {
                    lock (_lock)
                    {
                        if (_service is null)
                        {
                            InitializeService();
                        }
                    }
                }
                return _service ?? throw new InvalidOperationException("ServiceClient could not be initialized.");
            }
        }

        public static IConfiguration Configuration
        {
            get
            {
                ThrowIfDisposed();
                if (_configuration is null)
                {
                    lock (_lock)
                    {
                        if (_configuration is null)
                        {
                            InitializeConfiguration();
                        }
                    }
                }
                return _configuration ?? throw new InvalidOperationException("Configuration could not be initialized.");
            }
        }

        private static void InitializeConfiguration()
        {
            var configurationBuilder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("AppSettings.json", optional: false, reloadOnChange: true);
            _configuration = configurationBuilder.Build();
        }

        private static void InitializeService()
        {
            try
            {
                if (_configuration == null) InitializeConfiguration();
                var connectionString = ConnectionStringBuilder.Build(_configuration!);
                _service = new ServiceClient(connectionString);
                if (_service == null) throw new InvalidOperationException("ServiceClient constructor returned null.");
                if (!_service.IsReady)
                {
                    var lastError = _service.LastError ?? "Unknown error";
                    var lastException = _service.LastException?.Message ?? "No exception details available";
                    _service.Dispose();
                    _service = null;
                    throw new InvalidOperationException($"Authentication failed or was cancelled. Last Error: {lastError}. Exception: {lastException}");
                }
            }
            catch (Exception ex) when (ex is not InvalidOperationException)
            {
                _service?.Dispose();
                _service = null;
                throw new InvalidOperationException($"Failed to initialize ServiceClient: {ex.Message}", ex);
            }
        }

        public static void DisposeService()
        {
            lock (_lock)
            {
                if (!_disposed)
                {
                    _service?.Dispose();
                    _service = null;
                    _disposed = true;
                }
            }
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private static void ThrowIfDisposed()
        {
            ObjectDisposedException.ThrowIf(_disposed, nameof(App));
        }
    }

    internal static class ConnectionStringBuilder
    {
        private const string DefaultRedirectUri = "app://58145B91-0C36-4500-8554-080854F2AC97";
        private const string DefaultLoginPrompt = "Auto";

        public static string Build(IConfiguration configuration)
        {
            var dataverseSettings = configuration.GetSection("Dataverse");
            var authType = GetAppSettingValue(dataverseSettings, "AuthType");
            var url = GetAppSettingValue(dataverseSettings, "Url");
            return authType.ToUpperInvariant() switch
            {
                "CLIENTSECRET" => BuildClientSecretConnectionString(dataverseSettings, url),
                "OAUTH" => BuildOAuthConnectionString(dataverseSettings, url),
                "AD" => BuildAdConnectionString(dataverseSettings, url),
                _ => throw new InvalidOperationException($"Unsupported AuthType: {authType}. Supported types are: ClientSecret, OAuth, AD")
            };
        }

        private static string BuildClientSecretConnectionString(IConfigurationSection settings, string url)
        {
            var username = GetAppSettingValue(settings, "UserName");
            var password = GetAppSettingValue(settings, "Password");
            return $"AuthType=ClientSecret;Url={url};ClientId={username};ClientSecret={password};";
        }

        private static string BuildOAuthConnectionString(IConfigurationSection settings, string url)
        {
            var username = GetAppSettingValue(settings, "Username");
            var password = GetAppSettingValue(settings, "Password");
            var connectionString = $"AuthType=OAuth;Url={url};UserName={username};RedirectUri={DefaultRedirectUri};LoginPrompt={DefaultLoginPrompt};";
            if (!string.IsNullOrWhiteSpace(password)) connectionString += $"Password={password};";
            return connectionString;
        }

        private static string BuildAdConnectionString(IConfigurationSection settings, string url)
        {
            var username = GetAppSettingValue(settings, "Username");
            var password = GetAppSettingValue(settings, "Password");
            var userParts = username.Split('\\');
            if (userParts.Length != 2) throw new InvalidOperationException("For AD authentication, Username must be in format 'domain\\username'");
            var domain = userParts[0];
            var user = userParts[1];
            if (string.IsNullOrWhiteSpace(domain) || string.IsNullOrWhiteSpace(user)) throw new InvalidOperationException("Domain and username cannot be empty for AD authentication");
            return $"AuthType=AD;Url={url};Domain={domain};Username={user};Password={password};";
        }

        private static string GetAppSettingValue(IConfigurationSection settings, string key)
        {
            var value = settings.GetValue<string>(key);
            return value ?? string.Empty;
        }
    }
}
