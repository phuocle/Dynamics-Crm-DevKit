using Microsoft.Xrm.Sdk.Messages;
using System;

namespace Dev.DevKit.PluginTerritory
{
    /// <summary>
    /// DEVKIT1016: Avoid Retrieving Unpublished Metadata
    /// This file contains code that retrieves unpublished metadata,
    /// which should trigger DEVKIT1016 info warnings.
    /// </summary>
    internal class DEVKIT1016
    {
        private void Test()
        {
            // DEVKIT1016: RetrieveEntityRequest with RetrieveAsIfPublished = true - should trigger info
            var request1 = new RetrieveEntityRequest
            {
                EntityFilters = Microsoft.Xrm.Sdk.Metadata.EntityFilters.All,
                LogicalName = "account",
                RetrieveAsIfPublished = true  // Performance issue
            };
            AppSettings.Service.Execute(request1);

            // DEVKIT1016: RetrieveAllEntitiesRequest with RetrieveAsIfPublished = true - should trigger info
            var request2 = new RetrieveAllEntitiesRequest
            {
                EntityFilters = Microsoft.Xrm.Sdk.Metadata.EntityFilters.Entity,
                RetrieveAsIfPublished = true  // Performance issue
            };
            AppSettings.Service.Execute(request2);

            // DEVKIT1016: RetrieveAttributeRequest with RetrieveAsIfPublished = true - should trigger info
            var request3 = new RetrieveAttributeRequest
            {
                EntityLogicalName = "account",
                LogicalName = "name",
                RetrieveAsIfPublished = true  // Performance issue
            };
            AppSettings.Service.Execute(request3);

            // DEVKIT1016: Assignment after creation - should also trigger info
            var request4 = new RetrieveOptionSetRequest();
            request4.Name = "my_optionset";
            request4.RetrieveAsIfPublished = true;  // Performance issue
            AppSettings.Service.Execute(request4);
        }
    }
}
