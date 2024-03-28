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
            if (context.Node is MemberAccessExpressionSyntax node)
            {
                if (node?.Name?.ToString() == "Id" || node?.Name?.ToString() == "Name" || node?.Name?.ToString() == "LogicalName")
                {
                    var semanticModel = context.SemanticModel;
                    var cancellationToken = context.CancellationToken;
                    var typeInfo = semanticModel?.GetTypeInfo(node?.Expression, cancellationToken);
                    var found = node.AncestorsAndSelf().FirstOrDefault(x => x is AssignmentExpressionSyntax);
                    if (found != null)
                    {
                        var assignmentExpressionSyntax = (AssignmentExpressionSyntax)found;
                        if (assignmentExpressionSyntax.Left.ToFullString() == node.ToFullString()) return;
                    }
                    var found2 = node.AncestorsAndSelf().FirstOrDefault(x => x is BinaryExpressionSyntax || x is InterpolatedStringExpressionSyntax);
                    if (found2 != null)
                    {
                        if (typeInfo?.Type?.ToDisplayString() == "Microsoft.Xrm.Sdk.EntityReference")
                        {
                            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.EntityReferenceMaybeNull, node?.Name?.GetLocation());
                        }
                    }
                    else
                    {
                        if (typeInfo?.Type?.ToDisplayString() == "Microsoft.Xrm.Sdk.EntityReference")
                        {
                            var convertedType = context.SemanticModel?.GetTypeInfo(node).ConvertedType;
                            if (convertedType?.ToDisplayString() == "System.Guid?" || convertedType?.ToDisplayString() == "string")
                            {
                                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.EntityReferenceMaybeNull, node?.Name?.GetLocation());
                            }
                        }
                    }
                }
            }
        }
    }
}