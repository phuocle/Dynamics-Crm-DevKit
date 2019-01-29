using System;
using System.Reflection;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using MyCompanyName.MyProjectName.ProxyTypes;
using MyCompanyName.MyProjectName.Shared;

namespace MyCompanyName.MyProjectName.PluginAccount.Test
{
    [TestClass]
    public class PreAccountRetrieveSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.MessageName = "Retrieve";
            PluginContext.Stage = (int)StageEnum.PreOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            PluginContext.InputParameters["Target"] = null;
        }

        [TestMethod]
        public void PreAccountRetrieve_UnsecureString_And_SecureString()
        {
            var target = new Entity("account")
            {
                ["accountid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PreAccountRetrieveSynchronous>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }

        [TestMethod]
        public void PreAccountRetrieve_Stage_Does_Not_Equals_PreOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PreAccountRetrieveSynchronous>(plugin, null, null), "Stage does not equals PreOperation");
        }

        [TestMethod]
        public void PreAccountRetrieve_PrimaryEntityName_Does_Not_Equals_Account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PreAccountRetrieveSynchronous>(plugin, null, null), "PrimaryEntityName does not equals account");
        }

        [TestMethod]
        public void PreAccountRetrieve_MessageName_Does_Not_Equals_Retrieve()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PreAccountRetrieveSynchronous>(plugin, null, null), "MessageName does not equals Retrieve");
        }

        [TestMethod]
        public void PreAccountRetrieve_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "Retrieve";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PreAccountRetrieveSynchronous>(plugin, null, null), "Execution does not equal Synchronous");
        }

        /*
        [TestMethod]
        public void PreAccountRetrieve_CrmPluginRegistration_Check_Image1()
        {
            var @class = new PreAccountRetrieveSynchronous(null, null);
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
        public void PreAccountRetrieve_CrmPluginRegistration_Check_Image2()
        {
            var @class = new PreAccountRetrieveSynchronous(null, null);
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
        public void PreAccountRetrieve_Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
