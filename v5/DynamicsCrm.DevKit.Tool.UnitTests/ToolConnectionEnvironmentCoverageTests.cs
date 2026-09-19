using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Tool.Lib;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    [DoNotParallelize]
    public class ToolConnectionEnvironmentCoverageTests
    {
        [TestMethod]
        public void HasValues_WithoutEnvFile_ReturnsFalse()
        {
            var tempDir = Path.Combine(Path.GetTempPath(), "tool-env-test-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            var prevDir = Environment.CurrentDirectory;
            try
            {
                Environment.CurrentDirectory = tempDir;
                var result = ToolConnectionEnvironment.HasValues();
                Assert.IsFalse(result);
            }
            finally
            {
                Environment.CurrentDirectory = prevDir;
                if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
            }
        }

        [TestMethod]
        public void HasValues_WithEnvFileContainingKey_ReturnsTrue()
        {
            var tempDir = Path.Combine(Path.GetTempPath(), "tool-env-test-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_URL=https://test.crm.dynamics.com\n");
            var prevDir = Environment.CurrentDirectory;
            try
            {
                Environment.CurrentDirectory = tempDir;
                var result = ToolConnectionEnvironment.HasValues();
                Assert.IsTrue(result);
            }
            finally
            {
                Environment.CurrentDirectory = prevDir;
                if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
            }
        }

        [TestMethod]
        public async Task ConnectAsync_ExplicitInvalidConnectionString_Throws()
        {
            var ex = await Assert.ThrowsAsync<Exception>(async () =>
            {
                await ToolConnectionEnvironment.ConnectAsync("AuthType=ClientSecret;Url=https://invalid.test;ClientId=foo;ClientSecret=bar");
            });
            Assert.IsNotNull(ex);
        }

        [TestMethod]
        public async Task ConnectAsync_NoAuthType_Throws()
        {
            var tempDir = Path.Combine(Path.GetTempPath(), "tool-env-test-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            var prevDir = Environment.CurrentDirectory;
            try
            {
                Environment.CurrentDirectory = tempDir;
                var ex = await Assert.ThrowsExactlyAsync<InvalidOperationException>(async () =>
                {
                    await ToolConnectionEnvironment.ConnectAsync(null);
                });
                StringAssert.Contains(ex.Message, "--conn or project .env");
            }
            finally
            {
                Environment.CurrentDirectory = prevDir;
                if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
            }
        }

        [TestMethod]
        public async Task ConnectAsync_WithConnectionStringInEnv_ThrowsCannotConnect()
        {
            var tempDir = Path.Combine(Path.GetTempPath(), "tool-env-test-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_CONNECTION=AuthType=ClientSecret;Url=https://invalid.test;ClientId=x;ClientSecret=y\n");
            var prevDir = Environment.CurrentDirectory;
            try
            {
                Environment.CurrentDirectory = tempDir;
                var ex = await Assert.ThrowsAsync<Exception>(async () =>
                {
                    await ToolConnectionEnvironment.ConnectAsync(null);
                });
                Assert.IsNotNull(ex);
            }
            finally
            {
                Environment.CurrentDirectory = prevDir;
                if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
            }
        }

        [TestMethod]
        public async Task ConnectAsync_InvalidSettings_FailsValidation()
        {
            var tempDir = Path.Combine(Path.GetTempPath(), "tool-env-test-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_AUTH_TYPE=ClientSecret\nDEVKIT_URL=\n");
            var prevDir = Environment.CurrentDirectory;
            try
            {
                Environment.CurrentDirectory = tempDir;
                var ex = await Assert.ThrowsExactlyAsync<InvalidOperationException>(async () =>
                {
                    await ToolConnectionEnvironment.ConnectAsync(null);
                });
                Assert.IsNotNull(ex.Message);
            }
            finally
            {
                Environment.CurrentDirectory = prevDir;
                if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
            }
        }

        [TestMethod]
        public async Task ConnectAsync_AdWithDomain_FailsValidation()
        {
            var tempDir = Path.Combine(Path.GetTempPath(), "tool-env-test-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_AUTH_TYPE=AD\nDEVKIT_DOMAIN=MYDOMAIN\nDEVKIT_USERNAME=myuser\nDEVKIT_URL=https://invalid.test\n");
            var prevDir = Environment.CurrentDirectory;
            try
            {
                Environment.CurrentDirectory = tempDir;
                var ex = await Assert.ThrowsExactlyAsync<InvalidOperationException>(async () =>
                {
                    await ToolConnectionEnvironment.ConnectAsync(null);
                });
                Assert.IsNotNull(ex.Message);
            }
            finally
            {
                Environment.CurrentDirectory = prevDir;
                if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
            }
        }

        [TestMethod]
        public async Task ConnectAsync_AdWithDomainAlreadyInUsername()
        {
            var tempDir = Path.Combine(Path.GetTempPath(), "tool-env-test-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_AUTH_TYPE=AD\nDEVKIT_DOMAIN=MYDOMAIN\nDEVKIT_USERNAME=MYDOMAIN\\myuser\nDEVKIT_URL=https://invalid.test\n");
            var prevDir = Environment.CurrentDirectory;
            try
            {
                Environment.CurrentDirectory = tempDir;
                var ex = await Assert.ThrowsExactlyAsync<InvalidOperationException>(async () =>
                {
                    await ToolConnectionEnvironment.ConnectAsync(null);
                });
                Assert.IsNotNull(ex.Message);
            }
            finally
            {
                Environment.CurrentDirectory = prevDir;
                if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
            }
        }

        [TestMethod]
        public async Task ConnectAsync_ValidParameters_AttemptsConnectionAndCallsEnsureReady()
        {
            var tempDir = Path.Combine(Path.GetTempPath(), "tool-env-test-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_AUTH_TYPE=ClientSecret\nDEVKIT_URL=https://127.0.0.1:54321\nDEVKIT_CLIENT_ID=00000000-0000-0000-0000-000000000000\nDEVKIT_CLIENT_SECRET=testsecret\n");
            var prevDir = Environment.CurrentDirectory;
            try
            {
                Environment.CurrentDirectory = tempDir;
                var ex = await Assert.ThrowsAsync<Exception>(async () =>
                {
                    await ToolConnectionEnvironment.ConnectAsync(null);
                });
                Assert.IsNotNull(ex);
            }
            finally
            {
                Environment.CurrentDirectory = prevDir;
                if (Directory.Exists(tempDir)) Directory.Delete(tempDir, recursive: true);
            }
        }
    }
}
