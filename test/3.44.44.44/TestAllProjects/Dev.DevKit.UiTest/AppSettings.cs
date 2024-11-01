using System;
using System.Configuration;
using Microsoft.Xrm.Tooling.Connector;

namespace Dev.DevKit.UiTest
{
    public static class AppSettings
    {
        private static CrmServiceClient _Service = null;
        public static CrmServiceClient Service
        {
            get
            {
                if (_Service != null) return _Service;
                CrmServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                _Service = new CrmServiceClient(ConnectionString);
                return _Service;
            }
        }
        private static string AuthType { get { return ConfigurationManager.AppSettings["AuthType"]; } }
        private static string Url { get { return ConfigurationManager.AppSettings["Url"]; } }
        private static string UserName { get { return ConfigurationManager.AppSettings["ClientId"]; } }
        private static string Password { get { return ConfigurationManager.AppSettings["ClientSecret"]; } }
        private static string ConnectionString
        {
            get
            {
                if (AuthType == "ClientSecret")
                    return $"AuthType=ClientSecret;Url={Url};ClientId={UserName};ClientSecret={Password};";
                if (AuthType == "OAuth")
                    return $"AuthType=OAuth;Url={Url};Username={UserName};Password={Password};AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto";
                var arr = UserName.Split("\\".ToCharArray());
                if (arr.Length != 2) throw new Exception("Please enter UserName like: contoso\\jsmith");
                return $"AuthType=AD;Url={Url};Domain={arr[0]};Username={arr[1]};Password={Password};";
            }
        }
    }
}
