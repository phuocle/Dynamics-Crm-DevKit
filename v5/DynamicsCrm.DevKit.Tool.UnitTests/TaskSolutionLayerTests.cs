using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DynamicsCrm.DevKit.Tool.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    /// <summary>DoNotParallelize: TaskSolutionLayer.Run mutates a static componentDefs cache.</summary>
    [DoNotParallelize]
    [TestClass]
    public class TaskSolutionLayerTests
    {
        private FakeDataverseService service;
        private string tempDir;

        [TestInitialize]
        public void Setup()
        {
            service = new FakeDataverseService();
            tempDir = Path.Combine(Path.GetTempPath(), "devkit-tool-tests-solutionlayer", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
        }

        [TestCleanup]
        public void Cleanup()
        {
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
        }

        private static EntityMetadata MakeEntityMetadata(string logicalName, string schemaName,
            Guid? metadataId = null, AttributeMetadata[] attributes = null)
        {
            var metadata = new EntityMetadata { SchemaName = schemaName };
            MetadataExtensionsTests.SetProp(metadata, "Attributes", attributes ?? Array.Empty<AttributeMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "ManyToManyRelationships", Array.Empty<ManyToManyRelationshipMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "ManyToOneRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "OneToManyRelationships", Array.Empty<OneToManyRelationshipMetadata>());
            MetadataExtensionsTests.SetProp(metadata, "LogicalName", logicalName);
            if (metadataId.HasValue) metadata.MetadataId = metadataId;
            return metadata;
        }

        private static OneToManyRelationshipMetadata MakeRelationship(string schemaName,
            string referencingAttribute, string referencedEntity, Guid metadataId)
        {
            var relationship = new OneToManyRelationshipMetadata
            {
                SchemaName = schemaName,
                ReferencingAttribute = referencingAttribute,
                ReferencedEntity = referencedEntity,
                MetadataId = metadataId
            };
            MetadataExtensionsTests.SetProp(relationship, "ReferencingEntity", "new_entity");
            return relationship;
        }

        /// <summary>
        /// Full happy path: definitions + optionset, one solution, mixed component types,
        /// active-layer hits of every component-json shape, output file written.
        /// </summary>
        [TestMethod]
        public void Run_FullPipeline_WritesReportFile()
        {
            var entityId = Guid.NewGuid();
            var solutionId = Guid.NewGuid();
            var attributeMetadataId = Guid.NewGuid();
            var fullEntityId = Guid.NewGuid();
            var activityRelMetadataId = Guid.NewGuid();
            var orphanAttributeId = Guid.NewGuid();
            var namelessSavedQueryId = Guid.NewGuid();
            var namelessChartId = Guid.NewGuid();
            var namelessWebResourceId = Guid.NewGuid();
            var namelessIds = new HashSet<Guid> { namelessSavedQueryId, namelessChartId, namelessWebResourceId };

            service.RetrieveMultipleHandler = query =>
            {
                switch (query)
                {
                    case QueryExpression qe when qe.EntityName == "solutioncomponentdefinition":
                        return FakeDataverseService.Rows(
                            FakeDataverseService.Row("solutioncomponentdefinition", Guid.NewGuid(),
                                ("solutioncomponenttype", 1), ("name", "Entity")),
                            FakeDataverseService.Row("solutioncomponentdefinition", Guid.NewGuid(),
                                ("solutioncomponenttype", 26), ("name", "Saved Query")),
                            FakeDataverseService.Row("solutioncomponentdefinition", Guid.NewGuid(),
                                ("solutioncomponenttype", 59), ("name", "Chart")),
                            FakeDataverseService.Row("solutioncomponentdefinition", Guid.NewGuid(),
                                ("solutioncomponenttype", 2), ("name", "Field")),
                            FakeDataverseService.Row("solutioncomponentdefinition", Guid.NewGuid(),
                                ("solutioncomponenttype", 418), ("name", "Dataflow")));
                    case QueryExpression qe when qe.EntityName == "solution":
                        return FakeDataverseService.Rows(FakeDataverseService.Row("solution", solutionId));
                    case QueryExpression qe when qe.EntityName == "solutioncomponent":
                        return FakeDataverseService.Rows(
                            // full entity component
                            FakeDataverseService.Row("solutioncomponent", fullEntityId,
                                ("objectid", fullEntityId),
                                ("componenttype", new OptionSetValue(1)),
                                ("rootcomponentbehavior", new OptionSetValue(0))),
                            // entity component with NO rootcomponentbehavior at all
                            FakeDataverseService.Row("solutioncomponent", entityId,
                                ("objectid", entityId),
                                ("componenttype", new OptionSetValue(1))),
                            // activity entity relationship component (excluded by regardingobjectid lookup)
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", activityRelMetadataId),
                                ("componenttype", new OptionSetValue(10))),
                            // attribute components: one with metadata, one whose entityid has no metadata
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", attributeMetadataId),
                                ("componenttype", new OptionSetValue(2))),
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", orphanAttributeId),
                                ("componenttype", new OptionSetValue(2))),
                            // saved query, chart, webresource (some without msdyn_name), dataflow, unknown type, null type
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", Guid.NewGuid()), ("componenttype", new OptionSetValue(26))),
                            FakeDataverseService.Row("solutioncomponent", namelessSavedQueryId,
                                ("objectid", namelessSavedQueryId), ("componenttype", new OptionSetValue(26))),
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", Guid.NewGuid()), ("componenttype", new OptionSetValue(59))),
                            FakeDataverseService.Row("solutioncomponent", namelessChartId,
                                ("objectid", namelessChartId), ("componenttype", new OptionSetValue(59))),
                            FakeDataverseService.Row("solutioncomponent", namelessWebResourceId,
                                ("objectid", namelessWebResourceId), ("componenttype", new OptionSetValue(61))),
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", Guid.NewGuid()), ("componenttype", new OptionSetValue(418))),
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", Guid.NewGuid()), ("componenttype", new OptionSetValue(9999))),
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", Guid.NewGuid()), ("componenttype", null)),
                            // entity component with behavior != 0 (not full)
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", entityId),
                                ("componenttype", new OptionSetValue(1)),
                                ("rootcomponentbehavior", new OptionSetValue(1))));
                    case QueryExpression qe when qe.EntityName == "systemform":
                        return FakeDataverseService.Rows(FakeDataverseService.Row("systemform", Guid.NewGuid()));
                    case QueryExpression qe when qe.EntityName == "savedquery":
                        return FakeDataverseService.Rows(FakeDataverseService.Row("savedquery", Guid.NewGuid()));
                    case QueryExpression qe when qe.EntityName == "savedqueryvisualization":
                        return FakeDataverseService.Rows(FakeDataverseService.Row("savedqueryvisualization", Guid.NewGuid()));
                    default:
                        return FakeDataverseService.Rows();
                }
            };

            service.ExecuteHandler = request =>
            {
                switch (request)
                {
                    case RetrieveOptionSetRequest:
                        var nullLabelOption = new OptionMetadata { Value = 500 };
                        var nullUllLabel = new Label();
                        var nullUllOption = new OptionMetadata(nullUllLabel, 501);
                        var nullInnerTextOption = new OptionMetadata(new Label(), 502);
                        nullInnerTextOption.Label.UserLocalizedLabel = new LocalizedLabel();
                        var optionSet = FakeDataverseService.OptSet(
                            FakeDataverseService.Option(1, "Entity"),
                            FakeDataverseService.Option(2, "Field"),
                            FakeDataverseService.Option(59, "Chart"),
                            FakeDataverseService.Option(80, "Model driven app"),
                            FakeDataverseService.Option(9999, "Mystery"),
                            nullLabelOption,
                            nullUllOption,
                            nullInnerTextOption
                        );
                        return FakeDataverseService.Response<RetrieveOptionSetResponse>("OptionSetMetadata", optionSet);

                    case RetrieveMetadataChangesRequest meta when
                        FakeDataverseService.FirstConditionAttribute(request) == "IsActivity":
                        var activityEntity = MakeEntityMetadata("new_activity", "new_Activity");
                        var regardingRelationship = MakeRelationship("regarding", "regardingobjectid",
                            "new_parent", activityRelMetadataId);
                        MetadataExtensionsTests.SetProp(activityEntity, "ManyToOneRelationships",
                            new[] { regardingRelationship });
                        return FakeDataverseService.Response<RetrieveMetadataChangesResponse>(
                            "EntityMetadata", new EntityMetadataCollection { activityEntity });

                    case RetrieveMetadataChangesRequest meta when
                        FakeDataverseService.FirstConditionAttribute(request) == "MetadataId":
                        var stringAttribute = new StringAttributeMetadata { LogicalName = "new_field" };
                        stringAttribute.MetadataId = attributeMetadataId;
                        var fullEntity = MakeEntityMetadata("new_entity", "new_Entity", fullEntityId,
                            new AttributeMetadata[] { stringAttribute });
                        MetadataExtensionsTests.SetProp(fullEntity, "ManyToOneRelationships",
                            new[] { MakeRelationship("lookup_rel", "new_lookup", "account", Guid.NewGuid()) });
                        MetadataExtensionsTests.SetProp(fullEntity, "OneToManyRelationships",
                            new[] { MakeRelationship("one_rel", "new_id", "contact", Guid.NewGuid()) });
                        MetadataExtensionsTests.SetProp(fullEntity, "ManyToManyRelationships",
                            new ManyToManyRelationshipMetadata[] { });
                        return FakeDataverseService.Response<RetrieveMetadataChangesResponse>(
                            "EntityMetadata", new EntityMetadataCollection { fullEntity });

                    case ExecuteMultipleRequest bulk:
                    {
                        var successes = new List<(int, EntityCollection)>();
                        var faults = new List<(int, string)> { (3, "faulted on purpose") };
                        for (var i = 0; i < bulk.Requests.Count; i++)
                        {
                            if (i == 3) continue; // fault
                            var tag = (int)bulk.Requests[i].Parameters["tag"];
                            var componentId = ((RetrieveMultipleRequest)bulk.Requests[i]).Query is QueryExpression q
                                ? q.Criteria.Conditions
                                    .First(c => c.AttributeName == "msdyn_componentid").Values[0]
                                : Guid.Empty;
                            if (namelessIds.Contains((Guid)componentId))
                            {
                                successes.Add((i, FakeDataverseService.Rows(FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "Active"),
                                    ("msdyn_componentid", Guid.NewGuid()),
                                    ("msdyn_componentjson", tag switch
                                    {
                                        26 => FakeDataverseService.ComponentJson(("returnedtypecode", "new_entity")),
                                        59 => FakeDataverseService.ComponentJson(("primaryentitytypecode", "new_entity")),
                                        _ => FakeDataverseService.ComponentJson(("objecttypecode", ""))
                                    })))));
                                continue;
                            }
                            successes.Add((i, tag switch
                            {
                                2 => FakeDataverseService.Rows(FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "Active"),
                                    ("msdyn_componentid", Guid.NewGuid()),
                                    ("msdyn_componentjson", FakeDataverseService.ComponentJson(
                                        componentId.Equals(orphanAttributeId)
                                            ? ("entityid", orphanAttributeId.ToString())
                                            : ("entityid", fullEntityId.ToString()),
                                        ("logicalname", "new_field"))))),
                                26 => FakeDataverseService.Rows(FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "Active"),
                                    ("msdyn_componentid", Guid.NewGuid()),
                                    ("msdyn_name", " My View "),
                                    ("msdyn_componentjson", FakeDataverseService.ComponentJson(
                                        ("returnedtypecode", "new_entity"))))),
                                59 => FakeDataverseService.Rows(FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "Active"),
                                    ("msdyn_componentid", Guid.NewGuid()),
                                    ("msdyn_name", "My Chart"),
                                    ("msdyn_componentjson", FakeDataverseService.ComponentJson(
                                        ("primaryentitytypecode", "new_entity"))))),
                                418 => FakeDataverseService.Rows(FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "Active"),
                                    ("msdyn_componentid", Guid.NewGuid()),
                                    ("msdyn_name", "Dataflow X"),
                                    ("msdyn_componentjson", "{not json"))),
                                _ => FakeDataverseService.Rows(FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "Active"),
                                    ("msdyn_componentid", Guid.NewGuid()),
                                    ("msdyn_name", "Some Component"),
                                    ("msdyn_componentjson", FakeDataverseService.ComponentJson(
                                        ("objecttypecode", ""))))) // empty objecttypecode branch
                            }));
                        }
                        return FakeDataverseService.BuildExecuteMultipleResponse(successes, faults);
                    }

                    default:
                        throw new NotImplementedException(request.RequestName);
                }
            };

            var outputFile = Path.Combine(tempDir, "report.txt");
            TaskSolutionLayer.Run(service, new[] { "TestSolution" }, outputFile);

            Assert.IsTrue(File.Exists(outputFile));
            var report = File.ReadAllText(outputFile);
            StringAssert.Contains(report, "SOLUTION: TestSolution");
            StringAssert.Contains(report, "[new_entity].[new_field]");
            StringAssert.Contains(report, "[new_entity].[My View]");
            StringAssert.Contains(report, "[new_entity].[My Chart]");
            StringAssert.Contains(report, "[Some Component]");
            // the nameless active-layer rows render with an empty name
            StringAssert.Contains(report, "[] - [");
            // the orphan attribute's entityid parses but has no matching metadata
            Assert.IsFalse(report.Contains(orphanAttributeId.ToString()),
                "the orphan attribute's entityid must not surface in the report.");
            StringAssert.Contains(report, "Take:");
        }

        [TestMethod]
        public void Run_SolutionNotFound_Throws()
        {
            service.RetrieveMultipleHandler = query =>
            {
                if (query is QueryExpression qe && qe.EntityName == "solutioncomponentdefinition")
                    return FakeDataverseService.Rows();
                return FakeDataverseService.Rows();
            };
            service.ExecuteHandler = request =>
                FakeDataverseService.Response<RetrieveOptionSetResponse>("OptionSetMetadata",
                    FakeDataverseService.OptSet());
            Assert.ThrowsExactly<Exception>(() =>
                TaskSolutionLayer.Run(service, new[] { "MissingSolution" }, null));
        }

        [TestMethod]
        public void Run_NoOutputFile_PrintsToConsole()
        {
            service.RetrieveMultipleHandler = query =>
            {
                if (query is QueryExpression qe && qe.EntityName == "solution")
                    return FakeDataverseService.Rows(FakeDataverseService.Row("solution", Guid.NewGuid()));
                if (query is QueryExpression qe2 && qe2.EntityName == "solutioncomponentdefinition")
                    return FakeDataverseService.Rows();
                return FakeDataverseService.Rows();
            };
            service.ExecuteHandler = request =>
                FakeDataverseService.Response<RetrieveOptionSetResponse>("OptionSetMetadata",
                    FakeDataverseService.OptSet());
            TaskSolutionLayer.Run(service, new[] { "TestSolution" }, null);
        }

        [TestMethod]
        public void Run_ActiveLayerQueryWithoutActiveSolution_HandlesGracefully()
        {
            // components exist but no "Active" layer rows → ProcessBatchResults inner branches skipped
            var solutionId = Guid.NewGuid();
            service.RetrieveMultipleHandler = query =>
            {
                if (query is QueryExpression qe && qe.EntityName == "solution")
                    return FakeDataverseService.Rows(FakeDataverseService.Row("solution", solutionId));
                if (query is QueryExpression qe2 && qe2.EntityName == "solutioncomponentdefinition")
                    return FakeDataverseService.Rows();
                if (query is QueryExpression qe3 && qe3.EntityName == "solutioncomponent")
                    return FakeDataverseService.Rows(FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                        ("objectid", Guid.NewGuid()), ("componenttype", new OptionSetValue(1)),
                        ("rootcomponentbehavior", new OptionSetValue(1))));
                return FakeDataverseService.Rows();
            };
            service.ExecuteHandler = request =>
            {
                switch (request)
                {
                    case RetrieveOptionSetRequest:
                        return FakeDataverseService.Response<RetrieveOptionSetResponse>("OptionSetMetadata",
                            FakeDataverseService.OptSet(
                                FakeDataverseService.Option(1, "Entity")
                            ));
                    case ExecuteMultipleRequest bulk:
                    {
                        var successes = new List<(int, EntityCollection)>();
                        for (var i = 0; i < bulk.Requests.Count; i++)
                            successes.Add((i, FakeDataverseService.Rows(
                                FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "BaseSolution")))));
                        return FakeDataverseService.BuildExecuteMultipleResponse(successes);
                    }
                    default:
                        throw new NotImplementedException(request.RequestName);
                }
            };
            var outputFile = Path.Combine(tempDir, "report2.txt");
            TaskSolutionLayer.Run(service, new[] { "TestSolution" }, outputFile);
            var report = File.ReadAllText(outputFile);
            StringAssert.Contains(report, "Entity (1)");
            Assert.IsFalse(report.Contains("["));
        }

        [TestMethod]
        public void Run_ObjectTypeCodePresent_InOutput()
        {
            var solutionId = Guid.NewGuid();
            service.RetrieveMultipleHandler = query =>
            {
                if (query is QueryExpression qe && qe.EntityName == "solution")
                    return FakeDataverseService.Rows(FakeDataverseService.Row("solution", solutionId));
                if (query is QueryExpression qe2 && qe2.EntityName == "solutioncomponentdefinition")
                    return FakeDataverseService.Rows();
                if (query is QueryExpression qe3 && qe3.EntityName == "solutioncomponent")
                    return FakeDataverseService.Rows(FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                        ("objectid", Guid.NewGuid()), ("componenttype", new OptionSetValue(1)),
                        ("rootcomponentbehavior", new OptionSetValue(1))));
                return FakeDataverseService.Rows();
            };
            service.ExecuteHandler = request =>
            {
                switch (request)
                {
                    case RetrieveOptionSetRequest:
                        return FakeDataverseService.Response<RetrieveOptionSetResponse>("OptionSetMetadata",
                            FakeDataverseService.OptSet(
                                FakeDataverseService.Option(1, "Entity")
                            ));
                    case ExecuteMultipleRequest bulk:
                    {
                        var successes = new List<(int, EntityCollection)>();
                        for (var i = 0; i < bulk.Requests.Count; i++)
                            successes.Add((i, FakeDataverseService.Rows(
                                FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "Active"),
                                    ("msdyn_componentid", Guid.NewGuid()),
                                    ("msdyn_name", "My Form"),
                                    ("msdyn_componentjson", FakeDataverseService.ComponentJson(
                                        ("objecttypecode", "account")))))));
                        return FakeDataverseService.BuildExecuteMultipleResponse(successes);
                    }
                    default:
                        throw new NotImplementedException(request.RequestName);
                }
            };
            var outputFile = Path.Combine(tempDir, "report3.txt");
            TaskSolutionLayer.Run(service, new[] { "TestSolution" }, outputFile);
            StringAssert.Contains(File.ReadAllText(outputFile), "[account].[My Form]");
        }

        [TestMethod]
        public void Run_MoreThan200Components_FlushesBatches()
        {
            var solutionId = Guid.NewGuid();
            var executeMultipleCalls = 0;
            service.RetrieveMultipleHandler = query =>
            {
                if (query is QueryExpression qe && qe.EntityName == "solution")
                    return FakeDataverseService.Rows(FakeDataverseService.Row("solution", solutionId));
                if (query is QueryExpression qe2 && qe2.EntityName == "solutioncomponentdefinition")
                    return FakeDataverseService.Rows();
                if (query is QueryExpression qe3 && qe3.EntityName == "solutioncomponent")
                {
                    var rows = new List<Entity>();
                    for (var i = 0; i < 201; i++)
                        rows.Add(FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                            ("objectid", Guid.NewGuid()), ("componenttype", new OptionSetValue(61))));
                    return FakeDataverseService.Rows(rows.ToArray());
                }
                return FakeDataverseService.Rows();
            };
            service.ExecuteHandler = request =>
            {
                switch (request)
                {
                    case RetrieveOptionSetRequest:
                        return FakeDataverseService.Response<RetrieveOptionSetResponse>("OptionSetMetadata",
                            FakeDataverseService.OptSet(FakeDataverseService.Option(61, "Web Resource")));
                    case ExecuteMultipleRequest bulk:
                    {
                        executeMultipleCalls++;
                        var successes = new List<(int, EntityCollection)>();
                        for (var i = 0; i < bulk.Requests.Count; i++)
                            successes.Add((i, FakeDataverseService.Rows(
                                FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "BaseSolution")))));
                        return FakeDataverseService.BuildExecuteMultipleResponse(successes);
                    }
                    default:
                        throw new NotImplementedException(request.RequestName);
                }
            };
            var outputFile = Path.Combine(tempDir, "report4.txt");
            TaskSolutionLayer.Run(service, new[] { "TestSolution" }, outputFile);
            Assert.AreEqual(2, executeMultipleCalls, "200-component batches flush mid-loop, then the tail flushes.");
        }

        #region ProcessBatchResults direct invocations

        private static readonly System.Reflection.MethodInfo ProcessBatchMethodImpl = typeof(TaskSolutionLayer)
            .GetMethod("ProcessBatchResults", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);

        private static string InvokeProcessBatch(FakeDataverseService svc, params (int tag, Entity[] rows)[] responses)
        {
            var bulk = new ExecuteMultipleRequest
            {
                Settings = new ExecuteMultipleSettings { ContinueOnError = true, ReturnResponses = true },
                Requests = new OrganizationRequestCollection()
            };
            var items = new ExecuteMultipleResponseItemCollection();
            for (var i = 0; i < responses.Length; i++)
            {
                var (tag, rows) = responses[i];
                var request = new RetrieveMultipleRequest
                {
                    Query = new QueryExpression("msdyn_componentlayer")
                };
                request["tag"] = tag;
                bulk.Requests.Add(request);
                items.Add(new ExecuteMultipleResponseItem
                {
                    RequestIndex = i,
                    Response = FakeDataverseService.Response<RetrieveMultipleResponse>("EntityCollection",
                        FakeDataverseService.Rows(rows))
                });
            }
            var bulkResponse = FakeDataverseService.Response<ExecuteMultipleResponse>("Responses", items);
            return (string)ProcessBatchMethodImpl.Invoke(null, new object[] { svc, bulk, bulkResponse });
        }

        [TestMethod]
        public void ProcessBatchResults_ElseBranch_Covers_Null_And_Set_Names()
        {
            var service = new FakeDataverseService();
            var named = FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                ("msdyn_solutionname", "Active"),
                ("msdyn_name", "Named Component"),
                ("msdyn_componentjson", FakeDataverseService.ComponentJson(("objecttypecode", "account"))));
            var nameless = FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                ("msdyn_solutionname", "Active"),
                ("msdyn_componentjson", FakeDataverseService.ComponentJson(("objecttypecode", ""))));

            var result = InvokeProcessBatch(service,
                (61, new[] { named }),
                (61, new[] { nameless }));
            StringAssert.Contains(result, "[account].[Named Component]");
            StringAssert.Contains(result, "[] - [", "a missing msdyn_name renders as an empty name.");
        }

        [TestMethod]
        public void ProcessBatchResults_AttributeBranch_SecondPass_Handles_Unknown_And_Idless_Metadata()
        {
            var entityId = Guid.NewGuid();
            var orphanEntityId = Guid.NewGuid();
            var matchedAttribute = FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                ("msdyn_solutionname", "Active"),
                ("msdyn_componentjson", FakeDataverseService.ComponentJson(
                    ("entityid", entityId.ToString()),
                    ("logicalname", "new_field"))));
            var orphanAttribute = FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                ("msdyn_solutionname", "Active"),
                ("msdyn_componentjson", FakeDataverseService.ComponentJson(
                    ("entityid", orphanEntityId.ToString()),
                    ("logicalname", "new_orphan"))));

            var service = new FakeDataverseService();
            var withId = MakeEntityMetadata("new_entity", "new_Entity", entityId);
            var idless = MakeEntityMetadata("new_idless", "new_Idless");
            service.ExecuteHandler = request => FakeDataverseService.Response<RetrieveMetadataChangesResponse>(
                "EntityMetadata", new EntityMetadataCollection { withId, idless });

            var result = InvokeProcessBatch(service,
                (2, new[] { matchedAttribute }),
                (2, new[] { orphanAttribute }));
            StringAssert.Contains(result, "[new_entity].[new_field]");
            Assert.IsFalse(result.Contains(orphanEntityId.ToString()),
                "an entityid without matching metadata renders nothing.");
        }

        #endregion
    }
}
