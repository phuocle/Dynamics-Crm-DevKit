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
    /// Analyzer to detect usage of RetrieveAsIfPublished = true on metadata requests.
    /// Retrieving unpublished metadata causes slower performance and can cause user confusion.
    /// 
    /// Based on Microsoft best practices:
    /// https://learn.microsoft.com/en-us/power-apps/developer/data-platform/best-practices/work-with-metadata/retrieve-published-metadata
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class RetrieveAsIfPublishedAnalyzer : BaseDiagnosticAnalyzer
    {
        private const string RetrieveAsIfPublishedProperty = "RetrieveAsIfPublished";
        
        /// <summary>
        /// Metadata request types that support RetrieveAsIfPublished property.
        /// </summary>
        private static readonly HashSet<string> MetadataRequestTypes = new HashSet<string>
        {
            "Microsoft.Xrm.Sdk.Messages.RetrieveAllEntitiesRequest",
            "Microsoft.Xrm.Sdk.Messages.RetrieveAllOptionSetsRequest",
            "Microsoft.Xrm.Sdk.Messages.RetrieveAttributeRequest",
            "Microsoft.Xrm.Sdk.Messages.RetrieveEntityRequest",
            "Microsoft.Xrm.Sdk.Messages.RetrieveOptionSetRequest",
            "Microsoft.Xrm.Sdk.Messages.RetrieveRelationshipRequest",
            "Microsoft.Xrm.Sdk.Messages.RetrieveEntityKeyRequest"
        };

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.AvoidRetrieveAsIfPublished); }
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
            
            // Register for assignment expressions (RetrieveAsIfPublished = true)
            context.RegisterSyntaxNodeAction(AnalyzeAssignment, SyntaxKind.SimpleAssignmentExpression);
            
            // Register for object initializers
            context.RegisterSyntaxNodeAction(AnalyzeObjectInitializer, SyntaxKind.ObjectCreationExpression);
        }

        /// <summary>
        /// Analyzes assignment expressions like: request.RetrieveAsIfPublished = true
        /// </summary>
        private void AnalyzeAssignment(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is AssignmentExpressionSyntax assignment))
                return;

            // Check if left side is a member access to RetrieveAsIfPublished
            if (!(assignment.Left is MemberAccessExpressionSyntax memberAccess))
                return;

            if (memberAccess.Name.Identifier.Text != RetrieveAsIfPublishedProperty)
                return;

            // Check if right side is 'true'
            if (!IsLiteralTrue(assignment.Right))
                return;

            // Verify the type of the object being accessed
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var symbolInfo = semanticModel.GetSymbolInfo(memberAccess.Expression, context.CancellationToken);
            var typeSymbol = (symbolInfo.Symbol as ILocalSymbol)?.Type 
                          ?? (symbolInfo.Symbol as IFieldSymbol)?.Type
                          ?? (symbolInfo.Symbol as IPropertySymbol)?.Type
                          ?? (symbolInfo.Symbol as IParameterSymbol)?.Type;

            if (typeSymbol != null && MetadataRequestTypes.Contains(typeSymbol.ToDisplayString()))
            {
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.AvoidRetrieveAsIfPublished,
                    assignment.GetLocation(), typeSymbol.Name);
            }
        }

        /// <summary>
        /// Analyzes object initializers like: new RetrieveEntityRequest { RetrieveAsIfPublished = true }
        /// </summary>
        private void AnalyzeObjectInitializer(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is ObjectCreationExpressionSyntax objectCreation))
                return;

            // Check if this is a metadata request type
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var typeInfo = semanticModel.GetTypeInfo(objectCreation, context.CancellationToken);
            var typeName = typeInfo.Type?.ToDisplayString();

            if (typeName == null || !MetadataRequestTypes.Contains(typeName))
                return;

            // Check for object initializer
            if (objectCreation.Initializer == null)
                return;

            foreach (var expression in objectCreation.Initializer.Expressions)
            {
                if (!(expression is AssignmentExpressionSyntax initAssignment))
                    continue;

                // Check if it's RetrieveAsIfPublished = true
                if (initAssignment.Left is IdentifierNameSyntax identifier &&
                    identifier.Identifier.Text == RetrieveAsIfPublishedProperty &&
                    IsLiteralTrue(initAssignment.Right))
                {
                    DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.AvoidRetrieveAsIfPublished,
                        initAssignment.GetLocation(), typeInfo.Type.Name);
                    return; // Only report once per object creation
                }
            }
        }

        /// <summary>
        /// Checks if an expression is the literal 'true'.
        /// </summary>
        private static bool IsLiteralTrue(ExpressionSyntax expression)
        {
            return expression is LiteralExpressionSyntax literal && 
                   literal.IsKind(SyntaxKind.TrueLiteralExpression);
        }
    }
}
