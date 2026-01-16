using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Configuration;

namespace Dev.DevKit.Console.AD2
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
        private static string ConnectionString
        {
            get
            {
                if (string.IsNullOrEmpty(UserName) || !UserName.Contains("\\"))
                    throw new ArgumentException("For AD authentication, username must be in format 'domain\\username'");
                var parts = UserName.Split('\\');
                return $"AuthType=AD;Url={Url};Domain={parts[0]};Username={parts[1]};Password={Password};";
            }
        }
    }
}
