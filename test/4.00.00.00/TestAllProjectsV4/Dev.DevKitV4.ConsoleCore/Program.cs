using Microsoft.Crm.Sdk.Messages;
using System;

namespace Dev.DevKitV4.ConsoleCore
{
    public class Program
    {
        static void Main()
        {
            CheckWhoAmI();
            //DebugPlugin();
            //DebugWorkflow();
        }

        private static void CheckWhoAmI()
        {
            var UserId = ((WhoAmIResponse)App.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }

        private static void DebugPlugin()
        {
            //var json = "";
            //Helper.DebugPlugin<???>(json, App.Service);
        }

        private static void DebugWorkflow()
        {
            //var json = "";
            //Helper.DebugWorkflow<???>(json, App.Service);
        }
    }
}