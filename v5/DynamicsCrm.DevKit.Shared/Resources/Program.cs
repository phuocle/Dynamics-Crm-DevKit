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
            // For debugging, comment out CheckWhoAmI and enable one debug method below.
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
            // Paste the complete `var json = ...;` statement printed by DebugContext here.
            // For compressed trace output, paste the Decompress statement as well:
            // var json = "<base64>".Decompress();
            // For uncompressed output, paste its verbatim string assignment.
            // Replace YourPlugin with the plugin class being debugged:
            // Helper.DebugPluginWith<YourPlugin>(json, App.Service);
        }

        private static void DebugWorkflow()
        {
            // Paste the complete `var json = ...;` statement printed by DebugContext here.
            // Replace YourWorkflow with the CodeActivity type and supply its input arguments:
            // var inputs = new Dictionary<string, object> { { "InputName", inputValue } };
            // Helper.DebugWorkflowWith<YourWorkflow>(json, App.Service, inputs);
        }
    }
}