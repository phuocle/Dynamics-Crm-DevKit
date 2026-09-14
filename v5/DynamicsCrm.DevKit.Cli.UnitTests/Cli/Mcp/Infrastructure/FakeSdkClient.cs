using HarmonyLib;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Concurrent;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

/// <summary>
/// A ServiceClient test double whose SDK surface is detoured per instance.
/// ServiceClient's IOrganizationService members are final virtual, so a
/// derived adapter or FakeItEasy proxy cannot override them; Lib.Harmony
/// replaces them at the JIT level instead. Handlers are registered against
/// the specific uninitialized ServiceClient instance, so MSTest's
/// method-level parallelization never routes a call to another test's
/// handler. Unregistered instances fall through to the original
/// implementation (which fails on the uninitialized connection state).
/// </summary>
public sealed class FakeSdkClient : IDisposable
{
    private static readonly ConcurrentDictionary<ServiceClient, FakeSdkClient> Registry = new();

    static FakeSdkClient() => Arm.Patch();

    private static class Arm
    {
        internal static void Patch()
        {
            var harmony = new Harmony("devkit.test.fakesdkclient");
            harmony.CreateClassProcessor(typeof(Detours)).Patch();
        }
    }

    public ServiceClient Client { get; } = (ServiceClient)RuntimeHelpers.GetUninitializedObject(typeof(ServiceClient));

    public FakeSdkClient()
    {
        Registry[Client] = this;
        CloneClient = (ServiceClient)RuntimeHelpers.GetUninitializedObject(typeof(ServiceClient));
        Registry[CloneClient] = this;
    }

    /// <summary>Second uninitialized client returned by <see cref="ServiceClient.Clone"/> detour.</summary>
    private ServiceClient CloneClient { get; }

    public Func<OrganizationRequest, OrganizationResponse>? OnExecute { get; set; }
    public Func<QueryBase, EntityCollection>? OnRetrieveMultiple { get; set; }
    public Func<string, Guid, ColumnSet, Entity>? OnRetrieve { get; set; }
    public Func<Entity, Guid>? OnCreate { get; set; }
    public Action<Entity>? OnUpdate { get; set; }
    public Action<string, Guid>? OnDelete { get; set; }
    public int RecommendedDegreesOfParallelism { get; set; } = 4;

    /// <summary>When true, Clone() returns null so tools exercise their fallback path.</summary>
    public bool CloneReturnsNull { get; set; }

    public void Dispose()
    {
        Registry.TryRemove(Client, out _);
        Registry.TryRemove(CloneClient, out _);
    }

    private static class Detours
    {
        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.Execute))]
        public static bool ExecutePrefix(ServiceClient __instance, OrganizationRequest request, ref OrganizationResponse __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnExecute is null) return true;
            __result = fake.OnExecute(request);
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), "ExecuteOrganizationRequestImpl",
            typeof(OrganizationRequest), typeof(string), typeof(bool), typeof(bool))]
        public static bool ExecuteOrgRequestImplPrefix(ServiceClient __instance, OrganizationRequest req, ref OrganizationResponse __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnExecute is null) return true;
            __result = fake.OnExecute(req);
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.RetrieveMultiple), typeof(QueryBase))]
        public static bool RetrieveMultiplePrefix(ServiceClient __instance, QueryBase query, ref EntityCollection __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnRetrieveMultiple is null) return true;
            __result = fake.OnRetrieveMultiple(query);
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.Retrieve), typeof(string), typeof(Guid), typeof(ColumnSet))]
        public static bool RetrievePrefix(ServiceClient __instance, string entityName, Guid id, ColumnSet columnSet, ref Entity __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnRetrieve is null) return true;
            __result = fake.OnRetrieve(entityName, id, columnSet);
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.Create))]
        public static bool CreatePrefix(ServiceClient __instance, Entity entity, ref Guid __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnCreate is null) return true;
            __result = fake.OnCreate(entity);
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.Update))]
        public static bool UpdatePrefix(ServiceClient __instance, Entity entity)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnUpdate is null) return true;
            fake.OnUpdate(entity);
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.Delete), typeof(string), typeof(Guid))]
        public static bool DeletePrefix(ServiceClient __instance, string entityName, Guid id)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnDelete is null) return true;
            fake.OnDelete(entityName, id);
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.Associate))]
        public static bool AssociatePrefix(ServiceClient __instance, string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities)
        {
            if (!Registry.TryGetValue(__instance, out var fake)) return true;
            fake.OnExecute?.Invoke(new Microsoft.Xrm.Sdk.Messages.AssociateRequest
            {
                Target = new EntityReference(entityName, entityId),
                Relationship = relationship,
                RelatedEntities = relatedEntities
            });
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.Disassociate))]
        public static bool DisassociatePrefix(ServiceClient __instance, string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities)
        {
            if (!Registry.TryGetValue(__instance, out var fake)) return true;
            fake.OnExecute?.Invoke(new Microsoft.Xrm.Sdk.Messages.DisassociateRequest
            {
                Target = new EntityReference(entityName, entityId),
                Relationship = relationship,
                RelatedEntities = relatedEntities
            });
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.Clone), typeof(Microsoft.Extensions.Logging.ILogger))]
        public static bool ClonePrefix(ServiceClient __instance, ref ServiceClient? __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake)) return true;
            __result = fake.CloneReturnsNull ? null : fake.CloneClient;
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.Clone), typeof(Assembly), typeof(Microsoft.Extensions.Logging.ILogger))]
        public static bool CloneWithAssemblyPrefix(ServiceClient __instance, ref ServiceClient? __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake)) return true;
            __result = fake.CloneReturnsNull ? null : fake.CloneClient;
            return false;
        }

        // ── async variants (IOrganizationServiceAsync2) share the sync handlers ──

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.ExecuteAsync),
            typeof(OrganizationRequest), typeof(CancellationToken))]
        public static bool ExecuteAsyncPrefix(ServiceClient __instance, OrganizationRequest request, ref Task<OrganizationResponse> __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnExecute is null) return true;
            __result = Task.FromResult(fake.OnExecute(request));
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.RetrieveMultipleAsync),
            typeof(QueryBase), typeof(CancellationToken))]
        public static bool RetrieveMultipleAsyncPrefix(ServiceClient __instance, QueryBase query, ref Task<EntityCollection> __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnRetrieveMultiple is null) return true;
            __result = Task.FromResult(fake.OnRetrieveMultiple(query));
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.RetrieveAsync),
            typeof(string), typeof(Guid), typeof(ColumnSet), typeof(CancellationToken))]
        public static bool RetrieveAsyncPrefix(ServiceClient __instance, string entityName, Guid id, ColumnSet columnSet, ref Task<Entity> __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnRetrieve is null) return true;
            __result = Task.FromResult(fake.OnRetrieve(entityName, id, columnSet));
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.CreateAsync),
            typeof(Entity), typeof(CancellationToken))]
        public static bool CreateAsyncPrefix(ServiceClient __instance, Entity entity, ref Task<Guid> __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnCreate is null) return true;
            __result = Task.FromResult(fake.OnCreate(entity));
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.UpdateAsync),
            typeof(Entity), typeof(CancellationToken))]
        public static bool UpdateAsyncPrefix(ServiceClient __instance, Entity entity, ref Task __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnUpdate is null) return true;
            fake.OnUpdate(entity);
            __result = Task.CompletedTask;
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), nameof(ServiceClient.DeleteAsync),
            typeof(string), typeof(Guid), typeof(CancellationToken))]
        public static bool DeleteAsyncPrefix(ServiceClient __instance, string entityName, Guid id, ref Task __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake) || fake.OnDelete is null) return true;
            fake.OnDelete(entityName, id);
            __result = Task.CompletedTask;
            return false;
        }

        [HarmonyPrefix]
        [HarmonyPatch(typeof(ServiceClient), "get_RecommendedDegreesOfParallelism")]
        public static bool RecommendedDopPrefix(ServiceClient __instance, ref int __result)
        {
            if (!Registry.TryGetValue(__instance, out var fake)) return true;
            __result = fake.RecommendedDegreesOfParallelism;
            return false;
        }
    }
}
