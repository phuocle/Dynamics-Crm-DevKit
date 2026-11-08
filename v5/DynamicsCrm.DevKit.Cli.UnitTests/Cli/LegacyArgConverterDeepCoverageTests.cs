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
            ("downloadreports", "report"),
            ("uploadreports", "report"),
            ("proxytypes", "proxytype"),
            ("solutionpackagers", "solution"),
            ("downloadwebresources", "webresource"),
            ("datasources", "server"),
            ("unknown_type", "generator")
        };

        foreach (var (legacyType, expectedCommand) in testCases)
        {
            var result = LegacyArgConverter.Convert(new[] { $"/type:{legacyType}" });
            Assert.AreEqual(expectedCommand, result[0], $"Mismatch for legacy type '{legacyType}'");
        }
    }

    [TestMethod]
    public void Convert_ReportTypes_MapToReportWithInjectedTypeAndNoLegacyReemit()
    {
        var upload = LegacyArgConverter.Convert(new[] { "/type:uploadreports", "/file:\"Report1.rdl\"" });
        Assert.AreEqual("report", upload[0]);
        Assert.AreEqual("--type", upload[1]);
        Assert.AreEqual("upload", upload[2]);
        CollectionAssert.Contains(upload, "--file");
        CollectionAssert.Contains(upload, "Report1.rdl");
        CollectionAssert.DoesNotContain(upload, "uploadreports");

        var download = LegacyArgConverter.Convert(new[] { "/type:downloadreports", "/profile:DEBUG" });
        Assert.AreEqual("report", download[0]);
        Assert.AreEqual("--type", download[1]);
        Assert.AreEqual("download", download[2]);
        CollectionAssert.DoesNotContain(download, "downloadreports");
    }

    [TestMethod]
    public void Convert_WebResourceTypes_MapToWebResourceWithInjectedTypeAndNoLegacyReemit()
    {
        // Legacy deploy type → grouped upload (re-emitting '--type webresources'
        // would shadow the new upload|download discriminator of 'devkit webresource').
        var upload = LegacyArgConverter.Convert(new[] { "/type:webresources", "/profile:DEBUG" });
        Assert.AreEqual("webresource", upload[0]);
        Assert.AreEqual("--type", upload[1]);
        Assert.AreEqual("upload", upload[2]);
        CollectionAssert.DoesNotContain(upload, "webresources");

        var download = LegacyArgConverter.Convert(new[] { "/type:downloadwebresources", "/profile:DEBUG" });
        Assert.AreEqual("webresource", download[0]);
        Assert.AreEqual("--type", download[1]);
        Assert.AreEqual("download", download[2]);
        CollectionAssert.DoesNotContain(download, "downloadwebresources");
    }

    [TestMethod]
    public void Convert_DataSourceType_MapsToServerWithInjectedTypeAndNoDuplicateEmit()
    {
        var result = LegacyArgConverter.Convert(new[] { "/type:datasources", "/profile:DEBUG" });
        Assert.AreEqual("server", result[0]);
        Assert.AreEqual("--type", result[1]);
        Assert.AreEqual("datasources", result[2]);
        CollectionAssert.Contains(result, "--profile");
        CollectionAssert.Contains(result, "DEBUG");
        // injected exactly once — the legacy re-emit is skipped for grouped commands
        Assert.AreEqual(1, result.Count(x => x == "--type"));

        // the plain server deploy type keeps its legacy re-emit (still a valid server type)
        var servers = LegacyArgConverter.Convert(new[] { "/type:servers", "/profile:DEBUG" });
        Assert.AreEqual("server", servers[0]);
        CollectionAssert.Contains(servers, "--type");
        CollectionAssert.Contains(servers, "servers");
    }

    [TestMethod]
    public void RewriteShorthandOptions_ReplacesWidTokenWithWebResourceId()
    {
        Assert.IsNull(LegacyArgConverter.RewriteShorthandOptions(null!));
        CollectionAssert.AreEqual(new string[0], LegacyArgConverter.RewriteShorthandOptions(new string[0]));

        var result = LegacyArgConverter.RewriteShorthandOptions(new[] { "webresource", "-wid", "11111111-1111-1111-1111-111111111111", "--file", "app.js" });
        CollectionAssert.AreEqual(
            new[] { "webresource", "--webresourceid", "11111111-1111-1111-1111-111111111111", "--file", "app.js" },
            result);

        // Case-insensitive, standalone token only — '-w' and other tokens untouched.
        var casing = LegacyArgConverter.RewriteShorthandOptions(new[] { "webresource", "-WID", "x" });
        Assert.AreEqual("--webresourceid", casing[1]);
        var untouched = LegacyArgConverter.RewriteShorthandOptions(new[] { "webresource", "-w", "name" });
        Assert.AreEqual("-w", untouched[1]);
    }

    [TestMethod]
    public void RewriteTrailingHelp_ConvertsBareHelpAfterCommand_ToHelpFlag()
    {
        Assert.IsNull(LegacyArgConverter.RewriteTrailingHelp(null!));

        // command + trailing help → --help (case-insensitive)
        var server = LegacyArgConverter.RewriteTrailingHelp(new[] { "server", "help" });
        CollectionAssert.AreEqual(new[] { "server", "--help" }, server);
        var casing = LegacyArgConverter.RewriteTrailingHelp(new[] { "server", "HELP" });
        CollectionAssert.AreEqual(new[] { "server", "--help" }, casing);

        // deeper commands and extra tokens before the trailing help
        var deep = LegacyArgConverter.RewriteTrailingHelp(new[] { "new-project", "list", "help" });
        CollectionAssert.AreEqual(new[] { "new-project", "list", "--help" }, deep);

        // single token is the root-help intercept's job — untouched here
        CollectionAssert.AreEqual(new[] { "help" }, LegacyArgConverter.RewriteTrailingHelp(new[] { "help" }));

        // 'help' as an option VALUE is never rewritten
        var value = LegacyArgConverter.RewriteTrailingHelp(new[] { "webresource", "--file", "help" });
        CollectionAssert.AreEqual(new[] { "webresource", "--file", "help" }, value);
        var profile = LegacyArgConverter.RewriteTrailingHelp(new[] { "server", "--profile", "help" });
        CollectionAssert.AreEqual(new[] { "server", "--profile", "help" }, profile);

        // 'help' in the middle (not last) is untouched
        var middle = LegacyArgConverter.RewriteTrailingHelp(new[] { "server", "help", "--json", "x.json" });
        Assert.AreEqual("help", middle[1]);
    }
}
