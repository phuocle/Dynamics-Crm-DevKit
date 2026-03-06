using DynamicsCrm.DevKit.Shared.Models;

namespace DynamicsCrm.DevKit.UnitTests.T4;

[TestClass]
public class T4ProcessorDiagnosticTests
{
    private static readonly string[] AllTemplates = new[]
    {
        "Plugin.tt", "Plugin.pac.tt",
        "CustomAction.tt", "CustomApi.tt",
        "Workflow.tt", "UiTest.tt",
        "TestPlugin.tt", "TestWorkflow.tt", "TestCustomAction.tt", "TestCustomApi.tt",
        "DataProviderCreate.tt", "DataProviderDelete.tt",
        "DataProviderRetrieve.tt", "DataProviderRetrieveMultiple.tt", "DataProviderUpdate.tt",
    };

    private static string FindTtFolder()
    {
        var dir = new DirectoryInfo(AppContext.BaseDirectory);
        while (dir != null)
        {
            var candidate = Path.Combine(dir.FullName, "DynamicsCrm.DevKit.Shared", "Resources", "tt");
            if (Directory.Exists(candidate)) return candidate;
            dir = dir.Parent;
        }
        var fallback = Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "DynamicsCrm.DevKit.Shared", "Resources", "tt"));
        if (Directory.Exists(fallback)) return fallback;
        throw new DirectoryNotFoundException("Cannot find tt folder");
    }

    private static string LoadTemplate(string fileName) =>
        File.ReadAllText(Path.Combine(FindTtFolder(), fileName));

    private static T4Context CreateContext(
        string message = "Update",
        string stage = "PostOperation",
        string execution = "Synchronous",
        string logicalName = "account")
    {
        return new T4Context
        {
            PluginMessage = message,
            PluginStage = stage,
            PluginExecution = execution,
            PluginOrder = 1,
            PluginLogicalName = logicalName,
            PluginSchemaName = "Account",
            PluginNameSpace = "Dev.DevKit.Server",
            PluginSharedNameSpace = "Dev.DevKit.Shared",
            Class = "PostAccountUpdate",
            PluginComment = "  Plugin comment here",
            DataSource = "dev_datasource",
        };
    }

    #region No T4 syntax residue in output

    [TestMethod]
    public void AllTemplates_Synchronous_Update_NoT4Residue()
    {
        var ctx = CreateContext(message: "Update", stage: "PostOperation", execution: "Synchronous");
        AssertNoT4Residue(ctx);
    }

    [TestMethod]
    public void AllTemplates_Asynchronous_Create_NoT4Residue()
    {
        var ctx = CreateContext(message: "Create", stage: "PostOperation", execution: "Asynchronous");
        AssertNoT4Residue(ctx);
    }

    [TestMethod]
    public void AllTemplates_Delete_PreValidation_NoT4Residue()
    {
        var ctx = CreateContext(message: "Delete", stage: "PreValidation", execution: "Synchronous");
        AssertNoT4Residue(ctx);
    }

    [TestMethod]
    public void AllTemplates_CreateMultiple_NoT4Residue()
    {
        var ctx = CreateContext(message: "CreateMultiple", stage: "PreOperation", execution: "Synchronous");
        AssertNoT4Residue(ctx);
    }

    [TestMethod]
    public void AllTemplates_Assign_NoT4Residue()
    {
        var ctx = CreateContext(message: "Assign", stage: "PostOperation", execution: "Synchronous");
        AssertNoT4Residue(ctx);
    }

    [TestMethod]
    public void AllTemplates_EntityNone_NoT4Residue()
    {
        var ctx = CreateContext(logicalName: "none");
        AssertNoT4Residue(ctx);
    }

    [TestMethod]
    public void AllTemplates_Order2_NoT4Residue()
    {
        var ctx = CreateContext();
        ctx.PluginOrder = 2;
        AssertNoT4Residue(ctx);
    }

    private void AssertNoT4Residue(T4Context ctx)
    {
        var errors = new List<string>();

        foreach (var templateName in AllTemplates)
        {
            var template = LoadTemplate(templateName);
            var output = SimpleT4Processor.Process(template, ctx);

            if (output.Contains("<#="))
                errors.Add($"{templateName}: contains unprocessed expression '<#='");
            if (output.Contains("<#if"))
                errors.Add($"{templateName}: contains unprocessed conditional '<#if'");
            if (output.Contains("<#}"))
                errors.Add($"{templateName}: contains unprocessed closing '<#}}'");
            if (output.Contains("{UNKNOWN:"))
                errors.Add($"{templateName}: contains unknown property reference");

            var residuePattern = System.Text.RegularExpressions.Regex.Match(output, @"<#[^#]*#>");
            if (residuePattern.Success)
                errors.Add($"{templateName}: contains T4 residue: '{residuePattern.Value}'");
        }

        if (errors.Count > 0)
            Assert.Fail($"T4 processing errors:\n{string.Join("\n", errors)}");
    }

    #endregion

    #region No empty output

    [TestMethod]
    public void AllTemplates_ProduceNonEmptyOutput()
    {
        var ctx = CreateContext();
        foreach (var templateName in AllTemplates)
        {
            var template = LoadTemplate(templateName);
            var output = SimpleT4Processor.Process(template, ctx);
            Assert.IsFalse(string.IsNullOrWhiteSpace(output), $"{templateName} produced empty output");
        }
    }

    #endregion

    #region Output structure validation

    [TestMethod]
    public void AllTemplates_ContainNamespace()
    {
        var ctx = CreateContext();
        foreach (var templateName in AllTemplates)
        {
            var template = LoadTemplate(templateName);
            var output = SimpleT4Processor.Process(template, ctx);
            Assert.IsTrue(output.Contains("namespace "), $"{templateName} missing 'namespace' keyword");
        }
    }

    [TestMethod]
    public void AllTemplates_ContainClassDeclaration()
    {
        var ctx = CreateContext();
        foreach (var templateName in AllTemplates)
        {
            var template = LoadTemplate(templateName);
            var output = SimpleT4Processor.Process(template, ctx);
            Assert.IsTrue(output.Contains("class "), $"{templateName} missing 'class' keyword");
        }
    }

    [TestMethod]
    public void AllTemplates_BalancedBraces()
    {
        var ctx = CreateContext();
        foreach (var templateName in AllTemplates)
        {
            var template = LoadTemplate(templateName);
            var output = SimpleT4Processor.Process(template, ctx);
            var opens = output.Count(c => c == '{');
            var closes = output.Count(c => c == '}');
            Assert.AreEqual(opens, closes, $"{templateName}: unbalanced braces (open={opens}, close={closes})");
        }
    }

    #endregion
}
