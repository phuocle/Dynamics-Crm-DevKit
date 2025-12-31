using System;
using System.Collections.Immutable;
#if DEBUG
using System.Diagnostics;
#endif
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;
using Microsoft.CodeAnalysis.Text;

namespace DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
{
    /// <summary>
    /// Analyzer to detect usage of batch request types (ExecuteMultipleRequest, ExecuteTransactionRequest, 
    /// CreateMultipleRequest, UpdateMultipleRequest, UpsertMultipleRequest) within plug-ins and workflow activities.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/avoid-batch-requests-plugin
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class BatchRequestInPluginAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.BatchRequestInPlugin); }
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
            
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze | GeneratedCodeAnalysisFlags.ReportDiagnostics);
            base.Initialize(context);
            
            context.RegisterSyntaxNodeAction(AnalyzeBatchRequest, SyntaxKind.ObjectCreationExpression);
        }

        private void AnalyzeBatchRequest(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            if (!(context.Node is ObjectCreationExpressionSyntax objectCreation))
                return;

            var typeInfo = semanticModel.GetTypeInfo(objectCreation, context.CancellationToken);
            var typeName = typeInfo.Type?.ToDisplayString();
            
            if (typeName == null || !AnalyzerHelper.BatchRequestTypes.Contains(typeName))
                return;

            // Check if we're inside an IPlugin or CodeActivity class
            if (AnalyzerHelper.IsInsidePluginOrWorkflow(objectCreation, semanticModel, context.CancellationToken))
            {
                // Calculate location: from 'new' keyword to end of type/arguments (exclude initializer)
                // This reduces visual noise when object initializers are present
                var startSpan = objectCreation.NewKeyword.SpanStart;
                var endSpan = objectCreation.ArgumentList?.Span.End ?? objectCreation.Type.Span.End;
                var highlightSpan = TextSpan.FromBounds(startSpan, endSpan);
                var highlightLocation = Location.Create(objectCreation.SyntaxTree, highlightSpan);

                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.BatchRequestInPlugin, 
                    highlightLocation, typeName);
            }
        }
    }
}
