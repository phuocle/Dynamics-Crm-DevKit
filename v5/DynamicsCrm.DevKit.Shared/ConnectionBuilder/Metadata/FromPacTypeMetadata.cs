using System;
using System.Collections.Generic;

namespace DynamicsCrm.DevKit.Shared.ConnectionBuilder.Metadata
{
    /// <summary>
    /// Metadata for FromPac (PAC CLI Profile) authentication.
    /// Uses existing PAC CLI authentication profiles instead of entering credentials.
    /// </summary>
    /// <remarks>
    /// Unlike other auth types that use TextBox fields, FromPac uses a ComboBox
    /// to select from available PAC CLI profiles. The URL is retrieved from the
    /// selected profile, so no URL input is needed.
    /// </remarks>
    public class FromPacTypeMetadata : IConnectionTypeMetadata
    {
        public string Type => "FromPac";

        public string DisplayName => "PAC CLI Profile";

        public string Description => "Use existing PAC CLI authentication profile. Run 'pac auth list' to see available profiles.";

        public bool SupportedInVsix => true;

        /// <summary>
        /// FromPac has no standard text fields - it uses a special ComboBox for profile selection.
        /// The URL comes from the selected profile, so no URL field is needed.
        /// </summary>
        public IReadOnlyList<ConnectionFieldDefinition> Fields => Array.Empty<ConnectionFieldDefinition>();
    }
}
