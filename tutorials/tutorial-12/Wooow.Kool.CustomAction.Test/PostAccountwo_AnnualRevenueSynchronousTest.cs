using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;
using Wooow.Kool.ProxyTypes;
using Wooow.Kool.Shared.Entities;
using Wooow.Kool.Shared.Lib;

namespace Wooow.Kool.CustomAction
{
    [TestClass]
    public class PostAccountwo_AnnualRevenueSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.MessageName = "wo_AnnualRevenue";
            PluginContext.Stage = (int)StageEnum.PostOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            PluginContext.PrimaryEntityName = "account";
        }

        [TestMethod]
        public void PostAccountwo_AnnualRevenue_Stage_Does_Not_Equals_PostOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PostAccountwo_AnnualRevenueSynchronous>(plugin), "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void PostAccountwo_AnnualRevenue_PrimaryEntityName_Does_Not_Equals_Test()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PostAccountwo_AnnualRevenueSynchronous>(plugin), "PrimaryEntityName does not equals test");
        }

        [TestMethod]
        public void PostAccountwo_AnnualRevenue_MessageName_Does_Not_Equals_untwo_AnnualRevenue()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PostAccountwo_AnnualRevenueSynchronous>(plugin), "MessageName does not equals untwo_AnnualRevenue");
        }

        [TestMethod]
        public void PostAccountwo_AnnualRevenue_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "wo_AnnualRevenue";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PostAccountwo_AnnualRevenueSynchronous>(plugin), "Execution does not equal Synchronous");
        }

        /*
        [TestMethod]
        public void PostAccountwo_AnnualRevenue_CrmPluginRegistration_Check_Image1()
        {
            var @class = new PostAccountwo_AnnualRevenueSynchronous();
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
        public void PostAccountwo_AnnualRevenue_CrmPluginRegistration_Check_Image2()
        {
            var @class = new PostAccountwo_AnnualRevenueSynchronous();
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
        public void PostAccountwo_AnnualRevenue_Test_AnnualRevenue()
        {
            //setup
            var ACCOUNT_ID = Guid.Parse("{7424D001-11D4-4B35-8798-26A46ED733CC}");
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Context.Data.Clear();
            var accountSetup = new Shared.Entities.Account()
            {
                AccountId = ACCOUNT_ID,
                Revenue = 112233m
            };
            Context.Data.Add(
                Shared.Entities.Account.EntityLogicalName,
                new Dictionary<Guid, Entity> {
                    { ACCOUNT_ID, accountSetup.GetCreateEntity() }
                });            
            PluginContext.InputParameters["Target"] = new EntityReference(Shared.Entities.Account.EntityLogicalName, ACCOUNT_ID);
            PluginContext.InputParameters["AccountNumber"] = "acc-123";
            PluginContext.OutputParameters["AnnualRevenue"] = 0m;
            //run
            var plugin = Context.ExecutePluginWith<PostAccountwo_AnnualRevenueSynchronous>(PluginContext);
            //result
            var resultTarget = (Decimal)PluginContext.OutputParameters["AnnualRevenue"];
            Assert.AreEqual(12345m, resultTarget);
        }
    }
}
