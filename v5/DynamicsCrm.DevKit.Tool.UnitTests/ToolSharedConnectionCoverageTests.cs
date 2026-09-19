using System;
using System.IO;
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    [TestClass]
    public class ToolSharedConnectionCoverageTests
    {
        private static readonly BindingFlags StaticPrivate = BindingFlags.NonPublic | BindingFlags.Static;

        private static CrmConnection MakeConnection(string type = "ClientSecret") => new CrmConnection
        {
            Type = type,
            Url = "https://org.crm.dynamics.com",
            ClientId = "cid",
            ClientSecret = "plain-secret",
            UserName = "DOMAIN\\user",
            Password = "plain-pwd",
            TenantId = "tid",
            PacProfile = "myprof"
        };

        [TestMethod]
        public void ClientSecret_TypeAndBuildConnectionString()
        {
            var b = new ClientSecretConnectionBuilder();
            Assert.AreEqual("ClientSecret", b.Type);

            var s1 = b.BuildConnectionString(MakeConnection());
            StringAssert.Contains(s1, "AuthType=ClientSecret");
            StringAssert.Contains(s1, "Url=https://org.crm.dynamics.com");
            StringAssert.Contains(s1, "ClientId=cid");
            StringAssert.Contains(s1, "ClientSecret=plain-secret");
            StringAssert.Contains(s1, "TenantId=tid");

            var s2 = b.BuildConnectionString(MakeConnection(), true);
            StringAssert.Contains(s2, "ClientSecret=***");

            var legacy = new CrmConnection
            {
                Type = "ClientSecret",
                Url = "https://test.crm.dynamics.com",
                UserName = "legacy-cid",
                Password = "legacy-secret",
                TenantId = "tenant-guid-123"
            };
            var s3 = b.BuildConnectionString(legacy);
            StringAssert.Contains(s3, "ClientId=legacy-cid");
            StringAssert.Contains(s3, "ClientSecret=legacy-secret");
            StringAssert.Contains(s3, "TenantId=tenant-guid-123");
        }

        [TestMethod]
        public async Task ClientSecret_ValidateAsync()
        {
            var b = new ClientSecretConnectionBuilder();

            var (v1, e1) = await b.ValidateAsync(new CrmConnection());
            Assert.IsFalse(v1);
            Assert.AreEqual("URL is required for ClientSecret authentication", e1);

            var (v2, e2) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com" });
            Assert.IsFalse(v2);
            Assert.AreEqual("ClientId is required for ClientSecret authentication", e2);

            var (v3, e3) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = "cid" });
            Assert.IsFalse(v3);
            Assert.AreEqual("ClientSecret is required for ClientSecret authentication", e3);

            var (v4, e4) = await b.ValidateAsync(new CrmConnection { Url = "invalid", ClientId = "cid", ClientSecret = "sec" });
            Assert.IsFalse(v4);
            StringAssert.Contains(e4, "Invalid URL format");

            var (v5, e5) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = "cid", ClientSecret = "sec" });
            Assert.IsTrue(v5);
            Assert.IsNull(e5);

            var (v6, e6) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", UserName = "legacy-cid", Password = "legacy-secret" });
            Assert.IsTrue(v6);
            Assert.IsNull(e6);
        }

        [TestMethod]
        public void AD_TypeAndBuildConnectionString()
        {
            var b = new ADConnectionBuilder();
            Assert.AreEqual("AD", b.Type);

            var s1 = b.BuildConnectionString(MakeConnection("AD"));
            StringAssert.Contains(s1, "AuthType=AD");
            StringAssert.Contains(s1, "Domain=DOMAIN;Username=user");
            StringAssert.Contains(s1, "Password=plain-pwd");

            var s2 = b.BuildConnectionString(MakeConnection("AD"), true);
            StringAssert.Contains(s2, "Password=***");

            var s3 = b.BuildConnectionString(new CrmConnection { Url = "https://crm.local", UserName = "plainuser", Password = "pwd" });
            StringAssert.Contains(s3, "Username=plainuser;Password=pwd;");

            var s4 = b.BuildConnectionString(new CrmConnection { Url = "https://crm.local", UserName = "a\\b\\c", Password = "pwd" });
            StringAssert.Contains(s4, "Username=a\\b\\c;Password=pwd;");
        }

        [TestMethod]
        public async Task AD_CreateServiceClientAsync_ThrowsConnectionException()
        {
            var b = new ADConnectionBuilder();
            await Assert.ThrowsAsync<Exception>(async () =>
            {
                await b.CreateServiceClientAsync(new CrmConnection
                {
                    Url = "https://127.0.0.1:54321",
                    UserName = "DOMAIN\\user",
                    Password = "pwd"
                });
            });
        }

        [TestMethod]
        public async Task AD_ValidateAsync()
        {
            var b = new ADConnectionBuilder();

            var (v1, e1) = await b.ValidateAsync(new CrmConnection());
            Assert.IsFalse(v1);
            Assert.AreEqual("URL is required for AD authentication", e1);

            var (v2, e2) = await b.ValidateAsync(new CrmConnection { Url = "https://crm.local" });
            Assert.IsFalse(v2);
            Assert.AreEqual("Username is required for AD authentication (format: domain\\username)", e2);

            var (v3, e3) = await b.ValidateAsync(new CrmConnection { Url = "https://crm.local", UserName = "DOMAIN\\user" });
            Assert.IsFalse(v3);
            Assert.AreEqual("Password is required for AD authentication", e3);

            var (v4, e4) = await b.ValidateAsync(new CrmConnection { Url = "not-a-url", UserName = "DOMAIN\\user", Password = "pwd" });
            Assert.IsFalse(v4);
            StringAssert.Contains(e4, "Invalid URL format");

            var (v5, e5) = await b.ValidateAsync(new CrmConnection { Url = "https://crm.local", UserName = "DOMAIN\\user", Password = "pwd" });
            Assert.IsTrue(v5);
            Assert.IsNull(e5);
        }

        [TestMethod]
        public async Task Interactive_BuildAndValidate()
        {
            var b = new InteractiveConnectionBuilder();
            Assert.AreEqual(ConnectionType.Interactive, b.Type);

            var s = b.BuildConnectionString(new CrmConnection { Url = "https://test.crm.dynamics.com" });
            StringAssert.Contains(s, "AuthType=Interactive");

            var customCid = Guid.NewGuid().ToString();
            var sCustom = b.BuildConnectionString(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = customCid });
            StringAssert.Contains(sCustom, customCid);

            var (v1, e1) = await b.ValidateAsync(new CrmConnection());
            Assert.IsFalse(v1);

            var (v2, e2) = await b.ValidateAsync(new CrmConnection { Url = "http://insecure.test" });
            Assert.IsFalse(v2);

            var (v3, e3) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = "not-guid" });
            Assert.IsFalse(v3);

            var (v4, e4) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = Guid.NewGuid().ToString() });
            Assert.IsTrue(v4);

            var (v5, _) = await b.ValidateAsync(new CrmConnection { Url = "not-a-url" });
            Assert.IsFalse(v5);
        }

        [TestMethod]
        public async Task DeviceCode_BuildAndValidate()
        {
            var b = new DeviceCodeConnectionBuilder();
            Assert.AreEqual(ConnectionType.DeviceCode, b.Type);

            var s = b.BuildConnectionString(new CrmConnection { Url = "https://test.crm.dynamics.com" });
            StringAssert.Contains(s, "AuthType=DeviceCode");

            var customCid = Guid.NewGuid().ToString();
            var sCustom = b.BuildConnectionString(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = customCid });
            StringAssert.Contains(sCustom, customCid);

            var (v1, e1) = await b.ValidateAsync(new CrmConnection());
            Assert.IsFalse(v1);

            var (v2, e2) = await b.ValidateAsync(new CrmConnection { Url = "http://insecure.test" });
            Assert.IsFalse(v2);

            var (v3, e3) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = "not-guid" });
            Assert.IsFalse(v3);

            var (v4, e4) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", ClientId = Guid.NewGuid().ToString() });
            Assert.IsTrue(v4);

            var (v5, _) = await b.ValidateAsync(new CrmConnection { Url = "not-a-url" });
            Assert.IsFalse(v5);
        }

        [TestMethod]
        public async Task OAuth_BuildAndValidate()
        {
            var b = new OAuthConnectionBuilder();
            Assert.AreEqual(ConnectionType.OAuth, b.Type);

            var s1 = b.BuildConnectionString(MakeConnection("OAuth"));
            StringAssert.Contains(s1, "AuthType=OAuth");

            var s2 = b.BuildConnectionString(MakeConnection("OAuth"), true);
            StringAssert.Contains(s2, "Password=***");

            var s3 = b.BuildConnectionString(new CrmConnection { Url = "https://test.crm.dynamics.com", UserName = "u", Password = "p", ClientId = "custom-id" });
            StringAssert.Contains(s3, "AppId=custom-id");

            var (v1, e1) = await b.ValidateAsync(new CrmConnection());
            Assert.IsFalse(v1);

            var (v2, e2) = await b.ValidateAsync(new CrmConnection { Url = "not-a-url" });
            Assert.IsFalse(v2);

            var (v3, e3) = await b.ValidateAsync(new CrmConnection { Url = "http://insecure.test" });
            Assert.IsFalse(v3);

            var (v4, e4) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com" });
            Assert.IsFalse(v4);

            var (v5, e5) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", UserName = "u" });
            Assert.IsFalse(v5);

            var (v6, e6) = await b.ValidateAsync(new CrmConnection { Url = "https://test.crm.dynamics.com", UserName = "u", Password = "p" });
            Assert.IsTrue(v6);
        }

        [TestMethod]
        public async Task OAuth_CreateServiceClientAsync_ThrowsConnectionException()
        {
            var b = new OAuthConnectionBuilder();
            await Assert.ThrowsAsync<Exception>(async () =>
            {
                await b.CreateServiceClientAsync(new CrmConnection
                {
                    Url = "https://127.0.0.1:54321",
                    UserName = "u",
                    Password = "p"
                });
            });
        }

        [TestMethod]
        public void ConnectionBuilderFactory_CoversAllTypes()
        {
            Assert.IsNotNull(ConnectionBuilderFactory.GetBuilder("ClientSecret"));
            Assert.IsNotNull(ConnectionBuilderFactory.GetBuilder("AD"));
            Assert.IsNotNull(ConnectionBuilderFactory.GetBuilder("Interactive"));
            Assert.IsNotNull(ConnectionBuilderFactory.GetBuilder("OAuth"));
            Assert.IsNotNull(ConnectionBuilderFactory.GetBuilder("DeviceCode"));
            Assert.IsNotNull(ConnectionBuilderFactory.GetBuilder("FromPac"));
            Assert.IsNotNull(ConnectionBuilderFactory.GetBuilder("clientsecret"));

            Assert.IsTrue(ConnectionBuilderFactory.IsSupported("ClientSecret"));
            Assert.IsTrue(ConnectionBuilderFactory.IsSupported("interactive"));
            Assert.IsFalse(ConnectionBuilderFactory.IsSupported("Unknown"));
            Assert.IsFalse(ConnectionBuilderFactory.IsSupported(null));
            Assert.IsFalse(ConnectionBuilderFactory.IsSupported(string.Empty));

            Assert.ThrowsExactly<NotSupportedException>(() => ConnectionBuilderFactory.GetBuilder("UnknownType"));
            Assert.ThrowsExactly<ArgumentNullException>(() => ConnectionBuilderFactory.GetBuilder(null));
            Assert.ThrowsExactly<ArgumentNullException>(() => ConnectionBuilderFactory.GetBuilder(""));

            Assert.IsFalse(ConnectionBuilderFactory.GetFuturePlanning(null).planned);
            Assert.IsFalse(ConnectionBuilderFactory.GetFuturePlanning("").planned);
            Assert.IsFalse(ConnectionBuilderFactory.GetFuturePlanning("ANY").planned);
        }

        [TestMethod]
        public void PacProfileInfo_Properties()
        {
            var info = new PacProfileInfo
            {
                Index = 1,
                Name = "MyProfile",
                FriendlyName = "FriendlyOrg",
                Resource = "https://org.crm.dynamics.com"
            };

            Assert.AreEqual("MyProfile", info.Identifier);
            Assert.AreEqual("MyProfile", info.ConnectionName);
            Assert.AreEqual("[1] MyProfile (https://org.crm.dynamics.com)", info.DisplayText);
            Assert.AreEqual("[1] MyProfile (https://org.crm.dynamics.com)", info.ToString());

            var info2 = new PacProfileInfo
            {
                Index = 2,
                FriendlyName = "FriendlyOnly",
                Resource = "https://org2.crm.dynamics.com"
            };
            Assert.AreEqual("2", info2.Identifier);
            Assert.AreEqual("FriendlyOnly", info2.ConnectionName);

            var info3 = new PacProfileInfo
            {
                Index = 3,
                Resource = "https://org3.crm.dynamics.com"
            };
            Assert.AreEqual("org3.crm.dynamics.com", info3.ConnectionName);

            var info4 = new PacProfileInfo { Index = 4 };
            Assert.AreEqual("PAC Profile 4", info4.ConnectionName);
            Assert.AreEqual("[4] PAC Profile 4 (no env)", info4.DisplayText);
        }

        [TestMethod]
        public void PacProfileHelper_Basics()
        {
            var path = PacProfileHelper.ProfilesPath;
            Assert.IsFalse(string.IsNullOrWhiteSpace(path));

            var has = PacProfileHelper.HasPacProfiles();
            var profiles = PacProfileHelper.GetPacProfiles();
            Assert.IsNotNull(profiles);
        }

        [TestMethod]
        public void FromPac_BuildConnectionStringAndValidate()
        {
            var b = new FromPacConnectionBuilder();
            Assert.AreEqual(ConnectionType.FromPac, b.Type);

            Assert.AreEqual("AuthType=FromPac;Profile=(active);", b.BuildConnectionString(new CrmConnection()));
            Assert.AreEqual("AuthType=FromPac;Profile=(active);", b.BuildConnectionString(new CrmConnection { PacProfile = "   " }));
            Assert.AreEqual("AuthType=FromPac;Profile=DEV;", b.BuildConnectionString(new CrmConnection { PacProfile = "DEV" }));
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_NonExistentProfile_ReturnsFalse()
        {
            var b = new FromPacConnectionBuilder();
            var (valid, err) = await b.ValidateAsync(new CrmConnection { PacProfile = "non_existent_profile_xyz_99999" });
            Assert.IsFalse(valid);
            Assert.IsNotNull(err);
        }

        [TestMethod]
        public async Task FromPac_ValidateAsync_WithExistingProfiles_ReturnsTrue()
        {
            if (PacProfileHelper.HasPacProfiles())
            {
                var b = new FromPacConnectionBuilder();
                var (validActive, _) = await b.ValidateAsync(new CrmConnection { PacProfile = null });
                Assert.IsTrue(validActive);

                var (validIndex, _) = await b.ValidateAsync(new CrmConnection { PacProfile = "1" });
                Assert.IsTrue(validIndex);

                var (validName, _) = await b.ValidateAsync(new CrmConnection { PacProfile = "hitachi-hsapvn-dev" });
                Assert.IsTrue(validName);

                var (invalidNamed, errNamed) = await b.ValidateAsync(new CrmConnection { PacProfile = "unknown_profile_999" });
                Assert.IsFalse(invalidNamed);
                StringAssert.Contains(errNamed, "Available profiles");
            }
        }

        [TestMethod]
        public void FromPac_PrivateMethodsCoverage()
        {
            var getJsonStringMethod = typeof(FromPacConnectionBuilder).GetMethod("GetJsonString", StaticPrivate);
            if (getJsonStringMethod != null)
            {
                using var doc = JsonDocument.Parse("{\"str\":\"val\",\"num\":10}");
                var root = doc.RootElement;
                Assert.AreEqual("val", (string)getJsonStringMethod.Invoke(null, new object[] { root, "str" }));
                Assert.IsNull(getJsonStringMethod.Invoke(null, new object[] { root, "num" }));
                Assert.IsNull(getJsonStringMethod.Invoke(null, new object[] { root, "missing" }));
            }

            var getHomeAccountIdMethod = typeof(FromPacConnectionBuilder).GetMethod("GetHomeAccountId", StaticPrivate);
            var pacProfileDataType = typeof(FromPacConnectionBuilder).GetNestedType("PacProfileData", BindingFlags.NonPublic);
            if (getHomeAccountIdMethod != null && pacProfileDataType != null)
            {
                var profileData = Activator.CreateInstance(pacProfileDataType);
                pacProfileDataType.GetProperty("User")?.SetValue(profileData, "u@test.com");
                pacProfileDataType.GetProperty("TenantId")?.SetValue(profileData, "tid-1");

                var json = "{\"Account\":{\"a1\":{\"username\":\"u@test.com\",\"realm\":\"tid-1\",\"home_account_id\":\"hid1\"},\"a2\":{\"username\":\"other@test.com\",\"realm\":\"tid-1\",\"home_account_id\":\"hid2\"},\"a3\":{\"username\":\"u@test.com\",\"realm\":\"other-tid\",\"home_account_id\":\"hid3\"}}}";
                using var doc = JsonDocument.Parse(json);
                var res = (string)getHomeAccountIdMethod.Invoke(null, new object[] { doc, profileData });
                Assert.AreEqual("hid1", res);

                using var emptyDoc = JsonDocument.Parse("{}");
                Assert.IsNull(getHomeAccountIdMethod.Invoke(null, new object[] { emptyDoc, profileData }));
            }

            var findAccessTokenMethod = typeof(FromPacConnectionBuilder).GetMethod("FindAccessToken", StaticPrivate);
            if (findAccessTokenMethod != null && pacProfileDataType != null)
            {
                var profileData = Activator.CreateInstance(pacProfileDataType);
                pacProfileDataType.GetProperty("User")?.SetValue(profileData, "u@test.com");
                pacProfileDataType.GetProperty("TenantId")?.SetValue(profileData, "tid-1");

                var futureUnix = DateTimeOffset.UtcNow.AddHours(2).ToUnixTimeSeconds().ToString();
                var pastUnix = DateTimeOffset.UtcNow.AddHours(-2).ToUnixTimeSeconds().ToString();

                var jsonTokens = $@"{{
                    ""tDiffUser"": {{ ""client_id"": ""wrong@test.com"", ""realm"": ""tid-1"", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""hid1"", ""expires_on"": ""{futureUnix}"", ""secret"": ""s1"" }},
                    ""tDiffRealm"": {{ ""client_id"": ""u@test.com"", ""realm"": ""wrong-tid"", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""hid1"", ""expires_on"": ""{futureUnix}"", ""secret"": ""s2"" }},
                    ""tDiffTarget"": {{ ""client_id"": ""u@test.com"", ""realm"": ""tid-1"", ""target"": ""https://other.crm.dynamics.com/.default"", ""home_account_id"": ""hid1"", ""expires_on"": ""{futureUnix}"", ""secret"": ""s3"" }},
                    ""tDiffHomeAcc"": {{ ""client_id"": ""u@test.com"", ""realm"": ""tid-1"", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""wrong-hid"", ""expires_on"": ""{futureUnix}"", ""secret"": ""s4"" }},
                    ""tExpired"": {{ ""client_id"": ""u@test.com"", ""realm"": ""tid-1"", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""hid1"", ""expires_on"": ""{pastUnix}"", ""secret"": ""s5"" }},
                    ""tNoSecret"": {{ ""client_id"": ""u@test.com"", ""realm"": ""tid-1"", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""hid1"", ""expires_on"": ""{futureUnix}"", ""secret"": """" }},
                    ""tValid"": {{ ""client_id"": ""u@test.com"", ""realm"": ""tid-1"", ""target"": ""https://org.crm.dynamics.com/.default"", ""home_account_id"": ""hid1"", ""expires_on"": ""{futureUnix}"", ""secret"": ""valid-secret"" }}
                }}";

                using var docTokens = JsonDocument.Parse(jsonTokens);
                var accessTokens = docTokens.RootElement;

                var token = (string)findAccessTokenMethod.Invoke(null, new object[] {
                    accessTokens, profileData, "https://org.crm.dynamics.com", "hid1", true, "error msg"
                });
                Assert.AreEqual("valid-secret", token);

                using var emptyTokensDoc = JsonDocument.Parse("{}");
                var ex = Assert.ThrowsExactly<TargetInvocationException>(() =>
                {
                    findAccessTokenMethod.Invoke(null, new object[] {
                        emptyTokensDoc.RootElement, profileData, "https://org.crm.dynamics.com", "hid1", false, "custom error"
                    });
                });
                Assert.IsInstanceOfType(ex.InnerException, typeof(InvalidOperationException));
                Assert.AreEqual("custom error", ex.InnerException.Message);
            }
        }
    }
}
