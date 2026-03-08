using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Logic;
using FakeXrmEasy.Abstractions;
using FakeXrmEasy.Middleware;
using FakeXrmEasy.Middleware.Crud;
using FakeXrmEasy.Middleware.Messages;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Lib;

[TestClass]
public class CSharpLateBoundTest
{
    private const string RootNamespace = "Dev.DevKit.Entities";
    private const string EntityLogicalName = "unittest_entity";
    private const string EntitySchemaName = "UnitTestEntity";

    private static IXrmFakedContext _context = null!;
    private static EntityMetadata _fullMetadata = null!;
    private static string _generatedCode = null!;

    [ClassInitialize]
    public static void ClassInit(TestContext context)
    {
        _context = MiddlewareBuilder
            .New()
            .AddCrud()
            .AddFakeMessageExecutors()
            .UseCrud()
            .UseMessages()
            .SetLicense(FakeXrmEasy.Abstractions.Enums.FakeXrmEasyLicense.NonCommercial)
            .Build();

        _fullMetadata = BuildFullEntityMetadata();
        _context.InitializeMetadata(_fullMetadata);
        XrmHelper.EntitiesMetadata = [_fullMetadata];

        _generatedCode = CSharpLateBound.GetCsCode(null, _fullMetadata, RootNamespace, null);
    }

    #region Group 1: Core generation

    [TestMethod]
    public void GetCsCode_WithAllColumnTypes_GeneratesValidCode()
    {
        Assert.IsNotNull(_generatedCode);
        Assert.IsTrue(_generatedCode.Contains("namespace Dev.DevKit.Entities"));
        Assert.IsTrue(_generatedCode.Contains($"internal partial class {EntitySchemaName}"));
        Assert.IsTrue(_generatedCode.Contains("auto-generated"));
    }

    [TestMethod]
    public void GetCsCode_WithShareProject_IncludesShareProjectInBaseClass()
    {
        var code = CSharpLateBound.GetCsCode(null, _fullMetadata, RootNamespace, "CustomShared");
        Assert.IsTrue(code.Contains("CustomShared.EntityBase"));
    }

    [TestMethod]
    public void GetCsCode_WithNullShareProject_UsesEntityBaseDirectly()
    {
        Assert.IsTrue(_generatedCode.Contains($": EntityBase"));
        Assert.IsFalse(_generatedCode.Contains("..EntityBase"));
    }

    [TestMethod]
    public void GetCsCode_ContainsEntityConstants()
    {
        Assert.IsTrue(_generatedCode.Contains($"EntityLogicalName = \"{EntityLogicalName}\""));
        Assert.IsTrue(_generatedCode.Contains("EntityTypeCode ="));
        Assert.IsTrue(_generatedCode.Contains("EntityCollectionSchemaName ="));
        Assert.IsTrue(_generatedCode.Contains("EntityDisplayCollectionName ="));
        Assert.IsTrue(_generatedCode.Contains("DisplayName ="));
        Assert.IsTrue(_generatedCode.Contains("EntitySetName ="));
        Assert.IsTrue(_generatedCode.Contains("EntityLogicalCollectionName ="));
        Assert.IsTrue(_generatedCode.Contains("EntityPrimaryIdAttribute ="));
        Assert.IsTrue(_generatedCode.Contains("EntityPrimaryImageAttribute ="));
        Assert.IsTrue(_generatedCode.Contains("EntityPrimaryNameAttribute ="));
        Assert.IsTrue(_generatedCode.Contains("EntitySchemaName ="));
    }

    [TestMethod]
    public void GetCsCode_ContainsSevenConstructors()
    {
        var ctorEmpty = $"public {EntitySchemaName}()";
        var ctorGuid = $"public {EntitySchemaName}(Guid {EntitySchemaName}Id)";
        var ctorKey = $"public {EntitySchemaName}(string keyName, object keyValue)";
        var ctorEntity = $"public {EntitySchemaName}(Entity targetEntity)";
        var ctorPreTarget = $"public {EntitySchemaName}(Entity preEntity, Entity targetEntity)";
        var ctorPreTargetPost = $"public {EntitySchemaName}(Entity preEntity, Entity targetEntity, Entity postEntity)";
        var ctorKeys = $"public {EntitySchemaName}(KeyAttributeCollection keys)";

        Assert.IsTrue(_generatedCode.Contains(ctorEmpty), "Missing empty constructor");
        Assert.IsTrue(_generatedCode.Contains(ctorGuid), "Missing Guid constructor");
        Assert.IsTrue(_generatedCode.Contains(ctorKey), "Missing key constructor");
        Assert.IsTrue(_generatedCode.Contains(ctorEntity), "Missing Entity constructor");
        Assert.IsTrue(_generatedCode.Contains(ctorPreTarget), "Missing pre/target constructor");
        Assert.IsTrue(_generatedCode.Contains(ctorPreTargetPost), "Missing pre/target/post constructor");
        Assert.IsTrue(_generatedCode.Contains(ctorKeys), "Missing KeyAttributeCollection constructor");
    }

    [TestMethod]
    public void GetCsCode_ContainsUsings()
    {
        Assert.IsTrue(_generatedCode.Contains("using Microsoft.Xrm.Sdk;"));
        Assert.IsTrue(_generatedCode.Contains("using System;"));
        Assert.IsTrue(_generatedCode.Contains("using System.Diagnostics;"));
        Assert.IsTrue(_generatedCode.Contains("using System.Linq;"));
    }

    [TestMethod]
    public void GetCsCode_ContainsDebuggerNonUserCode()
    {
        Assert.IsTrue(_generatedCode.Contains("[DebuggerNonUserCode()]"));
    }

    #endregion

    #region Group 2: Fields struct

    [TestMethod]
    public void GetCsCode_FieldsStruct_ContainsAllValidAttributes()
    {
        Assert.IsTrue(_generatedCode.Contains("internal struct Fields"));
        Assert.IsTrue(_generatedCode.Contains("public const string Name = \"name\""));
        Assert.IsTrue(_generatedCode.Contains("public const string Description = \"description\""));
        Assert.IsTrue(_generatedCode.Contains("public const string Quantity = \"quantity\""));
        Assert.IsTrue(_generatedCode.Contains("public const string BigintField = \"bigint_field\""));
        Assert.IsTrue(_generatedCode.Contains("public const string Amount = \"amount\""));
    }

    [TestMethod]
    public void GetCsCode_FieldsStruct_ExcludesImageAndFileAttributes()
    {
        var fieldsSection = ExtractFieldsSection(_generatedCode);
        Assert.IsFalse(fieldsSection.Contains("Entityimage ="), "Image attributes should be excluded from Fields");
        Assert.IsFalse(fieldsSection.Contains("Attachment = \"attachment\""), "File attributes should be excluded from Fields");
    }

    [TestMethod]
    public void GetCsCode_FieldsStruct_ExcludesAttributeOfFields()
    {
        var fieldsSection = ExtractFieldsSection(_generatedCode);
        Assert.IsFalse(fieldsSection.Contains("AttributeofField"), "AttributeOf fields should be excluded");
    }

    [TestMethod]
    public void GetCsCode_FieldsStruct_IncludesDeprecatedWithObsolete()
    {
        Assert.IsTrue(_generatedCode.Contains("[System.Obsolete(\"Deprecated from version: 9.0\")]"));
        Assert.IsTrue(_generatedCode.Contains("public const string DeprecatedField = \"deprecated_field\""));
    }

    #endregion

    #region Group 3: Property types (DeclareType)

    [TestMethod]
    public void GetCsCode_StringProperty_ReturnsStringType()
    {
        Assert.IsTrue(_generatedCode.Contains("public string Name"));
    }

    [TestMethod]
    public void GetCsCode_StringWithEmailFormat_ReturnsStringType()
    {
        Assert.IsTrue(_generatedCode.Contains("public string Emailaddress"));
    }

    [TestMethod]
    public void GetCsCode_MemoProperty_ReturnsStringType()
    {
        Assert.IsTrue(_generatedCode.Contains("public string Description"));
    }

    [TestMethod]
    public void GetCsCode_IntegerProperty_ReturnsNullableInt()
    {
        Assert.IsTrue(_generatedCode.Contains("public int? Quantity"));
    }

    [TestMethod]
    public void GetCsCode_BigIntProperty_ReturnsNullableLong()
    {
        Assert.IsTrue(_generatedCode.Contains("public long? BigintField"));
    }

    [TestMethod]
    public void GetCsCode_DoubleProperty_ReturnsNullableDouble()
    {
        Assert.IsTrue(_generatedCode.Contains("public double? Percentage"));
    }

    [TestMethod]
    public void GetCsCode_DecimalProperty_ReturnsNullableDecimal()
    {
        Assert.IsTrue(_generatedCode.Contains("public decimal? Ratio"));
    }

    [TestMethod]
    public void GetCsCode_MoneyProperty_ReturnsNullableDecimal()
    {
        Assert.IsTrue(_generatedCode.Contains("public decimal? Amount"));
    }

    [TestMethod]
    public void GetCsCode_BooleanProperty_ReturnsNullableBool()
    {
        Assert.IsTrue(_generatedCode.Contains("public bool? Isactive"));
    }

    [TestMethod]
    public void GetCsCode_PrimaryId_ReturnsGuid()
    {
        Assert.IsTrue(_generatedCode.Contains("public Guid UnittestEntityid"));
    }

    [TestMethod]
    public void GetCsCode_NonPrimaryGuid_ReturnsNullableGuid()
    {
        Assert.IsTrue(_generatedCode.Contains("public Guid? NonPrimaryGuid"));
    }

    [TestMethod]
    public void GetCsCode_LookupProperty_ReturnsEntityReference()
    {
        Assert.IsTrue(_generatedCode.Contains("public EntityReference Primarycontactid"));
    }

    [TestMethod]
    public void GetCsCode_OwnerProperty_ReturnsEntityReference()
    {
        Assert.IsTrue(_generatedCode.Contains("public EntityReference Ownerid"));
    }

    [TestMethod]
    public void GetCsCode_CustomerProperty_ReturnsEntityReference()
    {
        Assert.IsTrue(_generatedCode.Contains("public EntityReference Customerid"));
    }

    [TestMethod]
    public void GetCsCode_PartyListProperty_ReturnsListActivityParty()
    {
        Assert.IsTrue(_generatedCode.Contains("System.Collections.Generic.List<ActivityParty> PartylistField"));
    }

    [TestMethod]
    public void GetCsCode_MultiSelectPicklist_ReturnsListOptionSet()
    {
        Assert.IsTrue(_generatedCode.Contains($"System.Collections.Generic.List<{RootNamespace}.{EntitySchemaName}OptionSets.MultiselectField>"));
    }

    [TestMethod]
    public void GetCsCode_EntityNameProperty_ReturnsStringType()
    {
        Assert.IsTrue(_generatedCode.Contains("public string EntitynameField"));
    }

    #endregion

    #region Group 4: DateTime behaviors

    [TestMethod]
    public void GetCsCode_DateOnly_ReturnsDateType()
    {
        Assert.IsTrue(_generatedCode.Contains("public Date? Birthday"));
    }

    [TestMethod]
    public void GetCsCode_UserLocal_AppendsUtcSuffix()
    {
        Assert.IsTrue(_generatedCode.Contains("public DateTime? CreatedonUtc"));
    }

    [TestMethod]
    public void GetCsCode_TimeZoneIndependent_ReturnsDateTime()
    {
        Assert.IsTrue(_generatedCode.Contains("public DateTime? TzDatetime"));
    }

    [TestMethod]
    public void GetCsCode_NullBehavior_ReturnsDateTime()
    {
        Assert.IsTrue(_generatedCode.Contains("public DateTime? NullBehaviorDate"));
    }

    [TestMethod]
    public void GetCsCode_DateOnly_GetterUsesToDate()
    {
        Assert.IsTrue(_generatedCode.Contains("dateTime.Value.ToDate()"));
    }

    [TestMethod]
    public void GetCsCode_DateOnly_SetterUsesToDateTime()
    {
        Assert.IsTrue(_generatedCode.Contains("value.Value.ToDateTime()"));
    }

    #endregion

    #region Group 5: OptionSet enum generation

    [TestMethod]
    public void GetCsCode_PicklistEnum_GeneratesEnumValues()
    {
        Assert.IsTrue(_generatedCode.Contains($"namespace {RootNamespace}.{EntitySchemaName}OptionSets"));
        Assert.IsTrue(_generatedCode.Contains("internal enum Category"));
        Assert.IsTrue(_generatedCode.Contains("Preferred_Customer = 1"));
        Assert.IsTrue(_generatedCode.Contains("Standard = 2"));
    }

    [TestMethod]
    public void GetCsCode_StateEnum_GeneratesStateValues()
    {
        Assert.IsTrue(_generatedCode.Contains("internal enum Statecode"));
        Assert.IsTrue(_generatedCode.Contains("Active = 0"));
        Assert.IsTrue(_generatedCode.Contains("Inactive = 1"));
    }

    [TestMethod]
    public void GetCsCode_StatusEnum_IncludesStateCodeComment()
    {
        Assert.IsTrue(_generatedCode.Contains("internal enum Statuscode"));
        Assert.IsTrue(_generatedCode.Contains("StateCode.Active"));
    }

    [TestMethod]
    public void GetCsCode_EmptyOptionSet_IsExcluded()
    {
        Assert.IsFalse(_generatedCode.Contains("internal enum EmptyOptionset"));
    }

    [TestMethod]
    public void GetCsCode_IdTypeSchemaName_IsSkippedInEnum()
    {
        Assert.IsFalse(_generatedCode.Contains("internal enum CategoryIdType"));
    }

    [TestMethod]
    public void GetCsCode_MultiSelectPicklistEnum_GeneratesEnumValues()
    {
        Assert.IsTrue(_generatedCode.Contains("internal enum MultiselectField"));
        Assert.IsTrue(_generatedCode.Contains("Option_A = 100"));
        Assert.IsTrue(_generatedCode.Contains("Option_B = 200"));
    }

    #endregion

    #region Group 6: XML comments (GetXml)

    [TestMethod]
    public void GetCsCode_ReadOnlyField_HasReadOnlyComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>ReadOnly</strong>"));
    }

    [TestMethod]
    public void GetCsCode_ReadOnlyField_HasNoSetter()
    {
        var readonlyPropIdx = _generatedCode.IndexOf("public string ReadonlyField");
        Assert.IsTrue(readonlyPropIdx > 0);
        var nextPropIdx = _generatedCode.IndexOf("public ", readonlyPropIdx + 1);
        var propSection = _generatedCode.Substring(readonlyPropIdx, nextPropIdx - readonlyPropIdx);
        Assert.IsFalse(propSection.Contains("set {") || propSection.Contains("set\r\n"));
    }

    [TestMethod]
    public void GetCsCode_RequiredField_HasRequiredComment()
    {
        Assert.IsTrue(_generatedCode.Contains("Required - "));
    }

    [TestMethod]
    public void GetCsCode_CalculatedField_HasCalculatedComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Calculated Field</strong>"));
    }

    [TestMethod]
    public void GetCsCode_RollupField_HasRollupComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Rollup Field</strong>"));
    }

    [TestMethod]
    public void GetCsCode_PowerFxField_HasPowerFxComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Power-Fx Field</strong>"));
    }

    [TestMethod]
    public void GetCsCode_AutoNumber_HasAutoNumberComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>AutoNumber</strong>: CAS-{SEQNUM:5}-{RANDSTRING:4}"));
    }

    [TestMethod]
    public void GetCsCode_AuditEnabled_HasAuditComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Audit</strong>: Enabled"));
    }

    [TestMethod]
    public void GetCsCode_PolymorphicLookup_HasPolymorphicComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Polymorphic Lookup</strong>"));
    }

    [TestMethod]
    public void GetCsCode_SingleLookup_HasLookupComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Lookup</strong>: <see cref=\"contact\"/>"));
    }

    [TestMethod]
    public void GetCsCode_OwnerLookup_HasOwnerComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Owner</strong>:"));
    }

    [TestMethod]
    public void GetCsCode_CustomerLookup_HasCustomerComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Customer</strong>:"));
    }

    [TestMethod]
    public void GetCsCode_MoneyPrecisionSource0_HasPrecisionComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Precision</strong>: 2"));
    }

    [TestMethod]
    public void GetCsCode_MoneyPrecisionSource1_HasOrgPrecisionComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Precision</strong>: Organization.PricingDecimalPrecision"));
    }

    [TestMethod]
    public void GetCsCode_MoneyPrecisionSource2_HasCurrencyPrecisionComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Precision</strong>: TransactionCurrency.CurrencyPrecision"));
    }

    [TestMethod]
    public void GetCsCode_PrimaryKey_HasPrimaryKeyComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Primary Key</strong>"));
    }

    [TestMethod]
    public void GetCsCode_PrimaryName_HasPrimaryNameComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Primary Name</strong>"));
    }

    [TestMethod]
    public void GetCsCode_BooleanTwoOption_HasTrueAndFalseLabels()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Two Option</strong>"));
        Assert.IsTrue(_generatedCode.Contains("[<strong>Yes</strong>]: true"));
        Assert.IsTrue(_generatedCode.Contains("[<strong>No</strong>]: false"));
    }

    [TestMethod]
    public void GetCsCode_BooleanDefaultValue_HasDefaultComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Default Value</strong>"));
    }

    [TestMethod]
    public void GetCsCode_DoublePrecision_HasPrecisionComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Floating Point Number</strong> - <strong>Precision</strong>: 4"));
    }

    [TestMethod]
    public void GetCsCode_DecimalPrecision_HasPrecisionComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Decimal Number</strong> - <strong>Precision</strong>: 6"));
    }

    [TestMethod]
    public void GetCsCode_IntegerDurationFormat_HasFormatComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Format</strong>: Duration"));
    }

    [TestMethod]
    public void GetCsCode_BigInt_HasBigIntegerComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Big Integer</strong>"));
    }

    [TestMethod]
    public void GetCsCode_MemoFormat_HasMultipleLinesComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Multiple Lines of Text</strong>"));
    }

    [TestMethod]
    public void GetCsCode_MemoRichTextFormat_HasFormatComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Multiple Lines of Text</strong> - <strong>Format</strong>: RichText"));
    }

    [TestMethod]
    public void GetCsCode_StringEmailFormat_HasFormatComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Format</strong>: Email"));
    }

    [TestMethod]
    public void GetCsCode_DateOnly_HasDateOnlyComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>DateTimeBehavior</strong>: DateOnly - <strong>DateTimeFormat</strong>: DateOnly"));
    }

    [TestMethod]
    public void GetCsCode_UserLocalDateAndTime_HasComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateAndTime"));
    }

    [TestMethod]
    public void GetCsCode_TimeZoneIndependent_DateAndTime_HasComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>DateTimeBehavior</strong>: TimeZoneIndependent - <strong>DateTimeFormat</strong>: DateAndTime"));
    }

    [TestMethod]
    public void GetCsCode_UserLocal_DateOnly_HasComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>DateTimeBehavior</strong>: UserLocal - <strong>DateTimeFormat</strong>: DateOnly"));
    }

    [TestMethod]
    public void GetCsCode_TimeZoneIndependent_DateOnly_HasComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>DateTimeBehavior</strong>: TimeZoneIndependent - <strong>DateTimeFormat</strong>: DateOnly"));
    }

    [TestMethod]
    public void GetCsCode_RollupDateSuffix_HasRollupComment()
    {
        Assert.IsTrue(_generatedCode.Contains("RollupField_rollup_Date"));
    }

    [TestMethod]
    public void GetCsCode_RollupStateSuffix_HasRollupComment()
    {
        Assert.IsTrue(_generatedCode.Contains("RollupField_rollup_State"));
    }

    [TestMethod]
    public void GetCsCode_PicklistDefaultValue_HasDefaultComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Default Value</strong>: <see cref="));
    }

    [TestMethod]
    public void GetCsCode_StateDefaultValue_HasDefaultComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Default Value</strong>: <see cref=\"Dev.DevKit.Entities.UnitTestEntityOptionSets.Statecode.Active\"/>"));
    }

    [TestMethod]
    public void GetCsCode_StatusDefaultValue_HasDefaultComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Default Value</strong>: <see cref=\"Dev.DevKit.Entities.UnitTestEntityOptionSets.Statuscode.Draft\"/>"));
    }

    [TestMethod]
    public void GetCsCode_MultiSelectDefaultValue_HasDefaultComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Default Value</strong>: <see cref=\"Dev.DevKit.Entities.UnitTestEntityOptionSets.MultiselectField.Option_A\"/>"));
    }

    [TestMethod]
    public void GetCsCode_AttributeWithDescription_HasDescriptionComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Description</strong>: The primary name of the entity"));
    }

    [TestMethod]
    public void GetCsCode_DisplayName_HasDisplayNameComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Display Name</strong>: Name"));
    }

    #endregion

    #region Group 7: Image & File generation

    [TestMethod]
    public void GetCsCode_PrimaryImage_GeneratesEntityImageProperty()
    {
        Assert.IsTrue(_generatedCode.Contains("public byte[] EntityImage"));
        Assert.IsTrue(_generatedCode.Contains("public string EntityImageUrl"));
        Assert.IsTrue(_generatedCode.Contains("public long? EntityImageTimestamp"));
    }

    [TestMethod]
    public void GetCsCode_NonPrimaryImage_GeneratesSchemaNameProperty()
    {
        Assert.IsTrue(_generatedCode.Contains("public byte[] Secondimage"));
    }

    [TestMethod]
    public void GetCsCode_ImageDownloadMethod_IsGenerated()
    {
        Assert.IsTrue(_generatedCode.Contains("EntityImage_Download(Microsoft.Xrm.Sdk.IOrganizationService service)"));
        Assert.IsTrue(_generatedCode.Contains("InitializeFileBlocksDownloadRequest"));
    }

    [TestMethod]
    public void GetCsCode_FileAttribute_GeneratesIdAndNameProperties()
    {
        Assert.IsTrue(_generatedCode.Contains("public Guid? AttachmentId"));
        Assert.IsTrue(_generatedCode.Contains("public string AttachmentName"));
    }

    [TestMethod]
    public void GetCsCode_FileDownloadMethod_IsGenerated()
    {
        Assert.IsTrue(_generatedCode.Contains("Attachment_Download(Microsoft.Xrm.Sdk.IOrganizationService service)"));
    }

    [TestMethod]
    public void GetCsCode_FileMaxSize_InComment()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>MaxSize</strong>: 32,768 KB"));
    }

    [TestMethod]
    public void GetCsCode_FileAttribute_SameNameAsEntity_UsesSuffixToAvoidConflict()
    {
        // Entity is "hs_document" with primary key "hs_documentid"
        // File column is also named "hs_document" → would generate hs_documentId which conflicts
        var metadata = new EntityMetadata
        {
            LogicalName = "hs_document",
            SchemaName = "hs_document",
            DisplayName = CreateLabel("HS Document")
        };
        SetProperty(metadata, nameof(EntityMetadata.MetadataId), Guid.NewGuid());
        SetProperty(metadata, nameof(EntityMetadata.ObjectTypeCode), 10999);
        SetProperty(metadata, nameof(EntityMetadata.PrimaryIdAttribute), "hs_documentid");
        SetProperty(metadata, nameof(EntityMetadata.PrimaryNameAttribute), "hs_name");

        var pkAttr = CreateUniqueIdentifierAttribute("hs_documentid", "HS Document Id", isPrimaryId: true);
        pkAttr.SchemaName = "hs_documentId";
        var nameAttr = CreateStringAttribute("hs_name", "Name", isPrimaryName: true);
        nameAttr.SchemaName = "hs_name";
        var fileAttr = CreateFileAttribute("hs_document", "HS Document File", maxSizeInKB: 32768);
        fileAttr.SchemaName = "hs_document";

        var attributes = new AttributeMetadata[] { pkAttr, nameAttr, fileAttr };
        SetProperty(metadata, nameof(EntityMetadata.Attributes), attributes);

        XrmHelper.EntitiesMetadata = [metadata];
        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        // Primary key: hs_documentId → SafeDeclareName checks match with entitySchemaName+"id" → returns as-is
        Assert.IsTrue(code.Contains("public Guid hs_documentId"), "Primary key should exist as hs_documentId");
        // File attribute should use _File suffix to avoid conflict with primary key's hs_documentId
        Assert.IsTrue(code.Contains("public Guid? hs_document_FileId"), "File attribute Id should use _File suffix");
        Assert.IsTrue(code.Contains("public string hs_document_FileName"), "File attribute Name should use _File suffix");
        Assert.IsTrue(code.Contains("hs_document_File_Download"), "File attribute Download should use _File suffix");
    }

    [TestMethod]
    public void GetCsCode_ImageAttribute_SameNameAsExistingAttribute_UsesSuffixToAvoidConflict()
    {
        // Entity has a regular string attribute "hs_photo" AND an Image column also named "hs_photo"
        // This creates a conflict: the regular attribute generates property "hs_photo",
        // and the Image attribute also wants to generate property "hs_photo"
        var metadata = new EntityMetadata
        {
            LogicalName = "hs_entity",
            SchemaName = "hs_entity",
            DisplayName = CreateLabel("HS Entity")
        };
        SetProperty(metadata, nameof(EntityMetadata.MetadataId), Guid.NewGuid());
        SetProperty(metadata, nameof(EntityMetadata.ObjectTypeCode), 10998);
        SetProperty(metadata, nameof(EntityMetadata.PrimaryIdAttribute), "hs_entityid");
        SetProperty(metadata, nameof(EntityMetadata.PrimaryNameAttribute), "hs_name");

        var pkAttr = CreateUniqueIdentifierAttribute("hs_entityid", "HS Entity Id", isPrimaryId: true);
        pkAttr.SchemaName = "hs_entityId";
        var nameAttr = CreateStringAttribute("hs_name", "Name", isPrimaryName: true);
        nameAttr.SchemaName = "hs_name";
        var strAttr = CreateStringAttribute("hs_photo", "HS Photo Description");
        strAttr.SchemaName = "hs_photo";
        var imgAttr = CreateImageAttribute("hs_photo_img", "HS Photo Image", isPrimary: false);
        imgAttr.SchemaName = "hs_photo";

        var attributes = new AttributeMetadata[] { pkAttr, nameAttr, strAttr, imgAttr };
        SetProperty(metadata, nameof(EntityMetadata.Attributes), attributes);

        XrmHelper.EntitiesMetadata = [metadata];
        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        // Regular string property should be normal
        Assert.IsTrue(code.Contains("public string hs_photo"), "Regular string attribute should exist as hs_photo");
        // Image attribute should use _Image suffix to avoid conflict
        Assert.IsTrue(code.Contains("public byte[] hs_photo_Image"), "Image attribute should use _Image suffix");
        Assert.IsTrue(code.Contains("public string hs_photo_ImageUrl"), "Image URL should use _Image suffix");
        Assert.IsTrue(code.Contains("public long? hs_photo_ImageTimestamp"), "Image Timestamp should use _Image suffix");
    }

    #endregion

    #region Group 8: Getter/Setter code paths

    [TestMethod]
    public void GetCsCode_PicklistSetter_HasOptionSetValueConversion()
    {
        Assert.IsTrue(_generatedCode.Contains("new OptionSetValue((int)value.Value)"));
    }

    [TestMethod]
    public void GetCsCode_MoneySetter_HasMoneyConversion()
    {
        Assert.IsTrue(_generatedCode.Contains("new Money(value.Value)"));
    }

    [TestMethod]
    public void GetCsCode_PrimaryIdSetter_SetsEntityId()
    {
        Assert.IsTrue(_generatedCode.Contains("Entity.Id = value;"));
    }

    [TestMethod]
    public void GetCsCode_MoneyGetter_ReturnsValueProperty()
    {
        Assert.IsTrue(_generatedCode.Contains("Entity.GetAttributeValue<Money>(Fields.Amount)"));
    }

    [TestMethod]
    public void GetCsCode_PrimaryIdGetter_ReturnsId()
    {
        Assert.IsTrue(_generatedCode.Contains("get { return Id; }"));
    }

    [TestMethod]
    public void GetCsCode_PartyListSetter_CreatesEntityCollection()
    {
        Assert.IsTrue(_generatedCode.Contains("var data = new EntityCollection()"));
        Assert.IsTrue(_generatedCode.Contains("data.Entities.Add(item.Entity)"));
    }

    [TestMethod]
    public void GetCsCode_MultiSelectPicklistSetter_CreatesOptionSetValueCollection()
    {
        Assert.IsTrue(_generatedCode.Contains("var data = new OptionSetValueCollection()"));
    }

    [TestMethod]
    public void GetCsCode_MultiSelectPicklistGetter_CastsToEnum()
    {
        Assert.IsTrue(_generatedCode.Contains($"({RootNamespace}.{EntitySchemaName}OptionSets.MultiselectField)item.Value"));
    }

    #endregion

    #region Group 9: IsFieldOk filtering

    [TestMethod]
    public void GetCsCode_ManagedPropertyAttribute_IsExcluded()
    {
        var managedPropAttr = new ManagedPropertyAttributeMetadata
        {
            LogicalName = "managed_prop_field",
            SchemaName = "ManagedPropField",
            DisplayName = CreateLabel("Managed Property")
        };
        SetProperty(managedPropAttr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.ManagedProperty);

        var metadata = BuildMinimalEntityMetadata([managedPropAttr]);
        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        Assert.IsFalse(code.Contains("ManagedPropField"), "ManagedProperty should be excluded by IsFieldOk");
    }

    [TestMethod]
    public void GetCsCode_UniqueidentifierNotPrimaryId_MatchingLogicalName_ReturnsGuid()
    {
        var attr = CreateUniqueIdentifierAttribute("minimalentityid", "Minimal Entity Id", isPrimaryId: false);

        var metadata = BuildMinimalEntityMetadata([attr]);
        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        Assert.IsTrue(code.Contains("public Guid Minimalentityid"), "Uniqueidentifier matching entityid pattern should be Guid (non-nullable) even when IsPrimaryId=false");
        Assert.IsFalse(code.Contains("public Guid? Minimalentityid"), "Should NOT be nullable Guid");
    }

    [TestMethod]
    public void GetCsCode_UniqueidentifierNotPrimaryId_MatchingLogicalName_GetterReturnsGetAttributeValue()
    {
        var attr = CreateUniqueIdentifierAttribute("minimalentityid", "Minimal Entity Id", isPrimaryId: false);

        var metadata = BuildMinimalEntityMetadata([attr]);
        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        Assert.IsTrue(code.Contains("get { return Entity.GetAttributeValue<Guid>(Fields.Minimalentityid); }"),
            "When IsPrimaryId=false but logicalName matches entityid, getter should use GetAttributeValue<Guid> instead of Id");
    }

    [TestMethod]
    public void GetCsCode_UniqueidentifierNotPrimaryId_MatchingLogicalName_SetterSetsEntityId()
    {
        var attr = CreateUniqueIdentifierAttribute("minimalentityid", "Minimal Entity Id", isPrimaryId: false);

        var metadata = BuildMinimalEntityMetadata([attr]);
        var code = CSharpLateBound.GetCsCode(null, metadata, RootNamespace, null);

        Assert.IsTrue(code.Contains("Entity.Id = value;"),
            "When logicalName matches entityid, setter should also set Entity.Id");
    }

    #endregion

    #region Group 10: XML comment edge cases

    [TestMethod]
    public void GetCsCode_BooleanDefaultTrue_ShowsTrueDefaultInXml()
    {
        Assert.IsTrue(_generatedCode.Contains("<strong>Default Value</strong> [<strong>Enabled</strong>]: true"),
            "Boolean with DefaultValue=true should show TrueOption label in XML comment");
    }

    [TestMethod]
    public void GetCsCode_MultiSelectPicklistNullDefault_ShowsNullDefaultInXml()
    {
        var marker = "public System.Collections.Generic.List<";
        var propIdx = _generatedCode.IndexOf(marker + RootNamespace + "." + EntitySchemaName + "OptionSets.MultiselectNullDefault>");
        Assert.IsTrue(propIdx > 0, "MultiSelectPicklist with null default property should be present");
        var xmlSection = _generatedCode.Substring(Math.Max(0, propIdx - 800), 800);
        Assert.IsTrue(xmlSection.Contains("<strong>Default Value</strong>: <see langword=\"null\"/>"),
            "MultiSelectPicklist with null DefaultFormValue should show null default in XML comment");
    }

    [TestMethod]
    public void GetCsCode_StatusNullDefault_ShowsNullDefaultInXml()
    {
        var propSearchPattern = "OptionSets.StatuscodeNullDefault?";
        var propIdx = _generatedCode.IndexOf(propSearchPattern);
        Assert.IsTrue(propIdx > 0, "Status with null default property should be present");
        var xmlSection = _generatedCode.Substring(Math.Max(0, propIdx - 800), 800);
        Assert.IsTrue(xmlSection.Contains("<strong>Default Value</strong>: <see langword=\"null\"/>"),
            "Status with null DefaultFormValue should show null default in XML comment");
    }

    #endregion

    #region Group 11: Output file generation (run last)

    [TestMethod]
    public void GenerateUnitTestEntity_OutputFiles()
    {
        var code = CSharpLateBound.GetCsCode(null, _fullMetadata, RootNamespace, null);
        Assert.IsNotNull(code);

        var testProjectDir = FindTestProjectDirectory();
        var libDir = Path.Combine(testProjectDir, "Lib");

        var generatedPath = Path.Combine(libDir, "UnitTestEntity.generated.cs");
        // Only write if body content changed (skip the 7-line header that contains DateTime.Now timestamp)
        // This prevents dirty git state when only the timestamp comment changes.
        if (!File.Exists(generatedPath) ||
            Helper.GetContentFromLine6(File.ReadAllText(generatedPath)) != Helper.GetContentFromLine6(code))
        {
            File.WriteAllText(generatedPath, code);
        }
        Assert.IsTrue(File.Exists(generatedPath));

        var partialCode = GeneratePartialClassShell(RootNamespace, EntitySchemaName);
        var partialPath = Path.Combine(libDir, "UnitTestEntity.cs");
        if (!File.Exists(partialPath) || File.ReadAllText(partialPath) != partialCode)
        {
            File.WriteAllText(partialPath, partialCode);
        }
        Assert.IsTrue(File.Exists(partialPath));
    }

    #endregion

    #region Helpers

    private static string FindTestProjectDirectory()
    {
        var dir = AppDomain.CurrentDomain.BaseDirectory;
        while (dir != null)
        {
            if (File.Exists(Path.Combine(dir, "DynamicsCrm.DevKit.UnitTests.csproj")))
                return dir;
            dir = Directory.GetParent(dir)?.FullName;
        }
        return Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..", "..", "..");
    }

    private static string GeneratePartialClassShell(string rootNamespace, string className)
    {
        return
            $"namespace {rootNamespace}\r\n" +
            $"{{\r\n" +
            $"\tinternal partial class {className}\r\n" +
            $"\t{{\r\n" +
            $"\t}}\r\n" +
            $"}}\r\n";
    }

    private static string ExtractFieldsSection(string code)
    {
        var start = code.IndexOf("internal struct Fields");
        if (start < 0) return string.Empty;
        var depth = 0;
        var i = code.IndexOf('{', start);
        var begin = i;
        for (; i < code.Length; i++)
        {
            if (code[i] == '{') depth++;
            else if (code[i] == '}') depth--;
            if (depth == 0) break;
        }
        return code.Substring(begin, i - begin + 1);
    }

    #endregion

    #region Metadata Factory

    private static EntityMetadata BuildMinimalEntityMetadata(AttributeMetadata[] attributes)
    {
        var metadata = new EntityMetadata
        {
            LogicalName = "minimalentity",
            SchemaName = "MinimalEntity",
            DisplayName = CreateLabel("Minimal Entity")
        };
        SetProperty(metadata, nameof(EntityMetadata.MetadataId), Guid.NewGuid());
        SetProperty(metadata, nameof(EntityMetadata.ObjectTypeCode), 99999);
        SetProperty(metadata, nameof(EntityMetadata.PrimaryIdAttribute), "minimalentityid");
        SetProperty(metadata, nameof(EntityMetadata.PrimaryNameAttribute), "name");
        SetProperty(metadata, nameof(EntityMetadata.Attributes), attributes);
        return metadata;
    }

    private static EntityMetadata BuildFullEntityMetadata()
    {
        var metadata = new EntityMetadata
        {
            LogicalName = EntityLogicalName,
            SchemaName = EntitySchemaName,
            DisplayName = CreateLabel("Unit Test Entity")
        };

        SetProperty(metadata, nameof(EntityMetadata.MetadataId), Guid.NewGuid());
        SetProperty(metadata, nameof(EntityMetadata.ObjectTypeCode), 10001);
        SetProperty(metadata, nameof(EntityMetadata.PrimaryIdAttribute), "unittest_entityid");
        SetProperty(metadata, nameof(EntityMetadata.PrimaryNameAttribute), "name");
        SetProperty(metadata, nameof(EntityMetadata.PrimaryImageAttribute), "entityimage");
        SetProperty(metadata, nameof(EntityMetadata.CollectionSchemaName), "UnitTestEntities");
        SetProperty(metadata, nameof(EntityMetadata.EntitySetName), "unittest_entities");
        SetProperty(metadata, nameof(EntityMetadata.LogicalCollectionName), "unittest_entities");
        SetProperty(metadata, nameof(EntityMetadata.DisplayCollectionName), CreateLabel("Unit Test Entities"));

        var attributes = new List<AttributeMetadata>
        {
            CreateUniqueIdentifierAttribute("unittest_entityid", "Unit Test Entity Id", isPrimaryId: true),
            CreateStringAttribute("name", "Name", isPrimaryName: true, description: "The primary name of the entity"),
            CreateMemoAttribute("description", "Description", maxLength: 4000),
            CreateMemoAttribute("richtext_field", "Rich Text Field", maxLength: 8000, formatName: "RichText"),
            CreateStringAttribute("emailaddress", "Email Address", formatName: "Email"),
            CreateUniqueIdentifierAttribute("non_primary_guid", "Non Primary Guid"),

            CreateIntegerAttribute("quantity", "Quantity", IntegerFormat.None, minValue: 0, maxValue: 1000),
            CreateIntegerAttribute("duration_field", "Duration", IntegerFormat.Duration),
            CreateBigIntAttribute("bigint_field", "Big Int Field"),
            CreateDoubleAttribute("percentage", "Percentage", precision: 4, minValue: 0, maxValue: 100),
            CreateDecimalAttribute("ratio", "Ratio", precision: 6, minValue: 0, maxValue: 999999),

            CreateMoneyAttribute("amount", "Amount", precisionSource: 0, precision: 2, minValue: 0, maxValue: 1000000),
            CreateMoneyAttribute("amount_org", "Amount Org", precisionSource: 1),
            CreateMoneyAttribute("amount_currency", "Amount Currency", precisionSource: 2),

            CreateDateTimeAttribute("createdon", "Created On", DateTimeBehavior.UserLocal, DateTimeFormat.DateAndTime, isValidForCreate: false, isValidForUpdate: false),
            CreateDateTimeAttribute("birthday", "Birthday", DateTimeBehavior.DateOnly, null),
            CreateDateTimeAttribute("tz_datetime", "Timezone DateTime", DateTimeBehavior.TimeZoneIndependent, DateTimeFormat.DateAndTime),
            CreateDateTimeAttribute("null_behavior_date", "Null Behavior Date", null, null),
            CreateDateTimeAttribute("userlocal_dateonly", "UserLocal DateOnly", DateTimeBehavior.UserLocal, DateTimeFormat.DateOnly),
            CreateDateTimeAttribute("tzi_dateonly", "TZI DateOnly", DateTimeBehavior.TimeZoneIndependent, DateTimeFormat.DateOnly),

            CreateBooleanAttribute("isactive", "Is Active", trueLabel: "Yes", falseLabel: "No", defaultValue: false),
            CreateBooleanAttribute("default_true_bool", "Default True Bool", trueLabel: "Enabled", falseLabel: "Disabled", defaultValue: true),
            CreateBooleanAttribute("no_default_bool", "No Default Bool", trueLabel: "On", falseLabel: "Off", defaultValue: null),

            CreateLookupAttribute("primarycontactid", "Primary Contact", new[] { "contact" }),
            CreateOwnerAttribute("ownerid", "Owner"),
            CreateCustomerAttribute("customerid", "Customer"),
            CreateLookupAttribute("polymorphic_lookup", "Polymorphic Lookup", new[] { "account", "contact", "lead" }),

            CreateStateAttribute("statecode", "Status", new Dictionary<int, string> { { 0, "Active" }, { 1, "Inactive" } }, defaultFormValue: 0),
            CreateStatusAttribute("statuscode", "Status Reason", new Dictionary<int, (string Label, int State)>
            {
                { 1, ("Draft", 0) },
                { 2, ("Active", 0) },
                { 3, ("Deactivated", 1) }
            }, defaultFormValue: 1),
            CreateStatusAttribute("statuscode_null_default", "Status Null Default", new Dictionary<int, (string Label, int State)>
            {
                { 10, ("Open", 0) },
                { 20, ("Closed", 1) }
            }),
            CreatePicklistAttribute("category", "Category", new Dictionary<int, string>
            {
                { 1, "Preferred Customer" },
                { 2, "Standard" }
            }, defaultFormValue: 1),
            CreateMultiSelectPicklistAttribute("multiselect_field", "Multi Select", new Dictionary<int, string>
            {
                { 100, "Option A" },
                { 200, "Option B" },
                { 300, "Option C" }
            }, defaultFormValue: 100),
            CreateMultiSelectPicklistAttribute("multiselect_null_default", "Multi Select Null Default", new Dictionary<int, string>
            {
                { 400, "Choice X" },
                { 500, "Choice Y" }
            }),
            CreatePicklistAttribute("empty_optionset", "Empty OptionSet", new Dictionary<int, string>()),

            CreatePartyListAttribute("partylist_field", "Party List"),
            CreateEntityNameAttribute("entityname_field", "Entity Name"),

            CreateImageAttribute("entityimage", "Entity Image", isPrimary: true),
            CreateImageAttribute("secondimage", "Second Image", isPrimary: false),
            CreateFileAttribute("attachment", "Attachment", maxSizeInKB: 32768),

            CreateStringAttribute("deprecated_field", "Deprecated Field", deprecatedVersion: "9.0"),
            CreateStringAttribute("readonly_field", "Read Only Field", isValidForCreate: false, isValidForUpdate: false),
            CreateStringAttribute("calculated_field", "Calculated Field", sourceType: 1),
            CreateDecimalAttribute("rollup_field", "Rollup Field", sourceType: 2),
            CreateStringAttribute("powerfx_field", "Power Fx Field", sourceType: 3),
            CreateDateTimeAttribute("rollupfield_rollup_date", "Rollup Date", DateTimeBehavior.UserLocal, DateTimeFormat.DateAndTime, schemaName: "RollupField_rollup_Date"),
            CreateIntegerAttribute("rollupfield_rollup_state", "Rollup State", schemaName: "RollupField_rollup_State"),
            CreateStringAttribute("required_field", "Required Field", requiredLevel: AttributeRequiredLevel.ApplicationRequired),
            CreateStringAttribute("autonumber_field", "Auto Number", autoNumberFormat: "CAS-{SEQNUM:5}-{RANDSTRING:4}"),
            CreateStringAttribute("audit_field", "Audit Field", isAuditEnabled: true),
            CreateStringAttribute("attributeof_field", "AttributeOf Field", attributeOf: "name"),

            CreatePicklistAttribute("category_idtype", "Category IdType", new Dictionary<int, string> { { 1, "Type1" } }, schemaName: "CategoryIdType"),
        };

        SetProperty(metadata, nameof(EntityMetadata.Attributes), attributes.ToArray());
        return metadata;
    }

    private static void SetProperty(object obj, string propertyName, object? value)
    {
        obj.GetType().GetProperty(propertyName)!.SetValue(obj, value);
    }

    private static void SetField(object obj, string fieldName, object? value)
    {
        var field = obj.GetType().GetField(fieldName, BindingFlags.NonPublic | BindingFlags.Instance);
        field?.SetValue(obj, value);
    }

    private static StringAttributeMetadata CreateStringAttribute(
        string logicalName, string displayName,
        bool isPrimaryName = false, string? description = null,
        string? formatName = null, string? deprecatedVersion = null,
        bool isValidForCreate = true, bool isValidForUpdate = true,
        int? sourceType = null,
        AttributeRequiredLevel? requiredLevel = null,
        string? autoNumberFormat = null,
        bool isAuditEnabled = false,
        string? attributeOf = null)
    {
        var attr = new StringAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            MaxLength = 100
        };
        if (formatName != null)
        {
            var sfn = new StringFormatName();
            SetProperty(sfn, nameof(StringFormatName.Value), formatName);
            attr.FormatName = sfn;
        }
        if (description != null) attr.Description = CreateLabel(description);
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.String);
        SetProperty(attr, nameof(AttributeMetadata.IsPrimaryName), isPrimaryName);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), isValidForCreate);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), isValidForUpdate);
        if (deprecatedVersion != null) SetProperty(attr, nameof(AttributeMetadata.DeprecatedVersion), deprecatedVersion);
        if (sourceType.HasValue) SetProperty(attr, nameof(AttributeMetadata.SourceType), sourceType);
        if (requiredLevel.HasValue)
            attr.RequiredLevel = new AttributeRequiredLevelManagedProperty(requiredLevel.Value);
        if (autoNumberFormat != null) attr.AutoNumberFormat = autoNumberFormat;
        if (isAuditEnabled) attr.IsAuditEnabled = new BooleanManagedProperty(true);
        if (attributeOf != null) SetProperty(attr, nameof(AttributeMetadata.AttributeOf), attributeOf);
        return attr;
    }

    private static MemoAttributeMetadata CreateMemoAttribute(string logicalName, string displayName, int maxLength = 2000, string? formatName = null)
    {
        var attr = new MemoAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            MaxLength = maxLength
        };
        if (formatName != null)
        {
            var fn = new MemoFormatName();
            SetProperty(fn, nameof(MemoFormatName.Value), formatName);
            attr.FormatName = fn;
        }
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Memo);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static UniqueIdentifierAttributeMetadata CreateUniqueIdentifierAttribute(
        string logicalName, string displayName, bool isPrimaryId = false)
    {
        var attr = new UniqueIdentifierAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName)
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Uniqueidentifier);
        SetProperty(attr, nameof(AttributeMetadata.IsPrimaryId), isPrimaryId);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static IntegerAttributeMetadata CreateIntegerAttribute(
        string logicalName, string displayName,
        IntegerFormat format = IntegerFormat.None,
        int? minValue = null, int? maxValue = null,
        string? schemaName = null)
    {
        var attr = new IntegerAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = schemaName ?? ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            MinValue = minValue,
            MaxValue = maxValue
        };
        if (format != IntegerFormat.None) attr.Format = format;
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Integer);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static BigIntAttributeMetadata CreateBigIntAttribute(string logicalName, string displayName)
    {
        var attr = new BigIntAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName)
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.BigInt);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static DoubleAttributeMetadata CreateDoubleAttribute(
        string logicalName, string displayName,
        int? precision = null, double? minValue = null, double? maxValue = null)
    {
        var attr = new DoubleAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            Precision = precision,
            MinValue = minValue,
            MaxValue = maxValue
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Double);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static DecimalAttributeMetadata CreateDecimalAttribute(
        string logicalName, string displayName,
        int? precision = null, decimal? minValue = null, decimal? maxValue = null,
        int? sourceType = null)
    {
        var attr = new DecimalAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            Precision = precision,
            MinValue = minValue,
            MaxValue = maxValue
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Decimal);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        if (sourceType.HasValue) SetProperty(attr, nameof(AttributeMetadata.SourceType), sourceType);
        return attr;
    }

    private static MoneyAttributeMetadata CreateMoneyAttribute(
        string logicalName, string displayName,
        int? precisionSource = null, int? precision = null,
        double? minValue = null, double? maxValue = null)
    {
        var attr = new MoneyAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            PrecisionSource = precisionSource,
            Precision = precision,
            MinValue = minValue,
            MaxValue = maxValue
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Money);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static DateTimeAttributeMetadata CreateDateTimeAttribute(
        string logicalName, string displayName,
        DateTimeBehavior? behavior, DateTimeFormat? format,
        bool isValidForCreate = true, bool isValidForUpdate = true,
        string? schemaName = null)
    {
        var attr = new DateTimeAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = schemaName ?? ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            DateTimeBehavior = behavior,
            Format = format
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.DateTime);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), isValidForCreate);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), isValidForUpdate);
        return attr;
    }

    private static BooleanAttributeMetadata CreateBooleanAttribute(
        string logicalName, string displayName,
        string trueLabel, string falseLabel, bool? defaultValue)
    {
        var attr = new BooleanAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            DefaultValue = defaultValue,
            OptionSet = new BooleanOptionSetMetadata(
                new OptionMetadata(CreateLabel(trueLabel), 1),
                new OptionMetadata(CreateLabel(falseLabel), 0))
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Boolean);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static LookupAttributeMetadata CreateLookupAttribute(
        string logicalName, string displayName, string[] targets)
    {
        var attr = new LookupAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName)
        };
        SetProperty(attr, nameof(LookupAttributeMetadata.Targets), targets);
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Lookup);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static LookupAttributeMetadata CreateOwnerAttribute(string logicalName, string displayName)
    {
        var attr = new LookupAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName)
        };
        SetProperty(attr, nameof(LookupAttributeMetadata.Targets), new[] { "systemuser", "team" });
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Owner);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static LookupAttributeMetadata CreateCustomerAttribute(string logicalName, string displayName)
    {
        var attr = new LookupAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName)
        };
        SetProperty(attr, nameof(LookupAttributeMetadata.Targets), new[] { "account", "contact" });
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Customer);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static StateAttributeMetadata CreateStateAttribute(
        string logicalName, string displayName, Dictionary<int, string> options,
        int? defaultFormValue = null)
    {
        var optionSet = new OptionSetMetadata();
        foreach (var kvp in options)
        {
            var stateOption = new StateOptionMetadata();
            stateOption.Label = CreateLabel(kvp.Value);
            SetProperty(stateOption, nameof(StateOptionMetadata.Value), kvp.Key);
            optionSet.Options.Add(stateOption);
        }
        var attr = new StateAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            OptionSet = optionSet,
            DefaultFormValue = defaultFormValue
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.State);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static StatusAttributeMetadata CreateStatusAttribute(
        string logicalName, string displayName,
        Dictionary<int, (string Label, int State)> options,
        int? defaultFormValue = null)
    {
        var optionSet = new OptionSetMetadata();
        foreach (var kvp in options)
        {
            var statusOption = new StatusOptionMetadata(kvp.Key, kvp.Value.State)
            {
                Label = CreateLabel(kvp.Value.Label)
            };
            optionSet.Options.Add(statusOption);
        }
        var attr = new StatusAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            OptionSet = optionSet,
            DefaultFormValue = defaultFormValue
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Status);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static PicklistAttributeMetadata CreatePicklistAttribute(
        string logicalName, string displayName,
        Dictionary<int, string> options,
        int? defaultFormValue = null,
        string? schemaName = null)
    {
        var optionSet = new OptionSetMetadata();
        foreach (var kvp in options)
            optionSet.Options.Add(new OptionMetadata(CreateLabel(kvp.Value), kvp.Key));
        var attr = new PicklistAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = schemaName ?? ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            OptionSet = optionSet,
            DefaultFormValue = defaultFormValue
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Picklist);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static MultiSelectPicklistAttributeMetadata CreateMultiSelectPicklistAttribute(
        string logicalName, string displayName,
        Dictionary<int, string> options,
        int? defaultFormValue = null)
    {
        var optionSet = new OptionSetMetadata();
        foreach (var kvp in options)
            optionSet.Options.Add(new OptionMetadata(CreateLabel(kvp.Value), kvp.Key));
        var attr = new MultiSelectPicklistAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            OptionSet = optionSet,
            DefaultFormValue = defaultFormValue
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Virtual);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static AttributeMetadata CreatePartyListAttribute(string logicalName, string displayName)
    {
        var attr = new AttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName)
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.PartyList);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static AttributeMetadata CreateEntityNameAttribute(string logicalName, string displayName)
    {
        var attr = new AttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName)
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.EntityName);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForCreate), true);
        SetProperty(attr, nameof(AttributeMetadata.IsValidForUpdate), true);
        return attr;
    }

    private static ImageAttributeMetadata CreateImageAttribute(
        string logicalName, string displayName, bool isPrimary)
    {
        var attr = new ImageAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            IsPrimaryImage = isPrimary
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Virtual);
        return attr;
    }

    private static FileAttributeMetadata CreateFileAttribute(
        string logicalName, string displayName, int? maxSizeInKB = null)
    {
        var attr = new FileAttributeMetadata
        {
            LogicalName = logicalName,
            SchemaName = ToPascalCase(logicalName),
            DisplayName = CreateLabel(displayName),
            MaxSizeInKB = maxSizeInKB
        };
        SetProperty(attr, nameof(AttributeMetadata.AttributeType), AttributeTypeCode.Virtual);
        return attr;
    }

    private static Label CreateLabel(string text, int languageCode = 1033)
    {
        var label = new Label();
        var localizedLabel = new LocalizedLabel(text, languageCode);
        label.UserLocalizedLabel = localizedLabel;
        return label;
    }

    private static string ToPascalCase(string input)
    {
        if (string.IsNullOrEmpty(input)) return input;
        var parts = input.Split('_');
        return string.Join("", parts.Select(p =>
            p.Length == 0 ? "" : char.ToUpper(p[0]) + p.Substring(1)));
    }

    #endregion
}
