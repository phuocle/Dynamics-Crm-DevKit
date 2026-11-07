using System;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;

namespace DynamicsCrm.DevKit.UnitTests.Lib
{
    [TestClass]
    public class SharedCompiledCoverageTests
    {
        [TestMethod]
        public void Const_StaticInitializers_AreBuilt()
        {
            StringAssert.Contains(Const.VersionBuild, "4.44.44.44");
            StringAssert.Contains(Const.WindowTitle, "DynamicsCrm.DevKit");
            Assert.IsTrue(Const.WEB_RESOURCE_EXTENSIONS.Length > 0);
            CollectionAssert.Contains(Const.WEB_RESOURCE_EXTENSIONS, ".js");
            Assert.IsTrue(Const.DEFAULTS.Contains("Default"));
            Assert.IsTrue(Const.DEFAULTS.Contains("Default - Plugin"));
            Assert.IsTrue(Const.DEFAULTS.Contains("Default - DataProvider - RetrieveMultiple"));
            Assert.IsTrue(Const.DEFAULTS.Contains("default - workflow"), "DEFAULTS must be case-insensitive");
            Assert.IsFalse(Const.DEFAULTS.Contains("Default - NotARealItemType"));
        }

        [TestMethod]
        public void T4Context_ComputedProperties_CoverAllBranches()
        {
            var empty = new T4Context();
            Assert.AreEqual(string.Empty, empty.EntityLogicalName);
            Assert.AreEqual(string.Empty, empty.EntitySchemaName);
            // PluginOrder defaults to 0, so the empty Class gets the order suffix.
            Assert.AreEqual("0", empty.ClassWithOrder);
            Assert.AreEqual("0", empty.FullClassName);
            Assert.AreEqual("0", empty.RegistrationName);
            Assert.IsFalse(empty.HasTestTarget);
            Assert.IsFalse(empty.HasPluginTestGuardContext);
            Assert.IsFalse(empty.IsPreValidation);
            Assert.IsFalse(empty.IsPreOperation);
            Assert.IsFalse(empty.IsPostOperation);
            Assert.AreEqual(0, empty.StageNumber);
            Assert.IsFalse(empty.IsAsynchronous);
            Assert.IsFalse(empty.IsSynchronous);
            Assert.IsFalse(empty.IsCreateMessage);
            Assert.IsFalse(empty.IsUpdateMessage);
            Assert.IsFalse(empty.IsDeleteMessage);
            Assert.IsFalse(empty.IsCreateMultipleMessage);
            Assert.IsFalse(empty.IsUpdateMultipleMessage);
            Assert.IsFalse(empty.HasPreImage);
            Assert.IsFalse(empty.HasPostImage);
            Assert.IsFalse(empty.IsPluginSupportedPreImage);
            Assert.IsFalse(empty.IsPluginSupportedPostImage);
            Assert.IsFalse(string.IsNullOrEmpty(empty.GeneratedDate));
            Assert.AreEqual(Const.Version, empty.DevKitVersion);

            var context = new T4Context
            {
                PluginNameSpace = "Dev.PlugIns",
                PluginLogicalName = "account",
                PluginSchemaName = "Account",
                PluginStage = "PreOperation",
                PluginMessage = "Update",
                PluginExecution = "Synchronous",
                PluginOrder = 1,
                Class = "MyPlugin",
                TestTargetFullClassName = "Dev.Tests.MyPluginTest"
            };
            Assert.AreEqual("account", context.EntityLogicalName);
            Assert.AreEqual("Account", context.EntitySchemaName);
            Assert.AreEqual("MyPlugin", context.ClassWithOrder);
            Assert.AreEqual("Dev.PlugIns.MyPlugin", context.FullClassName);
            Assert.AreEqual("Dev.PlugIns.MyPlugin", context.RegistrationName);
            Assert.IsTrue(context.HasTestTarget);
            Assert.IsTrue(context.HasPluginTestGuardContext);
            Assert.IsFalse(context.IsPreValidation);
            Assert.IsTrue(context.IsPreOperation);
            Assert.IsFalse(context.IsPostOperation);
            Assert.AreEqual(20, context.StageNumber);
            Assert.IsFalse(context.IsAsynchronous);
            Assert.IsTrue(context.IsSynchronous);
            Assert.IsFalse(context.IsCreateMessage);
            Assert.IsTrue(context.IsUpdateMessage);
            Assert.IsTrue(context.HasPreImage);
            Assert.IsFalse(context.HasPostImage);

            var ordered = new T4Context { Class = "MyPlugin", PluginOrder = 5, PluginNameSpace = "" };
            Assert.AreEqual("MyPlugin5", ordered.ClassWithOrder);
            Assert.AreEqual("MyPlugin5", ordered.FullClassName);

            var guardCases = new[]
            {
                new T4Context { TestTargetFullClassName = "T", PluginStage = "PreValidation", PluginMessage = "Create", PluginLogicalName = "account", PluginExecution = "Synchronous" },
                new T4Context { TestTargetFullClassName = "T", PluginMessage = "Create", PluginLogicalName = "account", PluginExecution = "Synchronous" },
                new T4Context { TestTargetFullClassName = "T", PluginStage = "PreValidation", PluginLogicalName = "account", PluginExecution = "Synchronous" },
                new T4Context { TestTargetFullClassName = "T", PluginStage = "PreValidation", PluginMessage = "Create", PluginExecution = "Synchronous" },
                new T4Context { TestTargetFullClassName = "T", PluginStage = "PreValidation", PluginMessage = "Create", PluginLogicalName = "account" },
                new T4Context { TestTargetFullClassName = "  ", PluginStage = "PreValidation", PluginMessage = "Create", PluginLogicalName = "account", PluginExecution = "Synchronous" }
            };
            Assert.IsTrue(guardCases[0].HasPluginTestGuardContext);
            for (var i = 1; i < guardCases.Length; i++)
                Assert.IsFalse(guardCases[i].HasPluginTestGuardContext, $"guard case {i} should not pass");
        }

        [TestMethod]
        public void T4Context_StageAndMessageHelpers_ReturnTrueForExactMatches()
        {
            Assert.IsTrue(new T4Context { PluginStage = "prevalidation" }.IsPreValidation);
            Assert.AreEqual(10, new T4Context { PluginStage = "PreValidation" }.StageNumber);
            Assert.AreEqual(40, new T4Context { PluginStage = "PostOperation" }.StageNumber);

            var post = new T4Context { PluginMessage = "Create", PluginStage = "40" };
            Assert.IsTrue(post.HasPostImage);
            var postNamed = new T4Context { PluginMessage = "Create", PluginStage = "PostOperation" };
            Assert.IsTrue(postNamed.HasPostImage);
            var postWrongStage = new T4Context { PluginMessage = "Create", PluginStage = "20" };
            Assert.IsFalse(postWrongStage.HasPostImage);
            var postUnsupported = new T4Context { PluginMessage = "Merge", PluginStage = "40" };
            Assert.IsTrue(postUnsupported.HasPostImage);

            Assert.IsTrue(new T4Context { PluginMessage = "CreateMultiple" }.IsCreateMultipleMessage);
            Assert.IsTrue(new T4Context { PluginMessage = "UpdateMultiple" }.IsUpdateMultipleMessage);
            Assert.IsTrue(new T4Context { PluginMessage = "Delete" }.IsDeleteMessage);
            Assert.IsTrue(new T4Context { PluginMessage = "Assign" }.HasPreImage);
            Assert.IsFalse(new T4Context { PluginMessage = "Create" }.HasPreImage);
            Assert.IsTrue(new T4Context { PluginExecution = "asynchronous" }.IsAsynchronous);
        }

        [TestMethod]
        public void Wrapper_FullInterfaceContext_UsesDirectPropertyPaths()
        {
            var userId = Guid.NewGuid();
            var requestId = Guid.NewGuid();
            var owningExtension = new EntityReference("solution", Guid.NewGuid());
            var context = new FakeFullContext
            {
                Mode = 0,
                RequestId = requestId,
                OwningExtension = owningExtension,
                UserAzureActiveDirectoryObjectId = userId,
                InitiatingUserAzureActiveDirectoryObjectId = userId,
                InitiatingUserApplicationId = userId,
                PortalsContactId = userId,
                IsPortalsClientCall = true,
                AuthenticatedUserId = userId,
                InitiatingUserAgent = "agent/2.0",
                EnvironmentId = "env-1",
                TenantId = userId,
                IsApplicationUser = true
            };
            context.PreEntityImagesCollection = new[] { new EntityImageCollection() };
            context.PostEntityImagesCollection = new[] { new EntityImageCollection() };

            var wrapper = new PluginExecutionContext7Wrapper(context);

            Assert.AreEqual(requestId, wrapper.RequestId);
            Assert.AreEqual(owningExtension, wrapper.OwningExtension);
            Assert.AreEqual(userId, wrapper.UserAzureActiveDirectoryObjectId);
            Assert.AreEqual(userId, wrapper.InitiatingUserAzureActiveDirectoryObjectId);
            Assert.AreEqual(userId, wrapper.InitiatingUserApplicationId);
            Assert.AreEqual(userId, wrapper.PortalsContactId);
            Assert.IsTrue(wrapper.IsPortalsClientCall);
            Assert.AreEqual(userId, wrapper.AuthenticatedUserId);
            Assert.AreEqual("agent/2.0", wrapper.InitiatingUserAgent);
            Assert.AreEqual("env-1", wrapper.EnvironmentId);
            Assert.AreEqual(userId, wrapper.TenantId);
            Assert.IsTrue(wrapper.IsApplicationUser);
            Assert.AreEqual(1, wrapper.PreEntityImagesCollection.Length);
            Assert.AreEqual(1, wrapper.PostEntityImagesCollection.Length);
        }

        [TestMethod]
        public void Wrapper_TypedPropertyWithWrongRuntimeType_FallsBackToDefault()
        {
            var wrapper = new PluginExecutionContext7Wrapper(new FakeMinimalContextWithWrongTypes());

            Assert.AreEqual(Guid.Empty, wrapper.TenantId);
            Assert.IsFalse(wrapper.IsApplicationUser);
            Assert.IsNull(wrapper.InitiatingUserAgent);
        }

        [TestMethod]
        public void Wrapper_MinimalContext_ReadsBasePropertiesIncludingRequestIdAndOwningExtension()
        {
            var requestId = Guid.NewGuid();
            var owningExtension = new EntityReference("sdkmessage", Guid.NewGuid());
            var context = new FakeMinimalContext
            {
                RequestId = requestId,
                OwningExtension = owningExtension,
                ParentContext = new FakeMinimalContext()
            };

            var wrapper = new PluginExecutionContext7Wrapper(context);

            Assert.AreEqual(requestId, wrapper.RequestId);
            Assert.AreEqual(owningExtension, wrapper.OwningExtension);
            Assert.IsNotNull(wrapper.ParentContext);
        }

        private sealed class FakeMinimalContext : IPluginExecutionContext
        {
            public int Mode { get; set; }
            public int IsolationMode { get; set; }
            public int Depth { get; set; }
            public string MessageName { get; set; }
            public string PrimaryEntityName { get; set; }
            public Guid? RequestId { get; set; }
            public string SecondaryEntityName { get; set; }
            public ParameterCollection InputParameters { get; set; } = new();
            public ParameterCollection OutputParameters { get; set; } = new();
            public ParameterCollection SharedVariables { get; set; } = new();
            public Guid UserId { get; set; }
            public Guid InitiatingUserId { get; set; }
            public Guid BusinessUnitId { get; set; }
            public Guid OrganizationId { get; set; }
            public string OrganizationName { get; set; }
            public Guid PrimaryEntityId { get; set; }
            public EntityImageCollection PreEntityImages { get; set; } = new();
            public EntityImageCollection PostEntityImages { get; set; } = new();
            public EntityReference OwningExtension { get; set; }
            public Guid CorrelationId { get; set; }
            public bool IsExecutingOffline { get; set; }
            public bool IsOfflinePlayback { get; set; }
            public bool IsInTransaction { get; set; }
            public Guid OperationId { get; set; }
            public DateTime OperationCreatedOn { get; set; }
            public IPluginExecutionContext ParentContext { get; set; }
            public int Stage { get; set; }
        }

        private sealed class FakeMinimalContextWithWrongTypes : IPluginExecutionContext
        {
            public int Mode { get; set; }
            public int IsolationMode { get; set; }
            public int Depth { get; set; }
            public string MessageName { get; set; }
            public string PrimaryEntityName { get; set; }
            public Guid? RequestId { get; set; }
            public string SecondaryEntityName { get; set; }
            public ParameterCollection InputParameters { get; set; } = new();
            public ParameterCollection OutputParameters { get; set; } = new();
            public ParameterCollection SharedVariables { get; set; } = new();
            public Guid UserId { get; set; }
            public Guid InitiatingUserId { get; set; }
            public Guid BusinessUnitId { get; set; }
            public Guid OrganizationId { get; set; }
            public string OrganizationName { get; set; }
            public Guid PrimaryEntityId { get; set; }
            public EntityImageCollection PreEntityImages { get; set; } = new();
            public EntityImageCollection PostEntityImages { get; set; } = new();
            public EntityReference OwningExtension { get; set; }
            public Guid CorrelationId { get; set; }
            public bool IsExecutingOffline { get; set; }
            public bool IsOfflinePlayback { get; set; }
            public bool IsInTransaction { get; set; }
            public Guid OperationId { get; set; }
            public DateTime OperationCreatedOn { get; set; }
            public IPluginExecutionContext ParentContext { get; set; }
            public int Stage { get; set; }

            // Present with the wrong runtime type so the wrapper's typed probe must reject them.
            public string TenantId => "not-a-guid";
            public int InitiatingUserAgent => 42;
            public string IsApplicationUser => "true";
        }

        private sealed class FakeFullContext : IPluginExecutionContext7
        {
            public int Mode { get; set; }
            public int IsolationMode { get; set; }
            public int Depth { get; set; }
            public string MessageName { get; set; }
            public string PrimaryEntityName { get; set; }
            public Guid? RequestId { get; set; }
            public string SecondaryEntityName { get; set; }
            public ParameterCollection InputParameters { get; set; } = new();
            public ParameterCollection OutputParameters { get; set; } = new();
            public ParameterCollection SharedVariables { get; set; } = new();
            public Guid UserId { get; set; }
            public Guid InitiatingUserId { get; set; }
            public Guid BusinessUnitId { get; set; }
            public Guid OrganizationId { get; set; }
            public string OrganizationName { get; set; }
            public Guid PrimaryEntityId { get; set; }
            public EntityImageCollection PreEntityImages { get; set; } = new();
            public EntityImageCollection PostEntityImages { get; set; } = new();
            public EntityReference OwningExtension { get; set; }
            public Guid CorrelationId { get; set; }
            public bool IsExecutingOffline { get; set; }
            public bool IsOfflinePlayback { get; set; }
            public bool IsInTransaction { get; set; }
            public Guid OperationId { get; set; }
            public DateTime OperationCreatedOn { get; set; }
            public IPluginExecutionContext ParentContext { get; set; }
            public int Stage { get; set; }

            public Guid UserAzureActiveDirectoryObjectId { get; set; }
            public Guid InitiatingUserAzureActiveDirectoryObjectId { get; set; }
            public Guid InitiatingUserApplicationId { get; set; }
            public Guid PortalsContactId { get; set; }
            public bool IsPortalsClientCall { get; set; }
            public Guid AuthenticatedUserId { get; set; }
            public EntityImageCollection[] PreEntityImagesCollection { get; set; } = Array.Empty<EntityImageCollection>();
            public EntityImageCollection[] PostEntityImagesCollection { get; set; } = Array.Empty<EntityImageCollection>();
            public string InitiatingUserAgent { get; set; }
            public string EnvironmentId { get; set; }
            public Guid TenantId { get; set; }
            public bool IsApplicationUser { get; set; }
        }
    }
}
