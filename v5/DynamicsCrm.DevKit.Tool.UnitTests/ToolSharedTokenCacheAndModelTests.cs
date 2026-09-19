using System;
using System.IO;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.Identity.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class ToolSharedTokenCacheAndModelTests
    {
        [TestMethod]
        public void SecureTokenCache_Operations_WorkCorrectly()
        {
            var cache = new SecureTokenCache();
            Assert.IsFalse(string.IsNullOrWhiteSpace(cache.GetCacheLocation()));

            var testConn = "UnitTestConn_" + Guid.NewGuid().ToString("N");
            Assert.IsFalse(cache.HasCache(testConn));
            cache.Clear(testConn);

            var saveMethod = typeof(SecureTokenCache).GetMethod("SaveCacheData", BindingFlags.NonPublic | BindingFlags.Instance);
            var loadMethod = typeof(SecureTokenCache).GetMethod("LoadCacheData", BindingFlags.NonPublic | BindingFlags.Instance);
            Assert.IsNotNull(saveMethod);
            Assert.IsNotNull(loadMethod);

            var testData = Encoding.UTF8.GetBytes("TokenCacheSecretData_" + Guid.NewGuid().ToString());
            saveMethod.Invoke(cache, new object[] { testConn, testData });
            Assert.IsTrue(cache.HasCache(testConn));

            var loaded = (byte[])loadMethod.Invoke(cache, new object[] { testConn });
            Assert.IsNotNull(loaded);
            CollectionAssert.AreEqual(testData, loaded);

            // Corrupted file test
            var filePath = Path.Combine(cache.GetCacheLocation(), $"{testConn}.msalcache");
            File.WriteAllBytes(filePath, new byte[] { 0x01, 0x02, 0x03 });
            var corrupted = loadMethod.Invoke(cache, new object[] { testConn });
            Assert.IsNull(corrupted);

            cache.Clear(testConn);
            Assert.IsFalse(cache.HasCache(testConn));

            var afterClear = loadMethod.Invoke(cache, new object[] { testConn });
            Assert.IsNull(afterClear);

            // RegisterCache & ClearAll
            var app = PublicClientApplicationBuilder.Create(Guid.NewGuid().ToString()).Build();
            cache.RegisterCache(app, testConn);

            cache.ClearAll();
        }

        [TestMethod]
        public void CrmConnection_PropertiesAndToString()
        {
            var now = DateTime.UtcNow;
            var conn = new CrmConnection
            {
                Name = "MyConn",
                Url = "https://org.crm.dynamics.com",
                UserName = "user@test.com",
                Password = "pwd",
                Type = "ClientSecret",
                UseProjectEnvironment = false,
                ClientId = "cid",
                TenantId = "tid",
                ClientSecret = "secret",
                PacProfile = "profile1",
                LastTested = now,
                LastTestSuccess = true,
                LastTestError = null,
                CreatedAt = now,
                ModifiedAt = now
            };

            Assert.AreEqual("MyConn", conn.ToString());

            conn.UseProjectEnvironment = true;
            Assert.AreEqual("MyConn [.env ClientSecret]", conn.ToString());
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

        [TestMethod]
        public void SharedHelper_DecryptString_Tests()
        {
            Assert.AreEqual(string.Empty, Helper.DecryptString(null));
            Assert.AreEqual(string.Empty, Helper.DecryptString(""));

            var plain = "P@ssw0rd_123_!#$";
            var encrypted = Encrypt(plain);
            var decrypted = Helper.DecryptString(encrypted);
            Assert.AreEqual(plain, decrypted);
        }
    }
}
