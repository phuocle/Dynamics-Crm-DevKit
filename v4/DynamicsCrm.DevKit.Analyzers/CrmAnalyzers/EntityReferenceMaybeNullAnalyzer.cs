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
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    internal class EntityReferenceMaybeNullAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get
            {
                return ImmutableArray.Create(
                    DiagnosticDescriptors.EntityReferenceMaybeNull
                );
            }
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
            context.RegisterSyntaxNodeAction(AnalyzerEntityReferenceNullConditionalOperator, SyntaxKind.SimpleMemberAccessExpression);
        }

        private void AnalyzerEntityReferenceNullConditionalOperator(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is MemberAccessExpressionSyntax node)) return;

            var nodeName = node.Name?.ToString();
            if (nodeName != "Id" && nodeName != "Name" && nodeName != "LogicalName") return;

            var semanticModel = context.SemanticModel;
            if (semanticModel == null || node.Expression == null) return;

            var cancellationToken = context.CancellationToken;
            var typeInfo = semanticModel.GetTypeInfo(node.Expression, cancellationToken);
            var typeName = typeInfo.Type?.ToDisplayString();
            if (typeName != "Microsoft.Xrm.Sdk.EntityReference") return;

            var found = node.AncestorsAndSelf().FirstOrDefault(x => x is AssignmentExpressionSyntax);
            if (found != null)
            {
                var assignmentExpressionSyntax = (AssignmentExpressionSyntax)found;
                if (assignmentExpressionSyntax.Left.ToFullString() == node.ToFullString()) return;
            }

            var found2 = node.AncestorsAndSelf().FirstOrDefault(x => x is BinaryExpressionSyntax || x is InterpolatedStringExpressionSyntax);
            if (found2 != null)
            {
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.EntityReferenceMaybeNull, node.Name.GetLocation());
            }
            else
            {
                var convertedType = semanticModel.GetTypeInfo(node).ConvertedType;
                var convertedTypeName = convertedType?.ToDisplayString();
                if (convertedTypeName == "System.Guid?" || convertedTypeName == "string")
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.EntityReferenceMaybeNull, node.Name.GetLocation());
                }
            }
        }
    }
}