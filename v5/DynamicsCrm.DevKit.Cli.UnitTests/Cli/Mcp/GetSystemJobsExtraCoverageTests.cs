using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp;

[TestClass]
public sealed class GetSystemJobsExtraCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<EntityMetadata> _entities = new();
    private readonly List<Entity> _jobs = new();

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _entities.Clear();
        _jobs.Clear();

        var accountMeta = TestMetadata.Entity("account", "Account", TestMetadata.String("name", "Name"));
        _entities.Add(accountMeta);

        var job = new Entity("asyncoperation", Guid.NewGuid());
        job["name"] = "Bulk Delete Job";
        job["operationtype"] = new OptionSetValue(13);
        job["statecode"] = new OptionSetValue(3);
        job["statuscode"] = new OptionSetValue(31); // Failed
        job.FormattedValues["operationtype"] = "Bulk Delete";
        job.FormattedValues["statecode"] = "Completed";
        job.FormattedValues["statuscode"] = "Failed";
        job["message"] = "Bulk delete failed due to deadlock";
        job["friendlymessage"] = "Operation could not be completed";
        _jobs.Add(job);

        _fake.OnExecute = request =>
        {
            return request switch
            {
                RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
                {
                    Results = { ["EntityMetadata"] = _entities.ToArray() }
                },
                RetrieveEntityRequest req => new RetrieveEntityResponse
                {
                    Results = { ["EntityMetadata"] = accountMeta }
                },
                RetrieveMultipleRequest => new RetrieveMultipleResponse
                {
                    Results = { ["EntityCollection"] = new EntityCollection(_jobs) }
                },
                _ => new OrganizationResponse()
            };
        };
    }

    [TestCleanup]
    public void Cleanup()
    {
        _fake.Dispose();
    }

    private GetSystemJobsTool CreateTool() => new(_fake.Client);

    [TestMethod]
    public void GetSystemJobs_ValidationErrors()
    {
        var tool = CreateTool();

        Assert.IsTrue(tool.get_system_jobs(status: "invalid_status").IsError == true);
        Assert.IsTrue(tool.get_system_jobs(operation_type: "invalid_op").IsError == true);
        Assert.IsTrue(tool.get_system_jobs(correlation_id: "invalid_guid").IsError == true);
    }

    [TestMethod]
    public void GetSystemJobs_List_Success()
    {
        var tool = CreateTool();

        var res = tool.get_system_jobs(status: "failed", operation_type: "bulk_delete", minutes_ago: 60);
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "failed system job");
    }

    [TestMethod]
    public void GetSystemJobs_Detail_ValidationAndSuccess()
    {
        var tool = CreateTool();
        var jobId = _jobs[0].Id.ToString();

        Assert.IsTrue(tool.get_system_jobs(record_id: "not-a-guid").IsError == true);

        var res = tool.get_system_jobs(record_id: jobId);
        Assert.IsFalse(res.IsError == true, res.GetText());
        StringAssert.Contains(res.GetText(), "Bulk Delete Job");
    }
}
