using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

[TestClass]
public sealed class FakeSdkClientSmokeTests
{
    [TestMethod]
    public void Execute_RoutesToInstanceHandler_AndObservesRequest()
    {
        using var fake = new FakeSdkClient();
        OrganizationRequest? seen = null;
        var response = new OrganizationResponse();
        fake.OnExecute = req =>
        {
            seen = req;
            return response;
        };

        var request = new WhoAmIRequest();
        var result = fake.Client.Execute(request);

        Assert.AreSame(response, result);
        Assert.AreSame(request, seen, "The prefix must hand the original request to the handler.");
    }

    [TestMethod]
    public void RetrieveMultiple_RoutesToInstanceHandler()
    {
        using var fake = new FakeSdkClient();
        var entities = new EntityCollection(new[] { new Entity("account", Guid.NewGuid()) { ["name"] = "Contoso" } });
        fake.OnRetrieveMultiple = _ => entities;

        var result = fake.Client.RetrieveMultiple(new FetchExpression("<fetch/>"));

        Assert.AreEqual(1, result.Entities.Count);
        Assert.AreEqual("Contoso", result.Entities[0]["name"]);
    }

    [TestMethod]
    public void CreateUpdateDeleteRetrieve_RouteToInstanceHandlers()
    {
        using var fake = new FakeSdkClient();
        var id = Guid.NewGuid();
        Entity? created = null, updated = null;
        string? deletedEntity = null;
        Guid deletedId = Guid.Empty;
        fake.OnCreate = e => { created = e; return id; };
        fake.OnUpdate = e => updated = e;
        fake.OnDelete = (name, guid) => { deletedEntity = name; deletedId = guid; };
        fake.OnRetrieve = (name, guid, _) => new Entity(name, guid) { ["name"] = "found" };

        var createTarget = new Entity("account");
        Assert.AreEqual(id, fake.Client.Create(createTarget));
        var updateTarget = new Entity("account", id);
        fake.Client.Update(updateTarget);
        fake.Client.Delete("account", id);
        var retrieved = fake.Client.Retrieve("account", id, new ColumnSet(true));

        Assert.AreSame(createTarget, created);
        Assert.AreSame(updateTarget, updated);
        Assert.AreEqual("account", deletedEntity);
        Assert.AreEqual(id, deletedId);
        Assert.AreEqual("found", retrieved["name"]);
    }

    [TestMethod]
    public void Clone_ReturnsSecondClientRegisteredToSameFake_NullWhenConfigured()
    {
        using var fake = new FakeSdkClient();
        var clone = fake.Client.Clone();
        Assert.IsNotNull(clone, "Default Clone detour returns a usable second client.");

        var response = new OrganizationResponse();
        var calls = 0;
        fake.OnExecute = _ => { calls++; return response; };
        clone.Execute(new OrganizationRequest("noop"));
        Assert.AreEqual(1, calls, "The clone shares the fake's handlers.");

        using var nullCloneFake = new FakeSdkClient { CloneReturnsNull = true };
        Assert.IsNull(nullCloneFake.Client.Clone());
    }

    [TestMethod]
    public void RecommendedDegreesOfParallelism_ReturnsConfiguredValue()
    {
        using var fake = new FakeSdkClient { RecommendedDegreesOfParallelism = 7 };
        Assert.AreEqual(7, fake.Client.RecommendedDegreesOfParallelism);
    }

    [TestMethod]
    public void UnregisteredHandler_FallsThroughToOriginal_AndThrows()
    {
        using var fake = new FakeSdkClient();
        Assert.ThrowsExactly<NullReferenceException>(() => fake.Client.Execute(new OrganizationRequest("noop")));
    }

    [TestMethod]
    public async Task ParallelTests_AreIsolated_EachFakeSeesOwnCalls()
    {
        using var fakeA = new FakeSdkClient();
        using var fakeB = new FakeSdkClient();
        fakeA.OnExecute = _ => new WhoAmIResponse { Results = { ["UserId"] = Guid.Parse("11111111-1111-1111-1111-111111111111") } };
        fakeB.OnExecute = _ => new WhoAmIResponse { Results = { ["UserId"] = Guid.Parse("22222222-2222-2222-2222-222222222222") } };

        var a = (WhoAmIResponse)fakeA.Client.Execute(new WhoAmIRequest());
        var b = (WhoAmIResponse)fakeB.Client.Execute(new WhoAmIRequest());
        await Task.Delay(1);
        var a2 = (WhoAmIResponse)fakeA.Client.Execute(new WhoAmIRequest());

        Assert.AreEqual(Guid.Parse("11111111-1111-1111-1111-111111111111"), a.UserId);
        Assert.AreEqual(Guid.Parse("22222222-2222-2222-2222-222222222222"), b.UserId);
        Assert.AreEqual(a.UserId, a2.UserId);
    }

    [TestMethod]
    public void RetrieveEntityRequest_RoundTripsThroughExecuteDetour()
    {
        using var fake = new FakeSdkClient();
        var meta = new EntityMetadata { LogicalName = "account" };
        fake.OnExecute = req =>
        {
            Assert.AreEqual("RetrieveEntity", req.RequestName);
            var resp = new RetrieveEntityResponse();
            resp.Results["EntityMetadata"] = meta;
            return resp;
        };

        var response = (RetrieveEntityResponse)fake.Client.Execute(new RetrieveEntityRequest { LogicalName = "account" });
        Assert.AreEqual("account", response.EntityMetadata.LogicalName);
    }
}
