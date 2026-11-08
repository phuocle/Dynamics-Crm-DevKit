using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Workflow;

/// <summary>
/// Extra coverage for <see cref="WorkflowXamlDecompiler"/>: the "invalid xaml"
/// (document without a root element) branch of Decompile, the UNRESOLVED_EXPRESSION
/// / UNSUPPORTED_EXPRESSION condition branches of BuildParseIssues, and the
/// decimal branch of ParseConditionValue.
/// </summary>
[TestClass]
public sealed class WorkflowXamlDecompilerExtraCoverageTests
{
    private static readonly Type DecompilerType = typeof(WorkflowXamlDecompiler);
    private static readonly BindingFlags StaticPrivate = BindingFlags.NonPublic | BindingFlags.Static;

    // NOTE: the "invalid xaml" branch (document.Root == null after a successful
    // XDocument.Parse) is unreachable — XDocument.Parse throws XmlException for any
    // document without a root element, which lands in the parse-error branch below.

    [TestMethod]
    public void Decompile_EmptyAndWhitespace_MarksNoXaml()
    {
        var empty = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile("", empty);
        Assert.AreEqual("no xaml", empty.XamlParseStatus);

        var whitespace = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile("   \r\n  ", whitespace);
        Assert.AreEqual("no xaml", whitespace.XamlParseStatus);
    }

    [TestMethod]
    public void Decompile_ValidXaml_ParsesCompleteOrPartial()
    {
        const string xaml = """
<Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
          xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
          xmlns:mva="clr-namespace:Microsoft.VisualBasic.Activities;assembly=System.Activities">
  <Sequence>
    <GetEntityProperty EntityName="account" Attribute="name" Value="[account_name]">
      <OutArgument x:TypeArguments="x:String">[account_name]</OutArgument>
    </GetEntityProperty>
  </Sequence>
</Activity>
""";
        var entry = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile(xaml, entry);

        Assert.AreEqual("complete", entry.XamlParseStatus);
        Assert.IsNotNull(entry.Steps);
        Assert.AreEqual(0, entry.ParseIssues.Count);
    }

    [TestMethod]
    public void Decompile_MalformedXaml_ReportsParseError()
    {
        var entry = new WorkflowEntry();
        WorkflowXamlDecompiler.Decompile("<Activity><Unclosed>", entry);

        StringAssert.StartsWith(entry.XamlParseStatus, "parse error:");
    }

    [TestMethod]
    public void BuildParseIssues_NewObjectConditionAndRawExpression_AreReported()
    {
        var build = DecompilerType.GetMethod("BuildParseIssues", StaticPrivate)!;
        var root = new XElement("Activity");

        var step = new WorkflowStepNode
        {
            Name = "ConditionStep1",
            SourceDisplayName = "ConditionStep1",
            SourceActivityType = "If",
            Branches =
            [
                new WorkflowConditionBranch
                {
                    ConditionExpression = "New Object()[\"x\"]",
                    ConditionExpressionAst = new WorkflowExpressionNode { Kind = "raw", Source = "New Object()[\"x\"]" }
                }
            ],
            Arguments =
            [
                new WorkflowArgument
                {
                    Name = "Target",
                    Direction = "In",
                    Expression = "unreadable",
                    ExpressionAst = new WorkflowExpressionNode { Kind = "stepOutput", Source = "[output]" }
                }
            ]
        };

        var issues = (List<WorkflowParseIssue>)build.Invoke(null, new object[] { root, new List<WorkflowStepNode> { step } })!;

        Assert.AreEqual(2, issues.Count);
        Assert.AreEqual("UNRESOLVED_EXPRESSION", issues[0].Code);
        Assert.AreEqual("UNSUPPORTED_EXPRESSION", issues[1].Code);
        StringAssert.Contains(issues[0].Message, "unparsed Dataverse object-array value");
    }

    [TestMethod]
    public void BuildParseIssues_CleanConditionAndOutArgument_NoIssues()
    {
        var build = DecompilerType.GetMethod("BuildParseIssues", StaticPrivate)!;
        var root = new XElement("Activity");

        var step = new WorkflowStepNode
        {
            Name = "ConditionStep1",
            SourceDisplayName = "ConditionStep1",
            SourceActivityType = "If",
            Branches =
            [
                new WorkflowConditionBranch
                {
                    ConditionExpression = "name = \"Acme\"",
                    // CreateCrmType is in the supported function-operator set, so the
                    // expression is considered fully resolved.
                    ConditionExpressionAst = new WorkflowExpressionNode { Kind = "function", Operator = "CreateCrmType" }
                }
            ],
            Arguments =
            [
                new WorkflowArgument { Name = "Out", Direction = "Out", Expression = "raw", ExpressionAst = new WorkflowExpressionNode { Kind = "raw" } }
            ]
        };

        var issues = (List<WorkflowParseIssue>)build.Invoke(null, new object[] { root, new List<WorkflowStepNode> { step } })!;
        Assert.AreEqual(0, issues.Count);
    }

    [TestMethod]
    public void ParseConditionValue_NumberAndStringLiterals_ReturnCanonicalText()
    {
        var method = DecompilerType.GetMethod("ParseConditionValue", StaticPrivate)!;
        var symbols = new Dictionary<string, string>();

        Assert.AreEqual("42.5", method.Invoke(null, new object[] { "42.5", symbols }));
        Assert.AreEqual("-7.25", method.Invoke(null, new object[] { " -7.25 ", symbols }));
        Assert.AreEqual("42", method.Invoke(null, new object[] { "42", symbols }));
    }
}
