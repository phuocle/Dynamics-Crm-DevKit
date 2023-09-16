using System;
using Microsoft.CodeAnalysis;

namespace DynamicsCrm.DevKit.Analyzers
{
    public static partial class DiagnosticDescriptors
    {
        //private const string HelpLinkUriRoot = "https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzers#";
        /// <summary>DEVKIT1001</summary>
        public static readonly DiagnosticDescriptor UpdateMessageShouldHaveFilteringAttributes = new DiagnosticDescriptor(
            id: "DEVKIT1001",
            title: "Update message should have filtering attributes",
            messageFormat: "Update message should have filtering attributes",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Update message should have filtering attributes.",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Update-Message-Should-Have-Filtering-Attributes",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1002</summary>
        public static readonly DiagnosticDescriptor NotUseColumnSetTrue = new DiagnosticDescriptor(
            id: "DEVKIT1002",
            title: "Not use Microsoft.Xrm.Sdk.Query.ColumnSet(true)",
            messageFormat: "Not use Microsoft.Xrm.Sdk.Query.ColumnSet(true)",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Not use Microsoft.Xrm.Sdk.Query.ColumnSet(true).",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Not-Use-ColumnSet-True",
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
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Plugin-Support-Pre-Post-Images",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PreCreate_PostImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin Pre Create not support Post Image",
            messageFormat: "Plugin Pre Create not support Post Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin Pre Create not support Post Image.",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Plugin-Support-Pre-Post-Images",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PostCreate_PreImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin Post Create not support Pre Image",
            messageFormat: "Plugin Post Create not support Pre Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin Pre Create not support Post Image.",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Plugin-Support-Pre-Post-Images",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PreUpdate_PostImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin Pre Update not support Post Image",
            messageFormat: "Plugin Pre Update not support Post Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin Pre Update not support Post Image.",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Plugin-Support-Pre-Post-Images",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PreDelete_PostImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin Pre Delete not support Post Image",
            messageFormat: "Plugin Pre Delete not support Post Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin Pre Delete not support Post Image.",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Plugin-Support-Pre-Post-Images",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PostDelete_PostImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin Post Delete not support Post Image",
            messageFormat: "Plugin Post Delete not support Post Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin Post Delete not support Post Image.",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Plugin-Support-Pre-Post-Images",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_NotSupportForPostImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin does not support Post Image",
            messageFormat: "Plugin message: {0} does not support Post Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin does not support Post Image.",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Plugin-Support-Pre-Post-Images",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_NotSupportForPreImage = new DiagnosticDescriptor(
            id: "DEVKIT1003",
            title: "Plugin does not support Pre Image",
            messageFormat: "Plugin message: {0} does not support Pre Image",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Error,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Plugin does not support Pre Image.",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Plugin-Support-Pre-Post-Images",
            customTags: Array.Empty<string>()
            );

        /// <summary>DEVKIT1004</summary>
        public static readonly DiagnosticDescriptor DeprecatedRequest = new DiagnosticDescriptor(
            id: "DEVKIT1004",
            title: "Use the deprecated message",
            messageFormat: "Use the deprecated message",
            category: DiagnosticCategories.Require,
            defaultSeverity: DiagnosticSeverity.Warning,
            isEnabledByDefault: true,
            description: "DynamicsCrm.DevKit: Use the deprecated message.",
            helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Analyzer-Use-Deprecated-Messages",
            customTags: Array.Empty<string>()
            );
    }
}