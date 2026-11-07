using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Workflow;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.GetWorkflows;

[TestClass]
public sealed class WorkflowMetadataResolverCoverageTests
{
    private sealed class ResolverOrgService : IOrganizationService
    {
        public Dictionary<string, EntityMetadata> Entities { get; } = new(StringComparer.OrdinalIgnoreCase);
        public Dictionary<Guid, Entity> WorkflowRecords { get; } = new();
        public Dictionary<(string EntityName, Guid Id), Entity> Records { get; } = new();
        public HashSet<string> FailRetrieveEntity { get; } = new(StringComparer.OrdinalIgnoreCase);
        public HashSet<Guid> FailRetrieve { get; } = new();
        public int RetrieveEntityCalls { get; private set; }
        public int RetrieveCalls { get; private set; }
        public List<string> RetrievedColumns { get; } = new();

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet)
        {
            RetrieveCalls++;
            if (columnSet?.Columns != null) RetrievedColumns.AddRange(columnSet.Columns);
            if (FailRetrieve.Contains(id)) throw new InvalidOperationException("retrieve failed");
            if (entityName == "workflow" && WorkflowRecords.TryGetValue(id, out var workflow)) return workflow;
            if (Records.TryGetValue((entityName, id), out var record)) return record;
            return new Entity(entityName, id);
        }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            if (request is RetrieveEntityRequest retrieveEntity)
            {
                RetrieveEntityCalls++;
                if (FailRetrieveEntity.Contains(retrieveEntity.LogicalName)) throw new InvalidOperationException("metadata failed");
                return new RetrieveEntityResponse { Results = { ["EntityMetadata"] = Entities[retrieveEntity.LogicalName] } };
            }
            throw new NotSupportedException(request.RequestName);
        }

        public Guid Create(Entity entity) => throw new NotSupportedException();
        public void Update(Entity entity) => throw new NotSupportedException();
        public void Delete(string entityName, Guid id) => throw new NotSupportedException();
        public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
        public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) => throw new NotSupportedException();
        public EntityCollection RetrieveMultiple(QueryBase query) => throw new NotSupportedException();
    }

    private static PicklistAttributeMetadata Picklist(string logicalName, params (int Value, string Label)[] options) =>
        new()
        {
            LogicalName = logicalName,
            OptionSet = new OptionSetMetadata(new OptionMetadataCollection(
                options.Select(o => new OptionMetadata { Value = o.Value, Label = new Label(o.Label, 1033) }).ToList()))
        };

    private static BooleanAttributeMetadata Boolean(string logicalName) =>
        new()
        {
            LogicalName = logicalName,
            OptionSet = new BooleanOptionSetMetadata(
                new OptionMetadata { Value = 1, Label = new Label("Yes", 1033) },
                new OptionMetadata { Value = 0, Label = new Label("No", 1033) })
        };

    private static EntityMetadata EntityMetadataWith(AttributeMetadata[] attributes, string primaryName = null)
    {
        var metadata = new EntityMetadata();
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.Attributes))?.SetValue(metadata, attributes);
        if (primaryName != null)
            typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.PrimaryNameAttribute))?.SetValue(metadata, primaryName);
        return metadata;
    }

    [TestMethod]
    public void FormatValue_BlankOrNullInputs_ReturnValueUnchanged()
    {
        var service = new ResolverOrgService();
        var resolver = new WorkflowMetadataResolver(service);

        Assert.IsNull(resolver.FormatValue("account", "new_option", null));
        Assert.AreEqual("", resolver.FormatValue("account", "new_option", ""));
        Assert.AreEqual("  ", resolver.FormatValue("account", "new_option", "  "));
        Assert.AreEqual("1", resolver.FormatValue(null, "new_option", "1"));
        Assert.AreEqual("1", resolver.FormatValue("account", null, "1"));
        Assert.AreEqual("1", resolver.FormatValue("account", "  ", "1"));

        var nullServiceResolver = new WorkflowMetadataResolver(null);
        Assert.AreEqual("1", nullServiceResolver.FormatValue("account", "new_option", "1"));
    }

    [TestMethod]
    public void FormatValue_EnumMetadata_UsesUserLocalizedLabelThenLocalizedLabelsThenUnknown()
    {
        var service = new ResolverOrgService();
        var localOnly = Picklist("new_local", (2, "Pending"));
        localOnly.OptionSet.Options[0].Label = new Label();
        localOnly.OptionSet.Options[0].Label.LocalizedLabels.Add(new LocalizedLabel("PendingLocal", 1033));
        var noOptions = Picklist("new_empty", (3, "Known"));
        noOptions.OptionSet.Options.Clear();
        service.Entities["account"] = EntityMetadataWith(new AttributeMetadata[]
        {
            Picklist("new_user", (1, "Active")),
            localOnly,
            noOptions
        });
        var resolver = new WorkflowMetadataResolver(service);

        Assert.AreEqual("[Active:1]", resolver.FormatValue("account", "new_user", "1"));
        Assert.AreEqual("[Active:1]", resolver.FormatValue("account", "new_user", "\"1\""));
        Assert.AreEqual("[PendingLocal:2]", resolver.FormatValue("account", "new_local", "2"));
        Assert.AreEqual("[Unknown:3]", resolver.FormatValue("account", "new_empty", "3"));
        Assert.AreEqual("abc", resolver.FormatValue("account", "new_user", "abc"));
        Assert.AreEqual("1", resolver.FormatValue("contact", "new_user", "1"));
        Assert.AreEqual("1", resolver.FormatValue("account", "missing_attribute", "1"));
    }

    [TestMethod]
    public void FormatValue_BooleanMetadata_RendersTrueFalseAndRawFallback()
    {
        var service = new ResolverOrgService();
        service.Entities["account"] = EntityMetadataWith(new AttributeMetadata[] { Boolean("new_bool") });
        var resolver = new WorkflowMetadataResolver(service);

        Assert.AreEqual("[Yes:true]", resolver.FormatValue("account", "new_bool", "true"));
        Assert.AreEqual("[Yes:true]", resolver.FormatValue("account", "new_bool", "[true]"));
        Assert.AreEqual("[No:false]", resolver.FormatValue("account", "new_bool", "false"));
        Assert.AreEqual("maybe", resolver.FormatValue("account", "new_bool", "maybe"));

        var blankLabel = Boolean("new_blank");
        blankLabel.OptionSet.TrueOption.Label = null;
        blankLabel.OptionSet.FalseOption.Label = null;
        service.Entities["other"] = EntityMetadataWith(new AttributeMetadata[] { blankLabel });
        Assert.AreEqual("true", resolver.FormatValue("other", "new_blank", "true"));
        Assert.AreEqual("false", resolver.FormatValue("other", "new_blank", "false"));
    }

    [TestMethod]
    public void FormatValue_MetadataExecuteThrows_ReturnsValueUnchanged()
    {
        var service = new ResolverOrgService();
        service.FailRetrieveEntity.Add("account");
        var resolver = new WorkflowMetadataResolver(service);

        Assert.AreEqual("1", resolver.FormatValue("account", "new_option", "1"));
    }

    [TestMethod]
    public void FormatValue_EnumMetadataWithEmptyOptions_RendersUnknown()
    {
        var service = new ResolverOrgService();
        service.Entities["account"] = EntityMetadataWith(new AttributeMetadata[] { new PicklistAttributeMetadata { LogicalName = "new_bare" } });
        var resolver = new WorkflowMetadataResolver(service);

        Assert.AreEqual("[Unknown:7]", resolver.FormatValue("account", "new_bare", "7"));
    }

    [TestMethod]
    public void GetChildWorkflowName_ParsesGuidCachesAndSwallowsFailures()
    {
        var service = new ResolverOrgService();
        var id = Guid.NewGuid();
        service.WorkflowRecords[id] = new Entity("workflow", id) { ["name"] = "Child Workflow" };
        var resolver = new WorkflowMetadataResolver(service);

        Assert.AreEqual("Child Workflow", resolver.GetChildWorkflowName(id.ToString()));
        Assert.AreEqual("Child Workflow", resolver.GetChildWorkflowName(id.ToString("B")));
        Assert.AreEqual(1, service.RetrieveCalls);

        Assert.IsNull(resolver.GetChildWorkflowName("not-a-guid"));
        Assert.IsNull(resolver.GetChildWorkflowName(Guid.NewGuid().ToString()));

        service.FailRetrieve.Add(Guid.NewGuid());
        Assert.IsNull(resolver.GetChildWorkflowName(service.FailRetrieve.Single().ToString()));

        var nullServiceResolver = new WorkflowMetadataResolver(null);
        Assert.IsNull(nullServiceResolver.GetChildWorkflowName(id.ToString()));
    }

    [TestMethod]
    public void FormatLookup_ResolvesPrimaryNameWhenMissing()
    {
        var service = new ResolverOrgService();
        var id = Guid.NewGuid();
        service.Entities["account"] = EntityMetadataWith(Array.Empty<AttributeMetadata>(), "name");
        service.Records[("account", id)] = new Entity("account", id) { ["name"] = "Resolved Account" };
        service.Entities["note"] = EntityMetadataWith(Array.Empty<AttributeMetadata>());
        var resolver = new WorkflowMetadataResolver(service);

        Assert.AreEqual("account:[Resolved Account:" + id + "]", resolver.FormatLookup("account", null, id.ToString()));
        Assert.AreEqual("account:[Known:" + id + "]", resolver.FormatLookup("account", "Known", id.ToString()));
        Assert.AreEqual("note:[Unknown:" + id + "]", resolver.FormatLookup("note", "", id.ToString()));
        Assert.AreEqual("account:[Unknown:not-a-guid]", resolver.FormatLookup("account", null, "not-a-guid"));
        Assert.AreEqual("account:[Unknown:" + id + "]", new WorkflowMetadataResolver(null).FormatLookup("account", null, id.ToString()));
    }

    [TestMethod]
    public void FormatLookup_RetrieveFailure_ReturnsUnknown()
    {
        var service = new ResolverOrgService();
        var id = Guid.NewGuid();
        service.Entities["account"] = EntityMetadataWith(Array.Empty<AttributeMetadata>(), "name");
        service.FailRetrieve.Add(id);
        var resolver = new WorkflowMetadataResolver(service);

        Assert.AreEqual("account:[Unknown:" + id + "]", resolver.FormatLookup("account", null, id.ToString()));
    }

    [TestMethod]
    public void GetEntity_CachesMetadataPerEntityName()
    {
        var service = new ResolverOrgService();
        service.Entities["account"] = EntityMetadataWith(new AttributeMetadata[] { Picklist("new_option", (1, "Active")) });
        var resolver = new WorkflowMetadataResolver(service);

        Assert.AreEqual("[Active:1]", resolver.FormatValue("account", "new_option", "1"));
        Assert.AreEqual("[Active:1]", resolver.FormatValue("ACCOUNT", "new_option", "1"));

        Assert.AreEqual(1, service.RetrieveEntityCalls);
    }
}
