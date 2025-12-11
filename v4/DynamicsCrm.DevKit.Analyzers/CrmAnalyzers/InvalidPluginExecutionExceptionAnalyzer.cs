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
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze | GeneratedCodeAnalysisFlags.ReportDiagnostics);
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

            AnalyzeThrowExpression(context, throwStatement.Expression, throwStatement.GetLocation());
        }

        private void AnalyzeThrowExpression(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is ThrowExpressionSyntax throwExpression))
                return;

            AnalyzeThrowExpression(context, throwExpression.Expression, throwExpression.GetLocation());
        }

        private void AnalyzeThrowExpression(SyntaxNodeAnalysisContext context, ExpressionSyntax expression, Location location)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var cancellationToken = context.CancellationToken;

            // Check if this is inside an IPlugin or CodeActivity class
            var classDeclaration = expression.FirstAncestorOrSelf<ClassDeclarationSyntax>();
            if (classDeclaration == null) return;

            var classSymbol = semanticModel.GetDeclaredSymbol(classDeclaration, cancellationToken) as INamedTypeSymbol;
            if (classSymbol == null) return;

            if (!IsPluginOrWorkflowClass(classSymbol))
                return;

            // Get the type of the exception being thrown
            var typeInfo = semanticModel.GetTypeInfo(expression, cancellationToken);
            var exceptionType = typeInfo.Type;

            if (exceptionType == null)
                return;

            var exceptionTypeName = exceptionType.ToDisplayString();

            // Check if it's InvalidPluginExecutionException or derives from it
            if (IsInvalidPluginExecutionException(exceptionType))
                return;

            // Report diagnostic for non-InvalidPluginExecutionException
            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.UseInvalidPluginExecutionException,
                location, exceptionType.Name);
        }

        private bool IsInvalidPluginExecutionException(ITypeSymbol type)
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

        private bool IsPluginOrWorkflowClass(INamedTypeSymbol classSymbol)
        {
            // Check if class implements IPlugin
            foreach (var iface in classSymbol.AllInterfaces)
            {
                if (iface.ToDisplayString() == "Microsoft.Xrm.Sdk.IPlugin")
                    return true;
            }

            // Check if class inherits from CodeActivity or related base classes
            var baseType = classSymbol.BaseType;
            while (baseType != null)
            {
                var baseTypeName = baseType.ToDisplayString();
                if (baseTypeName == "System.Activities.CodeActivity" ||
                    baseTypeName == "System.Activities.NativeActivity" ||
                    baseTypeName == "System.Activities.Activity")
                    return true;
                baseType = baseType.BaseType;
            }

            return false;
        }
    }
}
