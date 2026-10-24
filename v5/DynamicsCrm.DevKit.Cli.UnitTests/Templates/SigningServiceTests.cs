using DynamicsCrm.DevKit.Shared.Templates;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using System.Security.Cryptography;

namespace DynamicsCrm.DevKit.Cli.UnitTests.Templates
{
    [TestClass]
    [DoNotParallelize]
    public class SigningServiceTests
    {
        private static string TempDirectory()
        {
            var path = Path.Combine(Path.GetTempPath(), "devkit-signing-tests", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(path);
            return path;
        }

        [TestMethod]
        public void GenerateKeyBlob_ProducesRsa2PrivateKeyBlob()
        {
            var blob = SigningService.GenerateKeyBlob(2048);
            Assert.AreEqual(1172, blob.Length);
            Assert.AreEqual(0x07, blob[0]);
            Assert.AreEqual(0x02, blob[1]);
            Assert.AreEqual(0x00, blob[4]);
            Assert.AreEqual(0x24, blob[5]);
            Assert.AreEqual(0x00, blob[6]);
            Assert.AreEqual(0x00, blob[7]);
            Assert.AreEqual(0x52, blob[8]);
            Assert.AreEqual(0x53, blob[9]);
            Assert.AreEqual(0x41, blob[10]);
            Assert.AreEqual(0x32, blob[11]);
        }

        [TestMethod]
        public void GenerateKeyBlob_RoundTripsThroughCspImport()
        {
            if (!OperatingSystem.IsWindows())
            {
                Assert.Inconclusive("CSP blob import requires Windows (RSACryptoServiceProvider).");
                return;
            }

            var blob = SigningService.GenerateKeyBlob(2048);
            using (var rsa = new RSACryptoServiceProvider())
            {
                // A successful CAPI import proves the blob layout: header,
                // RSAPUBKEY, fixed-width little-endian fields, full order.
                rsa.ImportCspBlob(blob);
                Assert.AreEqual(2048, rsa.KeySize);

                var parameters = rsa.ExportParameters(true);
                Assert.AreEqual(256, parameters.Modulus.Length);
                Assert.AreEqual(256, parameters.D.Length);
                Assert.AreEqual(128, parameters.P.Length);
                Assert.AreEqual(128, parameters.Q.Length);
                Assert.AreEqual(128, parameters.InverseQ.Length);
            }
        }

        [TestMethod]
        public void GenerateKeyFile_WritesKeyFile()
        {
            var directory = TempDirectory();
            try
            {
                var path = SigningService.GenerateKeyFile(directory, "Test.snk");
                Assert.AreEqual(Path.Combine(directory, "Test.snk"), path);
                Assert.IsTrue(File.Exists(path));
                Assert.AreEqual(1172, new FileInfo(path).Length);
            }
            finally
            {
                Directory.Delete(directory, true);
            }
        }
    }
}
