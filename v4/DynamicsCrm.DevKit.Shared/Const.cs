namespace DynamicsCrm.DevKit.Shared
{
    public class Const
    {
        public const string Version = "x.xx.xx.xx";
        public const string Build = "xxxx.yy.zz HH.mm.ss";
        public const string CrmString = "Dataverse/CDS";
        public const string DynamicsCrmDevKit = "DynamicsCrm.DevKit";
        public const string DynamicsCrmDevKitJson = $"{Const.DynamicsCrmDevKit}.json";
        public const string DynamicsCrmDevKitCliJson = $"{Const.DynamicsCrmDevKit}.Cli.json";
        public const string DynamicsCrmDevKitConfigJson = $"{Const.DynamicsCrmDevKit}.Config.json";
        public static readonly string VersionBuild = $"v.{Version} - Build: {Build}";
        public static readonly string WindowTitle = $"{Const.DynamicsCrmDevKit} { Const.VersionBuild }";
        public static readonly string[] WEB_RESOURCE_EXTENSIONS = { ".htm", ".html", ".css", ".js", ".xml", ".png", ".jpg", ".gif", ".xap", ".xsl", "xslt.", ".ico", ".svg", ".resx" };
        public const string SchemaName = "SchemaName";
    }
}
