using Microsoft.Crm.Sdk.Messages;$if$($Check$== 1)
using System;$endif$

namespace $NameSpace$
{
    public class Program
    {
        $if$($Check$==1)[STAThread]$endif$
        static void Main()
        {
            var UserId = ((WhoAmIResponse)AppSettings.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }
    }
}
