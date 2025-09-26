using Dev.DevKitV4.Console.Plugins;
using Dev.DevKitV4.Console.Workflows;
using Microsoft.Crm.Sdk.Messages;
using System;

namespace Dev.DevKitV4.Console
{
    public class Program
    {
        static void Main()
        {
            //DebugPackage.DebugContact.PreContactCreateSynchronousPackage();
            //DebugPackage.DebugContact.PreContactCreateSynchronousPackage2();
            DebugWorkflow.SendEmailByQueue();
            //DebugAccount.PreValidationAccountCreateSynchronous();
        }
    }
}