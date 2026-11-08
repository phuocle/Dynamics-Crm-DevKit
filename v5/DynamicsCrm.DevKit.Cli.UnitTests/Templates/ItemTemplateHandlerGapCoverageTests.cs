using System.Reflection;
using DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Templates;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using DynamicsCrm.DevKit.Shared.Templates.Models;
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
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates;

/// <summary>
/// Second-pass coverage for the item template handlers, called directly
/// (bypassing the engine) so the handler-level guards the engine usually
/// pre-empts are exercised: the null-input guard, the missing name /
/// stage / project-file refusals of Plugin, CustomAction and CustomApi,
/// and the connected flows over a FakeSdkClient (entity lookup in the
/// XrmHelper cache, sdk message / custom action / custom api validation,
/// the message-not-found errors). Also covers the ReportItemTemplateHandler
/// gaps: the entity re-read after a cache miss, NormalizeFileName's dot
/// fallback, the ReportTemplateBuilder repair branches over a custom
/// template and the generated-report validation, driven through reflection.
/// </summary>
[TestClass]
[DoNotParallelize]
public class ItemTemplateHandlerGapCoverageTests
{
    private string _directory = null!;
    private string _serverDirectory = null!;
    private List<EntityMetadata> _originalMetadataCache = null!;
    private FakeSdkClient _fake = null!;

    [TestInitialize]
    public void Initialize()
    {
        _directory = Path.Combine(Path.GetTempPath(), "devkit-itemhandler-gap-tests", Guid.NewGuid().ToString("N"));
        _serverDirectory = Path.Combine(_directory, "Dev.Contoso.Server");
        Directory.CreateDirectory(_serverDirectory);
        // The T4 render reads the workspace (solution + shared project) —
        // the same shape the engine's scanner resolves for offline tests.
        File.WriteAllText(Path.Combine(_directory, "Contoso.sln"), string.Empty);
        Directory.CreateDirectory(Path.Combine(_directory, "Contoso.Shared"));
        File.WriteAllText(Path.Combine(_directory, "Contoso.Shared", "Contoso.Shared.shproj"), string.Empty);
        File.WriteAllText(Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
            "<Project Sdk=\"Microsoft.NET.Sdk\">\r\n  <PropertyGroup>\r\n    <TargetFramework>net48</TargetFramework>\r\n    <RootNamespace>Dev.Contoso.Server</RootNamespace>\r\n  </PropertyGroup>\r\n</Project>");

        _originalMetadataCache = XrmHelper.EntitiesMetadata;
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();

        _fake = new FakeSdkClient();
        var accountMeta = TestMetadata.Entity("account", "Account",
            TestMetadata.String("name"),
            new UniqueIdentifierAttributeMetadata { LogicalName = "accountid" });
        _fake.OnExecute = request => request switch
        {
            RetrieveAllEntitiesRequest => new RetrieveAllEntitiesResponse
            {
                Results = { ["EntityMetadata"] = new EntityMetadata[] { accountMeta } }
            },
            RetrieveEntityRequest retrieve => new RetrieveEntityResponse
            {
                Results = { ["EntityMetadata"] = accountMeta }
            },
            _ => throw new InvalidOperationException($"Unexpected request: {request.RequestName}")
        };
        _fake.OnRetrieveMultiple = query =>
        {
            var fetch = ((FetchExpression)query).Query;
            // The plugin comment read must return no parameter rows.
            if (fetch.Contains("sdkmessagerequestfield")) return new EntityCollection();
            return new EntityCollection(new List<Entity> { RowFor(fetch) });
        };

        ScaffoldingEngine.ClearHandlers();
        TemplateManifests.Clear();
        TemplateHandlers.RegisterAll();
    }

    [TestCleanup]
    public void Cleanup()
    {
        XrmHelper.EntitiesMetadata = _originalMetadataCache ?? new List<EntityMetadata>();
        ScaffoldingEngine.ClearHandlers();
        TemplateManifests.Clear();
        TemplateHandlers.RegisterAll();
        _fake?.Dispose();
        try { Directory.Delete(_directory, true); } catch { }
    }

    /// <summary>
    /// One fake row shaped for the query the MetadataService just sent —
    /// the fetch text names the entity, so the same handler serves every
    /// org read the handlers make.
    /// </summary>
    private static Entity RowFor(string fetch)
    {
        if (fetch.Contains("sdkmessagerequest") && !fetch.Contains("sdkmessagerequestfield"))
        {
            return new Entity("sdkmessagerequest")
            {
                ["name"] = "new_MyAction",
                ["primaryobjecttypecode"] = "none",
            };
        }
        if (fetch.Contains("customapi"))
        {
            return new Entity("customapi")
            {
                ["sdkmessageid"] = new EntityReference("sdkmessage", Guid.NewGuid()) { Name = "MyApi" },
            };
        }
        // sdkmessage (sdk messages and bound custom operations) — the
        // default plugin message of the wizard.
        return new Entity("sdkmessage") { ["name"] = "Update" };
    }

    private ItemTemplateInput PluginInput(
        string? name = "PreAccountUpdateSynchronous",
        string? entity = "Account",
        string message = "Update",
        string stage = "PreOperation",
        string execution = "Synchronous",
        int order = 1,
        ServiceClient serviceClient = null)
    {
        return new ItemTemplateInput
        {
            TemplateId = "Plugin",
            Entity = entity,
            Message = message,
            Stage = stage,
            Execution = execution,
            Order = order,
            Name = name,
            Class = name,
            OutputDirectory = _serverDirectory,
            Offline = true,
            RootNamespace = "Dev.Contoso.Server", // the engine sets this from the project; direct calls set it here
            ServiceClient = serviceClient,
            Transformer = new DynamicsCrm.DevKit.Cli.Templates.MonoTextTransformer(),
        };
    }

    // ── Plugin handler guards (direct invocation) ────────────────────────────

    [TestMethod]
    public async Task Plugin_RequestWithoutInput_Fails()
    {
        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest());
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "input: required");
    }

    [TestMethod]
    public async Task Plugin_MissingClassAndName_Fails()
    {
        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = PluginInput(name: null),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "--name: required for template 'Plugin'");
    }

    [TestMethod]
    public async Task Plugin_MissingStage_Fails()
    {
        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = PluginInput(stage: "  "),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "--stage: required for template 'Plugin'");
    }

    [TestMethod]
    public async Task Plugin_MissingProjectFile_Fails()
    {
        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = PluginInput(),
        });
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "--project: required for item template 'Plugin'");
    }

    [TestMethod]
    public async Task Plugin_Connected_EntityNotInCacheAfterFill_Fails()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = new ItemTemplateInput
            {
                TemplateId = "Plugin",
                Entity = "Lead",
                Message = "Update",
                Stage = "PreOperation",
                Name = "PreLeadUpdate",
                Class = "PreLeadUpdate",
                OutputDirectory = _serverDirectory,
                ServiceClient = _fake.Client,
                RootNamespace = "Dev.Contoso.Server",
                Transformer = new DynamicsCrm.DevKit.Cli.Templates.MonoTextTransformer(),
            },
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });

        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "--entity 'Lead': entity not found in the current instance.");
        // The org fill ran: the cache now carries the account from the fake.
        Assert.IsTrue(XrmHelper.EntitiesMetadata.Any(x => x.LogicalName == "account"));
    }

    [TestMethod]
    public async Task Plugin_Connected_MessageNotValidForEntity_Fails()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata> { TestMetadata.Entity("account", "Account") };
        _fake.OnRetrieveMultiple = query => new EntityCollection(new List<Entity>
        {
            new("sdkmessage") { ["name"] = "Create" }
        });

        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = PluginInput(serviceClient: _fake.Client),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });

        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "--message 'Update': not a valid message for entity 'account'.");
    }

    [TestMethod]
    public async Task Plugin_Connected_RendersWithOrgLookups()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>
        {
            TestMetadata.Entity("account", "Account", TestMetadata.String("name")),
        };
        _fake.OnRetrieveMultiple = query =>
        {
            var fetch = ((FetchExpression)query).Query;
            // The plugin comment read returns no parameter rows — the
            // wizard's comment block renders empty.
            if (fetch.Contains("sdkmessagerequest")) return new EntityCollection();
            return new EntityCollection(new List<Entity> { new("sdkmessage") { ["name"] = "Update" } });
        };

        var result = await new PluginItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = PluginInput(serviceClient: _fake.Client),
            Workspace = WorkspaceScanner.Scan(_serverDirectory),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });

        Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
        Assert.IsTrue(result.Warnings.Count == 0 || result.Warnings.All(w => !w.Contains("offline mode")));
        var code = await File.ReadAllTextAsync(Path.Combine(_serverDirectory, "PreAccountUpdateSynchronous.cs"));
        StringAssert.Contains(code, "[CrmPluginRegistration(\"Update\", \"account\"");
        Assert.IsFalse(code.Contains("InputParameters:")); // empty comment read
    }

    // ── CustomAction handler guards + connected flows ────────────────────────

    private ItemTemplateInput CustomActionInput(
        string? name = "PostNewMyActionSynchronous",
        string? entity = "none",
        string message = "new_MyAction",
        string stage = "PostOperation",
        string execution = "Synchronous",
        int order = 1,
        ServiceClient serviceClient = null)
    {
        return new ItemTemplateInput
        {
            TemplateId = "CustomAction",
            Entity = entity,
            Message = message,
            Stage = stage,
            Execution = execution,
            Order = order,
            Name = name,
            Class = name,
            OutputDirectory = _serverDirectory,
            Offline = true,
            RootNamespace = "Dev.Contoso.Server", // the engine sets this from the project; direct calls set it here
            ServiceClient = serviceClient,
            Transformer = new DynamicsCrm.DevKit.Cli.Templates.MonoTextTransformer(),
        };
    }

    [TestMethod]
    public async Task CustomAction_RequestWithoutInput_Fails()
    {
        var result = await new CustomActionItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest());
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "input: required");
    }

    [TestMethod]
    public async Task CustomAction_ValidationFailures()
    {
        var noStage = await new CustomActionItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomActionInput(stage: ""),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });
        Assert.IsFalse(noStage.Success);
        StringAssert.Contains(noStage.Errors[0], "--stage: required for template 'CustomAction'");

        var asyncPre = await new CustomActionItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomActionInput(stage: "PreOperation", execution: "Asynchronous"),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });
        Assert.IsFalse(asyncPre.Success);
        StringAssert.Contains(asyncPre.Errors[0], "--execution 'Asynchronous': requires stage PostOperation");

        var noProject = await new CustomActionItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomActionInput(),
        });
        Assert.IsFalse(noProject.Success);
        StringAssert.Contains(noProject.Errors[0], "--project: required for item template 'CustomAction'");
    }

    [TestMethod]
    public async Task CustomAction_Connected_UnboundActionValidatesAndRenders()
    {
        _fake.OnRetrieveMultiple = query => new EntityCollection(new List<Entity>
        {
            new("sdkmessagerequest") { ["name"] = "new_MyAction", ["primaryobjecttypecode"] = "none" }
        });

        var result = await new CustomActionItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomActionInput(serviceClient: _fake.Client),
            Workspace = WorkspaceScanner.Scan(_serverDirectory),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });

        Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
        Assert.IsFalse(result.Warnings.Any(w => w.Contains("offline mode")));
        var code = await File.ReadAllTextAsync(Path.Combine(_serverDirectory, "PostNewMyActionSynchronous.cs"));
        StringAssert.Contains(code, "[CrmPluginRegistration(\"new_MyAction\"");
    }

    [TestMethod]
    public async Task CustomAction_Connected_BoundEntityMessageValidation()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata> { TestMetadata.Entity("account", "Account") };
        _fake.OnRetrieveMultiple = query =>
        {
            var fetch = ((FetchExpression)query).Query;
            if (fetch.Contains("sdkmessagerequestfield")) return new EntityCollection();
            return new EntityCollection(new List<Entity> { new("sdkmessage") { ["name"] = "new_MyAction" } });
        };

        var found = await new CustomActionItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomActionInput(entity: "Account", name: "PostNewMyActionBound", serviceClient: _fake.Client),
            Workspace = WorkspaceScanner.Scan(_serverDirectory),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });
        Assert.IsTrue(found.Success, string.Join("; ", found.Errors));
        StringAssert.Contains(
            await File.ReadAllTextAsync(Path.Combine(_serverDirectory, "PostNewMyActionBound.cs")),
            "[CrmPluginRegistration(\"new_MyAction\"");

        _fake.OnRetrieveMultiple = query => new EntityCollection(); // message missing for the entity
        var missing = await new CustomActionItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomActionInput(entity: "Account", serviceClient: _fake.Client),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });
        Assert.IsFalse(missing.Success);
        StringAssert.Contains(missing.Errors[0], "--message 'new_MyAction': not a valid custom action for entity 'account'.");
    }

    // ── CustomApi handler guards + connected flow ────────────────────────────

    private ItemTemplateInput CustomApiInput(
        string? name = "MyApiRequest",
        string? entity = "none",
        string message = "MyApi",
        int order = 1,
        string rootNamespace = "Dev.Contoso.Server",
        ServiceClient serviceClient = null)
    {
        return new ItemTemplateInput
        {
            TemplateId = "CustomApi",
            Entity = entity,
            Message = message,
            Order = order,
            Name = name,
            Class = name,
            OutputDirectory = _serverDirectory,
            Offline = true,
            RootNamespace = rootNamespace,
            ServiceClient = serviceClient,
            Transformer = new DynamicsCrm.DevKit.Cli.Templates.MonoTextTransformer(),
        };
    }

    [TestMethod]
    public async Task CustomApi_RequestWithoutInput_Fails()
    {
        var result = await new CustomApiItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest());
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "input: required");
    }

    [TestMethod]
    public async Task CustomApi_OrderAndProjectGuards()
    {
        var zeroOrder = await new CustomApiItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomApiInput(order: 0),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });
        Assert.IsFalse(zeroOrder.Success);
        StringAssert.Contains(zeroOrder.Errors[0], "--order '0': invalid. Use a positive integer.");

        var noProject = await new CustomApiItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomApiInput(),
        });
        Assert.IsFalse(noProject.Success);
        StringAssert.Contains(noProject.Errors[0], "--project: required for item template 'CustomApi'");

        var bareProjectDirectory = Path.Combine(_directory, "Bare.Project");
        Directory.CreateDirectory(bareProjectDirectory);
        File.WriteAllText(Path.Combine(bareProjectDirectory, "Bare.Project.csproj"), "<Project Sdk=\"Microsoft.NET.Sdk\" />");
        var noNamespace = await new CustomApiItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomApiInput(rootNamespace: ""),
            ProjectFile = Path.Combine(bareProjectDirectory, "Bare.Project.csproj"),
        });
        Assert.IsFalse(noNamespace.Success);
        StringAssert.Contains(noNamespace.Errors[0], "the project carries no RootNamespace");
    }

    [TestMethod]
    public async Task CustomApi_Connected_ValidatesApiAndRenders()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata> { TestMetadata.Entity("account", "Account") };
        _fake.OnRetrieveMultiple = query => new EntityCollection(new List<Entity>
        {
            new("customapi")
            {
                ["sdkmessageid"] = new EntityReference("sdkmessage", Guid.NewGuid()) { Name = "MyApi" },
            }
        });

        var result = await new CustomApiItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomApiInput(entity: "Account", name: "MyApiBoundRequest", serviceClient: _fake.Client),
            Workspace = WorkspaceScanner.Scan(_serverDirectory),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });
        Assert.IsTrue(result.Success, string.Join("; ", result.Errors));
        // The CustomApi registration: ("{class}", "{api message}", PluginType.CustomApi, EntityLogicalName = ...).
        StringAssert.Contains(
            await File.ReadAllTextAsync(Path.Combine(_serverDirectory, "MyApiBoundRequest.cs")),
            "[CrmPluginRegistration(\"MyApiBoundRequest\", \"MyApi\", PluginType.CustomApi, EntityLogicalName = \"account\")]");

        _fake.OnRetrieveMultiple = query => new EntityCollection();
        var missing = await new CustomApiItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = CustomApiInput(entity: "Account", serviceClient: _fake.Client),
            ProjectFile = Path.Combine(_serverDirectory, "Dev.Contoso.Server.csproj"),
        });
        Assert.IsFalse(missing.Success);
        StringAssert.Contains(missing.Errors[0], "--message 'MyApi': not a valid custom api for entity 'account'.");
    }

    // ── Report handler: guards, cache re-read, NormalizeFileName ─────────────

    private sealed class FakeOrgReportHandler : ReportItemTemplateHandler
    {
        protected override Task<ReportOrgInfo> ResolveOrgInfoAsync(ItemTemplateInput input, ScaffoldResult result) =>
            Task.FromResult(new ReportOrgInfo
            {
                LanguageCode = 1033,
                EnvironmentBaseUrl = "https://org.crm.dynamics.com",
                OrganizationUniqueName = "org",
            });
    }

    private static ItemTemplateInput ReportInput(string entity, string name, string outputDirectory, ServiceClient serviceClient = null) =>
        new()
        {
            TemplateId = "Report",
            Entity = entity,
            Name = name,
            OutputDirectory = outputDirectory,
            ServiceClient = serviceClient,
        };

    [TestMethod]
    public async Task Report_RequestGuards()
    {
        var noInput = await new ReportItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest());
        Assert.IsFalse(noInput.Success);
        StringAssert.Contains(noInput.Errors[0], "input: required");

        var noEntity = await new ReportItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = ReportInput(entity: "  ", name: "Account", outputDirectory: _serverDirectory),
            Tokens = new Dictionary<string, string>(),
        });
        Assert.IsFalse(noEntity.Success);
        StringAssert.Contains(noEntity.Errors[0], "--entity: required");
    }

    [TestMethod]
    public async Task Report_OfflineWithoutCache_RequiresConnection()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        var result = await new ReportItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = ReportInput("Account", "Account", _serverDirectory),
            Tokens = new Dictionary<string, string>(),
        });
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "requires a Dataverse connection to read entity metadata");
    }

    [TestMethod]
    public async Task Report_CacheMissWithService_RereadsMetadataThenFails()
    {
        // The cache starts empty; the handler fills it from the org
        // (RetrieveAllEntitiesRequest) and still refuses the missing entity.
        XrmHelper.EntitiesMetadata = new List<EntityMetadata>();
        var result = await new ReportItemTemplateHandler().ScaffoldAsync(new ScaffoldRequest
        {
            ItemInput = ReportInput("Lead", "Lead", _serverDirectory, _fake.Client),
            Tokens = new Dictionary<string, string>(),
        });
        Assert.IsFalse(result.Success);
        StringAssert.Contains(result.Errors[0], "--entity 'Lead': entity not found in the current instance.");
        Assert.IsTrue(XrmHelper.EntitiesMetadata.Any(x => x.LogicalName == "account"));
    }

    [TestMethod]
    public async Task Report_NameForms_NormalizeToRdlFileNames()
    {
        XrmHelper.EntitiesMetadata = new List<EntityMetadata> { TestMetadata.Entity("account", "Account", TestMetadata.String("name")) };

        foreach (var (name, expected) in new[] { (".", "Report.rdl"), ("..", "Report.rdl"), ("My Report", "My Report.rdl"), ("dir\\Nested.rdl", "Nested.rdl") })
        {
            var output = Path.Combine(_directory, "reports-" + Guid.NewGuid().ToString("N"));
            var result = await new FakeOrgReportHandler().ScaffoldAsync(new ScaffoldRequest
            {
                ItemInput = ReportInput("Account", name, output),
                Tokens = new Dictionary<string, string>(),
            });
            Assert.IsTrue(result.Success, $"{name}: {string.Join("; ", result.Errors)}");
            Assert.AreEqual(expected, result.Files.Last().FileName);
            Assert.IsTrue(File.Exists(Path.Combine(output, expected)));
        }
    }

    // ── ReportTemplateBuilder repair branches (reflection over Build) ────────

    private const string MinimalRdlTemplate = """"
        <Report xmlns="http://schemas.microsoft.com/sqlserver/reporting/2016/01/reportdefinition">
          <DataSources>
            <DataSource Name="CRM">
              <ConnectionProperties>
                <DataProvider>MSCRM</DataProvider>
                <ConnectString>OLD</ConnectString>
              </ConnectionProperties>
            </DataSource>
          </DataSources>
          <Language>de-DE</Language>
          <ReportParameters>
            <ReportParameter Name="CRM_UILanguageId">
              <DataType>String</DataType>
              <DefaultValue>
                <Values />
              </DefaultValue>
              <Prompt>ui</Prompt>
            </ReportParameter>
            <ReportParameter Name="CRM_URL">
              <DataType>String</DataType>
              <DefaultValue>
                <Values>
                  <Value>http://old</Value>
                </Values>
              </DefaultValue>
              <Prompt>url</Prompt>
            </ReportParameter>
            <ReportParameter Name="CRM_FilteredAccount">
              <DataType>String</DataType>
              <Prompt>Account</Prompt>
              <DefaultValue>
                <Values>
                  <Value>oldfetch</Value>
                </Values>
              </DefaultValue>
            </ReportParameter>
          </ReportParameters>
          <DataSets>
            <DataSet Name="Account">
              <Query>
                <DataSourceName>CRM</DataSourceName>
                <CommandText>&lt;fetch&gt;&lt;entity name="account"&gt;&lt;attribute name="name" /&gt;&lt;/entity&gt;&lt;/fetch&gt;</CommandText>
              </Query>
              <Fields>
                <Field Name="Old">
                  <DataField>Old</DataField>
                </Field>
              </Fields>
            </DataSet>
          </DataSets>
        </Report>
        """";

    private static ReportOrgContext OrgContext(int languageCode = 1033) => new()
    {
        EntityLogicalName = "account",
        EntitySchemaName = "Account",
        EntityDisplayCollectionName = "Accounts",
        PrimaryIdAttribute = "accountid",
        PrimaryNameAttribute = "name",
        EnvironmentBaseUrl = "https://org.crm.dynamics.com",
        OrganizationUniqueName = "org",
        LanguageCode = languageCode,
    };

    private static string InvokeBuild(string template, ReportOrgContext context)
    {
        var method = typeof(ReportItemTemplateHandler).GetMethod("Build", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);
        return (string)method!.Invoke(null, [template, context])!;
    }

    [TestMethod]
    public void Build_TemplateWithoutQueryParametersOrFields_RepairsBoth()
    {
        // The minimal template carries neither QueryParameters nor — in the
        // second variant — a Fields element; the builder adds both.
        var output = InvokeBuild(MinimalRdlTemplate, OrgContext());
        StringAssert.Contains(output, "<QueryParameter Name=\"CRM_FilteredAccount\">");
        StringAssert.Contains(output, "<Field Name=\"accountid\">");
        StringAssert.Contains(output, "<Field Name=\"name\">");

        var withoutFields = Regex.Replace(
            MinimalRdlTemplate, @"\s*<Fields>.*?</Fields>", "  <Fields />", RegexOptions.Singleline);
        Assert.IsFalse(withoutFields.Contains("<Field "));
        var output2 = InvokeBuild(withoutFields, OrgContext());
        StringAssert.Contains(output2, "<Field Name=\"accountid\">");
    }

    [TestMethod]
    public void Build_ParameterWithoutValue_SynthesizesDefaultValue()
    {
        var output = InvokeBuild(MinimalRdlTemplate, OrgContext());
        // CRM_UILanguageId's DefaultValue/Values carried no Value — one was
        // synthesized with the language code.
        var document = XDocument.Parse(output);
        var parameter = document.Root!.Descendants()
            .First(x => x.Name.LocalName == "ReportParameter" && (string)x.Attribute("Name") == "CRM_UILanguageId");
        Assert.AreEqual("1033", parameter.Descendants().First(x => x.Name.LocalName == "Value").Value);
        // The URL parameter's existing value was replaced in place.
        var url = document.Root!.Descendants()
            .First(x => x.Name.LocalName == "ReportParameter" && (string)x.Attribute("Name") == "CRM_URL");
        Assert.AreEqual("https://org.crm.dynamics.com", url.Descendants().First(x => x.Name.LocalName == "Value").Value);
    }

    [TestMethod]
    public void Build_UnknownLanguageCode_FallsBackToInvariantCulture()
    {
        var output = InvokeBuild(MinimalRdlTemplate, OrgContext(languageCode: 999999));
        var document = XDocument.Parse(output);
        Assert.AreEqual("en-US", document.Root!.Element(document.Root.Name.Namespace + "Language")!.Value);
    }

    [TestMethod]
    public void Build_TemplateWithoutDeclaration_SerializesBodyOnly()
    {
        var noDeclaration = MinimalRdlTemplate.TrimStart(); // the raw template starts at <Report — no declaration
        Assert.IsFalse(noDeclaration.StartsWith("<?xml"));
        var output = InvokeBuild(noDeclaration, OrgContext());
        Assert.IsFalse(output.StartsWith("<?xml"));
        StringAssert.Contains(output, "<Report");
    }

    [TestMethod]
    public void Build_EmptyTemplate_Throws()
    {
        var error = Assert.ThrowsExactly<TargetInvocationException>(() => InvokeBuild("  ", OrgContext()));
        StringAssert.Contains(error.InnerException!.Message, "The report template is empty.");
    }

    // ── ValidateResult error branches (reflection) ───────────────────────────

    private static void InvokeValidateResult(string output, string parameterName, string logicalName, string primaryId)
    {
        var method = typeof(ReportItemTemplateHandler).GetMethod("ValidateResult", BindingFlags.NonPublic | BindingFlags.Static);
        Assert.IsNotNull(method);
        method!.Invoke(null, [output, parameterName, logicalName, primaryId]);
    }

    [TestMethod]
    public void ValidateResult_ErrorBranches()
    {
        var noCommand = Assert.ThrowsExactly<TargetInvocationException>(() =>
            InvokeValidateResult("<Report />", "CRM_FilteredAccount", "account", "accountid"));
        StringAssert.Contains(noCommand.InnerException!.Message, "does not contain a FetchXML command");

        var invalidFetch = Assert.ThrowsExactly<TargetInvocationException>(() =>
            InvokeValidateResult("<Report><CommandText>&lt;break&gt;</CommandText></Report>", "CRM_FilteredAccount", "account", "accountid"));
        StringAssert.Contains(invalidFetch.InnerException!.Message, "invalid FetchXML");

        const string pre = "<fetch><entity name=\"account\" prefilterparametername=\"CRM_FilteredAccount\"><attribute name=\"accountid\" /></entity></fetch>";
        var wrongEntity = Assert.ThrowsExactly<TargetInvocationException>(() =>
            InvokeValidateResult($"<Report><CommandText>{System.Security.SecurityElement.Escape(pre)}</CommandText></Report>", "CRM_FilteredAccount", "contact", "contactid"));
        StringAssert.Contains(wrongEntity.InnerException!.Message, "does not contain the selected entity");

        var wrongParameter = Assert.ThrowsExactly<TargetInvocationException>(() =>
            InvokeValidateResult($"<Report><CommandText>{System.Security.SecurityElement.Escape(pre)}</CommandText><Field Name=\"contactid\" /></Report>", "CRM_FilteredOther", "account", "accountid"));
        StringAssert.Contains(wrongParameter.InnerException!.Message, "prefilter parameter is inconsistent");

        var missingField = Assert.ThrowsExactly<TargetInvocationException>(() =>
            InvokeValidateResult($"<Report><CommandText>{System.Security.SecurityElement.Escape(pre)}</CommandText></Report>", "CRM_FilteredAccount", "account", "accountid"));
        StringAssert.Contains(missingField.InnerException!.Message, "does not contain the primary id field");

        // The happy shape passes.
        InvokeValidateResult(
            $"<Report><CommandText>{System.Security.SecurityElement.Escape(pre)}</CommandText><Field Name=\"accountid\" /></Report>",
            "CRM_FilteredAccount", "account", "accountid");
    }

    // NOTE: ReportItemTemplateHandler.ResolveOrgInfoAsync's real body (the
    // language read plus ServiceClient.ConnectedUrl/ConnectedOrgUniqueName)
    // needs a connected ServiceClient — the existing suite rides the
    // virtual seam instead, and an uninitialized client would fault, so
    // the real body stays uncovered without product change.
}
