using System;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;

namespace Abc.LuckyStar.Console._2
{
    public static class AppSettings
    {
        public static IOrganizationService Service = InitializeIOrganizationService();

        private static void LoginFrm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is LoginForm)
            {
                ((LoginForm)sender).Close();
            }
        }

        static IOrganizationService InitializeIOrganizationService()
        {
            var loginFrm = new LoginForm();
            loginFrm.ConnectionToCrmCompleted += LoginFrm_ConnectionToCrmCompleted;
            loginFrm.ShowDialog();
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
