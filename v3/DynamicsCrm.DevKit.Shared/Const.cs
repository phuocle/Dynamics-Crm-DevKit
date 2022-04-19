﻿using System;

namespace DynamicsCrm.DevKit.Shared
{
    public class Const
    {
        public const string Version = "3.11.11";
        public const string Build = "xxxx-yy-zz";
        public const string CrmString = "Dataverse/CDS";
        public const string DynamicsCrmDevKitJson = "DynamicsCrm.DevKit.json";
        public const string DynamicsCrmDevKitLibDll = "DynamicsCrm.DevKit.Lib.dll";


        public static readonly string VersionBuild = $"v.{Version} - Build: {Build}";
        public static readonly string WindowTitle = $"DynamicsCrm.DevKit { Const.VersionBuild }";
        public static readonly string[] WEB_RESOURCE_EXTENSIONS = { ".htm", ".html", ".css", ".js", ".xml", ".png", ".jpg", ".gif", ".xap", ".xsl", "xslt.", ".ico", ".svg", ".resx" };


    }
}
