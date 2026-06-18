using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Abstractions.Enums;
using FakeXrmEasy.Abstractions.Middleware;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using FakeXrmEasy.Plugins;
using $ProjectProxyTypes$;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace $NameSpace$
{
    public class FakeXrmEasyTestBase
    {
        protected readonly IXrmFakedContext _context;
        protected readonly IOrganizationService _service;

        protected IXrmFakedContext Context { get { return _context; } }
        protected IOrganizationService Service { get { return _service; } }

        public FakeXrmEasyTestBase()
            : this(null)
        {
        }

        protected FakeXrmEasyTestBase(IEnumerable<Assembly> additionalProxyTypeAssemblies)
        {
            var testAssembly = typeof(FakeXrmEasyTestBase).Assembly;
            IMiddlewareBuilder builder = MiddlewareBuilder
                .New()
                .AddCrud()
                .AddFakeMessageExecutors(testAssembly)
                .UseCrud()
                .UseMessages()
                .SetLicense(FakeXrmEasyLicense.RPL_1_5);
            builder = ConfigureBuilder(builder) ?? builder;
            _context = builder.Build();
            var proxyAssemblies = new List<Assembly>
            {
                typeof(ProxyTypesAssembly).Assembly
            };
            if (additionalProxyTypeAssemblies != null)
            {
                foreach (var asm in additionalProxyTypeAssemblies)
                {
                    if (asm != null && !proxyAssemblies.Contains(asm))
                    {
                        proxyAssemblies.Add(asm);
                    }
                }
            }
            foreach (var asm in proxyAssemblies)
            {
                _context.EnableProxyTypes(asm);
            }
            _service = _context.GetOrganizationService();
        }

        protected virtual IMiddlewareBuilder ConfigureBuilder(IMiddlewareBuilder builder)
        {
            return builder;
        }

        protected void Initialize(params Entity[] entities)
        {
            if (entities == null || entities.Length == 0) return;
            _context.Initialize(entities);
        }

        protected void Initialize(IEnumerable<Entity> entities)
        {
            if (entities == null) return;
            _context.Initialize(entities);
        }

        /// <summary>
        /// Load entities from one or more DevKitJson JSON strings and initialize FakeXrmEasy context.
        /// </summary>
        protected void InitializeFromJson(params string[] jsonStrings)
        {
            Initialize(TestDataLoader.FromJson(jsonStrings));
        }

        /// <summary>
        /// Load entities from a DevKitJson JSON file and initialize FakeXrmEasy context.
        /// </summary>
        protected void InitializeFromJsonFile(string filePath)
        {
            Initialize(TestDataLoader.FromJsonFile(filePath));
        }

        /// <summary>
        /// Load entities from multiple DevKitJson JSON files and initialize FakeXrmEasy context.
        /// </summary>
        protected void InitializeFromJsonFiles(params string[] filePaths)
        {
            Initialize(TestDataLoader.FromJsonFiles(filePaths));
        }

        protected XrmFakedPluginExecutionContext CreateValidPluginContext(StageEnum pluginStage, string pluginMessage, string entityLogicalName, ExecutionModeEnum executionMode)
        {
            var pluginContext = _context.GetDefaultPluginContext();
            pluginContext.Stage = (int)pluginStage;
            pluginContext.MessageName = pluginMessage;
            pluginContext.PrimaryEntityName = entityLogicalName;
            pluginContext.Mode = (int)executionMode;
            return pluginContext;
        }

        protected XrmFakedPluginExecutionContext CreateExecutablePluginContext(
            StageEnum pluginStage,
            string pluginMessage,
            string entityLogicalName,
            ExecutionModeEnum executionMode,
            object target = null,
            Entity preImage = null,
            Entity postImage = null,
            string targetParameterName = "Target",
            string preImageAlias = "PreImage",
            string postImageAlias = "PostImage")
        {
            var pluginContext = CreateValidPluginContext(pluginStage, pluginMessage, entityLogicalName, executionMode);
            if (target != null) pluginContext.InputParameters[targetParameterName] = target;
            if (preImage != null) pluginContext.PreEntityImages[preImageAlias] = preImage;
            if (postImage != null) pluginContext.PostEntityImages[postImageAlias] = postImage;
            return pluginContext;
        }

        protected void AssertInvalidPluginContext<TPlugin>(
            Action<XrmFakedPluginExecutionContext> changeContext,
            string expectedMessage,
            StageEnum pluginStage,
            string pluginMessage,
            string entityLogicalName,
            ExecutionModeEnum executionMode)
            where TPlugin : IPlugin, new()
        {
            var pluginContext = CreateValidPluginContext(pluginStage, pluginMessage, entityLogicalName, executionMode);
            changeContext(pluginContext);

            var exception = Assert.ThrowsExactly<InvalidPluginExecutionException>(() =>
            {
                _context.ExecutePluginWith<TPlugin>(pluginContext);
            });
            Assert.AreEqual(expectedMessage, exception.Message);
        }
    }
}
