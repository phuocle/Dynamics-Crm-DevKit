using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Templates.Handlers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Cli.UnitTests;

[TestClass]
public static class TestAssemblyInit
{
    [AssemblyInitialize]
    public static void Initialize(TestContext context)
    {
        // FakeXrmEasy answers instantly; the CLI tools' real metadata
        // propagation and retry sleeps (3-20s per mutation) are pure
        // wasted wall time against the in-memory fake service.
        MetadataOperationWaitHelper.WaitScalePercent = 0;
        // Same for the code-generation yields (Helper.DelayAsync, 1s per
        // dialog/webapi render) and the retry backoff (RetryHelper, 2s+
        // exponential): the fake service never throttles or propagates.
        Helper.DelayScalePercent = 0;
        RetryHelper.RetryDelayScalePercent = 0;
        // The standard template registry is process-wide and read-only for
        // the scaffold tests, so it is built once here and never torn down
        // per test. That lets the handler/project test classes run in
        // parallel; only the registry-mutation tests (ScaffoldingEngine*
        // tests, UseFakeHandler tests) stay [DoNotParallelize] and restore
        // the standard set in their cleanup.
        TemplateHandlers.RegisterAll();
    }
}
