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
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class UpdateMessageShouldHaveFilteringAttributesAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes); }
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
            context.RegisterSyntaxNodeAction(AnalyzerUpdateMessageShouldHaveFilteringAttributes, SyntaxKind.Attribute);
        }

        private void AnalyzerUpdateMessageShouldHaveFilteringAttributes(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is AttributeSyntax attribute) || attribute.Name?.ToFullString() != "CrmPluginRegistration")
                return;

            if (!attribute.TryFindArgument(0, "message", out var argurment0) || argurment0 == null)
                return;

            var message = AnalyzerHelper.RemoveQuote(argurment0.ToFullString())?.ToLower();
            if (message != "update" && message != "updatemultiple" && message != "onexternalupdated" &&
                message != "create" && message != "createmultiple" && message != "onexternalcreated")
                return;

            if (attribute.TryFindArgument(4, "filteringAttributes", out var argurment4) && argurment4 != null)
            {
                if (AnalyzerHelper.TestIsEmpty(argurment4.ToFullString()))
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.UpdateMessageShouldHaveFilteringAttributes, argurment4.GetLocation());
                else if (AnalyzerHelper.RemoveQuote(argurment4.ToFullString()) == "*")
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.UpdateMessageShouldNotUseAllAttributes, argurment4.GetLocation());
            }
        }
    }
}