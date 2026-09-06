using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;

namespace DynamicsCrm.DevKit2019.UnitTests.TestInfrastructure
{
    /// <summary>
    /// Hand-rolled IOrganizationService fake. CrmServiceClient is sealed, so
    /// FormReportMapping accepts IOrganizationService (which CrmServiceClient
    /// implements) and tests inject this fake. Only RetrieveMultiple is served;
    /// any other call throws so tests fail loudly instead of passing silently.
    /// </summary>
    public class FakeCrmServiceClient : IOrganizationService
    {
        public List<Entity> Entities { get; set; } = new List<Entity>();

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            return new EntityCollection(Entities.ToList());
        }

        public Guid Create(Entity entity) => throw new NotSupportedException();
        public Entity Retrieve(string entityName, Guid id, Microsoft.Xrm.Sdk.Query.ColumnSet columnSet) => throw new NotSupportedException();
        public void Update(Entity entity) => throw new NotSupportedException();
        public void Delete(string entityName, Guid id) => throw new NotSupportedException();
        public Microsoft.Xrm.Sdk.OrganizationResponse Execute(OrganizationRequest request) => throw new NotSupportedException();
        public void Associate(string entityName, Guid entityId, Microsoft.Xrm.Sdk.Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
        public void Disassociate(string entityName, Guid entityId, Microsoft.Xrm.Sdk.Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
    }
}
