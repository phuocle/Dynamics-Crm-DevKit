using Dev.DevKit.ProxyTypes;
using Dev.DevKit.Server.Plugins.Account;
using Dev.DevKit.Shared;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace Dev.DevKit.Server.Test.Plugins.Account
{
    [TestClass]
    public class PostAccountDeleteAsynchronousTest
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
            Plugin.MessageName = "Delete";
            Plugin.Stage = (int)StageEnum.PostOperation;
            Plugin.Mode = (int)ExecutionModeEnum.Asynchronous;
        }

        /*
        [TestMethod]
        public void _00_UnsecureString_And_SecureString()
        {
            var target = new Entity("server")
            {
                ["serverid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PostAccountDeleteAsynchronous>(Plugin, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }
        */

        [TestMethod]
        public void _01_Stage_Does_Not_Equals_PostOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountDeleteAsynchronous>(plugin);
            }, "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void _02_PrimaryEntityName_Does_Not_Equals_server()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountDeleteAsynchronous>(plugin);
            }, "PrimaryEntityName does not equals server");
        }

        [TestMethod]
        public void _03_MessageName_Does_Not_Equals_tDelete()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountDeleteAsynchronous>(plugin);
            }, "MessageName does not equals tDelete");
        }

        [TestMethod]
        public void _04_Mode_Does_Not_Equals_Asynchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "Delete";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountDeleteAsynchronous>(plugin);
            }, "Execution does not equals Asynchronous");
        }

        [TestMethod]
        public void _05_CrmPluginRegistration_Check()
        {
            var @class = new PostAccountDeleteAsynchronous();
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
            Context.ExecutePluginWith<PostAccountDeleteAsynchronous>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}
