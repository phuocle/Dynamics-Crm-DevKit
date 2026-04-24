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
    /// Analyzer to detect throw statements using exceptions other than InvalidPluginExecutionException.
    /// In plugins, only InvalidPluginExecutionException should be thrown to show proper error messages to users.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/use-invalidpluginexecutionexception-plugin-workflow-activities
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class InvalidPluginExecutionExceptionAnalyzer : BaseDiagnosticAnalyzer
    {
        private const string InvalidPluginExecutionExceptionTypeName = "Microsoft.Xrm.Sdk.InvalidPluginExecutionException";

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.UseInvalidPluginExecutionException); }
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
            
            // Register for throw statements
            context.RegisterSyntaxNodeAction(AnalyzeThrowStatement, SyntaxKind.ThrowStatement);
            context.RegisterSyntaxNodeAction(AnalyzeThrowExpression, SyntaxKind.ThrowExpression);
        }

        private void AnalyzeThrowStatement(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is ThrowStatementSyntax throwStatement))
                return;

            // Re-throw (throw;) is allowed
            if (throwStatement.Expression == null)
                return;

            AnalyzeThrowExpression(context, throwStatement.Expression, throwStatement.ThrowKeyword);
        }

        private void AnalyzeThrowExpression(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is ThrowExpressionSyntax throwExpression))
                return;

            AnalyzeThrowExpression(context, throwExpression.Expression, throwExpression.ThrowKeyword);
        }

        private void AnalyzeThrowExpression(SyntaxNodeAnalysisContext context, ExpressionSyntax expression, SyntaxToken throwKeyword)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            // Check if this is inside an IPlugin or CodeActivity class
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(expression, semanticModel, context.CancellationToken))
                return;

            // Get the type of the exception being thrown
            var typeInfo = semanticModel.GetTypeInfo(expression, context.CancellationToken);
            var exceptionType = typeInfo.Type;

            if (exceptionType == null)
                return;

            // Check if it's InvalidPluginExecutionException or derives from it
            if (IsInvalidPluginExecutionException(exceptionType))
                return;

            // Calculate location: from 'throw' keyword to end of type (exclude constructor arguments)
            // This highlights 'throw new Exception' instead of the entire throw statement
            Location highlightLocation;
            if (expression is ObjectCreationExpressionSyntax objectCreation)
            {
                var startSpan = throwKeyword.SpanStart;
                var endSpan = objectCreation.Type.Span.End;
                var highlightSpan = TextSpan.FromBounds(startSpan, endSpan);
                highlightLocation = Location.Create(expression.SyntaxTree, highlightSpan);
            }
            else
            {
                highlightLocation = expression.GetLocation();
            }

            // Report diagnostic for non-InvalidPluginExecutionException
            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.UseInvalidPluginExecutionException,
                highlightLocation, exceptionType.Name);
        }

        private static bool IsInvalidPluginExecutionException(ITypeSymbol type)
        {
            var currentType = type;
            while (currentType != null)
            {
                if (currentType.ToDisplayString() == InvalidPluginExecutionExceptionTypeName)
                    return true;
                currentType = currentType.BaseType;
            }
            return false;
        }
    }
}
