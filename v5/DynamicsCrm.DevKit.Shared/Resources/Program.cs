using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using $NameSpace$.Lib;
using System;
using System.Collections.Generic;

namespace $NameSpace$
{
    public class Program
    {
        static void Main()
        {
            CheckWhoAmI();
        }

        private static void CheckWhoAmI()
        {
            var UserId = ((WhoAmIResponse)App.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }

        private static void DebugPlugin()
        {
        }

        private static void DebugWorkflow()
        {
        }
    }
}