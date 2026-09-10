using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;

namespace DynamicsCrm.DevKit.UnitTests.Lib
{
    [TestClass]
    public class PluginExecutionContext7WrapperTest
    {
        [TestMethod]
        public void Constructor_NullContext_ThrowsArgumentNullException()
        {
            var threw = false;
            try
            {
                _ = new PluginExecutionContext7Wrapper(null);
            }
            catch (ArgumentNullException)
            {
                threw = true;
            }
            Assert.IsTrue(threw);
        }

        [TestMethod]
        public void Wrapper_ImplementsAllPluginExecutionContextInterfaces()
        {
            var remoteContext = new RemoteExecutionContext();
            var wrapper = new PluginExecutionContext7Wrapper(remoteContext);

            Assert.IsTrue(wrapper is IPluginExecutionContext);
            Assert.IsTrue(wrapper is IPluginExecutionContext2);
            Assert.IsTrue(wrapper is IPluginExecutionContext3);
            Assert.IsTrue(wrapper is IPluginExecutionContext4);
            Assert.IsTrue(wrapper is IPluginExecutionContext5);
            Assert.IsTrue(wrapper is IPluginExecutionContext6);
            Assert.IsTrue(wrapper is IPluginExecutionContext7);
        }

        [TestMethod]
        public void Wrapper_DelegatesBasicPropertiesCorrectly()
        {
            var userId = Guid.NewGuid();
            var orgId = Guid.NewGuid();
            var primaryEntityId = Guid.NewGuid();
            var correlationId = Guid.NewGuid();
            var opId = Guid.NewGuid();
            var now = DateTime.UtcNow;

            var remoteContext = new RemoteExecutionContext
            {
                Mode = 1,
                IsolationMode = 2,
                Depth = 3,
                MessageName = "Update",
                PrimaryEntityName = "account",
                SecondaryEntityName = "none",
                UserId = userId,
                InitiatingUserId = userId,
                BusinessUnitId = orgId,
                OrganizationId = orgId,
                OrganizationName = "Contoso",
                PrimaryEntityId = primaryEntityId,
                CorrelationId = correlationId,
                IsExecutingOffline = false,
                IsOfflinePlayback = false,
                IsInTransaction = true,
                OperationId = opId,
                OperationCreatedOn = now,
                Stage = 40
            };

            var wrapper = new PluginExecutionContext7Wrapper(remoteContext);

            Assert.AreEqual(1, wrapper.Mode);
            Assert.AreEqual(2, wrapper.IsolationMode);
            Assert.AreEqual(3, wrapper.Depth);
            Assert.AreEqual("Update", wrapper.MessageName);
            Assert.AreEqual("account", wrapper.PrimaryEntityName);
            Assert.AreEqual("none", wrapper.SecondaryEntityName);
            Assert.AreEqual(userId, wrapper.UserId);
            Assert.AreEqual(userId, wrapper.InitiatingUserId);
            Assert.AreEqual(orgId, wrapper.BusinessUnitId);
            Assert.AreEqual(orgId, wrapper.OrganizationId);
            Assert.AreEqual("Contoso", wrapper.OrganizationName);
            Assert.AreEqual(primaryEntityId, wrapper.PrimaryEntityId);
            Assert.AreEqual(correlationId, wrapper.CorrelationId);
            Assert.IsFalse(wrapper.IsExecutingOffline);
            Assert.IsFalse(wrapper.IsOfflinePlayback);
            Assert.IsTrue(wrapper.IsInTransaction);
            Assert.AreEqual(opId, wrapper.OperationId);
            Assert.AreEqual(now, wrapper.OperationCreatedOn);
            Assert.AreEqual(40, wrapper.Stage);
            Assert.IsNull(wrapper.ParentContext);
            Assert.IsNotNull(wrapper.InputParameters);
            Assert.IsNotNull(wrapper.OutputParameters);
            Assert.IsNotNull(wrapper.SharedVariables);
            Assert.IsNotNull(wrapper.PreEntityImages);
            Assert.IsNotNull(wrapper.PostEntityImages);
        }

        [TestMethod]
        public void Wrapper_ReadsInitiatingUserAgentFromRemoteExecutionContext()
        {
            var remoteContext = new RemoteExecutionContext
            {
                InitiatingUserAgent = "Microsoft.InsightsPlatform.DataverseUploader"
            };

            var wrapper = new PluginExecutionContext7Wrapper(remoteContext);

            Assert.AreEqual("Microsoft.InsightsPlatform.DataverseUploader", wrapper.InitiatingUserAgent);
        }

        [TestMethod]
        public void Wrapper_FallbackDefaultsWhenPropertyNotPresent()
        {
            var remoteContext = new RemoteExecutionContext();
            var wrapper = new PluginExecutionContext7Wrapper(remoteContext);

            Assert.IsFalse(wrapper.IsApplicationUser);
            Assert.AreEqual(string.Empty, wrapper.EnvironmentId);
            Assert.AreEqual(Guid.Empty, wrapper.TenantId);
            Assert.AreEqual(Guid.Empty, wrapper.UserAzureActiveDirectoryObjectId);
            Assert.AreEqual(Guid.Empty, wrapper.InitiatingUserAzureActiveDirectoryObjectId);
            Assert.AreEqual(Guid.Empty, wrapper.InitiatingUserApplicationId);
            Assert.AreEqual(Guid.Empty, wrapper.PortalsContactId);
            Assert.IsFalse(wrapper.IsPortalsClientCall);
            Assert.AreEqual(Guid.Empty, wrapper.AuthenticatedUserId);
            Assert.IsNotNull(wrapper.PreEntityImagesCollection);
            Assert.IsNotNull(wrapper.PostEntityImagesCollection);
            Assert.AreEqual(0, wrapper.PreEntityImagesCollection.Length);
            Assert.AreEqual(0, wrapper.PostEntityImagesCollection.Length);
        }

        [TestMethod]
        public void Wrapper_CanBeCastToIPluginExecutionContext5Safely()
        {
            var remoteContext = new RemoteExecutionContext
            {
                InitiatingUserAgent = "PowerAutomate/1.0"
            };

            IPluginExecutionContext7 context7 = new PluginExecutionContext7Wrapper(remoteContext);
            var context5 = (IPluginExecutionContext5)context7;

            Assert.IsNotNull(context5);
            Assert.AreEqual("PowerAutomate/1.0", context5.InitiatingUserAgent);
        }
    }
}
