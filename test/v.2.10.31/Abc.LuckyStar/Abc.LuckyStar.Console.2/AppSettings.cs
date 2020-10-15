using System;
using System.Configuration;
using System.Net;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;
using PowerApps.Samples.LoginUX;

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

        private static void LoginFrm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is ExampleLoginForm)
            {
                ((ExampleLoginForm)sender).Close();
            }
        }

        static IOrganizationService InitializeIOrganizationService()
        {
            //ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            //var crmServiceClient = new CrmServiceClient(ConnectionString);
            //if (crmServiceClient.OrganizationServiceProxy != null)
            //    return (IOrganizationService)crmServiceClient.OrganizationServiceProxy;
            //else if (crmServiceClient.OrganizationWebProxyClient != null)
            //    return (IOrganizationService)crmServiceClient.OrganizationWebProxyClient;
            //else
            //    throw new Exception("Service NULL");


            ExampleLoginForm loginFrm = new ExampleLoginForm();
            // Login process is Async, thus we need to detect when login is completed and close the form.
            loginFrm.ConnectionToCrmCompleted += LoginFrm_ConnectionToCrmCompleted;
            // Show the dialog here.
            loginFrm.ShowDialog();

            // If the login process completed, assign the connected service to the CRMServiceClient var
            if (loginFrm.CrmConnectionMgr != null && loginFrm.CrmConnectionMgr.CrmSvc != null && loginFrm.CrmConnectionMgr.CrmSvc.IsReady)
            {
                CrmServiceClient crmServiceClient = loginFrm.CrmConnectionMgr.CrmSvc;
                if (crmServiceClient.OrganizationServiceProxy != null)
                    return (IOrganizationService)crmServiceClient.OrganizationServiceProxy;
                else if (crmServiceClient.OrganizationWebProxyClient != null)
                    return (IOrganizationService)crmServiceClient.OrganizationWebProxyClient;
                else
                    throw new Exception("Service NULL");
            }
            throw new Exception("Service NULL");
        }
    }
}
