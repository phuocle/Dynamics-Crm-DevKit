using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text.Json;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class McpModelCoverageTests
{
    private static IEnumerable<Type> ModelTypes()
    {
        var asm = typeof(WhoAmIResult).Assembly;
        foreach (var t in asm.GetTypes())
        {
            if (t.Namespace != "DynamicsCrm.DevKit.Cli.Mcp.Tools.Models") continue;
            if (!t.IsClass || t.IsAbstract) continue;
            // Need a public parameterless ctor for Activator.CreateInstance
            if (t.GetConstructor(Type.EmptyTypes) == null) continue;
            // Skip if any property has no setter and no parameterless ctor won't satisfy required members
            yield return t;
        }
    }

    [TestMethod]
    [DynamicData(nameof(ModelTypes), DynamicDataSourceType.Method)]
    public void AllModelTypes_CanBeConstructedAndSerialized(Type t)
    {
        var instance = Activator.CreateInstance(t);
        Assert.IsNotNull(instance);

        // Set every settable string/property to a non-default value
        foreach (var p in t.GetProperties(BindingFlags.Public | BindingFlags.Instance))
        {
            if (!p.CanWrite) continue;
            if (p.GetIndexParameters().Length > 0) continue;
            try
            {
                object? val = p.PropertyType switch
                {
                    Type ty when ty == typeof(string) => "x",
                    Type ty when ty == typeof(bool) => true,
                    Type ty when ty == typeof(bool?) => (bool?)true,
                    Type ty when ty == typeof(int) => 1,
                    Type ty when ty == typeof(int?) => (int?)1,
                    Type ty when ty == typeof(long) => 1L,
                    Type ty when ty == typeof(long?) => (long?)1L,
                    Type ty when ty == typeof(double) => 1.0,
                    Type ty when ty == typeof(double?) => (double?)1.0,
                    Type ty when ty == typeof(DateTime) => DateTime.UtcNow,
                    Type ty when ty == typeof(DateTime?) => (DateTime?)DateTime.UtcNow,
                    Type ty when ty == typeof(Guid) => Guid.NewGuid(),
                    Type ty when ty == typeof(Guid?) => (Guid?)Guid.NewGuid(),
                    Type ty when ty.IsGenericType && ty.GetGenericTypeDefinition() == typeof(List<>) =>
                        Activator.CreateInstance(ty),
                    Type ty when ty.IsGenericType && ty.GetGenericTypeDefinition() == typeof(Dictionary<,>) =>
                        Activator.CreateInstance(ty),
                    _ => null
                };
                if (val != null && (p.PropertyType.IsValueType || val != null))
                {
                    p.SetValue(instance, val);
                }
            }
            catch { }
        }

        // Round-trip JSON to ensure all setters and JsonPropertyName attrs work
        var json = JsonSerializer.Serialize(instance);
        Assert.IsNotNull(json);

        var roundTrip = JsonSerializer.Deserialize(json, t);
        Assert.IsNotNull(roundTrip);
    }

    [TestMethod]
    public void CrudResult_Defaults_AreNull()
    {
        var r = new CrudResult();
        Assert.IsNull(r.Action);
        Assert.IsNull(r.Entity);
        Assert.IsNull(r.Id);
        Assert.IsNull(r.Status);
        Assert.IsNull(r.FieldsUpdated);
        Assert.IsNull(r.Fields);
    }

    [TestMethod]
    public void FetchXmlResult_RecordsIsEmptyListByDefault()
    {
        var r = new FetchXmlResult();
        Assert.IsNotNull(r.Records);
        Assert.AreEqual(0, r.Records.Count);
    }

    [TestMethod]
    public void PublishResult_RoundTrips()
    {
        var p = new PublishResult { Mode = "all", Status = "ok", DurationSeconds = 1.5, IncludeGlobalOptionSets = true };
        var json = JsonSerializer.Serialize(p);
        var back = JsonSerializer.Deserialize<PublishResult>(json);
        Assert.AreEqual("all", back!.Mode);
        Assert.AreEqual("ok", back.Status);
        Assert.AreEqual(1.5, back.DurationSeconds);
    }

    [TestMethod]
    public void UpdateAttributeChange_NewValueRoundTrips()
    {
        var u = new UpdateAttributeChange { NewValue = "v2" };
        var json = JsonSerializer.Serialize(u);
        var back = JsonSerializer.Deserialize<UpdateAttributeChange>(json);
        Assert.AreEqual("v2", back!.NewValue);
    }

    [TestMethod]
    public void DeletedRecordEntry_CanRestoreDefaultsTrue()
    {
        var e = new DeletedRecordEntry();
        Assert.IsTrue(e.CanRestore);
    }

    [TestMethod]
    public void RestoreResultEntry_Defaults()
    {
        var e = new RestoreResultEntry();
        Assert.IsNull(e.RecordId);
        Assert.IsNull(e.Status);
    }

    [TestMethod]
    public void AppMatchEntry_RoundTrips()
    {
        var e = new AppMatchEntry { DisplayName = "MyApp", UniqueName = "myapp", Id = "abc" };
        var json = JsonSerializer.Serialize(e);
        var back = JsonSerializer.Deserialize<AppMatchEntry>(json);
        Assert.AreEqual("MyApp", back!.DisplayName);
    }

    [TestMethod]
    public void ActionParameterEntry_RoundTrips()
    {
        var e = new ActionParameterEntry { Name = "n", Type = "string", IsRequired = true };
        var json = JsonSerializer.Serialize(e);
        var back = JsonSerializer.Deserialize<ActionParameterEntry>(json);
        Assert.AreEqual("n", back!.Name);
        Assert.IsTrue(back.IsRequired);
    }

    [TestMethod]
    public void BatchCreateItem_RoundTrips()
    {
        var e = new BatchCreateItem { Index = 1, Id = "abc", Status = "ok" };
        var json = JsonSerializer.Serialize(e);
        var back = JsonSerializer.Deserialize<BatchCreateItem>(json);
        Assert.AreEqual(1, back!.Index);
        Assert.AreEqual("abc", back.Id);
    }

    [TestMethod]
    public void BpfStageEntry_RoundTrips()
    {
        var e = new BpfStageEntry { StageId = "s1", StageName = "Qualify" };
        var json = JsonSerializer.Serialize(e);
        var back = JsonSerializer.Deserialize<BpfStageEntry>(json);
        Assert.AreEqual("s1", back!.StageId);
    }

    [TestMethod]
    public void BusinessRuleSummaryEntry_RoundTrips()
    {
        var e = new BusinessRuleSummaryEntry { RuleId = "r", Name = "Rule1" };
        var json = JsonSerializer.Serialize(e);
        var back = JsonSerializer.Deserialize<BusinessRuleSummaryEntry>(json);
        Assert.AreEqual("r", back!.RuleId);
    }

    [TestMethod]
    public void BusinessRuleDetailEntry_RoundTrips()
    {
        var e = new BusinessRuleDetailEntry { RuleId = "r", Name = "Rule1", EntityName = "account" };
        var json = JsonSerializer.Serialize(e);
        var back = JsonSerializer.Deserialize<BusinessRuleDetailEntry>(json);
        Assert.AreEqual("account", back!.EntityName);
    }

    [TestMethod]
    public void CellUpdateInstruction_RoundTrips()
    {
        var e = new CellUpdateInstruction { CellName = "c1" };
        var json = JsonSerializer.Serialize(e);
        var back = JsonSerializer.Deserialize<CellUpdateInstruction>(json);
        Assert.AreEqual("c1", back!.CellName);
    }
}
