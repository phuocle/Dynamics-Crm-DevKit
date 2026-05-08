using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.ServiceModel;

namespace Dev.DevKit.Console
{
    public class Program
    {
        private const string SolutionName = "PRODUCTION-MCP";
        private const string TestAppName = "PRODUCTION-MCP SDK CREATE PROBE";
        private const string TestDescription = "Temporary SDK create probe for manage_app.";
        private static readonly bool CleanupAfterProbe = false;
        private static readonly string LogPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "manage_app_probe.log");
        private static readonly Guid DefaultAppIconWebResourceId = new Guid("953b9fac-1e5e-e611-80d6-00155ded156f");

        static void Main()
        {
            File.WriteAllText(LogPath, string.Empty);
            Log("Starting manage_app SDK create probe.");
            try
            {
                RunManageAppCreateProbe();
                Environment.Exit(0);
            }
            catch
            {
                Environment.Exit(1);
            }
        }

        private static void RunManageAppCreateProbe()
        {
            Guid? appModuleId = null;
            Guid? siteMapId = null;
            string uniqueName = null;

            try
            {
                Log("Connecting...");
                var service = App.Service;
                Log("Connected.");

                var solution = ResolveSolution(SolutionName);
                Log("Retrieving publisher.");
                var publisher = App.Service.Retrieve("publisher", solution.GetAttributeValue<EntityReference>("publisherid").Id,
                    new ColumnSet("customizationprefix"));
                var prefix = publisher.GetAttributeValue<string>("customizationprefix");
                uniqueName = prefix + "_AppProbe" + DateTime.UtcNow.ToString("HHmmss");
                Log("UniqueName: " + uniqueName);

                var appModuleIdUnique = Guid.NewGuid();
                var appModule = new Entity("appmodule");
                appModule["name"] = TestAppName;
                appModule["uniquename"] = uniqueName;
                appModule["description"] = TestDescription;
                appModule["webresourceid"] = DefaultAppIconWebResourceId;
                appModule["clienttype"] = 4;
                appModule["formfactor"] = 1;
                appModule["isdefault"] = false;
                appModule["navigationtype"] = new OptionSetValue(0);
                appModule["publisherid"] = solution.GetAttributeValue<EntityReference>("publisherid");
                appModule["appmoduleidunique"] = appModuleIdUnique;

                Log("Creating appmodule.");
                appModuleId = App.Service.Create(appModule);
                Log("Retrieving created appmodule.");
                var createdApp = RetrieveCreatedApp(appModuleId.Value, uniqueName);
                appModuleIdUnique = createdApp.GetAttributeValue<Guid>("appmoduleidunique");
                Log("AppModuleId: " + appModuleId);
                Log("AppModuleIdUnique actual: " + appModuleIdUnique);

                Log("Resolving base language.");
                var baseLanguage = GetBaseLanguageCode();
                Log("Base language: " + baseLanguage);

                Log("Creating sitemap.");
                siteMapId = App.Service.Create(new Entity("sitemap")
                {
                    ["sitemapname"] = TestAppName + " SiteMap",
                    ["sitemapnameunique"] = uniqueName + "SiteMap",
                    ["sitemapxml"] = BuildStarterSiteMapXml(baseLanguage)
                });
                Log("SiteMapId: " + siteMapId);

                Log("Resolving account metadata id.");
                var accountMetadataId = ResolveEntityMetadataId("account");
                Log("Adding app components: sitemap + account table reference.");
                App.Service.Execute(new AddAppComponentsRequest
                {
                    AppId = appModuleId.Value,
                    Components = new EntityReferenceCollection
                    {
                        new EntityReference("sitemap", siteMapId.Value),
                        new EntityReference("account", accountMetadataId)
                    }
                });
                Log("AddAppComponentsRequest: OK (sitemap + account table reference)");

                Log("Adding appmodule to solution.");
                App.Service.Execute(new AddSolutionComponentRequest
                {
                    ComponentId = appModuleId.Value,
                    ComponentType = 80,
                    SolutionUniqueName = solution.GetAttributeValue<string>("uniquename"),
                    AddRequiredComponents = true
                });
                Log("Adding sitemap to solution.");
                App.Service.Execute(new AddSolutionComponentRequest
                {
                    ComponentId = siteMapId.Value,
                    ComponentType = 62,
                    SolutionUniqueName = solution.GetAttributeValue<string>("uniquename"),
                    AddRequiredComponents = true
                });
                Log("AddSolutionComponentRequest: OK");

                Log("Validating app.");
                var validation = App.Service.Execute(new OrganizationRequest("ValidateApp")
                {
                    ["AppModuleId"] = appModuleId.Value
                });
                Log("ValidateApp: OK (" + validation.ResponseName + ")");

                VerifyAppComponents(appModuleIdUnique);
                VerifyApp(uniqueName);
                Log("PROBE SUCCESS");
            }
            catch (Exception ex)
            {
                Log("PROBE FAILED");
                Log(FormatException(ex));
                throw;
            }
            finally
            {
                if (CleanupAfterProbe)
                {
                    Log("Cleanup starting.");
                    Cleanup(siteMapId, appModuleId);
                    Log("Cleanup finished.");
                }
                else
                {
                    Log("Cleanup skipped. Inspect the created app in maker portal, then delete it manually when done.");
                }
            }
        }

        private static Entity RetrieveCreatedApp(Guid appModuleId, string uniqueName)
        {
            try
            {
                return App.Service.Retrieve("appmodule", appModuleId,
                    new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename"));
            }
            catch
            {
                var query = new QueryExpression("appmodule")
                {
                    ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename"),
                    TopCount = 1
                };
                query.Criteria.AddCondition("uniquename", ConditionOperator.Equal, uniqueName);
                var unpublished = (RetrieveUnpublishedMultipleResponse)App.Service.Execute(new RetrieveUnpublishedMultipleRequest
                {
                    Query = query
                });
                var app = unpublished.EntityCollection.Entities.FirstOrDefault();
                if (app == null)
                    throw;
                return app;
            }
        }

        private static Entity ResolveSolution(string solutionName)
        {
            var query = new QueryExpression("solution")
            {
                ColumnSet = new ColumnSet("solutionid", "uniquename", "friendlyname", "publisherid"),
                TopCount = 1,
                Criteria = new FilterExpression(LogicalOperator.Or)
            };
            query.Criteria.AddCondition("uniquename", ConditionOperator.Equal, solutionName);
            query.Criteria.AddCondition("friendlyname", ConditionOperator.Equal, solutionName);
            var solution = App.Service.RetrieveMultiple(query).Entities.FirstOrDefault();
            if (solution == null)
                throw new InvalidOperationException("Solution not found: " + solutionName);
            Log("Solution: " + solution.GetAttributeValue<string>("friendlyname") + " / " + solution.GetAttributeValue<string>("uniquename"));
            return solution;
        }

        private static void VerifyApp(string uniqueName)
        {
            var appQuery = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique", "name", "uniquename"),
                TopCount = 1
            };
            appQuery.Criteria.AddCondition("uniquename", ConditionOperator.Equal, uniqueName);
            var unpublished = (RetrieveUnpublishedMultipleResponse)App.Service.Execute(new RetrieveUnpublishedMultipleRequest
            {
                Query = appQuery
            });
            var apps = unpublished.EntityCollection.Entities;
            Log("Verified unpublished app records: " + apps.Count);
            if (apps.Count == 0)
                throw new InvalidOperationException("Created app was not found in unpublished appmodule set.");
        }

        private static void DeleteExistingProbe(string uniqueName)
        {
            var query = new QueryExpression("appmodule")
            {
                ColumnSet = new ColumnSet("appmoduleid", "appmoduleidunique"),
                TopCount = 10
            };
            query.Criteria.AddCondition("uniquename", ConditionOperator.Equal, uniqueName);

            var apps = new Dictionary<Guid, Entity>();
            foreach (var app in App.Service.RetrieveMultiple(query).Entities)
                apps[app.Id] = app;
            var unpublished = (RetrieveUnpublishedMultipleResponse)App.Service.Execute(new RetrieveUnpublishedMultipleRequest
            {
                Query = query
            });
            foreach (var app in unpublished.EntityCollection.Entities)
                apps[app.Id] = app;

            foreach (var app in apps.Values)
            {
                Cleanup(null, app.Id);
            }
        }

        private static void VerifyAppComponents(Guid appModuleIdUnique)
        {
            var components = QueryAppModuleComponents(appModuleIdUnique);
            Log("AppModuleComponent count: " + components.Count);
            foreach (var component in components)
            {
                var type = component.GetAttributeValue<OptionSetValue>("componenttype")?.Value;
                var objectId = component.GetAttributeValue<Guid?>("objectid");
                Log("  componenttype=" + type + ", objectid=" + objectId);
            }

            var componentTypes = components
                .Select(c => c.GetAttributeValue<OptionSetValue>("componenttype")?.Value)
                .Where(v => v.HasValue)
                .Select(v => v.Value)
                .ToList();
            if (!componentTypes.Contains(62))
                throw new InvalidOperationException("Expected sitemap app component type 62.");
            if (!componentTypes.Contains(1))
                throw new InvalidOperationException("Expected entity app component type 1 for account.");
            if (componentTypes.Contains(26) || componentTypes.Contains(60))
                throw new InvalidOperationException("Unexpected view/form app component found. Starter app must not add savedquery/systemform.");
        }

        private static List<Entity> QueryAppModuleComponents(Guid appModuleIdUnique)
        {
            var query = new QueryExpression("appmodulecomponent")
            {
                ColumnSet = new ColumnSet("componenttype", "objectid"),
                Criteria = new FilterExpression
                {
                    Conditions =
                    {
                        new ConditionExpression("appmoduleidunique", ConditionOperator.Equal, appModuleIdUnique)
                    }
                },
                Orders =
                {
                    new OrderExpression("componenttype", OrderType.Ascending)
                }
            };
            return App.Service.RetrieveMultiple(query).Entities.ToList();
        }

        private static void Cleanup(Guid? siteMapId, Guid? appModuleId)
        {
            if (appModuleId.HasValue && siteMapId.HasValue)
            {
                try
                {
                    var refs = new EntityReferenceCollection
                    {
                        new EntityReference("sitemap", siteMapId.Value),
                        new EntityReference("account", ResolveEntityMetadataId("account"))
                    };
                    App.Service.Execute(new RemoveAppComponentsRequest
                    {
                        AppId = appModuleId.Value,
                        Components = refs
                    });
                    Log("Removed app components: sitemap + account table reference");
                }
                catch (Exception ex)
                {
                    Log("Cleanup remove app components skipped: " + FormatException(ex));
                }
            }
            if (appModuleId.HasValue)
                TryDelete("appmodule", appModuleId.Value);
            if (siteMapId.HasValue)
                TryDelete("sitemap", siteMapId.Value);
        }

        private static void TryDelete(string entityName, Guid id)
        {
            try
            {
                Log("Deleting " + entityName + ": " + id);
                App.Service.Delete(entityName, id);
                Log("Deleted " + entityName + ": " + id);
            }
            catch (Exception ex)
            {
                Log("Cleanup skipped " + entityName + " " + id + ": " + FormatException(ex));
            }
        }

        private static void Log(string message)
        {
            var line = DateTime.Now.ToString("HH:mm:ss.fff") + " " + message;
            System.Console.WriteLine(line);
            File.AppendAllText(LogPath, line + Environment.NewLine);
        }

        private static int GetBaseLanguageCode()
        {
            try
            {
                var fetch = "<fetch top='1'><entity name='organization'><attribute name='languagecode' /></entity></fetch>";
                var results = App.Service.RetrieveMultiple(new FetchExpression(fetch));
                var lang = results.Entities.FirstOrDefault()?.GetAttributeValue<int?>("languagecode");
                return lang.HasValue && lang.Value > 0 ? lang.Value : 1033;
            }
            catch (Exception ex)
            {
                Log("Base language query failed; using 1033. " + FormatException(ex));
                return 1033;
            }
        }

        private static Guid ResolveEntityMetadataId(string entityLogicalName)
        {
            var response = (RetrieveEntityResponse)App.Service.Execute(new RetrieveEntityRequest
            {
                LogicalName = entityLogicalName,
                EntityFilters = EntityFilters.Entity
            });
            return response.EntityMetadata.MetadataId.Value;
        }

        private static string BuildStarterSiteMapXml(int baseLanguage)
        {
            return @"<SiteMap>
  <Area Id=""area_default"" ResourceId=""SitemapDesigner.NewArea"" ShowGroups=""true"">
    <Titles>
      <Title LCID=""" + baseLanguage + @""" Title=""Workspace"" />
    </Titles>
    <Group Id=""group_default"" ResourceId=""SitemapDesigner.NewGroup"" IsProfile=""false"" ToolTipResourseId=""SitemapDesigner.Unknown"">
      <Titles>
        <Title LCID=""" + baseLanguage + @""" Title=""Default"" />
      </Titles>
      <SubArea Id=""sa_account"" Entity=""account"">
        <Titles>
          <Title LCID=""" + baseLanguage + @""" Title=""Accounts"" />
        </Titles>
      </SubArea>
    </Group>
  </Area>
</SiteMap>";
        }

        private static string FormatException(Exception ex)
        {
            var faultException = ex as FaultException<OrganizationServiceFault>;
            if (faultException != null)
            {
                var fault = faultException.Detail;
                var message = fault?.Message ?? faultException.Message;
                if (fault != null)
                    message += " (ErrorCode: " + fault.ErrorCode + ")";
                if (fault?.InnerFault != null)
                    message += " InnerFault: " + fault.InnerFault.Message;
                return message;
            }
            return ex.InnerException == null
                ? ex.Message
                : ex.Message + " InnerException: " + ex.InnerException.Message;
        }
    }
}
