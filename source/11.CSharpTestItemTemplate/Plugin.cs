using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;
using $ProxyTypes$;
using $DevKitShared$;

namespace $rootnamespace$
{
    [TestClass]
    public class $class$$execution$Test
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
        public void $class$_UnsecureString_And_SecureString()
        {
            var target = new Entity("$logicalname$")
            {
                ["$logicalname$id"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<$class$$execution$>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }
        */

        [TestMethod]
        public void $class$_Stage_Does_Not_Equals_$stage_string$()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => {
                context.ExecutePluginWith<$class$$execution$>(plugin);
            }, "Stage does not equals $stage_string$");
        }

        [TestMethod]
        public void $class$_PrimaryEntityName_Does_Not_Equals_$PrimaryEntityName$()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int) StageEnum.$stage_string$;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => {
                context.ExecutePluginWith<$class$$execution$>(plugin);
            }, "Stage does not equals $logicalname$");
        }

        [TestMethod]
        public void $class$_MessageName_Does_Not_Equals_$message$()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.$stage_string$;
            plugin.PrimaryEntityName = "$logicalname$";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => {
                context.ExecutePluginWith<$class$$execution$>(plugin);
            }, "Stage does not equals $message$");
        }

        [TestMethod]
        public void $class$_Mode_Does_Not_Equals_$execution$()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.$stage_string$;
            plugin.PrimaryEntityName = "$logicalname$";
            plugin.MessageName = "$message$";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => {
                context.ExecutePluginWith<$class$$execution$>(plugin);
            }, "Stage does not equals $execution$");
        }

        /*
        [TestMethod]
        public void $class$_CrmPluginRegistration_Check_Image1()
        {
            var @class = new $class$$execution$();
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
        public void $class$_CrmPluginRegistration_Check_Image2()
        {
            var @class = new $class$$execution$();
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
$FilteringAttributes$
        [TestMethod]
        public void $class$_Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
