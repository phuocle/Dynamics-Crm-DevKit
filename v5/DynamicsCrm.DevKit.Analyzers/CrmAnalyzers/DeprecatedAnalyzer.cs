using System;
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
    /// <summary>
    /// Analyzer to detect usage of deprecated SDK request/response types.
    /// 
    /// Based on Microsoft documentation:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/deprecations
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class DeprecatedAnalyzer : BaseDiagnosticAnalyzer
    {
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
            if (context == null) throw new ArgumentNullException(nameof(context));
            base.Initialize(context);
            
            context.RegisterSyntaxNodeAction(AnalyzeDeprecatedUsage, 
                SyntaxKind.ObjectCreationExpression, 
                SyntaxKind.CastExpression, 
                SyntaxKind.AsExpression);
        }

        /// <summary>
        /// Analyzes object creation, cast, and "as" expressions for deprecated types.
        /// </summary>
        private void AnalyzeDeprecatedUsage(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var cancellationToken = context.CancellationToken;

            switch (context.Node)
            {
                case ObjectCreationExpressionSyntax objectCreation:
                    // Detect: new DeprecatedRequest()
                    ReportIfDeprecated(context, semanticModel.GetTypeInfo(objectCreation, cancellationToken), 
                        objectCreation.GetLocation());
                    break;

                case CastExpressionSyntax castExpression:
                    // Detect: (DeprecatedRequest)response
                    ReportIfDeprecated(context, semanticModel.GetTypeInfo(castExpression, cancellationToken), 
                        castExpression.Type.GetLocation());
                    break;

                case BinaryExpressionSyntax binaryExpression when binaryExpression.IsKind(SyntaxKind.AsExpression):
                    // Detect: response as DeprecatedRequest
                    ReportIfDeprecated(context, semanticModel.GetTypeInfo(binaryExpression, cancellationToken), 
                        binaryExpression.Right.GetLocation());
                    break;
            }
        }

        /// <summary>
        /// Reports a diagnostic if the type is a deprecated SDK type.
        /// </summary>
        private static void ReportIfDeprecated(SyntaxNodeAnalysisContext context, TypeInfo typeInfo, Location location)
        {
            var typeName = typeInfo.Type?.ToDisplayString();
            if (typeName != null && AnalyzerHelper.DeprecatedRequests.Contains(typeName))
            {
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.DeprecatedRequest, location);
            }
        }
    }
}