using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PL.DevKit.Monkey.WorkflowTask.Test
{
    [TestClass]
    public class TaskAssignedTest
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
        public void TaskAssigned_Test_01()
        {
            Assert.Fail();
        }
    }
}
