using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.Test.Generator;

[TestClass]
public class TaskGeneratorTests
{
    private IXrmFakedContext _context = null!;
    private IOrganizationService _service = null!;
    private string _testOutputDirectory = null!;

    [TestInitialize]
    public void Setup()
    {
        _context = MiddlewareBuilder
            .New()
            .AddCrud()
            .UseCrud()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();
        _service = _context.GetOrganizationService();
        
        _testOutputDirectory = Path.Combine(Path.GetTempPath(), "DevKitCliTest_TaskGen", Guid.NewGuid().ToString());
        Directory.CreateDirectory(_testOutputDirectory);

        // Clear static caches to ensure test isolation
        XrmHelper.EntitiesMetadata.Clear();
        XrmHelper.EntitiesFormXml.Clear();
        XrmHelper.EntitiesProcessForm.Clear();
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_testOutputDirectory))
        {
            try { Directory.Delete(_testOutputDirectory, true); } catch { }
        }
    }

    #region IsValidAsync Tests

    [TestMethod]
    public async Task IsValidAsync_RootFolder_QuestionMarks_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "???",
            type = "jsform",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "Should return false when rootfolder is '???'");
    }

    [TestMethod]
    public async Task IsValidAsync_Type_Empty_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "Should return false when type is empty");
    }

    [TestMethod]
    public async Task IsValidAsync_Type_QuestionMarks_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "???",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "Should return false when type is '???'");
    }

    [TestMethod]
    public async Task IsValidAsync_Type_Invalid_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "invalidtype",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "Should return false when type is invalid");
    }

    [TestMethod]
    public async Task IsValidAsync_JsForm_Valid_ReturnsTrue()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "jsform",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsTrue(result, "Should return true for valid jsform configuration");
    }

    [TestMethod]
    public async Task IsValidAsync_TsForm_Valid_ReturnsTrue()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "tsform",
            rootnamespace = null // TsForm doesn't require rootnamespace
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsTrue(result, "Should return true for valid tsform configuration");
    }

    [TestMethod]
    public async Task IsValidAsync_JsWebApi_Valid_ReturnsTrue()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "jswebapi",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsTrue(result, "Should return true for valid jswebapi configuration");
    }

    [TestMethod]
    public async Task IsValidAsync_TsWebApi_Valid_ReturnsTrue()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "tswebapi",
            rootnamespace = null // TsWebApi doesn't require rootnamespace
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsTrue(result, "Should return true for valid tswebapi configuration");
    }

    [TestMethod]
    public async Task IsValidAsync_CSharp_Valid_ReturnsTrue()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "csharp",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsTrue(result, "Should return true for valid csharp configuration");
    }

    [TestMethod]
    public async Task IsValidAsync_RootNamespace_Empty_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "jsform",
            rootnamespace = "" // Empty rootnamespace for JsForm should fail
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "Should return false when rootnamespace is empty for JsForm");
    }

    [TestMethod]
    public async Task IsValidAsync_RootNamespace_QuestionMarks_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "jsform",
            rootnamespace = "???" // '???' rootnamespace for JsForm should fail
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "Should return false when rootnamespace is '???' for JsForm");
    }

    [TestMethod]
    public async Task IsValidAsync_TsForm_NoRootNamespace_ReturnsTrue()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "tsform",
            rootnamespace = "???" // TsForm should skip rootnamespace validation
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsTrue(result, "TsForm should skip rootnamespace validation even if it's '???'");
    }

    [TestMethod]
    public async Task IsValidAsync_TsWebApi_NoRootNamespace_ReturnsTrue()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "tswebapi",
            rootnamespace = "???" // TsWebApi should skip rootnamespace validation
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsTrue(result, "TsWebApi should skip rootnamespace validation even if it's '???'");
    }

    [TestMethod]
    public async Task IsValidAsync_Type_CaseInsensitive_ReturnsTrue()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "JSFORM", // Uppercase
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsTrue(result, "Type matching should be case-insensitive");
    }

    [TestMethod]
    public async Task IsValidAsync_Type_MixedCase_ReturnsTrue()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "JsForm", // Mixed case
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsTrue(result, "Type matching should work with mixed case");
    }

    #endregion

    #region TaskType Property Tests

    [TestMethod]
    public void TaskType_ReturnsCorrectFormat()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "jsform",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var taskType = task.TaskType;

        // Assert
        Assert.IsTrue(taskType.Contains("GENERATORS"), "TaskType should contain 'GENERATORS'");
        Assert.IsTrue(taskType.Contains("JSFORM"), "TaskType should contain uppercase type");
    }

    #endregion

    #region Constructor Tests

    [TestMethod]
    public void Constructor_SetsArgProperty()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = CreateValidJsonGenerator();

        // Act
        var task = new TaskGenerator(arg, json);

        // Assert
        Assert.AreEqual(arg, task.Arg, "Arg property should be set from constructor");
    }

    [TestMethod]
    public void Constructor_SetsCurrentDirectory()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = CreateValidJsonGenerator();

        // Act
        var task = new TaskGenerator(arg, json);

        // Assert
        Assert.IsNotNull(task.CurrentDirectory, "CurrentDirectory should not be null");
        Assert.AreEqual(arg.CurrentDirectory, task.CurrentDirectory);
    }

    [TestMethod]
    public void Constructor_SetsServiceClient()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = CreateValidJsonGenerator();

        // Act
        var task = new TaskGenerator(arg, json);

        // Assert
        Assert.AreEqual(arg.ServiceClient, task.ServiceClient);
    }

    #endregion

    #region Property Tests

    [TestMethod]
    public void IsOk_DefaultIsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = CreateValidJsonGenerator();
        var task = new TaskGenerator(arg, json);

        // Assert
        Assert.IsFalse(task.IsOk, "IsOk should default to false");
    }

    [TestMethod]
    public void IsOk_CanBeSet()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = CreateValidJsonGenerator();
        var task = new TaskGenerator(arg, json);

        // Act
        task.IsOk = true;

        // Assert
        Assert.IsTrue(task.IsOk);
    }

    [TestMethod]
    public void SolutionId_DefaultIsEmpty()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = CreateValidJsonGenerator();
        var task = new TaskGenerator(arg, json);

        // Assert
        Assert.AreEqual(Guid.Empty, task.SolutionId);
    }

    [TestMethod]
    public void SolutionId_CanBeSet()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = CreateValidJsonGenerator();
        var task = new TaskGenerator(arg, json);
        var expectedId = Guid.NewGuid();

        // Act
        task.SolutionId = expectedId;

        // Assert
        Assert.AreEqual(expectedId, task.SolutionId);
    }

    [TestMethod]
    public void SolutionPrefix_DefaultIsNull()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = CreateValidJsonGenerator();
        var task = new TaskGenerator(arg, json);

        // Assert
        Assert.IsNull(task.SolutionPrefix);
    }

    [TestMethod]
    public void SolutionPrefix_CanBeSet()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = CreateValidJsonGenerator();
        var task = new TaskGenerator(arg, json);

        // Act
        task.SolutionPrefix = "new_";

        // Assert
        Assert.AreEqual("new_", task.SolutionPrefix);
    }

    [TestMethod]
    public void TaskType_ContainsBothGeneratorsAndType()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "tswebapi",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var taskType = task.TaskType;

        // Assert
        Assert.IsTrue(taskType.Contains("GENERATORS"));
        Assert.IsTrue(taskType.Contains("TSWEBAPI"));
    }

    [TestMethod]
    public void TaskType_CSharp_ReturnsCorrectFormat()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "csharp",
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var taskType = task.TaskType;

        // Assert
        Assert.IsTrue(taskType.Contains("CSHARP"));
    }

    #endregion

    #region Edge Case Tests

    [TestMethod]
    public async Task IsValidAsync_Type_Whitespace_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "   ", // Only whitespace
            rootnamespace = "Dev.DevKit"
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "Should return false when type is only whitespace");
    }

    [TestMethod]
    public async Task IsValidAsync_RootNamespace_Whitespace_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "jsform",
            rootnamespace = "   " // Only whitespace
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "Should return false when rootnamespace is only whitespace");
    }

    [TestMethod]
    public async Task IsValidAsync_JsWebApi_WithEmptyRootNamespace_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "jswebapi",
            rootnamespace = "" // JsWebApi requires rootnamespace
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "JsWebApi requires rootnamespace");
    }

    [TestMethod]
    public async Task IsValidAsync_CSharp_WithEmptyRootNamespace_ReturnsFalse()
    {
        // Arrange
        var arg = CreateCommandLineArgs();
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "csharp",
            rootnamespace = "" // CSharp requires rootnamespace
        };
        var task = new TaskGenerator(arg, json);

        // Act
        var result = await task.IsValidAsync();

        // Assert
        Assert.IsFalse(result, "CSharp requires rootnamespace");
    }

    #endregion

    #region RunAsync Tests

    [TestMethod]
    public async Task RunAsync_JsForm_GeneratesFiles_WithMockedCache()
    {
        // Arrange
        // 1. Setup Mock Metadata
        var accountMetadata = new EntityMetadata
        {
            LogicalName = "account",
            SchemaName = "Account"
        };
        // Set read-only properties via reflection
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.ObjectTypeCode))!.SetValue(accountMetadata, 1);
        
        var attributes = new AttributeMetadata[] 
        {
            new StringAttributeMetadata { LogicalName = "name", SchemaName = "name" },
            new UniqueIdentifierAttributeMetadata { LogicalName = "accountid", SchemaName = "AccountId" }
        };
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.Attributes))!.SetValue(accountMetadata, attributes);

        XrmHelper.EntitiesMetadata.Add(accountMetadata);

        // 2. Setup Mock Form XML
        var formXml = @"<form><tabs><tab name='tab1'><columns><column><sections><section name='sec1'><rows><row><cell><control id='header_name' classid='{4273EDBD-AC1D-40d3-9FB2-0943BC248539}' datafieldname='name' /></cell></row></rows></section></sections></column></columns></tab></tabs></form>";
        var systemForm = new SystemForm
        {
            Name = "Account Main",
            EntityLogicalName = "account",
            FormType = FormType.Main,
            FormXml = formXml,
            FormId = Guid.NewGuid()
        };
        XrmHelper.EntitiesFormXml.Add(systemForm);
        
        // Setup BPF Mock to avoid null reference in JsForm generator
        XrmHelper.EntitiesProcessForm.Add(new ProcessForm 
        { 
            EntityLogicalName = "account", 
            Name = "Account BPF", 
            xaml = "<mxswa:Workflow xmlns:mxswa=\"clr-namespace:Microsoft.Xrm.Sdk;assembly=Microsoft.Xrm.Sdk\" />" 
        });

        // 3. Configure Task
        var arg = CreateCommandLineArgs();
        // arg.CurrentDirectory = _testOutputDirectory; // SKIP: Read-only property
        
        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities", // Output to temp/entities
            type = "jsform",
            rootnamespace = "Dev.DevKit",
            entities = "account" // Explicitly target 'account'
        };
        var task = new TaskGenerator(arg, json);
        task.CurrentDirectory = _testOutputDirectory;

        // Act
        // This should skip ServiceClient calls because cache is populated
        await task.RunAsync();

        // Assert
        var entitiesDir = Path.Combine(_testOutputDirectory, "entities");
        var formJs = Path.Combine(entitiesDir, "Account.form.js");
        var formDts = Path.Combine(entitiesDir, "Account.d.ts");

        Assert.IsTrue(File.Exists(formJs), $"Account.form.js should exist at {formJs}");
        Assert.IsTrue(File.Exists(formDts), $"Account.d.ts should exist at {formDts}");
        
        var content = File.ReadAllText(formJs);
        Console.WriteLine(content);
        Assert.IsTrue(content.Contains("DevKit.FormAccount_Main"), "Generated JS should contain form function");
        Assert.IsTrue(content.Contains("body: [\"name\"]"), "Generated JS should contain body with 'name' field");
    }

    [TestMethod]
    public async Task RunAsync_TsForm_GeneratesFiles()
    {
        // 1. Setup Mock Metadata & Form
        var accountMetadata = CreateMockAccountMetadata();
        XrmHelper.EntitiesMetadata.Add(accountMetadata);
        XrmHelper.EntitiesFormXml.Add(CreateMockSystemForm(accountMetadata.LogicalName));
        XrmHelper.EntitiesProcessForm.Add(CreateMockProcessForm(accountMetadata.LogicalName));

        // 2. Configure Task
        var arg = CreateCommandLineArgs();

        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "tsform",
            entities = "account"
        };
        var task = new TaskGenerator(arg, json);
        task.CurrentDirectory = _testOutputDirectory;

        // 3. Run
        await task.RunAsync();

        // 4. Assert
        var formTs = Path.Combine(_testOutputDirectory, "entities", "Account.form.ts");
        Assert.IsTrue(File.Exists(formTs), $"Account.form.ts should exist");
        var content = File.ReadAllText(formTs);
        Assert.IsTrue(content.Contains("export namespace Account"), "Generated TS should contain entity namespace");
    }

    [TestMethod]
    public async Task RunAsync_JsWebApi_GeneratesFiles()
    {
        // 1. Setup Mock Metadata
        var accountMetadata = CreateMockAccountMetadata();
        XrmHelper.EntitiesMetadata.Add(accountMetadata);

        // 2. Configure Task
        var arg = CreateCommandLineArgs();

        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "jswebapi",
            rootnamespace = "Dev.DevKit",
            entities = "account"
        };
        var task = new TaskGenerator(arg, json);
        task.CurrentDirectory = _testOutputDirectory;

        // 3. Run
        await task.RunAsync();

        // 4. Assert
        var apiJs = Path.Combine(_testOutputDirectory, "entities", "Account.webapi.js");
        Assert.IsTrue(File.Exists(apiJs), "Account.webapi.js should exist");
        
        var content = File.ReadAllText(apiJs);
        Assert.IsTrue(content.Contains("DevKit.AccountApi = function"), "Generated JS WebApi should contain correct API definition");
    }

    [TestMethod]
    public async Task RunAsync_TsWebApi_GeneratesFiles()
    {
        // 1. Setup Mock Metadata
        var accountMetadata = CreateMockAccountMetadata();
        XrmHelper.EntitiesMetadata.Add(accountMetadata);

        // 2. Configure Task
        var arg = CreateCommandLineArgs();

        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "tswebapi",
            entities = "account"
        };
        var task = new TaskGenerator(arg, json);
        task.CurrentDirectory = _testOutputDirectory;

        // 3. Run
        await task.RunAsync();

        // 4. Assert
        var apiTs = Path.Combine(_testOutputDirectory, "entities", "Account.webapi.ts");
        Assert.IsTrue(File.Exists(apiTs), "Account.webapi.ts should exist");
        
        var content = File.ReadAllText(apiTs);
        Assert.IsTrue(content.Contains("export class AccountApi"), "Generated TS WebApi should contain API class");
    }

    [TestMethod]
    public async Task RunAsync_CSharp_GeneratesFiles()
    {
        // 1. Setup Mock Metadata
        var accountMetadata = CreateMockAccountMetadata();
        XrmHelper.EntitiesMetadata.Add(accountMetadata);

        // 2. Configure Task
        var arg = CreateCommandLineArgs();

        var json = new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "csharp",
            rootnamespace = "Dev.DevKit",
            entities = "account"
        };
        var task = new TaskGenerator(arg, json);
        task.CurrentDirectory = _testOutputDirectory;

        // 3. Run
        await task.RunAsync();

        // 4. Assert
        var csharpFile = Path.Combine(_testOutputDirectory, "entities", "Account.generated.cs");
        Assert.IsTrue(File.Exists(csharpFile), "Account.generated.cs should exist");
        
        var content = File.ReadAllText(csharpFile);
        Assert.IsTrue(content.Contains("public partial class Account"), "Generated C# should contain class definition");
    }

    private EntityMetadata CreateMockAccountMetadata()
    {
        var metadata = new EntityMetadata
        {
            LogicalName = "account",
            SchemaName = "Account"
        };
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.ObjectTypeCode))!.SetValue(metadata, 1);
        
        var attributes = new AttributeMetadata[] 
        {
            new StringAttributeMetadata { LogicalName = "name", SchemaName = "name" },
            new UniqueIdentifierAttributeMetadata { LogicalName = "accountid", SchemaName = "AccountId" }
        };
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.Attributes))!.SetValue(metadata, attributes);
        return metadata;
    }

    private SystemForm CreateMockSystemForm(string entityLogicalName)
    {
        var formXml = @"<form><tabs><tab name='tab1'><columns><column><sections><section name='sec1'><rows><row><cell><control id='header_name' classid='{4273EDBD-AC1D-40d3-9FB2-0943BC248539}' datafieldname='name' /></cell></row></rows></section></sections></column></columns></tab></tabs></form>";
        return new SystemForm
        {
            Name = "Account Main",
            EntityLogicalName = entityLogicalName,
            FormType = FormType.Main,
            FormXml = formXml,
            FormId = Guid.NewGuid()
        };
    }

    private ProcessForm CreateMockProcessForm(string entityLogicalName)
    {
        return new ProcessForm 
        { 
            EntityLogicalName = entityLogicalName, 
            Name = "Account BPF", 
            xaml = "<mxswa:Workflow xmlns:mxswa=\"clr-namespace:Microsoft.Xrm.Sdk;assembly=Microsoft.Xrm.Sdk\" />" 
        };
    }

    #endregion

    private CommandLineArgs CreateCommandLineArgs()
    {
        return new CommandLineArgs
        {
            Connection = "AuthType=Office365;Url=https://test.crm.dynamics.com",
            Json = "DynamicsCrm.DevKit.Cli.json",
            Type = "generators",
            Profile = "test",
            ServiceClient = null // We'll use FakeXrmEasy for actual service calls
        };
    }

    private JsonGenerator CreateValidJsonGenerator()
    {
        return new JsonGenerator
        {
            profile = "test",
            rootfolder = "entities",
            type = "jsform",
            rootnamespace = "Dev.DevKit"
        };
    }


}

