using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Plugins;
using Microsoft.Xrm.Sdk;
using System;
using System.Linq;

namespace $NameSpace$
{
    /// <summary>
    /// Fluent builder for creating <see cref="XrmFakedPluginExecutionContext"/>.
    /// Auto-detects plugin metadata from <see cref="CrmPluginRegistrationAttribute"/>
    /// and supports hydrating context from Plugin Trace Log JSON.
    ///
    /// <example>
    /// Basic usage (auto-detect from plugin registration):
    /// <code>
    /// var ctx = PluginContextBuilder.For&lt;PreCreateSynchronous&gt;(_context)
    ///     .WithTarget(targetEntity)
    ///     .Build();
    /// _context.ExecutePluginWith&lt;PreCreateSynchronous&gt;(ctx);
    /// </code>
    /// </example>
    ///
    /// <example>
    /// From Plugin Trace Log JSON:
    /// <code>
    /// var json = @"{...}"; // paste from Plugin Trace Log
    /// var ctx = PluginContextBuilder.FromJson(_context, json).Build();
    /// _context.ExecutePluginWith&lt;PreCreateSynchronous&gt;(ctx);
    /// </code>
    /// </example>
    ///
    /// <example>
    /// From compressed Plugin Trace Log:
    /// <code>
    /// var compressed = "..."; // base64 compressed string
    /// var ctx = PluginContextBuilder.FromCompressedJson(_context, compressed).Build();
    /// _context.ExecutePluginWith&lt;PreCreateSynchronous&gt;(ctx);
    /// </code>
    /// </example>
    /// </summary>
    public class PluginContextBuilder
    {
        private readonly IXrmFakedContext _context;
        private readonly XrmFakedPluginExecutionContext _pluginContext;

        private PluginContextBuilder(IXrmFakedContext context)
        {
            _context = context;
            _pluginContext = context.GetDefaultPluginContext();
        }

        /// <summary>
        /// Start building a context that auto-detects Stage, Message, Entity, Mode
        /// from the plugin's <see cref="CrmPluginRegistrationAttribute"/>.
        /// When a plugin has multiple registrations, picks the first one.
        /// Use <paramref name="registrationIndex"/> to pick a specific registration.
        /// </summary>
        public static PluginContextBuilder For<TPlugin>(IXrmFakedContext context, int registrationIndex = 0)
            where TPlugin : IPlugin, new()
        {
            var builder = new PluginContextBuilder(context);
            var attributes = TestHelper.GetRegisteredPlugins(new TPlugin());
            if (attributes.Count > registrationIndex)
            {
                var reg = attributes[registrationIndex];
                builder._pluginContext.MessageName = reg.Message;
                builder._pluginContext.Stage = (int)reg.Stage;
                builder._pluginContext.Mode = (int)reg.ExecutionMode;
                builder._pluginContext.PrimaryEntityName = reg.EntityLogicalName;
            }
            return builder;
        }

        /// <summary>
        /// Start building a context from a RemoteExecutionContext JSON string
        /// (copy-paste from Plugin Trace Log).
        /// </summary>
        public static PluginContextBuilder FromJson(IXrmFakedContext context, string json)
        {
            var builder = new PluginContextBuilder(context);
            var remote = TestHelper.DeserializeRemoteExecutionContext(json);
            builder._pluginContext.SetXrmFakedContextPlugin(remote);
            return builder;
        }

        /// <summary>
        /// Start building a context from a base64-compressed RemoteExecutionContext JSON
        /// (from Plugin Trace Log compressed format).
        /// </summary>
        public static PluginContextBuilder FromCompressedJson(IXrmFakedContext context, string compressedBase64)
        {
            var json = TestHelper.Decompress(compressedBase64);
            return FromJson(context, json);
        }

        /// <summary>
        /// Start building a bare context with no auto-detection.
        /// </summary>
        public static PluginContextBuilder Create(IXrmFakedContext context)
        {
            return new PluginContextBuilder(context);
        }

        public PluginContextBuilder WithMessage(string message)
        {
            _pluginContext.MessageName = message;
            return this;
        }

        public PluginContextBuilder WithStage(StageEnum stage)
        {
            _pluginContext.Stage = (int)stage;
            return this;
        }

        public PluginContextBuilder WithMode(ExecutionModeEnum mode)
        {
            _pluginContext.Mode = (int)mode;
            return this;
        }

        public PluginContextBuilder WithEntity(string entityLogicalName)
        {
            _pluginContext.PrimaryEntityName = entityLogicalName;
            return this;
        }

        public PluginContextBuilder WithPrimaryEntityId(Guid id)
        {
            _pluginContext.PrimaryEntityId = id;
            return this;
        }

        public PluginContextBuilder WithTarget(Entity target)
        {
            _pluginContext.InputParameters["Target"] = target;
            return this;
        }

        public PluginContextBuilder WithPreImage(string alias, Entity entity)
        {
            _pluginContext.PreEntityImages[alias] = entity;
            return this;
        }

        /// <summary>Adds PreImage with alias "PreImage".</summary>
        public PluginContextBuilder WithPreImage(Entity entity)
        {
            return WithPreImage("PreImage", entity);
        }

        public PluginContextBuilder WithPostImage(string alias, Entity entity)
        {
            _pluginContext.PostEntityImages[alias] = entity;
            return this;
        }

        /// <summary>Adds PostImage with alias "PostImage".</summary>
        public PluginContextBuilder WithPostImage(Entity entity)
        {
            return WithPostImage("PostImage", entity);
        }

        public PluginContextBuilder WithInputParameter(string key, object value)
        {
            _pluginContext.InputParameters[key] = value;
            return this;
        }

        public PluginContextBuilder WithOutputParameter(string key, object value)
        {
            _pluginContext.OutputParameters[key] = value;
            return this;
        }

        public PluginContextBuilder WithSharedVariable(string key, object value)
        {
            _pluginContext.SharedVariables[key] = value;
            return this;
        }

        public PluginContextBuilder WithUserId(Guid userId)
        {
            _pluginContext.UserId = userId;
            return this;
        }

        public PluginContextBuilder WithInitiatingUserId(Guid userId)
        {
            _pluginContext.InitiatingUserId = userId;
            return this;
        }

        public PluginContextBuilder WithBusinessUnitId(Guid businessUnitId)
        {
            _pluginContext.BusinessUnitId = businessUnitId;
            return this;
        }

        public PluginContextBuilder WithOrganizationId(Guid organizationId)
        {
            _pluginContext.OrganizationId = organizationId;
            return this;
        }

        public PluginContextBuilder WithDepth(int depth)
        {
            _pluginContext.Depth = depth;
            return this;
        }

        public XrmFakedPluginExecutionContext Build()
        {
            return _pluginContext;
        }
    }
}
