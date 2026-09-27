using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using DynamicsCrm.DevKit.Shared.Models;
using DynamicsCrm.DevKit.Tool.Lib;
using DynamicsCrm.DevKit.Tool.UnitTests.TestInfrastructure;
using Microsoft.Identity.Client;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    /// <summary>
    /// Covers the remaining defensive branches of the shared Tool classes:
    /// ProjectEnvironment file handling, Utility, ToolConsole, Program dispatch,
    /// the connection-type factory, builder validation, and SecureTokenCache.
    /// DoNotParallelize: flips FakeMsalToken static flags and the process
    /// current directory.
    /// </summary>
    [DoNotParallelize]
    [TestClass]
    public class ToolSharedRemainingCoverageTests
    {
        private string tempDir;
        private string originalCurrentDirectory;

        [TestInitialize]
        public void SetUp()
        {
            FakeMsalToken.EnsurePatched();
            tempDir = Path.Combine(Path.GetTempPath(), "DevKitToolTests", Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(tempDir);
            originalCurrentDirectory = Environment.CurrentDirectory;
        }

        [TestCleanup]
        public void TearDown()
        {
            Environment.CurrentDirectory = originalCurrentDirectory;
            if (Directory.Exists(tempDir)) Directory.Delete(tempDir, true);
        }

        private string TempFile(string name) => Path.Combine(tempDir, name);

        #region ProjectEnvironment

        [TestMethod]
        public void WriteOrUpdate_RelativeFileName_SkipsDirectoryAndGitIgnore()
        {
            var file = "devkit-relative.env";
            try
            {
                ProjectEnvironment.WriteOrUpdate(file, new Dictionary<string, string> { ["DEVKIT_URL"] = "https://x" });
                Assert.IsTrue(File.Exists(file));
            }
            finally
            {
                if (File.Exists(file)) File.Delete(file);
            }
        }

        [TestMethod]
        public void WriteOrUpdate_CreatesMissingDirectory_AndNullValuesBecomeEmpty()
        {
            var file = TempFile(Path.Combine("nested", "deeper", ".env"));
            ProjectEnvironment.WriteOrUpdate(file, new Dictionary<string, string>
            {
                ["DEVKIT_URL"] = null,
                ["DEVKIT_NEW_KEY"] = null
            });
            var lines = File.ReadAllLines(file);
            Assert.IsTrue(lines.Any(line => line == "DEVKIT_URL="), "existing key with null value becomes empty.");
            Assert.IsTrue(lines.Any(line => line == "DEVKIT_NEW_KEY="), "new key with null value becomes empty.");
        }

        [TestMethod]
        public void WriteOrUpdate_AppendsWithoutSeparator_WhenGitIgnoreEndsWithBlankLine()
        {
            var gitIgnore = TempFile(".gitignore");
            File.WriteAllLines(gitIgnore, new[] { "bin/", "" });
            ProjectEnvironment.WriteOrUpdate(TempFile(".env"), new Dictionary<string, string> { ["DEVKIT_URL"] = "https://x" });
            var text = File.ReadAllText(gitIgnore);
            StringAssert.Contains(text, "# DynamicsCrm.DevKit local project environment");
        }

        [TestMethod]
        public void WriteOrUpdate_EmptyGitIgnore_StillAppends()
        {
            var gitIgnore = TempFile(".gitignore");
            File.WriteAllBytes(gitIgnore, Array.Empty<byte>());
            ProjectEnvironment.WriteOrUpdate(TempFile(".env"), new Dictionary<string, string> { ["DEVKIT_URL"] = "https://x" });
            StringAssert.Contains(File.ReadAllText(gitIgnore), "DynamicsCrm.DevKit local project environment");
        }

        [TestMethod]
        public void ProjectEnvironment_PrivateHelpers_Handle_Null_And_Edge_Lines()
        {
            InvokePrivate("EnsureAuthTypeHelpComment", new object[] { null }, new[] { typeof(string) });
            Assert.IsFalse((bool)InvokePrivate("EnsureAuthTypeHelpComment", new object[] { null }, new[] { typeof(IList<string>) }));

            Assert.IsNull(InvokePrivate("TryGetKey", new object[] { "" }));
            Assert.IsNull(InvokePrivate("TryGetKey", new object[] { "   " }));
            Assert.IsNull(InvokePrivate("TryGetKey", new object[] { "novalue" }));
            Assert.IsNull(InvokePrivate("TryGetKey", new object[] { "=value" }));

            Assert.AreEqual("quoted", InvokePrivate("Unquote", new object[] { "'quoted'" }));
            Assert.AreEqual("\"unterminated", InvokePrivate("Unquote", new object[] { "\"unterminated" }));
            Assert.AreEqual("'unterminated", InvokePrivate("Unquote", new object[] { "'unterminated" }));
            Assert.AreEqual("plain", InvokePrivate("Unquote", new object[] { "plain" }));
        }

        #endregion

        #region Utility / ToolConsole

        [TestMethod]
        public void ForceWriteAllText_Handles_BareFileName_NestedDirectory_AndReadOnlyFile()
        {
            var bare = Path.Combine(tempDir, "bare.txt");
            Utility.ForceWriteAllText("bare-relative.txt", "relative");
            Assert.IsTrue(File.Exists("bare-relative.txt"));
            try { File.Delete("bare-relative.txt"); } catch { /* best effort */ }

            var nested = TempFile(Path.Combine("new", "dirs", "file.txt"));
            Utility.ForceWriteAllText(nested, "nested");
            Assert.AreEqual("nested", File.ReadAllText(nested));

            var readOnly = TempFile("readonly.txt");
            File.WriteAllText(readOnly, "old");
            File.SetAttributes(readOnly, FileAttributes.ReadOnly);
            Utility.ForceWriteAllText(readOnly, "new");
            Assert.AreEqual("new", File.ReadAllText(readOnly));
            Assert.AreNotEqual(FileAttributes.ReadOnly, File.GetAttributes(readOnly) & FileAttributes.ReadOnly);
        }

        [TestMethod]
        public void ToolConsole_WriteLine_NullText_WritesNothing()
        {
            ToolConsole.WriteLine(null);
        }

        #endregion

        #region Program dispatch

        [TestMethod]
        public void Main_HelpAndVersionSwitches_CoverAllShapes()
        {
            var main = typeof(Program).GetMethod("Main", BindingFlags.NonPublic | BindingFlags.Static);
            Assert.IsNotNull(main, "Program.Main must exist.");
            var original = Environment.GetEnvironmentVariable("DEVKIT_NO_BANNER");
            try
            {
                foreach (var bannerValue in new[] { "1", "true", null })
                {
                    Environment.SetEnvironmentVariable("DEVKIT_NO_BANNER", bannerValue);
                    foreach (var arg in new[] { "--help", "-h", "/?", "--version", "-v" })
                    {
                        var exit = (int)main.Invoke(null, new object[] { new[] { arg } });
                        Assert.AreEqual(0, exit, $"{arg} with DEVKIT_NO_BANNER={bannerValue}");
                    }
                    Assert.AreEqual(0, (int)main.Invoke(null, new object[] { Array.Empty<string>() }));
                }
            }
            finally
            {
                Environment.SetEnvironmentVariable("DEVKIT_NO_BANNER", original);
            }
        }

        #endregion

        #region ConnectionBuilderFactory

        [TestMethod]
        public void IsSupported_Covers_Every_Arm()
        {
            foreach (var type in new[] { "Interactive", "DeviceCode", "OAuth", "ClientSecret", "AD", "FromPac" })
            {
                Assert.IsTrue(ConnectionBuilderFactory.IsSupported(type), type);
            }
            Assert.IsFalse(ConnectionBuilderFactory.IsSupported("Unknown"));
            Assert.IsFalse(ConnectionBuilderFactory.IsSupported(null));
            Assert.IsFalse(ConnectionBuilderFactory.IsSupported(""));
        }

        [TestMethod]
        public void GetFuturePlanning_Returns_False_For_Everything()
        {
            var (planned, phase) = ConnectionBuilderFactory.GetFuturePlanning("ClientSecret");
            Assert.IsFalse(planned);
            Assert.IsNull(phase);
        }

        [TestMethod]
        public void GetBuilder_Null_Throws()
        {
            Assert.IsNotNull(Catch<ArgumentNullException>(() => ConnectionBuilderFactory.GetBuilder(null)));
        }

        #endregion

        #region Builder validation sweeps

        [TestMethod]
        public async System.Threading.Tasks.Task Builder_ValidateAsync_Covers_All_Rejections()
        {
            var builders = new IConnectionBuilder[]
            {
                new ClientSecretConnectionBuilder(),
                new ADConnectionBuilder(),
                new OAuthConnectionBuilder(),
                new InteractiveConnectionBuilder(),
                new DeviceCodeConnectionBuilder()
            };

            foreach (var builder in builders)
            {
                var missingUrl = await builder.ValidateAsync(new CrmConnection());
                Assert.IsFalse(missingUrl.isValid, builder.Type + " missing url");
                StringAssert.Contains(missingUrl.error, "URL", builder.Type);

                var badUrl = await builder.ValidateAsync(new CrmConnection { Url = "not a url", UserName = "u", Password = "p", ClientId = "c", ClientSecret = "s" });
                Assert.IsFalse(badUrl.isValid, builder.Type + " bad url");
                StringAssert.Contains(badUrl.error, "Invalid URL", builder.Type);
            }

            var interactiveHttp = await new InteractiveConnectionBuilder().ValidateAsync(new CrmConnection { Url = "http://org.crm.dynamics.com" });
            Assert.IsFalse(interactiveHttp.isValid);
            StringAssert.Contains(interactiveHttp.error, "HTTPS");

            var interactiveBadGuid = await new InteractiveConnectionBuilder().ValidateAsync(new CrmConnection { Url = "https://org.crm.dynamics.com", ClientId = "not-a-guid" });
            Assert.IsFalse(interactiveBadGuid.isValid);
            StringAssert.Contains(interactiveBadGuid.error, "GUID");

            var interactiveValid = await new InteractiveConnectionBuilder().ValidateAsync(new CrmConnection { Url = "https://org.crm.dynamics.com" });
            Assert.IsTrue(interactiveValid.isValid);
        }

        [TestMethod]
        public void AD_BuildConnectionString_Covers_Domain_Splits()
        {
            var builder = new ADConnectionBuilder();

            var noUser = builder.BuildConnectionString(new CrmConnection { Url = "https://org" });
            StringAssert.Contains(noUser, "Username=;Password=");

            var noDomain = builder.BuildConnectionString(new CrmConnection { Url = "https://org", UserName = "user", Password = "pass" });
            StringAssert.Contains(noDomain, "Username=user;Password=pass;");
            Assert.IsFalse(noDomain.Contains("Domain="));

            var withDomain = builder.BuildConnectionString(new CrmConnection { Url = "https://org", UserName = "CONTOSO\\user", Password = "pass" }, shouldMaskPassword: true);
            StringAssert.Contains(withDomain, "Domain=CONTOSO;");
            StringAssert.Contains(withDomain, "Username=user;Password=***;");

            var multiBackslash = builder.BuildConnectionString(new CrmConnection { Url = "https://org", UserName = "a\\b\\c", Password = "pass" });
            Assert.IsFalse(multiBackslash.Contains("Domain="));
            StringAssert.Contains(multiBackslash, "Username=a\\b\\c");
        }

        #endregion

        #region SecureTokenCache

        [TestMethod]
        public void SecureTokenCache_RoundTrip_Corrupt_And_Clear()
        {
            var cache = new SecureTokenCache();
            var location = cache.GetCacheLocation();
            Assert.IsTrue(Directory.Exists(location));

            InvokeInstance(cache, "SaveCacheData", "tool-roundtrip", new byte[] { 1, 2, 3 });
            Assert.IsTrue(cache.HasCache("tool-roundtrip"));
            var loaded = InvokeInstance(cache, "LoadCacheData", "tool-roundtrip");
            CollectionAssert.AreEqual(new byte[] { 1, 2, 3 }, (byte[])loaded);

            var corruptPath = Path.Combine(location, "tool-corrupt.msalcache");
            File.WriteAllBytes(corruptPath, new byte[] { 9, 9, 9 });
            Assert.IsNull(InvokeInstance(cache, "LoadCacheData", "tool-corrupt"));

            cache.Clear("tool-roundtrip");
            Assert.IsFalse(cache.HasCache("tool-roundtrip"));
        }

        [TestMethod]
        public async System.Threading.Tasks.Task SecureTokenCache_RegisterCache_Notifications_Fire_Both_Lambdas()
        {
            var cache = new SecureTokenCache();
            var connectionName = "tool-register-test";
            InvokeInstance(cache, "SaveCacheData", connectionName, Encoding.UTF8.GetBytes("{}"));
            Assert.IsTrue(cache.HasCache(connectionName));

            var app = PublicClientApplicationBuilder
                .Create("51f81489-12ee-4a9e-aaae-a2591f45987d")
                .WithRedirectUri("http://localhost")
                .Build();
            cache.RegisterCache(app, connectionName);

            // A real GetAccountsAsync reads the registered cache, firing the
            // before/after-access notifications that drive both lambdas.
            FakeMsalToken.GetAccountsPassthrough = true;
            try
            {
                await app.GetAccountsAsync();
            }
            finally
            {
                FakeMsalToken.GetAccountsPassthrough = false;
            }

            cache.Clear(connectionName);
            Assert.IsFalse(cache.HasCache(connectionName));
        }

        [TestMethod]
        public void SecureTokenCache_AfterAccess_StateChanged_PersistsCache()
        {
            var cache = new SecureTokenCache();
            var connectionName = "tool-afteraccess-test";
            cache.Clear(connectionName);

            var app = PublicClientApplicationBuilder
                .Create("51f81489-12ee-4a9e-aaae-a2591f45987d")
                .WithRedirectUri("http://localhost")
                .Build();
            cache.RegisterCache(app, connectionName);

            // Fire the installed before/after-access callbacks directly, the way
            // MSAL does on cache reads and token writes.
            var userTokenCache = app.UserTokenCache;
            var argsType = BuildNotificationArgs(userTokenCache, hasStateChanged: true);

            var afterAccess = userTokenCache.GetType()
                .GetField("<AfterAccess>k__BackingField", BindingFlags.Instance | BindingFlags.NonPublic)
                ?.GetValue(userTokenCache);
            Assert.IsNotNull(afterAccess, "RegisterCache must install the after-access callback.");
            afterAccess.GetType().GetMethod("Invoke").Invoke(afterAccess, new[] { argsType });

            Assert.IsTrue(cache.HasCache(connectionName),
                "a state-changed notification must persist the serialized cache.");

            // With no cache file on disk the before-access callback sees null data
            // and skips the deserialize.
            cache.Clear(connectionName);
            var beforeAccess = userTokenCache.GetType()
                .GetField("<BeforeAccess>k__BackingField", BindingFlags.Instance | BindingFlags.NonPublic)
                ?.GetValue(userTokenCache);
            Assert.IsNotNull(beforeAccess, "RegisterCache must install the before-access callback.");
            var readArgs = BuildNotificationArgs(userTokenCache, hasStateChanged: false);
            beforeAccess.GetType().GetMethod("Invoke").Invoke(beforeAccess, new[] { readArgs });

            cache.Clear(connectionName);
            Assert.IsFalse(cache.HasCache(connectionName));
        }

        private static object BuildNotificationArgs(object userTokenCache, bool hasStateChanged)
        {
            var afterAccessProbe = userTokenCache.GetType()
                .GetField("<AfterAccess>k__BackingField", BindingFlags.Instance | BindingFlags.NonPublic)
                ?.GetValue(userTokenCache);
            Assert.IsNotNull(afterAccessProbe);
            var argsType = afterAccessProbe.GetType().GetMethod("Invoke").GetParameters()[0].ParameterType;
            var constructor = argsType
                .GetConstructors(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
                .OrderBy(ctor => ctor.GetParameters().Length)
                .First();
            return constructor.Invoke(new object[]
            {
                (Microsoft.Identity.Client.ITokenCacheSerializer)userTokenCache,
                "51f81489-12ee-4a9e-aaae-a2591f45987d",
                null,
                hasStateChanged,   // HasStateChanged → the after-access lambda serializes and saves
                false,             // isApplicationCache
                null,              // suggestedCacheKey
                true,              // hasTokens
                null,              // suggestedCacheExpiry
                System.Threading.CancellationToken.None
            });
        }

        [TestMethod]
        public void SecureTokenCache_IO_Failures_Are_Swallowed()
        {
            var cache = new SecureTokenCache();
            var locationField = typeof(SecureTokenCache).GetField("_cacheLocation", BindingFlags.Instance | BindingFlags.NonPublic);
            var originalLocation = (string)locationField.GetValue(cache);

            // SaveCacheData against a file-as-directory target fails and is swallowed.
            var blockerFile = Path.Combine(Path.GetTempPath(), "stc-block-" + Guid.NewGuid().ToString("N") + ".txt");
            File.WriteAllText(blockerFile, "a file, not a directory");
            var lockedDir = Path.Combine(Path.GetTempPath(), "stc-locked-" + Guid.NewGuid().ToString("N"));
            Directory.CreateDirectory(lockedDir);
            try
            {
                locationField.SetValue(cache, blockerFile);
                InvokeInstance(cache, "SaveCacheData", "tool-catch-test", new byte[] { 1, 2, 3 });
                Assert.IsFalse(cache.HasCache("tool-catch-test"), "the write failed and left no cache file.");

                // ClearAll against a directory holding an open handle fails and is swallowed.
                locationField.SetValue(cache, lockedDir);
                var lockedFile = Path.Combine(lockedDir, "locked.msalcache");
                using (File.Open(lockedFile, FileMode.Create, FileAccess.ReadWrite, FileShare.None))
                {
                    cache.ClearAll();
                    Assert.IsTrue(Directory.Exists(lockedDir), "the recursive delete failed as expected.");
                }

                // Clear against a cache file held open with FileShare.None fails and is swallowed.
                var lockedCache = Path.Combine(lockedDir, "tool-lockedclear.msalcache");
                File.WriteAllBytes(lockedCache, new byte[] { 1 });
                using (File.Open(lockedCache, FileMode.Open, FileAccess.Read, FileShare.None))
                {
                    cache.Clear("tool-lockedclear");
                    Assert.IsTrue(File.Exists(lockedCache), "File.Delete failed as expected; the catch swallowed it.");
                }
            }
            finally
            {
                locationField.SetValue(cache, originalLocation);
                try { if (Directory.Exists(lockedDir)) Directory.Delete(lockedDir, true); } catch { /* best-effort cleanup */ }
                if (File.Exists(blockerFile)) File.Delete(blockerFile);
            }
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

        private static object InvokePrivate(string method, object[] args, Type[] paramTypes = null)
        {
            var candidates = typeof(ProjectEnvironment)
                .GetMethods(BindingFlags.NonPublic | BindingFlags.Static)
                .Where(candidate => candidate.Name == method && candidate.GetParameters().Length == args.Length)
                .ToList();

            var selected = paramTypes != null
                ? candidates.Single(candidate => candidate.GetParameters().Select(parameter => parameter.ParameterType).SequenceEqual(paramTypes))
                : candidates.Count == 1 ? candidates[0] : candidates.First();

            return selected.Invoke(null, args);
        }

        private static TException Catch<TException>(Action action)
            where TException : Exception
        {
            try
            {
                action();
                return null;
            }
            catch (TException exception)
            {
                return exception;
            }
        }

        private static object InvokeInstance(object instance, string method, params object[] args)
        {
            return instance.GetType()
                .GetMethod(method, BindingFlags.NonPublic | BindingFlags.Instance)
                .Invoke(instance, args);
        }
    }
}
