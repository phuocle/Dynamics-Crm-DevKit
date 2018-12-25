using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DevKit.Workflow._2.Test
{
    [TestClass]
    public class SystemDebugTest
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
        public void SystemDebug_Test_01()
        {
            Assert.Fail();
        }
    }
}
