using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Messages;
using System;
using System.Collections.Generic;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using static DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure.TestMetadata;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// JsWebApi coverage for the remaining gaps: the ActivityParties
/// defineProperty block (PartyList attributes), Owner field pairs, image
/// field code (EntityImage / _Timestamp / _URL), the DateTime suffix matrix
/// (DateOnly behavior, UserLocal + DateOnly, UserLocal + DateAndTime,
/// TimezoneIndependent + DateOnly), multi-target lookups with and without
/// ManyToOneRelationship navigation names, acceptingentityid, the
/// MultiSelectPicklist branch (AttributeType Virtual), and metadata fetched
/// through the service when Attributes is null (lazy Metadata property).
/// </summary>
[TestClass]
[DoNotParallelize]
public sealed class JsWebApiGapCoverageTests
{
    private const string Logical = "jswebapi_gap_ent";

    [TestInitialize]
    public void Setup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>();
    }

    [TestCleanup]
    public void Cleanup()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        XrmHelper.EntitiesFormXml = new List<SystemForm>();
        XrmHelper.EntitiesProcessForm = new List<ProcessForm>();
    }

    private static EntityMetadata BuildEntity()
    {
        var image = new ImageAttributeMetadata
        {
            LogicalName = "devkit_image",
            SchemaName = "devkit_Image",
            IsPrimaryImage = true
        };
        var attributes = new AttributeMetadata[]
        {
            String("name", "Name"),
            WithType(Lookup("to", "To"), AttributeTypeCode.PartyList),
            WithType(Lookup("ownerid", "Owner", "systemuser", "team"), AttributeTypeCode.Owner),
            image,
            WithType(MultiSelect("new_choices", "Choices", (1, "One"), (2, "Two")), AttributeTypeCode.Virtual),
            Lookup("customerid", "Customer", "account", "contact"),
            Lookup("acceptingentityid", "Accepting Entity", "queue", "systemuser"),
            WithType(new DateTimeAttributeMetadata
            {
                LogicalName = "new_dateonly_behavior",
                SchemaName = "new_DateonlyBehavior",
                DateTimeBehavior = DateTimeBehavior.DateOnly,
                Format = DateTimeFormat.DateOnly
            }, AttributeTypeCode.DateTime),
            WithType(new DateTimeAttributeMetadata
            {
                LogicalName = "new_userlocal_dateonly",
                SchemaName = "new_UserlocalDateonly",
                DateTimeBehavior = DateTimeBehavior.UserLocal,
                Format = DateTimeFormat.DateOnly
            }, AttributeTypeCode.DateTime),
            WithType(new DateTimeAttributeMetadata
            {
                LogicalName = "new_userlocal_datetime",
                SchemaName = "new_UserlocalDatetime",
                DateTimeBehavior = DateTimeBehavior.UserLocal,
                Format = DateTimeFormat.DateAndTime
            }, AttributeTypeCode.DateTime),
            WithType(new DateTimeAttributeMetadata
            {
                LogicalName = "new_tzi_dateonly",
                SchemaName = "new_TziDateonly",
                DateTimeBehavior = DateTimeBehavior.TimeZoneIndependent,
                Format = DateTimeFormat.DateOnly
            }, AttributeTypeCode.DateTime)
        };
        var meta = Entity(Logical, "JsWebApi Gap Ent", attributes);
        Set(meta, nameof(EntityMetadata.ManyToOneRelationships), new OneToManyRelationshipMetadata[]
        {
            new() { ReferencingAttribute = "customerid", ReferencedEntity = "account", ReferencingEntityNavigationPropertyName = "customerid_account" },
            new() { ReferencingAttribute = "customerid", ReferencedEntity = "contact", ReferencingEntityNavigationPropertyName = "customerid_contact" }
        });
        return meta;
    }

    private static void SeedTargetEntities()
    {
        XrmHelper.EntitiesMetadata.Add(Entity("account", "Account"));
        XrmHelper.EntitiesMetadata.Add(Entity("contact", "Contact"));
        XrmHelper.EntitiesMetadata.Add(Entity("queue", "Queue"));
        XrmHelper.EntitiesMetadata.Add(Entity("systemuser", "System User"));
    }

    [TestMethod]
    public async Task Generate_WebApi_WithSpecialAttributeTypes()
    {
        var meta = BuildEntity();
        XrmHelper.EntitiesMetadata.Add(meta);
        SeedTargetEntities();

        var (code, dts) = await JsWebApi.GetJsWebApiCodeAsync(null, meta, "Dev.DevKit.JsGapEnt", false);

        Assert.IsNotNull(code);
        StringAssert.Contains(code, "Object.defineProperty", "PartyList attribute emits the ActivityParties defineProperty block");
        StringAssert.Contains(code, "activity_parties", "the ActivityParties odata property name is emitted");
        StringAssert.Contains(code, "OwnerId_systemuser", "Owner attribute emits the systemuser field pair");
        StringAssert.Contains(code, "OwnerId_team", "Owner attribute emits the team field pair");
        StringAssert.Contains(code, "EntityImage_Timestamp", "primary image (non-entityimage logical name) emits the EntityImage triplet");
        StringAssert.Contains(code, "devkit_Image_URL", "image attribute emits its own triplet");
        StringAssert.Contains(code, "g: 'MultiOptionSet'", "virtual MultiSelectPicklistAttributeMetadata emits a MultiOptionSet group");
        StringAssert.Contains(code, "customerid_account", "multi-target lookup uses the ManyToOneRelationship navigation name");
        StringAssert.Contains(code, "acceptingentityid_queue", "acceptingentityid gets the hardcoded queue field");
        StringAssert.Contains(code, "acceptingentityid_systemuser", "acceptingentityid gets the hardcoded systemuser field");
        StringAssert.Contains(code, "new_DateonlyBehavior_DateOnly", "DateOnly behavior appends the _DateOnly suffix");
        StringAssert.Contains(code, "new_UserlocalDateonly_UtcDateOnly", "UserLocal + DateOnly format appends the _UtcDateOnly suffix");
        StringAssert.Contains(code, "new_UserlocalDatetime_UtcDateAndTime", "UserLocal + DateAndTime format appends the _UtcDateAndTime suffix");
        StringAssert.Contains(code, "new_TziDateonly_TimezoneDateOnly", "TimezoneIndependent + DateOnly format appends the _TimezoneDateOnly suffix");

        Assert.IsNotNull(dts);
        StringAssert.Contains(dts, "ActivityParties: Array<Record<string, any>> | null;", "PartyList attribute adds the ActivityParties d.ts entry");
        StringAssert.Contains(dts, "OwnerId_systemuser: string | null;");
        StringAssert.Contains(dts, "new_UserlocalDateonly_UtcDateOnly: Date | null;", "UserLocal + DateOnly gets the _UtcDateOnly d.ts entry");
        StringAssert.Contains(dts, "new_UserlocalDateonly_UtcDateOnly: string;", "... and its FormattedValue entry");
    }

    [TestMethod]
    public async Task Generate_WebApi_NullAttributes_FetchesMetadataViaService()
    {
        var meta = Entity(Logical, "JsWebApi Gap Ent");
        Set(meta, nameof(EntityMetadata.Attributes), null);
        SeedTargetEntities();

        var fake = new FakeSdkClient();
        fake.OnExecute = request => request switch
        {
            RetrieveEntityRequest => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = Entity(Logical, "JsWebApi Gap Ent", String("name", "Name")) }
            },
            _ => throw new InvalidOperationException($"Unexpected request {request.RequestName}")
        };

        try
        {
            var (code, dts) = await JsWebApi.GetJsWebApiCodeAsync(fake.Client, meta, "Dev.DevKit.JsGapEnt", false);

            Assert.IsNotNull(code);
            StringAssert.Contains(code, "JswebapigapentApi", "web api class is generated from the fetched metadata");
            StringAssert.Contains(code, "a: 'name'", "fetched attribute ends up as a web api field");
            Assert.IsNotNull(dts);
            StringAssert.Contains(dts, "Name: string | null;");
        }
        finally
        {
            fake.Dispose();
        }
    }
}
