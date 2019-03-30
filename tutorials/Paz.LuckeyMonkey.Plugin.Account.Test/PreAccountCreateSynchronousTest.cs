using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;
using Paz.LuckeyMonkey.ProxyTypes;
using Paz.LuckeyMonkey.Shared;
using System.Collections.Generic;

namespace Paz.LuckeyMonkey.PluginAccount.Test
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
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.PrimaryEntityName = "account";
            PluginContext.MessageName = "Create";
            PluginContext.Stage = (int)StageEnum.PreOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            PluginContext.InputParameters["Target"] = null;
        }

        /*
        [TestMethod]
        public void PreAccountCreate_UnsecureString_And_SecureString()
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
        public void PreAccountCreate_Stage_Does_Not_Equals_PreOperation()
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
        public void PreAccountCreate_PrimaryEntityName_Does_Not_Equals_Account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin);
            }, "Stage does not equals account");
        }

        [TestMethod]
        public void PreAccountCreate_MessageName_Does_Not_Equals_Create()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin);
            }, "Stage does not equals Create");
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
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreAccountCreateSynchronous>(plugin);
            }, "Stage does not equals Synchronous");
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
        public void PreAccountCreate_Test_WhenALeadQualify()
        {
            //prepare data
            //1. Lead
            var LEAD_ID = Guid.Parse("{00000000-0000-0000-0000-000000000001}");
            var lead = new Entity("lead");
            lead["leadid"] = LEAD_ID;
            lead["paz_field1"] = "abc";
            lead["paz_field2"] = null;
            lead["paz_field3"] = "def";

            //2. target
            var target = new Entity("account");
            target["originatingleadid"] = new EntityReference("lead", LEAD_ID);

            //setup
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Context.Data.Clear();
            Context.Data.Add("lead", new Dictionary<Guid, Entity> {
                { LEAD_ID, lead }
            });
            PluginContext.InputParameters["Target"] = target;
            //run
            Context.ExecutePluginWithConfigurations<PreAccountCreateSynchronous>(PluginContext, null, null);
            //result
            var result = PluginContext.InputParameters["Target"] as Entity;
            var account = new Shared.Entities.Account(result);
            Assert.AreEqual(account.paz_Field1, "abc");
            Assert.AreEqual(account.paz_Field2, null);
            Assert.AreEqual(account.paz_Field3, "def");
        }
    }
}
