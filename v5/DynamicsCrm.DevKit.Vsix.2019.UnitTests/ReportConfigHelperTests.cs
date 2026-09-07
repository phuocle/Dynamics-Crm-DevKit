using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit2019.UnitTests.TestInfrastructure;
using EnvDTE80;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit2019.UnitTests
{
    [TestClass]
    public class ReportConfigHelperTests
    {
        private string tempDir;

        [TestInitialize]
        public void SetUp()
        {
            tempDir = Path.Combine(Path.GetTempPath(), "DevKit2019Tests", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
        }

        [TestCleanup]
        public void TearDown()
        {
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, true);
        }

        private string TempFile(string name) => Path.Combine(tempDir, name);

        #region GetConfigFileName

        [TestMethod]
        public void GetConfigFileName_NullDte_ReturnsNull()
        {
            Assert.IsNull(ReportConfigHelper.GetConfigFileName(null));
        }

        [TestMethod]
        public void GetConfigFileName_WithSolution_ReturnsConfigPathBesideSolution()
        {
            var dte = FakeDte.Create();
            Assert.AreEqual(@"C:\fake\DynamicsCrm.DevKit.Config.json", ReportConfigHelper.GetConfigFileName(dte));
        }

        [TestMethod]
        public void GetConfigFileName_SolutionFullNameEmpty_ReturnsNull()
        {
            var dte = FakeDte.Create(solutionFullName: string.Empty);
            Assert.IsNull(ReportConfigHelper.GetConfigFileName(dte));
        }

        #endregion

        #region ReadConfig

        [TestMethod]
        public void ReadConfig_NullFileName_ReturnsDefault()
        {
            var config = ReportConfigHelper.ReadConfig(null);
            Assert.IsNotNull(config);
            Assert.AreEqual(0, config.Reports.Count);
        }

        [TestMethod]
        public void ReadConfig_MissingFile_ReturnsDefault()
        {
            var config = ReportConfigHelper.ReadConfig(TempFile("missing.json"));
            Assert.IsNotNull(config);
            Assert.AreEqual(0, config.Reports.Count);
        }

        [TestMethod]
        public void ReadConfig_WithReports_ParsesList()
        {
            var file = TempFile("config.json");
            File.WriteAllText(file, "{\"Reports\":[{\"File\":\"a.rdl\"}]}");
            var config = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, config.Reports.Count);
            Assert.AreEqual("a.rdl", config.Reports[0].File);
        }

        [TestMethod]
        public void ReadConfig_ReportsNullLiteral_ReturnsEmptyList()
        {
            var file = TempFile("config-null.json");
            File.WriteAllText(file, "{\"Reports\":null}");
            var config = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(0, config.Reports.Count);
        }

        [TestMethod]
        public void ReadConfig_WithoutReportsKey_ReturnsEmptyList()
        {
            var file = TempFile("config-empty.json");
            File.WriteAllText(file, "{}");
            var config = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(0, config.Reports.Count);
        }

        #endregion

        #region GetReport

        [TestMethod]
        public void GetReport_NullConfig_ReturnsNull()
        {
            Assert.IsNull(ReportConfigHelper.GetReport(null, "a.rdl"));
        }

        [TestMethod]
        public void GetReport_MatchesFileCaseInsensitive()
        {
            var config = new ConfigJson
            {
                Reports = new List<DeployReport> { new DeployReport { File = "A.RDL" } }
            };
            Assert.AreEqual("A.RDL", ReportConfigHelper.GetReport(config, "a.rdl").File);
        }

        [TestMethod]
        public void GetReport_NoMatch_ReturnsNull()
        {
            var config = new ConfigJson
            {
                Reports = new List<DeployReport> { new DeployReport { File = "other.rdl" } }
            };
            Assert.IsNull(ReportConfigHelper.GetReport(config, "a.rdl"));
        }

        #endregion

        #region SaveReport — add / update

        [TestMethod]
        public void SaveReport_FileNotExists_CreatesConfig()
        {
            var file = TempFile("new.json");
            ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "b.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
            Assert.AreEqual("b.rdl", saved.Reports[0].File);
            StringAssert.Contains(File.ReadAllText(file), "\"Reports\"");
        }

        [TestMethod]
        public void SaveReport_ExistingFileWithoutReports_InsertsWithSeparator()
        {
            var file = TempFile("insert-sep.json");
            File.WriteAllText(file, "{\r\n    \"WebResources\": []\r\n}");
            ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "b.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
            Assert.AreEqual(0, saved.WebResources.Count);
            StringAssert.Contains(File.ReadAllText(file), "\"WebResources\"");
        }

        [TestMethod]
        public void SaveReport_ExistingFileWithoutReports_NoSeparator()
        {
            var file = TempFile("insert-nosep.json");
            File.WriteAllText(file, "{}");
            ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "b.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
        }

        [TestMethod]
        public void SaveReport_ExistingFileWithReports_ReplacesProperty_Crlf()
        {
            var file = TempFile("replace-crlf.json");
            File.WriteAllText(file, "{\r\n    \"W\\\\eb\": \"x\",\r\n    \"Nested\": {\"Reports\": \"keep\"},\r\n    \"Reports\": [ {\"File\": \"old.rdl\"} ]\r\n}");
            ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "new.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
            Assert.AreEqual("new.rdl", saved.Reports[0].File);
            var text = File.ReadAllText(file);
            StringAssert.Contains(text, "\"Nested\"");
            Assert.IsTrue(text.Contains("\r\n"), "CRLF line endings must be preserved.");
        }

        [TestMethod]
        public void SaveReport_ExistingFileWithReports_ReplacesProperty_Lf()
        {
            var file = TempFile("replace-lf.json");
            File.WriteAllText(file, "{\n    \"Reports\": [ {\"File\": \"old.rdl\"} ]\n}");
            ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "new.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
            Assert.AreEqual("new.rdl", saved.Reports[0].File);
        }

        [TestMethod]
        public void SaveReport_ReportsValueIsScalar()
        {
            var file = TempFile("scalar.json");
            File.WriteAllText(file, "{\"Reports\": 42}");
            ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "b.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
        }

        [TestMethod]
        public void SaveReport_ReportsValueIsString()
        {
            var file = TempFile("string.json");
            File.WriteAllText(file, "{\"Reports\": \"old\"}");
            ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "b.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
        }

        [TestMethod]
        public void SaveReport_DepthOneStringEqualsReportsAsValue_InsertsProperty()
        {
            var file = TempFile("value-reports.json");
            File.WriteAllText(file, "{\"Desc\": \"Reports\"}");
            ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "b.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
            StringAssert.Contains(File.ReadAllText(file), "\"Desc\"");
        }

        [TestMethod]
        public void SaveReport_UpdateExistingReport()
        {
            var file = TempFile("update.json");
            var config = new ConfigJson
            {
                Reports = new List<DeployReport>
                {
                    new DeployReport { File = "a.rdl", ReportName = "old", ReportFileName = "a.rdl", LanguageCode = 1033, Language = "English", IsManaged = false }
                }
            };
            ReportConfigHelper.SaveReport(file, config, new DeployReport
            {
                File = "A.RDL",
                ReportId = Guid.NewGuid(),
                ReportName = "updated",
                ReportFileName = "A.rdl",
                LanguageCode = 1066,
                Language = "Tiếng Việt",
                IsManaged = true
            });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
            var report = saved.Reports[0];
            Assert.AreEqual("updated", report.ReportName);
            Assert.AreEqual(1066, report.LanguageCode);
            Assert.AreEqual("Tiếng Việt", report.Language);
            Assert.IsTrue(report.IsManaged);
            Assert.IsFalse(report.ReportId == Guid.Empty);
        }

        [TestMethod]
        public void SaveReport_ReportsSortedByFile()
        {
            var file = TempFile("sorted.json");
            var config = new ConfigJson
            {
                Reports = new List<DeployReport>
                {
                    new DeployReport { File = "z.rdl" },
                    new DeployReport { File = "a.rdl" }
                }
            };
            ReportConfigHelper.SaveReport(file, config, new DeployReport { File = "m.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            CollectionAssert.AreEqual(
                new[] { "a.rdl", "m.rdl", "z.rdl" },
                saved.Reports.Select(x => x.File).ToArray());
        }

        [TestMethod]
        public void SaveReport_EmptyFile_TextFallbackToEmptyObject()
        {
            var file = TempFile("empty.json");
            File.WriteAllText(file, string.Empty);
            ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "b.rdl" });
            var saved = ReportConfigHelper.ReadConfig(file);
            Assert.AreEqual(1, saved.Reports.Count);
        }

        #endregion

        #region SaveReport — encodings preserved

        [TestMethod]
        public void SaveReport_ExistingFile_Encodings()
        {
            foreach (var pair in new[]
            {
                new { Name = "utf8bom.json", Encoding = (Encoding)new UTF8Encoding(true) },
                new { Name = "utf16le.json", Encoding = (Encoding)new UnicodeEncoding(false, false) },
                new { Name = "utf16be.json", Encoding = (Encoding)new UnicodeEncoding(true, false) },
                new { Name = "utf8.json", Encoding = (Encoding)new UTF8Encoding(false) }
            })
            {
                var file = TempFile(pair.Name);
                File.WriteAllText(file, "{\"Reports\": []}", pair.Encoding);
                ReportConfigHelper.SaveReport(file, new ConfigJson(), new DeployReport { File = "b.rdl" });
                Assert.AreEqual(1, ReportConfigHelper.ReadConfig(file).Reports.Count, pair.Name);
            }
        }

        #endregion

        #region Defensive throw branches (unreachable via public API — JObject.Parse validates first)

        private static object InvokePrivate(string method, params object[] args)
        {
            return typeof(ReportConfigHelper)
                .GetMethod(method, BindingFlags.NonPublic | BindingFlags.Static)
                .Invoke(null, args);
        }

        private static void AssertThrows(Action action)
        {
            try
            {
                action();
                Assert.Fail("Expected TargetInvocationException.");
            }
            catch (TargetInvocationException)
            {
            }
        }

        [TestMethod]
        public void FindLastObjectEnd_NoClosingBrace_Throws()
        {
            AssertThrows(() => InvokePrivate("FindLastObjectEnd", "{\"a\": 1"));
        }

        [TestMethod]
        public void FindStringEnd_UnclosedString_Throws()
        {
            AssertThrows(() => InvokePrivate("FindStringEnd", "\"abc", 0));
        }

        [TestMethod]
        public void FindNextNonStringChar_NoExpectedChar_Throws()
        {
            // text contains: "a\"b" ,  — walks an escaped string then fails to find ':'
            AssertThrows(() => InvokePrivate("FindNextNonStringChar", "\"a\\\"b\" , ", ':', 0));
        }

        [TestMethod]
        public void FindContainerEnd_UnclosedContainer_Throws()
        {
            AssertThrows(() => InvokePrivate("FindContainerEnd", "[1, 2", 0));
        }

        #endregion
    }
}
