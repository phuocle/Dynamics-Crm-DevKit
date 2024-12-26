using Microsoft.Crm.Sdk.Messages;$if$($IsOOBConnection$== 1)
using System;$endif$
using $NameSpace$.Debug;

namespace $NameSpace$
{
    public class Program
    {$if$($IsOOBConnection$==1)
        [STAThread]$endif$
        static void Main()
        {
            CheckWhoAmI();
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
            var UserId = ((WhoAmIResponse)AppSettings.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }
    }
}
