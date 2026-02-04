using System;
using System.Collections.Immutable;
#if DEBUG
using System.Diagnostics;
#endif
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;

using System.Linq;

namespace DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
{
    /// <summary>
    /// Analyzer to detect HttpClient usage without setting a Timeout.
    /// External HTTP calls in plugins should have an explicit timeout to avoid blocking.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-timeout-for-external-calls-from-plug-ins
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class HttpTimeoutAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.HttpTimeout); }
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
            
            // Register for object creation (new HttpClient())
            context.RegisterSyntaxNodeAction(AnalyzeObjectCreation, SyntaxKind.ObjectCreationExpression);
        }

        private void AnalyzeObjectCreation(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            if (!(context.Node is ObjectCreationExpressionSyntax objectCreation))
                return;

            // Check if this is inside an IPlugin or CodeActivity class
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(objectCreation, semanticModel, context.CancellationToken))
                return;

            // Get the type being created
            var typeInfo = semanticModel.GetTypeInfo(objectCreation, context.CancellationToken);
            var typeName = typeInfo.Type?.ToDisplayString();

            // Check for HttpClient instantiation
            if (typeName == "System.Net.Http.HttpClient")
            {
                if (IsTimeoutSet(objectCreation)) return;
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.HttpTimeout,
                    objectCreation.GetLocation(), "HttpClient");
            }
        }

        private bool IsTimeoutSet(ObjectCreationExpressionSyntax objectCreation)
        {
            var variableName = GetVariableName(objectCreation);
            if (string.IsNullOrEmpty(variableName)) return false;

            var block = objectCreation.FirstAncestorOrSelf<BlockSyntax>();
            if (block == null) return false;

            var targetLeft = $"{variableName}.Timeout";

            foreach (var assignment in block.DescendantNodes().OfType<AssignmentExpressionSyntax>())
            {
                if (assignment.Left.ToString() == targetLeft)
                {
                    return true;
                }
            }
            return false;
        }

        private string GetVariableName(SyntaxNode node)
        {
            if (node.Parent is EqualsValueClauseSyntax equalsValue &&
                equalsValue.Parent is VariableDeclaratorSyntax variableDeclarator)
            {
                return variableDeclarator.Identifier.Text;
            }
            if (node.Parent is AssignmentExpressionSyntax assignment)
            {
                return assignment.Left.ToString();
            }
            return null;
        }
    }
}
