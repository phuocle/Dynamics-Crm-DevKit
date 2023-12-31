using System;
using System.Collections.Generic;
using System.Collections.Immutable;
#if DEBUG
using System.Diagnostics;
#endif
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;

namespace DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
{
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class DeprecatedAnalyzer : BaseDiagnosticAnalyzer
    {
        private const string MicrosoftCrmSdkMessages = "Microsoft.Crm.Sdk.Messages";

        private readonly List<string> DeprecatedRequests = new List<string>()
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

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.DeprecatedRequest); }
        }

        public override void Initialize(AnalysisContext context)
        {
#if DEBUG
            //if (!Debugger.IsAttached)
            //{
            //    Debugger.Launch();
            //}
#endif
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze | GeneratedCodeAnalysisFlags.ReportDiagnostics);
            if (context == null) throw new ArgumentNullException(nameof(context));
            base.Initialize(context);
            context.RegisterSyntaxNodeAction(AnalyzerDeprecated, SyntaxKind.ObjectCreationExpression, SyntaxKind.CastExpression, SyntaxKind.AsExpression);
        }

        private void AnalyzerDeprecated(SyntaxNodeAnalysisContext context)
        {
            if (context.Node is ObjectCreationExpressionSyntax objectCreationExpression)
            {
                var semanticModel = context.SemanticModel;
                var cancellationToken = context.CancellationToken;
                var typeInfo = semanticModel?.GetTypeInfo(objectCreationExpression, cancellationToken);
                if (DeprecatedRequests.Contains(typeInfo?.Type?.ToDisplayString()))
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.DeprecatedRequest, objectCreationExpression?.GetLocation());
                }
            }
            else if (context.Node is Microsoft.CodeAnalysis.CSharp.Syntax.CastExpressionSyntax castExpressionSyntax)
            {
                var semanticModel = context.SemanticModel;
                var cancellationToken = context.CancellationToken;
                var typeInfo = semanticModel?.GetTypeInfo(castExpressionSyntax, cancellationToken);
                if (DeprecatedRequests.Contains(typeInfo?.Type?.ToDisplayString()))
                {
                    var identifierNameSyntax = castExpressionSyntax.Type as IdentifierNameSyntax;
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.DeprecatedRequest, identifierNameSyntax.Identifier.GetLocation());
                }
            }
            else if (context.Node is Microsoft.CodeAnalysis.CSharp.Syntax.BinaryExpressionSyntax binaryExpressionSyntax)
            {

                var semanticModel = context.SemanticModel;
                var cancellationToken = context.CancellationToken;
                var typeInfo = semanticModel?.GetTypeInfo(binaryExpressionSyntax, cancellationToken);
                if (DeprecatedRequests.Contains(typeInfo?.Type?.ToDisplayString()))
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.DeprecatedRequest, binaryExpressionSyntax.Right .GetLocation());
                }
            }
        }
    }
}