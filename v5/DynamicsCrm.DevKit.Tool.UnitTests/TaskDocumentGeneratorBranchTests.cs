using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Tool;
using DynamicsCrm.DevKit.Tool.Tasks;
using DynamicsCrm.DevKit.Tool.Lib;
using DynamicsCrm.DevKit.Tool.UnitTests.TestInfrastructure;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Identity.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    /// <summary>
    /// Covers the remaining branches of TaskDocumentGenerator helpers (ERD
    /// appenders, formula parsing, column formatting, attribute typing, and the
    /// best-effort forms/views/business-rules fetchers) plus the last builder
    /// stragglers, all offline.
    /// </summary>
    [DoNotParallelize]
    [TestClass]
    public class TaskDocumentGeneratorBranchTests
    {
        private const string TenantId = "11111111-1111-1111-1111-111111111111";

        private object generator;
        private Type generatorType;

        [TestInitialize]
        public void SetUp()
        {
            generator = Activator.CreateInstance(typeof(TaskDocumentGenerator));
            generatorType = generator.GetType();
        }

        private void SetField(string name, object value)
        {
            generatorType.GetField(name, BindingFlags.Instance | BindingFlags.NonPublic)
                .SetValue(generator, value);
        }

        private object Invoke(string method, params object[] args)
        {
            return generatorType
                .GetMethods(BindingFlags.Instance | BindingFlags.Static | BindingFlags.NonPublic | BindingFlags.Public)
                .Single(candidate => candidate.Name == method && candidate.GetParameters().Length == args.Length)
                .Invoke(generator, args);
        }

        private static EntityMetadata MakeEntity(string logicalName, string schemaName, params AttributeMetadata[] attributes)
        {
            var metadata = new EntityMetadata
            {
                SchemaName = schemaName,
                DisplayName = new Label(schemaName, 1033),
                DisplayCollectionName = new Label(schemaName + "s", 1033),
                Description = new Label(schemaName + " description", 1033)
            };
            MetadataExtensionsTests.SetProp(metadata, "LogicalName", logicalName);
            MetadataExtensionsTests.SetProp(metadata, "PrimaryIdAttribute", logicalName + "id");
            MetadataExtensionsTests.SetProp(metadata, "PrimaryNameAttribute", "name");
            MetadataExtensionsTests.SetProp(metadata, "Attributes", attributes);
            MetadataExtensionsTests.SetProp(metadata, "ManyToOneRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "OneToManyRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "ManyToManyRelationships", Array.Empty<ManyToManyRelationshipMetadata>());
            return metadata;
        }

        private static LookupAttributeMetadata MakeLookup(string logicalName, string schemaName, params string[] targets)
        {
            return new LookupAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = schemaName,
                DisplayName = new Label(schemaName, 1033),
                Targets = targets,
                IsSearchable = true,
                IsAuditEnabled = new BooleanManagedProperty(true),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None)
            };
        }

        private static PicklistAttributeMetadata MakePicklist(string logicalName, string schemaName, bool global, string optionSetName)
        {
            return new PicklistAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = schemaName,
                DisplayName = new Label(schemaName, 1033),
                OptionSet = new OptionSetMetadata
                {
                    IsGlobal = global,
                    Name = optionSetName,
                    Options = { FakeDataverseService.Option(1, "Option A") }
                },
                IsSearchable = true,
                IsAuditEnabled = new BooleanManagedProperty(true),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None)
            };
        }

        private static MultiSelectPicklistAttributeMetadata MakeMultiSelect(string logicalName, string schemaName, bool global, string optionSetName)
        {
            return new MultiSelectPicklistAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = schemaName,
                DisplayName = new Label(schemaName, 1033),
                OptionSet = new OptionSetMetadata
                {
                    IsGlobal = global,
                    Name = optionSetName,
                    Options = { FakeDataverseService.Option(1, "Option A") }
                },
                IsSearchable = true,
                IsAuditEnabled = new BooleanManagedProperty(true),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None)
            };
        }

        #region ERD helpers

        [TestMethod]
        public void ErdHelpers_Skip_Ignored_Lookup_Attributes()
        {
            var metadata = MakeEntity("account", "Account",
                MakeLookup("createdon", "CreatedOn", "systemuser"),
                MakeLookup("ownerid", "OwnerId", "systemuser"),
                MakeLookup("primarycontactid", "PrimaryContactId", "contact"));
            MetadataExtensionsTests.SetProp(metadata, "ManyToOneRelationships", new[]
            {
                new OneToManyRelationshipMetadata
                {
                    SchemaName = "contact_customer_accounts",
                    ReferencingEntity = "account",
                    ReferencedEntity = "contact",
                    ReferencingAttribute = "primarycontactid",
                    ReferencedAttribute = "contactid"
                },
                new OneToManyRelationshipMetadata
                {
                    SchemaName = "account_createdon",
                    ReferencingEntity = "account",
                    ReferencedEntity = "systemuser",
                    ReferencingAttribute = "createdon",
                    ReferencedAttribute = "systemuserid"
                }
            });

            var sb = new StringBuilder();
            Invoke("AppendErdClassDef", sb, metadata);
            var text = sb.ToString();
            StringAssert.Contains(text, "+Lookup: primarycontactid");
            Assert.IsFalse(text.Contains("+Lookup: createdon"), "ignoreAttributes lookups are skipped.");
            Assert.IsFalse(text.Contains("+Lookup: ownerid"), "ignoreAttributes2 lookups are skipped.");

            var schemas = (HashSet<string>)Invoke("CollectLookupSchemaNames", metadata);
            Assert.AreEqual(1, schemas.Count);
            Assert.IsTrue(schemas.Contains("contact_customer_accounts"));
        }

        [TestMethod]
        public void AppendErdEdges_Skips_Blacklist_And_Unknown_References()
        {
            var account = MakeEntity("account", "Account", MakeLookup("primarycontactid", "PrimaryContactId", "contact"));
            var contact = MakeEntity("contact", "Contact");
            var metadataDict = new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase)
            {
                ["account"] = account,
                ["contact"] = contact
            };

            var blacklisted = new OneToManyRelationshipMetadata
            {
                SchemaName = "account_workflow",
                ReferencingEntity = "syncerror",
                ReferencedEntity = "account",
                ReferencingAttribute = "workflowid",
                ReferencedAttribute = "accountid"
            };
            var known = new OneToManyRelationshipMetadata
            {
                SchemaName = "contact_customer_accounts",
                ReferencingEntity = "account",
                ReferencedEntity = "contact",
                ReferencingAttribute = "primarycontactid",
                ReferencedAttribute = "contactid"
            };
            var unknownTarget = new OneToManyRelationshipMetadata
            {
                SchemaName = "account_missing",
                ReferencingEntity = "account",
                ReferencedEntity = "missingentity",
                ReferencingAttribute = "primarycontactid",
                ReferencedAttribute = "missingid"
            };
            MetadataExtensionsTests.SetProp(account, "ManyToOneRelationships", new[] { blacklisted, known, unknownTarget });

            var lookupSchemas = new HashSet<string>(StringComparer.OrdinalIgnoreCase) { "contact_customer_accounts", "account_workflow", "account_missing" };
            var edgeTracker = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            var sb = new StringBuilder();
            Invoke("AppendErdEdges", sb, account, "Account", metadataDict, lookupSchemas, edgeTracker);

            var text = sb.ToString();
            StringAssert.Contains(text, "Account --* Contact");
            Assert.IsFalse(text.Contains("MissingEntity"), "edges to entities outside the metadata dict are skipped.");
        }

        [TestMethod]
        public void DocumentErd_Covers_Intersect_Entities()
        {
            var account = MakeEntity("account", "Account");
            var contact = MakeEntity("contact", "Contact");
            var intersect = MakeEntity("accountcontacts", "AccountContacts");
            MetadataExtensionsTests.SetProp(intersect, "IsIntersect", true);

            MetadataExtensionsTests.SetProp(contact, "ManyToManyRelationships", new[]
            {
                new ManyToManyRelationshipMetadata
                {
                    IntersectEntityName = "accountcontacts",
                    Entity1LogicalName = "account",
                    Entity2LogicalName = "contact",
                    SchemaName = "accountcontacts_association"
                }
            });

            SetField("metadataDict", new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase)
            {
                ["account"] = account,
                ["contact"] = contact,
                ["accountcontacts"] = intersect
            });
            SetField("entities", new List<string> { "account", "contact", "accountcontacts" });

            var file = Path.Combine(Path.GetTempPath(), "erd-" + Guid.NewGuid().ToString("N") + ".md");
            try
            {
                Invoke("DocumentErd", file, new[] { account, contact, intersect });
                var text = File.ReadAllText(file);
                StringAssert.Contains(text, "Account *--* Contact");
            }
            finally
            {
                if (File.Exists(file)) File.Delete(file);
            }
        }

        #endregion

        #region Formula / description helpers

        [TestMethod]
        public void ParseFormulaXml_Covers_Aggregate_And_General_Shapes()
        {
            var aggregate = @"<Attribute DisplayName=""related_contact.fullname"" Entity=""[CreatedEntities(related_contact)]"">
                <Aggregate foo ExpressionOperator"">Sum< bar>
                    <GetEntityProperty Attribute=""fullname"" EntityName=""contact"" />
                </Aggregate>";
            Assert.AreEqual("SUM(contact.fullname)", Invoke("ParseFormulaXml", aggregate, 2));

            var aggregateNoEntity = @"<Aggregate foo ExpressionOperator"">Count< bar>
                <GetEntityProperty Attribute=""name"" EntityName=""account"" />";
            Assert.AreEqual("COUNT(account.name)", Invoke("ParseFormulaXml", aggregateNoEntity, 2));

            var related = @"<GetEntityProperty Attribute=""fullname"" Entity=""[InputEntities(&quot;related_primarycontactid#contact&quot;)]"" />";
            Assert.AreEqual("contact(primarycontactid).fullname", Invoke("ParseFormulaXml", related, 0));

            var singleField = @"<GetEntityProperty Attribute=""revenue"" Entity=""[InputEntities(&quot;this&quot;)]"" />";
            Assert.AreEqual("revenue", Invoke("ParseFormulaXml", singleField, 0));

            var operators = @"
                <WorkflowPropertyType.String, ""10"" />
                <GetEntityProperty Attribute=""revenue"" Entity=""[InputEntities(&quot;this&quot;)]"" />
                <Multiply op ExpressionOperator"">Multiply<"" />
                <GetEntityProperty Attribute=""numberofemployees"" Entity=""[InputEntities(&quot;this&quot;)]"" />
                <Add op ExpressionOperator"">Add<"" />
                <GetEntityProperty Attribute=""address1_addresstypecode"" Entity=""[InputEntities(&quot;this&quot;)]"" />";
            Assert.AreEqual("10 * revenue + numberofemployees", Invoke("ParseFormulaXml", operators, 0));

            Assert.AreEqual("constant", Invoke("ParseFormulaXml", @"<WorkflowPropertyType.String, ""constant"" />", 0));
            Assert.AreEqual("See Dataverse UI", Invoke("ParseFormulaXml", "<nothing />", 0));
        }

        [TestMethod]
        public void SanitizeDescription_Blanks_Placeholders_And_Real_Text()
        {
            Assert.AreEqual(string.Empty, Invoke("SanitizeDescription", (string)null));
            Assert.AreEqual(string.Empty, Invoke("SanitizeDescription", "   "));
            Assert.AreEqual(string.Empty, Invoke("SanitizeDescription", "Click to add description"));
            Assert.AreEqual("real", Invoke("SanitizeDescription", "  real  "));
        }

        #endregion

        #region Column formatting and attribute typing

        private static StringAttributeMetadata MakeString(string logicalName, string schemaName, string label = null)
        {
            var attribute = new StringAttributeMetadata
            {
                LogicalName = logicalName,
                SchemaName = schemaName,
                IsSearchable = true,
                IsAuditEnabled = new BooleanManagedProperty(true),
                RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None)
            };
            if (label != null) attribute.DisplayName = new Label(label, 1033);
            return attribute;
        }

        [TestMethod]
        public void FormatColumnRow_Covers_Primary_And_Bracketed_Labels()
        {
            var plain = MakeString("name", "Name");
            MetadataExtensionsTests.SetProp(plain, "AttributeType", Microsoft.Xrm.Sdk.Metadata.AttributeTypeCode.String);
            var plainLine = (string)Invoke("FormatColumnRow", plain, 1);
            Assert.IsFalse(plainLine.Contains("**"), "plain rows carry no primary markers.");

            var primaryName = MakeString("name", "Name");
            MetadataExtensionsTests.SetProp(primaryName, "IsPrimaryName", true);
            var nameLine = (string)Invoke("FormatColumnRow", primaryName, 1);
            StringAssert.Contains(nameLine, "primary name");

            var primaryId = MakeString("accountid", "AccountId");
            MetadataExtensionsTests.SetProp(primaryId, "IsPrimaryId", true);
            var idLine = (string)Invoke("FormatColumnRow", primaryId, 1);
            StringAssert.Contains(idLine, "primary id");

            var both = MakeString("name", "Name");
            MetadataExtensionsTests.SetProp(both, "IsPrimaryName", true);
            MetadataExtensionsTests.SetProp(both, "IsPrimaryId", true);
            Assert.IsNotNull((string)Invoke("FormatColumnRow", both, 1));
            SetField("metadataDict", new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase));
            SetField("entities", new List<string>());
            var bracketed = MakeString("title", "Title");
            var bracketLabel = new Label();
            bracketLabel.LocalizedLabels.Add(new LocalizedLabel("Ti[t]le", 1033));
            bracketLabel.UserLocalizedLabel = bracketLabel.LocalizedLabels[0];
            MetadataExtensionsTests.SetProp(bracketed, "DisplayName", bracketLabel);
            var bracketLine = (string)Invoke("FormatColumnRow", bracketed, 1);
            StringAssert.Contains(bracketLine, "~~|~~");

            var openBracket = MakeString("title", "Title");
            var openLabel = new Label();
            openLabel.LocalizedLabels.Add(new LocalizedLabel("Ti[tle", 1033));
            openLabel.UserLocalizedLabel = openLabel.LocalizedLabels[0];
            MetadataExtensionsTests.SetProp(openBracket, "DisplayName", openLabel);
            Assert.IsNotNull((string)Invoke("FormatColumnRow", openBracket, 1));

            var noBracket = MakeString("title", "Title");
            var plainLabel = new Label();
            plainLabel.LocalizedLabels.Add(new LocalizedLabel("Plain Title", 1033));
            plainLabel.UserLocalizedLabel = plainLabel.LocalizedLabels[0];
            MetadataExtensionsTests.SetProp(noBracket, "DisplayName", plainLabel);
            var plainLabelLine = (string)Invoke("FormatColumnRow", noBracket, 1);
            Assert.IsFalse(plainLabelLine.Contains("~~"), "labels without brackets stay unescaped.");

            // display name present but no user-localized label (?. short-circuits to null)
            var noUll = MakeString("title", "Title");
            var bareLabel = new Label();
            bareLabel.LocalizedLabels.Add(new LocalizedLabel("Bare Label", 1033));
            MetadataExtensionsTests.SetProp(noUll, "DisplayName", bareLabel);
            Assert.IsNotNull((string)Invoke("FormatColumnRow", noUll, 1));
        }

        [TestMethod]
        public void GetAttributeType_Covers_NonSpecial_And_Special_Types()
        {
            SetField("metadataDict", new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase));
            SetField("entities", new List<string>());

            var plain = MakeString("name", "Name");
            MetadataExtensionsTests.SetProp(plain, "AttributeType", Microsoft.Xrm.Sdk.Metadata.AttributeTypeCode.String);
            var plainValue = (string)Invoke("GetAttributeType", plain);
            Assert.IsNotNull(plainValue);

            var lookup = MakeLookup("primarycontactid", "PrimaryContactId", "contact");
            MetadataExtensionsTests.SetProp(lookup, "AttributeType", Microsoft.Xrm.Sdk.Metadata.AttributeTypeCode.Lookup);
            var lookupValue = (string)Invoke("GetAttributeType", lookup);
            StringAssert.Contains(lookupValue, "contact");

            var state = new StateAttributeMetadata
            {
                LogicalName = "statecode",
                SchemaName = "StateCode"
            };
            MetadataExtensionsTests.SetProp(state, "AttributeType", Microsoft.Xrm.Sdk.Metadata.AttributeTypeCode.State);
            MetadataExtensionsTests.SetProp(state, "OptionSet", new OptionSetMetadata(new OptionMetadataCollection(new[]
            {
                FakeDataverseService.Option(0, "Active")
            })));
            var stateValue = (string)Invoke("GetAttributeType", state);
            StringAssert.Contains(stateValue, "Active [0]");

            var status = new StatusAttributeMetadata
            {
                LogicalName = "statuscode",
                SchemaName = "StatusCode"
            };
            MetadataExtensionsTests.SetProp(status, "AttributeType", Microsoft.Xrm.Sdk.Metadata.AttributeTypeCode.Status);
            MetadataExtensionsTests.SetProp(status, "OptionSet", new OptionSetMetadata(new OptionMetadataCollection(new[]
            {
                FakeDataverseService.Option(1, "Open")
            })));
            var statusValue = (string)Invoke("GetAttributeType", status);
            StringAssert.Contains(statusValue, "Open [1]");

            var localPicklist = MakePicklist("priority", "Priority", global: false, optionSetName: "priorityset");
            MetadataExtensionsTests.SetProp(localPicklist, "AttributeType", Microsoft.Xrm.Sdk.Metadata.AttributeTypeCode.Picklist);
            var localValue = (string)Invoke("GetAttributeType", localPicklist);
            StringAssert.Contains(localValue, "Option A");

            var globalPicklist = MakePicklist("priority", "Priority", global: true, optionSetName: "priorityset");
            MetadataExtensionsTests.SetProp(globalPicklist, "AttributeType", Microsoft.Xrm.Sdk.Metadata.AttributeTypeCode.Picklist);
            SetField("GlobalOptionSetNames", new HashSet<string>(StringComparer.OrdinalIgnoreCase) { "priorityset" });
            var globalValue = (string)Invoke("GetAttributeType", globalPicklist);
            StringAssert.Contains(globalValue, "GlobalOptionSet.md");
            SetField("GlobalOptionSetNames", new HashSet<string>(StringComparer.OrdinalIgnoreCase));
        }

        #endregion

        #region Global option set collection

        [TestMethod]
        public void AddGlobalOptionSets_Covers_All_Membership_Combos()
        {
            SetField("SolutionOptionSets", new HashSet<string>(StringComparer.OrdinalIgnoreCase) { "in-solution", "in-solution-2" });
            SetField("GlobalOptionSetNames", new HashSet<string>(StringComparer.OrdinalIgnoreCase) { "already-added" });
            SetField("GlobalOptionSet", new List<EnumAttributeMetadata>());

            Invoke("AddGlobalOptionSets", MakePicklist("a", "A", global: true, optionSetName: "in-solution"));
            Invoke("AddGlobalOptionSets", MakePicklist("b", "B", global: true, optionSetName: "already-added"));
            Invoke("AddGlobalOptionSets", MakePicklist("c", "C", global: true, optionSetName: "not-in-solution"));
            Invoke("AddGlobalOptionSets", MakePicklist("d", "D", global: false, optionSetName: "local"));

            Invoke("AddGlobalOptionSets", MakeMultiSelect("e", "E", global: true, optionSetName: "in-solution-2"));
            Invoke("AddGlobalOptionSets", MakeMultiSelect("f", "F", global: true, optionSetName: "already-added"));
            Invoke("AddGlobalOptionSets", MakeMultiSelect("g", "G", global: true, optionSetName: "not-in-solution"));
            Invoke("AddGlobalOptionSets", MakeMultiSelect("h", "H", global: false, optionSetName: "local"));

            Invoke("AddGlobalOptionSets", MakeString("i", "I"));

            var collected = (List<EnumAttributeMetadata>)generatorType
                .GetField("GlobalOptionSet", BindingFlags.Instance | BindingFlags.NonPublic)
                .GetValue(generator);
            Assert.AreEqual(2, collected.Count, "only in-solution global picklists join the global list.");
        }

        #endregion

        #region Best-effort fetchers with crafted rows

        private static Entity Row(string entityName, params (string attribute, object value)[] fields)
        {
            var row = new Entity(entityName);
            foreach (var (attribute, value) in fields)
            {
                if (value is AliasedValue aliased) row[attribute] = aliased;
                else row[attribute] = value;
            }
            return row;
        }

        [TestMethod]
        public void GetForms_Skips_Missing_Unknown_And_Foreign_Rows()
        {
            var account = MakeEntity("account", "Account");
            var contact = MakeEntity("contact", "Contact");
            SetField("metadataDict", new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase)
            {
                ["account"] = account,
                ["contact"] = contact
            });
            SetField("entities", new List<string> { "account" });

            var service = new FakeDataverseService();
            service.RetrieveMultipleHandler = query =>
            {
                var rows = FakeDataverseService.Rows(
                    Row("systemform"),
                    Row("systemform", ("objecttypecode", "unknownentity")),
                    Row("systemform", ("objecttypecode", "contact")),
                    Row("systemform", ("objecttypecode", "account"), ("name", "Main")),
                    Row("systemform", ("objecttypecode", "account"), ("name", (string)null), ("description", (string)null)));
                rows[3].FormattedValues["type"] = "Main";
                return rows;
            };

            var forms = (System.Collections.IDictionary)Invoke("GetForms", service);
            Assert.AreEqual(1, forms.Count, "rows for known-but-unsolutioned entities are skipped.");
            var accountForms = (System.Collections.IList)forms["account"];
            Assert.AreEqual(2, accountForms.Count);
        }

        [TestMethod]
        public void GetViews_Skips_Missing_Unknown_And_Foreign_Rows()
        {
            var account = MakeEntity("account", "Account");
            var contact = MakeEntity("contact", "Contact");
            SetField("metadataDict", new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase)
            {
                ["account"] = account,
                ["contact"] = contact
            });
            SetField("entities", new List<string> { "account" });

            var service = new FakeDataverseService
            {
                RetrieveMultipleHandler = query => FakeDataverseService.Rows(
                    Row("savedquery"),
                    Row("savedquery", ("returnedtypecode", "unknownentity")),
                    Row("savedquery", ("returnedtypecode", "contact")),
                    Row("savedquery", ("returnedtypecode", "account"), ("name", "Active Views"), ("isdefault", true)),
                    Row("savedquery", ("returnedtypecode", "account"), ("name", (string)null), ("description", (string)null)))
            };

            var views = (System.Collections.IDictionary)Invoke("GetViews", service);
            Assert.AreEqual(1, views.Count, "rows for known-but-unsolutioned entities are skipped.");
            var accountViews = (System.Collections.IList)views["account"];
            Assert.AreEqual(2, accountViews.Count);
        }

        [TestMethod]
        public void GetBusinessRules_Skips_Missing_PrimaryEntity_And_Covers_FormattedValues()
        {
            var service = new FakeDataverseService();
            service.RetrieveMultipleHandler = query =>
            {
                var rows = FakeDataverseService.Rows(
                    Row("workflow"),
                    Row("workflow", ("primaryentity", "account"), ("name", "Rule"), ("description", "desc")),
                    Row("workflow", ("primaryentity", "account"), ("name", (string)null), ("description", (string)null)));
                rows[1].FormattedValues["statuscode"] = "Active";
                rows[1].FormattedValues["scope"] = "Entity";
                return rows;
            };

            var rules = (System.Collections.IDictionary)Invoke("GetBusinessRules", service);
            Assert.AreEqual(1, rules.Count);
            var accountRules = (System.Collections.IList)rules["account"];
            Assert.AreEqual(2, accountRules.Count);
        }

        [TestMethod]
        public void GetOptionSetsBySolution_Handles_Null_And_Empty_AliasedValues()
        {
            var service = new FakeDataverseService
            {
                RetrieveMultipleHandler = query => FakeDataverseService.Rows(
                    Row("solutioncomponent"),
                    Row("solutioncomponent", ("optionset.name", new AliasedValue("optionset", "name", null))),
                    Row("solutioncomponent", ("optionset.name", new AliasedValue("optionset", "name", string.Empty))),
                    Row("solutioncomponent", ("optionset.name", new AliasedValue("optionset", "name", "new_optionset"))))
            };

            var optionSets = (HashSet<string>)Invoke("GetOptionSetsBySolution", "TestSolution", service);
            Assert.AreEqual(1, optionSets.Count);
            Assert.IsTrue(optionSets.Contains("new_optionset"));
        }

        #endregion

        #region Remaining stragglers

        [TestMethod]
        public void ParseFormulaXml_AggregateFallback_And_RelatedWithoutHash()
        {
            // sourceType 2 xml with no aggregate operator falls back to "AGGREGATE"
            Assert.AreEqual("AGGREGATE(?)", Invoke("ParseFormulaXml", "<nothing here />", 2));

            // related_ entity reference without a '#' segment keeps the "?" entity
            var relatedNoHash = @"<GetEntityProperty Attribute=""fullname"" Entity=""[InputEntities(&quot;related_account&quot;)]"" />";
            Assert.AreEqual("?(account).fullname", Invoke("ParseFormulaXml", relatedNoHash, 0));
        }

        [TestMethod]
        public void DocumentErd_Intersect_Edge_Null_And_Unknown_Ends()
        {
            var account = MakeEntity("account", "Account");
            var contact = MakeEntity("contact", "Contact");
            var noRelIntersect = MakeEntity("ix_norel", "IxNoRel");
            MetadataExtensionsTests.SetProp(noRelIntersect, "IsIntersect", true);
            var nullEndsIntersect = MakeEntity("ix_null", "IxNull");
            MetadataExtensionsTests.SetProp(nullEndsIntersect, "IsIntersect", true);
            var ghostIntersect = MakeEntity("ix_ghost", "IxGhost");
            MetadataExtensionsTests.SetProp(ghostIntersect, "IsIntersect", true);

            MetadataExtensionsTests.SetProp(account, "ManyToManyRelationships", new[]
            {
                new ManyToManyRelationshipMetadata { IntersectEntityName = "ix_null" }
            });
            MetadataExtensionsTests.SetProp(contact, "ManyToManyRelationships", new[]
            {
                new ManyToManyRelationshipMetadata
                {
                    IntersectEntityName = "ix_ghost",
                    Entity1LogicalName = "missing1",
                    Entity2LogicalName = "missing2"
                }
            });

            SetField("metadataDict", new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase)
            {
                ["account"] = account,
                ["contact"] = contact,
                ["ix_norel"] = noRelIntersect,
                ["ix_null"] = nullEndsIntersect,
                ["ix_ghost"] = ghostIntersect
            });
            SetField("entities", new List<string> { "account", "contact", "ix_norel", "ix_null", "ix_ghost" });

            var file = Path.Combine(Path.GetTempPath(), "erd-edge-" + Guid.NewGuid().ToString("N") + ".md");
            try
            {
                Invoke("DocumentErd", file, new[] { account, contact, noRelIntersect, nullEndsIntersect, ghostIntersect });
                var text = File.ReadAllText(file);
                Assert.IsFalse(text.Contains("*--*"), "no intersect edge survives null or unknown ends.");
            }
            finally
            {
                if (File.Exists(file)) File.Delete(file);
            }
        }

        #region CreateDocumentFile crafted scenarios

        private static readonly DateTime DocStamp = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc);

        private static void Stamp(AttributeMetadata attribute)
        {
            MetadataExtensionsTests.SetProp(attribute, "CreatedOn", DocStamp);
            MetadataExtensionsTests.SetProp(attribute, "ModifiedOn", DocStamp);
        }

        private static StringAttributeMetadata DocString(string logicalName, int? sourceType = null, string formula = null)
        {
            var attribute = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = logicalName };
            if (formula != null) attribute.FormulaDefinition = formula;
            if (sourceType.HasValue) MetadataExtensionsTests.SetProp(attribute, "SourceType", sourceType);
            attribute.DisplayName = new Label(logicalName, 1033);
            attribute.DisplayName.UserLocalizedLabel = new LocalizedLabel(logicalName, 1033);
            attribute.IsSearchable = true;
            attribute.IsAuditEnabled = new BooleanManagedProperty(true);
            attribute.RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None);
            Stamp(attribute);
            return attribute;
        }

        private static EntityMetadata MakeDocEntity(string logicalName, string schemaName, params AttributeMetadata[] attributes)
        {
            var metadata = new EntityMetadata
            {
                SchemaName = schemaName,
                DisplayName = new Label(schemaName, 1033),
                DisplayCollectionName = new Label(schemaName + "s", 1033),
                Description = new Label(schemaName + " description", 1033)
            };
            metadata.DisplayName.UserLocalizedLabel = new LocalizedLabel(schemaName, 1033);
            metadata.DisplayCollectionName.UserLocalizedLabel = new LocalizedLabel(schemaName + "s", 1033);
            MetadataExtensionsTests.SetProp(metadata, "LogicalName", logicalName);
            MetadataExtensionsTests.SetProp(metadata, "PrimaryIdAttribute", logicalName + "id");
            MetadataExtensionsTests.SetProp(metadata, "PrimaryNameAttribute", "name");
            MetadataExtensionsTests.SetProp(metadata, "Attributes", attributes);
            MetadataExtensionsTests.SetProp(metadata, "Keys", Array.Empty<EntityKeyMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "ManyToOneRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "OneToManyRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "ManyToManyRelationships", Array.Empty<ManyToManyRelationshipMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "CreatedOn", DocStamp);
            MetadataExtensionsTests.SetProp(metadata, "ModifiedOn", DocStamp);
            MetadataExtensionsTests.SetProp(metadata, "IsCustomEntity", true);
            return metadata;
        }

        private void StageSingleEntity(EntityMetadata entity)
        {
            SetField("metadataDict", new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase)
            {
                [entity.LogicalName] = entity
            });
            SetField("entities", new List<string> { entity.LogicalName });
        }

        private string InvokeCreateDocumentFile(EntityMetadata entity)
        {
            var file = Path.Combine(Path.GetTempPath(), "cdf-" + Guid.NewGuid().ToString("N") + ".md");
            try
            {
                Invoke("CreateDocumentFile", entity.LogicalName, file, new[] { entity });
                return File.ReadAllText(file);
            }
            finally
            {
                if (File.Exists(file)) File.Delete(file);
            }
        }

        [TestMethod]
        public void CreateDocumentFile_EmptyDisplayName_UsesSchemaName_And_ProcessFlagSet()
        {
            // DisplayName stays null → the header falls back to the schema name;
            // IsBusinessProcessEnabled is set so the null-conditional takes its value branch.
            var entity = MakeDocEntity("p42_flagged", "P42Flagged", DocString("p42_name"));
            MetadataExtensionsTests.SetProp(entity, "DisplayName", (Label)null);
            MetadataExtensionsTests.SetProp(entity, "IsBusinessProcessEnabled", true);
            StageSingleEntity(entity);
            var text = InvokeCreateDocumentFile(entity);
            StringAssert.Contains(text, $"# P42Flagged - P42Flagged - p42_flagged");
            StringAssert.Contains(text, "✅Process");
        }

        [TestMethod]
        public void CreateDocumentFile_PlainFormula_KeptRaw_And_NullPowerFxFormula_Flagged()
        {
            // FormulaDefinition without <?xml stays raw; Power Fx attr with no
            // FormulaDefinition falls back to "*Definition not available*".
            var entity = MakeDocEntity("p43_formulas", "P43Formulas",
                DocString("p43_calc", sourceType: 1, formula: "plain formula text"),
                DocString("p43_powerfx", sourceType: 3, formula: null));
            StageSingleEntity(entity);
            var text = InvokeCreateDocumentFile(entity);
            StringAssert.Contains(text, "`plain formula text`");
            StringAssert.Contains(text, "*Definition not available*");
        }

        [TestMethod]
        public void CreateDocumentFile_Blacklisted_Relationship_Positions_Filtered()
        {
            var entity = MakeDocEntity("p44_rels", "P44Rels", DocString("p44_name"));
            MetadataExtensionsTests.SetProp(entity, "ManyToOneRelationships", new[]
            {
                new OneToManyRelationshipMetadata
                {
                    SchemaName = "r1", ReferencingEntity = "p44_rels", ReferencedEntity = "syncerror",
                    ReferencingAttribute = "attr_a", ReferencedAttribute = "attr_b"
                },
                new OneToManyRelationshipMetadata
                {
                    SchemaName = "r2", ReferencingEntity = "p44_rels", ReferencedEntity = "p44_rels",
                    ReferencingAttribute = "attr_c", ReferencedAttribute = "owner"
                },
                new OneToManyRelationshipMetadata
                {
                    SchemaName = "r3", ReferencingEntity = "p44_rels", ReferencedEntity = "p44_rels",
                    ReferencingAttribute = "createdby", ReferencedAttribute = "attr_d"
                },
                new OneToManyRelationshipMetadata
                {
                    SchemaName = "r4", ReferencingEntity = "p44_rels", ReferencedEntity = "p44_rels",
                    ReferencingAttribute = "attr_e", ReferencedAttribute = "attr_f"
                }
            });
            StageSingleEntity(entity);
            var text = InvokeCreateDocumentFile(entity);
            Assert.IsFalse(text.Contains("|r1|"), "blacklisted referenced entity is filtered from N-1.");
            Assert.IsFalse(text.Contains("|r2|"), "blacklisted referenced attribute is filtered from N-1.");
            Assert.IsFalse(text.Contains("|r3|"), "blacklisted referencing attribute is filtered from N-1.");
            StringAssert.Contains(text, "|r4", "the clean relationship stays.");
        }

        [TestMethod]
        public void CreateDocumentFile_DoubleUnderscore_SchemaName_PascalizesEmptyPart()
        {
            var entity = MakeDocEntity("p45_weird", "new__weird", DocString("p45_name"));
            StageSingleEntity(entity);
            var folder = Path.Combine(Path.GetTempPath(), "cdf-weird-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(folder);
            // A sibling md with a "## " header drives the server-code walk, where the
            // PascalCase split sees the empty part between the double underscores.
            File.WriteAllText(Path.Combine(folder, "Sibling.md"),
                "## Steps.Some.Plugin.Whatever\r\nsome line\r\n---\r\n>Generated by tool\r\n");
            var file = Path.Combine(folder, $"{entity.LogicalName}.md");
            try
            {
                Invoke("CreateDocumentFile", entity.LogicalName, file, new[] { entity });
                var text = File.ReadAllText(file);
                StringAssert.Contains(text, "# new__weird - new__weird - p45_weird");
                StringAssert.Contains(text, "> *No server-side code registered*",
                    "the non-matching sibling is scanned (pascalize split) but contributes nothing.");
            }
            finally
            {
                if (Directory.Exists(folder)) Directory.Delete(folder, true);
            }
        }

        [TestMethod]
        public void AppendErdEdges_Deduplicates_Edges_To_The_Same_Target()
        {
            var account = MakeEntity("account", "Account",
                MakeLookup("primarycontactid", "PrimaryContactId", "contact"),
                MakeLookup("othercontactid", "OtherContactId", "contact"));
            var contact = MakeEntity("contact", "Contact");
            MetadataExtensionsTests.SetProp(account, "ManyToOneRelationships", new[]
            {
                new OneToManyRelationshipMetadata
                {
                    SchemaName = "account_primary_contact", ReferencingEntity = "account", ReferencedEntity = "contact",
                    ReferencingAttribute = "primarycontactid", ReferencedAttribute = "contactid"
                },
                new OneToManyRelationshipMetadata
                {
                    SchemaName = "account_other_contact", ReferencingEntity = "account", ReferencedEntity = "contact",
                    ReferencingAttribute = "othercontactid", ReferencedAttribute = "contactid"
                }
            });

            var lookupSchemas = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
            {
                "account_primary_contact", "account_other_contact"
            };
            var edgeTracker = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            var sb = new StringBuilder();
            Invoke("AppendErdEdges", sb, account, "Account",
                new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase)
                {
                    ["account"] = account, ["contact"] = contact
                },
                lookupSchemas, edgeTracker);

            Assert.AreEqual(1, edgeTracker.Count, "the second relationship to the same target is a duplicate edge.");
            var text = sb.ToString();
            StringAssert.Contains(text, "Account --* Contact");
            Assert.AreEqual(1, text.Split(new[] { "Account --* Contact" }, StringSplitOptions.None).Length - 1,
                "no duplicated edge lines.");
        }

        [TestMethod]
        public void CreateDocumentFile_RulesList_Empty_Behaves_Like_NoRules()
        {
            var brInfoType = generatorType.GetNestedType("BusinessRuleInfo", BindingFlags.NonPublic);
            Assert.IsNotNull(brInfoType);
            var dict = (System.Collections.IDictionary)Activator.CreateInstance(
                generatorType.GetField("businessRulesDict", BindingFlags.Instance | BindingFlags.NonPublic).FieldType);
            dict["p47_empty_rules"] = Activator.CreateInstance(typeof(List<>).MakeGenericType(brInfoType));
            SetField("businessRulesDict", dict);

            var withPowerFx = MakeDocEntity("p47_empty_rules", "P47EmptyRules", DocString("p47_field", sourceType: 3));
            StageSingleEntity(withPowerFx);
            var withPowerFxText = InvokeCreateDocumentFile(withPowerFx);
            Assert.IsFalse(withPowerFxText.Contains("### Business Rules"),
                "an empty rules list renders no business-rules table.");
            StringAssert.Contains(withPowerFxText, "### Power Fx",
                "power-fx columns still render next to empty rules.");

            var withoutPowerFx = MakeDocEntity("p47b_empty_rules", "P47bEmptyRules", DocString("p47b_field"));
            StageSingleEntity(withoutPowerFx);
            var withoutPowerFxText = InvokeCreateDocumentFile(withoutPowerFx);
            StringAssert.Contains(withoutPowerFxText, "> *No business rules or Power Fx*",
                "an empty rules list with no Power Fx columns falls back to the placeholder.");
        }

        [TestMethod]
        public void CreateDocumentFile_MissingDirectory_SkipsWalk_ThenFailsOnWrite()
        {
            var entity = MakeDocEntity("p48_nodir", "P48NoDir", DocString("p48_field"));
            StageSingleEntity(entity);
            var file = Path.Combine(Path.GetTempPath(), "p48-no-such-dir-" + Guid.NewGuid().ToString("N"), "doc.md");
            try
            {
                Invoke("CreateDocumentFile", entity.LogicalName, file, new[] { entity });
                Assert.Fail("writing into a missing directory must throw.");
            }
            catch (System.Reflection.TargetInvocationException ex)
            {
                Assert.IsInstanceOfType(ex.InnerException, typeof(DirectoryNotFoundException),
                    "the skipped directory walk reaches the final write, which fails.");
            }
        }

        [TestMethod]
        public void ProjectEnvironment_Find_Helpers_Swallow_Invalid_Paths()
        {
            var findFile = typeof(ProjectEnvironment).GetMethod("FindFile",
                BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static);
            Assert.IsNotNull(findFile);
            var findGitIgnore = typeof(ProjectEnvironment).GetMethod("FindNearestGitIgnore",
                BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static);

            // a NUL character inside the path makes DirectoryInfo throw (ArgumentException),
            // which both helpers swallow and turn into a null result.
            var invalid = "C:\\a\\b\u0000c";
            Assert.IsNull(findFile.Invoke(null, new object[] { invalid }),
                "an invalid path must be swallowed by the catch.");
            Assert.IsNull(findGitIgnore.Invoke(null, new object[] { invalid }),
                "an invalid path must be swallowed by the catch.");
        }

        [TestMethod]
        public void Utility_ForceWriteAllText_Overwritable_Existing_File()
        {
            var plainFile = Path.Combine(Path.GetTempPath(), "fwt-" + Guid.NewGuid().ToString("N") + ".txt");
            try
            {
                File.WriteAllText(plainFile, "old");
                DynamicsCrm.DevKit.Tool.Lib.Utility.ForceWriteAllText(plainFile, "new");
                Assert.AreEqual("new", File.ReadAllText(plainFile),
                    "a writable existing file is overwritten without touching attributes.");
            }
            finally
            {
                if (File.Exists(plainFile)) File.Delete(plainFile);
            }
        }

        #endregion

        [TestMethod]
        public void Straggler_Branches()
        {
            // ProjectEnvironment.FindNearestGitIgnore(null) — whitespace guard
            var findGitIgnore = typeof(ProjectEnvironment)
                .GetMethod("FindNearestGitIgnore", BindingFlags.NonPublic | BindingFlags.Static);
            Assert.IsNull(findGitIgnore.Invoke(null, new object[] { null }));

            // DeviceCode ValidateAsync with a VALID GUID ClientId (TryParse false outcome)
            var validGuid = await2(new DeviceCodeConnectionBuilder().ValidateAsync(new CrmConnection
            {
                Url = "https://org.crm.dynamics.com",
                ClientId = Guid.NewGuid().ToString()
            }));
            Assert.IsTrue(validGuid.isValid);

            // DevOpsLinkBuilder.BuildWorkItemUrl(null) — whitespace guard
            Assert.IsNull(DevOpsLinkBuilder.BuildWorkItemUrl(null, "org", "project", "1"));

            // Interactive GetTokenInteractiveAsync with a matching username (silent hit)
            FakeMsalToken.EnsurePatched();
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeServiceClientCtor.EnqueueNext(() => true);
            var interactive = new InteractiveConnectionBuilder();
            var connection = new CrmConnection { Url = "https://org.crm.dynamics.com", UserName = "user@contoso.com" };
            Assert.IsNotNull(interactive.CreateServiceClientAsync(connection).GetAwaiter().GetResult());

            // DeviceCode GetTokenWithDeviceCodeAsync with a matching username (silent hit)
            FakeServiceClientCtor.EnqueueNext(() => true);
            var deviceCode = new DeviceCodeConnectionBuilder();
            var deviceConnection = new CrmConnection { Url = "https://org.crm.dynamics.com", UserName = "user@contoso.com" };
            Assert.IsNotNull(deviceCode.CreateServiceClientAsync(deviceConnection).GetAwaiter().GetResult());

            // ToolConnectionEnvironment.ConnectAsync: AD auth without DEVKIT_DOMAIN (first condition false)
            var tempDir = Path.Combine(Path.GetTempPath(), "tool-straggler-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            var prevDir = Environment.CurrentDirectory;
            try
            {
                Environment.CurrentDirectory = tempDir;
                File.WriteAllText(Path.Combine(tempDir, ".env"),
                    "DEVKIT_AUTH_TYPE=AD\nDEVKIT_URL=https://org.crm.dynamics.com\nDEVKIT_USERNAME=user\nDEVKIT_PASSWORD=p");
                FakeServiceClientCtor.EnqueueNext(() => true);
                Assert.IsNotNull(ToolConnectionEnvironment.ConnectAsync(null).GetAwaiter().GetResult());
            }
            finally
            {
                Environment.CurrentDirectory = prevDir;
                if (Directory.Exists(tempDir)) Directory.Delete(tempDir, true);
            }

            // TaskCoverageToXml.Run with a bare output file name (no directory part)
            var coverage = Path.Combine(Path.GetTempPath(), "cov-" + Guid.NewGuid().ToString("N") + ".coverage");
            var xml = "cov-out.xml";
            File.WriteAllBytes(coverage, new byte[] { 1 });
            try
            {
                TaskCoverageToXml.Run(coverage, xml, "a.dll", _ =>
                {
                    File.WriteAllText(xml, "<coverage />");
                    return (0, "", "");
                });
                Assert.IsTrue(File.Exists(xml));
            }
            finally
            {
                if (File.Exists(coverage)) File.Delete(coverage);
                if (File.Exists(xml)) File.Delete(xml);
            }
        }

        private static (bool isValid, string error) await2(System.Threading.Tasks.Task<(bool isValid, string error)> task)
        {
            return task.GetAwaiter().GetResult();
        }

        #endregion
    }
}
