using System;
using System.Collections.Immutable;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;

namespace PL.DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
{
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class NotUseColumnSetTrueAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.NotUseColumnSetTrue); }
        }
        public override void Initialize(AnalysisContext context)
        {
            if (context == null)
                throw new ArgumentNullException(nameof(context));
            base.Initialize(context);
            context.RegisterSyntaxNodeAction(AnalyzerNotUseColumnSetTrue, SyntaxKind.ObjectCreationExpression, SyntaxKind.SimpleAssignmentExpression);
        }

        private void AnalyzerNotUseColumnSetTrue(SyntaxNodeAnalysisContext context)
        {
            if (context.Node is ObjectCreationExpressionSyntax objectCreationExpression)
            {
                if (
                  objectCreationExpression.ToString().ToLower().RemoveWhitespace() == "newmicrosoft.xrm.sdk.query.columnset(true)" ||
                  objectCreationExpression.ToString().ToLower().RemoveWhitespace() == "newxrm.sdk.query.columnset(true)" ||
                  objectCreationExpression.ToString().ToLower().RemoveWhitespace() == "newsdk.query.columnset(true)" ||
                  objectCreationExpression.ToString().ToLower().RemoveWhitespace() == "newquery.columnset(true)" ||
                  objectCreationExpression.ToString().ToLower().RemoveWhitespace() == "newcolumnset(true)"
                )
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.NotUseColumnSetTrue, objectCreationExpression.GetLocation());
                }
            }
            else if (context.Node is AssignmentExpressionSyntax assignmentExpressionSyntax)
            {
                if (assignmentExpressionSyntax.ToString().ToLower().RemoveWhitespace().EndsWith(".allcolumns=true"))
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.NotUseColumnSetTrue, assignmentExpressionSyntax.GetLocation());
                }
            }
        }
    }
}
