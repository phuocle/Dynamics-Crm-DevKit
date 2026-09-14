using DynamicsCrm.DevKit.Cli.Mcp;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using System;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class MetadataRetryAndWaitCoverageTests
{
    [TestInitialize]
    public void Setup()
    {
        MetadataOperationWaitHelper.WaitScalePercent = 0;
    }

    [TestMethod]
    public void MetadataRetryHelper_ActionOverload_HandlesLockContentionAndRetries()
    {
        // 1. Success on first attempt
        var count = 0;
        var ok = MetadataRetryHelper.RetryOnLockContention(() => { count++; }, "op1");
        Assert.IsTrue(ok);
        Assert.AreEqual(1, count);

        // 2. Lock contention error on first attempt, then succeeds
        var attempts = 0;
        ok = MetadataRetryHelper.RetryOnLockContention(() =>
        {
            attempts++;
            if (attempts < 2) throw new InvalidOperationException("another metadata operation is running");
        }, "op2");
        Assert.IsTrue(ok);
        Assert.AreEqual(2, attempts);

        // 3. 0x80040216 transient metadata cache error
        attempts = 0;
        ok = MetadataRetryHelper.RetryOnLockContention(() =>
        {
            attempts++;
            if (attempts < 2) throw new InvalidOperationException("Error 0x80040216 occurred");
        }, "op3");
        Assert.IsTrue(ok);
        Assert.AreEqual(2, attempts);

        // 4. 0x80060891 cache not ready error
        attempts = 0;
        ok = MetadataRetryHelper.RetryOnLockContention(() =>
        {
            attempts++;
            if (attempts < 2) throw new InvalidOperationException("Error 0x80060891 table metadata not ready");
        }, "op4");
        Assert.IsTrue(ok);
        Assert.AreEqual(2, attempts);

        // 5. Exhausted retries -> returns false
        attempts = 0;
        ok = MetadataRetryHelper.RetryOnLockContention(() =>
        {
            attempts++;
            throw new InvalidOperationException("lock contention");
        }, "op5");
        Assert.IsFalse(ok);
        Assert.AreEqual(5, attempts);

        // 6. Non-lock exception -> throws immediately
        Assert.Throws<ArgumentException>(() =>
            MetadataRetryHelper.RetryOnLockContention(() => { throw new ArgumentException("invalid arg"); }, "op6"));
    }

    [TestMethod]
    public void MetadataRetryHelper_FuncOverload_HandlesLockContentionAndRetries()
    {
        // 1. Success
        var val = MetadataRetryHelper.RetryOnLockContention(() => 42, "func1");
        Assert.AreEqual(42, val);

        // 2. Lock contention retry and succeed
        var attempts = 0;
        val = MetadataRetryHelper.RetryOnLockContention(() =>
        {
            attempts++;
            if (attempts < 3) throw new InvalidOperationException("resource is locked");
            return 99;
        }, "func2");
        Assert.AreEqual(99, val);
        Assert.AreEqual(3, attempts);

        // 3. Exhausted retries -> throws InvalidOperationException
        var ex = Assert.Throws<InvalidOperationException>(() =>
            MetadataRetryHelper.RetryOnLockContention<int>(() => throw new InvalidOperationException("locked"), "func3"));
        StringAssert.Contains(ex.Message, "failed after 5 attempts");

        // 4. Non-lock exception -> throws immediately
        Assert.Throws<FormatException>(() =>
            MetadataRetryHelper.RetryOnLockContention<int>(() => throw new FormatException("bad format"), "func4"));
    }

    [TestMethod]
    public void MetadataOperationWaitHelper_SpecificWaitMethods_ExecuteWithoutErrorWhenScaledToZero()
    {
        MetadataOperationWaitHelper.WaitScalePercent = 0;

        MetadataOperationWaitHelper.WaitAfterTableCreation();
        MetadataOperationWaitHelper.WaitAfterColumnCreation();
        MetadataOperationWaitHelper.WaitAfterChoiceOperation();
        MetadataOperationWaitHelper.WaitForPropagation();
        MetadataOperationWaitHelper.WaitAfterFormView();
        MetadataOperationWaitHelper.WaitAfterWebResource();
        MetadataOperationWaitHelper.WaitAfterMutation(0);
        MetadataOperationWaitHelper.WaitAfterMutation(-10);
    }

    [TestMethod]
    public void FormulaReferenceHelper_RewriteFormulaReferences_HandlesAllCases()
    {
        Assert.IsNull(FormulaReferenceHelper.RewriteFormulaReferences(null!, "a", "b", "c", "d"));
        Assert.AreEqual("", FormulaReferenceHelper.RewriteFormulaReferences("", "a", "b", "c", "d"));
        Assert.AreEqual("   ", FormulaReferenceHelper.RewriteFormulaReferences("   ", "a", "b", "c", "d"));

        // Auto-detect source entity from EntityName="account"
        var formula = "<Entity EntityName=\"account\"><Property Attribute=\"name\"/>.account_id</Entity>";
        var rewritten = FormulaReferenceHelper.RewriteFormulaReferences(formula, null!, "contact", "name", "fullname");
        StringAssert.Contains(rewritten, "EntityName=\"contact\"");
        StringAssert.Contains(rewritten, "Attribute=\"fullname\"");
        StringAssert.Contains(rewritten, ".contact_id");

        // Relationship mapping
        var mapping = new FormulaRelationshipMapping("rel_source", "rel_target", "lookup_source", "lookup_target");
        var formulaWithRel = "rel_source.lookup_source";
        var withMapping = FormulaReferenceHelper.RewriteFormulaReferences(formulaWithRel, "source", "target", "a", "b", mapping);
        StringAssert.Contains(withMapping, "rel_target");
        StringAssert.Contains(withMapping, "lookup_target");

        // New Entity unescaped & escaped
        var entityFormula = "New Entity(\"account\") and New Entity(&quot;account&quot;)";
        var entityRewritten = FormulaReferenceHelper.RewriteFormulaReferences(entityFormula, "account", "contact", null!, null!);
        StringAssert.Contains(entityRewritten, "New Entity(\"contact\")");
        StringAssert.Contains(entityRewritten, "New Entity(&quot;contact&quot;)");
    }

    [TestMethod]
    public void SolutionComponentCreateHelper_ApplySolutionUniqueName_BehavesCorrectly()
    {
        var req = new OrganizationRequest();
        SolutionComponentCreateHelper.ApplySolutionUniqueName(req, null!);
        Assert.IsFalse(req.Parameters.ContainsKey("SolutionUniqueName"));

        SolutionComponentCreateHelper.ApplySolutionUniqueName(req, "   ");
        Assert.IsFalse(req.Parameters.ContainsKey("SolutionUniqueName"));

        SolutionComponentCreateHelper.ApplySolutionUniqueName(req, "MySolution");
        Assert.IsTrue(req.Parameters.ContainsKey("SolutionUniqueName"));
        Assert.AreEqual("MySolution", req["SolutionUniqueName"]);

        // AddExistingComponent null check
        Assert.Throws<ArgumentNullException>(() =>
            SolutionComponentCreateHelper.AddExistingComponent(null!, null!, Guid.NewGuid(), 1, "sol"));

        // RemoveExistingComponent null check
        Assert.Throws<ArgumentNullException>(() =>
            SolutionComponentCreateHelper.RemoveExistingComponent(null!, null!, Guid.NewGuid(), 1, "sol"));

        var ctx = new McpExecutionContext(false);
        Assert.Throws<ArgumentException>(() =>
            SolutionComponentCreateHelper.RemoveExistingComponent(ctx, null!, Guid.NewGuid(), 1, ""));
    }
}
