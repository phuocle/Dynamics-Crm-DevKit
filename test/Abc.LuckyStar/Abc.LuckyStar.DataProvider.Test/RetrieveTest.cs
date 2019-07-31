using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Reflection;
using Abc.LuckyStar.ProxyTypes;

namespace Abc.LuckyStar.DataProvider.Test
{
    [TestClass]
    public class RetrieveTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.InputParameters["Target"] = null;
        }

        [TestMethod]
        public void RetrieveTest_01()
        {
            Assert.IsTrue(true);
        }
    }
}
