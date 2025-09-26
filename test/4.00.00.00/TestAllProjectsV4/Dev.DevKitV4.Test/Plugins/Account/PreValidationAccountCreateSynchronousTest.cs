using Dev.DevKitV4.Shared;
using Dev.DevKitV4.Shared.Test;
using FakeXrmEasy.Plugins;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System.Linq;

namespace Dev.DevKitV4.Test.Plugins.Account
{
    [TestClass]
    public class PreValidationAccountCreateSynchronousTest : FakeXrmEasyTestBase
    {
        private const StageEnum PLUGIN_STAGE = StageEnum.PreValidation;
        private const string PLUGIN_MESSAGE = "Create";
        private const string PLUGIN_ENTITY_LOGICAL_NAME = "account";
        private const ExecutionModeEnum PLUGIN_EXECUTION_MODE = ExecutionModeEnum.Synchronous;

        [TestMethod]
        public void PreValidationAccountCreateSynchronousTest_00()
        {
            var pluginContext = _context.GetDefaultPluginContext();

            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<Dev.DevKitV4.Server.Plugins.Account.PreValidationAccountCreateSynchronous>(pluginContext);
            }, $"Stage does not equals {PLUGIN_STAGE}");

            pluginContext.Stage = (int)PLUGIN_STAGE;
            pluginContext.MessageName = string.Empty;
            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<Dev.DevKitV4.Server.Plugins.Account.PreValidationAccountCreateSynchronous>(pluginContext);
            }, $"MessageName does not equals {PLUGIN_MESSAGE}");

            pluginContext.MessageName = PLUGIN_MESSAGE;
            pluginContext.PrimaryEntityName = string.Empty;
            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<Dev.DevKitV4.Server.Plugins.Account.PreValidationAccountCreateSynchronous>(pluginContext);
            }, $"PrimaryEntityName does not equals {PLUGIN_ENTITY_LOGICAL_NAME}");

            pluginContext.PrimaryEntityName = PLUGIN_ENTITY_LOGICAL_NAME;
            pluginContext.Mode = -1;
            Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<Dev.DevKitV4.Server.Plugins.Account.PreValidationAccountCreateSynchronous>(pluginContext);
            }, $"Execution does not equals {PLUGIN_EXECUTION_MODE}");

            pluginContext.Mode = (int)PLUGIN_EXECUTION_MODE;
            _context.ExecutePluginWith<Dev.DevKitV4.Server.Plugins.Account.PreValidationAccountCreateSynchronous>(pluginContext);
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void PreValidationAccountCreateSynchronousTest_01()
        {
            //setup
            var json = @"{'BusinessUnitId':'41090f9b-d46e-ef11-a670-000d3aa2a990','CorrelationId':'b27fb0b4-6f34-43b3-954e-23b48f2f21da','Depth':1,'InitiatingUserAgent':'Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/140.0.0.0 Safari\/537.36 Edg\/140.0.0.0','InitiatingUserAzureActiveDirectoryObjectId':'d2069f4e-58c0-4db3-9a3c-ddada13285f2','InitiatingUserId':'be79eb35-e36f-ef11-a670-6045bd1ddf50','InputParameters':[{'key':'Target','value':{'__type':'Entity:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Attributes':[{'key':'accountnumber','value':'456'},{'key':'name','value':'123'},{'key':'donotpostalmail','value':false},{'key':'donotphone','value':false},{'key':'donotfax','value':false},{'key':'donotemail','value':false},{'key':'donotbulkemail','value':false},{'key':'followemail','value':true},{'key':'preferredcontactmethodcode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'creditonhold','value':false},{'key':'statuscode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'accountratingcode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'processid','value':'00000000-0000-0000-0000-000000000000'},{'key':'accountid','value':'acf5b83d-06a1-4ef3-b78f-c2eca283e6ad'},{'key':'transactioncurrencyid','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'39f66fdd-036f-ef11-a670-000d3aa2a990','KeyAttributes':[],'LogicalName':'transactioncurrency','Name':null,'RowVersion':null}},{'key':'ownerid','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'be79eb35-e36f-ef11-a670-6045bd1ddf50','KeyAttributes':[],'LogicalName':'systemuser','Name':null,'RowVersion':null}},{'key':'businesstypecode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'shippingmethodcode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'address2_shippingmethodcode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'territorycode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'marketingonly','value':false},{'key':'accountclassificationcode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'donotbulkpostalmail','value':false},{'key':'address2_freighttermscode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'donotsendmm','value':false},{'key':'isprivate','value':false},{'key':'address2_addresstypecode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'participatesinworkflow','value':false},{'key':'merged','value':false},{'key':'customersizecode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}}],'EntityState':null,'FormattedValues':[],'Id':'acf5b83d-06a1-4ef3-b78f-c2eca283e6ad','KeyAttributes':[],'LogicalName':'account','RelatedEntities':[],'RowVersion':null}},{'key':'x-ms-app-name','value':'v4_DEVKITV4'},{'key':'SuppressDuplicateDetection','value':false}],'IsExecutingOffline':false,'IsInTransaction':true,'IsOfflinePlayback':false,'IsolationMode':2,'MessageName':'Create','Mode':0,'OperationCreatedOn':'2025-09-25T02:04:18.000Z','OperationId':'68d6ebe1-ba57-4842-9cbc-d2f4234e3c19','OrganizationId':'29c6e552-e16f-ef11-a66b-6045bd1e7d8b','OrganizationName':'unq29c6e552e16fef11a66b6045bd1e7','OutputParameters':[],'OwningExtension':{'Id':'00ad6eb0-4898-f011-b41c-000d3aa25840','KeyAttributes':[],'LogicalName':'sdkmessageprocessingstep','Name':'Dev.DevKitV4.Server.Plugins.Account.PreValidationAccountCreateSynchronous','RowVersion':null},'ParentContext':null,'PostEntityImages':[],'PreEntityImages':[],'PrimaryEntityId':'acf5b83d-06a1-4ef3-b78f-c2eca283e6ad','PrimaryEntityName':'account','RequestId':'68d6ebe1-ba57-4842-9cbc-d2f4234e3c19','SecondaryEntityName':'none','SharedVariables':[{'key':'IsODataTransaction','value':true},{'key':'ODataChangesetRequestCount','value':2},{'key':'IsAutoTransact','value':true},{'key':'AcceptLang','value':'en-US,en;q=0.9'},{'key':'x-ms-app-name','value':'v4_DEVKITV4'},{'key':'DefaultsAddedFlag','value':true}],'Stage':10,'UserAzureActiveDirectoryObjectId':'d2069f4e-58c0-4db3-9a3c-ddada13285f2','UserId':'be79eb35-e36f-ef11-a670-6045bd1ddf50'}".Replace("'", "\"");
            var remote = TestHelper.DeserializeRemoteExecutionContext(json);
            var pluginContext = _context.GetDefaultPluginContext();
            pluginContext.SetXrmFakedContextPlugin(remote);
            //run
            _context.ExecutePluginWith<Dev.DevKitV4.Server.Plugins.Account.PreValidationAccountCreateSynchronous>(pluginContext);
            //result
            Assert.IsTrue(true);
        }
    }
}