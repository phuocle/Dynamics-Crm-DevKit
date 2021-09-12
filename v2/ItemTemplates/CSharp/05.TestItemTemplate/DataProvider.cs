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
        public static XrmFakedPluginExecutionContext Plugin { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Plugin = Context.GetDefaultPluginContext();
        }

        [TestMethod]
        public void _01_ExecutePlugin()
        {
            //setup
            //Plugin.InputParameters["???"] = ???
            //run
            Context.ExecutePluginWith<$class$>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}
