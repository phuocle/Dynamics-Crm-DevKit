using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.PowerPlatform.Dataverse.ModelBuilderLib.Status;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public sealed class TaskModelBuilderProgressCoverageTests
{
    [TestMethod]
    public void ProgressHandler_CoversInformationWarningAndErrorIndentedMessages()
    {
        var task = new TaskModelBuilder(new CommandLineArgs(), new JsonModelBuilder()) { CurrentDirectory = "." };
        var method = typeof(TaskModelBuilder).GetMethod("OnWriteProgressItem", BindingFlags.Instance | BindingFlags.NonPublic)!;

        foreach (var type in new[] { ProgressType.Information, ProgressType.Warning, ProgressType.Error })
        {
            var progress = new ProgressStatus
            {
                StatusType = type,
                StatusMessage = "coverage",
                Indent = true
            };
            method.Invoke(task, new object?[] { task, progress });
        }
    }

    [TestMethod]
    public void ModelBuilderArguments_CoversNullNamespaceAndWildcardEntities()
    {
        var task = new TaskModelBuilder(new CommandLineArgs(), new JsonModelBuilder
        {
            output = "model.cs",
            @namespace = null,
            entities = "*"
        });
        var method = typeof(TaskModelBuilder).GetMethod("BuildModelBuilderArgs", BindingFlags.Instance | BindingFlags.NonPublic)!;
        var args = (string[])method.Invoke(task, null)!;
        Assert.IsTrue(args[0] == "/nologo");
        Assert.IsFalse(System.Array.Exists(args, x => x.StartsWith("/namespace:")));
        Assert.IsFalse(System.Array.Exists(args, x => x.StartsWith("/entitynamesfilter:")));
    }
}
