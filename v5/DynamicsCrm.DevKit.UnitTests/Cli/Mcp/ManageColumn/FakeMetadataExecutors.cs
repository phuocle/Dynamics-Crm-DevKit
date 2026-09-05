using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Abstractions.FakeMessageExecutors;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ManageColumn;

/// <summary>
/// Answers every metadata message ManageColumnTool issues:
/// RetrieveAllEntities / RetrieveEntity / RetrieveAttribute / CreateAttribute /
/// UpdateAttribute / CreateOneToMany / CreateCustomerRelationships /
/// CreatePolymorphicLookupAttribute (plain OrganizationRequest — not in the
/// Dataverse Client SDK). Created/updated attributes are kept in memory so
/// tests can assert what the tool sent. PublishXml deliberately throws so
/// PublishHelper reports "not published" and the metadata propagation waits
/// (5-15s per create) are skipped in unit tests.
/// </summary>
public sealed class FakeMetadataExecutors : IFakeMessageExecutor
{
    public const string PolymorphicLookupRequestName = "CreatePolymorphicLookupAttribute";

    /// <summary>Entity metadata served by RetrieveAllEntities/RetrieveEntity.</summary>
    public List<EntityMetadata> Entities { get; } = [];

    /// <summary>Attributes created via CreateAttributeRequest (in order).</summary>
    public List<AttributeMetadata> Created { get; } = [];

    /// <summary>Attribute updates received via UpdateAttributeRequest.</summary>
    public List<AttributeMetadata> Updated { get; } = [];

    public bool CanExecute(OrganizationRequest request) => request is RetrieveAllEntitiesRequest
        or RetrieveEntityRequest or RetrieveAttributeRequest
        or CreateAttributeRequest or UpdateAttributeRequest
        or CreateOneToManyRequest or CreateCustomerRelationshipsRequest
        or OrganizationRequest { RequestName: PolymorphicLookupRequestName };

    public OrganizationResponse Execute(OrganizationRequest request, IXrmFakedContext context) => request switch
    {
        RetrieveAllEntitiesRequest => RetrieveAll(),
        RetrieveEntityRequest r => RetrieveOne(r),
        RetrieveAttributeRequest r => RetrieveAttr(r),
        CreateAttributeRequest r => CreateAttr(r),
        UpdateAttributeRequest r => UpdateAttr(r),
        CreateOneToManyRequest r => CreateLookup(r.Lookup,
            new[] { r.OneToManyRelationship.ReferencedEntity },
            r.OneToManyRelationship.ReferencingEntity, new CreateOneToManyResponse()),
        CreateCustomerRelationshipsRequest r => CreateLookup(r.Lookup,
            r.OneToManyRelationships.Select(rel => rel.ReferencedEntity).ToArray(),
            r.OneToManyRelationships.First().ReferencingEntity, new CreateCustomerRelationshipsResponse()),
        OrganizationRequest { RequestName: PolymorphicLookupRequestName } r => CreateLookup(
            (AttributeMetadata)r["Lookup"],
            ((OneToManyRelationshipMetadata[])r["OneToManyRelationships"]).Select(rel => rel.ReferencedEntity).ToArray(),
            ((OneToManyRelationshipMetadata[])r["OneToManyRelationships"]).First().ReferencingEntity,
            new OrganizationResponse()),
        PublishXmlRequest => throw new InvalidOperationException(
            "PublishXml is disabled in unit tests to skip metadata propagation waits."),
        _ => throw new NotSupportedException(request.GetType().Name)
    };

    /// <summary>Called by <see cref="MetadataOrgService"/> without a live faked context.</summary>
    public OrganizationResponse Execute(OrganizationRequest request) => Execute(request, null!);

    public Type GetResponsibleRequestType() => typeof(RetrieveAllEntitiesRequest);

    // ──────────────────────────────────────────────
    // handlers
    // ──────────────────────────────────────────────

    private OrganizationResponse RetrieveAll()
    {
        var response = new RetrieveAllEntitiesResponse();
        response.Results["EntityMetadata"] = Entities.ToArray();
        return response;
    }

    private OrganizationResponse RetrieveOne(RetrieveEntityRequest request)
    {
        var metadata = Entities.FirstOrDefault(e =>
            string.Equals(e.LogicalName, request.LogicalName, StringComparison.OrdinalIgnoreCase) ||
            string.Equals(e.SchemaName, request.LogicalName, StringComparison.OrdinalIgnoreCase));
        if (metadata == null)
            throw new InvalidOperationException($"Entity metadata not found: {request.LogicalName}");
        var response = new RetrieveEntityResponse();
        response.Results["EntityMetadata"] = metadata;
        return response;
    }

    private OrganizationResponse RetrieveAttr(RetrieveAttributeRequest request)
    {
        var entity = Entities.FirstOrDefault(e =>
            string.Equals(e.LogicalName, request.EntityLogicalName, StringComparison.OrdinalIgnoreCase))
            ?? throw new InvalidOperationException($"Entity metadata not found: {request.EntityLogicalName}");

        AttributeMetadata attribute = null;
        if (request.MetadataId is Guid id && id != Guid.Empty)
            attribute = entity.Attributes?.FirstOrDefault(a => a.MetadataId == id);
        attribute ??= entity.Attributes?.FirstOrDefault(a =>
            string.Equals(a.LogicalName, request.LogicalName, StringComparison.OrdinalIgnoreCase));

        if (attribute == null)
            throw new InvalidOperationException(
                $"Attribute metadata not found: {request.EntityLogicalName}:{request.LogicalName ?? request.MetadataId.ToString()}");

        var response = new RetrieveAttributeResponse();
        response.Results["AttributeMetadata"] = attribute;
        return response;
    }

    private OrganizationResponse CreateAttr(CreateAttributeRequest request)
    {
        var attribute = request.Attribute;
        attribute.MetadataId = Guid.NewGuid();
        AttachToEntity(request.EntityName, attribute);
        Created.Add(attribute);
        var response = new CreateAttributeResponse();
        response.Results["AttributeId"] = attribute.MetadataId;
        return response;
    }

    private OrganizationResponse UpdateAttr(UpdateAttributeRequest request)
    {
        Updated.Add(request.Attribute);
        return new OrganizationResponse();
    }

    /// <summary>
    /// Lookup creation goes through relationship requests, not CreateAttribute.
    /// Mimics Dataverse: the created lookup's Targets come from the 1:N
    /// relationships' ReferencedEntity values.
    /// </summary>
    private OrganizationResponse CreateLookup(AttributeMetadata lookupAttribute, string[] targets,
        string referencingEntity, OrganizationResponse response)
    {
        var lookup = (LookupAttributeMetadata)lookupAttribute;
        lookup.MetadataId = Guid.NewGuid();
        lookup.Targets = targets;
        AttachToEntity(referencingEntity, lookup);
        Created.Add(lookup);
        response.Results["AttributeId"] = lookup.MetadataId;
        return response;
    }

    private void AttachToEntity(string entityName, AttributeMetadata attribute)
    {
        var entity = Entities.FirstOrDefault(e =>
            string.Equals(e.LogicalName, entityName, StringComparison.OrdinalIgnoreCase));
        if (entity != null)
            typeof(EntityMetadata).GetProperty("Attributes")!.SetValue(entity,
                (entity.Attributes ?? Array.Empty<AttributeMetadata>()).Concat([attribute]).ToArray());
    }
}
