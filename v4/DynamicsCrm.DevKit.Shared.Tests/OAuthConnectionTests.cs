using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Shared.Tests
{
    [TestClass]
    public class OAuthConnectionTests
    {
        [TestMethod]
        public void BuildConnectionString_WithDefaultClientId_ContainsDefaultAppId()
        {
            // Arrange
            var connection = new CrmConnection
            {
                Type = "OAuth",
                Url = "https://test.crm.dynamics.com",
                UserName = "user@test.com",
                Password = Helper.EncryptString("password")
            };

            // Act
            var connStr = Helper.BuildConnectionString(connection);

            // Assert
            Assert.IsTrue(connStr.Contains("AppId=51f81489-12ee-4a9e-aaae-a2591f45987d"));
            Assert.IsTrue(connStr.Contains("AuthType=OAuth"));
            Assert.IsTrue(connStr.Contains("Url=https://test.crm.dynamics.com"));
        }

        [TestMethod]
        public void BuildConnectionString_WithCustomClientId_ContainsCustomAppId()
        {
            // Arrange
            var connection = new CrmConnection
            {
                Type = "OAuth",
                Url = "https://test.crm.dynamics.com",
                UserName = "user@test.com",
                Password = Helper.EncryptString("password"),
                ClientId = "12345678-1234-1234-1234-123456789012"
            };

            // Act
            var connStr = Helper.BuildConnectionString(connection);

            // Assert
            Assert.IsTrue(connStr.Contains("AppId=12345678-1234-1234-1234-123456789012"));
            Assert.IsFalse(connStr.Contains("51f81489-12ee-4a9e-aaae-a2591f45987d"));
        }

        [TestMethod]
        public void BuildConnectionString_WithTenantId_ContainsTenantId()
        {
            // Arrange
            var connection = new CrmConnection
            {
                Type = "OAuth",
                Url = "https://test.crm.dynamics.com",
                UserName = "user@test.com",
                Password = Helper.EncryptString("password"),
                TenantId = "87654321-4321-4321-4321-210987654321"
            };

            // Act
            var connStr = Helper.BuildConnectionString(connection);

            // Assert
            Assert.IsTrue(connStr.Contains("TenantId=87654321-4321-4321-4321-210987654321"));
        }

        [TestMethod]
        public void BuildConnectionString_WithClientIdAndTenantId_ContainsBoth()
        {
            // Arrange
            var connection = new CrmConnection
            {
                Type = "OAuth",
                Url = "https://test.crm.dynamics.com",
                UserName = "user@test.com",
                Password = Helper.EncryptString("password"),
                ClientId = "12345678-1234-1234-1234-123456789012",
                TenantId = "87654321-4321-4321-4321-210987654321"
            };

            // Act
            var connStr = Helper.BuildConnectionString(connection);

            // Assert
            Assert.IsTrue(connStr.Contains("AppId=12345678-1234-1234-1234-123456789012"));
            Assert.IsTrue(connStr.Contains("TenantId=87654321-4321-4321-4321-210987654321"));
        }

        [TestMethod]
        public void ParseConnectionString_WithAppId_ExtractsClientId()
        {
            // Arrange
            var connStr = "AuthType=OAuth;Url=https://test.crm.dynamics.com;Username=user@test.com;Password=test;AppId=custom-guid-123;";

            // Act
            var connection = Helper.ParseConnectionString(connStr);

            // Assert
            Assert.AreEqual("custom-guid-123", connection.ClientId);
            Assert.AreEqual("OAuth", connection.Type);
            Assert.AreEqual("https://test.crm.dynamics.com", connection.Url);
        }

        [TestMethod]
        public void ParseConnectionString_WithTenantId_ExtractsTenantId()
        {
            // Arrange
            var connStr = "AuthType=OAuth;Url=https://test.crm.dynamics.com;Username=user@test.com;Password=test;TenantId=tenant-guid-456;";

            // Act
            var connection = Helper.ParseConnectionString(connStr);

            // Assert
            Assert.AreEqual("tenant-guid-456", connection.TenantId);
        }

        [TestMethod]
        public void ParseConnectionString_LegacyFormat_NoClientId()
        {
            // Arrange
            var connStr = "AuthType=OAuth;Url=https://test.crm.dynamics.com;Username=user@test.com;Password=test;";

            // Act
            var connection = Helper.ParseConnectionString(connStr);

            // Assert
            Assert.IsNull(connection.ClientId);
            Assert.AreEqual("OAuth", connection.Type);
        }

        [TestMethod]
        public void EncryptDecrypt_RoundTrip_ReturnsOriginalValue()
        {
            // Arrange
            var original = "TestPassword123!@#";

            // Act
            var encrypted = Helper.EncryptString(original);
            var decrypted = Helper.DecryptString(encrypted);

            // Assert
            Assert.AreEqual(original, decrypted);
            Assert.AreNotEqual(original, encrypted);
        }

        [TestMethod]
        public void EncryptDecrypt_EmptyString_HandlesCorrectly()
        {
            // Arrange
            var original = "";

            // Act
            var encrypted = Helper.EncryptString(original);
            var decrypted = Helper.DecryptString(encrypted);

            // Assert
            Assert.AreEqual(original, decrypted);
        }

        [TestMethod]
        public void BuildConnectionString_ClientSecret_WithTenantId()
        {
            // Arrange
            var connection = new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://test.crm.dynamics.com",
                UserName = "12345678-1234-1234-1234-123456789012", // ClientId
                Password = Helper.EncryptString("secret-value"),
                TenantId = "87654321-4321-4321-4321-210987654321"
            };

            // Act
            var connStr = Helper.BuildConnectionString(connection);

            // Assert
            Assert.IsTrue(connStr.Contains("AuthType=ClientSecret"));
            Assert.IsTrue(connStr.Contains("TenantId=87654321-4321-4321-4321-210987654321"));
        }

        [TestMethod]
        public void CrmConnection_Metadata_PropertiesInitialize()
        {
            // Arrange & Act
            var connection = new CrmConnection
            {
                Name = "Test",
                Type = "OAuth",
                Url = "https://test.crm.dynamics.com",
                CreatedAt = System.DateTime.Now,
                ModifiedAt = System.DateTime.Now
            };

            // Assert
            Assert.IsNotNull(connection.CreatedAt);
            Assert.IsNotNull(connection.ModifiedAt);
        }

        [TestMethod]
        public void CrmConnection_HealthTracking_PropertiesWork()
        {
            // Arrange & Act
            var connection = new CrmConnection
            {
                Name = "Test",
                LastTested = System.DateTime.Now,
                LastTestSuccess = true,
                LastTestError = null
            };

            // Assert
            Assert.IsNotNull(connection.LastTested);
            Assert.IsTrue(connection.LastTestSuccess.Value);
            Assert.IsNull(connection.LastTestError);
        }
    }
}
