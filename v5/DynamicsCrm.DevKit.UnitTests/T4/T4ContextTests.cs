using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.UnitTests.T4;

[TestClass]
public class T4ContextTests
{
    #region Entity Properties

    [TestMethod]
    public void EntityLogicalName_ReturnsPluginLogicalName()
    {
        var ctx = new T4Context { PluginLogicalName = "account" };
        Assert.AreEqual("account", ctx.EntityLogicalName);
    }

    [TestMethod]
    public void EntityLogicalName_WhenNull_ReturnsEmpty()
    {
        var ctx = new T4Context { PluginLogicalName = null };
        Assert.AreEqual(string.Empty, ctx.EntityLogicalName);
    }

    [TestMethod]
    public void EntitySchemaName_ReturnsPluginSchemaName()
    {
        var ctx = new T4Context { PluginSchemaName = "Account" };
        Assert.AreEqual("Account", ctx.EntitySchemaName);
    }

    [TestMethod]
    public void EntitySchemaName_WhenNull_ReturnsEmpty()
    {
        var ctx = new T4Context { PluginSchemaName = null };
        Assert.AreEqual(string.Empty, ctx.EntitySchemaName);
    }

    #endregion

    #region Naming Helpers

    [TestMethod]
    public void ClassWithOrder_Order1_ReturnsClassOnly()
    {
        var ctx = new T4Context { Class = "PostAccountUpdate", PluginOrder = 1 };
        Assert.AreEqual("PostAccountUpdate", ctx.ClassWithOrder);
    }

    [TestMethod]
    public void ClassWithOrder_Order2_ReturnsClassWithOrder()
    {
        var ctx = new T4Context { Class = "PostAccountUpdate", PluginOrder = 2 };
        Assert.AreEqual("PostAccountUpdate2", ctx.ClassWithOrder);
    }

    [TestMethod]
    public void ClassWithOrder_ClassNull_Order1_ReturnsEmpty()
    {
        var ctx = new T4Context { Class = null, PluginOrder = 1 };
        Assert.AreEqual(string.Empty, ctx.ClassWithOrder);
    }

    [TestMethod]
    public void FullClassName_WithNamespace()
    {
        var ctx = new T4Context { PluginNameSpace = "Dev.DevKit.Server", Class = "PostAccountUpdate", PluginOrder = 1 };
        Assert.AreEqual("Dev.DevKit.Server.PostAccountUpdate", ctx.FullClassName);
    }

    [TestMethod]
    public void FullClassName_WithoutNamespace()
    {
        var ctx = new T4Context { PluginNameSpace = null, Class = "PostAccountUpdate", PluginOrder = 1 };
        Assert.AreEqual("PostAccountUpdate", ctx.FullClassName);
    }

    [TestMethod]
    public void RegistrationName_EqualsFullClassName()
    {
        var ctx = new T4Context { PluginNameSpace = "Dev.DevKit.Server", Class = "PostAccountUpdate", PluginOrder = 1 };
        Assert.AreEqual(ctx.FullClassName, ctx.RegistrationName);
    }

    #endregion

    #region Stage Helpers

    [TestMethod]
    public void IsPreValidation_True()
    {
        var ctx = new T4Context { PluginStage = "PreValidation" };
        Assert.IsTrue(ctx.IsPreValidation);
        Assert.IsFalse(ctx.IsPreOperation);
        Assert.IsFalse(ctx.IsPostOperation);
    }

    [TestMethod]
    public void IsPreOperation_True()
    {
        var ctx = new T4Context { PluginStage = "PreOperation" };
        Assert.IsFalse(ctx.IsPreValidation);
        Assert.IsTrue(ctx.IsPreOperation);
        Assert.IsFalse(ctx.IsPostOperation);
    }

    [TestMethod]
    public void IsPostOperation_True()
    {
        var ctx = new T4Context { PluginStage = "PostOperation" };
        Assert.IsFalse(ctx.IsPreValidation);
        Assert.IsFalse(ctx.IsPreOperation);
        Assert.IsTrue(ctx.IsPostOperation);
    }

    [TestMethod]
    public void IsPreValidation_CaseInsensitive()
    {
        var ctx = new T4Context { PluginStage = "prevalidation" };
        Assert.IsTrue(ctx.IsPreValidation);
    }

    [TestMethod]
    public void StageNumber_PreValidation_Returns10()
    {
        var ctx = new T4Context { PluginStage = "PreValidation" };
        Assert.AreEqual(10, ctx.StageNumber);
    }

    [TestMethod]
    public void StageNumber_PreOperation_Returns20()
    {
        var ctx = new T4Context { PluginStage = "PreOperation" };
        Assert.AreEqual(20, ctx.StageNumber);
    }

    [TestMethod]
    public void StageNumber_PostOperation_Returns40()
    {
        var ctx = new T4Context { PluginStage = "PostOperation" };
        Assert.AreEqual(40, ctx.StageNumber);
    }

    [TestMethod]
    public void StageNumber_Unknown_Returns0()
    {
        var ctx = new T4Context { PluginStage = "SomethingElse" };
        Assert.AreEqual(0, ctx.StageNumber);
    }

    #endregion

    #region Execution Mode Helpers

    [TestMethod]
    public void IsAsynchronous_True()
    {
        var ctx = new T4Context { PluginExecution = "Asynchronous" };
        Assert.IsTrue(ctx.IsAsynchronous);
        Assert.IsFalse(ctx.IsSynchronous);
    }

    [TestMethod]
    public void IsSynchronous_True()
    {
        var ctx = new T4Context { PluginExecution = "Synchronous" };
        Assert.IsFalse(ctx.IsAsynchronous);
        Assert.IsTrue(ctx.IsSynchronous);
    }

    [TestMethod]
    public void IsAsynchronous_CaseInsensitive()
    {
        var ctx = new T4Context { PluginExecution = "asynchronous" };
        Assert.IsTrue(ctx.IsAsynchronous);
    }

    #endregion

    #region Message Helpers

    [TestMethod]
    public void IsCreateMessage_True()
    {
        var ctx = new T4Context { PluginMessage = "Create" };
        Assert.IsTrue(ctx.IsCreateMessage);
        Assert.IsFalse(ctx.IsUpdateMessage);
        Assert.IsFalse(ctx.IsDeleteMessage);
    }

    [TestMethod]
    public void IsUpdateMessage_True()
    {
        var ctx = new T4Context { PluginMessage = "Update" };
        Assert.IsFalse(ctx.IsCreateMessage);
        Assert.IsTrue(ctx.IsUpdateMessage);
        Assert.IsFalse(ctx.IsDeleteMessage);
    }

    [TestMethod]
    public void IsDeleteMessage_True()
    {
        var ctx = new T4Context { PluginMessage = "Delete" };
        Assert.IsFalse(ctx.IsCreateMessage);
        Assert.IsFalse(ctx.IsUpdateMessage);
        Assert.IsTrue(ctx.IsDeleteMessage);
    }

    [TestMethod]
    public void IsCreateMultipleMessage_True()
    {
        var ctx = new T4Context { PluginMessage = "CreateMultiple" };
        Assert.IsTrue(ctx.IsCreateMultipleMessage);
        Assert.IsFalse(ctx.IsUpdateMultipleMessage);
    }

    [TestMethod]
    public void IsUpdateMultipleMessage_True()
    {
        var ctx = new T4Context { PluginMessage = "UpdateMultiple" };
        Assert.IsFalse(ctx.IsCreateMultipleMessage);
        Assert.IsTrue(ctx.IsUpdateMultipleMessage);
    }

    [TestMethod]
    public void IsCreateMessage_CaseInsensitive()
    {
        var ctx = new T4Context { PluginMessage = "create" };
        Assert.IsTrue(ctx.IsCreateMessage);
    }

    #endregion

    #region Image Support

    [TestMethod]
    public void HasPreImage_UpdateMessage_True()
    {
        var ctx = new T4Context { PluginMessage = "Update" };
        Assert.IsTrue(ctx.HasPreImage);
    }

    [TestMethod]
    public void HasPreImage_CreateMessage_False()
    {
        var ctx = new T4Context { PluginMessage = "Create" };
        Assert.IsFalse(ctx.HasPreImage);
    }

    [TestMethod]
    public void HasPreImage_DeleteMessage_True()
    {
        var ctx = new T4Context { PluginMessage = "Delete" };
        Assert.IsTrue(ctx.HasPreImage);
    }

    [TestMethod]
    public void HasPostImage_CreatePostOperation_True()
    {
        var ctx = new T4Context { PluginMessage = "Create", PluginStage = "PostOperation" };
        Assert.IsTrue(ctx.HasPostImage);
    }

    [TestMethod]
    public void HasPostImage_CreatePreOperation_False()
    {
        var ctx = new T4Context { PluginMessage = "Create", PluginStage = "PreOperation" };
        Assert.IsFalse(ctx.HasPostImage);
    }

    [TestMethod]
    public void HasPostImage_UpdatePostOperation_True()
    {
        var ctx = new T4Context { PluginMessage = "Update", PluginStage = "PostOperation" };
        Assert.IsTrue(ctx.HasPostImage);
    }

    [TestMethod]
    public void HasPostImage_DeleteMessage_False()
    {
        var ctx = new T4Context { PluginMessage = "Delete", PluginStage = "PostOperation" };
        Assert.IsFalse(ctx.HasPostImage);
    }

    #endregion

    #region Metadata

    [TestMethod]
    public void GeneratedDate_ReturnsCurrentDate()
    {
        var ctx = new T4Context();
        var date = ctx.GeneratedDate;
        Assert.IsTrue(DateTime.TryParse(date, out _));
    }

    [TestMethod]
    public void DevKitVersion_ReturnsNonEmpty()
    {
        var ctx = new T4Context();
        Assert.IsFalse(string.IsNullOrEmpty(ctx.DevKitVersion));
    }

    #endregion

    #region Entity Metadata Properties

    [TestMethod]
    public void EntityDisplayName_SetAndGet()
    {
        var ctx = new T4Context { EntityDisplayName = "Account" };
        Assert.AreEqual("Account", ctx.EntityDisplayName);
    }

    [TestMethod]
    public void EntitySetName_SetAndGet()
    {
        var ctx = new T4Context { EntitySetName = "accounts" };
        Assert.AreEqual("accounts", ctx.EntitySetName);
    }

    [TestMethod]
    public void EntityTypeCode_SetAndGet()
    {
        var ctx = new T4Context { EntityTypeCode = 1 };
        Assert.AreEqual(1, ctx.EntityTypeCode);
    }

    [TestMethod]
    public void IsCustomEntity_SetAndGet()
    {
        var ctx = new T4Context { IsCustomEntity = true };
        Assert.IsTrue(ctx.IsCustomEntity);
    }

    #endregion
}
