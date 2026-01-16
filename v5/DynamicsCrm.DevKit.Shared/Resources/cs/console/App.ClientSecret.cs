using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Configuration;

namespace $NameSpace$
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
        private static string ClientId => ConfigurationManager.AppSettings["ClientId"];
        private static string ClientSecret => ConfigurationManager.AppSettings["ClientSecret"];
        private static string ConnectionString => $"AuthType=ClientSecret;Url={Url};ClientId={ClientId};ClientSecret={ClientSecret};";
    }
}
