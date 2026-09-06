using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
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
    }
}
