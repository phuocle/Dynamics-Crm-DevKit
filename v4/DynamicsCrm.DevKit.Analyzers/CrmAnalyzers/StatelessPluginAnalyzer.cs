using System;
using System.Collections.Immutable;
using System.Linq;
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
    /// Analyzer to detect stateful IPlugin implementations.
    /// IPlugin classes should be stateless - instance fields should only be readonly and assigned in constructor.
    /// Assigning to instance fields/properties during Execute() method is a thread-safety issue.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/develop-iplugin-implementations-stateless
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class StatelessPluginAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.StatelessPlugin); }
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
            context.RegisterSyntaxNodeAction(AnalyzeAssignment, SyntaxKind.SimpleAssignmentExpression);
        }

        private void AnalyzeAssignment(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var cancellationToken = context.CancellationToken;

            if (!(context.Node is AssignmentExpressionSyntax assignmentExpression))
                return;

            // Check if this assignment is inside an IPlugin or CodeActivity class
            var classDeclaration = assignmentExpression.FirstAncestorOrSelf<ClassDeclarationSyntax>();
            if (classDeclaration == null) return;

            var classSymbol = semanticModel.GetDeclaredSymbol(classDeclaration, cancellationToken) as INamedTypeSymbol;
            if (classSymbol == null) return;

            if (!IsPluginOrWorkflowClass(classSymbol))
                return;

            // Check if we're inside the Execute method (not in constructor)
            var methodDeclaration = assignmentExpression.FirstAncestorOrSelf<MethodDeclarationSyntax>();
            if (methodDeclaration == null) return;

            // Skip if we're in a constructor
            var constructorDeclaration = assignmentExpression.FirstAncestorOrSelf<ConstructorDeclarationSyntax>();
            if (constructorDeclaration != null) return;

            // Get the symbol being assigned to
            var leftSymbol = semanticModel.GetSymbolInfo(assignmentExpression.Left, cancellationToken).Symbol;
            if (leftSymbol == null) return;

            // Check if it's a field or property
            if (leftSymbol is IFieldSymbol fieldSymbol)
            {
                // Skip static, const, or readonly fields
                if (fieldSymbol.IsStatic || fieldSymbol.IsConst || fieldSymbol.IsReadOnly)
                    return;

                // Skip if it's not a member of the current class
                if (!SymbolEqualityComparer.Default.Equals(fieldSymbol.ContainingType, classSymbol))
                    return;

                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.StatelessPlugin,
                    assignmentExpression.GetLocation(), fieldSymbol.Name);
            }
            else if (leftSymbol is IPropertySymbol propertySymbol)
            {
                // Skip static properties
                if (propertySymbol.IsStatic)
                    return;

                // Skip if it's not a member of the current class
                if (!SymbolEqualityComparer.Default.Equals(propertySymbol.ContainingType, classSymbol))
                    return;

                // Skip if property doesn't have a setter or is init-only
                if (propertySymbol.SetMethod == null)
                    return;

                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.StatelessPlugin,
                    assignmentExpression.GetLocation(), propertySymbol.Name);
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
