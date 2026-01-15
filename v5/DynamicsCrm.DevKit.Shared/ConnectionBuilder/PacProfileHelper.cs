using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder
{
    /// <summary>
    /// Information about a PAC CLI authentication profile.
    /// </summary>
    public class PacProfileInfo
    {
        /// <summary>
        /// Profile name used for selection.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// User-friendly display name.
        /// </summary>
        public string FriendlyName { get; set; }

        /// <summary>
        /// Environment URL (Resource).
        /// </summary>
        public string Resource { get; set; }

        /// <summary>
        /// Display text for ComboBox.
        /// </summary>
        public string DisplayText => $"{Name} ({Resource ?? "no env"})";

        public override string ToString() => DisplayText;
    }

    /// <summary>
    /// Helper class to load PAC CLI profiles from the local file system.
    /// </summary>
    public static class PacProfileHelper
    {
        /// <summary>
        /// Gets the path to the PAC CLI profiles file.
        /// </summary>
        public static string ProfilesPath => Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
            "Microsoft",
            "PowerAppsCLI",
            "authprofiles_v2.json");

        /// <summary>
        /// Get list of PAC CLI profile names for ComboBox display.
        /// </summary>
        /// <returns>List of profile info, or empty list if no profiles found.</returns>
        public static List<PacProfileInfo> GetPacProfiles()
        {
            var result = new List<PacProfileInfo>();

            if (!File.Exists(ProfilesPath))
            {
                return result;
            }

            try
            {
                var json = File.ReadAllText(ProfilesPath);
                var jsonOptions = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                var pacProfiles = JsonSerializer.Deserialize<PacProfilesData>(json, jsonOptions);

                if (pacProfiles?.Profiles == null)
                {
                    return result;
                }

                foreach (var profile in pacProfiles.Profiles)
                {
                    if (!string.IsNullOrEmpty(profile.Name))
                    {
                        result.Add(new PacProfileInfo
                        {
                            Name = profile.Name,
                            FriendlyName = profile.FriendlyName,
                            Resource = profile.Resource
                        });
                    }
                }
            }
            catch
            {
                // Return empty list on any parse error
            }

            return result;
        }

        /// <summary>
        /// Check if PAC CLI profiles file exists.
        /// </summary>
        public static bool HasPacProfiles()
        {
            return File.Exists(ProfilesPath);
        }

        #region JSON Models

        private class PacProfileData
        {
            public string Name { get; set; }
            public string Resource { get; set; }
            public string FriendlyName { get; set; }
            public string OrganizationUniqueName { get; set; }
        }

        private class PacProfilesData
        {
            public List<PacProfileData> Profiles { get; set; }
            public Dictionary<string, PacProfileData> Current { get; set; }
        }

        #endregion
    }
}
