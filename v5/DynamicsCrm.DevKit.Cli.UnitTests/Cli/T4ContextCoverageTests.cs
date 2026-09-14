using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class T4ContextCoverageTests
{
    [TestMethod]
    public void T4Context_PropertiesAndStageHelpers_WorkAsExpected()
    {
        var ctx = new T4Context
        {
            PluginNameSpace = "MyNamespace",
            Class = "PluginClass",
            PluginOrder = 1,
            PluginLogicalName = "account",
            PluginSchemaName = "Account",
            PluginMessage = "Create",
            PluginStage = "PreValidation",
            PluginExecution = "Synchronous",
            PluginComment = "A comment",
            PluginSharedNameSpace = "SharedNS",
            DataSource = "DS",
            ProxyTypes = "PT",
            TestTargetFullClassName = "TargetClass",
            EntityDisplayName = "Account Name",
            EntitySetName = "accounts",
            EntityTypeCode = 1,
            IsCustomEntity = false
        };

        Assert.AreEqual("account", ctx.EntityLogicalName);
        Assert.AreEqual("Account", ctx.EntitySchemaName);
        Assert.AreEqual("PluginClass", ctx.ClassWithOrder);
        Assert.AreEqual("MyNamespace.PluginClass", ctx.FullClassName);
        Assert.AreEqual("MyNamespace.PluginClass", ctx.RegistrationName);
        Assert.IsTrue(ctx.HasTestTarget);
        Assert.IsTrue(ctx.HasPluginTestGuardContext);

        Assert.IsTrue(ctx.IsPreValidation);
        Assert.IsFalse(ctx.IsPreOperation);
        Assert.IsFalse(ctx.IsPostOperation);
        Assert.AreEqual(10, ctx.StageNumber);

        // PreOperation
        ctx.PluginStage = "PreOperation";
        Assert.IsFalse(ctx.IsPreValidation);
        Assert.IsTrue(ctx.IsPreOperation);
        Assert.IsFalse(ctx.IsPostOperation);
        Assert.AreEqual(20, ctx.StageNumber);

        // PostOperation
        ctx.PluginStage = "PostOperation";
        Assert.IsFalse(ctx.IsPreValidation);
        Assert.IsFalse(ctx.IsPreOperation);
        Assert.IsTrue(ctx.IsPostOperation);
        Assert.AreEqual(40, ctx.StageNumber);

        // Other stage
        ctx.PluginStage = "Other";
        Assert.AreEqual(0, ctx.StageNumber);

        // Order != 1
        ctx.PluginOrder = 2;
        Assert.AreEqual("PluginClass2", ctx.ClassWithOrder);
        Assert.AreEqual("MyNamespace.PluginClass2", ctx.FullClassName);

        // Empty namespace
        ctx.PluginNameSpace = "";
        Assert.AreEqual("PluginClass2", ctx.FullClassName);
    }

    [TestMethod]
    public void T4Context_EmptyValues_DefaultsSafely()
    {
        var ctx = new T4Context();
        Assert.AreEqual(string.Empty, ctx.EntityLogicalName);
        Assert.AreEqual(string.Empty, ctx.EntitySchemaName);
        Assert.AreEqual("0", ctx.ClassWithOrder);
        Assert.AreEqual("0", ctx.FullClassName);
        Assert.IsFalse(ctx.HasTestTarget);
        Assert.IsFalse(ctx.HasPluginTestGuardContext);
        Assert.AreEqual(0, ctx.StageNumber);
    }
}
