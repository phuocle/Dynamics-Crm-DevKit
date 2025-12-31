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
    /// Analyzer to detect IPlugin implementations that don't use ITracingService.
    /// Tracing is essential for debugging and monitoring plugin execution.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-itracingservice-plugins
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class TracingServiceAnalyzer : BaseDiagnosticAnalyzer
    {
        private const string ITracingServiceName = "ITracingService";

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.UseTracingService); }
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
            
            context.RegisterSyntaxNodeAction(AnalyzePluginClass, SyntaxKind.ClassDeclaration);
        }

        /// <summary>
        /// Analyzes class declarations that implement IPlugin for ITracingService usage.
        /// </summary>
        private void AnalyzePluginClass(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is ClassDeclarationSyntax classDeclaration))
                return;

            var semanticModel = context.SemanticModel;
            if (semanticModel == null)
                return;

            var classSymbol = semanticModel.GetDeclaredSymbol(classDeclaration, context.CancellationToken) as INamedTypeSymbol;
            if (classSymbol == null)
                return;

            // Check if class implements IPlugin (using centralized method)
            if (!AnalyzerHelper.ImplementsIPlugin(classSymbol))
                return;

            // Check if class uses ITracingService
            if (UsesTracingService(classDeclaration))
                return;

            // Report diagnostic on the class identifier
            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.UseTracingService,
                classDeclaration.Identifier.GetLocation(), classDeclaration.Identifier.Text);
        }

        /// <summary>
        /// Checks if the class uses ITracingService anywhere in its implementation.
        /// </summary>
        private static bool UsesTracingService(ClassDeclarationSyntax classDeclaration)
        {
            // Check for ITracingService in method bodies, variable declarations, etc.
            var allIdentifiers = classDeclaration.DescendantNodes()
                .OfType<IdentifierNameSyntax>()
                .Select(id => id.Identifier.Text);

            return allIdentifiers.Any(id => id == ITracingServiceName);
        }
    }
}
