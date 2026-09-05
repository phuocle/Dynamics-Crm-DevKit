using FakeItEasy;
using DynamicsCrm.DevKit.Shared.Services;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Shared;

/// <summary>
/// FakeItEasy-driven coverage for <see cref="DeploymentService"/> — every method
/// funnels through IOrganizationServiceAsync2, so a stubbed async service is enough.
/// </summary>
[TestClass]
public sealed class DeploymentServiceTests
{
    private IOrganizationServiceAsync2 _service = null!;
    private List<string> _fetchQueries = null!;
    private List<OrganizationRequest> _requests = null!;
    private List<Entity> _created = null!;
    private List<Entity> _updated = null!;
    private Func<QueryBase, EntityCollection> _onRetrieve = _ => new EntityCollection();
    private Func<OrganizationRequest, OrganizationResponse> _onExecute = _ => new RetrieveVersionResponse();

    [TestInitialize]
    public void Setup()
    {
        _fetchQueries = new List<string>();
        _requests = new List<OrganizationRequest>();
        _created = new List<Entity>();
        _updated = new List<Entity>();
        _onRetrieve = _ => new EntityCollection();
        _onExecute = _ => new RetrieveVersionResponse();
        _service = A.Fake<IOrganizationServiceAsync2>();
        A.CallTo(() => _service.RetrieveMultipleAsync(A<QueryBase>.Ignored))
            .ReturnsLazily(call =>
            {
                var query = (QueryBase)call.Arguments[0];
                if (query is FetchExpression fetch) _fetchQueries.Add(fetch.Query);
                return Task.FromResult(_onRetrieve(query));
            });
        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored))
            .ReturnsLazily(call =>
            {
                var request = (OrganizationRequest)call.Arguments[0];
                _requests.Add(request);
                return Task.FromResult(_onExecute(request));
            });
        A.CallTo(() => _service.CreateAsync(A<Entity>.Ignored))
            .ReturnsLazily(call =>
            {
                _created.Add((Entity)call.Arguments[0]);
                return Task.FromResult(Guid.NewGuid());
            });
        A.CallTo(() => _service.UpdateAsync(A<Entity>.Ignored))
            .ReturnsLazily(call =>
            {
                _updated.Add((Entity)call.Arguments[0]);
                return Task.CompletedTask;
            });
    }

    private DeploymentService CreateService() => new(_service);

    [TestMethod]
    public async Task RetrieveAllRecordsByFetchXmlAsync_PagesUntilNoMoreRecords()
    {
        var pages = new Queue<EntityCollection>(new[]
        {
            new EntityCollection(new List<Entity> { new("account") { ["name"] = "p1" } })
            {
                MoreRecords = true,
                PagingCookie = "<cookie page=\"1\" />"
            },
            new EntityCollection(new List<Entity> { new("account") { ["name"] = "p2" } })
        });
        _onRetrieve = _ => pages.Dequeue();

        var rows = await CreateService().RetrieveAllRecordsByFetchXmlAsync("<fetch><entity name='account' /></fetch>");

        Assert.AreEqual(2, rows.Count);
        Assert.AreEqual(2, _fetchQueries.Count);
        StringAssert.Contains(_fetchQueries[0], "page=\"1\"");
        StringAssert.Contains(_fetchQueries[1], "page=\"2\"");
        StringAssert.Contains(_fetchQueries[1], "paging-cookie=\"&lt;cookie page=&quot;1&quot; /&gt;\"");
    }

    [TestMethod]
    public async Task IsExistSolutionAsync_ReturnsPrefixFromAliasedPublisher()
    {
        var solutionId = Guid.NewGuid();
        _onRetrieve = _ => new EntityCollection(new List<Entity>
        {
            new("solution", solutionId)
            {
                ["p.customizationprefix"] = new AliasedValue("p", "customizationprefix", "dev")
            }
        });

        var (isOk, id, prefix) = await CreateService().IsExistSolutionAsync("Solution");

        Assert.IsTrue(isOk);
        Assert.AreEqual(solutionId, id);
        Assert.AreEqual("dev_", prefix);

        _onRetrieve = _ => new EntityCollection();
        var (notOk, emptyId, emptyPrefix) = await CreateService().IsExistSolutionAsync("Missing");
        Assert.IsFalse(notOk);
        Assert.AreEqual(Guid.Empty, emptyId);
        Assert.AreEqual(string.Empty, emptyPrefix);
    }

    [TestMethod]
    public async Task GetReportsBySolutionAsync_MapsAliasedLanguageWithDefault()
    {
        var reportId = Guid.NewGuid();
        _onRetrieve = _ => new EntityCollection(new List<Entity>
        {
            new("report", reportId)
            {
                ["filename"] = "a.rdl",
                ["bodytext"] = "<Report />",
                ["l.language"] = new AliasedValue("l", "language", "English")
            },
            new("report", Guid.NewGuid())
            {
                ["filename"] = "b.rdl",
                ["bodytext"] = "<Report />"
            }
        });

        var files = await CreateService().GetReportsBySolutionAsync("Solution");

        Assert.AreEqual(2, files.Count);
        Assert.AreEqual("a.rdl", files[0].FileName);
        Assert.AreEqual("<Report />", files[0].Content);
        Assert.AreEqual("English", files[0].Language);
        Assert.AreEqual(reportId, files[0].ObjectId);
        Assert.AreEqual("English", files[1].Language);
    }

    [TestMethod]
    public async Task DeployReportAsync_UploadsFileContent()
    {
        var file = Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString("N") + ".rdl");
        await File.WriteAllTextAsync(file, "<Report>rdl</Report>");
        try
        {
            var reportId = Guid.NewGuid();
            await CreateService().DeployReportAsync(reportId, file);

            Assert.AreEqual(1, _updated.Count);
            Assert.AreEqual(reportId, _updated[0].Id);
            Assert.AreEqual("<Report>rdl</Report>", _updated[0].GetAttributeValue<string>("bodytext"));
        }
        finally
        {
            File.Delete(file);
        }
    }

    [TestMethod]
    public async Task GetLanguageCodeAsync_HandlesDefaultNumericAndFetchLookup()
    {
        var service = CreateService();
        Assert.AreEqual(1033, await service.GetLanguageCodeAsync(" "));
        Assert.AreEqual(1041, await service.GetLanguageCodeAsync("1041"));

        _onRetrieve = _ => new EntityCollection(new List<Entity>
        {
            new("languagelocale") { ["localeid"] = 1066 }
        });
        Assert.AreEqual(1066, await service.GetLanguageCodeAsync("Vietnamese"));

        _onRetrieve = _ => new EntityCollection();
        Assert.IsNull(await service.GetLanguageCodeAsync("Klingon"));
    }

    [TestMethod]
    public async Task GetReportsAsync_SupportsGuidNameAndLanguageFilter()
    {
        var service = CreateService();
        var reportId = Guid.NewGuid();
        _onRetrieve = _ => new EntityCollection(new List<Entity>
        {
            new("report", reportId)
            {
                ["name"] = "Report",
                ["filename"] = "report.rdl",
                ["languagecode"] = 1033,
                ["ismanaged"] = false
            }
        });

        var byGuid = await service.GetReportsAsync(reportId.ToString(), null);
        Assert.AreEqual(1, byGuid.Count);
        Assert.AreEqual("Report", byGuid[0].ReportName);
        Assert.AreEqual("report.rdl", byGuid[0].ReportFileName);
        Assert.AreEqual(1033, byGuid[0].LanguageCode);
        Assert.AreEqual("English", byGuid[0].Language);
        Assert.IsFalse(byGuid[0].IsManaged);
        StringAssert.Contains(_fetchQueries[0], $"reportid' operator='eq' value='{reportId}'");
        Assert.IsFalse(_fetchQueries[0].Contains("attribute='languagecode' operator='eq'"));

        _fetchQueries.Clear();
        await service.GetReportsAsync("MyReport", 1041);
        StringAssert.Contains(_fetchQueries[0], "MyReport.rdl");
        StringAssert.Contains(_fetchQueries[0], "languagecode' operator='eq' value='1041'");

        _fetchQueries.Clear();
        await service.GetReportsAsync("already.rdl", null);
        StringAssert.Contains(_fetchQueries[0], "already.rdl");
        Assert.IsFalse(_fetchQueries[0].Contains("already.rdl.rdl"));
    }

    [TestMethod]
    public async Task GetWebResourcesAsync_BuildsEndsWithConditionsAndMapsManaged()
    {
        _onRetrieve = _ => new EntityCollection(new List<Entity>
        {
            new("webresource", Guid.NewGuid()) { ["name"] = "dev_/js/a.js", ["ismanaged"] = true },
            new("webresource", Guid.NewGuid()) { ["name"] = "dev_/js/b.js" }
        });

        var resources = await CreateService().GetWebResourcesAsync(@"C:\src\js\a.js");

        Assert.AreEqual(2, resources.Count);
        Assert.AreEqual("dev_/js/a.js", resources[0].WebResource);
        Assert.IsTrue(resources[0].IsManaged);
        Assert.IsFalse(resources[1].IsManaged);
        StringAssert.Contains(_fetchQueries[0], "ends-with");
        StringAssert.Contains(_fetchQueries[0], "like' value='%a%'");
    }

    [TestMethod]
    public async Task DeployWebResourceAsync_ReportsSuccessAndFailure()
    {
        var file = Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString("N") + ".js");
        await File.WriteAllTextAsync(file, "// js");
        try
        {
            var (ok, message) = await CreateService().DeployWebResourceAsync(file, Guid.NewGuid());
            Assert.IsTrue(ok);
            Assert.AreEqual(string.Empty, message);
            var update = _requests.OfType<UpdateRequest>().Single();
            Assert.AreEqual(Convert.ToBase64String(File.ReadAllBytes(file)), update.Target.GetAttributeValue<string>("content"));

            A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored)).Throws(new Exception("boom"));
            var (failed, error) = await CreateService().DeployWebResourceAsync(file, Guid.NewGuid());
            Assert.IsFalse(failed);
            Assert.AreEqual("boom", error);
        }
        finally
        {
            File.Delete(file);
        }
    }

    [TestMethod]
    public async Task DeployNewWebResourceAsync_MapsExtensionsToWebResourceTypes()
    {
        var expected = new Dictionary<string, int>
        {
            ["html"] = 1, ["js"] = 3, ["css"] = 2, ["png"] = 5, ["gif"] = 7,
            ["jpg"] = 6, ["ico"] = 10, ["xml"] = 4, ["xsl"] = 9, ["svg"] = 11
        };
        foreach (var (extension, type) in expected)
        {
            var file = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid():N}.{extension}");
            await File.WriteAllTextAsync(file, "content");
            try
            {
                var (id, message) = await CreateService().DeployNewWebResourceAsync(file, "dev_/file." + extension);
                Assert.AreEqual(string.Empty, message);
                Assert.AreNotEqual(Guid.Empty, id);
                Assert.AreEqual(type, _created.Last().GetAttributeValue<OptionSetValue>("webresourcetype").Value);
            }
            finally
            {
                File.Delete(file);
            }
        }
    }

    [TestMethod]
    public async Task DeployNewWebResourceAsync_ResxValidatesProvisionedLanguage()
    {
        _onExecute = request =>
        {
            if (request is RetrieveProvisionedLanguagesRequest)
            {
                var response = new RetrieveProvisionedLanguagesResponse();
                response.Results["RetrieveProvisionedLanguages"] = new[] { 1033, 1066 };
                return response;
            }
            return new RetrieveVersionResponse();
        };

        var valid = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid():N}.1066.resx");
        var invalid = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid():N}.9999.resx");
        var plain = Path.Combine(Path.GetTempPath(), $"{Guid.NewGuid():N}.resx");
        await File.WriteAllTextAsync(valid, "x");
        await File.WriteAllTextAsync(invalid, "x");
        await File.WriteAllTextAsync(plain, "x");
        try
        {
            var (okId, okMessage) = await CreateService().DeployNewWebResourceAsync(valid, "dev_/strings.1066.resx");
            Assert.AreEqual(string.Empty, okMessage);
            Assert.AreNotEqual(Guid.Empty, okId);
            Assert.AreEqual(1066, _created.Last().GetAttributeValue<int?>("languagecode"));

            var (failedId, failedMessage) = await CreateService().DeployNewWebResourceAsync(invalid, "dev_/strings.9999.resx");
            Assert.AreEqual(Guid.Empty, failedId);
            Assert.AreEqual("Language code not found: 9999", failedMessage);

            var createdBefore = _created.Count;
            var (plainId, plainMessage) = await CreateService().DeployNewWebResourceAsync(plain, "dev_/strings.resx");
            Assert.AreEqual(string.Empty, plainMessage);
            Assert.AreNotEqual(Guid.Empty, plainId);
            Assert.AreEqual(createdBefore + 1, _created.Count);
        }
        finally
        {
            File.Delete(valid);
            File.Delete(invalid);
            File.Delete(plain);
        }
    }

    [TestMethod]
    public async Task PublishWebResourceAsync_ReportsSuccessAndFailure()
    {
        var id = Guid.NewGuid();
        var (ok, _) = await CreateService().PublishWebResourceAsync(id);
        Assert.IsTrue(ok);
        var publish = _requests.OfType<PublishXmlRequest>().Single();
        StringAssert.Contains(publish.ParameterXml, id.ToString());

        A.CallTo(() => _service.ExecuteAsync(A<OrganizationRequest>.Ignored)).Throws(new Exception("locked"));
        var (failed, error) = await CreateService().PublishWebResourceAsync(id);
        Assert.IsFalse(failed);
        Assert.AreEqual("locked", error);
    }

    [TestMethod]
    public async Task GetSolutionsAsync_MapsPrefixAlias()
    {
        var id = Guid.NewGuid();
        _onRetrieve = _ => new EntityCollection(new List<Entity>
        {
            new("solution", id)
            {
                ["uniquename"] = "Dev",
                ["p.customizationprefix"] = new AliasedValue("p", "customizationprefix", "dev")
            },
            new("solution", Guid.NewGuid()) { ["uniquename"] = "NoPrefix" }
        });

        var solutions = await CreateService().GetSolutionsAsync();

        Assert.AreEqual(2, solutions.Count);
        Assert.AreEqual("Dev", solutions[0].Name);
        Assert.AreEqual(id, solutions[0].Value);
        Assert.AreEqual("dev", solutions[0].SolutionPrefix);
        Assert.AreEqual("Dev", solutions[0].SolutionUniqueName);
        Assert.AreEqual(string.Empty, solutions[1].SolutionPrefix);
    }

    [TestMethod]
    public async Task GetWebResourcesBySolutionAsync_NormalizesFileNames()
    {
        _onRetrieve = _ => new EntityCollection(new List<Entity>
        {
            new("webresource", Guid.NewGuid())
            {
                ["name"] = "/dev_/js/form.js",
                ["webresourcetype"] = new OptionSetValue(3),
                ["content"] = "Ly8="
            },
            new("webresource", Guid.NewGuid())
            {
                ["name"] = "dev_/css/site.css",
                ["webresourcetype"] = new OptionSetValue(2),
                ["content"] = "Ly8="
            }
        });

        var files = await CreateService().GetWebResourcesBySolutionAsync("Solution");

        Assert.AreEqual(2, files.Count);
        Assert.AreEqual("dev_\\js\\form.js", files[0].FileName);
        Assert.AreEqual("dev_\\css\\site.css", files[1].FileName);
        Assert.AreEqual("Ly8=", files[0].Content);
    }

    [TestMethod]
    public async Task AddWebResourceToSolutionAsync_SendsComponentRequest()
    {
        var id = Guid.NewGuid();
        await CreateService().AddWebResourceToSolutionAsync(id, "DevSolution");

        var request = _requests.OfType<AddSolutionComponentRequest>().Single();
        Assert.AreEqual(id, request.ComponentId);
        Assert.AreEqual(61, request.ComponentType);
        Assert.AreEqual("DevSolution", request.SolutionUniqueName);
        Assert.IsTrue(request.AddRequiredComponents);
    }

    [TestMethod]
    public void GetAliasedValue_ConvertsBetweenGuidAndEntityReference()
    {
        Assert.AreEqual(0, DeploymentService.GetAliasedValue<int>(new Entity(), "missing"));

        var guid = Guid.NewGuid();
        var entity = new Entity
        {
            ["a"] = new AliasedValue("a", "x", guid),
            ["b"] = new AliasedValue("b", "y", new EntityReference("account", guid)),
            ["c"] = new AliasedValue("c", "z", "text")
        };
        var reference = DeploymentService.GetAliasedValue<EntityReference>(entity, "a");
        Assert.AreEqual(guid, reference.Id);
        Assert.AreEqual("a", reference.LogicalName);
        Assert.AreEqual(guid, DeploymentService.GetAliasedValue<Guid>(entity, "b"));
        Assert.AreEqual("text", DeploymentService.GetAliasedValue<string>(entity, "c"));
    }

    [TestMethod]
    public async Task GetEntityDataProviderIdAsync_ReturnsSingleRowOrNull()
    {
        var id = Guid.NewGuid();
        _onRetrieve = _ => new EntityCollection(new List<Entity> { new("entitydataprovider", id) });
        Assert.AreEqual(id, (await CreateService().GetEntityDataProviderIdAsync("dev_ds")).Id);

        _onRetrieve = _ => new EntityCollection();
        Assert.IsNull(await CreateService().GetEntityDataProviderIdAsync("dev_missing"));
    }

    [TestMethod]
    public async Task IsVirtualTableSupportCRUDAsync_ChecksVersionThreshold()
    {
        _onExecute = _ =>
        {
            var response = new RetrieveVersionResponse();
            response.Results["Version"] = "9.2.26083.137";
            return response;
        };
        Assert.IsTrue(await CreateService().IsVirtualTableSupportCRUDAsync());

        _onExecute = _ =>
        {
            var response = new RetrieveVersionResponse();
            response.Results["Version"] = "9.0.0.0";
            return response;
        };
        Assert.IsFalse(await CreateService().IsVirtualTableSupportCRUDAsync());
    }

    [TestMethod]
    public async Task IsConnectedAsync_ReturnsNullForInvalidConnectionString()
    {
        Assert.IsNull(await DeploymentService.IsConnectedAsync("not-a-connection-string"));
    }
}
