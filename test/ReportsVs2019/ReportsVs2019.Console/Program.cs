using Microsoft.Crm.Sdk.Messages;
using System;

namespace ReportsVs2019.Console
{
    public class Program
    {
        [STAThread]
        static void Main()
        {
            var UserId = ((WhoAmIResponse)AppSettings.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }
    }
}
