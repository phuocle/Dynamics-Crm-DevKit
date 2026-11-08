using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.CrossTool;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Shared;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.ManageEnvironmentVariable;

/// <summary>
/// manage_environment_variable rare-branch coverage on a FakeSdkClient:
/// exception paths, derived schema-name collisions during create, ambiguous
/// schema-name matches, and detail retrieval.
/// </summary>
[TestClass]
public sealed class ManageEnvironmentVariableErrorPathCoverageTests
{
    private FakeSdkClient _fake = null!;
    private readonly List<Entity> _definitions = new();
    private readonly List<Entity> _values = new();
    private readonly List<Entity> _solutions = new();
    private bool _failRetrieveMultiple;

    [TestInitialize]
    public void Setup()
    {
        _fake = new FakeSdkClient();
        _definitions.Clear();
        _values.Clear();
        _solutions.Clear();
        _failRetrieveMultiple = false;
        _fake.OnRetrieveMultiple = query =>
        {
            if (_failRetrieveMultiple) throw new InvalidOperationException("env var fetch blew up");
            if (query is QueryExpression qe)
            {
                return qe.EntityName switch
                {
                    "environmentvariabledefinition" => new EntityCollection(_definitions),
                    "environmentvariablevalue" => new EntityCollection(_values),
                    "solution" => new EntityCollection(_solutions),
                    _ => new EntityCollection()
                };
            }
            return new EntityCollection();
        };
        _fake.OnRetrieve = (_, _, _) => new Entity("publisher", Guid.NewGuid())
        {
            ["customizationprefix"] = "dev",
            ["customizationoptionvalueprefix"] = 10000
        };
    }

    [TestCleanup]
    public void Cleanup() => _fake.Dispose();

    private ManageEnvironmentVariableTool NewTool() =>
        new(_fake.Client, new McpDryRunOptions(), DryRunTestHelpers.NormalContext());

    private void SeedSolution()
    {
        _solutions.Add(new Entity("solution", Guid.NewGuid())
        {
            ["friendlyname"] = "My Solution",
            ["uniquename"] = "all_env_solution",
            ["publisherid"] = new EntityReference("publisher", Guid.NewGuid())
        });
    }

    private static Entity MakeDefinition(string schemaName, string displayName)
    {
        var id = Guid.NewGuid();
        return new Entity("environmentvariabledefinition", id)
        {
            ["environmentvariabledefinitionid"] = id,
            ["schemaname"] = schemaName,
            ["displayname"] = displayName,
            ["type"] = new OptionSetValue(100000000), // string
            ["defaultvalue"] = "default"
        };
    }

    [TestMethod]
    public async Task List_ServiceThrows_ReturnsFriendlyError()
    {
        _failRetrieveMultiple = true;

        var result = NewTool().manage_environment_variable(action: "list");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "env var fetch blew up");
    }

    [TestMethod]
    public async Task Create_DerivedSchemaNameAlreadyExists_ReturnsUpdateHint()
    {
        SeedSolution();
        _definitions.Add(MakeDefinition("dev_NewLabel", "Other Label"));

        var result = NewTool().manage_environment_variable(action: "create",
            display_name: "New Label", type: "string", solution_name: "My Solution");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Environment variable 'dev_NewLabel' resolves to existing environment variable 'dev_NewLabel'");
        StringAssert.Contains(result.GetText(), "Use action='update' to modify it.");
    }

    [TestMethod]
    public async Task Create_DerivedSchemaNameAmbiguous_ReturnsListHint()
    {
        SeedSolution();
        _definitions.Add(MakeDefinition("dev_NewLabelA", "Other Label A"));
        _definitions.Add(MakeDefinition("dev_NewLabelB", "Other Label B"));

        var result = NewTool().manage_environment_variable(action: "create",
            display_name: "New Label", type: "string", solution_name: "My Solution");

        Assert.IsTrue(result.IsError == true);
        StringAssert.Contains(result.GetText(), "Multiple candidates match 'dev_NewLabel'");
        StringAssert.Contains(result.GetText(), "Use manage_environment_variable(action='list') to see all environment variables.");
    }

    [TestMethod]
    public async Task Detail_BySchemaName_ReturnsDefinitionWithCurrentValue()
    {
        var def = MakeDefinition("dev_var", "Demo Var");
        _definitions.Add(def);
        _values.Add(new Entity("environmentvariablevalue", Guid.NewGuid())
        {
            ["value"] = "current-value",
            ["environmentvariabledefinitionid"] = new EntityReference("environmentvariabledefinition", def.Id)
        });

        var result = NewTool().manage_environment_variable(action: "detail", variable_name: "dev_var");

        Assert.IsFalse(result.IsError == true, result.GetText());
        StringAssert.Contains(result.GetText(), "Environment variable 'dev_var'");
        var json = JsonDocument.Parse(result.StructuredContent!.Value.GetRawText()).RootElement;
        Assert.AreEqual("current-value", json.GetProperty("currentValue").GetString());
        Assert.AreEqual("default", json.GetProperty("defaultValue").GetString());
    }
}
