#nullable enable
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>Fail-closed gateway for importing a solution zip.</summary>
    internal static class SolutionImportHelper
    {
        internal static void Import(
            McpExecutionContext context,
            IOrganizationService orgService,
            byte[] solutionZip,
            bool overwriteUnmanagedCustomizations = true,
            bool publishWorkflows = true)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (solutionZip == null || solutionZip.Length == 0)
                throw new ArgumentException("Solution zip is required.", nameof(solutionZip));
            context.AssertMutationAllowed("ImportSolutionRequest");
            if (orgService == null) throw new ArgumentNullException(nameof(orgService));
            orgService.Execute(new ImportSolutionRequest
            {
                CustomizationFile = solutionZip,
                OverwriteUnmanagedCustomizations = overwriteUnmanagedCustomizations,
                PublishWorkflows = publishWorkflows
            });
        }
    }
}
