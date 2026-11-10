#nullable enable

using DynamicsCrm.DevKit.UnitTests.T4;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Lib;

/// <summary>
/// Covers the private helpers of the existing compact-JSON and T4
/// diagnostic test classes through reflection — the helpers are private
/// to those classes, so new files cannot call them directly and the
/// existing files stay untouched.
/// </summary>
[TestClass]
public class DevKitJsonCompactReflectionCoverageTests
{
    private static object? InvokePrivate(Type type, string method, object? instance, params object?[] args)
    {
        var flags = BindingFlags.NonPublic | (instance == null ? BindingFlags.Static : BindingFlags.Instance) | BindingFlags.Public;
        var info = type.GetMethod(method, flags)
            ?? throw new MissingMethodException(type.Name, method);
        return info.Invoke(instance, args);
    }

    private static MockPluginExecutionContext ContextWithAttributes(params (string Key, object Value)[] attributes)
    {
        var context = new MockPluginExecutionContext
        {
            MessageName = "Create",
            PrimaryEntityName = "contact",
            InputParameters = new Microsoft.Xrm.Sdk.ParameterCollection(),
        };
        foreach (var (key, value) in attributes)
        {
            context.InputParameters[key] = value;
        }
        return context;
    }

    [TestMethod]
    public void SimulateDebugContext_SmallJsonWithoutQuotes_UsesReplaceForm()
    {
        var context = ContextWithAttributes(("small", "no quotes here"));
        var output = (string)InvokePrivate(typeof(DevKitJsonCompactTest), "SimulateDebugContext", null, context)!;
        StringAssert.Contains(output, "var json = @\"");
        StringAssert.Contains(output, ".Replace(\"'\", \"\\\"\")");
    }

    [TestMethod]
    public void SimulateDebugContext_SmallJsonWithQuotes_KeepsQuotedForm()
    {
        var context = ContextWithAttributes(("quoted", "it's quoted"));
        var output = (string)InvokePrivate(typeof(DevKitJsonCompactTest), "SimulateDebugContext", null, context)!;
        StringAssert.Contains(output, "var json = @\"");
        StringAssert.Contains(output, "\"\"");
    }

    [TestMethod]
    public void SimulateDebugContext_LargeJson_Compresses()
    {
        var big = new string('x', 20 * 1024);
        var context = ContextWithAttributes(("big", big));
        var output = (string)InvokePrivate(typeof(DevKitJsonCompactTest), "SimulateDebugContext", null, context)!;
        StringAssert.Contains(output, ".Decompress();");
    }

    [TestMethod]
    public void SimulateDebugContext_UncompressableJson_ReportsOverflow()
    {
        // Random bytes defeat the compressor: the JSON stays over the 10 KB
        // budget even after compact + compress — the overflow message wins.
        var bytes = new byte[96 * 1024];
        using (var rng = System.Security.Cryptography.RandomNumberGenerator.Create())
        {
            rng.GetBytes(bytes);
        }
        var noise = Convert.ToBase64String(bytes);
        var context = ContextWithAttributes(("noise", noise));
        var output = (string)InvokePrivate(typeof(DevKitJsonCompactTest), "SimulateDebugContext", null, context)!;
        StringAssert.Contains(output, "context exceeds 10 KB even after compact + compress");
    }

    [TestMethod]
    public void ExtractJsonFromDebugOutput_ParsesEverySnippetForm()
    {
        Assert.IsNull(InvokePrivate(typeof(DevKitJsonCompactTest), "ExtractJsonFromDebugOutput", null, "not a snippet"));

        var replaced = InvokePrivate(typeof(DevKitJsonCompactTest), "ExtractJsonFromDebugOutput", null,
            "var json = @\"{'a':1}\".Replace(\"'\", \"\\\"\");");
        Assert.AreEqual("{\"a\":1}", replaced);

        var quoted = InvokePrivate(typeof(DevKitJsonCompactTest), "ExtractJsonFromDebugOutput", null,
            "var json = @\"{\"\"a\"\":1}\";");
        Assert.AreEqual("{\"a\":1}", quoted);
    }

    [TestMethod]
    public void AssertNoT4Residue_ResidueContext_FailsWithAllChecks()
    {
        // The diagnostic helper adds one error per residue kind and then
        // fails — the residue lives in the comment value the templates
        // inject verbatim, so a single context trips every check at once.
        var helper = Activator.CreateInstance(typeof(T4ProcessorDiagnosticTests))!;
        var ctx = new DynamicsCrm.DevKit.Shared.Models.T4Context
        {
            PluginMessage = "Update",
            PluginStage = "PostOperation",
            PluginExecution = "Synchronous",
            PluginOrder = 1,
            PluginLogicalName = "account",
            PluginSchemaName = "Account",
            PluginNameSpace = "Dev.DevKit.Server",
            PluginSharedNameSpace = "Dev.DevKit.Shared",
            Class = "PostAccountUpdate",
            PluginComment = "<#= <#if <#} {UNKNOWN:x #>",
            DataSource = "dev_datasource",
        };
        // Reflection wraps the failed assertion — unwrap and pin the type.
        var ex = Assert.ThrowsExactly<TargetInvocationException>(
            () => InvokePrivate(typeof(T4ProcessorDiagnosticTests), "AssertNoT4Residue", helper, ctx));
        Assert.IsInstanceOfType<AssertFailedException>(ex.InnerException);
        var message = ex.InnerException!.Message;
        StringAssert.Contains(message, "unprocessed expression '<#='");
        StringAssert.Contains(message, "unprocessed conditional '<#if'");
        StringAssert.Contains(message, "unprocessed closing '<#}'");
        StringAssert.Contains(message, "unknown property reference");
        StringAssert.Contains(message, "contains T4 residue");
    }
}
