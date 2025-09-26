using Dev.DevKitV4.Shared.Test;
using FakeXrmEasy;
using FakeXrmEasy.CodeActivities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Niam.XRM.Framework;
using System.Collections.Generic;

namespace Dev.DevKitV4.Test.Workflows
{
    [TestClass]
    public class SendEmailByQueueTest : FakeXrmEasyTestBase
    {
        [TestMethod]
        public void SendEmailByQueueTest_01()
        {
            //setup
            var json = TestHelper.Decompress("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");
            var remote = TestHelper.DeserializeRemoteExecutionContext(json);
            var workflowContext = _context.GetDefaultWorkflowContext();
            workflowContext.SetXrmFakedContextWorkflow(remote);
            var inputs = new Dictionary<string, object>
            {
                { "ToEmail", "vanphuoc@gmail.com" }
            };
            //run
            _context.ExecuteCodeActivity<Dev.DevKitV4.Server.Workflows.SendEmailByQueue>(workflowContext, inputs);
            //result
            Assert.IsTrue(true);
        }
    }
}