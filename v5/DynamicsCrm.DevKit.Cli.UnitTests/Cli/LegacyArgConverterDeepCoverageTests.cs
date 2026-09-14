using DynamicsCrm.DevKit.Cli;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class LegacyArgConverterDeepCoverageTests
{
    [TestMethod]
    public void GetConversionLog_LegacyAndNonLegacy_ProducesExpectedLog()
    {
        // Non-legacy
        var modernArgs = new[] { "server", "--profile", "Debug" };
        var logModern = LegacyArgConverter.GetConversionLog(modernArgs, modernArgs);
        StringAssert.Contains(logModern, "No conversion needed");

        // Legacy
        var legacyArgs = new[] { "/type:plugins", "/profile:Debug" };
        var converted = LegacyArgConverter.Convert(legacyArgs);
        var logLegacy = LegacyArgConverter.GetConversionLog(legacyArgs, converted);
        StringAssert.Contains(logLegacy, "Legacy format detected");
        StringAssert.Contains(logLegacy, "Converted to");
    }

    [TestMethod]
    public void Convert_EdgeCasesAndQuotedArguments_ConvertsCorrectly()
    {
        Assert.IsNull(LegacyArgConverter.Convert(null!));
        CollectionAssert.AreEqual(new string[0], LegacyArgConverter.Convert(new string[0]));

        // Mixed with quoted args
        var args = new[]
        {
            "/conn:\"AuthType=ClientSecret;Url=https://org.crm.dynamics.com;\"",
            "/profile:\"Release\"",
            "/onlyupdateassembly:yes",
            "/sdklogin:yes",
            "/customparam:\"my value\"",
            "passthrough_arg"
        };

        var result = LegacyArgConverter.Convert(args);
        Assert.AreEqual("generator", result[0]); // default command when /type omitted
        CollectionAssert.Contains(result, "--conn");
        CollectionAssert.Contains(result, "AuthType=ClientSecret;Url=https://org.crm.dynamics.com;");
        CollectionAssert.Contains(result, "--profile");
        CollectionAssert.Contains(result, "Release");
        CollectionAssert.Contains(result, "--onlyupdateassembly");
        CollectionAssert.Contains(result, "--sdk-login");
        CollectionAssert.Contains(result, "--customparam");
        CollectionAssert.Contains(result, "my value");
        CollectionAssert.Contains(result, "passthrough_arg");

        // onlyupdateassembly:no should NOT add --onlyupdateassembly
        var noUpdateArgs = new[] { "/type:servers", "/onlyupdateassembly:no" };
        var noUpdateResult = LegacyArgConverter.Convert(noUpdateArgs);
        CollectionAssert.DoesNotContain(noUpdateResult, "--onlyupdateassembly");
    }

    [TestMethod]
    public void Convert_AllTypeMappings_MapToCorrectCommand()
    {
        var testCases = new[]
        {
            ("generators", "generator"),
            ("webresources", "webresource"),
            ("plugins", "plugin"),
            ("workflows", "workflow"),
            ("dataproviders", "dataprovider"),
            ("servers", "server"),
            ("downloadreports", "downloadreport"),
            ("uploadreports", "uploadreport"),
            ("proxytypes", "proxytype"),
            ("solutionpackagers", "solution"),
            ("downloadwebresources", "downloadwebresource"),
            ("datasources", "datasource"),
            ("unknown_type", "generator")
        };

        foreach (var (legacyType, expectedCommand) in testCases)
        {
            var result = LegacyArgConverter.Convert(new[] { $"/type:{legacyType}" });
            Assert.AreEqual(expectedCommand, result[0], $"Mismatch for legacy type '{legacyType}'");
        }
    }
}
