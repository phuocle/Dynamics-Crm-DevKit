using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DevKit.WorkflowAccount.Test
{
    [TestClass]
    public class SendMailTest
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
        public void SendMail_Test_01()
        {
            Assert.Fail();
        }
    }
}
