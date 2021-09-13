using Dev.DevKit.CustomAction.Entities.Contact;
using Dev.DevKit.ProxyTypes;
using Dev.DevKit.Shared;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace Dev.DevKit.CustomAction.Entities.Test.Contact
{
    [TestClass]
    public class PostContactdevkit_SetPrimaryContactSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext Plugin { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Plugin = Context.GetDefaultPluginContext();
            Plugin.PrimaryEntityName = "contact";
            Plugin.MessageName = "devkit_SetPrimaryContact";
            Plugin.Stage = (int)StageEnum.PostOperation;
            Plugin.Mode = (int)ExecutionModeEnum.Synchronous;
        }

        /*
        [TestMethod]
        public void _00_UnsecureString_And_SecureString()
        {
            var target = new Entity("???")
            {
                ["entitiesid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PostContactdevkit_SetPrimaryContactSynchronous>(Plugin, unsecureString, secureString);
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
                context.ExecutePluginWith<PostContactdevkit_SetPrimaryContactSynchronous>(plugin);
            }, "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void _02_PrimaryEntityName_Does_Not_Equals_()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostContactdevkit_SetPrimaryContactSynchronous>(plugin);
            }, "PrimaryEntityName does not equals ???");
        }

        [TestMethod]
        public void _03_MessageName_Does_Not_Equals_()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "???";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostContactdevkit_SetPrimaryContactSynchronous>(plugin);
            }, "MessageName does not equals ???");
        }

        [TestMethod]
        public void _04_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "???";
            plugin.MessageName = "???";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostContactdevkit_SetPrimaryContactSynchronous>(plugin);
            }, "Execution does not equals Synchronous");
        }

        [TestMethod]
        public void _05_CrmPluginRegistration_Check()
        {
            var @class = new PostContactdevkit_SetPrimaryContactSynchronous();
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
            Context.ExecutePluginWith<PostContactdevkit_SetPrimaryContactSynchronous>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}
