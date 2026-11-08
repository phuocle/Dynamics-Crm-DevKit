using Microsoft.Xrm.Sdk;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ModelContextProtocol.Protocol;
using System;
using System.Net;
using System.Net.Http;
using WebApiHttpException = Microsoft.PowerPlatform.Dataverse.Client.Exceptions.HttpOperationException;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Helper;

/// <summary>
/// Wave-2 gap coverage for McpToolResults: the Web API exception shapes of
/// ThrowException/ThrowExceptionFriendly (status code, reason phrase, OData
/// error extraction with the 300-char cap), the DataverseFault record-not-
/// found fallback rewrite, the Hint/Tip prefix normalization in Error, and
/// the innerFault payload of a Dataverse fault.
///
/// NOTE (not coverable): ExtractFirstFrame ~556 (`return ""` after the loop)
/// requires a stack trace whose every line is empty after trimming — no
/// runtime exception can produce one; a null stack trace exits at ~544.
/// </summary>
[TestClass]
public sealed class McpToolResultsGapWave2CoverageTests
{
    private static string Text(CallToolResult result) =>
        ((TextContentBlock)result.Content[0]).Text;

    /// <summary>
    /// Builds the Dataverse Client HttpOperationException with a populated
    /// response wrapper through reflection — the wrapper type's namespace
    /// differs per target framework, so the tests never reference it by name.
    /// </summary>
    private static Exception NewWebApiException(HttpStatusCode statusCode, string reason, string content)
    {
        var exception = new WebApiHttpException("request failed");
        var responseProperty = typeof(WebApiHttpException).GetProperty("Response")!;
        var wrapperType = responseProperty.PropertyType;
        var wrapper = Activator.CreateInstance(wrapperType, new HttpResponseMessage(statusCode), content);
        wrapperType.GetProperty("StatusCode")!.SetValue(wrapper, statusCode);
        wrapperType.GetProperty("ReasonPhrase")!.SetValue(wrapper, reason);
        wrapperType.GetProperty("Content")!.SetValue(wrapper, content);
        responseProperty.SetValue(exception, wrapper);
        return exception;
    }

    [TestMethod]
    public void Error_HintAndTipPrefixes_AreStripped()
    {
        var hint = McpToolResults.Error("problem", "Hint: do this instead");
        Assert.AreEqual("do this instead", hint.StructuredContent?.GetProperty("hint").GetString());

        var tip = McpToolResults.Error("problem", "Tip: try that");
        Assert.AreEqual("try that", tip.StructuredContent?.GetProperty("hint").GetString());

        var blank = McpToolResults.Error("problem", "   ");
        Assert.IsFalse(Text(blank).Contains("[Hint]"), "a whitespace-only hint is normalized away.");
    }

    [TestMethod]
    public void ThrowException_WebApi_CarriesStatusAndResponseContent()
    {
        var content = """{"error":{"code":"0x80040217","message":"record missing"}}""";
        var ex = NewWebApiException(HttpStatusCode.BadRequest, "Bad Request", content);

        var result = McpToolResults.ThrowException(ex);

        Assert.IsTrue(result.IsError);
        var text = Text(result);
        StringAssert.Contains(text, "WebApiError");
        StringAssert.Contains(text, "400");
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "\"statusCode\":400");
        StringAssert.Contains(json, "Bad Request");
        StringAssert.Contains(json, "record missing");
    }

    [TestMethod]
    public void ThrowException_WebApi_TruncatesLongResponseContent()
    {
        var longContent = new string('x', 1500);
        var ex = NewWebApiException(HttpStatusCode.InternalServerError, "Internal Server Error", longContent);

        var result = McpToolResults.ThrowException(ex);

        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "...");
        Assert.IsTrue(json.Length < 3000, "the response content must be capped at 1000 chars.");
    }

    [TestMethod]
    public void ThrowException_DataverseFault_CarriesErrorCodeAndInnerFault()
    {
        var inner = new OrganizationServiceFault { ErrorCode = -2147220956, Message = "inner problem" };
        var fault = new OrganizationServiceFault { ErrorCode = -2147220891, Message = "outer problem", InnerFault = inner };
        var ex = new System.ServiceModel.FaultException<OrganizationServiceFault>(fault, "fault message");

        var result = McpToolResults.ThrowException(ex);

        Assert.IsTrue(result.IsError);
        var text = Text(result);
        StringAssert.Contains(text, "DataverseFault");
        StringAssert.Contains(text, "0x80040265"); // -2147220891 in hex
        var json = result.StructuredContent?.GetRawText() ?? "";
        StringAssert.Contains(json, "inner problem");
        StringAssert.Contains(json, "0x80040224"); // -2147220956 in hex
    }

    [TestMethod]
    public void ThrowExceptionFriendly_WebApi_IncludesODataMessage()
    {
        var longMessage = new string('m', 350);
        var content = "{\"error\":{\"code\":\"0x80040217\",\"message\":\"" + longMessage + "\"}}";
        var ex = NewWebApiException(HttpStatusCode.Conflict, "Conflict", content);

        var result = McpToolResults.ThrowExceptionFriendly(ex);

        var text = Text(result);
        StringAssert.Contains(text, "Dataverse Web API returned 409 Conflict");
        StringAssert.Contains(text, longMessage[..300] + "...");
        StringAssert.Contains(text, "[Hint] The request reached Dataverse but was rejected");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_DataverseFaultWithoutRecordId_KeepsFaultMessage()
    {
        // "does not exist" + "DataverseFault:" selects the record-not-found
        // rewrite; without the Entity/Id shape the message falls back to the
        // generic RecordNotFound block.
        var fault = new OrganizationServiceFault { ErrorCode = -2147220969, Message = "Table budget_entity does not exist." };
        var ex = new System.ServiceModel.FaultException<OrganizationServiceFault>(fault, "DataverseFault: Table budget_entity does not exist.");
        var result = McpToolResults.ThrowExceptionFriendly(ex);

        var text = Text(result);
        StringAssert.Contains(text, "[RecordNotFound]");
        StringAssert.Contains(text, "Table budget_entity does not exist.");
        StringAssert.Contains(text, "record may have been deleted");
    }

    [TestMethod]
    public void ThrowExceptionFriendly_PlainException_KeepsOriginalText()
    {
        var thrown = new InvalidOperationException("plain failure");
        var result = McpToolResults.ThrowExceptionFriendly(thrown!);

        var text = Text(result);
        StringAssert.Contains(text, "plain failure");
        Assert.IsFalse(text.Contains("StackTrace:"), "the stack trace is stripped from the text output.");
    }
}
