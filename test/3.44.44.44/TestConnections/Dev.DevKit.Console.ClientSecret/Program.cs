using Microsoft.Crm.Sdk.Messages;
using Dev.DevKit.Console.ClientSecret.Debug;

namespace Dev.DevKit.Console.ClientSecret
{
    public class Program
    {
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
