using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;
using Wooow.Kool.ProxyTypes;
using Wooow.Kool.Shared.Entities;
using Wooow.Kool.Shared.Lib;


namespace Wooow.Kool.Plugin
{
    [TestClass]
    public class PreAccountCreateSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.MessageName = "Create";
            PluginContext.Stage = (int)StageEnum.PreOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            var target = new Shared.Entities.Account()
            {
            };
            PluginContext.InputParameters["Target"] = target.Entity;
        }

        [TestMethod]
        public void PreAccountCreate_Stage_Does_Not_Equals_PreOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin), "Stage does not equals PreOperation");
        }

        [TestMethod]
        public void PreAccountCreate_PrimaryEntityName_Does_Not_Equals_Account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin), "PrimaryEntityName does not equals account");
        }

        [TestMethod]
        public void PreAccountCreate_MessageName_Does_Not_Equals_Create()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin), "MessageName does not equals Create");
        }

        [TestMethod]
        public void PreAccountCreate_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "Create";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin), "Execution does not equal Synchronous");
        }

        /*
        [TestMethod]
        public void PreAccountCreate_CrmPluginRegistration_Check_Image1()
        {
            var @class = new PreAccountCreateSynchronous();
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
        public void PreAccountCreate_CrmPluginRegistration_Check_Image2()
        {
            var @class = new PreAccountCreateSynchronous();
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
        public void PreAccountCreate_Test_AccountName_Is_Null()
        {
            //setup
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Context.Data.Clear();
            var target = new Shared.Entities.Account
            {
                AccountId = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target.GetCreateEntity();

            //run
            var plugin = Context.ExecutePluginWith<PreAccountCreateSynchronous>(PluginContext);

            //result
            var resultTarget = (Entity)PluginContext.InputParameters["Target"];
            var account = new Shared.Entities.Account(resultTarget);
            Assert.IsNull(account.Name);
        }

        [TestMethod]
        public void PreAccountCreate_Test_AccountName_UpperCase()
        {
            //setup
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Context.Data.Clear();
            var target = new Shared.Entities.Account
            {
                AccountId = Guid.NewGuid(),
                Name = "Hello World"
            };
            PluginContext.InputParameters["Target"] = target.GetCreateEntity();

            //run
            var plugin = Context.ExecutePluginWith<PreAccountCreateSynchronous>(PluginContext);

            //result
            var resultTarget = (Entity)PluginContext.InputParameters["Target"];
            var account = new Shared.Entities.Account(resultTarget);
            Assert.AreEqual(account.Name, "HELLO WORLD");
        }
    }
}
