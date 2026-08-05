using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    // NOTE: AddExistingComponent now requires a non-null McpExecutionContext and
    // asserts mutation is allowed before AddSolutionComponentRequest. This makes
    // the helper fail-closed when called directly or from a new caller.

    internal enum SolutionComponentCreateMode
    {
        None,
        MetadataCreateRequest,
        RecordCreateThenAddSolutionComponent,
        AppComponentAssociation
    }

    internal sealed class SolutionComponentCreateResult
    {
        public Guid ComponentId { get; init; }
        public string SolutionUniqueName { get; init; }
        public bool IsAddToSolution { get; init; }
        public string AddToSolutionMethod { get; init; }
        public string AddToSolutionWarning { get; init; }
    }

    internal static class SolutionComponentCreateHelper
    {
        public static void ApplySolutionUniqueName(OrganizationRequest request, string solutionUniqueName)
        {
            if (!string.IsNullOrWhiteSpace(solutionUniqueName))
                request["SolutionUniqueName"] = solutionUniqueName.Trim();
        }

        public static SolutionComponentCreateResult AddExistingComponent(
            McpExecutionContext context,
            IOrganizationService service,
            Guid componentId,
            int componentType,
            string solutionUniqueName,
            bool addRequiredComponents = false,
            bool doNotIncludeSubcomponents = false)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));

            if (string.IsNullOrWhiteSpace(solutionUniqueName))
                return new SolutionComponentCreateResult
                {
                    ComponentId = componentId,
                    IsAddToSolution = false,
                    AddToSolutionMethod = "none"
                };

            var trimmedSolutionName = solutionUniqueName.Trim();

            // Keep the policy assertion outside the warning-producing catch.
            // A blocked mutation is a safety decision, not an optional
            // Add-to-solution warning and must propagate to the caller.
            context.AssertMutationAllowed($"AddSolutionComponentRequest {trimmedSolutionName}");

            try
            {
                service.Execute(new AddSolutionComponentRequest
                {
                    AddRequiredComponents = addRequiredComponents,
                    DoNotIncludeSubcomponents = doNotIncludeSubcomponents,
                    ComponentType = componentType,
                    ComponentId = componentId,
                    SolutionUniqueName = trimmedSolutionName
                });

                return new SolutionComponentCreateResult
                {
                    ComponentId = componentId,
                    SolutionUniqueName = trimmedSolutionName,
                    IsAddToSolution = true,
                    AddToSolutionMethod = "AddSolutionComponentRequest"
                };
            }
            catch (Exception ex)
            {
                return new SolutionComponentCreateResult
                {
                    ComponentId = componentId,
                    SolutionUniqueName = trimmedSolutionName,
                    IsAddToSolution = false,
                    AddToSolutionMethod = "AddSolutionComponentRequest",
                    AddToSolutionWarning = ex.Message
                };
            }
        }

        public static void RemoveExistingComponent(
            McpExecutionContext context,
            IOrganizationService service,
            Guid componentId,
            int componentType,
            string solutionUniqueName)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            if (string.IsNullOrWhiteSpace(solutionUniqueName))
                throw new ArgumentException("Solution unique name is required.", nameof(solutionUniqueName));

            var trimmedSolutionName = solutionUniqueName.Trim();
            context.AssertMutationAllowed($"RemoveSolutionComponentRequest {trimmedSolutionName}");
            if (service == null) throw new ArgumentNullException(nameof(service));
            service.Execute(new RemoveSolutionComponentRequest
            {
                ComponentId = componentId,
                ComponentType = componentType,
                SolutionUniqueName = trimmedSolutionName
            });
        }

    }
}
