using Microsoft.Crm.Sdk.Messages;
using System;

namespace Dev.DevKit.Legacy.ConsoleCore
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
            //Helper.DebugPluginWith<???>(json, App.Service);
        }

        private static void DebugWorkflow()
        {
            //var json = "";
            //var inputs = new Dictionary<string, object> { };
            //Helper.DebugWorkflowWith<???>(json, App.Service, inputs);
        }
    }
}