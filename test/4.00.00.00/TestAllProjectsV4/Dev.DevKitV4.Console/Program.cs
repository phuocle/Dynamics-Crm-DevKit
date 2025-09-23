using Microsoft.Crm.Sdk.Messages;
using System;

namespace Dev.DevKitV4.Console
{
    public class Program
    {
        static void Main()
        {
            //CheckWhoAmI();
            //DebugPlugin();
            //DebugWorkflow();

            //DebugPackage.DebugContact.PreContactCreateSynchronousPackage();
            //DebugPackage.DebugContact.PreContactCreateSynchronousPackage2();
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