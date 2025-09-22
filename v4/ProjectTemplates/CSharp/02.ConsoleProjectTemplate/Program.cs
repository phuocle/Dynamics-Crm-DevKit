using Microsoft.Crm.Sdk.Messages;
using System;

namespace $NameSpace$
{
    public class Program
    {
        [STAThread]
        static void Main()
        {
            CheckWhoAmI();
            //DebugPlugin();
            //DebugWorkflow();
        }

        private static void CheckWhoAmI()
        {
            var UserId = ((WhoAmIResponse)AppSettings.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }
        private static void DebugPlugin()
        {
            //var json = "";
            //Helper.DebugPlugin<???>(json, AppSettings.Service);
        }

        private static void DebugPlugin()
        {
            //var json = "";
            //Helper.DebugWorkflow<???>(json, AppSettings.Service);
        }
    }
}
