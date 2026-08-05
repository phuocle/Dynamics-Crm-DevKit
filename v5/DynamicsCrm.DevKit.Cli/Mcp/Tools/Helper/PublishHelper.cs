using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Centralized helper for Dataverse publish operations.
    /// </summary>
    /// <remarks>
    /// <para>
    /// This helper intentionally does NOT wrap calls in try/catch.
    /// Callers should invoke it from their top-level main try/catch so that
    /// publish failures surface as [UncaughtException] DataverseFault instead
    /// of being silently swallowed. This keeps the "single try/catch in main"
    /// rule for MCP tools.
    /// </para>
    /// <para>
    /// Every publish method requires a non-null <see cref="McpExecutionContext"/>
    /// and calls <see cref="McpExecutionContext.AssertMutationAllowed"/> before
    /// the <see cref="PublishXmlRequest"/> so the mutation gateway cannot be
    /// bypassed by a caller that forgets the action-level dry-run preview.
    /// </para>
    /// </remarks>
    internal static class PublishHelper
    {
        /// <summary>
        /// Publishes one or more entities using <see cref="PublishXmlRequest"/>.
        /// </summary>
        /// <param name="context">Execution context carrying the mutation policy.</param>
        /// <param name="serviceClient">Connected Dataverse service client.</param>
        /// <param name="entityNames">Entity logical names to publish.</param>
        public static void PublishEntities(McpExecutionContext context, ServiceClient serviceClient, IEnumerable<string> entityNames)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null)
                throw new ArgumentNullException(nameof(serviceClient));

            var entities = entityNames?.Where(n => !string.IsNullOrWhiteSpace(n)).ToList();
            if (entities == null || entities.Count == 0)
                return;

            var entityXml = string.Join(string.Empty, entities.Select(n => $"<entity>{SecurityElement.Escape(n)}</entity>"));
            var parameterXml = $"<importexportxml><entities>{entityXml}</entities></importexportxml>";

            context.AssertMutationAllowed($"PublishXmlRequest entities={string.Join(",", entities)}");
            serviceClient.Execute(new PublishXmlRequest { ParameterXml = parameterXml });
        }

        /// <summary>
        /// Publishes a single entity using <see cref="PublishXmlRequest"/>.
        /// </summary>
        /// <param name="context">Execution context carrying the mutation policy.</param>
        /// <param name="serviceClient">Connected Dataverse service client.</param>
        /// <param name="entityName">Entity logical name to publish.</param>
        public static void PublishEntity(McpExecutionContext context, ServiceClient serviceClient, string entityName)
        {
            if (string.IsNullOrWhiteSpace(entityName))
                throw new ArgumentException("Entity name is required.", nameof(entityName));

            PublishEntities(context, serviceClient, new[] { entityName });
        }

        /// <summary>
        /// Publishes one or more global option sets using <see cref="PublishXmlRequest"/>.
        /// </summary>
        /// <param name="context">Execution context carrying the mutation policy.</param>
        /// <param name="serviceClient">Connected Dataverse service client.</param>
        /// <param name="optionSetNames">Global option set logical names to publish.</param>
        public static void PublishOptionSets(McpExecutionContext context, ServiceClient serviceClient, IEnumerable<string> optionSetNames)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (serviceClient == null)
                throw new ArgumentNullException(nameof(serviceClient));

            var optionSets = optionSetNames?.Where(n => !string.IsNullOrWhiteSpace(n)).ToList();
            if (optionSets == null || optionSets.Count == 0)
                return;

            var optionSetXml = string.Join(string.Empty, optionSets.Select(n => $"<optionset>{SecurityElement.Escape(n)}</optionset>"));
            var parameterXml = $"<importexportxml><optionsets>{optionSetXml}</optionsets></importexportxml>";

            context.AssertMutationAllowed($"PublishXmlRequest optionsets={string.Join(",", optionSets)}");
            serviceClient.Execute(new PublishXmlRequest { ParameterXml = parameterXml });
        }

        /// <summary>
        /// Publishes a single global option set using <see cref="PublishXmlRequest"/>.
        /// </summary>
        /// <param name="context">Execution context carrying the mutation policy.</param>
        /// <param name="serviceClient">Connected Dataverse service client.</param>
        /// <param name="optionSetName">Global option set logical name to publish.</param>
        public static void PublishOptionSet(McpExecutionContext context, ServiceClient serviceClient, string optionSetName)
        {
            if (string.IsNullOrWhiteSpace(optionSetName))
                throw new ArgumentException("Option set name is required.", nameof(optionSetName));

            PublishOptionSets(context, serviceClient, new[] { optionSetName });
        }

    }
}
