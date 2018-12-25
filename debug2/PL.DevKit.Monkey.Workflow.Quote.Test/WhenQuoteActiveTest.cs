using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace PL.DevKit.Monkey.WorkflowQuote.Test
{
    [TestClass]
    public class WhenQuoteActiveTest
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
        public void WhenQuoteActive_Test_01()
        {
            Assert.Fail();
        }
    }
}
