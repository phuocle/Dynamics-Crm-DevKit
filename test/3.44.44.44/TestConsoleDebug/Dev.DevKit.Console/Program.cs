using Dev.DevKit.Console.Debug;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Console
{
    public class Program
    {
        static void Main()
        {
            //CallDebugCustomAction();
            DebugCustomAction();
        }

        private static void CallDebugCustomAction()
        {
            var entityReference = new EntityReference("account", Guid.Parse("a4982849-096f-ef11-a670-6045bd21f435"));
            var entity = new Entity("account", Guid.Parse("98982849-096f-ef11-a670-6045bd21f435"))
            {
                ["name"] = "ACCOUNT NAME",
                ["datetime"] = DateTime.UtcNow,
                ["entityreference"] = entityReference,
                ["guid"] = Guid.NewGuid(),
                ["optionsets"] = new OptionSetValueCollection { new OptionSetValue(1), new OptionSetValue(2) }
            };
            var entities = new EntityCollection();
            entities.Entities.Add(entity);
            var request = new OrganizationRequest("devkit_DebugCustomAction")
            {
                ["InputBoolean"] = true,
                ["InputDateTime"] = DateTime.Now,
                ["InputDecimal"] = (decimal)1.23,
                ["InputEntity"] = entity,
                ["InputEntityCollection"] = entities,
                ["InputEntityReference"] = entityReference,
                ["InputFloat"] = (double)4.567,
                ["InputInteger"] = (int)999,
                ["InputMoney"] = new Money((decimal)345.678),
                ["InputPickList"] = new OptionSetValue(2),
                ["InputString"] = "ABCD"
            };
            AppSettings.Service.Execute(request);
        }

        private static void DebugCustomAction()
        {
            var json = @"{'BusinessUnitId':'41090f9b-d46e-ef11-a670-000d3aa2a990','CorrelationId':'1346ad20-8b00-41a6-9a17-a3bda4771909','Depth':1,'InitiatingUserAgent':'Dev.DevKit.Console.exe (CrmSvcClient:4.0.0.188)','InitiatingUserAzureActiveDirectoryObjectId':'1c39bb04-bc49-4d5a-ba34-7eeded2616d3','InitiatingUserId':'b1977479-f590-ef11-8a69-000d3ac831e1','InputParameters':[{'key':'InputBoolean','value':true},{'key':'InputDateTime','value':'2024-12-10T06:43:27.963Z'},{'key':'InputDecimal','value':1.23},{'key':'InputEntity','value':{'__type':'Entity:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Attributes':[{'key':'name','value':'ACCOUNT NAME'},{'key':'datetime','value':'2024-12-10T06:43:27.963Z'},{'key':'entityreference','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'a4982849-096f-ef11-a670-6045bd21f435','KeyAttributes':[],'LogicalName':'account','Name':null,'RowVersion':null}},{'key':'guid','value':'fc69bba7-3a04-4ec1-97b7-d3ae047da76e'},{'key':'optionsets','value':[{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1},{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':2}]}],'EntityState':null,'FormattedValues':[],'Id':'98982849-096f-ef11-a670-6045bd21f435','KeyAttributes':[],'LogicalName':'account','RelatedEntities':[],'RowVersion':null}},{'key':'InputEntityCollection','value':{'__type':'EntityCollection:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Entities':[{'Attributes':[{'key':'name','value':'ACCOUNT NAME'},{'key':'datetime','value':'2024-12-10T06:43:27.963Z'},{'key':'entityreference','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'a4982849-096f-ef11-a670-6045bd21f435','KeyAttributes':[],'LogicalName':'account','Name':null,'RowVersion':null}},{'key':'guid','value':'fc69bba7-3a04-4ec1-97b7-d3ae047da76e'},{'key':'optionsets','value':[{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':1},{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':2}]}],'EntityState':null,'FormattedValues':[],'Id':'98982849-096f-ef11-a670-6045bd21f435','KeyAttributes':[],'LogicalName':'account','RelatedEntities':[],'RowVersion':null}],'EntityName':'account','MinActiveRowVersion':null,'MoreRecords':false,'PagingCookie':null,'TotalRecordCount':0,'TotalRecordCountLimitExceeded':false}},{'key':'InputEntityReference','value':{'__type':'EntityReference:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Id':'a4982849-096f-ef11-a670-6045bd21f435','KeyAttributes':[],'LogicalName':'account','Name':null,'RowVersion':null}},{'key':'InputFloat','value':4.567},{'key':'InputInteger','value':999},{'key':'InputMoney','value':{'__type':'Money:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':345.678}},{'key':'InputPickList','value':{'__type':'OptionSetValue:http:\/\/schemas.microsoft.com\/xrm\/2011\/Contracts','Value':2}},{'key':'InputString','value':'ABCD'}],'IsExecutingOffline':false,'IsInTransaction':false,'IsOfflinePlayback':false,'IsolationMode':2,'MessageName':'devkit_DebugCustomAction','Mode':1,'OperationCreatedOn':'2024-12-10T06:43:34.000Z','OperationId':'d4cb7713-c2b6-ef11-a72f-6045bd213099','OrganizationId':'29c6e552-e16f-ef11-a66b-6045bd1e7d8b','OrganizationName':'unq29c6e552e16fef11a66b6045bd1e7','OutputParameters':[],'OwningExtension':{'Id':'e5811dab-abb6-ef11-a72f-6045bd213099','KeyAttributes':[],'LogicalName':'sdkmessageprocessingstep','Name':null,'RowVersion':null},'ParentContext':null,'PostEntityImages':[],'PreEntityImages':[],'PrimaryEntityId':'00000000-0000-0000-0000-000000000000','PrimaryEntityName':'none','RequestId':'f2921a3c-5d13-4b80-a809-7df446463f22','SecondaryEntityName':'none','SharedVariables':[{'key':'IsAutoTransact','value':true},{'key':'AcceptLang','value':''}],'Stage':40,'UserAzureActiveDirectoryObjectId':'1c39bb04-bc49-4d5a-ba34-7eeded2616d3','UserId':'b1977479-f590-ef11-8a69-000d3ac831e1'}".Replace("'", "\"");
            var serviceProvider = Helper.GetServiceProvider(json, AppSettings.Service);
            var plugin = new Dev.DevKit.CustomAction.Postdevkit_DebugCustomActionAsynchronous();
            plugin.Execute(serviceProvider);
        }

        private static void CheckWhoAmI()
        {
            var UserId = ((WhoAmIResponse)AppSettings.Service.Execute(new WhoAmIRequest())).UserId;
            System.Console.WriteLine(UserId);
            System.Console.ReadKey();
        }
    }
}
