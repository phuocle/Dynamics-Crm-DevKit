using System.Collections.Generic;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace $NameSpace$
{
    [TestClass]
    public class $class$Test
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
        public void $class$Test_Execute()
        {
            var inputs = new Dictionary<string, object>() {};
            var outputs = Context.ExecuteCodeActivity<$class$>(inputs);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void $class$Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
