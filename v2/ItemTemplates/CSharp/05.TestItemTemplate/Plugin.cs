using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;
using $SharedNameSpace$;
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
            Plugin.PrimaryEntityName = "$logicalname$";
            Plugin.MessageName = "$message$";
            Plugin.Stage = (int) StageEnum.$stage_string$;
            Plugin.Mode = (int) ExecutionModeEnum.$execution$;
        }

        /*
        [TestMethod]
        public void _00_UnsecureString_And_SecureString()
        {
            var target = new Entity("$logicalname$")
            {
                ["$logicalname$id"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<$class$>(Plugin, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }
        */

        [TestMethod]
        public void _01_Stage_Does_Not_Equals_$stage_string$()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => {
                context.ExecutePluginWith<$class$>(plugin);
            }, "Stage does not equals $stage_string$");
        }

        [TestMethod]
        public void _02_PrimaryEntityName_Does_Not_Equals_$logicalname$()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int) StageEnum.$stage_string$;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => {
                context.ExecutePluginWith<$class$>(plugin);
            }, "PrimaryEntityName does not equals $logicalname$");
        }

        [TestMethod]
        public void _03_MessageName_Does_Not_Equals_$message$()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.$stage_string$;
            plugin.PrimaryEntityName = "$logicalname$";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => {
                context.ExecutePluginWith<$class$>(plugin);
            }, "MessageName does not equals $message$");
        }

        [TestMethod]
        public void _04_Mode_Does_Not_Equals_$execution$()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.$stage_string$;
            plugin.PrimaryEntityName = "$logicalname$";
            plugin.MessageName = "$message$";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => {
                context.ExecutePluginWith<$class$>(plugin);
            }, "Execution does not equals $execution$");
        }

        [TestMethod]
        public void _05_CrmPluginRegistration_Check()
        {
            var @class = new $class$();
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
        public void _06_ExecutePlugin()
        {
            //setup
            //var json = "";
            //var debugContext = Debug.JsonToDebugContext(json);
            //Plugin.InputParameters["???"] = (???)debugContext.InputParameters["???"];
            //run
            Context.ExecutePluginWith<$class$>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}
