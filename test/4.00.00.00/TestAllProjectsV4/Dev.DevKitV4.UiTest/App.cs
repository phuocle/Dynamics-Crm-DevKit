using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Configuration;

namespace Dev.DevKitV4.UiTest
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
        private static string AuthType { get { return ConfigurationManager.AppSettings["AuthType"]; } }
        private static string Url { get { return ConfigurationManager.AppSettings["Url"]; } }
        private static string UserName { get { return ConfigurationManager.AppSettings["UserName"]; } }
        private static string Password { get { return ConfigurationManager.AppSettings["Password"]; } }
        private static string ConnectionString
        {
            get
            {
                switch (AuthType.ToUpperInvariant())
                {
                    case "CLIENTSECRET":
                        return $"AuthType=ClientSecret;Url={Url};ClientId={UserName};ClientSecret={Password};";
                    case "AD":
                        if (string.IsNullOrEmpty(UserName) || !UserName.Contains("\\"))
                            throw new ArgumentException("For AD authentication, username must be in format 'domain\\username'");
                        var parts = UserName.Split('\\');
                        if (parts.Length != 2)
                            throw new ArgumentException("For AD authentication, username must be in format 'domain\\username'");
                        return $"AuthType=AD;Url={Url};Domain={parts[0]};Username={parts[1]};Password={Password};";
                    case "OAUTH":
                    default:
                        var connectionString = $"AuthType=OAuth;Url={Url};Username={UserName};Password={Password};";
                        if (!connectionString.ToLower().Contains("appid="))
                        {
                            connectionString += "AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;";
                        }
                        if (!connectionString.ToLower().Contains("redirecturi="))
                        {
                            connectionString += "RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;";
                        }
                        if (!connectionString.ToLower().Contains("loginprompt="))
                        {
                            connectionString += "LoginPrompt=Auto;";
                        }
                        return connectionString;
                }
            }
        }
    }
}
