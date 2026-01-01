using System;
using System.Collections.Immutable;
using System.Linq;
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
    /// Analyzer to detect catch blocks in plugins/workflows that don't use ITracingService.
    /// Logging exceptions with ITracingService is essential for debugging and monitoring.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class TracingServiceInCatchAnalyzer : BaseDiagnosticAnalyzer
    {
        private const string ITracingServiceName = "ITracingService";

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.UseTracingServiceInCatch); }
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
            
            context.RegisterSyntaxNodeAction(AnalyzeCatchClause, SyntaxKind.CatchClause);
        }

        /// <summary>
        /// Analyzes catch clauses to ensure they use ITracingService.
        /// </summary>
        private void AnalyzeCatchClause(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is CatchClauseSyntax catchClause))
                return;

            var semanticModel = context.SemanticModel;
            if (semanticModel == null)
                return;

            // Check if this catch block is inside a plugin or workflow class
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(catchClause, semanticModel, context.CancellationToken))
                return;

            // Check if the catch block uses ITracingService
            if (UsesTracingServiceInCatch(catchClause))
                return;

            // Report diagnostic on the catch keyword
            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.UseTracingServiceInCatch,
                catchClause.CatchKeyword.GetLocation());
        }

        /// <summary>
        /// Checks if the catch block uses ITracingService in its body.
        /// </summary>
        private static bool UsesTracingServiceInCatch(CatchClauseSyntax catchClause)
        {
            if (catchClause.Block == null)
                return false;

            // Check for ITracingService in the catch block body
            var allIdentifiers = catchClause.Block.DescendantNodes()
                .OfType<IdentifierNameSyntax>()
                .Select(id => id.Identifier.Text);

            return allIdentifiers.Any(id => id == ITracingServiceName);
        }
    }
}
