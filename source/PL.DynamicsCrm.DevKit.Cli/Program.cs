using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using CmdLine;
using Microsoft.Xrm.Tooling.Connector;
using PL.DynamicsCrm.DevKit.Cli.Models;
using PL.DynamicsCrm.DevKit.Shared;

namespace PL.DynamicsCrm.DevKit.Cli
{
    public enum TaskType
    {
        plugins,
        workflows,
        webresources,
        solutionpackagers
    }

    public class Program
    {
        private static string CurrentDirectory
        {
            get
            {
#if DEBUG
                return @"C:\sources\phuocle\tfs\CDS-CRMGRIDPLUS\CRM\PL.CrmGridPlus.SolutionPackager";
#else
                return Directory.GetCurrentDirectory();
#endif
            }
        }

        private static string CrmConnectOrgUriActual { get; set; }

        private static Plugin PluginJson { get; set; }
        private static Plugin WorkflowJson { get; set; }
        private static WebResource WebResourceJson { get; set; }
        private static SolutionPackager SolutionPackagerJson { get; set; }

        private static CrmServiceClient CrmServiceClient { get; set; }

        public static void Main(string[] args)
        {
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CliLog.WriteLine(CliLog.COLOR_GREEN, "PL.DynamicsCrm.DevKit.Cli ", CliLog.COLOR_RED, "1.1.4");
            CliLog.WriteLine(CliLog.COLOR_GREEN, new string('*', CliLog.STAR_LENGTH));
            CommandLineArgs arguments = null;
#if !DEBUG
            try
            {
#endif
            arguments = CommandLine.Parse<CommandLineArgs>();
            Run(arguments);
#if DEBUG
            CliLog.WriteLine(CliLog.COLOR_RED, "!!! FINISHED !!!");
            Console.ReadKey();
#endif
#if !DEBUG
            }
            catch (Exception e)
            {
                CliLog.WriteLine(CliLog.COLOR_ERROR, $"Reading arguments fail:\r\n{e.Message}");
                Console.ReadKey();
                return;
            }
#endif
        }

        private static void Run(CommandLineArgs arguments)
        {
            if (!IsValid(arguments)) return;
            if (arguments.Type.Length == 0)
            {
                var task1 = new PluginTask(CrmServiceClient, CurrentDirectory, PluginJson, arguments.Version);
                task1.Run();
                var task2 = new WorkflowTask(CrmServiceClient, CurrentDirectory, WorkflowJson, arguments.Version);
                task2.Run();
                var task3 = new WebResourceTask(CrmServiceClient, CurrentDirectory, WebResourceJson, arguments.Version);
                task3.Run();
            }
            else if (arguments.Type == TaskType.plugins.ToString())
            {
                var task = new PluginTask(CrmServiceClient, CurrentDirectory, PluginJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.workflows.ToString())
            {
                var task = new WorkflowTask(CrmServiceClient, CurrentDirectory, WorkflowJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.webresources.ToString())
            {
                var task = new WebResourceTask(CrmServiceClient, CurrentDirectory, WebResourceJson, arguments.Version);
                task.Run();
            }
            else if (arguments.Type == TaskType.solutionpackagers.ToString())
            {
                var task = new SolutionPackagerTask(CrmServiceClient, CurrentDirectory, SolutionPackagerJson, arguments.Version);
                task.Run();
            }
        }

        private static bool IsValid(CommandLineArgs arguments)
        {
            if (arguments.Connection.Length == 0)
            {
                CliLog.WriteLine(CliLog.COLOR_ERROR, $"/conn: missing");
                return false;
            }

            if (arguments.Json.Length == 0)
            {
                CliLog.WriteLine(CliLog.COLOR_ERROR, $"/json: missing");
                return false;
            }

            var jsonFile = Path.Combine(CurrentDirectory, arguments.Json);
            if (!File.Exists(jsonFile))
            {
                CliLog.WriteLine(CliLog.COLOR_ERROR, $"/json: PL.DynamicsCrm.DevKit json missing [{jsonFile}]");
                return false;
            }

            var json = SimpleJson.DeserializeObject<CliJson>(File.ReadAllText(jsonFile));
            if (arguments.Type.Length > 0)
            {
                var types = new List<string>
                {
                    TaskType.plugins.ToString(),
                    TaskType.workflows.ToString(),
                    TaskType.webresources.ToString(),
                    TaskType.solutionpackagers.ToString()
                };
                if (!types.Contains(arguments.Type))
                {
                    CliLog.WriteLine(CliLog.COLOR_ERROR, $"/type: should be: plugins or workflows or webresources or solutionpackagers");
                    return false;
                }
            }
            else
            {
                PluginJson = json.plugins.FirstOrDefault(x => x.profile == arguments.Profile);
                WorkflowJson = json.workflows.FirstOrDefault(x => x.profile == arguments.Profile);
                WebResourceJson = json.webresources.FirstOrDefault(x => x.profile == arguments.Profile);
                SolutionPackagerJson = json.solutionpackagers.FirstOrDefault(x => x.profile == arguments.Profile);
            }

            if (arguments.Profile.Length == 0)
            {
                CliLog.WriteLine(CliLog.COLOR_ERROR, $"/profile: missing");
                return false;
            }

            if (arguments.Version.Length == 0)
            {
                CliLog.WriteLine(CliLog.COLOR_ERROR, $"/version: missing");
                return false;
            }

            if (arguments.Type == TaskType.plugins.ToString())
            {
                PluginJson = json.plugins.FirstOrDefault(x => x.profile == arguments.Profile);
                if (PluginJson == null)
                {
                    CliLog.WriteLine(CliLog.COLOR_ERROR, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.workflows.ToString())
            {
                WorkflowJson = json.workflows.FirstOrDefault(x => x.profile == arguments.Profile);
                if (WorkflowJson == null)
                {
                    CliLog.WriteLine(CliLog.COLOR_ERROR, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.webresources.ToString())
            {
                WebResourceJson = json.webresources.FirstOrDefault(x => x.profile == arguments.Profile);
                if (WebResourceJson == null)
                {
                    CliLog.WriteLine(CliLog.COLOR_ERROR, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
            }
            else if (arguments.Type == TaskType.solutionpackagers.ToString())
            {
                SolutionPackagerJson = json.solutionpackagers.FirstOrDefault(x => x.profile == arguments.Profile);
                if (SolutionPackagerJson == null)
                {
                    CliLog.WriteLine(CliLog.COLOR_ERROR, $"/profile: not found profile: {arguments.Profile}");
                    return false;
                }
                //TODO: Check required data
            }
            if (!IsConnectedDynamics365(arguments.Connection))
            {
                CliLog.WriteLine(CliLog.COLOR_ERROR, $"/conn: Cannot connect to Dynamics 365 with your Connection String: {arguments.Connection}");
                return false;
            }
            CliLog.WriteLine(CliLog.COLOR_YELLOW, "Connected ", CliLog.COLOR_MAGENTA, "Dynamics CRM: ", CliLog.COLOR_CYAN, CrmConnectOrgUriActual );
            return true;
        }

        private static bool IsConnectedDynamics365(string connection)
        {
            var password = connection.Substring(connection.IndexOf("Password="));
            password = password.Substring("Password=".Length);
            password = password.Substring(0, password.Length - 1);
            password = TryDecryptPassword(password);
            connection = $"{connection.Substring(0, connection.IndexOf("Password="))}Password={password};";
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

        private static string TryDecryptPassword(string password)
        {
            try
            {
                password = EncryptDecrypt.DecryptString(password);
            }
            catch
            {
            }
            return password;
        }
    }
}