using Dev.DevKit.ProxyTypes;
using Dev.DevKit.Shared;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace Dev.DevKit.PluginAccount.Test
{
    [TestClass]
    public class PreAccountCreateSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext Plugin { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Plugin = Context.GetDefaultPluginContext();
            Plugin.PrimaryEntityName = "account";
            Plugin.MessageName = "Create";
            Plugin.Stage = (int)StageEnum.PreOperation;
            Plugin.Mode = (int)ExecutionModeEnum.Synchronous;
        }

        /*
        [TestMethod]
        public void _00_UnsecureString_And_SecureString()
        {
            var target = new Entity("account")
            {
                ["accountid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PreAccountCreateSynchronous>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }
        */

        [TestMethod]
        public void _01_Stage_Does_Not_Equals_PreOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin);
            }, "Stage does not equals PreOperation");
        }

        [TestMethod]
        public void _02_PrimaryEntityName_Does_Not_Equals_account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin);
            }, "PrimaryEntityName does not equals account");
        }

        [TestMethod]
        public void _03_MessageName_Does_Not_Equals_Create()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin);
            }, "MessageName does not equals Create");
        }

        [TestMethod]
        public void _04_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "Create";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin);
            }, "Execution does not equals Synchronous");
        }

        [TestMethod]
        public void _05_CrmPluginRegistration_Check()
        {
            var @class = new PreAccountCreateSynchronous();
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
            //Plugin.InputParameters["???"] = ???
            //run
            Context.ExecutePluginWith<PreAccountCreateSynchronous>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}
