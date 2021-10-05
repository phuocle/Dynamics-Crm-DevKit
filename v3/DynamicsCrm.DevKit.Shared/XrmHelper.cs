using System;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Shared
{
    public static class XrmHelper
    {
        public static string BuildConnectionString(string type, string url, string user, string pass)
        {
            if (type == "ClientSecret")
                return $"AuthType=ClientSecret;Url={url};ClientId={user};ClientSecret={pass};";
            else if (type == "AD")
            {
                var arr = user.Split("\\".ToCharArray());
                if (arr.Length != 2)
                    throw new Exception("Please enter User name like: contoso\\jsmith");
                var domain = arr[0];
                user = arr[1];
                return $"AuthType={type};Url={url};Domain={domain};Username={user};Password={pass};";
            }
            return $"AuthType=OAuth;Url={url};Username={user};Password={pass};AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto";
        }

        public static string BuildConnectionString(CrmConnection crmConnection)
        {
            return BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, crmConnection.Password);
        }

        public static CrmServiceClient IsConnected(CrmConnection crmConnection)
        {
            var password = crmConnection.Password;
            if (crmConnection.Type != "ClientSecret") password = EncryptDecrypt.DecryptString(password);
            var connectionString = BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, password);
            var crmServiceClient = new CrmServiceClient(connectionString);
            if (crmServiceClient.LastCrmError?.Length != 0)
                return null;
            return crmServiceClient;
        }

        public static string ConnectedUrl(CrmServiceClient crmServiceClient)
        {
            var url = new Uri(crmServiceClient?.CrmConnectOrgUriActual?.AbsoluteUri).GetLeftPart(UriPartial.Authority);
            url = url?.Replace(".api.", ".");
            return url;
        }
    }
}
