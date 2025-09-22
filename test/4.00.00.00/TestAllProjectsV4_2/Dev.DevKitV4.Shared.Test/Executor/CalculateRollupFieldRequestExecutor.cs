using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Abstractions.FakeMessageExecutors;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;

namespace Dev.DevKitV4.Shared.Test
{
    public class CalculateRollupFieldRequestExecutor : IFakeMessageExecutor
    {
        public bool CanExecute(OrganizationRequest request)
        {
            return request is CalculateRollupFieldRequest;
        }

        public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext ctx)
        {
            return new CalculateRollupFieldResponse();
        }

        public Type GetResponsibleRequestType()
        {
            return typeof(CalculateRollupFieldRequest);
        }
    }
}
