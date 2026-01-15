using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class CrmConnection
    {
        // ═══════════════════════════════════════════════════════════════════
        // EXISTING PROPERTIES (DO NOT REMOVE - Backward Compatibility)
        // ═══════════════════════════════════════════════════════════════════
        public string Name { get; set; }
        public string Url { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Type { get; set; } = "OAuth";

        // ═══════════════════════════════════════════════════════════════════
        // COMMON PROPERTIES (for OAuth, Interactive, DeviceCode, etc.)
        // ═══════════════════════════════════════════════════════════════════
        /// <summary>
        /// Azure AD Application (Client) ID. Optional for OAuth/Interactive, required for ClientSecret/ClientCertificate.
        /// Default: 51f81489-12ee-4a9e-aaae-a2591f45987d (Microsoft-provided)
        /// </summary>
        public string ClientId { get; set; }

        /// <summary>
        /// Azure AD Tenant ID. Optional for most connection types.
        /// </summary>
        public string TenantId { get; set; }

        // ═══════════════════════════════════════════════════════════════════
        // CLIENT SECRET PROPERTIES
        // ═══════════════════════════════════════════════════════════════════
        /// <summary>
        /// Client secret for service principal authentication.
        /// </summary>
        public string ClientSecret { get; set; }

        // ═══════════════════════════════════════════════════════════════════
        // PAC CLI PROPERTIES
        // ═══════════════════════════════════════════════════════════════════
        /// <summary>
        /// PAC CLI auth profile name or index.
        /// </summary>
        public string PacProfile { get; set; }

        // ═══════════════════════════════════════════════════════════════════
        // METADATA PROPERTIES (for connection tracking)
        // ═══════════════════════════════════════════════════════════════════
        /// <summary>
        /// Last time the connection was tested.
        /// </summary>
        public DateTime? LastTested { get; set; }

        /// <summary>
        /// Result of the last connection test.
        /// </summary>
        public bool? LastTestSuccess { get; set; }

        /// <summary>
        /// Error message from the last failed connection test.
        /// </summary>
        public string LastTestError { get; set; }

        /// <summary>
        /// When the connection was created.
        /// </summary>
        public DateTime? CreatedAt { get; set; }

        /// <summary>
        /// When the connection was last modified.
        /// </summary>
        public DateTime? ModifiedAt { get; set; }
    }
}