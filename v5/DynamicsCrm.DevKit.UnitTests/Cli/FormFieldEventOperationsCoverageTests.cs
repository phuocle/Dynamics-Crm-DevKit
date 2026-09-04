using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class FormFieldEventOperationsCoverageTests
{
    private static XDocument MakeForm() => XDocument.Parse(@"<?xml version=""1.0"" encoding=""utf-16""?>
<form>
  <tabs>
    <tab name=""general"" expanded=""true"">
      <labels><label description=""General"" languagecode=""1033"" /></labels>
      <columns><column width=""100""></column></columns>
      <sections>
        <section name=""info"" showlabel=""true"">
          <labels><label description=""Info"" languagecode=""1033"" /></labels>
          <rows>
            <row>
              <cell id=""{c1}"" showlabel=""true""><labels><label description=""Name"" languagecode=""1033"" /></labels><control id=""name"" classid=""{4273ed8a-83c1-4e3e-a1b1-b1be5d0d0000}"" datafieldname=""name"" /></cell>
              <cell id=""{c2}""><control id=""revenue"" classid=""{533b9e00-756e-43e0-9dab-64734068c2b6}"" datafieldname=""revenue"" /></cell>
            </row>
            <row>
              <cell id=""{c3}""><control id=""phone"" classid=""{533b9e00-756e-43e0-9dab-64734068c2b6}"" datafieldname=""telephone1"" /></cell>
            </row>
          </rows>
        </section>
      </sections>
    </tab>
  </tabs>
</form>");

    private static void AssertThrows<TEx>(Action act, Action<TEx> assert = null) where TEx : Exception
    {
        try
        {
            act();
            Assert.Fail("Expected exception " + typeof(TEx).Name);
        }
        catch (TEx ex)
        {
            assert?.Invoke(ex);
        }
    }

    [TestMethod]
    public void ExecuteRemoveFields_MissingTab_Throws()
    {
        var json = JsonDocument.Parse("{\"section\":\"info\",\"fields\":[\"name\"]}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteRemoveFields(MakeForm(), json),
            ex => StringAssert.Contains(ex.Message, "tab"));
    }

    [TestMethod]
    public void ExecuteRemoveFields_MissingSection_Throws()
    {
        var json = JsonDocument.Parse("{\"tab\":\"general\",\"fields\":[\"name\"]}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteRemoveFields(MakeForm(), json),
            ex => StringAssert.Contains(ex.Message, "section"));
    }

    [TestMethod]
    public void ExecuteRemoveFields_MissingFields_Throws()
    {
        var json = JsonDocument.Parse("{\"tab\":\"general\",\"section\":\"info\"}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteRemoveFields(MakeForm(), json),
            ex => StringAssert.Contains(ex.Message, "fields"));
    }

    [TestMethod]
    public void ExecuteRemoveFields_EmptyFields_Throws()
    {
        var json = JsonDocument.Parse("{\"tab\":\"general\",\"section\":\"info\",\"fields\":[]}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteRemoveFields(MakeForm(), json),
            ex => StringAssert.Contains(ex.Message, "field name"));
    }

    [TestMethod]
    public void ExecuteRemoveFields_TabNotFound_Throws()
    {
        var json = JsonDocument.Parse("{\"tab\":\"nope\",\"section\":\"info\",\"fields\":[\"name\"]}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteRemoveFields(MakeForm(), json),
            ex => StringAssert.Contains(ex.Message, "nope"));
    }

    [TestMethod]
    public void ExecuteRemoveFields_SectionNotFound_Throws()
    {
        var json = JsonDocument.Parse("{\"tab\":\"general\",\"section\":\"nope\",\"fields\":[\"name\"]}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteRemoveFields(MakeForm(), json),
            ex => StringAssert.Contains(ex.Message, "nope"));
    }

    [TestMethod]
    public void ExecuteRemoveFields_SingleCell()
    {
        var json = JsonDocument.Parse("{\"tab\":\"general\",\"section\":\"info\",\"fields\":[\"revenue\"]}").RootElement;
        var s = FormFieldEventOperations.ExecuteRemoveFields(MakeForm(), json);
        StringAssert.Contains(s, "1 field(s) removed");
    }

    [TestMethod]
    public void ExecuteRemoveFields_NotFound()
    {
        var json = JsonDocument.Parse("{\"tab\":\"general\",\"section\":\"info\",\"fields\":[\"xyz\"]}").RootElement;
        var s = FormFieldEventOperations.ExecuteRemoveFields(MakeForm(), json);
        StringAssert.Contains(s, "not found");
    }

    [TestMethod]
    public void ExecuteRemoveFields_AllInRow_DeletesRow()
    {
        var json = JsonDocument.Parse("{\"tab\":\"general\",\"section\":\"info\",\"fields\":[\"telephone1\"]}").RootElement;
        var s = FormFieldEventOperations.ExecuteRemoveFields(MakeForm(), json);
        StringAssert.Contains(s, "1 field(s) removed");
    }

    [TestMethod]
    public void ExecuteAddEvent_MissingTab_Throws()
    {
        var json = JsonDocument.Parse("{\"field\":\"name\",\"library\":\"a.js\",\"function\":\"a.b\"}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteAddEvent(MakeForm(), json));
    }

    [TestMethod]
    public void ExecuteRemoveEvent_MissingTab_Throws()
    {
        var json = JsonDocument.Parse("{\"field\":\"name\",\"name\":\"onload\"}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteRemoveEvent(MakeForm(), json));
    }

    [TestMethod]
    public void ExecuteAddLibrary_MissingLibrary_Throws()
    {
        var json = JsonDocument.Parse("{\"tab\":\"general\"}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteAddLibrary(MakeForm(), json));
    }

    [TestMethod]
    public void ExecuteRemoveLibrary_MissingLibrary_Throws()
    {
        var json = JsonDocument.Parse("{}").RootElement;
        AssertThrows<InvalidOperationException>(
            () => FormFieldEventOperations.ExecuteRemoveLibrary(MakeForm(), json));
    }
}
