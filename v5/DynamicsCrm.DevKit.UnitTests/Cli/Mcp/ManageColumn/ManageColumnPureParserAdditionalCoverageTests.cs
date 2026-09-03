using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageColumn;

[TestClass]
public sealed class ManageColumnPureParserAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ManageColumnTool);
    private const BindingFlags PrivateStatic = BindingFlags.NonPublic | BindingFlags.Static;

    [TestMethod]
    public void DateTimeAndFormatResolvers_CoverDefaultsAliasesAndErrors()
    {
        AssertBehavior("", DateTimeBehavior.UserLocal, null);
        AssertBehavior("dateonly", DateTimeBehavior.DateOnly, null);
        AssertBehavior("timezoneindependent", DateTimeBehavior.TimeZoneIndependent, null);
        AssertBehavior("nonsense", DateTimeBehavior.UserLocal, "Invalid behavior 'nonsense'.");

        AssertResolver("ResolveStringFormat", "email", StringFormatName.Email);
        AssertResolver("ResolveStringFormat", "url", StringFormatName.Url);
        AssertResolver("ResolveIntegerFormat", "duration", IntegerFormat.Duration);
        AssertResolver("ResolveMemoFormat", "text", MemoFormatName.Text);

        var stringArgs = new object?[] { "unexpected", null };
        _ = Invoke("ResolveStringFormat", stringArgs);
        StringAssert.Contains((string)stringArgs[1]!, "Invalid format");
        var intArgs = new object?[] { "unexpected", null };
        _ = Invoke("ResolveIntegerFormat", intArgs);
        StringAssert.Contains((string)intArgs[1]!, "Invalid format for integer");
    }

    [TestMethod]
    public void OptionsAndDeleteParsers_CoverObjectDuplicatesAndInvalidValues()
    {
        var objectInput = Invoke("ParseOptions", "{\"label\":\"One\"}");
        StringAssert.Contains(TupleField<string>(objectInput, "Item2"), "Invalid JSON");
        var duplicate = Invoke("ParseOptions", "[{\"label\":\"One\",\"value\":1},{\"label\":\"Two\",\"value\":1}]");
        Assert.IsNull(TupleField<string>(duplicate, "Item2"));
        Assert.AreEqual(2, ((System.Collections.IEnumerable)TupleField<object>(duplicate, "Item1")).Cast<object>().Count());
        var blankLabel = Invoke("ParseOptions", "[{\"label\":\"  \",\"value\":1}]");
        Assert.IsNull(TupleField<string>(blankLabel, "Item2"));

        var nonArray = Invoke("ParseDeleteValues", "{\"value\":1}");
        StringAssert.Contains(TupleField<string>(nonArray, "Item2"), "Invalid JSON");
        var duplicateDelete = Invoke("ParseDeleteValues", "[1,1]");
        Assert.IsNull(TupleField<string>(duplicateDelete, "Item2"));
        var badDelete = Invoke("ParseDeleteValues", "[\"one\"]");
        StringAssert.Contains(TupleField<string>(badDelete, "Item2"), "Invalid JSON");
    }

    [TestMethod]
    public void RequiredLevelAndAttributeTypeHelpers_CoverUnknownAndNullInputs()
    {
        Assert.AreEqual(AttributeRequiredLevel.None, Invoke("ParseRequiredLevel", ""));
        Assert.IsNull(Invoke("ParseRequiredLevel", "unrecognised"));
        Assert.AreEqual(AttributeRequiredLevel.Recommended, Invoke("ParseRequiredLevel", "recommended"));
        Assert.AreEqual("Unknown", Invoke("GetAttributeTypeName", new AttributeMetadata()));
    }

    private static void AssertBehavior(string input, DateTimeBehavior expected, string? expectedError)
    {
        var arguments = new object?[] { input, null };
        Assert.AreEqual(expected, Invoke("ResolveDateTimeBehavior", arguments));
        Assert.AreEqual(expectedError, arguments[1]);
    }

    private static void AssertResolver(string methodName, string input, object expected)
    {
        var arguments = new object?[] { input, null };
        Assert.AreEqual(expected, Invoke(methodName, arguments));
        Assert.IsNull(arguments[1]);
    }

    private static object? Invoke(string name, params object?[] arguments) =>
        ToolType.GetMethods(PrivateStatic).Single(m => m.Name == name && m.GetParameters().Length == arguments.Length)
            .Invoke(null, arguments);

    private static T TupleField<T>(object value, string name) =>
        (T)value.GetType().GetField(name)!.GetValue(value)!;
}
