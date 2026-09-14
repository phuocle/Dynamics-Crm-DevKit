using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using FakeItEasy;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Tasks;

[TestClass]
[DoNotParallelize]
public sealed class TaskServerHelperCoverageTests
{
    [CrmPluginRegistration(Message = "Create", PluginType = PluginType.Plugin)]
    private sealed class DecoratedPlugin { }

    private sealed class DerivedObject { }

    private static readonly BindingFlags PrivateInstance = BindingFlags.NonPublic | BindingFlags.Instance;

    private static TaskServer NewTask() => new(
        new CommandLineArgs { Type = "servers", Profile = "test" },
        new Json { servers = [new JsonServer { profile = "test", folder = "serverfiles", solution = "solution" }] });

    private static object Invoke(TaskServer task, string method, params object?[] args) =>
        typeof(TaskServer).GetMethod(method, PrivateInstance)!.Invoke(task, args)!;

    [TestMethod]
    public void TaskServer_CacheLookups_CoverEmptyUnknownAndKnownValues()
    {
        var task = NewTask();
        Assert.AreEqual(-1, Invoke(task, "GetObjectTypeCode", new object?[] { null }));
        Assert.IsNull(Invoke(task, "GetObjectTypeCode", ""));
        Assert.AreEqual(-1, Invoke(task, "GetObjectTypeCode", "account"));
        Assert.IsNull(Invoke(task, "GetSdkMessageFilterId", "", "Create"));
        Assert.IsNull(Invoke(task, "GetSdkMessageFilterId", "none", "Create"));
        Assert.IsNull(Invoke(task, "GetSdkMessageId", "", "Create"));
        Assert.IsNull(Invoke(task, "GetSdkMessageId", "account", "Create"));
    }

    [TestMethod]
    public async Task TaskServer_ValidationRejectsEmptyTypeLists()
    {
        var task = NewTask();
        var method = typeof(TaskServer).GetMethod("IsValidTypesAsync", PrivateInstance)!;
        var nuget = (Task<bool>)method.Invoke(task, new object?[] { "sample.nupkg", new List<TypeInfo>(), DeployFileType.Nuget })!;
        var dll = (Task<bool>)method.Invoke(task, new object?[] { "sample.dll", new List<TypeInfo>(), DeployFileType.Dll })!;
        Assert.IsFalse(await nuget);
        Assert.IsFalse(await dll);
    }

    [TestMethod]
    public async Task TaskServer_EmptyCaches_LoadWithoutDataverseCalls()
    {
        var task = NewTask();
        foreach (var name in new[]
        {
            "LoadAllPluginTypesAsync", "LoadAllPluginStepsAsync", "LoadAllPluginImagesAsync",
            "LoadAllSecureEntitiesAsync", "LoadAll_SdkMessages_SdkMessageFilters_Async", "LoadAllCustomApisAsync"
        })
        {
            var work = (Task)typeof(TaskServer).GetMethod(name, PrivateInstance)!.Invoke(task, null)!;
            await work;
        }
    }

    [TestMethod]
    public void TaskServer_ImageAndWorkflowHelpers_CoverAllBranches()
    {
        var task = NewTask();
        Assert.IsFalse((bool)Invoke(task, "HasPluginImage", new CrmPluginRegistrationAttribute()));
        Assert.IsTrue((bool)Invoke(task, "HasPluginImage", new CrmPluginRegistrationAttribute { Image1Name = "pre" }));
        Assert.IsTrue((bool)Invoke(task, "HasPluginImage", new CrmPluginRegistrationAttribute { Image2Name = "post" }));
        Assert.IsTrue((bool)Invoke(task, "HasPluginImage", new CrmPluginRegistrationAttribute { Image3Name = "x" }));
        Assert.IsTrue((bool)Invoke(task, "HasPluginImage", new CrmPluginRegistrationAttribute { Image4Name = "x" }));
        Assert.IsFalse((bool)Invoke(task, "IsWorkflowType", typeof(string)));
        Assert.IsFalse((bool)Invoke(task, "IsWorkflowType", new object?[] { null }));
    }

    [TestMethod]
    public void TaskServer_InvalidAssemblyAndTypes_AreHandled()
    {
        var task = NewTask();
        Assert.IsNull(Invoke(task, "LoadAssemblyIntoCache", "does-not-exist.dll"));
        var types = (List<TypeInfo>)Invoke(task, "GetTypes", "does-not-exist.dll");
        Assert.IsEmpty(types);
        var testTypes = (List<TypeInfo>)Invoke(task, "GetTypes", typeof(TaskServerHelperCoverageTests).Assembly.Location);
        Assert.IsNotNull(testTypes);
        var loaded = (Assembly)Invoke(task, "LoadAssemblyIntoCache", typeof(TaskServerHelperCoverageTests).Assembly.Location);
        Assert.IsNotNull(loaded);
        var resolver = typeof(TaskServer).GetMethod("CurrentDomain_AssemblyResolve", PrivateInstance)!;
        var assemblyCache = (Dictionary<string, Assembly>)typeof(TaskServer).GetField("_assemblyCache", PrivateInstance)!.GetValue(task)!;
        assemblyCache["Cached.dll"] = loaded;
        Assert.AreSame(loaded, resolver.Invoke(task, new object?[] { task, new ResolveEventArgs("Cached, Version=1.0.0.0") }));
        var localDirectory = Path.Combine(Path.GetTempPath(), $"devkit-resolve-{Guid.NewGuid():N}");
        Directory.CreateDirectory(localDirectory);
        try
        {
            File.Copy(typeof(TaskServerHelperCoverageTests).Assembly.Location, Path.Combine(localDirectory, "LocalCoverage.dll"));
            typeof(TaskServer).GetField("_currentAssemblyDirectory", PrivateInstance)!.SetValue(task, localDirectory);
            var local = resolver.Invoke(task, new object?[] { task, new ResolveEventArgs("LocalCoverage, Version=1.0.0.0") });
            Assert.IsNotNull(local);
        }
        finally
        {
            Directory.Delete(localDirectory, true);
        }
        Assert.IsNull(resolver.Invoke(task, new object?[] { task, new ResolveEventArgs(null!) }));
        Assert.IsTrue((bool)Invoke(task, "IsValidTypes", new List<TypeInfo>()));
        Assert.IsEmpty(TaskServer.GetCrmPluginRegistrationAttributes(typeof(string).GetTypeInfo()));
    }

    [TestMethod]
    public async Task TaskServer_ManagedIdentity_RegistersFirstMissingApplication()
    {
        var service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(_ => Task.FromResult(new EntityCollection()));
        A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call =>
            {
                var response = new CreateResponse();
                response.Results["id"] = Guid.NewGuid();
                return Task.FromResult<OrganizationResponse>(response);
            });

        var task = NewTask();
        task.OrgServiceAsync = service;
        var method = typeof(TaskServer).GetMethod("DeployManagedIdentityAsync", PrivateInstance)!;
        var applicationId = Guid.NewGuid();
        var result = (Task<(Guid ManagedIdentityId, Guid ApplicationId)>)method.Invoke(
            task,
            new object?[] { "CoverageAssembly", Guid.NewGuid(), applicationId.ToString("D") })!;

        var identity = await result;
        Assert.AreEqual(applicationId, identity.ApplicationId);
        A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.That.Matches(x => x is CreateRequest))).MustHaveHappened();
    }

    [TestMethod]
    public void TaskServer_SignCheck_RejectsAssemblyWithoutManagedIdentityAttribute()
    {
        var task = NewTask();
        var method = typeof(TaskServer).GetMethod("IsNeedSignAssembly", PrivateInstance)!;
        var result = ((bool NeedSign, string Error))method.Invoke(task, new object?[] { typeof(TaskServerHelperCoverageTests).Assembly.Location })!;
        Assert.IsFalse(result.NeedSign);
        Assert.AreEqual(string.Empty, result.Error);
    }

    [TestMethod]
    public void TaskServer_PluginStepComparison_CoversActivationAndChangeDetection()
    {
        var task = NewTask();
        static Entity Step(string name, int state = 0) => new("sdkmessageprocessingstep")
        {
            ["name"] = name,
            ["configuration"] = "cfg",
            ["description"] = "desc",
            ["mode"] = new OptionSetValue(0),
            ["rank"] = 1,
            ["stage"] = new OptionSetValue(40),
            ["asyncautodelete"] = false,
            ["statuscode"] = new OptionSetValue(state == 0 ? 1 : 2),
            ["statecode"] = new OptionSetValue(state),
            ["filteringattributes"] = "name",
            ["supporteddeployment"] = new OptionSetValue(0)
        };

        var attribute = new CrmPluginRegistrationAttribute { Action = PluginStepOperationEnum.Activate };
        Assert.IsFalse((bool)Invoke(task, "IsChangedPluginStep", false, Step("same"), Step("same"), attribute));
        Assert.IsTrue((bool)Invoke(task, "IsChangedPluginStep", true, Step("same"), Step("same"), attribute));
        Assert.IsTrue((bool)Invoke(task, "IsChangedPluginStep", false, Step("old"), Step("new"), attribute));
        attribute.Action = PluginStepOperationEnum.Deactivate;
        Assert.IsTrue((bool)Invoke(task, "IsChangedPluginStep", false, Step("same"), Step("same", 1), attribute));
    }

    [TestMethod]
    public async Task TaskServer_TypeValidationWithSdk_HandlesMissingRegisteredType()
    {
        var service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(_ => Task.FromResult(new EntityCollection()));
        var task = NewTask();
        task.OrgServiceAsync = service;
        var method = typeof(TaskServer).GetMethod("IsValidTypesWithCDSAsync", PrivateInstance)!;
        var valid = (Task<bool>)method.Invoke(task, new object?[] { new List<TypeInfo>(), "assembly" })!;
        Assert.IsTrue(await valid);

        var registered = new Entity("sdkmessageprocessingstep")
        {
            ["plugintype.typename"] = new AliasedValue("plugintype", "typename", "Missing.Type")
        };
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(_ => Task.FromResult(new EntityCollection(new[] { registered })));
        var invalid = (Task<bool>)method.Invoke(task, new object?[] { new List<TypeInfo>(), "assembly" })!;
        Assert.IsFalse(await invalid);

        registered["plugintype.typename"] = new AliasedValue("plugintype", "typename", typeof(DecoratedPlugin).FullName);
        var matching = (Task<bool>)method.Invoke(task, new object?[]
            { new List<TypeInfo> { typeof(DecoratedPlugin).GetTypeInfo() }, "assembly" })!;
        Assert.IsTrue(await matching);

        var validTypesMethod = typeof(TaskServer).GetMethod("IsValidTypesAsync", PrivateInstance)!;
        var invalidAssemblyTypes = (Task<bool>)validTypesMethod.Invoke(task, new object?[]
            { "assembly.dll", new List<TypeInfo> { typeof(TaskServerHelperCoverageTests).GetTypeInfo() }, DeployFileType.Dll })!;
        Assert.IsFalse(await invalidAssemblyTypes);
    }

    [TestMethod]
    public async Task TaskServer_PluginImageDeployment_CoversCreateAndExistingImageBranches()
    {
        var service = A.Fake<IOrganizationServiceAsync2>();
        var createdId = Guid.NewGuid();
        A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(_ =>
            {
                var response = new CreateResponse();
                response.Results["id"] = createdId;
                return Task.FromResult<OrganizationResponse>(response);
            });
        A.CallTo(() => service.UpdateAsync(A<Entity>.Ignored)).Returns(Task.CompletedTask);
        A.CallTo(() => service.DeleteAsync(A<string>.Ignored, A<Guid>.Ignored)).Returns(Task.CompletedTask);

        var task = NewTask();
        task.OrgServiceAsync = service;
        var stepId = Guid.NewGuid();
        var method = typeof(TaskServer).GetMethods(PrivateInstance)
            .Single(x => x.Name == "DeployPluginImageAsync" && x.GetParameters().Length == 7);

        var noFields = (Task<Guid>)method.Invoke(task, new object?[] { "Create", "Pre", "", ImageTypeEnum.PreImage, "", stepId, "Plugin" })!;
        Assert.AreNotEqual(Guid.Empty, await noFields);
        var create = (Task<Guid>)method.Invoke(task, new object?[] { "Create", "Pre", "", ImageTypeEnum.PreImage, "name", stepId, "Plugin" })!;
        Assert.AreEqual(createdId, await create);

        var cache = (List<KeyValuePair<string, Entity>>)typeof(TaskServer)
            .GetField("_PluginImagesCache", PrivateInstance)!.GetValue(task)!;
        var imageId = Guid.NewGuid();
        var key = $"{stepId}-Pre-0";
        cache.Add(new KeyValuePair<string, Entity>(key, new Entity("sdkmessageprocessingstepimage", imageId)
        {
            ["name"] = "Pre",
            ["entityalias"] = "Pre",
            ["attributes"] = "name",
            ["imagetype"] = new OptionSetValue(0)
        }));

        var same = (Task<Guid>)method.Invoke(task, new object?[] { "Create", "Pre", "Pre", ImageTypeEnum.PreImage, "name", stepId, "Plugin" })!;
        Assert.AreEqual(imageId, await same);
        var delete = (Task<Guid>)method.Invoke(task, new object?[] { "Create", "Pre", "Pre", ImageTypeEnum.PreImage, "", stepId, "Plugin" })!;
        Assert.AreNotEqual(Guid.Empty, await delete);
        A.CallTo(() => service.DeleteAsync("sdkmessageprocessingstepimage", imageId)).MustHaveHappened();
    }

    [TestMethod]
    public async Task TaskServer_PluginStepDeployment_CoversSecureCreateAndDeactivate()
    {
        var service = A.Fake<IOrganizationServiceAsync2>();
        var createdStepId = Guid.NewGuid();
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(_ => Task.FromResult(new EntityCollection()));
        A.CallTo(() => service.CreateAsync(A<Entity>.Ignored)).Returns(Guid.NewGuid());
        A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(_ =>
            {
                var response = new CreateResponse();
                response.Results["id"] = createdStepId;
                return Task.FromResult<OrganizationResponse>(response);
            });
        A.CallTo(() => service.UpdateAsync(A<Entity>.Ignored)).Returns(Task.CompletedTask);
        A.CallTo(() => service.DeleteAsync(A<string>.Ignored, A<Guid>.Ignored)).Returns(Task.CompletedTask);

        var task = NewTask();
        task.OrgServiceAsync = service;
        var method = typeof(TaskServer).GetMethod("DeployPluginStepAsync", PrivateInstance)!;
        var type = typeof(TaskServerHelperCoverageTests).GetTypeInfo();
        var create = new CrmPluginRegistrationAttribute
        {
            Message = "Create",
            EntityLogicalName = "account",
            Name = "NewStep",
            PluginType = PluginType.Plugin,
            SecureConfiguration = "secret",
            UnSecureConfiguration = "cfg",
            FilteringAttributes = "name"
        };
        var created = (Task<Guid?>)method.Invoke(task, new object?[] { Guid.NewGuid(), type, create })!;
        Assert.AreEqual(createdStepId, await created);

        var existingTypeId = Guid.NewGuid();
        var oldStepId = Guid.NewGuid();
        var old = new Entity("sdkmessageprocessingstep", oldStepId)
        {
            ["name"] = "ExistingStep",
            ["mode"] = new OptionSetValue(0),
            ["rank"] = 1,
            ["stage"] = new OptionSetValue(40),
            ["asyncautodelete"] = false,
            ["statuscode"] = new OptionSetValue(1),
            ["statecode"] = new OptionSetValue(0),
            ["supporteddeployment"] = new OptionSetValue(0),
            ["plugintypeid"] = new EntityReference("plugintype", existingTypeId)
        };
        var cache = (List<KeyValuePair<string, Entity>>)typeof(TaskServer)
            .GetField("_PluginStepsCache", PrivateInstance)!.GetValue(task)!;
        cache.Add(new KeyValuePair<string, Entity>($"{existingTypeId}-ExistingStep", old));
        var deactivate = new CrmPluginRegistrationAttribute
        {
            Message = "Create",
            EntityLogicalName = "account",
            Name = "ExistingStep",
            PluginType = PluginType.Plugin,
            Action = PluginStepOperationEnum.Deactivate
        };
        var updated = (Task<Guid?>)method.Invoke(task, new object?[] { existingTypeId, type, deactivate })!;
        Assert.AreEqual(oldStepId, await updated);

        var secureCache = (List<KeyValuePair<string, Entity>>)typeof(TaskServer)
            .GetField("_SecureEntitiesCache", PrivateInstance)!.GetValue(task)!;
        var secureId = Guid.NewGuid();
        secureCache.Add(new KeyValuePair<string, Entity>(oldStepId.ToString(), new Entity("sdkmessageprocessingstep")
        {
            ["s.sdkmessageprocessingstepsecureconfigid"] = new AliasedValue("s", "sdkmessageprocessingstepsecureconfigid", secureId),
            ["s.secureconfig"] = new AliasedValue("s", "secureconfig", "old-secret")
        }));
        var removeSecret = new CrmPluginRegistrationAttribute { Message = "Create", EntityLogicalName = "account", Name = "ExistingStep", PluginType = PluginType.Plugin };
        await (Task<Guid?>)method.Invoke(task, new object?[] { existingTypeId, type, removeSecret })!;
        var replaceSecret = new CrmPluginRegistrationAttribute { Message = "Create", EntityLogicalName = "account", Name = "ExistingStep", PluginType = PluginType.Plugin, SecureConfiguration = "new-secret" };
        await (Task<Guid?>)method.Invoke(task, new object?[] { existingTypeId, type, replaceSecret })!;

        secureCache.Clear();
        await (Task<Guid?>)method.Invoke(task, new object?[] { existingTypeId, type, replaceSecret })!;
    }

    [TestMethod]
    public async Task TaskServer_PackageDeployment_CoversCreateNoOpAndUpdate()
    {
        var packagePath = Path.Combine(Path.GetTempPath(), $"devkit-coverage-{Guid.NewGuid():N}.nupkg");
        try
        {
            using (var archive = ZipFile.Open(packagePath, ZipArchiveMode.Create))
            {
                var nuspec = archive.CreateEntry("package.nuspec");
                using (var writer = new StreamWriter(nuspec.Open(), Encoding.UTF8))
                    writer.Write("<?xml version=\"1.0\"?><package><metadata><id>CoveragePkg</id><version>1.0.0</version><authors>test</authors><description>coverage</description></metadata></package>");
                var dll = archive.CreateEntry("lib/Coverage.dll");
                using var dllStream = dll.Open();
                dllStream.Write(new byte[] { 1, 2, 3, 4 });
            }

            var service = A.Fake<IOrganizationServiceAsync2>();
            var rows = new EntityCollection();
            A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
                .ReturnsLazily(_ => Task.FromResult(rows));
            A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.Ignored))
                .ReturnsLazily(_ =>
                {
                    var response = new CreateResponse();
                    response.Results["id"] = Guid.NewGuid();
                    return Task.FromResult<OrganizationResponse>(response);
                });

            var task = NewTask();
            task.OrgServiceAsync = service;
            task.SolutionPrefix = "dev_";
            var method = typeof(TaskServer).GetMethod("DeployPackageAsync", PrivateInstance)!;
            var first = (Task<string>)method.Invoke(task, new object?[] { packagePath })!;
            Assert.AreEqual(string.Empty, await first);

            var content = Convert.ToBase64String(File.ReadAllBytes(packagePath));
            var packageId = Guid.NewGuid();
            rows.Entities.Add(new Entity("pluginpackage", packageId) { ["content"] = content });
            var second = (Task<string>)method.Invoke(task, new object?[] { packagePath })!;
            Assert.AreEqual(string.Empty, await second);

            rows.Entities[0]["content"] = "old-content";
            var third = (Task<string>)method.Invoke(task, new object?[] { packagePath })!;
            Assert.AreEqual(string.Empty, await third);
        }
        finally
        {
            // PackageArchiveReader keeps the package handle alive for the task lifetime.
        }
    }

    [TestMethod]
    public async Task TaskServer_LoadCaches_CoversPluginStepImageAndSecureRows()
    {
        var pluginTypeId = Guid.NewGuid();
        var stepId = Guid.NewGuid();
        var imageId = Guid.NewGuid();
        var secureId = Guid.NewGuid();
        var service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call =>
            {
                var fetch = ((FetchExpression)call.Arguments[0]).Query.Replace("\"", "'");
                if (fetch.Contains("sdkmessageprocessingstepimage"))
                    return Task.FromResult(new EntityCollection(new[]
                    {
                        new Entity("sdkmessageprocessingstepimage", imageId)
                        {
                            ["sdkmessageprocessingstepid"] = new EntityReference("sdkmessageprocessingstep", stepId),
                            ["name"] = "Pre", ["imagetype"] = new OptionSetValue(0)
                        }
                    }));
                if (fetch.Contains("sdkmessageprocessingstepsecureconfig"))
                    return Task.FromResult(new EntityCollection(new[]
                    {
                        new Entity("sdkmessageprocessingstep", stepId)
                        {
                            ["sdkmessageprocessingstepid"] = stepId,
                            ["s.sdkmessageprocessingstepsecureconfigid"] = new AliasedValue("s", "sdkmessageprocessingstepsecureconfigid", secureId),
                            ["s.secureconfig"] = new AliasedValue("s", "secureconfig", "secret")
                        }
                    }));
                if (fetch.Contains("sdkmessageprocessingstep"))
                    return Task.FromResult(new EntityCollection(new[]
                    {
                        new Entity("sdkmessageprocessingstep", stepId)
                        {
                            ["sdkmessageprocessingstepid"] = stepId,
                            ["plugintypeid"] = new EntityReference("plugintype", pluginTypeId),
                            ["name"] = "Step"
                        }
                    }));
                return Task.FromResult(new EntityCollection(new[]
                {
                    new Entity("plugintype", pluginTypeId)
                    {
                        ["plugintypeid"] = pluginTypeId,
                        ["typename"] = typeof(TaskServerHelperCoverageTests).FullName!
                    }
                }));
            });

        var task = NewTask();
        task.OrgServiceAsync = service;
        var attributes = (List<KeyValuePair<string, List<CrmPluginRegistrationAttribute>>>)typeof(TaskServer)
            .GetField("_AttributesCache", PrivateInstance)!.GetValue(task)!;
        attributes.Add(new KeyValuePair<string, List<CrmPluginRegistrationAttribute>>(
            typeof(TaskServerHelperCoverageTests).FullName!,
            new List<CrmPluginRegistrationAttribute> { new() { Message = "Create", EntityLogicalName = "account" } }));

        foreach (var name in new[] { "LoadAllPluginTypesAsync", "LoadAllPluginStepsAsync", "LoadAllPluginImagesAsync", "LoadAllSecureEntitiesAsync" })
            await (Task)typeof(TaskServer).GetMethod(name, PrivateInstance)!.Invoke(task, null)!;

        var images = (List<KeyValuePair<string, Entity>>)typeof(TaskServer).GetField("_PluginImagesCache", PrivateInstance)!.GetValue(task)!;
        var secure = (List<KeyValuePair<string, Entity>>)typeof(TaskServer).GetField("_SecureEntitiesCache", PrivateInstance)!.GetValue(task)!;
        Assert.HasCount(1, images);
        Assert.HasCount(1, secure);
    }

    [TestMethod]
    public void TaskServer_ManagedIdentityAttributeReader_MapsAssemblyProperties()
    {
        var attributeType = typeof(DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute);
        var assemblyName = new AssemblyName("CoverageManagedIdentityAssembly");
        var assembly = AssemblyBuilder.DefineDynamicAssembly(assemblyName, AssemblyBuilderAccess.Run);
        var attribute = new CustomAttributeBuilder(
            attributeType.GetConstructor(Type.EmptyTypes)!,
            Array.Empty<object>(),
            new[]
            {
                attributeType.GetProperty(nameof(DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute.TenantId))!,
                attributeType.GetProperty(nameof(DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute.CertificateFileName))!,
                attributeType.GetProperty(nameof(DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute.CertificatePassword))!,
                attributeType.GetProperty(nameof(DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute.ApplicationIds))!
            },
            new object[] { "tenant", "cert.pfx", "secret", Guid.NewGuid().ToString("D") });
        assembly.SetCustomAttribute(attribute);

        var task = NewTask();
        var method = typeof(TaskServer).GetMethod("GetDynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute", PrivateInstance)!;
        var result = (DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute)method.Invoke(task, new object?[] { assembly })!;
        Assert.AreEqual("tenant", result.TenantId);
        Assert.AreEqual("cert.pfx", result.CertificateFileName);
        Assert.AreEqual("secret", result.CertificatePassword);
    }

    [TestMethod]
    public async Task TaskServer_LoadMessageCaches_CoversNoneAndEntityScopedMessages()
    {
        var messageId = Guid.NewGuid();
        var filterId = Guid.NewGuid();
        var service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call =>
            {
                var fetch = ((FetchExpression)call.Arguments[0]).Query.Replace("\"", "'");
                if (fetch.Contains("<entity name='sdkmessagefilter'"))
                    return Task.FromResult(new EntityCollection(new[]
                    {
                        new Entity("sdkmessagefilter", filterId)
                        {
                            ["sdkmessagefilterid"] = filterId,
                            ["primaryobjecttypecode"] = "1",
                            ["s.name"] = new AliasedValue("s", "name", "Create")
                        }
                    }));
                if (fetch.Contains("link-entity name='sdkmessagefilter'"))
                    return Task.FromResult(new EntityCollection(new[]
                    {
                        new Entity("sdkmessage", messageId)
                        {
                            ["sdkmessageid"] = messageId,
                            ["name"] = "Create",
                            ["s.primaryobjecttypecode"] = new AliasedValue("s", "primaryobjecttypecode", "1")
                        }
                    }));
                return Task.FromResult(new EntityCollection(new[]
                {
                    new Entity("sdkmessage", messageId) { ["sdkmessageid"] = messageId, ["name"] = "WhoAmI" }
                }));
            });

        var task = NewTask();
        task.OrgServiceAsync = service;
        var objectTypes = (List<KeyValuePair<string, int>>)typeof(TaskServer).GetField("_ObjectTypeCodesCache", PrivateInstance)!.GetValue(task)!;
        objectTypes.Add(new KeyValuePair<string, int>("account", 1));
        var attributes = (List<KeyValuePair<string, List<CrmPluginRegistrationAttribute>>>)typeof(TaskServer).GetField("_AttributesCache", PrivateInstance)!.GetValue(task)!;
        attributes.Add(new KeyValuePair<string, List<CrmPluginRegistrationAttribute>>("none", new() { new() { EntityLogicalName = "none", Message = "WhoAmI" } }));
        attributes.Add(new KeyValuePair<string, List<CrmPluginRegistrationAttribute>>("account", new() { new() { EntityLogicalName = "account", Message = "Create" } }));

        await (Task)typeof(TaskServer).GetMethod("LoadAll_SdkMessages_SdkMessageFilters_Async", PrivateInstance)!.Invoke(task, null)!;
        var messages = (List<KeyValuePair<string, EntityReference>>)typeof(TaskServer).GetField("_SdkMessagesCache", PrivateInstance)!.GetValue(task)!;
        var filters = (List<KeyValuePair<string, EntityReference>>)typeof(TaskServer).GetField("_SdkMessageFiltersCache", PrivateInstance)!.GetValue(task)!;
        Assert.IsTrue(messages.Count >= 2);
        Assert.HasCount(1, filters);
    }

    [TestMethod]
    public async Task TaskServer_UnregisterPluginType_CoversMissingAndDeletePaths()
    {
        var service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection()));
        A.CallTo(() => service.DeleteAsync(A<string>.Ignored, A<Guid>.Ignored)).Returns(Task.CompletedTask);
        var task = NewTask();
        task.OrgServiceAsync = service;
        var type = typeof(TaskServerHelperCoverageTests).GetTypeInfo();
        var attribute = new CrmPluginRegistrationAttribute { Message = "Create", Name = "Plugin" };
        var method = typeof(TaskServer).GetMethod("UnregisterPluginTypeAsync", PrivateInstance)!;
        var missing = (Task<bool?>)method.Invoke(task, new object?[] { Guid.NewGuid(), type, attribute, DeployFileType.Dll })!;
        Assert.IsNull(await missing);

        var id = Guid.NewGuid();
        var cache = (List<KeyValuePair<string, Entity>>)typeof(TaskServer)
            .GetField("_PluginTypesCache", PrivateInstance)!.GetValue(task)!;
        cache.Add(new KeyValuePair<string, Entity>(type.FullName!, new Entity("plugintype", id)
        {
            ["plugintypeid"] = id
        }));
        var removed = (Task<bool?>)method.Invoke(task, new object?[] { Guid.NewGuid(), type, attribute, DeployFileType.Dll })!;
        Assert.IsTrue(await removed);
        A.CallTo(() => service.DeleteAsync("plugintype", id)).MustHaveHappened();

        var customApi = (List<KeyValuePair<string, Entity>>)typeof(TaskServer).GetField("_CustomApisCache", PrivateInstance)!.GetValue(task)!;
        customApi.Add(new KeyValuePair<string, Entity>("Create", new Entity("customapi", Guid.NewGuid())));
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection(new[]
            {
                new Entity("sdkmessageprocessingstep", Guid.NewGuid())
            })));
        var secondId = Guid.NewGuid();
        cache.Clear();
        cache.Add(new KeyValuePair<string, Entity>(type.FullName!, new Entity("plugintype", secondId)
        {
            ["plugintypeid"] = secondId
        }));
        var removedWithChildren = (Task<bool?>)method.Invoke(task, new object?[] { Guid.NewGuid(), type, attribute, DeployFileType.Dll })!;
        Assert.IsTrue(await removedWithChildren);

        A.CallTo(() => service.UpdateAsync(A<Entity>.Ignored)).Throws(new InvalidOperationException("unregister failure"));
        var failed = (Task<bool?>)method.Invoke(task, new object?[] { Guid.NewGuid(), type, attribute, DeployFileType.Dll })!;
        Assert.IsFalse(await failed);

        var deployType = typeof(TaskServer).GetMethod("DeployPluginTypeAsync", PrivateInstance)!;
        cache.Clear();
        cache.Add(new KeyValuePair<string, Entity>(type.FullName!, new Entity("plugintype", Guid.NewGuid())));
        cache.Add(new KeyValuePair<string, Entity>(type.FullName!, new Entity("plugintype", Guid.NewGuid())));
        var duplicate = (Task<Guid?>)deployType.Invoke(task, new object?[] { Guid.NewGuid(), type, attribute, DeployFileType.Dll })!;
        Assert.IsNull(await duplicate);
        cache.Clear();
        var existingId = Guid.NewGuid();
        cache.Add(new KeyValuePair<string, Entity>(type.FullName!, new Entity("plugintype", existingId)));
        var nuget = (Task<Guid?>)deployType.Invoke(task, new object?[] { Guid.NewGuid(), type, attribute, DeployFileType.Nuget })!;
        Assert.AreEqual(existingId, await nuget);
    }

    [TestMethod]
    public async Task TaskServer_CustomApiStep_CoversActivateAndDeactivate()
    {
        var service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => service.UpdateAsync(A<Entity>.Ignored)).Returns(Task.CompletedTask);
        var task = NewTask();
        task.OrgServiceAsync = service;
        var customApiId = Guid.NewGuid();
        var pluginTypeId = Guid.NewGuid();
        var cache = (List<KeyValuePair<string, Entity>>)typeof(TaskServer).GetField("_CustomApisCache", PrivateInstance)!.GetValue(task)!;
        cache.Add(new KeyValuePair<string, Entity>("dev_Action", new Entity("customapi", customApiId)
        {
            ["plugintypeid"] = new EntityReference("plugintype", pluginTypeId)
        }));
        var method = typeof(TaskServer).GetMethod("DeployCustomApiStepAsync", PrivateInstance)!;
        var activate = new CrmPluginRegistrationAttribute { Message = "dev_Action", Action = PluginStepOperationEnum.Activate };
        await (Task)method.Invoke(task, new object?[] { pluginTypeId, "PluginType", activate })!;
        var deactivate = new CrmPluginRegistrationAttribute { Message = "dev_Action", Action = PluginStepOperationEnum.Deactivate };
        await (Task)method.Invoke(task, new object?[] { pluginTypeId, "PluginType", deactivate })!;

        cache[0] = new KeyValuePair<string, Entity>("dev_Action", new Entity("customapi", customApiId)
        {
            ["plugintypeid"] = new EntityReference("plugintype", Guid.NewGuid())
        });
        await (Task)method.Invoke(task, new object?[] { pluginTypeId, "PluginType", deactivate })!;
        var register = new CrmPluginRegistrationAttribute { Message = "dev_Action", Action = PluginStepOperationEnum.Activate };
        await (Task)method.Invoke(task, new object?[] { pluginTypeId, "PluginType", register })!;
        A.CallTo(() => service.UpdateAsync(A<Entity>.That.Matches(x => x.LogicalName == "customapi"))).MustHaveHappened();
    }

    [TestMethod]
    public async Task TaskServer_PluginImageDeployment_HandlesDataverseErrors()
    {
        foreach (var message in new[]
        {
            "entity doesn't contain attribute with invalid",
            "does not support this image type",
            "unexpected image failure"
        })
        {
            var service = A.Fake<IOrganizationServiceAsync2>();
            A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.Ignored))
                .Throws(new InvalidOperationException(message));
            var task = NewTask();
            task.OrgServiceAsync = service;
            var method = typeof(TaskServer).GetMethods(PrivateInstance)
                .Single(x => x.Name == "DeployPluginImageAsync" && x.GetParameters().Length == 7);
            var result = (Task<Guid>)method.Invoke(task, new object?[] { "Create", "Pre", "Pre", ImageTypeEnum.PreImage, "name", Guid.NewGuid(), "Plugin" })!;
            Assert.AreEqual(Guid.Empty, await result);
        }
    }

    [TestMethod]
    public async Task TaskServer_PluginStepDeployment_HandlesCreateErrors()
    {
        foreach (var message in new[] { "The dependent component Attribute bad", "unexpected step failure" })
        {
            var service = A.Fake<IOrganizationServiceAsync2>();
            A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
                .Returns(Task.FromResult(new EntityCollection()));
            A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.Ignored))
                .Throws(new InvalidOperationException(message));
            var task = NewTask();
            task.OrgServiceAsync = service;
            var attribute = new CrmPluginRegistrationAttribute { Message = "Create", EntityLogicalName = "account", Name = "Step", PluginType = PluginType.Plugin };
            var method = typeof(TaskServer).GetMethod("DeployPluginStepAsync", PrivateInstance)!;
            var result = (Task<Guid?>)method.Invoke(task, new object?[] { Guid.NewGuid(), typeof(TaskServerHelperCoverageTests).GetTypeInfo(), attribute })!;
            Assert.IsNull(await result);
        }
    }

    [TestMethod]
    public async Task TaskServer_CustomApiCache_LoadsRows()
    {
        var service = A.Fake<IOrganizationServiceAsync2>();
        var customApiId = Guid.NewGuid();
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .Returns(Task.FromResult(new EntityCollection(new[]
            {
                new Entity("customapi", customApiId) { ["uniquename"] = "dev_Action" }
            })));
        var task = NewTask();
        task.OrgServiceAsync = service;
        var attributes = (List<KeyValuePair<string, List<CrmPluginRegistrationAttribute>>>)typeof(TaskServer).GetField("_AttributesCache", PrivateInstance)!.GetValue(task)!;
        attributes.Add(new KeyValuePair<string, List<CrmPluginRegistrationAttribute>>("api", new() { new() { PluginType = PluginType.CustomApi, Message = "dev_Action" } }));
        await (Task)typeof(TaskServer).GetMethod("LoadAllCustomApisAsync", PrivateInstance)!.Invoke(task, null)!;
        var cache = (List<KeyValuePair<string, Entity>>)typeof(TaskServer).GetField("_CustomApisCache", PrivateInstance)!.GetValue(task)!;
        Assert.HasCount(1, cache);
    }

    [TestMethod]
    public void TaskServer_CacheLookups_ReturnKnownEntriesAndRejectDuplicateAttributes()
    {
        var task = NewTask();
        var objectTypes = (List<KeyValuePair<string, int>>)typeof(TaskServer).GetField("_ObjectTypeCodesCache", PrivateInstance)!.GetValue(task)!;
        objectTypes.Add(new KeyValuePair<string, int>("account", 1));
        var messageId = Guid.NewGuid();
        var filterId = Guid.NewGuid();
        var messages = (List<KeyValuePair<string, EntityReference>>)typeof(TaskServer).GetField("_SdkMessagesCache", PrivateInstance)!.GetValue(task)!;
        var filters = (List<KeyValuePair<string, EntityReference>>)typeof(TaskServer).GetField("_SdkMessageFiltersCache", PrivateInstance)!.GetValue(task)!;
        messages.Add(new KeyValuePair<string, EntityReference>("account-Create", new EntityReference("sdkmessage", messageId)));
        filters.Add(new KeyValuePair<string, EntityReference>("account-Create", new EntityReference("sdkmessagefilter", filterId)));
        Assert.AreEqual(1, Invoke(task, "GetObjectTypeCode", "account"));
        Assert.AreEqual(messageId, ((EntityReference)Invoke(task, "GetSdkMessageId", "account", "Create")!).Id);
        Assert.AreEqual(filterId, ((EntityReference)Invoke(task, "GetSdkMessageFilterId", "account", "Create")!).Id);

        var attrs = (List<KeyValuePair<string, List<CrmPluginRegistrationAttribute>>>)typeof(TaskServer).GetField("_AttributesCache", PrivateInstance)!.GetValue(task)!;
        attrs.Add(new KeyValuePair<string, List<CrmPluginRegistrationAttribute>>(typeof(TaskServerHelperCoverageTests).FullName!, new()
        {
            new() { PluginType = PluginType.Plugin },
            new() { PluginType = PluginType.CustomApi }
        }));
        var valid = (bool)Invoke(task, "IsValidTypes", new List<TypeInfo> { typeof(TaskServerHelperCoverageTests).GetTypeInfo() });
        Assert.IsFalse(valid);
        Assert.HasCount(1, TaskServer.GetCrmPluginRegistrationAttributes(typeof(DecoratedPlugin).GetTypeInfo()));
        Assert.IsFalse((bool)Invoke(task, "IsWorkflowType", typeof(DerivedObject)));
    }

    [TestMethod]
    public async Task TaskServer_PluginStepUpdateMessage_LogsNewMatchingAndChangedFilters()
    {
        var service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored)).Returns(Task.FromResult(new EntityCollection()));
        A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(_ =>
            {
                var response = new CreateResponse();
                response.Results["id"] = Guid.NewGuid();
                return Task.FromResult<OrganizationResponse>(response);
            });
        A.CallTo(() => service.UpdateAsync(A<Entity>.Ignored)).Returns(Task.CompletedTask);
        var task = NewTask();
        task.OrgServiceAsync = service;
        var method = typeof(TaskServer).GetMethod("DeployPluginStepAsync", PrivateInstance)!;
        var type = typeof(TaskServerHelperCoverageTests).GetTypeInfo();
        var first = new CrmPluginRegistrationAttribute { Message = "Update", EntityLogicalName = "account", Name = "UpdateStep", FilteringAttributes = "name", PluginType = PluginType.Plugin };
        await (Task<Guid?>)method.Invoke(task, new object?[] { Guid.NewGuid(), type, first })!;

        var typeId = Guid.NewGuid();
        var stepId = Guid.NewGuid();
        var steps = (List<KeyValuePair<string, Entity>>)typeof(TaskServer).GetField("_PluginStepsCache", PrivateInstance)!.GetValue(task)!;
        steps.Add(new KeyValuePair<string, Entity>($"{typeId}-UpdateStep", new Entity("sdkmessageprocessingstep", stepId)
        {
            ["name"] = "UpdateStep", ["mode"] = new OptionSetValue(0), ["rank"] = 1,
            ["stage"] = new OptionSetValue(40), ["asyncautodelete"] = false,
            ["statuscode"] = new OptionSetValue(1), ["statecode"] = new OptionSetValue(0),
            ["supporteddeployment"] = new OptionSetValue(0), ["filteringattributes"] = "name",
            ["plugintypeid"] = new EntityReference("plugintype", typeId)
        }));
        var same = new CrmPluginRegistrationAttribute { Message = "Update", EntityLogicalName = "account", Name = "UpdateStep", FilteringAttributes = "name", PluginType = PluginType.Plugin };
        await (Task<Guid?>)method.Invoke(task, new object?[] { typeId, type, same })!;
        var changed = new CrmPluginRegistrationAttribute { Message = "Update", EntityLogicalName = "account", Name = "UpdateStep", FilteringAttributes = "email", PluginType = PluginType.Plugin };
        await (Task<Guid?>)method.Invoke(task, new object?[] { typeId, type, changed })!;
        A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.Ignored)).Throws(new InvalidOperationException("The dependent component Attribute invalid"));
        var failed = (Task<Guid?>)method.Invoke(task, new object?[] { typeId, type, changed })!;
        Assert.IsNull(await failed);

        steps[0].Value["statecode"] = new OptionSetValue(1);
        var activateExisting = new CrmPluginRegistrationAttribute { Message = "Update", EntityLogicalName = "account", Name = "UpdateStep", FilteringAttributes = "email", Action = PluginStepOperationEnum.Activate, PluginType = PluginType.Plugin };
        await (Task<Guid?>)method.Invoke(task, new object?[] { typeId, type, activateExisting })!;
    }

    [TestMethod]
    public async Task TaskServer_AssemblyOptionSelectors_CoverIsolationAndSourceModes()
    {
        var service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => service.RetrieveMultipleAsync(A<QueryBase>.Ignored)).Returns(Task.FromResult(new EntityCollection()));
        A.CallTo(() => service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(_ =>
            {
                var response = new CreateResponse();
                response.Results["id"] = Guid.NewGuid();
                return Task.FromResult<OrganizationResponse>(response);
            });
        foreach (var isolation in new[] { IsolationModeEnum.None, IsolationModeEnum.Sandbox, IsolationModeEnum.External })
        foreach (var source in new[] { SourceTypeEnum.Database, SourceTypeEnum.Disk, SourceTypeEnum.Normal, SourceTypeEnum.AzureWebApp, SourceTypeEnum.FileStore })
        {
            var task = NewTask();
            task.OrgServiceAsync = service;
            var attributes = (List<KeyValuePair<string, List<CrmPluginRegistrationAttribute>>>)typeof(TaskServer).GetField("_AttributesCache", PrivateInstance)!.GetValue(task)!;
            attributes.Add(new KeyValuePair<string, List<CrmPluginRegistrationAttribute>>("options", new() { new() { IsolationMode = isolation, SourceType = source } }));
            var method = typeof(TaskServer).GetMethod("DeployAssemblyAsync", PrivateInstance)!;
            var result = (Task<Guid?>)method.Invoke(task, new object?[] { typeof(TaskServerHelperCoverageTests).Assembly.Location, DeployFileType.Dll })!;
            Assert.IsNotNull(await result);
        }
    }

    [TestMethod]
    public async Task TaskServer_PluginImageWrapper_CoversAllImageSlots()
    {
        var task = NewTask();
        var method = typeof(TaskServer).GetMethods(PrivateInstance)
            .Single(x => x.Name == "DeployPluginImageAsync" && x.GetParameters().Length == 2);
        var attribute = new CrmPluginRegistrationAttribute
        {
            Message = "Create", Name = "Plugin", Image1Name = "One", Image2Name = "Two",
            Image3Name = "Three", Image4Name = "Four"
        };
        var result = (Task<Guid?>)method.Invoke(task, new object?[] { Guid.NewGuid(), attribute })!;
        Assert.IsNotNull(await result);
    }
}
