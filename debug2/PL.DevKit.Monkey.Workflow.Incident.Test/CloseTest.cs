using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PL.DevKit.Monkey.WorkflowIncident.Test
{
    [TestClass]
    public class CloseTest
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
        public void Close_Test_01()
        {
            Assert.Fail();
        }
    }
}
