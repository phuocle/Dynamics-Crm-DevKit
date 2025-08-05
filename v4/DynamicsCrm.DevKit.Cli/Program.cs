using CmdLine;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
namespace DynamicsCrm.DevKit.Cli
{
    public class Program
    {
        private static ServiceClient ServiceClient { get; set; }

        [STAThread]
        public static void Main(string[] args)
        {
            if (args.Count() == 0)
            {
                ShowHelp();
                Console.ReadKey();
            }
            else
            {
                var arguments = CommandLine.Parse<CommandLineArgs>();
                RunCli(arguments);
            }
        }

        private static void ShowHelp()
        {
            var helpColor = ConsoleColor.Blue;
            var colorBox = ConsoleColor.Green;
            CliLog.SetupCliLog();
            CliLog.Write(colorBox, "╔");
            CliLog.Write(colorBox, new string('═', 112));
            CliLog.WriteLine(colorBox, "╗");
            CliLog.WriteLine2(colorBox, "║ ", helpColor, "  ____                              _           ____                  ____             _  ___ _     ____ _ _ ", colorBox, "  ║");
            CliLog.WriteLine2(colorBox, "║ ", helpColor, " |  _ \\ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \\  _____   _| |/ (_) |_  / ___| (_)", colorBox, "  ║");
            CliLog.WriteLine2(colorBox, "║ ", helpColor, " | | | | | | | '_ \\ / _` | '_ ` _ \\| |/ __/ __| |   | '__| '_ ` _ \\  | | | |/ _ \\ \\ / / ' /| | __|| |   | | |", colorBox, "  ║");
            CliLog.WriteLine2(colorBox, "║ ", helpColor, " | |_| | |_| | | | | (_| | | | | | | | (__\\__ \\ |___| |  | | | | | |_| |_| |  __/\\ V /| . \\| | |_ | |___| | |", colorBox, "  ║");
            CliLog.WriteLine2(colorBox, "║ ", helpColor, " |____/ \\__, |_| |_|\\__,_|_| |_| |_|_|\\___|___/\\____|_|  |_| |_| |_(_)____/ \\___| \\_/ |_|\\_\\_|\\__(_)____|_|_|", colorBox, "  ║");
            CliLog.Write2(colorBox, "║ ", helpColor, "        |___/            ", ConsoleColor.White, "https://github.com/phuocle/Dynamics-Crm-DevKit ");
            CliLog.WriteSuccess(ConsoleColor.White, Const.Version);
            CliLog.Write(ConsoleColor.White, " Build: ");
            CliLog.WriteSuccess(ConsoleColor.White, Const.Build);
            CliLog.WriteLine(colorBox, "  ║");
            CliLog.Write(colorBox, "╚");
            CliLog.Write(colorBox, new string('═', 112));
            CliLog.Write(colorBox, "╝");
            CliLog.WriteLine(ConsoleColor.Black, "█");
            CliLog.WriteLine(ConsoleColor.White, "|");
        }

        static void RunCli(CommandLineArgs arguments)
        {
            ShowHelp();
            if (IsValid(arguments))
            {
                CliTask.Run(arguments);
            }
            CliLog.WriteLine(ConsoleColor.White, "|");
#if DEBUG
            Console.ReadKey();
#endif
        }

        private static bool IsValid(CommandLineArgs arguments)
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
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Arguments: ", ConsoleColor.Blue, "/conn:", ConsoleColor.White, "\"" + XrmHelper.BuildConnectionStringLog(arguments.Connection) + "\"");
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
            if (IsNeedServiceClient(arguments))
            {
                ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                if (arguments.IsSdkLogin)
                {
                    var ignoreCliTypes = new List<string>() { nameof(CliType.proxytypes) };
                    if (!ignoreCliTypes.Any(x => arguments.Type == x))
                    {
                        if (!string.IsNullOrEmpty(arguments.Url)) {
                            if (!IsConnectedDynamics365BySdkLogin(arguments.Url))
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
                    ServiceClient = XrmHelper.IsConnected(XrmHelper.BuildConnectionString(arguments.Connection), out var error);
                    if (ServiceClient == null)
                    {
                        CliLog.WriteLineError(ConsoleColor.Yellow, error);
                        return false;
                    }
                }
                arguments.CrmServiceClient = ServiceClient;
            }
            else
            {
                arguments.CrmServiceClient = null;
            }
            if (ServiceClient != null)
            {
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.Write(ConsoleColor.White, "|", ConsoleColor.Green, "Connected: ");
                CliLog.WriteSuccess(ConsoleColor.White, XrmHelper.ConnectedUrl(ServiceClient));
                CliLog.Write(ConsoleColor.Green, " with connection timeout: ");
                CliLog.Write(ConsoleColor.White, ServiceClient.MaxConnectionTimeout.TotalSeconds.ToString("#,###"));
                CliLog.WriteLine(ConsoleColor.Green, " (seconds)");
            }
            CliLog.WriteLine(ConsoleColor.White, "|");
            return true;
        }

        private static bool IsNeedServiceClient(CommandLineArgs arguments)
        {
            if (arguments.IsSdkLogin && arguments.Type.ToLower() == nameof(CliType.proxytypes))
                return false;
            if (arguments.Type.ToLower() == nameof(CliType.solutionpackagers))
            {
                var json = SimpleJson.DeserializeObject<Json>(File.ReadAllText(arguments.JsonFile));
                var jsonSolutionPackager = json.solutionpackagers.FirstOrDefault(x => x.profile == arguments.Profile);
                if (jsonSolutionPackager?.type?.ToLower() == "Pack".ToLower()) return false;
            }
            return true;
        }

        private static bool IsConnectedDynamics365BySdkLogin(string url)
        {
            try
            {
                CliLog.WriteLine(ConsoleColor.White, "|");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Green, "Starting OAuth authentication...");
                CliLog.WriteLine(ConsoleColor.White, "|", ConsoleColor.Yellow, "Please complete authentication in the browser window that will open.");
                // Use interactive OAuth authentication with browser login
                // This will open a browser window for the user to authenticate
                var serviceClient = new ServiceClient(
                    userId: null, // Will prompt for user ID in browser
                    password: null, // Will prompt for password in browser
                    hostUri: new Uri(url),
                    useUniqueInstance: true,
                    clientId: "51f81489-12ee-4a9e-aaae-a2591f45987d", // Default Dynamics 365 CLI app ID
                    redirectUri: new Uri("app://58145B91-0C36-4500-8554-080854F2AC97"), // Default redirect URI
                    promptBehavior: Microsoft.PowerPlatform.Dataverse.Client.Auth.PromptBehavior.Always, // Always prompt for authentication
                    useDefaultCreds: false,
                    tokenCacheStorePath: null, // Use in-memory cache
                    logger: null
                );
                // Check if connection was successful
                if (serviceClient != null && serviceClient.IsReady)
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