using System;
using System.Collections.Generic;
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
    /// Analyzer to detect Create/Update plugin registrations without filtering attributes.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/include-filtering-attributes-plugin-registration
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class UpdateMessageShouldHaveFilteringAttributesAnalyzer : BaseDiagnosticAnalyzer
    {
        /// <summary>
        /// Messages that require filtering attributes to be specified.
        /// </summary>
        private static readonly HashSet<string> MessagesRequiringFilteringAttributes = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "create",
            "createmultiple",
            "onexternalcreated",
            "update",
            "updatemultiple",
            "onexternalupdated"
        };

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get
            {
                return ImmutableArray.Create(
                    DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes,
                    DiagnosticDescriptors.UpdateMessageShouldNotUseAllAttributes);
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
            if (context == null) throw new ArgumentNullException(nameof(context));
            
            context.EnableConcurrentExecution();
            context.ConfigureGeneratedCodeAnalysis(GeneratedCodeAnalysisFlags.Analyze | GeneratedCodeAnalysisFlags.ReportDiagnostics);
            base.Initialize(context);
            
            context.RegisterSyntaxNodeAction(AnalyzeAttribute, SyntaxKind.Attribute);
        }

        private void AnalyzeAttribute(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is AttributeSyntax attribute))
                return;

            // Check if this is a CrmPluginRegistration attribute
            var attributeName = attribute.Name?.ToString();
            if (attributeName == null || !attributeName.Contains("CrmPluginRegistration"))
                return;

            // Get the message argument (first positional or named "message")
            if (!attribute.TryFindArgument(0, "message", out var messageArgument) || messageArgument == null)
                return;

            // Get the message value
            var message = GetArgumentStringValue(messageArgument);
            if (string.IsNullOrEmpty(message))
                return;

            // Check if this message requires filtering attributes
            if (!MessagesRequiringFilteringAttributes.Contains(message))
                return;

            // Get the filteringAttributes argument (fifth positional or named "filteringAttributes")
            if (!attribute.TryFindArgument(4, "filteringAttributes", out var filteringArgument) || filteringArgument == null)
                return;

            var filteringValue = GetArgumentStringValue(filteringArgument);

            // Check for empty or invalid filtering attributes
            if (string.IsNullOrWhiteSpace(filteringValue))
            {
                DiagnosticHelpers.ReportDiagnostic(
                    context, 
                    DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes, 
                    filteringArgument.GetLocation());
            }
            else if (filteringValue == "*")
            {
                DiagnosticHelpers.ReportDiagnostic(
                    context, 
                    DiagnosticDescriptors.UpdateMessageShouldNotUseAllAttributes, 
                    filteringArgument.GetLocation());
            }
        }

        /// <summary>
        /// Gets the string value from an attribute argument.
        /// Handles string literals and removes quotes.
        /// </summary>
        private static string GetArgumentStringValue(AttributeArgumentSyntax argument)
        {
            if (argument?.Expression == null)
                return null;

            // Handle string literal expressions directly
            if (argument.Expression is LiteralExpressionSyntax literal &&
                literal.IsKind(SyntaxKind.StringLiteralExpression))
            {
                return literal.Token.ValueText;
            }

            // Fallback: use the old method for other expression types
            var fullString = argument.ToFullString();
            return AnalyzerHelper.RemoveQuote(fullString?.Trim());
        }
    }
}