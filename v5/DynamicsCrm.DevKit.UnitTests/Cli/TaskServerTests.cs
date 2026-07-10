using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Diagnostics.CodeAnalysis;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class TaskServerTests
{
    [TestMethod]
    public void GetCrmPluginRegistrationAttributes_IgnoresOtherAttributes()
    {
        var attributes = TaskServer.GetCrmPluginRegistrationAttributes(typeof(PluginWithOtherAttribute).GetTypeInfo());

        Assert.HasCount(1, attributes);
        Assert.AreEqual("Update", attributes[0].Message);
        Assert.AreEqual(PluginType.CustomAction, attributes[0].PluginType);
    }

    [ExcludeFromCodeCoverage]
    [CrmPluginRegistration(Message = "Update", PluginType = PluginType.CustomAction)]
    private sealed class PluginWithOtherAttribute
    {
    }
}
