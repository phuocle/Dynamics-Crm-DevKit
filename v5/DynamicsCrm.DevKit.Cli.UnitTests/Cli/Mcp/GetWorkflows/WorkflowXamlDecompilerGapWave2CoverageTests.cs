using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetWorkflows;

/// <summary>
/// Wave-2 gap coverage for WorkflowXamlDecompiler: the final fallback of
/// ParseConditionValue (a parameters value that is not a symbol reference,
/// quoted string, boolean, null or number is resolved through the symbol
/// table and surfaced verbatim in the branch condition).
///
/// NOTE (dead code — not coverable): Decompile ~37-39 (`root == null` →
/// "invalid xaml") is unreachable — XDocument.Parse either throws
/// XmlException (empty/invalid input, caught at ~49) or returns a document
/// with a non-null Root; the null-root branch can never execute.
/// </summary>
[TestClass]
public sealed class WorkflowXamlDecompilerGapWave2CoverageTests
{
    private const string Header = """
        <Activity xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                  xmlns:sco="clr-namespace:System.Collections.ObjectModel;assembly=mscorlib"
                  xmlns:mxswa="clr-namespace:Microsoft.Xrm.Sdk.Workflow.Activities;assembly=Microsoft.Xrm.Sdk.Workflow"
                  xmlns:mcwa="clr-namespace:Microsoft.Crm.Workflow.Activities;assembly=Microsoft.Crm.Workflow">
          <mxswa:Workflow>
        """;

    private const string Footer = """
          </mxswa:Workflow>
        </Activity>
        """;

    [TestMethod]
    public void Decompile_ConditionWithFreeTextValue_FallsBackToRawText()
    {
        const string xaml = Header + """
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow">
                  <mxswa:ActivityReference.Arguments>
                    <OutArgument x:Key="Result">[cond1]</OutArgument>
                    <InArgument x:Key="Operand">[account.name]</InArgument>
                    <InArgument x:Key="ConditionOperator">Equal</InArgument>
                    <InArgument x:Key="Parameters">[New Object() { hello world }]</InArgument>
                  </mxswa:ActivityReference.Arguments>
                </mxswa:ActivityReference>
                <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionSequence, Microsoft.Crm.Workflow"
                    DisplayName="ConditionStep1: Free Text">
                  <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[cond1]</InArgument></mxswa:ActivityReference.Arguments>
                  <mxswa:ActivityReference.Properties>
                    <sco:Collection x:TypeArguments="Activity" x:Key="Activities">
                      <mxswa:ActivityReference AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"
                          DisplayName="ConditionBranchStep2">
                        <mxswa:ActivityReference.Arguments><InArgument x:Key="Condition">[cond1]</InArgument></mxswa:ActivityReference.Arguments>
                        <mxswa:ActivityReference.Properties>
                          <mxswa:ActivityReference x:Key="Then" AssemblyQualifiedName="Microsoft.Crm.Workflow.Activities.Composite, Microsoft.Crm.Workflow">
                            <mxswa:ActivityReference.Properties><sco:Collection x:TypeArguments="Activity" x:Key="Activities" /></mxswa:ActivityReference.Properties>
                          </mxswa:ActivityReference>
                        </mxswa:ActivityReference.Properties>
                      </mxswa:ActivityReference>
                    </sco:Collection>
                  </mxswa:ActivityReference.Properties>
                </mxswa:ActivityReference>
        """ + Footer;

        var entry = new WorkflowEntry
        {
            WorkflowId = "workflow-id",
            Name = "Free Text Condition",
            PrimaryEntity = "account",
            Mode = "Background",
            Scope = "Organization"
        };

        WorkflowXamlDecompiler.Decompile(xaml, entry);

        // The free-text parameter cannot be typed by the expression parser,
        // so the decompiler flags the semantics as unverified — the branch
        // condition still carries the raw text.
        var condition = entry.Steps.Single();
        Assert.AreEqual(1, condition.Branches.Count);
        StringAssert.Contains(condition.Branches[0].ConditionExpression, "hello world");
    }
}
