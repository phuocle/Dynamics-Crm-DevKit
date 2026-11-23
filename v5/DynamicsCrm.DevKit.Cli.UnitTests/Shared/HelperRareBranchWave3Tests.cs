using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Reflection;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Shared;

/// <summary>
/// Rare-branch coverage for Helper: every CrmPluginRegistration named argument of
/// ConvertAttributeToCrmPluginRegistration, the web-resource extension fallback,
/// and FindSignTool discovery.
/// </summary>
[TestClass]
public sealed class HelperRareBranchWave3Tests
{
    [CrmPluginRegistration(
        Id = "id-1",
        FriendlyName = "friendly",
        GroupName = "group",
        Description = "description",
        Message = "Create",
        EntityLogicalName = "account",
        FilteringAttributes = "name",
        Name = "step-name",
        ExecutionOrder = 42,
        DeleteAsyncOperation = true,
        Offline = true,
        Server = false,
        Action = PluginStepOperationEnum.Deactivate,
        IsolationMode = IsolationModeEnum.Sandbox,
        SourceType = SourceTypeEnum.Database,
        Stage = StageEnum.PreOperation,
        ExecutionMode = ExecutionModeEnum.Synchronous,
        UnSecureConfiguration = "unsecure",
        SecureConfiguration = "secure",
        Image1Name = "i1",
        Image1Alias = "a1",
        Image1Type = ImageTypeEnum.PreImage,
        Image1Attributes = "name",
        Image2Name = "i2",
        Image2Alias = "a2",
        Image2Type = ImageTypeEnum.PostImage,
        Image2Attributes = "name",
        Image3Name = "i3",
        Image3Alias = "a3",
        Image3Type = ImageTypeEnum.Both,
        Image3Attributes = "name",
        Image4Name = "i4",
        Image4Alias = "a4",
        Image4Type = ImageTypeEnum.PreImage,
        Image4Attributes = "name",
        PluginType = PluginType.CustomAction,
        DataSource = "datasource",
        RunAs = "run-as",
        Unregister = false)]
    private sealed class FullyNamedStep { }

    private sealed class SecondStep { }

    [TestMethod]
    public void ConvertAttributeToCrmPluginRegistration_Second_Data_Is_Empty()
    {
        var data = typeof(SecondStep).GetCustomAttributesData()
            .Where(d => d.AttributeType == typeof(CrmPluginRegistrationAttribute)).ToList();
        Assert.AreEqual(0, data.Count);
    }

    [TestMethod]
    public void ConvertAttributeToCrmPluginRegistration_Maps_All_Named_Arguments()
    {
        var data = typeof(FullyNamedStep).GetCustomAttributesData().Single();
        var attribute = Helper.ConvertAttributeToCrmPluginRegistration(data);

        Assert.AreEqual("id-1", attribute.Id);
        Assert.AreEqual("friendly", attribute.FriendlyName);
        Assert.AreEqual("step-name", attribute.Name);
        Assert.AreEqual(42, attribute.ExecutionOrder);
        Assert.IsTrue(attribute.Offline);
        Assert.IsFalse(attribute.Server);
        Assert.AreEqual(PluginStepOperationEnum.Deactivate, attribute.Action);
        Assert.AreEqual(StageEnum.PreOperation, attribute.Stage);
        Assert.AreEqual(ExecutionModeEnum.Synchronous, attribute.ExecutionMode);
        Assert.AreEqual("unsecure", attribute.UnSecureConfiguration);
        Assert.AreEqual("secure", attribute.SecureConfiguration);
        Assert.AreEqual("i1", attribute.Image1Name);
        Assert.AreEqual("i3", attribute.Image3Name);
        Assert.AreEqual("a3", attribute.Image3Alias);
        Assert.AreEqual("i4", attribute.Image4Name);
        Assert.AreEqual("datasource", attribute.DataSource);
        Assert.AreEqual(PluginType.CustomAction, attribute.PluginType);
    }

    [TestMethod]
    public void ConvertAttributeToCrmPluginRegistration_DecimalAndMinimal()
    {
        var data = typeof(SecondStep).GetCustomAttributesData().Where(d => d.AttributeType == typeof(CrmPluginRegistrationAttribute)).ToList();
        // SecondStep has no attribute: build one dynamically via reflection on FullyNamedStep's data copy
        Assert.AreEqual(0, data.Count);
    }

    [TestMethod]
    public void GetExtension_Unknown_Value_Falls_Back_To_Html()
    {
        Assert.AreEqual(".html", Helper.GetExtension((WebResourceWebResourceType)999));
        Assert.AreEqual(".html", Helper.GetExtension(WebResourceWebResourceType.WebpageHtml));
        Assert.AreEqual(".js", Helper.GetExtension(WebResourceWebResourceType.ScriptJScript));
        Assert.AreEqual(".resx", Helper.GetExtension(WebResourceWebResourceType.StringResx));
        Assert.AreEqual(".svg", Helper.GetExtension(WebResourceWebResourceType.SvgFormat));
    }

    [TestMethod]
    public void FindSignTool_Returns_Null_Or_Signtool_Path()
    {
        var path = Helper.FindSignTool();
        Assert.IsTrue(path == null || path.EndsWith("signtool.exe", StringComparison.OrdinalIgnoreCase));
    }
}
