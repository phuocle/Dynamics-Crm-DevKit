using Dev.DevKit.Shared;
using Microsoft.Xrm.Sdk;
using System;

namespace TestAnalyzers
{
    /// <summary>
    /// DEVKIT1021: Use ITracingService in Catch Blocks
    /// The diagnostic appears when a catch block in a plugin or workflow doesn't use ITracingService to log exception details.
    /// </summary>

    // ❌ BAD: Catch block without ITracingService - exception details are lost
    [CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1021_NoTracingInCatch", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1021_NoTracingInCatch : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = factory.CreateOrganizationService(context.UserId);

            try
            {
                // Some operation that might fail
                var entity = service.Retrieve("account", context.PrimaryEntityId, new Microsoft.Xrm.Sdk.Query.ColumnSet(true));
                var name = entity.GetAttributeValue<string>("name");

                if (string.IsNullOrEmpty(name))
                {
                    throw new InvalidOperationException("Account name is required");
                }
            }
            catch (Exception ex) // DEVKIT1021: Should use ITracingService here!
            {
                // ❌ Exception details are not logged - debugging will be difficult!
                throw new InvalidPluginExecutionException($"Failed to process account: {ex.Message}");
            }
        }
    }

    // ❌ BAD: Multiple catch blocks, one without tracing
    [CrmPluginRegistration("Create", "contact", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "", "TestAnalyzers.DEVKIT1021_PartialTracing", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1021_PartialTracing : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = factory.CreateOrganizationService(context.UserId);

            try
            {
                ProcessContact(service, context);
            }
            catch (ArgumentNullException ex)
            {
                // ✅ This one uses tracing - good!
                tracingService.Trace($"ArgumentNullException: {ex.Message}");
                throw new InvalidPluginExecutionException("Required argument is missing", ex);
            }
            catch (InvalidOperationException ex) // DEVKIT1021: This catch needs tracing too!
            {
                // ❌ This catch block doesn't use tracing
                throw new InvalidPluginExecutionException("Operation failed", ex);
            }
        }

        private void ProcessContact(IOrganizationService service, IPluginExecutionContext context)
        {
            // Process logic here
        }
    }

    // ✅ GOOD: Proper use of ITracingService in catch block
    [CrmPluginRegistration("Update", "account", StageEnum.PostOperation, ExecutionModeEnum.Synchronous, "name", "TestAnalyzers.DEVKIT1021_WithTracing", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1021_WithTracing : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var service = factory.CreateOrganizationService(context.UserId);

            try
            {
                tracingService.Trace("Starting account update processing");

                var entity = service.Retrieve("account", context.PrimaryEntityId, new Microsoft.Xrm.Sdk.Query.ColumnSet(true));
                var name = entity.GetAttributeValue<string>("name");

                if (string.IsNullOrEmpty(name))
                {
                    throw new InvalidOperationException("Account name is required");
                }

                tracingService.Trace("Account update completed successfully");
            }
            catch (Exception ex)
            {
                // ✅ Exception details are logged - helps with debugging!
                tracingService.Trace($"Exception Type: {ex.GetType().Name}");
                tracingService.Trace($"Exception Message: {ex.Message}");
                tracingService.Trace($"Stack Trace: {ex.StackTrace}");
                tracingService.Trace($"Entity: account, Id: {context.PrimaryEntityId}");

                throw new InvalidPluginExecutionException($"Failed to process account: {ex.Message}", ex);
            }
        }
    }

    // ✅ GOOD: Comprehensive exception logging
    [CrmPluginRegistration("Create", "opportunity", StageEnum.PreOperation, ExecutionModeEnum.Synchronous, "", "TestAnalyzers.DEVKIT1021_DetailedLogging", 1, IsolationModeEnum.Sandbox)]
    public class DEVKIT1021_DetailedLogging : IPlugin
    {
        private ITracingService _tracingService;
        private IOrganizationService _service;
        private IPluginExecutionContext _context;

        public void Execute(IServiceProvider serviceProvider)
        {
            _context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            _tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            _service = factory.CreateOrganizationService(_context.UserId);

            try
            {
                _tracingService.Trace($"Plugin execution started. Depth: {_context.Depth}");
                ValidateOpportunity();
                _tracingService.Trace("Validation completed successfully");
            }
            catch (ArgumentException ex)
            {
                // ✅ Specific exception type with detailed tracing
                _tracingService.Trace($"ArgumentException in {nameof(ValidateOpportunity)}");
                _tracingService.Trace($"Message: {ex.Message}");
                _tracingService.Trace($"Parameter: {ex.ParamName}");
                throw new InvalidPluginExecutionException($"Invalid opportunity data: {ex.Message}", ex);
            }
            catch (InvalidPluginExecutionException)
            {
                // ✅ Re-throwing known exceptions with trace
                _tracingService.Trace("InvalidPluginExecutionException - re-throwing");
                throw;
            }
            catch (Exception ex)
            {
                // ✅ Catch-all with comprehensive logging
                _tracingService.Trace("Unexpected exception occurred");
                _tracingService.Trace($"Type: {ex.GetType().FullName}");
                _tracingService.Trace($"Message: {ex.Message}");
                _tracingService.Trace($"Source: {ex.Source}");
                _tracingService.Trace($"Stack: {ex.StackTrace}");

                if (ex.InnerException != null)
                {
                    _tracingService.Trace($"Inner Exception: {ex.InnerException.Message}");
                }

                throw new InvalidPluginExecutionException("An unexpected error occurred while creating opportunity", ex);
            }
        }

        private void ValidateOpportunity()
        {
            // Validation logic here
        }
    }
}
