using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
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
            IOrganizationService service,
            Guid componentId,
            int componentType,
            string solutionUniqueName,
            bool addRequiredComponents = false)
        {
            if (string.IsNullOrWhiteSpace(solutionUniqueName))
                return new SolutionComponentCreateResult
                {
                    ComponentId = componentId,
                    IsAddToSolution = false,
                    AddToSolutionMethod = "none"
                };

            var trimmedSolutionName = solutionUniqueName.Trim();

            try
            {
                service.Execute(new AddSolutionComponentRequest
                {
                    AddRequiredComponents = addRequiredComponents,
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
    }
}
