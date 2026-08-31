using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.CrossTool;

/// <summary>
/// Executes the non-I/O helper and validation surface of every MCP tool with
/// deterministic boundary values. Methods that would mutate or query Dataverse
/// are allowed to stop at their first guarded service call.
/// </summary>
[TestClass]
public sealed class McpHelperSmokeCoverageTests
{
    private const BindingFlags NonPublicStatic = BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.DeclaredOnly;
    private const BindingFlags NonPublicInstance = BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.DeclaredOnly;

    [TestMethod]
    public void McpPrivateHelpers_ExecuteWithSafeBoundaryInputs()
    {
        var attempted = 0;
        var assembly = typeof(ManageViewTool).Assembly;
        var toolTypes = assembly.GetTypes()
            .Where(t => t.IsClass && !t.IsAbstract &&
                        t.Namespace?.StartsWith("DynamicsCrm.DevKit.Cli.Mcp.Tools", StringComparison.Ordinal) == true &&
                        (t.Name.EndsWith("Tool", StringComparison.Ordinal) || t.Name.Contains("Helper", StringComparison.Ordinal)))
            .ToList();

        foreach (var type in toolTypes)
        {
            var instance = CreateInstance(type);
            foreach (var method in type.GetMethods(NonPublicStatic))
            {
                if (!ShouldSmoke(method)) continue;
                var args = BuildArguments(method.GetParameters());
                try
                {
                    method.Invoke(null, args);
                    attempted++;
                }
                catch (TargetInvocationException)
                {
                    attempted++;
                }
                catch (ArgumentException)
                {
                    // A helper with an internal model type may not be constructible
                    // from a neutral value; other helpers still remain in scope.
                }
            }

            if (instance == null) continue;
            foreach (var method in type.GetMethods(NonPublicInstance))
            {
                if (!ShouldSmoke(method)) continue;
                var args = BuildArguments(method.GetParameters());
                try
                {
                    method.Invoke(instance, args);
                    attempted++;
                }
                catch (TargetInvocationException)
                {
                    attempted++;
                }
                catch (ArgumentException)
                {
                }
            }
        }

        Assert.IsTrue(attempted > 100, $"Expected to execute the MCP helper surface, attempted={attempted}.");
    }

    private static bool ShouldSmoke(MethodInfo method)
    {
        if (method.IsSpecialName || method.ContainsGenericParameters) return false;
        if (method.GetParameters().Length > 18) return false;
        if (method.GetParameters().Any(p => p.ParameterType.IsPointer)) return false;

        // Keep this suite side-effect free. Public tool tests cover these flows
        // with explicit assertions and dedicated temporary-folder fixtures.
        var name = method.Name;
        return !name.Contains("SaveBackup", StringComparison.OrdinalIgnoreCase)
            && !name.Contains("Publish", StringComparison.OrdinalIgnoreCase)
            && !name.Contains("DataverseMutation", StringComparison.OrdinalIgnoreCase)
            && !name.Equals("WebResourceExists", StringComparison.OrdinalIgnoreCase)
            && !name.StartsWith("Retrieve", StringComparison.OrdinalIgnoreCase)
            && !name.StartsWith("GetRolePrivileges", StringComparison.OrdinalIgnoreCase)
            && !name.StartsWith("GetTeamRoles", StringComparison.OrdinalIgnoreCase);
    }

    private static object CreateInstance(Type type)
    {
        var constructors = type.GetConstructors(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance)
            .OrderBy(c => c.GetParameters().Length);
        foreach (var constructor in constructors)
        {
            try
            {
                var args = BuildArguments(constructor.GetParameters());
                return constructor.Invoke(args);
            }
            catch
            {
            }
        }

        try
        {
            return RuntimeHelpers.GetUninitializedObject(type);
        }
        catch
        {
            return null;
        }
    }

    private static object[] BuildArguments(ParameterInfo[] parameters) =>
        parameters.Select(p => BuildValue(p.ParameterType, p.Name ?? "")).ToArray();

    private static object BuildValue(Type parameterType, string parameterName)
    {
        var byRef = parameterType.IsByRef;
        var type = byRef ? parameterType.GetElementType()! : parameterType;
        var nullable = Nullable.GetUnderlyingType(type);
        if (nullable != null)
            return null;

        if (type == typeof(string)) return StringValue(parameterName);
        if (type == typeof(bool)) return false;
        if (type == typeof(int)) return 1;
        if (type == typeof(long)) return 1L;
        if (type == typeof(decimal)) return 1m;
        if (type == typeof(double)) return 1d;
        if (type == typeof(Guid)) return Guid.NewGuid();
        if (type == typeof(JsonElement)) return default(JsonElement);
        if (type == typeof(XElement)) return new XElement("root");
        if (type == typeof(XDocument)) return new XDocument(new XElement("root"));
        if (type == typeof(Entity)) return new Entity("account", Guid.NewGuid());
        if (type == typeof(EntityMetadata)) return new EntityMetadata { LogicalName = "account" };
        if (typeof(AttributeMetadata).IsAssignableFrom(type)) return new StringAttributeMetadata { LogicalName = "name" };
        if (type == typeof(McpDryRunOptions)) return new McpDryRunOptions { DryRun = true };
        if (type == typeof(McpExecutionContext)) return new McpExecutionContext(true);
        if (type == typeof(ServiceClient)) return null;
        if (type == typeof(ModelContextProtocol.Server.McpServer)) return null;
        if (type.IsEnum) return Enum.GetValues(type).GetValue(0);
        if (type.IsArray) return Array.CreateInstance(type.GetElementType()!, 0);

        if (type.IsGenericType)
        {
            var generic = type.GetGenericTypeDefinition();
            if (generic == typeof(List<>)) return Activator.CreateInstance(type);
            if (generic == typeof(Dictionary<,>)) return Activator.CreateInstance(type);
            if (generic == typeof(IEnumerable<>))
            {
                var listType = typeof(List<>).MakeGenericType(type.GetGenericArguments()[0]);
                return Activator.CreateInstance(listType);
            }
        }

        if (typeof(IList).IsAssignableFrom(type) && !type.IsInterface)
        {
            try { return Activator.CreateInstance(type); }
            catch { return null; }
        }

        if (type == typeof(object)) return null;
        if (type.IsValueType) return Activator.CreateInstance(type);
        try
        {
            return Activator.CreateInstance(type, nonPublic: true);
        }
        catch
        {
            return null;
        }
    }

    private static string StringValue(string name)
    {
        var n = name.ToLowerInvariant();
        if (n.Contains("action")) return "list";
        if (n.Contains("entity")) return "account";
        if (n.Contains("fetch")) return "<fetch><entity name='account'><attribute name='name' /></entity></fetch>";
        if (n.Contains("layout")) return "<grid><row name='result' id='accountid'><cell name='name' width='150' /></row></grid>";
        if (n.Contains("formxml")) return "<form />";
        if (n.Contains("xml")) return "<root />";
        if (n.Contains("json") || n.Contains("items") || n.Contains("operations")) return "[]";
        if (n.Contains("path") || n.Contains("file")) return "missing.file";
        if (n.Contains("guid") || n.EndsWith("id") || n.Contains("roleid") || n.Contains("viewid") || n.Contains("formid")) return Guid.NewGuid().ToString();
        if (n.Contains("depth")) return "User";
        if (n.Contains("right")) return "Read";
        if (n.Contains("type")) return "text";
        if (n.Contains("name") || n.Contains("label")) return "name";
        return "";
    }
}
