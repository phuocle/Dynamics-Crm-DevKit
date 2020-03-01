using Microsoft.Crm.Sdk.Messages;

namespace $NameSpace$
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
