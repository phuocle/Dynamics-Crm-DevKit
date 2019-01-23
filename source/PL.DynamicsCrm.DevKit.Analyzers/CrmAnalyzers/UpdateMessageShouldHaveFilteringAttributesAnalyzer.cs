using System;
using System.Collections.Immutable;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
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

        }
    }
}
