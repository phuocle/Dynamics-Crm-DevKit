﻿using System;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using GoogleVietNam.Shared;
using GoogleVietNam.Shared.Entities;

namespace GoogleVietNam.PluginAccount.Test
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
            PluginContext.InputParameters["Target"] = null;
        }

        [TestMethod]
        public void PreAccountCreate_Stage_Does_Not_Equals_PreOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PreAccountCreateSynchronous>(plugin, null, null), "Stage does not equals PreOperation");
        }

        [TestMethod]
        public void PreAccountCreate_PrimaryEntityName_Does_Not_Equals_Account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PreAccountCreateSynchronous>(plugin, null, null), "PrimaryEntityName does not equals account");
        }

        [TestMethod]
        public void PreAccountCreate_MessageName_Does_Not_Equals_Create()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PreOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PreAccountCreateSynchronous>(plugin, null, null), "MessageName does not equals Create");
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
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<PreAccountCreateSynchronous>(plugin, null, null), "Execution does not equal Synchronous");
        }

        /*
        [TestMethod]
        public void PreAccountCreate_CrmPluginRegistration_Check_Image1()
        {
            var @class = new PreAccountCreateSynchronous(null, null);
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
            var @class = new PreAccountCreateSynchronous(null, null);
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
        public void PreAccountCreate_Test_01()
        {
            Assert.Fail();

            var account = new Account();
            var contact = new Contact();

        }
    }
}