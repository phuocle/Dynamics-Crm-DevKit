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
    /// Analyzer to detect AppDomain event registration in plugins.
    /// Subscribing to AppDomain events in plugins can cause memory leaks and unexpected behavior
    /// because plugin instances are cached and reused.
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class AppDomainEventAnalyzer : BaseDiagnosticAnalyzer
    {
        private const string AppDomainTypeName = "System.AppDomain";
        
        /// <summary>
        /// AppDomain events that should not be subscribed to in plugins.
        /// </summary>
        private static readonly HashSet<string> ProblematicEvents = new HashSet<string>
        {
            "UnhandledException",
            "FirstChanceException",
            "AssemblyResolve",
            "TypeResolve",
            "ResourceResolve",
            "AssemblyLoad",
            "DomainUnload",
            "ProcessExit"
        };

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.AvoidAppDomainEvents); }
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
            
            // Register for += and -= assignment expressions (event subscription)
            context.RegisterSyntaxNodeAction(AnalyzeEventSubscription, 
                SyntaxKind.AddAssignmentExpression, 
                SyntaxKind.SubtractAssignmentExpression);
        }

        /// <summary>
        /// Analyzes event subscription expressions like: AppDomain.CurrentDomain.UnhandledException += handler
        /// </summary>
        private void AnalyzeEventSubscription(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is AssignmentExpressionSyntax assignment))
                return;

            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            // Check if we're inside a plugin or workflow class
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(assignment, semanticModel, context.CancellationToken))
                return;

            // Check if the left side is a member access to an AppDomain event
            if (!(assignment.Left is MemberAccessExpressionSyntax memberAccess))
                return;

            var eventName = memberAccess.Name.Identifier.Text;
            if (!ProblematicEvents.Contains(eventName))
                return;

            // Check if the expression type is AppDomain
            var expressionType = semanticModel.GetTypeInfo(memberAccess.Expression, context.CancellationToken).Type;
            if (expressionType?.ToDisplayString() != AppDomainTypeName)
                return;

            // Report diagnostic
            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.AvoidAppDomainEvents,
                assignment.GetLocation(), eventName);
        }
    }
}
