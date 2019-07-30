using System;
using Microsoft.CodeAnalysis;

namespace DynamicsCrm.DevKit.Analyzers
{
    public static partial class DiagnosticDescriptors
    {
        private const string DevKit = "DynamicsCrm.DevKit: ";
        private const string HelpLinkUriRoot = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzers#";

        /// <summary>DEVKIT1001</summary>
        public static readonly DiagnosticDescriptor UpdateMessageShouldHaveFilteringAttributes = new DiagnosticDescriptor(
            id: DiagnosticIdentifiers.UpdateMessageShouldHaveFilteringAttributes,
            title: "Update Message Should Have Filtering Attributes",
            messageFormat: DevKit + "Update Message Should Have Filtering Attributes",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: DevKit + "Update Message Should Have Filtering Attributes",
            helpLinkUri: $"{HelpLinkUriRoot}{DiagnosticIdentifiers.UpdateMessageShouldHaveFilteringAttributes}",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1002</summary>
        public static readonly DiagnosticDescriptor NotUseColumnSetTrue = new DiagnosticDescriptor(
            id: DiagnosticIdentifiers.NotUseColumnSetTrue,
            title: "Not Use Microsoft.Xrm.Sdk.Query.ColumnSet(true)",
            messageFormat: DevKit + "Not Use Microsoft.Xrm.Sdk.Query.ColumnSet(true)",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: DevKit + "Not Use Microsoft.Xrm.Sdk.Query.ColumnSet(true)",
            helpLinkUri: $"{HelpLinkUriRoot}{DiagnosticIdentifiers.NotUseColumnSetTrue}",
            customTags: Array.Empty<string>()
            );
    }
}
