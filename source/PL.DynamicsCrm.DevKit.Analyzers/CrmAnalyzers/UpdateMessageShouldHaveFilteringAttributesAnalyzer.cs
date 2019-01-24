using System;
using System.Collections.Immutable;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Diagnostics;

namespace PL.DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
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
            if (context == null)
                throw new ArgumentNullException(nameof(context));
            base.Initialize(context);
            context.RegisterSyntaxNodeAction(AnalyzerUpdateMessageShouldHaveFilteringAttributes, SyntaxKind.AttributeList);
        }

        private void AnalyzerUpdateMessageShouldHaveFilteringAttributes(SyntaxNodeAnalysisContext contexts)
        {
            var attributeListSyntax = (AttributeListSyntax)contexts.Node;
            if (attributeListSyntax == null) return;
            foreach(var attributeSyntax in attributeListSyntax.Attributes)
            {
                AnalyzerAttribute(contexts, attributeSyntax);
            }
        }

        private void AnalyzerAttribute(SyntaxNodeAnalysisContext contexts, AttributeSyntax attributeSyntax)
        {
            if (attributeSyntax?.Name?.ToFullString() != "CrmPluginRegistration") return;
            var argurment = attributeSyntax?.ArgumentList?.Arguments[0];
            if (argurment?.ToFullString() != "\"Update\"") return;
            argurment = attributeSyntax?.ArgumentList?.Arguments[5];
            if (argurment?.ToFullString() == "\"\"")
            {
                DiagnosticHelpers.ReportDiagnostic(contexts, DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes, argurment.GetLocation());
            }
        }
    }
}
