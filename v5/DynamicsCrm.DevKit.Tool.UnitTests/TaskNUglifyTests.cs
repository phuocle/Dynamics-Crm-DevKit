using System;
using System.IO;
using DynamicsCrm.DevKit.Tool.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class TaskNUglifyTests
    {
        private string tempDir;

        [TestInitialize]
        public void Setup()
        {
            tempDir = Path.Combine(Path.GetTempPath(), "devkit-tool-tests-nuglify", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
        }

        [TestCleanup]
        public void Cleanup()
        {
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
        }

        [TestMethod]
        public void Run_MissingSource_Throws()
        {
            Assert.ThrowsExactly<FileNotFoundException>(() =>
                TaskNUglify.Run(Path.Combine(tempDir, "missing.js"), Path.Combine(tempDir, "out.js")));
        }

        [TestMethod]
        public void Run_UnsupportedExtension_Throws()
        {
            var source = Path.Combine(tempDir, "in.txt");
            File.WriteAllText(source, "hello");
            Assert.ThrowsExactly<NotSupportedException>(() =>
                TaskNUglify.Run(source, Path.Combine(tempDir, "out.txt")));
        }

        [TestMethod]
        public void Run_Html_Success()
        {
            var source = Path.Combine(tempDir, "in.html");
            var destination = Path.Combine(tempDir, "out.min.html");
            File.WriteAllText(source, "<html>  <!-- comment -->  <body>  hello  </body></html>");
            TaskNUglify.Run(source, destination);
            Assert.IsTrue(File.Exists(destination));
            Assert.IsTrue(File.ReadAllText(destination).Length > 0);
        }

        [TestMethod]
        public void Run_Css_Success()
        {
            var source = Path.Combine(tempDir, "in.css");
            var destination = Path.Combine(tempDir, "out.min.css");
            File.WriteAllText(source, "body { color: red; }");
            TaskNUglify.Run(source, destination);
            StringAssert.Contains(File.ReadAllText(destination), "color:#f00");
        }

        [TestMethod]
        public void Run_Js_Success()
        {
            var source = Path.Combine(tempDir, "in.js");
            var destination = Path.Combine(tempDir, "out.min.js");
            File.WriteAllText(source, "var a = 1;");
            TaskNUglify.Run(source, destination);
            Assert.AreEqual("var a=1", File.ReadAllText(destination));
        }

        [TestMethod]
        public void Run_Css_WithErrors_Throws()
        {
            var source = Path.Combine(tempDir, "bad.css");
            File.WriteAllText(source, "body { color: red;");
            Assert.ThrowsExactly<InvalidOperationException>(() =>
                TaskNUglify.Run(source, Path.Combine(tempDir, "bad.min.css")));
        }
    }
}
