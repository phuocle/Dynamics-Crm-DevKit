using System.Collections.Generic;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Paz.LuckeyMonkey.Workflow.Test
{
    [TestClass]
    public class SendUsersMailTest
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
        public void SendUsersMail_Test_Execute()
        {
            var inputs = new Dictionary<string, object>() { };
            var outputs = Context.ExecuteCodeActivity<SendUsersMail>(inputs);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void SendUsersMail_Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
