using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class JsonHelperCoverageTests
{
    private sealed class JsonDto
    {
        public string Name { get; set; } = "";
        public int Count { get; set; }
    }

    [TestMethod]
    public void SerializeDeserialize_UsesCaseInsensitiveCommentsAndTrailingCommas()
    {
        var dto = JsonHelper.Deserialize<JsonDto>("""
{
  // comment is allowed
  "name": "Contoso",
  "count": 3,
}
""");

        Assert.AreEqual("Contoso", dto.Name);
        Assert.AreEqual(3, dto.Count);

        var json = JsonHelper.Serialize(dto);
        StringAssert.Contains(json, "Contoso");
        StringAssert.Contains(json, "3");
    }

    [TestMethod]
    public void FormatJson_IndentsObjectsArraysAndKeepsQuotedCharacters()
    {
        var formatted = JsonHelper.FormatJson("""{"name":"A:B","items":[1,2],"text":"brace { comma, quote \" ok"}""");

        StringAssert.Contains(formatted, "{\r\n");
        StringAssert.Contains(formatted, "    \"name\": \"A:B\"");
        StringAssert.Contains(formatted, "    \"items\": [");
        StringAssert.Contains(formatted, "\"brace { comma, quote \\\" ok\"");
    }
}
