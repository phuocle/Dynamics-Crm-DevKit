using System;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using MyCompanyName.MyProjectName.Shared;

namespace MyCompanyName.MyProjectName.DataProvider.Test
{
    [TestClass]
    public class RetrieveMultipleTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.MessageName = "";
            PluginContext.Stage = (int)StageEnum.PostOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Asynchronous;
            PluginContext.InputParameters["Target"] = null;
        }

        [TestMethod]
        public void RetrieveMultiple_Stage_Does_Not_Equals_RetrieveMultiple()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<RetrieveMultiple>(plugin, null, null), "Stage does not equals RetrieveMultiple");
        }

        [TestMethod]
        public void RetrieveMultiple_PrimaryEntityName_Does_Not_Equals_DataProvider()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<RetrieveMultiple>(plugin, null, null), "PrimaryEntityName does not equals dataprovider");
        }

        [TestMethod]
        public void RetrieveMultiple_MessageName_Does_Not_Equals_()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "dataprovider";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<RetrieveMultiple>(plugin, null, null), "MessageName does not equals ");
        }

        [TestMethod]
        public void RetrieveMultiple_Mode_Does_Not_Equals_()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "dataprovider";
            plugin.MessageName = "";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<RetrieveMultiple>(plugin, null, null), "Execution does not equal ");
        }

        /*
        [TestMethod]
        public void RetrieveMultiple_CrmPluginRegistration_Check_Image1()
        {
            var @class = new RetrieveMultiple(null, null);
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
        public void RetrieveMultiple_CrmPluginRegistration_Check_Image2()
        {
            var @class = new RetrieveMultiple(null, null);
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
        public void RetrieveMultiple_Test_01()
        {
            Assert.Fail();
        }
    }
}
