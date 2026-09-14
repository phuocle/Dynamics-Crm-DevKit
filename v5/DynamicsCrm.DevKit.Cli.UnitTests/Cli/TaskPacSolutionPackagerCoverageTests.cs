using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class TaskPacSolutionPackagerCoverageTests
{
    [TestMethod]
    public async Task TaskPacSolutionPackager_IsValidAsync_ValidationBranches_ReturnFalse()
    {
        var args = new CommandLineArgs { Json = "x" };

        // 1. Json == null
        var taskNullJson = new TaskPacSolutionPackager(args, null!);
        Assert.IsFalse(await taskNullJson.IsValidAsync());

        // 2. solution empty / ???
        var jsonEmptySol = new JsonSolutionPackager { solution = "" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonEmptySol).IsValidAsync());

        var jsonPlaceholderSol = new JsonSolutionPackager { solution = "???" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonPlaceholderSol).IsValidAsync());

        // 3. solutiontype empty / ??? / invalid
        var jsonEmptyType = new JsonSolutionPackager { solution = "MySol", solutiontype = "" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonEmptyType).IsValidAsync());

        var jsonPlaceholderType = new JsonSolutionPackager { solution = "MySol", solutiontype = "???" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonPlaceholderType).IsValidAsync());

        var jsonInvalidType = new JsonSolutionPackager { solution = "MySol", solutiontype = "InvalidType" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonInvalidType).IsValidAsync());

        // 4. folder empty / ???
        var jsonEmptyFolder = new JsonSolutionPackager { solution = "MySol", solutiontype = "Managed", folder = "" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonEmptyFolder).IsValidAsync());

        var jsonPlaceholderFolder = new JsonSolutionPackager { solution = "MySol", solutiontype = "Managed", folder = "???" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonPlaceholderFolder).IsValidAsync());

        // 5. type empty / ??? / invalid
        var jsonEmptyOpType = new JsonSolutionPackager { solution = "MySol", solutiontype = "Managed", folder = "f", type = "" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonEmptyOpType).IsValidAsync());

        var jsonInvalidOpType = new JsonSolutionPackager { solution = "MySol", solutiontype = "Managed", folder = "f", type = "InvalidOp" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonInvalidOpType).IsValidAsync());

        // 6. type == Pack with missing Solution.xml
        var jsonPackNoXml = new JsonSolutionPackager { solution = "MySol", solutiontype = "Managed", folder = "f", type = "Pack" };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonPackNoXml).IsValidAsync());

        // 7. mapfile non-existent
        var jsonMapMissing = new JsonSolutionPackager
        {
            solution = "MySol",
            solutiontype = "Managed",
            folder = "f",
            type = "Extract",
            mapfile = "NonExistentMap_" + Guid.NewGuid().ToString("N") + ".xml"
        };
        Assert.IsFalse(await new TaskPacSolutionPackager(args, jsonMapMissing).IsValidAsync());
    }

    [TestMethod]
    public void TaskPacSolutionPackager_HelperMethods_WorkAsExpected()
    {
        var args = new CommandLineArgs { Json = "x" };
        var json = new JsonSolutionPackager { solution = "MySol", solutiontype = "Managed", folder = "f", type = "Extract" };
        var task = new TaskPacSolutionPackager(args, json);

        var type = typeof(TaskPacSolutionPackager);

        // NormalizeVersion
        var normMethod = type.GetMethod("NormalizeVersion", BindingFlags.NonPublic | BindingFlags.Instance);
        if (normMethod != null)
        {
            var v3 = normMethod.Invoke(task, new object[] { "1.2.3" });
            Assert.AreEqual("1.2.3.0", v3);

            var v4 = normMethod.Invoke(task, new object[] { "1.2.3.4" });
            Assert.AreEqual("1.2.3.4", v4);

            var vInvalid = normMethod.Invoke(task, new object[] { "not-a-version" });
            Assert.AreEqual("not-a-version", vInvalid);
        }

        // FormatSize
        var formatSizeMethod = type.GetMethod("FormatSize", BindingFlags.NonPublic | BindingFlags.Instance);
        if (formatSizeMethod != null)
        {
            var bytes = (string)formatSizeMethod.Invoke(task, new object[] { 500L })!;
            StringAssert.Contains(bytes, "B");

            var kb = (string)formatSizeMethod.Invoke(task, new object[] { 2048L })!;
            StringAssert.Contains(kb, "KB");

            var mb = (string)formatSizeMethod.Invoke(task, new object[] { 2097152L })!;
            StringAssert.Contains(mb, "MB");
        }

        // TaskType
        Assert.AreEqual("[SOLUTIONPACKAGERS]", task.TaskType);
    }
}
