using DynamicsCrm.DevKit.Cli.CodeSigning;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Reflection;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Cli;

[TestClass]
public sealed class CodeSignerCoverageTests
{
    private static readonly BindingFlags StaticPrivate = BindingFlags.NonPublic | BindingFlags.Static;
    private string _tempDir = null!;

    [TestInitialize]
    public void Setup()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "devkit_signer_" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
    }

    [TestCleanup]
    public void Cleanup()
    {
        try { Directory.Delete(_tempDir, recursive: true); } catch { }
    }

    [TestMethod]
    public void GetThumbprintFromPfx_ReadsValidPfx()
    {
        var method = typeof(CodeSigner).GetMethod("GetThumbprintFromPfx", StaticPrivate);
        Assert.IsNotNull(method);

        var pfxPath = Path.Combine(_tempDir, "test.pfx");
        using var rsa = RSA.Create(2048);
        var req = new CertificateRequest("cn=DevKitTest", rsa, HashAlgorithmName.SHA256, RSASignaturePadding.Pkcs1);
        using var cert = req.CreateSelfSigned(DateTimeOffset.UtcNow.AddDays(-1), DateTimeOffset.UtcNow.AddDays(1));
        var pfxBytes = cert.Export(X509ContentType.Pfx, "pass123");
        File.WriteAllBytes(pfxPath, pfxBytes);

        var thumbprint = (string)method.Invoke(null, [pfxPath, "pass123"])!;
        Assert.IsFalse(string.IsNullOrWhiteSpace(thumbprint));
        Assert.AreEqual(64, thumbprint.Length); // SHA-256 hex string is 64 characters
    }

    [TestMethod]
    public void GetThumbprintFromPfx_ThrowsOnInvalidPfx()
    {
        var method = typeof(CodeSigner).GetMethod("GetThumbprintFromPfx", StaticPrivate);
        Assert.IsNotNull(method);

        var nonExistent = Path.Combine(_tempDir, "missing.pfx");
        var ex = Assert.Throws<TargetInvocationException>(() =>
        {
            method.Invoke(null, [nonExistent, "pass"]);
        });
        Assert.IsNotNull(ex.InnerException);
        Assert.IsTrue(ex.InnerException.Message.Contains("Failed to read certificate"));
    }

    [TestMethod]
    public async Task TryInstallToolAsync_HandlesInvalidCommand()
    {
        var method = typeof(CodeSigner).GetMethod("TryInstallToolAsync", StaticPrivate);
        Assert.IsNotNull(method);

        var task = (Task<bool>)method.Invoke(null, ["nonexistent_command_12345 --arg"])!;
        var result = await task;
        Assert.IsFalse(result);
    }

    [TestMethod]
    public async Task SignDllAsync_ReturnsErrorWhenPfxInvalid()
    {
        // Force tool checked and installed to skip installation step
        typeof(CodeSigner).GetField("_toolChecked", StaticPrivate)!.SetValue(null, true);
        typeof(CodeSigner).GetField("_toolInstalled", StaticPrivate)!.SetValue(null, true);

        var dllFile = Path.Combine(_tempDir, "test.dll");
        File.WriteAllText(dllFile, "binary content");

        var missingPfx = Path.Combine(_tempDir, "missing.pfx");
        var result = await CodeSigner.SignDllAsync(dllFile, missingPfx, "pass");

        Assert.IsFalse(result.ok);
        Assert.IsTrue(result.error.Contains("Failed to read certificate"));
    }

    [TestMethod]
    public async Task SignNugetAsync_InvokesSigningLogic()
    {
        typeof(CodeSigner).GetField("_toolChecked", StaticPrivate)!.SetValue(null, true);
        typeof(CodeSigner).GetField("_toolInstalled", StaticPrivate)!.SetValue(null, true);

        var nupkgFile = Path.Combine(_tempDir, "test.nupkg");
        File.WriteAllText(nupkgFile, "nupkg content");

        var missingPfx = Path.Combine(_tempDir, "missing.pfx");
        var result = await CodeSigner.SignNugetAsync(nupkgFile, missingPfx, "pass");

        Assert.IsFalse(result.ok);
        Assert.IsTrue(result.error.Contains("Failed to read certificate"));
    }

    [TestMethod]
    public async Task EnsureToolInstalledAsync_CachedTrueReturnsQuickly()
    {
        var method = typeof(CodeSigner).GetMethod("EnsureToolInstalledAsync", StaticPrivate);
        Assert.IsNotNull(method);

        typeof(CodeSigner).GetField("_toolChecked", StaticPrivate)!.SetValue(null, true);
        typeof(CodeSigner).GetField("_toolInstalled", StaticPrivate)!.SetValue(null, true);

        var task = (Task<(bool ok, string error)>)method.Invoke(null, null)!;
        var result = await task;
        Assert.IsTrue(result.ok);
        Assert.AreEqual(string.Empty, result.error);
    }
}
