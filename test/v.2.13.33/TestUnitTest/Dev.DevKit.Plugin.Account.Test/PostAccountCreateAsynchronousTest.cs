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
            var json = "{'BusinessUnitId':'356a3da9-15ab-eb11-8236-000d3a80893f','CorrelationId':'e4c34772-ca6d-47d0-85f9-f734e096ab0d','Depth':1,'InitiatingUserId':'27ae35af-15ab-eb11-8236-000d3a80893f','IsExecutingOffline':false,'IsInTransaction':false,'IsOfflinePlayback':false,'IsolationMode':2,'MessageName':'Create','Mode':1,'OperationCreatedOn':'2021-09-13T07:18:17Z','OperationId':'1dff4bc0-6214-ec11-b6e6-000d3a821f4b','OrganizationId':'fedb18c5-c739-4eeb-94a6-4e16c27f1f58','OrganizationName':'unqfedb18c5c7394eeb94a64e16c27f1','OwningExtension':{'Id':'3c4e5aa5-f1d6-eb11-bacb-002248168d13','LogicalName':'sdkmessageprocessingstep','Name':null,'KeyAttributes':[],'RowVersion':null,'ExtensionData':null},'PrimaryEntityId':'b5f1bc40-dccb-442f-aa94-f7c9fe57cf2f','PrimaryEntityName':'account','RequestId':'fbc4a005-b1fb-43cd-810c-5fbbb30746f3','SecondaryEntityName':'none','SharedVariables':[{'Key':'IsODataTransaction','Value':true},{'Key':'ODataChangesetRequestCount','Value':2},{'Key':'IsAutoTransact','Value':true},{'Key':'x-ms-app-name','Value':'devkit_DevKit'},{'Key':'DefaultsAddedFlag','Value':true}],'UserId':'27ae35af-15ab-eb11-8236-000d3a80893f','InputParameters':{'Target':{'Attributes':{'territorycode':{'Value':1,'ExtensionData':null},'address2_freighttermscode':{'Value':1,'ExtensionData':null},'address2_shippingmethodcode':{'Value':1,'ExtensionData':null},'isprivate':false,'followemail':true,'donotbulkemail':false,'donotsendmm':false,'createdon':'2021-09-13T07:18:12Z','statecode':{'Value':0,'ExtensionData':null},'businesstypecode':{'Value':1,'ExtensionData':null},'donotpostalmail':false,'ownerid':{'Id':'27ae35af-15ab-eb11-8236-000d3a80893f','LogicalName':'systemuser','Name':null,'KeyAttributes':[],'RowVersion':null,'ExtensionData':null},'donotbulkpostalmail':false,'name':'ABCD','accountnumber':'DEF','address1_composite':'HCM','address2_addresstypecode':{'Value':1,'ExtensionData':null},'donotphone':false,'devkit_isparentcurrencysymbolcalculated':false,'transactioncurrencyid':{'Id':'e39879d5-29ab-eb11-8236-000d3a80893f','LogicalName':'transactioncurrency','Name':null,'KeyAttributes':[],'RowVersion':null,'ExtensionData':null},'modifiedby':{'Id':'27ae35af-15ab-eb11-8236-000d3a80893f','LogicalName':'systemuser','Name':null,'KeyAttributes':[],'RowVersion':null,'ExtensionData':null},'donotemail':false,'statuscode':{'Value':1,'ExtensionData':null},'modifiedonbehalfby':null,'preferredcontactmethodcode':{'Value':1,'ExtensionData':null},'owningbusinessunit':{'Id':'356a3da9-15ab-eb11-8236-000d3a80893f','LogicalName':'businessunit','Name':null,'KeyAttributes':[],'RowVersion':null,'ExtensionData':null},'accountratingcode':{'Value':1,'ExtensionData':null},'accountid':'b5f1bc40-dccb-442f-aa94-f7c9fe57cf2f','createdby':{'Id':'27ae35af-15ab-eb11-8236-000d3a80893f','LogicalName':'systemuser','Name':null,'KeyAttributes':[],'RowVersion':null,'ExtensionData':null},'donotfax':false,'merged':false,'customersizecode':{'Value':1,'ExtensionData':null},'marketingonly':false,'address1_city':'HCM','shippingmethodcode':{'Value':1,'ExtensionData':null},'processid':'00000000-0000-0000-0000-000000000000','devkit_categorycode':[{'Value':2,'ExtensionData':null},{'Value':3,'ExtensionData':null}],'creditonhold':false,'modifiedon':'2021-09-13T07:18:12Z','participatesinworkflow':false,'accountclassificationcode':{'Value':1,'ExtensionData':null},'telephone1':'1111','exchangerate':1.0000000000},'FormattedValues':{'territorycode':'Default Value','address2_freighttermscode':'Default Value','address2_shippingmethodcode':'Default Value','isprivate':'No','followemail':'Allow','donotbulkemail':'Allow','donotsendmm':'Send','createdon':'2021-09-13T14:18:12+07:00','statecode':'Active','businesstypecode':'Default Value','donotpostalmail':'Allow','donotbulkpostalmail':'No','address2_addresstypecode':'Default Value','donotphone':'Allow','devkit_isparentcurrencysymbolcalculated':'No','donotemail':'Allow','statuscode':'Active','preferredcontactmethodcode':'Any','accountratingcode':'Default Value','donotfax':'Allow','merged':'No','customersizecode':'Default Value','marketingonly':'No','shippingmethodcode':'Default Value','devkit_categorycode':'Family; Social','creditonhold':'No','modifiedon':'2021-09-13T14:18:12+07:00','participatesinworkflow':'No','accountclassificationcode':'Default Value'},'KeyAttributes':null,'Id':'b5f1bc40-dccb-442f-aa94-f7c9fe57cf2f','LogicalName':'account','RowVersion':null}},'OutputParameters':{'id':'b5f1bc40-dccb-442f-aa94-f7c9fe57cf2f'},'PostEntityImages':{'AsynchronousStepPrimaryName':{'Attributes':{'name':'ABCD','accountid':'b5f1bc40-dccb-442f-aa94-f7c9fe57cf2f'},'FormattedValues':null,'KeyAttributes':null,'Id':'b5f1bc40-dccb-442f-aa94-f7c9fe57cf2f','LogicalName':'account','RowVersion':null}},'PreEntityImages':null}";
            //json = json.Replace("'", "\"");
            var debugContext = SimpleJson.DeserializeObject<DebugContext>(json);
            var targetJson = debugContext.InputParameters["Target"];
            var targetEntity = SimpleJson.DeserializeObject<DebugEntity>(targetJson.ToString());

            //var json = "{'Attributes':[{'Key':'territorycode','Value':{'Value':1,'ExtensionData':null}}]}";
            //json = json.Replace("'", "\"");
            //var debug = SimpleJson.DeserializeObject<DebugEntity>(json);

            //Plugin.InputParameters["Target"] =
            //run
            Context.ExecutePluginWith<PostAccountCreateAsynchronous>(Plugin);
            //result
            Assert.IsTrue(true);
        }
    }
}
