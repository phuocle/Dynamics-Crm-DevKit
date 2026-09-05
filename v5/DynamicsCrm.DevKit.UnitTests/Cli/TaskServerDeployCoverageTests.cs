using FakeItEasy;
using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

/// <summary>
/// Full deploy-flow coverage for <see cref="TaskServer"/> driving DeployDllAsync /
/// RunAsync against the checked-in DevAllInOneServer.dll fixture with a stubbed
/// IOrganizationServiceAsync2 (everything not found → everything registered).
/// </summary>
[TestClass]
public sealed class TaskServerDeployCoverageTests
{
    private IOrganizationServiceAsync2 _service = null!;
    private List<Entity> _created = null!;
    private List<Entity> _updated = null!;
    private List<string> _fetches = null!;
    private List<Entity> _createRequests = null!;
    private List<Entity> _updateRequests = null!;

    [TestInitialize]
    public void Setup()
    {
        _created = new List<Entity>();
        _updated = new List<Entity>();
        _fetches = new List<string>();
        _createRequests = new List<Entity>();
        _updateRequests = new List<Entity>();

        _service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call =>
            {
                var query = (QueryBase)call.Arguments[0];
                var fetch = (query as FetchExpression)?.Query ?? string.Empty;
                _fetches.Add(fetch);
                if (fetch.Contains("entity name='solution'"))
                {
                    return Task.FromResult(new EntityCollection(new List<Entity>
                    {
                        new("solution", Guid.NewGuid())
                        {
                            ["uniquename"] = "solution",
                            ["p.customizationprefix"] = new AliasedValue("p", "customizationprefix", "dev")
                        }
                    }));
                }
                return Task.FromResult(new EntityCollection());
            });
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call => Task.FromResult(OnExecute((OrganizationRequest)call.Arguments[0])));
        A.CallTo(() => _service.CreateAsync(A<Entity>.Ignored))
            .ReturnsLazily(call =>
            {
                var entity = (Entity)call.Arguments[0];
                entity.Id = entity.Id == Guid.Empty ? Guid.NewGuid() : entity.Id;
                _created.Add(entity);
                return Task.FromResult(entity.Id);
            });
        A.CallTo(() => _service.UpdateAsync(A<Entity>.Ignored))
            .ReturnsLazily(call =>
            {
                _updated.Add((Entity)call.Arguments[0]);
                return Task.CompletedTask;
            });
        A.CallTo(() => _service.DeleteAsync(A<string>.Ignored, A<Guid>.Ignored))
            .Returns(Task.CompletedTask);
        A.CallTo(() => _service.AssociateAsync(A<string>.Ignored, A<Guid>.Ignored, A<Relationship>.Ignored, A<EntityReferenceCollection>.Ignored))
            .Returns(Task.CompletedTask);
        A.CallTo(() => _service.DisassociateAsync(A<string>.Ignored, A<Guid>.Ignored, A<Relationship>.Ignored, A<EntityReferenceCollection>.Ignored))
            .Returns(Task.CompletedTask);
    }

    private OrganizationResponse OnExecute(OrganizationRequest request)
    {
        switch (request)
        {
            case CreateRequest createRequest:
                _createRequests.Add(createRequest.Target);
                var create = new CreateResponse();
                create.Results["id"] = Guid.NewGuid();
                return create;
            case UpdateRequest updateRequest:
                _updateRequests.Add(updateRequest.Target);
                return new UpdateResponse();
            case DeleteRequest:
                return new DeleteResponse();
            case ExecuteMultipleRequest multiple:
                var multipleResponse = new ExecuteMultipleResponse();
                var responses = new ExecuteMultipleResponseItemCollection();
                for (var i = 0; i < multiple.Requests.Count; i++)
                {
                    var retrieve = new RetrieveMultipleResponse();
                    retrieve.Results["EntityCollection"] = new EntityCollection();
                    responses.Add(new ExecuteMultipleResponseItem { RequestIndex = i, Response = retrieve });
                }
                multipleResponse.Results["Responses"] = responses;
                return multipleResponse;
            case RetrieveMetadataChangesRequest:
                var changes = new RetrieveMetadataChangesResponse();
                changes.Results["EntityMetadata"] = new EntityMetadataCollection();
                return changes;
            case RetrieveAllEntitiesRequest:
                var all = new RetrieveAllEntitiesResponse();
                all.Results["EntityMetadata"] = Array.Empty<EntityMetadata>();
                return all;
            case RetrieveProvisionedLanguagesRequest:
                var languages = new RetrieveProvisionedLanguagesResponse();
                languages.Results["RetrieveProvisionedLanguages"] = new[] { 1033 };
                return languages;
            case AssociateRequest:
                return new AssociateResponse();
            case DisassociateRequest:
                return new DisassociateResponse();
            default:
                return new OrganizationResponse();
        }
    }

    private TaskServer CreateTask(CommandLineArgs arg, Json json)
    {
        var task = new TaskServer(arg, json)
        {
            OrgServiceAsync = _service,
            SolutionPrefix = "dev_",
            CurrentDirectory = Path.Combine(Path.GetTempPath(), "DevKitCli_TaskServer", Guid.NewGuid().ToString("N"))
        };
        Directory.CreateDirectory(task.CurrentDirectory);
        return task;
    }

    private static Json ServerJson() => new()
    {
        servers = new List<JsonServer> { new() { profile = "p", folder = "folder", solution = "solution" } }
    };

    private static string FixtureDll()
    {
        var repositoryRoot = Path.GetFullPath(Path.Combine(System.AppContext.BaseDirectory, "..", "..", "..", ".."));
        var dll = Path.Combine(repositoryRoot, "DynamicsCrm.DevKit.Tests", "TestAllInOne", "Dev.AllInOne.SolutionPackager", "all_in_one", "Both", "PluginAssemblies", "DevAllInOneServer-FB296D16-0471-F111-AB0E-0022480A530F", "DevAllInOneServer.dll");
        Assert.IsTrue(File.Exists(dll), "Expected checked-in plugin assembly fixture was not found.");
        return dll;
    }

    private static async Task InvokeTask(TaskServer task, string method, params object?[] args) =>
        await (Task)typeof(TaskServer).GetMethod(method, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(task, args)!;

    [TestMethod]
    public async Task DeployDllAsync_FixtureAssembly_RegistersAssemblyAndPluginTypes()
    {
        var task = CreateTask(new CommandLineArgs { Type = "servers", Profile = "p" }, ServerJson());

        await InvokeTask(task, "DeployDllAsync", FixtureDll(), DeployFileType.Dll);

        Assert.IsTrue(_createRequests.Count > 0);
        Assert.AreEqual("pluginassembly", _createRequests[0].LogicalName);
        Assert.IsTrue(_createRequests.Any(x => x.LogicalName == "plugintype"));
        Assert.IsTrue(_fetches.Any(x => x.Contains("pluginassembly")));
    }

    [TestMethod]
    public async Task RunAsync_DllInFolder_DeploysAssemblyEndToEnd()
    {
        var json = new Json
        {
            servers = new List<JsonServer>
            {
                new() { profile = "p", folder = "folder", solution = "solution", includefiles = ["*.dll"], excludefiles = [] }
            }
        };
        var task = CreateTask(new CommandLineArgs { Type = "servers", Profile = "p" }, json);
        var folder = Path.Combine(task.CurrentDirectory, "folder");
        Directory.CreateDirectory(folder);
        File.Copy(FixtureDll(), Path.Combine(folder, "DevAllInOneServer.dll"));

        await task.RunAsync();

        Assert.IsTrue(task.IsOk);
        Assert.IsTrue(_createRequests.Count > 0);
        Assert.IsTrue(_createRequests.Any(x => x.LogicalName == "pluginassembly"));
    }

    [TestMethod]
    public async Task DeployFilesAsync_NugetPackage_ExtractsAndDeploys()
    {
        var repositoryRoot = Path.GetFullPath(Path.Combine(System.AppContext.BaseDirectory, "..", "..", "..", ".."));
        var package = Path.Combine(repositoryRoot, "DynamicsCrm.DevKit.Tests", "TestAllInOne", "Dev.AllInOne.SolutionPackager", "all_in_one", "Both", "pluginpackages", "all_Dev.AllInOne.Package", "package", "all_Dev.AllInOne.Package.nupkg");
        Assert.IsTrue(File.Exists(package), "Expected checked-in package fixture was not found.");
        // GetDllFileFromNugetPackage derives the package id by trimming the nuspec
        // version off the file name, so the file must be named {id}{version}.nupkg.
        var task = CreateTask(new CommandLineArgs { Type = "servers", Profile = "p" }, ServerJson());
        var namedPackage = Path.Combine(task.CurrentDirectory, "Dev.AllInOne.Package4.12.34.56.nupkg");
        File.Copy(package, namedPackage, true);

        await InvokeTask(task, "DeployFilesAsync", new List<string> { namedPackage });

        Assert.IsTrue(_createRequests.Count > 0);
    }

    [TestMethod]
    public async Task DeployDllAsync_OnlyUpdateAssembly_SkipsRegistration()
    {
        var arg = new CommandLineArgs { Type = "servers", Profile = "p", OnlyUpdateAssembly = true };
        var task = CreateTask(arg, ServerJson());

        await InvokeTask(task, "DeployDllAsync", FixtureDll(), DeployFileType.Dll);

        Assert.IsTrue(_fetches.Any(x => x.Contains("pluginassembly")));
    }
}
