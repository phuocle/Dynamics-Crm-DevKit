using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using DevKitLevel1.Shared;

namespace DevKitLevel1.CustomActionAccount.Test
{
    [TestClass]
    public class PostAccountnew_AjaxAccountSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.MessageName = "new_AjaxAccount";
            PluginContext.Stage = (int)StageEnum.PostOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            PluginContext.InputParameters["Target"] = null;
        }

        [TestMethod]
        public void PostAccountnew_AjaxAccount_Stage_Does_Not_Equals_PostOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostAccountnew_AjaxAccountSynchronous>(plugin, null, null), "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void PostAccountnew_AjaxAccount_PrimaryEntityName_Does_Not_Equals_Account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostAccountnew_AjaxAccountSynchronous>(plugin, null, null), "PrimaryEntityName does not equals account");
        }

        [TestMethod]
        public void PostAccountnew_AjaxAccount_MessageName_Does_Not_Equals_new_AjaxAccount()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostAccountnew_AjaxAccountSynchronous>(plugin, null, null), "MessageName does not equals new_AjaxAccount");
        }

        [TestMethod]
        public void PostAccountnew_AjaxAccount_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "new_AjaxAccount";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PostAccountnew_AjaxAccountSynchronous>(plugin, null, null), "Execution does not equal Synchronous");
        }

        /*
        [TestMethod]
        public void PostAccountnew_AjaxAccount_CrmPluginRegistration_Check_Image1()
        {
            var @class = new PostAccountnew_AjaxAccountSynchronous(null, null);
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
        public void PostAccountnew_AjaxAccount_CrmPluginRegistration_Check_Image2()
        {
            var @class = new PostAccountnew_AjaxAccountSynchronous(null, null);
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
        public void PostAccountnew_AjaxAccount_Test_01()
        {
            Assert.Fail();
        }
    }
}
