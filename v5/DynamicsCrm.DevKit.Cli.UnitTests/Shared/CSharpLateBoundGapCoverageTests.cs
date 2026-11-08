using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using static DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure.TestMetadata;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// CSharpLateBound coverage for the remaining gaps: metadata fetched through
/// the service when Attributes is null, partial access flags (Create: No /
/// Read: No), alternate-key comments, global choice comments, lookup
/// relationship comments (single and multiple), image MaxSizeInKB and
/// CanStoreFullImage, money precision without PrecisionSource, formula
/// definition handling for calculated fields (normalized), Power-Fx fields
/// (escaped double quotes), a FormulaDefinition property getter that throws,
/// and rollup formula XML (SetAttributeValue link, EvaluateExpression value
/// map, Aggregate skipping CreateCrmType, non-string CreateCrmType values).
///
/// Not covered (unreachable without product change): the default throw in
/// DeclareType / GetSet / GetGet — IsFieldOk only admits AttributeType values
/// every switch already handles, so no attribute can reach those arms.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class CSharpLateBoundGapCoverageTests
{
    private const string RootNamespace = "Dev.DevKit.CsGap";
    private const string Logical = "cs_gap_ent";

    [TestInitialize]
    public void Setup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>();
    }

    [TestCleanup]
    public void Cleanup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>();
    }

    private sealed class ThrowingFormulaAttribute : AttributeMetadata
    {
        public string FormulaDefinition => throw new InvalidOperationException("FormulaDefinition getter exploded");
    }

    [TestMethod]
    public void GetCsCode_NullAttributes_FetchesMetadataViaService()
    {
        var meta = Entity(Logical, "Cs Gap Ent");
        Set(meta, nameof(EntityMetadata.Attributes), null);

        var fake = new FakeSdkClient();
        fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = Entity(Logical, "Cs Gap Ent", String("name", "Name")) }
            },
            _ => throw new InvalidOperationException($"Unexpected request {request.RequestName}")
        };

        try
        {
            var code = CSharpLateBound.GetCsCode(fake.Client, meta, RootNamespace);

            Assert.IsNotNull(code);
            StringAssert.Contains(code, "public string Name", "attribute list comes from the fetched metadata");
            StringAssert.Contains(code, $"EntityLogicalName = \"{Logical}\"");
        }
        finally
        {
            fake.Dispose();
        }
    }

    [TestMethod]
    public void GetCsCode_PartialAccessFlags_AlternateKey_AndGlobalChoice()
    {
        var createNo = String("str_create_no", "Create No");
        Set(createNo, nameof(AttributeMetadata.IsValidForCreate), (bool?)false);
        Set(createNo, nameof(AttributeMetadata.IsValidForUpdate), (bool?)true);

        var updateNo = String("str_update_no", "Update No");
        Set(updateNo, nameof(AttributeMetadata.IsValidForCreate), (bool?)true);
        Set(updateNo, nameof(AttributeMetadata.IsValidForUpdate), (bool?)false);

        var readNo = String("str_read_no", "Read No");
        Set(readNo, nameof(AttributeMetadata.IsValidForRead), (bool?)false);

        var globalChoice = Picklist("global_choice", "Global Choice", (1, "Low"), (2, "High"));
        globalChoice.OptionSet.IsGlobal = true;
        globalChoice.OptionSet.Name = "gbl_choice";

        var meta = Entity(Logical, "Cs Gap Ent",
            String("name", "Name"),
            createNo,
            updateNo,
            readNo,
            globalChoice);
        var key = new EntityKeyMetadata();
        Set(key, nameof(EntityKeyMetadata.SchemaName), "key_create_no");
        Set(key, nameof(EntityKeyMetadata.KeyAttributes), new[] { "str_create_no" });
        Set(meta, nameof(EntityMetadata.Keys), new[] { key });

        var code = CSharpLateBound.GetCsCode(null, meta, RootNamespace);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "<strong>Access</strong>: Create: No", "create-disabled attribute reports Create: No");
        StringAssert.Contains(code, "<strong>Access</strong>: Update: No", "update-disabled attribute reports Update: No");
        StringAssert.Contains(code, "<strong>Access</strong>: Read: No", "read-disabled attribute reports Read: No");
        StringAssert.Contains(code, "<strong>Alternate Key</strong>: <c>key_create_no</c>", "attribute in an entity key reports the alternate key");
        StringAssert.Contains(code, "<strong>Global Choice Logical Name</strong>: <c>gbl_choice</c>", "global option set reports its logical name");
    }

    [TestMethod]
    public void GetCsCode_LookupRelationshipComments_SingleAndMultiple()
    {
        var meta = Entity(Logical, "Cs Gap Ent",
            String("name", "Name"),
            Lookup("primarycontactid", "Primary Contact", "contact"),
            Lookup("customerid", "Customer", "account", "contact"));
        Set(meta, nameof(EntityMetadata.ManyToOneRelationships), new OneToManyRelationshipMetadata[]
        {
            Rel("primarycontactid", "contact", "new_primary_contact"),
            Rel("customerid", "account", "new_customer_account"),
            Rel("customerid", "contact", "new_customer_contact")
        });

        var code = CSharpLateBound.GetCsCode(null, meta, RootNamespace);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "<strong>Relationship</strong>: <c>new_primary_contact</c>",
            "lookup with exactly one relationship gets the singular Relationship comment");
        StringAssert.Contains(code, "<strong>Relationships</strong>: <c>new_customer_account</c>, <c>new_customer_contact</c>",
            "lookup with multiple relationships gets the plural Relationships comment");
    }

    private static OneToManyRelationshipMetadata Rel(string referencingAttribute, string referencedEntity, string schemaName)
    {
        var rel = new OneToManyRelationshipMetadata
        {
            ReferencingAttribute = referencingAttribute,
            ReferencedEntity = referencedEntity
        };
        Set(rel, nameof(OneToManyRelationshipMetadata.SchemaName), schemaName);
        return rel;
    }

    [TestMethod]
    public void GetCsCode_Image_MaxSizeAndCanStoreFullImage()
    {
        var image = new ImageAttributeMetadata
        {
            LogicalName = "new_photo",
            SchemaName = "New_Photo",
            MaxSizeInKB = 8192,
            CanStoreFullImage = true
        };
        Set(image, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Virtual);
        var meta = Entity(Logical, "Cs Gap Ent", String("name", "Name"), image);

        var code = CSharpLateBound.GetCsCode(null, meta, RootNamespace);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "<strong>MaxSizeInKB</strong>: 8,192 KB", "image MaxSizeInKB is rendered with thousands separators");
        StringAssert.Contains(code, "<strong>CanStoreFullImage</strong>: Yes", "image CanStoreFullImage is rendered");
    }

    [TestMethod]
    public void GetCsCode_MoneyPrecision_WithoutPrecisionSource()
    {
        // TestMetadata.Money sets Precision but leaves PrecisionSource null.
        var meta = Entity(Logical, "Cs Gap Ent", String("name", "Name"), Money("amount_plain", "Amount Plain"));

        var code = CSharpLateBound.GetCsCode(null, meta, RootNamespace);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "<strong>Currency</strong> - <strong>Precision</strong>: 2",
            "money attribute without PrecisionSource falls back to the Precision value");
    }

    [TestMethod]
    public void GetCsCode_CalculatedField_PlainFormula_IsNormalized()
    {
        var calc = String("calc_plain", "Calc Plain");
        Set(calc, nameof(AttributeMetadata.SourceType), (int?)1);
        calc.FormulaDefinition = "Trim(  Text ( ThisRecord.Name ) )\r\n  with   spaces";

        var meta = Entity(Logical, "Cs Gap Ent", String("name", "Name"), calc);

        var code = CSharpLateBound.GetCsCode(null, meta, RootNamespace);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "<strong>Definition</strong>:", "calculated field renders a Definition block");
        StringAssert.Contains(code, "Trim( Text ( ThisRecord.Name ) ) with spaces",
            "non-XML calculated formula is whitespace-normalized");
    }

    [TestMethod]
    public void GetCsCode_FormulaDefinition_PropertyThrows_ReturnsEmpty()
    {
        var throwing = new ThrowingFormulaAttribute
        {
            LogicalName = "throwing_field",
            SchemaName = "ThrowingField",
            DisplayName = Lbl("Throwing Field")
        };
        Set(throwing, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.String);
        Set(throwing, nameof(AttributeMetadata.SourceType), (int?)1);

        var meta = Entity(Logical, "Cs Gap Ent", String("name", "Name"), throwing);

        var code = CSharpLateBound.GetCsCode(null, meta, RootNamespace);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "public string ThrowingField", "generation survives a FormulaDefinition getter that throws");
        Assert.IsFalse(code.Contains("<code>"), "the throwing attribute contributes no Definition block");
        Assert.IsFalse(code.Contains("FormulaDefinition getter exploded"));
    }

    [TestMethod]
    public void GetCsCode_PowerFxFormula_EscapedDoubleQuotes()
    {
        var powerFx = String("powerfx_quotes", "PowerFx Quotes");
        Set(powerFx, nameof(AttributeMetadata.SourceType), (int?)3);
        powerFx.FormulaDefinition = "If(ThisRecord.new_x = \"say \"\"hi\"\" now\" && ThisRecord.new_y > 1, \"one\", \"two\")";

        var meta = Entity(Logical, "Cs Gap Ent", String("name", "Name"), powerFx);

        var code = CSharpLateBound.GetCsCode(null, meta, RootNamespace);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "<strong>Definition</strong>:", "Power-Fx field renders a Definition block");
        StringAssert.Contains(code, "say", "escaped quotes inside the Power-Fx string survive formatting");
    }

    [TestMethod]
    public void GetCsCode_RollupXml_AggregateSum_BareEntityLink_AndCrmTypeValue()
    {
        var rollupSum = new DecimalAttributeMetadata
        {
            LogicalName = "rollup_sum",
            SchemaName = "RollupSum",
            DisplayName = Lbl("Rollup Sum"),
            Precision = 2
        };
        Set(rollupSum, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Decimal);
        Set(rollupSum, nameof(AttributeMetadata.SourceType), (int?)2);
        rollupSum.FormulaDefinition = RollupXml("sum_rollup_link", "new_parent#new_childlook#account", withSumExpression: true);

        var rollupBare = new DecimalAttributeMetadata
        {
            LogicalName = "rollup_bare",
            SchemaName = "RollupBare",
            DisplayName = Lbl("Rollup Bare"),
            Precision = 2
        };
        Set(rollupBare, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Decimal);
        Set(rollupBare, nameof(AttributeMetadata.SourceType), (int?)2);
        rollupBare.FormulaDefinition = RollupXml("bare_rollup_link", "account", withSumExpression: false);

        var meta = Entity(Logical, "Cs Gap Ent", String("name", "Name"), rollupSum, rollupBare);

        var code = CSharpLateBound.GetCsCode(null, meta, RootNamespace);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "cs_gap_ent -&gt; account via sum_rollup_link",
            "rollup link with a 3-part entity reference is rendered (xml-escaped arrow)");
        StringAssert.Contains(code, "Aggregate: SUM(100)",
            "aggregate expression is translated through the value map (CreateCrmType Decimal value feeds Sum)");
        StringAssert.Contains(code, "Link: bare_rollup_link",
            "rollup link without a 3-part entity reference falls back to the display name");
        var firstAggregate = code.IndexOf("Aggregate: SUM(100)");
        Assert.IsTrue(firstAggregate > 0);
        Assert.AreEqual(-1, code.IndexOf("Aggregate: SUM(100)", firstAggregate + 1),
            "the bare rollup produces no Aggregate line (its Aggregate sequence only contains CreateCrmType)");
    }

    private static string RollupXml(string linkDisplayName, string entityRef, bool withSumExpression)
    {
        var sumActivity = withSumExpression
            ? @"<ActivityReference AssemblyQualifiedName=""Microsoft.Crm.WorkflowActivities.EvaluateExpression, Microsoft.Crm, Version=9.0.0.0"" x:Key=""act_sum"">
                  <InArgument x:Key=""ExpressionOperator"">Sum</InArgument>
                  <InArgument x:Key=""Parameters"">[New Object() { crmtype_1 }]</InArgument>
                  <InArgument x:Key=""Result"">[expr_sum]</InArgument>
                </ActivityReference>"
            : "";
        return $@"<Activity xmlns:x=""http://schemas.microsoft.com/winfx/2006/xaml"">
          <Sequence DisplayName=""RollupFlow"">
            <SetAttributeValue DisplayName=""{linkDisplayName}"" Entity=""{entityRef}"">
              <Sequence DisplayName=""Aggregate"">
                <ActivityReference AssemblyQualifiedName=""Microsoft.Crm.WorkflowActivities.EvaluateExpression, Microsoft.Crm, Version=9.0.0.0"" x:Key=""act_crmtype"">
                  <InArgument x:Key=""ExpressionOperator"">CreateCrmType</InArgument>
                  <InArgument x:Key=""Parameters"">[New Object() {{ New Object() {{ WorkflowPropertyType.Decimal, ""100"" }} }}]</InArgument>
                  <InArgument x:Key=""Result"">[crmtype_1]</InArgument>
                </ActivityReference>
                {sumActivity}
              </Sequence>
            </SetAttributeValue>
          </Sequence>
        </Activity>";
    }
}
