using System;
using System.Collections.Generic;

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
        public static readonly string[] WEB_RESOURCE_EXTENSIONS = { ".htm", ".html", ".css", ".js", ".xml", ".png", ".jpg", ".gif", ".xap", ".xsl", "xslt.", ".ico", ".svg", ".resx", ".ts" };
        public const string SchemaName = "SchemaName";
        public const string LogicalName = "LogicalName";
        public static readonly HashSet<string> DEFAULTS = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            $"Default",
            $"Default - {ItemType.Plugin}",
            $"Default - {ItemType.Workflow}",
            $"Default - {ItemType.CustomAction}",
            $"Default - {ItemType.CustomApi}",
            $"Default - {ItemType.DataProvider} - Create",
            $"Default - {ItemType.DataProvider} - Update",
            $"Default - {ItemType.DataProvider} - Delete",
            $"Default - {ItemType.DataProvider} - Retrieve",
            $"Default - {ItemType.DataProvider} - RetrieveMultiple",
        };
    }

    /// <summary>
    /// Connection type constants for Dataverse authentication.
    /// </summary>
    public static class ConnectionType
    {
        // ═══════════════════════════════════════════════════════════════════
        // EXISTING CONNECTION TYPES (Backward Compatible)
        // ═══════════════════════════════════════════════════════════════════
        /// <summary>OAuth with Username/Password (Legacy)</summary>
        public const string OAuth = "OAuth";
        
        /// <summary>Service Principal with Client Secret</summary>
        public const string ClientSecret = "ClientSecret";
        
        /// <summary>Active Directory (On-premises only)</summary>
        public const string AD = "AD";

        // ═══════════════════════════════════════════════════════════════════
        // NEW CONNECTION TYPES (Phase 2-4)
        // ═══════════════════════════════════════════════════════════════════
        /// <summary>Browser-based OAuth (Phase 2)</summary>
        public const string Interactive = "Interactive";
        
        /// <summary>Device Code Flow for headless environments (Phase 2)</summary>
        public const string DeviceCode = "DeviceCode";
        
        /// <summary>PAC CLI profile integration (Phase 4)</summary>
        public const string FromPac = "FromPac";
    }
}
