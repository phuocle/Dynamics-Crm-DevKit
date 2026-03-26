using NuGet.Common;
using NuGet.Protocol;
using NuGet.Protocol.Core.Types;
using NuGet.Versioning;
using Spectre.Console;
using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    public static class UpdateChecker
    {
        private const string PackageId = "DynamicsCrm.DevKit.Cli";
        private const int CacheDays = 7;
        private const int TimeoutSeconds = 5;

        private static readonly string CacheDir = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
            "DynamicsCrm.DevKit");
        private static readonly string CacheFile = Path.Combine(CacheDir, ".update-check");

        public static async Task<UpdateCheckResult> CheckAsync()
        {
            try
            {
                var cached = ReadCache();
                if (cached != null && (DateTime.UtcNow - cached.LastCheck).TotalDays < CacheDays)
                {
                    return BuildResult(cached.LatestVersion);
                }

                using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(TimeoutSeconds));
                var latestVersion = await GetLatestVersionFromNuGetAsync(cts.Token);
                if (latestVersion != null)
                {
                    WriteCache(latestVersion);
                    return BuildResult(latestVersion);
                }
            }
            catch
            {
            }
            return UpdateCheckResult.None;
        }

        public static void ShowNotification(UpdateCheckResult result)
        {
            if (!result.HasUpdate) return;

            if (SpectreLog.IsPlain)
            {
                Console.WriteLine();
                Console.WriteLine($"[UPDATE] A new version of DynamicsCrm.DevKit.Cli is available!");
                Console.WriteLine($"  Current: {result.CurrentVersion}  ->  Latest: {result.LatestVersion}");
                Console.WriteLine($"  Run: dotnet tool update -g DynamicsCrm.DevKit.Cli");
                Console.WriteLine();
                return;
            }

            AnsiConsole.WriteLine();
            var panel = new Panel(
                new Markup(
                    $"[yellow]A new version of DynamicsCrm.DevKit.Cli is available![/]\n" +
                    $"[white]Current:[/] [red]{Markup.Escape(result.CurrentVersion)}[/]  [green]→[/]  [white]Latest:[/] [green]{Markup.Escape(result.LatestVersion)}[/]\n\n" +
                    $"[white]Run:[/] [cyan]dotnet tool update -g DynamicsCrm.DevKit.Cli[/]"))
            {
                Border = BoxBorder.Double,
                BorderStyle = new Style(Color.Yellow),
                Header = new PanelHeader(" [bold yellow] UPDATE AVAILABLE [/] ", Justify.Center),
                Padding = new Padding(2, 1),
            };
            AnsiConsole.Write(panel);
            AnsiConsole.WriteLine();
        }

        private static async Task<string> GetLatestVersionFromNuGetAsync(CancellationToken token)
        {
            var cache = new SourceCacheContext { NoCache = true };
            var repository = Repository.Factory.GetCoreV3("https://api.nuget.org/v3/index.json");
            var resource = await repository.GetResourceAsync<FindPackageByIdResource>(token);
            var versions = await resource.GetAllVersionsAsync(PackageId, cache, NullLogger.Instance, token);
            var latest = versions?
                .Where(v => !v.IsPrerelease)
                .OrderByDescending(v => v)
                .FirstOrDefault();
            return latest?.ToNormalizedString();
        }

        private static UpdateCheckResult BuildResult(string latestVersion)
        {
            var current = GetCurrentVersion();
            if (current == null) return UpdateCheckResult.None;
            if (!NuGetVersion.TryParse(latestVersion, out var latestVer)) return UpdateCheckResult.None;
            if (latestVer <= current) return UpdateCheckResult.None;
            return new UpdateCheckResult(true, current.ToNormalizedString(), latestVersion);
        }

        private static NuGetVersion GetCurrentVersion()
        {
            if (NuGetVersion.TryParse(DynamicsCrm.DevKit.Shared.Const.Version, out var constVer))
                return constVer;
            var asmVersion = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version;
            if (asmVersion != null && NuGetVersion.TryParse(asmVersion.ToString(), out var asmVer))
                return asmVer;
            return null;
        }

        private static UpdateCacheData ReadCache()
        {
            try
            {
                if (!File.Exists(CacheFile)) return null;
                var json = File.ReadAllText(CacheFile);
                return JsonSerializer.Deserialize<UpdateCacheData>(json);
            }
            catch
            {
                return null;
            }
        }

        private static void WriteCache(string latestVersion)
        {
            try
            {
                Directory.CreateDirectory(CacheDir);
                var data = new UpdateCacheData
                {
                    LastCheck = DateTime.UtcNow,
                    LatestVersion = latestVersion
                };
                File.WriteAllText(CacheFile, JsonSerializer.Serialize(data));
            }
            catch
            {
            }
        }
    }

    public class UpdateCacheData
    {
        public DateTime LastCheck { get; set; }
        public string LatestVersion { get; set; }
    }

    public readonly struct UpdateCheckResult
    {
        public static readonly UpdateCheckResult None = new(false, null, null);

        public bool HasUpdate { get; }
        public string CurrentVersion { get; }
        public string LatestVersion { get; }

        public UpdateCheckResult(bool hasUpdate, string currentVersion, string latestVersion)
        {
            HasUpdate = hasUpdate;
            CurrentVersion = currentVersion;
            LatestVersion = latestVersion;
        }
    }
}
