using System;
using System.Configuration;
using System.Net;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;

namespace Abc.LuckyStar.Console._2
{
    public static class AppSettings
    {
        public static IOrganizationService Service = InitializeIOrganizationService();
        private static string AuthType { get { return ConfigurationManager.AppSettings["AuthType"]; } }
        private static string Url { get { return ConfigurationManager.AppSettings["Url"]; } }
        private static string Username { get { return ConfigurationManager.AppSettings["Username"]; } }
        private static string Password { get { return ConfigurationManager.AppSettings["Password"]; } }
        private static string ConnectionString
        {
            get
            {
                return $"AuthType={AuthType};Url={Url};Username={Username};Password={Password};";
            }
        }
        static IOrganizationService InitializeIOrganizationService()
        {
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            var crmServiceClient = new CrmServiceClient(ConnectionString);
            if (crmServiceClient.OrganizationServiceProxy != null)
                return (IOrganizationService)crmServiceClient.OrganizationServiceProxy;
            else if (crmServiceClient.OrganizationWebProxyClient != null)
                return (IOrganizationService)crmServiceClient.OrganizationWebProxyClient;
            else
                throw new Exception("Service NULL");
        }
    }
}
