using System;
using System.Linq;
using DynamicsCrm.DevKit.Tool.Lib;
using DynamicsCrm.DevKit.Tool.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class TaskCreateEntityTests
    {
        private FakeDataverseService service;
        private string tempDir;

        [TestInitialize]
        public void Setup()
        {
            service = new FakeDataverseService();
            tempDir = System.IO.Path.Combine(System.IO.Path.GetTempPath(), "devkit-tool-tests-createentity", Guid.NewGuid().ToString("N"));
            System.IO.Directory.CreateDirectory(tempDir);
        }

        [TestCleanup]
        public void Cleanup()
        {
            if (System.IO.Directory.Exists(tempDir)) System.IO.Directory.Delete(tempDir, recursive: true);
        }

        private void ConfigurePublisher(string prefix = "new")
        {
            var solutionId = Guid.NewGuid();
            var publisherId = Guid.NewGuid();
            service.RetrieveMultipleHandler = query =>
            {
                switch (query)
                {
                    case QueryExpression qe when qe.EntityName == "solution":
                        return FakeDataverseService.Rows(FakeDataverseService.Row("solution", solutionId,
                            ("publisherid", new EntityReference("publisher", publisherId))));
                    case FetchExpression fetch:
                    {
                        // form fetches: identify by formType condition value
                        if (fetch.Query.Contains("value=\"2\"") || fetch.Query.Contains("value=\"6\"") || fetch.Query.Contains("value=\"11\""))
                            return FakeDataverseService.Rows(FakeDataverseService.Row("systemform", Guid.NewGuid(), ("formid", Guid.NewGuid())));
                        return FakeDataverseService.Rows();
                    }
                    default:
                        return FakeDataverseService.Rows();
                }
            };
            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("publisher", id, ("customizationprefix", prefix));
            service.ExecuteHandler = request => new OrganizationResponse();
        }

        [TestMethod]
        public void Run_SolutionNotFound_Throws()
        {
            service.RetrieveMultipleHandler = query => FakeDataverseService.Rows();
            Assert.ThrowsExactly<Exception>(() =>
                TaskCreateEntity.Run(service, "MissingSolution", "My Entity", "UserOwned"));
        }

        [TestMethod]
        public void Run_SolutionWithoutPublisher_Throws()
        {
            service.RetrieveMultipleHandler = query =>
                FakeDataverseService.Rows(FakeDataverseService.Row("solution", Guid.NewGuid()));
            Assert.ThrowsExactly<Exception>(() =>
                TaskCreateEntity.Run(service, "Test Solution", "My Entity", "UserOwned"));
        }

        [TestMethod]
        public void Run_PublisherWithoutPrefix_Throws()
        {
            var solutionId = Guid.NewGuid();
            var publisherId = Guid.NewGuid();
            service.RetrieveMultipleHandler = query =>
                FakeDataverseService.Rows(FakeDataverseService.Row("solution", solutionId,
                    ("publisherid", new EntityReference("publisher", publisherId))));
            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("publisher", id, ("customizationprefix", null));
            Assert.ThrowsExactly<Exception>(() =>
                TaskCreateEntity.Run(service, "Test Solution", "My Entity", "UserOwned"));
        }

        [TestMethod]
        public void Run_InvalidEntityType_Throws()
        {
            ConfigurePublisher();
            Assert.ThrowsExactly<Exception>(() =>
                TaskCreateEntity.Run(service, "Test Solution", "My Entity", "Bogus"));
        }

        [TestMethod]
        public void Run_UserOwned_CreatesEntityAndUpdatesForms()
        {
            ConfigurePublisher();
            TaskCreateEntity.Run(service, "Test Solution", "My Entity", "UserOwned");

            var createRequest = service.Executed.OfType<CreateEntityRequest>().Single();
            Assert.AreEqual("new_my_entity", createRequest.Entity.LogicalName);
            Assert.AreEqual(OwnershipTypes.UserOwned, createRequest.Entity.OwnershipType);
            Assert.AreEqual("Test Solution", createRequest.SolutionUniqueName);
            Assert.IsTrue(service.Executed.OfType<CreateAttributeRequest>().Any());
            Assert.AreEqual(1, service.Updated.Count(e => e.Attributes.Contains("formxml")));
        }

        [TestMethod]
        public void Run_AllEntityTypes_BuildCorrectRequests()
        {
            foreach (var entityType in new[]
                     {
                         "UserOwned", "OrganizationOwned", "Activity", "Elastic_UserOwned", "Elastic_OrganizationOwned"
                     })
            {
                ConfigurePublisher();
                TaskCreateEntity.Run(service, "Test Solution", "My Entity", entityType);
                var request = service.Executed.OfType<CreateEntityRequest>().Last();
                switch (entityType)
                {
                    case "OrganizationOwned":
                        Assert.AreEqual(OwnershipTypes.OrganizationOwned, request.Entity.OwnershipType);
                        break;
                    case "Activity":
                        Assert.IsTrue(request.Entity.IsActivity ?? false);
                        Assert.AreEqual("Subject", request.PrimaryAttribute.SchemaName);
                        Assert.IsTrue(request.HasNotes);
                        Assert.IsTrue(request.HasFeedback);
                        break;
                    case "Elastic_UserOwned":
                        Assert.AreEqual("Elastic", request.Entity.TableType);
                        Assert.AreEqual(OwnershipTypes.UserOwned, request.Entity.OwnershipType);
                        break;
                    case "Elastic_OrganizationOwned":
                        Assert.AreEqual("Elastic", request.Entity.TableType);
                        Assert.AreEqual(OwnershipTypes.OrganizationOwned, request.Entity.OwnershipType);
                        break;
                }
            }
        }

        [TestMethod]
        public void Run_NoFormsFound_EarlyReturns()
        {
            ConfigurePublisher();
            service.RetrieveMultipleHandler = query => FakeDataverseService.Rows();
            // solution query still needs to return a row for prefix resolution
            service.RetrieveMultipleHandler = query =>
            {
                if (query is QueryExpression qe && qe.EntityName == "solution")
                    return FakeDataverseService.Rows(FakeDataverseService.Row("solution", Guid.NewGuid(),
                        ("publisherid", new EntityReference("publisher", Guid.NewGuid()))));
                return FakeDataverseService.Rows();
            };
            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("publisher", id, ("customizationprefix", "new"));
            TaskCreateEntity.Run(service, "Test Solution", "My Entity", "UserOwned");
            Assert.AreEqual(0, service.Updated.Count);
        }

        [TestMethod]
        public void ResourceHelper_ReadResource_ReturnsXml()
        {
            var xml = ResourceHelper.ReadResource("UserOwned.xml");
            StringAssert.Contains(xml, "form");
        }

        [TestMethod]
        public void ResourceHelper_MissingResource_Throws()
        {
            Assert.ThrowsExactly<Exception>(() => ResourceHelper.ReadResource("DoesNotExist.xml"));
        }

        [TestMethod]
        public void DocumentMethodAttribute_SetsAllProperties()
        {
            var attribute = new DocumentMethodAttribute("12", "desc", DocumentMethodStage.PostAsync, "account",
                DocumentMethodMessage.Update, "a,b");
            Assert.AreEqual("12", attribute.WI);
            Assert.AreEqual("desc", attribute.Description);
            Assert.AreEqual(DocumentMethodStage.PostAsync, attribute.Stage);
            Assert.AreEqual("account", attribute.Entity);
            Assert.AreEqual(DocumentMethodMessage.Update, attribute.Message);
            Assert.AreEqual("a,b", attribute.Fields);
        }

        [TestMethod]
        public void Const_RuntimeFields_AreInitialized()
        {
            StringAssert.Contains(DynamicsCrm.DevKit.Shared.Const.VersionBuild, "4.44.44.44");
            StringAssert.Contains(DynamicsCrm.DevKit.Shared.Const.WindowTitle, "DynamicsCrm.DevKit");
            Assert.IsTrue(DynamicsCrm.DevKit.Shared.Const.WEB_RESOURCE_EXTENSIONS.Length > 0);
            Assert.IsTrue(DynamicsCrm.DevKit.Shared.Const.DEFAULTS.Count > 0);
        }
    }
}
