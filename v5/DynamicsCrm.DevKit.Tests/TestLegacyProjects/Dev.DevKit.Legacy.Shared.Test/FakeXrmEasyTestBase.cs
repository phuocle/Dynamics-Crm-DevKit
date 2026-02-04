using Dev.DevKit.Legacy.ProxyTypes;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Abstractions.Enums;
using FakeXrmEasy.Abstractions.Middleware;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace Dev.DevKit.Legacy.Shared.Test
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
    }
}