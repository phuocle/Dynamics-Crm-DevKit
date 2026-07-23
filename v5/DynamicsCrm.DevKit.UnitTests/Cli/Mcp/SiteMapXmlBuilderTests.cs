using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class SiteMapXmlBuilderTests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap.SiteMapXmlBuilder);

    private static readonly MethodInfo GetStringPropMethod = ToolType.GetMethod("GetStringProp", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo NormalizeBoolPropMethod = ToolType.GetMethod("NormalizeBoolProp", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo BuildSubAreaElementMethod = ToolType.GetMethod("BuildSubAreaElement", BindingFlags.NonPublic | BindingFlags.Static)!;
    private static readonly MethodInfo InsertElementMethod = ToolType.GetMethod("InsertElement", BindingFlags.NonPublic | BindingFlags.Static)!;

    private static string GetStringProp(string json, string name)
    {
        var element = JsonDocument.Parse(json).RootElement;
        return (string)GetStringPropMethod.Invoke(null, new object[] { element, name })!;
    }

    private static string NormalizeBoolProp(string json, string name)
    {
        var element = JsonDocument.Parse(json).RootElement;
        try
        {
            return (string)NormalizeBoolPropMethod.Invoke(null, new object[] { element, name })!;
        }
        catch (TargetInvocationException ex)
        {
            throw ex.InnerException!;
        }
    }

    private static XElement BuildSubAreaElement(string json)
    {
        var element = JsonDocument.Parse(json).RootElement;
        try
        {
            return (XElement)BuildSubAreaElementMethod.Invoke(null, new object[] { element })!;
        }
        catch (TargetInvocationException ex)
        {
            throw ex.InnerException!;
        }
    }

    private static void InsertElement(XElement parent, XElement newElement, string position, string childName)
    {
        try
        {
            InsertElementMethod.Invoke(null, new object[] { parent, newElement, position, childName });
        }
        catch (TargetInvocationException ex)
        {
            throw ex.InnerException!;
        }
    }

    // ── GetStringProp Normalization ──

    [TestMethod]
    public void GetStringProp_TrimsWhitespace()
    {
        Assert.AreEqual("account", GetStringProp("{\"entity\":\"  account  \"}", "entity"));
    }

    [TestMethod]
    public void GetStringProp_EmptyString_ReturnsNull()
    {
        Assert.IsNull(GetStringProp("{\"entity\":\"   \"}", "entity"));
        Assert.IsNull(GetStringProp("{\"entity\":\"\"}", "entity"));
    }

    // ── NormalizeBoolProp ──

    [TestMethod]
    public void NormalizeBoolProp_Variations_ReturnNormalized()
    {
        Assert.AreEqual("true", NormalizeBoolProp("{\"flag\":\"True\"}", "flag"));
        Assert.AreEqual("true", NormalizeBoolProp("{\"flag\":\"1\"}", "flag"));
        Assert.AreEqual("true", NormalizeBoolProp("{\"flag\":\"yes\"}", "flag"));
        Assert.AreEqual("false", NormalizeBoolProp("{\"flag\":\"FALSE\"}", "flag"));
        Assert.AreEqual("false", NormalizeBoolProp("{\"flag\":\"0\"}", "flag"));
        Assert.AreEqual("false", NormalizeBoolProp("{\"flag\":\"no\"}", "flag"));
    }

    [TestMethod]
    public void NormalizeBoolProp_Invalid_Throws()
    {
        try
        {
            NormalizeBoolProp("{\"flag\":\"whatever\"}", "flag");
            Assert.Fail("Expected InvalidOperationException");
        }
        catch (InvalidOperationException ex)
        {
            Assert.IsTrue(ex.Message.Contains("must be a boolean"));
        }
    }

    // ── BuildSubAreaElement ──

    [TestMethod]
    public void BuildSubAreaElement_MissingIdentity_Throws()
    {
        try
        {
            BuildSubAreaElement("{\"label\":\"Just a label\"}");
            Assert.Fail("Expected InvalidOperationException");
        }
        catch (InvalidOperationException ex)
        {
            Assert.IsTrue(ex.Message.Contains("requires 'entity', 'url', or 'default_dashboard'"));
        }
    }

    [TestMethod]
    public void BuildSubAreaElement_ValidEntity_ReturnsElement()
    {
        var sa = BuildSubAreaElement("{\"entity\":\"account\", \"pass_params\":\"yes\"}");
        Assert.AreEqual("account", sa.Attribute("Entity")?.Value);
        Assert.AreEqual("sa_account", sa.Attribute("Id")?.Value);
        Assert.AreEqual("true", sa.Attribute("PassParams")?.Value);
    }

    // ── InsertElement ──

    [TestMethod]
    public void InsertElement_InvalidPosition_Throws()
    {
        var parent = new XElement("Area");
        var child = new XElement("Group");
        try
        {
            InsertElement(parent, child, "middle", "Group");
            Assert.Fail("Expected InvalidOperationException");
        }
        catch (InvalidOperationException ex)
        {
            Assert.IsTrue(ex.Message.Contains("Invalid position"));
        }
    }

    [TestMethod]
    public void InsertElement_AfterNonExistentId_Throws()
    {
        var parent = new XElement("Area", new XElement("Group", new XAttribute("Id", "group_1")));
        var child = new XElement("Group");
        try
        {
            InsertElement(parent, child, "after:group_2", "Group");
            Assert.Fail("Expected InvalidOperationException");
        }
        catch (InvalidOperationException ex)
        {
            Assert.IsTrue(ex.Message.Contains("not found for insertion"));
        }
    }

    [TestMethod]
    public void InsertElement_First_InsertsCorrectly()
    {
        var parent = new XElement("Area", new XElement("Group", new XAttribute("Id", "group_1")));
        var child = new XElement("Group", new XAttribute("Id", "group_first"));
        InsertElement(parent, child, "first", "Group"); 

        var firstChild = parent.Elements("Group").First();
        Assert.AreEqual("group_first", firstChild.Attribute("Id")?.Value);
    }
}
