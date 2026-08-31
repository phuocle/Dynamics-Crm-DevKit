using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetPlugins;

[TestClass]
public sealed class GetPluginsAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetPluginsTool);

    [TestMethod]
    public void MapAssemblyEntry_CoversManagedIdentityAndUnknownEnums()
    {
        var id = Guid.NewGuid();
        var entity = new Entity("pluginassembly", id)
        {
            ["name"] = "Assembly",
            ["version"] = "1.2",
            ["isolationmode"] = new OptionSetValue(999),
            ["sourcetype"] = new OptionSetValue(999),
            ["ismanaged"] = true,
            ["managedidentityid"] = new EntityReference("managedidentity", Guid.NewGuid()),
            ["pkg.name"] = new AliasedValue("pluginpackage", "name", "Package"),
            ["mi.name"] = new AliasedValue("managedidentity", "name", "Identity"),
            ["mi.applicationid"] = new AliasedValue("managedidentity", "applicationid", Guid.NewGuid()),
            ["mi.tenantid"] = new AliasedValue("managedidentity", "tenantid", Guid.NewGuid()),
            ["mi.credentialsource"] = new AliasedValue("managedidentity", "credentialsource", 2)
        };

        var result = InvokeStatic("MapAssemblyEntry", entity, new Dictionary<Guid, int> { [id] = 3 });

        Assert.IsNotNull(result);
        Assert.AreEqual("999", result.GetType().GetProperty("IsolationMode")!.GetValue(result));
        Assert.IsNotNull(result.GetType().GetProperty("ManagedIdentity")!.GetValue(result));
    }

    [TestMethod]
    public void MapTypeAndStepEntry_CoversWorkflowAndConfigurationBranches()
    {
        var typeEntity = new Entity("plugintype", Guid.NewGuid())
        {
            ["typename"] = "Contoso.Plugin",
            ["name"] = "Plugin",
            ["description"] = " description ",
            ["workflowactivitygroupname"] = "Group"
        };
        Assert.IsNotNull(InvokeStatic("MapTypeEntry", typeEntity));

        var step = new Entity("sdkmessageprocessingstep", Guid.NewGuid())
        {
            ["name"] = "Step",
            ["stage"] = new OptionSetValue(40),
            ["mode"] = new OptionSetValue(1),
            ["statecode"] = new OptionSetValue(1),
            ["supporteddeployment"] = new OptionSetValue(2),
            ["rank"] = 10,
            ["filteringattributes"] = " name ",
            ["configuration"] = "config",
            ["description"] = " desc ",
            ["impersonatinguserid"] = new EntityReference("systemuser", Guid.NewGuid()) { Name = "Impersonated" },
            ["pa.name"] = new AliasedValue("pluginassembly", "name", "Assembly"),
            ["pt.typename"] = new AliasedValue("plugintype", "typename", "Type"),
            ["m.name"] = new AliasedValue("sdkmessage", "name", "Create"),
            ["mf.primaryobjecttypecode"] = new AliasedValue("sdkmessagefilter", "primaryobjecttypecode", "account"),
            ["sc.secureconfig"] = new AliasedValue("secureconfig", "secureconfig", "secret")
        };
        var mapped = InvokeStatic("MapStepEntry", step, true);
        Assert.IsNotNull(mapped);

        var steps = new List<PluginStepEntry> { (PluginStepEntry)mapped };
        var summary = InvokeStatic("BuildStepSummary", steps);
        Assert.IsNotNull(summary);
        Assert.AreEqual("1 plugin step on account.", InvokeStatic<string>("BuildStepsText", 1, "account"));
        Assert.AreEqual("2 plugin steps on account.", InvokeStatic<string>("BuildStepsText", 2, "account"));
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
