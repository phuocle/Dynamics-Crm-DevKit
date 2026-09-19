using System;
using System.Collections.Generic;
using System.IO;
using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class ToolSharedProjectEnvironmentCoverageTests
    {
        private string _tempDir;

        [TestInitialize]
        public void Init()
        {
            _tempDir = Path.Combine(Path.GetTempPath(), "ProjectEnvTest_Tool_" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(_tempDir);
        }

        [TestCleanup]
        public void Cleanup()
        {
            if (Directory.Exists(_tempDir)) Directory.Delete(_tempDir, true);
        }

        [TestMethod]
        public void FindFile_NullEmptyWhitespace_ReturnsNull()
        {
            Assert.IsNull(ProjectEnvironment.FindFile(null));
            Assert.IsNull(ProjectEnvironment.FindFile(""));
            Assert.IsNull(ProjectEnvironment.FindFile("   "));
            Assert.IsNull(ProjectEnvironment.FindFile(@"C:\Windows\System32"));
        }

        [TestMethod]
        public void FindFile_Exists_ReturnsPath()
        {
            var envPath = Path.Combine(_tempDir, ".env");
            File.WriteAllText(envPath, "DEVKIT_URL=test");
            var result = ProjectEnvironment.FindFile(_tempDir);
            Assert.AreEqual(envPath, result);
        }

        [TestMethod]
        public void FindFile_ExistsInParent_ReturnsPath()
        {
            var envPath = Path.Combine(_tempDir, ".env");
            File.WriteAllText(envPath, "x");
            var sub = Path.Combine(_tempDir, "sub");
            Directory.CreateDirectory(sub);
            var result = ProjectEnvironment.FindFile(sub);
            Assert.AreEqual(envPath, result);
        }

        [TestMethod]
        public void ResolveFileFromJsonOrDirectory_Tests()
        {
            var envPath = Path.Combine(_tempDir, ".env");
            File.WriteAllText(envPath, "x");

            Assert.AreEqual(envPath, ProjectEnvironment.ResolveFileFromJsonOrDirectory(null, _tempDir));

            var sub = Path.Combine(_tempDir, "sub");
            Directory.CreateDirectory(sub);
            var jsonPath = Path.Combine(sub, "x.json");
            File.WriteAllText(jsonPath, "{}");
            Assert.AreEqual(envPath, ProjectEnvironment.ResolveFileFromJsonOrDirectory(jsonPath, _tempDir));

            Assert.AreEqual(envPath, ProjectEnvironment.ResolveFileFromJsonOrDirectory("nonexistent.json", _tempDir));
        }

        [TestMethod]
        public void Read_Variations()
        {
            Assert.AreEqual(0, ProjectEnvironment.Read("").Count);
            Assert.AreEqual(0, ProjectEnvironment.Read(@"C:\NonExistent\.env").Count);

            var path = Path.Combine(_tempDir, ".env");
            File.WriteAllText(path, "# Comment\n\nDEVKIT_URL=\"https://x.com\"\nDEVKIT_AUTH_TYPE=ClientSecret\nnoequals\n=novalue\n");
            var result = ProjectEnvironment.Read(path);
            Assert.AreEqual(2, result.Count);
            Assert.AreEqual("https://x.com", result["DEVKIT_URL"]);
            Assert.AreEqual("https://x.com", result["devkit_url"]);
            Assert.AreEqual("ClientSecret", result["DEVKIT_AUTH_TYPE"]);
        }

        [TestMethod]
        public void GetValue_Variations()
        {
            Assert.IsNull(ProjectEnvironment.GetValue(null, "key"));
            Assert.IsNull(ProjectEnvironment.GetValue(new Dictionary<string, string>(), null));

            var dict = new Dictionary<string, string> { { "key1", "val1" } };
            Assert.AreEqual("val1", ProjectEnvironment.GetValue(dict, "key1"));
            Assert.IsNull(ProjectEnvironment.GetValue(dict, "missing"));
        }

        [TestMethod]
        public void EnsureFile_Variations()
        {
            ProjectEnvironment.EnsureFile(null);
            ProjectEnvironment.EnsureFile("");

            var subDir = Path.Combine(_tempDir, "newdir");
            Directory.CreateDirectory(subDir);
            ProjectEnvironment.EnsureFile(subDir);
            Assert.IsTrue(File.Exists(Path.Combine(subDir, ".env")));
            Assert.IsTrue(File.Exists(Path.Combine(subDir, ".env.example")));

            var envPath = Path.Combine(_tempDir, ".env");
            File.WriteAllText(envPath, "DEVKIT_URL=existing");
            ProjectEnvironment.EnsureFile(_tempDir);
            var content = File.ReadAllText(envPath);
            StringAssert.Contains(content, "existing");
        }

        [TestMethod]
        public void WriteOrUpdate_Variations()
        {
            ProjectEnvironment.WriteOrUpdate(null, new Dictionary<string, string>());
            ProjectEnvironment.WriteOrUpdate(Path.Combine(_tempDir, "x.env"), null);
            ProjectEnvironment.WriteOrUpdate("", new Dictionary<string, string>());

            var path = Path.Combine(_tempDir, "test.env");
            var values = new Dictionary<string, string> { { "KEY1", "val1" } };
            ProjectEnvironment.WriteOrUpdate(path, values);
            Assert.IsTrue(File.Exists(path));
            StringAssert.Contains(File.ReadAllText(path), "KEY1=val1");

            var valuesUpdate = new Dictionary<string, string> { { "KEY1", "newval" }, { "KEY2", "val2" } };
            ProjectEnvironment.WriteOrUpdate(path, valuesUpdate);
            var updated = File.ReadAllText(path);
            StringAssert.Contains(updated, "KEY1=newval");
            StringAssert.Contains(updated, "KEY2=val2");
            Assert.IsFalse(updated.Contains("KEY1=val1"));
        }

        [TestMethod]
        public void EnsureFile_WithGitIgnore_AppendsAndAvoidsDuplicates()
        {
            var gitIgnorePath = Path.Combine(_tempDir, ".gitignore");
            File.WriteAllText(gitIgnorePath, "node_modules\nbin/\n");

            var subDir = Path.Combine(_tempDir, "src", "project");
            Directory.CreateDirectory(subDir);

            // First call: appends sub/.env to .gitignore
            ProjectEnvironment.EnsureFile(subDir);
            var gitIgnoreContent = File.ReadAllText(gitIgnorePath);
            StringAssert.Contains(gitIgnoreContent, "# DynamicsCrm.DevKit local project environment");

            // Second call: does not duplicate entry
            ProjectEnvironment.EnsureFile(subDir);
            var gitIgnoreContent2 = File.ReadAllText(gitIgnorePath);
            Assert.AreEqual(gitIgnoreContent, gitIgnoreContent2);
        }

        [TestMethod]
        public void EnsureFile_ExistingFilesWithoutHelpComment_InsertsHelpComment()
        {
            var envPath = Path.Combine(_tempDir, ".env");
            File.WriteAllText(envPath, "DEVKIT_URL=https://test.crm.dynamics.com\nDEVKIT_AUTH_TYPE=ClientSecret\n");

            var examplePath = Path.Combine(_tempDir, ".env.example");
            File.WriteAllText(examplePath, "DEVKIT_AUTH_TYPE=ClientSecret\nDEVKIT_URL=https://test.crm.dynamics.com\n");

            ProjectEnvironment.EnsureFile(_tempDir);

            var envContent = File.ReadAllText(envPath);
            StringAssert.Contains(envContent, "# Supported DEVKIT_AUTH_TYPE values");

            var exampleContent = File.ReadAllText(examplePath);
            StringAssert.Contains(exampleContent, "# Supported DEVKIT_AUTH_TYPE values");
        }
    }
}
