using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using DynamicsCrm.DevKit.Tool.Lib;
using DynamicsCrm.DevKit.Tool.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class DecryptTests
    {
        [TestMethod]
        public void Helper_DecryptString_NullOrEmpty_ReturnsEmpty()
        {
            Assert.AreEqual(string.Empty, Helper.DecryptString(null));
            Assert.AreEqual(string.Empty, Helper.DecryptString(string.Empty));
        }

        [TestMethod]
        public void Helper_DecryptString_InvalidBase64_ReturnsOriginal()
        {
            Assert.AreEqual("not base64 !!!", Helper.DecryptString("not base64 !!!"));
        }

        [TestMethod]
        public void Helper_DecryptString_ValidCipher_RoundTrips()
        {
            var cipher = Encrypt("secret-password");
            Assert.AreEqual("secret-password", Helper.DecryptString(cipher));
        }

        [TestMethod]
        public void TaskDecrypt_Run_PrintsDecryptedValue()
        {
            TaskDecrypt.Run("whatever-value");
        }

        [TestMethod]
        public void Utility_ForceWriteAllText_CreatesDirectoryAndFile()
        {
            var file = Path.Combine(Path.GetTempPath(), "devkit-tool-tests-utility", Guid.NewGuid().ToString("N"), "out.txt");
            try
            {
                Utility.ForceWriteAllText(file, "content");
                Assert.AreEqual("content", File.ReadAllText(file));
            }
            finally
            {
                var dir = Path.GetDirectoryName(file);
                if (Directory.Exists(dir)) Directory.Delete(dir, recursive: true);
            }
        }

        [TestMethod]
        public void Utility_ForceWriteAllText_OverwritesReadOnlyFile()
        {
            var file = Path.Combine(Path.GetTempPath(), "devkit-tool-tests-utility", Guid.NewGuid().ToString("N"), "out.txt");
            try
            {
                Utility.ForceWriteAllText(file, "first");
                File.SetAttributes(file, FileAttributes.ReadOnly);
                Utility.ForceWriteAllText(file, "second");
                Assert.AreEqual("second", File.ReadAllText(file));
            }
            finally
            {
                var dir = Path.GetDirectoryName(file);
                if (Directory.Exists(dir)) Directory.Delete(dir, recursive: true);
            }
        }

        private const string initVector = "ikols9i3edkdosad";
        private const int keysize = 256;

        private static string Encrypt(string plainText)
        {
            var initVectorBytes = Encoding.UTF8.GetBytes(initVector);
            var plainTextBytes = Encoding.UTF8.GetBytes(plainText);
            var password = new PasswordDeriveBytes("PL.DynamicsCrm.DevKit", null);
            var keyBytes = password.GetBytes(keysize / 8);
#pragma warning disable SYSLIB0041
            using var aes = Aes.Create();
            aes.Mode = CipherMode.CBC;
            aes.KeySize = keysize;
            using var encryptor = aes.CreateEncryptor(keyBytes, initVectorBytes);
            using var memoryStream = new MemoryStream();
            using var cryptoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write);
            cryptoStream.Write(plainTextBytes, 0, plainTextBytes.Length);
            cryptoStream.FlushFinalBlock();
            return Convert.ToBase64String(memoryStream.ToArray());
        }
    }
}
