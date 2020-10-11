using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Reflection;
using Abc.LuckyStar.ProxyTypes;

namespace Abc.LuckyStar.CustomAction.Account.Test
{
    [TestClass]
    public class PostAccountabc_UpdateAccountNumberSynchronousTest
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
        public void _01()
        {
            Assert.IsTrue(true);
        }
    }
}
