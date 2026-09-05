using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageChoice;

/// <summary>
/// FakeXrmEasy-driven coverage for <see cref="ManageChoiceTool"/> data paths:
/// list / detail / create / update against an in-memory option-set store,
/// with dry-run, mutation and error branches.
/// Choice metadata messages are intercepted via an IOrganizationService decorator
/// because FakeXrmEasy's built-in option-set executors win dispatch otherwise.
/// </summary>
[TestClass]
public sealed class ManageChoiceFakeXrmEasyFullCoverageTests
{
    private IXrmFakedContext _context = null!;
    private ChoiceOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _context = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();

        // organization row for McpHelper.GetBaseLanguageCode
        _context.GetOrganizationService().Create(new Entity("organization", Guid.NewGuid())
        {
            ["languagecode"] = 1033
        });

        // publisher + solution rows for SolutionResolverHelper
        var publisherId = Guid.NewGuid();
        _context.GetOrganizationService().Create(new Entity("publisher", publisherId)
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10
        });
        _context.GetOrganizationService().Create(new Entity("solution", Guid.NewGuid())
        {
            ["publisherid"] = new EntityReference("publisher", publisherId),
            ["uniquename"] = "DevKit",
            ["friendlyname"] = "DevKit Solution"
        });

        _service = new ChoiceOrgService(_context.GetOrganizationService());
    }

    private ManageChoiceTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    /// <summary>Label with UserLocalizedLabel populated — the Dataverse server fills this on retrieve,
    /// but in-memory metadata must set it explicitly or every readback comparison sees null.</summary>
    private static Label L(string text) => new(text, 1033) { UserLocalizedLabel = new LocalizedLabel(text, 1033) };

    private void SeedOptionSet(string name, string display, params (int value, string label, string color)[] options)
    {
        var meta = new OptionSetMetadata
        {
            Name = name,
            DisplayName = L(display),
            IsGlobal = true
        };
        foreach (var (value, label, color) in options)
            meta.Options.Add(new OptionMetadata(L(label), value)
            {
                Color = color
            });
        _service.Sets.Add(meta);
    }

    private static (int, string, string) Opt(int value, string label, string color = null) => (value, label, color);

    private void SeedDevStatus()
    {
        SeedOptionSet("dev_status", "Dev Status",
            Opt(1, "Draft", "#111111"),
            Opt(2, "Confirmed"),
            Opt(3, "Sent", "#111111"),
            Opt(4, "Cancelled"));
    }

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public void List_NoFilter_ReturnsAll()
    {
        SeedDevStatus();
        SeedOptionSet("dev_region", "Region");

        var result = NewTool().manage_choice(action: "list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "2 global option set(s).");
    }

    [TestMethod]
    public void List_FilterMatches_ReturnsFiltered()
    {
        SeedDevStatus();
        SeedOptionSet("dev_region", "Region");

        var result = NewTool().manage_choice(action: "list", filter: "status");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "1 global option set(s) matching 'status'.");
    }

    [TestMethod]
    public void List_FilterNoMatch_ReturnsZero()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "list", filter: "zzz");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "0 global option set(s) matching 'zzz'.");
    }

    // ──────────────────────────────────────────────
    // detail
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Detail_MissingName_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "detail");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "optionset_name is required");
    }

    [TestMethod]
    public void Detail_NotFound_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "detail", optionset_name: "ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found by Display Name");
    }

    [TestMethod]
    public void Detail_Picklist_ReturnsOptions()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "detail", optionset_name: "dev_status");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'dev_status' (Dev Status): 4 option(s).");
    }

    [TestMethod]
    public void Detail_Boolean_ReturnsBooleanInfo()
    {
        _service.Sets.Add(new BooleanOptionSetMetadata { Name = "dev_flag" });

        var result = NewTool().manage_choice(action: "detail", optionset_name: "dev_flag");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "'dev_flag': boolean (true/false).");
    }

    // ──────────────────────────────────────────────
    // create
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Create_MissingDisplayName_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", options: "A;B", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "display_name is required");
    }

    [TestMethod]
    public void Create_MissingOptions_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "options is required");
    }

    [TestMethod]
    public void Create_InvalidOptionsFormat_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice",
            options: "x:label", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid options format.");
    }

    [TestMethod]
    public void Create_AlreadyExists_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "create", display_name: "Dev Status",
            options: "A;B", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "already exists");
    }

    [TestMethod]
    public void Create_AmbiguousMatches_ReturnsError()
    {
        SeedOptionSet("dev_region1", "Region One");
        SeedOptionSet("dev_region2", "Region Two");

        var result = NewTool().manage_choice(action: "create", display_name: "Region",
            options: "A;B", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Multiple candidates match");
    }

    [TestMethod]
    public void Create_MissingSolution_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice", options: "A;B");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "solution_name is required for 'create'");
    }

    [TestMethod]
    public void Create_SolutionNotFound_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice",
            options: "A;B", solution_name: "Nope");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found by Display Name");
    }

    [TestMethod]
    public void Create_WrongPublisherPrefix_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", optionset_name: "bad_choice",
            display_name: "Port Choice", options: "A;B", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "does not start with the solution publisher prefix 'dev_'.");
    }

    [TestMethod]
    public void Create_EmptyParsedOptions_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice",
            options: ";;", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "At least one option is required");
    }

    [TestMethod]
    public void Create_InvalidColorFormat_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice",
            options: "A;B", solution_name: "DevKit", option_colors: "A:notcolor");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid color 'notcolor'.");
    }

    [TestMethod]
    public void Create_ColorKeyNotFound_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice",
            options: "A;B", solution_name: "DevKit", option_colors: "Missing:#FF0000");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found in");
    }

    [TestMethod]
    public void Create_DryRun_WouldCreate()
    {
        var result = NewTool(dryRun: true).manage_choice(action: "create", display_name: "Port Choice",
            options: "Alpha;Beta", solution_name: "DevKit", option_colors: "Alpha:#FF0000");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "[DryRun]");
        StringAssert.Contains(result.GetText(), "Would CREATE global option set 'dev_portchoice'");
    }

    [TestMethod]
    public void Create_Live_DerivesNameFromDisplayName()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice",
            options: "Alpha;Beta", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Created global option set 'dev_portchoice' with 2 option(s).");
        Assert.AreEqual(1, _service.Sets.Count(s => s.Name == "dev_portchoice"));
    }

    [TestMethod]
    public void Create_Live_ExplicitNameWithDescriptionAndColors()
    {
        var result = NewTool().manage_choice(action: "create", optionset_name: "dev_explicit",
            display_name: "Explicit Choice", description: "Some desc",
            options: "1:One;2:Two", solution_name: "DevKit", option_colors: "One:#FF0000");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Created global option set 'dev_explicit' with 2 option(s).");

        var created = _service.Sets.OfType<OptionSetMetadata>().First(s => s.Name == "dev_explicit");
        Assert.AreEqual("Some desc", created.Description.UserLocalizedLabel.Label);
        Assert.AreEqual("#FF0000", created.Options.First(o => o.Value == 1).Color);
    }

    [TestMethod]
    public void Create_Live_AddToSolutionFails_ReportsWarning()
    {
        _service.ThrowOnAddSolutionComponent = true;

        var result = NewTool().manage_choice(action: "create", display_name: "Warn Choice",
            options: "A", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Not added to solution 'DevKit'");
    }

    // ──────────────────────────────────────────────
    // update
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_MissingName_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "update", display_name: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "optionset_name is required for 'update'");
    }

    [TestMethod]
    public void Update_InvalidRemoveFormat_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            remove_options: " , ", display_name: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid remove_options format.");
    }

    [TestMethod]
    public void Update_LabelOnlyAddWithoutSolution_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            add_options: "Pending", display_name: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid add_options format.");
    }

    [TestMethod]
    public void Update_NoChangesSpecified_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No changes specified.");
    }

    [TestMethod]
    public void Update_ParsedAddIsEmpty_NoChangesSpecified_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status", add_options: ";");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "No changes specified.");
    }

    [TestMethod]
    public void Update_NotFound_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "update", optionset_name: "ghost", display_name: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found by Display Name");
    }

    [TestMethod]
    public void Update_SolutionNotFound_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            add_options: "Pending", solution_name: "Nope");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found by Display Name");
    }

    [TestMethod]
    public void Update_ExplicitValueAlreadyExists_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            add_options: "1:Extra", display_name: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Option value '1' already exists in 'dev_status'.");
    }

    [TestMethod]
    public void Update_RenameLabelNotFound_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            update_options: "Ghost:New");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Option label 'Ghost' not found in 'dev_status'.");
    }

    [TestMethod]
    public void Update_InvalidUpdateFormat_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            update_options: "NoColon");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid update_options format.");
    }

    [TestMethod]
    public void Update_RemoveLabelNotFound_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            remove_options: "Ghost");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Option label 'Ghost' not found in 'dev_status'.");
    }

    [TestMethod]
    public void Update_InvalidColorFormat_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "X", option_colors: "Bad:#ZZZZZZ");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid color '#ZZZZZZ'.");
    }

    [TestMethod]
    public void Update_ColorKeyNotFound_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "X", option_colors: "Missing:#FF0000");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "not found in 'dev_status'");
    }

    [TestMethod]
    public void Update_DryRun_FullMix_WouldUpdate()
    {
        SeedDevStatus();

        var result = NewTool(dryRun: true).manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "Renamed Status", description: "Updated desc",
            add_options: "9:Extra", update_options: "Draft:Open", remove_options: "Cancelled",
            option_colors: "Extra:#123456;Sent:#654321");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "[DryRun]");
        StringAssert.Contains(result.GetText(), "Would UPDATE global option set 'dev_status'");
        StringAssert.Contains(result.GetText(), "add 1 option(s)");
        StringAssert.Contains(result.GetText(), "update 1 label(s)");
        StringAssert.Contains(result.GetText(), "remove 1 option(s)");
    }

    [TestMethod]
    public void Update_DryRun_LabelOnlyAddWithSolution_AutoValueAndAlreadyExisted()
    {
        SeedDevStatus();

        var result = NewTool(dryRun: true).manage_choice(action: "update", optionset_name: "dev_status",
            add_options: "Fresh;Draft", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "[DryRun]");
        StringAssert.Contains(result.GetText(), "add 1 option(s)");
        StringAssert.Contains(result.GetText(), "1 option(s) already exist");
    }

    [TestMethod]
    public void Update_DryRun_ByDisplayName_ResolvesLogicalName()
    {
        SeedDevStatus();

        var result = NewTool(dryRun: true).manage_choice(action: "update", optionset_name: "Dev Status",
            display_name: "New Display");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "Would UPDATE global option set 'dev_status'");
    }

    [TestMethod]
    public void Update_Live_MixOfRenameRemoveAddAndColors_Succeeds()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            add_options: "9:Extra;10:Plain", update_options: "Draft:Open", remove_options: "Cancelled",
            option_colors: "Extra:#123456;Sent:#654321");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "Updated global option set 'dev_status'");
        StringAssert.Contains(result.GetText(), "2 added");
        StringAssert.Contains(result.GetText(), "1 renamed");
        StringAssert.Contains(result.GetText(), "1 removed");
        StringAssert.Contains(result.GetText(), "2 colored");

        var meta = _service.Sets.OfType<OptionSetMetadata>().First(s => s.Name == "dev_status");
        Assert.IsNull(meta.Options.FirstOrDefault(o => o.Value == 4));
        Assert.AreEqual("Open", meta.Options.First(o => o.Value == 1).Label.UserLocalizedLabel.Label);
        Assert.AreEqual("#123456", meta.Options.First(o => o.Value == 9).Color);
        Assert.AreEqual("#654321", meta.Options.First(o => o.Value == 3).Color);
    }

    [TestMethod]
    public void Update_Live_DisplayNameAndDescriptionOnly_Succeeds()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "New Display", description: "New Desc");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "Updated global option set 'dev_status'");
        StringAssert.Contains(result.GetText(), "display name");
        StringAssert.Contains(result.GetText(), "description");

        var meta = _service.Sets.First(s => s.Name == "dev_status");
        Assert.AreEqual("New Display", meta.DisplayName.UserLocalizedLabel.Label);
        Assert.AreEqual("New Desc", meta.Description.UserLocalizedLabel.Label);
    }

    [TestMethod]
    public void Update_Live_RemoveOnly_Succeeds()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            remove_options: "Cancelled");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "Updated global option set 'dev_status': 1 removed.");

        var meta = (OptionSetMetadata)_service.Sets.First(s => s.Name == "dev_status");
        Assert.IsNull(meta.Options.FirstOrDefault(o => o.Value == 4));
    }

    [TestMethod]
    public void Update_Live_ColorNotApplied_VerificationFails()
    {
        SeedDevStatus();
        _service.ApplyColors = false;

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            option_colors: "Sent:#999999");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "could not be verified");
    }

    // ──────────────────────────────────────────────
    // verification failure branches (failure injection)
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Update_AllMutationsDropped_VerificationReportsEachError()
    {
        SeedDevStatus();
        _service.ApplySetLabels = false;
        _service.SkipInsert = true;
        _service.SkipRename = true;
        _service.SkipDelete = true;

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "New Display", description: "New Desc",
            add_options: "9:Extra", update_options: "Draft:Open", remove_options: "Cancelled");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "could not be verified");
        StringAssert.Contains(result.GetText(), "Display name was not updated");
        StringAssert.Contains(result.GetText(), "Description was not updated");
        StringAssert.Contains(result.GetText(), "'Extra' was not found");
        StringAssert.Contains(result.GetText(), "'Open' was not found");
        StringAssert.Contains(result.GetText(), "'Cancelled' still exists");
    }

    [TestMethod]
    public void Update_ReadbackNull_VerificationFails()
    {
        SeedDevStatus();
        _service.NullRetrieveAfterMutations = true;

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "New Display");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "could not be verified");
        StringAssert.Contains(result.GetText(), "could not be read back");
    }

    [TestMethod]
    public void Update_SingleRetrieveNull_AfterResolve_ReportsNotFound()
    {
        SeedDevStatus();
        _service.NullSingleRetrieve = true;

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "New Display");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Global option set 'dev_status' not found.");
    }

    [TestMethod]
    public void Update_RenameWithColorChange_AppliesColorDuringRename()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            update_options: "Sent:Shipped", option_colors: "Shipped:#222222");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "1 colored");

        var meta = _service.Sets.OfType<OptionSetMetadata>().First(s => s.Name == "dev_status");
        Assert.AreEqual("Shipped", meta.Options.First(o => o.Value == 3).Label.UserLocalizedLabel.Label);
        Assert.AreEqual("#222222", meta.Options.First(o => o.Value == 3).Color);
    }

    [TestMethod]
    public void Update_LiveAddExistingLabel_ReportsAlreadyExisted()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            add_options: "Draft", solution_name: "DevKit");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "1 already existed");

        var meta = _service.Sets.OfType<OptionSetMetadata>().First(s => s.Name == "dev_status");
        Assert.AreEqual(4, meta.Options.Count); // nothing inserted
    }

    [TestMethod]
    public void Update_AddWithSolutionInvalidExplicitValue_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            add_options: "x:Bad", solution_name: "DevKit", display_name: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid add_options format.");
    }

    [TestMethod]
    public void Update_AddWithoutSolutionInvalidValue_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            add_options: "x:Bad", display_name: "X");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid add_options format.");
    }

    [TestMethod]
    public void Create_TrailingColonOption_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice",
            options: "1:", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid options format.");
    }

    [TestMethod]
    public void Create_OptionColorsNoColon_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "Port Choice",
            options: "A;B", solution_name: "DevKit", option_colors: "nocolon");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid option_colors format.");
    }

    [TestMethod]
    public void Create_DisplayNameNoValidChars_ReturnsFriendlyException()
    {
        var result = NewTool().manage_choice(action: "create", display_name: "---",
            options: "A;B", solution_name: "DevKit");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "contains no valid characters");
    }

    [TestMethod]
    public void Update_RenamePairEmptyNewLabel_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            update_options: "Draft:");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid update_options format.");
    }

    [TestMethod]
    public void Update_ColorEntryEmptyKey_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "X", option_colors: " :#FF0000");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid option_colors format.");
    }

    [TestMethod]
    public void Update_ColorDuplicateKey_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "X", option_colors: "Draft:#111111;Draft:#222222");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Duplicate option color key 'Draft'.");
    }

    [TestMethod]
    public void Update_ColorEntriesAllEmpty_NoColorsApplied()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "New Display", option_colors: ";;");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "Updated global option set 'dev_status'");

        var meta = _service.Sets.OfType<OptionSetMetadata>().First(s => s.Name == "dev_status");
        Assert.AreEqual("#111111", meta.Options.First(o => o.Value == 1).Color); // seeded color unchanged
    }

    [TestMethod]
    public void Update_ColorByIntValue_AppliesColor()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            option_colors: "1:#FF0000");
        Assert.IsFalse(result.IsError == true, "unexpected error: " + result.GetText());
        StringAssert.Contains(result.GetText(), "1 colored");

        var meta = _service.Sets.OfType<OptionSetMetadata>().First(s => s.Name == "dev_status");
        Assert.AreEqual("#FF0000", meta.Options.First(o => o.Value == 1).Color);
    }

    [TestMethod]
    public void Update_ColorByIntValueNotFound_ReturnsError()
    {
        SeedDevStatus();

        var result = NewTool().manage_choice(action: "update", optionset_name: "dev_status",
            display_name: "X", option_colors: "999:#FF0000");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Option color key '999' not found in 'dev_status'.");
    }

    // ──────────────────────────────────────────────
    // dispatcher
    // ──────────────────────────────────────────────

    [TestMethod]
    public void ManageChoice_MissingAction_ReturnsError()
    {
        var result = NewTool().manage_choice();
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "action is required");
    }

    [TestMethod]
    public void ManageChoice_InvalidAction_ReturnsError()
    {
        var result = NewTool().manage_choice(action: "bogus");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Invalid action 'bogus'.");
    }

    // ──────────────────────────────────────────────
    // IOrganizationService decorator intercepting choice metadata messages
    // ──────────────────────────────────────────────

    private sealed class ChoiceOrgService : IOrganizationService
    {
        private readonly IOrganizationService _inner;

        public List<OptionSetMetadataBase> Sets { get; } = [];
        public bool ApplyColors { get; set; } = true;
        public bool ThrowOnAddSolutionComponent { get; set; }

        // Failure-injection switches for the post-mutation verification path
        public bool ApplySetLabels { get; set; } = true;
        public bool SkipInsert { get; set; }
        public bool SkipRename { get; set; }
        public bool SkipDelete { get; set; }

        /// <summary>Simulate Dataverse metadata cache not serving the readback after a mutation.</summary>
        public bool NullRetrieveAfterMutations { get; set; }

        /// <summary>Simulate RetrieveOptionSet returning null even though RetrieveAllOptionSets lists the set.</summary>
        public bool NullSingleRetrieve { get; set; }

        private int _mutations;

        public ChoiceOrgService(IOrganizationService inner) => _inner = inner;

        public Guid Create(Entity entity) => _inner.Create(entity);
        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);
        public void Update(Entity entity) => _inner.Update(entity);
        public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);
        public OrganizationResponse Execute(OrganizationRequest request)
        {
            var response = ExecuteChoice(request) ?? _inner.Execute(request);
            if (request is InsertOptionValueRequest or UpdateOptionValueRequest
                or DeleteOptionValueRequest or UpdateOptionSetRequest or CreateOptionSetRequest)
                _mutations++;
            return response;
        }
        public EntityCollection RetrieveMultiple(QueryBase query) => _inner.RetrieveMultiple(query);
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => _inner.Associate(entityName, entityId, relationship, relatedEntities);
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => _inner.Disassociate(entityName, entityId, relationship, relatedEntities);

        private OrganizationResponse ExecuteChoice(OrganizationRequest request) => request switch
        {
            RetrieveAllOptionSetsRequest => RetrieveAll(),
            RetrieveOptionSetRequest retrieve => RetrieveOne(retrieve),
            InsertOptionValueRequest insert => Insert(insert),
            UpdateOptionValueRequest update => UpdateOption(update),
            DeleteOptionValueRequest delete => Delete(delete),
            UpdateOptionSetRequest updateSet => UpdateSet(updateSet),
            CreateOptionSetRequest createSet => CreateSet(createSet),
            Microsoft.Crm.Sdk.Messages.AddSolutionComponentRequest addComponent => AddComponent(addComponent),
            Microsoft.Crm.Sdk.Messages.PublishXmlRequest => new OrganizationResponse(), // PublishHelper publishes; no-op keeps tests fast
            _ => null
        };

        private OrganizationResponse RetrieveAll()
        {
            var response = new RetrieveAllOptionSetsResponse();
            response.Results["OptionSetMetadata"] = Sets.ToArray();
            return response;
        }

        private OrganizationResponse RetrieveOne(RetrieveOptionSetRequest request)
        {
            var response = new RetrieveOptionSetResponse();
            if (NullSingleRetrieve || (NullRetrieveAfterMutations && _mutations > 0))
                response.Results["OptionSetMetadata"] = null; // simulate metadata cache miss
            else
                response.Results["OptionSetMetadata"] = Find(request.Name);
            return response;
        }

        private OrganizationResponse Insert(InsertOptionValueRequest request)
        {
            var set = RequiredSet(request.OptionSetName);
            if (SkipInsert) return new OrganizationResponse(); // simulate Dataverse silently dropping the insert
            var option = new OptionMetadata(Normalize(request.Label), request.Value ?? 0);
            ApplyColor(option, request, request.Value?.ToString());
            set.Options.Add(option);
            return new OrganizationResponse();
        }

        private OrganizationResponse UpdateOption(UpdateOptionValueRequest request)
        {
            var set = RequiredSet(request.OptionSetName);
            var option = set.Options.FirstOrDefault(o => o.Value == request.Value)
                ?? throw new InvalidOperationException($"Option not found: {request.Value}");
            if (!SkipRename) option.Label = Normalize(request.Label);
            ApplyColor(option, request, request.Value.ToString());
            return new OrganizationResponse();
        }

        private OrganizationResponse Delete(DeleteOptionValueRequest request)
        {
            var set = RequiredSet(request.OptionSetName);
            if (SkipDelete) return new OrganizationResponse(); // simulate Dataverse keeping the option
            var option = set.Options.FirstOrDefault(o => o.Value == request.Value);
            if (option != null) set.Options.Remove(option);
            return new OrganizationResponse();
        }

        private OrganizationResponse UpdateSet(UpdateOptionSetRequest request)
        {
            var set = RequiredSet(request.OptionSet?.Name);
            if (!ApplySetLabels) return new OrganizationResponse(); // simulate display name/description not persisting
            if (request.OptionSet.DisplayName != null) set.DisplayName = Normalize(request.OptionSet.DisplayName);
            if (request.OptionSet.Description != null) set.Description = Normalize(request.OptionSet.Description);
            return new OrganizationResponse();
        }

        private OrganizationResponse CreateSet(CreateOptionSetRequest request)
        {
            Sets.Add(Normalize(request.OptionSet));
            var response = new CreateOptionSetResponse();
            response.Results["OptionSetId"] = Guid.NewGuid();
            return response;
        }

        /// <summary>Dataverse populates UserLocalizedLabel on retrieve; do the same for in-memory metadata.</summary>
        private static OptionSetMetadataBase Normalize(OptionSetMetadataBase set)
        {
            if (set is OptionSetMetadata picklist)
            {
                picklist.DisplayName = Normalize(picklist.DisplayName);
                picklist.Description = Normalize(picklist.Description);
                foreach (var option in picklist.Options)
                    option.Label = Normalize(option.Label);
            }
            return set;
        }

        private static Label Normalize(Label label)
        {
            if (label == null) return null;
            if (label.UserLocalizedLabel != null) return label;
            label.UserLocalizedLabel = label.LocalizedLabels?.FirstOrDefault() ?? new LocalizedLabel(label.LocalizedLabels?[0]?.Label, 1033);
            return label;
        }

        private OrganizationResponse AddComponent(Microsoft.Crm.Sdk.Messages.AddSolutionComponentRequest request)
        {
            if (ThrowOnAddSolutionComponent)
                throw new InvalidOperationException("fake add-to-solution failure");
            return new OrganizationResponse();
        }

        private OptionSetMetadata RequiredSet(string name)
            => Find(name) ?? throw new InvalidOperationException($"Option set not found: {name}");

        private OptionSetMetadata Find(string name)
            => Sets.OfType<OptionSetMetadata>().FirstOrDefault(
                s => string.Equals(s.Name, name, StringComparison.OrdinalIgnoreCase));

        private void ApplyColor(OptionMetadata option, OrganizationRequest request, string value)
        {
            if (!ApplyColors || value == null) return;
            if (request.Parameters?.Contains("Color") == true && request.Parameters["Color"] is string color)
                option.Color = color;
        }
    }
}
