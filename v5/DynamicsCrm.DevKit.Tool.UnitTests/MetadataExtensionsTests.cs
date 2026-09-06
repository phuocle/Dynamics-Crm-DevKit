using System;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using DynamicsCrm.DevKit.Tool.Extensions;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class MetadataExtensionsTests
    {
        private static Label Label(string text)
        {
            var label = new Label(text, 1033);
            label.UserLocalizedLabel = new LocalizedLabel(text, 1033);
            return label;
        }

        private static void SetBackingField(object target, string name, object value)
        {
            var property = target.GetType().GetProperty(name);
            var setter = property?.GetSetMethod(true);
            if (setter != null)
            {
                setter.Invoke(target, new[] { value });
                return;
            }
            var field = target.GetType().GetField($"<{name}>k__BackingField",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance)
                ?? target.GetType().GetField($"_{char.ToLowerInvariant(name[0])}{name.Substring(1)}",
                    System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            field.SetValue(target, value);
        }

        private static StringAttributeMetadata Attr(string logicalName, string schemaName = null, bool isCustom = false)
        {
            var attr = new StringAttributeMetadata { LogicalName = logicalName, SchemaName = schemaName ?? logicalName };
            if (isCustom) SetBackingField(attr, "IsCustomAttribute", true);
            return attr;
        }

        internal static void SetProp(object target, string name, object value) =>
            target.GetType().GetProperty(name).SetValue(target, value);

        private static StringAttributeMetadata MakeFiltered(string logicalName, string attributeOf)
        {
            var attr = Attr(logicalName);
            SetBackingField(attr, "AttributeOf", attributeOf);
            return attr;
        }

        [TestMethod]
        public void ToWikiString_LabelNull_ReturnsNull()
        {
            Label label = null;
            Assert.IsNull(label.ToWikiString());
        }

        [TestMethod]
        public void ToWikiString_NullUserLocalizedLabel_ReturnsNull()
        {
            var label = new Label();
            Assert.IsNull(label.ToWikiString());
        }

        [TestMethod]
        public void ToWikiString_TrimsAndReplacesNewLines()
        {
            var label = Label("  hello\r\nworld\nagain  ");
            Assert.AreEqual("hello. world. again", label.ToWikiString());
        }

        [TestMethod]
        public void ToWikiString_DateTime_Formats()
        {
            var date = new DateTime(2026, 1, 2, 3, 4, 5);
            Assert.AreEqual("2026-Jan-02 03:04:05", date.ToWikiString());
        }

        [TestMethod]
        public void ToWikiBooleanString_NullableBool()
        {
            bool? yes = true;
            bool? no = false;
            bool? none = null;
            Assert.AreEqual("✅", yes.ToWikiBooleanString());
            Assert.AreEqual("⬜", no.ToWikiBooleanString());
            Assert.AreEqual("⬜", none.ToWikiBooleanString());
        }

        [TestMethod]
        public void ToWikiBooleanString_Bool()
        {
            Assert.AreEqual("✅", true.ToWikiBooleanString());
            Assert.AreEqual("⬜", false.ToWikiBooleanString());
        }

        [TestMethod]
        public void ToWikiBooleanString_BooleanManagedProperty()
        {
            BooleanManagedProperty value = null;
            Assert.IsNull(value.ToWikiBooleanString());
            Assert.AreEqual("✅", new BooleanManagedProperty(true).ToWikiBooleanString());
            Assert.AreEqual("⬜", new BooleanManagedProperty(false).ToWikiBooleanString());
        }

        [TestMethod]
        public void ToWikiBooleanString_AttributeRequiredLevel()
        {
            Assert.AreEqual("✅", new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.ApplicationRequired).ToWikiBooleanString());
            Assert.AreEqual("✅", new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.SystemRequired).ToWikiBooleanString());
            Assert.AreEqual("🔳", new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.Recommended).ToWikiBooleanString());
            Assert.AreEqual("⬜", new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None).ToWikiBooleanString());
        }

        [TestMethod]
        public void ToWikiOptionSetString_NullableAttributeTypeCode()
        {
            AttributeTypeCode? nullValue = null;
            Assert.AreEqual(string.Empty, nullValue.ToWikiOptionSetString());
            AttributeTypeCode? value = AttributeTypeCode.String;
            Assert.AreEqual("String", value.ToWikiOptionSetString());
        }

        [TestMethod]
        public void ToWikiOptionSetString_AttributeTypeCode()
        {
            Assert.AreEqual("Memo", AttributeTypeCode.Memo.ToWikiOptionSetString());
        }

        private static EntityMetadata MakeEntity(string tableType, Guid? dataProviderId = null)
        {
            var entity = new EntityMetadata { TableType = tableType };
            if (dataProviderId.HasValue)
            {
                typeof(EntityMetadata).GetProperty("DataProviderId").SetValue(entity, dataProviderId);
            }
            return entity;
        }

        [TestMethod]
        public void IsVirtualEntity_Various()
        {
            Assert.IsFalse(MakeEntity("Standard").IsVirtualEntity());
            Assert.IsFalse(MakeEntity("Elastic", Guid.NewGuid()).IsVirtualEntity());
            Assert.IsTrue(MakeEntity("Standard", Guid.NewGuid()).IsVirtualEntity());
        }

        [TestMethod]
        public void IsElasticEntity_Various()
        {
            Assert.IsFalse(MakeEntity("Standard").IsElasticEntity());
            Assert.IsTrue(MakeEntity("elastic").IsElasticEntity());
        }

        [TestMethod]
        public void GetEntityTypeName_All()
        {
            Assert.AreEqual("Standard", MakeEntity("Standard").GetEntityTypeName());
            Assert.AreEqual("Elastic", MakeEntity("Elastic").GetEntityTypeName());
            Assert.AreEqual("Virtual", MakeEntity("Standard", Guid.NewGuid()).GetEntityTypeName());
        }

        [TestMethod]
        public void GetOwnershipTypeName_NullAndValue()
        {
            var entity = new EntityMetadata();
            Assert.AreEqual("None", entity.GetOwnershipTypeName());
            typeof(EntityMetadata).GetProperty("OwnershipType").SetValue(entity, OwnershipTypes.UserOwned);
            Assert.AreEqual("UserOwned", entity.GetOwnershipTypeName());
        }

        [TestMethod]
        public void ToWikiAttributes_FiltersAndSorts()
        {
            var attributes = new AttributeMetadata[]
            {
                Attr("zeta"),
                Attr("createdby"),
                Attr("ownerid"),
                Attr("foo_rollup_date"),
                Attr("foo_rollup_state"),
                Attr("alpha", "zschema", isCustom: true),
                Attr("beta", "aschema"),
                MakeFiltered("gamma", "beta")
            };
            var result = attributes.ToWikiAttributes();
            // note: ToWikiAttributes filters ignoreAttributes only; ownerid (ignoreAttributes2) is intentionally kept here
            Assert.AreEqual("alpha|beta|ownerid|zeta", string.Join("|", result.Select(x => x.LogicalName)));
        }

        [TestMethod]
        public void UtcToUserLocal_AddsOffset()
        {
            var utc = new DateTime(2026, 1, 2, 0, 0, 0, DateTimeKind.Utc);
            var local = utc.UtcToUserLocal(TimeSpan.FromHours(7));
            Assert.AreEqual(new DateTime(2026, 1, 2, 7, 0, 0), local);
        }
    }
}
