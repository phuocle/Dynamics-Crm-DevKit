using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace DynamicsCrm.DevKit.Analyzers
{
    public static class AnalyzerHelper
    {
        #region Type Name Constants

        private const string MicrosoftCrmSdkMessages = "Microsoft.Crm.Sdk.Messages";
        private const string MicrosoftXrmSdkMessages = "Microsoft.Xrm.Sdk.Messages";

        /// <summary>
        /// The fully qualified name of the IPlugin interface.
        /// </summary>
        public const string IPluginTypeName = "Microsoft.Xrm.Sdk.IPlugin";

        /// <summary>
        /// Workflow/Activity base type names to check inheritance.
        /// </summary>
        public static readonly HashSet<string> WorkflowBaseTypes = new HashSet<string>
        {
            "System.Activities.CodeActivity",
            "System.Activities.NativeActivity",
            "System.Activities.Activity"
        };

        #endregion

        #region Common Plugin/Workflow Detection

        /// <summary>
        /// Checks if a class implements IPlugin or inherits from CodeActivity/NativeActivity/Activity.
        /// </summary>
        /// <param name="classSymbol">The class symbol to check.</param>
        /// <returns>True if the class is a plugin or workflow activity.</returns>
        public static bool IsPluginOrWorkflowClass(INamedTypeSymbol classSymbol)
        {
            if (classSymbol == null)
                return false;

            // Check if class implements IPlugin
            if (ImplementsIPlugin(classSymbol))
                return true;

            // Check if class inherits from CodeActivity or related base classes
            return InheritsFromWorkflowBase(classSymbol);
        }

        /// <summary>
        /// Checks if a class implements the IPlugin interface.
        /// </summary>
        /// <param name="classSymbol">The class symbol to check.</param>
        /// <returns>True if the class implements IPlugin.</returns>
        public static bool ImplementsIPlugin(INamedTypeSymbol classSymbol)
        {
            if (classSymbol == null)
                return false;

            return classSymbol.AllInterfaces.Any(i => i.ToDisplayString() == IPluginTypeName);
        }

        /// <summary>
        /// Checks if a class inherits from a workflow base class (CodeActivity, NativeActivity, Activity).
        /// </summary>
        /// <param name="classSymbol">The class symbol to check.</param>
        /// <returns>True if the class inherits from a workflow base.</returns>
        public static bool InheritsFromWorkflowBase(INamedTypeSymbol classSymbol)
        {
            if (classSymbol == null)
                return false;

            var baseType = classSymbol.BaseType;
            while (baseType != null)
            {
                if (WorkflowBaseTypes.Contains(baseType.ToDisplayString()))
                    return true;
                baseType = baseType.BaseType;
            }

            return false;
        }

        /// <summary>
        /// Checks if a syntax node is inside a plugin or workflow class.
        /// </summary>
        /// <param name="node">The syntax node to check.</param>
        /// <param name="semanticModel">The semantic model for symbol resolution.</param>
        /// <param name="cancellationToken">Cancellation token.</param>
        /// <returns>True if the node is inside a plugin or workflow class.</returns>
        public static bool IsInsidePluginOrWorkflow(SyntaxNode node, SemanticModel semanticModel, CancellationToken cancellationToken)
        {
            if (node == null || semanticModel == null)
                return false;

            var classDeclaration = node.FirstAncestorOrSelf<ClassDeclarationSyntax>();
            if (classDeclaration == null)
                return false;

            var classSymbol = semanticModel.GetDeclaredSymbol(classDeclaration, cancellationToken) as INamedTypeSymbol;
            return IsPluginOrWorkflowClass(classSymbol);
        }

        #endregion

        #region String Helpers

        private static readonly Regex EmptyStringPattern = new Regex(@"^""(\s)*""$", RegexOptions.Compiled | RegexOptions.Multiline);

        public static string RemoveQuote(string text)
        {
            if (text == null) return null;
            text = text.Substring(1);
            return text.Substring(0, text.Length - 1);
        }

        public static bool TestIsEmpty(string text)
        {
            if (string.IsNullOrEmpty(text)) return false;
            return EmptyStringPattern.IsMatch(text);
        }

        #endregion

        #region Deprecated Requests

        public static readonly HashSet<string> DeprecatedRequests = new HashSet<string>
        {
            $"{MicrosoftCrmSdkMessages}.AddProductToKitRequest",
            $"{MicrosoftCrmSdkMessages}.AddProductToKitResponse",
            $"{MicrosoftCrmSdkMessages}.AddSubstituteProductRequest",
            $"{MicrosoftCrmSdkMessages}.AddSubstituteProductResponse",
            $"{MicrosoftCrmSdkMessages}.AssociateEntitiesRequest",
            $"{MicrosoftCrmSdkMessages}.AssociateEntitiesResponse",
            $"{MicrosoftCrmSdkMessages}.CompoundCreateRequest",
            $"{MicrosoftCrmSdkMessages}.CompoundCreateResponse",
            $"{MicrosoftCrmSdkMessages}.CompoundUpdateRequest",
            $"{MicrosoftCrmSdkMessages}.CompoundUpdateResponse",
            $"{MicrosoftCrmSdkMessages}.ConvertKitToProductRequest",
            $"{MicrosoftCrmSdkMessages}.ConvertKitToProductResponse",
            $"{MicrosoftCrmSdkMessages}.ConvertProductToKitRequest",
            $"{MicrosoftCrmSdkMessages}.ConvertProductToKitResponse",
            $"{MicrosoftCrmSdkMessages}.DisassociateEntitiesRequest",
            $"{MicrosoftCrmSdkMessages}.DisassociateEntitiesResponse",
            $"{MicrosoftCrmSdkMessages}.ExecuteFetchRequest",
            $"{MicrosoftCrmSdkMessages}.ExecuteFetchResponse",
            $"{MicrosoftCrmSdkMessages}.IsBackOfficeInstalledRequest",
            $"{MicrosoftCrmSdkMessages}.IsBackOfficeInstalledResponse",
            $"{MicrosoftCrmSdkMessages}.MakeAvailableToOrganizationReportRequest",
            $"{MicrosoftCrmSdkMessages}.MakeAvailableToOrganizationReportResponse",
            $"{MicrosoftCrmSdkMessages}.MakeAvailableToOrganizationTemplateRequest",
            $"{MicrosoftCrmSdkMessages}.MakeAvailableToOrganizationTemplateResponse",
            $"{MicrosoftCrmSdkMessages}.MakeUnavailableToOrganizationReportRequest",
            $"{MicrosoftCrmSdkMessages}.MakeUnavailableToOrganizationReportResponse",
            $"{MicrosoftCrmSdkMessages}.MakeUnavailableToOrganizationTemplateRequest",
            $"{MicrosoftCrmSdkMessages}.MakeUnavailableToOrganizationTemplateResponse",
            $"{MicrosoftCrmSdkMessages}.RemoveProductFromKitRequest",
            $"{MicrosoftCrmSdkMessages}.RemoveProductFromKitResponse",
            $"{MicrosoftCrmSdkMessages}.RemoveSubstituteProductRequest",
            $"{MicrosoftCrmSdkMessages}.RemoveSubstituteProductResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveMembersTeamRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveMembersTeamResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveSubsidiaryTeamsBusinessUnitRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveSubsidiaryTeamsBusinessUnitResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveSubsidiaryUsersBusinessUnitRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveSubsidiaryUsersBusinessUnitResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveTeamsSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveTeamsSystemUserResponse",
            $"{MicrosoftCrmSdkMessages}.RetrieveUserSettingsSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.RetrieveUserSettingsSystemUserResponse",
            $"{MicrosoftCrmSdkMessages}.SetBusinessEquipmentRequest",
            $"{MicrosoftCrmSdkMessages}.SetBusinessEquipmentResponse",
            $"{MicrosoftCrmSdkMessages}.SetBusinessSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.SetBusinessSystemUserResponse",
            $"{MicrosoftCrmSdkMessages}.SetParentSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.SetParentSystemUserResponse",
            $"{MicrosoftCrmSdkMessages}.SetParentTeamRequest",
            $"{MicrosoftCrmSdkMessages}.SetParentTeamResponse",
            $"{MicrosoftCrmSdkMessages}.SetStateRequest",
            $"{MicrosoftCrmSdkMessages}.SetStateResponse",
            $"{MicrosoftCrmSdkMessages}.UpdateUserSettingsSystemUserRequest",
            $"{MicrosoftCrmSdkMessages}.UpdateUserSettingsSystemUserResponse"
        };

        #endregion

        #region Batch Request Types

        /// <summary>
        /// Batch request types that should not be used in plug-ins and workflow activities.
        /// Based on: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin
        /// </summary>
        public static readonly HashSet<string> BatchRequestTypes = new HashSet<string>
        {
            $"{MicrosoftXrmSdkMessages}.ExecuteMultipleRequest",
            $"{MicrosoftXrmSdkMessages}.ExecuteTransactionRequest",
            $"{MicrosoftXrmSdkMessages}.CreateMultipleRequest",
            $"{MicrosoftXrmSdkMessages}.UpdateMultipleRequest",
            $"{MicrosoftXrmSdkMessages}.UpsertMultipleRequest"
        };

        #endregion
    }
}

