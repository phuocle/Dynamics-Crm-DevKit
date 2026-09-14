using DynamicsCrm.DevKit.Shared.Logic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class TsFormTabsAndCommentCoverageTests
{
    private static readonly MethodInfo GetTabsInterfacesMethod =
        typeof(TsForm).GetMethod("GetTabsInterfaces", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static readonly MethodInfo GetFieldCommentByLogicalNameMethod =
        typeof(TsForm).GetMethod("GetFieldCommentByLogicalName", BindingFlags.NonPublic | BindingFlags.Static)!;

    [TestMethod]
    public void GetTabsInterfaces_NoTabs_ReturnsEmptyString()
    {
        var xml = "<form><tabs></tabs></form>";
        var result = (string)GetTabsInterfacesMethod.Invoke(null, new object[] { xml })!;
        Assert.AreEqual(string.Empty, result);
    }

    [TestMethod]
    public void GetTabsInterfaces_WithTabsAndSections_GeneratesInterfaces()
    {
        var xml = @"<form>
  <tabs>
    <tab name='tab_general' id='{11111111-1111-1111-1111-111111111111}'>
      <labels>
        <label description='General Information' languagecode='1033' />
      </labels>
      <columns>
        <column width='100%'>
          <sections>
            <section name='section_account_info' id='{22222222-2222-2222-2222-222222222222}'>
              <labels>
                <label description='Account Info' languagecode='1033' />
              </labels>
            </section>
            <section name='ref_pan_section' id='{33333333-3333-3333-3333-333333333333}'>
              <labels>
                <label description='Reference Panel' languagecode='1033' />
              </labels>
            </section>
          </sections>
        </column>
      </columns>
    </tab>
    <tab name='tab_details' id='{44444444-4444-4444-4444-444444444444}'>
      <labels>
        <label description='Details' languagecode='1033' />
      </labels>
      <columns>
        <column width='100%'>
          <sections>
            <section name='section_additional' id='{55555555-5555-5555-5555-555555555555}'>
              <labels>
                <label description='Additional Details' languagecode='1033' />
              </labels>
            </section>
          </sections>
        </column>
      </columns>
    </tab>
  </tabs>
</form>";

        var result = (string)GetTabsInterfacesMethod.Invoke(null, new object[] { xml })!;
        Assert.IsFalse(string.IsNullOrEmpty(result));
        Assert.IsTrue(result.Contains("export interface Itab_generalTabSections"));
        Assert.IsTrue(result.Contains("section_account_info: DevKit.Controls.Section;"));
        // ref_pan section should be excluded per code logic
        Assert.IsFalse(result.Contains("ref_pan_section:"));
        Assert.IsTrue(result.Contains("export interface Itab_generalTab extends DevKit.Controls.ITab"));
        Assert.IsTrue(result.Contains("Section: Itab_generalTabSections;"));
        Assert.IsTrue(result.Contains("export interface ITabs"));
        Assert.IsTrue(result.Contains("tab_general: Itab_generalTab;"));
        Assert.IsTrue(result.Contains("tab_details: Itab_detailsTab;"));
    }

    [TestMethod]
    public void GetFieldCommentByLogicalName_NullOrEmpty_ReturnsNull()
    {
        var result1 = (string?)GetFieldCommentByLogicalNameMethod.Invoke(null, new object?[] { null });
        Assert.IsNull(result1);

        var result2 = (string?)GetFieldCommentByLogicalNameMethod.Invoke(null, new object[] { "" });
        Assert.IsNull(result2);
    }

    [TestMethod]
    public void GetFieldCommentByLogicalName_WithDescriptionAndDisplayName_ReturnsExpectedComment()
    {
        var attr1 = new StringAttributeMetadata
        {
            LogicalName = "name",
            Description = new Label { UserLocalizedLabel = new LocalizedLabel("Account Name Description", 1033) }
        };
        var attr2 = new StringAttributeMetadata
        {
            LogicalName = "telephone1",
            DisplayName = new Label { UserLocalizedLabel = new LocalizedLabel("Main Phone Display", 1033) }
        };
        var attr3 = new StringAttributeMetadata
        {
            LogicalName = "emailaddress1"
        };

        var entityMetadata = new EntityMetadata();
        typeof(EntityMetadata).GetProperty(nameof(EntityMetadata.Attributes))?.SetValue(entityMetadata, new AttributeMetadata[] { attr1, attr2, attr3 });
        typeof(TsForm).GetProperty("EntityMetadata", BindingFlags.NonPublic | BindingFlags.Static)!.SetValue(null, entityMetadata);

        // Priority 1: Description
        var comment1 = (string?)GetFieldCommentByLogicalNameMethod.Invoke(null, new object[] { "name" });
        Assert.AreEqual("Account Name Description", comment1);

        // Priority 2: DisplayName fallback
        var comment2 = (string?)GetFieldCommentByLogicalNameMethod.Invoke(null, new object[] { "telephone1" });
        Assert.AreEqual("Main Phone Display", comment2);

        // No description or display name -> null
        var comment3 = (string?)GetFieldCommentByLogicalNameMethod.Invoke(null, new object[] { "emailaddress1" });
        Assert.IsNull(comment3);

        // Non-existent attribute -> null
        var comment4 = (string?)GetFieldCommentByLogicalNameMethod.Invoke(null, new object[] { "nonexistent" });
        Assert.IsNull(comment4);
    }
}
