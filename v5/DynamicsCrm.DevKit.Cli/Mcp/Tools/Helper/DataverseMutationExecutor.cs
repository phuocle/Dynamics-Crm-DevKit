#nullable enable
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper
{
    /// <summary>
    /// Fail-closed wrapper around <see cref="IOrganizationService"/> mutation calls.
    /// Every Create/Update/Delete/Associate/Disassociate and mutating
    /// <see cref="OrganizationRequest"/> must go through this executor so the
    /// mutation gateway cannot be bypassed by a caller that forgets the
    /// action-level <c>if (_options.DryRun)</c> preview.
    /// </summary>
    /// <remarks>
    /// <para>
    /// The executor delegates to <see cref="McpExecutionContext.AssertMutationAllowed"/>
    /// before every SDK write. When the server is in dry-run mode the assertion
    /// throws <see cref="InvalidOperationException"/> and no Dataverse call is made.
    /// </para>
    /// <para>
    /// Read-only requests (Retrieve, RetrieveMultiple, RetrieveEntityRequest, etc.)
    /// must NOT go through this executor — they are allowed in dry-run mode.
    /// </para>
    /// </remarks>
    internal static class DataverseMutationExecutor
    {
        /// <summary>
        /// Create a record, asserting mutation is allowed first.
        /// </summary>
        internal static Guid Create(McpExecutionContext context, IOrganizationService service, Entity entity)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            context.AssertMutationAllowed($"Create {entity?.LogicalName ?? "(unknown)"}");
            return service.Create(entity);
        }

        /// <summary>
        /// Create a record asynchronously, asserting mutation is allowed first.
        /// </summary>
        internal static Task<Guid> CreateAsync(
            McpExecutionContext context,
            Microsoft.PowerPlatform.Dataverse.Client.IOrganizationServiceAsync2 service,
            Entity entity,
            CancellationToken cancellationToken)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            context.AssertMutationAllowed($"CreateAsync {entity?.LogicalName ?? "(unknown)"}");
            return service.CreateAsync(entity, cancellationToken);
        }

        /// <summary>
        /// Update a record, asserting mutation is allowed first.
        /// </summary>
        internal static void Update(McpExecutionContext context, IOrganizationService service, Entity entity)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            context.AssertMutationAllowed($"Update {entity?.LogicalName ?? "(unknown)"}");
            service.Update(entity);
        }

        /// <summary>
        /// Delete a record, asserting mutation is allowed first.
        /// </summary>
        internal static void Delete(McpExecutionContext context, IOrganizationService service, string entityName, Guid id)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            context.AssertMutationAllowed($"Delete {entityName} {id}");
            service.Delete(entityName, id);
        }

        /// <summary>
        /// Associate records, asserting mutation is allowed first.
        /// </summary>
        internal static void Associate(
            McpExecutionContext context,
            IOrganizationService service,
            string entityName,
            Guid entityId,
            Relationship relationship,
            EntityReferenceCollection relatedEntities)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            context.AssertMutationAllowed($"Associate {entityName} {entityId}");
            service.Associate(entityName, entityId, relationship, relatedEntities);
        }

        /// <summary>
        /// Disassociate records, asserting mutation is allowed first.
        /// </summary>
        internal static void Disassociate(
            McpExecutionContext context,
            IOrganizationService service,
            string entityName,
            Guid entityId,
            Relationship relationship,
            EntityReferenceCollection relatedEntities)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            context.AssertMutationAllowed($"Disassociate {entityName} {entityId}");
            service.Disassociate(entityName, entityId, relationship, relatedEntities);
        }

        /// <summary>
        /// Execute a mutating <see cref="OrganizationRequest"/>, asserting mutation
        /// is allowed first. Use <see cref="ExecuteReadOnly"/> for read requests.
        /// </summary>
        internal static OrganizationResponse Execute(
            McpExecutionContext context,
            IOrganizationService service,
            OrganizationRequest request)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            context.AssertMutationAllowed($"Execute {request?.RequestName ?? "(unknown)"}");
            return service.Execute(request);
        }

        /// <summary>
        /// Execute a mutating <see cref="OrganizationRequest"/> asynchronously,
        /// asserting mutation is allowed first. Use for requests that carry
        /// optional parameters (e.g. <c>BypassBusinessLogicExecution</c>) which
        /// only work via <c>Execute(CreateRequest/UpdateRequest)</c>, not the
        /// convenience <c>Create</c>/<c>Update</c> overloads.
        /// </summary>
        internal static async Task<OrganizationResponse> ExecuteAsync(
            McpExecutionContext context,
            Microsoft.PowerPlatform.Dataverse.Client.IOrganizationServiceAsync2 service,
            OrganizationRequest request,
            CancellationToken cancellationToken)
        {
            if (context == null) throw new ArgumentNullException(nameof(context));
            context.AssertMutationAllowed($"ExecuteAsync {request?.RequestName ?? "(unknown)"}");
            return await service.ExecuteAsync(request, cancellationToken).ConfigureAwait(false);
        }

        /// <summary>
        /// Execute a read-only <see cref="OrganizationRequest"/>. This is allowed in
        /// dry-run mode because it does not change Dataverse state. Only use this for
        /// requests that are genuinely read-only (Retrieve, RetrieveMultiple,
        /// RetrieveEntityRequest, RetrieveRelationshipRequest, WhoAmIRequest, etc.).
        /// </summary>
        internal static OrganizationResponse ExecuteReadOnly(
            IOrganizationService service,
            OrganizationRequest request)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            // Do not trust the helper name or RequestName. Keep an explicit
            // type allow-list so a new caller cannot accidentally route a
            // mutating request around the gateway.
            if (request is not RetrieveRequest &&
                request is not RetrieveMultipleRequest &&
                request is not RetrieveEntityRequest &&
                request is not RetrieveAttributeRequest &&
                request is not RetrieveRelationshipRequest &&
                request is not RetrieveAllEntitiesRequest &&
                request is not RetrieveAllOptionSetsRequest &&
                request is not RetrieveOptionSetRequest &&
                request is not Microsoft.Crm.Sdk.Messages.WhoAmIRequest &&
                request is not Microsoft.Crm.Sdk.Messages.InitializeFileBlocksDownloadRequest &&
                request is not Microsoft.Crm.Sdk.Messages.DownloadBlockRequest)
            {
                throw new InvalidOperationException(
                    $"Request type '{request.GetType().Name}' is not allow-listed as read-only.");
            }

            if (service == null) throw new ArgumentNullException(nameof(service));

            return service.Execute(request);
        }
    }
}
