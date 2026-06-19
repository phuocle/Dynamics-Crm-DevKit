using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Plugins;
using Microsoft.Xrm.Sdk;

namespace Dev.DevKitV5.Shared.Test
{
    public static class Extension
    {
        public static void SetXrmFakedContextPlugin(this XrmFakedPluginExecutionContext plugin, RemoteExecutionContext remote)
        {
            plugin.UserId = remote.UserId;
            plugin.SharedVariables = remote.SharedVariables;
            plugin.SecondaryEntityName = remote.SecondaryEntityName;
            plugin.RequestId = remote.RequestId;
            plugin.PrimaryEntityName = remote.PrimaryEntityName;
            plugin.PrimaryEntityId = remote.PrimaryEntityId;
            plugin.PreEntityImages = remote.PreEntityImages;
            plugin.PostEntityImages = remote.PostEntityImages;
            plugin.OwningExtension = remote.OwningExtension;
            plugin.OutputParameters = remote.OutputParameters;
            plugin.OrganizationName = remote.OrganizationName;
            plugin.OrganizationId = remote.OrganizationId;
            plugin.OperationId = remote.OperationId;
            plugin.OperationCreatedOn = remote.OperationCreatedOn;
            plugin.Mode = remote.Mode;
            plugin.MessageName = remote.MessageName;
            plugin.IsolationMode = remote.IsolationMode;
            plugin.IsOfflinePlayback = remote.IsOfflinePlayback;
            plugin.IsInTransaction = remote.IsInTransaction;
            plugin.IsExecutingOffline = remote.IsExecutingOffline;
            plugin.InputParameters = remote.InputParameters;
            plugin.InitiatingUserId = remote.InitiatingUserId;
            plugin.Depth = remote.Depth;
            plugin.CorrelationId = remote.CorrelationId;
            plugin.BusinessUnitId = remote.BusinessUnitId;
            plugin.ParentContext = remote.ParentContext;
            plugin.Stage = remote.Stage;
        }

        /// <summary>
        /// Deserialize a RemoteExecutionContext JSON string (from Plugin Trace Log)
        /// and execute the plugin in one call.
        /// <example>
        /// <code>
        /// var json = @"{...}"; // paste from Plugin Trace Log
        /// _context.ExecutePluginFromJson&lt;PreCreateSynchronous&gt;(json);
        /// </code>
        /// </example>
        /// </summary>
        public static void ExecutePluginFromJson<TPlugin>(this IXrmFakedContext context, string json)
            where TPlugin : IPlugin, new()
        {
            var ctx = PluginContextBuilder.FromJson(context, json).Build();
            context.ExecutePluginWith<TPlugin>(ctx);
        }

        /// <summary>
        /// Deserialize a compressed RemoteExecutionContext string and execute the plugin.
        /// </summary>
        public static void ExecutePluginFromCompressedJson<TPlugin>(this IXrmFakedContext context, string compressedBase64)
            where TPlugin : IPlugin, new()
        {
            var ctx = PluginContextBuilder.FromCompressedJson(context, compressedBase64).Build();
            context.ExecutePluginWith<TPlugin>(ctx);
        }
    }
}
