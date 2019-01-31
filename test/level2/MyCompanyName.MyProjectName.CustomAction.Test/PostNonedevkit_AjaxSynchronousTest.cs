using System;
using System.Reflection;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using MyCompanyName.MyProjectName.ProxyTypes;
using MyCompanyName.MyProjectName.Shared;

namespace MyCompanyName.MyProjectName.CustomAction.Test
{
    [TestClass]
    public class PostNonedevkit_AjaxSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.MessageName = "devkit_Ajax";
            PluginContext.Stage = (int)StageEnum.PostOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            PluginContext.InputParameters["Target"] = null;
        }

        [TestMethod]
        public void PostNonedevkit_Ajax_UnsecureString_And_SecureString()
        {
            var target = new Entity("none")
            {
                ["noneid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PostNonedevkit_AjaxSynchronous>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }

        [TestMethod]
        public void PostNonedevkit_Ajax_Stage_Does_Not_Equals_PostOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostNonedevkit_AjaxSynchronous>(plugin, null, null), "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void PostNonedevkit_Ajax_PrimaryEntityName_Does_Not_Equals_None()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostNonedevkit_AjaxSynchronous>(plugin, null, null), "PrimaryEntityName does not equals none");
        }

        [TestMethod]
        public void PostNonedevkit_Ajax_MessageName_Does_Not_Equals_devkit_Ajax()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "none";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostNonedevkit_AjaxSynchronous>(plugin, null, null), "MessageName does not equals devkit_Ajax");
        }

        [TestMethod]
        public void PostNonedevkit_Ajax_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "none";
            plugin.MessageName = "devkit_Ajax";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostNonedevkit_AjaxSynchronous>(plugin, null, null), "Execution does not equal Synchronous");
        }

        [TestMethod]
        public void PostNonedevkit_Ajax_Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
