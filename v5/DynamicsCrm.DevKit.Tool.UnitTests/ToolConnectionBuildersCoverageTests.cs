using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Tool.Lib;
using DynamicsCrm.DevKit.Tool.UnitTests.TestInfrastructure;
using HarmonyLib;
using Microsoft.Identity.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    /// <summary>
    /// Exercises the connection builders end-to-end offline: ServiceClient
    /// constructors are detoured (FakeServiceClientCtor), MSAL token
    /// acquisition and account discovery are detoured (FakeMsalToken), and the
    /// PAC CLI cache files under %LOCALAPPDATA%\Microsoft\PowerAppsCLI are
    /// temporarily replaced with crafted content and restored afterwards. PAC
    /// token caches are written DPAPI-protected because MsalCacheHelper
    /// decrypts them on read.
    /// </summary>
    [DoNotParallelize]
    [TestClass]
    public class ToolConnectionBuildersCoverageTests
    {
        private static readonly string PacDirectory = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Microsoft", "PowerAppsCLI");

        private static readonly string[] PacFileNames =
        {
            "authprofiles_v2.json", "tokencache_msalv3.dat", "pac.spn.cache.dat"
        };

        private readonly Dictionary<string, byte[]> pacBackups = new();

        [TestInitialize]
        public void SetUp()
        {
            FakeServiceClientCtor.EnsurePatched();
            FakeMsalToken.EnsurePatched();
            Directory.CreateDirectory(PacDirectory);
            foreach (var fileName in PacFileNames)
            {
                var path = Path.Combine(PacDirectory, fileName);
                pacBackups[fileName] = File.Exists(path) ? File.ReadAllBytes(path) : null;
            }
        }

        [TestCleanup]
        public void TearDown()
        {
            foreach (var fileName in PacFileNames)
            {
                var path = Path.Combine(PacDirectory, fileName);
                var backup = pacBackups[fileName];
                if (backup == null)
                {
                    if (File.Exists(path)) File.Delete(path);
                }
                else
                {
                    File.WriteAllBytes(path, backup);
                }
            }
            FakeMsalToken.ThrowOnSilent = false;
            FakeMsalToken.Accounts = new List<IAccount>();
        }

        private void WritePacProfiles(string content)
        {
            File.WriteAllText(Path.Combine(PacDirectory, "authprofiles_v2.json"), content);
        }

        private void WritePacCache(string fileName, string content)
        {
            var protectedBytes = ProtectedData.Protect(
                Encoding.UTF8.GetBytes(content), null, DataProtectionScope.CurrentUser);
            File.WriteAllBytes(Path.Combine(PacDirectory, fileName), protectedBytes);
        }

        private const string TenantId = "11111111-1111-1111-1111-111111111111";

        private const string EnvironmentUrl = "https://org.crm.dynamics.com";

        private const string ProfilesJson = @"{
  ""Profiles"": [
    { ""Name"": ""prod"", ""User"": ""user@contoso.com"", ""Resource"": ""https://org.crm.dynamics.com"", ""TenantId"": ""11111111-1111-1111-1111-111111111111"", ""Authority"": ""https://login.microsoftonline.com/11111111-1111-1111-1111-111111111111"", ""ProfileType"": 0 },
    { ""FriendlyName"": ""only friendly"", ""Resource"": ""https://org2.crm.dynamics.com"" },
    { ""Resource"": ""https://org3.crm.dynamics.com"" },
    { }
  ],
  ""Current"": { ""UNIVERSAL"": { ""Name"": ""prod"", ""User"": ""user@contoso.com"", ""Resource"": ""https://org.crm.dynamics.com"", ""TenantId"": ""11111111-1111-1111-1111-111111111111"", ""Authority"": ""https://login.microsoftonline.com/11111111-1111-1111-1111-111111111111"", ""ProfileType"": 0 } }
}";

        private const string MsalCacheJson = @"{
  ""AccessToken"": {
    ""token-good"": {
      ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"",
      ""environment"": ""login.windows.net"",
      ""client_id"": ""9cee029c-6210-4654-90bb-17e6e9d36617"",
      ""secret"": ""pac-cache-secret"",
      ""credential_type"": ""Bearer"",
      ""realm"": ""11111111-1111-1111-1111-111111111111"",
      ""target"": ""https://org.crm.dynamics.com/.default"",
      ""expires_on"": ""4102444800"",
      ""cached_at"": ""1000000000"",
      ""extended_expires_on"": ""4102444800""
    },
    ""token-wrong-target"": {
      ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"",
      ""environment"": ""login.windows.net"",
      ""client_id"": ""9cee029c-6210-4654-90bb-17e6e9d36617"",
      ""secret"": ""wrong-target-secret"",
      ""credential_type"": ""Bearer"",
      ""realm"": ""11111111-1111-1111-1111-111111111111"",
      ""target"": ""https://other.crm.dynamics.com/.default"",
      ""expires_on"": ""4102444800"",
      ""cached_at"": ""1000000000"",
      ""extended_expires_on"": ""4102444800""
    },
    ""token-wrong-realm"": {
      ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"",
      ""environment"": ""login.windows.net"",
      ""client_id"": ""9cee029c-6210-4654-90bb-17e6e9d36617"",
      ""secret"": ""wrong-realm-secret"",
      ""credential_type"": ""Bearer"",
      ""realm"": ""22222222-2222-2222-2222-222222222222"",
      ""target"": ""https://org.crm.dynamics.com/.default"",
      ""expires_on"": ""4102444800"",
      ""cached_at"": ""1000000000"",
      ""extended_expires_on"": ""4102444800""
    },
    ""token-expired"": {
      ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"",
      ""environment"": ""login.windows.net"",
      ""client_id"": ""9cee029c-6210-4654-90bb-17e6e9d36617"",
      ""secret"": ""expired-secret"",
      ""credential_type"": ""Bearer"",
      ""realm"": ""11111111-1111-1111-1111-111111111111"",
      ""target"": ""https://org.crm.dynamics.com/.default"",
      ""expires_on"": ""1000000000"",
      ""cached_at"": ""900000000"",
      ""extended_expires_on"": ""1000000000""
    },
    ""token-no-secret"": {
      ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"",
      ""environment"": ""login.windows.net"",
      ""client_id"": ""9cee029c-6210-4654-90bb-17e6e9d36617"",
      ""secret"": "" "",
      ""credential_type"": ""Bearer"",
      ""realm"": ""11111111-1111-1111-1111-111111111111"",
      ""target"": ""https://org.crm.dynamics.com/.default"",
      ""expires_on"": ""4102444800"",
      ""cached_at"": ""1000000000"",
      ""extended_expires_on"": ""4102444800""
    },
    ""token-wrong-home"": {
      ""home_account_id"": ""other.22222222-2222-2222-2222-222222222222"",
      ""environment"": ""login.windows.net"",
      ""client_id"": ""9cee029c-6210-4654-90bb-17e6e9d36617"",
      ""secret"": ""wrong-home-secret"",
      ""credential_type"": ""Bearer"",
      ""realm"": ""11111111-1111-1111-1111-111111111111"",
      ""target"": ""https://org.crm.dynamics.com/.default"",
      ""expires_on"": ""4102444800"",
      ""cached_at"": ""1000000000"",
      ""extended_expires_on"": ""4102444800""
    }
  },
  ""Account"": {
    ""login.windows.net-uid-11111111-1111-1111-1111-111111111111"": {
      ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"",
      ""environment"": ""login.windows.net"",
      ""realm"": ""11111111-1111-1111-1111-111111111111"",
      ""local_account_id"": ""uid"",
      ""username"": ""user@contoso.com"",
      ""authority_type"": ""MSSTS""
    }
  }
}";

        private const string SpnProfilesJson = @"{
  ""Profiles"": [
    { ""Name"": ""spn"", ""User"": ""app-id"", ""Resource"": ""https://org.crm.dynamics.com"", ""TenantId"": """ + TenantId + @""", ""Authority"": ""https://login.microsoftonline.com/" + TenantId + @""", ""ProfileType"": 1 }
  ]
}";

        #region GetPacProfile branches through ValidateAsync

        [TestMethod]
        public async Task FromPac_ValidateAsync_FileMissing_ReturnsFalse()
        {
            File.Delete(Path.Combine(PacDirectory, "authprofiles_v2.json"));
            var (isValid, error) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection());
            Assert.IsFalse(isValid);
            StringAssert.Contains(error, "PAC CLI profiles file not found");
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_InvalidJson_ReturnsFalse()
        {
            WritePacProfiles("{ not json");
            var (isValid, error) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection());
            Assert.IsFalse(isValid);
            StringAssert.Contains(error, "Failed to parse PAC CLI profiles file");
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_EmptyProfiles_ReturnsFalse()
        {
            WritePacProfiles("{\"Profiles\":[]}");
            var (isValid, error) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection());
            Assert.IsFalse(isValid);
            StringAssert.Contains(error, "No profiles found");
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_UnknownProfile_ListsAvailableProfiles()
        {
            WritePacProfiles(ProfilesJson);
            var (isValid, error) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection { PacProfile = "missing" });
            Assert.IsFalse(isValid);
            StringAssert.Contains(error, "PAC CLI profile 'missing' not found");
            StringAssert.Contains(error, "1:prod");
            StringAssert.Contains(error, "2:only friendly");
            StringAssert.Contains(error, "3:https://org3.crm.dynamics.com");
            StringAssert.Contains(error, "4:Unnamed");
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_ProfileWithoutResource_ReturnsFalse()
        {
            WritePacProfiles("{\"Profiles\":[{\"Name\":\"a\"}],\"Current\":{\"UNIVERSAL\":{\"Name\":\"a\"}}}");
            var (isValid, error) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection { PacProfile = "a" });
            Assert.IsFalse(isValid);
            StringAssert.Contains(error, "does not have an active environment URL");
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_DefaultPowerAppsResource_ReturnsFalse()
        {
            WritePacProfiles("{\"Profiles\":[{\"Name\":\"a\",\"Resource\":\"https://service.powerapps.com/\"}]}");
            var (isValid, error) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection { PacProfile = "a" });
            Assert.IsFalse(isValid);
            StringAssert.Contains(error, "does not have an active environment URL");
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_IndexLookup_BothBounds()
        {
            WritePacProfiles(ProfilesJson);
            var inRange = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection { PacProfile = "1" });
            Assert.IsTrue(inRange.isValid);

            var outOfRange = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection { PacProfile = "99" });
            Assert.IsFalse(outOfRange.isValid);

            var active = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection());
            Assert.IsTrue(active.isValid);
        }

        #endregion

        #region CreateServiceClientAsync — string-connection builders

        [TestMethod]
        public async Task ClientSecret_CreateServiceClientAsync_ReturnsReadyClient()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            var client = await new ClientSecretConnectionBuilder().CreateServiceClientAsync(new CrmConnection
            {
                Url = EnvironmentUrl,
                ClientId = Guid.NewGuid().ToString(),
                ClientSecret = "secret"
            });
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task ClientSecret_CreateServiceClientAsync_Timeout_ReportsLastError()
        {
            var originalTimeout = ClientSecretConnectionBuilder.ConnectionTimeout;
            ClientSecretConnectionBuilder.ConnectionTimeout = TimeSpan.Zero;
            try
            {
                FakeServiceClientCtor.EnqueueNext(() => false, () => "boom");
                var thrown = await CatchAsync<Exception>(() =>
                    new ClientSecretConnectionBuilder().CreateServiceClientAsync(new CrmConnection
                    {
                        Url = EnvironmentUrl,
                        ClientId = Guid.NewGuid().ToString(),
                        ClientSecret = "secret"
                    }));
                Assert.IsNotNull(thrown);
                StringAssert.Contains(thrown.Message, "boom");
            }
            finally
            {
                ClientSecretConnectionBuilder.ConnectionTimeout = originalTimeout;
            }
        }

        [TestMethod]
        public async Task ClientSecret_CreateServiceClientAsync_Timeout_NullLastError_ReportsConnectionTimeout()
        {
            var originalTimeout = ClientSecretConnectionBuilder.ConnectionTimeout;
            ClientSecretConnectionBuilder.ConnectionTimeout = TimeSpan.Zero;
            try
            {
                FakeServiceClientCtor.EnqueueNext(() => false, () => null);
                var thrown = await CatchAsync<Exception>(() =>
                    new ClientSecretConnectionBuilder().CreateServiceClientAsync(new CrmConnection
                    {
                        Url = EnvironmentUrl,
                        UserName = "legacy-user",
                        Password = "legacy-secret"
                    }));
                Assert.IsNotNull(thrown);
                StringAssert.Contains(thrown.Message, "Connection timeout");
            }
            finally
            {
                ClientSecretConnectionBuilder.ConnectionTimeout = originalTimeout;
            }
        }

        [TestMethod]
        public async Task AD_CreateServiceClientAsync_ReturnsReadyClient()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            var client = await new ADConnectionBuilder().CreateServiceClientAsync(new CrmConnection
            {
                Url = EnvironmentUrl,
                UserName = "CONTOSO\\user",
                Password = "secret"
            });
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task OAuth_CreateServiceClientAsync_ReturnsReadyClient()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            var client = await new OAuthConnectionBuilder().CreateServiceClientAsync(new CrmConnection
            {
                Url = EnvironmentUrl,
                UserName = "user@contoso.com",
                Password = "secret"
            });
            Assert.IsNotNull(client);
        }

        #endregion

        #region CreateServiceClientAsync — MSAL builders

        [TestMethod]
        public async Task Interactive_CreateServiceClientAsync_NoAccount_GoesInteractive()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            var connection = new CrmConnection { Url = EnvironmentUrl };
            var client = await new InteractiveConnectionBuilder().CreateServiceClientAsync(connection);
            Assert.IsNotNull(client);
            Assert.AreEqual("user@contoso.com", connection.UserName, "interactive sign-in updates the username.");
        }

        [TestMethod]
        public async Task Interactive_CreateServiceClientAsync_SilentToken_WithTenantAndCacheName()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            var connection = new CrmConnection
            {
                Url = EnvironmentUrl,
                ClientId = Guid.NewGuid().ToString(),
                TenantId = TenantId,
                Name = "tool-test-interactive"
            };
            var client = await new InteractiveConnectionBuilder().CreateServiceClientAsync(connection);
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task Interactive_CreateServiceClientAsync_SilentFails_FallsBackToInteractive()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            var connection = new CrmConnection { Url = EnvironmentUrl };
            var client = await new InteractiveConnectionBuilder().CreateServiceClientAsync(connection);
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task DeviceCode_CreateServiceClientAsync_NoAccount_WritesConsoleInstructions()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            var connection = new CrmConnection { Url = EnvironmentUrl };
            var client = await new DeviceCodeConnectionBuilder().CreateServiceClientAsync(connection);
            Assert.IsNotNull(client);
            Assert.AreEqual("user@contoso.com", connection.UserName);
        }

        [TestMethod]
        public async Task DeviceCode_CreateServiceClientAsync_UsesCallback_And_SilentAccount()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            var builder = new DeviceCodeConnectionBuilder { DeviceCodeCallback = _ => { } };
            var connection = new CrmConnection { Url = EnvironmentUrl, UserName = "user@contoso.com" };
            var client = await builder.CreateServiceClientAsync(connection);
            Assert.IsNotNull(client);
        }

        #endregion

        #region FromPac end-to-end through the captured token provider

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_UserProfile_SilentToken()
        {
            WritePacProfiles(ProfilesJson);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeServiceClientCtor.EnqueueNext(() => true);

            var client = await new FromPacConnectionBuilder().CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_SilentFails_FindsTokenByScanningCache()
        {
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", MsalCacheJson);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var client = await new FromPacConnectionBuilder().CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_MissingTokenCache_Throws()
        {
            WritePacProfiles(ProfilesJson);
            File.Delete(Path.Combine(PacDirectory, "tokencache_msalv3.dat"));
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            var entry = FakeServiceClientCtor.LastEntry;
            Assert.IsNotNull(entry?.TokenProvider);
            var thrown = await CatchAsync<FileNotFoundException>(() => entry.TokenProvider(EnvironmentUrl));
            Assert.IsNotNull(thrown);
            StringAssert.Contains(thrown.Message, "token cache not found");
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_TokenCacheWithoutAccessToken_Throws()
        {
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", "{}");
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            var entry = FakeServiceClientCtor.LastEntry;
            var thrown = await CatchAsync<InvalidOperationException>(() => entry.TokenProvider(EnvironmentUrl));
            Assert.IsNotNull(thrown);
            StringAssert.Contains(thrown.Message, "does not contain access tokens");
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_NoMatchingToken_Throws()
        {
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", "{\"AccessToken\":{\"k\":{\"client_id\":\"x\",\"realm\":\"y\",\"target\":\"z\",\"home_account_id\":\"h\",\"expires_on\":\"1\",\"secret\":\"s\"}}}");
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            var entry = FakeServiceClientCtor.LastEntry;
            var thrown = await CatchAsync<InvalidOperationException>(() => entry.TokenProvider(EnvironmentUrl));
            Assert.IsNotNull(thrown);
            StringAssert.Contains(thrown.Message, "No valid PAC CLI access token");
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_ApplicationProfile_MissingSpnCache_Throws()
        {
            WritePacProfiles(SpnProfilesJson);
            File.Delete(Path.Combine(PacDirectory, "pac.spn.cache.dat"));
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "spn" });
            var entry = FakeServiceClientCtor.LastEntry;
            var thrown = await CatchAsync<FileNotFoundException>(() => entry.TokenProvider(EnvironmentUrl));
            Assert.IsNotNull(thrown);
            StringAssert.Contains(thrown.Message, "token cache not found");
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_ApplicationProfile_SpnCacheWithoutProfile_Throws()
        {
            WritePacProfiles(SpnProfilesJson);
            WritePacCache("pac.spn.cache.dat", "{}");
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "spn" });
            var entry = FakeServiceClientCtor.LastEntry;
            var thrown = await CatchAsync<InvalidOperationException>(() => entry.TokenProvider(EnvironmentUrl));
            Assert.IsNotNull(thrown);
            StringAssert.Contains(thrown.Message, "application secret cache does not contain this profile");
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_ApplicationProfile_WithSecret_AcquiresToken()
        {
            WritePacProfiles(SpnProfilesJson);
            WritePacCache("pac.spn.cache.dat", "{\"app-id\":\"spn-secret\"}");
            FakeServiceClientCtor.EnqueueNext(() => true);

            var client = await new FromPacConnectionBuilder().CreateServiceClientAsync(new CrmConnection { PacProfile = "spn" });
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public void FromPac_BuildConnectionString_BothShapes()
        {
            var builder = new FromPacConnectionBuilder();
            Assert.AreEqual("AuthType=FromPac;Profile=(active);", builder.BuildConnectionString(new CrmConnection()));
            Assert.AreEqual("AuthType=FromPac;Profile=prod;", builder.BuildConnectionString(new CrmConnection { PacProfile = "prod" }));
        }

        #endregion

        #region PacProfileHelper

        [TestMethod]
        public void PacProfileHelper_Covers_Missing_Null_Empty_And_Blank_Profiles()
        {
            var path = PacProfileHelper.ProfilesPath;
            var backup = File.Exists(path) ? File.ReadAllText(path) : null;
            try
            {
                if (File.Exists(path)) File.Delete(path);
                Assert.AreEqual(0, PacProfileHelper.GetPacProfiles().Count);
                Assert.IsFalse(PacProfileHelper.HasPacProfiles());

                File.WriteAllText(path, "null");
                Assert.AreEqual(0, PacProfileHelper.GetPacProfiles().Count);

                File.WriteAllText(path, "{}");
                Assert.AreEqual(0, PacProfileHelper.GetPacProfiles().Count);

                File.WriteAllText(path, "not json");
                Assert.AreEqual(0, PacProfileHelper.GetPacProfiles().Count);

                File.WriteAllText(path, @"{""Profiles"":[{},{""FriendlyName"":""only friendly""},{""Name"":""named"",""Resource"":""https://org""}]}");
                var profiles = PacProfileHelper.GetPacProfiles();
                Assert.AreEqual(2, profiles.Count);
                Assert.AreEqual("only friendly", profiles[0].ConnectionName);
                Assert.AreEqual("named", profiles[1].ConnectionName);
            }
            finally
            {
                if (backup == null)
                {
                    if (File.Exists(path)) File.Delete(path);
                }
                else
                {
                    File.WriteAllText(path, backup);
                }
            }
        }

        #endregion

        [TestMethod]
        public async Task DeviceCode_CreateServiceClientAsync_WithClientIdTenantAndName()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            var builder = new DeviceCodeConnectionBuilder();
            var connection = new CrmConnection
            {
                Url = EnvironmentUrl,
                ClientId = Guid.NewGuid().ToString(),
                TenantId = TenantId,
                Name = "tool-test-devicecode"
            };
            var client = await builder.CreateServiceClientAsync(connection);
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task DeviceCode_ValidateAsync_AcceptsNullClientId()
        {
            var (isValid, error) = await new DeviceCodeConnectionBuilder().ValidateAsync(new CrmConnection
            {
                Url = EnvironmentUrl
            });
            Assert.IsTrue(isValid);
            Assert.IsNull(error);
        }

        [TestMethod]
        public async Task DeviceCode_SilentFails_InvokesTheDeviceCodeCallback()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            try
            {
                var builder = new DeviceCodeConnectionBuilder { DeviceCodeCallback = _ => { } };
                var connection = new CrmConnection { Url = EnvironmentUrl, UserName = "user@contoso.com" };
                var client = await builder.CreateServiceClientAsync(connection);
                Assert.IsNotNull(client);
                Assert.AreEqual("invoked", FakeMsalToken.LastCallbackMessage,
                    "the silent failure must fall through to the device-code flow and fire its display callback.");
            }
            finally
            {
                FakeMsalToken.ThrowOnSilent = false;
            }
        }

        [TestMethod]
        public async Task ClientSecret_CreateServiceClientAsync_PollsAtLeastOnce_BeforeReady()
        {
            var originalTimeout = ClientSecretConnectionBuilder.ConnectionTimeout;
            ClientSecretConnectionBuilder.ConnectionTimeout = TimeSpan.FromSeconds(30);
            try
            {
                var polls = 0;
                FakeServiceClientCtor.EnqueueNext(() => polls++ >= 1);
                var client = await new ClientSecretConnectionBuilder().CreateServiceClientAsync(new CrmConnection
                {
                    Url = EnvironmentUrl,
                    ClientId = Guid.NewGuid().ToString(),
                    ClientSecret = "secret"
                });
                Assert.IsNotNull(client);
                Assert.IsTrue(polls >= 2, "the wait loop must observe not-ready once, then ready.");
            }
            finally
            {
                ClientSecretConnectionBuilder.ConnectionTimeout = originalTimeout;
            }
        }

        [TestMethod]
        public async Task OAuth_CreateServiceClientAsync_Timeout_NullLastError_ReportsConnectionTimeout()
        {
            var originalTimeout = OAuthConnectionBuilder.ConnectionTimeout;
            OAuthConnectionBuilder.ConnectionTimeout = TimeSpan.Zero;
            try
            {
                FakeServiceClientCtor.EnqueueNext(() => false, () => null);
                var thrown = await CatchAsync<Exception>(() =>
                    new OAuthConnectionBuilder().CreateServiceClientAsync(new CrmConnection
                    {
                        Url = EnvironmentUrl,
                        UserName = "user@contoso.com",
                        Password = "secret"
                    }));
                Assert.IsNotNull(thrown);
                StringAssert.Contains(thrown.Message, "Connection timeout");
            }
            finally
            {
                OAuthConnectionBuilder.ConnectionTimeout = originalTimeout;
            }
        }

        [TestMethod]
        public async Task OAuth_CreateServiceClientAsync_PollsAtLeastOnce_BeforeReady()
        {
            var originalTimeout = OAuthConnectionBuilder.ConnectionTimeout;
            OAuthConnectionBuilder.ConnectionTimeout = TimeSpan.FromSeconds(30);
            try
            {
                var polls = 0;
                FakeServiceClientCtor.EnqueueNext(() => polls++ >= 1);
                var client = await new OAuthConnectionBuilder().CreateServiceClientAsync(new CrmConnection
                {
                    Url = EnvironmentUrl,
                    UserName = "user@contoso.com",
                    Password = "secret"
                });
                Assert.IsNotNull(client);
                Assert.IsTrue(polls >= 2, "the wait loop must observe not-ready once, then ready.");
            }
            finally
            {
                OAuthConnectionBuilder.ConnectionTimeout = originalTimeout;
            }
        }

        [TestMethod]
        public async Task AD_CreateServiceClientAsync_PollsAtLeastOnce_BeforeReady()
        {
            var originalTimeout = ADConnectionBuilder.ConnectionTimeout;
            ADConnectionBuilder.ConnectionTimeout = TimeSpan.FromSeconds(30);
            try
            {
                var polls = 0;
                FakeServiceClientCtor.EnqueueNext(() => polls++ >= 1);
                var client = await new ADConnectionBuilder().CreateServiceClientAsync(new CrmConnection
                {
                    Url = EnvironmentUrl,
                    UserName = "CONTOSO\\user",
                    Password = "secret"
                });
                Assert.IsNotNull(client);
                Assert.IsTrue(polls >= 2, "the wait loop must observe not-ready once, then ready.");
            }
            finally
            {
                ADConnectionBuilder.ConnectionTimeout = originalTimeout;
            }
        }

        [TestMethod]
        public async Task AD_CreateServiceClientAsync_Timeout_NullLastError_ReportsConnectionTimeout()
        {
            var originalTimeout = ADConnectionBuilder.ConnectionTimeout;
            ADConnectionBuilder.ConnectionTimeout = TimeSpan.Zero;
            try
            {
                FakeServiceClientCtor.EnqueueNext(() => false, () => null);
                var thrown = await CatchAsync<Exception>(() =>
                    new ADConnectionBuilder().CreateServiceClientAsync(new CrmConnection
                    {
                        Url = EnvironmentUrl,
                        UserName = "CONTOSO\\user",
                        Password = "secret"
                    }));
                Assert.IsNotNull(thrown);
                StringAssert.Contains(thrown.Message, "Connection timeout");
            }
            finally
            {
                ADConnectionBuilder.ConnectionTimeout = originalTimeout;
            }
        }

        #region FromPac token provider — explicit invocations of the captured provider

        [TestMethod]
        public async Task FromPac_TokenProvider_SilentToken_ReturnsBeforeCacheScan()
        {
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", MsalCacheJson);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            var token = await FakeServiceClientCtor.LastEntry.TokenProvider(EnvironmentUrl);
            Assert.AreEqual(FakeMsalToken.AccessTokenValue, token,
                "a successful silent acquisition short-circuits the PAC cache scan.");
        }

        [TestMethod]
        public async Task FromPac_TokenProvider_SilentFails_ScanMatchesAccountAndToken()
        {
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", MsalCacheJson);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            var token = await FakeServiceClientCtor.LastEntry.TokenProvider(EnvironmentUrl);
            Assert.AreEqual("pac-cache-secret", token);
        }

        [TestMethod]
        public async Task FromPac_TokenProvider_EdgeTokens_And_EmptyAccountSection_AreSkipped()
        {
            var edgeCache = @"{
  ""AccessToken"": {
    ""no-target"": { ""realm"": """ + TenantId + @""", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": ""s"", ""expires_on"": ""4102444800"" },
    ""wrong-host"": { ""realm"": """ + TenantId + @""", ""target"": ""https://other.crm.dynamics.com/.default"", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": ""s"", ""expires_on"": ""4102444800"" },
    ""bad-expires"": { ""realm"": """ + TenantId + @""", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": ""s"", ""expires_on"": ""not-a-number"" },
    ""expired"": { ""realm"": """ + TenantId + @""", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": ""s"", ""expires_on"": ""1000000000"" },
    ""blank-secret"": { ""realm"": """ + TenantId + @""", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": "" "", ""expires_on"": ""4102444800"" },
    ""good"": { ""realm"": """ + TenantId + @""", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": ""edge-secret"", ""expires_on"": ""4102444800"" }
  },
  ""Account"": {}
}";
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", edgeCache);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            var token = await FakeServiceClientCtor.LastEntry.TokenProvider(EnvironmentUrl);
            Assert.AreEqual("edge-secret", token);
        }

        [TestMethod]
        public async Task FromPac_TokenProvider_MismatchedAccounts_AreSkipped()
        {
            var mismatchedCache = @"{
  ""AccessToken"": { ""good"": { ""realm"": """ + TenantId + @""", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": ""mismatch-secret"", ""expires_on"": ""4102444800"" } },
  ""Account"": {
    ""a-wrong-username"": { ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""environment"": ""login.windows.net"", ""realm"": """ + TenantId + @""", ""username"": ""different@contoso.com"", ""authority_type"": ""MSSTS"" },
    ""a-wrong-realm"": { ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""environment"": ""login.windows.net"", ""realm"": ""22222222-2222-2222-2222-222222222222"", ""username"": ""user@contoso.com"", ""authority_type"": ""MSSTS"" }
  }
}";
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", mismatchedCache);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            var token = await FakeServiceClientCtor.LastEntry.TokenProvider(EnvironmentUrl);
            Assert.AreEqual("mismatch-secret", token);
        }

        [TestMethod]
        public async Task FromPac_TokenProvider_ProfileUserWithoutAccount_ScansCacheDirectly()
        {
            WritePacProfiles("{\"Profiles\":[{\"Name\":\"other\",\"User\":\"someone@else.com\",\"Resource\":\"https://org.crm.dynamics.com\",\"TenantId\":\"" + TenantId + "\",\"Authority\":\"https://login.microsoftonline.com/" + TenantId + "\"}]}");
            WritePacCache("tokencache_msalv3.dat", MsalCacheJson);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "other" });
            var token = await FakeServiceClientCtor.LastEntry.TokenProvider(EnvironmentUrl);
            Assert.AreEqual("pac-cache-secret", token,
                "a profile user with no MSAL account falls straight through to the cache scan.");
        }

        [TestMethod]
        public async Task FromPac_TokenProvider_ApplicationProfile_GoodSecret_Extracted()
        {
            WritePacProfiles(SpnProfilesJson);
            WritePacCache("pac.spn.cache.dat", "{\"app-id\":\"spn-secret\"}");
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "spn" });
            var token = await FakeServiceClientCtor.LastEntry.TokenProvider(EnvironmentUrl);
            Assert.AreEqual(FakeMsalToken.AccessTokenValue, token,
                "a good SPN secret flows into the confidential-client acquisition.");
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_NullJson_And_MissingProfiles_AreNoProfiles()
        {
            WritePacProfiles("null");
            var (nullJsonValid, nullJsonError) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection());
            Assert.IsFalse(nullJsonValid);
            StringAssert.Contains(nullJsonError, "No profiles found");

            WritePacProfiles("{}");
            var (noProfilesValid, noProfilesError) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection());
            Assert.IsFalse(noProfilesValid);
            StringAssert.Contains(noProfilesError, "No profiles found");
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_ZeroIndex_IsOutOfBounds()
        {
            WritePacProfiles(ProfilesJson);
            var (isValid, error) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection { PacProfile = "0" });
            Assert.IsFalse(isValid);
            StringAssert.Contains(error, "PAC CLI profile '0' not found");
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_BlankProfile_WithoutCurrent_ListsActiveFallback()
        {
            WritePacProfiles("{\"Profiles\":[{\"Name\":\"a\",\"Resource\":\"https://org.crm.dynamics.com\"}]}");
            var (isValid, error) = await new FromPacConnectionBuilder().ValidateAsync(new CrmConnection());
            Assert.IsFalse(isValid);
            StringAssert.Contains(error, "No active PAC CLI profile found");
        }

        [TestMethod]
        public async Task Interactive_SilentServiceError_FallsBackToInteractive()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowServiceOnSilent = true;
            try
            {
                var connection = new CrmConnection { Url = EnvironmentUrl, UserName = "user@contoso.com" };
                var client = await new InteractiveConnectionBuilder().CreateServiceClientAsync(connection);
                Assert.IsNotNull(client);
                Assert.AreEqual("user@contoso.com", connection.UserName,
                    "the service-error fallback signed in interactively.");
            }
            finally
            {
                FakeMsalToken.ThrowServiceOnSilent = false;
            }
        }

        [TestMethod]
        public async Task DeviceCode_SilentServiceError_FallsBackToDeviceCode()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowServiceOnSilent = true;
            try
            {
                var connection = new CrmConnection { Url = EnvironmentUrl, UserName = "user@contoso.com" };
                var client = await new DeviceCodeConnectionBuilder().CreateServiceClientAsync(connection);
                Assert.IsNotNull(client);
                Assert.AreEqual("user@contoso.com", connection.UserName);
            }
            finally
            {
                FakeMsalToken.ThrowServiceOnSilent = false;
            }
        }

        [TestMethod]
        public async Task DeviceCode_CanceledAcquisition_RaisesTimeout()
        {
            // no ServiceClient is constructed on this path, so no queue entry is enqueued
            FakeMsalToken.CancelDeviceCode = true;
            try
            {
                var thrown = await CatchAsync<TimeoutException>(() =>
                    new DeviceCodeConnectionBuilder().CreateServiceClientAsync(new CrmConnection { Url = EnvironmentUrl }));
                Assert.IsNotNull(thrown);
                StringAssert.Contains(thrown.Message, "timed out");
            }
            finally
            {
                FakeMsalToken.CancelDeviceCode = false;
            }
        }

        [TestMethod]
        public async Task Interactive_And_DeviceCode_TokenProviders_RefreshTokens()
        {
            FakeServiceClientCtor.EnqueueNext(() => true);
            var interactive = await new InteractiveConnectionBuilder().CreateServiceClientAsync(new CrmConnection { Url = EnvironmentUrl });
            Assert.IsNotNull(interactive);
            var interactiveToken = await FakeServiceClientCtor.LastEntry.TokenProvider(EnvironmentUrl);
            Assert.AreEqual(FakeMsalToken.AccessTokenValue, interactiveToken,
                "the interactive token provider must serve tokens on refresh.");

            FakeServiceClientCtor.EnqueueNext(() => true);
            var deviceCode = await new DeviceCodeConnectionBuilder().CreateServiceClientAsync(new CrmConnection { Url = EnvironmentUrl });
            Assert.IsNotNull(deviceCode);
            var deviceToken = await FakeServiceClientCtor.LastEntry.TokenProvider(EnvironmentUrl);
            Assert.AreEqual(FakeMsalToken.AccessTokenValue, deviceToken,
                "the device-code token provider must serve tokens on refresh.");
        }

        #endregion

        [TestMethod]
        public async Task OAuth_CreateServiceClientAsync_Timeout_Throws()
        {
            var originalTimeout = OAuthConnectionBuilder.ConnectionTimeout;
            OAuthConnectionBuilder.ConnectionTimeout = TimeSpan.Zero;
            try
            {
                FakeServiceClientCtor.EnqueueNext(() => false, () => "oauth-down");
                var thrown = await CatchAsync<Exception>(() =>
                    new OAuthConnectionBuilder().CreateServiceClientAsync(new CrmConnection
                    {
                        Url = EnvironmentUrl,
                        UserName = "user@contoso.com",
                        Password = "secret"
                    }));
                Assert.IsNotNull(thrown);
                StringAssert.Contains(thrown.Message, "oauth-down");
            }
            finally
            {
                OAuthConnectionBuilder.ConnectionTimeout = originalTimeout;
            }
        }

        [TestMethod]
        public async Task AD_CreateServiceClientAsync_Timeout_Throws()
        {
            var originalTimeout = ADConnectionBuilder.ConnectionTimeout;
            ADConnectionBuilder.ConnectionTimeout = TimeSpan.Zero;
            try
            {
                FakeServiceClientCtor.EnqueueNext(() => false, () => "ad-down");
                var thrown = await CatchAsync<Exception>(() =>
                    new ADConnectionBuilder().CreateServiceClientAsync(new CrmConnection
                    {
                        Url = EnvironmentUrl,
                        UserName = "CONTOSO\\user",
                        Password = "secret"
                    }));
                Assert.IsNotNull(thrown);
                StringAssert.Contains(thrown.Message, "ad-down");
            }
            finally
            {
                ADConnectionBuilder.ConnectionTimeout = originalTimeout;
            }
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_NotReady_Throws()
        {
            WritePacProfiles(ProfilesJson);
            FakeServiceClientCtor.EnqueueNext(() => false, () => "pac-down");
            var thrown = await CatchAsync<InvalidOperationException>(() =>
                new FromPacConnectionBuilder().CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" }));
            Assert.IsNotNull(thrown);
            StringAssert.Contains(thrown.Message, "pac-down");
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_ProfileUserHasNoAccount_ScansCacheDirectly()
        {
            WritePacProfiles("{\"Profiles\":[{\"Name\":\"other\",\"User\":\"someone@else.com\",\"Resource\":\"https://org.crm.dynamics.com\",\"TenantId\":\"" + TenantId + "\",\"Authority\":\"https://login.microsoftonline.com/" + TenantId + "\"}]}");
            WritePacCache("tokencache_msalv3.dat", MsalCacheJson);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeServiceClientCtor.EnqueueNext(() => true);

            var client = await new FromPacConnectionBuilder().CreateServiceClientAsync(new CrmConnection { PacProfile = "other" });
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_TokenCacheWithoutAccountSection_StillScans()
        {
            var cacheWithoutAccount = MsalCacheJson[..MsalCacheJson.IndexOf("\"Account\"")].TrimEnd().TrimEnd(',') + "\r\n}";
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", cacheWithoutAccount);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var client = await new FromPacConnectionBuilder().CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_TokenCacheWithMismatchedAccounts_ScansPastThem()
        {
            var cacheWithMismatches = @"{
  ""AccessToken"": { ""token-good"": { ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""environment"": ""login.windows.net"", ""client_id"": ""9cee029c-6210-4654-90bb-17e6e9d36617"", ""secret"": ""pac-cache-secret"", ""credential_type"": ""Bearer"", ""realm"": ""11111111-1111-1111-1111-111111111111"", ""target"": ""https://org.crm.dynamics.com/.default"", ""expires_on"": ""4102444800"", ""cached_at"": ""1000000000"", ""extended_expires_on"": ""4102444800"" } },
  ""Account"": {
    ""a-wrong-username"": { ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""environment"": ""login.windows.net"", ""realm"": ""11111111-1111-1111-1111-111111111111"", ""username"": ""different@contoso.com"", ""authority_type"": ""MSSTS"" },
    ""a-wrong-realm"": { ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""environment"": ""login.windows.net"", ""realm"": ""22222222-2222-2222-2222-222222222222"", ""username"": ""user@contoso.com"", ""authority_type"": ""MSSTS"" }
  }
}";
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", cacheWithMismatches);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var client = await new FromPacConnectionBuilder().CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task FromPac_CreateServiceClientAsync_TokenCache_EdgeEntries_Scanned()
        {
            var edgeCache = @"{
  ""AccessToken"": {
    ""no-target"": { ""realm"": """ + TenantId + @""", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": ""s"", ""expires_on"": ""4102444800"" },
    ""bad-expires"": { ""realm"": """ + TenantId + @""", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": ""s"", ""expires_on"": ""not-a-number"" },
    ""good"": { ""realm"": """ + TenantId + @""", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""uid.11111111-1111-1111-1111-111111111111"", ""secret"": ""edge-secret"", ""expires_on"": ""4102444800"" }
  }
}";
            WritePacProfiles(ProfilesJson);
            WritePacCache("tokencache_msalv3.dat", edgeCache);
            FakeMsalToken.Accounts = new List<IAccount> { new FakeMsalToken.FakeAccount() };
            FakeMsalToken.ThrowOnSilent = true;
            FakeServiceClientCtor.EnqueueNext(() => true);

            var client = await new FromPacConnectionBuilder().CreateServiceClientAsync(new CrmConnection { PacProfile = "prod" });
            Assert.IsNotNull(client);
        }

        [TestMethod]
        public async Task FromPac_ApplicationProfile_SpnCache_EdgeValues()
        {
            WritePacProfiles(SpnProfilesJson);
            WritePacCache("pac.spn.cache.dat", "{\"app-id\": 123}");
            FakeServiceClientCtor.EnqueueNext(() => true);

            var builder = new FromPacConnectionBuilder();
            await builder.CreateServiceClientAsync(new CrmConnection { PacProfile = "spn" });
            var entry = FakeServiceClientCtor.LastEntry;
            var notString = await CatchAsync<InvalidOperationException>(() => entry.TokenProvider(EnvironmentUrl));
            Assert.IsNotNull(notString, "non-string secret must be rejected.");

            WritePacCache("pac.spn.cache.dat", "{\"app-id\": \"   \"}");
            var blank = await CatchAsync<InvalidOperationException>(() => entry.TokenProvider(EnvironmentUrl));
            Assert.IsNotNull(blank, "blank secret must be rejected.");
        }


        [DoNotParallelize]
        [TestClass]
        public class ToolConnectionEnvironmentCoverage
        {
            [TestMethod]
            public void EnsureReady_Handles_Null_Ready_And_NotReady()
            {
                var ensureReady = typeof(ToolConnectionEnvironment)
                    .GetMethod("EnsureReady", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static);
                Assert.IsNotNull(ensureReady);

                var nullThrown = Catch(() => ensureReady.Invoke(null, new object[] { null }));
                Assert.IsNotNull(nullThrown, "null client must be rejected.");

                FakeServiceClientCtor.EnqueueNext(() => true);
                var ready = (Microsoft.PowerPlatform.Dataverse.Client.ServiceClient)ensureReady.Invoke(
                    null, new object[] { new Microsoft.PowerPlatform.Dataverse.Client.ServiceClient("AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=a;ClientSecret=b;") });
                Assert.IsNotNull(ready);

                FakeServiceClientCtor.EnqueueNext(() => false, () => "not-ready");
                var notReadyThrown = Catch(() => ensureReady.Invoke(
                    null, new object[] { new Microsoft.PowerPlatform.Dataverse.Client.ServiceClient("AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=a;ClientSecret=b;") }));
                Assert.IsNotNull(notReadyThrown, "not-ready client must be rejected.");
            }

            [TestMethod]
            public async Task ConnectAsync_Covers_Env_And_Builder_Paths()
            {
                var originalDirectory = Environment.CurrentDirectory;
                var tempDir = Path.Combine(Path.GetTempPath(), "DevKitToolEnv", Guid.NewGuid().ToString("N"));
                Directory.CreateDirectory(tempDir);
                try
                {
                    Environment.CurrentDirectory = tempDir;

                    // explicit connection string, ready
                    File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_URL=https://ignored");
                    FakeServiceClientCtor.EnqueueNext(() => true);
                    var explicitClient = await ToolConnectionEnvironment.ConnectAsync("AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=a;ClientSecret=b;");
                    Assert.IsNotNull(explicitClient);

                    // .env DEVKIT_CONNECTION, ready
                    File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_CONNECTION=AuthType=ClientSecret;Url=https://org.crm.dynamics.com;ClientId=a;ClientSecret=b;");
                    FakeServiceClientCtor.EnqueueNext(() => true);
                    var connectionClient = await ToolConnectionEnvironment.ConnectAsync(null);
                    Assert.IsNotNull(connectionClient);

                    // .env ClientSecret through the builder
                    File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_AUTH_TYPE=ClientSecret\r\nDEVKIT_URL=https://org.crm.dynamics.com\r\nDEVKIT_CLIENT_ID=a\r\nDEVKIT_CLIENT_SECRET=b");
                    FakeServiceClientCtor.EnqueueNext(() => true);
                    var builderClient = await ToolConnectionEnvironment.ConnectAsync(null);
                    Assert.IsNotNull(builderClient);

                    // .env AD with domain + username without backslash
                    File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_AUTH_TYPE=AD\r\nDEVKIT_URL=https://org.crm.dynamics.com\r\nDEVKIT_USERNAME=user\r\nDEVKIT_PASSWORD=p\r\nDEVKIT_DOMAIN=CONTOSO");
                    FakeServiceClientCtor.EnqueueNext(() => true);
                    var adClient = await ToolConnectionEnvironment.ConnectAsync(null);
                    Assert.IsNotNull(adClient);

                    // validation failure propagates
                    File.WriteAllText(Path.Combine(tempDir, ".env"), "DEVKIT_AUTH_TYPE=ClientSecret");
                    var invalid = await CatchAsync<InvalidOperationException>(() => ToolConnectionEnvironment.ConnectAsync(null));
                    Assert.IsNotNull(invalid);
                }
                finally
                {
                    Environment.CurrentDirectory = originalDirectory;
                    if (Directory.Exists(tempDir)) Directory.Delete(tempDir, true);
                }
            }

            private static Exception Catch(Action action)
            {
                try
                {
                    action();
                    return null;
                }
                catch (Exception exception)
                {
                    return exception;
                }
            }

            private static async Task<TException> CatchAsync<TException>(Func<Task> action)
                where TException : Exception
            {
                try
                {
                    await action();
                    return null;
                }
                catch (TException exception)
                {
                    return exception;
                }
            }
        }

        private static async Task<TException> CatchAsync<TException>(Func<Task> action)
            where TException : Exception
        {
            try
            {
                await action();
                return null;
            }
            catch (TException exception)
            {
                return exception;
            }
        }
    }
}
