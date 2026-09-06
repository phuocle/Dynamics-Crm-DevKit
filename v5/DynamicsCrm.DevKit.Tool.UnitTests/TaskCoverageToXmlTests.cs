using System;
using System.Diagnostics;
using System.IO;
using DynamicsCrm.DevKit.Tool.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class TaskCoverageToXmlTests
    {
        private string tempDir;

        [TestInitialize]
        public void Setup()
        {
            tempDir = Path.Combine(Path.GetTempPath(), "devkit-tool-tests-coverage", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
        }

        [TestCleanup]
        public void Cleanup()
        {
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
        }

        [TestMethod]
        public void Run_MissingCoverageFile_Throws()
        {
            Assert.ThrowsExactly<FileNotFoundException>(() =>
                TaskCoverageToXml.Run(Path.Combine(tempDir, "missing.coverage"), Path.Combine(tempDir, "out.xml"), "d.dll"));
        }

        [TestMethod]
        public void Run_RealDotNetCoverage_RunsActualTool()
        {
            var coverage = Path.Combine(tempDir, "input.coverage");
            File.WriteAllText(coverage, "not a real coverage file");
            var xml = Path.Combine(tempDir, "out.xml");
            TaskCoverageToXml.Run(coverage, xml, "d.dll");
            Assert.IsTrue(File.Exists(xml));
        }

        [TestMethod]
        public void Run_ProcessSucceeds_WritesDone()
        {
            var coverage = Path.Combine(tempDir, "valid.coverage");
            File.WriteAllText(coverage, "data");
            TaskCoverageToXml.Run(coverage, Path.Combine(tempDir, "sub", "out.xml"),
                "d.dll", psi => (0, string.Empty, string.Empty));
            Assert.IsTrue(Directory.Exists(Path.Combine(tempDir, "sub")));
        }

        [TestMethod]
        public void Run_ProcessFailsWithError_Throws()
        {
            var coverage = Path.Combine(tempDir, "valid.coverage");
            File.WriteAllText(coverage, "data");
            Assert.ThrowsExactly<InvalidOperationException>(() =>
                TaskCoverageToXml.Run(coverage, Path.Combine(tempDir, "out.xml"), "d.dll", psi => (1, "out", "err text")));
        }

        [TestMethod]
        public void Run_ProcessFailsWithoutError_ThrowsWithOutput()
        {
            var coverage = Path.Combine(tempDir, "valid.coverage");
            File.WriteAllText(coverage, "data");
            Assert.ThrowsExactly<InvalidOperationException>(() =>
                TaskCoverageToXml.Run(coverage, Path.Combine(tempDir, "out.xml"), "d.dll", psi => (2, "output text", "  ")));
        }

        [TestMethod]
        public void StartDotNetCoverage_NullProcess_Throws()
        {
            var psi = new ProcessStartInfo { FileName = "dotnet-coverage" };
            Assert.ThrowsExactly<InvalidOperationException>(() =>
                TaskCoverageToXml.StartDotNetCoverage(psi, _ => null));
        }
    }
}
