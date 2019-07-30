using System;
using System.Collections.Immutable;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;

namespace DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
{
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class UpdateMessageShouldHaveFilteringAttributesAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes); }
        }

        public override void Initialize(AnalysisContext context)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            base.Initialize(context);
            context.RegisterSyntaxNodeAction(AnalyzerUpdateMessageShouldHaveFilteringAttributes, SyntaxKind.Attribute);
        }

        private void AnalyzerUpdateMessageShouldHaveFilteringAttributes(SyntaxNodeAnalysisContext context)
        {
            if (
                context.Node is AttributeSyntax attribute &&
                attribute?.Name?.ToFullString() == "CrmPluginRegistration" &&
                attribute.TryFindArgument(0, "message", out var argurment0) && argurment0?.ToFullString() == "\"Update\"" &&
                attribute.TryFindArgument(4, "filteringAttributes", out var argurment4) && argurment4?.ToFullString() == "\"\""
               )
            {
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes, argurment4.GetLocation());
            }
        }
    }
}
