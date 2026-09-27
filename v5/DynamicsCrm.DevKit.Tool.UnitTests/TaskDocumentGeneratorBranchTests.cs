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
                ReferencingEntity = "workflow",
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
            SetField("metadataDict", new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase) { ["account"] = account });
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
            Assert.AreEqual(1, forms.Count);
            var accountForms = (System.Collections.IList)forms["account"];
            Assert.AreEqual(2, accountForms.Count);
        }

        [TestMethod]
        public void GetViews_Skips_Missing_Unknown_And_Foreign_Rows()
        {
            var account = MakeEntity("account", "Account");
            SetField("metadataDict", new Dictionary<string, EntityMetadata>(StringComparer.OrdinalIgnoreCase) { ["account"] = account });
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
            Assert.AreEqual(1, views.Count);
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
