using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.GetBusinessRules;

[TestClass]
public sealed class GetBusinessRulesAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(GetBusinessRulesTool);

    [TestMethod]
    public void ParseXaml_ExtractsConditionsAndAllActionKinds()
    {
        var xaml = """
            GetEntityProperty Attribute="name" Entity="[InputEntities(&quot;account&quot;)]"
            ConditionOperator">Equals< WorkflowPropertyType.String, "Contoso" , "String"
            SetVisibility ControlId="name" IsVisible="False"
            SetRequired ControlId="email" Required="True"
            SetAttributeValue Attribute="name" EntityName="account"
            ShowError Message="Required" LockField ControlId="name"
            UnlockField ControlId="email" SetDefaultValue Attribute="statuscode"
            """;

        var result = InvokeStatic("ParseXaml", xaml);
        var conditions = (List<string>?)result.GetType().GetProperty("Conditions")!.GetValue(result);
        var actions = (List<string>?)result.GetType().GetProperty("Actions")!.GetValue(result);

        Assert.IsNotNull(conditions);
        Assert.IsNotNull(actions);
        Assert.IsTrue(conditions![0].Contains("name"));
        Assert.AreEqual(7, actions!.Count);
        Assert.AreEqual("complete", result.GetType().GetProperty("ParseStatus")!.GetValue(result));
    }

    [TestMethod]
    public void ParseXaml_EmptyInput_ReturnsNoXaml()
    {
        var result = InvokeStatic("ParseXaml", " ");

        Assert.AreEqual("no xaml", result.GetType().GetProperty("ParseStatus")!.GetValue(result));
        Assert.IsNull(result.GetType().GetProperty("Conditions")!.GetValue(result));
        Assert.IsNull(result.GetType().GetProperty("Actions")!.GetValue(result));
    }

    [TestMethod]
    public void SanitizeDescription_TrimsRealTextAndRemovesPlaceholders()
    {
        Assert.IsNull(InvokeStatic("SanitizeDescription", (object?)null));
        Assert.IsNull(InvokeStatic("SanitizeDescription", "Click to add description"));
        Assert.AreEqual("real rule", InvokeStatic<string>("SanitizeDescription", " real rule "));
    }

    private static object InvokeStatic(string methodName, params object?[] args) =>
        ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
