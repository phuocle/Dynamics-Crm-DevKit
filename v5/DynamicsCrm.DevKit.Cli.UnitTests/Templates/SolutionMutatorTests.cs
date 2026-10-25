using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
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

        private const string ShprojWithGuid =
            "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n" +
            "<Project xmlns=\"http://schemas.microsoft.com/developer/msbuild/2003\">\r\n" +
            "  <PropertyGroup Label=\"Globals\">\r\n" +
            "    <ProjectGuid>ded3541a-58cd-4553-9f48-6f72132daeb7</ProjectGuid>\r\n" +
            "  </PropertyGroup>\r\n" +
            "</Project>";

        [TestMethod]
        public async Task AddSharedProjectToSolutionAsync_AddsSharedMsBuildSection()
        {
            // The fixture solution already carries a Contoso.Shared entry —
            // only the SharedMSBuildProjectFiles section has to be ensured.
            var shproj = Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj");
            Directory.CreateDirectory(Path.GetDirectoryName(shproj));
            File.WriteAllText(shproj, ShprojWithGuid);

            var added = await SolutionMutator.AddSharedProjectToSolutionAsync(_solutionFile, shproj);
            Assert.IsTrue(added);

            var content = File.ReadAllText(_solutionFile);
            StringAssert.Contains(content, "GlobalSection(SharedMSBuildProjectFiles)");
            // The Visual Studio owner line format: path*{guid-lowercase}*SharedItemsImports = 13
            StringAssert.Contains(content, "Contoso.Shared\\Contoso.Shared.projitems*{ded3541a-58cd-4553-9f48-6f72132daeb7}*SharedItemsImports = 13");
            // The pre-existing project entry is neither rewritten nor duplicated.
            Assert.AreEqual(1, content.Split('\n').Count(line => line.Contains("Contoso.Shared.shproj")));
            StringAssert.Contains(content, "\"{11111111-1111-1111-1111-111111111111}\"");
        }

        [TestMethod]
        public async Task AddSharedProjectToSolutionAsync_WritesProjectEntryFromShprojGuid()
        {
            var solutionFile = Path.Combine(_directory, "Fresh.sln");
            File.WriteAllText(solutionFile,
                "Microsoft Visual Studio Solution File, Format Version 12.00\r\n" +
                "Global\r\n" +
                "\tGlobalSection(ProjectConfigurationPlatforms) = postSolution\r\n" +
                "\tEndGlobalSection\r\n" +
                "EndGlobal\r\n");
            var shproj = Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj");
            Directory.CreateDirectory(Path.GetDirectoryName(shproj));
            File.WriteAllText(shproj, ShprojWithGuid);

            var added = await SolutionMutator.AddSharedProjectToSolutionAsync(solutionFile, shproj);
            Assert.IsTrue(added);

            var content = File.ReadAllText(solutionFile);
            // Project entry reuses the .shproj ProjectGuid (upper-case, braced) and the shared project type guid.
            StringAssert.Contains(content, $"Project(\"{SolutionMutator.SharedProjectTypeGuid}\") = \"Contoso.Shared\", \"Contoso.Shared\\Contoso.Shared.shproj\", \"{{DED3541A-58CD-4553-9F48-6F72132DAEB7}}\"");
            // Shared projects get no ProjectConfigurationPlatforms entries.
            Assert.IsFalse(content.Contains("{DED3541A-58CD-4553-9F48-6F72132DAEB7}.Debug"));
            StringAssert.Contains(content, "Contoso.Shared\\Contoso.Shared.projitems*{ded3541a-58cd-4553-9f48-6f72132daeb7}*SharedItemsImports = 13");
        }

        [TestMethod]
        public async Task AddSharedProjectToSolutionAsync_Slnx_WritesProjectWithShprojGuid()
        {
            // Format verified against the VSIX-generated Dev.AllInOne.slnx:
            // <Project Path="X/X.shproj" Id="{guid-lowercase}" /> — no Type attribute.
            var solutionFile = Path.Combine(_directory, "Contoso.slnx");
            File.WriteAllText(solutionFile, "<Solution>\n</Solution>");
            var shproj = Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj");
            Directory.CreateDirectory(Path.GetDirectoryName(shproj));
            File.WriteAllText(shproj, ShprojWithGuid);

            Assert.IsTrue(await SolutionMutator.AddSharedProjectToSolutionAsync(solutionFile, shproj));

            var document = XDocument.Load(solutionFile);
            var projectElement = document.Root.Elements("Project").Single();
            Assert.AreEqual("Contoso.Shared/Contoso.Shared.shproj", (string)projectElement.Attribute("Path"));
            Assert.AreEqual("ded3541a-58cd-4553-9f48-6f72132daeb7", (string)projectElement.Attribute("Id"));
            Assert.IsNull(projectElement.Attribute("Type"));

            // The file keeps the VSIX reference shape: no XML declaration, no BOM.
            var raw = File.ReadAllText(solutionFile);
            Assert.IsFalse(raw.Contains("<?xml"));
            using (var stream = File.OpenRead(solutionFile))
            {
                var head = new byte[3];
                stream.Read(head, 0, head.Length);
                Assert.IsFalse(head[0] == 0xEF && head[1] == 0xBB && head[2] == 0xBF);
            }

            Assert.IsFalse(await SolutionMutator.AddSharedProjectToSolutionAsync(solutionFile, shproj));
        }

        [TestMethod]
        public async Task AddSharedProjectToSolutionAsync_IsIdempotent()
        {
            var shproj = Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj");
            Directory.CreateDirectory(Path.GetDirectoryName(shproj));
            File.WriteAllText(shproj, ShprojWithGuid);

            Assert.IsTrue(await SolutionMutator.AddSharedProjectToSolutionAsync(_solutionFile, shproj));
            var once = File.ReadAllText(_solutionFile);
            Assert.IsFalse(await SolutionMutator.AddSharedProjectToSolutionAsync(_solutionFile, shproj));
            Assert.AreEqual(once, File.ReadAllText(_solutionFile));
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

        [TestMethod]
        public async Task EnsureDevKitCliJsonAsync_BindsSolutionNameAndEnsuresEnvFiles()
        {
            var path = await SolutionMutator.EnsureDevKitCliJsonAsync(_directory, "Contoso");
            Assert.IsTrue(File.Exists(path));
            var content = File.ReadAllText(path);
            // Port of VsixHelper.AddDynamicsCrmDevKitCliJsonAsync: the ??? file
            // patterns that match the resource are bound to the solution name.
            StringAssert.Contains(content, "Contoso.*.Test.dll");
            Assert.IsFalse(content.Contains("???.*.Test.dll"));

            // The project environment files are ensured as well.
            Assert.IsTrue(File.Exists(Path.Combine(_directory, ".env")));
            Assert.IsTrue(File.Exists(Path.Combine(_directory, ".env.example")));
        }
        [TestMethod]
        public async Task EnsureDevKitJsonAsync_CreatesEnvBackedConnection()
        {
            File.WriteAllText(Path.Combine(_directory, ".env"),
                "# DynamicsCrm.DevKit project-level connection values.\r\n" +
                "DEVKIT_AUTH_TYPE=ClientSecret\r\n" +
                "DEVKIT_URL=https://org.crm.dynamics.com\r\n" +
                "DEVKIT_CLIENT_ID=00000000-0000-0000-0000-000000000000\r\n" +
                "DEVKIT_CLIENT_SECRET=super-secret\r\n");

            var path = await SolutionMutator.EnsureDevKitJsonAsync(_directory);
            Assert.AreEqual(Path.Combine(_directory, "DynamicsCrm.DevKit.json"), path);

            // The VSIX must be able to load exactly this file.
            var connections = System.Text.Json.JsonSerializer.Deserialize<DevKitConnections>(File.ReadAllText(path));
            Assert.AreEqual(1, connections.CrmConnections.Count);
            Assert.AreEqual("ClientSecret", connections.DefaultCrmConnection);
            var connection = connections.CrmConnections[0];
            Assert.AreEqual("ClientSecret", connection.Name);
            Assert.AreEqual("ClientSecret", connection.Type);
            Assert.IsTrue(connection.UseProjectEnvironment);
            // Secrets live in .env, never in this file.
            Assert.IsNull(connection.ClientSecret);
            Assert.IsNull(connection.Password);
            Assert.IsFalse(File.ReadAllText(path).Contains("super-secret"));
        }

        [TestMethod]
        public async Task EnsureDevKitJsonAsync_EncryptsExplicitConnectionSecrets()
        {
            var path = await SolutionMutator.EnsureDevKitJsonAsync(_directory, new CrmConnection
            {
                Name = "Explicit",
                Type = "ClientSecret",
                Url = "https://org.crm.dynamics.com",
                ClientId = "00000000-0000-0000-0000-000000000000",
                ClientSecret = "plain-secret",
            });

            var content = File.ReadAllText(path);
            Assert.IsFalse(content.Contains("plain-secret"));
            var connections = System.Text.Json.JsonSerializer.Deserialize<DevKitConnections>(content);
            Assert.AreEqual("plain-secret", Helper.DecryptString(connections.CrmConnections[0].ClientSecret));
        }

        [TestMethod]
        public async Task EnsureDevKitJsonAsync_NoEnv_CreatesEmptyStoreAndKeepsExisting()
        {
            var path = await SolutionMutator.EnsureDevKitJsonAsync(_directory);
            Assert.IsTrue(File.Exists(path));
            StringAssert.Contains(File.ReadAllText(path), "\"CrmConnections\": []");

            // An existing store is never touched.
            File.WriteAllText(path, "{\"DefaultCrmConnection\":\"Mine\"}");
            var again = await SolutionMutator.EnsureDevKitJsonAsync(_directory, new CrmConnection { Name = "Other" });
            Assert.AreEqual(path, again);
            Assert.AreEqual("{\"DefaultCrmConnection\":\"Mine\"}", File.ReadAllText(path));
        }
    }
}
