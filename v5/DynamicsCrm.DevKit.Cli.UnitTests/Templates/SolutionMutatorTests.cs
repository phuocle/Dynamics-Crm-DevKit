using DynamicsCrm.DevKit.Shared.Templates;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    [TestClass]
    [DoNotParallelize]
    public class SolutionMutatorTests
    {
        private string _directory;
        private string _solutionFile;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-mutator-tests", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(_directory);
            _solutionFile = Path.Combine(_directory, "Contoso.sln");
            File.WriteAllText(_solutionFile,
                "Microsoft Visual Studio Solution File, Format Version 12.00\r\n" +
                "# Visual Studio Version 17\r\n" +
                "Project(\"{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}\") = \"Contoso.Shared\", \"Contoso.Shared\\Contoso.Shared.shproj\", \"{11111111-1111-1111-1111-111111111111}\"\r\n" +
                "EndProject\r\n" +
                "Global\r\n" +
                "\tGlobalSection(ProjectConfigurationPlatforms) = postSolution\r\n" +
                "\t\t{11111111-1111-1111-1111-111111111111}.Debug|Any CPU.ActiveCfg = Debug|Any CPU\r\n" +
                "\tEndGlobalSection\r\n" +
                "EndGlobal\r\n");
        }

        [TestCleanup]
        public void Cleanup()
        {
            Directory.Delete(_directory, true);
        }

        [TestMethod]
        public async Task AddProjectToSolutionAsync_AddsEntryAndConfigurations()
        {
            var csproj = Path.Combine(_directory, "Contoso.Plugin", "Contoso.Plugin.csproj");
            Directory.CreateDirectory(Path.GetDirectoryName(csproj));
            File.WriteAllText(csproj, "<Project Sdk=\"Microsoft.NET.Sdk\" />");

            var added = await SolutionMutator.AddProjectToSolutionAsync(_solutionFile, csproj);
            Assert.IsTrue(added);

            var content = File.ReadAllText(_solutionFile);
            StringAssert.Contains(content, "Contoso.Plugin.csproj");
            StringAssert.Contains(content, SolutionMutator.SdkCSharpProjectTypeGuid);
            var configurationEntries = content.Split('\n').Count(line => line.Contains("Debug|Any CPU.ActiveCfg"));
            Assert.AreEqual(2, configurationEntries);
        }

        [TestMethod]
        public async Task AddProjectToSolutionAsync_IsIdempotent()
        {
            var csproj = Path.Combine(_directory, "Contoso.Plugin", "Contoso.Plugin.csproj");
            Directory.CreateDirectory(Path.GetDirectoryName(csproj));
            File.WriteAllText(csproj, "<Project Sdk=\"Microsoft.NET.Sdk\" />");

            Assert.IsTrue(await SolutionMutator.AddProjectToSolutionAsync(_solutionFile, csproj));
            Assert.IsFalse(await SolutionMutator.AddProjectToSolutionAsync(_solutionFile, csproj));
        }

        [TestMethod]
        public async Task AddSharedProjectToSolutionAsync_AddsSharedMsBuildSection()
        {
            var shproj = Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj");
            Directory.CreateDirectory(Path.GetDirectoryName(shproj));
            File.WriteAllText(shproj, "<Project />");

            var added = await SolutionMutator.AddSharedProjectToSolutionAsync(_solutionFile, shproj);
            Assert.IsTrue(added);

            var content = File.ReadAllText(_solutionFile);
            StringAssert.Contains(content, "GlobalSection(SharedMSBuildProjectFiles)");
            StringAssert.Contains(content, "Contoso.Shared.projitems");
        }

        [TestMethod]
        public void AddCompileItemToProjitems_AppendsCompileInclude()
        {
            var projitems = Path.Combine(_directory, "Contoso.Shared.projitems");
            File.WriteAllText(projitems,
                "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n" +
                "<Project xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\">\r\n" +
                "  <ItemGroup>\r\n" +
                "    <Compile Include=\"$(MSBuildThisFileDirectory)PluginCore.cs\" />\r\n" +
                "  </ItemGroup>\r\n" +
                "</Project>");

            Assert.IsTrue(SolutionMutator.AddCompileItemToProjitems(projitems, "Entities\\Account.cs"));
            var document = XDocument.Load(projitems);
            var ns = document.Root.Name.Namespace;
            var include = document.Root.Elements(ns + "ItemGroup")
                .SelectMany(group => group.Elements(ns + "Compile"))
                .Select(compile => (string)compile.Attribute("Include"))
                .ToList();
            CollectionAssert.Contains(include, "$(MSBuildThisFileDirectory)Entities\\Account.cs");
            Assert.IsFalse(SolutionMutator.AddCompileItemToProjitems(projitems, "Entities\\Account.cs"));
        }

        [TestMethod]
        public async Task EnsureDevKitCliJsonAsync_CreatesFileOnce()
        {
            var path = await SolutionMutator.EnsureDevKitCliJsonAsync(_directory);
            Assert.AreEqual(Path.Combine(_directory, "DynamicsCrm.DevKit.Cli.json"), path);
            var content = File.ReadAllText(path);
            StringAssert.Contains(content, "servers");

            var again = await SolutionMutator.EnsureDevKitCliJsonAsync(_directory);
            Assert.AreEqual(path, again);
            Assert.AreEqual(content, File.ReadAllText(path));
        }
    }
}
