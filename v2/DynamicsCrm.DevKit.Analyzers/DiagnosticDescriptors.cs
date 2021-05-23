using System;
using Microsoft.CodeAnalysis;

namespace DynamicsCrm.DevKit.Analyzers
{
    public static partial class DiagnosticDescriptors
    {
        private const string HelpLinkUriRoot = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzers#";

        /// <summary>DEVKIT1001</summary>
        public static readonly DiagnosticDescriptor UpdateMessageShouldHaveFilteringAttributes = new DiagnosticDescriptor(
            id: "DEVKIT1001",
            title: "Update Message Should Have Filtering Attributes",
            messageFormat: "Update Message Should Have Filtering Attributes",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Update Message Should Have Filtering Attributes.",
            helpLinkUri: $"{HelpLinkUriRoot}{DiagnosticIdentifiers.UpdateMessageShouldHaveFilteringAttributes}",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1002</summary>
        public static readonly DiagnosticDescriptor NotUseColumnSetTrue = new DiagnosticDescriptor(
            id: "DEVKIT1002",
            title: "Not Use Microsoft.Xrm.Sdk.Query.ColumnSet(true)",
            messageFormat: "Not Use Microsoft.Xrm.Sdk.Query.ColumnSet(true)",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Not Use Microsoft.Xrm.Sdk.Query.ColumnSet(true).",
            helpLinkUri: $"{HelpLinkUriRoot}{DiagnosticIdentifiers.NotUseColumnSetTrue}",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PreCreate_PreImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin Pre Create not support Pre Image",
            messageFormat: "Plugin Pre Create not support Pre Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin Pre Create not support Pre Image.",
            helpLinkUri: $"{HelpLinkUriRoot}{DiagnosticIdentifiers.PluginImage}",
            customTags: Array.Empty<string>()
            );
        public static readonly DiagnosticDescriptor PluginImage_PreCreate_PostImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin Pre Create not support Post Image",
            messageFormat: "Plugin Pre Create not support Post Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin Pre Create not support Post Image.",
            helpLinkUri: $"{HelpLinkUriRoot}{DiagnosticIdentifiers.PluginImage}",
            customTags: Array.Empty<string>()
            );
        public static readonly DiagnosticDescriptor PluginImage_PostCreate_PreImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin Post Create not support Pre Image",
            messageFormat: "Plugin Post Create not support Pre Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin Pre Create not support Post Image.",
            helpLinkUri: $"{HelpLinkUriRoot}{DiagnosticIdentifiers.PluginImage}",
            customTags: Array.Empty<string>()
            );
    }
}
