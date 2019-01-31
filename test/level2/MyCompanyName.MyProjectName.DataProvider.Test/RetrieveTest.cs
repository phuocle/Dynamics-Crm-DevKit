using System;
using System.Reflection;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using MyCompanyName.MyProjectName.ProxyTypes;
using MyCompanyName.MyProjectName.Shared;

namespace MyCompanyName.MyProjectName.DataProvider.Test
{
    [TestClass]
    public class RetrieveTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            PluginContext = Context.GetDefaultPluginContext();
            //PluginContext.MessageName = "Retrieve";
            //PluginContext.Stage = (int)StageEnum.Retrieve;
            //PluginContext.Mode = (int)ExecutionModeEnum.;
            PluginContext.InputParameters["Target"] = null;
        }

        [TestMethod]
        public void Retrieve_UnsecureString_And_SecureString()
        {
            var target = new Entity();
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<Retrieve>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }

        [TestMethod]
        public void Retrieve_Stage_Does_Not_Equals_Retrieve()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<Retrieve>(plugin, null, null), "Stage does not equals Retrieve");
        }

        //[TestMethod]
        //public void Retrieve_PrimaryEntityName_Does_Not_Equals_DataProvider()
        //{
        //    var context = new XrmFakedContext();
        //    var plugin = context.GetDefaultPluginContext();
        //    plugin.Stage = (int)StageEnum.Retrieve;
        //    plugin.PrimaryEntityName = "abcd";
        //    Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<Retrieve>(plugin, null, null), "PrimaryEntityName does not equals dataprovider");
        //}

        //[TestMethod]
        //public void Retrieve_MessageName_Does_Not_Equals_()
        //{
        //    var context = new XrmFakedContext();
        //    var plugin = context.GetDefaultPluginContext();
        //    plugin.Stage = (int)StageEnum.Retrieve;
        //    plugin.PrimaryEntityName = "dataprovider";
        //    plugin.MessageName = "abcd";
        //    Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<Retrieve>(plugin, null, null), "MessageName does not equals ");
        //}

        //[TestMethod]
        //public void Retrieve_Mode_Does_Not_Equals_()
        //{
        //    var context = new XrmFakedContext();
        //    var plugin = context.GetDefaultPluginContext();
        //    plugin.Stage = (int)StageEnum.Retrieve;
        //    plugin.PrimaryEntityName = "dataprovider";
        //    plugin.MessageName = "";
        //    plugin.Mode = -1;
        //    Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWithConfigurations<Retrieve>(plugin, null, null), "Execution does not equal ");
        //}

        /*
        [TestMethod]
        public void Retrieve_CrmPluginRegistration_Check_Image1()
        {
            var @class = new Retrieve(null, null);
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
        public void Retrieve_CrmPluginRegistration_Check_Image2()
        {
            var @class = new Retrieve(null, null);
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
        public void Retrieve_Test_01()
        {
            Assert.IsTrue(true);
        }
    }
}
