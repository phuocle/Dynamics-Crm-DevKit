using Microsoft.Crm.Sdk.Messages;
using System;
using Dev.DevKit.Console.PAC.Debug;

namespace Dev.DevKit.Console.PAC
{
    public class Program
    {
        [STAThread]
        static void Main()
        {
            //CheckWhoAmI();
            //DebugPlugin();
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
