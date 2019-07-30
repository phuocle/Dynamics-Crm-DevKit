using System;
using System.IO;
using System.Net;
using System.Reflection;
using CmdLine;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
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
                return @"C:\src\azure\abiz\git\ABIZ_VIAGS\src2\Abiz.Viags.Report2.Report";
#else
                return Directory.GetCurrentDirectory();
#endif
            }
        }

        private static CrmServiceClient CrmServiceClient { get; set; }
        private static string CrmConnectOrgUriActual { get; set; }

        public static void Main(string[] args)
        {
            CliLog.WriteLine(CliLog.ColorGreen, "╔", new string('═', CliLog.StarLength), "╗");
            CliLog.WriteLine(CliLog.ColorGreen, "║", new string(' ', CliLog.StarLength), "║");
            CliLog.WriteLine(CliLog.ColorGreen, "║", CliLog.ColorCyan, $"              DynamicsCrm.DevKit.Cli - {Const.Version}                ", CliLog.ColorGreen, "║");
            CliLog.WriteLine(CliLog.ColorGreen, "║", new string(' ', CliLog.StarLength), "║");
            CliLog.WriteLine(CliLog.ColorGreen, "╚", new string('═', CliLog.StarLength), "╝");
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Path: ", CliLog.ColorWhite, Assembly.GetExecutingAssembly().Location);
//#if DEBUG
//            CliLog.WriteLine(CliLog.ColorRed, new string('█', CliLog.StarLength + 2));
//            CliLog.WriteLine(CliLog.ColorRed, " DEBUG MODE");
//            CliLog.WriteLine(CliLog.ColorRed, new string('█', CliLog.StarLength + 2));
//#endif
#if !DEBUG
            try
            {
#endif
            var arguments = CommandLine.Parse<CommandLineArgs>();
            var jsonFile = Path.Combine(CurrentDirectory, arguments.Json);
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "DynamicsCrm.DevKit.Cli.json path: ", CliLog.ColorWhite, jsonFile);
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Arguments: ",
                CliLog.ColorMagenta, "/conn:", CliLog.ColorWhite, HidePassword(arguments.Connection), " ",
                CliLog.ColorMagenta, "/json:", CliLog.ColorWhite, arguments.Json, " ",
                CliLog.ColorMagenta, "/type:", CliLog.ColorWhite, arguments.Type, " ",
                CliLog.ColorMagenta, "/profile:", CliLog.ColorWhite, arguments.Profile
                );
            //CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, new string('═', CliLog.StarLength * 2));
            Run(arguments);
#if DEBUG
            CliLog.WriteLine(CliLog.ColorRed, "!!! FINISHED !!!");
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
        private static string HidePassword(string connection)
        {
            var parts = connection.Split(";".ToCharArray());
            parts[parts.Length - 2] = "Password:******";
            return string.Join(";", parts);
        }

        private static void Run(CommandLineArgs arguments)
        {
            if (!IsValid(arguments)) return;
            var task = new Task(CrmServiceClient, CurrentDirectory, arguments);
            task.Run();
        }

        private static bool IsValid(CommandLineArgs arguments)
        {
            if (arguments.Connection.Length == 0)
            {
                CliLog.WriteLine(CliLog.ColorError, $"/conn: missing");
                return false;
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
            if (!IsConnectedDynamics365(arguments.Connection))
            {
                CliLog.WriteLine(CliLog.ColorError, $"/conn: Cannot connect to Dynamics 365 with your Connection String: {arguments.Connection}");
                return false;
            }
            CliLog.WriteLine(CliLog.ColorWhite, "|", CliLog.ColorGreen, "Connected ", CliLog.ColorMagenta, "Dynamics CRM: ", CliLog.ColorWhite, CrmConnectOrgUriActual);
            return true;
        }

        private static bool IsConnectedDynamics365(string connection)
        {
            var password = connection.Substring(connection.IndexOf("Password=", StringComparison.Ordinal));
            password = password.Substring("Password=".Length);
            password = password.Substring(0, password.Length - 1);
            password = Utility.TryDecryptPassword(password);
            connection = $"{connection.Substring(0, connection.IndexOf("Password=", StringComparison.Ordinal))}Password={password};";
            try
            {
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                CrmServiceClient = new CrmServiceClient(connection);
                CrmServiceClient.OrganizationServiceProxy.Timeout = new TimeSpan(2, 0, 0);
                CrmConnectOrgUriActual = CrmServiceClient.CrmConnectOrgUriActual.AbsoluteUri;
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
