using DataverseFakes;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using Dev.AllInOne.Shared;

namespace Dev.AllInOne.DataverseTests.Framework
{
    public abstract class PluginTestBase
    {
        private readonly TestContext _context = new TestContext
        {
            ProxyTypesAssembly = typeof(global::Dev.AllInOne.ProxyTypes.ProxyTypesAssembly).Assembly
        };

        protected IOrganizationService Service => _context.GetOrganizationService();

        protected void Seed(params Entity[] entities)
        {
            foreach (var entity in entities)
            {
                if (entity == null) throw new ArgumentNullException(nameof(entities));
                var snapshot = Snapshot(entity);
                var primaryId = _context.PrimaryIdAttribute(snapshot.LogicalName);
                if (snapshot.Id == Guid.Empty)
                    snapshot.Id = primaryId == null ? Guid.Empty : snapshot.GetAttributeValue<Guid>(primaryId);
                if (snapshot.Id == Guid.Empty) snapshot.Id = Guid.NewGuid();
                if (primaryId != null) snapshot[primaryId] = snapshot.Id;
                _context.AddFixture(snapshot);
            }
        }

        internal void Seed(params EntityBase[] records)
            => Seed(records.Select(record => record.Entity).ToArray());

        internal static Entity Snapshot(Entity entity)
            => DevKitJson.Deserialize<Entity>(DevKitJson.Serialize(entity));

        protected IReadOnlyList<Entity> Query(string logicalName)
            => _context.Data.ContainsKey(logicalName)
                ? _context.CreateQuery(logicalName).AsEnumerable().Select(Snapshot).ToArray()
                : Array.Empty<Entity>();

        internal IReadOnlyList<TEntity> Query<TEntity>() where TEntity : EntityBase, new()
            => Query(new TEntity().LogicalName)
                .Select(entity => (TEntity)Activator.CreateInstance(typeof(TEntity), entity)).ToArray();

        internal TEntity GetRecord<TEntity>(Guid id) where TEntity : EntityBase, new()
            => Query<TEntity>().Single(entity => entity.Id == id);

        protected PluginRunBuilder<TPlugin> RunPlugin<TPlugin>(int? registrationIndex = null) where TPlugin : IPlugin, new()
            => new PluginRunBuilder<TPlugin>(this, registrationIndex);

        protected internal PluginExecutionDescriptor ExecutePlugin(IPlugin plugin, PluginExecutionDescriptor descriptor)
            => ExecutePlugin(plugin, descriptor, null);

        private PluginExecutionDescriptor ExecutePlugin(IPlugin plugin, PluginExecutionDescriptor descriptor, DevKitJson.ExecutionContextSnapshot replay)
        {
            if (plugin == null) throw new ArgumentNullException(nameof(plugin));
            if (descriptor == null) throw new ArgumentNullException(nameof(descriptor));
            var context = _context.GetDefaultPluginContext();
            context.MessageName = descriptor.MessageName;
            context.PrimaryEntityName = descriptor.PrimaryEntityName;
            context.SecondaryEntityName = descriptor.SecondaryEntityName;
            context.PrimaryEntityId = descriptor.PrimaryEntityId;
            context.RequestId = descriptor.RequestId;
            context.Stage = descriptor.Stage;
            context.Mode = descriptor.Mode;
            context.IsolationMode = descriptor.IsolationMode;
            context.Depth = descriptor.Depth;
            context.UserId = descriptor.UserId;
            context.InitiatingUserId = descriptor.InitiatingUserId;
            context.BusinessUnitId = descriptor.BusinessUnitId;
            context.OrganizationId = descriptor.OrganizationId;
            context.OrganizationName = descriptor.OrganizationName;
            context.CorrelationId = descriptor.CorrelationId;
            context.OperationId = descriptor.OperationId;
            context.OperationCreatedOn = descriptor.OperationCreatedOn;
            context.IsExecutingOffline = descriptor.IsExecutingOffline;
            context.IsOfflinePlayback = descriptor.IsOfflinePlayback;
            context.IsInTransaction = descriptor.IsInTransaction;
            context.OwningExtension = descriptor.OwningExtension;
            context.ParentContext = descriptor.ParentContext;
            context.InputParameters = descriptor.InputParameters;
            context.OutputParameters = descriptor.OutputParameters;
            context.SharedVariables = descriptor.SharedVariables;
            context.PreEntityImages = descriptor.PreEntityImages;
            context.PostEntityImages = descriptor.PostEntityImages;
            _context.ExecutePluginWith(context, replay == null ? plugin : new ReplayPluginAdapter(plugin, replay));
            descriptor.OutputParameters = context.OutputParameters;
            descriptor.SharedVariables = context.SharedVariables;
            return descriptor;
        }

        protected PluginExecutionDescriptor ReplayPlugin<TPlugin>(string json) where TPlugin : IPlugin, new()
        {
            var source = DevKitJson.DeserializeContext7(json);
            if (source == null) throw new ArgumentException("Supply a DevKit context snapshot.", nameof(json));
            var descriptor = PluginExecutionDescriptor.FromContext(source);
            // The engine's context proxy drops fields such as RequestId. Use the restored
            // SDK context for replay and keep the engine's services and parameter collections.
            var properties = source.Properties.ToDictionary(property => property.Key, property => property.Value, StringComparer.Ordinal);
            properties[nameof(source.InputParameters)] = descriptor.InputParameters;
            properties[nameof(source.OutputParameters)] = descriptor.OutputParameters;
            properties[nameof(source.SharedVariables)] = descriptor.SharedVariables;
            properties[nameof(source.PreEntityImages)] = descriptor.PreEntityImages;
            properties[nameof(source.PostEntityImages)] = descriptor.PostEntityImages;
            return ExecutePlugin(new TPlugin(), descriptor, new DevKitJson.ExecutionContextSnapshot(properties));
        }

        protected PluginExecutionDescriptor ReplayCompressedPlugin<TPlugin>(string compressed) where TPlugin : IPlugin, new()
            => ReplayPlugin<TPlugin>(compressed.Decompress());

        protected IDictionary<string, object> ExecuteWorkflow<TWorkflow>(Dictionary<string, object> inputs, TWorkflow activity = null)
            where TWorkflow : CodeActivity, new()
            => _context.ExecuteCodeActivity(inputs, activity);

        protected void SetDataSource(Entity dataSource)
            => _context.EntityDataSourceRetriever = Snapshot(dataSource ?? throw new ArgumentNullException(nameof(dataSource)));

        protected void SetEntityMetadata(EntityMetadata metadata)
            => _context.InitializeMetadata(metadata ?? throw new ArgumentNullException(nameof(metadata)));

        protected void MockRequest<TRequest>(Func<TRequest, OrganizationResponse> handler) where TRequest : OrganizationRequest
        {
            if (handler == null) throw new ArgumentNullException(nameof(handler));
            _context.AddExecutionMock<TRequest>(request => handler((TRequest)request));
        }

        protected void EnablePipelineSimulation() => _context.UsePipelineSimulation = true;

        protected void RegisterPluginStep<TPlugin>(int? registrationIndex = null, int? primaryEntityTypeCode = null)
            where TPlugin : IPlugin, new()
        {
            var step = PluginRegistrationInfo.Resolve(typeof(TPlugin), registrationIndex)
                ?? throw new InvalidOperationException($"'{typeof(TPlugin).FullName}' requires a DevKit registration for pipeline simulation.");
            var typeCode = primaryEntityTypeCode ?? _context.GetPrimaryEntityTypeCode(step.Entity);
            _context.RegisterStep<TPlugin>(step, typeCode);
        }

        protected void AssertStandardPluginGuards<TPlugin>(int? registrationIndex = null) where TPlugin : IPlugin, new()
        {
            var registration = PluginRegistrationInfo.Resolve(typeof(TPlugin), registrationIndex)
                ?? throw new InvalidOperationException($"'{typeof(TPlugin).FullName}' requires a DevKit registration for guard checks.");
            AssertGuard<TPlugin>(registrationIndex, context => context.Stage = -1, $"Stage does not equals {(StageEnum)registration.Stage}");
            AssertGuard<TPlugin>(registrationIndex, context => context.MessageName = "", $"MessageName does not equals {registration.Message}");
            AssertGuard<TPlugin>(registrationIndex, context => context.PrimaryEntityName = "__devkit_wrong_entity", $"PrimaryEntityName does not equals {registration.Entity}");
            AssertGuard<TPlugin>(registrationIndex, context => context.Mode = -1, $"Execution does not equals {(ExecutionModeEnum)registration.Mode}");
        }

        private void AssertGuard<TPlugin>(int? registrationIndex, Action<PluginExecutionDescriptor> change, string message)
            where TPlugin : IPlugin, new()
        {
            var builder = RunPlugin<TPlugin>(registrationIndex);
            change(builder.Context);
            var exception = Assert.ThrowsExactly<InvalidPluginExecutionException>(() => builder.Execute());
            Assert.AreEqual(message, exception.Message);
        }

        private sealed class TestContext : XrmFakedContext
        {
            // AddEntity replaces records by ID and updates query metadata without running steps.
            internal void AddFixture(Entity entity) => AddEntity(entity, validateEntityType: false);

            internal string PrimaryIdAttribute(string logicalName)
                => EntityMetadata.TryGetValue(logicalName, out var metadata) ? metadata.PrimaryIdAttribute : null;

            internal void RegisterStep<TPlugin>(PluginRegistrationInfo step, int? typeCode) where TPlugin : IPlugin
            {
                // Registration creates internal sdkmessage records, which need no generated proxy class.
                var proxyAssembly = ProxyTypesAssembly;
                try
                {
                    ProxyTypesAssembly = null;
                    RegisterPluginStep<TPlugin>(step.Message, (ProcessingStepStage)step.Stage,
                        (ProcessingStepMode)step.Mode, step.Rank, step.FilteringAttributes, typeCode);
                }
                finally
                {
                    ProxyTypesAssembly = proxyAssembly;
                }
            }

            internal int? GetPrimaryEntityTypeCode(string logicalName)
            {
                if (string.IsNullOrEmpty(logicalName) || logicalName == "none")
                    return null;
                if (EntityMetadata.TryGetValue(logicalName, out var metadata) && metadata.ObjectTypeCode.HasValue)
                    return metadata.ObjectTypeCode.Value;
                var field = FindReflectedType(logicalName)?.GetField("EntityTypeCode");
                if (field?.GetValue(null) is int code)
                    return code;
                throw new InvalidOperationException($"No type code for '{logicalName}'. Pass primaryEntityTypeCode or use generated proxy types with EntityTypeCode.");
            }
        }

        private sealed class ReplayPluginAdapter : IPlugin, IServiceProvider
        {
            private readonly IPlugin _plugin;
            private readonly IPluginExecutionContext7 _snapshot;
            private IServiceProvider _services;

            internal ReplayPluginAdapter(IPlugin plugin, IPluginExecutionContext7 snapshot)
            {
                _plugin = plugin;
                _snapshot = snapshot;
            }

            public void Execute(IServiceProvider serviceProvider)
            {
                _services = serviceProvider;
                _plugin.Execute(this);
            }

            public object GetService(Type serviceType)
                => typeof(IExecutionContext).IsAssignableFrom(serviceType) && serviceType.IsInstanceOfType(_snapshot)
                    ? _snapshot : _services.GetService(serviceType);
        }
    }
}
