using Microsoft.Dynamics365.UIAutomation.Browser;
using System;

namespace $NameSpace$
{
    public static class TestSettings
    {
        private static readonly string Type = App.GetAppSettingOrEnvironment("BrowserType", null, null, "Chrome");
        private static readonly string RemoteType = App.GetAppSettingOrEnvironment("RemoteBrowserType", null, null, "Chrome");
        private static readonly string RemoteHubServerURL = App.GetAppSettingOrEnvironment("RemoteHubServer", null, null, "http://localhost:4444/wd/hub");

        public static BrowserOptions Options = new BrowserOptions
        {
            BrowserType = (BrowserType)Enum.Parse(typeof(BrowserType), Type),
            PrivateMode = false,
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
