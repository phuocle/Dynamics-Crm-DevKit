using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Diagnostics;

namespace DynamicsCrm.DevKit.Analyzers
{
    public static class DiagnosticHelpers
    {
        #region SymbolAnalysisContext
        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SymbolAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxNode node,
            params object[] messageArgs)
        {
            ReportDiagnostic(
                context: context,
                descriptor: descriptor,
                location: node.GetLocation(),
                messageArgs: messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SymbolAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxToken token,
            params object[] messageArgs)
        {
            ReportDiagnostic(
                context: context,
                descriptor: descriptor,
                location: token.GetLocation(),
                messageArgs: messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SymbolAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxTrivia trivia,
            params object[] messageArgs)
        {
            ReportDiagnostic(
                context: context,
                descriptor: descriptor,
                location: trivia.GetLocation(),
                messageArgs: messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SymbolAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SymbolAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            IEnumerable<Location> additionalLocations,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                additionalLocations: additionalLocations,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SymbolAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            ImmutableDictionary<string, string> properties,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                properties: properties,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SymbolAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            IEnumerable<Location> additionalLocations,
            ImmutableDictionary<string, string> properties,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                additionalLocations: additionalLocations,
                properties: properties,
                messageArgs: messageArgs));
        }
        #endregion SymbolAnalysisContext

        #region SyntaxNodeAnalysisContext
        [ExcludeFromCodeCoverage]
        public static void ReportDiagnosticIfNotSuppressed(
            SyntaxNodeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxNode node,
            params object[] messageArgs)
        {
            ReportDiagnostic(context, descriptor, node, messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxNodeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxNode node,
            params object[] messageArgs)
        {
            ReportDiagnostic(
                context: context,
                descriptor: descriptor,
                location: node.GetLocation(),
                messageArgs: messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxNodeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxToken token,
            params object[] messageArgs)
        {
            ReportDiagnostic(
                context: context,
                descriptor: descriptor,
                location: token.GetLocation(),
                messageArgs: messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxNodeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxTrivia trivia,
            params object[] messageArgs)
        {
            ReportDiagnostic(
                context: context,
                descriptor: descriptor,
                location: trivia.GetLocation(),
                messageArgs: messageArgs);
        }

        public static void ReportDiagnostic(
            SyntaxNodeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxNodeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            IEnumerable<Location> additionalLocations,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                additionalLocations: additionalLocations,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxNodeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            ImmutableDictionary<string, string> properties,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                properties: properties,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxNodeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            IEnumerable<Location> additionalLocations,
            ImmutableDictionary<string, string> properties,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                additionalLocations: additionalLocations,
                properties: properties,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportToken(SyntaxNodeAnalysisContext context, DiagnosticDescriptor descriptor, SyntaxToken token, params object[] messageArgs)
        {
            if (!token.IsMissing)
                ReportDiagnostic(context, descriptor, token, messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportNode(SyntaxNodeAnalysisContext context, DiagnosticDescriptor descriptor, SyntaxNode node, params object[] messageArgs)
        {
            if (!node.IsMissing)
                ReportDiagnostic(context, descriptor, node, messageArgs);
        }
        #endregion SyntaxNodeAnalysisContext

        #region SyntaxTreeAnalysisContext
        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxTreeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxNode node,
            params object[] messageArgs)
        {
            ReportDiagnostic(
                context: context,
                descriptor: descriptor,
                location: node.GetLocation(),
                messageArgs: messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxTreeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxToken token,
            params object[] messageArgs)
        {
            ReportDiagnostic(
                context: context,
                descriptor: descriptor,
                location: token.GetLocation(),
                messageArgs: messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxTreeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            SyntaxTrivia trivia,
            params object[] messageArgs)
        {
            ReportDiagnostic(
                context: context,
                descriptor: descriptor,
                location: trivia.GetLocation(),
                messageArgs: messageArgs);
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxTreeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxTreeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            IEnumerable<Location> additionalLocations,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                additionalLocations: additionalLocations,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxTreeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            ImmutableDictionary<string, string> properties,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                properties: properties,
                messageArgs: messageArgs));
        }

        [ExcludeFromCodeCoverage]
        public static void ReportDiagnostic(
            SyntaxTreeAnalysisContext context,
            DiagnosticDescriptor descriptor,
            Location location,
            IEnumerable<Location> additionalLocations,
            ImmutableDictionary<string, string> properties,
            params object[] messageArgs)
        {
            context.ReportDiagnostic(Diagnostic.Create(
                descriptor: descriptor,
                location: location,
                additionalLocations: additionalLocations,
                properties: properties,
                messageArgs: messageArgs));
        }
        #endregion SyntaxTreeAnalysisContext
    }
}
