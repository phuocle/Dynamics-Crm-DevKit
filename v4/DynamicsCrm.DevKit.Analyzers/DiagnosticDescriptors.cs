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
            "Create/Update message should have filtering attributes",
            "Create/Update message should have filtering attributes",
            DiagnosticSeverity.Error,
            "Create, CreateMultiple, OnExternalCreated, Update, UpdateMultiple, and OnExternalUpdated messages should have filtering attributes.");

        /// <summary>DEVKIT1001</summary>
        public static readonly DiagnosticDescriptor UpdateMessageShouldNotUseAllAttributes = CreateDescriptor(
            "DEVKIT1001",
            "Create/Update message should not use all attributes",
            "Create/Update message should not use all attributes",
            DiagnosticSeverity.Error,
            "Create, CreateMultiple, OnExternalCreated, Update, UpdateMultiple, and OnExternalUpdated messages should have specific filtering attributes, not '*'.");

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

        /// <summary>DEVKIT1006</summary>
        public static readonly DiagnosticDescriptor BatchRequestInPlugin = CreateDescriptor(
            "DEVKIT1006",
            "Don't use batch request types in plug-ins and workflow activities",
            "Don't use '{0}' in plug-ins or workflow activities",
            DiagnosticSeverity.Warning,
            "Batch request types (ExecuteMultipleRequest, ExecuteTransactionRequest, CreateMultipleRequest, UpdateMultipleRequest, UpsertMultipleRequest) should not be used within plug-ins or workflow activities as they can cause performance issues and timeout errors.");

        /// <summary>DEVKIT1007</summary>
        public static readonly DiagnosticDescriptor StatelessPlugin = CreateDescriptor(
            "DEVKIT1007",
            "IPlugin implementations should be stateless",
            "Don't assign to instance member '{0}' during plug-in execution",
            DiagnosticSeverity.Error,
            "IPlugin implementations should be stateless. Assigning to instance fields or properties during Execute() method can cause thread-safety issues and data inconsistencies.");

        /// <summary>DEVKIT1008</summary>
        public static readonly DiagnosticDescriptor ParallelExecutionInPlugin = CreateDescriptor(
            "DEVKIT1008",
            "Don't use parallel execution in plug-ins and workflow activities",
            "Don't use '{0}' in plug-ins or workflow activities",
            DiagnosticSeverity.Error,
            "Parallel execution patterns (Task.Run, Parallel.ForEach, Thread, ThreadPool) are not supported in plug-ins and workflow activities. Multi-threading can cause unpredictable behavior and is not allowed in the sandbox.");
    }
}