using CmdLine;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli
{
    public class Program
    {
        private static ServiceClient ServiceClient { get; set; }

        private static string GetVersionCacheFilePath()
        {
            var exePath = Assembly.GetExecutingAssembly().Location;
            var exeDirectory = Path.GetDirectoryName(exePath);
            return Path.Combine(exeDirectory, ".version-cache");
        }

        private static (DateTime lastCheck, string latestVersion) ReadVersionCache()
        {
            try
            {
                var cacheFile = GetVersionCacheFilePath();
                if (File.Exists(cacheFile))
                {
                    var lines = File.ReadAllLines(cacheFile);
                    if (lines.Length >= 2)
                    {
                        if (DateTime.TryParse(lines[0], out var lastCheck))
                        {
                            return (lastCheck, lines[1]);
                        }
                    }
                }
            }
            catch
            {
                // Ignore cache read errors
            }
            return (DateTime.MinValue, null);
        }

        private static void WriteVersionCache(string latestVersion)
        {
            try
            {
                var cacheFile = GetVersionCacheFilePath();
                File.WriteAllLines(cacheFile, new[] { DateTime.UtcNow.ToString("O"), latestVersion });
            }
            catch
            {
                // Ignore cache write errors
            }
        }

        private static async Task CheckForUpdatesAsync()
        {
            try
            {
                var currentVersion = Assembly.GetExecutingAssembly().GetName().Version;
                var (lastCheck, cachedVersion) = ReadVersionCache();
                var today = DateTime.UtcNow.Date;
                var needsCheck = lastCheck.Date < today;
                string latestVersionString = cachedVersion;
                if (needsCheck)
                {
                    var latestVersion = await NuGetHelper.GetLatestVersionAsync("DynamicsCrm.DevKit.Cli");
                    if (latestVersion != null)
                    {
                        latestVersionString = latestVersion.ToString();
                        WriteVersionCache(latestVersionString);
                    }
                }
                if (!string.IsNullOrEmpty(latestVersionString))
                {
                    var current = new Version(currentVersion.Major, currentVersion.Minor, currentVersion.Build, currentVersion.Revision);
                    if (Version.TryParse(latestVersionString, out var latest))
                    {
                        if (latest > current)
                        {
                            ShowUpdateNotification(current.ToString(), latestVersionString);
                        }
                    }
                }
            }
            catch
            {
            }
        }

        private static void ShowUpdateNotification(string currentVersion, string latestVersion)
        {
            var colorBox = ConsoleColor.Yellow;
            var textColor = ConsoleColor.White;
            var highlightColor = ConsoleColor.Cyan;

            CliLog.Write(colorBox, "╔");
            CliLog.Write(colorBox, new string('═', 112));
            CliLog.WriteLine(colorBox, "╗");

            CliLog.WriteLineNoFormat(colorBox, "║", textColor, " UPDATE AVAILABLE", new string(' ', 95), colorBox, "║");

            CliLog.Write(colorBox, "╠");
            CliLog.Write(colorBox, new string('═', 112));
            CliLog.WriteLine(colorBox, "╣");

            CliLog.WriteNoFormat(colorBox, "║", textColor, "  A newer version of ");
            CliLog.WriteNoFormat(ConsoleColor.Green, "DynamicsCrm.DevKit.Cli");
            CliLog.WriteLineNoFormat(textColor, " is available!", new string(' ', 55), colorBox, "║");
            CliLog.WriteLineNoFormat(colorBox, "║", textColor, new string(' ', 112), colorBox, "║");

            CliLog.WriteNoFormat(colorBox, "║", textColor, "  Current Version:  ");
            CliLog.WriteNoFormat(highlightColor, currentVersion);
            CliLog.WriteLine(colorBox, new string(' ', 112 - 20 - currentVersion.Length) + "║");

            CliLog.WriteNoFormat(colorBox, "║", textColor, "  Latest Version:   ");
            CliLog.WriteNoFormat(ConsoleColor.Green, latestVersion);
            CliLog.WriteLine(colorBox, new string(' ', 112 - 20 - latestVersion.Length) + "║");

            CliLog.WriteLineNoFormat(colorBox, "║", textColor, new string(' ', 112), colorBox, "║");

            CliLog.Write(colorBox, "╚");
            CliLog.Write(colorBox, new string('═', 112));
            CliLog.WriteLine(colorBox, "╝");
            Console.WriteLine();
        }

        [STAThread]
        public static async Task Main(string[] args)
        {
            //var cacheFile = GetVersionCacheFilePath();
            //var hasCachedVersion = File.Exists(cacheFile);
            //var versionCheckTask = CheckForUpdatesAsync();
            //if (!hasCachedVersion)
            //{
            //    var timeoutTask = Task.Delay(2000);
            //    await Task.WhenAny(versionCheckTask, timeoutTask);
            //}
            if (args.Count() == 0)
            {
                ShowHelp(true);
                Console.ReadKey();
            }
            else
            {
                var arguments = CommandLine.Parse<CommandLineArgs>();
                await RunCliAsync(arguments);
            }
        }

        private static void ShowHelp(bool showParam = false)
        {
            var helpColor = ConsoleColor.White;
            var colorBox = ConsoleColor.Green;
            CliLog.SetupCliLog();
            CliLog.Write(colorBox, "╔");
            CliLog.Write(colorBox, new string('═', 112));
            CliLog.WriteLine(colorBox, "╗");
            CliLog.WriteLineNoFormat(colorBox, "║ ", helpColor, "  ____                              _           ____                  ____             _  ___ _     ____ _ _ ", colorBox, "  ║");
            CliLog.WriteLineNoFormat(colorBox, "║ ", helpColor, " |  _ \\ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \\  _____   _| |/ (_) |_  / ___| (_)", colorBox, "  ║");
            CliLog.WriteLineNoFormat(colorBox, "║ ", helpColor, " | | | | | | | '_ \\ / _` | '_ ` _ \\| |/ __/ __| |   | '__| '_ ` _ \\  | | | |/ _ \\ \\ / / ' /| | __|| |   | | |", colorBox, "  ║");
            CliLog.WriteLineNoFormat(colorBox, "║ ", helpColor, " | |_| | |_| | | | | (_| | | | | | | | (__\\__ \\ |___| |  | | | | | |_| |_| |  __/\\ V /| . \\| | |_ | |___| | |", colorBox, "  ║");
            CliLog.WriteLineNoFormat(colorBox, "║ ", helpColor, " |____/ \\__, |_| |_|\\__,_|_| |_| |_|_|\\___|___/\\____|_|  |_| |_| |_(_)____/ \\___| \\_/ |_|\\_\\_|\\__(_)____|_|_|", colorBox, "  ║");
            CliLog.WriteNoFormat(colorBox, "║ ", helpColor, "        |___/            ", ConsoleColor.Green, "https://github.com/phuocle/Dynamics-Crm-DevKit ");
            CliLog.WriteSuccess(ConsoleColor.White, Const.Version);
            CliLog.Write(ConsoleColor.Green, " Build: ");
            CliLog.WriteSuccess(ConsoleColor.White, Const.Build);
            CliLog.WriteLine(colorBox, "  ║");
            CliLog.Write(colorBox, "╚");
            CliLog.Write(colorBox, new string('═', 112));
            CliLog.Write(colorBox, "╝");
            CliLog.WriteLine(ConsoleColor.Black, "█");
            CliLog.WriteLine(ConsoleColor.White, "|");
            if (showParam)
            {
            }
        }

        static async Task RunCliAsync(CommandLineArgs arguments)
        {
            ShowHelp();
            if (await IsValidAsync(arguments))
            {
                await CliTask.RunAsync(arguments);
            }
            CliLog.WriteLine(ConsoleColor.White, "|");
#if DEBUG
            Console.ReadKey();
#endif
        }

        private static async Task<bool> IsValidAsync(CommandLineArgs arguments)
        {
            ServiceClient = null;
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Current Directory ", ConsoleColor.Blue, "Path=", ConsoleColor.White, arguments.CurrentDirectory);
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "DynamicsCrm.DevKit.Cli.exe ", ConsoleColor.Blue, "Path=", ConsoleColor.White, Assembly.GetExecutingAssembly().Location);
            if (!File.Exists(arguments.JsonFile))
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"/json:{arguments.Json} [{arguments.JsonFile}] not found !!!");
                return false;
            }
            CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "DynamicsCrm.DevKit.Cli.json ", ConsoleColor.Blue, "Path=", ConsoleColor.White, arguments.JsonFile);
            if (arguments.IsSdkLogin)
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Arguments: ", ConsoleColor.Blue, "/sdklogin:", ConsoleColor.White, "\"yes\"");
                CliLog.WriteLine(ConsoleColor.White, "|           ", ConsoleColor.Blue, "/url:", ConsoleColor.White, "\"" + arguments.Url + "\"");
                CliLog.WriteLine(ConsoleColor.White, "|           ", ConsoleColor.Blue, "/json:", ConsoleColor.White, "\"" + arguments.Json + "\"");
                CliLog.WriteLine(ConsoleColor.White, "|           ", ConsoleColor.Blue, "/type:", ConsoleColor.White, "\"" + arguments.Type + "\"");
                CliLog.WriteLine(ConsoleColor.White, "|           ", ConsoleColor.Blue, "/profile:", ConsoleColor.White, "\"" + arguments.Profile + "\"");
            }
            else
            {
                if (arguments.Connection.Length == 0)
                {
                    CliLog.WriteLineError(ConsoleColor.Yellow, $"/conn: required !!!");
                    return false;
                }
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Arguments: ", ConsoleColor.Blue, "/conn:", ConsoleColor.White, "\"" + Helper.BuildConnectionStringLog(arguments.Connection) + "\"");
                CliLog.WriteLine(ConsoleColor.White, "|           ", ConsoleColor.Blue, "/json:", ConsoleColor.White, "\"" + arguments.Json + "\"");
                CliLog.WriteLine(ConsoleColor.White, "|           ", ConsoleColor.Blue, "/type:", ConsoleColor.White, "\"" + arguments.Type + "\"");
                CliLog.WriteLine(ConsoleColor.White, "|           ", ConsoleColor.Blue, "/profile:", ConsoleColor.White, "\"" + arguments.Profile + "\"");
            }
            if (arguments.Type.Length == 0)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"/type: required !!!");
                return false;
            }
            if (arguments.Profile.Length == 0)
            {
                CliLog.WriteLineError(ConsoleColor.Yellow, $"/profile: required !!!");
                return false;
            }
            if (await IsNeedServiceClientAsync(arguments))
            {
                if (arguments.IsSdkLogin)
                {
                    var ignoreCliTypes = new List<string>() { nameof(CliType.proxytypes) };
                    if (!ignoreCliTypes.Any(x => arguments.Type == x))
                    {
                        if (!string.IsNullOrEmpty(arguments.Url)) {
                            if (!await IsConnectedDynamics365BySdkLoginAsync(arguments.Url, arguments.ClientId, arguments.TenantId))
                            {
                                CliLog.WriteLine(ConsoleColor.White, "|");
                                CliLog.WriteLineError(ConsoleColor.Yellow, $" OOB Login failed !!!");
                                return false;
                            }
                        }
                        else
                        {
                            CliLog.WriteLineError(ConsoleColor.Yellow, $"/url: required !!!");
                            return false;
                        }
                    }
                }
                else
                {
                    var crmConn = Helper.ParseConnectionString(arguments.Connection);
                    var decryptedConnString = Helper.BuildConnectionString(crmConn);
                    var result = await Helper.IsConnectedAsync(decryptedConnString);
                    ServiceClient = result.serviceClient;
                    if (ServiceClient == null)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, result.error ?? "Unknown connection error");
                        return false;
                    }
                }
                arguments.ServiceClient = ServiceClient;
            }
            else
            {
                arguments.ServiceClient = null;
            }
            if (ServiceClient != null)
            {
                ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.Write(ConsoleColor.White, "|", ConsoleColor.Green, "Connected: ");
                CliLog.WriteSuccess(ConsoleColor.White, ServiceClient.ConnectedUrl());
                CliLog.Write(ConsoleColor.Green, " with connection timeout: ");
                CliLog.WriteSuccess(ConsoleColor.White, ServiceClient.MaxConnectionTimeout.TotalSeconds.ToString("#,###"));
                CliLog.WriteLine(ConsoleColor.Green, " (seconds)");
            }
            CliLog.WriteLine(ConsoleColor.White, "|");
            return true;
        }

        private static async Task<bool> IsNeedServiceClientAsync(CommandLineArgs arguments)
        {
            if (arguments.IsSdkLogin && arguments.Type.ToLower() == nameof(CliType.proxytypes))
                return false;
            if (arguments.Type.ToLower() == nameof(CliType.solutionpackagers))
            {
                var json = SimpleJson.DeserializeObject<Json>(await FileHelper.ReadAllTextAsync(arguments.JsonFile));
                var jsonSolutionPackager = json.solutionpackagers.FirstOrDefault(x => x.profile == arguments.Profile);
                if (jsonSolutionPackager?.type?.ToLower() == "Pack".ToLower()) return false;
            }
            return true;
        }

        private static async Task<bool> IsConnectedDynamics365BySdkLoginAsync(string url, string clientId = null, string tenantId = null)
        {
            try
            {
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Starting OAuth authentication...");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, "Please complete authentication in the browser window that will open.");

                // Use custom ClientId if provided, otherwise use default Microsoft ClientId
                var effectiveClientId = string.IsNullOrWhiteSpace(clientId) 
                    ? "51f81489-12ee-4a9e-aaae-a2591f45987d" 
                    : clientId;

                if (!string.IsNullOrWhiteSpace(clientId))
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Cyan, $"Using custom Client ID: {clientId}");
                }

                if (!string.IsNullOrWhiteSpace(tenantId))
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Cyan, $"Restricting to Tenant ID: {tenantId}");
                }

                var serviceClient = new ServiceClient(
                    userId: null,
                    password: null,
                    hostUri: new Uri(url),
                    useUniqueInstance: true,
                    clientId: effectiveClientId,
                    redirectUri: new Uri("app://58145B91-0C36-4500-8554-080854F2AC97"),
                    promptBehavior: Microsoft.PowerPlatform.Dataverse.Client.Auth.PromptBehavior.Always,
                    useDefaultCreds: false,
                    tokenCacheStorePath: null,
                    logger: null
                );

                // Wait a bit for the connection to establish
                await Task.Delay(100);

                if (serviceClient != null && serviceClient.IsReady)
                {
                    ServiceClient = serviceClient;
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "OAuth authentication successful!");
                    return true;
                }

                // Wait up to 30 seconds for connection to establish
                var timeout = TimeSpan.FromSeconds(30);
                var start = DateTime.Now;
                while (serviceClient != null && !serviceClient.IsReady && DateTime.Now - start < timeout)
                {
                    await Task.Delay(500);
                }

                if (serviceClient?.IsReady == true)
                {
                    ServiceClient = serviceClient;
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "OAuth authentication successful!");
                    return true;
                }
                else
                {
                    CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Red, "OAuth authentication failed - service not ready");
                    if (!string.IsNullOrEmpty(serviceClient?.LastError))
                    {
                        CliLog.WriteLineError(ConsoleColor.Red, $"Error: {serviceClient.LastError}");
                    }
                    return false;
                }
            }
            catch (Exception ex)
            {
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Red, "OAuth authentication failed with exception:");
                CliLog.WriteLineError(ConsoleColor.Red, ex.Message);
                if (ex.InnerException != null)
                {
                    CliLog.WriteLineError(ConsoleColor.Red, $"Inner Exception: {ex.InnerException.Message}");
                }
                return false;
            }
        }
    }
}