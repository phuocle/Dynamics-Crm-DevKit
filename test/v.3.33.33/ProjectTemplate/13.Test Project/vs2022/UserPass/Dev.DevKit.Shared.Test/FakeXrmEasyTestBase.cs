﻿using Dev.DevKit.ProxyTypes;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Abstractions.Enums;
using FakeXrmEasy.Middleware;
using Microsoft.Xrm.Sdk;
using System.Reflection;

namespace Dev.DevKit.Shared.Test
{
    public class FakeXrmEasyTestBase
    {
        protected readonly IXrmFakedContext _context;
        protected readonly IOrganizationService _service;

        public FakeXrmEasyTestBase()
        {
            _context = XrmFakedContextFactory.New(FakeXrmEasyLicense.RPL_1_5);
            _context.EnableProxyTypes(Assembly.GetAssembly(typeof(ProxyTypesAssembly)));
            _service = _context.GetOrganizationService();
        }
    }
}