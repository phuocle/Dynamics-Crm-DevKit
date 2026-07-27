using System;
using System.ServiceModel;
using System.Text;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace Dev.AllInOne.Console
{
    public class Program
    {
        static void Main()
        {
            System.Console.OutputEncoding = Encoding.UTF8;

            var url = "https://dynamics-crm-devkit-v4.crm.dynamics.com";
            var clientId = "1a60a5c2-d04c-4b26-8f86-9d6ce0616799";
            var clientSecret = "~je8Q~4DL221zUgKOaHq-EWMlowkpl3KEbZItccL";

            System.Console.WriteLine($"Connecting to {url} ...");
            var connectionString = $"AuthType=ClientSecret;Url={url};ClientId={clientId};ClientSecret={clientSecret};RequireNewInstance=true";
            using (var serviceClient = new ServiceClient(connectionString))
            {
                if (!serviceClient.IsReady)
                {
                    System.Console.WriteLine($"ERROR: {serviceClient.LastError}");
                    return;
                }
                System.Console.WriteLine("Connected OK.\n");

                // ── Get "My Active Accounts" view FetchXML (known VALID) ──
                var query = new QueryExpression("savedquery")
                {
                    ColumnSet = new ColumnSet("name", "fetchxml"),
                    TopCount = 1
                };
                query.Criteria.AddCondition("returnedtypecode", ConditionOperator.Equal, "account");
                query.Criteria.AddCondition("name", ConditionOperator.Like, "%Active Account%");
                query.Criteria.AddCondition("querytype", ConditionOperator.Equal, 0);

                var view = serviceClient.RetrieveMultiple(query).Entities[0];
                var validFetch = view.GetAttributeValue<string>("fetchxml");
                System.Console.WriteLine($"View: {view.GetAttributeValue<string>("name")}");
                System.Console.WriteLine($"FetchXML (valid): {validFetch.Substring(0, 80)}...\n");

                // ── Also test with INVALID FetchXML ──
                var invalidFetch = "<fetch><entity name='account'><attribute name='DOES_NOT_EXIST_xyz' /></entity></fetch>";

                // ═══════════════════════════════════════════════════
                // APPROACH 1: catch (Exception) + check message
                // ═══════════════════════════════════════════════════
                System.Console.WriteLine("═══ APPROACH 1: catch (Exception) + Contains check ═══");
                System.Console.WriteLine("[VALID  FetchXML] → " + Approach1(serviceClient, validFetch));
                System.Console.WriteLine("[INVALID FetchXML] → " + Approach1(serviceClient, invalidFetch));
                System.Console.WriteLine();

                // ═══════════════════════════════════════════════════
                // APPROACH 2: catch (FaultException) non-generic
                // NetDispatcherFaultException : FaultException
                // ═══════════════════════════════════════════════════
                System.Console.WriteLine("═══ APPROACH 2: catch (FaultException) non-generic ═══");
                System.Console.WriteLine("[VALID  FetchXML] → " + Approach2(serviceClient, validFetch));
                System.Console.WriteLine("[INVALID FetchXML] → " + Approach2(serviceClient, invalidFetch));
                System.Console.WriteLine();

                // ═══════════════════════════════════════════════════
                // APPROACH 3: catch (Exception) simple — return null
                // for any "ValidateFetchXmlExpressionResult" mention
                // ═══════════════════════════════════════════════════
                System.Console.WriteLine("═══ APPROACH 3: catch (Exception) with when clause ═══");
                System.Console.WriteLine("[VALID  FetchXML] → " + Approach3(serviceClient, validFetch));
                System.Console.WriteLine("[INVALID FetchXML] → " + Approach3(serviceClient, invalidFetch));
                System.Console.WriteLine();

                System.Console.WriteLine("── Done ──");
            }
        }

        // Approach 1: catch all Exception, check message contains
        static string Approach1(ServiceClient svc, string fetchXml)
        {
            try
            {
                var req = new OrganizationRequest("ValidateFetchXmlExpression");
                req["FetchXml"] = fetchXml;
                svc.Execute(req);
                return "null (SDK returned normally)";
            }
            catch (Exception ex) when (ex.Message?.Contains("ValidateFetchXmlExpressionResult") == true)
            {
                return $"null (SDK threw {ex.GetType().Name} but message contains Result → valid)";
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                return $"ERROR: {ex.Detail?.Message ?? ex.Message}";
            }
            catch (Exception ex)
            {
                return $"UNEXPECTED: [{ex.GetType().Name}] {ex.Message?.Substring(0, Math.Min(120, ex.Message.Length))}";
            }
        }

        // Approach 2: catch FaultException (non-generic base class)
        static string Approach2(ServiceClient svc, string fetchXml)
        {
            try
            {
                var req = new OrganizationRequest("ValidateFetchXmlExpression");
                req["FetchXml"] = fetchXml;
                svc.Execute(req);
                return "null (SDK returned normally)";
            }
            catch (FaultException ex) when (ex.Message?.Contains("ValidateFetchXmlExpressionResult") == true)
            {
                return $"null (FaultException with Result → valid, type={ex.GetType().Name})";
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                return $"ERROR: {ex.Detail?.Message ?? ex.Message}";
            }
            catch (Exception ex)
            {
                return $"UNEXPECTED: [{ex.GetType().Name}] {ex.Message?.Substring(0, Math.Min(120, ex.Message.Length))}";
            }
        }

        // Approach 3: catch Exception with when — cleanest
        static string Approach3(ServiceClient svc, string fetchXml)
        {
            try
            {
                var req = new OrganizationRequest("ValidateFetchXmlExpression");
                req["FetchXml"] = fetchXml;
                svc.Execute(req);
                return "null (SDK returned normally)";
            }
            catch (Exception ex) when (
                ex.Message?.Contains("ValidateFetchXmlExpressionResult") == true
                || ex.InnerException?.Message?.Contains("ValidateFetchXmlExpressionResult") == true)
            {
                return $"null (valid — caught {ex.GetType().Name}, 'Result' in message)";
            }
            catch (FaultException<OrganizationServiceFault> ex)
            {
                return $"ERROR (FaultException<OSF>): {ex.Detail?.Message ?? ex.Message}";
            }
            catch (Exception ex)
            {
                return $"ERROR (other): [{ex.GetType().Name}] {ex.Message?.Substring(0, Math.Min(200, ex.Message.Length))}";
            }
        }
    }
}