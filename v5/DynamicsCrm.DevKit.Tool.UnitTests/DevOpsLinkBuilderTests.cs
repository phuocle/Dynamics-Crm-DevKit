using DynamicsCrm.DevKit.Tool.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class DevOpsLinkBuilderTests
    {
        [TestMethod]
        public void BuildWorkItemUrl_NullOrEmptyDevOps_ReturnsNull()
        {
            Assert.IsNull(DevOpsLinkBuilder.BuildWorkItemUrl(null, "o", "p", "1"));
            Assert.IsNull(DevOpsLinkBuilder.BuildWorkItemUrl("  ", "o", "p", "1"));
        }

        [TestMethod]
        public void BuildWorkItemUrl_AzureDevOps_EncodesProject()
        {
            var url = DevOpsLinkBuilder.BuildWorkItemUrl("AzureDevOps", "org", "my project", "42");
            Assert.AreEqual("https://dev.azure.com/org/my%20project/_workitems/edit/42", url);
        }

        [TestMethod]
        public void BuildWorkItemUrl_GitHub()
        {
            Assert.AreEqual("https://github.com/org/repo/issues/7",
                DevOpsLinkBuilder.BuildWorkItemUrl("github", "org", "repo", "7"));
        }

        [TestMethod]
        public void BuildWorkItemUrl_Jira()
        {
            Assert.AreEqual("https://myorg.atlassian.net/browse/KEY-3",
                DevOpsLinkBuilder.BuildWorkItemUrl("Jira", "myorg", "p", "KEY-3"));
        }

        [TestMethod]
        public void BuildWorkItemUrl_Custom_WithAndWithoutIdToken()
        {
            Assert.IsNull(DevOpsLinkBuilder.BuildWorkItemUrl("custom", "  ", "p", "9"));
            Assert.AreEqual("https://track/x/9", DevOpsLinkBuilder.BuildWorkItemUrl("custom", "https://track/x/{id}", "p", "9"));
            Assert.AreEqual("https://track/9", DevOpsLinkBuilder.BuildWorkItemUrl("custom", "https://track", "p", "9"));
        }

        [TestMethod]
        public void BuildWorkItemUrl_UnknownPlatform_ReturnsNull()
        {
            Assert.IsNull(DevOpsLinkBuilder.BuildWorkItemUrl("unknown", "o", "p", "1"));
        }
    }
}
