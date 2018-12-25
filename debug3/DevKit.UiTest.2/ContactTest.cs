using System;
using System.Security;
using Microsoft.Dynamics365.UIAutomation.Api;
using Microsoft.Dynamics365.UIAutomation.Browser;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DevKit.UiTest._2
{
    [TestClass]
    public class ContactTest
    {
        private readonly SecureString _username = System.Configuration.ConfigurationManager.AppSettings["Username"].ToSecureString();
        private readonly SecureString _password = System.Configuration.ConfigurationManager.AppSettings["Password"].ToSecureString();
        private readonly Uri _xrmUri = new Uri(System.Configuration.ConfigurationManager.AppSettings["OnlineCrmUrl"].ToString());

        [TestMethod]
        public void Test()
        {
            using (var chrome = new Browser(TestSettings.Options))
            {
                chrome.LoginPage.Login(_xrmUri, _username, _password);

            }
        }
    }
}