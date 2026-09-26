#nullable enable
using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Threading;

namespace DynamicsCrm.DevKit.Cli.Tool;

/// <summary>
/// Service providers for the shared tool catalog and the in-process invocation
/// scope. <see cref="CreateSchemaServices"/> serves offline catalog/schema work
/// (no network, no connected client); <see cref="CreateInvocationServices"/>
/// registers exactly what the MCP stdio host registers via
/// <see cref="McpServerHost.RegisterSharedServices"/>.
/// </summary>
public static class ToolServices
{
    /// <summary>
    /// Infrastructure types that tool methods or tool constructors receive via
    /// dependency injection. Registering them makes
    /// <see cref="IServiceProviderIsService.IsService"/> true at
    /// <see cref="McpServerTool.Create(MethodInfo, object, McpServerToolCreateOptions)"/>
    /// time, so the SDK binds them from DI and keeps them out of the generated
    /// InputSchema. Factories return null — schema work never constructs instances.
    /// </summary>
    private static readonly Type[] InfrastructureTypes =
    [
        typeof(ServiceClient),
        typeof(MetadataService),
        typeof(IOrganizationService),
        typeof(IOrganizationServiceAsync2),
        typeof(IMcpConnectionInfo),
        typeof(IWebApiExecutor),
        typeof(McpDryRunOptions),
        typeof(McpExecutionContext),
        typeof(McpExecutionPolicy),
        typeof(McpServer),
    ];

    /// <summary>
    /// Registers the schema-service set on an arbitrary collection. Used by
    /// <see cref="CreateSchemaServices"/> and by tests that must register the same
    /// set before <c>WithToolsFromAssembly</c> to prove catalog equivalence.
    /// </summary>
    internal static void AddSchemaServices(IServiceCollection services)
    {
        foreach (var type in GetSchemaServiceTypes())
            services.AddSingleton(type, _ => null!);
    }

    /// <summary>
    /// Minimal provider for offline catalog/schema work. Every infrastructure
    /// type resolves <c>IsService</c> as true but returns null on resolve, so
    /// no <see cref="ServiceClient"/> is ever constructed.
    /// </summary>
    public static IServiceProvider CreateSchemaServices()
    {
        var services = new ServiceCollection();
        AddSchemaServices(services);
        return services.BuildServiceProvider();
    }

    /// <summary>
    /// Invocation scope for one tool call: the same registrations the stdio host
    /// makes at startup (client, interface projections, connection info, Web API
    /// executor, execution policy with its projections). The caller owns disposal.
    /// </summary>
    public static IServiceProvider CreateInvocationServices(ServiceClient serviceClient, bool dryRun, string? impersonatedUserDisplay)
    {
        var services = new ServiceCollection();
        McpServerHost.RegisterSharedServices(services, serviceClient, dryRun, impersonatedUserDisplay);
        return services.BuildServiceProvider();
    }

    /// <summary>
    /// The schema-service exclusion set: the static base list plus every
    /// non-schema-representable parameter type found on attributed tool methods,
    /// so a newly introduced infrastructure parameter type is picked up
    /// automatically instead of silently leaking into a schema. The catalog-wide
    /// test fails if this ever drifts.
    /// </summary>
    internal static IEnumerable<Type> GetSchemaServiceTypes()
    {
        var types = new List<Type>(InfrastructureTypes);
        foreach (var toolType in GetToolTypes())
        {
            foreach (var method in ToolCatalog.GetAttributedToolMethods(toolType))
            {
                foreach (var parameter in method.GetParameters())
                {
                    if (parameter.ParameterType == typeof(CancellationToken)) continue; // SDK special-case
                    if (IsJsonSchemaRepresentable(parameter.ParameterType)) continue;
                    types.Add(parameter.ParameterType);
                }
            }
        }

        return types.Distinct();
    }

    internal static IEnumerable<Type> GetToolTypes() =>
        typeof(McpServerHost).Assembly.GetTypes()
            .Where(t => t.GetCustomAttribute<McpServerToolTypeAttribute>() is not null);

    /// <summary>
    /// True when the SDK can express the type as JSON Schema and bind it from
    /// JSON arguments. When in doubt, return false: not registering a type only
    /// risks a schema leak that the catalog-wide test catches, while registering
    /// a schema-representable type would wrongly hide it from the schema.
    /// </summary>
    private static bool IsJsonSchemaRepresentable(Type type)
    {
        var t = Nullable.GetUnderlyingType(type) ?? type;
        if (t.IsPrimitive || t.IsEnum) return true;
        if (t == typeof(string) || t == typeof(decimal) || t == typeof(object)) return true;
        if (t == typeof(Guid) || t == typeof(DateTime) || t == typeof(DateTimeOffset) || t == typeof(TimeSpan)) return true;
        if (t == typeof(Uri) || t == typeof(JsonElement)) return true;
        if (t.IsArray) return IsJsonSchemaRepresentable(t.GetElementType()!);
        if (t.IsGenericType)
        {
            var definition = t.GetGenericTypeDefinition();
            if (definition == typeof(IEnumerable<>) || definition == typeof(ICollection<>) ||
                definition == typeof(IList<>) || definition == typeof(IReadOnlyCollection<>) ||
                definition == typeof(IReadOnlyList<>))
                return IsJsonSchemaRepresentable(t.GetGenericArguments()[0]);
            if (definition == typeof(IDictionary<,>) || definition == typeof(Dictionary<,>))
                return t.GetGenericArguments()[0] == typeof(string) &&
                       IsJsonSchemaRepresentable(t.GetGenericArguments()[1]);
        }

        return false;
    }
}
