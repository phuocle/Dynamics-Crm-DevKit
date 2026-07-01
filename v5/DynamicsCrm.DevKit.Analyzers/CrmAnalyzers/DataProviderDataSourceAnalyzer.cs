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
    /// Analyzer to detect when CrmPluginRegistration with PluginType.DataProvider has empty or missing DataSource.
    /// DataProvider plugins require a valid DataSource to function correctly at runtime.
    /// </summary>
    [DiagnosticAnalyzer(LanguageNames.CSharp)]
    public class DataProviderDataSourceAnalyzer : BaseDiagnosticAnalyzer
    {
        public override ImmutableArray<DiagnosticDescriptor> SupportedDiagnostics
        {
            get { return ImmutableArray.Create(DiagnosticDescriptors.DataProviderDataSource); }
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
            
            // Register for attribute syntax
            context.RegisterSyntaxNodeAction(AnalyzeAttribute, SyntaxKind.Attribute);
        }

        private void AnalyzeAttribute(SyntaxNodeAnalysisContext context)
        {
            var semanticModel = context.SemanticModel;
            if (semanticModel == null) return;

            var cancellationToken = context.CancellationToken;

            if (!(context.Node is AttributeSyntax attribute))
                return;

            // Check if this is CrmPluginRegistration attribute
            var attributeName = attribute.Name.ToString();
            if (!attributeName.Contains("CrmPluginRegistration"))
                return;

            if (attribute.ArgumentList == null || attribute.ArgumentList.Arguments.Count < 3)
                return;

            // Check if PluginType is DataProvider
            var isDataProvider = false;
            AttributeArgumentSyntax dataSourceArgument = null;

            foreach (var arg in attribute.ArgumentList.Arguments)
            {
                // Check PluginType (can be positional 3rd argument or named)
                if (arg.NameEquals != null && arg.NameEquals.Name.Identifier.Text == "PluginType")
                {
                    if (IsDataProviderPluginType(arg, semanticModel, cancellationToken))
                    {
                        isDataProvider = true;
                    }
                }
                else if (arg.NameEquals == null && arg.NameColon == null)
                {
                    // Positional argument - check if 3rd position and is DataProvider
                    var index = attribute.ArgumentList.Arguments.IndexOf(arg);
                    if (index == 2) // 0-indexed, so 3rd position
                    {
                        if (IsDataProviderPluginType(arg, semanticModel, cancellationToken))
                        {
                            isDataProvider = true;
                        }
                    }
                }

                // Check DataSource named argument
                if (arg.NameEquals != null && arg.NameEquals.Name.Identifier.Text == "DataSource")
                {
                    dataSourceArgument = arg;
                }
            }

            if (!isDataProvider)
                return;

            // If DataProvider is used, check DataSource
            if (dataSourceArgument == null)
            {
                // DataSource is missing - report on the PluginType argument or attribute
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.DataProviderDataSource,
                    attribute.GetLocation());
                return;
            }

            // Check if DataSource is empty string
            var dataSourceValue = GetStringValue(dataSourceArgument, semanticModel, cancellationToken);
            if (string.IsNullOrEmpty(dataSourceValue))
            {
                // Highlight the DataSource argument
                DiagnosticHelpers.ReportDiagnostic(context, DiagnosticDescriptors.DataProviderDataSource,
                    dataSourceArgument.GetLocation());
            }
        }

        private bool IsDataProviderPluginType(AttributeArgumentSyntax argument, SemanticModel semanticModel, System.Threading.CancellationToken cancellationToken)
        {
            // Check for PluginType.DataProvider
            if (argument.Expression is MemberAccessExpressionSyntax memberAccess)
            {
                var memberName = memberAccess.Name.Identifier.Text;
                
                // Check if member name is DataProvider (covers both PluginType.DataProvider and fully qualified versions)
                if (memberName == "DataProvider")
                {
                    return true;
                }
            }

            return false;
        }

        private string GetStringValue(AttributeArgumentSyntax argument, SemanticModel semanticModel, System.Threading.CancellationToken cancellationToken)
        {
            // Handle string literal
            if (argument.Expression is LiteralExpressionSyntax literal &&
                literal.IsKind(SyntaxKind.StringLiteralExpression))
            {
                return literal.Token.ValueText;
            }

            // Handle constant reference
            var constantValue = semanticModel.GetConstantValue(argument.Expression, cancellationToken);
            if (constantValue.HasValue && constantValue.Value is string strValue)
            {
                return strValue;
            }

            return null;
        }
    }
}
