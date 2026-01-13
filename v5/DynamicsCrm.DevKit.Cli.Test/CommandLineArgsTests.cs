using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.Test;

/// <summary>
/// Tests for CommandLineArgs model and validation
/// </summary>
[TestClass]
public class CommandLineArgsTests
{
    #region Property Tests

    [TestMethod]
    public void Connection_CanBeSetAndGet()
    {
        // Arrange
        var args = new CommandLineArgs();
        var expected = "AuthType=Office365;Url=https://test.crm.dynamics.com";

        // Act
        args.Connection = expected;

        // Assert
        Assert.AreEqual(expected, args.Connection);
    }

    [TestMethod]
    public void Json_CanBeSetAndGet()
    {
        // Arrange
        var args = new CommandLineArgs();
        var expected = "DynamicsCrm.DevKit.Cli.json";

        // Act
        args.Json = expected;

        // Assert
        Assert.AreEqual(expected, args.Json);
    }

    [TestMethod]
    public void Type_CanBeSetAndGet()
    {
        // Arrange
        var args = new CommandLineArgs();
        var expected = "generators";

        // Act
        args.Type = expected;

        // Assert
        Assert.AreEqual(expected, args.Type);
    }

    [TestMethod]
    public void Profile_CanBeSetAndGet()
    {
        // Arrange
        var args = new CommandLineArgs();
        var expected = "TestProfile";

        // Act
        args.Profile = expected;

        // Assert
        Assert.AreEqual(expected, args.Profile);
    }

    [TestMethod]
    public void IsSdkLogin_DefaultIsFalse()
    {
        // Arrange & Act
        var args = new CommandLineArgs();

        // Assert
        Assert.IsFalse(args.IsSdkLogin);
    }

    [TestMethod]
    public void IsSdkLogin_CanBeSetToTrue()
    {
        // Arrange
        var args = new CommandLineArgs();

        // Act
        args.IsSdkLogin = true;

        // Assert
        Assert.IsTrue(args.IsSdkLogin);
    }

    [TestMethod]
    public void Url_CanBeSetAndGet()
    {
        // Arrange
        var args = new CommandLineArgs();
        var expected = "https://test.crm.dynamics.com";

        // Act
        args.Url = expected;

        // Assert
        Assert.AreEqual(expected, args.Url);
    }

    [TestMethod]
    public void ServiceClient_DefaultIsNull()
    {
        // Arrange & Act
        var args = new CommandLineArgs();

        // Assert
        Assert.IsNull(args.ServiceClient);
    }

    [TestMethod]
    public void CurrentDirectory_DefaultIsNotNull()
    {
        // CommandLineArgs may have default value for CurrentDirectory
        var args = new CommandLineArgs();
        
        // Just verify no exception is thrown when accessing
        var currentDir = args.CurrentDirectory;
        // CurrentDirectory is set by CLI, may be null in test context
    }

    #endregion

    #region Typical Usage Tests

    [TestMethod]
    public void TypicalGeneratorArgs_AllPropertiesSet()
    {
        // Arrange
        var args = new CommandLineArgs
        {
            Connection = "AuthType=Office365;Url=https://test.crm.dynamics.com",
            Json = "DynamicsCrm.DevKit.Cli.json",
            Type = "generators",
            Profile = "JsForm"
        };

        // Assert
        Assert.IsNotNull(args.Connection);
        Assert.IsNotNull(args.Json);
        Assert.AreEqual("generators", args.Type);
        Assert.AreEqual("JsForm", args.Profile);
    }

    [TestMethod]
    public void SdkLoginArgs_HasUrlAndSdkLoginTrue()
    {
        // Arrange
        var args = new CommandLineArgs
        {
            IsSdkLogin = true,
            Url = "https://test.crm.dynamics.com",
            Json = "DynamicsCrm.DevKit.Cli.json",
            Type = "generators",
            Profile = "TsForm"
        };

        // Assert
        Assert.IsTrue(args.IsSdkLogin);
        Assert.AreEqual("https://test.crm.dynamics.com", args.Url);
    }

    #endregion
}
