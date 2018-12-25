using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PL.DevKit.Monkey.Workflow._3.Test
{
    [TestClass]
    public class DebugSystemTest
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
        public void DebugSystem_Test_01()
        {
            Assert.Fail();
        }
    }
}
