using DynamicsCrm.DevKit.Cli;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class DevKitExceptionsCoverageTests
{
    [TestMethod]
    public void ExitCodes_HasExpectedValues()
    {
        Assert.AreEqual(0, ExitCodes.Success);
        Assert.AreEqual(1, ExitCodes.ValidationError);
        Assert.AreEqual(2, ExitCodes.ConnectionError);
        Assert.AreEqual(3, ExitCodes.RuntimeError);
        Assert.AreEqual(4, ExitCodes.ConfigurationError);
    }

    [TestMethod]
    public void DevKitValidationException_MessageCtor_SetsMessage()
    {
        var ex = new DevKitValidationException("oops");
        Assert.AreEqual("oops", ex.Message);
    }

    [TestMethod]
    public void DevKitValidationException_InnerCtor_SetsInner()
    {
        var inner = new InvalidOperationException("inner");
        var ex = new DevKitValidationException("oops", inner);
        Assert.AreEqual("oops", ex.Message);
        Assert.AreSame(inner, ex.InnerException);
    }

    [TestMethod]
    public void DevKitConnectionException_MessageCtor_SetsMessage()
    {
        var ex = new DevKitConnectionException("conn failed");
        Assert.AreEqual("conn failed", ex.Message);
    }

    [TestMethod]
    public void DevKitConnectionException_InnerCtor_SetsInner()
    {
        var inner = new Exception("inner");
        var ex = new DevKitConnectionException("outer", inner);
        Assert.AreEqual("outer", ex.Message);
        Assert.AreSame(inner, ex.InnerException);
    }

    [TestMethod]
    public void DevKitConfigurationException_MessageCtor_SetsMessage()
    {
        var ex = new DevKitConfigurationException("bad config");
        Assert.AreEqual("bad config", ex.Message);
    }

    [TestMethod]
    public void DevKitConfigurationException_InnerCtor_SetsInner()
    {
        var inner = new Exception("inner");
        var ex = new DevKitConfigurationException("outer", inner);
        Assert.AreEqual("outer", ex.Message);
        Assert.AreSame(inner, ex.InnerException);
    }

    [TestMethod]
    public void DevKitDeploymentException_MessageCtor_SetsMessage()
    {
        var ex = new DevKitDeploymentException("deploy fail");
        Assert.AreEqual("deploy fail", ex.Message);
    }

    [TestMethod]
    public void DevKitDeploymentException_InnerCtor_SetsInner()
    {
        var inner = new Exception("inner");
        var ex = new DevKitDeploymentException("outer", inner);
        Assert.AreEqual("outer", ex.Message);
        Assert.AreSame(inner, ex.InnerException);
    }

    [TestMethod]
    public void DevKitValidationException_IsException()
    {
        var ex = new DevKitValidationException("x");
        Assert.IsInstanceOfType(ex, typeof(Exception));
    }

    [TestMethod]
    public void DevKitConnectionException_IsException()
    {
        var ex = new DevKitConnectionException("x");
        Assert.IsInstanceOfType(ex, typeof(Exception));
    }
}
