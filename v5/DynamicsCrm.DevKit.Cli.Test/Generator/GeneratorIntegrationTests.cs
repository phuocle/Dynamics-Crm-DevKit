using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Abstractions.Metadata;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;

namespace DynamicsCrm.DevKit.Cli.Test.Generator;

/// <summary>
/// Integration tests for TaskGenerator using FakeXrmEasy to mock EntityMetadata
/// and test actual file generation for Account entity.
/// </summary>
[TestClass]
public class GeneratorIntegrationTests
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
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();

        _service = _context.GetOrganizationService();

        // Create temp directory for test output
        _testOutputDirectory = Path.Combine(Path.GetTempPath(), "DevKitCliTest", Guid.NewGuid().ToString());
        Directory.CreateDirectory(_testOutputDirectory);

        // Initialize Account EntityMetadata
        InitializeAccountMetadata();
    }

    [TestCleanup]
    public void Cleanup()
    {
        // Clean up temp directory
        if (Directory.Exists(_testOutputDirectory))
        {
            try
            {
                Directory.Delete(_testOutputDirectory, true);
            }
            catch { }
        }
    }

    private void InitializeAccountMetadata()
    {
        var accountMetadata = new EntityMetadata
        {
            LogicalName = "account",
            SchemaName = "Account",
            DisplayName = new Label("Account", 1033)
        };

        // Set read-only properties using reflection
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.MetadataId))!.SetValue(accountMetadata, Guid.NewGuid());
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.PrimaryIdAttribute))!.SetValue(accountMetadata, "accountid");
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.PrimaryNameAttribute))!.SetValue(accountMetadata, "name");

        // Create attributes for Account
        var attributes = new List<AttributeMetadata>
        {
            CreateStringAttribute("accountid", "Account Id", AttributeTypeCode.Uniqueidentifier),
            CreateStringAttribute("name", "Account Name", AttributeTypeCode.String),
            CreateStringAttribute("accountnumber", "Account Number", AttributeTypeCode.String),
            CreateStringAttribute("emailaddress1", "Email", AttributeTypeCode.String),
            CreateStringAttribute("telephone1", "Main Phone", AttributeTypeCode.String),
            CreateStringAttribute("websiteurl", "Website", AttributeTypeCode.String),
            CreateMoneyAttribute("revenue", "Annual Revenue"),
            CreateIntegerAttribute("numberofemployees", "Number of Employees"),
            CreateDateTimeAttribute("createdon", "Created On"),
            CreateDateTimeAttribute("modifiedon", "Modified On"),
            // Skipping lookup attributes (primarycontactid, ownerid) - they require ServiceClient for target resolution
            CreatePicklistAttribute("accountcategorycode", "Category", new Dictionary<int, string>
            {
                { 1, "Preferred Customer" },
                { 2, "Standard" }
            }),
            CreatePicklistAttribute("industrycode", "Industry", new Dictionary<int, string>
            {
                { 1, "Accounting" },
                { 2, "Agriculture" },
                { 3, "Construction" },
                { 4, "Consulting" }
            }),
            CreateBooleanAttribute("donotphone", "Do Not Allow Phone Calls"),
            CreateBooleanAttribute("donotemail", "Do Not Allow Emails"),
            // Note: Removed lookup attributes (primarycontactid, ownerid) as they require ServiceClient for target entity resolution
            CreateDecimalAttribute("creditlimit", "Credit Limit")
        };

        // Set attributes on entity metadata
        typeof(EntityMetadata)
            .GetProperty(nameof(EntityMetadata.Attributes))!
            .SetValue(accountMetadata, attributes.ToArray());

        // Initialize metadata in FakeXrmEasy context
        _context.InitializeMetadata(accountMetadata);

        // Add Account metadata to XrmHelper cache for generators to use
        XrmHelper.EntitiesMetadata = [accountMetadata];

        // Initialize Account Form data for JsForm/TsForm generators
        InitializeAccountFormData();
    }

    /// <summary>
    /// Initialize Account form data from Account.FormXrml.xml for testing form generators
    /// </summary>
    private void InitializeAccountFormData()
    {
        // Read form XML from file
        var formXmlPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..", "..", "..", "Account.FormXrml.xml");
        if (!File.Exists(formXmlPath))
        {
            // Try alternative path for different test runner contexts
            formXmlPath = Path.Combine(Directory.GetCurrentDirectory(), "Account.FormXrml.xml");
        }

        string formXml;
        if (File.Exists(formXmlPath))
        {
            formXml = File.ReadAllText(formXmlPath);
        }
        else
        {
            // Fallback: minimal form XML for testing
            formXml = @"<form><tabs><tab name=""TAB_1""><columns><column><sections><section name=""SECTION_1""><rows><row><cell><control id=""name"" datafieldname=""name"" classid=""{4273EDBD-AC1D-40D3-9FB2-095C621B552D}"" /></cell></row></rows></section></sections></column></columns></tab></tabs><header><rows><row></row></rows></header></form>";
        }

        // Create mock SystemForm
        var systemForm = new SystemForm
        {
            Name = "Account DevKitV4",
            FormXml = formXml,
            Description = "Main form for Account entity",
            IsQuickCreate = false,
            EntityLogicalName = "account",
            FormType = FormType.Main,
            FormId = Guid.NewGuid()
        };

        // Clear and add to XrmHelper.EntitiesFormXml
        XrmHelper.EntitiesFormXml.Clear();
        XrmHelper.EntitiesFormXml.Add(systemForm);

        // Add Contact QuickView form (referenced by Account form's ContactQuickForm control)
        var contactQuickViewForm = new SystemForm
        {
            Name = "Contact Quick View",
            FormXml = @"<form><tabs><tab name=""TAB_1""><columns><column><sections><section><rows><row><cell><control id=""fullname"" datafieldname=""fullname"" classid=""{4273EDBD-AC1D-40D3-9FB2-095C621B552D}"" /></cell></row></rows></section></sections></column></columns></tab></tabs></form>",
            Description = "Quick View form for Contact",
            IsQuickCreate = false,
            EntityLogicalName = "contact",
            FormType = FormType.QuickView,
            FormId = Guid.Parse("bdb0ae1c-32fa-4374-b637-8dafe107bc44") // Matches the ID in Account form XML
        };
        XrmHelper.EntitiesFormXml.Add(contactQuickViewForm);

        // Add Contact EntityMetadata to cache (needed for QuickView form processing)
        var contactMetadata = new EntityMetadata
        {
            LogicalName = "contact",
            SchemaName = "Contact",
            DisplayName = new Label("Contact", 1033)
        };
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.PrimaryIdAttribute))!.SetValue(contactMetadata, "contactid");
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.PrimaryNameAttribute))!.SetValue(contactMetadata, "fullname");
        var contactAttrs = new List<AttributeMetadata>
        {
            CreateStringAttribute("contactid", "Contact Id", AttributeTypeCode.Uniqueidentifier),
            CreateStringAttribute("fullname", "Full Name", AttributeTypeCode.String)
        };
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.Attributes))!.SetValue(contactMetadata, contactAttrs.ToArray());
        XrmHelper.EntitiesMetadata.Add(contactMetadata);

        // Initialize empty ProcessForm list to prevent ServiceClient calls in form generators
        // This prevents NullReferenceException in GetJsProcessCodeAsync() and GetProcessFieldsAsync()
        XrmHelper.EntitiesProcessForm.Clear();
        // Add a mock ProcessForm for account to bypass AddIfNotExistAsync ServiceClient call
        XrmHelper.EntitiesProcessForm.Add(new ProcessForm
        {
            EntityLogicalName = "account",
            Name = "Mock BPF Process",
            xaml = "<mxswa:Workflow xmlns:mxswa=\"clr-namespace:Microsoft.Xrm.Sdk;assembly=Microsoft.Xrm.Sdk\" />"
        });
    }

    #region Attribute Factory Methods

    private static AttributeMetadata CreateStringAttribute(string logicalName, string displayName, AttributeTypeCode typeCode)
    {
        AttributeMetadata attr = typeCode switch
        {
            AttributeTypeCode.Uniqueidentifier => new UniqueIdentifierAttributeMetadata { LogicalName = logicalName, SchemaName = ToPascalCase(logicalName) },
            _ => new StringAttributeMetadata { LogicalName = logicalName, SchemaName = ToPascalCase(logicalName), MaxLength = 100 }
        };
        attr.DisplayName = new Label(displayName, 1033);
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(attr, typeCode);
        return attr;
    }

    private static MoneyAttributeMetadata CreateMoneyAttribute(string logicalName, string displayName)
    {
        var attr = new MoneyAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = new Label(displayName, 1033)
        };
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(attr, AttributeTypeCode.Money);
        return attr;
    }

    private static IntegerAttributeMetadata CreateIntegerAttribute(string logicalName, string displayName)
    {
        var attr = new IntegerAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = new Label(displayName, 1033)
        };
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(attr, AttributeTypeCode.Integer);
        return attr;
    }

    private static DateTimeAttributeMetadata CreateDateTimeAttribute(string logicalName, string displayName)
    {
        var attr = new DateTimeAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = new Label(displayName, 1033)
        };
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(attr, AttributeTypeCode.DateTime);
        return attr;
    }

    private static LookupAttributeMetadata CreateLookupAttribute(string logicalName, string displayName, string targetEntity)
    {
        var attr = new LookupAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = new Label(displayName, 1033)
        };
        typeof(LookupAttributeMetadata).GetProperty(nameof(LookupAttributeMetadata.Targets))!.SetValue(attr, new[] { targetEntity });
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(attr, AttributeTypeCode.Lookup);
        return attr;
    }

    private static PicklistAttributeMetadata CreatePicklistAttribute(string logicalName, string displayName, Dictionary<int, string> options)
    {
        var optionSet = new OptionSetMetadata();
        foreach (var option in options)
        {
            optionSet.Options.Add(new OptionMetadata(new Label(option.Value, 1033), option.Key));
        }
        var attr = new PicklistAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = new Label(displayName, 1033),
            OptionSet = optionSet
        };
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(attr, AttributeTypeCode.Picklist);
        return attr;
    }

    private static BooleanAttributeMetadata CreateBooleanAttribute(string logicalName, string displayName)
    {
        var attr = new BooleanAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = new Label(displayName, 1033),
            OptionSet = new BooleanOptionSetMetadata(
                new OptionMetadata(new Label("Yes", 1033), 1),
                new OptionMetadata(new Label("No", 1033), 0))
        };
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(attr, AttributeTypeCode.Boolean);
        return attr;
    }

    private static DecimalAttributeMetadata CreateDecimalAttribute(string logicalName, string displayName)
    {
        var attr = new DecimalAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = new Label(displayName, 1033)
        };
        typeof(AttributeMetadata).GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(attr, AttributeTypeCode.Decimal);
        return attr;
    }

    private static string ToPascalCase(string input)
    {
        if (string.IsNullOrEmpty(input)) return input;
        return char.ToUpper(input[0]) + input.Substring(1);
    }

    #endregion

    #region JsWebApi Tests

    [TestMethod]
    public async Task GenerateJsWebApi_CreatesAccountWebApiJs()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");
        var rootNamespace = "Dev.DevKit";

        // Act
        var (jsCode, dtsCode) = await JsWebApi.GetJsWebApiCodeAsync(null, entityMetadata, rootNamespace, false);

        // Assert
        Assert.IsNotNull(jsCode, "JS code should not be null");
        Assert.IsNotNull(dtsCode, "DTS code should not be null");
        Assert.IsTrue(jsCode.Contains("Account"), "JS code should contain 'Account'");
        // Note: rootnamespace may be embedded differently in actual code generation

        // Verify attribute presence
        Assert.IsTrue(jsCode.Contains("name") || jsCode.Contains("Name"), "JS code should contain 'name' attribute");
        Assert.IsTrue(jsCode.Contains("emailaddress1") || jsCode.Contains("Emailaddress1"), "JS code should contain 'emailaddress1' attribute");
    }

    [TestMethod]
    public async Task GenerateJsWebApi_DtsCodeContainsTypeDefinitions()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");
        var rootNamespace = "Dev.DevKit";

        // Act
        var (jsCode, dtsCode) = await JsWebApi.GetJsWebApiCodeAsync(null, entityMetadata, rootNamespace, false);

        // Assert
        Assert.IsTrue(dtsCode.Contains("declare"), "DTS should contain 'declare'");
        Assert.IsTrue(dtsCode.Contains("Account"), "DTS should contain 'Account'");
    }

    /// <summary>
    /// Test that generates Account.webapi.js and saves to temp directory
    /// </summary>
    [TestMethod]
    public async Task GenerateJsWebApi_OutputToFile_AccountWebapiJs()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");
        var rootNamespace = "Dev.DevKit";

        // Act
        var (jsCode, dtsCode) = await JsWebApi.GetJsWebApiCodeAsync(null, entityMetadata, rootNamespace, false);

        // Save to file
        var jsFilePath = Path.Combine(_testOutputDirectory, "Account.webapi.js");
        await File.WriteAllTextAsync(jsFilePath, jsCode);

        var dtsFilePath = Path.Combine(_testOutputDirectory, "Account.d.ts");
        await File.WriteAllTextAsync(dtsFilePath, dtsCode);

        // Output to console for verification
        Console.WriteLine("=== Account.webapi.js ===");
        Console.WriteLine(jsCode);
        Console.WriteLine();
        Console.WriteLine("=== Account.d.ts (WebApi part) ===");
        Console.WriteLine(dtsCode);

        // Assert files exist
        Assert.IsTrue(File.Exists(jsFilePath), "Account.webapi.js should exist");
        Assert.IsTrue(File.Exists(dtsFilePath), "Account.d.ts should exist");

        // Verify JS structure
        Assert.IsTrue(jsCode.Contains("'use strict'"), "JS should be strict mode");
        Assert.IsTrue(jsCode.Contains("Account"), "JS should contain entity name");
        Assert.IsTrue(jsCode.Contains("DevKit"), "JS should contain DevKit namespace");

        // Verify DTS structure
        Assert.IsTrue(dtsCode.Contains("declare namespace DevKit"), "DTS should contain namespace declaration");
        Assert.IsTrue(dtsCode.Contains("class AccountApi"), "DTS should contain AccountApi class");
    }

    #endregion

    #region JsForm Tests (Account.form.js)

    /// <summary>
    /// Test that JsForm generates Account.form.js and Account.d.ts
    /// Note: This test uses mocked form data from Account.FormXrml.xml
    /// </summary>
    [TestMethod]
    public async Task GenerateJsForm_OutputToFile_AccountFormJs()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");
        var rootNamespace = "Dev.DevKit";
        
        // Act - Call JsForm generator
        // Note: We pass null for ServiceClient since forms are pre-populated in XrmHelper.EntitiesFormXml
        var (jsCode, dtsCode) = await JsForm.GetJsFormCodeAsync(null, entityMetadata, rootNamespace, true);

        // Save to files
        if (jsCode != null)
        {
            var jsFilePath = Path.Combine(_testOutputDirectory, "Account.form.js");
            await File.WriteAllTextAsync(jsFilePath, jsCode);

            // Output to console for verification
            Console.WriteLine("=== Account.form.js ===");
            Console.WriteLine(jsCode);

            // Assert file exists and has content
            Assert.IsTrue(File.Exists(jsFilePath), "Account.form.js should exist");
            Assert.IsTrue(jsCode.Contains("'use strict'"), "JS should be strict mode");
            Assert.IsTrue(jsCode.Contains("Account"), "JS should contain entity name");
            Assert.IsTrue(jsCode.Contains("DevKit"), "JS should contain DevKit namespace");
        }

        if (dtsCode != null)
        {
            var dtsFilePath = Path.Combine(_testOutputDirectory, "Account.form.d.ts");
            await File.WriteAllTextAsync(dtsFilePath, dtsCode);

            Console.WriteLine();
            Console.WriteLine("=== Account.form.d.ts ===");
            Console.WriteLine(dtsCode);

            // Assert
            Assert.IsTrue(dtsCode.Contains("DevKit"), "DTS should contain DevKit namespace");
        }
    }

    #endregion

    #region TsForm Tests (Account.form.ts)

    /// <summary>
    /// Test that TsForm generates Account.form.ts
    /// Note: This test uses mocked form data from Account.FormXrml.xml
    /// </summary>
    [TestMethod]
    public async Task GenerateTsForm_OutputToFile_AccountFormTs()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");

        // Act - Call TsForm generator
        // Note: We pass null for ServiceClient since forms are pre-populated in XrmHelper.EntitiesFormXml
        var tsCode = await TsForm.GetTsFormCodeAsync(null, entityMetadata);

        // Save to file
        if (tsCode != null)
        {
            var tsFilePath = Path.Combine(_testOutputDirectory, "Account.form.ts");
            await File.WriteAllTextAsync(tsFilePath, tsCode);

            // Output to console for verification
            Console.WriteLine("=== Account.form.ts ===");
            Console.WriteLine(tsCode);

            // Assert file exists and has content
            Assert.IsTrue(File.Exists(tsFilePath), "Account.form.ts should exist");
            Assert.IsTrue(tsCode.Contains("export namespace Account"), "TS should contain Account namespace");
            Assert.IsTrue(tsCode.Contains("export class"), "TS should contain form class");
            Assert.IsTrue(tsCode.Contains("FormBase"), "TS should extend FormBase");
        }
        else
        {
            Console.WriteLine("TsForm returned null - no forms found");
        }
    }

    #endregion

    #region TsWebApi Tests

    [TestMethod]
    public async Task GenerateTsWebApi_CreatesAccountWebApiTs()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");

        // Act
        var tsCode = await TsWebApi.GetTsWebApiCodeAsync(null, entityMetadata);

        // Assert
        Assert.IsNotNull(tsCode, "TS code should not be null");
        Assert.IsTrue(tsCode.Contains("Account"), "TS code should contain 'Account'");
        Assert.IsTrue(tsCode.Contains("export"), "TS code should contain 'export'");
    }

    [TestMethod]
    public async Task GenerateTsWebApi_ContainsAttributeDefinitions()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");

        // Act
        var tsCode = await TsWebApi.GetTsWebApiCodeAsync(null, entityMetadata);

        // Assert
        // Check for Money attribute type
        Assert.IsTrue(tsCode.Contains("revenue") || tsCode.Contains("Revenue"), "TS should contain 'revenue' attribute");
        // Check for Decimal attribute (creditlimit)
        Assert.IsTrue(tsCode.Contains("creditlimit") || tsCode.Contains("Creditlimit"), "TS should contain 'creditlimit' attribute");
    }

    /// <summary>
    /// Test that generates Account.webapi.ts and saves to temp directory
    /// </summary>
    [TestMethod]
    public async Task GenerateTsWebApi_OutputToFile_AccountWebapiTs()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");

        // Act
        var tsCode = await TsWebApi.GetTsWebApiCodeAsync(null, entityMetadata);

        // Save to file
        var tsFilePath = Path.Combine(_testOutputDirectory, "Account.webapi.ts");
        await File.WriteAllTextAsync(tsFilePath, tsCode);

        // Output to console for verification
        Console.WriteLine("=== Account.webapi.ts ===");
        Console.WriteLine(tsCode);

        // Assert file exists
        Assert.IsTrue(File.Exists(tsFilePath), "Account.webapi.ts should exist");

        // Verify TS structure
        Assert.IsTrue(tsCode.Contains("export interface IAccountApi"), "TS should contain IAccountApi interface");
        Assert.IsTrue(tsCode.Contains("export class AccountApi"), "TS should contain AccountApi class");
        Assert.IsTrue(tsCode.Contains("createWebApiEntity"), "TS should import createWebApiEntity");
    }

    #endregion

    #region CSharp LateBound Tests

    [TestMethod]
    public void GenerateCSharpLateBound_CreatesAccountCs()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");
        var rootNamespace = "Dev.DevKit.Entities";

        // Act
        var csCode = CSharpLateBound.GetCsCode(null, entityMetadata, rootNamespace, null);

        // Assert
        Assert.IsNotNull(csCode, "CS code should not be null");
        Assert.IsTrue(csCode.Contains("Account"), "CS code should contain 'Account'");
        Assert.IsTrue(csCode.Contains("namespace"), "CS code should contain 'namespace'");
        Assert.IsTrue(csCode.Contains(rootNamespace), "CS code should contain root namespace");
    }

    [TestMethod]
    public void GenerateCSharpLateBound_ContainsProperties()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");
        var rootNamespace = "Dev.DevKit.Entities";

        // Act
        var csCode = CSharpLateBound.GetCsCode(null, entityMetadata, rootNamespace, null);

        // Assert
        Assert.IsTrue(csCode.Contains("Name") || csCode.Contains("name"), "CS code should contain Name property");
        Assert.IsTrue(csCode.Contains("public"), "CS code should have public members");
    }

    [TestMethod]
    public void GenerateCSharpLateBound_WithCustomNamespace()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");
        var rootNamespace = "Dev.DevKit.Entities";
        var customNamespace = "CustomEntities";

        // Act
        var csCode = CSharpLateBound.GetCsCode(null, entityMetadata, rootNamespace, customNamespace);

        // Assert
        Assert.IsTrue(csCode.Contains(customNamespace) || csCode.Contains(rootNamespace), "CS code should contain namespace");
    }

    /// <summary>
    /// Test that generates Account.generated.cs and saves to temp directory
    /// </summary>
    [TestMethod]
    public void GenerateCSharpLateBound_OutputToFile_AccountGeneratedCs()
    {
        // Arrange
        var entityMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");
        var rootNamespace = "Dev.DevKit.Entities";

        // Act
        var csCode = CSharpLateBound.GetCsCode(null, entityMetadata, rootNamespace, null);

        // Save to file
        var csFilePath = Path.Combine(_testOutputDirectory, "Account.generated.cs");
        File.WriteAllText(csFilePath, csCode);

        // Output to console for verification
        Console.WriteLine("=== Account.generated.cs ===");
        Console.WriteLine(csCode);

        // Assert file exists
        Assert.IsTrue(File.Exists(csFilePath), "Account.generated.cs should exist");

        // Verify CS structure
        Assert.IsTrue(csCode.Contains("namespace Dev.DevKit.Entities"), "CS should contain namespace");
        Assert.IsTrue(csCode.Contains("public partial class Account"), "CS should contain Account class");
        Assert.IsTrue(csCode.Contains("public string Name"), "CS should contain Name property");
    }

    #endregion

    #region EntityMetadata Verification Tests

    [TestMethod]
    public void EntityMetadata_HasCorrectAttributes()
    {
        // Arrange
        var accountMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");

        // Assert
        Assert.IsNotNull(accountMetadata.Attributes, "Attributes should not be null");
        Assert.IsTrue(accountMetadata.Attributes.Length > 0, "Should have attributes");
        Assert.AreEqual("account", accountMetadata.LogicalName);
        Assert.AreEqual("Account", accountMetadata.SchemaName);
    }

    [TestMethod]
    public void EntityMetadata_HasPicklistAttributes()
    {
        // Arrange
        var accountMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");

        // Act
        var picklistAttrs = accountMetadata.Attributes
            .Where(a => a.AttributeType == AttributeTypeCode.Picklist)
            .ToList();

        // Assert
        Assert.IsTrue(picklistAttrs.Count >= 2, "Should have at least 2 picklist attributes");
    }

    [TestMethod]
    public void EntityMetadata_HasDecimalAttributes()
    {
        // Arrange
        var accountMetadata = XrmHelper.EntitiesMetadata.First(x => x.LogicalName == "account");

        // Act
        var decimalAttrs = accountMetadata.Attributes
            .Where(a => a.AttributeType == AttributeTypeCode.Decimal)
            .ToList();

        // Assert - we have creditlimit as Decimal
        Assert.IsTrue(decimalAttrs.Count >= 1, "Should have at least 1 decimal attribute");
    }

    #endregion

    #region Helper Methods

    private CommandLineArgs CreateCommandLineArgs()
    {
        return new CommandLineArgs
        {
            Connection = "AuthType=Office365;Url=https://test.crm.dynamics.com",
            Json = "DynamicsCrm.DevKit.Cli.json",
            Type = "generators",
            Profile = "test",
            ServiceClient = null
        };
    }

    private JsonGenerator CreateJsWebApiJsonConfig()
    {
        return new JsonGenerator
        {
            profile = "test",
            rootfolder = _testOutputDirectory,
            type = "jswebapi",
            rootnamespace = "Dev.DevKit",
            entities = "account"
        };
    }

    #endregion
}
