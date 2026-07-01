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

        /// <summary>DEVKIT1001 - Create messages with missing filtering</summary>
        public static readonly DiagnosticDescriptor CreateMessageShouldHaveFilteringAttributes = CreateDescriptor(
            "DEVKIT1001",
            "Create message should have filtering attributes",
            "Create message should have filtering attributes",
            DiagnosticSeverity.Warning,
            "Create, CreateMultiple, and OnExternalCreated messages should have filtering attributes.");

        /// <summary>DEVKIT1001 - Update messages with missing filtering</summary>
        public static readonly DiagnosticDescriptor UpdateMessageShouldHaveFilteringAttributes = CreateDescriptor(
            "DEVKIT1001",
            "Update message should have filtering attributes",
            "Update message should have filtering attributes",
            DiagnosticSeverity.Error,
            "Update, UpdateMultiple, and OnExternalUpdated messages must have filtering attributes.");

        /// <summary>DEVKIT1001 - Create messages with * filtering</summary>
        public static readonly DiagnosticDescriptor CreateMessageShouldNotUseAllAttributes = CreateDescriptor(
            "DEVKIT1001",
            "Create message should not use all attributes",
            "Create message should not use all attributes",
            DiagnosticSeverity.Warning,
            "Create, CreateMultiple, and OnExternalCreated messages should have specific filtering attributes, not '*'.");

        /// <summary>DEVKIT1001 - Update messages with * filtering</summary>
        public static readonly DiagnosticDescriptor UpdateMessageShouldNotUseAllAttributes = CreateDescriptor(
            "DEVKIT1001",
            "Update message should not use all attributes",
            "Update message should not use all attributes",
            DiagnosticSeverity.Error,
            "Update, UpdateMultiple, and OnExternalUpdated messages must have specific filtering attributes, not '*'.");

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
            DiagnosticSeverity.Info,
            "Use the deprecated message.");

        /// <summary>DEVKIT1005</summary>
        public static readonly DiagnosticDescriptor EntityReferenceMaybeNull = CreateDescriptor(
            "DEVKIT1005",
            "Entity Reference maybe null",
            "Entity Reference maybe null",
            DiagnosticSeverity.Warning,
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

        /// <summary>DEVKIT1009</summary>
        public static readonly DiagnosticDescriptor KeepAliveFalse = CreateDescriptor(
            "DEVKIT1009",
            "Set KeepAlive to false when making external HTTP calls in plug-ins",
            "Set KeepAlive to false when using '{0}' in plug-ins or workflow activities",
            DiagnosticSeverity.Warning,
            "When making external HTTP calls in plug-ins, set KeepAlive to false (HttpClient: DefaultRequestHeaders.ConnectionClose = true, WebRequest: KeepAlive = false) to avoid connection pool issues in the sandbox.");

        /// <summary>DEVKIT1010</summary>
        public static readonly DiagnosticDescriptor HttpTimeout = CreateDescriptor(
            "DEVKIT1010",
            "Set Timeout for external HTTP calls in plug-ins",
            "Set Timeout when using '{0}' in plug-ins or workflow activities",
            DiagnosticSeverity.Warning,
            "When making external HTTP calls in plug-ins, set an explicit Timeout value to avoid blocking the plugin execution. The default timeout is 100 seconds which may exceed the plugin timeout limit.");

        /// <summary>DEVKIT1013</summary>
        public static readonly DiagnosticDescriptor RetrieveMultiplePlugin = CreateDescriptor(
            "DEVKIT1013",
            "Avoid registering plugins on Retrieve and RetrieveMultiple messages",
            "Consider avoiding plugin registration on '{0}' message due to performance impact",
            DiagnosticSeverity.Info,
            "Plugins registered on Retrieve and RetrieveMultiple messages are called very frequently and can significantly impact system performance. Consider using alternate solutions like views, virtual entities, or client-side logic.");

        /// <summary>DEVKIT1011</summary>
        public static readonly DiagnosticDescriptor UseInvalidPluginExecutionException = CreateDescriptor(
            "DEVKIT1011",
            "Use InvalidPluginExecutionException in plug-ins and workflow activities",
            "Use InvalidPluginExecutionException instead of '{0}' in plug-ins and workflow activities",
            DiagnosticSeverity.Warning,
            "Only InvalidPluginExecutionException is properly handled by the platform and shows error messages to users. Other exception types may result in generic error messages or system errors.");

        /// <summary>DEVKIT1012</summary>
        public static readonly DiagnosticDescriptor UseTracingService = CreateDescriptor(
            "DEVKIT1012",
            "Consider using ITracingService in plug-ins",
            "Plug-in class '{0}' does not use ITracingService for debugging and monitoring",
            DiagnosticSeverity.Info,
            "Using ITracingService helps with debugging and monitoring plugin execution. Trace logs are captured in the platform and can be viewed using the Plug-in Trace Log viewer.");

        /// <summary>DEVKIT1016</summary>
        public static readonly DiagnosticDescriptor AvoidRetrieveAsIfPublished = CreateDescriptor(
            "DEVKIT1016",
            "Avoid retrieving unpublished metadata",
            "'{0}' should not use RetrieveAsIfPublished = true; this causes slower performance",
            DiagnosticSeverity.Info,
            "Retrieving unpublished metadata adds overhead to processing and returns metadata that users might not expect. Only use RetrieveAsIfPublished = true when building a metadata editor.");

        /// <summary>DEVKIT1014</summary>
        public static readonly DiagnosticDescriptor AvoidAppDomainEvents = CreateDescriptor(
            "DEVKIT1014",
            "Avoid AppDomain event registration in plug-ins",
            "Do not subscribe to AppDomain.{0} event in plug-ins; this can cause memory leaks and unexpected behavior",
            DiagnosticSeverity.Error,
            "Plugin instances are cached and reused. Subscribing to AppDomain events can cause memory leaks because the event handlers are never removed. This can also cause unexpected behavior when the plugin instance is reused.");

        /// <summary>DEVKIT1015</summary>
        public static readonly DiagnosticDescriptor AvoidGetAwaiterGetResult = CreateDescriptor(
            "DEVKIT1015",
            "Avoid blocking async patterns in plug-ins",
            "Consider alternatives to {0} in plug-ins as it can cause deadlocks in some scenarios",
            DiagnosticSeverity.Info,
            "Using GetAwaiter().GetResult(), .Result, or .Wait() can cause deadlocks. While sometimes necessary in plugins (async Execute not supported), ensure you understand the implications and use ConfigureAwait(false).");

        /// <summary>DEVKIT1017</summary>
        public static readonly DiagnosticDescriptor AvoidConsoleOutput = CreateDescriptor(
            "DEVKIT1017",
            "Avoid Console output in plug-ins and workflow activities",
            "Don't use '{0}' in plug-ins or workflow activities; console output has no effect in sandbox",
            DiagnosticSeverity.Info,
            "Console.Write and Console.WriteLine have no effect in the Dataverse sandbox environment. Use ITracingService instead for debugging and logging.");

        /// <summary>DEVKIT1018</summary>
        public static readonly DiagnosticDescriptor AvoidFileIO = CreateDescriptor(
            "DEVKIT1018",
            "Avoid File/IO operations in plug-ins and workflow activities",
            "Don't use '{0}' in plug-ins or workflow activities; file operations are blocked in sandbox",
            DiagnosticSeverity.Error,
            "System.IO file operations (File.Read, File.Write, FileStream, StreamReader, StreamWriter, etc.) are not allowed in the Dataverse sandbox environment and will throw SecurityException at runtime.");

        /// <summary>DEVKIT1019</summary>
        public static readonly DiagnosticDescriptor PluginDepthCheck = CreateDescriptor(
            "DEVKIT1019",
            "Consider checking context.Depth to prevent infinite loops",
            "Plugin class '{0}' does not check IPluginExecutionContext.Depth which may cause infinite loops",
            DiagnosticSeverity.Warning,
            "Plugins can trigger themselves recursively. Check context.Depth and exit early (e.g., if (context.Depth > 1) return;) to prevent infinite loops and stack overflows.");

        /// <summary>DEVKIT1020</summary>
        public static readonly DiagnosticDescriptor DataProviderDataSource = CreateDescriptor(
            "DEVKIT1020",
            "DataProvider must have DataSource",
            "DataProvider plugin requires DataSource; DataSource cannot be empty",
            DiagnosticSeverity.Error,
            "When using PluginType.DataProvider, the DataSource parameter must be specified with a valid data source name. An empty DataSource will cause the plugin to fail at runtime.");

        /// <summary>DEVKIT1021</summary>
        public static readonly DiagnosticDescriptor UseTracingServiceInCatch = CreateDescriptor(
            "DEVKIT1021",
            "Use ITracingService in catch blocks",
            "Catch block should use ITracingService to log exception details",
            DiagnosticSeverity.Warning,
            "When catching exceptions in plugins or workflow activities, use ITracingService.Trace() to log exception details. This helps with debugging and monitoring execution issues.");
    }
}