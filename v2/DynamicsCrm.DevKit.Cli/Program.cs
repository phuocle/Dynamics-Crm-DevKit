using System;
using System.IO;
using System.Net;
using System.Reflection;
using CmdLine;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.SdkLogin;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Helper;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Cli
{
    public class Program
    {
        private static string CurrentDirectory
        {
            get
            {
#if DEBUG
                return @"C:\src\github\phuocle\Dynamics-Crm-DevKit\test\v.2.13.33\TestServerUnitTest\Dev.DevKit.ProxyTypes";
#else
                return Directory.GetCurrentDirectory();
#endif
            }
        }

        private static CrmServiceClient CrmServiceClient { get; set; }

        private static void CrmCli(CommandLineArgs arguments)
        {
#if DEBUG
            CliLog.WriteLine(CliLog.ColorRed, new string('█', CliLog.StarLength + 10));
            CliLog.WriteLine(CliLog.ColorRed, " DEBUG MODE");
            CliLog.WriteLine(CliLog.ColorRed, new string('█', CliLog.StarLength + 10));
#endif
            CliLog.WriteLine(CliLog.ColorGreen, " ____                              _           ____                  ____             _  ___ _     ____ _ _ ");
            CliLog.WriteLine(CliLog.ColorGreen, "|  _ \\ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \\  _____   _| |/ (_) |_  / ___| (_)");
            CliLog.WriteLine(CliLog.ColorGreen, "| | | | | | | '_ \\ / _` | '_ ` _ \\| |/ __/ __| |   | '__| '_ ` _ \\  | | | |/ _ \\ \\ / / ' /| | __|| |   | | |");
            CliLog.WriteLine(CliLog.ColorGreen, "| |_| | |_| | | | | (_| | | | | | | | (__\\__ \\ |___| |  | | | | | |_| |_| |  __/\\ V /| . \\| | |_ | |___| | |");
            CliLog.WriteLine(CliLog.ColorGreen, "|____/ \\__, |_| |_|\\__,_|_| |_| |_|_|\\___|___/\\____|_|  |_| |_| |_(_)____/ \\___| \\_/ |_|\\_\\_|\\__(_)____|_|_|");
            CliLog.WriteLine(CliLog.ColorGreen, "       |___/                        ", CliLog.ColorWhite, "https://github.com/phuocle/Dynamics-Crm-DevKit", CliLog.ColorBlue, $" {Const.Version}", CliLog.ColorWhite, " Build: ", CliLog.ColorBlue, Const.BuildDate);
            CliLog.WriteLine();
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Current directory path: ", CliLog.ColorWhite, CurrentDirectory);
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "DynamicsCrm.DevKit.Cli.exe path: ", CliLog.ColorWhite, Assembly.GetExecutingAssembly().Location);
#if !DEBUG
            try
            {
#endif
            var jsonFile = Path.Combine(CurrentDirectory, arguments.Json);
            var jsonFileInfo = new FileInfo(jsonFile);
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "DynamicsCrm.DevKit.Cli.json path: ", CliLog.ColorWhite, jsonFileInfo.FullName);
            if (arguments.SdkLogin.Length > 0 && arguments.SdkLogin.ToLower() == "yes")
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Arguments: ",
                CliLog.ColorMagenta, "/sdklogin:", CliLog.ColorWhite, "\"yes\"", " ",
                CliLog.ColorMagenta, "/json:", CliLog.ColorWhite, "\"" + arguments.Json, "\" ",
                CliLog.ColorMagenta, "/type:", CliLog.ColorWhite, "\"" + arguments.Type, "\" ",
                CliLog.ColorMagenta, "/profile:", CliLog.ColorWhite, "\"" + arguments.Profile + "\""
                );
            }
            else
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Arguments: ",
                CliLog.ColorMagenta, "/conn:", CliLog.ColorWhite, "\"" + XrmHelper.BuildConnectionStringLog2(arguments.Connection), "\" ",
                CliLog.ColorMagenta, "/json:", CliLog.ColorWhite, "\"" + arguments.Json, "\" ",
                CliLog.ColorMagenta, "/type:", CliLog.ColorWhite, "\"" + arguments.Type, "\" ",
                CliLog.ColorMagenta, "/profile:", CliLog.ColorWhite, "\"" + arguments.Profile + "\""
                );
            }

            Run(arguments);
#if DEBUG
            CliLog.WriteLine(CliLog.ColorRed, new string('█', CliLog.StarLength + 10));
            CliLog.WriteLine(CliLog.ColorRed, "!!! FINISHED !!!");
            CliLog.WriteLine(CliLog.ColorRed, new string('█', CliLog.StarLength + 10));
            Console.ReadKey();
#endif
#if !DEBUG
            }
            catch (Exception e)
            {
                CliLog.WriteLine(CliLog.ColorError, $"{e.Message}");
                Console.ReadKey();
            }
#endif
        }

        [STAThread]
        public static void Main(string[] args)
        {
            var arguments = CommandLine.Parse<CommandLineArgs>();
            CrmCli(arguments);
        }

        private static void Run(CommandLineArgs arguments)
        {
            if (!IsValid(arguments)) return;
            var task = new Task(CrmServiceClient, CurrentDirectory, arguments);
            task.Run();
        }

        private static bool IsValid(CommandLineArgs arguments)
        {
            if (arguments.SdkLogin.Length > 0 && arguments.SdkLogin.ToLower() == "yes")
            {
                ;
            }
            else
            {
                if (arguments.Connection.Length == 0)
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/conn: missing");
                    return false;
                }
            }
            if (arguments.Json.Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorError, $"/json: missing");
                return false;
            }
            var jsonFile = Path.Combine(CurrentDirectory, arguments.Json);
            if (!File.Exists(jsonFile))
            {
                CliLog.WriteLine(CliLog.ColorError, $"/json: DynamicsCrm.DevKit json missing [{jsonFile}]");
                return false;
            }
            if (arguments.Type.Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorError, $"/type: missing");
                return false;
            }
            if (arguments.Profile.Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorError, $"/profile: missing");
                return false;
            }
            if (arguments.SdkLogin.Length > 0 && arguments.SdkLogin.ToLower() == "yes")
            {
                if (arguments.Type.ToLower() != "proxytypes")
                {
                    if (!IsConnectedDynamics365BySdkLogin())
                    {
                        CliLog.WriteLine(CliLog.ColorError, $"SdkLogin failed !!!");
                        return false;
                    }
                }
            }
            else
            {
                if (!IsConnectedDynamics365(XrmHelper.BuildConnectionString(arguments.Connection)))
                {
                    CliLog.WriteLine(CliLog.ColorError, $"/conn: Cannot connect to Dynamics 365 with your Connection String: {XrmHelper.BuildConnectionStringLog2(arguments.Connection)}");
                    return false;
                }
            }
            if (CrmServiceClient != null)
            {
                CliLog.WriteLine(CliLog.ColorWhite, "|");
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Connected: ", CliLog.ColorWhite, XrmHelper.ConnectedUrl(CrmServiceClient));
                CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Connection Timeout (seconds): ", CliLog.ColorWhite, CrmServiceClient.MaxConnectionTimeout.TotalSeconds.ToString("#,###"));
            }
            CliLog.WriteLine(CliLog.ColorWhite, "|");
            return true;
        }

        private static void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is FormLogin login)
            {
                login.Close();
            }
        }

        private static bool IsConnectedDynamics365BySdkLogin()
        {
            CrmServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
            var loginForm = new FormLogin();
            loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
            loginForm.ShowDialog();
            if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
            {
                CrmServiceClient = loginForm.CrmConnectionMgr.CrmSvc;
                return true;
            }
            return false;
        }

        private static bool IsConnectedDynamics365(string connection)
        {
            try
            {
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                CrmServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                CrmServiceClient = new CrmServiceClient(connection);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
