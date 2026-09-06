using System;
using System.IO;
using DynamicsCrm.DevKit.Tool.Commands;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    internal class DecryptCommandHarness : DecryptCommand
    {
        public bool ThrowInRunTask;
        public int Invoke(DecryptSettings settings) => Execute(CommandContextFactory.Create(), settings, default);
        internal override int RunTask(DecryptSettings settings) =>
            ThrowInRunTask ? throw new Exception("boom") : base.RunTask(settings);
    }

    internal class NUglifyCommandHarness : NUglifyCommand
    {
        public int Invoke(NUglifySettings settings) => Execute(CommandContextFactory.Create(), settings, default);
    }

    internal class CoverageToXmlCommandHarness : CoverageToXmlCommand
    {
        public int Invoke(CoverageToXmlSettings settings) => Execute(CommandContextFactory.Create(), settings, default);
    }

    internal class DocumentGeneratorCommandHarness : DocumentGeneratorCommand
    {
        public bool StubCore;
        public int Invoke(DocumentGeneratorSettings settings) => Execute(CommandContextFactory.Create(), settings, default);
        internal override void RunTaskCore(DocumentGeneratorSettings settings)
        {
            if (StubCore) return;
            base.RunTaskCore(settings);
        }
    }

    internal class DocumentCodeGeneratorCommandHarness : DocumentCodeGeneratorCommand
    {
        public int Invoke(DocumentCodeGeneratorSettings settings) => Execute(CommandContextFactory.Create(), settings, default);
    }

    internal class CreateEntityCommandHarness : CreateEntityCommand
    {
        public bool StubCore;
        public int Invoke(CreateEntitySettings settings) => Execute(CommandContextFactory.Create(), settings, default);
        internal override void RunTaskCore(CreateEntitySettings settings)
        {
            if (StubCore) return;
            base.RunTaskCore(settings);
        }
    }

    internal class SolutionLayerCommandHarness : SolutionLayerCommand
    {
        public bool StubCore;
        public int Invoke(SolutionLayerSettings settings) => Execute(CommandContextFactory.Create(), settings, default);
        internal override void RunTaskCore(SolutionLayerSettings settings)
        {
            if (StubCore) return;
            base.RunTaskCore(settings);
        }
    }

    [TestClass]
    public class CommandExecuteTests
    {
        private string tempDir;

        [TestInitialize]
        public void Setup()
        {
            tempDir = Path.Combine(Path.GetTempPath(), "devkit-tool-tests", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
        }

        [TestCleanup]
        public void Cleanup()
        {
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
        }

        [TestMethod]
        public void DecryptCommand_Success_Returns0()
        {
            var harness = new DecryptCommandHarness();
            Assert.AreEqual(0, harness.Invoke(new DecryptSettings { Password = "anything" }));
        }

        [TestMethod]
        public void DecryptCommand_RunTaskThrows_Returns1()
        {
            var harness = new DecryptCommandHarness { ThrowInRunTask = true };
            Assert.AreEqual(1, harness.Invoke(new DecryptSettings { Password = "anything" }));
        }

        [TestMethod]
        public void NUglifyCommand_Success_Returns0()
        {
            var source = Path.Combine(tempDir, "in.js");
            var destination = Path.Combine(tempDir, "out.min.js");
            File.WriteAllText(source, "var a = 1;");
            var harness = new NUglifyCommandHarness();
            Assert.AreEqual(0, harness.Invoke(new NUglifySettings { Source = source, Destination = destination }));
            Assert.IsTrue(File.Exists(destination));
        }

        [TestMethod]
        public void NUglifyCommand_MissingSource_Returns1()
        {
            var harness = new NUglifyCommandHarness();
            Assert.AreEqual(1, harness.Invoke(new NUglifySettings
            {
                Source = Path.Combine(tempDir, "missing.js"),
                Destination = Path.Combine(tempDir, "out.js")
            }));
        }

        [TestMethod]
        public void CoverageToXmlCommand_RealSuccess_Returns0()
        {
            var coverage = Path.Combine(tempDir, "input.coverage");
            File.WriteAllText(coverage, "placeholder");
            var xml = Path.Combine(tempDir, "out.xml");
            var harness = new CoverageToXmlCommandHarness();
            Assert.AreEqual(0, harness.Invoke(new CoverageToXmlSettings
            {
                Coverage = coverage,
                Xml = xml,
                Dlls = "d.dll"
            }));
            Assert.IsTrue(File.Exists(xml));
        }

        [TestMethod]
        public void CoverageToXmlCommand_MissingCoverageFile_Returns1()
        {
            var harness = new CoverageToXmlCommandHarness();
            Assert.AreEqual(1, harness.Invoke(new CoverageToXmlSettings
            {
                Coverage = Path.Combine(tempDir, "missing.coverage"),
                Xml = Path.Combine(tempDir, "out.xml"),
                Dlls = "d.dll"
            }));
        }

        [TestMethod]
        public void DocumentGeneratorCommand_StubCore_Returns0()
        {
            var harness = new DocumentGeneratorCommandHarness { StubCore = true };
            Assert.AreEqual(0, harness.Invoke(new DocumentGeneratorSettings { Connection = "c", Folder = "f", Solution = "s" }));
        }

        [TestMethod]
        public void DocumentGeneratorCommand_BadConnection_Returns1()
        {
            var harness = new DocumentGeneratorCommandHarness();
            Assert.AreEqual(1, harness.Invoke(new DocumentGeneratorSettings
            {
                Connection = "bogus",
                Folder = Path.Combine(tempDir, "docs"),
                Solution = "s"
            }));
        }

        [TestMethod]
        public void DocumentCodeGeneratorCommand_EmptyFolder_Success_Returns0()
        {
            var output = Path.Combine(tempDir, "out");
            var harness = new DocumentCodeGeneratorCommandHarness();
            Assert.AreEqual(0, harness.Invoke(new DocumentCodeGeneratorSettings
            {
                Folder = tempDir,
                Output = output
            }));
        }

        [TestMethod]
        public void DocumentCodeGeneratorCommand_MissingFolder_Returns1()
        {
            var harness = new DocumentCodeGeneratorCommandHarness();
            Assert.AreEqual(1, harness.Invoke(new DocumentCodeGeneratorSettings
            {
                Folder = Path.Combine(tempDir, "missing"),
                Output = Path.Combine(tempDir, "out")
            }));
        }

        [TestMethod]
        public void CreateEntityCommand_StubCore_Returns0()
        {
            var harness = new CreateEntityCommandHarness { StubCore = true };
            Assert.AreEqual(0, harness.Invoke(new CreateEntitySettings
            {
                Connection = "c", Solution = "s", EntityDisplayName = "e", EntityType = "UserOwned"
            }));
        }

        [TestMethod]
        public void CreateEntityCommand_BadConnection_Returns1()
        {
            var harness = new CreateEntityCommandHarness();
            Assert.AreEqual(1, harness.Invoke(new CreateEntitySettings
            {
                Connection = "bogus", Solution = "s", EntityDisplayName = "e", EntityType = "UserOwned"
            }));
        }

        [TestMethod]
        public void SolutionLayerCommand_StubCore_Returns0()
        {
            var harness = new SolutionLayerCommandHarness { StubCore = true };
            Assert.AreEqual(0, harness.Invoke(new SolutionLayerSettings { Connection = "c", Solutions = " a , b " }));
        }

        [TestMethod]
        public void SolutionLayerCommand_BadConnection_Returns1()
        {
            var harness = new SolutionLayerCommandHarness();
            Assert.AreEqual(1, harness.Invoke(new SolutionLayerSettings { Connection = "bogus", Solutions = "a" }));
        }
    }
}
