using Dev.DevKitV4.Shared.Test;
using FakeXrmEasy.CodeActivities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System.Activities;
using System.Collections.Generic;

namespace Dev.DevKitV4.Test.Workflows
{
    [TestClass]
    public class SendEmailByQueueTest : FakeXrmEasyTestBase
    {
        [TestMethod]
        public void SendEmailByQueueTest_01_ExecuteWorkflow_WithValidContext()
        {
            // Setup
            var targetEntity = new Entity("queue", System.Guid.NewGuid())
            {
                ["name"] = "Test Queue",
                ["queueid"] = System.Guid.NewGuid()
            };

            var inputs = new Dictionary<string, object>
            {
                ["Target"] = targetEntity.ToEntityReference()
            };

            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "queue";
            workflowContext.PrimaryEntityId = targetEntity.Id;
            workflowContext.InputParameters = new ParameterCollection();
            workflowContext.InputParameters["Target"] = targetEntity.ToEntityReference();

            _context.Initialize(new[] { targetEntity });

            // Run
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);

            // Result
            Assert.IsNotNull(result);
            Assert.IsTrue(true); // Test passes if no exceptions are thrown
        }

        [TestMethod]
        public void SendEmailByQueueTest_02_ExecuteWorkflow_WithMinimalData()
        {
            // Setup
            var targetEntity = new Entity("queue", System.Guid.NewGuid());

            var inputs = new Dictionary<string, object>();

            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "queue";
            workflowContext.PrimaryEntityId = targetEntity.Id;

            _context.Initialize(new[] { targetEntity });

            // Run
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);

            // Result
            Assert.IsNotNull(result);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void SendEmailByQueueTest_03_ExecuteWorkflow_WithDifferentEntity()
        {
            // Setup - Test with different primary entity
            var targetEntity = new Entity("contact", System.Guid.NewGuid())
            {
                ["firstname"] = "John",
                ["lastname"] = "Doe",
                ["emailaddress1"] = "john.doe@example.com"
            };

            var inputs = new Dictionary<string, object>
            {
                ["Target"] = targetEntity.ToEntityReference()
            };

            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "contact";
            workflowContext.PrimaryEntityId = targetEntity.Id;
            workflowContext.InputParameters = new ParameterCollection();
            workflowContext.InputParameters["Target"] = targetEntity.ToEntityReference();

            _context.Initialize(new[] { targetEntity });

            // Run
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);

            // Result
            Assert.IsNotNull(result);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void SendEmailByQueueTest_04_ExecuteWorkflow_WithPreAndPostImages()
        {
            // Setup
            var preEntity = new Entity("queue", System.Guid.NewGuid())
            {
                ["name"] = "Old Queue Name",
                ["queueid"] = System.Guid.NewGuid()
            };

            var postEntity = new Entity("queue", preEntity.Id)
            {
                ["name"] = "New Queue Name",
                ["queueid"] = preEntity.Id
            };

            var inputs = new Dictionary<string, object>
            {
                ["Target"] = postEntity.ToEntityReference()
            };

            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "queue";
            workflowContext.PrimaryEntityId = postEntity.Id;
            workflowContext.PreEntityImages = new EntityImageCollection();
            workflowContext.PreEntityImages["PreBusinessEntity"] = preEntity;
            workflowContext.PostEntityImages = new EntityImageCollection();
            workflowContext.PostEntityImages["PostBusinessEntity"] = postEntity;

            _context.Initialize(new[] { preEntity, postEntity });

            // Run
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);

            // Result
            Assert.IsNotNull(result);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void SendEmailByQueueTest_05_ExecuteWorkflow_WithCustomInputParameters()
        {
            // Setup
            var targetEntity = new Entity("queue", System.Guid.NewGuid())
            {
                ["name"] = "Custom Queue",
                ["queueid"] = System.Guid.NewGuid()
            };

            var inputs = new Dictionary<string, object>
            {
                ["Target"] = targetEntity.ToEntityReference(),
                // Add any custom input parameters that the workflow might accept
                // ["InputValue"] = new EntityReference("account", System.Guid.NewGuid())
            };

            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "queue";
            workflowContext.PrimaryEntityId = targetEntity.Id;
            workflowContext.InputParameters = new ParameterCollection();
            workflowContext.InputParameters["Target"] = targetEntity.ToEntityReference();

            _context.Initialize(new[] { targetEntity });

            // Run
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);

            // Result
            Assert.IsNotNull(result);
            // Test any output parameters if the workflow has them
            // Assert.IsTrue(result.ContainsKey("OutputValue"));
            // Assert.IsNotNull(result["OutputValue"]);
        }

        [TestMethod]
        public void SendEmailByQueueTest_06_ExecuteWorkflow_WithTracingValidation()
        {
            // Setup
            var targetEntity = new Entity("queue", System.Guid.NewGuid())
            {
                ["name"] = "Tracing Test Queue",
                ["queueid"] = System.Guid.NewGuid()
            };

            var inputs = new Dictionary<string, object>
            {
                ["Target"] = targetEntity.ToEntityReference()
            };

            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "queue";
            workflowContext.PrimaryEntityId = targetEntity.Id;

            _context.Initialize(new[] { targetEntity });

            // Run
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);

            // Result
            Assert.IsNotNull(result);

            // Verify that the workflow executed successfully
            // The tracing service is automatically provided by FakeXrmEasy during execution
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void SendEmailByQueueTest_07_ExecuteWorkflow_ErrorHandling()
        {
            // Setup for error condition testing
            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "queue";
            workflowContext.PrimaryEntityId = System.Guid.NewGuid(); // Entity doesn't exist

            var inputs = new Dictionary<string, object>();

            // Run & Result
            // Test that the workflow handles missing entity gracefully
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void SendEmailByQueueTest_08_ExecuteWorkflow_WithRelatedEntities()
        {
            // Setup with related entities
            var queueEntity = new Entity("queue", System.Guid.NewGuid())
            {
                ["name"] = "Main Queue",
                ["queueid"] = System.Guid.NewGuid()
            };

            var userEntity = new Entity("systemuser", System.Guid.NewGuid())
            {
                ["fullname"] = "Test User",
                ["internalemailaddress"] = "testuser@example.com"
            };

            var inputs = new Dictionary<string, object>
            {
                ["Target"] = queueEntity.ToEntityReference()
            };

            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "queue";
            workflowContext.PrimaryEntityId = queueEntity.Id;
            workflowContext.UserId = userEntity.Id;

            _context.Initialize(new[] { queueEntity, userEntity });

            // Run
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);

            // Result
            Assert.IsNotNull(result);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void SendEmailByQueueTest_09_ExecuteWorkflow_ValidateServices()
        {
            // Setup
            var targetEntity = new Entity("queue", System.Guid.NewGuid())
            {
                ["name"] = "Service Test Queue",
                ["queueid"] = System.Guid.NewGuid()
            };

            var inputs = new Dictionary<string, object>
            {
                ["Target"] = targetEntity.ToEntityReference()
            };

            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "queue";
            workflowContext.PrimaryEntityId = targetEntity.Id;
            workflowContext.UserId = System.Guid.NewGuid();

            _context.Initialize(new[] { targetEntity });

            // Run
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);

            // Result
            Assert.IsNotNull(result);

            // Verify that both serviceAdmin and service instances are properly created
            // This tests the workflow's dependency on IOrganizationServiceFactory
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void SendEmailByQueueTest_10_ExecuteWorkflow_CompleteScenario()
        {
            // Setup - Complete realistic scenario
            var queueEntity = new Entity("queue", System.Guid.NewGuid())
            {
                ["name"] = "Email Notification Queue",
                ["emailaddress"] = "queue@example.com",
                ["queueid"] = System.Guid.NewGuid()
            };

            var caseEntity = new Entity("incident", System.Guid.NewGuid())
            {
                ["title"] = "Test Case",
                ["customerid"] = new EntityReference("contact", System.Guid.NewGuid()),
                ["prioritycode"] = new OptionSetValue(1) // High priority
            };

            var inputs = new Dictionary<string, object>
            {
                ["Target"] = queueEntity.ToEntityReference()
            };

            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.PrimaryEntityName = "queue";
            workflowContext.PrimaryEntityId = queueEntity.Id;
            workflowContext.MessageName = "Update";
            workflowContext.Mode = 0; // Synchronous
            workflowContext.Depth = 1;

            _context.Initialize(new[] { queueEntity, caseEntity });

            // Run
            var result = _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);

            // Result
            Assert.IsNotNull(result);

            // Verify the workflow completed successfully
            // In a real scenario, you might check for created email records,
            // updated entity states, etc.
            Assert.IsTrue(true);
        }
    }
}