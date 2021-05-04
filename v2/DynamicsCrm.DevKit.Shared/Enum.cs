public enum ProjectType
{
    Plugin,
    Workflow,
    CustomAction,
    Console,
    WebResource,
    Shared,
    Test,
    ProxyTypes,
    UiTest,
    Report,
    DataProvider,
    SolutionPackager,
    Portal,
    Default,
    CustomApi
}

public enum ItemType
{
    Test,
    Workflow,
    CustomAction,
    Plugin,
    LateBound,
    JsWebApi,
    TestUi,
    Report,
    JsForm,
    JsTest,
    ResourceString,
    JsForm2,
    Default
}

public enum CrmItemType
{
    WebResource,
    NewWebResource
}

public enum ParameterType
{
    Input,
    Output
}

public enum CrmVersionName
{
    _2011 = 2011,
    _2013 = 2013,
    _2015 = 2015,
    _2016 = 2016,
    _365 = 365
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

public enum TaskType
{
    Plugins,
    Workflows,
    WebResources,
    SolutionPackagers,
    DataProviders,
    Generators,
    DownloadWebResources,
    DownloadPortalWebResources,
    ProxyTypes
}
