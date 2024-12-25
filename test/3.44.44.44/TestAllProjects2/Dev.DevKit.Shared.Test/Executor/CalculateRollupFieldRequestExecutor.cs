using FakeXrmEasy;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Abstractions.FakeMessageExecutors;
using FakeXrmEasy.FakeMessageExecutors;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKit.Shared.Test
{
    public class CalculateRollupFieldRequestExecutor : IFakeMessageExecutor
    {
        public bool CanExecute(OrganizationRequest request)
        {
            return request is CalculateRollupFieldRequest;
        }

        public OrganizationResponse Execute(OrganizationRequest request, XrmFakedContext ctx)
        {
            return new CalculateRollupFieldResponse();
        }

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext ctx)
        {
            throw new NotImplementedException();
        }

        public Type GetResponsibleRequestType()
        {
            return typeof(CalculateRollupFieldRequest);
        }
    }
}
