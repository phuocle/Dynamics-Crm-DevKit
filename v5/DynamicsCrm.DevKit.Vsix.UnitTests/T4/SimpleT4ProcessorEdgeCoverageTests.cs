using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.UnitTests.T4;

/// <summary>
/// Edge paths of the lightweight T4 processor the unit tests run templates
/// through: malformed conditionals, else-if/else chains, nested ifs, the
/// condition operators (||, &&, !, !=, ==), boolean properties, unknown
/// property fallbacks and the file-fallback template loader.
/// </summary>
[TestClass]
public class SimpleT4ProcessorEdgeCoverageTests
{
    private static T4Context CreateContext(string message = "Update", string stage = "PostOperation", string execution = "Synchronous")
    {
        return new T4Context
        {
            PluginMessage = message,
            PluginStage = stage,
            PluginExecution = execution,
            PluginOrder = 1,
            PluginLogicalName = "account",
            PluginSchemaName = "Account",
            PluginNameSpace = "Dev.DevKit.Server",
            PluginSharedNameSpace = "Dev.DevKit.Shared",
            Class = "PostAccountUpdate",
            PluginComment = "  Plugin comment here",
            DataSource = "dev_datasource",
        };
    }

    [TestMethod]
    public void Process_MalformedIfWithoutBody_HeaderEchoed()
    {
        // "<#if(" without "{#>": the processor echoes the 5-char header and
        // moves past it instead of looping forever.
        var output = SimpleT4Processor.Process("X<#if( Context.PluginMessage Y", CreateContext());
        StringAssert.Contains(output, "X");
        StringAssert.Contains(output, "<#if(");
    }

    [TestMethod]
    public void Process_MalformedIfWithBodyButNoClose_HeaderEchoed()
    {
        // "){#>" present but no "<#}" close: same echo guard.
        var output = SimpleT4Processor.Process("X<#if(Context.PluginMessage==\"Create\"){#>bodyY", CreateContext());
        StringAssert.Contains(output, "X");
    }

    [TestMethod]
    public void Process_ElseIfChain_SelectsBranches()
    {
        var template = "A<#if(Context.PluginMessage==\"Create\"){#>C<#}else if(Context.PluginStage==\"PreOperation\"){#>P<#}else{#>E<#}#>Z";
        Assert.AreEqual("ACZ", SimpleT4Processor.Process(template, CreateContext(message: "Create", stage: "PostOperation")));
        Assert.AreEqual("APZ", SimpleT4Processor.Process(template, CreateContext(message: "Update", stage: "PreOperation")));
        Assert.AreEqual("AEZ", SimpleT4Processor.Process(template, CreateContext(message: "Update", stage: "PostOperation")));
    }

    [TestMethod]
    public void Process_NestedIf_InSelectedBody()
    {
        var template = "<#if(Context.PluginMessage==\"Create\"){#>A<#if(Context.PluginStage==\"PreOperation\"){#>N<#}#>B<#}#>";
        Assert.AreEqual("ANB", SimpleT4Processor.Process(template, CreateContext(message: "Create", stage: "PreOperation")));
        Assert.AreEqual("AB", SimpleT4Processor.Process(template, CreateContext(message: "Create", stage: "PostOperation")));
        Assert.AreEqual("", SimpleT4Processor.Process(template, CreateContext(message: "Update", stage: "PostOperation")));
    }

    [TestMethod]
    public void Process_OrElseConditions_FirstTruthyWins()
    {
        var template = "<#if(Context.PluginMessage==\"Delete\"||Context.PluginStage==\"PreValidation\"){#>HIT<#}#>";
        Assert.AreEqual("HIT", SimpleT4Processor.Process(template, CreateContext(message: "Delete", stage: "PostOperation")));
        Assert.AreEqual("HIT", SimpleT4Processor.Process(template, CreateContext(message: "Update", stage: "PreValidation")));
        Assert.AreEqual("", SimpleT4Processor.Process(template, CreateContext(message: "Update", stage: "PostOperation")));
    }

    [TestMethod]
    public void Process_AndConditions_AllMustHold()
    {
        var template = "<#if(Context.PluginMessage==\"Delete\"&&Context.PluginStage==\"PreValidation\"){#>HIT<#}#>";
        Assert.AreEqual("HIT", SimpleT4Processor.Process(template, CreateContext(message: "Delete", stage: "PreValidation")));
        Assert.AreEqual("", SimpleT4Processor.Process(template, CreateContext(message: "Delete", stage: "PostOperation")));
    }

    [TestMethod]
    public void Process_NegationOperator()
    {
        var template = "<#if(!Context.IsAsynchronous){#>SYNC<#}#>";
        Assert.AreEqual("SYNC", SimpleT4Processor.Process(template, CreateContext(execution: "Synchronous")));
        Assert.AreEqual("", SimpleT4Processor.Process(template, CreateContext(execution: "Asynchronous")));
    }

    [TestMethod]
    public void Process_InequalityOperator()
    {
        var template = "<#if(Context.PluginLogicalName!=\"none\"){#>BOUND<#}#>";
        Assert.AreEqual("BOUND", SimpleT4Processor.Process(template, CreateContext()));
    }

    [TestMethod]
    public void Process_BooleanProperty_Branches()
    {
        var template = "<#if(Context.IsPreValidation){#>PV<#}#>";
        Assert.AreEqual("PV", SimpleT4Processor.Process(template, CreateContext(stage: "PreValidation")));
        Assert.AreEqual("", SimpleT4Processor.Process(template, CreateContext(stage: "PostOperation")));
    }

    [TestMethod]
    public void Process_UnknownProperty_FallsBackToPlaceholder()
    {
        var output = SimpleT4Processor.Process("<#=Context.DoesNotExist#>", CreateContext());
        StringAssert.Contains(output, "{UNKNOWN:DoesNotExist}");
    }

    [TestMethod]
    public void Process_IntegerProperty_RendersValue()
    {
        var output = SimpleT4Processor.Process("Order=<#=Context.PluginOrder#>", CreateContext());
        Assert.AreEqual("Order=1", output);
    }

    [TestMethod]
    public void Process_ChainEndsWithoutCloseToken_BreaksOutOfLoop()
    {
        // The chain loop breaks when the tail after "<#}" matches neither
        // else-if nor else nor the full "<#}#>" close token.
        var template = "<#if(Context.PluginMessage==\"Create\"){#>A<#}TRAILING";
        var output = SimpleT4Processor.Process(template, CreateContext(message: "Create"));
        StringAssert.Contains(output, "A");
    }

    [TestMethod]
    public void Process_NestedElse_InsideOuterBody()
    {
        var template = "<#if(Context.PluginMessage==\"Create\"){#>A<#if(Context.PluginStage==\"PreOperation\"){#>N1<#}else{#>N2<#}#>B<#}#>";
        Assert.AreEqual("AN2B", SimpleT4Processor.Process(template, CreateContext(message: "Create", stage: "PostOperation")));
    }

    [TestMethod]
    public void Process_NestedElseIf_InsideOuterBody()
    {
        var template = "<#if(Context.PluginMessage==\"Create\"){#>A<#if(Context.PluginStage==\"PreOperation\"){#>N1<#}else if(Context.PluginStage==\"PostOperation\"){#>N3<#}else{#>N2<#}#>B<#}#>";
        Assert.AreEqual("AN3B", SimpleT4Processor.Process(template, CreateContext(message: "Create", stage: "PostOperation")));
        Assert.AreEqual("AN2B", SimpleT4Processor.Process(template, CreateContext(message: "Create", stage: "PreValidation")));
    }

    [TestMethod]
    public void Process_PlainContextProperty_TruthyAndFalsy()
    {
        // A bare Context.Property condition (no ==/!=) is truthy when the
        // resolved value is non-empty, not "0" and not "false".
        var truthy = SimpleT4Processor.Process("<#if(Context.PluginComment){#>HAS<#}#>", CreateContext());
        Assert.AreEqual("HAS", truthy);

        var empty = CreateContext();
        empty.PluginComment = string.Empty;
        Assert.AreEqual("", SimpleT4Processor.Process("<#if(Context.PluginComment){#>HAS<#}#>", empty));
    }

    [TestMethod]
    public void Process_ConditionWithoutContextReference_IsFalse()
    {
        Assert.AreEqual("", SimpleT4Processor.Process("<#if( nonsense ){#>X<#}#>", CreateContext()));
    }

    [TestMethod]
    public void Process_NestedIfCloseWithoutToken_SkipsToNextClose()
    {
        // A nested "<#}" whose close is written as "<#} else-ish" without
        // the exact "<#}#>" token: the scanner falls back to the next "#>".
        var template = "<#if(Context.PluginMessage==\"Create\"){#>A<#if(Context.PluginStage==\"PreOperation\"){#>N<#} else {#>B<#}#>";
        var output = SimpleT4Processor.Process(template, CreateContext(message: "Create", stage: "PreOperation"));
        StringAssert.Contains(output, "A");
    }

    [TestMethod]
    public void Process_NestedCloseNotExactToken_SkipsToNextHashClose()
    {
        // A nested "<#}" whose tail is neither the exact "<#}#>" token nor
        // an else clause: the scanner falls back to the next "#>".
        var template = "<#if(Context.PluginMessage==\"Create\"){#>A<#if(Context.PluginStage==\"PreOperation\"){#>N<#} junk #>B<#}#>";
        var output = SimpleT4Processor.Process(template, CreateContext(message: "Create", stage: "PreOperation"));
        StringAssert.Contains(output, "A");
        StringAssert.Contains(output, "B");
    }

    [TestMethod]
    public void Process_NestedCloseWithoutAnyHashClose_WalksToEnd()
    {
        // Same fallback with no "#>" anywhere after the nested "<#}" — the
        // scanner walks to the template end and yields the remainder.
        var template = "<#if(Context.PluginMessage==\"Create\"){#>A<#if(Context.PluginStage==\"PreOperation\"){#>N<#} junk";
        var output = SimpleT4Processor.Process(template, CreateContext(message: "Create", stage: "PreOperation"));
        StringAssert.Contains(output, "A");
    }

    [TestMethod]
    public void LoadTemplate_MissingName_ThrowsFileNotFound()
    {
        Assert.ThrowsExactly<FileNotFoundException>(
            () => SimpleT4Processor.LoadTemplate("no-such-template.edge.tt"));
    }

    [TestMethod]
    public void LoadTemplate_RealTemplate_LoadsFromTtFolder()
    {
        // The shared tt resources are on disk next to the repo; the loader's
        // file fallback reads them when the name is not embedded.
        var template = SimpleT4Processor.LoadTemplate("Plugin.tt");
        StringAssert.Contains(template, "<#if(");
    }
}
