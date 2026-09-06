using System;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit2019.UnitTests
{
    [TestClass]
    public class ModelsTests
    {
        [TestMethod]
        public void ConfigJson_Defaults()
        {
            var config = new ConfigJson();
            Assert.AreEqual(0, config.WebResources.Count);
            Assert.AreEqual(0, config.Reports.Count);
            Assert.AreEqual(0, config.CustomTemplates.Count);
        }

        [TestMethod]
        public void DeployReport_DisplayReportName()
        {
            var report = new DeployReport
            {
                ReportName = "Sales",
                ReportFileName = "sales.rdl",
                Language = "English",
                IsManaged = false
            };
            Assert.AreEqual("Sales (sales.rdl) - English", report.DisplayReportName);

            report.IsManaged = true;
            Assert.AreEqual("Sales (sales.rdl) - English [managed]", report.DisplayReportName);
        }

        [TestMethod]
        public void CustomTemplate_Defaults()
        {
            var template = new CustomTemplate();
            Assert.IsNull(template.Type);
            Assert.IsNull(template.Title);
            Assert.IsNull(template.Body);
            Assert.IsFalse(template.IsDefault);
        }

        [TestMethod]
        public void DeployWebResource_DisplayWebResourceName()
        {
            var webResource = new DeployWebResource
            {
                File = "scripts.js",
                WebResource = "pl_/js/a.js",
                WebResourceId = Guid.NewGuid(),
                SolutionUniqueName = "all_in_one",
                IsManaged = false
            };
            Assert.AreEqual("pl_/js/a.js", webResource.DisplayWebResourceName);

            webResource.IsManaged = true;
            Assert.AreEqual("pl_/js/a.js [managed]", webResource.DisplayWebResourceName);
        }

        [TestMethod]
        public void PackageGuids_CommandSet_IsWellFormed()
        {
            Assert.AreNotEqual(Guid.Empty, PackageGuids.CommandSet);
        }
    }
}
