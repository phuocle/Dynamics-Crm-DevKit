using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
public static class PublishHelper
    {
        public static bool PublishEntities(McpExecutionContext context, ServiceClient serviceClient, IEnumerable<string> entityNames, int waitSeconds = 5)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null)
                throw new ArgumentNullException(nameof(serviceClient));

            var entities = entityNames?.Where(n => !string.IsNullOrWhiteSpace(n)).ToList();
            if (entities == null || entities.Count == 0)
                return true;

            var entityXml = string.Join(string.Empty, entities.Select(n => $"<entity>{SecurityElement.Escape(n)}</entity>"));
            var parameterXml = $"<importexportxml><entities>{entityXml}</entities></importexportxml>";

            try
            {
                context.AssertMutationAllowed($"PublishXmlRequest entities={string.Join(",", entities)}");
                serviceClient.Execute(new PublishXmlRequest { ParameterXml = parameterXml });
                MetadataOperationWaitHelper.WaitAfterMutation(waitSeconds);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool PublishEntity(McpExecutionContext context, ServiceClient serviceClient, string entityName, int waitSeconds = 5)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                throw new ArgumentException("Entity name is required.", nameof(entityName));

            return PublishEntities(context, serviceClient, new[] { entityName }, waitSeconds);
        }

        public static bool PublishOptionSets(McpExecutionContext context, ServiceClient serviceClient, IEnumerable<string> optionSetNames, int waitSeconds = 3)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null)
                throw new ArgumentNullException(nameof(serviceClient));

            var optionSets = optionSetNames?.Where(n => !string.IsNullOrWhiteSpace(n)).ToList();
            if (optionSets == null || optionSets.Count == 0)
                return true;

            var optionSetXml = string.Join(string.Empty, optionSets.Select(n => $"<optionset>{SecurityElement.Escape(n)}</optionset>"));
            var parameterXml = $"<importexportxml><optionsets>{optionSetXml}</optionsets></importexportxml>";

            try
            {
                context.AssertMutationAllowed($"PublishXmlRequest optionsets={string.Join(",", optionSets)}");
                serviceClient.Execute(new PublishXmlRequest { ParameterXml = parameterXml });
                MetadataOperationWaitHelper.WaitAfterMutation(waitSeconds);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool PublishOptionSet(McpExecutionContext context, ServiceClient serviceClient, string optionSetName, int waitSeconds = 3)
        {
            if (string.IsNullOrWhiteSpace(optionSetName))
                throw new ArgumentException("Option set name is required.", nameof(optionSetName));

            return PublishOptionSets(context, serviceClient, new[] { optionSetName }, waitSeconds);
        }

        public static bool PublishWebResources(McpExecutionContext context, ServiceClient serviceClient, IEnumerable<Guid> webResourceIds, int waitSeconds = 3)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));

            var ids = webResourceIds?.Where(id => id != Guid.Empty).Distinct().ToList();
            if (ids == null || ids.Count == 0)
                return true;

            var xml = string.Join(string.Empty, ids.Select(id => $"<webresource>{id:D}</webresource>"));
            var parameterXml = $"<importexportxml><webresources>{xml}</webresources></importexportxml>";

            try
            {
                context.AssertMutationAllowed($"PublishWebResources {string.Join(",", ids)}");
                serviceClient.Execute(new PublishXmlRequest { ParameterXml = parameterXml });
                MetadataOperationWaitHelper.WaitAfterMutation(waitSeconds);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool PublishWebResource(McpExecutionContext context, ServiceClient serviceClient, Guid webResourceId, int waitSeconds = 3)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));
            if (webResourceId == Guid.Empty)
                throw new ArgumentException("Webresource id is required.", nameof(webResourceId));

            return PublishWebResources(context, serviceClient, new[] { webResourceId }, waitSeconds);
        }

        public static bool PublishAppModules(McpExecutionContext context, ServiceClient serviceClient, IEnumerable<Guid> appModuleIds, int waitSeconds = 5)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));

            var ids = appModuleIds?.Where(id => id != Guid.Empty).Distinct().ToList();
            if (ids == null || ids.Count == 0)
                return true;

            var xml = string.Join(string.Empty, ids.Select(id => $"<appmodule>{id:D}</appmodule>"));
            var parameterXml = $"<importexportxml><appmodules>{xml}</appmodules></importexportxml>";

            try
            {
                context.AssertMutationAllowed($"PublishAppModules {string.Join(",", ids)}");
                serviceClient.Execute(new PublishXmlRequest { ParameterXml = parameterXml });
                MetadataOperationWaitHelper.WaitAfterMutation(waitSeconds);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool PublishAppModule(McpExecutionContext context, ServiceClient serviceClient, Guid appModuleId, int waitSeconds = 5)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));
            if (appModuleId == Guid.Empty)
                throw new ArgumentException("App module id is required.", nameof(appModuleId));

            return PublishAppModules(context, serviceClient, new[] { appModuleId }, waitSeconds);
        }

        public static bool PublishRibbon(McpExecutionContext context, ServiceClient serviceClient, int waitSeconds = 5)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));

            try
            {
                context.AssertMutationAllowed("PublishRibbon");
                serviceClient.Execute(new PublishXmlRequest
                {
                    ParameterXml = "<importexportxml><ribbons><ribbon></ribbon></ribbons></importexportxml>"
                });
                MetadataOperationWaitHelper.WaitAfterMutation(waitSeconds);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool PublishDashboards(McpExecutionContext context, ServiceClient serviceClient, IEnumerable<Guid> dashboardIds, int waitSeconds = 5)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));

            var ids = dashboardIds?.Where(id => id != Guid.Empty).Distinct().ToList();
            if (ids == null || ids.Count == 0)
                return true;

            var dashXml = string.Join(string.Empty, ids.Select(id => $"<dashboard>{id:D}</dashboard>"));
            var parameterXml = $"<importexportxml><dashboards>{dashXml}</dashboards></importexportxml>";

            try
            {
                context.AssertMutationAllowed($"PublishDashboards {string.Join(",", ids)}");
                serviceClient.Execute(new PublishXmlRequest { ParameterXml = parameterXml });
                MetadataOperationWaitHelper.WaitAfterMutation(waitSeconds);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool PublishDashboard(McpExecutionContext context, ServiceClient serviceClient, Guid dashboardId, int waitSeconds = 5)
        {
            if (dashboardId == Guid.Empty)
                throw new ArgumentException("Dashboard id is required.", nameof(dashboardId));

            return PublishDashboards(context, serviceClient, new[] { dashboardId }, waitSeconds);
        }

        public static bool PublishSiteMap(McpExecutionContext context, ServiceClient serviceClient, int waitSeconds = 5)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));

            try
            {
                context.AssertMutationAllowed("PublishSiteMap");
                serviceClient.Execute(new PublishXmlRequest
                {
                    ParameterXml = "<importexportxml><sitemaps><sitemap></sitemap></sitemaps></importexportxml>"
                });
                MetadataOperationWaitHelper.WaitAfterMutation(waitSeconds);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool PublishTargeted(McpExecutionContext context, ServiceClient serviceClient, PublishTargetedPayload payload, int waitSeconds = 5)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));
            if (payload == null) throw new ArgumentNullException(nameof(payload));

            var parameterXml = BuildTargetedXml(payload);
            if (parameterXml == null)
                return true;

            try
            {
                context.AssertMutationAllowed("PublishXmlRequest (targeted)");
                serviceClient.Execute(new PublishXmlRequest { ParameterXml = parameterXml });
                MetadataOperationWaitHelper.WaitAfterMutation(waitSeconds);
                return true;
            }
            catch
            {
                return false;
            }
        }

        private static string BuildTargetedXml(PublishTargetedPayload p)
        {
            var entities = p.EntityNames?.Where(n => !string.IsNullOrWhiteSpace(n)).ToList() ?? new List<string>();
            var appModules = p.AppModuleIds?.Where(id => id != Guid.Empty).Distinct().ToList() ?? new List<Guid>();
            var optionSets = p.OptionSetNames?.Where(n => !string.IsNullOrWhiteSpace(n)).ToList() ?? new List<string>();
            var dashboards = p.DashboardIds?.Where(id => id != Guid.Empty).Distinct().ToList() ?? new List<Guid>();
            var webResources = p.WebResourceIds?.Where(id => id != Guid.Empty).Distinct().ToList() ?? new List<Guid>();

            var hasAny = entities.Count > 0 || appModules.Count > 0 || optionSets.Count > 0
                || p.IncludeGlobalOptionSets || dashboards.Count > 0
                || webResources.Count > 0 || p.IncludeRibbons || p.IncludeSiteMap;

            if (!hasAny)
                return null;

            var sb = new StringBuilder();
            sb.Append("<importexportxml>");

            sb.Append("<entities>");
            foreach (var e in entities) sb.Append($"<entity>{SecurityElement.Escape(e)}</entity>");
            sb.Append("</entities>");

            if (appModules.Count > 0)
            {
                sb.Append("<appmodules>");
                foreach (var id in appModules) sb.Append($"<appmodule>{id:D}</appmodule>");
                sb.Append("</appmodules>");
            }

            if (optionSets.Count > 0)
            {
                sb.Append("<optionsets>");
                foreach (var n in optionSets) sb.Append($"<optionset>{SecurityElement.Escape(n)}</optionset>");
                sb.Append("</optionsets>");
            }
            else if (p.IncludeGlobalOptionSets)
            {
                sb.Append("<optionsets><optionset>all</optionset></optionsets>");
            }
            else
            {
                sb.Append("<optionsets />");
            }

            if (p.IncludeRibbons)
                sb.Append("<ribbons><ribbon /></ribbons>");

            if (dashboards.Count > 0)
            {
                sb.Append("<dashboards>");
                foreach (var id in dashboards) sb.Append($"<dashboard>{id:D}</dashboard>");
                sb.Append("</dashboards>");
            }

            if (webResources.Count > 0)
            {
                sb.Append("<webresources>");
                foreach (var id in webResources) sb.Append($"<webresource>{id:D}</webresource>");
                sb.Append("</webresources>");
            }

            sb.Append(p.IncludeSiteMap ? "<sitemaps><sitemap /></sitemaps>" : "<sitemaps />");

            sb.Append("</importexportxml>");
            return sb.ToString();
        }

        public static Guid PublishAllAsync(McpExecutionContext context, ServiceClient serviceClient)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));

            context.AssertMutationAllowed("PublishAllXmlAsyncRequest");
            var response = (PublishAllXmlAsyncResponse)serviceClient.Execute(new PublishAllXmlAsyncRequest());
            return response.AsyncOperationId;
        }

        public static bool PublishAllXml(McpExecutionContext context, ServiceClient serviceClient, int waitSeconds = 20)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null) throw new ArgumentNullException(nameof(serviceClient));

            try
            {
                context.AssertMutationAllowed("PublishAllXmlRequest");
                serviceClient.Execute(new PublishAllXmlRequest());
                MetadataOperationWaitHelper.WaitAfterMutation(waitSeconds);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
