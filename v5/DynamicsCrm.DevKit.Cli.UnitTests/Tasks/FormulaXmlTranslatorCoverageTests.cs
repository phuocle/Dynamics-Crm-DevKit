using DynamicsCrm.DevKit.Shared.Logic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tasks;

[TestClass]
[DoNotParallelize]
public class FormulaXmlTranslatorCoverageTests
{
    private const string RootNamespace = "Dev.DevKit.Entities";

    public class FormulaAttributeMetadata : AttributeMetadata
    {
        public string? FormulaDefinition { get; set; }

        public FormulaAttributeMetadata(AttributeTypeCode attributeType)
            : base(attributeType)
        {
        }
    }

    private static EntityMetadata CreateEntityMetadataWithAttribute(AttributeMetadata attr)
    {
        var metadata = new EntityMetadata
        {
            LogicalName = "unittest_formula",
            SchemaName = "UnitTestFormula",
            DisplayName = CreateLabel("Formula Entity")
        };

        SetProperty(metadata, nameof(EntityMetadata.MetadataId), Guid.NewGuid());
        SetProperty(metadata, nameof(EntityMetadata.ObjectTypeCode), 99999);
        SetProperty(metadata, nameof(EntityMetadata.PrimaryIdAttribute), "unittest_formulaid");
        SetProperty(metadata, nameof(EntityMetadata.PrimaryNameAttribute), "name");

        var pk = CreateUniqueIdentifierAttribute("unittest_formulaid", "Id", isPrimaryId: true);
        var name = CreateStringAttribute("name", "Name", isPrimaryName: true);

        SetProperty(metadata, nameof(EntityMetadata.Attributes), new AttributeMetadata[] { pk, name, attr });
        return metadata;
    }

    private static Label CreateLabel(string text, int languageCode = 1033)
    {
        var label = new Label();
        label.UserLocalizedLabel = new LocalizedLabel(text, languageCode);
        return label;
    }

    private static void SetProperty(object obj, string propertyName, object? value)
    {
        var prop = obj.GetType().GetProperty(propertyName, BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
        prop?.SetValue(obj, value);
    }

    private static UniqueIdentifierAttributeMetadata CreateUniqueIdentifierAttribute(string logicalName, string displayName, bool isPrimaryId = false)
    {
        var attr = new UniqueIdentifierAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName)
        };
        SetProperty(attr, nameof(AttributeMetadata.IsPrimaryId), isPrimaryId);
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Uniqueidentifier);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static StringAttributeMetadata CreateStringAttribute(string logicalName, string displayName, bool isPrimaryName = false)
    {
        var attr = new StringAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName)
        };
        SetProperty(attr, nameof(AttributeMetadata.IsPrimaryName), isPrimaryName);
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.String);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static FormulaAttributeMetadata CreateFormulaAttribute(string logicalName, string displayName, string formulaXml, int sourceType, AttributeTypeCode typeCode = AttributeTypeCode.String)
    {
        var attr = new FormulaAttributeMetadata(typeCode)
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            FormulaDefinition = formulaXml
        };
        SetProperty(attr, nameof(AttributeMetadata.SourceType), sourceType);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static string ToPascalCase(string input)
    {
        if (string.IsNullOrEmpty(input)) return input;
        var parts = input.Split('_');
        return string.Join("", parts.Select(p => p.Length == 0 ? "" : char.ToUpper(p[0]) + p.Substring(1)));
    }

    [TestMethod]
    public void GetCsCode_CalculatedField_TranslatesFormulaXml()
    {
        var xml = @"<?xml version=""1.0"" encoding=""utf-8""?>
<Activity xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml"">
  <GetEntityProperty Attribute=""revenue"" EntityName=""account"" Value=""[v1]"" />
  <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow"">
    <InArgument x:Key=""Result"">[c1]</InArgument>
    <InArgument x:Key=""Operand"">[v1]</InArgument>
    <InArgument x:Key=""ConditionOperator"">GreaterThan</InArgument>
    <InArgument x:Key=""Parameters"">New Object() { 100000 }</InArgument>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"">
    <InArgument x:Key=""Condition"">[c1]</InArgument>
    <ActivityReference x:Key=""Then"">
      <SetEntityProperty Value=""High Value"" />
    </ActivityReference>
  </ActivityReference>
</Activity>";

        var attr = CreateFormulaAttribute("calculated_str", "Calculated String", xml, 1);
        var metadata = CreateEntityMetadataWithAttribute(attr);

        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        Assert.IsNotNull(code);
        Assert.IsTrue(code.Contains("Calculated Field"), "Should include Calculated Field comment");
        Assert.IsTrue(code.Contains("account.revenue &gt; 100000"), "Should translate condition branch with escaped >");
    }

    [TestMethod]
    public void GetCsCode_RollupField_TranslatesRollupXml()
    {
        var xml = @"<?xml version=""1.0"" encoding=""utf-8""?>
<Activity xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml"">
  <SetAttributeValue DisplayName=""Account Opportunities"" Entity=""CreatedEntities(&quot;account#1#opportunity&quot;)"" />
  <Sequence DisplayName=""Target"">
    <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow"">
      <InArgument x:Key=""Result"">[cond1]</InArgument>
      <InArgument x:Key=""Operand"">[statecode]</InArgument>
      <InArgument x:Key=""ConditionOperator"">Equal</InArgument>
      <InArgument x:Key=""Parameters"">New Object() { 0 }</InArgument>
    </ActivityReference>
  </Sequence>
  <Sequence DisplayName=""Aggregate"">
    <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow"">
      <InArgument x:Key=""ExpressionOperator"">AVG</InArgument>
      <InArgument x:Key=""Parameters"">New Object() { estimatedvalue }</InArgument>
    </ActivityReference>
  </Sequence>
</Activity>";

        var attr = CreateFormulaAttribute("rollup_amount", "Rollup Amount", xml, 2, AttributeTypeCode.Decimal);
        var metadata = CreateEntityMetadataWithAttribute(attr);

        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        Assert.IsNotNull(code);
        Assert.IsTrue(code.Contains("Rollup Field"), "Should include Rollup Field comment");
        Assert.IsTrue(code.Contains("AVERAGE(estimatedvalue)"), "Should translate AVG to AVERAGE");
    }

    [TestMethod]
    public void GetCsCode_PowerFxField_FormatsPowerFxExpression()
    {
        var powerFx = @"Sum(Filter(Accounts, statecode = 0 && revenue >= 1000 && name <> ""Test & Demo""), revenue)";
        var attr = CreateFormulaAttribute("powerfx_col", "PowerFx Column", powerFx, 3);
        var metadata = CreateEntityMetadataWithAttribute(attr);

        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        Assert.IsNotNull(code);
        Assert.IsTrue(code.Contains("Power-Fx Field"), "Should include Power-Fx Field comment");
    }

    [TestMethod]
    public void GetCsCode_CalculatedField_WithLogicalConditionsAndEvaluations()
    {
        var xml = @"<?xml version=""1.0"" encoding=""utf-8""?>
<Activity xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml"">
  <GetEntityProperty Attribute=""statuscode"" EntityName=""lead"" Value=""[v1]"" />
  <GetEntityProperty Attribute=""rating"" Value=""[v2]"" />
  <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow"">
    <InArgument x:Key=""Result"">[c1]</InArgument>
    <InArgument x:Key=""Operand"">[v1]</InArgument>
    <InArgument x:Key=""ConditionOperator"">NotEqual</InArgument>
    <InArgument x:Key=""Parameters"">New Object() { 1 }</InArgument>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.Workflow.Activities.EvaluateCondition, Microsoft.Crm.Workflow"">
    <InArgument x:Key=""Result"">[c2]</InArgument>
    <InArgument x:Key=""Operand"">[v2]</InArgument>
    <InArgument x:Key=""ConditionOperator"">Null</InArgument>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.Workflow.Activities.EvaluateLogicalCondition, Microsoft.Crm.Workflow"">
    <InArgument x:Key=""Result"">[c3]</InArgument>
    <InArgument x:Key=""LeftOperand"">[c1]</InArgument>
    <InArgument x:Key=""RightOperand"">[c2]</InArgument>
    <InArgument x:Key=""LogicalOperator"">Or</InArgument>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.Workflow.Activities.EvaluateExpression, Microsoft.Crm.Workflow"">
    <InArgument x:Key=""Result"">[r1]</InArgument>
    <InArgument x:Key=""ExpressionOperator"">CreateCrmType</InArgument>
    <InArgument x:Key=""Parameters"">WorkflowPropertyType.String, ""Default Result""</InArgument>
  </ActivityReference>
  <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.Workflow.Activities.ConditionBranch, Microsoft.Crm.Workflow"">
    <InArgument x:Key=""Condition"">true</InArgument>
    <ActivityReference x:Key=""Then"">
      <SetEntityProperty Value=""[r1]"" />
    </ActivityReference>
  </ActivityReference>
</Activity>";

        var attr = CreateFormulaAttribute("complex_calc", "Complex Calc", xml, 1);
        var metadata = CreateEntityMetadataWithAttribute(attr);

        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        Assert.IsNotNull(code);
        Assert.IsTrue(code.Contains("else return &quot;Default Result&quot;;"), "Should translate true condition branch to else return with escaped quotes");
    }

    [TestMethod]
    public void GetCsCode_InvalidFormulaXml_ReturnsFallbackMessage()
    {
        var attr = CreateFormulaAttribute("invalid_xml", "Invalid Xml", "<?xml><InvalidTag></Activity>", 1);
        var metadata = CreateEntityMetadataWithAttribute(attr);

        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        Assert.IsNotNull(code);
        Assert.IsTrue(code.Contains("Formula XML could not be translated"));
    }
}
