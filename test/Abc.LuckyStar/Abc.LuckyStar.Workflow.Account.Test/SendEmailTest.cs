using System.Collections.Generic;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Abc.LuckyStar.Workflow.Account.Test
{
    [TestClass]
    public class SendEmailTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedWorkflowContext WorkflowContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            WorkflowContext = Context.GetDefaultWorkflowContext();
        }

        [TestMethod]
        public void SendEmailTest_Execute()
        {
            var inputs = new Dictionary<string, object>() { };
            var outputs = Context.ExecuteCodeActivity<SendEmail>(inputs);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void SendEmailTest_01()
        {
            Assert.IsTrue(true);
        }
    }
}
