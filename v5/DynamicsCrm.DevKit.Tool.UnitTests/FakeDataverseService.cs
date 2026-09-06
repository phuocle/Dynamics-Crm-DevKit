using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Query;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    /// <summary>
    /// Hand-rolled IOrganizationService fake. Configure handlers before use;
    /// unhandled requests throw NotImplementedException (caught by best-effort code paths).
    /// </summary>
    internal class FakeDataverseService : IOrganizationService
    {
        public Func<OrganizationRequest, OrganizationResponse> ExecuteHandler;
        public Func<QueryBase, EntityCollection> RetrieveMultipleHandler;
        public Func<string, Guid, ColumnSet, Entity> RetrieveHandler;
        public Func<Entity, Guid> CreateHandler;
        public Action<Entity> UpdateAction;
        public List<Entity> Updated { get; } = new List<Entity>();
        public List<OrganizationRequest> Executed { get; } = new List<OrganizationRequest>();
        public List<QueryBase> Queried { get; } = new List<QueryBase>();

        public Guid Create(Entity entity) => CreateHandler?.Invoke(entity) ?? Guid.NewGuid();

        public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet)
        {
            if (RetrieveHandler != null) return RetrieveHandler(entityName, id, columnSet);
            throw new NotImplementedException($"Retrieve {entityName}");
        }

        public void Update(Entity entity)
        {
            Updated.Add(entity);
            UpdateAction?.Invoke(entity);
        }

        public void Delete(string entityName, Guid id) { }

        public void Associate(string entityName, Guid entityId, Microsoft.Xrm.Sdk.Relationship relationshipName, EntityReferenceCollection relatedEntities) { }

        public void Disassociate(string entityName, Guid entityId, Microsoft.Xrm.Sdk.Relationship relationshipName, EntityReferenceCollection relatedEntities) { }

        public EntityCollection RetrieveMultiple(QueryBase query)
        {
            Queried.Add(query);
            if (RetrieveMultipleHandler != null) return RetrieveMultipleHandler(query);
            throw new NotImplementedException($"RetrieveMultiple {Describe(query)}");
        }

        public OrganizationResponse Execute(OrganizationRequest request)
        {
            Executed.Add(request);
            if (ExecuteHandler != null) return ExecuteHandler(request);
            throw new NotImplementedException($"Execute {request.RequestName}");
        }

        private static string Describe(QueryBase query)
        {
            switch (query)
            {
                case FetchExpression fetch:
                {
                    var entityMatch = System.Text.RegularExpressions.Regex.Match(
                        fetch.Query ?? string.Empty, @"<entity name=""(?<name>[^""]+)""");
                    return entityMatch.Success ? entityMatch.Groups["name"].Value : "fetch";
                }
                case QueryExpression qe:
                    return qe.EntityName;
                default:
                    return query?.GetType().Name ?? "null";
            }
        }

        // ───────────────────────── response builders ─────────────────────────

        public static T Response<T>(string key, object value) where T : OrganizationResponse, new()
        {
            var response = new T();
            response[key] = value;
            return response;
        }

        private static Label MakeLabel(string text)
        {
            var label = new Label(text, 1033);
            label.UserLocalizedLabel = new LocalizedLabel(text, 1033);
            return label;
        }

public static OptionMetadata Option(int value, string label) =>
            new OptionMetadata(MakeLabel(label), value);

        public static OptionSetMetadata OptSet(params OptionMetadata[] options) =>
            new OptionSetMetadata(new OptionMetadataCollection(options));

        public static ExecuteMultipleResponse BuildExecuteMultipleResponse(List<(int requestIndex, EntityCollection rows)> successes,
            List<(int requestIndex, string faultMessage)> faults = null)
        {
            var items = new ExecuteMultipleResponseItemCollection();
            foreach (var (requestIndex, rows) in successes)
            {
                var item = new ExecuteMultipleResponseItem { RequestIndex = requestIndex, Response = Response<RetrieveMultipleResponse>("EntityCollection", rows) };
                items.Add(item);
            }
            foreach (var (requestIndex, faultMessage) in faults ?? new List<(int, string)>())
            {
                var item = new ExecuteMultipleResponseItem { RequestIndex = requestIndex, Fault = new OrganizationServiceFault { Message = faultMessage } };
                items.Add(item);
            }
            return Response<ExecuteMultipleResponse>("Responses", items);
        }

        public static string ComponentJson(params (string key, string value)[] attributes)
        {
            var entries = string.Join(",", attributes.Select(a => $"{{\"Key\":\"{a.key}\",\"Value\":\"{a.value}\"}}"));
            return $"{{\"Attributes\":[{entries}]}}";
        }

        public static EntityCollection Rows(params Entity[] entities) => new EntityCollection(entities.ToList());

        public static Entity Row(string entityName, Guid id, params (string key, object value)[] attributes)
        {
            var entity = new Entity(entityName, id);
            foreach (var (key, value) in attributes)
                entity[key] = value;
            return entity;
        }

        // helper for Execute dispatching on RetrieveMetadataChangesRequest variants
        public static string FirstConditionAttribute(OrganizationRequest request)
        {
            if (request is RetrieveMetadataChangesRequest rmr && rmr.Query is EntityQueryExpression eqe)
            {
                var condition = eqe.Criteria.Conditions.FirstOrDefault();
                return condition?.PropertyName;
            }
            return null;
        }
    }
}

internal static partial class FakeDataverseServiceExtensions
{
}
