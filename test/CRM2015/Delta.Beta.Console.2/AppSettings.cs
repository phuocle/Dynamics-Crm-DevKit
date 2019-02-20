using System;
using System.Collections.Specialized;
using System.Configuration;
using System.Net;
using System.ServiceModel.Description;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;

namespace Delta.Beta.Console._2
{
    public class AppSettings
    {
        static readonly NameValueCollection nvc;
        static AppSettings()
        {
            nvc = ConfigurationManager.AppSettings;
            var uri = new Uri(CrmUrl);
            var clientCredentials = new ClientCredentials();
            clientCredentials.UserName.UserName = UserName;
            clientCredentials.UserName.Password = Password;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            CrmService = new OrganizationServiceProxy(uri, null, clientCredentials, null);
            CurrentUserId = new EntityReference
            {
                LogicalName = "systemuser",
                Id = ((WhoAmIResponse)CrmService.Execute(new WhoAmIRequest())).UserId
            };
        }

        public static string UserName { get { return nvc["UserName"]; } }
        public static string Password { get { return nvc["Password"]; } }
        public static string CrmUrl { get { return nvc["CrmUrl"]; } }

        public static OrganizationServiceProxy CrmService { get; private set; }
        public static EntityReference CurrentUserId { get; private set; }
    }
}