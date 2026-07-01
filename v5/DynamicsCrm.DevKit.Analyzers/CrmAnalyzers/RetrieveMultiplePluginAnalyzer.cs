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
    /// Analyzer to warn against registering plugins on Retrieve or RetrieveMultiple messages.
    /// These messages are called frequently and plugins registered on them can significantly impact performance.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/limit-registration-plugins-retrieve-retrievemultiple
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class RetrieveMultiplePluginAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.RetrieveMultiplePlugin); }
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
            
            // Register for attribute syntax
            context.RegisterSyntaxNodeAction(AnalyzeAttribute, SyntaxKind.Attribute);
        }

        private void AnalyzeAttribute(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var cancellationToken = context.CancellationToken;

            if (!(context.Node is AttributeSyntax attribute))
                return;

            // Check if this is CrmPluginRegistration attribute
            var attributeName = attribute.Name.ToString();
            if (!attributeName.Contains("CrmPluginRegistration"))
                return;

            // Get the first argument (message name)
            if (attribute.ArgumentList == null || attribute.ArgumentList.Arguments.Count == 0)
                return;

            var firstArg = attribute.ArgumentList.Arguments[0];
            var messageValue = GetArgumentValue(firstArg, semanticModel, cancellationToken);

            if (string.IsNullOrEmpty(messageValue))
                return;

            // Check if the message is Retrieve or RetrieveMultiple
            var messageLower = messageValue.ToLowerInvariant();
            if (messageLower == "retrieve" || messageLower == "retrievemultiple")
            {
                // Highlight only the message argument to reduce visual noise
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.RetrieveMultiplePlugin,
                    firstArg.GetLocation(), messageValue);
            }
        }

        private string GetArgumentValue(AttributeArgumentSyntax argument, SemanticModel semanticModel, System.Threading.CancellationToken cancellationToken)
        {
            // Handle string literal
            if (argument.Expression is LiteralExpressionSyntax literal &&
                literal.IsKind(SyntaxKind.StringLiteralExpression))
            {
                return literal.Token.ValueText;
            }

            // Handle constant reference
            var constantValue = semanticModel.GetConstantValue(argument.Expression, cancellationToken);
            if (constantValue.HasValue && constantValue.Value is string strValue)
            {
                return strValue;
            }

            return null;
        }
    }
}
