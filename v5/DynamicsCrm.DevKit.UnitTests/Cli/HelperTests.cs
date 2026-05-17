using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class HelperTests
{
    [TestMethod]
    public void EncryptDecryptString_Works()
    {
        var original = "secret_password";
        var encrypted = Helper.EncryptString(original);
        var decrypted = Helper.DecryptString(encrypted);
        
        Assert.AreNotEqual(original, encrypted);
        Assert.AreEqual(original, decrypted);
    }

    [TestMethod]
    public void SafeIdentifier_ReplacesInvalidChars()
    {
        Assert.AreEqual("ValidName", Helper.SafeIdentifier("ValidName"));
        Assert.AreEqual("Invalid_Name", Helper.SafeIdentifier("Invalid Name"));
        Assert.AreEqual("Invalid_Name", Helper.SafeIdentifier("Invalid-Name"));
        Assert.AreEqual("_123Number", Helper.SafeIdentifier("123Number")); // Starts with digit
    }

    [TestMethod]
    public void SafeDeclareName_HandlesReservedNames()
    {
        // "EntityName" is a reserved name in SAFE_DECLARE_NAME list
        Assert.AreEqual("EntityName2", Helper.SafeDeclareName("EntityName", GeneratorType.csharp));
        
        // "normalName" is not reserved
        Assert.AreEqual("normalName", Helper.SafeDeclareName("normalName", GeneratorType.csharp));
    }

    [TestMethod]
    public void TrimGuid_FormatsCorrectly()
    {
        var guid = Guid.NewGuid();
        var expected = guid.ToString(); // Helper.TrimGuid does not change case
        Assert.AreEqual(expected, Helper.TrimGuid(guid.ToString()));
        Assert.AreEqual(expected, Helper.TrimGuid(guid.ToString("B"))); // With braces
    }

    [TestMethod]
    public void GetExtension_ReturnsValues()
    {
        Assert.AreEqual(".js", Helper.GetExtension(WebResourceWebResourceType.ScriptJScript));
        Assert.AreEqual(".html", Helper.GetExtension(WebResourceWebResourceType.WebpageHtml));
        Assert.AreEqual(".css", Helper.GetExtension(WebResourceWebResourceType.StyleSheetCss));
        Assert.AreEqual(".xml", Helper.GetExtension(WebResourceWebResourceType.DataXml));
    }

    [TestMethod]
    public void StringHelpers_HandleWhitespaceGuidSchemaAndNamespaces()
    {
        Assert.IsTrue(Helper.IsTheSame("A B", "ab"));
        Assert.IsTrue(Helper.IsTheSame("", null));
        Assert.IsFalse(Helper.IsTheSame("abc", "abd"));
        Assert.IsFalse(Helper.IsTheSame("abc", ""));

        Assert.AreEqual("Account", Helper.GetSchemaNameFromFile(@"c:\temp\Account.form.js", ".form.js"));
        Assert.AreEqual("Account.js", Helper.GetSchemaNameFromFile(@"c:\temp\Account.js", ".form.js"));

        var guid = Guid.Parse("11111111-2222-3333-4444-555555555555");
        Assert.AreEqual("_11111111_2222_3333_4444_555555555555", Helper.SafeIdentifier(guid.ToString("B")));
        Assert.AreEqual("_import", Helper.SafeIdentifier("import"));
        Assert.AreEqual("_package", Helper.SafeIdentifier("package"));
        Assert.AreEqual("_", Helper.SafeIdentifier("!@#$"));

        Assert.AreEqual("Project", Helper.GetNameSpace("Contoso.Project"));
        Assert.AreEqual("_123.Project", Helper.SafeNamespace("123.Project"));
    }

    [TestMethod]
    public void SafeDeclareName_HandlesSchemaFileAndPrimaryIdConflicts()
    {
        Assert.AreEqual("Account2", Helper.SafeDeclareName("Account", GeneratorType.csharp, "account"));
        Assert.AreEqual("Document_name", Helper.SafeDeclareName("Document", GeneratorType.csharp, attribute: new FileAttributeMetadata()));

        var unique = new UniqueIdentifierAttributeMetadata();
        unique.GetType().GetProperty(nameof(AttributeMetadata.AttributeType))!.SetValue(unique, AttributeTypeCode.Uniqueidentifier);
        Assert.AreEqual("accountid", Helper.SafeDeclareName("accountid", GeneratorType.csharp, "account", unique));
        Assert.AreEqual("accountid2", Helper.SafeDeclareName("accountid", GeneratorType.csharp, "account", new StringAttributeMetadata()));
    }

    [TestMethod]
    public void FormAndGeneratedFileHelpers_ReturnExpectedSnippets()
    {
        var formCases = new Dictionary<string, string>
        {
            ["information"] = "Account Information",
            ["wizard"] = "Account Wizard",
            ["ai for sales"] = "Account AI for Sales",
            ["quick create"] = "Account Quick Create",
            ["quickcreate"] = "Account QuickCreate",
            ["new form"] = "Account New_Form",
            ["adobe sign"] = "Account Adobe_Sign",
            ["sales insights"] = "Account Sales_Insights",
            ["agreement"] = "Account Agreement",
            ["main form"] = "Account Main Form"
        };

        foreach (var item in formCases)
            Assert.AreEqual(item.Value, Helper.GetFormName(item.Key, "Account"));
        Assert.AreEqual("Custom", Helper.GetFormName("Custom", "Account"));

        var metadata = new EntityMetadata { LogicalName = "account", SchemaName = "Account" };
        var cs = Helper.GetDefaultFileWithCs(metadata, "Contoso.Generated");
        StringAssert.Contains(cs, "internal partial class Account");
        StringAssert.Contains(cs, "Read_Record");

        StringAssert.Contains(Helper.GetDefaultHeaderForGeneratedCs(), "<auto-generated>");
        StringAssert.Contains(Helper.GetDefaultFileWithWebApi("Account"), "///<reference path=\"Account.d.ts\" />");
    }

    [TestMethod]
    public void OptionSetAndWebResourceHelpers_HandleSupportedTypes()
    {
        Assert.IsTrue(Helper.IsOptionSet(new PicklistAttributeMetadata()));
        Assert.IsFalse(Helper.IsOptionSet(new StringAttributeMetadata()));
        Assert.IsTrue(Helper.IsWebResourceExtension(".js"));
        Assert.IsFalse(Helper.IsWebResourceExtension(".exe"));

        Assert.AreEqual(".png", Helper.GetExtension(WebResourceWebResourceType.PngFormat));
        Assert.AreEqual(".gif", Helper.GetExtension(WebResourceWebResourceType.GifFormat));
        Assert.AreEqual(".jpg", Helper.GetExtension(WebResourceWebResourceType.JpgFormat));
        Assert.AreEqual(".ico", Helper.GetExtension(WebResourceWebResourceType.IcoFormat));
        Assert.AreEqual(".xsl", Helper.GetExtension(WebResourceWebResourceType.StyleSheetXsl));
        Assert.AreEqual(".xap", Helper.GetExtension(WebResourceWebResourceType.SilverlightXap));
        Assert.AreEqual(".resx", Helper.GetExtension(WebResourceWebResourceType.StringResx));
        Assert.AreEqual(".svg", Helper.GetExtension(WebResourceWebResourceType.SvgFormat));
    }

    [TestMethod]
    public async Task ContentCompressionAndFileHelpers_Work()
    {
        var lines = string.Join("\r\n", Enumerable.Range(1, 10).Select(i => $"line{i}"));
        Assert.AreEqual("line8\r\nline9\r\nline10", Helper.GetContentFromLine6(lines));
        Assert.AreEqual("line8\r\nline9\r\nline10", await Helper.ReadContentFromLine6Async(lines));
        Assert.AreEqual("", Helper.GetContentFromLine6(""));

        var compressed = Helper.Compress("hello world");
        Assert.AreEqual("hello world", Helper.Decompress(compressed));
        Assert.AreEqual("not-base64", Helper.Decompress("not-base64"));

        var dir = Path.Combine(Path.GetTempPath(), "devkit-helper-tests-" + Guid.NewGuid());
        Directory.CreateDirectory(dir);
        try
        {
            File.WriteAllText(Path.Combine(dir, "a.cs"), "a");
            File.WriteAllText(Path.Combine(dir, "b.txt"), "b");
            File.WriteAllText(Path.Combine(dir, "ignore.cs"), "c");

            var files = Helper.GetFiles(dir, new List<string> { "*.cs" }, new List<string> { "ignore.cs" });
            Assert.AreEqual(1, files.Count);
            StringAssert.EndsWith(files[0], "a.cs");

            Helper.TryDeleteFile(Path.Combine(dir, "b.txt"));
            Assert.IsFalse(File.Exists(Path.Combine(dir, "b.txt")));
        }
        finally
        {
            Helper.TryDeleteDirectory(dir);
        }
    }

    [TestMethod]
    public async Task MessageAndSigningHelpers_ReturnExpectedDefaults()
    {
        Assert.IsTrue(Helper.IsMessageUpdate("UpdateMultiple"));
        Assert.IsFalse(Helper.IsMessageUpdate("Create"));
        Assert.IsTrue(Helper.IsMessageCreate("OnExternalCreated"));
        Assert.IsFalse(Helper.IsMessageCreate("Delete"));

        Assert.AreEqual("Id", Helper.GetMessagePropertyName("create"));
        Assert.AreEqual("Ids", Helper.GetMessagePropertyName("createmultiple"));
        Assert.AreEqual("Targets", Helper.GetMessagePropertyName("updatemultiple"));
        Assert.AreEqual("EntityMoniker", Helper.GetMessagePropertyName("setstate"));
        Assert.AreEqual("EmailId", Helper.GetMessagePropertyName("send"));
        Assert.AreEqual("Target", Helper.GetMessagePropertyName("delete"));

        Assert.IsTrue(Helper.IsSupportPluginImage(new CrmPluginRegistrationAttribute { Message = "merge" }));
        Assert.IsFalse(Helper.IsSupportPluginImage(new CrmPluginRegistrationAttribute { Message = "retrieve" }));
        Assert.IsFalse(Helper.IsSupportPluginImage(null));

        var signResult = await Helper.SignAssemblyAsync("", "missing.dll", "missing.pfx");
        Assert.IsFalse(signResult.ok);
        StringAssert.Contains(signResult.error, "SignTool.exe not found");
        _ = Helper.FindSignTool();
    }

    [TestMethod]
    public async Task JsTypeScriptDeclaration_GeneratesWebApiAndOptionSetTypesForCommonMetadata()
    {
        var priority = new PicklistAttributeMetadata { LogicalName = "prioritycode", SchemaName = "PriorityCode", OptionSet = OptionSet(1, "High") };
        var tags = new MultiSelectPicklistAttributeMetadata { LogicalName = "devkit_tags", SchemaName = "devkit_Tags", OptionSet = OptionSet(10, "Red") };
        var image = new ImageAttributeMetadata { LogicalName = "devkit_image", SchemaName = "devkit_Image" };
        SetProperty(image, nameof(ImageAttributeMetadata.IsPrimaryImage), true);

        var metadata = new EntityMetadata
        {
            LogicalName = "account",
            SchemaName = "Account",
            EntitySetName = "accounts"
        };
        SetProperty(metadata, nameof(EntityMetadata.Attributes), new AttributeMetadata[]
        {
            Describe(new StringAttributeMetadata { LogicalName = "name", SchemaName = "Name", IsValidForCreate = true, IsValidForUpdate = true }, "Account name"),
            Describe(new MemoAttributeMetadata { LogicalName = "description", SchemaName = "Description", IsValidForCreate = true, IsValidForUpdate = true }, "Description"),
            Describe(priority, "Priority"),
            Describe(tags, "Tags"),
            Describe(new BooleanAttributeMetadata { LogicalName = "devkit_enabled", SchemaName = "devkit_Enabled", IsValidForCreate = true, IsValidForUpdate = true }, "Enabled"),
            Describe(new DateTimeAttributeMetadata { LogicalName = "devkit_dateonly", SchemaName = "devkit_DateOnly", DateTimeBehavior = DateTimeBehavior.DateOnly, Format = DateTimeFormat.DateOnly }, "Date only"),
            Describe(new DateTimeAttributeMetadata { LogicalName = "devkit_tzdate", SchemaName = "devkit_TzDate", DateTimeBehavior = DateTimeBehavior.TimeZoneIndependent, Format = DateTimeFormat.DateOnly }, "TZ date"),
            Describe(new DateTimeAttributeMetadata { LogicalName = "devkit_tztime", SchemaName = "devkit_TzTime", DateTimeBehavior = DateTimeBehavior.TimeZoneIndependent, Format = DateTimeFormat.DateAndTime }, "TZ time"),
            Describe(new DateTimeAttributeMetadata { LogicalName = "devkit_utctime", SchemaName = "devkit_UtcTime", Format = DateTimeFormat.DateAndTime }, "UTC time"),
            Describe(new IntegerAttributeMetadata { LogicalName = "numberofemployees", SchemaName = "NumberOfEmployees" }, "Employees"),
            Describe(new BigIntAttributeMetadata { LogicalName = "devkit_big", SchemaName = "devkit_Big" }, "Big"),
            Describe(new DecimalAttributeMetadata { LogicalName = "devkit_decimal", SchemaName = "devkit_Decimal" }, "Decimal"),
            Describe(new DoubleAttributeMetadata { LogicalName = "devkit_double", SchemaName = "devkit_Double" }, "Double"),
            Describe(new MoneyAttributeMetadata { LogicalName = "revenue", SchemaName = "Revenue" }, "Revenue"),
            Describe(new UniqueIdentifierAttributeMetadata { LogicalName = "accountid", SchemaName = "AccountId" }, "Account ID"),
            Describe(new ManagedPropertyAttributeMetadata { LogicalName = "iscustomizable", SchemaName = "IsCustomizable" }, "Managed"),
            Describe(new LookupAttributeMetadata { LogicalName = "primarycontactid", SchemaName = "PrimaryContactId", Targets = new[] { "contact" } }, "Primary contact"),
            Describe(new LookupAttributeMetadata { LogicalName = "customerid", SchemaName = "CustomerId", Targets = new[] { "account", "contact" } }, "Customer"),
            Describe(new LookupAttributeMetadata { LogicalName = "acceptingentityid", SchemaName = "AcceptingEntityId", Targets = new[] { "queue", "systemuser" } }, "Accepting entity"),
            Describe(WithAttributeType(new LookupAttributeMetadata { LogicalName = "ownerid", SchemaName = "OwnerId", Targets = new[] { "systemuser", "team" } }, AttributeTypeCode.Owner), "Owner"),
            Describe(new FileAttributeMetadata { LogicalName = "devkit_file", SchemaName = "devkit_File" }, "File"),
            Describe(image, "Image"),
            Describe(WithAttributeOf(new StringAttributeMetadata { LogicalName = "name_base", SchemaName = "Name_Base" }, "name"), "Logical child"),
            Describe(new EntityNameAttributeMetadata { LogicalName = "objecttypecode", SchemaName = "ObjectTypeCode" }, "Entity name"),
            Describe(WithAttributeType(new StringAttributeMetadata { LogicalName = "to", SchemaName = "To" }, AttributeTypeCode.PartyList), "To")
        });
        SetProperty(metadata, nameof(EntityMetadata.ManyToOneRelationships), new OneToManyRelationshipMetadata[]
        {
            new() { ReferencingAttribute = "customerid", ReferencedEntity = "account", ReferencingEntityNavigationPropertyName = "customerid_account" },
            new() { ReferencingAttribute = "customerid", ReferencedEntity = "contact", ReferencingEntityNavigationPropertyName = "customerid_contact" }
        });

        var code = await JsTypeScriptDeclaration.GetCodeAsync(null!, metadata, "Contoso.Accounts", isJsFormExist: false, isJsWebApiExist: true);

        StringAssert.Contains(code, "export class AccountApi");
        StringAssert.Contains(code, "Name: string | null;");
        StringAssert.Contains(code, "PriorityCode: OptionSet.Account.PriorityCode | null;");
        StringAssert.Contains(code, "devkit_Tags: Array<OptionSet.Account.devkit_Tags> | null;");
        StringAssert.Contains(code, "OwnerId_systemuser");
        StringAssert.Contains(code, "customerid_account: string | null;");
        StringAssert.Contains(code, "acceptingentityid_queue: string | null;");
        StringAssert.Contains(code, "devkit_Image_Timestamp");
        StringAssert.Contains(code, "ActivityParties");
        StringAssert.Contains(code, "namespace OptionSet");
        StringAssert.Contains(code, "High = 1");
    }

    [TestMethod]
    public void JsTypeScriptDeclaration_MapsFormFieldAndVirtualControlTypes()
    {
        var metadata = new EntityMetadata { LogicalName = "account", SchemaName = "Account" };
        SetProperty(metadata, nameof(EntityMetadata.Attributes), new AttributeMetadata[]
        {
            Describe(new StringAttributeMetadata { LogicalName = "name", SchemaName = "Name" }, "Name"),
            Describe(new MemoAttributeMetadata { LogicalName = "description", SchemaName = "Description" }, "Description"),
            Describe(new PicklistAttributeMetadata { LogicalName = "prioritycode", SchemaName = "PriorityCode" }, "Priority"),
            Describe(new MultiSelectPicklistAttributeMetadata { LogicalName = "devkit_tags", SchemaName = "devkit_Tags" }, "Tags"),
            Describe(new DateTimeAttributeMetadata { LogicalName = "createdon", SchemaName = "CreatedOn", Format = DateTimeFormat.DateOnly }, "Created"),
            Describe(new LookupAttributeMetadata { LogicalName = "primarycontactid", SchemaName = "PrimaryContactId" }, "Lookup"),
            Describe(new BooleanAttributeMetadata { LogicalName = "devkit_enabled", SchemaName = "devkit_Enabled" }, "Enabled"),
            Describe(new MoneyAttributeMetadata { LogicalName = "revenue", SchemaName = "Revenue" }, "Revenue"),
            Describe(new IntegerAttributeMetadata { LogicalName = "numberofemployees", SchemaName = "NumberOfEmployees" }, "Employees"),
            Describe(new DoubleAttributeMetadata { LogicalName = "devkit_double", SchemaName = "devkit_Double" }, "Double"),
            Describe(new DecimalAttributeMetadata { LogicalName = "devkit_decimal", SchemaName = "devkit_Decimal" }, "Decimal"),
            Describe(new EntityNameAttributeMetadata { LogicalName = "objecttypecode", SchemaName = "ObjectTypeCode" }, "Entity"),
            Describe(new UniqueIdentifierAttributeMetadata { LogicalName = "accountid", SchemaName = "AccountId" }, "Id"),
            Describe(new ManagedPropertyAttributeMetadata { LogicalName = "iscustomizable", SchemaName = "IsCustomizable" }, "Managed"),
            Describe(new ImageAttributeMetadata { LogicalName = "entityimage", SchemaName = "EntityImage" }, "Image"),
            Describe(new FileAttributeMetadata { LogicalName = "devkit_file", SchemaName = "devkit_File" }, "File")
        });

        SetJsDeclarationState(metadata);
        const string formXml = "<form><controlDescriptions /></form>";
        var fields = new List<IdName>
        {
            Field("name"), Field("description"), Field("prioritycode"), Field("devkit_tags"),
            Field("createdon"), Field("primarycontactid"), Field("devkit_enabled"), Field("revenue"),
            Field("numberofemployees"), Field("devkit_double"), Field("devkit_decimal"),
            Field("objecttypecode"), Field("accountid"), Field("iscustomizable"), Field("entityimage"), Field("devkit_file"),
            Virtual("iframe_one", ControlClassId.IFRAME),
            Virtual("webresource_one", ControlClassId.WEB_RESOURCE),
            Virtual("notescontrol", ControlClassId.NOTE),
            Virtual("email_engagement", ControlClassId.EMAIL_ENGAGEMENT_ACTIONS),
            Virtual("email_recipient", ControlClassId.EMAIL_RECIPIENT_ACTIVITY),
            Virtual("timer_one", ControlClassId.TIMER),
            Virtual("aci_one", ControlClassId.ACI_WIDGET),
            Virtual("map_one", ControlClassId.MAP_CONTROL),
            Virtual("cards_one", ControlClassId.ACTION_CARDS),
            Virtual("powerbi_one", ControlClassId.POWERBI),
            Virtual("file_one", ControlClassId.FILE),
            Virtual("image_one", ControlClassId.IMAGE)
        };

        var code = InvokePrivateStatic<string>(typeof(JsTypeScriptDeclaration), "Get_d_ts_ForListFields", formXml, fields, false);

        StringAssert.Contains(code, "Name: DevKit.Controls.String;");
        StringAssert.Contains(code, "devkit_Tags: DevKit.Controls.MultiOptionSet;");
        StringAssert.Contains(code, "PriorityCode: DevKit.Controls.OptionSet;");
        StringAssert.Contains(code, "CreatedOn: DevKit.Controls.DateOnly;");
        StringAssert.Contains(code, "PrimaryContactId: DevKit.Controls.Lookup;");
        StringAssert.Contains(code, "devkit_Enabled: DevKit.Controls.Boolean;");
        StringAssert.Contains(code, "Revenue: DevKit.Controls.Money;");
        StringAssert.Contains(code, "NumberOfEmployees: DevKit.Controls.Integer;");
        StringAssert.Contains(code, "devkit_Double: DevKit.Controls.Double;");
        StringAssert.Contains(code, "devkit_Decimal: DevKit.Controls.Decimal;");
        StringAssert.Contains(code, "EntityImage: DevKit.Controls.Image;");
        StringAssert.Contains(code, "devkit_File: DevKit.Controls.File;");
        StringAssert.Contains(code, "iframe_one: DevKit.Controls.IFrame;");
        StringAssert.Contains(code, "webresource_one: DevKit.Controls.WebResource;");
        StringAssert.Contains(code, "notescontrol: DevKit.Controls.Note;");
        StringAssert.Contains(code, "timer_one: DevKit.Controls.Timer;");
        StringAssert.Contains(code, "powerbi_one: DevKit.Controls.PowerBi;");
    }

    [TestMethod]
    public void JsTypeScriptDeclaration_ParsesFormXmlSectionsHeaderNavigationAndGrid()
    {
        var metadata = new EntityMetadata { LogicalName = "account", SchemaName = "Account" };
        SetProperty(metadata, nameof(EntityMetadata.IsActivityParty), true);
        SetProperty(metadata, nameof(EntityMetadata.Attributes), new AttributeMetadata[]
        {
            Describe(new StringAttributeMetadata { LogicalName = "name", SchemaName = "Name" }, "Name"),
            Describe(new IntegerAttributeMetadata { LogicalName = "numberofemployees", SchemaName = "NumberOfEmployees" }, "Employees")
        });
        SetJsDeclarationState(metadata);

        var formXml = $"""
<form>
  <Navigation>
    <NavBar>
      <NavBarByRelationshipItem Id="navContacts">
        <Titles><Title Text="Contacts" /></Titles>
      </NavBarByRelationshipItem>
    </NavBar>
  </Navigation>
  <header>
    <rows><row><cell><control id="header_name" datafieldname="name" classid="{ControlClassId.SINGLE_LINE_OF_TEXT}" /></cell></row></rows>
  </header>
  <tabs>
    <tab name="summary">
      <labels><label description="Summary Tab" /></labels>
      <columns><column><sections><section name="general">
        <labels><label description="General Section" /></labels>
        <rows><row>
          <cell><control id="name" datafieldname="name" classid="{ControlClassId.SINGLE_LINE_OF_TEXT}" uniqueid="name-control" /></cell>
          <cell><control id="employees" datafieldname="numberofemployees" classid="{ControlClassId.WHOLE_NUMBER}" uniqueid="employees-control" /></cell>
          <cell><labels><label description="Contacts Grid" /></labels><control id="ContactsGrid" classid="{ControlClassId.SUB_GRID}" uniqueid="grid-control" /></cell>
        </row></rows>
      </section></sections></column></columns>
    </tab>
  </tabs>
  <controlDescriptions>
    <controlDescription forControl="grid-control"><customControl id="{ControlClassId.SUB_GRID}" /></controlDescription>
  </controlDescriptions>
</form>
""";

        var body = InvokePrivateStatic<string>(typeof(JsTypeScriptDeclaration), "GetForm_d_ts_Body", formXml);
        var header = InvokePrivateStatic<string>(typeof(JsTypeScriptDeclaration), "GetForm_d_ts_Header", formXml);
        var navigation = InvokePrivateStatic<string>(typeof(JsTypeScriptDeclaration), "GetForm_d_ts_Navigation", formXml);
        var grid = InvokePrivateStatic<string>(typeof(JsTypeScriptDeclaration), "GetForm_d_ts_Grid", formXml);
        var realClassId = InvokePrivateStatic<string>(typeof(JsTypeScriptDeclaration), "GetARealClassId", formXml, ControlClassId.UNKNOWN_1, "grid-control");

        StringAssert.Contains(body, "interface tab_summary_Sections");
        StringAssert.Contains(body, "general: DevKit.Controls.Section;");
        StringAssert.Contains(body, "Name: DevKit.Controls.String;");
        StringAssert.Contains(body, "NumberOfEmployees: DevKit.Controls.Integer;");
        StringAssert.Contains(header, "Name: DevKit.Controls.String;");
        StringAssert.Contains(navigation, "navContacts: DevKit.Controls.NavigationItem;");
        StringAssert.Contains(navigation, "navActivities: DevKit.Controls.NavigationItem;");
        StringAssert.Contains(grid, "ContactsGrid: DevKit.Controls.Grid;");
        Assert.AreEqual(ControlClassId.SUB_GRID, realClassId);
    }

    private static OptionSetMetadata OptionSet(int value, string label)
    {
        var optionSet = new OptionSetMetadata();
        optionSet.Options.Add(new OptionMetadata(L(label), value));
        return optionSet;
    }

    private static T Describe<T>(T attribute, string description) where T : AttributeMetadata
    {
        attribute.Description = L(description);
        return attribute;
    }

    private static T WithAttributeType<T>(T attribute, AttributeTypeCode type) where T : AttributeMetadata
    {
        SetProperty(attribute, nameof(AttributeMetadata.AttributeType), type);
        return attribute;
    }

    private static T WithAttributeOf<T>(T attribute, string attributeOf) where T : AttributeMetadata
    {
        SetProperty(attribute, nameof(AttributeMetadata.AttributeOf), attributeOf);
        return attribute;
    }

    private static IdName Field(string logicalName) => new()
    {
        Id = logicalName,
        Name = logicalName,
        ClassId = ControlClassId.SINGLE_LINE_OF_TEXT
    };

    private static IdName Virtual(string id, string classId) => new()
    {
        Id = id,
        Name = null,
        ClassId = classId
    };

    private static void SetJsDeclarationState(EntityMetadata metadata)
    {
        var type = typeof(JsTypeScriptDeclaration);
        type.GetProperty("EntityMetadata", BindingFlags.NonPublic | BindingFlags.Static)!.SetValue(null, metadata);
        type.GetField("FormNames", BindingFlags.NonPublic | BindingFlags.Static)!.SetValue(null, new List<string>());
    }

    private static T InvokePrivateStatic<T>(Type type, string methodName, params object[] args)
        => (T)type.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;

    private static Label L(string text)
    {
        var label = new Label();
        label.UserLocalizedLabel = new LocalizedLabel(text, 1033);
        return label;
    }

    private static void SetProperty(object target, string propertyName, object value)
        => target.GetType().GetProperty(propertyName)!.SetValue(target, value);
}
