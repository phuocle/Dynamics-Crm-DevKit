﻿namespace DynamicsCrm.DevKit.Shared
{
    public enum CliType
    {
        proxytypes,
        webresources,
        solutionpackagers,
        generators,
        downloadwebresources,
        downloadreports,
        datasources,
        servers,
        plugins,
        workflows,
        dataproviders,
        uploadreports
    }
    public enum GeneratorType
    {
        jsform,
        jswebapi,
        csharp
    }

    public enum WebResourceWebResourceType
    {
        WebpageHtml = 1,
        StyleSheetCss = 2,
        ScriptJScript = 3,
        DataXml = 4,
        PngFormat = 5,
        JpgFormat = 6,
        GifFormat = 7,
        SilverlightXap = 8,
        StyleSheetXsl = 9,
        IcoFormat = 10,
        SvgFormat = 11,
        StringResx = 12
    }
}