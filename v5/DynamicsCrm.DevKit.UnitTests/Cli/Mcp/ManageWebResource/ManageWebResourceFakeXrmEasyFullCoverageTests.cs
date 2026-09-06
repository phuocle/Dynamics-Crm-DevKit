using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageWebResource;

/// <summary>
/// FakeXrmEasy-driven coverage for ManageWebResourceTool (HandleList/Detail/Create/
/// Update/Delete plus ResolveWebResourceIdInput, DisplayNameFirstResolver web resource
/// lookups and SolutionResolverHelper publisher-prefix resolution).
/// Mutations (Create/Update/Delete/AddSolutionComponent/PublishXml) hit FakeXrmEasy
/// through the WebResourceOrgService decorator which also counts calls; the list
/// FetchExpression is hand-evaluated by the decorator to avoid depending on
/// FakeXrmEasy's FetchXml parser (same interception pattern as ManageReport/
/// ManageCommand tests). Web resource source files are written under a temp
/// Environment.CurrentDirectory and removed in TestCleanup.
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class ManageWebResourceFakeXrmEasyFullCoverageTests
{
    private static readonly string OrigCwd = Environment.CurrentDirectory;
    private string _tempDir = null!;

    private IXrmFakedContext _ctx = null!;
    private WebResourceOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit-webresource-tests-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
        Environment.CurrentDirectory = _tempDir;

        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        _ctx.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid()) { ["languagecode"] = 1033 });

        _service = new WebResourceOrgService(_ctx.GetOrganizationService());
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.CurrentDirectory = OrigCwd;
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private ManageWebResourceTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    private static string Text(CallToolResult r) => r.GetText();

    private string WriteSourceFile(string fileName, string content)
    {
        var path = Path.Combine(_tempDir, fileName);
        File.WriteAllText(path, content);
        return path;
    }

    private Guid SeedWebResource(string name, string displayName = "", int typeCode = 3,
        bool isManaged = false, bool? isCustomizable = null, string description = "",
        EntityReference? createdBy = null, EntityReference? modifiedBy = null)
    {
        var id = Guid.NewGuid();
        var row = new Entity("webresource", id)
        {
            ["webresourceid"] = id,
            ["name"] = name,
            ["displayname"] = string.IsNullOrWhiteSpace(displayName) ? name : displayName,
            ["webresourcetype"] = new OptionSetValue(typeCode),
            ["ismanaged"] = isManaged,
            ["modifiedon"] = new DateTime(2026, 9, 1, 10, 30, 0, DateTimeKind.Utc)
        };
        if (isCustomizable.HasValue) row["iscustomizable"] = new BooleanManagedProperty(isCustomizable.Value);
        if (!string.IsNullOrEmpty(description)) row["description"] = description;
        if (createdBy != null) row["createdby"] = createdBy;
        if (modifiedBy != null) row["modifiedby"] = modifiedBy;
        _ctx.GetOrganizationService().Create(row);
        return id;
    }

    private Guid SeedSolution(string uniqueName, string friendlyName, string prefix)
    {
        var publisherId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("publisher", publisherId)
        {
            ["customizationprefix"] = prefix,
            ["customizationoptionvalueprefix"] = 10000
        });
        var solutionId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("solution", solutionId)
        {
            ["solutionid"] = solutionId,
            ["uniquename"] = uniqueName,
            ["friendlyname"] = friendlyName,
            ["publisherid"] = new EntityReference("publisher", publisherId)
        });
        return solutionId;
    }

    private void AddComponentToSolution(Guid webResourceId, Guid solutionId)
    {
        _ctx.GetOrganizationService().Create(new Entity("solutioncomponent", Guid.NewGuid())
        {
            ["objectid"] = new EntityReference("webresource", webResourceId),
            ["solutionid"] = new EntityReference("solution", solutionId),
            ["componenttype"] = 61
        });
    }

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public void List_InvalidTypeFilter_ReturnsError()
    {
        var result = NewTool().manage_webresource("list", type_filter: "bogus");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid type_filter 'bogus'");
        StringAssert.Contains(Text(result), "Use: html, css, js");
    }

    [TestMethod]
    public void List_ZeroMaxRecords_ReturnsError()
    {
        var result = NewTool().manage_webresource("list", max_records: 0);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "max_records must be between 1 and 500");
    }

    [TestMethod]
    public void List_NoWebResources_ReturnsZero()
    {
        var result = NewTool().manage_webresource("list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "0 web resources found.");
    }

    [TestMethod]
    public void List_WithWebResources_ReturnsEntries()
    {
        SeedWebResource("v4_/bbb.js", displayName: "Bee Script");
        SeedWebResource("v4_/aaa.js", displayName: "Aye Script");
        var result = NewTool().manage_webresource("list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "2 web resources found.");
    }

    [TestMethod]
    public void List_NameFilter_MatchesDisplayNameOrName()
    {
        SeedWebResource("v4_/alpha.js", displayName: "Alpha Script");
        SeedWebResource("v4_/beta.js", displayName: "Beta Sheet");
        var result = NewTool().manage_webresource("list", name: "Alpha");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 web resource found.");
    }

    [TestMethod]
    public void List_TypeFilter_FiltersByWebResourceType()
    {
        SeedWebResource("v4_/a.js", typeCode: 3);
        SeedWebResource("v4_/b.css", typeCode: 2);
        var result = NewTool().manage_webresource("list", type_filter: "css");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 web resource found.");
    }

    [TestMethod]
    public void List_ExcludesManagedWebResources()
    {
        SeedWebResource("v4_/unmanaged.js");
        SeedWebResource("v4_/managed.js", isManaged: true);
        var result = NewTool().manage_webresource("list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 web resource found.");
    }

    [TestMethod]
    public void List_MaxRecordsAbove500_ClampsAndSucceeds()
    {
        SeedWebResource("v4_/one.js");
        SeedWebResource("v4_/two.js");
        var result = NewTool().manage_webresource("list", max_records: 1000);
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "2 web resources found.");
    }

    [TestMethod]
    public void List_UnknownSolution_ReturnsError()
    {
        var result = NewTool().manage_webresource("list", solution_name: "nosuchsolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "nosuchsolution' was not found by Display Name");
        StringAssert.Contains(Text(result), "Use get_solution_components to find valid solution names.");
    }

    [TestMethod]
    public void List_WithSolutionUniqueName_ReturnsOnlySolutionComponents()
    {
        var solutionId = SeedSolution("MySolution", "My Solution", "v4");
        var inSolution = SeedWebResource("v4_/in-solution.js", displayName: "In Solution");
        SeedWebResource("v4_/outside.js", displayName: "Outside");
        AddComponentToSolution(inSolution, solutionId);

        var result = NewTool().manage_webresource("list", solution_name: "MySolution");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 web resource found.");
    }

    [TestMethod]
    public void List_WithSolutionDisplayName_ResolvesAndJoins()
    {
        var solutionId = SeedSolution("MySolution", "My Solution", "v4");
        var first = SeedWebResource("v4_/first.js", displayName: "First");
        var second = SeedWebResource("v4_/second.js", displayName: "Second");
        AddComponentToSolution(first, solutionId);
        AddComponentToSolution(second, solutionId);

        var result = NewTool().manage_webresource("list", solution_name: "My Solution");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "2 web resources found.");
    }

    [TestMethod]
    public void List_WhenRetrieveThrows_ReturnsFriendlyError()
    {
        _service.FailList = true;
        var result = NewTool().manage_webresource("list");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "InvalidState");
        StringAssert.Contains(Text(result), "Simulated list failure");
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Detail_MissingId_ReturnsError()
    {
        var result = NewTool().manage_webresource("detail");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "web_resource_id is required for 'detail'");
    }

    [TestMethod]
    public void Detail_ByGuid_ReturnsEntry()
    {
        var id = SeedWebResource("v4_/rich.js", displayName: "Rich WR", typeCode: 3, description: "Rich description",
            createdBy: new EntityReference("systemuser", Guid.NewGuid()) { Name = "Creator" },
            modifiedBy: new EntityReference("systemuser", Guid.NewGuid()) { Name = "Editor" });
        var result = NewTool().manage_webresource("detail", web_resource_id: id.ToString());
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "Web resource 'v4_/rich.js'");
        StringAssert.Contains(Text(result), "type JS");
        StringAssert.Contains(Text(result), id.ToString());
    }

    [TestMethod]
    public void Detail_ByGuid_NotFound_ReturnsError()
    {
        var missingId = Guid.NewGuid();
        var result = NewTool().manage_webresource("detail", web_resource_id: missingId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Web resource '{missingId}' not found.");
        StringAssert.Contains(Text(result), "Use action='list' to find valid web resource IDs.");
    }

    [TestMethod]
    public void Detail_UnknownTypeCode_ShowsNumericType()
    {
        var id = SeedWebResource("v4_/odd.js", typeCode: 999);
        var result = NewTool().manage_webresource("detail", web_resource_id: id.ToString());
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "type 999");
    }

    [TestMethod]
    public void Detail_ByName_Resolves()
    {
        SeedWebResource("v4_/named.js", displayName: "Named Resource");
        var result = NewTool().manage_webresource("detail", web_resource_id: "Named Resource");
        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "Web resource 'v4_/named.js'");
    }

    [TestMethod]
    public void Detail_ByName_NotFound_ReturnsError()
    {
        SeedWebResource("v4_/present.js", displayName: "Present Resource");
        var result = NewTool().manage_webresource("detail", web_resource_id: "Ghost Resource");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "'Ghost Resource' was not found by Display Name");
        StringAssert.Contains(Text(result), "Use manage_webresource(action='list') to discover web resources.");
    }

    [TestMethod]
    public void Detail_ByName_Ambiguous_ReturnsError()
    {
        SeedWebResource("v4_/dup1.js", displayName: "Dup Script");
        SeedWebResource("v4_/dup2.js", displayName: "Dup Script");
        var result = NewTool().manage_webresource("detail", web_resource_id: "Dup Script");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple candidates match 'Dup Script' during display name search.");
    }

    // ──────────────────────────────────────────────
    // create
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_MissingName_ReturnsError()
    {
        var result = NewTool().manage_webresource("create", file_path: "ignored.js");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "name is required for 'create'");
    }

    [TestMethod]
    public void Create_MissingFilePath_ReturnsError()
    {
        var result = NewTool().manage_webresource("create", name: "v4_/x.js");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "file_path is required for 'create'");
    }

    [TestMethod]
    public void Create_MissingType_ReturnsError()
    {
        var src = WriteSourceFile("missing-type.js", "var x = 1;");
        var result = NewTool().manage_webresource("create", name: "v4_/x.js", file_path: src);
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "type is required for 'create'");
    }

    [TestMethod]
    public void Create_FileNotFound_ReturnsError()
    {
        var result = NewTool().manage_webresource("create", name: "v4_/x.js",
            file_path: Path.Combine(_tempDir, "ghost.js"), type: "js");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "File not found at path");
    }

    [TestMethod]
    public void Create_InvalidType_ReturnsError()
    {
        var src = WriteSourceFile("bad-type.js", "var x = 1;");
        var result = NewTool().manage_webresource("create", name: "v4_/x.js", file_path: src, type: "bogus");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid type 'bogus'");
    }

    [TestMethod]
    public void Create_MissingSolutionName_ReturnsError()
    {
        var src = WriteSourceFile("no-solution.js", "var x = 1;");
        var result = NewTool().manage_webresource("create", name: "v4_/x.js", file_path: src, type: "js");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "solution_name is required for 'create'");
    }

    [TestMethod]
    public void Create_UnknownSolution_ReturnsError()
    {
        var src = WriteSourceFile("unknown-solution.js", "var x = 1;");
        var result = NewTool().manage_webresource("create", name: "v4_/x.js", file_path: src, type: "js",
            solution_name: "nosuchsolution");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "nosuchsolution' was not found by Display Name");
        StringAssert.Contains(Text(result), "Use get_solution_components to find valid solution names.");
    }

    [TestMethod]
    public void Create_NameResolvesToExisting_ReturnsError()
    {
        SeedSolution("MySolution", "My Solution", "v4");
        SeedWebResource("v4_/exists.js", displayName: "Existing Script");
        var src = WriteSourceFile("dup.js", "var dup = 1;");

        var result = NewTool().manage_webresource("create", name: "v4_/exists.js", file_path: src, type: "js",
            solution_name: "MySolution");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "resolves to existing web resource 'v4_/exists.js'");
        StringAssert.Contains(Text(result), "Use action='update' to modify it.");
        Assert.AreEqual(0, _service.Creates);
    }

    [TestMethod]
    public void Create_DisplayNameResolvesToExisting_ReturnsError()
    {
        SeedSolution("MySolution", "My Solution", "v4");
        SeedWebResource("v4_/a.js", displayName: "My Script");
        var src = WriteSourceFile("b.js", "var b = 1;");

        var result = NewTool().manage_webresource("create", name: "v4_/new.js", display_name: "My Script",
            file_path: src, type: "js", solution_name: "MySolution");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Display Name 'My Script' resolves to existing web resource 'v4_/a.js'");
        StringAssert.Contains(Text(result), "Use action='update' to modify it.");
        Assert.AreEqual(0, _service.Creates);
    }

    [TestMethod]
    public void Create_AmbiguousDisplayName_ReturnsError()
    {
        SeedSolution("MySolution", "My Solution", "v4");
        SeedWebResource("v4_/dup1.js", displayName: "Dup Script");
        SeedWebResource("v4_/dup2.js", displayName: "Dup Script");
        var src = WriteSourceFile("amb.js", "var amb = 1;");

        var result = NewTool().manage_webresource("create", name: "v4_/new.js", display_name: "Dup Script",
            file_path: src, type: "js", solution_name: "MySolution");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple candidates match 'Dup Script' during display name search.");
        Assert.AreEqual(0, _service.Creates);
    }

    [TestMethod]
    public void Create_NameWithoutPrefix_SuggestsPrefixedName()
    {
        SeedSolution("MySolution", "My Solution", "v4");
        var src = WriteSourceFile("noprefix.js", "var np = 1;");

        var result = NewTool().manage_webresource("create", name: "noprefix.js", file_path: src, type: "js",
            solution_name: "MySolution");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "name 'noprefix.js' has no prefix");
        StringAssert.Contains(Text(result), "Rename it to 'v4_noprefix.js' to match solution 'MySolution' (publisher prefix: v4)");
        Assert.AreEqual(0, _service.Creates);
    }

    [TestMethod]
    public void Create_PrefixMismatch_SuggestsCorrectedName()
    {
        SeedSolution("MySolution", "My Solution", "v4");
        var src = WriteSourceFile("mismatch.js", "var mm = 1;");

        var result = NewTool().manage_webresource("create", name: "other_/x.js", file_path: src, type: "js",
            solution_name: "MySolution");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "PrefixMismatch: name 'other_/x.js' has prefix 'other'");
        StringAssert.Contains(Text(result), "publisher prefix is 'v4'");
        StringAssert.Contains(Text(result), "Re-call with name='v4_/x.js'");
        Assert.AreEqual(0, _service.Creates);
    }

    [TestMethod]
    public void Create_DryRun_NoMutation()
    {
        SeedSolution("MySolution", "My Solution", "v4");
        var src = WriteSourceFile("dry.js", "var dry = 1;");

        var result = NewTool(dryRun: true).manage_webresource("create", name: "v4_/dry.js", file_path: src,
            type: "js", solution_name: "MySolution");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), "Would CREATE web resource 'v4_/dry.js' (type: js) in solution 'MySolution'");
        Assert.AreEqual(0, _service.Creates);
        Assert.AreEqual(0, _service.AddsToSolution);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public void Create_Success_CreatesAddsToSolutionAndPublishes()
    {
        SeedSolution("MySolution", "My Solution", "v4");
        var src = WriteSourceFile("demo.js", "var demo = 1;");

        var result = NewTool().manage_webresource("create", name: "v4_/js/Demo.js", display_name: "Demo WR",
            description: "Demo description", file_path: src, type: "js", solution_name: "MySolution");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "Created web resource 'v4_/js/Demo.js'");
        StringAssert.Contains(Text(result), "type=JS");
        StringAssert.Contains(Text(result), "added to solution 'MySolution', published.");
        StringAssert.Contains(Text(result), _service.LastCreatedId.ToString());
        Assert.AreEqual(1, _service.Creates);
        Assert.AreEqual(1, _service.AddsToSolution);
        Assert.AreEqual(1, _service.Publishes);
    }

    [TestMethod]
    public void Create_Success_StoresNameContentAndDefaultsDisplayName()
    {
        SeedSolution("MySolution", "My Solution", "v4");
        var src = WriteSourceFile("bare.js", "var bare = 1;");
        var expectedContent = Convert.ToBase64String(File.ReadAllBytes(src));

        var result = NewTool().manage_webresource("create", name: "v4_/js/Bare.js", file_path: src, type: "js",
            solution_name: "MySolution");

        Assert.IsFalse(result.IsError == true, Text(result));
        var saved = _ctx.GetOrganizationService().Retrieve("webresource", _service.LastCreatedId, new ColumnSet(true));
        Assert.AreEqual("v4_/js/Bare.js", saved.GetAttributeValue<string>("name"));
        Assert.AreEqual("v4_/js/Bare.js", saved.GetAttributeValue<string>("displayname"));
        Assert.AreEqual(expectedContent, saved.GetAttributeValue<string>("content"));
        Assert.AreEqual(3, saved.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value);
        Assert.IsNull(saved.GetAttributeValue<string>("description"));
    }

    [TestMethod]
    public void Create_AddToSolutionFails_PublishesWithWarning()
    {
        SeedSolution("MySolution", "My Solution", "v4");
        _service.FailAddToSolution = true;
        var src = WriteSourceFile("warn.js", "var warn = 1;");

        var result = NewTool().manage_webresource("create", name: "v4_/js/Warn.js", file_path: src, type: "js",
            solution_name: "MySolution");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "Created web resource 'v4_/js/Warn.js'");
        StringAssert.Contains(Text(result), "Not added to solution 'MySolution' (see addToSolutionWarning). Published.");
        Assert.AreEqual(1, _service.Creates);
        Assert.AreEqual(1, _service.Publishes);
    }

    // ──────────────────────────────────────────────
    // update
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_MissingId_ReturnsError()
    {
        var result = NewTool().manage_webresource("update");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "web_resource_id is required for 'update'");
    }

    [TestMethod]
    public void Update_ByGuid_NotFound_ReturnsError()
    {
        var missingId = Guid.NewGuid();
        var result = NewTool().manage_webresource("update", web_resource_id: missingId.ToString(), description: "x");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Web resource '{missingId}' not found.");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public void Update_NoFields_ReturnsError()
    {
        SeedWebResource("v4_/nofields.js", displayName: "No Fields");
        var result = NewTool().manage_webresource("update", web_resource_id: "No Fields");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "No fields to update.");
        StringAssert.Contains(Text(result), "Provide at least one of: file_path, display_name, description.");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public void Update_ManagedNotCustomizable_ReturnsError()
    {
        SeedWebResource("v4_/locked.js", displayName: "Locked WR", isManaged: true, isCustomizable: false);
        var result = NewTool().manage_webresource("update", web_resource_id: "Locked WR", description: "x");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Cannot update web resource 'Locked WR' — it is managed and not customizable.");
        StringAssert.Contains(Text(result), "Only unmanaged web resources can be updated");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public void Update_FileNotFound_ReturnsError()
    {
        SeedWebResource("v4_/ghostfile.js", displayName: "Ghost File");
        var result = NewTool().manage_webresource("update", web_resource_id: "Ghost File",
            file_path: Path.Combine(_tempDir, "ghost.js"));
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "File not found at path");
        Assert.AreEqual(0, _service.Updates);
    }

    [TestMethod]
    public void Update_DryRun_NoMutation()
    {
        var id = SeedWebResource("v4_/dryupd.js", displayName: "Dry Upd", typeCode: 2);
        var result = NewTool(dryRun: true).manage_webresource("update", web_resource_id: id.ToString(),
            display_name: "Renamed Dry");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), $"Would UPDATE web resource 'v4_/dryupd.js' ({id}), 1 field(s).");
        Assert.AreEqual(0, _service.Updates);
        Assert.AreEqual(0, _service.Publishes);
    }

    [TestMethod]
    public void Update_ByName_WithDescription_PublishesUpdate()
    {
        var id = SeedWebResource("v4_/upd.js", displayName: "Upd Script");
        var result = NewTool().manage_webresource("update", web_resource_id: "Upd Script", description: "new desc");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), $"Updated web resource 'v4_/upd.js' ({id}): fieldsUpdated=1, published.");
        Assert.AreEqual(1, _service.Updates);
        Assert.AreEqual(1, _service.Publishes);
    }

    [TestMethod]
    public void Update_FromFile_StoresBase64Content()
    {
        var id = SeedWebResource("v4_/fileupd.js", displayName: "File Upd");
        var src = WriteSourceFile("updated.js", "var updated = 42;");
        var expectedContent = Convert.ToBase64String(File.ReadAllBytes(src));

        var result = NewTool().manage_webresource("update", web_resource_id: id.ToString(), file_path: src);

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), $"Updated web resource 'v4_/fileupd.js' ({id}): fieldsUpdated=1, published.");
        Assert.AreEqual(1, _service.Updates);
        var saved = _ctx.GetOrganizationService().Retrieve("webresource", id, new ColumnSet(true));
        Assert.AreEqual(expectedContent, saved.GetAttributeValue<string>("content"));
    }

    [TestMethod]
    public void Update_DisplayNameAndDescription_UpdatesTwoFields()
    {
        var id = SeedWebResource("v4_/twofields.js", displayName: "Two Fields");
        var result = NewTool().manage_webresource("update", web_resource_id: id.ToString(),
            display_name: "Renamed WR", description: "Renamed description");

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "fieldsUpdated=2, published.");
        Assert.AreEqual(1, _service.Updates);
        var saved = _ctx.GetOrganizationService().Retrieve("webresource", id, new ColumnSet(true));
        Assert.AreEqual("Renamed WR", saved.GetAttributeValue<string>("displayname"));
        Assert.AreEqual("Renamed description", saved.GetAttributeValue<string>("description"));
    }

    // ──────────────────────────────────────────────
    // delete
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Delete_MissingId_ReturnsError()
    {
        var result = NewTool().manage_webresource("delete");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "web_resource_id is required for 'delete'");
    }

    [TestMethod]
    public void Delete_ByGuid_NotFound_ReturnsError()
    {
        var missingId = Guid.NewGuid();
        var result = NewTool().manage_webresource("delete", web_resource_id: missingId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), $"Web resource '{missingId}' not found.");
        Assert.AreEqual(0, _service.Deletes);
    }

    [TestMethod]
    public void Delete_ManagedNotCustomizable_ReturnsError()
    {
        SeedWebResource("v4_/deletelocked.js", displayName: "Delete Locked", isManaged: true, isCustomizable: false);
        var result = NewTool().manage_webresource("delete", web_resource_id: "Delete Locked");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Cannot delete web resource 'Delete Locked' — it is managed and not customizable.");
        StringAssert.Contains(Text(result), "Only unmanaged web resources can be deleted");
        Assert.AreEqual(0, _service.Deletes);
    }

    [TestMethod]
    public void Delete_DryRun_NoMutation()
    {
        var id = SeedWebResource("v4_/drydel.js", displayName: "Dry Del", typeCode: 2);
        var result = NewTool(dryRun: true).manage_webresource("delete", web_resource_id: id.ToString());

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), "[DryRun]");
        StringAssert.Contains(Text(result), $"Would DELETE web resource 'v4_/drydel.js' ({id}).");
        Assert.AreEqual(0, _service.Deletes);
    }

    [TestMethod]
    public void Delete_Success_DeletesRecord()
    {
        var id = SeedWebResource("v4_/gone.js", displayName: "Gone Script");
        var result = NewTool().manage_webresource("delete", web_resource_id: id.ToString());

        Assert.IsFalse(result.IsError == true, Text(result));
        StringAssert.Contains(Text(result), $"Deleted web resource 'v4_/gone.js' ({id}).");
        Assert.AreEqual(1, _service.Deletes);
    }

    // ──────────────────────────────────────────────
    // misc
    // ──────────────────────────────────────────────

    [TestMethod]
    public void InvalidAction_ReturnsError()
    {
        var result = NewTool().manage_webresource("frobnicate");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Invalid action 'frobnicate'");
    }

    // ──────────────────────────────────────────────
    // fakes
    // ──────────────────────────────────────────────

    /// <summary>
    /// IOrganizationService decorator: counts mutations, answers PublishXmlRequest and
    /// AddSolutionComponentRequest locally (FakeXrmEasy has no executors for them),
    /// and hand-evaluates the tool's list FetchExpression instead of relying on
    /// FakeXrmEasy's FetchXml parser. Everything else delegates to FakeXrmEasy.
    /// </summary>
    private sealed class WebResourceOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;

        public int Creates;
        public int Updates;
        public int Deletes;
        public int Publishes;
        public int AddsToSolution;
        public bool FailAddToSolution;
        public bool FailList;
        public Guid LastCreatedId;

        public WebResourceOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity)
        {
            Creates++;
            var id = _inner.Create(entity);
            LastCreatedId = id;
            return id;
        }

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) =>
            _inner.Retrieve(entityName, id, columnSet);

        public void Update(Entity entity)
        {
            Updates++;
            _inner.Update(entity);
        }

        public void Delete(string entityName, Guid id)
        {
            Deletes++;
            _inner.Delete(entityName, id);
        }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is PublishXmlRequest)
            {
                Publishes++;
                return new OrganizationResponse();
            }
            if (request is AddSolutionComponentRequest)
            {
                AddsToSolution++;
                if (FailAddToSolution)
                    throw new InvalidOperationException("Simulated add-to-solution failure");
                return new OrganizationResponse();
            }
            return _inner.Execute(request);
        }

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            if (query is FetchExpression fetch)
            {
                if (FailList)
                    throw new InvalidOperationException("Simulated list failure");
                if (fetch.Query.Contains("<entity name='webresource'>"))
                    return EvaluateListFetch(fetch);
            }
            return _inner.RetrieveMultiple(query);
        }

        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Associate(entityName, entityId, relationship, relatedEntities);

        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
            _inner.Disassociate(entityName, entityId, relationship, relatedEntities);

        /// <summary>
        /// Hand-evaluates the webresource list FetchXml the tool generates:
        /// top, and/or filters (ismanaged eq, webresourcetype eq, displayname/name like)
        /// plus the optional solutioncomponent→solution link-entity join, ordered by name.
        /// </summary>
        private EntityCollection EvaluateListFetch(FetchExpression fetch)
        {
            var doc = XDocument.Parse(fetch.Query);
            var root = doc.Root ?? throw new InvalidOperationException("Empty fetch document.");
            var entityEl = root.Element("entity");
            var top = (int?)root.Attribute("top") ?? int.MaxValue;

            var rows = _inner
                .RetrieveMultiple(new QueryExpression("webresource") { ColumnSet = new ColumnSet(true) })
                .Entities
                .ToList();

            rows = ApplySolutionJoin(doc, rows);

            var filter = entityEl?.Element("filter");
            if (filter != null)
                rows = rows.Where(row => MatchesFilter(filter, row)).ToList();

            rows = rows
                .OrderBy(row => row.GetAttributeValue<string>("name") ?? "", StringComparer.Ordinal)
                .Take(top)
                .ToList();

            var collection = new EntityCollection();
            foreach (var row in rows)
                collection.Entities.Add(row);
            return collection;
        }

        private List<Entity> ApplySolutionJoin(XDocument doc, List<Entity> rows)
        {
            var solutionJoin = doc.Descendants("link-entity")
                .FirstOrDefault(le => (string?)le.Attribute("name") == "solutioncomponent");
            if (solutionJoin == null)
                return rows;

            var uniqueNameCondition = solutionJoin.Descendants("condition")
                .FirstOrDefault(c => (string?)c.Attribute("attribute") == "uniquename");
            var solutionName = (string?)uniqueNameCondition?.Attribute("value") ?? "";

            var solutionIds = new HashSet<Guid>(_inner
                .RetrieveMultiple(new QueryExpression("solution") { ColumnSet = new ColumnSet(true) })
                .Entities
                .Where(s => string.Equals(s.GetAttributeValue<string>("uniquename"), solutionName, StringComparison.OrdinalIgnoreCase))
                .Select(s => s.Id));

            var inSolution = new HashSet<Guid>(_inner
                .RetrieveMultiple(new QueryExpression("solutioncomponent") { ColumnSet = new ColumnSet(true) })
                .Entities
                .Where(c => solutionIds.Contains(c.GetAttributeValue<EntityReference>("solutionid")?.Id ?? Guid.Empty))
                .Select(c => c.GetAttributeValue<EntityReference>("objectid")?.Id ?? Guid.Empty));

            return rows.Where(row => inSolution.Contains(row.Id)).ToList();
        }

        private static bool MatchesFilter(XElement filter, Entity row)
        {
            var op = ((string?)filter.Attribute("type") ?? "and").ToLowerInvariant();
            var results = new List<bool>();
            foreach (var child in filter.Elements())
            {
                if (child.Name.LocalName == "condition")
                    results.Add(MatchesCondition(child, row));
                else if (child.Name.LocalName == "filter")
                    results.Add(MatchesFilter(child, row));
            }
            if (results.Count == 0)
                return true;
            return op == "or" ? results.Any(r => r) : results.All(r => r);
        }

        private static bool MatchesCondition(XElement condition, Entity row)
        {
            var attribute = (string?)condition.Attribute("attribute") ?? "";
            var op = (string?)condition.Attribute("operator") ?? "eq";
            var value = (string?)condition.Attribute("value") ?? "";

            switch (attribute)
            {
                case "ismanaged":
                {
                    var expected = value == "1" || value.Equals("true", StringComparison.OrdinalIgnoreCase);
                    return (row.GetAttributeValue<bool?>("ismanaged") ?? false) == expected;
                }
                case "webresourcetype":
                {
                    return int.TryParse(value, out var code) &&
                           (row.GetAttributeValue<OptionSetValue>("webresourcetype")?.Value ?? 0) == code;
                }
                case "name":
                case "displayname":
                {
                    var actual = row.GetAttributeValue<string>(attribute) ?? "";
                    return op == "like"
                        ? actual.IndexOf(value.Trim('%'), StringComparison.OrdinalIgnoreCase) >= 0
                        : actual.Equals(value, StringComparison.OrdinalIgnoreCase);
                }
                default:
                    return true;
            }
        }
    }
}
