using Microsoft.Dynamics365.UIAutomation.Browser;

namespace $NameSpace$
{
    public static class TestSettings
    {
        private static readonly string Type = System.Configuration.ConfigurationManager.AppSettings["BrowserType"].ToString();
        private static readonly string RemoteType = System.Configuration.ConfigurationManager.AppSettings["RemoteBrowserType"].ToString();
        private static readonly string RemoteHubServerURL = System.Configuration.ConfigurationManager.AppSettings["RemoteHubServer"].ToString();

        public static BrowserOptions Options = new BrowserOptions
        {
            BrowserType = (BrowserType)Enum.Parse(typeof(BrowserType), Type),
            PrivateMode = true,
            FireEvents = false,
            Headless = false,
            UserAgent = false,
            DefaultThinkTime = 2000,
            RemoteBrowserType = (BrowserType)Enum.Parse(typeof(BrowserType), RemoteType),
            RemoteHubServer = new Uri(RemoteHubServerURL),
            UCITestMode = true,
            StartMaximized = true
        };
    }
}
