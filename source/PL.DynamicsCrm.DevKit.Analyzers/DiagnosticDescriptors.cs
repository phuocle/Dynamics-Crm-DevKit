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
            title: "UpdateMessageShouldHaveFilteringAttributes title",
            messageFormat: "UpdateMessageShouldHaveFilteringAttributes messageFormat",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "UpdateMessageShouldHaveFilteringAttributes description",
            helpLinkUri: $"{HelpLinkUriRoot}{DiagnosticIdentifiers.UpdateMessageShouldHaveFilteringAttributes}",
            customTags: Array.Empty<string>()
            );

    }
}
