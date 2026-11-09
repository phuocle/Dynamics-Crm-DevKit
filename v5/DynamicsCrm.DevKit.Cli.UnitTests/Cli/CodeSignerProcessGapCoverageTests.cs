using DynamicsCrm.DevKit.Cli.CodeSigning;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

/// <summary>
/// Second-pass coverage for the CodeSigner process plumbing: RunAsync's
/// stdout/stderr pumps and its exit-code branches (success, tool error,
/// the "already signed" recognition) and IsToolInstalledAsync /
/// EnsureToolInstalledAsync / TryInstallToolAsync — exercised with
/// system executables copied as "sign.exe" (and a shadowed "dotnet.exe"
/// so the installer probe never touches the network) plus a real PFX
/// built in memory. PATH is mutated per test and restored; the class is
/// marked DoNotParallelize because of that process-wide state.
/// </summary>
[TestClass]
[DoNotParallelize]
public class CodeSignerProcessGapCoverageTests
{
    private static readonly BindingFlags StaticPrivate = BindingFlags.NonPublic | BindingFlags.Static;
    private string _tempDir = null!;
    private string _originalPath = null!;
    private string _fakeDirectory = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_signer_gap_" + Guid.NewGuid().ToString("N"));
        _fakeDirectory = Path.Combine(_tempDir, "onpath");
        Directory.CreateDirectory(_fakeDirectory);
        _originalPath = Environment.GetEnvironmentVariable("PATH", EnvironmentVariableTarget.Process)!;
        typeof(CodeSigner).GetField("_toolChecked", StaticPrivate)!.SetValue(null, false);
        typeof(CodeSigner).GetField("_toolInstalled", StaticPrivate)!.SetValue(null, false);
    }

    [TestCleanup]
    public void Cleanup()
    {
        Environment.SetEnvironmentVariable("PATH", _originalPath, EnvironmentVariableTarget.Process);
        typeof(CodeSigner).GetField("_toolChecked", StaticPrivate)!.SetValue(null, false);
        typeof(CodeSigner).GetField("_toolInstalled", StaticPrivate)!.SetValue(null, false);
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    private string SystemExe(string name) => Path.Combine(Environment.SystemDirectory, name);

    private string SignExe => Path.Combine(_fakeDirectory, "sign.exe");

    private void UseFakeSigner(string sourceExe)
    {
        File.Copy(sourceExe, SignExe, overwrite: true);
        PrependFakePath();
    }

    private void ShadowDotnetWithFakeSigner()
    {
        // choice.exe rejects the install arguments immediately and exits
        // nonzero without DNS or network access.
        File.Copy(SystemExe("choice.exe"), Path.Combine(_fakeDirectory, "dotnet.exe"), overwrite: true);
        RestrictPath();
    }

    private void PrependFakePath() =>
        Environment.SetEnvironmentVariable("PATH", _fakeDirectory + Path.PathSeparator + _originalPath, EnvironmentVariableTarget.Process);

    /// <summary>
    /// PATH with only the fake directory and System32: no user dotnet tools,
    /// so neither "sign" nor the real "dotnet" resolve — deterministic
    /// missing-tool behavior even on machines where sign is installed.
    /// </summary>
    private void RestrictPath() =>
        Environment.SetEnvironmentVariable("PATH", _fakeDirectory + Path.PathSeparator + Environment.SystemDirectory, EnvironmentVariableTarget.Process);

    private void TouchVersionMarker() => File.WriteAllText(Path.Combine(_fakeDirectory, "--version"), string.Empty);

    private static async Task<(bool ok, string error)> InvokeRunAsync(string arguments)
    {
        var method = typeof(CodeSigner).GetMethod("RunAsync", StaticPrivate);
        Assert.IsNotNull(method);
        var task = (Task<(bool ok, string error)>)method!.Invoke(null, [arguments])!;
        return await task;
    }

    private static async Task<bool> InvokeIsToolInstalledAsync()
    {
        var method = typeof(CodeSigner).GetMethod("IsToolInstalledAsync", StaticPrivate);
        Assert.IsNotNull(method);
        return await (Task<bool>)method!.Invoke(null, null)!;
    }

    private static async Task<(bool ok, string error)> InvokeEnsureToolInstalledAsync()
    {
        var method = typeof(CodeSigner).GetMethod("EnsureToolInstalledAsync", StaticPrivate);
        Assert.IsNotNull(method);
        return await (Task<(bool ok, string error)>)method!.Invoke(null, null)!;
    }

    private static string WriteTestPfx(string directory, out string dllPath)
    {
        using var rsa = RSA.Create(2048);
        var request = new CertificateRequest("cn=DevKitGapTest", rsa, HashAlgorithmName.SHA256, RSASignaturePadding.Pkcs1);
        using var certificate = request.CreateSelfSigned(DateTimeOffset.UtcNow.AddDays(-1), DateTimeOffset.UtcNow.AddDays(1));
        var pfxPath = Path.Combine(directory, "gap.pfx");
        File.WriteAllBytes(pfxPath, certificate.Export(X509ContentType.Pfx, "gap-pass"));
        dllPath = Path.Combine(directory, "gap.dll");
        File.WriteAllBytes(dllPath, [0x4D, 0x5A, 0x90, 0x00]);
        return pfxPath;
    }

    // ── RunAsync (private) — the sign-tool process pump ──────────────────────

    [TestMethod]
    public async Task RunAsync_ProcessSucceeds_ReturnsOk()
    {
        UseFakeSigner(SystemExe("cmd.exe"));

        var (ok, error) = await InvokeRunAsync("/c exit /b 0");

        Assert.IsTrue(ok);
        Assert.AreEqual(string.Empty, error);
    }

    [TestMethod]
    public async Task RunAsync_StdoutFailure_ReportsToolOutput()
    {
        UseFakeSigner(SystemExe("cmd.exe"));

        var (ok, error) = await InvokeRunAsync("/c echo hello-from-signer& exit /b 4");

        Assert.IsFalse(ok);
        StringAssert.Contains(error, "hello-from-signer");
    }

    [TestMethod]
    public async Task RunAsync_StderrAlreadySigned_ReportsFriendlyMessage()
    {
        UseFakeSigner(SystemExe("cmd.exe"));

        var (ok, error) = await InvokeRunAsync("/c echo File already signed NU3001 1>&2& exit /b 2");

        Assert.IsFalse(ok);
        StringAssert.Contains(error, "File already signed. Please 'Clean' and 'Rebuild' before deploying.");
    }

    // ── IsToolInstalledAsync (private) ────────────────────────────────────────

    [TestMethod]
    public async Task IsToolInstalledAsync_FakeToolExitsZero_ReturnsTrue()
    {
        UseFakeSigner(SystemExe("where.exe"));
        TouchVersionMarker(); // where.exe finds the marker file on PATH

        Assert.IsTrue(await InvokeIsToolInstalledAsync());
    }

    [TestMethod]
    public async Task IsToolInstalledAsync_FakeToolExitsNonZero_ReturnsFalse()
    {
        UseFakeSigner(SystemExe("where.exe"));

        Assert.IsFalse(await InvokeIsToolInstalledAsync());
    }

    [TestMethod]
    public async Task IsToolInstalledAsync_ToolMissing_ReturnsFalse()
    {
        // No sign.exe on the restricted PATH: Process.Start("sign") throws and
        // the catch swallows it.
        RestrictPath();

        Assert.IsFalse(await InvokeIsToolInstalledAsync());
    }

    // ── TryInstallToolAsync (private) ─────────────────────────────────────────

    [TestMethod]
    public async Task TryInstallToolAsync_SuccessfulCommand_ReturnsTrue()
    {
        var method = typeof(CodeSigner).GetMethod("TryInstallToolAsync", StaticPrivate);
        Assert.IsNotNull(method);

        Assert.IsTrue(await (Task<bool>)method!.Invoke(null, ["cmd /c exit /b 0"])!);
    }

    [TestMethod]
    public async Task TryInstallToolAsync_FailingCommand_ReturnsFalse()
    {
        var method = typeof(CodeSigner).GetMethod("TryInstallToolAsync", StaticPrivate);
        Assert.IsNotNull(method);

        Assert.IsFalse(await (Task<bool>)method!.Invoke(null, ["cmd /c exit /b 3"])!);
    }

    // ── EnsureToolInstalledAsync (private) — install fallback flow ───────────

    [TestMethod]
    public async Task EnsureToolInstalledAsync_BothInstallsFail_ReportsManualHint()
    {
        // No sign.exe anywhere (IsToolInstalledAsync throws and swallows) and
        // choice.exe shadows dotnet.exe so both install probes exit non-zero —
        // the whole flow fails without touching the network.
        ShadowDotnetWithFakeSigner();

        var (ok, error) = await InvokeEnsureToolInstalledAsync();

        Assert.IsFalse(ok);
        StringAssert.Contains(error, "Failed to install sign tool");
        StringAssert.Contains(error, "dotnet tool install --global sign");
    }

    [TestMethod]
    public async Task EnsureToolInstalledAsync_ToolResponds_CachedInstalled()
    {
        UseFakeSigner(SystemExe("where.exe"));
        TouchVersionMarker();

        var (ok, error) = await InvokeEnsureToolInstalledAsync();

        Assert.IsTrue(ok);
        Assert.AreEqual(string.Empty, error);
        Assert.IsTrue((bool)typeof(CodeSigner).GetField("_toolInstalled", StaticPrivate)!.GetValue(null)!);
    }

    // ── SignDllAsync — the public entry ──────────────────────────────────────

    [TestMethod]
    public async Task SignDllAsync_InstallerFails_ReturnsInstallError()
    {
        // The tool check fails (no sign.exe) and both installs fail through
        // the choice.exe shadow — the caller sees the install error.
        ShadowDotnetWithFakeSigner();

        var pfxPath = WriteTestPfx(_tempDir, out var dllPath);

        var (ok, error) = await CodeSigner.SignDllAsync(dllPath, pfxPath, "pass");

        Assert.IsFalse(ok);
        StringAssert.Contains(error, "Failed to install sign tool");
    }

    [TestMethod]
    public async Task SignDllAsync_ValidPfx_SignToolMissing_ReportsProcessFailure()
    {
        // The tool cache says installed, the PFX reads fine, but Process
        // cannot find "sign" on the restricted PATH — RunAsync's catch
        // reports the process failure.
        typeof(CodeSigner).GetField("_toolChecked", StaticPrivate)!.SetValue(null, true);
        typeof(CodeSigner).GetField("_toolInstalled", StaticPrivate)!.SetValue(null, true);
        var pfxPath = WriteTestPfx(_tempDir, out var dllPath);
        RestrictPath();

        var (ok, error) = await CodeSigner.SignDllAsync(dllPath, pfxPath, "gap-pass");

        Assert.IsFalse(ok);
        StringAssert.Contains(error, "Failed to run sign tool");
    }

    [TestMethod]
    public async Task SignNugetAsync_ValidPfx_SignToolMissing_ReportsProcessFailure()
    {
        typeof(CodeSigner).GetField("_toolChecked", StaticPrivate)!.SetValue(null, true);
        typeof(CodeSigner).GetField("_toolInstalled", StaticPrivate)!.SetValue(null, true);
        var pfxPath = WriteTestPfx(_tempDir, out var dllPath);
        RestrictPath();

        var (ok, error) = await CodeSigner.SignNugetAsync(dllPath, pfxPath, "gap-pass");

        Assert.IsFalse(ok);
        StringAssert.Contains(error, "Failed to run sign tool");
    }

    [TestMethod]
    public void ProcessStartInfo_SignExeResolvesFromPrependedPath()
    {
        // Sanity check for the fake infrastructure: CreateProcess resolves
        // "sign" through the prepended PATH entry.
        UseFakeSigner(SystemExe("where.exe"));
        TouchVersionMarker();
        var psi = new ProcessStartInfo
        {
            FileName = "sign",
            Arguments = "--version",
            UseShellExecute = false,
            CreateNoWindow = true,
        };
        using var process = Process.Start(psi);
        Assert.IsNotNull(process);
        process.WaitForExit(5000);
        // where.exe exits 0 here because the "--version" marker exists.
        Assert.AreEqual(0, process.ExitCode);
    }

    // NOTE: RunAsync's "already signed" via stdout (no stderr content) and
    // the process==null branches of TryInstallToolAsync/IsToolInstalledAsync
    // cannot be produced with a real process runner — Process.Start never
    // returns null on .NET Core — so those two lines stay uncovered.
}
