using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Extensions;
using Microsoft.Xrm.Sdk.PluginTelemetry;
using NSubstitute;
//using System.Activities;
using System;
using System.Collections.Generic;

//using Microsoft.Xrm.Sdk.Workflow;

namespace Dev.AllInOne.ConsoleCore.Lib
{
    public static class Helper
    {
        //#region DEBUG WORKFLOW

        //public static void DebugWorkflowWith<T>(string json, ServiceClient service, Dictionary<string, object> inputs = null) where T : CodeActivity, new()
        //{
        //    if (string.IsNullOrWhiteSpace(json)) throw new ArgumentException("Execution context JSON cannot be null or empty.", nameof(json));
        //    if (service == null) throw new ArgumentNullException(nameof(service));

        //    var executionContext = DevKitJson.DeserializeContext7(json);
        //    var invoker = new WorkflowInvoker(new T());
        //    invoker.Extensions.Add<ITracingService>(() => new TracingServiceFake());
        //    invoker.Extensions.Add<IWorkflowContext>(() => CreateWorkflowContext(executionContext));
        //    invoker.Extensions.Add<IOrganizationServiceFactory>(() => CreateServiceFactory());
        //    invoker.Extensions.Add<IServiceEndpointNotificationService>(() => Substitute.For<IServiceEndpointNotificationService>());
        //    invoker.Invoke(inputs ?? new Dictionary<string, object>());

        //    IWorkflowContext CreateWorkflowContext(IPluginExecutionContext context)
        //    {
        //        var workflowContext = Substitute.For<IWorkflowContext>();
        //        workflowContext.BusinessUnitId.Returns(context.BusinessUnitId);
        //        workflowContext.CorrelationId.Returns(context.CorrelationId);
        //        workflowContext.Depth.Returns(context.Depth);
        //        workflowContext.InitiatingUserId.Returns(context.InitiatingUserId);
        //        workflowContext.InputParameters.Returns(context.InputParameters);
        //        workflowContext.IsExecutingOffline.Returns(context.IsExecutingOffline);
        //        workflowContext.IsInTransaction.Returns(context.IsInTransaction);
        //        workflowContext.IsOfflinePlayback.Returns(context.IsOfflinePlayback);
        //        workflowContext.IsolationMode.Returns(context.IsolationMode);
        //        workflowContext.MessageName.Returns(context.MessageName);
        //        workflowContext.Mode.Returns(context.Mode);
        //        workflowContext.OperationCreatedOn.Returns(context.OperationCreatedOn);
        //        workflowContext.OperationId.Returns(context.OperationId);
        //        workflowContext.OrganizationId.Returns(context.OrganizationId);
        //        workflowContext.OrganizationName.Returns(context.OrganizationName);
        //        workflowContext.OutputParameters.Returns(context.OutputParameters);
        //        workflowContext.OwningExtension.Returns(context.OwningExtension);
        //        workflowContext.PostEntityImages.Returns(context.PostEntityImages);
        //        workflowContext.PreEntityImages.Returns(context.PreEntityImages);
        //        workflowContext.PrimaryEntityId.Returns(context.PrimaryEntityId);
        //        workflowContext.PrimaryEntityName.Returns(context.PrimaryEntityName);
        //        workflowContext.RequestId.Returns(context.RequestId);
        //        workflowContext.SecondaryEntityName.Returns(context.SecondaryEntityName);
        //        workflowContext.SharedVariables.Returns(context.SharedVariables);
        //        workflowContext.UserId.Returns(context.UserId);
        //        var stageName = context.Stage.ToString();
        //        if (context is DevKitJson.ExecutionContextSnapshot stageSnapshot &&
        //            stageSnapshot.Properties.TryGetValue("StageName", out var savedStageName) &&
        //            savedStageName is string restoredStageName)
        //            stageName = restoredStageName;
        //        workflowContext.StageName.Returns(stageName);
        //        workflowContext.ParentContext.Returns(context.ParentContext == null ? null : CreateWorkflowContext(context.ParentContext));

        //        if (context is DevKitJson.ExecutionContextSnapshot snapshot)
        //        {
        //            if (snapshot.Properties.TryGetValue("WorkflowCategory", out var category) && category != null)
        //                workflowContext.WorkflowCategory.Returns(Convert.ToInt32(category));
        //            if (snapshot.Properties.TryGetValue("WorkflowMode", out var mode) && mode != null)
        //                workflowContext.WorkflowMode.Returns(Convert.ToInt32(mode));
        //        }

        //        return workflowContext;
        //    }

        //    IOrganizationServiceFactory CreateServiceFactory()
        //    {
        //        var factory = Substitute.For<IOrganizationServiceFactory>();
        //        factory.CreateOrganizationService(Arg.Any<Guid?>()).Returns(_ =>
        //        {
        //            var clone = service.Clone();
        //            clone.CallerId = executionContext.UserId;
        //            return clone;
        //        });
        //        return factory;
        //    }
        //}

        //#endregion

        #region DEBUG PLUGIN

        public static void DebugPluginWith<T>(string json, ServiceClient service, params object[] constructorArgs) where T : IPlugin
        {
            if (string.IsNullOrWhiteSpace(json)) throw new ArgumentException("Execution context JSON cannot be null or empty.", nameof(json));
            if (service == null) throw new ArgumentNullException(nameof(service));

            var pluginExecutionContext = DevKitJson.DeserializeContext7(json);
            var serviceProvider = Substitute.For<IServiceProvider>();
            serviceProvider.Get<IPluginExecutionContext>().Returns(pluginExecutionContext);
            serviceProvider.Get<IPluginExecutionContext2>().Returns(pluginExecutionContext);
            serviceProvider.Get<IPluginExecutionContext3>().Returns(pluginExecutionContext);
            serviceProvider.Get<IPluginExecutionContext4>().Returns(pluginExecutionContext);
            serviceProvider.Get<IPluginExecutionContext5>().Returns(pluginExecutionContext);
            serviceProvider.Get<IPluginExecutionContext6>().Returns(pluginExecutionContext);
            serviceProvider.Get<IPluginExecutionContext7>().Returns(pluginExecutionContext);
            serviceProvider.Get<IServiceEndpointNotificationService>().Returns(Substitute.For<IServiceEndpointNotificationService>());
            serviceProvider.Get<IExecutionContext>().Returns(pluginExecutionContext);
            serviceProvider.Get<ITracingService>().Returns(new TracingServiceFake());
            serviceProvider.Get<ILogger>().Returns(Substitute.For<ILogger>());
            var factory = Substitute.For<IOrganizationServiceFactory>();
            factory.CreateOrganizationService(Arg.Any<Guid?>()).Returns((param) =>
            {
                var userId = param.ArgAt<Guid?>(0);
                if (userId == null)
                {
                    return service;
                }

                var clone = service.Clone();
                clone.CallerId = userId == Guid.Empty ? pluginExecutionContext.UserId : userId.Value;
                return clone;
            });
            serviceProvider.Get<IOrganizationServiceFactory>().Returns(factory);
            var pluginObj = Activator.CreateInstance(typeof(T), constructorArgs);
            if (!(pluginObj is T plugin))
                throw new InvalidOperationException($"Could not create instance of type {typeof(T).FullName}.");
            plugin.Execute(serviceProvider);
        }

        #endregion

    }
}
