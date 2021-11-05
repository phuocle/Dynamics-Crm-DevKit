using System;
using System.Collections.Generic;
using System.IO;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;

namespace DynamicsCrm.DevKit.Shared
{
    public static class XrmHelper
    {
        public static string BuildConnectionString(string type, string url, string user, string pass)
        {
            if (type == "ClientSecret")
                return $"AuthType=ClientSecret;Url={url};ClientId={user};ClientSecret={pass};";
            else if (type == "AD")
            {
                var arr = user.Split("\\".ToCharArray());
                if (arr.Length != 2)
                    throw new Exception("Please enter User name like: contoso\\jsmith");
                var domain = arr[0];
                user = arr[1];
                return $"AuthType={type};Url={url};Domain={domain};Username={user};Password={pass};";
            }
            return $"AuthType=OAuth;Url={url};Username={user};Password={pass};AppId=51f81489-12ee-4a9e-aaae-a2591f45987d;RedirectUri=app://58145B91-0C36-4500-8554-080854F2AC97;LoginPrompt=Auto";
        }

        public static string BuildConnectionString(CrmConnection crmConnection)
        {
            return BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, crmConnection.Password);
        }

        public static CrmServiceClient IsConnected(CrmConnection crmConnection)
        {
            var password = crmConnection.Password;
            if (crmConnection.Type != "ClientSecret") password = EncryptDecrypt.DecryptString(password);
            var connectionString = BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, password);
            var crmServiceClient = new CrmServiceClient(connectionString);
            if (crmServiceClient.LastCrmError?.Length != 0)
                return null;
            return crmServiceClient;
        }

        public static string ConnectedUrl(CrmServiceClient crmServiceClient)
        {
            var url = new Uri(crmServiceClient?.CrmConnectOrgUriActual?.AbsoluteUri).GetLeftPart(UriPartial.Authority);
            url = url.Replace(".api.", ".");
            return url;
        }

        public static List<DeployWebResource> GetWebResouces(CrmServiceClient service, string fullFileName)
        {
            //fullFileName = C:\src\github\phuocle\Dynamics-Crm-DevKit\test\DownloadWebResources\2.after\WebProject\entities\Lead.js
            var parts = fullFileName.Split(@"\".ToCharArray());
            var condition = string.Empty;
            for (var i = parts.Length - 1; i > 0; i--)
            {
                var value = "/";
                for (var j = i; j < parts.Length; j++)
                {
                    value += parts[j] + "/";
                }
                value = value.TrimEnd("/".ToCharArray());
                condition += $"<condition attribute='name' operator='ends-with' value='{value}'/>" + "\r\n";
            }
            var fileNameWithoutExtension = "/" + Path.GetFileNameWithoutExtension(fullFileName) + "/";
            condition += $"<condition attribute='name' operator='like' value='%{fileNameWithoutExtension}%'/>" + "\r\n";
            var fetchXml = $@"
<fetch>
  <entity name='webresource'>
    <attribute name='webresourceid' />
    <attribute name='name' />
    <filter type='or'>
      {condition}
    </filter>
  </entity>
</fetch>";
            var rows = service.RetrieveMultiple(new FetchExpression(fetchXml));
            var webResources = new List<DeployWebResource>();
            foreach (var entity in rows.Entities)
            {
                webResources.Add(new DeployWebResource
                {
                    WebResourceName = entity.GetAttributeValue<string>("name") ?? string.Empty,
                    WebResourceId = entity.Id
                });
            }
            return webResources;
        }

        public static string BuildConnectionStringLog(string connectionString)
        {
            if (!connectionString.ToLower().Contains("Password=".ToLower())) return connectionString;
            var value = string.Empty;
            var arr = connectionString.Split(";".ToCharArray());
            foreach (var item in arr)
            {
                if (item.ToLower().Contains("Password=".ToLower()))
                    value += "Password=********;";
                else
                    value += item + ";";
            }
            return value.Replace(";;", ";");
        }
    }
}
