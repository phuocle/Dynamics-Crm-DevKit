using System;
using Microsoft.CodeAnalysis;

namespace DynamicsCrm.DevKit.Analyzers
{
    public static partial class DiagnosticDescriptors
    {
        private static DiagnosticDescriptor CreateDescriptor(
            string id,
            string title,
            string messageFormat,
            DiagnosticSeverity severity,
            string description)
        {
            return new DiagnosticDescriptor(
                id: id,
                title: title,
                messageFormat: messageFormat,
                category: DiagnosticCategories.Category,
                defaultSeverity: severity,
                isEnabledByDefault: true,
                description: $"DynamicsCrm.DevKit: {description}",
                helpLinkUri: $"https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/{id}",
                customTags: Array.Empty<string>()
            );
        }

        /// <summary>DEVKIT1001</summary>
        public static readonly DiagnosticDescriptor UpdateMessageShouldHaveFilteringAttributes = CreateDescriptor(
            "DEVKIT1001",
            "Update message should have filtering attributes",
            "Update message should have filtering attributes",
            DiagnosticSeverity.Error,
            "Update message should have filtering attributes.");

        /// <summary>DEVKIT1001</summary>
        public static readonly DiagnosticDescriptor UpdateMessageShouldNotUseAllAttributes = CreateDescriptor(
            "DEVKIT1001",
            "Update message should not use all attributes",
            "Update message should not use all attributes",
            DiagnosticSeverity.Error,
            "Update message should have filtering attributes.");

        /// <summary>DEVKIT1002</summary>
        public static readonly DiagnosticDescriptor NotUseColumnSetTrue = CreateDescriptor(
            "DEVKIT1002",
            "Don't use Microsoft.Xrm.Sdk.Query.ColumnSet(true)",
            "Don't use Microsoft.Xrm.Sdk.Query.ColumnSet(true)",
            DiagnosticSeverity.Warning,
            "Don't use Microsoft.Xrm.Sdk.Query.ColumnSet(true).");

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PreCreate_PreImage = CreateDescriptor(
            "DEVKIT1003",
            "Plugin Pre Create not support Pre Image",
            "Plugin Pre Create not support Pre Image",
            DiagnosticSeverity.Error,
            "Plugin Pre Create not support Pre Image.");

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PreCreate_PostImage = CreateDescriptor(
            "DEVKIT1003",
            "Plugin Pre Create not support Post Image",
            "Plugin Pre Create not support Post Image",
            DiagnosticSeverity.Error,
            "Plugin Pre Create not support Post Image.");

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PostCreate_PreImage = CreateDescriptor(
            "DEVKIT1003",
            "Plugin Post Create not support Pre Image",
            "Plugin Post Create not support Pre Image",
            DiagnosticSeverity.Error,
            "Plugin Post Create not support Pre Image.");

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PreUpdate_PostImage = CreateDescriptor(
            "DEVKIT1003",
            "Plugin Pre Update not support Post Image",
            "Plugin Pre Update not support Post Image",
            DiagnosticSeverity.Error,
            "Plugin Pre Update not support Post Image.");

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PreDelete_PostImage = CreateDescriptor(
            "DEVKIT1003",
            "Plugin Pre Delete not support Post Image",
            "Plugin Pre Delete not support Post Image",
            DiagnosticSeverity.Error,
            "Plugin Pre Delete not support Post Image.");

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_PostDelete_PostImage = CreateDescriptor(
            "DEVKIT1003",
            "Plugin Post Delete not support Post Image",
            "Plugin Post Delete not support Post Image",
            DiagnosticSeverity.Error,
            "Plugin Post Delete not support Post Image.");

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_NotSupportForPostImage = CreateDescriptor(
            "DEVKIT1003",
            "Plugin does not support Post Image",
            "Plugin message: {0} does not support Post Image",
            DiagnosticSeverity.Error,
            "Plugin does not support Post Image.");

        /// <summary>DEVKIT1003</summary>
        public static readonly DiagnosticDescriptor PluginImage_NotSupportForPreImage = CreateDescriptor(
            "DEVKIT1003",
            "Plugin does not support Pre Image",
            "Plugin message: {0} does not support Pre Image",
            DiagnosticSeverity.Error,
            "Plugin does not support Pre Image.");

        /// <summary>DEVKIT1004</summary>
        public static readonly DiagnosticDescriptor DeprecatedRequest = CreateDescriptor(
            "DEVKIT1004",
            "Use the deprecated message",
            "Use the deprecated message",
            DiagnosticSeverity.Warning,
            "Use the deprecated message.");

        /// <summary>DEVKIT1005</summary>
        public static readonly DiagnosticDescriptor EntityReferenceMaybeNull = CreateDescriptor(
            "DEVKIT1005",
            "Entity Reference maybe null",
            "Entity Reference maybe null",
            DiagnosticSeverity.Error,
            "Entity Reference maybe null.");
    }
}