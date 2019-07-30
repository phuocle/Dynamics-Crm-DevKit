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
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.PrimaryEntityName = "$logicalname$";
            PluginContext.MessageName = "$message$";
            PluginContext.Stage = (int) StageEnum.$stage_string$;
            PluginContext.Mode = (int) ExecutionModeEnum.$execution$;
            PluginContext.InputParameters["Target"] = null;
        }

        /*
        [TestMethod]
        public void $class$Test_UnsecureString_And_SecureString()
        {
            var target = new Entity("$logicalname$")
            {
                ["$logicalname$id"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<$class$>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }
        */

        [TestMethod]
        public void $class$Test_Stage_Does_Not_Equals_$stage_string$()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => {
                context.ExecutePluginWith<$class$>(plugin);
            }, "Stage does not equals $stage_string$");
        }

        [TestMethod]
        public void $class$Test_PrimaryEntityName_Does_Not_Equals_$logicalname$()
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
        public void $class$Test_MessageName_Does_Not_Equals_$message$()
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
        public void $class$Test_Mode_Does_Not_Equals_$execution$()
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

        /*
        [TestMethod]
        public void $class$Test_CrmPluginRegistration_Check_Image1()
        {
            var @class = new $class$();
            foreach (var attribute in Attribute.GetCustomAttributes(@class.GetType()))
            {
                if (attribute.GetType().Equals(typeof(CrmPluginRegistrationAttribute)))
                {
                    var check = attribute as CrmPluginRegistrationAttribute;
                    Assert.IsNotNull(check.Image1Attributes);
                    Assert.IsNotNull(check.Image1Name);
                    Assert.IsNotNull(check.Image1Type);
                }
                else
                    Assert.Fail();
            }
        }

        [TestMethod]
        public void $class$Test_CrmPluginRegistration_Check_Image2()
        {
            var @class = new $class$();
            foreach (var attribute in Attribute.GetCustomAttributes(@class.GetType()))
            {
                if (attribute.GetType().Equals(typeof(CrmPluginRegistrationAttribute)))
                {
                    var check = attribute as CrmPluginRegistrationAttribute;
                    Assert.IsNotNull(check.Image2Attributes);
                    Assert.IsNotNull(check.Image2Name);
                    Assert.IsNotNull(check.Image2Type);
                }
                else
                    Assert.Fail();
            }
        }
        */

        [TestMethod]
        public void $class$Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
