using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Tool.Tasks;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
        [TestClass]
    public class TaskDocumentGeneratorTests
    {
        private FakeDataverseService service;
        private string tempDir;

        [TestInitialize]
        public void Setup()
        {
            service = new FakeDataverseService();
            tempDir = Path.Combine(Path.GetTempPath(), "devkit-tool-tests-docgen", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
        }

        [TestCleanup]
        public void Cleanup()
        {
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
        }

        // ────────────────────── time zone resolution ──────────────────────

        [TestMethod]
        public void ResolveTimeZone_PlusHours_ParsesDirectly()
        {
            var offset = InvokeResolve("+7", service);
            Assert.AreEqual(TimeSpan.FromHours(7), offset);
        }

        [TestMethod]
        public void ResolveTimeZone_NegativeHours_ParsesDirectly()
        {
            var offset = InvokeResolve("-6", service);
            Assert.AreEqual(TimeSpan.FromHours(-6), offset);
        }

        [TestMethod]
        public void ResolveTimeZone_PlusPrefixNotNumeric_FallsBackToWhoAmIUser()
        {
            service.ExecuteHandler = request => throw new NotImplementedException("no dataverse");
            var offset = InvokeResolve("+abc", service);
            Assert.AreEqual(TimeSpan.Zero, offset);
        }

        [TestMethod]
        public void ResolveTimeZone_SystemTimeZoneId_UsesBaseOffset()
        {
            var offset = InvokeResolve("SE Asia Standard Time", service);
            Assert.AreEqual(TimeSpan.FromHours(7), offset);
        }

        [TestMethod]
        public void ResolveTimeZone_UnknownId_FallsBackToWhoAmIUser()
        {
            // WhoAmI path throws → TimeSpan.Zero
            service.ExecuteHandler = request => throw new NotImplementedException("no dataverse");
            var offset = InvokeResolve("Not A Real Zone", service);
            Assert.AreEqual(TimeSpan.Zero, offset);
        }

        [TestMethod]
        public void ResolveTimeZone_EmptyInput_UsesWhoAmIUserSettings()
        {
            var userId = Guid.NewGuid();
            service.ExecuteHandler = request =>
                FakeDataverseService.Response<WhoAmIResponse>("UserId", userId);
            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("usersettings", id, ("timezonecode", 7));
            service.RetrieveMultipleHandler = query =>
                FakeDataverseService.Rows(FakeDataverseService.Row("timezonedefinition", Guid.NewGuid(),
                    ("standardname", "SE Asia Standard Time")));
            var offset = InvokeResolve("", service);
            Assert.AreEqual(TimeSpan.FromHours(7), offset);
        }

        [TestMethod]
        public void ResolveTimeZone_UserSettingsNoTimezone_ReturnsZero()
        {
            var userId = Guid.NewGuid();
            service.ExecuteHandler = request =>
                FakeDataverseService.Response<WhoAmIResponse>("UserId", userId);
            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("usersettings", id);
            var offset = InvokeResolve(null, service);
            Assert.AreEqual(TimeSpan.Zero, offset);
        }

        [TestMethod]
        public void ResolveTimeZone_UserSettingsUnknownStandardName_ReturnsZero()
        {
            var userId = Guid.NewGuid();
            service.ExecuteHandler = request =>
                FakeDataverseService.Response<WhoAmIResponse>("UserId", userId);
            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("usersettings", id, ("timezonecode", 42));
            service.RetrieveMultipleHandler = query =>
                FakeDataverseService.Rows(FakeDataverseService.Row("timezonedefinition", Guid.NewGuid(),
                    ("standardname", "No Such Zone")));
            var offset = InvokeResolve(null, service);
            Assert.AreEqual(TimeSpan.Zero, offset);
        }

        [TestMethod]
        public void ResolveTimeZone_UserSettingsEmptyStandardName_ReturnsZero()
        {
            var userId = Guid.NewGuid();
            service.ExecuteHandler = request =>
                FakeDataverseService.Response<WhoAmIResponse>("UserId", userId);
            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("usersettings", id, ("timezonecode", 42));
            service.RetrieveMultipleHandler = query =>
                FakeDataverseService.Rows(FakeDataverseService.Row("timezonedefinition", Guid.NewGuid(),
                    ("standardname", "")));
            var offset = InvokeResolve(null, service);
            Assert.AreEqual(TimeSpan.Zero, offset);
        }

        [TestMethod]
        public void ResolveTimeZone_UserSettingsNoRows_ReturnsZero()
        {
            var userId = Guid.NewGuid();
            service.ExecuteHandler = request =>
                FakeDataverseService.Response<WhoAmIResponse>("UserId", userId);
            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("usersettings", id, ("timezonecode", 42));
            service.RetrieveMultipleHandler = query => FakeDataverseService.Rows();
            var offset = InvokeResolve(null, service);
            Assert.AreEqual(TimeSpan.Zero, offset);
        }

        private static TimeSpan InvokeResolve(string timeZone, FakeDataverseService svc)
        {
            var method = typeof(TaskDocumentGenerator).GetMethod("ResolveTimeZoneOffset",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);
            return (TimeSpan)method.Invoke(null, new object[] { timeZone, svc });
        }

        // ────────────────────── full document generation ──────────────────────

        private const string MainEntity = "new_entity";
        private const string IntersectEntity = "new_intersect";

        [TestMethod]
        public void Run_FullSolution_GeneratesAllMarkdownFiles()
        {
            ConfigureFakeSolution(includeOptionSets: true, formsFail: false, includeServerSideSeed: true);

            var folder = Path.Combine(tempDir, "docs");
            TaskDocumentGenerator.Run(service, folder, "TestSolution", "+7");

            Assert.IsTrue(File.Exists(Path.Combine(folder, $"{MainEntity}.md")));
            Assert.IsFalse(File.Exists(Path.Combine(folder, $"{IntersectEntity}.md")));
            Assert.IsTrue(File.Exists(Path.Combine(folder, "GlobalOptionSet.md")));
            Assert.IsTrue(File.Exists(Path.Combine(folder, "Erd.md")));

            var entityDoc = File.ReadAllText(Path.Combine(folder, $"{MainEntity}.md"));
            StringAssert.Contains(entityDoc, $"# New Entity - new_Entity - {MainEntity}");
            StringAssert.Contains(entityDoc, "## Table of Contents");
            StringAssert.Contains(entityDoc, "|Display Name|**```New Entity```**");
            StringAssert.Contains(entityDoc, ">Main entity description");
            StringAssert.Contains(entityDoc, "## Custom Columns");
            StringAssert.Contains(entityDoc, "## System Columns");
            StringAssert.Contains(entityDoc, "## Calculated & Rollup Fields");
            StringAssert.Contains(entityDoc, "`COUNT(contact.contactid)`");
            StringAssert.Contains(entityDoc, "new_money * new_qty");
            StringAssert.Contains(entityDoc, "*Definition not available*");
            StringAssert.Contains(entityDoc, "## Keys");
            StringAssert.Contains(entityDoc, "### 1-N");
            StringAssert.Contains(entityDoc, "### N-1");
            StringAssert.Contains(entityDoc, "### N-N");
            StringAssert.Contains(entityDoc, "## Forms");
            StringAssert.Contains(entityDoc, "## Views");
            StringAssert.Contains(entityDoc, "### Business Rules");
            StringAssert.Contains(entityDoc, "### Power Fx");
            StringAssert.Contains(entityDoc, "## Server-Side Code");
            StringAssert.Contains(entityDoc, "> From [ServerCode.md](ServerCode.md)");
            StringAssert.Contains(entityDoc, ">Latest field:");
            StringAssert.Contains(entityDoc, ">This file generated by tool");
            StringAssert.Contains(entityDoc, "~~|~~"); // bracket display-name branch

            var globalOptionSetDoc = File.ReadAllText(Path.Combine(folder, "GlobalOptionSet.md"));
            StringAssert.Contains(globalOptionSetDoc, "# new_global_choices");
            StringAssert.Contains(globalOptionSetDoc, "Choice A [100000000]");

            var erdDoc = File.ReadAllText(Path.Combine(folder, "Erd.md"));
            StringAssert.Contains(erdDoc, "Contact *--* new_Entity"); // intersect edge

            var accountDoc = File.ReadAllText(Path.Combine(folder, "account.md"));
            StringAssert.Contains(accountDoc, "> *No N-N relationships*");
        }

        [TestMethod]
        public void Run_SecondTime_UnchangedContent_KeepsLastLine()
        {
            ConfigureFakeSolution(includeOptionSets: false, formsFail: false, includeServerSideSeed: false);
            var folder = Path.Combine(tempDir, "docs2");

            TaskDocumentGenerator.Run(service, folder, "TestSolution", "+7");
            var erd = Path.Combine(folder, "Erd.md");
            var first = File.ReadAllText(erd);

            TaskDocumentGenerator.Run(service, folder, "TestSolution", "+7");
            var second = File.ReadAllText(erd);
            // second run finds identical core content and reuses the stored modified-on line
            Assert.AreEqual(first, second);
        }

        [TestMethod]
        public void Run_MetadataFetchFailures_BestEffortDicts()
        {
            // workflow/systemform/savedquery fetches throw → catch paths return empty dicts
            ConfigureFakeSolution(includeOptionSets: false, formsFail: true, includeServerSideSeed: false);
            var folder = Path.Combine(tempDir, "docs3");
            TaskDocumentGenerator.Run(service, folder, "TestSolution", "+7");
            var entityDoc = File.ReadAllText(Path.Combine(folder, $"{MainEntity}.md"));
            StringAssert.Contains(entityDoc, "> *No forms*");
            StringAssert.Contains(entityDoc, "> *No views*");
            // (power fx columns exist, so the "no business rules" fallback is not expected here)
        }

        [TestMethod]
        public void Run_EntityMissingFromMetadata_SkipsDocument()
        {
            // solution component returns an entity name that has no metadata → CreateDocumentFile early-returns
            service.ExecuteHandler = request =>
            {
                switch (request)
                {
                    case RetrieveAllEntitiesRequest:
                        return FakeDataverseService.Response<RetrieveAllEntitiesResponse>(
                            "EntityMetadata", new EntityMetadata[0]);
                    case WhoAmIRequest:
                        return FakeDataverseService.Response<WhoAmIResponse>("UserId", Guid.NewGuid());
                    default:
                        throw new NotImplementedException(request.RequestName);
                }
            };
            service.RetrieveMultipleHandler = query => FakeDataverseService.Rows();
            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("usersettings", id, ("timezonecode", null));
            var folder = Path.Combine(tempDir, "docs4");
            TaskDocumentGenerator.Run(service, folder, "TestSolution", null);
            Assert.IsTrue(Directory.Exists(folder));
            Assert.IsFalse(File.Exists(Path.Combine(folder, "Erd.md")) == false);
            Assert.IsTrue(File.Exists(Path.Combine(folder, "Erd.md")));
        }

        [TestMethod]
        public void Run_RelativeFolder_MadeFullPath()
        {
            ConfigureFakeSolution(includeOptionSets: false, formsFail: false, includeServerSideSeed: false);
            var workDir = Path.Combine(tempDir, "rel");
            Directory.CreateDirectory(workDir);
            var originalCwd = Directory.GetCurrentDirectory();
            Directory.SetCurrentDirectory(workDir);
            try
            {
                TaskDocumentGenerator.Run(service, "docs", "TestSolution", "+7");
                Assert.IsTrue(File.Exists(Path.Combine(workDir, "docs", $"{MainEntity}.md")));
            }
            finally
            {
                Directory.SetCurrentDirectory(originalCwd);
            }
        }

        // ────────────────────── fake data setup ──────────────────────

        private static Label TextLabel(string text)
        {
            var label = new Label(text, 1033);
            label.UserLocalizedLabel = new LocalizedLabel(text, 1033);
            return label;
        }

        private void ConfigureFakeSolution(bool includeOptionSets, bool formsFail, bool includeServerSideSeed)
        {
            var mainMetadata = BuildMainEntityMetadata(includeOptionSets);
            var intersectMetadata = BuildIntersectMetadata();
            var contactMetadata = BuildOtherEntity("contact", "Contact", "Contacts");
            var accountMetadata = BuildOtherEntity("account", "Account", "Accounts", includeIntersectRel: false);

            service.ExecuteHandler = request =>
            {
                switch (request)
                {
                    case RetrieveAllEntitiesRequest:
                        return FakeDataverseService.Response<RetrieveAllEntitiesResponse>(
                            "EntityMetadata",
                            new EntityMetadata[] { mainMetadata, intersectMetadata, contactMetadata, accountMetadata });
                    case WhoAmIRequest:
                        return FakeDataverseService.Response<WhoAmIResponse>("UserId", Guid.NewGuid());
                    default:
                        throw new NotImplementedException(request.RequestName);
                }
            };

            service.RetrieveHandler = (entityName, id, columnSet) =>
                FakeDataverseService.Row("usersettings", id, ("timezonecode", null));

            service.RetrieveMultipleHandler = query =>
            {
                var fetch = ((FetchExpression)query).Query;
                if (fetch.Contains("componenttype") && fetch.Contains("optionset"))
                    return FakeDataverseService.Rows(
                        OptionSetRow("new_global_choices"),
                        OptionSetRow("new_unused_choices"));
                if (fetch.Contains("solutioncomponent") && fetch.Contains("uniquename"))
                    return FakeDataverseService.Rows(
                        EntityRow(MainEntity),
                        EntityRow(IntersectEntity),
                        EntityRow("contact"),
                        EntityRow("account"),
                        EntityRow("ghost_entity"));
                if (fetch.Contains("workflow"))
                {
                    if (formsFail) throw new Exception("workflow fetch failed");
                    var row = FakeDataverseService.Row("workflow", Guid.NewGuid(),
                        ("primaryentity", MainEntity),
                        ("name", "My Rule"),
                        ("description", "Click to add description"));
                    row.FormattedValues["statuscode"] = "Active";
                    row.FormattedValues["scope"] = "Entity";
                    return FakeDataverseService.Rows(row);
                }
                if (fetch.Contains("systemform"))
                {
                    if (formsFail) throw new Exception("systemform fetch failed");
                    var row = FakeDataverseService.Row("systemform", Guid.NewGuid(),
                        ("objecttypecode", MainEntity),
                        ("name", "Information"),
                        ("description", "Main\r\ndescription"));
                    row.FormattedValues["type"] = "Main";
                    return FakeDataverseService.Rows(row);
                }
                if (fetch.Contains("savedquery"))
                {
                    if (formsFail) throw new Exception("savedquery fetch failed");
                    return FakeDataverseService.Rows(
                        FakeDataverseService.Row("savedquery", Guid.NewGuid(),
                            ("returnedtypecode", MainEntity),
                            ("name", "Active " + MainEntity),
                            ("description", "all records"),
                            ("isdefault", true)),
                        FakeDataverseService.Row("savedquery", Guid.NewGuid(),
                            ("returnedtypecode", "unknown_entity"),
                            ("name", "Should Be Skipped")));
                }
                return FakeDataverseService.Rows();
            };

            if (includeServerSideSeed)
            {
                var seed = Path.Combine(tempDir, "docs", "ServerCode.md");
                Directory.CreateDirectory(Path.GetDirectoryName(seed));
                File.WriteAllText(seed,
                    "## Steps.TestCodeGenPlugin.new_Entity.CreateRecord\r\n" +
                    "some code line\r\n" +
                    "## Steps.Other.Thing\r\n" +
                    "> Target Entity: `new_entity`\r\n" +
                    "update line\r\n" +
                    "---\r\n" +
                    ">Generated by tool\r\n");
            }
        }

        private static Entity EntityRow(string name) =>
            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                ("entity.name", new AliasedValue("entity", "name", name)));

        private static Entity OptionSetRow(string name) =>
            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                ("optionset.name", new AliasedValue("optionset", "name", name)));

        private static EntityMetadata BuildIntersectMetadata()
        {
            var metadata = new EntityMetadata { SchemaName = "new_Contact_new_entity" };
            Set(metadata, "LogicalName", IntersectEntity);
            Set(metadata, "IsIntersect", true);
            Set(metadata, "DisplayName", TextLabel(IntersectEntity));
            Set(metadata, "Description", (Label)null);
            Set(metadata, "CreatedOn", (DateTime?)new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc));
            Set(metadata, "ModifiedOn", (DateTime?)new DateTime(2026, 2, 1, 0, 0, 0, DateTimeKind.Utc));
            Set(metadata, "Attributes", Array.Empty<AttributeMetadata>());
            Set(metadata, "Keys", Array.Empty<EntityKeyMetadata>());
            Set(metadata, "ManyToManyRelationships", Array.Empty<ManyToManyRelationshipMetadata>());
            Set(metadata, "ManyToOneRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            Set(metadata, "OneToManyRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            return metadata;
        }

        private static EntityMetadata BuildOtherEntity(string logicalName, string schema, string plural, bool includeIntersectRel = true)
        {
            var metadata = new EntityMetadata { SchemaName = schema };
            Set(metadata, "LogicalName", logicalName);
            Set(metadata, "DisplayName", TextLabel(schema));
            Set(metadata, "Description", (Label)null);
            Set(metadata, "CreatedOn", (DateTime?)new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc));
            Set(metadata, "ModifiedOn", (DateTime?)new DateTime(2026, 2, 1, 0, 0, 0, DateTimeKind.Utc));
            var plainAttribute = new StringAttributeMetadata { LogicalName = "firstname", SchemaName = "firstname" };
            Common(plainAttribute);
            Set(metadata, "Attributes", new AttributeMetadata[] { plainAttribute });
            var intersectRel = new ManyToManyRelationshipMetadata
            {
                SchemaName = "new_contact_new_entity",
                Entity1LogicalName = "contact",
                Entity2LogicalName = MainEntity,
                Entity1IntersectAttribute = "contactid",
                Entity2IntersectAttribute = "new_entityid",
                IntersectEntityName = IntersectEntity
            };
            Set(metadata, "ManyToManyRelationships", includeIntersectRel
                ? new[] { intersectRel }
                : Array.Empty<ManyToManyRelationshipMetadata>());
            Set(metadata, "Keys", Array.Empty<EntityKeyMetadata>());
            Set(metadata, "ManyToOneRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            Set(metadata, "OneToManyRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            return metadata;
        }

        private static EntityMetadata BuildMainEntityMetadata(bool includeOptionSets)
        {
            var longName = "new_very_long_attribute_name_exceeding_twenty_five";
            var attributes = new List<AttributeMetadata>
            {
                // primary id + primary name (FormatColumnRow special branches)
                PrimaryLookup("new_entityid"),
                PrimaryAttr<StringAttributeMetadata>("new_name", isPrimaryName: true, maxLength: 850),
                // custom column + custom money _base
                MakeCustom("new_customfield"),
                MakeCustom("new_money_base"),
                // lookup with targets (GetAttributeType lookup branch + EntityWikiLink)
                Lookup("new_lookup", new[] { "contact", "ghost_entity", "account" }),
                // lookup whose logical name matches the N-1 relationship referencing attribute (Erd edge)
                Lookup("new_contactid", new[] { "contact" }),
                // state/status/picklists
                State("statecode"),
                Status("statuscode"),
                LocalPicklist("new_localpicklist"),
                MultiSelect("new_localmultiselect", isGlobal: false, inSolution: false),
                MultiSelect("new_global_multiselect", isGlobal: true, inSolution: true),
                MultiSelect("new_unused_global", isGlobal: true, inSolution: false),
                // date-only + datetime
                MakeDateTime("new_dateonly", DateTimeBehavior.DateOnly),
                MakeDateTime("new_datetime", null),
                // long names/descriptions
                LongDescription("new_longdesc"),
                PrimaryNameLong(longName),
                // calculated + rollup (FormulaDefinition must contain "<?xml" to be parsed)
                Calculated("new_calc_multiply",
                    "<?xml GetEntityProperty Attribute=\"new_money\" Entity=\"[InputEntities(&quot;acc&quot;" +
                    "GetEntityProperty Attribute=\"new_qty\" Entity=\"[InputEntities(&quot;acc&quot;\"" +
                    "ExpressionOperator\">Multiply< </xml>", sourceType: 1),
                Calculated("new_calc_single", "<?xml GetEntityProperty Attribute=\"singlefield\" Entity=\"[InputEntities(&quot;acc&quot;</xml>", sourceType: 1),
                Calculated("new_calc_constants", "<?xml WorkflowPropertyType.Decimal, \"10\"</xml>", sourceType: 1),
                Calculated("new_calc_boolconst", "<?xml WorkflowPropertyType.Boolean, \"true\"</xml>", sourceType: 1),
                Calculated("new_calc_none", "<?xml nothing here</xml>", sourceType: 1),
                Calculated("new_calc_null", null, sourceType: 1),
                Calculated("new_calc_related", "<?xml GetEntityProperty Attribute=\"a\" Entity=\"[InputEntities(&quot;related_account#account_lookup&quot;</xml>", sourceType: 1),
                Rollup("new_rollup_full",
                    "<?xml ExpressionOperator\">Count< DisplayName=\"account.name\" Entity=\"[CreatedEntities\"" +
                    "Aggregate GetEntityProperty Attribute=\"contactid\" EntityName=\"contact\"</xml>", sourceType: 2),
                Rollup("new_rollup_noattr", "<?xml ExpressionOperator\">Sum< DisplayName=\"account.name\" Entity=\"[CreatedEntities\"</xml>", sourceType: 2),
                Rollup("new_rollup_notarget", "<?xml ExpressionOperator\">Count<</xml>", sourceType: 2),
                Rollup("new_rollup_nullok", null, sourceType: 2),
                Calculated("new_calc_ops",
                    "<?xml GetEntityProperty Attribute=\"new_a\" Entity=\"[InputEntities(&quot;acc&quot;\"" +
                    "GetEntityProperty Attribute=\"new_b\" Entity=\"[InputEntities(&quot;acc&quot;\"" +
                    "GetEntityProperty Attribute=\"new_c\" Entity=\"[InputEntities(&quot;acc&quot;\"" +
                    "GetEntityProperty Attribute=\"new_d\" Entity=\"[InputEntities(&quot;acc&quot;\"" +
                    "ExpressionOperator\">Add< ExpressionOperator\">Subtract< ExpressionOperator\">Divide< </xml>", sourceType: 1),
                // power fx
                Calculated("new_powerfx", "Sum(This.Item.Value)", sourceType: 3),
                // unknown source type → Simple fallback in GetSourceType
                OtherSourceType("new_sourceother"),
                // non-string fallback in GetAttributeType
                SimpleInt("new_int"),
                // display name with brackets → FormatColumnRow ~ branch
                BracketsLabel("new_brackets"),
                // filtered out
                IgnoreAttr("createdon"),
                RollupSuffix("new_x_rollup_date"),
                AttributeOf("new_shadow", "new_name"),
                // simple bool
                SimpleBool("new_isactive")
            };
            if (includeOptionSets)
                attributes.Add(GlobalPicklist("new_global_choices", inSolution: true));

            var metadata = new EntityMetadata { SchemaName = "new_Entity" };
            Set(metadata, "LogicalName", MainEntity);
            Set(metadata, "DisplayName", TextLabel("New Entity"));
            Set(metadata, "DisplayCollectionName", TextLabel("New Entities"));
            Set(metadata, "Description", TextLabel("Main entity description"));
            Set(metadata, "CreatedOn", (DateTime?)new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc));
            Set(metadata, "ModifiedOn", (DateTime?)new DateTime(2026, 2, 1, 0, 0, 0, DateTimeKind.Utc));
            Set(metadata, "Attributes", attributes.ToArray());
            Set(metadata, "IsCustomEntity", true);
            Set(metadata, "IsIntersect", false);
            Set(metadata, "TableType", "Standard");
            Set(metadata, "DataProviderId", (Guid?)null);
            Set(metadata, "OwnershipType", OwnershipTypes.UserOwned);

            var key = new EntityKeyMetadata
            {
                DisplayName = TextLabel("My Key"),
                KeyAttributes = new[] { "new_name", "new_customfield" }
            };
            Set(key, "LogicalName", "new_mykey");
            Set(key, "EntityKeyIndexStatus", EntityKeyIndexStatus.Active);
            Set(metadata, "Keys", new[] { key });

            Set(metadata, "OneToManyRelationships", new[]
            {
                Rel1N("new_entity_account", "account", "accountid", "new_accountid"),
                Rel1N("new_entity_annotation", "annotation", "annotationid", "objectid") // blacklisted
            });
            Set(metadata, "ManyToOneRelationships", new[]
            {
                Rel1N("new_entity_contact", MainEntity, "contactid", "new_contactid"),
                Rel1N("new_entity_chat", MainEntity, "chatid", "new_chatid") // blacklisted
            });
            Set(metadata, "ManyToManyRelationships", new[]
            {
                RelNN("new_entity_lead", "lead", "leadid", "new_leadid"),
                RelNN("new_entity_fax", "fax", "faxid", "new_faxid") // blacklisted
            });
            return metadata;
        }

        // ───────── metadata builders ─────────

        private static void Set(object target, string name, object value)
        {
            var property = target.GetType().GetProperty(name);
            var setter = property?.GetSetMethod(true);
            if (setter != null)
            {
                setter.Invoke(target, new[] { value });
                return;
            }
            var field = target.GetType().GetField($"_{char.ToLowerInvariant(name[0])}{name.Substring(1)}",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance)
                ?? target.GetType().GetField($"<{name}>k__BackingField",
                    System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            field.SetValue(target, value);
        }

        private static T PrimaryAttr<T>(string logicalName, bool isPrimaryId = false, bool isPrimaryName = false, int? maxLength = null)
            where T : AttributeMetadata, new()
        {
            var attr = new T { LogicalName = logicalName, SchemaName = logicalName };
            if (maxLength.HasValue && attr is StringAttributeMetadata s) s.MaxLength = maxLength;
            Set(attr, "IsPrimaryId", isPrimaryId);
            Set(attr, "IsPrimaryName", isPrimaryName);
            Common(attr);
            return attr;
        }

        private static LookupAttributeMetadata PrimaryLookup(string logicalName)
        {
            var attr = new LookupAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = logicalName,
                Targets = new[] { "contact" }
            };
            Set(attr, "IsPrimaryId", true);
            Common(attr);
            return attr;
        }

        private static void Common(AttributeMetadata attr)
        {
            Set(attr, "IsCustomAttribute", false);
            Set(attr, "IsSearchable", true);
            Set(attr, "IsAuditEnabled", new BooleanManagedProperty(true));
            Set(attr, "RequiredLevel", new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired));
            Set(attr, "ModifiedOn", (DateTime?)new DateTime(2026, 3, 1, 0, 0, 0, DateTimeKind.Utc));
            Set(attr, "CreatedOn", (DateTime?)new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc));
            Set(attr, "DisplayName", TextLabel(attr.LogicalName));
        }

        private static StringAttributeMetadata MakeCustom(string logicalName)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Common(attr);
            Set(attr, "IsCustomAttribute", true);
            Set(attr, "Description", TextLabel("custom description"));
            return attr;
        }

        private static StringAttributeMetadata BracketsLabel(string logicalName)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Common(attr);
            Set(attr, "DisplayName", TextLabel("Note [special]"));
            return attr;
        }

        private static StringAttributeMetadata LongDescription(string logicalName)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Set(attr, "Description", TextLabel(new string('x', 130)));
            Common(attr);
            return attr;
        }

        private static StringAttributeMetadata PrimaryNameLong(string logicalName)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Set(attr, "IsPrimaryName", true);
            Common(attr);
            return attr;
        }

        private static StringAttributeMetadata IgnoreAttr(string logicalName)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Common(attr);
            return attr;
        }

        private static StringAttributeMetadata RollupSuffix(string logicalName)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Common(attr);
            return attr;
        }

        private static StringAttributeMetadata AttributeOf(string logicalName, string of)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Set(attr, "AttributeOf", of);
            Common(attr);
            return attr;
        }

        private static StringAttributeMetadata SimpleBool(string logicalName)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Set(attr, "AttributeType", AttributeTypeCode.Boolean);
            Common(attr);
            return attr;
        }

        private static IntegerAttributeMetadata SimpleInt(string logicalName)
        {
            var attr = new IntegerAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Common(attr);
            return attr;
        }

        private static StringAttributeMetadata OtherSourceType(string logicalName)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            Set(attr, "SourceType", (int?)5);
            Common(attr);
            return attr;
        }

        private static LookupAttributeMetadata Lookup(string logicalName, string[] targets)
        {
            var attr = new LookupAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName, Targets = targets };
            Common(attr);
            return attr;
        }

        private static StateAttributeMetadata State(string logicalName)
        {
            var optionSet = new OptionSetMetadata(new OptionMetadataCollection(new[]
            {
                FakeDataverseService.Option(0, "Active"),
                FakeDataverseService.Option(1, "Inactive")
            }));
            var attr = new StateAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = logicalName
            };
            Set(attr, "OptionSet", optionSet);
            Common(attr);
            return attr;
        }

        private static StatusAttributeMetadata Status(string logicalName)
        {
            var optionSet = new OptionSetMetadata(new OptionMetadataCollection(new[]
            {
                FakeDataverseService.Option(1, "Open"),
                FakeDataverseService.Option(2, "Closed")
            }));
            var attr = new StatusAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = logicalName
            };
            Set(attr, "OptionSet", optionSet);
            Common(attr);
            return attr;
        }

        private static PicklistAttributeMetadata LocalPicklist(string logicalName)
        {
            var attr = new PicklistAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = logicalName,
                OptionSet = MakeOptionSet(
                    FakeDataverseService.Option(1, "One"),
                    FakeDataverseService.Option(2, "Two")
                )
            };
            Set(attr, "OptionSet", attr.OptionSet);
            Common(attr);
            return attr;
        }

        private static PicklistAttributeMetadata GlobalPicklist(string logicalName, bool inSolution)
        {
            var attr = new PicklistAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = logicalName,
                OptionSet = MakeOptionSet(
                    FakeDataverseService.Option(100000000, "Choice A")
                )
            };
            Set(attr, "OptionSet", attr.OptionSet);
            Set(attr.OptionSet, "IsGlobal", true);
            Set(attr.OptionSet, "Name", logicalName);
            Common(attr);
            return attr;
        }

        private static MultiSelectPicklistAttributeMetadata MultiSelect(string logicalName, bool isGlobal, bool inSolution)
        {
            var attr = new MultiSelectPicklistAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = logicalName,
                OptionSet = MakeOptionSet(
                    FakeDataverseService.Option(1, "Tag")
                )
            };
            Set(attr.OptionSet, "IsGlobal", isGlobal);
            Set(attr.OptionSet, "Name", isGlobal && inSolution ? "new_global_choices" : logicalName);
            Common(attr);
            return attr;
        }

        private static DateTimeAttributeMetadata MakeDateTime(string logicalName, DateTimeBehavior behavior)
        {
            var attr = new DateTimeAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            if (behavior != null) Set(attr, "DateTimeBehavior", behavior);
            Common(attr);
            return attr;
        }

        private static StringAttributeMetadata Calculated(string logicalName, string formula, int sourceType)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName, FormulaDefinition = formula };
            Set(attr, "SourceType", (int?)sourceType);
            Common(attr);
            return attr;
        }

        private static StringAttributeMetadata Rollup(string logicalName, string formula, int sourceType)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName, FormulaDefinition = formula };
            Set(attr, "SourceType", (int?)sourceType);
            Common(attr);
            return attr;
        }

        private static OneToManyRelationshipMetadata Rel1N(string schemaName, string referencedEntity,
            string referencedAttribute, string referencingAttribute)
        {
            var rel = new OneToManyRelationshipMetadata
            {
                SchemaName = schemaName,
                ReferencedEntity = referencedEntity,
                ReferencedAttribute = referencedAttribute,
                ReferencingAttribute = referencingAttribute
            };
            Set(rel, "ReferencingEntity", MainEntity);
            return rel;
        }

        private static ManyToManyRelationshipMetadata RelNN(string schemaName, string otherEntity,
            string otherAttribute, string thisAttribute)
        {
            var rel = new ManyToManyRelationshipMetadata
            {
                SchemaName = schemaName,
                Entity1LogicalName = MainEntity,
                Entity1IntersectAttribute = thisAttribute,
                Entity2LogicalName = otherEntity,
                Entity2IntersectAttribute = otherAttribute,
                IntersectEntityName = "new_" + schemaName
            };
            return rel;
        }

        private static OptionSetMetadata MakeOptionSet(params OptionMetadata[] options)
        {
            var optionSet = new OptionSetMetadata();
            Set(optionSet, "Options", new OptionMetadataCollection(options));
            return optionSet;
        }
    }
}
