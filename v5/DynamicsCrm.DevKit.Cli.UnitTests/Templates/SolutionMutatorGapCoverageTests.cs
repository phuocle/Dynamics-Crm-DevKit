using DynamicsCrm.DevKit.Shared.Templates;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates;

/// <summary>
/// Second-pass coverage for the SolutionMutator file surgeries the first
/// suite missed: the .rptproj report-item adder (corrupt XML, ItemGroup
/// bootstrap next to an Import), the DependentUpon upkeep of
/// .projitems Compile items, the ProjectConfigurationPlatforms section
/// bootstrap for .sln files that lack it, the GUID-less .shproj fallback
/// and the ..-relative paths of projects living beside the solution.
/// </summary>
[TestClass]
[DoNotParallelize]
public class SolutionMutatorGapCoverageTests
{
    private string _directory = null!;
    private string _solutionFile = null!;

    [TestInitialize]
    public void Initialize()
    {
        _directory = Path.Combine(Path.GetTempPath(), "devkit-mutator-gap-tests", Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_directory);
        _solutionFile = Path.Combine(_directory, "Contoso.sln");
        File.WriteAllText(_solutionFile,
            "Microsoft Visual Studio Solution File, Format Version 12.00\r\n" +
            "# Visual Studio Version 17\r\n" +
            "Project(\"{9A19103F-16F7-4668-BE54-9A1E7A4F7556}\") = \"Contoso.Plugin\", \"Contoso.Plugin\\Contoso.Plugin.csproj\", \"{11111111-1111-1111-1111-111111111111}\"\r\n" +
            "EndProject\r\n" +
            "Global\r\n" +
            "\tGlobalSection(SolutionConfigurationPlatforms) = preSolution\r\n" +
            "\t\tDebug|Any CPU = Debug|Any CPU\r\n" +
            "\tEndGlobalSection\r\n" +
            "EndGlobal\r\n");
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_directory, true); } catch { }
    }

    // ── AddReportItemToRptproj ───────────────────────────────────────────────

    private const string RptprojTemplate = @"<?xml version=""1.0"" encoding=""utf-8""?>
<Project xmlns=""http://schemas.microsoft.com/developer/msbuild/2003"">
  {0}
  <Import Project=""$(MSBuildExtensionsPath)\Microsoft\VisualStudio\v17.0\ReportingServices\Microsoft.Reporting.Services.targets"" />
</Project>";

    [TestMethod]
    public void AddReportItemToRptproj_BootstrapsItemGroupBeforeImport()
    {
        var rptproj = Path.Combine(_directory, "Contoso.Reports.rptproj");
        File.WriteAllText(rptproj, string.Format(RptprojTemplate, string.Empty));

        Assert.IsTrue(SolutionMutator.AddReportItemToRptproj(rptproj, "Reports\\Account.rdl"));

        var document = XDocument.Load(rptproj);
        var itemGroup = document.Root!.Elements().First(x => x.Name.LocalName == "ItemGroup");
        Assert.AreEqual("Account.rdl", (string)itemGroup.Elements().First().Attribute("Include")!);
        // The new ItemGroup sits before the Import element.
        var children = document.Root!.Elements().ToList();
        Assert.IsTrue(children.IndexOf(itemGroup) < children.IndexOf(children.First(x => x.Name.LocalName == "Import")));
    }

    [TestMethod]
    public void AddReportItemToRptproj_AppendsToExistingReportItemGroup()
    {
        var rptproj = Path.Combine(_directory, "Contoso.Reports2.rptproj");
        File.WriteAllText(rptproj, string.Format(RptprojTemplate,
            "<ItemGroup><Report Include=\"Existing.rdl\" /></ItemGroup>"));

        Assert.IsTrue(SolutionMutator.AddReportItemToRptproj(rptproj, "Sub\\New.rdl"));
        Assert.IsFalse(SolutionMutator.AddReportItemToRptproj(rptproj, "New.rdl")); // idempotent by file name

        var includes = XDocument.Load(rptproj).Root!.Descendants()
            .Where(x => x.Name.LocalName == "Report")
            .Select(x => (string)x.Attribute("Include")!).ToList();
        CollectionAssert.AreEquivalent(new[] { "Existing.rdl", "New.rdl" }, includes);
    }

    [TestMethod]
    public void AddReportItemToRptproj_MissingOrCorruptFile_ReturnsFalse()
    {
        Assert.IsFalse(SolutionMutator.AddReportItemToRptproj(Path.Combine(_directory, "Ghost.rptproj"), "A.rdl"));
        Assert.IsFalse(SolutionMutator.AddReportItemToRptproj("", "A.rdl"));

        var corrupt = Path.Combine(_directory, "Corrupt.rptproj");
        File.WriteAllText(corrupt, "<Project><Unclosed>");
        Assert.IsFalse(SolutionMutator.AddReportItemToRptproj(corrupt, "A.rdl"));
    }

    // ── AddCompileItemToProjitems ────────────────────────────────────────────

    private const string ProjitemsTemplate = @"<Project xmlns=""http://schemas.microsoft.com/developer/msbuild/2003"">
  <ItemGroup>
    <Compile Include=""$(MSBuildThisFileDirectory)Shared.cs"" />
  </ItemGroup>
</Project>";

    [TestMethod]
    public void AddCompileItemToProjitems_UpgradesDependentUponOnExistingItem()
    {
        var projitems = Path.Combine(_directory, "Contoso.Shared.projitems");
        File.WriteAllText(projitems, ProjitemsTemplate);

        // Existing Compile without a DependentUpon → the child is added.
        Assert.IsTrue(SolutionMutator.AddCompileItemToProjitems(projitems, "Shared.cs", "SharedBase.cs"));
        var document = XDocument.Load(projitems);
        var ns = document.Root!.Name.Namespace;
        var compile = document.Root!.Descendants(ns + "Compile").First();
        Assert.AreEqual("SharedBase.cs", compile.Element(ns + "DependentUpon")!.Value);

        // Same DependentUpon again → no change.
        Assert.IsFalse(SolutionMutator.AddCompileItemToProjitems(projitems, "Shared.cs", "SharedBase.cs"));

        // A different DependentUpon → the value is rewritten.
        Assert.IsTrue(SolutionMutator.AddCompileItemToProjitems(projitems, "Shared.cs", "RenamedBase.cs"));
        document = XDocument.Load(projitems);
        ns = document.Root!.Name.Namespace;
        compile = document.Root!.Descendants(ns + "Compile").First();
        Assert.AreEqual("RenamedBase.cs", compile.Element(ns + "DependentUpon")!.Value);
    }

    [TestMethod]
    public void AddCompileItemToProjitems_MissingFile_ReturnsFalse()
    {
        Assert.IsFalse(SolutionMutator.AddCompileItemToProjitems(Path.Combine(_directory, "Ghost.projitems"), "A.cs"));
        Assert.IsFalse(SolutionMutator.AddCompileItemToProjitems("", "A.cs"));
    }

    // ── ProjectConfigurationPlatforms bootstrap + sibling paths ─────────────

    [TestMethod]
    public async Task AddProjectToSolutionAsync_BootstrapsMissingConfigurationSection()
    {
        // The .sln carries no ProjectConfigurationPlatforms section — the
        // mutator creates it inside Global before inserting the entries.
        // The project lives OUTSIDE the solution directory, so the relative
        // path climbs with .. segments.
        var solutionDirectory = Path.Combine(_directory, "Src");
        Directory.CreateDirectory(solutionDirectory);
        var solutionFile = Path.Combine(solutionDirectory, "Contoso.sln");
        File.WriteAllText(solutionFile, File.ReadAllText(_solutionFile));

        var projectDirectory = Path.Combine(_directory, "Sib", "Contoso.Workflow");
        Directory.CreateDirectory(projectDirectory);
        var csproj = Path.Combine(projectDirectory, "Contoso.Workflow.csproj");
        File.WriteAllText(csproj, "<Project Sdk=\"Microsoft.NET.Sdk\" />");

        Assert.IsTrue(await SolutionMutator.AddProjectToSolutionAsync(solutionFile, csproj));

        var text = File.ReadAllText(solutionFile);
        StringAssert.Contains(text, "..\\Sib\\Contoso.Workflow\\Contoso.Workflow.csproj");
        var lines = File.ReadAllLines(solutionFile);
        Assert.IsTrue(lines.Any(l => l.Trim().StartsWith("GlobalSection(ProjectConfigurationPlatforms)")));
        // Four standard build configuration entries were inserted for the
        // new project GUID (the minted one is unknown — count instead).
        var configurationEntries = lines
            .Where(l => l.Trim().EndsWith(".ActiveCfg = Debug|Any CPU", StringComparison.OrdinalIgnoreCase) ||
                        l.Trim().EndsWith(".ActiveCfg = Release|Any CPU", StringComparison.OrdinalIgnoreCase))
            .ToList();
        Assert.HasCount(2, configurationEntries);
        Assert.HasCount(0, lines.Where(l => l.Contains(".Deploy.0 =")).ToList());
    }

    [TestMethod]
    public async Task AddProjectToSolutionAsync_SolutionWithoutGlobal_BuildsFullSkeleton()
    {
        var bare = Path.Combine(_directory, "Bare.sln");
        File.WriteAllText(bare, "junk-without-global");

        var projectDirectory = Path.Combine(_directory, "Contoso.Bare");
        Directory.CreateDirectory(projectDirectory);
        var csproj = Path.Combine(projectDirectory, "Contoso.Bare.csproj");
        File.WriteAllText(csproj, "<Project Sdk=\"Microsoft.NET.Sdk\" />");

        Assert.IsTrue(await SolutionMutator.AddProjectToSolutionAsync(bare, csproj));

        var text = File.ReadAllText(bare);
        StringAssert.Contains(text, "Microsoft Visual Studio Solution File, Format Version 12.00");
        StringAssert.Contains(text, "Project(\"{9A19103F-16F7-4668-BE54-9A1E7A4F7556}\") = \"Contoso.Bare\"");
        StringAssert.Contains(text, "GlobalSection(ProjectConfigurationPlatforms) = postSolution");
        StringAssert.Contains(text, "EndGlobal");
    }

    [TestMethod]
    public async Task AddSharedProjectToSolutionAsync_CorruptShproj_MintsGuidAndAddsOwnerLine()
    {
        // The .shproj carries no readable ProjectGuid → ReadProjectGuid's
        // catch falls back to a minted GUID; the SharedMSBuildProjectFiles
        // owner line is still ensured.
        var sharedDirectory = Path.Combine(_directory, "Contoso.Shared");
        Directory.CreateDirectory(sharedDirectory);
        var shproj = Path.Combine(sharedDirectory, "Contoso.Shared.shproj");
        File.WriteAllText(shproj, "<Project><Unclosed>");
        File.WriteAllText(Path.Combine(sharedDirectory, "Contoso.Shared.projitems"), "<Project />");

        Assert.IsTrue(await SolutionMutator.AddSharedProjectToSolutionAsync(_solutionFile, shproj));

        var text = File.ReadAllText(_solutionFile);
        StringAssert.Contains(text, "Contoso.Shared\\Contoso.Shared.shproj");
        StringAssert.Contains(text, "SharedItemsImports = 13");
    }

    // NOTE: AddProjectToSlnAsync's project-already-referenced short-circuit,
    // the .slnx variants and EnsureDevKitJsonAsync are covered by
    // SolutionMutatorTests; nothing else in this class is publicly
    // reachable beyond the paths exercised above.
}
