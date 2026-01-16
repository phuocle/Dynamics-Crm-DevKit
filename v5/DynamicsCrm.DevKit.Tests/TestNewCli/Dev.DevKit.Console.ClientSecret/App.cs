using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Configuration;

namespace Dev.DevKit.Console.ClientSecret
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
        private static string Url { get { return ConfigurationManager.AppSettings["Url"]; } }
        private static string ClientId { get { return ConfigurationManager.AppSettings["ClientId"]; } }
        private static string ClientSecret { get { return ConfigurationManager.AppSettings["ClientSecret"]; } }
        private static string ConnectionString
        {
            get
            {
                return $"AuthType=ClientSecret;Url={Url};ClientId={ClientId};ClientSecret={ClientSecret};";
            }
        }
    }
}
