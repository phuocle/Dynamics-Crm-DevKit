using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Diagnostics.CodeAnalysis;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using NuGet.Packaging;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class TaskServerTests
{
    [TestMethod]
    public void GetCrmPluginRegistrationAttributes_IgnoresOtherAttributes()
    {
        var attributes = TaskServer.GetCrmPluginRegistrationAttributes(typeof(PluginWithOtherAttribute).GetTypeInfo());

        Assert.HasCount(1, attributes);
        Assert.AreEqual("Update", attributes[0].Message);
        Assert.AreEqual(PluginType.CustomAction, attributes[0].PluginType);
    }

    [TestMethod]
    public async Task IsValidAsync_RejectsMissingAndInvalidProfilesBeforeDataverseCalls()
    {
        var missing = CreateServer(new Json { servers = new List<JsonServer>() });
        Assert.IsFalse(await missing.IsValidAsync());

        Assert.IsFalse(await CreateServer(ServerJson(folder: "???", solution: "solution")).IsValidAsync());
        Assert.IsFalse(await CreateServer(ServerJson(folder: " ", solution: "solution")).IsValidAsync());
        Assert.IsFalse(await CreateServer(ServerJson(folder: "folder", solution: "???")).IsValidAsync());
        Assert.IsFalse(await CreateServer(ServerJson(folder: "folder", solution: " ")).IsValidAsync());
    }

    [TestMethod]
    public void Constructor_SelectsEverySupportedServerSection()
    {
        foreach (var type in new[] { "servers", "plugins", "workflows", "dataproviders" })
        {
            var json = new Json
            {
                servers = new List<JsonServer> { new() { profile = "p" } },
                plugins = new List<JsonPlugin> { new() { profile = "p" } },
                workflows = new List<JsonWorkflow> { new() { profile = "p" } },
                dataproviders = new List<JsonDataProvider> { new() { profile = "p" } }
            };
            var task = new TaskServer(new CommandLineArgs { Type = type, Profile = "p" }, json);
            Assert.AreEqual($"[{type.ToUpperInvariant()}]", task.TaskType);
        }
    }

    [TestMethod]
    public void PrivateCacheLookupsAndImageChecks_HandleEmptySingleAndDuplicateValues()
    {
        var task = CreateServer(ServerJson());
        Assert.IsFalse(Invoke<bool>(task, "HasPluginImage", (object)null!));
        Assert.IsFalse(Invoke<bool>(task, "HasPluginImage", new CrmPluginRegistrationAttribute()));
        Assert.IsTrue(Invoke<bool>(task, "HasPluginImage", new CrmPluginRegistrationAttribute { Image4Name = "post" }));

        Assert.IsNull(Invoke<int?>(task, "GetObjectTypeCode", ""));
        Assert.AreEqual(-1, Invoke<int?>(task, "GetObjectTypeCode", "account"));
        AddCache(task, "_ObjectTypeCodesCache", "account", 1);
        Assert.AreEqual(1, Invoke<int?>(task, "GetObjectTypeCode", "ACCOUNT"));
        AddCache(task, "_ObjectTypeCodesCache", "account", 2);
        Assert.AreEqual(-1, Invoke<int?>(task, "GetObjectTypeCode", "account"));

        Assert.IsNull(Invoke<EntityReference>(task, "GetSdkMessageFilterId", "none", "Update"));
        Assert.IsNull(Invoke<EntityReference>(task, "GetSdkMessageId", "", "Update"));
        var reference = new EntityReference("sdkmessage", Guid.NewGuid());
        AddCache(task, "_SdkMessagesCache", "account-Update", reference);
        AddCache(task, "_SdkMessageFiltersCache", "account-Update", reference);
        Assert.AreEqual(reference.Id, Invoke<EntityReference>(task, "GetSdkMessageId", "account", "Update").Id);
        Assert.AreEqual(reference.Id, Invoke<EntityReference>(task, "GetSdkMessageFilterId", "account", "Update").Id);
    }

    [TestMethod]
    public void TypeAndAssemblyHelpers_ExerciseOfflineReflectionPaths()
    {
        var task = CreateServer(ServerJson());
        Assert.IsFalse(Invoke<bool>(task, "IsWorkflowType", (object)null!));
        Assert.IsFalse(Invoke<bool>(task, "IsWorkflowType", typeof(object)));

        var assemblyPath = typeof(TaskServerTests).Assembly.Location;
        var first = Invoke<Assembly>(task, "LoadAssemblyIntoCache", assemblyPath);
        var second = Invoke<Assembly>(task, "LoadAssemblyIntoCache", assemblyPath);
        Assert.IsNotNull(first);
        Assert.AreSame(first, second);
        Assert.IsNull(Invoke<Assembly>(task, "LoadAssemblyIntoCache", Path.Combine(Path.GetTempPath(), "not-an-assembly.dll")));

        var types = Invoke<List<TypeInfo>>(task, "GetTypes", assemblyPath);
        Assert.IsTrue(types.Exists(t => t.FullName == typeof(PluginWithOtherAttribute).FullName));
    }

    [TestMethod]
    public void IsValidTypes_RejectsConflictingAttributesButAllowsSamePluginKind()
    {
        var task = CreateServer(ServerJson());
        var type = typeof(PluginWithOtherAttribute).GetTypeInfo();
        AddCache(task, "_AttributesCache", type.FullName!, new List<CrmPluginRegistrationAttribute>
        {
            new() { PluginType = PluginType.Plugin }, new() { PluginType = PluginType.CustomAction }
        });
        Assert.IsFalse(Invoke<bool>(task, "IsValidTypes", new List<TypeInfo> { type }));

        var sameTypeTask = CreateServer(ServerJson());
        AddCache(sameTypeTask, "_AttributesCache", type.FullName!, new List<CrmPluginRegistrationAttribute>
        {
            new() { PluginType = PluginType.Plugin }, new() { PluginType = PluginType.Plugin }
        });
        Assert.IsTrue(Invoke<bool>(sameTypeTask, "IsValidTypes", new List<TypeInfo> { type }));
    }

    [TestMethod]
    public void IsChangedPluginStep_DetectsChangesAndEquivalentState()
    {
        var task = CreateServer(ServerJson());
        var attribute = new CrmPluginRegistrationAttribute { Action = PluginStepOperationEnum.Activate };
        var old = Step("step");
        var same = Step("step");
        Assert.IsFalse(Invoke<bool>(task, "IsChangedPluginStep", false, old, same, attribute));
        Assert.IsTrue(Invoke<bool>(task, "IsChangedPluginStep", true, old, same, attribute));
        Assert.IsTrue(Invoke<bool>(task, "IsChangedPluginStep", false, old, Step("changed"), attribute));
    }

    [TestMethod]
    public async Task RunAndDeployFileValidation_ExerciseOfflineEarlyExitBranches()
    {
        // RunAsync must still complete cleanly when configuration validation stops before Dataverse.
        await CreateServer(new Json { servers = new List<JsonServer>() }).RunAsync();

        var task = CreateServer(ServerJson());
        await InvokeTask(task, "DeployFilesAsync", new List<string> { Path.Combine(Path.GetTempPath(), "unsupported.txt") });

        var empty = new List<TypeInfo>();
        Assert.IsFalse(await InvokeTask<bool>(task, "IsValidTypesAsync", "empty.dll", empty, DeployFileType.Dll));
        Assert.IsFalse(await InvokeTask<bool>(task, "IsValidTypesAsync", "empty.nupkg", empty, DeployFileType.Nuget));

        var conflicting = typeof(PluginWithOtherAttribute).GetTypeInfo();
        AddCache(task, "_AttributesCache", conflicting.FullName!, new List<CrmPluginRegistrationAttribute>
        {
            new() { PluginType = PluginType.Plugin }, new() { PluginType = PluginType.CustomAction }
        });
        Assert.IsFalse(await InvokeTask<bool>(task, "IsValidTypesAsync", "conflict.dll", new List<TypeInfo> { conflicting }, DeployFileType.Dll));
    }

    [TestMethod]
    public void ManagedIdentityInspection_RecognizesAssemblyWithoutOptInAttribute()
    {
        var task = CreateServer(ServerJson());
        var result = Invoke<ValueTuple<bool, string>>(task, "IsNeedSignAssembly", typeof(TaskServerTests).Assembly.Location);
        Assert.IsFalse(result.Item1);
        Assert.AreEqual(string.Empty, result.Item2);
    }

    [TestMethod]
    public void AssemblyResolverAndPackageExtraction_UseCacheAndExtractLibFilesOffline()
    {
        var task = CreateServer(ServerJson());
        var cache = (Dictionary<string, Assembly>)typeof(TaskServer).GetField("_assemblyCache", BindingFlags.Instance | BindingFlags.NonPublic)!.GetValue(task)!;
        var assembly = typeof(TaskServerTests).Assembly;
        cache["cached-test.dll"] = assembly;
        var resolved = Invoke<Assembly>(task, "CurrentDomain_AssemblyResolve", this, new ResolveEventArgs("cached-test, Version=1.0.0.0"));
        Assert.AreSame(assembly, resolved);

        var repositoryRoot = Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "..", "..", "..", ".."));
        var package = Path.Combine(repositoryRoot, "DynamicsCrm.DevKit.Tests", "TestAllInOne", "Dev.AllInOne.SolutionPackager", "all_in_one", "Both", "pluginpackages", "all_Dev.AllInOne.Package", "package", "all_Dev.AllInOne.Package.nupkg");
        Assert.IsTrue(File.Exists(package), "Expected checked-in package fixture was not found.");
        var target = Path.Combine(Path.GetTempPath(), $"TaskServerTests-{Guid.NewGuid():N}");
        try
        {
            using var reader = new PackageArchiveReader(package);
            Invoke<object>(task, "ExtractZip", reader, target);
            Assert.IsTrue(Directory.Exists(target));
            Assert.IsTrue(Directory.GetFiles(target).Length > 0);
        }
        finally
        {
            if (Directory.Exists(target)) Directory.Delete(target, true);
        }
    }

    private static Json ServerJson(string folder = "folder", string solution = "solution") => new()
    {
        servers = new List<JsonServer> { new() { profile = "p", folder = folder, solution = solution } }
    };

    private static TaskServer CreateServer(Json json) => new(new CommandLineArgs { Type = "servers", Profile = "p" }, json);

    private static T Invoke<T>(TaskServer task, string method, params object?[] args)
    {
        var result = typeof(TaskServer).GetMethod(method, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(task, args);
        return (T)result!;
    }

    private static async Task InvokeTask(TaskServer task, string method, params object?[] args) =>
        await (Task)typeof(TaskServer).GetMethod(method, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(task, args)!;

    private static async Task<T> InvokeTask<T>(TaskServer task, string method, params object?[] args) =>
        await (Task<T>)typeof(TaskServer).GetMethod(method, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(task, args)!;

    private static void AddCache(TaskServer task, string field, object key, object value)
    {
        var cache = (IList)typeof(TaskServer).GetField(field, BindingFlags.Instance | BindingFlags.NonPublic)!.GetValue(task)!;
        var itemType = cache.GetType().GetGenericArguments()[0];
        cache.Add(Activator.CreateInstance(itemType, key, value)!);
    }

    private static Entity Step(string name) => new("sdkmessageprocessingstep")
    {
        ["name"] = name,
        ["configuration"] = "config",
        ["description"] = "description",
        ["mode"] = new OptionSetValue(1),
        ["rank"] = 1,
        ["stage"] = new OptionSetValue(40),
        ["asyncautodelete"] = true,
        ["statuscode"] = new OptionSetValue(1),
        ["statecode"] = new OptionSetValue(0),
        ["sdkmessagefilterid"] = new EntityReference("sdkmessagefilter", Guid.Empty),
        ["sdkmessageid"] = new EntityReference("sdkmessage", Guid.Empty),
        ["filteringattributes"] = "name",
        ["supporteddeployment"] = new OptionSetValue(0)
    };

    [ExcludeFromCodeCoverage]
    [CrmPluginRegistration(Message = "Update", PluginType = PluginType.CustomAction)]
    private sealed class PluginWithOtherAttribute
    {
    }
}
