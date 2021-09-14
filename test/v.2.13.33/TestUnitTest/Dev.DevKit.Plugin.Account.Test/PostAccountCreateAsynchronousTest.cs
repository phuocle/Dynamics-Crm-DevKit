using Dev.DevKit.ProxyTypes;
using Dev.DevKit.Shared;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Reflection;

namespace Dev.DevKit.PluginAccount.Test
{
    [TestClass]
    public class PostAccountCreateAsynchronousTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedPluginExecutionContext Plugin { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Plugin = Context.GetDefaultPluginContext();
            Plugin.PrimaryEntityName = "account";
            Plugin.MessageName = "Create";
            Plugin.Stage = (int)StageEnum.PostOperation;
            Plugin.Mode = (int)ExecutionModeEnum.Asynchronous;
        }

        /*
        [TestMethod]
        public void _00_UnsecureString_And_SecureString()
        {
            var target = new Entity("account")
            {
                ["accountid"] = Guid.NewGuid()
            };
            PluginContext.InputParameters["Target"] = target;
            var unsecureString = "UnsecureString";
            var secureString = "SecureString";
            Context.ExecutePluginWithConfigurations<PostAccountCreateAsynchronous>(PluginContext, unsecureString, secureString);
            Assert.IsTrue(target != null);
        }
        */

        [TestMethod]
        public void _01_Stage_Does_Not_Equals_PostOperation()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountCreateAsynchronous>(plugin);
            }, "Stage does not equals PostOperation");
        }

        [TestMethod]
        public void _02_PrimaryEntityName_Does_Not_Equals_account()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountCreateAsynchronous>(plugin);
            }, "PrimaryEntityName does not equals account");
        }

        [TestMethod]
        public void _03_MessageName_Does_Not_Equals_Create()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "abcd";
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountCreateAsynchronous>(plugin);
            }, "MessageName does not equals Create");
        }

        [TestMethod]
        public void _04_Mode_Does_Not_Equals_Asynchronous()
        {
            var context = new XrmFakedContext();
            var plugin = context.GetDefaultPluginContext();
            plugin.Stage = (int)StageEnum.PostOperation;
            plugin.PrimaryEntityName = "account";
            plugin.MessageName = "Create";
            plugin.Mode = -1;
            Assert.ThrowsException<InvalidPluginExecutionException>(() =>
            {
                context.ExecutePluginWith<PostAccountCreateAsynchronous>(plugin);
            }, "Execution does not equals Asynchronous");
        }

        [TestMethod]
        public void _05_CrmPluginRegistration_Check()
        {
            var @class = new PostAccountCreateAsynchronous();
            foreach (var attribute in System.Attribute.GetCustomAttributes(@class.GetType()))
            {
                if (attribute.GetType().Equals(typeof(CrmPluginRegistrationAttribute)))
                {
                    var check = attribute as CrmPluginRegistrationAttribute;
                    Assert.IsNotNull(check);
                }
                else
                    Assert.Fail();
            }
        }

        [TestMethod]
        public void _06_ExecutePlugin()
        {
            //setup
            var json = "{'BusinessUnitId':'356a3da9-15ab-eb11-8236-000d3a80893f','CorrelationId':'234ad162-2b14-4c74-ad7d-87029148d10d','Depth':1,'InitiatingUserId':'27ae35af-15ab-eb11-8236-000d3a80893f','IsExecutingOffline':false,'IsInTransaction':false,'IsOfflinePlayback':false,'IsolationMode':2,'MessageName':'Create','Mode':1,'OperationCreatedOn':'2021-09-14T07:09:21Z','OperationId':'708886ae-2a15-ec11-b6e6-000d3a821f4b','OrganizationId':'fedb18c5-c739-4eeb-94a6-4e16c27f1f58','OrganizationName':'unqfedb18c5c7394eeb94a64e16c27f1','OwningExtension':{'EntityReferenceId':'3c4e5aa5-f1d6-eb11-bacb-002248168d13','LogicalName':'sdkmessageprocessingstep'},'PrimaryEntityId':'ea1f0797-aa98-4258-ae1b-cf79dbd7c946','PrimaryEntityName':'account','RequestId':'df4d5f9b-eb85-4253-b042-31bd41c1e4f6','SecondaryEntityName':'none','SharedVariables':[{'Key':'IsODataTransaction','Value':true},{'Key':'ODataChangesetRequestCount','Value':2},{'Key':'IsAutoTransact','Value':true},{'Key':'x-ms-app-name','Value':'devkit_DevKit'},{'Key':'DefaultsAddedFlag','Value':true}],'UserId':'27ae35af-15ab-eb11-8236-000d3a80893f','InputParameters':{'Target':{'Attributes':[{'LogicalName':'territorycode','Type':'OptionSetValue','Value':1},{'LogicalName':'statecode','Type':'OptionSetValue','Value':0},{'LogicalName':'address2_shippingmethodcode','Type':'OptionSetValue','Value':1},{'LogicalName':'accountid','Type':'Guid','Value':'ea1f0797-aa98-4258-ae1b-cf79dbd7c946'},{'LogicalName':'followemail','Type':'bool','Value':true},{'LogicalName':'donotbulkemail','Type':'bool','Value':false},{'LogicalName':'donotsendmm','Type':'bool','Value':false},{'LogicalName':'createdon','Type':'DateTime','Value':'2021-09-14T07:09:15Z'},{'LogicalName':'isprivate','Type':'bool','Value':false},{'LogicalName':'businesstypecode','Type':'OptionSetValue','Value':1},{'LogicalName':'donotpostalmail','Type':'bool','Value':false},{'LogicalName':'ownerid','Type':'EntityReference','Value':'27ae35af-15ab-eb11-8236-000d3a80893f','EntityLogicalName':'systemuser'},{'LogicalName':'donotbulkpostalmail','Type':'bool','Value':false},{'LogicalName':'name','Type':'string','Value':'THIIS IT THE ACCOUNT'},{'LogicalName':'devkit_isparentcurrencysymbolcalculated','Type':'bool','Value':false},{'LogicalName':'address2_addresstypecode','Type':'OptionSetValue','Value':1},{'LogicalName':'donotphone','Type':'bool','Value':false},{'LogicalName':'transactioncurrencyid','Type':'EntityReference','Value':'e39879d5-29ab-eb11-8236-000d3a80893f','EntityLogicalName':'transactioncurrency'},{'LogicalName':'modifiedby','Type':'EntityReference','Value':'27ae35af-15ab-eb11-8236-000d3a80893f','EntityLogicalName':'systemuser'},{'LogicalName':'donotemail','Type':'bool','Value':false},{'LogicalName':'statuscode','Type':'OptionSetValue','Value':1},{'LogicalName':'preferredcontactmethodcode','Type':'OptionSetValue','Value':1},{'LogicalName':'owningbusinessunit','Type':'EntityReference','Value':'356a3da9-15ab-eb11-8236-000d3a80893f','EntityLogicalName':'businessunit'},{'LogicalName':'createdby','Type':'EntityReference','Value':'27ae35af-15ab-eb11-8236-000d3a80893f','EntityLogicalName':'systemuser'},{'LogicalName':'donotfax','Type':'bool','Value':false},{'LogicalName':'merged','Type':'bool','Value':false},{'LogicalName':'customersizecode','Type':'OptionSetValue','Value':1},{'LogicalName':'marketingonly','Type':'bool','Value':false},{'LogicalName':'accountratingcode','Type':'OptionSetValue','Value':1},{'LogicalName':'shippingmethodcode','Type':'OptionSetValue','Value':1},{'LogicalName':'processid','Type':'Guid','Value':'00000000-0000-0000-0000-000000000000'},{'LogicalName':'devkit_categorycode','Type':'OptionSetValueCollection','Value':'1,2,3'},{'LogicalName':'creditonhold','Type':'bool','Value':false},{'LogicalName':'modifiedon','Type':'DateTime','Value':'2021-09-14T07:09:15Z'},{'LogicalName':'participatesinworkflow','Type':'bool','Value':false},{'LogicalName':'accountclassificationcode','Type':'OptionSetValue','Value':1},{'LogicalName':'address2_freighttermscode','Type':'OptionSetValue','Value':1},{'LogicalName':'exchangerate','Type':'decimal','Value':1.0000000000}],'FormattedValues':{'territorycode':'Default Value','statecode':'Active','address2_shippingmethodcode':'Default Value','followemail':'Allow','donotbulkemail':'Allow','donotsendmm':'Send','createdon':'2021-09-14T14:09:15+07:00','isprivate':'No','businesstypecode':'Default Value','donotpostalmail':'Allow','donotbulkpostalmail':'No','devkit_isparentcurrencysymbolcalculated':'No','address2_addresstypecode':'Default Value','donotphone':'Allow','donotemail':'Allow','statuscode':'Active','preferredcontactmethodcode':'Any','donotfax':'Allow','merged':'No','customersizecode':'Default Value','marketingonly':'No','accountratingcode':'Default Value','shippingmethodcode':'Default Value','devkit_categorycode':'Business; Family; Social','creditonhold':'No','modifiedon':'2021-09-14T14:09:15+07:00','participatesinworkflow':'No','accountclassificationcode':'Default Value','address2_freighttermscode':'Default Value'},'KeyAttributes':[],'EntityId':'ea1f0797-aa98-4258-ae1b-cf79dbd7c946','LogicalName':'account','RowVersion':null}},'OutputParameters':{'id':'ea1f0797-aa98-4258-ae1b-cf79dbd7c946'},'PostEntityImages':{'PostImage':{'Attributes':[{'LogicalName':'name','Type':'string','Value':'THIIS IT THE ACCOUNT'}],'FormattedValues':null,'KeyAttributes':[],'EntityId':'ea1f0797-aa98-4258-ae1b-cf79dbd7c946','LogicalName':'account','RowVersion':null},'AsynchronousStepPrimaryName':{'Attributes':[{'LogicalName':'name','Type':'string','Value':'THIIS IT THE ACCOUNT'},{'LogicalName':'accountid','Type':'Guid','Value':'ea1f0797-aa98-4258-ae1b-cf79dbd7c946'}],'FormattedValues':null,'KeyAttributes':[],'EntityId':'ea1f0797-aa98-4258-ae1b-cf79dbd7c946','LogicalName':'account','RowVersion':null}},'PreEntityImages':null}";
            var debugContext = Debug.JsonToDebugContext(json);
            Plugin.InputParameters["Target"] = (Entity)debugContext.InputParameters["Target"];
            //run
            Context.ExecutePluginWith<PostAccountCreateAsynchronous>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}
