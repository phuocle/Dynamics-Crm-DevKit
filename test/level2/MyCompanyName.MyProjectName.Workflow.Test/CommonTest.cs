using System.Collections.Generic;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MyCompanyName.MyProjectName.Workflow.Test
{
    [TestClass]
    public class CommonTest
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
        public void Common_Test_Execute()
        {
            var inputs = new Dictionary<string, object>() {};
            var outputs = Context.ExecuteCodeActivity<Common>(inputs);
            Assert.IsTrue(true);
        }
    }
}
