using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Reflection;
using Wooow.Kool.ProxyTypes;
using Wooow.Kool.Shared.ContactOptionSets;
using Wooow.Kool.Shared.Entities;
using Wooow.Kool.Shared.Lib;


namespace Wooow.Kool.Plugin
{
    [TestClass]
    public class PostAccountCreateSynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext PluginContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            PluginContext = Context.GetDefaultPluginContext();
            PluginContext.MessageName = "Create";
            PluginContext.Stage = (int)StageEnum.PostOperation;
            PluginContext.Mode = (int)ExecutionModeEnum.Synchronous;
            var target = new Shared.Entities.Account()
            {
            };
            PluginContext.InputParameters["Target"] = target.Entity;
        }

        [TestMethod]
        public void PostAccountCreate_Stage_Does_Not_Equals_PostOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PostAccountCreateSynchronous>(plugin), "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void PostAccountCreate_PrimaryEntityName_Does_Not_Equals_Account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PostAccountCreateSynchronous>(plugin), "PrimaryEntityName does not equals account");
        }

        [TestMethod]
        public void PostAccountCreate_MessageName_Does_Not_Equals_Create()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PostAccountCreateSynchronous>(plugin), "MessageName does not equals Create");
        }

        [TestMethod]
        public void PostAccountCreate_Mode_Does_Not_Equals_Synchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "Create";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() => context.ExecutePluginWith<PostAccountCreateSynchronous>(plugin), "Execution does not equal Synchronous");
        }

        /*
        [TestMethod]
        public void PostAccountCreate_CrmPluginRegistration_Check_Image1()
        {
            var @class = new PostAccountCreateSynchronous();
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
        public void PostAccountCreate_CrmPluginRegistration_Check_Image2()
        {
            var @class = new PostAccountCreateSynchronous();
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
        public void PostAccountCreate_Test_Create_Contact()
        {
            //setup
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Context.Data.Clear();
            var ACCOUNT_ID = Guid.Parse("{A7EF9A9B-F878-4CD1-B7BB-30470D60FDB7}");
            var target = new Shared.Entities.Account
            {
                AccountId = ACCOUNT_ID,
                Name = "Account Name",
                Telephone1 = "12345678"
            };
            PluginContext.InputParameters["Target"] = target.GetCreateEntity();

            //run
            var plugin = Context.ExecutePluginWith<PostAccountCreateSynchronous>(PluginContext);

            //result
            var fetchData = new
            {
                parentcustomerid = ACCOUNT_ID
            };
            var fetchXml = $@"
<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='contact'>
    <attribute name='contactid'/>
    <attribute name='parentcustomerid'/>
    <attribute name='address1_addresstypecode'/>
    <attribute name='telephone1'/>
    <attribute name='firstname'/>
    <order attribute='parentcustomerid' descending='false'/>
    <filter type='and'>
      <condition attribute='parentcustomerid' operator='eq' value='{fetchData.parentcustomerid}'/>
    </filter>
  </entity>
</fetch>
";
            var rows = Context.GetFakedOrganizationService().RetrieveMultiple(new FetchExpression(fetchXml));
            if (rows.Entities.Count != 1)
                Assert.Fail("Not found contact record");
            var contact = new Shared.Entities.Contact(rows.Entities[0]);
            Assert.AreEqual("Account Name", contact.FirstName);
            Assert.AreEqual("12345678", contact.Telephone1);
            Assert.AreEqual(ACCOUNT_ID, contact.ParentCustomerId.Id);
            Assert.AreEqual(Address1_AddressTypeCode.Other, contact.Address1_AddressTypeCode);
        }
    }
}
