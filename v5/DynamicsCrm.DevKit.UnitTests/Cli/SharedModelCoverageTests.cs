using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class SharedModelCoverageTests
{
    [TestMethod]
    public void SharedModel_PublicSettableProperties_RoundTrip()
    {
        var modelTypes = typeof(ConfigJson).Assembly.GetTypes()
            .Where(t => t.Namespace == "DynamicsCrm.DevKit.Shared.Models")
            .Where(t => t.IsClass && !t.IsAbstract)
            .Where(t => t.GetConstructor(Type.EmptyTypes) != null)
            .Where(t => t != typeof(T4Context))
            .OrderBy(t => t.Name)
            .ToArray();

        Assert.IsTrue(modelTypes.Length > 20, "Expected shared DTO models to be discoverable.");

        foreach (var type in modelTypes)
        {
            var instance = Activator.CreateInstance(type)!;
            var properties = type.GetProperties(BindingFlags.Public | BindingFlags.Instance)
                .Where(p => p.CanRead && p.CanWrite && p.GetIndexParameters().Length == 0)
                .ToArray();

            foreach (var property in properties)
            {
                var value = CreateValue(property.PropertyType, property.Name);
                property.SetValue(instance, value);
                var actual = property.GetValue(instance);

                if (value is IList expectedList && actual is IList actualList)
                {
                    Assert.AreEqual(expectedList.Count, actualList.Count, $"{type.Name}.{property.Name}");
                }
                else
                {
                    Assert.AreEqual(value, actual, $"{type.Name}.{property.Name}");
                }
            }
        }
    }

    [TestMethod]
    public void CommandArgs_ResolveEnvironmentDefaults_UsesEnvWhenArgsAreEmpty()
    {
        var args = new CommandLineArgs();
        var vars = new Dictionary<string, string?>
        {
            ["DEVKIT_CONNECTION"] = "AuthType=ClientSecret;",
            ["DEVKIT_AUTH_TYPE"] = "ClientSecret",
            ["DEVKIT_URL"] = "https://contoso.crm.dynamics.com",
            ["DEVKIT_CLIENT_ID"] = "client-id",
            ["DEVKIT_CLIENT_SECRET"] = "secret",
            ["DEVKIT_PAC_PROFILE"] = "pac-profile",
            ["DEVKIT_USERNAME"] = "user@contoso.com",
            ["DEVKIT_PASSWORD"] = "password",
            ["DEVKIT_DOMAIN"] = "CONTOSO"
        };

        WithEnvironment(vars, () =>
        {
            args.ResolveEnvironmentDefaults();
            Assert.AreEqual("AuthType=ClientSecret;", args.Connection);
            Assert.AreEqual("ClientSecret", args.AuthType);
            Assert.AreEqual("https://contoso.crm.dynamics.com", args.Url);
            Assert.AreEqual("client-id", args.ClientId);
            Assert.AreEqual("secret", args.ClientSecret);
            Assert.AreEqual("pac-profile", args.PacProfile);
            Assert.AreEqual("user@contoso.com", args.Username);
            Assert.AreEqual("password", args.Password);
            Assert.AreEqual("CONTOSO", args.Domain);
        });
    }

    [TestMethod]
    public void CommandArgs_ResolveEnvironmentDefaults_DoesNotOverrideExplicitValuesOrDefaultInteractiveClient()
    {
        var args = new CommandLineArgs
        {
            Connection = "explicit",
            AuthType = "Interactive",
            Url = "https://explicit.crm.dynamics.com",
            ClientSecret = "explicit-secret",
            PacProfile = "explicit-pac",
            Username = "explicit-user",
            Password = "explicit-password",
            Domain = "explicit-domain"
        };

        WithEnvironment(new Dictionary<string, string?>
        {
            ["DEVKIT_CONNECTION"] = "env",
            ["DEVKIT_CLIENT_ID"] = "env-client",
            ["DEVKIT_CLIENT_SECRET"] = "env-secret"
        }, () =>
        {
            args.ResolveEnvironmentDefaults();
            Assert.AreEqual("explicit", args.Connection);
            Assert.AreEqual("", args.ClientId);
            Assert.AreEqual("explicit-secret", args.ClientSecret);
        });
    }

    [TestMethod]
    public void CommandArgs_JsonFile_ReturnsFullPathOnlyWhenFileExists()
    {
        var args = new CommandLineArgs();
        Assert.IsNull(args.JsonFile);

        var fileName = $"devkit-test-{Guid.NewGuid():N}.json";
        var path = System.IO.Path.Combine(Environment.CurrentDirectory, fileName);
        try
        {
            args.Json = fileName;
            Assert.IsNull(args.JsonFile);

            System.IO.File.WriteAllText(path, "{}");
            Assert.AreEqual(new System.IO.FileInfo(path).FullName, args.JsonFile);
        }
        finally
        {
            if (System.IO.File.Exists(path))
                System.IO.File.Delete(path);
        }
    }

    private static object? CreateValue(Type type, string name)
    {
        var nullable = Nullable.GetUnderlyingType(type);
        if (nullable != null)
            return CreateValue(nullable, name);

        if (type == typeof(string)) return $"{name}-value";
        if (type == typeof(bool)) return true;
        if (type == typeof(int)) return 42;
        if (type == typeof(long)) return 42L;
        if (type == typeof(decimal)) return 12.34m;
        if (type == typeof(double)) return 12.34d;
        if (type == typeof(Guid)) return Guid.Parse("11111111-2222-3333-4444-555555555555");
        if (type == typeof(DateTime)) return new DateTime(2026, 5, 18, 0, 0, 0, DateTimeKind.Utc);
        if (type == typeof(ServiceClient)) return null;
        if (type.IsEnum) return Enum.GetValues(type).GetValue(0);

        if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(List<>))
        {
            var itemType = type.GetGenericArguments()[0];
            var list = (IList)Activator.CreateInstance(type)!;
            var item = CreateListItem(itemType);
            if (item != null || !itemType.IsValueType)
                list.Add(item);
            return list;
        }

        if (type.IsArray)
        {
            var itemType = type.GetElementType()!;
            var array = Array.CreateInstance(itemType, 1);
            array.SetValue(CreateListItem(itemType), 0);
            return array;
        }

        if (type.GetConstructor(Type.EmptyTypes) != null)
            return Activator.CreateInstance(type);

        return null;
    }

    private static object? CreateListItem(Type itemType)
    {
        if (itemType == typeof(string)) return "item";
        if (itemType == typeof(int)) return 1;
        if (itemType == typeof(Guid)) return Guid.Parse("22222222-3333-4444-5555-666666666666");
        if (itemType.GetConstructor(Type.EmptyTypes) != null) return Activator.CreateInstance(itemType);
        return null;
    }

    private static void WithEnvironment(Dictionary<string, string?> values, Action action)
    {
        var previous = values.Keys.ToDictionary(k => k, Environment.GetEnvironmentVariable);
        try
        {
            foreach (var pair in values)
                Environment.SetEnvironmentVariable(pair.Key, pair.Value);
            action();
        }
        finally
        {
            foreach (var pair in previous)
                Environment.SetEnvironmentVariable(pair.Key, pair.Value);
        }
    }
}
