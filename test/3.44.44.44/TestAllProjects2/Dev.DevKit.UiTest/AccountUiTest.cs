using Microsoft.Dynamics365.UIAutomation.Api.UCI;
using Microsoft.Dynamics365.UIAutomation.Browser;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Security;

namespace Dev.DevKit.UiTest
{
    [TestClass]
    public class AccountUiTest
    {
        private readonly SecureString _username = System.Configuration.ConfigurationManager.AppSettings["Username"].ToSecureString();
        private readonly SecureString _password = System.Configuration.ConfigurationManager.AppSettings["Password"].ToSecureString();
        private readonly Uri _xrmUri = new Uri(System.Configuration.ConfigurationManager.AppSettings["Url"].ToString());

        [TestMethod]
        public void Test()
        {
            var client = new WebClient(TestSettings.Options);
            using (var xrmApp = new XrmApp(client))
            {
                xrmApp.OnlineLogin.Login(_xrmUri, _username, _password);
                Assert.IsTrue(true);
            }
        }
    }
}