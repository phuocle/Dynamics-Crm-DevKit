using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.Shared;

/// <summary>
/// Exercises the internal MCP response DTOs as consumers do: every writable
/// property can be assigned and the resulting payload can be serialized.
/// </summary>
[TestClass]
public class McpResultModelCoverageTests
{
    private static readonly Assembly CliAssembly = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly;

    [TestMethod]
    public void McpResultModels_CanPopulateAndSerializeEveryWritableProperty()
    {
        var models = CliAssembly.GetTypes()
            .Where(type => type.Namespace == "DynamicsCrm.DevKit.Cli.Mcp.Tools.Models")
            .Where(type => type.IsClass && !type.IsAbstract && type.GetConstructor(Type.EmptyTypes) != null)
            .ToArray();

        Assert.IsTrue(models.Length >= 90, "Expected the MCP response-model inventory to remain available.");

        foreach (var modelType in models)
        {
            var instance = Activator.CreateInstance(modelType)!;
            foreach (var property in modelType.GetProperties(BindingFlags.Instance | BindingFlags.Public)
                         .Where(property => property.CanWrite && property.GetIndexParameters().Length == 0))
            {
                property.SetValue(instance, CreateValue(property.PropertyType));
                Assert.IsNotNull(property.GetValue(instance), $"{modelType.Name}.{property.Name} was not retained.");
            }

            var json = JsonSerializer.Serialize(instance, modelType);
            Assert.IsFalse(string.IsNullOrWhiteSpace(json), $"{modelType.Name} did not produce JSON.");
        }
    }

    private static object CreateValue(Type type)
    {
        var nullableType = Nullable.GetUnderlyingType(type);
        if (nullableType != null)
        {
            return Activator.CreateInstance(nullableType)!;
        }

        if (type == typeof(string)) return "value";
        if (type == typeof(bool)) return true;
        if (type == typeof(int)) return 1;
        if (type == typeof(long)) return 1L;
        if (type == typeof(double)) return 1.5d;
        if (type == typeof(decimal)) return 1.5m;
        if (type == typeof(DateTime)) return new DateTime(2026, 1, 2, 3, 4, 5, DateTimeKind.Utc);
        if (type == typeof(Guid)) return Guid.Parse("11111111-1111-1111-1111-111111111111");
        if (type.IsEnum) return Enum.GetValues(type).GetValue(0)!;

        if (type.IsArray)
        {
            return Array.CreateInstance(type.GetElementType()!, 0);
        }

        if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(Dictionary<,>))
        {
            return Activator.CreateInstance(type)!;
        }

        if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(List<>))
        {
            return Activator.CreateInstance(type)!;
        }

        if (typeof(IEnumerable).IsAssignableFrom(type) && type.IsInterface)
        {
            return Activator.CreateInstance(typeof(List<>).MakeGenericType(type.GetGenericArguments()[0]))!;
        }

        return type.GetConstructor(Type.EmptyTypes) != null
            ? Activator.CreateInstance(type)!
            : null!;
    }
}
