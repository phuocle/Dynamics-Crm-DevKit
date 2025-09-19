using Dev.DevKitV4.Console.Lib;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using NSubstitute;
using System;
using System.Activities;
using System.Diagnostics;
using System.Reflection;

namespace Dev.DevKitV4.Console
{
    public class Program
    {
        [STAThread]
        static void Main()
        {
            //CheckWhoAmI();
            //Debug_Dev_DevKit_V4_Package_Contact_PreContactCreateSynchronous();
            DebugWorkflow();
        }

        private static void Debug_Dev_DevKit_V4_Package_Contact_PreContactCreateSynchronous()
        {
            var json = @"{'BusinessUnitId':'41090f9b-d46e-ef11-a670-000d3aa2a990','CorrelationId':'158cf2d3-ad9b-4831-aef0-3a69720ae19b','Depth':1,'InitiatingUserAgent':'Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/140.0.0.0 Safari\/537.36 Edg\/140.0.0.0','InitiatingUserAzureActiveDirectoryObjectId':'d2069f4e-58c0-4db3-9a3c-ddada13285f2','InitiatingUserId':'be79eb35-e36f-ef11-a670-6045bd1ddf50','InputParameters':[{'key':'Target','value':{'__type':'Entity:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Attributes':[{'key':'territorycode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'address2_freighttermscode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'address2_shippingmethodcode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'isprivate','value':false},{'key':'statuscode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'msdyn_isminorwithparentalconsent','value':false},{'key':'donotbulkemail','value':false},{'key':'donotsendmm','value':false},{'key':'haschildrencode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'educationcode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'adx_identity_lockoutenabled','value':false},{'key':'adx_identity_mobilephoneconfirmed','value':false},{'key':'fullname','value':'A A'},{'key':'isautocreate','value':false},{'key':'adx_profileisanonymous','value':false},{'key':'ownerid','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'be79eb35-e36f-ef11-a670-6045bd1ddf50','KeyAttributes':[],'LogicalName':'systemuser','Name':null,'RowVersion':null}},{'key':'isbackofficecustomer','value':false},{'key':'donotbulkpostalmail','value':false},{'key':'donotpostalmail','value':false},{'key':'donotemail','value':false},{'key':'statecode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':0}},{'key':'address2_addresstypecode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'donotphone','value':false},{'key':'adx_identity_twofactorenabled','value':false},{'key':'createdon','value':'2025-09-17T03:25:10.000Z'},{'key':'transactioncurrencyid','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'39f66fdd-036f-ef11-a670-000d3aa2a990','KeyAttributes':[],'LogicalName':'transactioncurrency','Name':null,'RowVersion':null}},{'key':'contactid','value':'223f05ea-7593-f011-b4cc-000d3aa25840'},{'key':'adx_profilealert','value':false},{'key':'modifiedby','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'be79eb35-e36f-ef11-a670-6045bd1ddf50','KeyAttributes':[],'LogicalName':'systemuser','Name':null,'RowVersion':null}},{'key':'leadsourcecode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'msdyn_isminor','value':false},{'key':'modifiedonbehalfby','value':null},{'key':'followemail','value':true},{'key':'preferredcontactmethodcode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'owningbusinessunit','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'41090f9b-d46e-ef11-a670-000d3aa2a990','KeyAttributes':[],'LogicalName':'businessunit','Name':null,'RowVersion':null}},{'key':'lastname','value':'A'},{'key':'createdby','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'be79eb35-e36f-ef11-a670-6045bd1ddf50','KeyAttributes':[],'LogicalName':'systemuser','Name':null,'RowVersion':null}},{'key':'firstname','value':'A'},{'key':'adx_confirmremovepassword','value':false},{'key':'yomifullname','value':'A A'},{'key':'donotfax','value':false},{'key':'merged','value':false},{'key':'customersizecode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'marketingonly','value':false},{'key':'processid','value':'00000000-0000-0000-0000-000000000000'},{'key':'shippingmethodcode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'customertypecode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'msdyn_disablewebtracking','value':false},{'key':'creditonhold','value':false},{'key':'adx_identity_logonenabled','value':false},{'key':'modifiedon','value':'2025-09-17T03:25:10.000Z'},{'key':'participatesinworkflow','value':false},{'key':'preferredappointmenttimecode','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1}},{'key':'adx_identity_locallogindisabled','value':false},{'key':'adx_identity_emailaddress1confirmed','value':false}],'EntityState':null,'FormattedValues':[{'key':'territorycode','value':'Default Value'},{'key':'address2_freighttermscode','value':'Default Value'},{'key':'address2_shippingmethodcode','value':'Default Value'},{'key':'isprivate','value':'No'},{'key':'statuscode','value':'Active'},{'key':'msdyn_isminorwithparentalconsent','value':'No'},{'key':'donotbulkemail','value':'Allow'},{'key':'donotsendmm','value':'Send'},{'key':'haschildrencode','value':'Default Value'},{'key':'educationcode','value':'Default Value'},{'key':'adx_identity_lockoutenabled','value':'No'},{'key':'adx_identity_mobilephoneconfirmed','value':'No'},{'key':'isautocreate','value':'No'},{'key':'adx_profileisanonymous','value':'No'},{'key':'isbackofficecustomer','value':'No'},{'key':'donotbulkpostalmail','value':'No'},{'key':'donotpostalmail','value':'Allow'},{'key':'donotemail','value':'Allow'},{'key':'statecode','value':'Active'},{'key':'address2_addresstypecode','value':'Default Value'},{'key':'donotphone','value':'Allow'},{'key':'adx_identity_twofactorenabled','value':'No'},{'key':'createdon','value':'2025-09-17T10:25:10+07:00'},{'key':'adx_profilealert','value':'No'},{'key':'leadsourcecode','value':'Default Value'},{'key':'msdyn_isminor','value':'No'},{'key':'followemail','value':'Allow'},{'key':'preferredcontactmethodcode','value':'Any'},{'key':'adx_confirmremovepassword','value':'No'},{'key':'donotfax','value':'Allow'},{'key':'merged','value':'No'},{'key':'customersizecode','value':'Default Value'},{'key':'marketingonly','value':'No'},{'key':'shippingmethodcode','value':'Default Value'},{'key':'customertypecode','value':'Default Value'},{'key':'msdyn_disablewebtracking','value':'No'},{'key':'creditonhold','value':'No'},{'key':'adx_identity_logonenabled','value':'No'},{'key':'modifiedon','value':'2025-09-17T10:25:10+07:00'},{'key':'participatesinworkflow','value':'No'},{'key':'preferredappointmenttimecode','value':'Morning'},{'key':'adx_identity_locallogindisabled','value':'No'},{'key':'adx_identity_emailaddress1confirmed','value':'No'}],'Id':'223f05ea-7593-f011-b4cc-000d3aa25840','KeyAttributes':[],'LogicalName':'contact','RelatedEntities':[],'RowVersion':null}}],'IsExecutingOffline':false,'IsInTransaction':true,'IsOfflinePlayback':false,'IsolationMode':2,'MessageName':'Create','Mode':0,'OperationCreatedOn':'2025-09-17T03:25:10.000Z','OperationId':'5b1d1b1a-79f1-4f98-8467-81a6347f8865','OrganizationId':'29c6e552-e16f-ef11-a66b-6045bd1e7d8b','OrganizationName':'unq29c6e552e16fef11a66b6045bd1e7','OutputParameters':[],'OwningExtension':{'Id':'1655405f-7293-f011-b4cc-000d3aa25840','KeyAttributes':[],'LogicalName':'sdkmessageprocessingstep','Name':'Dev.DevKitV4.Package.Contact.PreContactCreateSynchronousPackage','RowVersion':null},'ParentContext':null,'PostEntityImages':[],'PreEntityImages':[],'PrimaryEntityId':'223f05ea-7593-f011-b4cc-000d3aa25840','PrimaryEntityName':'contact','RequestId':'5b1d1b1a-79f1-4f98-8467-81a6347f8865','SecondaryEntityName':'none','SharedVariables':[{'key':'IsAutoTransact','value':true},{'key':'AcceptLang','value':'en-US,en;q=0.9'},{'key':'x-ms-app-name','value':'v4_DEVKITV4'},{'key':'DefaultsAddedFlag','value':true},{'key':'pc-log-option','value':0},{'key':'pc-log-dir','value':null}],'Stage':20,'UserAzureActiveDirectoryObjectId':'d2069f4e-58c0-4db3-9a3c-ddada13285f2','UserId':'be79eb35-e36f-ef11-a670-6045bd1ddf50'}".Replace("'", "\"");
            var serviceProvider = Helper.GetServiceProvider(json, AppSettings.Service);
            var plugin = new Dev.DevKitV4.Package.Contact.PreContactCreateSynchronousPackage(null, null);
            plugin.Execute(serviceProvider);
        }

        private static void CheckWhoAmI()
        {
            var UserId = ((WhoAmIResponse)AppSettings.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }

        private static void DebugWorkflow()
        {
            var json = Helper.Decompress("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");

            // Create required services for mocking
            var workflowContext = Substitute.For<IWorkflowContext>();
            var tracingService = Substitute.For<ITracingService>();
            var serviceFactory = Substitute.For<IOrganizationServiceFactory>();

            // Configure the organization service factory
            serviceFactory.CreateOrganizationService(Arg.Any<Guid?>()).Returns((param) =>
            {
                var userId = param.ArgAt<Guid?>(0);
                if (userId != null)
                {
                    var clone = AppSettings.Service.Clone();
                    clone.CallerId = userId.GetValueOrDefault();
                    return clone;
                }
                return AppSettings.Service;
            });

            // Deserialize the workflow context from JSON
            var remoteExecutionContext = Helper.DeserializeRemoteExecutionContext(json);

            // Configure the workflow context with data from the remote execution context
            workflowContext.BusinessUnitId.Returns(remoteExecutionContext.BusinessUnitId);
            workflowContext.CorrelationId.Returns(remoteExecutionContext.CorrelationId);
            workflowContext.Depth.Returns(remoteExecutionContext.Depth);
            workflowContext.InitiatingUserId.Returns(remoteExecutionContext.InitiatingUserId);
            workflowContext.InputParameters.Returns(remoteExecutionContext.InputParameters);
            workflowContext.IsExecutingOffline.Returns(remoteExecutionContext.IsExecutingOffline);
            workflowContext.IsInTransaction.Returns(remoteExecutionContext.IsInTransaction);
            workflowContext.IsOfflinePlayback.Returns(remoteExecutionContext.IsOfflinePlayback);
            workflowContext.IsolationMode.Returns(remoteExecutionContext.IsolationMode);
            workflowContext.MessageName.Returns(remoteExecutionContext.MessageName);
            workflowContext.Mode.Returns(remoteExecutionContext.Mode);
            workflowContext.OperationCreatedOn.Returns(remoteExecutionContext.OperationCreatedOn);
            workflowContext.OperationId.Returns(remoteExecutionContext.OperationId);
            workflowContext.OrganizationId.Returns(remoteExecutionContext.OrganizationId);
            workflowContext.OrganizationName.Returns(remoteExecutionContext.OrganizationName);
            workflowContext.OutputParameters.Returns(remoteExecutionContext.OutputParameters);
            workflowContext.OwningExtension.Returns(remoteExecutionContext.OwningExtension);
            // ParentContext is IWorkflowContext type, need to cast or create mock
            if (remoteExecutionContext.ParentContext != null)
            {
                var parentWorkflowContext = Substitute.For<IWorkflowContext>();
                workflowContext.ParentContext.Returns(parentWorkflowContext);
            }
            workflowContext.PostEntityImages.Returns(remoteExecutionContext.PostEntityImages);
            workflowContext.PreEntityImages.Returns(remoteExecutionContext.PreEntityImages);
            workflowContext.PrimaryEntityId.Returns(remoteExecutionContext.PrimaryEntityId);
            workflowContext.PrimaryEntityName.Returns(remoteExecutionContext.PrimaryEntityName);
            workflowContext.RequestId.Returns(remoteExecutionContext.RequestId);
            workflowContext.SecondaryEntityName.Returns(remoteExecutionContext.SecondaryEntityName);
            workflowContext.SharedVariables.Returns(remoteExecutionContext.SharedVariables);
            workflowContext.UserId.Returns(remoteExecutionContext.UserId);

            // Create and test the workflow directly using the private method
            var workflow = new Dev.DevKitV4.Server.Workflows.SendEmailByQueue();

            // Use reflection to call the private ExecuteWorkflow method directly
            var executeWorkflowMethod = typeof(Dev.DevKitV4.Server.Workflows.SendEmailByQueue).GetMethod("ExecuteWorkflow",
                BindingFlags.NonPublic | BindingFlags.Instance);

            if (executeWorkflowMethod != null)
            {
                executeWorkflowMethod.Invoke(workflow, new object[] { null, workflowContext, serviceFactory, AppSettings.Service, AppSettings.Service, tracingService });
            }
            else
            {
                System.Console.WriteLine("Could not find ExecuteWorkflow method to invoke");
            }
        }
    }
}
