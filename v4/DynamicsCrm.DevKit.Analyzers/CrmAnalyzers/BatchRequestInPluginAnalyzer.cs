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
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze | GeneratedCodeAnalysisFlags.ReportDiagnostics);
            if (context == null) throw new ArgumentNullException(nameof(context));
            base.Initialize(context);
            context.RegisterSyntaxNodeAction(AnalyzeBatchRequest, SyntaxKind.ObjectCreationExpression);
        }

        private void AnalyzeBatchRequest(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var cancellationToken = context.CancellationToken;

            if (context.Node is ObjectCreationExpressionSyntax objectCreationExpression)
            {
                var typeInfo = semanticModel.GetTypeInfo(objectCreationExpression, cancellationToken);
                var typeName = typeInfo.Type?.ToDisplayString();
                
                if (typeName != null && AnalyzerHelper.BatchRequestTypes.Contains(typeName))
                {
                    // Check if we're inside an IPlugin or CodeActivity class
                    if (IsInsidePluginOrWorkflow(objectCreationExpression, semanticModel, cancellationToken))
                    {
                        DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.BatchRequestInPlugin, 
                            objectCreationExpression.GetLocation(), typeName);
                    }
                }
            }
        }

        private bool IsInsidePluginOrWorkflow(SyntaxNode node, SemanticModel semanticModel, System.Threading.CancellationToken cancellationToken)
        {
            var classDeclaration = node.FirstAncestorOrSelf<ClassDeclarationSyntax>();
            if (classDeclaration == null) return false;

            var classSymbol = semanticModel.GetDeclaredSymbol(classDeclaration, cancellationToken) as INamedTypeSymbol;
            if (classSymbol == null) return false;

            // Check if class implements IPlugin
            foreach (var iface in classSymbol.AllInterfaces)
            {
                if (iface.ToDisplayString() == "Microsoft.Xrm.Sdk.IPlugin")
                    return true;
            }

            // Check if class inherits from CodeActivity
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
