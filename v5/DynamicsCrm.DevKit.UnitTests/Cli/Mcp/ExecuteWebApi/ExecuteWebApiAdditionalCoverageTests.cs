using DynamicsCrm.DevKit.Cli.Mcp.Tools;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp.ExecuteWebApi;

[TestClass]
public sealed class ExecuteWebApiAdditionalCoverageTests
{
    private static readonly Type ToolType = typeof(ExecuteWebApiTool);

    [TestMethod]
    public void IsSingleColumnValueUrl_RecognizesOnlySimpleColumnPaths()
    {
        Assert.IsTrue(InvokeStatic<bool>("IsSingleColumnValueUrl", "accounts(00000000-0000-0000-0000-000000000001)/logo"));
        Assert.IsFalse(InvokeStatic<bool>("IsSingleColumnValueUrl", "accounts/logo"));
        Assert.IsFalse(InvokeStatic<bool>("IsSingleColumnValueUrl", "accounts(1)/$value"));
        Assert.IsFalse(InvokeStatic<bool>("IsSingleColumnValueUrl", "accounts(1)/primarycontactid/name"));
        Assert.IsFalse(InvokeStatic<bool>("IsSingleColumnValueUrl", "accounts(1)/name($select=name)"));
    }

    [TestMethod]
    public void GetFileColumnBlocked_CoversBinaryUploadDeleteAndBlockProtocol()
    {
        var headers = new Dictionary<string, List<string>>(StringComparer.OrdinalIgnoreCase)
        {
            ["Content-Type"] = new List<string> { "application/octet-stream" },
            ["x-ms-chunk-size"] = new List<string> { "4194304" }
        };

        Assert.IsNotNull(InvokeStatic<object?>("GetFileColumnBlocked", HttpMethod.Get, "accounts(1)/logo/$value", (object?)null));
        Assert.IsNotNull(InvokeStatic<object?>("GetFileColumnBlocked", HttpMethod.Post,
            "Microsoft.Dynamics.CRM.UploadBlock", null));
        Assert.IsNotNull(InvokeStatic<object?>("GetFileColumnBlocked", HttpMethod.Patch,
            "accounts(1)/logo", headers));
        Assert.IsNotNull(InvokeStatic<object?>("GetFileColumnBlocked", HttpMethod.Put,
            "accounts(1)/logo", headers));
        Assert.IsNotNull(InvokeStatic<object?>("GetFileColumnBlocked", HttpMethod.Delete,
            "accounts(1)/logo", new Dictionary<string, List<string>>()));
        Assert.IsNull(InvokeStatic<object?>("GetFileColumnBlocked", HttpMethod.Get,
            "accounts(1)/name", null));
    }

    [TestMethod]
    public void GetBlocked_CoversSqlOptionAndUiRedirects()
    {
        Assert.IsNotNull(InvokeStatic<object?>("GetBlocked", HttpMethod.Get, "accounts?sql=select%20top%201%20name"));
        Assert.IsNotNull(InvokeStatic<object?>("GetBlocked", HttpMethod.Get, "WhoAmI"));
        Assert.IsNotNull(InvokeStatic<object?>("GetBlocked", HttpMethod.Post, "publishAllXml"));
        Assert.IsNull(InvokeStatic<object?>("GetBlocked", HttpMethod.Get, "accounts?$select=name"));
        Assert.IsNull(InvokeStatic<object?>("GetBlocked", HttpMethod.Post, "accounts"));
    }

    [TestMethod]
    public void IsAbsoluteUrl_RecognizesProtocolRelativeAndAbsoluteUris()
    {
        Assert.IsFalse(InvokeStatic<bool>("IsAbsoluteUrl", (object?)null));
        Assert.IsTrue(InvokeStatic<bool>("IsAbsoluteUrl", "//org.crm.dynamics.com/api/data"));
        Assert.IsTrue(InvokeStatic<bool>("IsAbsoluteUrl", "https://org.crm.dynamics.com/api/data"));
        Assert.IsFalse(InvokeStatic<bool>("IsAbsoluteUrl", "accounts?$top=1"));
    }

    [TestMethod]
    public void ParseHeaders_ArrayJson_ReturnsError()
    {
        var args = new object?[] { "[]", null };
        var result = (Dictionary<string, List<string>>?)ToolType
            .GetMethod("ParseHeaders", BindingFlags.NonPublic | BindingFlags.Static)!
            .Invoke(null, args);

        Assert.IsNull(result);
        Assert.AreEqual("Invalid JSON in headers parameter.", args[1]);
    }

    private static T InvokeStatic<T>(string methodName, params object?[] args) =>
        (T)ToolType.GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Static)!.Invoke(null, args)!;
}
