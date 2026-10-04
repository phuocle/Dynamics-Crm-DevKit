using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Linq;
using System.Text.Json;
using ModelContextProtocol.Protocol;

using CliManageColumnTool = DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageColumnTool;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageColumn;

/// <summary>
/// Autonumber support in manage_column: pattern validation, create with
/// AutoNumberFormat, SetAutoNumberSeed execution (create + seed-only update),
/// clear_auto_number, and every documented error branch.
/// </summary>
[TestClass]
public sealed class ManageColumnAutoNumberTests
{
    private IXrmFakedContext _context = null!;
    private FakeMetadataExecutors _metadata = null!;

    [TestInitialize]
    public void Setup()
    {
        _metadata = new FakeMetadataExecutors();
        _context = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .AddFakeMessageExecutor(_metadata)
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();

        _context.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["languagecode"] = 1033
        });

        var pubId = Guid.NewGuid();
        _context.GetOrganizationService().Create(new Entity("publisher", pubId)
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10000
        });
        _context.GetOrganizationService().Create(new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = "DevKit",
            ["friendlyname"] = "DevKit Solution",
            ["publisherid"] = new EntityReference("publisher", pubId)
        });

        _metadata.Entities.Add(EntityMeta("account", "Account",
            StringAttr("devkit_code", "Code", pattern: null, formatName: null),
            StringAttr("devkit_email", "Email", pattern: null, formatName: "Email"),
            StringAttr("devkit_case", "Case Number", pattern: "CASE-{SEQNUM:4}", formatName: null),
            MemoAttr("description", "Description"),
            IntAttr("devkit_count", "Count")));
    }

    // ──────────────────────────────────────────────
    // helpers
    // ──────────────────────────────────────────────

    private CliManageColumnTool NewTool(bool dryRun = false, bool blocked = false) =>
        new(new MetadataOrgService(_context.GetOrganizationService(), _metadata),
            new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(blocked), null!);

    private static EntityMetadata EntityMeta(string logical, string display, params AttributeMetadata[] attrs)
    {
        var meta = new EntityMetadata
        {
            LogicalName = logical,
            SchemaName = logical,
            DisplayName = Labeled(display),
            MetadataId = Guid.NewGuid()
        };
        typeof(EntityMetadata).GetProperty("Attributes")!.SetValue(meta, attrs);
        return meta;
    }

    private static StringAttributeMetadata StringAttr(string logical, string display, string pattern, string formatName)
    {
        StringFormatName resolvedFormat;
        if (formatName == null) resolvedFormat = StringFormatName.Text;
        else if (formatName == "Email") resolvedFormat = StringFormatName.Email;
        else
        {
            // StringFormatName has no public value constructor in this SDK build —
            // same reflection pattern as Lib/CSharpLateBoundTest.cs.
            resolvedFormat = new StringFormatName();
            typeof(StringFormatName).GetProperty(nameof(StringFormatName.Value))!
                .SetValue(resolvedFormat, formatName);
        }
        var attr = new StringAttributeMetadata
        {
            LogicalName = logical,
            SchemaName = logical,
            DisplayName = Labeled(display),
            MaxLength = 100,
            FormatName = resolvedFormat
        };
        if (pattern != null) attr.AutoNumberFormat = pattern;
        attr.MetadataId = Guid.NewGuid();
        return attr;
    }

    private static MemoAttributeMetadata MemoAttr(string logical, string display) => new()
    {
        LogicalName = logical,
        SchemaName = logical,
        DisplayName = Labeled(display),
        MetadataId = Guid.NewGuid()
    };

    private static IntegerAttributeMetadata IntAttr(string logical, string display) => new()
    {
        LogicalName = logical,
        SchemaName = logical,
        DisplayName = Labeled(display),
        MetadataId = Guid.NewGuid()
    };

    private static Label Labeled(string text) => new(text, 1033)
    {
        UserLocalizedLabel = new LocalizedLabel(text, 1033)
    };

    private static JsonElement Structured(CallToolResult result) =>
        JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;

    // ──────────────────────────────────────────────
    // create
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_DryRun_PreviewShowsPatternAndSeed_NoDataverseCall()
    {
        var result = NewTool(dryRun: true).manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Ticket",
            solution_name: "DevKit",
            auto_number_format: "TKT-{SEQNUM:5}-{RANDSTRING:3}", auto_number_seed: 10000);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Would CREATE");
        StringAssert.Contains(result.GetText(), "TKT-{SEQNUM:5}-{RANDSTRING:3}");
        StringAssert.Contains(result.GetText(), "SetAutoNumberSeed=10000");
        var structured = Structured(result);
        Assert.AreEqual("TKT-{SEQNUM:5}-{RANDSTRING:3}", structured.GetProperty("extra").GetProperty("autoNumberFormat").GetString());
        Assert.AreEqual(0, _metadata.Created.Count);
        Assert.AreEqual(0, _metadata.Seeds.Count);
    }

    [TestMethod]
    public void Create_WithPattern_RunsEndToEnd()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Ticket",
            solution_name: "DevKit", auto_number_format: "TKT-{SEQNUM:5}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var attr = _metadata.Created.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual("TKT-{SEQNUM:5}", attr.AutoNumberFormat);
        Assert.AreEqual<StringFormatName?>(StringFormatName.Text, attr.FormatName);
        var structured = Structured(result);
        Assert.AreEqual("TKT-{SEQNUM:5}", structured.GetProperty("extra").GetProperty("autoNumberFormat").GetString());
    }

    [TestMethod]
    public void Create_WithSeed_ExecutesSetAutoNumberSeedOnceWithActualLogicalName()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Ticket",
            solution_name: "DevKit",
            auto_number_format: "TKT-{SEQNUM:5}", auto_number_seed: 10000);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var attr = _metadata.Created.OfType<StringAttributeMetadata>().Single();
        var seed = _metadata.Seeds.Single();
        Assert.AreEqual("account", seed.EntityName);
        Assert.AreEqual(attr.LogicalName, seed.AttributeName);
        Assert.AreEqual(10000L, seed.Value);
    }

    [TestMethod]
    public void Create_SeedFailure_ReturnsSuccessWithWarning()
    {
        _metadata.FailSeed = true;
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Ticket",
            solution_name: "DevKit",
            auto_number_format: "TKT-{SEQNUM:5}", auto_number_seed: 10000);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var structured = Structured(result);
        var warnings = structured.GetProperty("warnings");
        Assert.AreEqual(1, warnings.GetArrayLength());
        StringAssert.Contains(warnings[0].GetString()!, "SetAutoNumberSeed failed");
    }

    [TestMethod]
    public void Create_DryRun_PatternWithoutSeqNum_PreviewCarriesWarning()
    {
        var result = NewTool(dryRun: true).manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Rand",
            solution_name: "DevKit", auto_number_format: "INV-{RANDSTRING:6}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var structured = Structured(result);
        Assert.AreEqual(1, structured.GetProperty("warnings").GetArrayLength());
        Assert.AreEqual(0, _metadata.Created.Count);
    }

    [TestMethod]
    public void Create_PatternWithoutSeqNum_ReturnsSuccessWithWarning()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Rand",
            solution_name: "DevKit", auto_number_format: "INV-{RANDSTRING:6}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var structured = Structured(result);
        Assert.AreEqual(1, structured.GetProperty("warnings").GetArrayLength());
    }

    [TestMethod]
    public void Create_NonStringType_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "memo", display_name: "Dev Bad",
            solution_name: "DevKit", auto_number_format: "TKT-{SEQNUM:5}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "only supported for attribute_type 'string'");
    }

    [TestMethod]
    public void Create_FormatNotText_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Bad",
            solution_name: "DevKit", format: "Email", auto_number_format: "TKT-{SEQNUM:5}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "require format 'Text'");
    }

    [TestMethod]
    public void Create_InvalidPattern_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Bad",
            solution_name: "DevKit", auto_number_format: "{RANDSTRING:7}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "1-6");
    }

    [TestMethod]
    public void Create_MaxLengthTooSmall_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Bad",
            solution_name: "DevKit", max_length: 5, auto_number_format: "TKT-{SEQNUM:5}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "smaller than the pattern's minimum output length");
    }

    [TestMethod]
    public void Create_MaxLengthTight_ReturnsSuccessWithWarning()
    {
        // "TKT-{SEQNUM:5}" minimum output = 4 literal + 5 digits = 9.
        // 12 is above the minimum but below minimum + 5 → warning, not error.
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Tight",
            solution_name: "DevKit", max_length: 12, auto_number_format: "TKT-{SEQNUM:5}");
        Assert.IsFalse(result.IsError == true, result.GetText());
        var structured = Structured(result);
        Assert.AreEqual(1, structured.GetProperty("warnings").GetArrayLength());
        StringAssert.Contains(structured.GetProperty("warnings")[0].GetString()!, "leave room for the sequence to grow");
    }

    [TestMethod]
    public void Create_SeedWithoutFormat_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Bad",
            solution_name: "DevKit", auto_number_seed: 100);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "requires auto_number_format");
    }

    [TestMethod]
    public void Create_ClearAutoNumber_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Bad",
            solution_name: "DevKit", clear_auto_number: true);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "UPDATE-only");
    }

    [TestMethod]
    public void Create_PatternWithFormula_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Bad",
            solution_name: "DevKit", formula_source_type: "powerfx",
            auto_number_format: "TKT-{SEQNUM:5}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "cannot be combined with formula_definition/formula_source_type");
    }

    [TestMethod]
    public void Create_SeedBelowOne_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", attribute_type: "string", display_name: "Dev Bad",
            solution_name: "DevKit", auto_number_format: "TKT-{SEQNUM:5}", auto_number_seed: 0);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "must be >= 1");
    }

    // ──────────────────────────────────────────────
    // update
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_ConvertPlainTextToAutonumber_RecordsChangeAndSendsUpdate()
    {
        var result = NewTool().manage_column(
            entity_name: "account", logical_name: "devkit_code",
            auto_number_format: "CODE-{SEQNUM:6}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var attr = _metadata.Updated.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual("CODE-{SEQNUM:6}", attr.AutoNumberFormat);
        var structured = Structured(result);
        var change = structured.GetProperty("changes").GetProperty("autoNumberFormat");
        Assert.AreEqual("", change.GetProperty("oldValue").GetString());
        Assert.AreEqual("CODE-{SEQNUM:6}", change.GetProperty("newValue").GetString());
    }

    [TestMethod]
    public void Update_ChangePattern_RecordsOldAndNew()
    {
        var result = NewTool().manage_column(
            entity_name: "account", logical_name: "devkit_case",
            auto_number_format: "CASE-{SEQNUM:5}-{RANDSTRING:4}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var attr = _metadata.Updated.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual("CASE-{SEQNUM:5}-{RANDSTRING:4}", attr.AutoNumberFormat);
        var change = Structured(result).GetProperty("changes").GetProperty("autoNumberFormat");
        Assert.AreEqual("CASE-{SEQNUM:4}", change.GetProperty("oldValue").GetString());
    }

    [TestMethod]
    public void Update_SamePattern_NoAutoNumberChange()
    {
        var result = NewTool().manage_column(
            entity_name: "account", logical_name: "devkit_case",
            description: "case number",
            auto_number_format: "CASE-{SEQNUM:4}");

        Assert.IsFalse(result.IsError == true, result.GetText());
        var structured = Structured(result);
        Assert.IsFalse(structured.TryGetProperty("changes", out var changes) &&
                       changes.TryGetProperty("autoNumberFormat", out _));
    }

    [TestMethod]
    public void Update_ClearAutoNumber_RemovesPattern()
    {
        var result = NewTool().manage_column(
            entity_name: "account", logical_name: "devkit_case", clear_auto_number: true);

        Assert.IsFalse(result.IsError == true, result.GetText());
        var attr = _metadata.Updated.OfType<StringAttributeMetadata>().Single();
        Assert.AreEqual("", attr.AutoNumberFormat);
        var change = Structured(result).GetProperty("changes").GetProperty("autoNumberFormat");
        Assert.AreEqual("CASE-{SEQNUM:4}", change.GetProperty("oldValue").GetString());
        Assert.AreEqual("", change.GetProperty("newValue").GetString());
    }

    [TestMethod]
    public void Update_SeedOnly_SucceedsWithoutUpdateAttributeRequest()
    {
        var result = NewTool().manage_column(
            entity_name: "account", logical_name: "devkit_case", auto_number_seed: 5000);

        Assert.IsFalse(result.IsError == true, result.GetText());
        Assert.AreEqual(0, _metadata.Updated.Count);
        var seed = _metadata.Seeds.Single();
        Assert.AreEqual(5000L, seed.Value);
        Assert.AreEqual("devkit_case", seed.AttributeName);
        var change = Structured(result).GetProperty("changes").GetProperty("autoNumberSeed");
        Assert.AreEqual("5000", change.GetProperty("newValue").GetString());
    }

    [TestMethod]
    public void Update_SeedOnly_DryRun_PlannedWithoutExecute()
    {
        var result = NewTool(dryRun: true).manage_column(
            entity_name: "account", logical_name: "devkit_case", auto_number_seed: 5000);

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "set autonumber seed 5000");
        Assert.AreEqual(0, _metadata.Seeds.Count);
        Assert.AreEqual(0, _metadata.Updated.Count);
    }

    [TestMethod]
    public void Update_OnMemo_ReturnsErrorNamingActualType()
    {
        var result = NewTool().manage_column(
            entity_name: "account", logical_name: "description",
            auto_number_format: "MEMO-{SEQNUM:3}");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Memo");
    }

    [TestMethod]
    public void Update_OnInteger_ReturnsErrorNamingActualType()
    {
        var result = NewTool().manage_column(
            entity_name: "account", logical_name: "devkit_count",
            auto_number_format: "NUM-{SEQNUM:3}");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Integer");
    }

    [TestMethod]
    public void Update_OnEmailFormatString_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", logical_name: "devkit_email",
            auto_number_format: "MAIL-{SEQNUM:3}");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "require format 'Text'");
    }

    [TestMethod]
    public void Update_SeedOnNonAutonumberColumn_ReturnsError()
    {
        var result = NewTool().manage_column(
            entity_name: "account", logical_name: "devkit_code", auto_number_seed: 5000);

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "would have none");
    }

    [TestMethod]
    public void Update_BlockedMutation_SeedCallIsBlocked()
    {
        var result = NewTool(blocked: true).manage_column(
            entity_name: "account", logical_name: "devkit_case", auto_number_seed: 5000);

        Assert.IsTrue(result.IsError == true);
        Assert.AreEqual(0, _metadata.Seeds.Count);
    }
}
