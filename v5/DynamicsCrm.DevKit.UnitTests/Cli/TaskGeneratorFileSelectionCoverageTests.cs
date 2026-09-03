using DynamicsCrm.DevKit.Cli.Tasks;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public sealed class TaskGeneratorFileSelectionCoverageTests
{
    private string _root = null!;
    private string _folder = null!;

    [TestInitialize]
    public void Setup()
    {
        _root = Path.Combine(Path.GetTempPath(), "DevKitCliGeneratorFiles", Guid.NewGuid().ToString("N"));
        _folder = Path.Combine(_root, "generated");
        Directory.CreateDirectory(_folder);
        foreach (var file in new[] { "Account.generated.cs", "Contact.form.js", "Lead.form.ts", "Case.webapi.js", "Opportunity.webapi.ts" })
            File.WriteAllText(Path.Combine(_folder, file), "// generated");
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_root)) Directory.Delete(_root, true);
    }

    [TestMethod]
    public async Task FolderSelection_UsesTheExpectedExtensionForEveryGeneratorKind()
    {
        foreach (var expected in new Dictionary<string, string[]>
        {
            ["csharp"] = ["Account"],
            ["jsform"] = ["Contact"],
            ["tsform"] = ["Lead"],
            ["jswebapi"] = ["Case"],
            ["tswebapi"] = ["Opportunity"]
        })
        {
            var task = new TaskGenerator(new CommandLineArgs(), new JsonGenerator
            {
                rootfolder = "generated", rootnamespace = "Demo", type = expected.Key, entities = "folder"
            }) { CurrentDirectory = _root };
            var names = await Invoke<Task<List<string>>>(task, "GetSchemaNamesAsync");
            CollectionAssert.AreEqual(expected.Value, names);
        }
    }

    [TestMethod]
    public async Task MigratePublicToInternal_RewritesOnlyMatchingClassDeclaration()
    {
        var method = typeof(TaskGenerator).GetMethod("MigratePublicToInternalAsync", BindingFlags.Static | BindingFlags.NonPublic)!;
        var matching = Path.Combine(_folder, "Account.cs");
        var nonMatching = Path.Combine(_folder, "Contact.cs");
        await File.WriteAllTextAsync(matching, "public partial class Account { }");
        await File.WriteAllTextAsync(nonMatching, "public class Contact { }");

        await (Task)method.Invoke(null, new object[] { matching, "Account" })!;
        await (Task)method.Invoke(null, new object[] { nonMatching, "Contact" })!;
        await (Task)method.Invoke(null, new object[] { Path.Combine(_folder, "missing.cs"), "Missing" })!;

        StringAssert.Contains(await File.ReadAllTextAsync(matching), "internal partial class Account");
        StringAssert.Contains(await File.ReadAllTextAsync(nonMatching), "public class Contact");
    }

    private static T Invoke<T>(object target, string name) =>
        (T)target.GetType().GetMethod(name, BindingFlags.Instance | BindingFlags.NonPublic)!.Invoke(target, null)!;
}
