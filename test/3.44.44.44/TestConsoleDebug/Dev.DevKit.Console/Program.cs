using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Console
{
    public class Program
    {
        static void Main()
        {
            //CheckWhoAmI();
            //DebugPlugin();
            CallDebugCustomApi();
        }

        private static void CallDebugCustomApi()
        {
            var entities = new EntityCollection();
            entities.Entities.Add(new Entity("account", Guid.Parse("a2982849-096f-ef11-a670-6045bd21f435")));
            var request = new OrganizationRequest("devkit_DebugCustomAction")
            {
                ["InputBoolean"] = true,
                ["InputDateTime"] = DateTime.Now,
                ["InputDecimal"] = (decimal)1.23,
                ["InputEntity"] = new Entity("account", Guid.Parse("98982849-096f-ef11-a670-6045bd21f435")),
                ["InputEntityCollection"] = entities,
                ["InputEntityReference"] = new EntityReference("account", Guid.Parse("a4982849-096f-ef11-a670-6045bd21f435")),
                ["InputFloat"] = (double)4.567,
                ["InputInteger"] = (int)999,
                ["InputMoney"] = new Money((decimal)345.678),
                ["InputPickList"] = new OptionSetValue(2),
                ["InputString"] = "ABCD"
            };
            AppSettings.Service.Execute(request);
        }

        private static void DebugPlugin()
        {
            //var json = "";
            //var serviceProvider = Helper.GetServiceProvider(json, AppSettings.Service);
            //var plugin = new Abc.Xyz.PluginXXX.PostCreateAccountSynchronous();
            //plugin.Execute(serviceProvider);
        }

        private static void CheckWhoAmI()
        {
            var UserId = ((WhoAmIResponse)AppSettings.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }
    }
}
