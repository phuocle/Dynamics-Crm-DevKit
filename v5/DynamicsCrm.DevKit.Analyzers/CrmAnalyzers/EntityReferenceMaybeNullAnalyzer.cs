using System;
using System.Collections.Generic;
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
    /// Analyzer to detect access to EntityReference properties (Id, Name, LogicalName) 
    /// without null checking when the EntityReference might be null.
    /// 
    /// Based on Microsoft documentation:
    /// https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.sdk.entity
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    internal class EntityReferenceMaybeNullAnalyzer : BaseDiagnosticAnalyzer
    {
        private const string EntityReferenceTypeName = "Microsoft.Xrm.Sdk.EntityReference";

        /// <summary>
        /// Properties on EntityReference that commonly throw NullReferenceException.
        /// </summary>
        private static readonly HashSet<string> EntityReferenceProperties = new HashSet<string>
        {
            "Id",
            "Name",
            "LogicalName"
        };

        /// <summary>
        /// Types that indicate the result is being used in a nullable context.
        /// </summary>
        private static readonly HashSet<string> NullableTargetTypes = new HashSet<string>
        {
            "System.Guid?",
            "string"
        };

        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.EntityReferenceMaybeNull); }
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
            
            context.RegisterSyntaxNodeAction(AnalyzeEntityReferenceAccess, SyntaxKind.SimpleMemberAccessExpression);
        }

        /// <summary>
        /// Analyzes member access on EntityReference for potential null dereference.
        /// </summary>
        private void AnalyzeEntityReferenceAccess(SyntaxNodeAnalysisContext context)
        {
            if (!(context.Node is MemberAccessExpressionSyntax memberAccess))
                return;

            // Check if accessing Id, Name, or LogicalName
            var propertyName = memberAccess.Name?.ToString();
            if (propertyName == null || !EntityReferenceProperties.Contains(propertyName))
                return;

            var semanticModel = context.SemanticModel;
            if (semanticModel == null || memberAccess.Expression == null)
                return;

            // Check if the expression type is EntityReference
            var typeInfo = semanticModel.GetTypeInfo(memberAccess.Expression, context.CancellationToken);
            if (typeInfo.Type?.ToDisplayString() != EntityReferenceTypeName)
                return;

            // Skip if this is on the left side of an assignment (being assigned to)
            if (IsLeftSideOfAssignment(memberAccess))
                return;

            // Report if used in binary expression or string interpolation (common null dereference patterns)
            if (IsInsideBinaryOrInterpolation(memberAccess))
            {
                ReportDiagnostic(context, memberAccess.Name.GetLocation());
                return;
            }

            // Report if being converted to nullable types
            var convertedType = semanticModel.GetTypeInfo(memberAccess).ConvertedType?.ToDisplayString();
            if (convertedType != null && NullableTargetTypes.Contains(convertedType))
            {
                ReportDiagnostic(context, memberAccess.Name.GetLocation());
            }
        }

        /// <summary>
        /// Checks if the member access is on the left side of an assignment.
        /// </summary>
        private static bool IsLeftSideOfAssignment(MemberAccessExpressionSyntax memberAccess)
        {
            var assignment = memberAccess.FirstAncestorOrSelf<AssignmentExpressionSyntax>();
            if (assignment == null)
                return false;

            return assignment.Left.ToFullString() == memberAccess.ToFullString();
        }

        /// <summary>
        /// Checks if the expression is inside a binary expression or string interpolation.
        /// These are common patterns where null dereference occurs.
        /// </summary>
        private static bool IsInsideBinaryOrInterpolation(MemberAccessExpressionSyntax memberAccess)
        {
            return memberAccess.Ancestors().Any(ancestor => 
                ancestor is BinaryExpressionSyntax || 
                ancestor is InterpolatedStringExpressionSyntax);
        }

        private static void ReportDiagnostic(SyntaxNodeAnalysisContext context, Location location)
        {
            DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.EntityReferenceMaybeNull, location);
        }
    }
}