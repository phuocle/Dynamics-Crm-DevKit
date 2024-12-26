using Microsoft.Crm.Sdk.Messages;
using System;
using Dev.DevKit.Console.PAC.Debug;
using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib;
using System.Windows.Documents;

namespace Dev.DevKit.Console.PAC
{
    public class Program
    {
        [STAThread]
        static void Main()
        {
            var runner = new ModelBuilder(Logger.Instance);
            string[] arguments = {
                "/outdirectory:D:\\github\\Dynamics-Crm-DevKit\\test\\3.44.44.44\\Test.Cli.Generator.Vn\\Dev.DevKit.ProxyTypes.PAC",
                "/settingsTemplateFile:D:\\github\\Dynamics-Crm-DevKit\\test\\3.44.44.44\\Test.Cli.Generator.Vn\\Dev.DevKit.ProxyTypes.PAC\\builderSettings.json",
                "/splitfiles"
            };
            runner.Parameters.LoadArguments(arguments);
            var invoke = runner.Invoke(AppSettings.Service);
        }

        private static void DebugPlugin()
        {
            //var json = "";
            //var serviceProvider = Helper.GetServiceProvider(json, AppSettings.Service);
            //var plugin = new Abc.Xyz.PluginXXX.PostCreateAccountSynchronous();
            //plugin.Execute(serviceProvider);
        }

        private static void CheckWhoAmI()
        {
            //var UserId = ((WhoAmIResponse)AppSettings.Service.Execute(new WhoAmIRequest())).UserId;
            //System.Console.WriteLine(UserId);
            //System.Console.ReadKey();
        }
    }
}
