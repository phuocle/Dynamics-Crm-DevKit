using DynamicsCrm.DevKit.Shared.Logic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class CSharpLateBoundPowerFxCoverageTests
{
    private static readonly MethodInfo NormalizeFormulaDefinitionMethod =
        typeof(CSharpLateBound).GetMethod("NormalizeFormulaDefinition", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo FormatPowerFxMethod =
        typeof(CSharpLateBound).GetMethod("FormatPowerFx", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo SplitTopLevelArgumentsMethod =
        typeof(CSharpLateBound).GetMethod("SplitTopLevelArguments", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo NormalizePowerFxLineMethod =
        typeof(CSharpLateBound).GetMethod("NormalizePowerFxLine", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo FormatPowerFxOutsideStringsMethod =
        typeof(CSharpLateBound).GetMethod("FormatPowerFxOutsideStrings", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo FormatPowerFxOperatorsMethod =
        typeof(CSharpLateBound).GetMethod("FormatPowerFxOperators", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo ParseFormulaXmlMethod =
        typeof(CSharpLateBound).GetMethod("ParseFormulaXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo LooksLikeFormulaXmlMethod =
        typeof(CSharpLateBound).GetMethod("LooksLikeFormulaXml", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly Type FormulaXmlTranslatorType =
        typeof(CSharpLateBound).GetNestedType("FormulaXmlTranslator", BindingFlags.NonPublic)!;

    [TestMethod]
    public void NormalizeFormulaDefinition_ValidAndEdgeCases()
    {
        var empty = (string)NormalizeFormulaDefinitionMethod.Invoke(null, new object[] { "   " })!;
        Assert.AreEqual(string.Empty, empty);

        var nullResult = (string)NormalizeFormulaDefinitionMethod.Invoke(null, new object?[] { null })!;
        Assert.AreEqual(string.Empty, nullResult);

        var spaced = (string)NormalizeFormulaDefinitionMethod.Invoke(null, new object[] { "A  + \t\r\n B   C" })!;
        Assert.AreEqual("A + B C", spaced);
    }

    [TestMethod]
    public void FormatPowerFx_EdgeCasesAndFormatting()
    {
        var empty = (string)FormatPowerFxMethod.Invoke(null, new object[] { "  " })!;
        Assert.AreEqual(string.Empty, empty);

        var noParens = (string)FormatPowerFxMethod.Invoke(null, new object[] { "SomeFormula" })!;
        Assert.AreEqual("SomeFormula", noParens);

        var singleArg = (string)FormatPowerFxMethod.Invoke(null, new object[] { "Upper(name)" })!;
        Assert.AreEqual("Upper(name)", singleArg);

        var multiArg = (string)FormatPowerFxMethod.Invoke(null, new object[] { "If(a > 10 && b <= 20, \"TrueVal\", \"FalseVal\")" })!;
        Assert.IsTrue(multiArg.Contains("If("));
        Assert.IsTrue(multiArg.Contains("a > 10 && b <= 20,"));
        Assert.IsTrue(multiArg.Contains("\"TrueVal\","));
        Assert.IsTrue(multiArg.Contains("\"FalseVal\""));
        Assert.IsTrue(multiArg.EndsWith(")"));
    }

    [TestMethod]
    public void SplitTopLevelArguments_HandlesNestedParensAndQuotes()
    {
        var args = (List<string>)SplitTopLevelArgumentsMethod.Invoke(null, new object[] { "arg1, \"arg, with, comma\", Concat(x, y), z" })!;
        Assert.AreEqual(4, args.Count);
        Assert.AreEqual("arg1", args[0]);
        Assert.AreEqual("\"arg, with, comma\"", args[1]);
        Assert.AreEqual("Concat(x, y)", args[2]);
        Assert.AreEqual("z", args[3]);
    }

    [TestMethod]
    public void NormalizePowerFxLine_FormatsOperatorsAndSpaces()
    {
        var empty = (string)NormalizePowerFxLineMethod.Invoke(null, new object[] { "" })!;
        Assert.AreEqual(string.Empty, empty);

        var formatted = (string)NormalizePowerFxLineMethod.Invoke(null, new object[] { "a=b,c<>d,e>=f,g<=h" })!;
        Assert.IsTrue(formatted.Contains(" = "));
        Assert.IsTrue(formatted.Contains(" <> "));
        Assert.IsTrue(formatted.Contains(" >= "));
        Assert.IsTrue(formatted.Contains(" <= "));
    }

    [TestMethod]
    public void FormatPowerFxOutsideStrings_DoesNotModifyInsideStrings()
    {
        var text = (string)FormatPowerFxOutsideStringsMethod.Invoke(null, new object[] { "a=b & \"c=d & e\" & f>g" })!;
        Assert.IsTrue(text.Contains("\"c=d & e\""));
        Assert.IsTrue(text.Contains("a = b"));
        Assert.IsTrue(text.Contains("f > g"));
    }

    [TestMethod]
    public void FormatPowerFxOperators_AllReplacements()
    {
        var text = (string)FormatPowerFxOperatorsMethod.Invoke(null, new object[] { "a>=b and c<=d and e<>f and g=h and i>j and k<l and m&n and p&&q" })!;
        Assert.IsTrue(text.Contains(" >= "));
        Assert.IsTrue(text.Contains(" <= "));
        Assert.IsTrue(text.Contains(" <> "));
        Assert.IsTrue(text.Contains(" = "));
        Assert.IsTrue(text.Contains(" > "));
        Assert.IsTrue(text.Contains(" < "));
        Assert.IsTrue(text.Contains(" & "));
        Assert.IsTrue(text.Contains(" && "));
    }

    [TestMethod]
    public void LooksLikeFormulaXml_DetectsXmlCorrectly()
    {
        Assert.IsTrue((bool)LooksLikeFormulaXmlMethod.Invoke(null, new object[] { "<?xml version='1.0'?><Activity></Activity>" })!);
        Assert.IsTrue((bool)LooksLikeFormulaXmlMethod.Invoke(null, new object[] { "<ActivityReference></ActivityReference>" })!);
        Assert.IsFalse((bool)LooksLikeFormulaXmlMethod.Invoke(null, new object[] { "Plain text formula" })!);
    }

    [TestMethod]
    public void ParseFormulaXml_InvalidXml_ReturnsFallback()
    {
        var result = (string)ParseFormulaXmlMethod.Invoke(null, new object[] { "<invalid xml", 1 })!;
        Assert.AreEqual("Formula XML could not be translated", result);

        var unknownSource = (string)ParseFormulaXmlMethod.Invoke(null, new object[] { "<Activity></Activity>", 99 })!;
        Assert.AreEqual("Formula XML could not be translated", unknownSource);
    }

    [TestMethod]
    public void FormulaXmlTranslator_TranslateCalculated_TranslatesCorrectly()
    {
        var xml = @"<Activity xmlns:x='http://schemas.microsoft.com/winfx/2006/xaml'>
  <ActivityReference AssemblyQualifiedName='System.Activities.ConditionBranch'>
    <InArgument x:Key='Condition'>[cond1]</InArgument>
    <ActivityReference x:Key='Then'>
      <SetEntityProperty Value='[val1]' />
    </ActivityReference>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName='System.Activities.ConditionBranch'>
    <InArgument x:Key='Condition'>true</InArgument>
    <ActivityReference x:Key='Then'>
      <SetEntityProperty Value='[val2]' />
    </ActivityReference>
  </ActivityReference>
  <GetEntityProperty Value='[prop1]' EntityName='account' Attribute='name' />
  <ActivityReference AssemblyQualifiedName='System.Activities.EvaluateExpression'>
    <InArgument x:Key='Result'>[val1]</InArgument>
    <InArgument x:Key='ExpressionOperator'>CreateCrmType</InArgument>
    <InArgument x:Key='Parameters'>WorkflowPropertyType.String, ""VIP""</InArgument>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName='System.Activities.EvaluateExpression'>
    <InArgument x:Key='Result'>[val2]</InArgument>
    <InArgument x:Key='ExpressionOperator'>CreateCrmType</InArgument>
    <InArgument x:Key='Parameters'>WorkflowPropertyType.Boolean, ""true""</InArgument>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName='System.Activities.EvaluateCondition'>
    <InArgument x:Key='Result'>[cond1]</InArgument>
    <InArgument x:Key='Operand'>[prop1]</InArgument>
    <InArgument x:Key='ConditionOperator'>Equal</InArgument>
    <InArgument x:Key='Parameters'>New Object() { ""Contoso"" }</InArgument>
  </ActivityReference>
</Activity>";

        var result = (string)ParseFormulaXmlMethod.Invoke(null, new object[] { xml, 1 })!;
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("if (account.name == \"Contoso\") return \"VIP\";"));
        Assert.IsTrue(result.Contains("else return true;"));
    }

    [TestMethod]
    public void FormulaXmlTranslator_TranslateRollup_TranslatesCorrectly()
    {
        var entityMetadata = new EntityMetadata();
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.LogicalName))?.SetValue(entityMetadata, "account");
        typeof(CSharpLateBound).GetProperty("EntityMetadata", BindingFlags.NonPublic | BindingFlags.Static)!.SetValue(null, entityMetadata);

        var xml = @"<Activity xmlns:x='http://schemas.microsoft.com/winfx/2006/xaml'>
  <SetAttributeValue DisplayName='Account_Contacts' Entity='CreatedEntities(""rel#contact#accountid"")' />
  <Sequence DisplayName='Target'>
    <ActivityReference AssemblyQualifiedName='System.Activities.EvaluateCondition'>
      <InArgument x:Key='Result'>[cond1]</InArgument>
      <InArgument x:Key='Operand'>[statuscode]</InArgument>
      <InArgument x:Key='ConditionOperator'>Equal</InArgument>
      <InArgument x:Key='Parameters'>New Object() { 1 }</InArgument>
    </ActivityReference>
  </Sequence>
  <Sequence DisplayName='Aggregate'>
    <ActivityReference AssemblyQualifiedName='System.Activities.EvaluateExpression'>
      <InArgument x:Key='ExpressionOperator'>AVG</InArgument>
      <InArgument x:Key='Parameters'>New Object() { [revenue] }</InArgument>
    </ActivityReference>
  </Sequence>
  <GetEntityProperty Value='[statuscode]' Attribute='statuscode' />
  <GetEntityProperty Value='[revenue]' Attribute='revenue' />
</Activity>";

        var result = (string)ParseFormulaXmlMethod.Invoke(null, new object[] { xml, 2 })!;
        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("Account_Contacts"));
        Assert.IsTrue(result.Contains("statuscode == 1"));
        Assert.IsTrue(result.Contains("AVERAGE(revenue)"));
    }

    [TestMethod]
    public void FormulaXmlTranslator_ConditionOperators_And_LogicalOperators()
    {
        var doc = XDocument.Parse(@"<Activity xmlns:x='http://schemas.microsoft.com/winfx/2006/xaml'>
  <ActivityReference AssemblyQualifiedName='System.Activities.EvaluateCondition'>
    <InArgument x:Key='Result'>[r1]</InArgument>
    <InArgument x:Key='Operand'>[p1]</InArgument>
    <InArgument x:Key='ConditionOperator'>GreaterThan</InArgument>
    <InArgument x:Key='Parameters'>New Object() { 10 }</InArgument>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName='System.Activities.EvaluateCondition'>
    <InArgument x:Key='Result'>[r2]</InArgument>
    <InArgument x:Key='Operand'>[p2]</InArgument>
    <InArgument x:Key='ConditionOperator'>Null</InArgument>
    <InArgument x:Key='Parameters'>New Object() { }</InArgument>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName='System.Activities.EvaluateLogicalCondition'>
    <InArgument x:Key='Result'>[r3]</InArgument>
    <InArgument x:Key='LeftOperand'>[r1]</InArgument>
    <InArgument x:Key='RightOperand'>[r2]</InArgument>
    <InArgument x:Key='LogicalOperator'>Or</InArgument>
  </ActivityReference>
  <GetEntityProperty Value='[p1]' Attribute='field1' />
  <GetEntityProperty Value='[p2]' Attribute='field2' />
</Activity>");

        var translator = Activator.CreateInstance(FormulaXmlTranslatorType, new object[] { doc })!;
        Assert.IsNotNull(translator);

        // Test all condition operators
        var formatCond = FormulaXmlTranslatorType.GetMethod("FormatConditionOperator", BindingFlags.NonPublic | BindingFlags.Static)!;
        Assert.AreEqual("!=", formatCond.Invoke(null, new object[] { "NotEqual" }));
        Assert.AreEqual(">=", formatCond.Invoke(null, new object[] { "GreaterEqual" }));
        Assert.AreEqual("<", formatCond.Invoke(null, new object[] { "LessThan" }));
        Assert.AreEqual("<=", formatCond.Invoke(null, new object[] { "LessEqual" }));
        Assert.AreEqual("is not null", formatCond.Invoke(null, new object[] { "NotNull" }));
        Assert.AreEqual("CustomOp", formatCond.Invoke(null, new object[] { "CustomOp" }));

        // Test logical operators
        var formatLog = FormulaXmlTranslatorType.GetMethod("FormatLogicalOperator", BindingFlags.NonPublic | BindingFlags.Static)!;
        Assert.AreEqual("&&", formatLog.Invoke(null, new object[] { "And" }));
        Assert.AreEqual("||", formatLog.Invoke(null, new object[] { "Or" }));
        Assert.AreEqual("CustomLog", formatLog.Invoke(null, new object[] { "CustomLog" }));
    }
}
