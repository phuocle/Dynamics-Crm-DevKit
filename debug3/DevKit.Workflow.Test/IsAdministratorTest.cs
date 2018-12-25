using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DevKit.Workflow.Test
{
    [TestClass]
    public class IsAdministratorTest
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
        public void IsAdministrator_Test_01()
        {
            Assert.Fail();
        }
    }
}
