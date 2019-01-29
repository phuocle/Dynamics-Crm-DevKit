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
    public class PostAccountdevkit_AjaxAccountSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.MessageName = "devkit_AjaxAccount";
            PluginContext.Stage = (int)StageEnum.PostOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            PluginContext.InputParameters["Target"] = null;
        }

        [TestMethod]
        public void PostAccountdevkit_AjaxAccount_UnsecureString_And_SecureString()
        {
            var target = new Entity("account")
            {
                ["accountid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PostAccountdevkit_AjaxAccountSynchronous>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }

        [TestMethod]
        public void PostAccountdevkit_AjaxAccount_Stage_Does_Not_Equals_PostOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostAccountdevkit_AjaxAccountSynchronous>(plugin, null, null), "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void PostAccountdevkit_AjaxAccount_PrimaryEntityName_Does_Not_Equals_Account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostAccountdevkit_AjaxAccountSynchronous>(plugin, null, null), "PrimaryEntityName does not equals account");
        }

        [TestMethod]
        public void PostAccountdevkit_AjaxAccount_MessageName_Does_Not_Equals_devkit_AjaxAccount()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostAccountdevkit_AjaxAccountSynchronous>(plugin, null, null), "MessageName does not equals devkit_AjaxAccount");
        }

        [TestMethod]
        public void PostAccountdevkit_AjaxAccount_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "devkit_AjaxAccount";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostAccountdevkit_AjaxAccountSynchronous>(plugin, null, null), "Execution does not equal Synchronous");
        }

        [TestMethod]
        public void PostAccountdevkit_AjaxAccount_Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
