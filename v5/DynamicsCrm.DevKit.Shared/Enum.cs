namespace DynamicsCrm.DevKit.Shared
{
    public enum FormType
    {
        Main = 2,
        QuickCreate = 7,
        QuickView = 6,
        Dialog = 8
    }

    public enum CliType
    {
        proxytypes,
        modelbuilders,
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
        uploadreports,
        //earlybound,
    }
    public enum GeneratorType
    {
        jsform,
        tsform,
        jswebapi,
        tswebapi,

        csharp,
        //earlybound
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

    public enum ParameterType
    {
        Input,
        Output
    }

    public enum ProjectType
    {
        None,
        Shared,
        Console,
        ConsoleCore,
        Server,
        Plugin,
        Workflow,
        CustomAction,
        CustomApi,
        DataProvider,
        WebResource,
        SolutionPackager,
        ProxyTypes,
        Test,
        UiTest,
        SharedTest,
        Report,
        Package,
        WebResourceTs
    }

    public enum ItemType
    {
        None,
        LateBound,
        JsForm,
        TsForm,
        JsWebApi,
        TsWebApi,
        Workflow,
        UiTest,
        Test,
        Plugin,
        CustomApi,
        CustomAction,
        DownloadWebResources,
        DataProvider,
        ResourceString,
        DownloadReports,
        BatFile,
        TsDialog,
        JsDialog
    }

    public enum DeployFileType
    {
        Dll,
        Nuget
    }
}