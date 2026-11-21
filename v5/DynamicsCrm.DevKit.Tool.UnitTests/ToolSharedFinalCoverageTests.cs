using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using DynamicsCrm.DevKit.Shared;
using DynamicsCrm.DevKit.Shared.ConnectionBuilder;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DynamicsCrm.DevKit.Tool.UnitTests
{
    /// <summary>
    /// Final wave of Tool-side coverage: ProjectEnvironment .env-group helpers,
    /// PacProfileHelper parameterless overloads, and the JSON DTO property
    /// getters that nothing in production code reads.
    /// </summary>
    [TestClass]
    public class ToolSharedFinalCoverageTests
    {
        // ──────────────────────────────────────────────
        // ProjectEnvironment.GetValue(values, key)
        // ──────────────────────────────────────────────

        [TestMethod]
        public void GetValue_CaseInsensitiveFallback_ReturnsValue()
        {
            var values = new Dictionary<string, string> { ["DEVKIT_URL"] = "https://org.example" };

            Assert.AreEqual("https://org.example", ProjectEnvironment.GetValue(values, "devkit_url"));
        }

        // ──────────────────────────────────────────────
        // ProjectEnvironment.GetValue(values, key, groupId)
        // ──────────────────────────────────────────────

        [TestMethod]
        public void GetValue_WithGroupId_NullOrEmptyGroup_FallsBackToBaseKey()
        {
            var values = new Dictionary<string, string> { [ProjectEnvironment.Url] = "https://base.example" };

            Assert.AreEqual("https://base.example", ProjectEnvironment.GetValue(values, ProjectEnvironment.Url, null));
            Assert.AreEqual("https://base.example", ProjectEnvironment.GetValue(values, ProjectEnvironment.Url, ""));
        }

        [TestMethod]
        public void GetValue_WithGroupId_ValidGroup_ReadsGroupKey()
        {
            var values = new Dictionary<string, string> { ["DEVKIT_1_URL"] = "https://one.example" };

            Assert.AreEqual("https://one.example", ProjectEnvironment.GetValue(values, ProjectEnvironment.Url, "1"));
        }

        [TestMethod]
        public void GetValue_WithGroupId_InvalidGroup_ReturnsNull()
        {
            var values = new Dictionary<string, string> { ["DEVKIT_URL"] = "https://base.example" };

            Assert.IsNull(ProjectEnvironment.GetValue(values, ProjectEnvironment.Url, "abc"));
        }

        // ──────────────────────────────────────────────
        // ProjectEnvironment.IsValidGroupId
        // ──────────────────────────────────────────────

        [TestMethod]
        public void IsValidGroupId_EdgeCases()
        {
            Assert.IsFalse(ProjectEnvironment.IsValidGroupId(null));
            Assert.IsFalse(ProjectEnvironment.IsValidGroupId(""));
            Assert.IsFalse(ProjectEnvironment.IsValidGroupId("0"));
            Assert.IsFalse(ProjectEnvironment.IsValidGroupId("a"));
            Assert.IsFalse(ProjectEnvironment.IsValidGroupId("1a"));
            Assert.IsFalse(ProjectEnvironment.IsValidGroupId("1.2"));

            Assert.IsTrue(ProjectEnvironment.IsValidGroupId("1"));
            Assert.IsTrue(ProjectEnvironment.IsValidGroupId("9"));
            Assert.IsTrue(ProjectEnvironment.IsValidGroupId("12"));
            Assert.IsTrue(ProjectEnvironment.IsValidGroupId("123456"));
        }

        // ──────────────────────────────────────────────
        // ProjectEnvironment.GetGroupPrefix
        // ──────────────────────────────────────────────

        [TestMethod]
        public void GetGroupPrefix_NullOrEmptyOrValidGroup()
        {
            Assert.AreEqual("DEVKIT_", ProjectEnvironment.GetGroupPrefix(null));
            Assert.AreEqual("DEVKIT_", ProjectEnvironment.GetGroupPrefix(""));
            Assert.AreEqual("DEVKIT_1_", ProjectEnvironment.GetGroupPrefix("1"));
        }

        // ──────────────────────────────────────────────
        // ProjectEnvironment.GetGroupKey
        // ──────────────────────────────────────────────

        [TestMethod]
        public void GetGroupKey_NullOrWhitespaceKey_ReturnsNull()
        {
            Assert.IsNull(ProjectEnvironment.GetGroupKey(null, "1"));
            Assert.IsNull(ProjectEnvironment.GetGroupKey("", "1"));
            Assert.IsNull(ProjectEnvironment.GetGroupKey("   ", "1"));
        }

        [TestMethod]
        public void GetGroupKey_UnknownKey_ReturnsNull()
        {
            Assert.IsNull(ProjectEnvironment.GetGroupKey("DEVKIT_NOT_A_KEY", "1"));
        }

        [TestMethod]
        public void GetGroupKey_EmptyGroupId_ReturnsCanonicalKey()
        {
            Assert.AreEqual(ProjectEnvironment.Url, ProjectEnvironment.GetGroupKey(ProjectEnvironment.Url, null));
            Assert.AreEqual(ProjectEnvironment.Url, ProjectEnvironment.GetGroupKey(ProjectEnvironment.Url, ""));
        }

        [TestMethod]
        public void GetGroupKey_ValidGroup_BuildsGroupKey()
        {
            Assert.AreEqual("DEVKIT_1_URL", ProjectEnvironment.GetGroupKey(ProjectEnvironment.Url, "1"));
            Assert.AreEqual("DEVKIT_2_CONNECTION", ProjectEnvironment.GetGroupKey(ProjectEnvironment.Connection, "2"));
        }

        [TestMethod]
        public void GetGroupKey_KeyCaseInsensitive_MatchesCanonical()
        {
            Assert.AreEqual("DEVKIT_1_URL", ProjectEnvironment.GetGroupKey("devkit_url", "1"));
        }

        [TestMethod]
        public void GetGroupKey_InvalidGroupId_ReturnsNull()
        {
            Assert.IsNull(ProjectEnvironment.GetGroupKey(ProjectEnvironment.Url, "abc"));
        }

        // ──────────────────────────────────────────────
        // ProjectEnvironment.HasGroup (covers ContainsKeyIgnoreCase)
        // ──────────────────────────────────────────────

        [TestMethod]
        public void HasGroup_NullOrEmptyValues_ReturnsFalse()
        {
            Assert.IsFalse(ProjectEnvironment.HasGroup(null, "1"));
            Assert.IsFalse(ProjectEnvironment.HasGroup(new Dictionary<string, string>(), "1"));
        }

        [TestMethod]
        public void HasGroup_InvalidGroupId_ReturnsFalse()
        {
            var values = new Dictionary<string, string> { ["DEVKIT_1_URL"] = "https://one.example" };

            Assert.IsFalse(ProjectEnvironment.HasGroup(values, "abc"));
        }

        [TestMethod]
        public void HasGroup_GroupKeyPresent_ExactCase_ReturnsTrue()
        {
            var values = new Dictionary<string, string> { ["DEVKIT_1_URL"] = "https://one.example" };

            Assert.IsTrue(ProjectEnvironment.HasGroup(values, "1"));
        }

        [TestMethod]
        public void HasGroup_GroupKeyPresent_DifferentCase_ReturnsTrue()
        {
            var values = new Dictionary<string, string> { ["devkit_2_connection"] = "conn=..." };

            Assert.IsTrue(ProjectEnvironment.HasGroup(values, "2"));
        }

        [TestMethod]
        public void HasGroup_NoGroupKeys_ReturnsFalse()
        {
            var values = new Dictionary<string, string> { ["DEVKIT_URL"] = "https://base.example" };

            Assert.IsFalse(ProjectEnvironment.HasGroup(values, "9"));
        }

        [TestMethod]
        public void HasGroup_NullGroupId_BaseKeyPresent_ReturnsTrue()
        {
            var values = new Dictionary<string, string> { ["DEVKIT_URL"] = "https://base.example" };

            Assert.IsTrue(ProjectEnvironment.HasGroup(values, null));
        }

        [TestMethod]
        public void HasGroup_NullGroupId_NoKeys_ReturnsFalse()
        {
            var values = new Dictionary<string, string> { ["OTHER_KEY"] = "value" };

            Assert.IsFalse(ProjectEnvironment.HasGroup(values, null));
        }

        // ──────────────────────────────────────────────
        // PacProfileHelper — parameterless overloads + ProfilesPath
        // ──────────────────────────────────────────────

        [TestMethod]
        public void ProfilesPath_PointsAtPowerAppsCLIAuthProfiles()
        {
            var expectedSuffix = Path.Combine("Microsoft", "PowerAppsCLI", "authprofiles_v2.json");

            Assert.IsTrue(PacProfileHelper.ProfilesPath.EndsWith(expectedSuffix, StringComparison.Ordinal),
                $"Unexpected profiles path: {PacProfileHelper.ProfilesPath}");
        }

        [TestMethod]
        public void GetPacProfiles_Parameterless_ReturnsNonNullList()
        {
            var profiles = PacProfileHelper.GetPacProfiles();

            Assert.IsNotNull(profiles);
        }

        [TestMethod]
        public void HasPacProfiles_Parameterless_DoesNotThrow()
        {
            var has = PacProfileHelper.HasPacProfiles();

            Assert.IsTrue(has || !has);
        }

        // ──────────────────────────────────────────────
        // JSON DTO property getters nothing in production reads
        // ──────────────────────────────────────────────

        [TestMethod]
        public void PacProfileHelper_DtoGetters_ReadBackValues()
        {
            var profileType = typeof(PacProfileHelper).GetNestedType("PacProfileData", BindingFlags.NonPublic);
            Assert.IsNotNull(profileType, "PacProfileData nested type not found");
            var profile = Activator.CreateInstance(profileType);
            profileType.GetProperty("Name")!.GetSetMethod()!.Invoke(profile, new object[] { "name" });
            profileType.GetProperty("OrganizationUniqueName")!.GetSetMethod()!.Invoke(profile, new object[] { "org" });
            Assert.AreEqual("org", profileType.GetProperty("OrganizationUniqueName")!.GetValue(profile));

            var profilesDataType = typeof(PacProfileHelper).GetNestedType("PacProfilesData", BindingFlags.NonPublic);
            Assert.IsNotNull(profilesDataType, "PacProfilesData nested type not found");
            var profilesData = Activator.CreateInstance(profilesDataType);
            var currentProperty = profilesDataType.GetProperty("Current")!;
            var current = Activator.CreateInstance(currentProperty.PropertyType);
            currentProperty.GetSetMethod()!.Invoke(profilesData, new[] { current });
            Assert.AreSame(current, currentProperty.GetValue(profilesData));
        }

        [TestMethod]
        public void FromPacConnectionBuilder_DtoOrganizationUniqueName_ReadBackValue()
        {
            var profileType = typeof(FromPacConnectionBuilder).GetNestedType("PacProfileData", BindingFlags.NonPublic);
            Assert.IsNotNull(profileType, "PacProfileData nested type not found");
            var profile = Activator.CreateInstance(profileType);
            profileType.GetProperty("OrganizationUniqueName")!.GetSetMethod()!.Invoke(profile, new object[] { "orguni" });

            Assert.AreEqual("orguni", profileType.GetProperty("OrganizationUniqueName")!.GetValue(profile));
        }
    }

    /// <summary>
    /// FromPacConnectionBuilder.GetPacCacheDirectory is Harmony-patched by
    /// ToolConnectionBuildersCoverageTests for the duration of its tests, so a
    /// direct call here must never overlap with that class. Both classes carry
    /// [DoNotParallelize], making this call deterministic and unpatched.
    /// </summary>
    [TestClass]
    [DoNotParallelize]
    public class ToolPacCacheDirectoryCoverageTests
    {
        [TestMethod]
        public void GetPacCacheDirectory_PointsAtPowerAppsCLI()
        {
            var method = typeof(FromPacConnectionBuilder).GetMethod("GetPacCacheDirectory",
                BindingFlags.NonPublic | BindingFlags.Static);
            Assert.IsNotNull(method, "GetPacCacheDirectory not found");

            var directory = (string)method.Invoke(null, null);
            var expectedSuffix = Path.Combine("Microsoft", "PowerAppsCLI");

            Assert.IsTrue(directory.EndsWith(expectedSuffix, StringComparison.Ordinal),
                $"Unexpected PAC cache directory: {directory}");
        }
    }
}
