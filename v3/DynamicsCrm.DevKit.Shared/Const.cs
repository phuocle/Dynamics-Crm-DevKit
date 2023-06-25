using System;

namespace DynamicsCrm.DevKit.Shared
{
    public class Const
    {
        public const string Version = "3.33.33.33";
#if DEBUG
        public const string Build = "xxxx.yy.zz HH.mm.ss";
#else
        public const string Build = "xxxx-yy-zz";
#endif
        public const string CrmString = "Dataverse/CDS";
        public const string DynamicsCrmDevKitJson = "DynamicsCrm.DevKit.json";
        public const string DynamicsCrmDevKitCliJson = "DynamicsCrm.DevKit.Cli.json";
        public const string DynamicsCrmDevKitConfigJson = "DynamicsCrm.DevKit.Config.json";
        public const string DynamicsCrmDevKitLibDll = "DynamicsCrm.DevKit.Lib.dll";
        public static readonly string VersionBuild = $"v.{Version} - Build: {Build}";
        public static readonly string WindowTitle = $"DynamicsCrm.DevKit { Const.VersionBuild }";
        public static readonly string[] WEB_RESOURCE_EXTENSIONS = { ".htm", ".html", ".css", ".js", ".xml", ".png", ".jpg", ".gif", ".xap", ".xsl", "xslt.", ".ico", ".svg", ".resx" };
    }
}
