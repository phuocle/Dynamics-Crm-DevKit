using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;
using Paz.LuckeyMonkey.ProxyTypes;
using Paz.LuckeyMonkey.Shared;

namespace Paz.LuckeyMonkey.PluginLead.Test
{
    [TestClass]
    public class PreLeadCreateSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.PrimaryEntityName = "lead";
            PluginContext.MessageName = "Create";
            PluginContext.Stage = (int)StageEnum.PreOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            PluginContext.InputParameters["Target"] = null;
        }

        /*
        [TestMethod]
        public void PreLeadCreate_UnsecureString_And_SecureString()
        {
            var target = new Entity("lead")
            {
                ["leadid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PreLeadCreateSynchronous>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }
        */

        [TestMethod]
        public void PreLeadCreate_Stage_Does_Not_Equals_PreOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreLeadCreateSynchronous>(plugin);
            }, "Stage does not equals PreOperation");
        }

        [TestMethod]
        public void PreLeadCreate_PrimaryEntityName_Does_Not_Equals_Lead()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreLeadCreateSynchronous>(plugin);
            }, "Stage does not equals lead");
        }

        [TestMethod]
        public void PreLeadCreate_MessageName_Does_Not_Equals_Create()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "lead";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreLeadCreateSynchronous>(plugin);
            }, "Stage does not equals Create");
        }

        [TestMethod]
        public void PreLeadCreate_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "lead";
            plugin.MessageName = "Create";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PreLeadCreateSynchronous>(plugin);
            }, "Stage does not equals Synchronous");
        }

        /*
        [TestMethod]
        public void PreLeadCreate_CrmPluginRegistration_Check_Image1()
        {
            var @class = new PreLeadCreateSynchronous();
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
        public void PreLeadCreate_CrmPluginRegistration_Check_Image2()
        {
            var @class = new PreLeadCreateSynchronous();
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
        public void PreLeadCreate_LeadSubjectAlwaysUppercase()
        {
            //setup
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Context.Data.Clear();
            var subject = "lowcase subject";
            var target = new Entity("lead")
            {
                ["leadid"] = Guid.NewGuid(),
                ["subject"] = subject
            };
            PluginContext.InputParameters["Target"] = target;

            //run
            Context.ExecutePluginWithConfigurations<PreLeadCreateSynchronous>(PluginContext, null, null);

            //result
            var resultTarget = (Entity)PluginContext.InputParameters["Target"];
            var lead = new Shared.Entities.Lead(resultTarget);
            Assert.AreEqual(subject.ToUpper(), lead.Subject, false);
        }
    }
}
