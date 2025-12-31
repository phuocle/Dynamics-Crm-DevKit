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
    /// Analyzer to detect potentially problematic GetAwaiter().GetResult() usage in plugins.
    /// While GetAwaiter().GetResult() is sometimes necessary in plugins (since async Execute is not supported),
    /// it should be used carefully to avoid deadlocks.
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class GetAwaiterGetResultAnalyzer : BaseDiagnosticAnalyzer
    {
        private const string GetAwaiterMethodName = "GetAwaiter";
        private const string GetResultMethodName = "GetResult";
        private const string ResultPropertyName = "Result";
        private const string WaitMethodName = "Wait";

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.AvoidGetAwaiterGetResult); }
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
            
            // Register for invocation expressions
            context.RegisterSyntaxNodeAction(AnalyzeInvocation, SyntaxKind.InvocationExpression);
            
            // Register for member access (for .Result property)
            context.RegisterSyntaxNodeAction(AnalyzeMemberAccess, SyntaxKind.SimpleMemberAccessExpression);
        }

        /// <summary>
        /// Analyzes invocation expressions like: task.GetAwaiter().GetResult() or task.Wait()
        /// </summary>
        private void AnalyzeInvocation(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is InvocationExpressionSyntax invocation))
                return;

            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            // Check if we're inside a plugin or workflow class
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(invocation, semanticModel, context.CancellationToken))
                return;

            // Check for GetAwaiter().GetResult() pattern
            if (invocation.Expression is MemberAccessExpressionSyntax memberAccess)
            {
                var methodName = memberAccess.Name.Identifier.Text;

                // Check for .GetResult() after .GetAwaiter()
                if (methodName == GetResultMethodName)
                {
                    if (IsGetAwaiterCall(memberAccess.Expression, semanticModel, context.CancellationToken))
                    {
                        DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.AvoidGetAwaiterGetResult,
                            invocation.GetLocation(), "GetAwaiter().GetResult()");
                        return;
                    }
                }

                // Check for .Wait() on Task
                if (methodName == WaitMethodName)
                {
                    var expressionType = semanticModel.GetTypeInfo(memberAccess.Expression, context.CancellationToken).Type;
                    if (IsTaskType(expressionType))
                    {
                        DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.AvoidGetAwaiterGetResult,
                            invocation.GetLocation(), "Task.Wait()");
                        return;
                    }
                }
            }
        }

        /// <summary>
        /// Analyzes member access for .Result property on Task.
        /// </summary>
        private void AnalyzeMemberAccess(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is MemberAccessExpressionSyntax memberAccess))
                return;

            // Skip if this is part of an invocation (handled by AnalyzeInvocation)
            if (memberAccess.Parent is InvocationExpressionSyntax)
                return;

            if (memberAccess.Name.Identifier.Text != ResultPropertyName)
                return;

            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            // Check if we're inside a plugin or workflow class
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(memberAccess, semanticModel, context.CancellationToken))
                return;

            // Check if the expression type is Task<T>
            var expressionType = semanticModel.GetTypeInfo(memberAccess.Expression, context.CancellationToken).Type;
            if (IsGenericTaskType(expressionType))
            {
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.AvoidGetAwaiterGetResult,
                    memberAccess.GetLocation(), "Task.Result");
            }
        }

        /// <summary>
        /// Checks if an expression is a GetAwaiter() call.
        /// </summary>
        private static bool IsGetAwaiterCall(ExpressionSyntax expression, SemanticModel semanticModel, System.Threading.CancellationToken cancellationToken)
        {
            if (!(expression is InvocationExpressionSyntax invocation))
                return false;

            if (!(invocation.Expression is MemberAccessExpressionSyntax memberAccess))
                return false;

            return memberAccess.Name.Identifier.Text == GetAwaiterMethodName;
        }

        /// <summary>
        /// Checks if the type is Task or Task<T>.
        /// </summary>
        private static bool IsTaskType(ITypeSymbol typeSymbol)
        {
            if (typeSymbol == null)
                return false;

            var typeName = typeSymbol.ToDisplayString();
            return typeName.StartsWith("System.Threading.Tasks.Task");
        }

        /// <summary>
        /// Checks if the type is Task<T> (has Result property).
        /// </summary>
        private static bool IsGenericTaskType(ITypeSymbol typeSymbol)
        {
            if (typeSymbol == null)
                return false;

            var namedType = typeSymbol as INamedTypeSymbol;
            if (namedType == null)
                return false;

            return namedType.IsGenericType && 
                   namedType.ConstructedFrom?.ToDisplayString() == "System.Threading.Tasks.Task<TResult>";
        }
    }
}
