using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Microsoft.Xrm.Sdk.PluginTelemetry;
using NSubstitute;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;

namespace Dev.DevKitV5.ConsoleCore.Lib
{
    public static class Helper
    {
        #region DEBUG WORKFLOW

        //public static void DebugWorkflowWith<T>(string json, ServiceClient service, Dictionary<string, object> inputs = null) where T : CodeActivity, new()
        //{
        //    var remoteExecutionContext = DevKitJson.Deserialize<RemoteExecutionContext>(json);
        //    var instance = new T();
        //    var invoker = new WorkflowInvoker(instance);
        //    invoker.Extensions.Add<ITracingService>(() => Substitute.For<TracingServiceFake>());
        //    invoker.Extensions.Add<IWorkflowContext>(() => CreateMockWorkflowContext());
        //    invoker.Extensions.Add<IOrganizationServiceFactory>(() => CreateMockServiceFactory());
        //    invoker.Extensions.Add<IServiceEndpointNotificationService>(() => Substitute.For<IServiceEndpointNotificationService>());
        //    if (inputs == null) inputs = new Dictionary<string, object>();
        //    invoker.Invoke(inputs);
        //
        //    IWorkflowContext CreateMockWorkflowContext()
        //    {
        //        var workflowContext = Substitute.For<IWorkflowContext>();
        //        workflowContext.BusinessUnitId.Returns(remoteExecutionContext.BusinessUnitId);
        //        workflowContext.CorrelationId.Returns(remoteExecutionContext.CorrelationId);
        //        workflowContext.Depth.Returns(remoteExecutionContext.Depth);
        //        workflowContext.InitiatingUserId.Returns(remoteExecutionContext.InitiatingUserId);
        //        workflowContext.InputParameters.Returns(remoteExecutionContext.InputParameters);
        //        workflowContext.IsExecutingOffline.Returns(remoteExecutionContext.IsExecutingOffline);
        //        workflowContext.IsInTransaction.Returns(remoteExecutionContext.IsInTransaction);
        //        workflowContext.IsOfflinePlayback.Returns(remoteExecutionContext.IsOfflinePlayback);
        //        workflowContext.IsolationMode.Returns(remoteExecutionContext.IsolationMode);
        //        workflowContext.MessageName.Returns(remoteExecutionContext.MessageName);
        //        workflowContext.Mode.Returns(remoteExecutionContext.Mode);
        //        workflowContext.OperationCreatedOn.Returns(remoteExecutionContext.OperationCreatedOn);
        //        workflowContext.OperationId.Returns(remoteExecutionContext.OperationId);
        //        workflowContext.OrganizationId.Returns(remoteExecutionContext.OrganizationId);
        //        workflowContext.OrganizationName.Returns(remoteExecutionContext.OrganizationName);
        //        workflowContext.OutputParameters.Returns(remoteExecutionContext.OutputParameters);
        //        workflowContext.OwningExtension.Returns(remoteExecutionContext.OwningExtension);
        //        if (remoteExecutionContext.ParentContext != null)
        //        {
        //            var parentWorkflowContext = Substitute.For<IWorkflowContext>();
        //            workflowContext.ParentContext.Returns(parentWorkflowContext);
        //        }
        //        workflowContext.PostEntityImages.Returns(remoteExecutionContext.PostEntityImages);
        //        workflowContext.PreEntityImages.Returns(remoteExecutionContext.PreEntityImages);
        //        workflowContext.PrimaryEntityId.Returns(remoteExecutionContext.PrimaryEntityId);
        //        workflowContext.PrimaryEntityName.Returns(remoteExecutionContext.PrimaryEntityName);
        //        workflowContext.RequestId.Returns(remoteExecutionContext.RequestId);
        //        workflowContext.SecondaryEntityName.Returns(remoteExecutionContext.SecondaryEntityName);
        //        workflowContext.SharedVariables.Returns(remoteExecutionContext.SharedVariables);
        //        workflowContext.UserId.Returns(remoteExecutionContext.UserId);
        //        workflowContext.StageName.Returns($"{remoteExecutionContext.Stage}");
        //        return workflowContext;
        //    }
        //    IOrganizationServiceFactory CreateMockServiceFactory()
        //    {
        //        var serviceFactory = Substitute.For<IOrganizationServiceFactory>();
        //        serviceFactory.CreateOrganizationService(Arg.Any<Guid?>()).Returns((param) =>
        //        {
        //            var userId = param.ArgAt<Guid?>(0);
        //            if (userId != null && userId != Guid.Empty)
        //            {
        //                var clone = service.Clone();
        //                clone.CallerId = userId.GetValueOrDefault();
        //                return clone;
        //            }
        //            return service;
        //        });
        //        return serviceFactory;
        //    }
        //}

        #endregion

        #region DEBUG PLUGIN

        public static void DebugPluginWith<T>(string json, ServiceClient service, params object[] constructorArgs) where T : IPlugin
        {
            var pluginExecutionContext = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            var serviceProvider = Substitute.For<IServiceProvider>();
            serviceProvider.Get<IPluginExecutionContext>().Returns(pluginExecutionContext);
            serviceProvider.Get<IServiceEndpointNotificationService>().Returns(Substitute.For<IServiceEndpointNotificationService>());
            serviceProvider.Get<IExecutionContext>().Returns(Substitute.For<IExecutionContext>());
            serviceProvider.Get<ITracingService>().Returns(Substitute.For<TracingServiceFake>());
            serviceProvider.Get<ILogger>().Returns(Substitute.For<ILogger>());
            var factory = Substitute.For<IOrganizationServiceFactory>();
            factory.CreateOrganizationService(Arg.Any<Guid?>()).Returns((param) =>
            {
                var userId = param.ArgAt<Guid?>(0);
                if (userId != null)
                {
                    var clone = service.Clone();
                    clone.CallerId = userId.GetValueOrDefault();
                    return clone;
                }
                return service;
            });
            serviceProvider.Get<IOrganizationServiceFactory>().Returns(factory);
            var pluginObj = Activator.CreateInstance(typeof(T), constructorArgs);
            if (!(pluginObj is T plugin))
                throw new InvalidOperationException($"Could not create instance of type {typeof(T).FullName}.");
            plugin.Execute(serviceProvider);
        }

        #endregion

        #region PUBLIC METHODS

        public static string Compress(string uncompressedString)
        {
            try
            {
                byte[] compressedBytes;
                using (var uncompressedStream = new MemoryStream(Encoding.UTF8.GetBytes(uncompressedString)))
                {
                    using (var compressedStream = new MemoryStream())
                    {
                        using (var compressorStream = new DeflateStream(compressedStream, CompressionLevel.Fastest, true))
                        {
                            uncompressedStream.CopyTo(compressorStream);
                        }
                        compressedBytes = compressedStream.ToArray();
                    }
                }
                return Convert.ToBase64String(compressedBytes);
            }
            catch { return uncompressedString; }
        }
        public static string Decompress(string compressedString)
        {
            byte[] decompressedBytes;
            var compressedStream = new MemoryStream(Convert.FromBase64String(compressedString));
            using (var decompressorStream = new DeflateStream(compressedStream, CompressionMode.Decompress))
            {
                using (var decompressedStream = new MemoryStream())
                {
                    decompressorStream.CopyTo(decompressedStream);
                    decompressedBytes = decompressedStream.ToArray();
                }
            }
            return Encoding.UTF8.GetString(decompressedBytes);
        }

        #endregion
    }
}