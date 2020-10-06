using Microsoft.Crm.Sdk.Messages;

namespace Abc.LuckyStar.Console._2
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
