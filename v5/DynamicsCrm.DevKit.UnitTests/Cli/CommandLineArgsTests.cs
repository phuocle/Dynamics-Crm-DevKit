using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class CommandLineArgsTests
{
    #region Property Tests

    [TestMethod]
    public void Connection_CanBeSetAndGet()
    {
        var args = new CommandLineArgs();
        var expected = "AuthType=Office365;Url=https://test.crm.dynamics.com";

        args.Connection = expected;

        Assert.AreEqual(expected, args.Connection);
    }

    [TestMethod]
    public void Json_CanBeSetAndGet()
    {
        var args = new CommandLineArgs();
        var expected = "DynamicsCrm.DevKit.Cli.json";

        args.Json = expected;

        Assert.AreEqual(expected, args.Json);
    }

    [TestMethod]
    public void Type_CanBeSetAndGet()
    {
        var args = new CommandLineArgs();
        var expected = "generators";

        args.Type = expected;

        Assert.AreEqual(expected, args.Type);
    }

    [TestMethod]
    public void Profile_CanBeSetAndGet()
    {
        var args = new CommandLineArgs();
        var expected = "TestProfile";

        args.Profile = expected;

        Assert.AreEqual(expected, args.Profile);
    }

    [TestMethod]
    public void Url_CanBeSetAndGet()
    {
        var args = new CommandLineArgs();
        var expected = "https://test.crm.dynamics.com";

        args.Url = expected;

        Assert.AreEqual(expected, args.Url);
    }

    [TestMethod]
    public void AuthType_CanBeSetAndGet()
    {
        var args = new CommandLineArgs();
        var expected = "Interactive";

        args.AuthType = expected;

        Assert.AreEqual(expected, args.AuthType);
    }

    [TestMethod]
    public void ServiceClient_DefaultIsNull()
    {
        var args = new CommandLineArgs();

        Assert.IsNull(args.ServiceClient);
    }

    [TestMethod]
    public void CurrentDirectory_IsNotNull()
    {
        var args = new CommandLineArgs();

        Assert.IsNotNull(args.CurrentDirectory);
    }

    #endregion

    #region Typical Usage Tests

    [TestMethod]
    public void TypicalGeneratorArgs_AllPropertiesSet()
    {
        var args = new CommandLineArgs
        {
            Connection = "AuthType=Office365;Url=https://test.crm.dynamics.com",
            Json = "DynamicsCrm.DevKit.Cli.json",
            Type = "generators",
            Profile = "JsForm"
        };

        Assert.IsNotNull(args.Connection);
        Assert.IsNotNull(args.Json);
        Assert.AreEqual("generators", args.Type);
        Assert.AreEqual("JsForm", args.Profile);
    }

    [TestMethod]
    public void InteractiveAuthArgs_HasUrlAndAuthType()
    {
        var args = new CommandLineArgs
        {
            AuthType = "Interactive",
            Url = "https://test.crm.dynamics.com",
            Json = "DynamicsCrm.DevKit.Cli.json",
            Type = "generators",
            Profile = "TsForm"
        };

        Assert.AreEqual("Interactive", args.AuthType);
        Assert.AreEqual("https://test.crm.dynamics.com", args.Url);
    }

    #endregion
}
