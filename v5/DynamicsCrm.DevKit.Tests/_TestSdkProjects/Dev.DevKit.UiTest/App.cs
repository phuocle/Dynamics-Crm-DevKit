using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Configuration;

namespace Dev.DevKit.UiTest
{
    public static class App
    {
        private static ServiceClient _Service = null;
        public static ServiceClient Service
        {
            get
            {
                if (_Service != null) return _Service;
                _Service = new ServiceClient(ConnectionString);
                ServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                return _Service;
            }
        }
        private static string Url => ConfigurationManager.AppSettings["Url"];
        private static string UserName => ConfigurationManager.AppSettings["UserName"];
        private static string Password => ConfigurationManager.AppSettings["Password"];
        private static string ConnectionString => $"AuthType=OAuth;Url={Url};Username={UserName};Password={Password};AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto;";
    }
}
