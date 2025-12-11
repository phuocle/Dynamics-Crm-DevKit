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
    /// Analyzer to detect usage of ColumnSet(true) or AllColumns = true.
    /// Retrieving all columns causes performance degradation and should be avoided.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-data/retrieve-specific-columns-entity-via-query-apis
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class NotUseColumnSetTrueAnalyzer : BaseDiagnosticAnalyzer
    {
        private const string ColumnSetTypeName = "Microsoft.Xrm.Sdk.Query.ColumnSet";
        private const string AllAttributesElement = "<all-attributes";
        private const string AllColumnsProperty = "AllColumns";

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.NotUseColumnSetTrue); }
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
            
            context.RegisterSyntaxNodeAction(AnalyzeObjectCreation, SyntaxKind.ObjectCreationExpression);
            context.RegisterSyntaxNodeAction(AnalyzeAssignment, SyntaxKind.SimpleAssignmentExpression);
            context.RegisterSyntaxNodeAction(AnalyzeFetchXmlString, SyntaxKind.StringLiteralExpression);
            context.RegisterSyntaxNodeAction(AnalyzeFetchXmlInterpolated, SyntaxKind.InterpolatedStringText);
        }

        /// <summary>
        /// Detects: new ColumnSet(true)
        /// </summary>
        private void AnalyzeObjectCreation(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is ObjectCreationExpressionSyntax objectCreation))
                return;

            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var typeInfo = semanticModel.GetTypeInfo(objectCreation, context.CancellationToken);
            if (typeInfo.Type?.ToDisplayString() != ColumnSetTypeName)
                return;

            // Check constructor argument: new ColumnSet(true)
            if (objectCreation.ArgumentList?.Arguments.Count == 1)
            {
                var argument = objectCreation.ArgumentList.Arguments[0];
                if (argument.Expression is LiteralExpressionSyntax literal &&
                    literal.Token.IsKind(SyntaxKind.TrueKeyword))
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.NotUseColumnSetTrue, 
                        objectCreation.GetLocation());
                    return;
                }
            }

            // Check object initializer: new ColumnSet { AllColumns = true }
            if (objectCreation.Initializer != null)
            {
                foreach (var expression in objectCreation.Initializer.Expressions)
                {
                    if (expression is AssignmentExpressionSyntax assignment &&
                        assignment.Left?.ToString() == AllColumnsProperty &&
                        assignment.Right is LiteralExpressionSyntax rightLiteral &&
                        rightLiteral.Token.IsKind(SyntaxKind.TrueKeyword))
                    {
                        DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.NotUseColumnSetTrue, 
                            assignment.GetLocation());
                    }
                }
            }
        }

        /// <summary>
        /// Detects: columnSet.AllColumns = true
        /// </summary>
        private void AnalyzeAssignment(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is AssignmentExpressionSyntax assignment))
                return;

            // Check if assigning true to a member
            if (!(assignment.Right is LiteralExpressionSyntax right) || !right.Token.IsKind(SyntaxKind.TrueKeyword))
                return;

            if (!(assignment.Left is MemberAccessExpressionSyntax memberAccess))
                return;

            // Verify the member is on a ColumnSet type
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var typeInfo = semanticModel.GetTypeInfo(memberAccess.Expression, context.CancellationToken);
            if (typeInfo.Type?.ToDisplayString() == ColumnSetTypeName)
            {
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.NotUseColumnSetTrue, 
                    assignment.GetLocation());
            }
        }

        /// <summary>
        /// Detects: FetchXML with &lt;all-attributes/&gt; in string literals
        /// </summary>
        private void AnalyzeFetchXmlString(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is LiteralExpressionSyntax literal))
                return;

            var text = literal.Token.Text;
            ReportAllAttributesLocation(context, text, literal.GetLocation(), literal.SyntaxTree);
        }

        /// <summary>
        /// Detects: FetchXML with &lt;all-attributes/&gt; in interpolated strings
        /// </summary>
        private void AnalyzeFetchXmlInterpolated(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is InterpolatedStringTextSyntax interpolated))
                return;

            var text = interpolated.TextToken.Text;
            ReportAllAttributesLocation(context, text, interpolated.GetLocation(), interpolated.SyntaxTree);
        }

        /// <summary>
        /// Reports diagnostic for &lt;all-attributes&gt; element in FetchXML.
        /// </summary>
        private static void ReportAllAttributesLocation(SyntaxNodeAnalysisContext context, string text, Location nodeLocation, SyntaxTree syntaxTree)
        {
            if (string.IsNullOrEmpty(text) || syntaxTree == null)
                return;

            var lowerText = text.ToLowerInvariant();
            var position = lowerText.IndexOf(AllAttributesElement, StringComparison.Ordinal);
            
            if (position < 0)
                return;

            var start = nodeLocation.SourceSpan.Start;
            var textSpan = new TextSpan(start + position + 1, AllAttributesElement.Length - 1); // -1 to exclude '<'
            var location = Location.Create(syntaxTree, textSpan);
            
            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.NotUseColumnSetTrue, location);
        }
    }
}