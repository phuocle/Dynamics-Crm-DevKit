using System;
using Microsoft.Xrm.Tooling.Connector;

namespace Dev.DevKit.Console.OOB
{
    public static class AppSettings
    {
        private static CrmServiceClient _Service = null;
        public static CrmServiceClient Service {
            get
            {
                if (_Service != null) return _Service;
                CrmServiceClient.MaxConnectionTimeout = new TimeSpan(1, 0, 0);
                var loginForm = new LoginForm();
                loginForm.ConnectionToCrmCompleted += loginForm_ConnectionToCrmCompleted;
                loginForm.ShowDialog();
                if (loginForm.CrmConnectionMgr != null && loginForm.CrmConnectionMgr.CrmSvc != null && loginForm.CrmConnectionMgr.CrmSvc.IsReady)
                {
                    _Service = loginForm.CrmConnectionMgr.CrmSvc;
                }
                return _Service;
            }
        }

        private static void loginForm_ConnectionToCrmCompleted(object sender, EventArgs e)
        {
            if (sender is LoginForm)
            {
                ((LoginForm)sender).Close();
            }
        }
    }
}
