using System;
$if$($Check$== 0)using System.Configuration;
using System.Net;
$endif$using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;

namespace $NameSpace$
{
    public static class AppSettings
    {
        public static IOrganizationService Service = InitializeIOrganizationService();$if$($Check$==0)
        private static string AuthType { get { return ConfigurationManager.AppSettings["AuthType"]; } }
        private static string Url { get { return ConfigurationManager.AppSettings["Url"]; } }
        private static string $ClientId$ { get { return ConfigurationManager.AppSettings["$ClientId$"]; } }
        private static string $ClientSecret$ { get { return ConfigurationManager.AppSettings["$ClientSecret$"]; } }
        private static string ConnectionString
        {
            get
            {
                return $"AuthType={AuthType};Url={Url};$ClientId$={$ClientId$};$ClientSecret$={$ClientSecret$};";
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
        }$endif$$if$($Check$==1)
        private static void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is LoginForm)
            {
                ((LoginForm)sender).Close();
            }
        }

        static IOrganizationService InitializeIOrganizationService()
        {
            var loginForm = new LoginForm();
            loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
            loginForm.ShowDialog();
            if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
            {
                CrmServiceClient crmServiceClient = loginForm.CrmConnectionMgr.CrmSvc;
                if (crmServiceClient.OrganizationServiceProxy != null)
                    return (IOrganizationService)crmServiceClient.OrganizationServiceProxy;
                else if (crmServiceClient.OrganizationWebProxyClient != null)
                    return (IOrganizationService)crmServiceClient.OrganizationWebProxyClient;
                else
                    throw new Exception("Service NULL");
            }
            throw new Exception("Service NULL");
        }$endif$
    }
}
