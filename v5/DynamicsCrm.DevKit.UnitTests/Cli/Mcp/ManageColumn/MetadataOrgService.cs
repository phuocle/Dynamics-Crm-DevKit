using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageColumn;

/// <summary>
/// Intercepts the metadata messages ManageColumnTool issues and answers them from
/// <see cref="FakeMetadataExecutors"/>; everything else (CRUD on solution/publisher/
/// organization records) is delegated to the wrapped FakeXrmEasy service.
/// Needed because FakeXrmEasy's built-in message pipeline claims these request
/// types ahead of custom executors.
/// </summary>
public sealed class MetadataOrgService : IOrganizationService
{
    private readonly IOrganizationService _inner;
    private readonly FakeMetadataExecutors _metadata;

    public MetadataOrgService(IOrganizationService inner, FakeMetadataExecutors metadata)
    {
        _inner = inner;
        _metadata = metadata;
    }

    public Guid Create(Entity entity) => _inner.Create(entity);
    public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);
    public void Update(Entity entity) => _inner.Update(entity);
    public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);
    public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => _inner.Associate(entityName, entityId, relationship, relatedEntities);
    public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => _inner.Disassociate(entityName, entityId, relationship, relatedEntities);
    public EntityCollection RetrieveMultiple(QueryBase query) => _inner.RetrieveMultiple(query);

    public OrganizationResponse Execute(OrganizationRequest request) => request switch
    {
        RetrieveAllEntitiesRequest or RetrieveEntityRequest or RetrieveAttributeRequest
            or CreateAttributeRequest or UpdateAttributeRequest or PublishXmlRequest
            or CreateOneToManyRequest or CreateCustomerRelationshipsRequest
            or OrganizationRequest { RequestName: FakeMetadataExecutors.PolymorphicLookupRequestName }
            => _metadata.Execute(request),
        _ => _inner.Execute(request)
    };
}
