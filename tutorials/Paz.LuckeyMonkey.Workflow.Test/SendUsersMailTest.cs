using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Paz.LuckeyMonkey.Shared;
using Paz.LuckeyMonkey.Workflow;

namespace Paz.LuckeyMonkey.Workflow
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
        public void SendUsersMail_Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
