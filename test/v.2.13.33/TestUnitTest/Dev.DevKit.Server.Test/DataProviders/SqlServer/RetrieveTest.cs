using Dev.DevKit.ProxyTypes;
using Dev.DevKit.Server.DataProviders.SqlServer;
using Dev.DevKit.Shared;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace Dev.DevKit.Server.Test.DataProviders.SqlServer
{
    [TestClass]
    public class RetrieveTest
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
        public void _01_Check_CrmPluginRegistration()
        {
            var @class = new Retrieve();
            foreach (var attribute in System.Attribute.GetCustomAttributes(@class.GetType()))
            {
                if (attribute.GetType().Equals(typeof(CrmPluginRegistrationAttribute)))
                {
                    var check = attribute as CrmPluginRegistrationAttribute;
                    Assert.IsNotNull(check);
                }
                else
                    Assert.Fail();
            }
        }

        [TestMethod]
        public void _02_ExecutePlugin()
        {
            //setup
            //var json = "";
            //var debugContext = Debug.JsonToDebugContext(json);
            Plugin.InputParameters["Target"] = new EntityReference("dummy", Guid.NewGuid());
            //run
            Context.ExecutePluginWith<Retrieve>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}
