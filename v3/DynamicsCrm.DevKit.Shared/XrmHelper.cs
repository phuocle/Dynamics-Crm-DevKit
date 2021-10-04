using System;
using System.Collections.Generic;
using System.Net;
using System.Reflection;
using System.Windows.Forms;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using EnvDTE;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
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

        public static bool IsConnected(string connectionString)
        {
            try
            {
                var crmServiceClient = new CrmServiceClient(connectionString);
                crmServiceClient.Execute(new WhoAmIRequest());
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool IsConnected(CrmConnection crmConnection)
        {
            var password = crmConnection.Password;
            try
            {
                password = EncryptDecrypt.DecryptString(password);
            }
            catch
            {
            }
            var connectionString = BuildConnectionString(crmConnection.Type, crmConnection.Url, crmConnection.UserName, password);
            return IsConnected(connectionString);
        }
    }
}
