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
    /// Analyzer to recommend checking context.Depth in plugins to prevent infinite loops.
    /// When plugins modify entities, they can trigger themselves recursively.
    /// Checking context.Depth and exiting early prevents stack overflow.
    /// 
    /// Plugin best practice.
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class PluginDepthAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.PluginDepthCheck); }
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
            
            // Register for class declarations (to analyze plugin classes)
            context.RegisterSyntaxNodeAction(AnalyzeClassDeclaration, SyntaxKind.ClassDeclaration);
        }

        private void AnalyzeClassDeclaration(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            if (!(context.Node is ClassDeclarationSyntax classDeclaration))
                return;

            // Check if this class implements IPlugin
            var classSymbol = semanticModel.GetDeclaredSymbol(classDeclaration, context.CancellationToken);
            if (classSymbol == null)
                return;

            if (!ImplementsIPlugin(classSymbol))
                return;

            // Find the Execute method
            var executeMethod = classDeclaration.Members
                .OfType<MethodDeclarationSyntax>()
                .FirstOrDefault(m => m.Identifier.Text == "Execute");

            if (executeMethod == null)
                return;

            // Check if the Execute method body references .Depth
            var methodBody = executeMethod.Body ?? (SyntaxNode)executeMethod.ExpressionBody;
            if (methodBody == null)
                return;

            // Look for any access to ".Depth" property
            var hasDepthCheck = methodBody.DescendantNodes()
                .OfType<MemberAccessExpressionSyntax>()
                .Any(m => m.Name.Identifier.Text == "Depth");

            if (!hasDepthCheck)
            {
                // Report diagnostic on the class name
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.PluginDepthCheck,
                    classDeclaration.Identifier.GetLocation(), classDeclaration.Identifier.Text);
            }
        }

        private static bool ImplementsIPlugin(INamedTypeSymbol classSymbol)
        {
            // Check if class directly implements IPlugin
            foreach (var iface in classSymbol.AllInterfaces)
            {
                if (iface.Name == "IPlugin" && 
                    iface.ContainingNamespace?.ToDisplayString() == "Microsoft.Xrm.Sdk")
                {
                    return true;
                }
            }
            return false;
        }
    }
}
