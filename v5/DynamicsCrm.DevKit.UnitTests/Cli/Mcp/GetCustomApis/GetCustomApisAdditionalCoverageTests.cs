using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetCustomApis;

[TestClass]
public sealed class GetCustomApisAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetCustomApisTool);

    [TestMethod]
    public void MapEntries_CoverLookupAliasesAndUnknownOptionValues()
    {
        var id = Guid.NewGuid();
        var entity = new Entity("customapi", id)
        {
            ["uniquename"] = "new_Test",
            ["displayname"] = " Test API ",
            ["bindingtype"] = new OptionSetValue(999),
            ["allowedcustomprocessingsteptype"] = new OptionSetValue(999),
            ["statuscode"] = new OptionSetValue(2),
            ["plugintypeid"] = new EntityReference("plugintype", Guid.NewGuid()) { Name = "Plugin" },
            ["ownerid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Owner" },
            ["solutionid"] = new EntityReference("solution", Guid.NewGuid()) { Name = "Solution" },
            ["description"] = " Description ",
            ["createdon"] = new DateTime(2026, 1, 2),
            ["modifiedon"] = new DateTime(2026, 1, 3),
            ["pt.name"] = new AliasedValue("plugintype", "name", "Plugin"),
            ["pt.typename"] = new AliasedValue("plugintype", "typename", "Plugin.Type"),
            ["pa.name"] = new AliasedValue("pluginassembly", "name", "Assembly"),
            ["pa.version"] = new AliasedValue("pluginassembly", "version", "1.0"),
            ["pa.isolationmode"] = new AliasedValue("pluginassembly", "isolationmode", 2)
        };

        var list = InvokeStatic("MapListEntry", entity);
        var detail = ToolType.GetMethod("MapDetailEntry", BindingFlags.NonPublic | BindingFlags.Instance)!
            .Invoke(new GetCustomApisTool(null!), new object?[] { entity });

        Assert.IsNotNull(list);
        Assert.IsNotNull(detail);
        Assert.AreEqual("999", list.GetType().GetProperty("BindingType")!.GetValue(list));
        Assert.AreEqual("Sandbox", detail!.GetType().GetProperty("PluginIsolationMode")!.GetValue(detail));
    }

    [TestMethod]
    public void MapParameters_UsesUniqueNameFallbackAndNullNormalization()
    {
        var request = new Entity("customapirequestparameter")
        {
            ["name"] = "Fallback",
            ["type"] = new OptionSetValue(999),
            ["isoptional"] = true,
            ["description"] = " description "
        };
        var response = new Entity("customapiresponseproperty")
        {
            ["uniquename"] = "Output",
            ["type"] = new OptionSetValue(0)
        };

        Assert.IsNotNull(InvokeStatic("MapRequestParameter", request));
        Assert.IsNotNull(InvokeStatic("MapResponseProperty", response));
        Assert.AreEqual("&lt;&amp;&gt;", InvokeStatic<string>("EscapeXml", "<&>"));
        Assert.IsNull(InvokeStatic<string>("NullIfEmpty", " "));
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
