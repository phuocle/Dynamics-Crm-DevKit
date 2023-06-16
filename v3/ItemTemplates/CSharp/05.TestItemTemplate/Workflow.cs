using System.Collections.Generic;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Reflection;
using $ProxyTypesNameSpace$;

namespace $NameSpace$
{
    [TestClass]
    public class $class$Test
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedWorkflowContext Workflow { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Workflow = Context.GetDefaultWorkflowContext();
        }

        [TestMethod]
        public void _01_ExecuteWorkflow()
        {
            //setup
            //var json = "";
            //Plugin.SetDebugContext(json);
            //run
            //Context.ExecutePluginWith<$class$>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}
