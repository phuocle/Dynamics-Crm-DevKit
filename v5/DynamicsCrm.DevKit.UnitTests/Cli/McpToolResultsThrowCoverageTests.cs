using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.IO;
using System.Net.Http;
using System.Text.Json;
using System.Xml;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class McpToolResultsThrowCoverageTests
{
    private static string Text(CallToolResult r) => ((TextContentBlock)r.Content[0]).Text;

    [TestMethod]
    public void ThrowException_Null_ReturnsError()
    {
        var r = McpToolResults.ThrowException(null!);
        Assert.IsTrue(r.IsError);
        StringAssert.Contains(Text(r), "(null exception)");
    }

    [TestMethod]
    public void ThrowException_Plain_ReturnsError()
    {
        var r = McpToolResults.ThrowException(new InvalidOperationException("bad"));
        Assert.IsTrue(r.IsError);
        var text = Text(r);
        StringAssert.Contains(text, "[Error]");
        StringAssert.Contains(text, "bad");
    }

    [TestMethod]
    public void ThrowException_JsonException_JsonKind()
    {
        var r = McpToolResults.ThrowException(new JsonException("bad json"));
        StringAssert.Contains(Text(r), "JsonParseError");
    }

    [TestMethod]
    public void ThrowException_XmlException_XmlKind()
    {
        var r = McpToolResults.ThrowException(new XmlException("bad xml"));
        StringAssert.Contains(Text(r), "XmlParseError");
    }

    [TestMethod]
    public void ThrowException_IOException_IOKind()
    {
        var r = McpToolResults.ThrowException(new IOException("io fail"));
        StringAssert.Contains(Text(r), "FileIOError");
    }

    [TestMethod]
    public void ThrowException_Unauthorized_AccessDenied()
    {
        var r = McpToolResults.ThrowException(new UnauthorizedAccessException("denied"));
        StringAssert.Contains(Text(r), "AccessDenied");
    }

    [TestMethod]
    public void ThrowException_Argument_InvalidArgument()
    {
        var r = McpToolResults.ThrowException(new ArgumentException("bad arg"));
        StringAssert.Contains(Text(r), "InvalidArgument");
    }

    [TestMethod]
    public void ThrowException_InvalidOperation_InvalidState()
    {
        var r = McpToolResults.ThrowException(new InvalidOperationException("bad state"));
        StringAssert.Contains(Text(r), "InvalidState");
    }

    [TestMethod]
    public void ThrowException_Timeout_TimeoutKind()
    {
        var r = McpToolResults.ThrowException(new TimeoutException("timed out"));
        StringAssert.Contains(Text(r), "Timeout");
    }

    [TestMethod]
    public void ThrowException_HttpRequest_Kind()
    {
        var r = McpToolResults.ThrowException(new HttpRequestException("connection"));
        var text = Text(r);
        StringAssert.Contains(text, "HttpRequestException");
    }

    [TestMethod]
    public void ThrowException_TaskCanceled_Kind()
    {
        var r = McpToolResults.ThrowException(new TaskCanceledException("canceled"));
        var text = Text(r);
        StringAssert.Contains(text, "TaskCanceledException");
    }

    [TestMethod]
    public void ThrowException_UriFormat_Kind()
    {
        var r = McpToolResults.ThrowException(new UriFormatException("bad uri"));
        var text = Text(r);
        StringAssert.Contains(text, "UriFormatException");
    }

    [TestMethod]
    public void ThrowException_WithInner_IncludesInnerChain()
    {
        var inner = new InvalidOperationException("inner msg");
        var outer = new Exception("outer msg", inner);
        var r = McpToolResults.ThrowException(outer);
        var text = Text(r);
        StringAssert.Contains(text, "outer msg");
        StringAssert.Contains(text, "inner msg");
    }

    [TestMethod]
    public void ThrowException_NullMessage_Handled()
    {
        // Create an exception with empty message
        var ex = new Exception();
        var r = McpToolResults.ThrowException(ex);
        var text = Text(r);
        // Just verify it doesn't throw and produces a result
        Assert.IsNotNull(text);
    }

    [TestMethod]
    public void ThrowException_Structured_IncludesKind()
    {
        var r = McpToolResults.ThrowException(new JsonException("x"));
        Assert.IsNotNull(r.StructuredContent);
        var json = r.StructuredContent.Value.GetRawText();
        StringAssert.Contains(json, "kind");
        StringAssert.Contains(json, "JsonParseError");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_AttributeNotFound()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("'Account' entity doesn't contain attribute with Name = 'nonexistent_field'"));
        var text = Text(r);
        StringAssert.Contains(text, "[Error]");
        StringAssert.Contains(text, "Attribute not found");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_EntityNotFound()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("Entity with a name = 'x' with NameMapping = 'Logical' was not found"));
        var text = Text(r);
        StringAssert.Contains(text, "Entity not found");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_UnknownConditionOperator()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("unknown condition operator: foo"));
        var text = Text(r);
        StringAssert.Contains(text, "Unknown FetchXML");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_EntityNameMissing()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("Missing entityName"));
        var text = Text(r);
        StringAssert.Contains(text, "missing the required");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_RelationshipNotFound()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("Could not find a relationship with name 'x'"));
        var text = Text(r);
        StringAssert.Contains(text, "Relationship not found");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_ParentalRelation()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("Cannot create another parental relation"));
        var text = Text(r);
        StringAssert.Contains(text, "parental relationship");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_CustomLabelMissing()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("Custom Label must have a value"));
        var text = Text(r);
        StringAssert.Contains(text, "UseLabel");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_CanChangeHierarchical()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("CanChangeHierarchicalRelationship is locked"));
        var text = Text(r);
        StringAssert.Contains(text, "Hierarchical");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_SelfReferentialNav()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("Navigation property name cannot be the same on both sides"));
        var text = Text(r);
        StringAssert.Contains(text, "navigation property");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_InvalidPrefix()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("Schema name is invalid or missing must start with a valid customization prefix"));
        var text = Text(r);
        StringAssert.Contains(text, "publisher customization prefix");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_FieldsJsonMissing()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("fields_json must be a non-empty json object"));
        var text = Text(r);
        StringAssert.Contains(text, "non-empty JSON object");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_DataverseFault_RecordNotFound()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("DataverseFault: Entity 'Account' With Id = 12345678-1234-1234-1234-123456789012 Does Not Exist"));
        var text = Text(r);
        StringAssert.Contains(text, "Account record with id");
        StringAssert.Contains(text, "0x80040217");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_MimeTypeBlocked()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("0x80072522 something"));
        var text = Text(r);
        StringAssert.Contains(text, "MimeTypeBlocked");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_MimeTypeNotAllowed()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("0x80072521 something"));
        var text = Text(r);
        StringAssert.Contains(text, "MimeTypeNotAllowed");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_ImageProcessFailure()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("0x80072553 something"));
        var text = Text(r);
        StringAssert.Contains(text, "ImageProcessFailure");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_HttpRequest_UrlDownload()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new HttpRequestException("dns"));
        var text = Text(r);
        StringAssert.Contains(text, "UrlDownload");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_GenericError_NoRewrite()
    {
        var r = McpToolResults.ThrowExceptionFriendly(new Exception("Some weird unhandled error"));
        var text = Text(r);
        Assert.IsTrue(text.Contains("Some weird"));
    }
}
