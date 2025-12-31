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
    /// Analyzer to detect Console.Write/WriteLine usage in plugins and workflow activities.
    /// Console output has no effect in the Dataverse sandbox environment.
    /// 
    /// Based on sandbox limitation - Console is redirected to null in sandbox.
    /// Recommend using ITracingService instead.
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class ConsoleOutputAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.AvoidConsoleOutput); }
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
            
            // Register for invocation expressions (method calls like Console.Write, Console.WriteLine)
            context.RegisterSyntaxNodeAction(AnalyzeInvocation, SyntaxKind.InvocationExpression);
        }

        private void AnalyzeInvocation(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            if (!(context.Node is InvocationExpressionSyntax invocation))
                return;

            // Check if this is inside an IPlugin or CodeActivity class
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(invocation, semanticModel, context.CancellationToken))
                return;

            // Get the method symbol being invoked
            var symbolInfo = semanticModel.GetSymbolInfo(invocation, context.CancellationToken);
            if (!(symbolInfo.Symbol is IMethodSymbol methodSymbol))
                return;

            var containingTypeName = methodSymbol.ContainingType?.ToDisplayString();
            var methodName = methodSymbol.Name;

            // Check for Console output methods
            if (IsConsoleOutputMethod(containingTypeName, methodName))
            {
                var patternName = GetConsoleMethodName(methodName);
                // Highlight only the method name (e.g., Console.WriteLine, not the entire call)
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.AvoidConsoleOutput,
                    invocation.Expression.GetLocation(), patternName);
            }
        }

        private static bool IsConsoleOutputMethod(string containingTypeName, string methodName)
        {
            // Check for System.Console type
            if (containingTypeName != "System.Console")
                return false;

            // Check for output methods
            switch (methodName)
            {
                case "Write":
                case "WriteLine":
                case "Error":          // Console.Error.Write/WriteLine
                case "Out":            // Console.Out.Write/WriteLine
                case "SetOut":
                case "SetError":
                case "Beep":
                case "Clear":
                case "ResetColor":
                case "SetCursorPosition":
                case "SetWindowPosition":
                case "SetWindowSize":
                case "SetBufferSize":
                    return true;
                default:
                    return false;
            }
        }

        private static string GetConsoleMethodName(string methodName)
        {
            return $"Console.{methodName}()";
        }
    }
}
