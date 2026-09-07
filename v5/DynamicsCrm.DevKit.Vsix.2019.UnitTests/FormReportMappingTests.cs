using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit2019.UnitTests.TestInfrastructure;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;

namespace DynamicsCrm.DevKit2019.UnitTests
{
    [TestClass]
    public class FormReportMappingTests
    {
        private string tempDir;

        [TestInitialize]
        public void SetUp()
        {
            tempDir = Path.Combine(Path.GetTempPath(), "DevKit2019Tests", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);

            // SetWindowIcon looks for icon32.png next to the DynamicsCrm.DevKit.2019 assembly.
            var assemblyDir = Path.GetDirectoryName(typeof(FormReportMapping).Assembly.Location);
            var iconTarget = Path.Combine(assemblyDir, "icon32.png");
            var iconSource = FindRepoFile("DynamicsCrm.DevKit.2019", "icon32.png");
            if (iconSource != null && !File.Exists(iconTarget))
            {
                File.Copy(iconSource, iconTarget);
            }
        }

        private static string FindRepoFile(string projectDir, string fileName)
        {
            var dir = new DirectoryInfo(AppContext.BaseDirectory);
            while (dir != null)
            {
                var candidate = Path.Combine(dir.FullName, projectDir, fileName);
                if (File.Exists(candidate)) return candidate;
                dir = dir.Parent;
            }
            return null;
        }

        [TestCleanup]
        public void TearDown()
        {
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, true);
        }

        private static Entity ReportEntity(string name, string fileName, int? languageCode, object language, bool? isManaged)
        {
            var entity = new Entity("report");
            entity["name"] = name;
            entity["filename"] = fileName;
            entity["languagecode"] = languageCode;
            if (language != null) entity["l.language"] = new Microsoft.Xrm.Sdk.AliasedValue("languagelocale", "language", language);
            entity["ismanaged"] = isManaged;
            return entity;
        }

        private static FakeCrmServiceClient FakeClient(params Entity[] entities)
        {
            return new FakeCrmServiceClient { Entities = entities.ToList() };
        }

        private FormReportMapping CreateForm(IOrganizationService client, string fullFileName, DeployReport cachedMapping)
        {
            FormReportMapping form = null;
            StaRunner.Run(() => form = new FormReportMapping(client, fullFileName, cachedMapping));
            return form;
        }

        #region LoadReports — selection branches

        [TestMethod]
        public void Ctor_ReportsReturned_SelectsByCachedMappingReportId()
        {
            var cached = new DeployReport { File = @"C:\x\a.rdl", ReportId = Guid.NewGuid() };
            var match = ReportEntity("Match", "a.rdl", 1033, "English", true);
            match.Id = cached.ReportId;
            var client = FakeClient(
                ReportEntity("Other", "b.rdl", 1033, "English", false),
                match);

            FormReportMapping form = null;
            StaRunner.Run(() =>
            {
                form = new FormReportMapping(client, @"C:\x\a.rdl", cached);
                Assert.AreEqual(cached.ReportId, ((DeployReport)form.comboReports.SelectedItem).ReportId);
                Assert.IsTrue(form.buttonOK.IsEnabled);
                Assert.AreEqual(System.Windows.Visibility.Collapsed, form.textStatus.Visibility);
            });
        }

        [TestMethod]
        public void Ctor_NoCachedMatch_SelectsByReportFileName()
        {
            var client = FakeClient(
                ReportEntity("Other", "b.rdl", 1033, "English", false),
                ReportEntity("Local Match", "a.rdl", 1033, "English", false));

            FormReportMapping form = null;
            StaRunner.Run(() =>
            {
                form = new FormReportMapping(client, @"C:\x\a.rdl", null);
                Assert.AreEqual("a.rdl", ((DeployReport)form.comboReports.SelectedItem).ReportFileName);
            });
        }

        [TestMethod]
        public void Ctor_NoMatchAtAll_SelectsFirstReport()
        {
            var client = FakeClient(
                ReportEntity("First", "f.rdl", 1033, "English", false),
                ReportEntity("Second", "g.rdl", 1033, "English", false));

            FormReportMapping form = null;
            StaRunner.Run(() =>
            {
                form = new FormReportMapping(client, @"C:\x\a.rdl", new DeployReport { File = @"C:\x\a.rdl", ReportId = Guid.NewGuid() });
                Assert.AreEqual("f.rdl", ((DeployReport)form.comboReports.SelectedItem).ReportFileName);
            });
        }

        [TestMethod]
        public void Ctor_NoReportsFound_ButtonOkDisabled()
        {
            var client = FakeClient();

            FormReportMapping form = null;
            StaRunner.Run(() =>
            {
                form = new FormReportMapping(client, @"C:\x\a.rdl", null);
                Assert.IsFalse(form.buttonOK.IsEnabled);
                Assert.AreEqual(System.Windows.Visibility.Visible, form.textStatus.Visibility);
                Assert.AreEqual("No report found for the selected file name.", form.textStatus.Text);
                Assert.AreEqual(@"C:\x\a.rdl", form.textboxFile.Text);
            });
        }

        [TestMethod]
        public void Ctor_NullValuesInRows_MapsToDefaults()
        {
            var client = FakeClient(
                ReportEntity(null, null, null, null, null));

            FormReportMapping form = null;
            StaRunner.Run(() =>
            {
                form = new FormReportMapping(client, @"C:\x\a.rdl", null);
                var selected = (DeployReport)form.comboReports.SelectedItem;
                Assert.AreEqual(string.Empty, selected.ReportName);
                Assert.AreEqual(string.Empty, selected.ReportFileName);
                Assert.AreEqual(0, selected.LanguageCode);
                Assert.AreEqual(string.Empty, selected.Language);
                Assert.IsFalse(selected.IsManaged);
            });
        }

        #endregion

        #region Interactions

        [TestMethod]
        public void ComboReports_SelectionChanged_TogglesButtonState()
        {
            var client = FakeClient(ReportEntity("First", "f.rdl", 1033, "English", false));

            StaRunner.Run(() =>
            {
                var form = new FormReportMapping(client, @"C:\x\a.rdl", null);
                form.comboReports.SelectedItem = null;
                Assert.IsFalse(form.buttonOK.IsEnabled);
                Assert.AreEqual(System.Windows.Visibility.Visible, form.textStatus.Visibility);

                form.comboReports.SelectedIndex = 0;
                Assert.IsTrue(form.buttonOK.IsEnabled);
                Assert.AreEqual(System.Windows.Visibility.Collapsed, form.textStatus.Visibility);
                Assert.AreEqual(string.Empty, form.textStatus.Text);
            });
        }

        [TestMethod]
        public void ButtonOK_Click_SetsSelectedReport_AndCloses()
        {
            var client = FakeClient(ReportEntity("First", "f.rdl", 1033, "English", false));
            var file = Path.Combine(tempDir, "f.rdl");
            File.WriteAllText(file, "report body");

            FormReportMapping form = null;
            StaRunner.Run(() =>
            {
                form = new FormReportMapping(client, file, null);
                form.Loaded += (s, e) => form.buttonOK.RaiseEvent(new System.Windows.RoutedEventArgs(System.Windows.Controls.Button.ClickEvent));
                var result = form.ShowDialog();
                Assert.AreEqual(true, result);
            });
            Assert.IsNotNull(form.SelectedReport);
            Assert.AreEqual(file, form.SelectedReport.File);
            Assert.AreEqual("f.rdl", form.SelectedReport.ReportFileName);
        }

        [TestMethod]
        public void ButtonOK_Click_NoSelection_DoesNotClose()
        {
            var client = FakeClient(ReportEntity("First", "f.rdl", 1033, "English", false));

            StaRunner.Run(() =>
            {
                var form = new FormReportMapping(client, @"C:\x\a.rdl", null);
                form.comboReports.SelectedItem = null;
                form.Loaded += (s, e) => form.buttonOK.RaiseEvent(new System.Windows.RoutedEventArgs(System.Windows.Controls.Button.ClickEvent));
                var closed = new ManualResetEvent(false);
                form.Closed += (s, e) => closed.Set();
                form.Show();
                Assert.IsFalse(closed.WaitOne(500));
                Assert.IsNull(form.SelectedReport);
                form.Close();
            });
        }

        [TestMethod]
        public void ButtonCancel_Click_SetsDialogResultFalse()
        {
            var client = FakeClient(ReportEntity("First", "f.rdl", 1033, "English", false));

            StaRunner.Run(() =>
            {
                var form = new FormReportMapping(client, @"C:\x\a.rdl", null);
                form.Loaded += (s, e) => FindCancelButton(form)
                    .RaiseEvent(new System.Windows.RoutedEventArgs(System.Windows.Controls.Button.ClickEvent));
                var result = form.ShowDialog();
                Assert.AreEqual(false, result);
                Assert.IsNull(form.SelectedReport);
            });
        }

        private static System.Windows.Controls.Button FindCancelButton(System.Windows.Window form)
        {
            return FindDescendants(form).OfType<System.Windows.Controls.Button>()
                .First(b => (string)b.Content == "Cancel");
        }

        private static IEnumerable<System.Windows.DependencyObject> FindDescendants(System.Windows.DependencyObject parent)
        {
            var count = System.Windows.Media.VisualTreeHelper.GetChildrenCount(parent);
            for (var i = 0; i < count; i++)
            {
                var child = System.Windows.Media.VisualTreeHelper.GetChild(parent, i);
                yield return child;
                foreach (var descendant in FindDescendants(child)) yield return descendant;
            }
        }


        #endregion
    }
}
