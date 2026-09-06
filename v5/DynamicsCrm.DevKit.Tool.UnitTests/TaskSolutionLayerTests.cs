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
                            // activity entity relationship component (excluded by regardingobjectid lookup)
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", activityRelMetadataId),
                                ("componenttype", new OptionSetValue(10))),
                            // attribute component
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", attributeMetadataId),
                                ("componenttype", new OptionSetValue(2))),
                            // saved query, chart, dataflow(418), unknown type, null type
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", Guid.NewGuid()), ("componenttype", new OptionSetValue(26))),
                            FakeDataverseService.Row("solutioncomponent", Guid.NewGuid(),
                                ("objectid", Guid.NewGuid()), ("componenttype", new OptionSetValue(59))),
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
                        var optionSet = FakeDataverseService.OptSet(
                            FakeDataverseService.Option(1, "Entity"),
                            FakeDataverseService.Option(2, "Field"),
                            FakeDataverseService.Option(59, "Chart"),
                            FakeDataverseService.Option(80, "Model driven app"),
                            FakeDataverseService.Option(9999, "Mystery")
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
                            successes.Add((i, tag switch
                            {
                                2 => FakeDataverseService.Rows(FakeDataverseService.Row("msdyn_componentlayer", Guid.NewGuid(),
                                    ("msdyn_solutionname", "Active"),
                                    ("msdyn_componentid", Guid.NewGuid()),
                                    ("msdyn_componentjson", FakeDataverseService.ComponentJson(
                                        ("entityid", fullEntityId.ToString()),
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
    }
}
