using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.UnitTests.T4;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;

namespace DynamicsCrm.DevKit.UnitTests.T4;

/// <summary>
/// Drives the remaining SimpleT4Processor conditional-parse branches: if /
/// else-if / else chains, nested blocks, boolean operators, equality and
/// truthiness conditions, malformed templates, unterminated bodies, unknown
/// properties, and the LoadTemplate file fallback. Also covers the
/// T4Context image-support guard branches around null stage/message values.
/// </summary>
[TestClass]
public sealed class SimpleT4ProcessorGapCoverageTests
{
    private static T4Context Ctx(string pluginStage = "PostOperation", string pluginMessage = "Create", string name = "Account") =>
        new() { PluginStage = pluginStage, PluginMessage = pluginMessage, PluginLogicalName = name };

    // ──────────────────────────────────────────────
    // Conditional parsing
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Process_ElseBranch_TakenWhenIfFails()
    {
        var template = "A<#if(Context.PluginStage == \"PreValidation\"){#>IF<#}else{#>ELSE<#}#>B";
        Assert.AreEqual("AELSEB", SimpleT4Processor.Process(template, Ctx()));
        Assert.AreEqual("AIFB", SimpleT4Processor.Process(template, Ctx("PreValidation")));
    }

    [TestMethod]
    public void Process_ElseIfChain_FirstMatchingBranchWins()
    {
        var template = "<#if(Context.PluginStage == \"PreValidation\"){#>V<#}else if(Context.PluginStage == \"PreOperation\"){#>O<#}else{#>P<#}#>";
        Assert.AreEqual("V", SimpleT4Processor.Process(template, Ctx("PreValidation")));
        Assert.AreEqual("O", SimpleT4Processor.Process(template, Ctx("PreOperation")));
        Assert.AreEqual("P", SimpleT4Processor.Process(template, Ctx("PostOperation")));
    }

    [TestMethod]
    public void Process_ElseIfChain_NoElse_AllFalse_YieldsEmpty()
    {
        var template = "<#if(Context.PluginStage == \"PreValidation\"){#>V<#}else if(Context.PluginStage == \"PreOperation\"){#>O<#}#>tail";
        Assert.AreEqual("tail", SimpleT4Processor.Process(template, Ctx("PostOperation")));
    }

    [TestMethod]
    public void Process_NestedIf_InnerAndOuterBothEvaluated()
    {
        var template = "<#if(Context.PluginStage != \"\"){#>O[<#if(Context.PluginMessage == \"Create\"){#>I<#}#>]<#}#>";
        Assert.AreEqual("O[I]", SimpleT4Processor.Process(template, Ctx()));
        Assert.AreEqual("O[]", SimpleT4Processor.Process(template, Ctx(pluginMessage: "Delete")));
    }

    [TestMethod]
    public void Process_NestedIfWithElseIfAndElse_ParsesDeepestBody()
    {
        var template = "<#if(Context.PluginMessage == \"Create\"){#>CR<#}else if(Context.PluginMessage == \"Update\"){#>UP<#}else{#>OT<#}#>";
        Assert.AreEqual("CR", SimpleT4Processor.Process(template, Ctx()));
        Assert.AreEqual("UP", SimpleT4Processor.Process(template, Ctx(pluginMessage: "Update")));
        Assert.AreEqual("OT", SimpleT4Processor.Process(template, Ctx(pluginMessage: "Delete")));
    }

    [TestMethod]
    public void Process_MalformedIf_MissingHeaderClose_PassedThrough()
    {
        Assert.AreEqual("X<#if(Context.A", SimpleT4Processor.Process("X<#if(Context.A", Ctx()));
        // "Context.A" resolves truthy (unknown -> {UNKNOWN:...}) with an empty body.
        Assert.AreEqual("X", SimpleT4Processor.Process("X<#if(Context.A){#>", Ctx()));
    }

    [TestMethod]
    public void Process_UnclosedBody_RestOfTemplateIsBody()
    {
        var template = "<#if(Context.PluginMessage == \"Create\"){#>body-never-closed";
        Assert.AreEqual("body-never-closed", SimpleT4Processor.Process(template, Ctx()));
        Assert.AreEqual(string.Empty, SimpleT4Processor.Process(template, Ctx(pluginMessage: "Delete")));
    }

    [TestMethod]
    public void Process_ClosingBraceWithoutTerminal_ParsesCloseViaIndex()
    {
        // "<#} note#>" — a '<#}' close that is neither '<#}#>' nor else/else-if.
        // The processor leaves the remainder as-is after the branch body.
        var template = "<#if(Context.PluginMessage == \"Create\"){#>Y<#} note#>";
        Assert.AreEqual("Y<#} note#>", SimpleT4Processor.Process(template, Ctx()));
    }

    [TestMethod]
    public void Process_NestedWithElseIfElseAndJunkClose_ParsesDeepestStructure()
    {
        var template = "<#if(Context.PluginStage != \"\"){#>O[<#if(Context.PluginMessage == \"Create\"){#>C<#} mid#><#}else if(Context.PluginMessage == \"Delete\"){#>D<#}else{#>E<#}#>]<#}#>";
        Assert.AreEqual("O[C<#} mid#>]<#}#>", SimpleT4Processor.Process(template, Ctx()));
    }

    // ──────────────────────────────────────────────
    // Condition evaluation
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Process_OrCondition_FirstTrueShortCircuits()
    {
        var template = "<#if(Context.PluginStage == \"Nope\" || Context.PluginStage == \"PostOperation\"){#>HIT<#}#>";
        Assert.AreEqual("HIT", SimpleT4Processor.Process(template, Ctx()));
    }

    [TestMethod]
    public void Process_AndCondition_AllPartsMustHold()
    {
        var template = "<#if(Context.PluginStage != \"\" && Context.PluginMessage == \"Create\"){#>HIT<#}#>";
        Assert.AreEqual("HIT", SimpleT4Processor.Process(template, Ctx()));
        Assert.AreEqual(string.Empty, SimpleT4Processor.Process(template, Ctx(pluginMessage: "Delete")));
    }

    [TestMethod]
    public void Process_NegatedCondition_Inverts()
    {
        var template = "<#if(!Context.PluginLogicalName){#>EMPTY<#}else{#>FULL<#}#>";
        Assert.AreEqual("EMPTY", SimpleT4Processor.Process(template, Ctx(name: "")));
        Assert.AreEqual("FULL", SimpleT4Processor.Process(template, Ctx(name: "account")));
    }

    [TestMethod]
    public void Process_BoolPropertyCondition_UsesPropertyValue()
    {
        var template = "<#if(Context.IsPreValidation){#>PRE<#}else{#>NOT<#}#>";
        Assert.AreEqual("PRE", SimpleT4Processor.Process(template, Ctx("PreValidation")));
        Assert.AreEqual("NOT", SimpleT4Processor.Process(template, Ctx("PostOperation")));
    }

    [TestMethod]
    public void Process_TruthyStringCondition_EmptyZeroFalseAreFalsy()
    {
        var truthy = "<#if(Context.PluginLogicalName){#>T<#}else{#>F<#}#>";
        Assert.AreEqual("T", SimpleT4Processor.Process(truthy, Ctx(name: "account")));
        Assert.AreEqual("F", SimpleT4Processor.Process(truthy, Ctx(name: "")));

        var zero = new T4Context { PluginLogicalName = "0" };
        Assert.AreEqual("F", SimpleT4Processor.Process(truthy, zero));

        var falseString = new T4Context { PluginLogicalName = "False" };
        Assert.AreEqual("F", SimpleT4Processor.Process(truthy, falseString));
    }

    [TestMethod]
    public void Process_UnrecognizedCondition_EvaluatesFalse()
    {
        var template = "<#if(42){#>HIT<#}else{#>MISS<#}#>";
        Assert.AreEqual("MISS", SimpleT4Processor.Process(template, Ctx()));
    }

    // ──────────────────────────────────────────────
    // Expressions
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Process_ExpressionReplacesKnownAndUnknownProperties()
    {
        var template = "<#=Context.PluginLogicalName#>|<#=Context.DoesNotExist#>";
        var output = SimpleT4Processor.Process(template, Ctx(name: "account"));
        StringAssert.Contains(output, "account|{UNKNOWN:DoesNotExist}");
        Assert.AreEqual(string.Empty, SimpleT4Processor.Process("<#=Context.PluginLogicalName#>", new T4Context()));
    }

    // ──────────────────────────────────────────────
    // LoadTemplate
    // ──────────────────────────────────────────────

    [TestMethod]
    public void LoadTemplate_RealTemplate_FromTtFolder()
    {
        var template = SimpleT4Processor.LoadTemplate("Plugin.tt");
        StringAssert.Contains(template, "namespace");
    }

    [TestMethod]
    public void LoadTemplate_MissingTemplate_ThrowsFileNotFound()
    {
        Assert.ThrowsExactly<FileNotFoundException>(() => SimpleT4Processor.LoadTemplate("NoSuchTemplate_Gap.tt"));
    }

    // ──────────────────────────────────────────────
    // T4Context guards
    // ──────────────────────────────────────────────

    [TestMethod]
    public void IsPluginSupportedPostImage_NullStageOrMessage_ReturnsFalse()
    {
        Assert.IsFalse(new T4Context { PluginMessage = null, PluginStage = "PostOperation" }.IsPluginSupportedPostImage);
        Assert.IsFalse(new T4Context { PluginMessage = "Create", PluginStage = null }.IsPluginSupportedPostImage);
        Assert.IsFalse(new T4Context { PluginMessage = "Create", PluginStage = "PreOperation" }.IsPluginSupportedPostImage);
        Assert.IsTrue(new T4Context { PluginMessage = "Create", PluginStage = "PostOperation" }.IsPluginSupportedPostImage);
        Assert.IsTrue(new T4Context { PluginMessage = "create", PluginStage = "40" }.IsPluginSupportedPostImage);
    }

    [TestMethod]
    public void IsPluginSupportedPreImage_NullMessage_ReturnsFalse()
    {
        Assert.IsFalse(new T4Context { PluginMessage = null }.IsPluginSupportedPreImage);
        Assert.IsFalse(new T4Context { PluginMessage = "Retrieve" }.IsPluginSupportedPreImage);
        Assert.IsTrue(new T4Context { PluginMessage = "update" }.IsPluginSupportedPreImage);
    }
}
