using System;
using System.Reflection;
using DynamicsCrm.DevKit.Tool;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class ProgramTests
    {
        private static int InvokeMain(string[] args)
        {
            var method = typeof(Program).GetMethod("Main", BindingFlags.NonPublic | BindingFlags.Static);
            Assert.IsNotNull(method);
            return (int)method.Invoke(null, new object[] { args });
        }

        [TestMethod]
        public void Main_NullArgs_ShowsHelp_Returns0()
        {
            Assert.AreEqual(0, InvokeMain(null));
        }

        [TestMethod]
        public void Main_VersionFlag_Returns0()
        {
            Assert.AreEqual(0, InvokeMain(new[] { "--version" }));
        }

        [TestMethod]
        public void Main_DecryptCommand_Returns0()
        {
            Assert.AreEqual(0, InvokeMain(new[] { "decrypt", "--password", "test-value" }));
        }

        [TestMethod]
        public void Main_FailingCommand_Returns1()
        {
            Assert.AreEqual(1, InvokeMain(new[] { "nuglify", "--source", "missing-file.js", "--destination", "out.js" }));
        }
    }
}
