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
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze | GeneratedCodeAnalysisFlags.ReportDiagnostics);
            if (context == null) throw new ArgumentNullException(nameof(context));
            base.Initialize(context);
            context.RegisterSyntaxNodeAction(AnalyzerDeprecated, SyntaxKind.ObjectCreationExpression, SyntaxKind.CastExpression, SyntaxKind.AsExpression);
        }

        private void AnalyzerDeprecated(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var cancellationToken = context.CancellationToken;

            if (context.Node is ObjectCreationExpressionSyntax objectCreationExpression)
            {
                var typeInfo = semanticModel.GetTypeInfo(objectCreationExpression, cancellationToken);
                var typeName = typeInfo.Type?.ToDisplayString();
                if (typeName != null && AnalyzerHelper.DeprecatedRequests.Contains(typeName))
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.DeprecatedRequest, objectCreationExpression.GetLocation());
                }
            }
            else if (context.Node is CastExpressionSyntax castExpressionSyntax)
            {
                var typeInfo = semanticModel.GetTypeInfo(castExpressionSyntax, cancellationToken);
                var typeName = typeInfo.Type?.ToDisplayString();
                if (typeName != null && AnalyzerHelper.DeprecatedRequests.Contains(typeName))
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.DeprecatedRequest, castExpressionSyntax.Type.GetLocation());
                }
            }
            else if (context.Node is BinaryExpressionSyntax binaryExpressionSyntax)
            {
                var typeInfo = semanticModel.GetTypeInfo(binaryExpressionSyntax, cancellationToken);
                var typeName = typeInfo.Type?.ToDisplayString();
                if (typeName != null && AnalyzerHelper.DeprecatedRequests.Contains(typeName))
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.DeprecatedRequest, binaryExpressionSyntax.Right.GetLocation());
                }
            }
        }
    }
}