using Microsoft.Crm.Sdk.Messages;

namespace Dev.DevKit.Console._4
{
    public class Program
    {
        static void Main()
        {
            var UserId = ((WhoAmIResponse)AppSettings.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }
    }
}
