using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Reflection;
using System.Text;
using Microsoft.Xrm.Sdk;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Lib
{
    [TestClass]
    public class DevKitJsonCompactTest
    {
        #region Helpers

        private static string Compress(string uncompressedString)
        {
            byte[] compressedBytes;
            using (var uncompressedStream = new MemoryStream(Encoding.UTF8.GetBytes(uncompressedString)))
            {
                using (var compressedStream = new MemoryStream())
                {
                    using (var compressorStream = new DeflateStream(compressedStream, CompressionLevel.Fastest, true))
                    {
                        uncompressedStream.CopyTo(compressorStream);
                    }
                    compressedBytes = compressedStream.ToArray();
                }
            }
            return Convert.ToBase64String(compressedBytes);
        }

        private static string Decompress(string compressedString)
        {
            byte[] decompressedBytes;
            var compressedStream = new MemoryStream(Convert.FromBase64String(compressedString));
            using (var decompressorStream = new DeflateStream(compressedStream, CompressionMode.Decompress))
            {
                using (var decompressedStream = new MemoryStream())
                {
                    decompressorStream.CopyTo(decompressedStream);
                    decompressedBytes = decompressedStream.ToArray();
                }
            }
            return Encoding.UTF8.GetString(decompressedBytes);
        }

        private static RemoteExecutionContext BuildTestContext()
        {
            var ctx = new RemoteExecutionContext();
            var fields = ctx.GetType().GetFields(BindingFlags.NonPublic | BindingFlags.Instance);
            void Set(string name, object value)
            {
                foreach (var f in fields)
                    if (f.Name == name) { f.SetValue(ctx, value); return; }
            }

            var accountId = Guid.Parse("d4e5f6a7-b8c9-0123-defa-234567890123");
            var userId = Guid.Parse("44444444-5555-6666-7777-888888888888");

            Set("_messageName", "Update");
            Set("_primaryEntityName", "account");
            Set("_primaryEntityId", accountId);
            Set("_depth", 1);
            Set("_stage", 40);
            Set("_mode", 0);
            Set("_userId", userId);
            Set("_initiatingUserId", userId);
            Set("_organizationName", "ContosoOrg");
            Set("_organizationId", Guid.Parse("11111111-2222-3333-4444-555555555555"));
            Set("_businessUnitId", Guid.Parse("a1b2c3d4-e5f6-7890-abcd-ef1234567890"));
            Set("_correlationId", Guid.Parse("b2c3d4e5-f6a7-8901-bcde-f12345678901"));

            var target = new Entity("account", accountId);
            target["name"] = "Contoso Ltd";
            target["revenue"] = new Money(5000000m);
            target["numberofemployees"] = 1000;
            target["primarycontactid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "Jane Smith" };
            target["statuscode"] = new OptionSetValue(1);
            target["createdon"] = new DateTime(2025, 6, 15, 9, 0, 0, DateTimeKind.Utc);
            ctx.InputParameters["Target"] = target;

            var preImage = new Entity("account", accountId);
            preImage["name"] = "Old Contoso";
            preImage["revenue"] = new Money(1000000m);
            ctx.PreEntityImages["PreImage"] = preImage;

            return ctx;
        }

        /// <summary>
        /// Simulates what DebugContext does: serialize compact, format as C# code snippet.
        /// Returns the trace output string.
        /// </summary>
        private static string SimulateDebugContext(IExecutionContext context)
        {
            const int MAX_TRACE_BYTES = 10 * 1024;
            var json = DevKitJson.SerializeContext(context);
            if (Encoding.UTF8.GetByteCount(json) > MAX_TRACE_BYTES)
            {
                json = $"var json = \"{Compress(json)}\".Decompress();";
                if (Encoding.UTF8.GetByteCount(json) > MAX_TRACE_BYTES)
                    json = "DebugContext: context exceeds 10 KB even after compact + compress";
            }
            else
            {
                if (json.Contains("'"))
                {
                    json = $"var json = @\"{json.Replace("\"", "\"\"")}\";";
                }
                else
                {
                    json = json.Replace("\"", "'");
                    json = $"var json = @\"{json}\".Replace(\"'\", \"\\\"\");";
                }
            }
            return json;
        }

        /// <summary>
        /// Extracts the JSON string from a DebugContext output by evaluating the C# snippet logic.
        /// </summary>
        private static string ExtractJsonFromDebugOutput(string debugOutput)
        {
            if (debugOutput.StartsWith("var json = @\"") && debugOutput.EndsWith("\".Replace(\"'\", \"\\\"\");"))
            {
                var inner = debugOutput.Substring("var json = @\"".Length);
                inner = inner.Substring(0, inner.Length - "\".Replace(\"'\", \"\\\"\");".Length);
                return inner.Replace("'", "\"");
            }
            if (debugOutput.StartsWith("var json = @\"") && debugOutput.EndsWith("\";"))
            {
                var inner = debugOutput.Substring("var json = @\"".Length);
                inner = inner.Substring(0, inner.Length - "\";".Length);
                return inner.Replace("\"\"", "\"");
            }
            if (debugOutput.StartsWith("var json = \"") && debugOutput.EndsWith("\".Decompress();"))
            {
                var inner = debugOutput.Substring("var json = \"".Length);
                inner = inner.Substring(0, inner.Length - "\".Decompress();".Length);
                return Decompress(inner);
            }
            return null;
        }

        #endregion

        #region Compact Size Reduction

        [TestMethod]
        public void Compact_IsSmallerThanFull()
        {
            var ctx = BuildTestContext();
            var full = DevKitJson.Serialize(ctx);
            var compact = DevKitJson.SerializeCompact(ctx);

            Assert.IsTrue(compact.Length < full.Length,
                $"Compact ({compact.Length}) should be smaller than Full ({full.Length})");
        }

        [TestMethod]
        public void Compact_Entity_IsSmallerThanFull()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "Contoso";
            entity["revenue"] = new Money(1000m);
            entity["primarycontactid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "John" };
            entity["statuscode"] = new OptionSetValue(1);
            entity.FormattedValues["statuscode"] = "Active";

            var full = DevKitJson.Serialize(entity);
            var compact = DevKitJson.SerializeCompact(entity);

            Assert.IsTrue(compact.Length < full.Length,
                $"Compact ({compact.Length}) should be smaller than Full ({full.Length})");
        }

        [TestMethod]
        public void CompactContext_IsSmallerThanFull()
        {
            var ctx = BuildTestContext();
            var full = DevKitJson.SerializeContextFull(ctx);
            var compact = DevKitJson.SerializeContext(ctx);

            Assert.IsTrue(compact.Length < full.Length,
                $"Compact ({compact.Length}) should be smaller than Full ({full.Length})");

            var savings = 100.0 * (full.Length - compact.Length) / full.Length;
            Assert.IsTrue(savings > 10, $"Expected >10% savings, got {savings:F1}%");
        }

        #endregion

        #region Compact Roundtrip - Primitives & Dataverse Types

        [TestMethod]
        public void Compact_Entity_Roundtrip()
        {
            var id = Guid.NewGuid();
            var entity = new Entity("account", id);
            entity["name"] = "Contoso";
            entity["numberofemployees"] = 500;
            entity["revenue"] = new Money(1000000m);
            entity["primarycontactid"] = new EntityReference("contact", Guid.NewGuid()) { Name = "John" };

            var compact = DevKitJson.SerializeCompact(entity);
            Assert.Contains("\"_t\":\"E\"", compact);
            Assert.Contains("\"ln\":\"account\"", compact);
            Assert.DoesNotContain("\"__type\"", compact);
            Assert.DoesNotContain("\"LogicalName\"", compact);

            var result = DevKitJson.Deserialize<Entity>(compact);
            Assert.AreEqual("account", result.LogicalName);
            Assert.AreEqual(id, result.Id);
            Assert.AreEqual("Contoso", result["name"]);
            Assert.AreEqual(500, result["numberofemployees"]);
            Assert.AreEqual(1000000m, ((Money)result["revenue"]).Value);
            Assert.AreEqual("John", ((EntityReference)result["primarycontactid"]).Name);
        }

        [TestMethod]
        public void Compact_EntityWithFormattedValues_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["statuscode"] = new OptionSetValue(1);
            entity.FormattedValues["statuscode"] = "Active";

            var compact = DevKitJson.SerializeCompact(entity);
            Assert.Contains("\"fv\":", compact);
            Assert.DoesNotContain("\"FormattedValues\"", compact);

            var result = DevKitJson.Deserialize<Entity>(compact);
            Assert.AreEqual("Active", result.FormattedValues["statuscode"]);
        }

        [TestMethod]
        public void Compact_Money_Roundtrip()
        {
            var money = new Money(1234.56m);
            var compact = DevKitJson.SerializeCompact(money);
            Assert.Contains("\"_t\":\"M\"", compact);
            Assert.Contains("\"v\":", compact);

            var result = DevKitJson.Deserialize<Money>(compact);
            Assert.AreEqual(1234.56m, result.Value);
        }

        [TestMethod]
        public void Compact_OptionSetValue_Roundtrip()
        {
            var osv = new OptionSetValue(100000001);
            var compact = DevKitJson.SerializeCompact(osv);
            Assert.Contains("\"_t\":\"O\"", compact);

            var result = DevKitJson.Deserialize<OptionSetValue>(compact);
            Assert.AreEqual(100000001, result.Value);
        }

        [TestMethod]
        public void Compact_OptionSetValueCollection_Roundtrip()
        {
            var osvc = new OptionSetValueCollection { new OptionSetValue(1), new OptionSetValue(2), new OptionSetValue(3) };
            var compact = DevKitJson.SerializeCompact(osvc);
            Assert.Contains("\"_t\":\"OC\"", compact);

            var result = DevKitJson.Deserialize<OptionSetValueCollection>(compact);
            Assert.AreEqual(3, result.Count);
            Assert.AreEqual(1, result[0].Value);
        }

        [TestMethod]
        public void Compact_EntityReference_Roundtrip()
        {
            var id = Guid.NewGuid();
            var er = new EntityReference("account", id) { Name = "Contoso" };
            var compact = DevKitJson.SerializeCompact(er);
            Assert.Contains("\"_t\":\"ER\"", compact);
            Assert.Contains("\"ln\":\"account\"", compact);
            Assert.Contains("\"n\":\"Contoso\"", compact);

            var result = DevKitJson.Deserialize<EntityReference>(compact);
            Assert.AreEqual("account", result.LogicalName);
            Assert.AreEqual(id, result.Id);
            Assert.AreEqual("Contoso", result.Name);
        }

        [TestMethod]
        public void Compact_AliasedValue_Roundtrip()
        {
            var av = new AliasedValue("contact", "fullname", "Jane Doe");
            var compact = DevKitJson.SerializeCompact(av);
            Assert.Contains("\"_t\":\"AV\"", compact);
            Assert.Contains("\"eln\":\"contact\"", compact);

            var result = DevKitJson.Deserialize<AliasedValue>(compact);
            Assert.AreEqual("contact", result.EntityLogicalName);
            Assert.AreEqual("fullname", result.AttributeLogicalName);
            Assert.AreEqual("Jane Doe", result.Value);
        }

        [TestMethod]
        public void Compact_BooleanManagedProperty_Roundtrip()
        {
            var bmp = new BooleanManagedProperty(true) { CanBeChanged = false };
            var compact = DevKitJson.SerializeCompact(bmp);
            Assert.Contains("\"_t\":\"BM\"", compact);
            Assert.Contains("\"cc\":", compact);

            var result = DevKitJson.Deserialize<BooleanManagedProperty>(compact);
            Assert.IsTrue(result.Value);
            Assert.IsFalse(result.CanBeChanged);
        }

        [TestMethod]
        public void Compact_EntityCollection_Roundtrip()
        {
            var ec = new EntityCollection { EntityName = "account" };
            var e1 = new Entity("account", Guid.NewGuid());
            e1["name"] = "Contoso";
            ec.Entities.Add(e1);

            var compact = DevKitJson.SerializeCompact(ec);
            Assert.Contains("\"_t\":\"EC\"", compact);
            Assert.Contains("\"en\":\"account\"", compact);
            Assert.Contains("\"es\":[", compact);

            var result = DevKitJson.Deserialize<EntityCollection>(compact);
            Assert.AreEqual("account", result.EntityName);
            Assert.HasCount(1, result.Entities);
            Assert.AreEqual("Contoso", result.Entities[0]["name"]);
        }

        [TestMethod]
        public void Compact_DateTime_Roundtrip()
        {
            var dt = new DateTime(2025, 3, 15, 14, 30, 0, DateTimeKind.Utc);
            var compact = DevKitJson.SerializeCompact(dt);
            Assert.Contains("\"_t\":\"DT\"", compact);

            var result = DevKitJson.Deserialize<DateTime>(compact);
            Assert.AreEqual(dt, result);
        }

        [TestMethod]
        public void Compact_Guid_Roundtrip()
        {
            var guid = Guid.Parse("a1b2c3d4-e5f6-7890-abcd-ef1234567890");
            var compact = DevKitJson.SerializeCompact(guid);
            Assert.Contains("\"_t\":\"G\"", compact);

            var result = DevKitJson.Deserialize<Guid>(compact);
            Assert.AreEqual(guid, result);
        }

        [TestMethod]
        public void Compact_ByteArray_Roundtrip()
        {
            var data = new byte[] { 0x48, 0x65, 0x6C, 0x6C, 0x6F };
            var compact = DevKitJson.SerializeCompact(data);
            Assert.Contains("\"_t\":\"F\"", compact);

            var result = (byte[])DevKitJson.Deserialize(compact);
            CollectionAssert.AreEqual(data, result);
        }

        #endregion

        #region Compact Roundtrip - RemoteExecutionContext

        [TestMethod]
        public void Compact_RemoteExecutionContext_Roundtrip()
        {
            var ctx = BuildTestContext();
            var compact = DevKitJson.SerializeCompact(ctx);

            Assert.Contains("\"_t\":\"RC\"", compact);
            Assert.Contains("\"mn\":\"Update\"", compact);
            Assert.Contains("\"pn\":\"account\"", compact);
            Assert.DoesNotContain("\"__type\"", compact);
            Assert.DoesNotContain("\"MessageName\"", compact);

            var result = DevKitJson.Deserialize<RemoteExecutionContext>(compact);
            Assert.AreEqual("Update", result.MessageName);
            Assert.AreEqual("account", result.PrimaryEntityName);
            Assert.AreEqual(1, result.Depth);
            Assert.AreEqual(40, result.Stage);
            Assert.AreEqual("ContosoOrg", result.OrganizationName);

            var target = (Entity)result.InputParameters["Target"];
            Assert.AreEqual("Contoso Ltd", target["name"]);
            Assert.AreEqual(5000000m, ((Money)target["revenue"]).Value);
            Assert.AreEqual("Jane Smith", ((EntityReference)target["primarycontactid"]).Name);

            var preImage = result.PreEntityImages["PreImage"];
            Assert.AreEqual("Old Contoso", preImage["name"]);
        }

        [TestMethod]
        public void CompactContext_MockContext_Roundtrip()
        {
            var mock = new MockPluginExecutionContext
            {
                BusinessUnitId = Guid.NewGuid(),
                CorrelationId = Guid.NewGuid(),
                Depth = 2,
                InitiatingUserId = Guid.NewGuid(),
                IsExecutingOffline = false,
                IsInTransaction = true,
                IsOfflinePlayback = false,
                MessageName = "Create",
                Mode = 0,
                OperationCreatedOn = new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc),
                OperationId = Guid.NewGuid(),
                OrganizationId = Guid.NewGuid(),
                OrganizationName = "TestOrg",
                PrimaryEntityId = Guid.NewGuid(),
                PrimaryEntityName = "contact",
                RequestId = Guid.NewGuid(),
                SecondaryEntityName = "none",
                Stage = 20,
                UserId = Guid.NewGuid(),
                InputParameters = new ParameterCollection { { "Target", new Entity("contact") } },
                OutputParameters = new ParameterCollection(),
                SharedVariables = new ParameterCollection(),
                PreEntityImages = new EntityImageCollection(),
                PostEntityImages = new EntityImageCollection(),
                OwningExtension = new EntityReference("sdkmessageprocessingstep", Guid.NewGuid()),
                ParentContext = null,
                IsPortalsClientCall = true,
                InitiatingUserAgent = "Mozilla/5.0",
                EnvironmentId = Guid.NewGuid(),
                TenantId = Guid.NewGuid(),
                IsApplicationUser = true
            };

            var compact = DevKitJson.SerializeContext(mock);
            Assert.Contains("\"_t\":\"RC\"", compact);

            var result = DevKitJson.Deserialize<RemoteExecutionContext>(compact);
            Assert.AreEqual("Create", result.MessageName);
            Assert.AreEqual("contact", result.PrimaryEntityName);
            Assert.AreEqual(2, result.Depth);
            Assert.AreEqual(20, result.Stage);
        }

        [TestMethod]
        public void FullFormat_AllDataverseTypesJson_StillWorks()
        {
            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            var path = Path.Combine(basePath, "Lib", "AllDataverseTypes.json");
            var json = File.ReadAllText(path);

            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.AreEqual("Update", ctx.MessageName);
            Assert.AreEqual("account", ctx.PrimaryEntityName);

            var target = (Entity)ctx.InputParameters["Target"];
            Assert.AreEqual("Contoso Ltd", target["name"]);
        }

        #endregion

        #region Single Quote in Data

        [TestMethod]
        public void Compact_EntityWithSingleQuoteInData_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "it's a test";
            entity["description"] = "McDonald's restaurant";

            var compact = DevKitJson.SerializeCompact(entity);
            Assert.Contains("it's a test", compact);

            var result = DevKitJson.Deserialize<Entity>(compact);
            Assert.AreEqual("it's a test", result["name"]);
            Assert.AreEqual("McDonald's restaurant", result["description"]);
        }

        [TestMethod]
        public void Compact_EntityWithDoubleQuoteInData_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "he said \"hello\"";

            var compact = DevKitJson.SerializeCompact(entity);
            var result = DevKitJson.Deserialize<Entity>(compact);
            Assert.AreEqual("he said \"hello\"", result["name"]);
        }

        [TestMethod]
        public void Compact_EntityWithBothQuotesInData_Roundtrip()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "it's a \"test\"";
            entity["description"] = "McDonald's says \"I'm lovin' it\"";

            var compact = DevKitJson.SerializeCompact(entity);
            var result = DevKitJson.Deserialize<Entity>(compact);
            Assert.AreEqual("it's a \"test\"", result["name"]);
            Assert.AreEqual("McDonald's says \"I'm lovin' it\"", result["description"]);
        }

        #endregion

        #region DebugContext Output Format - No Single Quote

        [TestMethod]
        public void DebugOutput_NoSingleQuote_UsesReplaceFormat()
        {
            var ctx = BuildTestContext();
            var output = SimulateDebugContext(ctx);

            Assert.StartsWith("var json = @\"", output);
            Assert.EndsWith("\".Replace(\"'\", \"\\\"\");", output);

            var json = ExtractJsonFromDebugOutput(output);
            Assert.IsNotNull(json);

            var result = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.AreEqual("Update", result.MessageName);
            Assert.AreEqual("account", result.PrimaryEntityName);
            Assert.AreEqual(40, result.Stage);

            var target = (Entity)result.InputParameters["Target"];
            Assert.AreEqual("Contoso Ltd", target["name"]);
            Assert.AreEqual(5000000m, ((Money)target["revenue"]).Value);
        }

        #endregion

        #region DebugContext Output Format - With Single Quote

        [TestMethod]
        public void DebugOutput_WithSingleQuote_UsesDoubledQuoteFormat()
        {
            var ctx = BuildTestContext();
            ((Entity)ctx.InputParameters["Target"])["name"] = "McDonald's Corp";

            var output = SimulateDebugContext(ctx);

            Assert.StartsWith("var json = @\"", output);
            Assert.EndsWith("\";", output);
            Assert.DoesNotContain(".Replace(", output);

            var json = ExtractJsonFromDebugOutput(output);
            Assert.IsNotNull(json);

            var result = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.AreEqual("Update", result.MessageName);
            var target = (Entity)result.InputParameters["Target"];
            Assert.AreEqual("McDonald's Corp", target["name"]);
        }

        #endregion

        #region DebugContext Output Format - Both Quotes in Data

        [TestMethod]
        public void DebugOutput_WithBothQuotes_UsesDoubledQuoteFormat_DataPreserved()
        {
            var ctx = BuildTestContext();
            ((Entity)ctx.InputParameters["Target"])["name"] = "it's a \"test\"";
            ((Entity)ctx.InputParameters["Target"])["description"] = "McDonald's says \"I'm lovin' it\"";

            var output = SimulateDebugContext(ctx);

            Assert.StartsWith("var json = @\"", output);
            Assert.EndsWith("\";", output);

            var json = ExtractJsonFromDebugOutput(output);
            Assert.IsNotNull(json);

            var result = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            var target = (Entity)result.InputParameters["Target"];
            Assert.AreEqual("it's a \"test\"", target["name"]);
            Assert.AreEqual("McDonald's says \"I'm lovin' it\"", target["description"]);
        }

        #endregion

        #region Compress / Decompress Roundtrip

        [TestMethod]
        public void CompressDecompress_Roundtrip()
        {
            var ctx = BuildTestContext();
            var json = DevKitJson.SerializeContext(ctx);

            var compressed = Compress(json);
            var decompressed = Decompress(compressed);

            Assert.AreEqual(json, decompressed);

            var result = DevKitJson.Deserialize<RemoteExecutionContext>(decompressed);
            Assert.AreEqual("Update", result.MessageName);
            Assert.AreEqual("account", result.PrimaryEntityName);
        }

        [TestMethod]
        public void DebugOutput_Compressed_ExtractsCorrectJson()
        {
            var ctx = BuildTestContext();
            var json = DevKitJson.SerializeContext(ctx);

            var compressed = Compress(json);
            var debugOutput = $"var json = \"{compressed}\".Decompress();";

            var extracted = ExtractJsonFromDebugOutput(debugOutput);
            Assert.IsNotNull(extracted);
            Assert.AreEqual(json, extracted);

            var result = DevKitJson.Deserialize<RemoteExecutionContext>(extracted);
            Assert.AreEqual("Update", result.MessageName);
        }

        #endregion

        #region Mixed Format - Full JSON deserializes after compact changes

        [TestMethod]
        public void Deserialize_FullFormat_StillWorksAfterCompactChanges()
        {
            var fullJson = "{\"__type\":\"Entity\",\"LogicalName\":\"account\",\"Id\":\"d4e5f6a7-b8c9-0123-defa-234567890123\",\"Attributes\":{\"name\":\"Test\"}}";
            var result = DevKitJson.Deserialize<Entity>(fullJson);
            Assert.AreEqual("account", result.LogicalName);
            Assert.AreEqual("Test", result["name"]);
        }

        [TestMethod]
        public void Deserialize_CompactFormat_Works()
        {
            var compactJson = "{\"_t\":\"E\",\"ln\":\"account\",\"id\":\"d4e5f6a7-b8c9-0123-defa-234567890123\",\"a\":{\"name\":\"Test\"}}";
            var result = DevKitJson.Deserialize<Entity>(compactJson);
            Assert.AreEqual("account", result.LogicalName);
            Assert.AreEqual("Test", result["name"]);
        }

        [TestMethod]
        public void Compact_SerializeThenFull_Deserialize_SameResult()
        {
            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "Contoso";
            entity["revenue"] = new Money(5000m);

            var full = DevKitJson.Serialize(entity);
            var compact = DevKitJson.SerializeCompact(entity);

            var fromFull = DevKitJson.Deserialize<Entity>(full);
            var fromCompact = DevKitJson.Deserialize<Entity>(compact);

            Assert.AreEqual(fromFull.LogicalName, fromCompact.LogicalName);
            Assert.AreEqual(fromFull.Id, fromCompact.Id);
            Assert.AreEqual(fromFull["name"], fromCompact["name"]);
            Assert.AreEqual(((Money)fromFull["revenue"]).Value, ((Money)fromCompact["revenue"]).Value);
        }

        #endregion

        #region Entity with all attribute types - Compact Roundtrip

        [TestMethod]
        public void Compact_Entity_AllAttributeTypes_Roundtrip()
        {
            var contactId = Guid.NewGuid();
            var rawGuid = Guid.NewGuid();
            var fileData = new byte[] { 0x89, 0x50, 0x4E, 0x47 };

            var entity = new Entity("account", Guid.NewGuid());
            entity["name"] = "Contoso Ltd";
            entity["numberofemployees"] = 500;
            entity["versionnumber"] = 9876543210L;
            entity["new_latitude"] = 47.6062;
            entity["exchangerate"] = 1.2345m;
            entity["donotphone"] = true;
            entity["createdon"] = new DateTime(2025, 6, 15, 10, 30, 0, DateTimeKind.Utc);
            entity["processid"] = rawGuid;
            entity["revenue"] = new Money(5000000.99m);
            entity["statuscode"] = new OptionSetValue(1);
            entity["new_industries"] = new OptionSetValueCollection { new OptionSetValue(100), new OptionSetValue(200) };
            entity["primarycontactid"] = new EntityReference("contact", contactId) { Name = "John Doe" };
            entity["contact.fullname"] = new AliasedValue("contact", "fullname", "Jane Smith");
            entity["iscustomizable"] = new BooleanManagedProperty(true) { CanBeChanged = false };
            entity["entityimage"] = fileData;
            entity["description"] = null;
            entity.FormattedValues["statuscode"] = "Active";
            entity.FormattedValues["revenue"] = "$5,000,000.99";

            var compact = DevKitJson.SerializeCompact(entity);
            var result = DevKitJson.Deserialize<Entity>(compact);

            Assert.AreEqual("Contoso Ltd", result["name"]);
            Assert.AreEqual(500, result["numberofemployees"]);
            Assert.AreEqual(9876543210L, (long)result["versionnumber"]);
            Assert.AreEqual(47.6062, (double)result["new_latitude"], 4);
            Assert.AreEqual(true, result["donotphone"]);
            Assert.IsInstanceOfType(result["createdon"], typeof(DateTime));
            Assert.IsInstanceOfType(result["processid"], typeof(Guid));
            Assert.AreEqual(rawGuid, (Guid)result["processid"]);
            Assert.AreEqual(5000000.99m, ((Money)result["revenue"]).Value);
            Assert.AreEqual(1, ((OptionSetValue)result["statuscode"]).Value);
            Assert.AreEqual(2, ((OptionSetValueCollection)result["new_industries"]).Count);
            Assert.AreEqual("John Doe", ((EntityReference)result["primarycontactid"]).Name);
            Assert.AreEqual("Jane Smith", ((AliasedValue)result["contact.fullname"]).Value);
            Assert.IsTrue(((BooleanManagedProperty)result["iscustomizable"]).Value);
            CollectionAssert.AreEqual((byte[])fileData, (byte[])result["entityimage"]);
            Assert.IsNull(result["description"]);
            Assert.AreEqual("Active", result.FormattedValues["statuscode"]);
            Assert.AreEqual("$5,000,000.99", result.FormattedValues["revenue"]);
        }

        #endregion

        #region Compact JSON File - AllDataverseTypes.compact.json

        private static string ReadCompactJsonFile()
        {
            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            var path = Path.Combine(basePath, "Lib", "AllDataverseTypes.compact.json");
            return File.ReadAllText(path);
        }

        private static string ReadFullJsonFile()
        {
            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            var path = Path.Combine(basePath, "Lib", "AllDataverseTypes.json");
            return File.ReadAllText(path);
        }

        [TestMethod]
        public void CompactFile_IsSmallerThanFullFile()
        {
            var full = ReadFullJsonFile();
            var compact = ReadCompactJsonFile();

            var fullBytes = Encoding.UTF8.GetByteCount(full);
            var compactBytes = Encoding.UTF8.GetByteCount(compact);
            var savings = 100.0 * (fullBytes - compactBytes) / fullBytes;

            Assert.IsTrue(compactBytes < fullBytes,
                $"Compact ({compactBytes} bytes) should be smaller than Full ({fullBytes} bytes). Savings: {savings:F1}%");
        }

        [TestMethod]
        public void CompactFile_DeserializesToRemoteExecutionContext()
        {
            var json = ReadCompactJsonFile();
            var ctx = DevKitJson.Deserialize<RemoteExecutionContext>(json);
            Assert.IsNotNull(ctx);
            Assert.IsInstanceOfType(ctx, typeof(RemoteExecutionContext));
        }

        [TestMethod]
        public void CompactFile_ContextProperties_MatchFullFile()
        {
            var fullCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadFullJsonFile());
            var compactCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadCompactJsonFile());

            Assert.AreEqual(fullCtx.BusinessUnitId, compactCtx.BusinessUnitId);
            Assert.AreEqual(fullCtx.CorrelationId, compactCtx.CorrelationId);
            Assert.AreEqual(fullCtx.Depth, compactCtx.Depth);
            Assert.AreEqual(fullCtx.InitiatingUserId, compactCtx.InitiatingUserId);
            Assert.AreEqual(fullCtx.IsExecutingOffline, compactCtx.IsExecutingOffline);
            Assert.AreEqual(fullCtx.IsInTransaction, compactCtx.IsInTransaction);
            Assert.AreEqual(fullCtx.IsolationMode, compactCtx.IsolationMode);
            Assert.AreEqual(fullCtx.MessageName, compactCtx.MessageName);
            Assert.AreEqual(fullCtx.Mode, compactCtx.Mode);
            Assert.AreEqual(fullCtx.OrganizationId, compactCtx.OrganizationId);
            Assert.AreEqual(fullCtx.OrganizationName, compactCtx.OrganizationName);
            Assert.AreEqual(fullCtx.PrimaryEntityId, compactCtx.PrimaryEntityId);
            Assert.AreEqual(fullCtx.PrimaryEntityName, compactCtx.PrimaryEntityName);
            Assert.AreEqual(fullCtx.RequestId, compactCtx.RequestId);
            Assert.AreEqual(fullCtx.SecondaryEntityName, compactCtx.SecondaryEntityName);
            Assert.AreEqual(fullCtx.Stage, compactCtx.Stage);
            Assert.AreEqual(fullCtx.UserId, compactCtx.UserId);
        }

        [TestMethod]
        public void CompactFile_TargetEntity_AllAttributes_MatchFullFile()
        {
            var fullCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadFullJsonFile());
            var compactCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadCompactJsonFile());

            var fullTarget = (Entity)fullCtx.InputParameters["Target"];
            var compactTarget = (Entity)compactCtx.InputParameters["Target"];

            Assert.AreEqual(fullTarget.LogicalName, compactTarget.LogicalName);
            Assert.AreEqual(fullTarget.Id, compactTarget.Id);

            Assert.AreEqual(fullTarget["name"], compactTarget["name"]);
            Assert.AreEqual(((Money)fullTarget["revenue"]).Value, ((Money)compactTarget["revenue"]).Value);
            Assert.AreEqual(((Money)fullTarget["creditlimit"]).Value, ((Money)compactTarget["creditlimit"]).Value);
            Assert.AreEqual(((OptionSetValue)fullTarget["statuscode"]).Value, ((OptionSetValue)compactTarget["statuscode"]).Value);
            Assert.AreEqual(((OptionSetValue)fullTarget["industrycode"]).Value, ((OptionSetValue)compactTarget["industrycode"]).Value);

            var fullContact = (EntityReference)fullTarget["primarycontactid"];
            var compactContact = (EntityReference)compactTarget["primarycontactid"];
            Assert.AreEqual(fullContact.LogicalName, compactContact.LogicalName);
            Assert.AreEqual(fullContact.Id, compactContact.Id);
            Assert.AreEqual(fullContact.Name, compactContact.Name);

            var fullBmp = (BooleanManagedProperty)fullTarget["ismanaged"];
            var compactBmp = (BooleanManagedProperty)compactTarget["ismanaged"];
            Assert.AreEqual(fullBmp.Value, compactBmp.Value);
            Assert.AreEqual(fullBmp.CanBeChanged, compactBmp.CanBeChanged);

            Assert.AreEqual(fullTarget["numberofemployees"], compactTarget["numberofemployees"]);
            Assert.AreEqual(fullTarget["versionnumber"], compactTarget["versionnumber"]);
            Assert.AreEqual(fullTarget["donotphone"], compactTarget["donotphone"]);
            Assert.AreEqual(fullTarget["donotemail"], compactTarget["donotemail"]);

            Assert.AreEqual((DateTime)fullTarget["createdon"], (DateTime)compactTarget["createdon"]);
            Assert.AreEqual((Guid)fullTarget["accountid"], (Guid)compactTarget["accountid"]);
            CollectionAssert.AreEqual((byte[])fullTarget["entityimage"], (byte[])compactTarget["entityimage"]);
            Assert.IsNull(compactTarget["nullfield"]);

            var fullDesc = (string)fullTarget["description"];
            var compactDesc = (string)compactTarget["description"];
            Assert.AreEqual(fullDesc, compactDesc);
            Assert.Contains("\"quotes\"", compactDesc);
            Assert.Contains("\\backslash", compactDesc);
        }

        [TestMethod]
        public void CompactFile_AliasedValues_MatchFullFile()
        {
            var fullCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadFullJsonFile());
            var compactCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadCompactJsonFile());

            var fullTarget = (Entity)fullCtx.InputParameters["Target"];
            var compactTarget = (Entity)compactCtx.InputParameters["Target"];

            var fullAlias = (AliasedValue)fullTarget["c.fullname"];
            var compactAlias = (AliasedValue)compactTarget["c.fullname"];
            Assert.AreEqual(fullAlias.EntityLogicalName, compactAlias.EntityLogicalName);
            Assert.AreEqual(fullAlias.AttributeLogicalName, compactAlias.AttributeLogicalName);
            Assert.AreEqual(fullAlias.Value, compactAlias.Value);

            var fullAliasRef = (AliasedValue)fullTarget["c.parentcustomerid"];
            var compactAliasRef = (AliasedValue)compactTarget["c.parentcustomerid"];
            var fullRef = (EntityReference)fullAliasRef.Value;
            var compactRef = (EntityReference)compactAliasRef.Value;
            Assert.AreEqual(fullRef.LogicalName, compactRef.LogicalName);
            Assert.AreEqual(fullRef.Id, compactRef.Id);
            Assert.AreEqual(fullRef.Name, compactRef.Name);

            Assert.IsNull(((AliasedValue)compactTarget["c.middlename"]).Value);
        }

        [TestMethod]
        public void CompactFile_EntityCollection_MatchFullFile()
        {
            var fullCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadFullJsonFile());
            var compactCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadCompactJsonFile());

            var fullTarget = (Entity)fullCtx.InputParameters["Target"];
            var compactTarget = (Entity)compactCtx.InputParameters["Target"];

            var fullEc = (EntityCollection)fullTarget["email_to"];
            var compactEc = (EntityCollection)compactTarget["email_to"];
            Assert.AreEqual(fullEc.EntityName, compactEc.EntityName);
            Assert.AreEqual(fullEc.Entities.Count, compactEc.Entities.Count);

            Assert.AreEqual(
                ((EntityReference)fullEc.Entities[0]["partyid"]).Name,
                ((EntityReference)compactEc.Entities[0]["partyid"]).Name);
            Assert.AreEqual(
                ((EntityReference)fullEc.Entities[1]["partyid"]).Name,
                ((EntityReference)compactEc.Entities[1]["partyid"]).Name);
        }

        [TestMethod]
        public void CompactFile_FormattedValues_MatchFullFile()
        {
            var fullCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadFullJsonFile());
            var compactCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadCompactJsonFile());

            var fullTarget = (Entity)fullCtx.InputParameters["Target"];
            var compactTarget = (Entity)compactCtx.InputParameters["Target"];

            Assert.AreEqual(fullTarget.FormattedValues.Count, compactTarget.FormattedValues.Count);
            foreach (var key in fullTarget.FormattedValues.Keys)
            {
                Assert.AreEqual(fullTarget.FormattedValues[key], compactTarget.FormattedValues[key]);
            }
        }

        [TestMethod]
        public void CompactFile_Images_MatchFullFile()
        {
            var fullCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadFullJsonFile());
            var compactCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadCompactJsonFile());

            Assert.AreEqual(
                fullCtx.PreEntityImages["PreImage"]["name"],
                compactCtx.PreEntityImages["PreImage"]["name"]);
            Assert.AreEqual(
                ((Money)fullCtx.PreEntityImages["PreImage"]["revenue"]).Value,
                ((Money)compactCtx.PreEntityImages["PreImage"]["revenue"]).Value);

            Assert.AreEqual(
                fullCtx.PostEntityImages["PostImage"]["name"],
                compactCtx.PostEntityImages["PostImage"]["name"]);
            Assert.AreEqual(
                ((Money)fullCtx.PostEntityImages["PostImage"]["revenue"]).Value,
                ((Money)compactCtx.PostEntityImages["PostImage"]["revenue"]).Value);
        }

        [TestMethod]
        public void CompactFile_SharedVariables_MatchFullFile()
        {
            var fullCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadFullJsonFile());
            var compactCtx = DevKitJson.Deserialize<RemoteExecutionContext>(ReadCompactJsonFile());

            Assert.AreEqual(fullCtx.SharedVariables.Count, compactCtx.SharedVariables.Count);
            Assert.AreEqual(fullCtx.SharedVariables["IsAutoTransact"], compactCtx.SharedVariables["IsAutoTransact"]);
            Assert.AreEqual(fullCtx.SharedVariables["PluginStep"], compactCtx.SharedVariables["PluginStep"]);
            Assert.AreEqual(fullCtx.SharedVariables["RetryCount"], compactCtx.SharedVariables["RetryCount"]);
        }

        #endregion
    }
}
