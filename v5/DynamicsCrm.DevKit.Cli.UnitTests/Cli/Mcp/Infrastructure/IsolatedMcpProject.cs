using System;
using System.IO;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli.Mcp.Infrastructure;

// Prevent connection tests from inheriting credentials from a parent directory.
internal sealed class IsolatedMcpProject : IDisposable
{
    private readonly string _directory = Path.Combine(Path.GetTempPath(), "devkit-mcp-test-" + Guid.NewGuid().ToString("N"));
    public string JsonPath { get; }

    public IsolatedMcpProject()
    {
        Directory.CreateDirectory(_directory);
        JsonPath = Path.Combine(_directory, "DynamicsCrm.DevKit.Cli.json");
        File.WriteAllText(JsonPath, "{}");
        File.WriteAllText(Path.Combine(_directory, ".env"), string.Empty);
    }

    public void Dispose() => Directory.Delete(_directory, recursive: true);
}
