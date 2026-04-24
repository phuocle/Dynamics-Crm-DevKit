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
using Microsoft.CodeAnalysis.Text;

namespace DynamicsCrm.DevKit.Analyzers.CrmAnalyzers
{
    /// <summary>
    /// Analyzer to detect File/IO operations in plugins and workflow activities.
    /// System.IO operations are blocked in the Dataverse sandbox environment.
    /// 
    /// Sandbox limitation - will throw SecurityException at runtime.
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class FileIOAnalyzer : BaseDiagnosticAnalyzer
    {
        /// <summary>
        /// System.IO types that are blocked in sandbox
        /// </summary>
        private static readonly HashSet<string> BlockedTypes = new HashSet<string>
        {
            "System.IO.File",
            "System.IO.FileInfo",
            "System.IO.FileStream",
            "System.IO.StreamReader",
            "System.IO.StreamWriter",
            "System.IO.BinaryReader",
            "System.IO.BinaryWriter",
            "System.IO.Directory",
            "System.IO.DirectoryInfo",
            "System.IO.Path",
            "System.IO.FileSystemWatcher"
        };

        /// <summary>
        /// Specific methods on allowed types that are blocked
        /// </summary>
        private static readonly HashSet<string> BlockedMethods = new HashSet<string>
        {
            "System.IO.File.ReadAllText",
            "System.IO.File.ReadAllBytes",
            "System.IO.File.ReadAllLines",
            "System.IO.File.WriteAllText",
            "System.IO.File.WriteAllBytes",
            "System.IO.File.WriteAllLines",
            "System.IO.File.Open",
            "System.IO.File.Create",
            "System.IO.File.Delete",
            "System.IO.File.Copy",
            "System.IO.File.Move",
            "System.IO.File.Exists",
            "System.IO.File.AppendAllText",
            "System.IO.File.AppendAllLines",
            "System.IO.Directory.CreateDirectory",
            "System.IO.Directory.Delete",
            "System.IO.Directory.Exists",
            "System.IO.Directory.GetFiles",
            "System.IO.Directory.GetDirectories"
        };

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.AvoidFileIO); }
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
            
            // Register for invocation expressions (method calls like File.ReadAllText)
            context.RegisterSyntaxNodeAction(AnalyzeInvocation, SyntaxKind.InvocationExpression);
            
            // Register for object creation (new FileStream(), new StreamReader())
            context.RegisterSyntaxNodeAction(AnalyzeObjectCreation, SyntaxKind.ObjectCreationExpression);
        }

        private void AnalyzeInvocation(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            if (!(context.Node is InvocationExpressionSyntax invocation))
                return;

            // Check if this is inside an IPlugin or CodeActivity class
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(invocation, semanticModel, context.CancellationToken))
                return;

            // Get the method symbol being invoked
            var symbolInfo = semanticModel.GetSymbolInfo(invocation, context.CancellationToken);
            if (!(symbolInfo.Symbol is IMethodSymbol methodSymbol))
                return;

            var containingTypeName = methodSymbol.ContainingType?.ToDisplayString();
            var fullMethodName = $"{containingTypeName}.{methodSymbol.Name}";

            // Check for blocked types or methods
            if (BlockedTypes.Contains(containingTypeName) || BlockedMethods.Contains(fullMethodName))
            {
                var patternName = GetPatternName(containingTypeName, methodSymbol.Name);
                // Highlight only the method name (e.g., File.ReadAllText, not the entire call)
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.AvoidFileIO,
                    invocation.Expression.GetLocation(), patternName);
            }
        }

        private void AnalyzeObjectCreation(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            if (!(context.Node is ObjectCreationExpressionSyntax objectCreation))
                return;

            // Check if this is inside an IPlugin or CodeActivity class
            if (!AnalyzerHelper.IsInsidePluginOrWorkflow(objectCreation, semanticModel, context.CancellationToken))
                return;

            // Get the type being created
            var typeInfo = semanticModel.GetTypeInfo(objectCreation, context.CancellationToken);
            var typeName = typeInfo.Type?.ToDisplayString();

            // Check for blocked types
            if (typeName != null && BlockedTypes.Contains(typeName))
            {
                // Highlight only 'new TypeName' (excluding arguments) to reduce visual noise
                var startSpan = objectCreation.NewKeyword.SpanStart;
                var endSpan = objectCreation.Type.Span.End;
                var highlightSpan = TextSpan.FromBounds(startSpan, endSpan);
                var highlightLocation = Location.Create(objectCreation.SyntaxTree, highlightSpan);
                
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.AvoidFileIO,
                    highlightLocation, $"new {GetShortTypeName(typeName)}()");
            }
        }

        private static string GetPatternName(string containingTypeName, string methodName)
        {
            var shortName = GetShortTypeName(containingTypeName);
            return $"{shortName}.{methodName}()";
        }

        private static string GetShortTypeName(string fullTypeName)
        {
            if (fullTypeName == null) return "Unknown";
            var lastDot = fullTypeName.LastIndexOf('.');
            return lastDot >= 0 ? fullTypeName.Substring(lastDot + 1) : fullTypeName;
        }
    }
}
