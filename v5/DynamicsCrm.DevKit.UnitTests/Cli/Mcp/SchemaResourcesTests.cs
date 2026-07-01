using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

/// <summary>
/// Tests for SchemaResources.ReadEmbeddedResourceAsync (internal static).
/// This method reads embedded XSD resources from the CLI assembly.
/// We invoke it against the CLI assembly where the resources actually exist.
/// </summary>
[TestClass]
public class SchemaResourcesTests
{
    private static readonly Type ResourceType = typeof(DynamicsCrm.DevKit.Cli.Mcp.McpServerHost).Assembly
        .GetType("DynamicsCrm.DevKit.Cli.Mcp.Resources.SchemaResources")!;

    private static readonly MethodInfo ReadEmbeddedResourceAsyncMethod = ResourceType
        .GetMethod("ReadEmbeddedResourceAsync", BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Public)!;

    private static async Task<string?> ReadEmbeddedResourceAsync(string fileName)
    {
        // The method is internal static — accessed via reflection
        var task = (Task<string?>)ReadEmbeddedResourceAsyncMethod.Invoke(null, new object[] { fileName })!;
        return await task;
    }

    // ──────────────────────────────────────────────
    // ReadEmbeddedResourceAsync
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task ReadEmbeddedResource_FormXmlXsd_ReturnsContent()
    {
        var content = await ReadEmbeddedResourceAsync("FormXml.xsd");

        Assert.IsNotNull(content, "FormXml.xsd should be an embedded resource");
        Assert.IsTrue(content.Length > 100, "FormXml.xsd should have substantial content");
        Assert.IsTrue(content.Contains("schema") || content.Contains("xs:"),
            "XSD should contain 'schema' or 'xs:' elements");
    }

    [TestMethod]
    public async Task ReadEmbeddedResource_LayoutXmlXsd_ReturnsContent()
    {
        var content = await ReadEmbeddedResourceAsync("LayoutXml.xsd");

        Assert.IsNotNull(content, "LayoutXml.xsd should be an embedded resource");
        Assert.IsTrue(content.Length > 50);
    }

    [TestMethod]
    public async Task ReadEmbeddedResource_FetchXsd_ReturnsContent()
    {
        var content = await ReadEmbeddedResourceAsync("Fetch.xsd");

        Assert.IsNotNull(content, "Fetch.xsd should be an embedded resource");
        Assert.IsTrue(content.Contains("fetch") || content.Contains("xs:"),
            "Fetch.xsd should reference 'fetch' element");
    }

    [TestMethod]
    public async Task ReadEmbeddedResource_SiteMapXsd_ReturnsContent()
    {
        var content = await ReadEmbeddedResourceAsync("SiteMap.xsd");

        Assert.IsNotNull(content, "SiteMap.xsd should be an embedded resource");
        Assert.IsTrue(content.Length > 50);
    }

    [TestMethod]
    public async Task ReadEmbeddedResource_SiteMapTypeXsd_ReturnsContent()
    {
        var content = await ReadEmbeddedResourceAsync("SiteMapType.xsd");

        Assert.IsNotNull(content, "SiteMapType.xsd should be an embedded resource");
        Assert.IsTrue(content.Length > 50);
    }

    [TestMethod]
    public async Task ReadEmbeddedResource_NonExistent_ReturnsNull()
    {
        var content = await ReadEmbeddedResourceAsync("NonExistent.xsd");

        Assert.IsNull(content, "Non-existent resource should return null");
    }

    // ──────────────────────────────────────────────
    // Public methods (via instance)
    // ──────────────────────────────────────────────

    [TestMethod]
    public async Task FormXmlSchema_ReturnsValidXsd()
    {
        var instance = Activator.CreateInstance(ResourceType)!;
        var method = ResourceType.GetMethod("FormXmlSchema")!;
        var task = (Task<string>)method.Invoke(instance, null)!;
        var result = await task;

        Assert.IsNotNull(result);
        Assert.AreNotEqual("Schema not found", result);
    }

    [TestMethod]
    public async Task LayoutXmlSchema_ReturnsValidXsd()
    {
        var instance = Activator.CreateInstance(ResourceType)!;
        var method = ResourceType.GetMethod("LayoutXmlSchema")!;
        var task = (Task<string>)method.Invoke(instance, null)!;
        var result = await task;

        Assert.IsNotNull(result);
        Assert.AreNotEqual("Schema not found", result);
    }

    [TestMethod]
    public async Task FetchXmlSchema_ReturnsValidXsd()
    {
        var instance = Activator.CreateInstance(ResourceType)!;
        var method = ResourceType.GetMethod("FetchXmlSchema")!;
        var task = (Task<string>)method.Invoke(instance, null)!;
        var result = await task;

        Assert.IsNotNull(result);
        Assert.AreNotEqual("Schema not found", result);
    }

    [TestMethod]
    public async Task SiteMapXmlSchema_ContainsMarkdownStructure()
    {
        var instance = Activator.CreateInstance(ResourceType)!;
        var method = ResourceType.GetMethod("SiteMapXmlSchema")!;
        var task = (Task<string>)method.Invoke(instance, null)!;
        var result = await task;

        Assert.IsNotNull(result);
        Assert.IsTrue(result.Contains("# Dataverse SiteMap Definition"));
        Assert.IsTrue(result.Contains("## CRITICAL: Backup Before ANY Modification"));
        Assert.IsTrue(result.Contains("## Schema 1 - SiteMap.xsd"));
        Assert.IsTrue(result.Contains("## Schema 2 - SiteMapType.xsd"));
        Assert.IsTrue(result.Contains("## SubArea Types"));
    }
}
