using DynamicsCrm.DevKit.Shared;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.IO;
using System.Threading.Tasks;

namespace DynamicsCrm.DevKit.UnitTests.Cli;

[TestClass]
public class FileHelperCoverageTests
{
    private string _tempDir = null!;

    [TestInitialize]
    public void Init()
    {
        _tempDir = Path.Combine(Path.GetTempPath(), "FileHelperTest_" + System.Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(_tempDir);
    }

    [TestCleanup]
    public void Cleanup()
    {
        if (Directory.Exists(_tempDir)) Directory.Delete(_tempDir, true);
    }

    [TestMethod]
    public async Task ForceWriteAllTextAsync_NewFile_WritesContent()
    {
        var path = Path.Combine(_tempDir, "a.txt");
        await FileHelper.ForceWriteAllTextAsync(path, "hello");
        Assert.AreEqual("hello", await File.ReadAllTextAsync(path));
    }

    [TestMethod]
    public async Task ForceWriteAllTextAsync_NewFileInMissingDir_CreatesDir()
    {
        var path = Path.Combine(_tempDir, "nested", "deep", "a.txt");
        await FileHelper.ForceWriteAllTextAsync(path, "x");
        Assert.IsTrue(File.Exists(path));
    }

    [TestMethod]
    public async Task ForceWriteAllTextAsync_ExistingFile_Overwrites()
    {
        var path = Path.Combine(_tempDir, "a.txt");
        await File.WriteAllTextAsync(path, "old");
        await FileHelper.ForceWriteAllTextAsync(path, "new");
        Assert.AreEqual("new", await File.ReadAllTextAsync(path));
    }

    [TestMethod]
    public async Task ForceWriteAllTextAsync_ReadOnlyFile_Overwrites()
    {
        var path = Path.Combine(_tempDir, "ro.txt");
        await File.WriteAllTextAsync(path, "old");
        File.SetAttributes(path, File.GetAttributes(path) | FileAttributes.ReadOnly);
        await FileHelper.ForceWriteAllTextAsync(path, "new");
        Assert.AreEqual("new", await File.ReadAllTextAsync(path));
    }

    [TestMethod]
    public async Task ForceWriteAllTextWithoutUTF8Async_NewFile_Writes()
    {
        var path = Path.Combine(_tempDir, "a.txt");
        await FileHelper.ForceWriteAllTextWithoutUTF8Async(path, "hi");
        Assert.IsTrue(File.Exists(path));
    }

    [TestMethod]
    public async Task ForceWriteAllTextWithoutUTF8Async_NewFileInMissingDir_CreatesDir()
    {
        var path = Path.Combine(_tempDir, "nested", "a.txt");
        await FileHelper.ForceWriteAllTextWithoutUTF8Async(path, "hi");
        Assert.IsTrue(File.Exists(path));
    }

    [TestMethod]
    public async Task ForceWriteAllTextWithoutUTF8Async_ExistingFile_Overwrites()
    {
        var path = Path.Combine(_tempDir, "a.txt");
        await File.WriteAllTextAsync(path, "old");
        await FileHelper.ForceWriteAllTextWithoutUTF8Async(path, "new");
        Assert.AreEqual("new", await File.ReadAllTextAsync(path));
    }

    [TestMethod]
    public async Task ForceWriteAllTextWithoutUTF8Async_ReadOnlyFile_Overwrites()
    {
        var path = Path.Combine(_tempDir, "ro.txt");
        await File.WriteAllTextAsync(path, "old");
        File.SetAttributes(path, File.GetAttributes(path) | FileAttributes.ReadOnly);
        await FileHelper.ForceWriteAllTextWithoutUTF8Async(path, "new");
        Assert.AreEqual("new", await File.ReadAllTextAsync(path));
    }

    [TestMethod]
    public void GeNextFileName_NonExisting_ReturnsSame()
    {
        var path = Path.Combine(_tempDir, "x.txt");
        var result = FileHelper.GeNextFileName(path);
        Assert.AreEqual(path, result);
    }

    [TestMethod]
    public void GeNextFileName_OnceExists_AddsOne()
    {
        var path = Path.Combine(_tempDir, "x.txt");
        File.WriteAllText(path, "");
        var result = FileHelper.GeNextFileName(path);
        Assert.AreEqual(Path.Combine(_tempDir, "x(1).txt"), result);
    }

    [TestMethod]
    public void GeNextFileName_MultipleExist_IncrementsNumber()
    {
        var path = Path.Combine(_tempDir, "x.txt");
        File.WriteAllText(path, "");
        File.WriteAllText(Path.Combine(_tempDir, "x(1).txt"), "");
        var result = FileHelper.GeNextFileName(path);
        Assert.AreEqual(Path.Combine(_tempDir, "x(2).txt"), result);
    }

    [TestMethod]
    public async Task ReadAllTextAsync_Exists_ReturnsContent()
    {
        var path = Path.Combine(_tempDir, "r.txt");
        await File.WriteAllTextAsync(path, "content");
        var result = await FileHelper.ReadAllTextAsync(path);
        Assert.AreEqual("content", result);
    }

    [TestMethod]
    public async Task ReadAllTextAsync_Missing_ReturnsEmpty()
    {
        var path = Path.Combine(_tempDir, "missing.txt");
        var result = await FileHelper.ReadAllTextAsync(path);
        Assert.AreEqual(string.Empty, result);
    }

    [TestMethod]
    public async Task ReadAllBytesAsync_Exists_ReturnsBytes()
    {
        var path = Path.Combine(_tempDir, "b.bin");
        await File.WriteAllBytesAsync(path, new byte[] { 1, 2, 3 });
        var result = await FileHelper.ReadAllBytesAsync(path);
        Assert.AreEqual(3, result.Length);
        Assert.AreEqual(1, result[0]);
    }

    [TestMethod]
    public async Task ReadAllBytesAsync_Missing_ReturnsEmpty()
    {
        var path = Path.Combine(_tempDir, "missing.bin");
        var result = await FileHelper.ReadAllBytesAsync(path);
        Assert.AreEqual(0, result.Length);
    }

    [TestMethod]
    public async Task ReadAllTextFromLine6Async_Exists_SkipsFirst7Lines()
    {
        var path = Path.Combine(_tempDir, "s.txt");
        await File.WriteAllTextAsync(path, "l1\nl2\nl3\nl4\nl5\nl6\nl7\nl8\nl9");
        var result = await FileHelper.ReadAllTextFromLine6Async(path);
        Assert.IsFalse(result.StartsWith("l1"));
        Assert.IsTrue(result.Contains("l8"));
    }

    [TestMethod]
    public async Task ReadAllTextFromLine6Async_Missing_ReturnsEmpty()
    {
        var path = Path.Combine(_tempDir, "missing.txt");
        var result = await FileHelper.ReadAllTextFromLine6Async(path);
        Assert.AreEqual(string.Empty, result);
    }

    [TestMethod]
    public async Task WriteTempFileAsync_WritesContent()
    {
        var result = await FileHelper.WriteTempFileAsync("tst_" + System.Guid.NewGuid().ToString("N") + ".dat", new byte[] { 1, 2, 3 });
        Assert.IsNotNull(result);
        Assert.IsTrue(File.Exists(result));
        var bytes = await File.ReadAllBytesAsync(result!);
        Assert.AreEqual(3, bytes.Length);
        File.Delete(result!);
    }

    [TestMethod]
    public async Task WriteTempFileAsync_OverwritesExisting()
    {
        var filename = "ovr_" + System.Guid.NewGuid().ToString("N") + ".dat";
        var first = await FileHelper.WriteTempFileAsync(filename, new byte[] { 1 });
        var second = await FileHelper.WriteTempFileAsync(filename, new byte[] { 2, 3 });
        Assert.IsNotNull(second);
        var bytes = await File.ReadAllBytesAsync(second!);
        Assert.AreEqual(2, bytes.Length);
        File.Delete(second!);
    }
}
