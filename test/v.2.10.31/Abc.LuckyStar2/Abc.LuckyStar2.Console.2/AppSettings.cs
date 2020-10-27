using System;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;

namespace Abc.LuckyStar2.Console._2
{
    public static class AppSettings
    {
        public static IOrganizationService Service = InitializeIOrganizationService();
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
        }
    }
}
