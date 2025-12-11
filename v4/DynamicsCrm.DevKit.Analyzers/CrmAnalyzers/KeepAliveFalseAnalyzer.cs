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
    /// Analyzer to detect HttpClient/WebRequest usage without setting KeepAlive to false.
    /// External HTTP calls in plugins should disable KeepAlive to avoid connection pool issues.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/set-keepalive-false-interacting-external-hosts-plugin
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class KeepAliveFalseAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.KeepAliveFalse); }
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
            
            // Register for object creation (new HttpClient())
            context.RegisterSyntaxNodeAction(AnalyzeObjectCreation, SyntaxKind.ObjectCreationExpression);
        }

        private void AnalyzeObjectCreation(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var cancellationToken = context.CancellationToken;

            if (!(context.Node is ObjectCreationExpressionSyntax objectCreation))
                return;

            // Check if this is inside an IPlugin or CodeActivity class
            var classDeclaration = objectCreation.FirstAncestorOrSelf<ClassDeclarationSyntax>();
            if (classDeclaration == null) return;

            var classSymbol = semanticModel.GetDeclaredSymbol(classDeclaration, cancellationToken) as INamedTypeSymbol;
            if (classSymbol == null) return;

            if (!IsPluginOrWorkflowClass(classSymbol))
                return;

            // Get the type being created
            var typeInfo = semanticModel.GetTypeInfo(objectCreation, cancellationToken);
            var typeName = typeInfo.Type?.ToDisplayString();

            // Check for HttpClient instantiation
            if (typeName == "System.Net.Http.HttpClient")
            {
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.KeepAliveFalse,
                    objectCreation.GetLocation(), "HttpClient");
            }
            // Check for WebRequest.Create or HttpWebRequest instantiation
            else if (typeName == "System.Net.HttpWebRequest" || typeName == "System.Net.WebRequest")
            {
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.KeepAliveFalse,
                    objectCreation.GetLocation(), "WebRequest");
            }
        }

        private bool IsPluginOrWorkflowClass(INamedTypeSymbol classSymbol)
        {
            // Check if class implements IPlugin
            foreach (var iface in classSymbol.AllInterfaces)
            {
                if (iface.ToDisplayString() == "Microsoft.Xrm.Sdk.IPlugin")
                    return true;
            }

            // Check if class inherits from CodeActivity or related base classes
            var baseType = classSymbol.BaseType;
            while (baseType != null)
            {
                var baseTypeName = baseType.ToDisplayString();
                if (baseTypeName == "System.Activities.CodeActivity" ||
                    baseTypeName == "System.Activities.NativeActivity" ||
                    baseTypeName == "System.Activities.Activity")
                    return true;
                baseType = baseType.BaseType;
            }

            return false;
        }
    }
}
