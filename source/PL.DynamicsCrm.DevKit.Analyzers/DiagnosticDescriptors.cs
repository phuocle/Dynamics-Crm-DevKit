using System;
using Microsoft.CodeAnalysis;

namespace PL.DynamicsCrm.DevKit.Analyzers
{
    public static partial class DiagnosticDescriptors
    {
        private const string HelpLinkUriRoot = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzers#s";

        /// <summary>DEVKIT1001</summary>
        public static readonly DiagnosticDescriptor UpdateMessageShouldHaveFilteringAttributes = new DiagnosticDescriptor(
            id: DiagnosticIdentifiers.UpdateMessageShouldHaveFilteringAttributes,
            title: "Update Message Should Have Filtering Attributes",
            messageFormat: "Update Message Should Have Filtering Attributes {0}",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "Update Message Should Have Filtering Attributes [[description]]",
            helpLinkUri: $"{HelpLinkUriRoot}{DiagnosticIdentifiers.UpdateMessageShouldHaveFilteringAttributes}",
            customTags: Array.Empty<string>()
            );

    }
}
