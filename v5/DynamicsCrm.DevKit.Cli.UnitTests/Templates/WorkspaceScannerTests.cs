using DynamicsCrm.DevKit.Shared.Templates;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    [TestClass]
    [DoNotParallelize]
    public class WorkspaceScannerTests
    {
        private string _directory;

        [TestInitialize]
        public void Initialize()
        {
            _directory = Path.Combine(Path.GetTempPath(), "devkit-scanner-tests", Guid.NewGuid().ToString("N"));
        }

        [TestCleanup]
        public void Cleanup()
        {
            if (Directory.Exists(_directory)) Directory.Delete(_directory, true);
        }

        [TestMethod]
        public void Scan_FindsSolutionSharedProjectAndRootNamespace()
        {
            Directory.CreateDirectory(Path.Combine(_directory, "Contoso.Shared"));
            Directory.CreateDirectory(Path.Combine(_directory, "Contoso.Plugin"));
            File.WriteAllText(Path.Combine(_directory, "Contoso.sln"), "Microsoft Visual Studio Solution File, Format Version 12.00");
            File.WriteAllText(Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj"), "<Project />");
            File.WriteAllText(Path.Combine(_directory, "Contoso.Plugin", "Contoso.Plugin.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\" />\r\n");

            var context = WorkspaceScanner.Scan(Path.Combine(_directory, "Contoso.Plugin"));

            Assert.IsTrue(context.HasSolution);
            Assert.AreEqual("Contoso", context.SolutionName);
            Assert.AreEqual(_directory, context.SolutionDirectory);
            Assert.AreEqual("Contoso.Shared", context.SharedProjectName);
            Assert.AreEqual("Contoso.Shared.Test", context.SharedTestProjectName);
            Assert.AreEqual("Contoso.ProxyTypes", context.ProxyTypesProjectName);
            Assert.AreEqual("Contoso.Plugin", context.RootNamespace);
        }

        [TestMethod]
        public void Scan_ReadsExplicitRootNamespace()
        {
            Directory.CreateDirectory(Path.Combine(_directory, "Contoso.Plugin"));
            File.WriteAllText(Path.Combine(_directory, "Contoso.Plugin", "Contoso.Plugin.csproj"),
                "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <RootNamespace>Custom.Namespace</RootNamespace>\r\n  </PropertyGroup>\r\n</Project>");

            var context = WorkspaceScanner.Scan(Path.Combine(_directory, "Contoso.Plugin"));
            Assert.AreEqual("Custom.Namespace", context.RootNamespace);
        }

        [TestMethod]
        public void Scan_MissingDirectory_ReturnsEmptyContext()
        {
            var context = WorkspaceScanner.Scan(Path.Combine(_directory, "does-not-exist"));
            Assert.IsFalse(context.HasSolution);
            Assert.AreEqual(string.Empty, context.SolutionName);
        }

        [TestMethod]
        public void Scan_NoSolution_EmptyNames()
        {
            Directory.CreateDirectory(_directory);
            var context = WorkspaceScanner.Scan(_directory);
            Assert.IsFalse(context.HasSolution);
            Assert.AreEqual(".Shared.Test", context.SharedTestProjectName);
        }

        [TestMethod]
        public void Scan_PrefersSlnxOverStaleSln()
        {
            // Mixed folder (reference TestAllInOne shape): the live solution
            // is the .slnx, the .sln is a stale leftover.
            Directory.CreateDirectory(_directory);
            File.WriteAllText(Path.Combine(_directory, "Dev.AllInOne.2019.sln"), "stale");
            File.WriteAllText(Path.Combine(_directory, "Dev.AllInOne.slnx"), "<Solution />");

            var context = WorkspaceScanner.Scan(_directory);

            Assert.IsTrue(context.HasSolution);
            Assert.AreEqual("Dev.AllInOne", context.SolutionName);
            StringAssert.EndsWith(context.SolutionFile, "Dev.AllInOne.slnx");
        }
    }
}
