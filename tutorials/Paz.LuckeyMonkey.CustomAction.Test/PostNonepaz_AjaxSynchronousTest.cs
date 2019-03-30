using System.Reflection;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Paz.LuckeyMonkey.ProxyTypes;
using Paz.LuckeyMonkey.Shared;

namespace Paz.LuckeyMonkey.CustomAction.Test
{
    [TestClass]
    public class PostNonepaz_AjaxSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.PrimaryEntityName = "none";
            PluginContext.MessageName = "paz_Ajax";
            PluginContext.Stage = (int)StageEnum.PostOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            PluginContext.InputParameters["Target"] = null;
        }

        /*
        [TestMethod]
        public void PostNonepaz_Ajax_UnsecureString_And_SecureString()
        {
            var target = new Entity("none")
            {
                ["noneid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PostNonepaz_AjaxSynchronous>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }
        */

        [TestMethod]
        public void PostNonepaz_Ajax_Stage_Does_Not_Equals_PostOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostNonepaz_AjaxSynchronous>(plugin);
            }, "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void PostNonepaz_Ajax_PrimaryEntityName_Does_Not_Equals_CustomAction()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostNonepaz_AjaxSynchronous>(plugin);
            }, "Stage does not equals none");
        }

        [TestMethod]
        public void PostNonepaz_Ajax_MessageName_Does_Not_Equals_paz_Ajax()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "none";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostNonepaz_AjaxSynchronous>(plugin);
            }, "Stage does not equals paz_Ajax");
        }

        [TestMethod]
        public void PostNonepaz_Ajax_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "none";
            plugin.MessageName = "paz_Ajax";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostNonepaz_AjaxSynchronous>(plugin);
            }, "Stage does not equals Synchronous");
        }

        [TestMethod]
        public void PostNonepaz_Ajax_Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
