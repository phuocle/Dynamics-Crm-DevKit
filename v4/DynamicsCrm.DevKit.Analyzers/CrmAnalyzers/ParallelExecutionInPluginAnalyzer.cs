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
    /// Analyzer to detect parallel execution patterns in plugins and workflow activities.
    /// Parallel execution is not supported and can cause unpredictable behavior.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/business-logic/do-not-use-parallel-execution-in-plug-ins
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class ParallelExecutionInPluginAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.ParallelExecutionInPlugin); }
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
            
            // Register for invocation expressions (method calls like Task.Run, Parallel.ForEach)
            context.RegisterSyntaxNodeAction(AnalyzeInvocation, SyntaxKind.InvocationExpression);
            
            // Register for object creation (new Thread(), new Task())
            context.RegisterSyntaxNodeAction(AnalyzeObjectCreation, SyntaxKind.ObjectCreationExpression);
        }

        private void AnalyzeInvocation(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var cancellationToken = context.CancellationToken;

            if (!(context.Node is InvocationExpressionSyntax invocation))
                return;

            // Check if this is inside an IPlugin or CodeActivity class
            var classDeclaration = invocation.FirstAncestorOrSelf<ClassDeclarationSyntax>();
            if (classDeclaration == null) return;

            var classSymbol = semanticModel.GetDeclaredSymbol(classDeclaration, cancellationToken) as INamedTypeSymbol;
            if (classSymbol == null) return;

            if (!IsPluginOrWorkflowClass(classSymbol))
                return;

            // Get the method symbol being invoked
            var symbolInfo = semanticModel.GetSymbolInfo(invocation, cancellationToken);
            if (!(symbolInfo.Symbol is IMethodSymbol methodSymbol))
                return;

            var containingTypeName = methodSymbol.ContainingType?.ToDisplayString();
            var methodName = methodSymbol.Name;

            // Check for parallel execution patterns
            if (IsParallelExecutionMethod(containingTypeName, methodName))
            {
                var patternName = GetParallelPatternName(containingTypeName, methodName);
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.ParallelExecutionInPlugin,
                    invocation.GetLocation(), patternName);
            }
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

            // Check for Thread instantiation
            if (typeName == "System.Threading.Thread")
            {
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.ParallelExecutionInPlugin,
                    objectCreation.GetLocation(), "new Thread()");
            }
        }

        private bool IsParallelExecutionMethod(string containingTypeName, string methodName)
        {
            // Task.Run, Task.Factory.StartNew
            if (containingTypeName == "System.Threading.Tasks.Task" && (methodName == "Run" || methodName == "StartNew"))
                return true;

            if (containingTypeName == "System.Threading.Tasks.TaskFactory" && methodName == "StartNew")
                return true;

            // Parallel.For, Parallel.ForEach, Parallel.Invoke
            if (containingTypeName == "System.Threading.Tasks.Parallel" && 
                (methodName == "For" || methodName == "ForEach" || methodName == "Invoke"))
                return true;

            // ThreadPool.QueueUserWorkItem
            if (containingTypeName == "System.Threading.ThreadPool" && methodName == "QueueUserWorkItem")
                return true;

            return false;
        }

        private string GetParallelPatternName(string containingTypeName, string methodName)
        {
            if (containingTypeName == "System.Threading.Tasks.Task")
                return $"Task.{methodName}()";
            if (containingTypeName == "System.Threading.Tasks.TaskFactory")
                return "Task.Factory.StartNew()";
            if (containingTypeName == "System.Threading.Tasks.Parallel")
                return $"Parallel.{methodName}()";
            if (containingTypeName == "System.Threading.ThreadPool")
                return "ThreadPool.QueueUserWorkItem()";
            return $"{methodName}()";
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
