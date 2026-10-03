using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageFunction;

/// <summary>
/// Behavior coverage for manage_function list/detail/validate/invoke. FetchXml
/// reads of the function graph are served by the decorator (the graph queries
/// use link-entities and aggregates FakeXrmEasy does not model); entity
/// retrieves, resolver QueryExpressions, and CRUD go through FakeXrmEasy.
/// </summary>
[TestClass]
public sealed class ManageFunctionFakeXrmEasyTests
{
    private IXrmFakedContext _ctx = null!;
    private FunctionOrgService _service = null!;

    [TestInitialize]
    public void Setup()
    {
        _ctx = MiddlewareBuilder.New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.RPL_1_5)
            .Build();
        _service = new FunctionOrgService(_ctx.GetOrganizationService());
    }

    private ManageFunctionTool NewTool(bool dryRun = false) =>
        new(_service, new McpDryRunOptions { DryRun = dryRun }, new McpExecutionContext(false));

    private static string Text(CallToolResult r) => r.GetText();

    private static string Json(CallToolResult r) => r.StructuredContent?.GetRawText() ?? "";

    private Guid SeedFunction(string uniqueName, string displayName = null, bool isFunction = true,
        int bindingType = 0, string boundEntity = null, string expression = "{ Total: 1 }",
        bool compiled = true, bool isManaged = false)
    {
        var fxId = Guid.NewGuid();
        var fx = new Entity("fxexpression", fxId)
        {
            ["name"] = displayName ?? uniqueName,
            ["uniquename"] = uniqueName,
            ["expression"] = expression
        };
        if (compiled) fx["compiledexpression"] = "compiled";
        _ctx.GetOrganizationService().Create(fx);

        var apiId = Guid.NewGuid();
        var api = new Entity("customapi", apiId)
        {
            ["uniquename"] = uniqueName,
            ["name"] = uniqueName,
            ["displayname"] = displayName ?? uniqueName,
            ["isfunction"] = isFunction,
            ["bindingtype"] = new OptionSetValue(bindingType),
            ["ismanaged"] = isManaged,
            ["statuscode"] = new OptionSetValue(1),
            ["fxexpressionid"] = new EntityReference("fxexpression", fxId)
        };
        if (boundEntity != null) api["boundentitylogicalname"] = boundEntity;
        _ctx.GetOrganizationService().Create(api);

        _service.CandidateRows.Add(Clone(api));
        return apiId;
    }

    private static Entity Clone(Entity source)
    {
        var copy = new Entity(source.LogicalName, source.Id);
        foreach (var attribute in source.Attributes)
            copy[attribute.Key] = attribute.Value;
        return copy;
    }

    private void SeedInput(string name, int type, bool isOptional = false) =>
        _service.RequestParameterRows.Add(new Entity("customapirequestparameter", Guid.NewGuid())
        {
            ["uniquename"] = name,
            ["name"] = name,
            ["type"] = new OptionSetValue(type),
            ["isoptional"] = isOptional
        });

    private void SeedOutput(string name, int type) =>
        _service.ResponsePropertyRows.Add(new Entity("customapiresponseproperty", Guid.NewGuid())
        {
            ["uniquename"] = name,
            ["name"] = name,
            ["type"] = new OptionSetValue(type)
        });

    private void SeedSolution(string uniqueName)
    {
        var publisherId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("publisher", publisherId)
        {
            ["uniquename"] = "devkitpub",
            ["customizationprefix"] = "devkit"
        });
        _ctx.GetOrganizationService().Create(new Entity("solution", Guid.NewGuid())
        {
            ["uniquename"] = uniqueName,
            ["friendlyname"] = uniqueName,
            ["publisherid"] = new EntityReference("publisher", publisherId)
        });
    }

    // ──────────────────────────────────────────────
    // list
    // ──────────────────────────────────────────────

    [TestMethod]
    public void List_NoFunctions_ReturnsZero()
    {
        var result = NewTool().manage_function("list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "No Power Fx functions found");
        StringAssert.Contains(Json(result), "\"count\":0");
    }

    [TestMethod]
    public void List_WithFunctions_MapsEntries()
    {
        SeedFunction("all_CalcTotal", "Calc Total");
        var result = NewTool().manage_function("list");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "1 function(s)");
        var json = Json(result);
        StringAssert.Contains(json, "all_CalcTotal");
        StringAssert.Contains(json, "\"bindingType\":\"Global\"");
        StringAssert.Contains(json, "\"status\":\"Active\"");
    }

    [TestMethod]
    public void List_ExceedingMaxRecords_ReportsHasMore()
    {
        SeedFunction("all_Fn1");
        SeedFunction("all_Fn2");
        SeedFunction("all_Fn3");
        var result = NewTool().manage_function("list", max_records: 2);
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        StringAssert.Contains(json, "\"count\":2");
        StringAssert.Contains(json, "\"hasMore\":true");
        StringAssert.Contains(Text(result), "more available");
    }

    [TestMethod]
    public void List_ExcludesManagedUnlessIncluded()
    {
        SeedFunction("all_Unmanaged");
        SeedFunction("all_Managed", isManaged: true);

        var result = NewTool().manage_function("list");
        StringAssert.Contains(Text(result), "1 function(s)");
        StringAssert.Contains(Json(result), "all_Unmanaged");

        var including = NewTool().manage_function("list", include_managed: true);
        StringAssert.Contains(Text(including), "2 function(s)");
        StringAssert.Contains(Json(including), "all_Managed");
    }

    [TestMethod]
    public void List_SolutionFilter_InvalidSolution_ReturnsResolverError()
    {
        var result = NewTool().manage_function("list", solution_name: "Nope");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "get_solution_components");
    }

    [TestMethod]
    public void List_SolutionFilter_MembershipBased()
    {
        SeedSolution("DEVKIT");
        var memberId = SeedFunction("all_Member");
        SeedFunction("all_Outsider");
        _service.SolutionMemberIds = [memberId];

        var result = NewTool().manage_function("list", solution_name: "DEVKIT");
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        StringAssert.Contains(json, "all_Member");
        Assert.IsFalse(json.Contains("all_Outsider"));
    }

    // ──────────────────────────────────────────────
    // resolution
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Detail_RequiresFunctionName()
    {
        var result = NewTool().manage_function("detail");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "function_name is required");
    }

    [TestMethod]
    public void Detail_ByGuid_ReturnsGraph()
    {
        var apiId = SeedFunction("all_CalcTotal", "Calc Total", expression: "{ Total: Quantity * UnitPrice }");
        SeedInput("Quantity", 7);
        SeedInput("UnitPrice", 2);
        SeedOutput("Total", 6);

        var result = NewTool().manage_function("detail", function_name: apiId.ToString());
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "2 input(s), 1 output(s), compiled.");
        var json = Json(result);
        StringAssert.Contains(json, "all_CalcTotal");
        StringAssert.Contains(json, "{ Total: Quantity * UnitPrice }");
        StringAssert.Contains(json, "\"compiledPresent\":true");
        StringAssert.Contains(json, "\"type\":\"Integer\"");
        StringAssert.Contains(json, "\"type\":\"Decimal\"");
        StringAssert.Contains(json, "\"type\":\"Float\"");
    }

    [TestMethod]
    public void Detail_ByName_UsesDisplayNameFirstResolution()
    {
        SeedFunction("all_CalcTotal", "Calc Total");
        var result = NewTool().manage_function("detail", function_name: "Calc Total");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Json(result), "all_CalcTotal");
    }

    [TestMethod]
    public void Detail_AmbiguousName_ReportsCandidatesWithoutMutation()
    {
        SeedFunction("all_Fn1", "Same Name");
        SeedFunction("all_Fn2", "Same Name");
        var result = NewTool().manage_function("detail", function_name: "Same Name");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Multiple candidates match");
        Assert.AreEqual(0, _service.ExecuteCount);
        var json = Json(result);
        StringAssert.Contains(json, "all_Fn1");
        StringAssert.Contains(json, "all_Fn2");
    }

    [TestMethod]
    public void Detail_UnknownGuid_ReturnsNotFound()
    {
        var result = NewTool().manage_function("detail", function_name: Guid.NewGuid().ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not found");
    }

    [TestMethod]
    public void Detail_WarnsOnNonInstantAndSharedExpression()
    {
        SeedFunction("all_CSharpApi", "Legacy", isFunction: false);
        _service.SharedStepCount = 2;

        var result = NewTool().manage_function("detail", function_name: "all_CSharpApi");
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        StringAssert.Contains(json, "isfunction=false");
        StringAssert.Contains(json, "2 sdk message processing step(s) (1 is the platform-created invocation step)");
    }

    [TestMethod]
    public void Detail_WarnsOnMissingExpression()
    {
        var apiId = Guid.NewGuid();
        _ctx.GetOrganizationService().Create(new Entity("customapi", apiId)
        {
            ["uniquename"] = "all_NoFx",
            ["name"] = "all_NoFx",
            ["displayname"] = "No Fx",
            ["isfunction"] = false,
            ["bindingtype"] = new OptionSetValue(0),
            ["ismanaged"] = false,
            ["statuscode"] = new OptionSetValue(1)
        });
        _service.CandidateRows.Clear();

        var result = NewTool().manage_function("detail", function_name: "all_NoFx");
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        StringAssert.Contains(json, "No FxExpression is linked");
        StringAssert.Contains(Text(result), "no linked FxExpression");
    }

    // ──────────────────────────────────────────────
    // validate
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Validate_CompiledFunction_ReportsValid()
    {
        var apiId = SeedFunction("all_CalcTotal", expression: "{ Total: 1 }");
        SeedOutput("Total", 6);

        var result = NewTool().manage_function("validate", function_name: apiId.ToString());
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        StringAssert.Contains(json, "\"status\":\"valid\"");
        StringAssert.Contains(json, "\"serverValidated\":true");
        StringAssert.Contains(json, "\"validationLevel\":\"structural\\u002Bmetadata\"");
    }

    [TestMethod]
    public void Validate_UncompiledFormula_ReportsIssue()
    {
        var apiId = SeedFunction("all_Uncompiled", compiled: false);

        var result = NewTool().manage_function("validate", function_name: apiId.ToString());
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        StringAssert.Contains(json, "\"status\":\"invalid\"");
        StringAssert.Contains(json, "\"serverValidated\":false");
        StringAssert.Contains(json, "no compiledexpression");
    }

    [TestMethod]
    public void Validate_DefinitionJson_FormulaMismatch_IsReported()
    {
        var apiId = SeedFunction("all_CalcTotal", expression: "{ Total: 1 }");

        var result = NewTool().manage_function("validate", function_name: apiId.ToString(),
            definition_json: "{\"displayName\":\"X\",\"formula\":\"{ Total: 999 }\"}");
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        StringAssert.Contains(json, "formula differs from the stored expression");
    }

    [TestMethod]
    public void Validate_DefinitionJson_UnknownKey_IsReported()
    {
        var apiId = SeedFunction("all_CalcTotal");

        var result = NewTool().manage_function("validate", function_name: apiId.ToString(),
            definition_json: "{\"displayName\":\"X\",\"formula\":\"{ Total: 1 }\",\"autoMigrate\":true}");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Json(result), "Unknown key \\u0027autoMigrate\\u0027");
    }

    [TestMethod]
    public void Validate_DefinitionJson_MissingDeclaredInput_IsReported()
    {
        var apiId = SeedFunction("all_CalcTotal");
        SeedInput("Quantity", 7);

        var result = NewTool().manage_function("validate", function_name: apiId.ToString(),
            definition_json: "{\"displayName\":\"X\",\"formula\":\"{ Total: 1 }\",\"inputs\":[{\"name\":\"Quantity\",\"type\":\"integer\"}]}");
        Assert.IsFalse(result.IsError == true);
        var json = Json(result);
        // Quantity matches; nothing extra reported beyond the valid status
        StringAssert.Contains(json, "\"status\":\"valid\"");
    }

    // ──────────────────────────────────────────────
    // invoke
    // ──────────────────────────────────────────────

    [TestMethod]
    public void Invoke_Success_ConvertsArgumentsAndMapsOutputs()
    {
        var apiId = SeedFunction("all_CalcTotal");
        SeedInput("Quantity", 7);
        SeedInput("UnitPrice", 2);
        SeedOutput("Total", 6);
        _service.InvokeResponse = new OrganizationResponse();
        _service.InvokeResponse["Total"] = 37.5d;

        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(),
            arguments_json: "{\"Quantity\":3,\"UnitPrice\":12.5}");
        Assert.IsFalse(result.IsError == true);
        StringAssert.Contains(Text(result), "Invoked function 'all_CalcTotal' with 2 argument(s)");
        var json = Json(result);
        StringAssert.Contains(json, "\"invoked\":true");
        StringAssert.Contains(json, "\"Total\":37.5");
        StringAssert.Contains(json, "\"durationMs\":");

        Assert.AreEqual(1, _service.ExecuteCount);
        Assert.AreEqual("all_CalcTotal", _service.LastExecuteRequest.RequestName);
        Assert.AreEqual(3, _service.LastExecuteRequest["Quantity"]);
        Assert.AreEqual(12.5m, _service.LastExecuteRequest["UnitPrice"]);
    }

    [TestMethod]
    public void Invoke_DryRun_ReturnsPreviewWithoutMutation()
    {
        var apiId = SeedFunction("all_CalcTotal");
        SeedInput("Quantity", 7);

        var result = NewTool(dryRun: true).manage_function("invoke", function_name: apiId.ToString(),
            arguments_json: "{\"Quantity\":3}");
        Assert.IsFalse(result.IsError == true);
        Assert.IsTrue(Text(result).StartsWith("[DryRun]"));
        StringAssert.Contains(Json(result), "\"status\":\"not_executed\"");
        Assert.AreEqual(0, _service.ExecuteCount);
    }

    [TestMethod]
    public void Invoke_ZeroArgumentFunction_PassesEmptyRequest()
    {
        SeedFunction("all_Ping");
        _service.InvokeResponse = new OrganizationResponse();

        var result = NewTool().manage_function("invoke", function_name: "all_Ping", arguments_json: "{}");
        Assert.IsFalse(result.IsError == true);
        Assert.AreEqual(1, _service.ExecuteCount);
        StringAssert.Contains(Text(result), "Invoked function 'all_Ping'");
        StringAssert.Contains(Text(result), "no outputs");
    }

    [TestMethod]
    public void Invoke_MissingRequiredArgument_IsRejected()
    {
        var apiId = SeedFunction("all_CalcTotal");
        SeedInput("Quantity", 7);

        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(), arguments_json: "{}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Missing required argument 'Quantity' (Integer)");
    }

    [TestMethod]
    public void Invoke_UnknownArgument_IsRejected()
    {
        var apiId = SeedFunction("all_CalcTotal");
        SeedInput("Quantity", 7);

        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(),
            arguments_json: "{\"Quantity\":1,\"Bogus\":2}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "Unknown argument(s) 'Bogus'");
    }

    [TestMethod]
    public void Invoke_UnsupportedParameterType_IsRejected()
    {
        var apiId = SeedFunction("all_CalcTotal");
        SeedInput("Payload", 8); // Money

        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(),
            arguments_json: "{\"Payload\":5}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "type 'Money', which manage_function cannot convert");
    }

    [TestMethod]
    public void Invoke_MalformedArgumentsJson_IsRejected()
    {
        var apiId = SeedFunction("all_CalcTotal");
        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(), arguments_json: "{bad");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "not valid JSON");
    }

    [TestMethod]
    public void Invoke_NonObjectArgumentsJson_IsRejected()
    {
        var apiId = SeedFunction("all_CalcTotal");
        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(), arguments_json: "[1,2]");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "must be a JSON object");
    }

    [TestMethod]
    public void Invoke_GlobalFunction_IgnoresRecordIdWithWarning()
    {
        var apiId = SeedFunction("all_Ping");
        _service.InvokeResponse = new OrganizationResponse();

        var result = NewTool(dryRun: true).manage_function("invoke", function_name: apiId.ToString(),
            record_id: Guid.NewGuid().ToString());
        Assert.IsFalse(result.IsError == true);
        Assert.IsTrue(Text(result).StartsWith("[DryRun]"));
        StringAssert.Contains(Json(result), "record_id is ignored");
    }

    [TestMethod]
    public void Invoke_EntityBound_RequiresRecordId()
    {
        var apiId = SeedFunction("all_Bound", bindingType: 1, boundEntity: "account");
        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(), arguments_json: "{}");
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "record_id is required");
    }

    [TestMethod]
    public void Invoke_EntityBound_PassesTargetEntityReference()
    {
        var apiId = SeedFunction("all_Bound", bindingType: 1, boundEntity: "account");
        _service.InvokeResponse = new OrganizationResponse();
        var targetId = Guid.NewGuid();

        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(), record_id: targetId.ToString());
        Assert.IsFalse(result.IsError == true);
        Assert.AreEqual(1, _service.ExecuteCount);
        var target = (EntityReference)_service.LastExecuteRequest["Target"];
        Assert.AreEqual("account", target.LogicalName);
        Assert.AreEqual(targetId, target.Id);
    }

    [TestMethod]
    public void Invoke_EntityCollectionBinding_IsRejected()
    {
        var apiId = SeedFunction("all_Collection", bindingType: 2, boundEntity: "account");
        var result = NewTool().manage_function("invoke", function_name: apiId.ToString());
        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(Text(result), "EntityCollection-bound functions is not supported");
    }

    [TestMethod]
    public void Invoke_OptionalParameter_MayBeOmitted()
    {
        var apiId = SeedFunction("all_CalcTotal");
        SeedInput("Quantity", 7);
        SeedInput("Note", 10, isOptional: true);
        _service.InvokeResponse = new OrganizationResponse();

        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(),
            arguments_json: "{\"Quantity\":1}");
        Assert.IsFalse(result.IsError == true);
        Assert.AreEqual(1, _service.ExecuteCount);
        Assert.IsFalse(_service.LastExecuteRequest.Parameters.Keys.Contains("Note"));
    }

    [TestMethod]
    public void Invoke_EmptyStringArgument_IsPreserved()
    {
        // "" is a valid value distinct from a missing optional argument.
        var apiId = SeedFunction("all_CalcTotal");
        SeedInput("Note", 10);
        _service.InvokeResponse = new OrganizationResponse();

        var result = NewTool().manage_function("invoke", function_name: apiId.ToString(),
            arguments_json: "{\"Note\":\"\"}");
        Assert.IsFalse(result.IsError == true);
        Assert.AreEqual(1, _service.ExecuteCount);
        Assert.AreEqual(string.Empty, _service.LastExecuteRequest["Note"]);
    }
}

/// <summary>
/// Decorator serving the graph FetchXml queries from seeded rows and counting
/// mutation boundary calls; everything else delegates to FakeXrmEasy.
/// </summary>
internal sealed class FunctionOrgService : IOrganizationService
{
    private readonly IOrganizationService _inner;

    public FunctionOrgService(IOrganizationService inner) => _inner = inner;

    public List<Entity> CandidateRows { get; } = [];
    public List<Entity> RequestParameterRows { get; } = [];
    public List<Entity> ResponsePropertyRows { get; } = [];
    public List<Guid> SolutionMemberIds { get; set; } = [];
    public int SharedStepCount { get; set; }
    public int ExecuteCount { get; private set; }
    public OrganizationRequest LastExecuteRequest { get; private set; }
    public OrganizationResponse InvokeResponse { get; set; }

    public EntityCollection RetrieveMultiple(QueryBase query)
    {
        if (query is FetchExpression fetch)
        {
            var xml = fetch.Query;
            if (xml.Contains("aggregate='true'"))
            {
                var count = new Entity("sdkmessageprocessingstep")
                {
                    ["count"] = new AliasedValue(null, null, SharedStepCount)
                };
                return new EntityCollection([count]);
            }
            if (xml.Contains("name='customapirequestparameter'"))
                return new EntityCollection(RequestParameterRows.Select(Clone).ToList());
            if (xml.Contains("name='customapiresponseproperty'"))
                return new EntityCollection(ResponsePropertyRows.Select(Clone).ToList());
            if (xml.Contains("name='solutioncomponent'"))
                return new EntityCollection(SolutionMemberIds
                    .Select(id => new Entity("solutioncomponent") { ["objectid"] = id })
                    .ToList());
            if (xml.Contains("name='customapi'") && xml.Contains("name='fxexpression'"))
            {
                // Mirror the fetch's own ismanaged filter so list tests see
                // Dataverse-like filtering behavior.
                var rows = xml.Contains("attribute='ismanaged'")
                    ? CandidateRows.Where(e => !e.GetAttributeValue<bool>("ismanaged")).ToList()
                    : CandidateRows;
                return new EntityCollection(rows.Select(Clone).ToList());
            }
        }
        return _inner.RetrieveMultiple(query);
    }

    public Entity Retrieve(string entityName, Guid id, ColumnSet columnSet) => _inner.Retrieve(entityName, id, columnSet);
    public Guid Create(Entity entity) => _inner.Create(entity);
    public void Update(Entity entity) => _inner.Update(entity);
    public void Delete(string entityName, Guid id) => _inner.Delete(entityName, id);

    public OrganizationResponse Execute(OrganizationRequest request)
    {
        ExecuteCount++;
        LastExecuteRequest = request;
        if (InvokeResponse != null) return InvokeResponse;
        throw new InvalidOperationException("No InvokeResponse configured for this test.");
    }

    public void Associate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
        throw new NotSupportedException();

    public void Disassociate(string entityName, Guid entityId, Relationship relationship, EntityReferenceCollection relatedEntities) =>
        throw new NotSupportedException();

    private static Entity Clone(Entity source)
    {
        var copy = new Entity(source.LogicalName, source.Id);
        foreach (var attribute in source.Attributes)
            copy[attribute.Key] = attribute.Value;
        return copy;
    }
}
